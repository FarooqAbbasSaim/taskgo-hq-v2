<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CustomerMvpController extends Controller
{
    public const FORM_TYPE_SCHOOL_PARENT = 'school_parent';
    public const FORM_TYPE_CORPORATE_EMPLOYEE = 'corporate_employee';
    public const FORM_TYPE_SCHOOL_OPT_IN = 'school_opt_in';
    public const FORM_TYPE_CORPORATE_OPT_IN = 'corporate_opt_in';

    public function overview(int $customerId)
    {
        $this->assertCustomer($customerId);
        $scope = $this->customerScope($customerId);

        $schoolCount = 0;
        $companyCount = 0;
        $schoolParticipantCount = 0;
        $corporateParticipantCount = 0;

        if (Schema::hasTable('mvp_school_opt_ins')) {
            $schoolCount = $this->schoolOptInsQuery($scope)->count();
        }
        if (Schema::hasTable('mvp_corporate_opt_ins')) {
            $companyCount = $this->corporateOptInsQuery($scope)->count();
        }
        if (Schema::hasTable('mvp_school_parent_forms')) {
            $schoolParticipantCount = $this->schoolParticipantsQuery($scope)->count();
        }
        if (Schema::hasTable('mvp_corporate_employee_forms')) {
            $corporateParticipantCount = $this->corporateParticipantsQuery($scope)->count();
        }

        return response()->json([
            'success' => true,
            'data' => [
                'customer_id' => $customerId,
                'pharmacy_count' => count($scope['pharmacy_ids']),
                'schools' => $schoolCount,
                'companies' => $companyCount,
                'school_participants' => $schoolParticipantCount,
                'corporate_participants' => $corporateParticipantCount,
                'participants' => $schoolParticipantCount + $corporateParticipantCount,
            ],
        ]);
    }

    public function schools(Request $request, int $customerId)
    {
        $this->assertCustomer($customerId);
        if (! Schema::hasTable('mvp_school_opt_ins')) {
            return response()->json(['success' => true, 'data' => []]);
        }

        $scope = $this->customerScope($customerId);
        $q = trim((string) $request->query('q', ''));

        $rows = $this->schoolOptInsQuery($scope)
            ->when($q !== '', function ($query) use ($q) {
                $like = '%' . $q . '%';
                $query->where(function ($inner) use ($like) {
                    $inner->where('o.school_name', 'like', $like)
                        ->orWhere('o.roll_number', 'like', $like)
                        ->orWhere('o.contact_name', 'like', $like)
                        ->orWhere('o.email', 'like', $like);
                });
            })
            ->orderBy('o.school_name')
            ->limit(200)
            ->get([
                'o.id',
                'o.school_name',
                'o.school_type',
                'o.roll_number',
                'o.contact_name',
                'o.email',
                'o.phone',
                'o.premises_eircode',
                'o.status',
                'o.assigned_pharmacy_id',
                'o.reg_no',
                'o.source_school_registration_id',
                'p.pharmacy_name',
            ])
            ->map(function ($row) use ($scope) {
                $row->participant_count = $this->countSchoolParticipants($scope, $row);
                return $row;
            });

        return response()->json(['success' => true, 'data' => $rows]);
    }

    public function companies(Request $request, int $customerId)
    {
        $this->assertCustomer($customerId);
        if (! Schema::hasTable('mvp_corporate_opt_ins')) {
            return response()->json(['success' => true, 'data' => []]);
        }

        $scope = $this->customerScope($customerId);
        $q = trim((string) $request->query('q', ''));

        $rows = $this->corporateOptInsQuery($scope)
            ->when($q !== '', function ($query) use ($q) {
                $like = '%' . $q . '%';
                $query->where(function ($inner) use ($like) {
                    $inner->where('o.company_name', 'like', $like)
                        ->orWhere('o.cro_number', 'like', $like)
                        ->orWhere('o.contact_name', 'like', $like)
                        ->orWhere('o.email', 'like', $like);
                });
            })
            ->orderBy('o.company_name')
            ->limit(200)
            ->get([
                'o.id',
                'o.company_name',
                'o.cro_number',
                'o.contact_name',
                'o.email',
                'o.phone',
                'o.premises_eircode',
                'o.status',
                'o.assigned_pharmacy_id',
                'o.reg_no',
                'p.pharmacy_name',
            ])
            ->map(function ($row) use ($scope) {
                $row->participant_count = $this->countCorporateParticipants($scope, $row);
                return $row;
            });

        return response()->json(['success' => true, 'data' => $rows]);
    }

    public function participants(Request $request, int $customerId)
    {
        $this->assertCustomer($customerId);
        $scope = $this->customerScope($customerId);
        $q = trim((string) $request->query('q', ''));
        $type = trim((string) $request->query('type', 'all'));
        $schoolId = (int) $request->query('school_id', 0);
        $companyId = (int) $request->query('company_id', 0);

        $items = collect();

        if ($companyId <= 0 && $type !== 'corporate' && Schema::hasTable('mvp_school_parent_forms')) {
            $schoolQuery = $this->schoolParticipantsQuery($scope);
            if ($schoolId > 0) {
                $school = $this->findSchoolOptIn($customerId, $schoolId);
                if (! $school) {
                    return response()->json(['success' => false, 'message' => 'School not found for this customer.'], 404);
                }
                $schoolQuery->where(function ($query) use ($school) {
                    if (! empty($school->source_school_registration_id)) {
                        $query->where('f.school_registration_id', (int) $school->source_school_registration_id);
                    } else {
                        $query->where('so.id', (int) $school->id);
                    }
                });
            }

            $schoolRows = $schoolQuery
                ->orderByDesc('f.id')
                ->limit(500)
                ->get([
                    'f.id',
                    'f.payload',
                    'f.suitability',
                    'f.vaccination_outcome',
                    'f.status',
                    'f.reg_no',
                    'f.school_roll_number',
                    'f.source_parent_consent_id',
                    'so.id as school_opt_in_id',
                    'so.school_name',
                    'p.pharmacy_name',
                ]);

            foreach ($schoolRows as $row) {
                $reg = $this->schoolRegistrationFromPayload($this->decodePayload($row->payload));
                $item = [
                    'id' => (int) $row->id,
                    'type' => 'school_parent',
                    'school_id' => (int) ($row->school_opt_in_id ?? 0) ?: null,
                    'participant_name' => trim(($reg['child_first_name'] ?? '') . ' ' . ($reg['child_last_name'] ?? '')),
                    'dob' => $reg['child_dob'] ?? null,
                    'org_name' => $row->school_name,
                    'pharmacy_name' => $row->pharmacy_name,
                    'suitability' => $row->suitability,
                    'vaccination_outcome' => $row->vaccination_outcome,
                    'status' => $row->status,
                    'reg_no' => $row->reg_no,
                ];
                if ($q === '' || $this->participantMatchesSearch($item, $q, $reg)) {
                    $items->push($item);
                }
            }
        }

        if ($schoolId <= 0 && $type !== 'school' && Schema::hasTable('mvp_corporate_employee_forms')) {
            $corpQuery = $this->corporateParticipantsQuery($scope);
            if ($companyId > 0) {
                $company = $this->findCorporateOptIn($customerId, $companyId);
                if (! $company) {
                    return response()->json(['success' => false, 'message' => 'Company not found for this customer.'], 404);
                }
                $corpQuery->where(function ($query) use ($company) {
                    $query->where('co.id', (int) $company->id);
                    if (! empty($company->cro_number) && ! empty($company->reg_no)) {
                        $query->orWhere(function ($inner) use ($company) {
                            $inner->where('f.cro_number', $company->cro_number)
                                ->where('f.reg_no', $company->reg_no);
                        });
                    }
                });
            }

            $corpRows = $corpQuery
                ->orderByDesc('f.id')
                ->limit(500)
                ->get([
                    'f.id',
                    'f.payload',
                    'f.suitability',
                    'f.vaccination_outcome',
                    'f.status',
                    'f.reg_no',
                    'co.id as company_opt_in_id',
                    DB::raw('COALESCE(co.company_name, f.company_name) as company_name'),
                    'p.pharmacy_name',
                ]);

            foreach ($corpRows as $row) {
                $details = $this->corporateDetailsFromPayload($this->decodePayload($row->payload));
                $item = [
                    'id' => (int) $row->id,
                    'type' => 'corporate_employee',
                    'company_id' => (int) ($row->company_opt_in_id ?? 0) ?: null,
                    'participant_name' => trim(($details['employee_first_name'] ?? '') . ' ' . ($details['employee_last_name'] ?? '')),
                    'dob' => $details['employee_dob'] ?? null,
                    'org_name' => $row->company_name ?: ($details['company_name'] ?? null),
                    'pharmacy_name' => $row->pharmacy_name,
                    'suitability' => $row->suitability,
                    'vaccination_outcome' => $row->vaccination_outcome,
                    'status' => $row->status,
                    'reg_no' => $row->reg_no,
                ];
                if ($q === '' || $this->participantMatchesSearch($item, $q, $details)) {
                    $items->push($item);
                }
            }
        }

        $sorted = $items->sortByDesc('id')->values()->take(200);

        return response()->json(['success' => true, 'data' => $sorted]);
    }

    public function showSchool(int $customerId, int $id)
    {
        $this->assertCustomer($customerId);
        $row = $this->findSchoolOptIn($customerId, $id);
        if (! $row) {
            return response()->json(['success' => false, 'message' => 'School not found for this customer.'], 404);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'id' => (int) $row->id,
                'entity_type' => 'school',
                'school_name' => $row->school_name,
                'school_type' => $row->school_type,
                'roll_number' => $row->roll_number,
                'contact_name' => $row->contact_name,
                'email' => $row->email,
                'phone' => $row->phone,
                'premises_eircode' => $row->premises_eircode,
                'status' => $row->status,
                'pharmacy_name' => $row->pharmacy_name ?? null,
            ],
            'history' => $this->historyFor(self::FORM_TYPE_SCHOOL_OPT_IN, (int) $row->id),
            'participants' => $this->participantsForSchool($customerId, $row),
        ]);
    }

    public function showCompany(int $customerId, int $id)
    {
        $this->assertCustomer($customerId);
        $row = $this->findCorporateOptIn($customerId, $id);
        if (! $row) {
            return response()->json(['success' => false, 'message' => 'Company not found for this customer.'], 404);
        }

        return response()->json([
            'success' => true,
            'data' => [
                'id' => (int) $row->id,
                'entity_type' => 'company',
                'company_name' => $row->company_name,
                'cro_number' => $row->cro_number,
                'contact_name' => $row->contact_name,
                'email' => $row->email,
                'phone' => $row->phone,
                'premises_eircode' => $row->premises_eircode,
                'status' => $row->status,
                'pharmacy_name' => $row->pharmacy_name ?? null,
            ],
            'history' => $this->historyFor(self::FORM_TYPE_CORPORATE_OPT_IN, (int) $row->id),
            'participants' => $this->participantsForCompany($customerId, $row),
        ]);
    }

    public function showParticipant(int $customerId, string $type, int $id)
    {
        $this->assertCustomer($customerId);

        if ($type === 'school_parent') {
            $row = $this->findSchoolParticipant($customerId, $id);
            if (! $row) {
                return response()->json(['success' => false, 'message' => 'Participant not found for this customer.'], 404);
            }
            $reg = $this->schoolRegistrationFromPayload($this->decodePayload($row->payload));

            return response()->json([
                'success' => true,
                'data' => [
                    'id' => (int) $row->id,
                    'entity_type' => 'school_parent',
                    'org_name' => $row->school_name,
                    'pharmacy_name' => $row->pharmacy_name,
                    'suitability' => $row->suitability,
                    'vaccination_outcome' => $row->vaccination_outcome,
                    'child_first_name' => $reg['child_first_name'] ?? '',
                    'child_last_name' => $reg['child_last_name'] ?? '',
                    'child_dob' => $reg['child_dob'] ?? '',
                    'parent_full_name' => $reg['parent_full_name'] ?? '',
                    'parent_email' => $reg['parent_email'] ?? '',
                    'parent_contact_number' => $reg['parent_contact_number'] ?? '',
                ],
                'history' => $this->historyFor(self::FORM_TYPE_SCHOOL_PARENT, (int) $row->id),
            ]);
        }

        if ($type === 'corporate_employee') {
            $row = $this->findCorporateParticipant($customerId, $id);
            if (! $row) {
                return response()->json(['success' => false, 'message' => 'Participant not found for this customer.'], 404);
            }
            $details = $this->corporateDetailsFromPayload($this->decodePayload($row->payload));

            return response()->json([
                'success' => true,
                'data' => [
                    'id' => (int) $row->id,
                    'entity_type' => 'corporate_employee',
                    'org_name' => $row->company_name,
                    'pharmacy_name' => $row->pharmacy_name,
                    'suitability' => $row->suitability,
                    'vaccination_outcome' => $row->vaccination_outcome,
                    'employee_first_name' => $details['employee_first_name'] ?? '',
                    'employee_last_name' => $details['employee_last_name'] ?? '',
                    'employee_dob' => $details['employee_dob'] ?? '',
                    'email' => $details['email'] ?? '',
                    'phone' => $details['phone'] ?? '',
                ],
                'history' => $this->historyFor(self::FORM_TYPE_CORPORATE_EMPLOYEE, (int) $row->id),
            ]);
        }

        return response()->json(['success' => false, 'message' => 'Invalid participant type.'], 422);
    }

    public function updateSchool(Request $request, int $customerId, int $id)
    {
        $this->assertCustomer($customerId);
        $row = $this->findSchoolOptIn($customerId, $id);
        if (! $row) {
            return response()->json(['success' => false, 'message' => 'School not found for this customer.'], 404);
        }

        $data = $request->validate([
            'school_name' => ['required', 'string', 'max:255'],
            'contact_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:32'],
            'premises_eircode' => ['required', 'string', 'max:16'],
            'roll_number' => ['nullable', 'string', 'max:64'],
            'edit_reason' => ['required', 'string', 'max:1000'],
        ]);

        $before = [
            'school_name' => (string) $row->school_name,
            'contact_name' => (string) $row->contact_name,
            'email' => (string) $row->email,
            'phone' => (string) $row->phone,
            'premises_eircode' => (string) $row->premises_eircode,
            'roll_number' => (string) ($row->roll_number ?? ''),
        ];
        $after = [
            'school_name' => trim($data['school_name']),
            'contact_name' => trim($data['contact_name']),
            'email' => trim($data['email']),
            'phone' => trim($data['phone']),
            'premises_eircode' => trim($data['premises_eircode']),
            'roll_number' => trim((string) ($data['roll_number'] ?? '')),
        ];

        if ($before === $after) {
            return response()->json(['success' => true, 'message' => 'No changes to save.', 'data' => $before]);
        }

        DB::transaction(function () use ($row, $after, $before, $data, $customerId) {
            DB::table('mvp_school_opt_ins')->where('id', $row->id)->update(array_merge($after, [
                'updated_at' => now(),
            ]));

            if (! empty($row->source_school_registration_id) && Schema::hasTable('school_registrations')) {
                $sourceUpdate = array_filter([
                    'school_name' => $after['school_name'] ?? null,
                    'contact_name' => $after['contact_name'] ?? null,
                    'email' => $after['email'] ?? null,
                    'phone' => $after['phone'] ?? null,
                    'premises_eircode' => $after['premises_eircode'] ?? null,
                    'roll_number' => $after['roll_number'] ?? null,
                    'updated_at' => now(),
                ], fn ($v) => $v !== null);
                // Only update columns that exist
                $cols = Schema::getColumnListing('school_registrations');
                $sourceUpdate = array_intersect_key($sourceUpdate, array_flip($cols));
                if ($sourceUpdate !== []) {
                    DB::table('school_registrations')
                        ->where('id', $row->source_school_registration_id)
                        ->update($sourceUpdate);
                }
            }

            $this->recordHistory(self::FORM_TYPE_SCHOOL_OPT_IN, (int) $row->id, $customerId, $data['edit_reason'], $before, $after);
        });

        return response()->json([
            'success' => true,
            'message' => 'School details updated.',
            'data' => $after,
            'history' => $this->historyFor(self::FORM_TYPE_SCHOOL_OPT_IN, (int) $row->id),
        ]);
    }

    public function updateCompany(Request $request, int $customerId, int $id)
    {
        $this->assertCustomer($customerId);
        $row = $this->findCorporateOptIn($customerId, $id);
        if (! $row) {
            return response()->json(['success' => false, 'message' => 'Company not found for this customer.'], 404);
        }

        $data = $request->validate([
            'company_name' => ['required', 'string', 'max:255'],
            'contact_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:32'],
            'premises_eircode' => ['required', 'string', 'max:16'],
            'cro_number' => ['nullable', 'string', 'max:64'],
            'edit_reason' => ['required', 'string', 'max:1000'],
        ]);

        $before = [
            'company_name' => (string) $row->company_name,
            'contact_name' => (string) $row->contact_name,
            'email' => (string) $row->email,
            'phone' => (string) $row->phone,
            'premises_eircode' => (string) $row->premises_eircode,
            'cro_number' => (string) ($row->cro_number ?? ''),
        ];
        $after = [
            'company_name' => trim($data['company_name']),
            'contact_name' => trim($data['contact_name']),
            'email' => trim($data['email']),
            'phone' => trim($data['phone']),
            'premises_eircode' => trim($data['premises_eircode']),
            'cro_number' => trim((string) ($data['cro_number'] ?? '')),
        ];

        if ($before === $after) {
            return response()->json(['success' => true, 'message' => 'No changes to save.', 'data' => $before]);
        }

        DB::transaction(function () use ($row, $after, $before, $data, $customerId) {
            DB::table('mvp_corporate_opt_ins')->where('id', $row->id)->update(array_merge($after, [
                'updated_at' => now(),
            ]));
            $this->recordHistory(self::FORM_TYPE_CORPORATE_OPT_IN, (int) $row->id, $customerId, $data['edit_reason'], $before, $after);
        });

        return response()->json([
            'success' => true,
            'message' => 'Company details updated.',
            'data' => $after,
            'history' => $this->historyFor(self::FORM_TYPE_CORPORATE_OPT_IN, (int) $row->id),
        ]);
    }

    public function updateParticipant(Request $request, int $customerId, string $type, int $id)
    {
        $this->assertCustomer($customerId);

        if ($type === 'school_parent') {
            return $this->updateSchoolParticipant($request, $customerId, $id);
        }
        if ($type === 'corporate_employee') {
            return $this->updateCorporateParticipant($request, $customerId, $id);
        }

        return response()->json(['success' => false, 'message' => 'Invalid participant type.'], 422);
    }

    private function updateSchoolParticipant(Request $request, int $customerId, int $id)
    {
        $row = $this->findSchoolParticipant($customerId, $id);
        if (! $row) {
            return response()->json(['success' => false, 'message' => 'Participant not found for this customer.'], 404);
        }

        $data = $request->validate([
            'child_first_name' => ['required', 'string', 'max:255'],
            'child_last_name' => ['required', 'string', 'max:255'],
            'child_dob' => ['required', 'date_format:Y-m-d'],
            'parent_full_name' => ['nullable', 'string', 'max:255'],
            'parent_email' => ['nullable', 'email', 'max:255'],
            'parent_contact_number' => ['nullable', 'string', 'max:40'],
            'edit_reason' => ['required', 'string', 'max:1000'],
        ]);

        $payload = $this->decodePayload($row->payload);
        $reg = $this->schoolRegistrationFromPayload($payload);

        $before = [
            'child_first_name' => (string) ($reg['child_first_name'] ?? ''),
            'child_last_name' => (string) ($reg['child_last_name'] ?? ''),
            'child_dob' => (string) ($reg['child_dob'] ?? ''),
            'parent_full_name' => (string) ($reg['parent_full_name'] ?? ''),
            'parent_email' => (string) ($reg['parent_email'] ?? ''),
            'parent_contact_number' => (string) ($reg['parent_contact_number'] ?? ''),
        ];
        $after = [
            'child_first_name' => trim($data['child_first_name']),
            'child_last_name' => trim($data['child_last_name']),
            'child_dob' => $data['child_dob'],
            'parent_full_name' => trim((string) ($data['parent_full_name'] ?? '')),
            'parent_email' => trim((string) ($data['parent_email'] ?? '')),
            'parent_contact_number' => trim((string) ($data['parent_contact_number'] ?? '')),
        ];

        if ($before === $after) {
            return response()->json(['success' => true, 'message' => 'No changes to save.', 'data' => $before]);
        }

        if (! is_array($payload['context'] ?? null)) {
            $payload['context'] = [];
        }
        $payload['context']['registration'] = array_merge((array) ($payload['context']['registration'] ?? []), $after);
        if (! empty($payload['original_input']['fields']) && is_array($payload['original_input']['fields'])) {
            foreach (['child_first_name', 'child_last_name', 'child_dob', 'parent_full_name', 'parent_email', 'parent_contact_number'] as $field) {
                if (array_key_exists($field, $payload['original_input']['fields'])) {
                    $payload['original_input']['fields'][$field] = $after[$field];
                }
            }
        }

        DB::transaction(function () use ($row, $payload, $before, $after, $data, $customerId) {
            DB::table('mvp_school_parent_forms')->where('id', $row->id)->update([
                'payload' => json_encode($payload),
                'updated_at' => now(),
            ]);

            if (! empty($row->source_parent_consent_id) && Schema::hasTable('school_parent_consents')) {
                $consent = DB::table('school_parent_consents')->where('id', $row->source_parent_consent_id)->first();
                if ($consent) {
                    $cp = $this->decodePayload($consent->payload ?? null);
                    if (! is_array($cp['context'] ?? null)) {
                        $cp['context'] = [];
                    }
                    $cp['context']['registration'] = array_merge((array) ($cp['context']['registration'] ?? []), $after);
                    DB::table('school_parent_consents')->where('id', $consent->id)->update([
                        'payload' => json_encode($cp),
                        'updated_at' => now(),
                    ]);
                }
            }

            $this->recordHistory(self::FORM_TYPE_SCHOOL_PARENT, (int) $row->id, $customerId, $data['edit_reason'], $before, $after);
        });

        return response()->json([
            'success' => true,
            'message' => 'Participant details updated.',
            'data' => $after,
            'history' => $this->historyFor(self::FORM_TYPE_SCHOOL_PARENT, (int) $row->id),
        ]);
    }

    private function updateCorporateParticipant(Request $request, int $customerId, int $id)
    {
        $row = $this->findCorporateParticipant($customerId, $id);
        if (! $row) {
            return response()->json(['success' => false, 'message' => 'Participant not found for this customer.'], 404);
        }

        $data = $request->validate([
            'employee_first_name' => ['required', 'string', 'max:255'],
            'employee_last_name' => ['required', 'string', 'max:255'],
            'employee_dob' => ['nullable', 'date_format:Y-m-d'],
            'email' => ['nullable', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:40'],
            'edit_reason' => ['required', 'string', 'max:1000'],
        ]);

        $payload = $this->decodePayload($row->payload);
        $details = $this->corporateDetailsFromPayload($payload);

        $before = [
            'employee_first_name' => (string) ($details['employee_first_name'] ?? ''),
            'employee_last_name' => (string) ($details['employee_last_name'] ?? ''),
            'employee_dob' => (string) ($details['employee_dob'] ?? ''),
            'email' => (string) ($details['email'] ?? ''),
            'phone' => (string) ($details['phone'] ?? ''),
        ];
        $after = [
            'employee_first_name' => trim($data['employee_first_name']),
            'employee_last_name' => trim($data['employee_last_name']),
            'employee_dob' => (string) ($data['employee_dob'] ?? ''),
            'email' => trim((string) ($data['email'] ?? '')),
            'phone' => trim((string) ($data['phone'] ?? '')),
        ];

        if ($before === $after) {
            return response()->json(['success' => true, 'message' => 'No changes to save.', 'data' => $before]);
        }

        if (! is_array($payload['context'] ?? null)) {
            $payload['context'] = [];
        }
        if (! is_array($payload['context']['details'] ?? null)) {
            $payload['context']['details'] = [];
        }
        $payload['context']['details'] = array_merge($payload['context']['details'], $after);
        $payload['context']['details']['employee_name'] = trim($after['employee_first_name'] . ' ' . $after['employee_last_name']);

        DB::transaction(function () use ($row, $payload, $before, $after, $data, $customerId) {
            DB::table('mvp_corporate_employee_forms')->where('id', $row->id)->update([
                'payload' => json_encode($payload),
                'updated_at' => now(),
            ]);
            $this->recordHistory(self::FORM_TYPE_CORPORATE_EMPLOYEE, (int) $row->id, $customerId, $data['edit_reason'], $before, $after);
        });

        return response()->json([
            'success' => true,
            'message' => 'Participant details updated.',
            'data' => $after,
            'history' => $this->historyFor(self::FORM_TYPE_CORPORATE_EMPLOYEE, (int) $row->id),
        ]);
    }

    /**
     * @return array{pharmacy_ids: list<int>, reg_nos: list<string>, subscription_ids: list<int>}
     */
    private function customerScope(int $customerId): array
    {
        $pharmacyIds = DB::table('pharmacies')
            ->where('created_by', $customerId)
            ->pluck('id')
            ->map(fn ($id) => (int) $id)
            ->all();

        $subscriptionIds = [];
        $regNos = [];
        if (Schema::hasTable('pharmacy_subscriptions')) {
            $subs = DB::table('pharmacy_subscriptions')
                ->where('user_id', $customerId)
                ->get(['id', 'registration_number']);
            foreach ($subs as $sub) {
                $subscriptionIds[] = (int) $sub->id;
                $reg = trim((string) ($sub->registration_number ?? ''));
                if ($reg !== '') {
                    $regNos[] = $reg;
                }
            }
        }

        return [
            'pharmacy_ids' => $pharmacyIds,
            'reg_nos' => array_values(array_unique($regNos)),
            'subscription_ids' => $subscriptionIds,
        ];
    }

    private function schoolOptInsQuery(array $scope)
    {
        $query = DB::table('mvp_school_opt_ins as o')
            ->leftJoin('pharmacies as p', 'p.id', '=', 'o.assigned_pharmacy_id');

        return $this->applyCustomerScope($query, $scope);
    }

    private function corporateOptInsQuery(array $scope)
    {
        $query = DB::table('mvp_corporate_opt_ins as o')
            ->leftJoin('pharmacies as p', 'p.id', '=', 'o.assigned_pharmacy_id');

        return $this->applyCustomerScope($query, $scope);
    }

    private function schoolParticipantsQuery(array $scope)
    {
        $query = DB::table('mvp_school_parent_forms as f')
            ->leftJoin('mvp_school_opt_ins as so', 'so.source_school_registration_id', '=', 'f.school_registration_id')
            ->leftJoin('pharmacies as p', 'p.id', '=', 'so.assigned_pharmacy_id');

        return $query->where(function ($q) use ($scope) {
            if ($scope['pharmacy_ids'] !== []) {
                $q->orWhereIn('so.assigned_pharmacy_id', $scope['pharmacy_ids']);
            }
            if ($scope['reg_nos'] !== []) {
                $q->orWhereIn('f.reg_no', $scope['reg_nos']);
                $q->orWhereIn('so.reg_no', $scope['reg_nos']);
            }
            if ($scope['subscription_ids'] !== []) {
                $q->orWhereIn('f.pharmacy_subscription_id', $scope['subscription_ids']);
            }
            if ($scope['pharmacy_ids'] === [] && $scope['reg_nos'] === [] && $scope['subscription_ids'] === []) {
                $q->whereRaw('1 = 0');
            }
        });
    }

    private function corporateParticipantsQuery(array $scope)
    {
        $query = DB::table('mvp_corporate_employee_forms as f')
            ->leftJoin('mvp_corporate_opt_ins as co', function ($join) {
                $join->on('co.cro_number', '=', 'f.cro_number')
                    ->on('co.reg_no', '=', 'f.reg_no');
            })
            ->leftJoin('pharmacies as p', 'p.id', '=', 'co.assigned_pharmacy_id');

        return $query->where(function ($q) use ($scope) {
            if ($scope['pharmacy_ids'] !== []) {
                $q->orWhereIn('co.assigned_pharmacy_id', $scope['pharmacy_ids']);
            }
            if ($scope['reg_nos'] !== []) {
                $q->orWhereIn('f.reg_no', $scope['reg_nos']);
            }
            if ($scope['subscription_ids'] !== []) {
                $q->orWhereIn('f.pharmacy_subscription_id', $scope['subscription_ids']);
            }
            if ($scope['pharmacy_ids'] === [] && $scope['reg_nos'] === [] && $scope['subscription_ids'] === []) {
                $q->whereRaw('1 = 0');
            }
        });
    }

    private function applyCustomerScope($query, array $scope)
    {
        return $query->where(function ($q) use ($scope) {
            if ($scope['pharmacy_ids'] !== []) {
                $q->orWhereIn('o.assigned_pharmacy_id', $scope['pharmacy_ids']);
            }
            if ($scope['reg_nos'] !== []) {
                $q->orWhereIn('o.reg_no', $scope['reg_nos']);
            }
            if ($scope['subscription_ids'] !== []) {
                $q->orWhereIn('o.pharmacy_subscription_id', $scope['subscription_ids']);
            }
            if ($scope['pharmacy_ids'] === [] && $scope['reg_nos'] === [] && $scope['subscription_ids'] === []) {
                $q->whereRaw('1 = 0');
            }
        });
    }

    private function findSchoolOptIn(int $customerId, int $id): ?object
    {
        if (! Schema::hasTable('mvp_school_opt_ins')) {
            return null;
        }

        return $this->schoolOptInsQuery($this->customerScope($customerId))
            ->where('o.id', $id)
            ->first([
                'o.*',
                'p.pharmacy_name',
            ]);
    }

    private function findCorporateOptIn(int $customerId, int $id): ?object
    {
        if (! Schema::hasTable('mvp_corporate_opt_ins')) {
            return null;
        }

        return $this->corporateOptInsQuery($this->customerScope($customerId))
            ->where('o.id', $id)
            ->first([
                'o.*',
                'p.pharmacy_name',
            ]);
    }

    private function findSchoolParticipant(int $customerId, int $id): ?object
    {
        if (! Schema::hasTable('mvp_school_parent_forms')) {
            return null;
        }

        return $this->schoolParticipantsQuery($this->customerScope($customerId))
            ->where('f.id', $id)
            ->first([
                'f.*',
                'so.school_name',
                'p.pharmacy_name',
            ]);
    }

    private function findCorporateParticipant(int $customerId, int $id): ?object
    {
        if (! Schema::hasTable('mvp_corporate_employee_forms')) {
            return null;
        }

        return $this->corporateParticipantsQuery($this->customerScope($customerId))
            ->where('f.id', $id)
            ->first([
                'f.*',
                DB::raw('COALESCE(co.company_name, f.company_name) as company_name'),
                'p.pharmacy_name',
            ]);
    }

    private function countSchoolParticipants(array $scope, object $school): int
    {
        if (! Schema::hasTable('mvp_school_parent_forms')) {
            return 0;
        }

        $query = $this->schoolParticipantsQuery($scope);
        if (! empty($school->source_school_registration_id)) {
            $query->where('f.school_registration_id', (int) $school->source_school_registration_id);
        } else {
            $query->where('so.id', (int) $school->id);
        }

        return (int) $query->distinct('f.id')->count('f.id');
    }

    private function countCorporateParticipants(array $scope, object $company): int
    {
        if (! Schema::hasTable('mvp_corporate_employee_forms')) {
            return 0;
        }

        $query = $this->corporateParticipantsQuery($scope)
            ->where(function ($q) use ($company) {
                $q->where('co.id', (int) $company->id);
                if (! empty($company->cro_number) && ! empty($company->reg_no)) {
                    $q->orWhere(function ($inner) use ($company) {
                        $inner->where('f.cro_number', $company->cro_number)
                            ->where('f.reg_no', $company->reg_no);
                    });
                }
            });

        return (int) $query->distinct('f.id')->count('f.id');
    }

    /**
     * @return list<array<string, mixed>>
     */
    private function participantsForSchool(int $customerId, object $school): array
    {
        $request = Request::create('/', 'GET', ['school_id' => (int) $school->id, 'type' => 'school']);
        $response = $this->participants($request, $customerId);
        $payload = $response->getData(true);

        return $payload['data'] ?? [];
    }

    /**
     * @return list<array<string, mixed>>
     */
    private function participantsForCompany(int $customerId, object $company): array
    {
        $request = Request::create('/', 'GET', ['company_id' => (int) $company->id, 'type' => 'corporate']);
        $response = $this->participants($request, $customerId);
        $payload = $response->getData(true);

        return $payload['data'] ?? [];
    }

    private function assertCustomer(int $customerId): void
    {
        $exists = DB::table('users')->where('id', $customerId)->exists();
        if (! $exists) {
            abort(404, 'Customer not found.');
        }
    }

    /**
     * @param  array<string, mixed>|null  $payload
     * @return array<string, mixed>
     */
    private function decodePayload($payload): array
    {
        if (is_array($payload)) {
            return $payload;
        }
        if (is_string($payload) && $payload !== '') {
            $decoded = json_decode($payload, true);

            return is_array($decoded) ? $decoded : [];
        }

        return [];
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    private function schoolRegistrationFromPayload(array $payload): array
    {
        $ctx = (array) ($payload['context'] ?? []);

        return (array) ($ctx['registration'] ?? []);
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    private function corporateDetailsFromPayload(array $payload): array
    {
        $ctx = (array) ($payload['context'] ?? []);
        $details = (array) ($ctx['details'] ?? []);
        if (($details['employee_first_name'] ?? '') === '' && ($details['employee_name'] ?? '') !== '') {
            $parts = preg_split('/\s+/', trim((string) $details['employee_name']), 2) ?: [];
            $details['employee_first_name'] = $parts[0] ?? '';
            $details['employee_last_name'] = $parts[1] ?? '';
        }

        return $details;
    }

    /**
     * @param  array<string, mixed>  $item
     * @param  array<string, mixed>  $extra
     */
    private function participantMatchesSearch(array $item, string $q, array $extra): bool
    {
        $haystack = strtolower(implode(' ', array_filter([
            $item['participant_name'] ?? '',
            $item['org_name'] ?? '',
            $item['dob'] ?? '',
            $extra['parent_email'] ?? '',
            $extra['email'] ?? '',
            $extra['child_last_name'] ?? '',
            $extra['employee_last_name'] ?? '',
        ])));

        return str_contains($haystack, strtolower($q));
    }

    /**
     * @param  array<string, mixed>  $before
     * @param  array<string, mixed>  $after
     */
    private function recordHistory(string $formType, int $formId, int $customerId, string $reason, array $before, array $after): void
    {
        if (! Schema::hasTable('mvp_form_edit_histories')) {
            return;
        }

        $hqUser = Auth::guard('hq')->user();
        $hqLabel = $hqUser
            ? sprintf('HQ:%s #%d <%s>', $hqUser->name ?? 'Unknown', (int) $hqUser->id, $hqUser->email ?? '')
            : 'HQ:unknown';

        DB::table('mvp_form_edit_histories')->insert([
            'form_type' => $formType,
            'form_id' => $formId,
            'edited_by' => $customerId,
            'edit_reason' => '[' . $hqLabel . '] ' . trim($reason),
            'before_snapshot' => json_encode($before),
            'after_snapshot' => json_encode($after),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    /**
     * @return list<array<string, mixed>>
     */
    private function historyFor(string $formType, int $formId): array
    {
        if (! Schema::hasTable('mvp_form_edit_histories')) {
            return [];
        }

        return DB::table('mvp_form_edit_histories')
            ->where('form_type', $formType)
            ->where('form_id', $formId)
            ->orderByDesc('id')
            ->limit(25)
            ->get()
            ->map(function ($row) {
                $before = json_decode((string) $row->before_snapshot, true) ?: [];
                $after = json_decode((string) $row->after_snapshot, true) ?: [];
                $changes = [];
                foreach ($after as $key => $newValue) {
                    $oldValue = $before[$key] ?? null;
                    if ((string) $oldValue !== (string) $newValue) {
                        $changes[] = [
                            'field' => $key,
                            'before' => $oldValue,
                            'after' => $newValue,
                        ];
                    }
                }

                return [
                    'id' => (int) $row->id,
                    'edit_reason' => $row->edit_reason,
                    'created_at' => $row->created_at
                        ? Carbon::parse($row->created_at)->toIso8601String()
                        : null,
                    'changes' => $changes,
                ];
            })
            ->all();
    }
}
