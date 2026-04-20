var m4=Object.defineProperty;var M4=(e,t,a)=>t in e?m4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var O=(e,t,a)=>M4(e,typeof t!="symbol"?t+"":t,a);import{a as v4,g as y4}from"./_commonjsHelpers-D6-XlEtG.js";import{P as x4}from"./index-BEKk9TLb.js";import{r as b4,a as w4,b as _4,i as Gi}from"./isObjectLike-mqpIr8Ea.js";var Bi={exports:{}};const A4=v4(x4);/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var C4=Bi.exports,co;function E4(){return co||(co=1,function(e,t){(function(a,i){e.exports=i(A4)})(C4,function(a){function i(y){const l=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(y){for(const f in y)if(f!=="default"){const x=Object.getOwnPropertyDescriptor(y,f);Object.defineProperty(l,f,x.get?x:{enumerable:!0,get:()=>y[f]})}}return l.default=y,Object.freeze(l)}const n=i(a),s=new Map,o={set(y,l,f){s.has(y)||s.set(y,new Map);const x=s.get(y);if(!x.has(l)&&x.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(x.keys())[0]}.`);return}x.set(l,f)},get(y,l){return s.has(y)&&s.get(y).get(l)||null},remove(y,l){if(!s.has(y))return;const f=s.get(y);f.delete(l),f.size===0&&s.delete(y)}},r=1e6,h=1e3,c="transitionend",d=y=>(y&&window.CSS&&window.CSS.escape&&(y=y.replace(/#([^\s"#']+)/g,(l,f)=>`#${CSS.escape(f)}`)),y),p=y=>y==null?`${y}`:Object.prototype.toString.call(y).match(/\s([a-z]+)/i)[1].toLowerCase(),u=y=>{do y+=Math.floor(Math.random()*r);while(document.getElementById(y));return y},g=y=>{if(!y)return 0;let{transitionDuration:l,transitionDelay:f}=window.getComputedStyle(y);const x=Number.parseFloat(l),C=Number.parseFloat(f);return!x&&!C?0:(l=l.split(",")[0],f=f.split(",")[0],(Number.parseFloat(l)+Number.parseFloat(f))*h)},M=y=>{y.dispatchEvent(new Event(c))},m=y=>!y||typeof y!="object"?!1:(typeof y.jquery<"u"&&(y=y[0]),typeof y.nodeType<"u"),v=y=>m(y)?y.jquery?y[0]:y:typeof y=="string"&&y.length>0?document.querySelector(d(y)):null,b=y=>{if(!m(y)||y.getClientRects().length===0)return!1;const l=getComputedStyle(y).getPropertyValue("visibility")==="visible",f=y.closest("details:not([open])");if(!f)return l;if(f!==y){const x=y.closest("summary");if(x&&x.parentNode!==f||x===null)return!1}return l},w=y=>!y||y.nodeType!==Node.ELEMENT_NODE||y.classList.contains("disabled")?!0:typeof y.disabled<"u"?y.disabled:y.hasAttribute("disabled")&&y.getAttribute("disabled")!=="false",S=y=>{if(!document.documentElement.attachShadow)return null;if(typeof y.getRootNode=="function"){const l=y.getRootNode();return l instanceof ShadowRoot?l:null}return y instanceof ShadowRoot?y:y.parentNode?S(y.parentNode):null},k=()=>{},_=y=>{y.offsetHeight},E=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,T=[],H=y=>{document.readyState==="loading"?(T.length||document.addEventListener("DOMContentLoaded",()=>{for(const l of T)l()}),T.push(y)):y()},D=()=>document.documentElement.dir==="rtl",z=y=>{H(()=>{const l=E();if(l){const f=y.NAME,x=l.fn[f];l.fn[f]=y.jQueryInterface,l.fn[f].Constructor=y,l.fn[f].noConflict=()=>(l.fn[f]=x,y.jQueryInterface)}})},R=(y,l=[],f=y)=>typeof y=="function"?y.call(...l):f,$=(y,l,f=!0)=>{if(!f){R(y);return}const C=g(l)+5;let P=!1;const V=({target:F})=>{F===l&&(P=!0,l.removeEventListener(c,V),R(y))};l.addEventListener(c,V),setTimeout(()=>{P||M(l)},C)},nt=(y,l,f,x)=>{const C=y.length;let P=y.indexOf(l);return P===-1?!f&&x?y[C-1]:y[0]:(P+=f?1:-1,x&&(P=(P+C)%C),y[Math.max(0,Math.min(P,C-1))])},vt=/[^.]*(?=\..*)\.|.*/,Y=/\..*/,X=/::\d+$/,J={};let bt=1;const ht={mouseenter:"mouseover",mouseleave:"mouseout"},ce=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ee(y,l){return l&&`${l}::${bt++}`||y.uidEvent||bt++}function Kt(y){const l=Ee(y);return y.uidEvent=l,J[l]=J[l]||{},J[l]}function Se(y,l){return function f(x){return Tn(x,{delegateTarget:y}),f.oneOff&&L.off(y,x.type,l),l.apply(y,[x])}}function Xt(y,l,f){return function x(C){const P=y.querySelectorAll(l);for(let{target:V}=C;V&&V!==this;V=V.parentNode)for(const F of P)if(F===V)return Tn(C,{delegateTarget:V}),x.oneOff&&L.off(y,C.type,l,f),f.apply(V,[C])}}function le(y,l,f=null){return Object.values(y).find(x=>x.callable===l&&x.delegationSelector===f)}function $t(y,l,f){const x=typeof l=="string",C=x?f:l||f;let P=v1(y);return ce.has(P)||(P=y),[x,C,P]}function M1(y,l,f,x,C){if(typeof l!="string"||!y)return;let[P,V,F]=$t(l,f,x);l in ht&&(V=(g4=>function(oa){if(!oa.relatedTarget||oa.relatedTarget!==oa.delegateTarget&&!oa.delegateTarget.contains(oa.relatedTarget))return g4.call(this,oa)})(V));const wt=Kt(y),Vt=wt[F]||(wt[F]={}),lt=le(Vt,V,P?f:null);if(lt){lt.oneOff=lt.oneOff&&C;return}const Wt=Ee(V,l.replace(vt,"")),zt=P?Xt(y,f,V):Se(y,V);zt.delegationSelector=P?f:null,zt.callable=V,zt.oneOff=C,zt.uidEvent=Wt,Vt[Wt]=zt,y.addEventListener(F,zt,P)}function Ln(y,l,f,x,C){const P=le(l[f],x,C);P&&(y.removeEventListener(f,P,!!C),delete l[f][P.uidEvent])}function kd(y,l,f,x){const C=l[f]||{};for(const[P,V]of Object.entries(C))P.includes(x)&&Ln(y,l,f,V.callable,V.delegationSelector)}function v1(y){return y=y.replace(Y,""),ht[y]||y}const L={on(y,l,f,x){M1(y,l,f,x,!1)},one(y,l,f,x){M1(y,l,f,x,!0)},off(y,l,f,x){if(typeof l!="string"||!y)return;const[C,P,V]=$t(l,f,x),F=V!==l,wt=Kt(y),Vt=wt[V]||{},lt=l.startsWith(".");if(typeof P<"u"){if(!Object.keys(Vt).length)return;Ln(y,wt,V,P,C?f:null);return}if(lt)for(const Wt of Object.keys(wt))kd(y,wt,Wt,l.slice(1));for(const[Wt,zt]of Object.entries(Vt)){const bi=Wt.replace(X,"");(!F||l.includes(bi))&&Ln(y,wt,V,zt.callable,zt.delegationSelector)}},trigger(y,l,f){if(typeof l!="string"||!y)return null;const x=E(),C=v1(l),P=l!==C;let V=null,F=!0,wt=!0,Vt=!1;P&&x&&(V=x.Event(l,f),x(y).trigger(V),F=!V.isPropagationStopped(),wt=!V.isImmediatePropagationStopped(),Vt=V.isDefaultPrevented());const lt=Tn(new Event(l,{bubbles:F,cancelable:!0}),f);return Vt&&lt.preventDefault(),wt&&y.dispatchEvent(lt),lt.defaultPrevented&&V&&V.preventDefault(),lt}};function Tn(y,l={}){for(const[f,x]of Object.entries(l))try{y[f]=x}catch{Object.defineProperty(y,f,{configurable:!0,get(){return x}})}return y}function y1(y){if(y==="true")return!0;if(y==="false")return!1;if(y===Number(y).toString())return Number(y);if(y===""||y==="null")return null;if(typeof y!="string")return y;try{return JSON.parse(decodeURIComponent(y))}catch{return y}}function Hn(y){return y.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const Gt={setDataAttribute(y,l,f){y.setAttribute(`data-bs-${Hn(l)}`,f)},removeDataAttribute(y,l){y.removeAttribute(`data-bs-${Hn(l)}`)},getDataAttributes(y){if(!y)return{};const l={},f=Object.keys(y.dataset).filter(x=>x.startsWith("bs")&&!x.startsWith("bsConfig"));for(const x of f){let C=x.replace(/^bs/,"");C=C.charAt(0).toLowerCase()+C.slice(1),l[C]=y1(y.dataset[x])}return l},getDataAttribute(y,l){return y1(y.getAttribute(`data-bs-${Hn(l)}`))}};class _a{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,f){const x=m(f)?Gt.getDataAttribute(f,"config"):{};return{...this.constructor.Default,...typeof x=="object"?x:{},...m(f)?Gt.getDataAttributes(f):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,f=this.constructor.DefaultType){for(const[x,C]of Object.entries(f)){const P=l[x],V=m(P)?"element":p(P);if(!new RegExp(C).test(V))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${x}" provided type "${V}" but expected type "${C}".`)}}}const Ld="5.3.8";class Rt extends _a{constructor(l,f){super(),l=v(l),l&&(this._element=l,this._config=this._getConfig(f),o.set(this._element,this.constructor.DATA_KEY,this))}dispose(){o.remove(this._element,this.constructor.DATA_KEY),L.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,f,x=!0){$(l,f,x)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return o.get(v(l),this.DATA_KEY)}static getOrCreateInstance(l,f={}){return this.getInstance(l)||new this(l,typeof f=="object"?f:null)}static get VERSION(){return Ld}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const Vn=y=>{let l=y.getAttribute("data-bs-target");if(!l||l==="#"){let f=y.getAttribute("href");if(!f||!f.includes("#")&&!f.startsWith("."))return null;f.includes("#")&&!f.startsWith("#")&&(f=`#${f.split("#")[1]}`),l=f&&f!=="#"?f.trim():null}return l?l.split(",").map(f=>d(f)).join(","):null},I={find(y,l=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(l,y))},findOne(y,l=document.documentElement){return Element.prototype.querySelector.call(l,y)},children(y,l){return[].concat(...y.children).filter(f=>f.matches(l))},parents(y,l){const f=[];let x=y.parentNode.closest(l);for(;x;)f.push(x),x=x.parentNode.closest(l);return f},prev(y,l){let f=y.previousElementSibling;for(;f;){if(f.matches(l))return[f];f=f.previousElementSibling}return[]},next(y,l){let f=y.nextElementSibling;for(;f;){if(f.matches(l))return[f];f=f.nextElementSibling}return[]},focusableChildren(y){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(f=>`${f}:not([tabindex^="-"])`).join(",");return this.find(l,y).filter(f=>!w(f)&&b(f))},getSelectorFromElement(y){const l=Vn(y);return l&&I.findOne(l)?l:null},getElementFromSelector(y){const l=Vn(y);return l?I.findOne(l):null},getMultipleElementsFromSelector(y){const l=Vn(y);return l?I.find(l):[]}},ci=(y,l="hide")=>{const f=`click.dismiss${y.EVENT_KEY}`,x=y.NAME;L.on(document,f,`[data-bs-dismiss="${x}"]`,function(C){if(["A","AREA"].includes(this.tagName)&&C.preventDefault(),w(this))return;const P=I.getElementFromSelector(this)||this.closest(`.${x}`);y.getOrCreateInstance(P)[l]()})},Td="alert",x1=".bs.alert",Hd=`close${x1}`,Vd=`closed${x1}`,Pd="fade",Od="show";class Aa extends Rt{static get NAME(){return Td}close(){if(L.trigger(this._element,Hd).defaultPrevented)return;this._element.classList.remove(Od);const f=this._element.classList.contains(Pd);this._queueCallback(()=>this._destroyElement(),this._element,f)}_destroyElement(){this._element.remove(),L.trigger(this._element,Vd),this.dispose()}static jQueryInterface(l){return this.each(function(){const f=Aa.getOrCreateInstance(this);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l](this)}})}}ci(Aa,"close"),z(Aa);const Dd="button",Rd=".bs.button",Id=".data-api",zd="active",b1='[data-bs-toggle="button"]',Bd=`click${Rd}${Id}`;class Ca extends Rt{static get NAME(){return Dd}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(zd))}static jQueryInterface(l){return this.each(function(){const f=Ca.getOrCreateInstance(this);l==="toggle"&&f[l]()})}}L.on(document,Bd,b1,y=>{y.preventDefault();const l=y.target.closest(b1);Ca.getOrCreateInstance(l).toggle()}),z(Ca);const Nd="swipe",Qe=".bs.swipe",Fd=`touchstart${Qe}`,$d=`touchmove${Qe}`,Wd=`touchend${Qe}`,jd=`pointerdown${Qe}`,Ud=`pointerup${Qe}`,qd="touch",Zd="pen",Yd="pointer-event",Kd=40,Xd={endCallback:null,leftCallback:null,rightCallback:null},Gd={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class li extends _a{constructor(l,f){super(),this._element=l,!(!l||!li.isSupported())&&(this._config=this._getConfig(f),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Xd}static get DefaultType(){return Gd}static get NAME(){return Nd}dispose(){L.off(this._element,Qe)}_start(l){if(!this._supportPointerEvents){this._deltaX=l.touches[0].clientX;return}this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX)}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),R(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=Kd)return;const f=l/this._deltaX;this._deltaX=0,f&&R(f>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(L.on(this._element,jd,l=>this._start(l)),L.on(this._element,Ud,l=>this._end(l)),this._element.classList.add(Yd)):(L.on(this._element,Fd,l=>this._start(l)),L.on(this._element,$d,l=>this._move(l)),L.on(this._element,Wd,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType===Zd||l.pointerType===qd)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Qd="carousel",de=".bs.carousel",w1=".data-api",Jd="ArrowLeft",tp="ArrowRight",ep=500,Ea="next",Je="prev",ta="left",di="right",ap=`slide${de}`,Pn=`slid${de}`,ip=`keydown${de}`,np=`mouseenter${de}`,sp=`mouseleave${de}`,op=`dragstart${de}`,rp=`load${de}${w1}`,hp=`click${de}${w1}`,_1="carousel",pi="active",cp="slide",lp="carousel-item-end",dp="carousel-item-start",pp="carousel-item-next",up="carousel-item-prev",A1=".active",C1=".carousel-item",fp=A1+C1,gp=".carousel-item img",mp=".carousel-indicators",Mp="[data-bs-slide], [data-bs-slide-to]",vp='[data-bs-ride="carousel"]',yp={[Jd]:di,[tp]:ta},xp={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},bp={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ea extends Rt{constructor(l,f){super(l,f),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=I.findOne(mp,this._element),this._addEventListeners(),this._config.ride===_1&&this.cycle()}static get Default(){return xp}static get DefaultType(){return bp}static get NAME(){return Qd}next(){this._slide(Ea)}nextWhenVisible(){!document.hidden&&b(this._element)&&this.next()}prev(){this._slide(Je)}pause(){this._isSliding&&M(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){L.one(this._element,Pn,()=>this.cycle());return}this.cycle()}}to(l){const f=this._getItems();if(l>f.length-1||l<0)return;if(this._isSliding){L.one(this._element,Pn,()=>this.to(l));return}const x=this._getItemIndex(this._getActive());if(x===l)return;const C=l>x?Ea:Je;this._slide(C,f[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&L.on(this._element,ip,l=>this._keydown(l)),this._config.pause==="hover"&&(L.on(this._element,np,()=>this.pause()),L.on(this._element,sp,()=>this._maybeEnableCycle())),this._config.touch&&li.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const x of I.find(gp,this._element))L.on(x,op,C=>C.preventDefault());const f={leftCallback:()=>this._slide(this._directionToOrder(ta)),rightCallback:()=>this._slide(this._directionToOrder(di)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),ep+this._config.interval))}};this._swipeHelper=new li(this._element,f)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const f=yp[l.key];f&&(l.preventDefault(),this._slide(this._directionToOrder(f)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const f=I.findOne(A1,this._indicatorsElement);f.classList.remove(pi),f.removeAttribute("aria-current");const x=I.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);x&&(x.classList.add(pi),x.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const f=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=f||this._config.defaultInterval}_slide(l,f=null){if(this._isSliding)return;const x=this._getActive(),C=l===Ea,P=f||nt(this._getItems(),x,C,this._config.wrap);if(P===x)return;const V=this._getItemIndex(P),F=bi=>L.trigger(this._element,bi,{relatedTarget:P,direction:this._orderToDirection(l),from:this._getItemIndex(x),to:V});if(F(ap).defaultPrevented||!x||!P)return;const Vt=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(V),this._activeElement=P;const lt=C?dp:lp,Wt=C?pp:up;P.classList.add(Wt),_(P),x.classList.add(lt),P.classList.add(lt);const zt=()=>{P.classList.remove(lt,Wt),P.classList.add(pi),x.classList.remove(pi,Wt,lt),this._isSliding=!1,F(Pn)};this._queueCallback(zt,x,this._isAnimated()),Vt&&this.cycle()}_isAnimated(){return this._element.classList.contains(cp)}_getActive(){return I.findOne(fp,this._element)}_getItems(){return I.find(C1,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return D()?l===ta?Je:Ea:l===ta?Ea:Je}_orderToDirection(l){return D()?l===Je?ta:di:l===Je?di:ta}static jQueryInterface(l){return this.each(function(){const f=ea.getOrCreateInstance(this,l);if(typeof l=="number"){f.to(l);return}if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}})}}L.on(document,hp,Mp,function(y){const l=I.getElementFromSelector(this);if(!l||!l.classList.contains(_1))return;y.preventDefault();const f=ea.getOrCreateInstance(l),x=this.getAttribute("data-bs-slide-to");if(x){f.to(x),f._maybeEnableCycle();return}if(Gt.getDataAttribute(this,"slide")==="next"){f.next(),f._maybeEnableCycle();return}f.prev(),f._maybeEnableCycle()}),L.on(window,rp,()=>{const y=I.find(vp);for(const l of y)ea.getOrCreateInstance(l)}),z(ea);const wp="collapse",Sa=".bs.collapse",_p=".data-api",Ap=`show${Sa}`,Cp=`shown${Sa}`,Ep=`hide${Sa}`,Sp=`hidden${Sa}`,kp=`click${Sa}${_p}`,On="show",aa="collapse",ui="collapsing",Lp="collapsed",Tp=`:scope .${aa} .${aa}`,Hp="collapse-horizontal",Vp="width",Pp="height",Op=".collapse.show, .collapse.collapsing",Dn='[data-bs-toggle="collapse"]',Dp={parent:null,toggle:!0},Rp={parent:"(null|element)",toggle:"boolean"};class ia extends Rt{constructor(l,f){super(l,f),this._isTransitioning=!1,this._triggerArray=[];const x=I.find(Dn);for(const C of x){const P=I.getSelectorFromElement(C),V=I.find(P).filter(F=>F===this._element);P!==null&&V.length&&this._triggerArray.push(C)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Dp}static get DefaultType(){return Rp}static get NAME(){return wp}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(Op).filter(F=>F!==this._element).map(F=>ia.getOrCreateInstance(F,{toggle:!1}))),l.length&&l[0]._isTransitioning||L.trigger(this._element,Ap).defaultPrevented)return;for(const F of l)F.hide();const x=this._getDimension();this._element.classList.remove(aa),this._element.classList.add(ui),this._element.style[x]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const C=()=>{this._isTransitioning=!1,this._element.classList.remove(ui),this._element.classList.add(aa,On),this._element.style[x]="",L.trigger(this._element,Cp)},V=`scroll${x[0].toUpperCase()+x.slice(1)}`;this._queueCallback(C,this._element,!0),this._element.style[x]=`${this._element[V]}px`}hide(){if(this._isTransitioning||!this._isShown()||L.trigger(this._element,Ep).defaultPrevented)return;const f=this._getDimension();this._element.style[f]=`${this._element.getBoundingClientRect()[f]}px`,_(this._element),this._element.classList.add(ui),this._element.classList.remove(aa,On);for(const C of this._triggerArray){const P=I.getElementFromSelector(C);P&&!this._isShown(P)&&this._addAriaAndCollapsedClass([C],!1)}this._isTransitioning=!0;const x=()=>{this._isTransitioning=!1,this._element.classList.remove(ui),this._element.classList.add(aa),L.trigger(this._element,Sp)};this._element.style[f]="",this._queueCallback(x,this._element,!0)}_isShown(l=this._element){return l.classList.contains(On)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=v(l.parent),l}_getDimension(){return this._element.classList.contains(Hp)?Vp:Pp}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(Dn);for(const f of l){const x=I.getElementFromSelector(f);x&&this._addAriaAndCollapsedClass([f],this._isShown(x))}}_getFirstLevelChildren(l){const f=I.find(Tp,this._config.parent);return I.find(l,this._config.parent).filter(x=>!f.includes(x))}_addAriaAndCollapsedClass(l,f){if(l.length)for(const x of l)x.classList.toggle(Lp,!f),x.setAttribute("aria-expanded",f)}static jQueryInterface(l){const f={};return typeof l=="string"&&/show|hide/.test(l)&&(f.toggle=!1),this.each(function(){const x=ia.getOrCreateInstance(this,f);if(typeof l=="string"){if(typeof x[l]>"u")throw new TypeError(`No method named "${l}"`);x[l]()}})}}L.on(document,kp,Dn,function(y){(y.target.tagName==="A"||y.delegateTarget&&y.delegateTarget.tagName==="A")&&y.preventDefault();for(const l of I.getMultipleElementsFromSelector(this))ia.getOrCreateInstance(l,{toggle:!1}).toggle()}),z(ia);const E1="dropdown",ke=".bs.dropdown",Rn=".data-api",Ip="Escape",S1="Tab",zp="ArrowUp",k1="ArrowDown",Bp=2,Np=`hide${ke}`,Fp=`hidden${ke}`,$p=`show${ke}`,Wp=`shown${ke}`,L1=`click${ke}${Rn}`,T1=`keydown${ke}${Rn}`,jp=`keyup${ke}${Rn}`,na="show",Up="dropup",qp="dropend",Zp="dropstart",Yp="dropup-center",Kp="dropdown-center",Le='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Xp=`${Le}.${na}`,fi=".dropdown-menu",Gp=".navbar",Qp=".navbar-nav",Jp=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",tu=D()?"top-end":"top-start",eu=D()?"top-start":"top-end",au=D()?"bottom-end":"bottom-start",iu=D()?"bottom-start":"bottom-end",nu=D()?"left-start":"right-start",su=D()?"right-start":"left-start",ou="top",ru="bottom",hu={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},cu={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class It extends Rt{constructor(l,f){super(l,f),this._popper=null,this._parent=this._element.parentNode,this._menu=I.next(this._element,fi)[0]||I.prev(this._element,fi)[0]||I.findOne(fi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return hu}static get DefaultType(){return cu}static get NAME(){return E1}toggle(){return this._isShown()?this.hide():this.show()}show(){if(w(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!L.trigger(this._element,$p,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Qp))for(const x of[].concat(...document.body.children))L.on(x,"mouseover",k);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(na),this._element.classList.add(na),L.trigger(this._element,Wp,l)}}hide(){if(w(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!L.trigger(this._element,Np,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const x of[].concat(...document.body.children))L.off(x,"mouseover",k);this._popper&&this._popper.destroy(),this._menu.classList.remove(na),this._element.classList.remove(na),this._element.setAttribute("aria-expanded","false"),Gt.removeDataAttribute(this._menu,"popper"),L.trigger(this._element,Fp,l)}}_getConfig(l){if(l=super._getConfig(l),typeof l.reference=="object"&&!m(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${E1.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if(typeof n>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let l=this._element;this._config.reference==="parent"?l=this._parent:m(this._config.reference)?l=v(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const f=this._getPopperConfig();this._popper=n.createPopper(l,this._menu,f)}_isShown(){return this._menu.classList.contains(na)}_getPlacement(){const l=this._parent;if(l.classList.contains(qp))return nu;if(l.classList.contains(Zp))return su;if(l.classList.contains(Yp))return ou;if(l.classList.contains(Kp))return ru;const f=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains(Up)?f?eu:tu:f?iu:au}_detectNavbar(){return this._element.closest(Gp)!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(f=>Number.parseInt(f,10)):typeof l=="function"?f=>l(f,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Gt.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...R(this._config.popperConfig,[void 0,l])}}_selectMenuItem({key:l,target:f}){const x=I.find(Jp,this._menu).filter(C=>b(C));x.length&&nt(x,f,l===k1,!x.includes(f)).focus()}static jQueryInterface(l){return this.each(function(){const f=It.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof f[l]>"u")throw new TypeError(`No method named "${l}"`);f[l]()}})}static clearMenus(l){if(l.button===Bp||l.type==="keyup"&&l.key!==S1)return;const f=I.find(Xp);for(const x of f){const C=It.getInstance(x);if(!C||C._config.autoClose===!1)continue;const P=l.composedPath(),V=P.includes(C._menu);if(P.includes(C._element)||C._config.autoClose==="inside"&&!V||C._config.autoClose==="outside"&&V||C._menu.contains(l.target)&&(l.type==="keyup"&&l.key===S1||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const F={relatedTarget:C._element};l.type==="click"&&(F.clickEvent=l),C._completeHide(F)}}static dataApiKeydownHandler(l){const f=/input|textarea/i.test(l.target.tagName),x=l.key===Ip,C=[zp,k1].includes(l.key);if(!C&&!x||f&&!x)return;l.preventDefault();const P=this.matches(Le)?this:I.prev(this,Le)[0]||I.next(this,Le)[0]||I.findOne(Le,l.delegateTarget.parentNode),V=It.getOrCreateInstance(P);if(C){l.stopPropagation(),V.show(),V._selectMenuItem(l);return}V._isShown()&&(l.stopPropagation(),V.hide(),P.focus())}}L.on(document,T1,Le,It.dataApiKeydownHandler),L.on(document,T1,fi,It.dataApiKeydownHandler),L.on(document,L1,It.clearMenus),L.on(document,jp,It.clearMenus),L.on(document,L1,Le,function(y){y.preventDefault(),It.getOrCreateInstance(this).toggle()}),z(It);const H1="backdrop",lu="fade",V1="show",P1=`mousedown.bs.${H1}`,du={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},pu={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class O1 extends _a{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return du}static get DefaultType(){return pu}static get NAME(){return H1}show(l){if(!this._config.isVisible){R(l);return}this._append();const f=this._getElement();this._config.isAnimated&&_(f),f.classList.add(V1),this._emulateAnimation(()=>{R(l)})}hide(l){if(!this._config.isVisible){R(l);return}this._getElement().classList.remove(V1),this._emulateAnimation(()=>{this.dispose(),R(l)})}dispose(){this._isAppended&&(L.off(this._element,P1),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add(lu),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=v(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),L.on(l,P1,()=>{R(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){$(l,this._getElement(),this._config.isAnimated)}}const uu="focustrap",gi=".bs.focustrap",fu=`focusin${gi}`,gu=`keydown.tab${gi}`,mu="Tab",Mu="forward",D1="backward",vu={autofocus:!0,trapElement:null},yu={autofocus:"boolean",trapElement:"element"};class R1 extends _a{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return vu}static get DefaultType(){return yu}static get NAME(){return uu}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),L.off(document,gi),L.on(document,fu,l=>this._handleFocusin(l)),L.on(document,gu,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,L.off(document,gi))}_handleFocusin(l){const{trapElement:f}=this._config;if(l.target===document||l.target===f||f.contains(l.target))return;const x=I.focusableChildren(f);x.length===0?f.focus():this._lastTabNavDirection===D1?x[x.length-1].focus():x[0].focus()}_handleKeydown(l){l.key===mu&&(this._lastTabNavDirection=l.shiftKey?D1:Mu)}}const I1=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",z1=".sticky-top",mi="padding-right",B1="margin-right";class In{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,mi,f=>f+l),this._setElementAttributes(I1,mi,f=>f+l),this._setElementAttributes(z1,B1,f=>f-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,mi),this._resetElementAttributes(I1,mi),this._resetElementAttributes(z1,B1)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,f,x){const C=this.getWidth(),P=V=>{if(V!==this._element&&window.innerWidth>V.clientWidth+C)return;this._saveInitialAttribute(V,f);const F=window.getComputedStyle(V).getPropertyValue(f);V.style.setProperty(f,`${x(Number.parseFloat(F))}px`)};this._applyManipulationCallback(l,P)}_saveInitialAttribute(l,f){const x=l.style.getPropertyValue(f);x&&Gt.setDataAttribute(l,f,x)}_resetElementAttributes(l,f){const x=C=>{const P=Gt.getDataAttribute(C,f);if(P===null){C.style.removeProperty(f);return}Gt.removeDataAttribute(C,f),C.style.setProperty(f,P)};this._applyManipulationCallback(l,x)}_applyManipulationCallback(l,f){if(m(l)){f(l);return}for(const x of I.find(l,this._element))f(x)}}const xu="modal",Ht=".bs.modal",bu=".data-api",wu="Escape",_u=`hide${Ht}`,Au=`hidePrevented${Ht}`,N1=`hidden${Ht}`,F1=`show${Ht}`,Cu=`shown${Ht}`,Eu=`resize${Ht}`,Su=`click.dismiss${Ht}`,ku=`mousedown.dismiss${Ht}`,Lu=`keydown.dismiss${Ht}`,Tu=`click${Ht}${bu}`,$1="modal-open",Hu="fade",W1="show",zn="modal-static",Vu=".modal.show",Pu=".modal-dialog",Ou=".modal-body",Du='[data-bs-toggle="modal"]',Ru={backdrop:!0,focus:!0,keyboard:!0},Iu={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Te extends Rt{constructor(l,f){super(l,f),this._dialog=I.findOne(Pu,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new In,this._addEventListeners()}static get Default(){return Ru}static get DefaultType(){return Iu}static get NAME(){return xu}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||L.trigger(this._element,F1,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add($1),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){!this._isShown||this._isTransitioning||L.trigger(this._element,_u).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(W1),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){L.off(window,Ht),L.off(this._dialog,Ht),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new O1({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new R1({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const f=I.findOne(Ou,this._dialog);f&&(f.scrollTop=0),_(this._element),this._element.classList.add(W1);const x=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,L.trigger(this._element,Cu,{relatedTarget:l})};this._queueCallback(x,this._dialog,this._isAnimated())}_addEventListeners(){L.on(this._element,Lu,l=>{if(l.key===wu){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),L.on(window,Eu,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),L.on(this._element,ku,l=>{L.one(this._element,Su,f=>{if(!(this._element!==l.target||this._element!==f.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove($1),this._resetAdjustments(),this._scrollBar.reset(),L.trigger(this._element,N1)})}_isAnimated(){return this._element.classList.contains(Hu)}_triggerBackdropTransition(){if(L.trigger(this._element,Au).defaultPrevented)return;const f=this._element.scrollHeight>document.documentElement.clientHeight,x=this._element.style.overflowY;x==="hidden"||this._element.classList.contains(zn)||(f||(this._element.style.overflowY="hidden"),this._element.classList.add(zn),this._queueCallback(()=>{this._element.classList.remove(zn),this._queueCallback(()=>{this._element.style.overflowY=x},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,f=this._scrollBar.getWidth(),x=f>0;if(x&&!l){const C=D()?"paddingLeft":"paddingRight";this._element.style[C]=`${f}px`}if(!x&&l){const C=D()?"paddingRight":"paddingLeft";this._element.style[C]=`${f}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,f){return this.each(function(){const x=Te.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof x[l]>"u")throw new TypeError(`No method named "${l}"`);x[l](f)}})}}L.on(document,Tu,Du,function(y){const l=I.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&y.preventDefault(),L.one(l,F1,C=>{C.defaultPrevented||L.one(l,N1,()=>{b(this)&&this.focus()})});const f=I.findOne(Vu);f&&Te.getInstance(f).hide(),Te.getOrCreateInstance(l).toggle(this)}),ci(Te),z(Te);const zu="offcanvas",Qt=".bs.offcanvas",j1=".data-api",Bu=`load${Qt}${j1}`,Nu="Escape",U1="show",q1="showing",Z1="hiding",Fu="offcanvas-backdrop",Y1=".offcanvas.show",$u=`show${Qt}`,Wu=`shown${Qt}`,ju=`hide${Qt}`,K1=`hidePrevented${Qt}`,X1=`hidden${Qt}`,Uu=`resize${Qt}`,qu=`click${Qt}${j1}`,Zu=`keydown.dismiss${Qt}`,Yu='[data-bs-toggle="offcanvas"]',Ku={backdrop:!0,keyboard:!0,scroll:!1},Xu={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Jt extends Rt{constructor(l,f){super(l,f),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ku}static get DefaultType(){return Xu}static get NAME(){return zu}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){if(this._isShown||L.trigger(this._element,$u,{relatedTarget:l}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new In().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(q1);const x=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(U1),this._element.classList.remove(q1),L.trigger(this._element,Wu,{relatedTarget:l})};this._queueCallback(x,this._element,!0)}hide(){if(!this._isShown||L.trigger(this._element,ju).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Z1),this._backdrop.hide();const f=()=>{this._element.classList.remove(U1,Z1),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new In().reset(),L.trigger(this._element,X1)};this._queueCallback(f,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=()=>{if(this._config.backdrop==="static"){L.trigger(this._element,K1);return}this.hide()},f=!!this._config.backdrop;return new O1({className:Fu,isVisible:f,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:f?l:null})}_initializeFocusTrap(){return new R1({trapElement:this._element})}_addEventListeners(){L.on(this._element,Zu,l=>{if(l.key===Nu){if(this._config.keyboard){this.hide();return}L.trigger(this._element,K1)}})}static jQueryInterface(l){return this.each(function(){const f=Jt.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l](this)}})}}L.on(document,qu,Yu,function(y){const l=I.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&y.preventDefault(),w(this))return;L.one(l,X1,()=>{b(this)&&this.focus()});const f=I.findOne(Y1);f&&f!==l&&Jt.getInstance(f).hide(),Jt.getOrCreateInstance(l).toggle(this)}),L.on(window,Bu,()=>{for(const y of I.find(Y1))Jt.getOrCreateInstance(y).show()}),L.on(window,Uu,()=>{for(const y of I.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(y).position!=="fixed"&&Jt.getOrCreateInstance(y).hide()}),ci(Jt),z(Jt);const G1={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Gu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Qu=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Ju=(y,l)=>{const f=y.nodeName.toLowerCase();return l.includes(f)?Gu.has(f)?!!Qu.test(y.nodeValue):!0:l.filter(x=>x instanceof RegExp).some(x=>x.test(f))};function t5(y,l,f){if(!y.length)return y;if(f&&typeof f=="function")return f(y);const C=new window.DOMParser().parseFromString(y,"text/html"),P=[].concat(...C.body.querySelectorAll("*"));for(const V of P){const F=V.nodeName.toLowerCase();if(!Object.keys(l).includes(F)){V.remove();continue}const wt=[].concat(...V.attributes),Vt=[].concat(l["*"]||[],l[F]||[]);for(const lt of wt)Ju(lt,Vt)||V.removeAttribute(lt.nodeName)}return C.body.innerHTML}const e5="TemplateFactory",a5={allowList:G1,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},i5={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},n5={entry:"(string|element|function|null)",selector:"(string|element)"};class s5 extends _a{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return a5}static get DefaultType(){return i5}static get NAME(){return e5}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[C,P]of Object.entries(this._config.content))this._setContent(l,P,C);const f=l.children[0],x=this._resolvePossibleFunction(this._config.extraClass);return x&&f.classList.add(...x.split(" ")),f}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[f,x]of Object.entries(l))super._typeCheckConfig({selector:f,entry:x},n5)}_setContent(l,f,x){const C=I.findOne(x,l);if(C){if(f=this._resolvePossibleFunction(f),!f){C.remove();return}if(m(f)){this._putElementInTemplate(v(f),C);return}if(this._config.html){C.innerHTML=this._maybeSanitize(f);return}C.textContent=f}}_maybeSanitize(l){return this._config.sanitize?t5(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return R(l,[void 0,this])}_putElementInTemplate(l,f){if(this._config.html){f.innerHTML="",f.append(l);return}f.textContent=l.textContent}}const o5="tooltip",r5=new Set(["sanitize","allowList","sanitizeFn"]),Bn="fade",h5="modal",Mi="show",c5=".tooltip-inner",Q1=`.${h5}`,J1="hide.bs.modal",ka="hover",Nn="focus",Fn="click",l5="manual",d5="hide",p5="hidden",u5="show",f5="shown",g5="inserted",m5="click",M5="focusin",v5="focusout",y5="mouseenter",x5="mouseleave",b5={AUTO:"auto",TOP:"top",RIGHT:D()?"left":"right",BOTTOM:"bottom",LEFT:D()?"right":"left"},w5={allowList:G1,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},_5={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class He extends Rt{constructor(l,f){if(typeof n>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(l,f),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return w5}static get DefaultType(){return _5}static get NAME(){return o5}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),L.off(this._element.closest(Q1),J1,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const l=L.trigger(this._element,this.constructor.eventName(u5)),x=(S(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!x)return;this._disposePopper();const C=this._getTipElement();this._element.setAttribute("aria-describedby",C.getAttribute("id"));const{container:P}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(P.append(C),L.trigger(this._element,this.constructor.eventName(g5))),this._popper=this._createPopper(C),C.classList.add(Mi),"ontouchstart"in document.documentElement)for(const F of[].concat(...document.body.children))L.on(F,"mouseover",k);const V=()=>{L.trigger(this._element,this.constructor.eventName(f5)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(V,this.tip,this._isAnimated())}hide(){if(!this._isShown()||L.trigger(this._element,this.constructor.eventName(d5)).defaultPrevented)return;if(this._getTipElement().classList.remove(Mi),"ontouchstart"in document.documentElement)for(const C of[].concat(...document.body.children))L.off(C,"mouseover",k);this._activeTrigger[Fn]=!1,this._activeTrigger[Nn]=!1,this._activeTrigger[ka]=!1,this._isHovered=null;const x=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),L.trigger(this._element,this.constructor.eventName(p5)))};this._queueCallback(x,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const f=this._getTemplateFactory(l).toHtml();if(!f)return null;f.classList.remove(Bn,Mi),f.classList.add(`bs-${this.constructor.NAME}-auto`);const x=u(this.constructor.NAME).toString();return f.setAttribute("id",x),this._isAnimated()&&f.classList.add(Bn),f}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new s5({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[c5]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Bn)}_isShown(){return this.tip&&this.tip.classList.contains(Mi)}_createPopper(l){const f=R(this._config.placement,[this,l,this._element]),x=b5[f.toUpperCase()];return n.createPopper(this._element,l,this._getPopperConfig(x))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(f=>Number.parseInt(f,10)):typeof l=="function"?f=>l(f,this._element):l}_resolvePossibleFunction(l){return R(l,[this._element,this._element])}_getPopperConfig(l){const f={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:x=>{this._getTipElement().setAttribute("data-popper-placement",x.state.placement)}}]};return{...f,...R(this._config.popperConfig,[void 0,f])}}_setListeners(){const l=this._config.trigger.split(" ");for(const f of l)if(f==="click")L.on(this._element,this.constructor.eventName(m5),this._config.selector,x=>{const C=this._initializeOnDelegatedTarget(x);C._activeTrigger[Fn]=!(C._isShown()&&C._activeTrigger[Fn]),C.toggle()});else if(f!==l5){const x=f===ka?this.constructor.eventName(y5):this.constructor.eventName(M5),C=f===ka?this.constructor.eventName(x5):this.constructor.eventName(v5);L.on(this._element,x,this._config.selector,P=>{const V=this._initializeOnDelegatedTarget(P);V._activeTrigger[P.type==="focusin"?Nn:ka]=!0,V._enter()}),L.on(this._element,C,this._config.selector,P=>{const V=this._initializeOnDelegatedTarget(P);V._activeTrigger[P.type==="focusout"?Nn:ka]=V._element.contains(P.relatedTarget),V._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},L.on(this._element.closest(Q1),J1,this._hideModalHandler)}_fixTitle(){const l=this._element.getAttribute("title");l&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",l),this._element.setAttribute("data-bs-original-title",l),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,f){clearTimeout(this._timeout),this._timeout=setTimeout(l,f)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const f=Gt.getDataAttributes(this._element);for(const x of Object.keys(f))r5.has(x)&&delete f[x];return l={...f,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:v(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const[f,x]of Object.entries(this._config))this.constructor.Default[f]!==x&&(l[f]=x);return l.selector=!1,l.trigger="manual",l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(l){return this.each(function(){const f=He.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof f[l]>"u")throw new TypeError(`No method named "${l}"`);f[l]()}})}}z(He);const A5="popover",C5=".popover-header",E5=".popover-body",S5={...He.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},k5={...He.DefaultType,content:"(null|string|element|function)"};class vi extends He{static get Default(){return S5}static get DefaultType(){return k5}static get NAME(){return A5}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[C5]:this._getTitle(),[E5]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const f=vi.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof f[l]>"u")throw new TypeError(`No method named "${l}"`);f[l]()}})}}z(vi);const L5="scrollspy",$n=".bs.scrollspy",T5=".data-api",H5=`activate${$n}`,to=`click${$n}`,V5=`load${$n}${T5}`,P5="dropdown-item",sa="active",O5='[data-bs-spy="scroll"]',Wn="[href]",D5=".nav, .list-group",eo=".nav-link",R5=`${eo}, .nav-item > ${eo}, .list-group-item`,I5=".dropdown",z5=".dropdown-toggle",B5={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},N5={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class La extends Rt{constructor(l,f){super(l,f),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return B5}static get DefaultType(){return N5}static get NAME(){return L5}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=v(l.target)||document.body,l.rootMargin=l.offset?`${l.offset}px 0px -30%`:l.rootMargin,typeof l.threshold=="string"&&(l.threshold=l.threshold.split(",").map(f=>Number.parseFloat(f))),l}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(L.off(this._config.target,to),L.on(this._config.target,to,Wn,l=>{const f=this._observableSections.get(l.target.hash);if(f){l.preventDefault();const x=this._rootElement||window,C=f.offsetTop-this._element.offsetTop;if(x.scrollTo){x.scrollTo({top:C,behavior:"smooth"});return}x.scrollTop=C}}))}_getNewObserver(){const l={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(f=>this._observerCallback(f),l)}_observerCallback(l){const f=V=>this._targetLinks.get(`#${V.target.id}`),x=V=>{this._previousScrollData.visibleEntryTop=V.target.offsetTop,this._process(f(V))},C=(this._rootElement||document.documentElement).scrollTop,P=C>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=C;for(const V of l){if(!V.isIntersecting){this._activeTarget=null,this._clearActiveClass(f(V));continue}const F=V.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(P&&F){if(x(V),!C)return;continue}!P&&!F&&x(V)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=I.find(Wn,this._config.target);for(const f of l){if(!f.hash||w(f))continue;const x=I.findOne(decodeURI(f.hash),this._element);b(x)&&(this._targetLinks.set(decodeURI(f.hash),f),this._observableSections.set(f.hash,x))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(sa),this._activateParents(l),L.trigger(this._element,H5,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains(P5)){I.findOne(z5,l.closest(I5)).classList.add(sa);return}for(const f of I.parents(l,D5))for(const x of I.prev(f,R5))x.classList.add(sa)}_clearActiveClass(l){l.classList.remove(sa);const f=I.find(`${Wn}.${sa}`,l);for(const x of f)x.classList.remove(sa)}static jQueryInterface(l){return this.each(function(){const f=La.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}})}}L.on(window,V5,()=>{for(const y of I.find(O5))La.getOrCreateInstance(y)}),z(La);const F5="tab",Ve=".bs.tab",$5=`hide${Ve}`,W5=`hidden${Ve}`,j5=`show${Ve}`,U5=`shown${Ve}`,q5=`click${Ve}`,Z5=`keydown${Ve}`,Y5=`load${Ve}`,K5="ArrowLeft",ao="ArrowRight",X5="ArrowUp",io="ArrowDown",jn="Home",no="End",Pe="active",so="fade",Un="show",G5="dropdown",oo=".dropdown-toggle",Q5=".dropdown-menu",qn=`:not(${oo})`,J5='.list-group, .nav, [role="tablist"]',t4=".nav-item, .list-group-item",e4=`.nav-link${qn}, .list-group-item${qn}, [role="tab"]${qn}`,ro='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Zn=`${e4}, ${ro}`,a4=`.${Pe}[data-bs-toggle="tab"], .${Pe}[data-bs-toggle="pill"], .${Pe}[data-bs-toggle="list"]`;class Oe extends Rt{constructor(l){super(l),this._parent=this._element.closest(J5),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),L.on(this._element,Z5,f=>this._keydown(f)))}static get NAME(){return F5}show(){const l=this._element;if(this._elemIsActive(l))return;const f=this._getActiveElem(),x=f?L.trigger(f,$5,{relatedTarget:l}):null;L.trigger(l,j5,{relatedTarget:f}).defaultPrevented||x&&x.defaultPrevented||(this._deactivate(f,l),this._activate(l,f))}_activate(l,f){if(!l)return;l.classList.add(Pe),this._activate(I.getElementFromSelector(l));const x=()=>{if(l.getAttribute("role")!=="tab"){l.classList.add(Un);return}l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),L.trigger(l,U5,{relatedTarget:f})};this._queueCallback(x,l,l.classList.contains(so))}_deactivate(l,f){if(!l)return;l.classList.remove(Pe),l.blur(),this._deactivate(I.getElementFromSelector(l));const x=()=>{if(l.getAttribute("role")!=="tab"){l.classList.remove(Un);return}l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),L.trigger(l,W5,{relatedTarget:f})};this._queueCallback(x,l,l.classList.contains(so))}_keydown(l){if(![K5,ao,X5,io,jn,no].includes(l.key))return;l.stopPropagation(),l.preventDefault();const f=this._getChildren().filter(C=>!w(C));let x;if([jn,no].includes(l.key))x=f[l.key===jn?0:f.length-1];else{const C=[ao,io].includes(l.key);x=nt(f,l.target,C,!0)}x&&(x.focus({preventScroll:!0}),Oe.getOrCreateInstance(x).show())}_getChildren(){return I.find(Zn,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,f){this._setAttributeIfNotExists(l,"role","tablist");for(const x of f)this._setInitialAttributesOnChild(x)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const f=this._elemIsActive(l),x=this._getOuterElement(l);l.setAttribute("aria-selected",f),x!==l&&this._setAttributeIfNotExists(x,"role","presentation"),f||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const f=I.getElementFromSelector(l);f&&(this._setAttributeIfNotExists(f,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(f,"aria-labelledby",`${l.id}`))}_toggleDropDown(l,f){const x=this._getOuterElement(l);if(!x.classList.contains(G5))return;const C=(P,V)=>{const F=I.findOne(P,x);F&&F.classList.toggle(V,f)};C(oo,Pe),C(Q5,Un),x.setAttribute("aria-expanded",f)}_setAttributeIfNotExists(l,f,x){l.hasAttribute(f)||l.setAttribute(f,x)}_elemIsActive(l){return l.classList.contains(Pe)}_getInnerElement(l){return l.matches(Zn)?l:I.findOne(Zn,l)}_getOuterElement(l){return l.closest(t4)||l}static jQueryInterface(l){return this.each(function(){const f=Oe.getOrCreateInstance(this);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}})}}L.on(document,q5,ro,function(y){["A","AREA"].includes(this.tagName)&&y.preventDefault(),!w(this)&&Oe.getOrCreateInstance(this).show()}),L.on(window,Y5,()=>{for(const y of I.find(a4))Oe.getOrCreateInstance(y)}),z(Oe);const i4="toast",pe=".bs.toast",n4=`mouseover${pe}`,s4=`mouseout${pe}`,o4=`focusin${pe}`,r4=`focusout${pe}`,h4=`hide${pe}`,c4=`hidden${pe}`,l4=`show${pe}`,d4=`shown${pe}`,p4="fade",ho="hide",yi="show",xi="showing",u4={animation:"boolean",autohide:"boolean",delay:"number"},f4={animation:!0,autohide:!0,delay:5e3};class Ta extends Rt{constructor(l,f){super(l,f),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return f4}static get DefaultType(){return u4}static get NAME(){return i4}show(){if(L.trigger(this._element,l4).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(p4);const f=()=>{this._element.classList.remove(xi),L.trigger(this._element,d4),this._maybeScheduleHide()};this._element.classList.remove(ho),_(this._element),this._element.classList.add(yi,xi),this._queueCallback(f,this._element,this._config.animation)}hide(){if(!this.isShown()||L.trigger(this._element,h4).defaultPrevented)return;const f=()=>{this._element.classList.add(ho),this._element.classList.remove(xi,yi),L.trigger(this._element,c4)};this._element.classList.add(xi),this._queueCallback(f,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(yi),super.dispose()}isShown(){return this._element.classList.contains(yi)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(l,f){switch(l.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=f;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=f;break}}if(f){this._clearTimeout();return}const x=l.relatedTarget;this._element===x||this._element.contains(x)||this._maybeScheduleHide()}_setListeners(){L.on(this._element,n4,l=>this._onInteraction(l,!0)),L.on(this._element,s4,l=>this._onInteraction(l,!1)),L.on(this._element,o4,l=>this._onInteraction(l,!0)),L.on(this._element,r4,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const f=Ta.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof f[l]>"u")throw new TypeError(`No method named "${l}"`);f[l](this)}})}}return ci(Ta),z(Ta),{Alert:Aa,Button:Ca,Carousel:ea,Collapse:ia,Dropdown:It,Modal:Te,Offcanvas:Jt,Popover:vi,ScrollSpy:La,Tab:Oe,Toast:Ta,Tooltip:He}})}(Bi)),Bi.exports}var S4=E4();const sW=y4(S4);/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=([e,t,a])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(n=>{i.setAttribute(n,String(t[n]))}),a!=null&&a.length&&a.forEach(n=>{const s=Tc(n);i.appendChild(s)}),i},k4=(e,t={})=>{const a="svg",i={...Lc,...t};return Tc([a,i,e])};/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),T4=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",H4=e=>e.flatMap(T4).map(a=>a.trim()).filter(Boolean).filter((a,i,n)=>n.indexOf(a)===i).join(" "),V4=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,a,i)=>a.toUpperCase()+i.toLowerCase()),lo=(e,{nameAttr:t,icons:a,attrs:i})=>{var p;const n=e.getAttribute(t);if(n==null)return;const s=V4(n),o=a[s];if(!o)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const r=L4(e),h={...Lc,"data-lucide":n,...i,...r},c=H4(["lucide",`lucide-${n}`,r,i]);c&&Object.assign(h,{class:c});const d=k4(o,h);return(p=e.parentNode)==null?void 0:p.replaceChild(d,e)};/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 7v9"}],["path",{d:"m14 12 4 4 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 16V7"}],["path",{d:"m14 11 4-4 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=[["path",{d:"M21 14h-5"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"}],["path",{d:"M4.5 13h6"}],["path",{d:"m3 16 4.5-9 4.5 9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=[["path",{d:"M18 17.5a2.5 2.5 0 1 1-4 2.03V12"}],["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M6.6 15.572A2 2 0 1 0 10 17v-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["path",{d:"m12 15 5 6H7Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=[["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=[["path",{d:"M17 12H7"}],["path",{d:"M19 18H5"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"M3 12h18"}],["path",{d:"M3 18h18"}],["path",{d:"M3 6h18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"M21 12H9"}],["path",{d:"M21 18H7"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=[["path",{d:"M15 12H3"}],["path",{d:"M17 18H3"}],["path",{d:"M21 6H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M22 17h-3"}],["path",{d:"M22 7h-5"}],["path",{d:"M5 17H2"}],["path",{d:"M7 7H2"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=[["path",{d:"M10 10H6"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"}],["path",{d:"M8 8v4"}],["path",{d:"M9 18h6"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68"}],["path",{d:"M18 22H6"}],["path",{d:"M9 2h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"M12 22V8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}],["circle",{cx:"12",cy:"5",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14.31 8 5.74 9.94"}],["path",{d:"M9.69 8h11.48"}],["path",{d:"m7.38 12 5.74-9.94"}],["path",{d:"M9.69 16 3.95 6.06"}],["path",{d:"M14.31 16H2.83"}],["path",{d:"m16.62 12-5.74 9.94"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h.01"}],["path",{d:"M10 8h.01"}],["path",{d:"M14 8h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=[["path",{d:"m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9"}],["path",{d:"M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=[["path",{d:"M4 4v16h16"}],["path",{d:"m4 20 7-7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M15 12h.01"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}],["path",{d:"M9 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=[["path",{d:"M10 10.01h.01"}],["path",{d:"M10 14.01h.01"}],["path",{d:"M14 10.01h.01"}],["path",{d:"M14 14.01h.01"}],["path",{d:"M18 6v11.5"}],["path",{d:"M6 6v12"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"m16 19 3 3 3-3"}],["path",{d:"M18 12h.01"}],["path",{d:"M19 16v6"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["path",{d:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"M18 12h.01"}],["path",{d:"M19 22v-6"}],["path",{d:"m22 19-3-3-3 3"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=[["path",{d:"M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"}],["path",{d:"m17 17 5 5"}],["path",{d:"M18 12h.01"}],["path",{d:"m22 17-5 5"}],["path",{d:"M6 12h.01"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=[["path",{d:"M10 4 8 6"}],["path",{d:"M17 19v2"}],["path",{d:"M2 12h20"}],["path",{d:"M7 19v2"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"}],["path",{d:"m11 7-3 5h4l-3 5"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M10 9v6"}],["path",{d:"M13.5 7H16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5"}],["path",{d:"M22 11v2"}],["path",{d:"M6.5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5"}],["path",{d:"M7 12h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M10 17h.01"}],["path",{d:"M10 7v6"}],["path",{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M22 11v2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M13 13v5"}],["path",{d:"M17 11.47V8"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"}],["path",{d:"M9 14.6V18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"}],["circle",{cx:"18",cy:"8",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M18.518 17.347A7 7 0 0 1 14 19"}],["path",{d:"M18.8 4A11 11 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"20",cy:"16",r:"2"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{x:"4",y:"16",width:"10",height:"6",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1"}],["path",{d:"m22 15-3-3 3-3"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1"}],["path",{d:"m2 9 3 3-3 3"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1"}],["path",{d:"m9 22 3-3 3 3"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1"}],["path",{d:"m15 2-3 3-3-3"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M10 10h4"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"}],["path",{d:"M 22 16 L 2 16"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["circle",{cx:"9",cy:"9",r:"7"}],["circle",{cx:"15",cy:"15",r:"7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=[["path",{d:"M12 17h1.5"}],["path",{d:"M12 22h1.5"}],["path",{d:"M12 2h1.5"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5"}],["path",{d:"M20 14v3h-2.5"}],["path",{d:"M20 8.5V10"}],["path",{d:"M4 10V8.5"}],["path",{d:"M4 19.5V14"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3 3 3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"m19 3 1 1"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844"}],["circle",{cx:"14",cy:"8",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M10 2v8l3-3 3 3V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["path",{d:"M12 21V7"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=[["path",{d:"M12 7v14"}],["path",{d:"M16 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}],["path",{d:"M6 12h2"}],["path",{d:"M6 8h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["path",{d:"M12 7v6"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 11h8"}],["path",{d:"M8 7h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["path",{d:"M10 13h4"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"M12 13V7"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3-3 3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["path",{d:"M15 13a3 3 0 1 0-6 0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["path",{d:"m14.5 7-5 5"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9.5 7 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=[["path",{d:"M12 6V2H8"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"}],["path",{d:"M2 12h2"}],["path",{d:"M9 11v2"}],["path",{d:"M15 11v2"}],["path",{d:"M20 12h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M22 22 2 2"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"}],["path",{d:"M9 13v2"}],["path",{d:"M9.67 4H12v2.33"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["path",{d:"M17 3h4v4"}],["path",{d:"M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17"}],["path",{d:"M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05"}],["path",{d:"M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z"}],["path",{d:"M9.707 14.293 21 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["path",{d:"M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3"}],["path",{d:"M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2"}],["circle",{cx:"16",cy:"13",r:".5"}],["circle",{cx:"18",cy:"3",r:".5"}],["circle",{cx:"20",cy:"21",r:".5"}],["circle",{cx:"20",cy:"8",r:".5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=[["path",{d:"m10.852 14.772-.383.923"}],["path",{d:"m10.852 9.228-.383-.923"}],["path",{d:"m13.148 14.772.382.924"}],["path",{d:"m13.531 8.305-.383.923"}],["path",{d:"m14.772 10.852.923-.383"}],["path",{d:"m14.772 13.148.923.383"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"}],["path",{d:"M17.998 5.125a4 4 0 0 1 2.525 5.771"}],["path",{d:"M19.505 10.294a4 4 0 0 1-1.5 7.706"}],["path",{d:"M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"}],["path",{d:"M4.5 10.291A4 4 0 0 0 6 18"}],["path",{d:"M6.002 5.125a3 3 0 0 0 .4 1.375"}],["path",{d:"m9.228 10.852-.923-.383"}],["path",{d:"m9.228 13.148-.923.383"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["path",{d:"M16 3v2.107"}],["path",{d:"M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"}],["path",{d:"M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938"}],["path",{d:"M3 15h5.253"}],["path",{d:"M3 9h8.228"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M10 20v2"}],["path",{d:"M14 20v2"}],["path",{d:"M18 20v2"}],["path",{d:"M21 20H3"}],["path",{d:"M6 20v2"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=[["path",{d:"M12 11v4"}],["path",{d:"M14 13h-4"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M18 6v14"}],["path",{d:"M6 6v14"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=[["path",{d:"m16 22-1-4"}],["path",{d:"M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1"}],["path",{d:"M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z"}],["path",{d:"m8 22 1-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=[["path",{d:"m11 10 3 3"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=[["path",{d:"M7.2 14.8a2 2 0 0 1 2 2"}],["circle",{cx:"18.5",cy:"8.5",r:"3.5"}],["circle",{cx:"7.5",cy:"16.5",r:"5.5"}],["circle",{cx:"7.5",cy:"4.5",r:"2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M6 13H2"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"}],["path",{d:"M21 21v-2h-4"}],["path",{d:"M3 5h4V3"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h.01"}],["path",{d:"M12 4h.01"}],["path",{d:"M17 4h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=[["path",{d:"M11 14h1v4"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=[["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 14v8"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=[["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 22v-8"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m16 20 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m9 16 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.3V14"}],["circle",{cx:"16",cy:"16",r:"6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=[["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m15.228 19.148-.923.383"}],["path",{d:"M16 2v4"}],["path",{d:"m16.47 14.305.382.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["path",{d:"M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"}],["path",{d:"M3 10h18"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"}],["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=[["path",{d:"M16 19h6"}],["path",{d:"M16 2v4"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}],["path",{d:"M12 14v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["path",{d:"M16 19h6"}],["path",{d:"M16 2v4"}],["path",{d:"M19 16v6"}],["path",{d:"M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=[["path",{d:"M16 2v4"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"}],["path",{d:"m22 22-1.875-1.875"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["path",{d:"M11 10v4h4"}],["path",{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M16 2v4"}],["path",{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5"}],["path",{d:"M21 22v-4h-4"}],["path",{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"}],["path",{d:"M3 10h4"}],["path",{d:"M8 2v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m17 22 5-5"}],["path",{d:"m17 17 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m14 14-4 4"}],["path",{d:"m10 14 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["path",{d:"M10 10v7.9"}],["path",{d:"M11.802 6.145a5 5 0 0 1 6.053 6.053"}],["path",{d:"M14 6.1v2.243"}],["path",{d:"m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["path",{d:"M10 7v10.9"}],["path",{d:"M14 6.1V17"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"}],["path",{d:"M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=[["path",{d:"M12 22v-4"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5"}],["path",{d:"M17 11h-.5"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7 11h4"}],["path",{d:"M7 15h2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"}],["circle",{cx:"8",cy:"19",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}],["path",{d:"M7 9h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h3"}],["path",{d:"M7 6h12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h12"}],["path",{d:"M7 6h3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["path",{d:"M11 13v4"}],["path",{d:"M15 5v4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=[["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"M13 17V9"}],["path",{d:"M18 17v-3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17V5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["path",{d:"M11 13H7"}],["path",{d:"M19 9h-4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["path",{d:"M10 6h8"}],["path",{d:"M12 16h6"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 11h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"m19 9-5 5-4-4-3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["path",{d:"m13.11 7.664 1.78 2.672"}],["path",{d:"m14.162 12.788-3.324 1.424"}],["path",{d:"m20 4-6.06 1.515"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["circle",{cx:"12",cy:"6",r:"2"}],["circle",{cx:"16",cy:"12",r:"2"}],["circle",{cx:"9",cy:"15",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["path",{d:"M12 20V10"}],["path",{d:"M18 20v-4"}],["path",{d:"M6 20V4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=[["path",{d:"M12 16v5"}],["path",{d:"M16 14v7"}],["path",{d:"M20 10v11"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"}],["path",{d:"M4 18v3"}],["path",{d:"M8 14v7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["path",{d:"M20 4L9 15"}],["path",{d:"M21 19L3 19"}],["path",{d:"M9 15L4 10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["path",{d:"M20 6 9 17l-5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["path",{d:"m6 9 6 6 6-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=[["path",{d:"m15 18-6-6 6-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=[["path",{d:"m18 15-6-6-6 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=[["path",{d:"M10 9h4"}],["path",{d:"M12 7v5"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 12H8"}],["path",{d:"m12 8-4 4 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 8v8"}],["path",{d:"M16 12H8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M22 2 2 22"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=[["circle",{cx:"12",cy:"12",r:"6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=[["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=[["path",{d:"M11 14h10"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344"}],["path",{d:"m17 18 4-4-4-4"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}],["path",{d:"M12 17v-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 12 16.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 7.5 12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=[["path",{d:"M12 6v6l4 2"}],["path",{d:"M16 21.16a10 10 0 1 1 5-13.516"}],["path",{d:"M20 11.5v6"}],["path",{d:"M20 21.5h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=[["path",{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227"}],["path",{d:"M12 6v6l2 1"}],["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M18 14v8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=[["path",{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338"}],["path",{d:"M12 6v6l1.562.781"}],["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M18 22v-8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 6v6l4 2"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=[["path",{d:"M12 6v6l3.644 1.822"}],["path",{d:"M16 19h6"}],["path",{d:"M19 16v6"}],["path",{d:"M21.92 13.267a10 10 0 1 0-8.653 8.653"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=[["path",{d:"M12 12v4"}],["path",{d:"M12 20h.01"}],["path",{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=[["path",{d:"m10.852 19.772-.383.924"}],["path",{d:"m13.148 14.228.383-.923"}],["path",{d:"M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"}],["path",{d:"m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"}],["path",{d:"m14.772 15.852.923-.383"}],["path",{d:"m14.772 18.148.923.383"}],["path",{d:"M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m9.228 15.852-.923-.383"}],["path",{d:"m9.228 18.148-.923.383"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M11 20v2"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M7 19v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=[["path",{d:"M16.17 7.83 2 22"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"}],["path",{d:"m7.83 7.83 8.34 8.34"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 3v18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=[["path",{d:"M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"M15 3v7.5"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m20.7 16.8 1-.4"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"M9 3v18"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7.5 3v18"}],["path",{d:"M12 3v18"}],["path",{d:"M16.5 3v18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"m7 21 3-3-3-3"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M16 2v2"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"12",r:"4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["polyline",{points:"15 10 20 15 15 20"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["polyline",{points:"14 15 9 20 4 15"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["polyline",{points:"14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=[["polyline",{points:"10 15 15 20 20 15"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=[["polyline",{points:"10 9 15 4 20 9"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=[["polyline",{points:"9 14 4 9 9 4"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=[["polyline",{points:"15 14 20 9 15 4"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M2 6h4"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=[["path",{d:"m13 21-3-3 3-3"}],["path",{d:"M20 18H10"}],["path",{d:"M3 11h.01"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=[["path",{d:"M10 18h10"}],["path",{d:"m17 21 3-3-3-3"}],["path",{d:"M3 11h.01"}],["rect",{x:"15",y:"3",width:"5",height:"8",rx:"2.5"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"}],["path",{d:"m12 9 6 6"}],["path",{d:"m18 9-6 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=[["circle",{cx:"12",cy:"4",r:"2"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=[["path",{d:"M12 8v8"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3"}],["path",{d:"m2 2 20 20"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=[["path",{d:"m10 16 1.5 1.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=[["path",{d:"M2 8h20"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 16h12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=[["path",{d:"M11.25 16.25h1.5L12 17z"}],["path",{d:"M16 14v.5"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"}],["path",{d:"M8 14v.5"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=[["path",{d:"M10 12h.01"}],["path",{d:"M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h8"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}],["rect",{x:"14",y:"17",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=[["path",{d:"M10 12h.01"}],["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=[["circle",{cx:"12.1",cy:"12.1",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=[["path",{d:"M11 20H2"}],["path",{d:"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"}],["path",{d:"M11 4H8a2 2 0 0 0-2 2v14"}],["path",{d:"M14 12h.01"}],["path",{d:"M22 20h-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=[["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0"}],["path",{d:"m21 21-2.16-3.84"}],["path",{d:"m3 21 8.02-14.26"}],["circle",{cx:"12",cy:"5",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"}],["path",{d:"M18 6h4"}],["path",{d:"m5 10-2 8"}],["path",{d:"m7 18 2-8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"}],["path",{d:"m2.5 21.5 1.4-1.4"}],["path",{d:"m20.1 3.9 1.4-1.4"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"}],["path",{d:"m9.6 14.4 4.8-4.8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a7 7 0 1 0 10 10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}],["path",{d:"M22 21H7"}],["path",{d:"m5 11 9 9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"}],["path",{d:"M6 8v1"}],["path",{d:"M10 8v1"}],["path",{d:"M14 8v1"}],["path",{d:"M18 8v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"m15 15 6 6"}],["path",{d:"m15 9 6-6"}],["path",{d:"M21 16v5h-5"}],["path",{d:"M21 8V3h-5"}],["path",{d:"M3 16v5h5"}],["path",{d:"m3 21 6-6"}],["path",{d:"M3 8V3h5"}],["path",{d:"M9 9 3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"m15 18-.722-3.25"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0"}],["path",{d:"m20 15-1.726-2.05"}],["path",{d:"m4 15 1.726-2.05"}],["path",{d:"m9 18 .722-3.25"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"}],["path",{d:"M16 8 2 22"}],["path",{d:"M17.5 15H9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}],["path",{d:"M10 7V6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"}],["circle",{cx:"10",cy:"20",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"3",cy:"17",r:"1"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 18 4-4"}],["path",{d:"M8 10v8h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"m13.69 12.479 1.29 4.88a.5.5 0 0 1-.697.591l-1.844-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"}],["path",{d:"M7 17v5"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-2"}],["path",{d:"M12 18v-4"}],["path",{d:"M16 18v-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-1"}],["path",{d:"M12 18v-6"}],["path",{d:"M16 18v-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3 15 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"8",cy:"16",r:"6"}],["path",{d:"M9.5 17.5 8 16.25V14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m5 12-3 3 3 3"}],["path",{d:"m9 18 3-3-3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m2.305 15.53.923-.382"}],["path",{d:"m3.228 12.852-.924-.383"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"}],["path",{d:"m4.852 11.228-.383-.923"}],["path",{d:"m4.852 16.772-.383.924"}],["path",{d:"m7.148 11.228.383-.923"}],["path",{d:"m7.53 17.696-.382-.924"}],["path",{d:"m8.772 12.852.923-.383"}],["path",{d:"m8.772 15.148.923.383"}],["circle",{cx:"6",cy:"14",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"10",cy:"12",r:"2"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=[["path",{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"}],["path",{d:"M8 18v-7.7L16 9v7"}],["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"}],["path",{d:"m5 11-3 3"}],["path",{d:"m5 17-3-3h10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M8 18h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=[["path",{d:"M12 17h.01"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.3 16.3 15 18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 18-1.5-1.5"}],["circle",{cx:"5",cy:"14",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 12h8"}],["path",{d:"M10 11v2"}],["path",{d:"M8 17h8"}],["path",{d:"M14 16v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=[["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M5 12v6"}],["path",{d:"M4 18h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M12 12v6"}],["path",{d:"M11 18h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 18a3 3 0 1 0-6 0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["circle",{cx:"12",cy:"13",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 15h.01"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3"}],["path",{d:"M15 12a5 5 0 0 1 0 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=[["path",{d:"M11 11a5 5 0 0 1 0 6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 12.5-5 5"}],["path",{d:"m3 12.5 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14.5 12.5-5 5"}],["path",{d:"m9.5 12.5 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}],["path",{d:"M4 22V4"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=[["path",{d:"M17 22V2L7 7l10 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=[["path",{d:"M7 22V2l10 5-10 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=[["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"}],["path",{d:"M6.453 15H15"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"}],["path",{d:"M6.453 15h11.094"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2"}],["path",{d:"M5 15h14"}],["path",{d:"M8.5 2h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"}],["path",{d:"M12 7.5V9"}],["path",{d:"M7.5 12H9"}],["path",{d:"M16.5 12H15"}],["path",{d:"M12 16.5V15"}],["path",{d:"m8 8 1.88 1.88"}],["path",{d:"M14.12 9.88 16 8"}],["path",{d:"m8 16 1.88-1.88"}],["path",{d:"M14.12 14.12 16 16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["path",{d:"M16 14v2l1 1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M10 10.5 8 13l2 2.5"}],["path",{d:"m14 10.5 2 2.5-2 2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3"}],["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.9-1.9"}],["circle",{cx:"17",cy:"17",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}],["path",{d:"m8 16 3-3-3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["polyline",{points:"15 17 20 12 15 7"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"}],["path",{d:"M16 6h6"}],["path",{d:"M19 3v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}],["path",{d:"M2 12h8.5"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["path",{d:"M2 21V3"}],["path",{d:"M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26"}],["path",{d:"M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"}],["circle",{cx:"16",cy:"11",r:"2"}],["circle",{cx:"8",cy:"11",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"M16 19h6"}],["path",{d:"M19 22v-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 16 5 5"}],["path",{d:"m16 21 5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M12 3v18"}],["path",{d:"M3 12h18"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"m11.9 12.1 4.514-4.514"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"}],["path",{d:"m6 16 2 2"}],["path",{d:"M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"}],["path",{d:"m8.5 16.5-1-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25"}],["path",{d:"M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2"}],["path",{d:"M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0"}],["path",{d:"m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 16 6 6"}],["circle",{cx:"16",cy:"9",r:"2.9"}],["circle",{cx:"6",cy:"5",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 15 6 6"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 13 6 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M12 3V2"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2"}],["path",{d:"M4 10h16"}],["path",{d:"M5 10a7 7 0 0 1 14 0"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}],["path",{d:"m21 3 1 11h-2"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}],["path",{d:"M3 4h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M12 18V6"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3"}],["path",{d:"M21 10v8"}],["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M21 14h-1.343"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5"}],["path",{d:"M15 15h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5"}],["path",{d:"M15 15h6"}],["path",{d:"M18 12v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M11 8c2-3-2-3 0-6"}],["path",{d:"M15.5 8c2-3-2-3 0-6"}],["path",{d:"M6 10h.01"}],["path",{d:"M6 14h.01"}],["path",{d:"M10 16v-4"}],["path",{d:"M14 16v-4"}],["path",{d:"M18 16v-4"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}],["path",{d:"M5 20v2"}],["path",{d:"M19 20v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M12 6v4"}],["path",{d:"M14 14h-4"}],["path",{d:"M14 18h-4"}],["path",{d:"M14 8h-4"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M10 22v-6.57"}],["path",{d:"M12 11h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M14 15.43V22"}],["path",{d:"M15 16a5 5 0 0 0-6 0"}],["path",{d:"M16 11h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 7h.01"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M10 12V8.964"}],["path",{d:"M14 12V8.964"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M9.5 13.866a4 4 0 0 1 5 .01"}],["path",{d:"M12 17h.01"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["path",{d:"M7 10.754a8 8 0 0 1 10 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"}],["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M15 6h6"}],["path",{d:"M18 3v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M16 10h2"}],["path",{d:"M16 14h2"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0"}],["circle",{cx:"9",cy:"11",r:"2"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19 3 3v-5.5"}],["path",{d:"m17 22 3-3"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"m11 16-5 5"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3-3 3 3"}],["path",{d:"M17 22v-5.5"}],["circle",{cx:"9",cy:"9",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M16 3h5v5"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2"}],["path",{d:"M21 12v3"}],["path",{d:"m21 3-5 5"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"}],["path",{d:"M9 3h3"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"}],["circle",{cx:"12",cy:"8",r:"2"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m7 8-4 4 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M21 12H11"}],["path",{d:"M21 18H11"}],["path",{d:"M21 6H11"}],["path",{d:"m3 8 4 4-4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}],["polyline",{points:"16 14 20 18 16 22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}],["polyline",{points:"8 22 4 18 8 14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"}],["path",{d:"m14 7 3 3"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M 20 4 A2 2 0 0 1 22 6"}],["path",{d:"M 22 6 L 22 16.41"}],["path",{d:"M 7 16 L 16 16"}],["path",{d:"M 9.69 4 L 20 4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M6 8h.01"}],["path",{d:"M8 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M12 2v5"}],["path",{d:"M14.829 15.998a3 3 0 1 1-5.658 0"}],["path",{d:"M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z"}],["path",{d:"m14.207 4.793-3.414 3.414"}],["path",{d:"M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"}],["path",{d:"m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M12 10v12"}],["path",{d:"M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z"}],["path",{d:"M9 22h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z"}],["path",{d:"M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"}],["path",{d:"M8 6h4a2 2 0 0 1 2 2v5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z"}],["path",{d:"M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"}],["path",{d:"M8 18h4a2 2 0 0 0 2-2v-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M12 12v6"}],["path",{d:"M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"}],["path",{d:"M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M2 20h20"}],["path",{d:"m9 10 2 2 4-4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"}],["path",{d:"M20.054 15.987H3.946"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"}],["path",{d:"m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M15 12h6"}],["path",{d:"M15 6h6"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"}],["path",{d:"M3 18h18"}],["path",{d:"M3.92 11h6.16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}],["path",{d:"M6 12h4"}],["path",{d:"M14 12h2v8"}],["path",{d:"M6 20h4"}],["path",{d:"M14 20h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M11 18H3"}],["path",{d:"m15 18 2 2 4-4"}],["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["path",{d:"m3 10 2.5-2.5L3 5"}],["path",{d:"m3 19 2.5-2.5L3 14"}],["path",{d:"M10 6h11"}],["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M10 18h4"}],["path",{d:"M11 6H3"}],["path",{d:"M15 6h6"}],["path",{d:"M18 9V3"}],["path",{d:"M7 12h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}],["path",{d:"M10 6h11"}],["path",{d:"M4 10h2"}],["path",{d:"M4 6h1v4"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"M12 19v3"}],["path",{d:"M12 2v3"}],["path",{d:"M18.89 13.24a7 7 0 0 0-8.13-8.13"}],["path",{d:"M19 12h3"}],["path",{d:"M2 12h3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.05 7.05a7 7 0 0 0 9.9 9.9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"10",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}],["path",{d:"M13 6h8"}],["path",{d:"M3 12h1"}],["path",{d:"M3 18h1"}],["path",{d:"M3 6h1"}],["path",{d:"M8 12h1"}],["path",{d:"M8 18h1"}],["path",{d:"M8 6h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m9 10 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m16 18 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"}],["path",{d:"M18 22v-3"}],["circle",{cx:"10",cy:"10",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}],["path",{d:"M19 15v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m21.5 15.5-5 5"}],["path",{d:"m21.5 20.5-5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12"}],["path",{d:"M15 5.764V12"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}],["path",{d:"M9 3.236v15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["path",{d:"m14 6 4 4"}],["path",{d:"M17 3h4v4"}],["path",{d:"m21 3-7.75 7.75"}],["circle",{cx:"9",cy:"15",r:"6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M16 3h5v5"}],["path",{d:"m21 3-6.75 6.75"}],["circle",{cx:"10",cy:"14",r:"6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["polyline",{points:"15 3 21 3 21 9"}],["polyline",{points:"9 21 3 21 3 15"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14"}],["path",{d:"M21 15.34V6l-7.31 2.03"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M4 12h16"}],["path",{d:"M4 18h16"}],["path",{d:"M4 6h16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M10 7.5 8 10l2 2.5"}],["path",{d:"m14 7.5 2 2.5-2 2.5"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M10 17H7l-4 4v-7"}],["path",{d:"M14 17h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}],["path",{d:"M9 17h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}],["circle",{cx:"18",cy:"6",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M19 15v-2a2 2 0 1 0-4 0v2"}],["path",{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5"}],["rect",{x:"13",y:"15",width:"8",height:"5",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M16 10h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 7-3 3 3 3"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}],["path",{d:"M16 3h5v5"}],["path",{d:"m16 8 5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M13 8H7"}],["path",{d:"M17 12H7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"}],["circle",{cx:"16",cy:"7",r:"5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M18 12h2"}],["path",{d:"M18 16h2"}],["path",{d:"M18 20h2"}],["path",{d:"M18 4h2"}],["path",{d:"M18 8h2"}],["path",{d:"M4 12h2"}],["path",{d:"M4 16h2"}],["path",{d:"M4 20h2"}],["path",{d:"M4 4h2"}],["path",{d:"M4 8h2"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["polyline",{points:"4 14 10 14 10 20"}],["polyline",{points:"20 10 14 10 14 4"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M5 12h14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"M12 17v4"}],["path",{d:"m14.305 7.53.923-.382"}],["path",{d:"m15.228 4.852-.923-.383"}],["path",{d:"m16.852 3.228-.383-.924"}],["path",{d:"m16.852 8.772-.383.923"}],["path",{d:"m19.148 3.228.383-.924"}],["path",{d:"m19.53 9.696-.382-.924"}],["path",{d:"m20.772 4.852.924-.383"}],["path",{d:"m20.772 7.148.924.383"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["path",{d:"M8 21h8"}],["circle",{cx:"18",cy:"6",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M12 6v.343"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902"}],["path",{d:"M22 22 2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"}],["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"m11.8 11.8 8.4 8.4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M19 13v6h-6"}],["path",{d:"M5 11V5h6"}],["path",{d:"m5 5 14 14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["path",{d:"M11 19H5v-6"}],["path",{d:"M13 5h6v6"}],["path",{d:"M19 5 5 19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"M2 12h20"}],["path",{d:"m6 8-4 4 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rC=[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["path",{d:"M12 2v20"}],["path",{d:"m8 18 4 4 4-4"}],["path",{d:"m8 6 4-4 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M12 2v20"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m19 9 3 3-3 3"}],["path",{d:"M2 12h20"}],["path",{d:"m5 9-3 3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["path",{d:"M15 18h-5"}],["path",{d:"M18 14h-8"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"}],["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=[["path",{d:"M12 2v10"}],["path",{d:"m8.5 4 7 4"}],["path",{d:"m8.5 8 7-4"}],["circle",{cx:"12",cy:"17",r:"5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M15 2v20"}],["path",{d:"M15 7h5"}],["path",{d:"M15 12h5"}],["path",{d:"M15 17h5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M9.5 8h5"}],["path",{d:"M9.5 12H16"}],["path",{d:"M9.5 16H14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M16 2v20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{d:"M20 12v2"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1"}],["path",{d:"M13 22h-2"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2"}],["path",{d:"M4 14v-2"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=[["path",{d:"m15 9-6 6"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152"}],["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=[["path",{d:"M12 3v6"}],["path",{d:"M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z"}],["path",{d:"M3.054 9.013h17.893"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v4"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=[["path",{d:"m14.622 17.897-10.68-2.913"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["path",{d:"M11.25 17.25h1.5L12 18z"}],["path",{d:"m15 12 2 2"}],["path",{d:"M18 6.5a.5.5 0 0 0-.5-.5"}],["path",{d:"M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83"}],["path",{d:"M6 6.5a.495.495 0 0 1 .5-.5"}],["path",{d:"m9 12-2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m15 8-3 3-3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m9 10 3-3 3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m8 9 3 3-3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m10 15-3-3 3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 16 3-3 3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m15 14-3 3-3-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M9 15h12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h12"}],["path",{d:"M15 3v18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["path",{d:"M13.234 20.252 21 12.3"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M11 15h2"}],["path",{d:"M12 12v3"}],["path",{d:"M12 19v3"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"}],["path",{d:"M9 9a3 3 0 1 1 6 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"}],["path",{d:"m2.3 2.3 7.286 7.286"}],["circle",{cx:"11",cy:"11",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}],["path",{d:"m15 5 3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m15 5 4 4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M20 11H4"}],["path",{d:"M20 7H4"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"M13 2a9 9 0 0 1 9 9"}],["path",{d:"M13 6a5 5 0 0 1 5 5"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["path",{d:"M14 6h8"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"M16 2v6h6"}],["path",{d:"m22 2-6 6"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"m16 2 6 6"}],["path",{d:"m22 2-6 6"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"}],["path",{d:"M22 2 2 22"}],["path",{d:"M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"m16 8 6-6"}],["path",{d:"M22 8V2h-6"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M2 10h6V4"}],["path",{d:"m2 4 6 6"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"}],["path",{d:"M16 10h.01"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M14 3v11"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9"}],["path",{d:"M18 3v11"}],["path",{d:"M22 18H2l4-4"}],["path",{d:"m6 22-4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M10 3v11"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8"}],["path",{d:"M14 3v11"}],["path",{d:"m18 14 4 4H2"}],["path",{d:"m22 18-4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"M12 17v5"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"}],["path",{d:"m2 2 20 20"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"M12 17v5"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z"}],["path",{d:"m2 22 .414-.414"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"m12 14-1 1"}],["path",{d:"m13.75 18.25-1.25 1.42"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["polygon",{points:"6 3 20 12 6 21 6 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}],["polyline",{points:"8 10 12 14 16 10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M12 9v11"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M12 12h.01"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M13.236 18a3 3 0 0 0-2.2-5"}],["path",{d:"M16 9h.01"}],["path",{d:"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"}],["path",{d:"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M12 6.5v11"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 7h8"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8"}],["path",{d:"M8 11h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 12h5"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"m12 10 3-3"}],["path",{d:"m9 7 3 3v7.5"}],["path",{d:"M9 11h6"}],["path",{d:"M9 15h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 13h5"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 17h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 15h5"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M10 17V7h5"}],["path",{d:"M10 11h4"}],["path",{d:"M8 15h5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=[["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=[["polyline",{points:"7 17 2 12 7 7"}],["polyline",{points:"12 17 7 12 12 7"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=[["polyline",{points:"9 17 4 12 9 7"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"}],["path",{d:"m12 18 2.57-3.5"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009"}],["path",{d:"M9.35 14.53 12 11.22"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=[["path",{d:"m14.5 9.5 1 1"}],["path",{d:"m15.5 8.5-4 4"}],["path",{d:"M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["circle",{cx:"10",cy:"14",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6"}],["path",{d:"m15 2-3 3 3 3"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 8 3-3-3-3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 7.5H3"}],["path",{d:"M21 12H3"}],["path",{d:"M21 16.5H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=[["path",{d:"M12 15v-3.014"}],["path",{d:"M16 15v-3.014"}],["path",{d:"M20 6H4"}],["path",{d:"M20 8V4"}],["path",{d:"M4 8V4"}],["path",{d:"M8 15v-3.014"}],["rect",{x:"3",y:"12",width:"18",height:"7",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"m20 19.5-5.5 1.2"}],["path",{d:"M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2"}],["path",{d:"m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2"}],["path",{d:"M20 10 4 13.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7"}],["path",{d:"M14 8h1"}],["path",{d:"M17 21v-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"}],["path",{d:"M29.5 11.5s5 5 4 5"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11"}],["path",{d:"M5.293 18.707 11 13"}],["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M14 15H9v-5"}],["path",{d:"M16 3h5v5"}],["path",{d:"M21 3 9 15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=[["path",{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M17 8V7"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 17h.01"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=[["path",{d:"m13 13.5 2-2.5-2-2.5"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M9 8.5 7 11l2 2.5"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tL=[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eL=[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aL=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iL=[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"}],["path",{d:"M6 12h16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nL=[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sL=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oL=[["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["polyline",{points:"8 8 12 4 16 8"}],["polyline",{points:"16 16 12 20 8 16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rL=[["line",{x1:"12",x2:"12",y1:"3",y2:"21"}],["polyline",{points:"8 8 4 12 8 16"}],["polyline",{points:"16 16 20 12 16 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hL=[["path",{d:"m10.852 14.772-.383.923"}],["path",{d:"M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"}],["path",{d:"m13.148 9.228.383-.923"}],["path",{d:"m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"}],["path",{d:"m14.772 10.852.923-.383"}],["path",{d:"m14.772 13.148.923.383"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 18h.01"}],["path",{d:"M6 6h.01"}],["path",{d:"m9.228 10.852-.923-.383"}],["path",{d:"m9.228 13.148-.923.383"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cL=[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lL=[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dL=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pL=[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uL=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fL=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gL=[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mL=[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{points:"16 6 12 2 8 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ML=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vL=[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m4.243 5.21 14.39 12.472"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _L=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 22V2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CL=[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M6.376 18.91a6 6 0 0 1 11.249.003"}],["circle",{cx:"12",cy:"11",r:"4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"m9.5 9.5 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LL=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TL=[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HL=[["path",{d:"M12 10.189V14"}],["path",{d:"M12 2v3"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VL=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PL=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OL=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DL=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RL=[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IL=[["path",{d:"M10 22v-5"}],["path",{d:"M14 19v-2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M18 20v-3"}],["path",{d:"M2 13h20"}],["path",{d:"M20 13V7l-5-5H6a2 2 0 0 0-2 2v9"}],["path",{d:"M6 20v-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zL=[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BL=[["path",{d:"M11 12h.01"}],["path",{d:"M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1"}],["path",{d:"M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8"}],["path",{d:"M14 8a8.5 8.5 0 0 1 0 8"}],["path",{d:"M16 16c2 0 4.5-4 4-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NL=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FL=[["path",{d:"M12 22v-7l-2-2"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"}],["path",{d:"m14 14-2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $L=[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WL=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jL=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UL=[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qL=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZL=[["path",{d:"M2 20h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YL=[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KL=[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"}],["path",{d:"M3 21h18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XL=[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GL=[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QL=[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JL=[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M22 2 2 22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M10.5 2v4"}],["path",{d:"M14 2H7a2 2 0 0 0-2 2"}],["path",{d:"M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19"}],["path",{d:"M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{d:"m3 21 9-9"}],["path",{d:"M9 21H3v-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21 21-9-9"}],["path",{d:"M21 15v6h-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}],["path",{d:"m3 3 9 9"}],["path",{d:"M3 9V3h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"M14 21h1"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M7 12h2l2 5 2-10h4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M21 11a8 8 0 0 0-8-8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"}],["path",{d:"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"M10 22a2 2 0 0 1-2-2"}],["path",{d:"M16 22h-2"}],["path",{d:"M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"}],["path",{d:"M20 8a2 2 0 0 1 2 2"}],["path",{d:"M22 14v2"}],["path",{d:"M22 20a2 2 0 0 1-2 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M10 22a2 2 0 0 1-2-2"}],["path",{d:"M14 2a2 2 0 0 1 2 2"}],["path",{d:"M16 22h-2"}],["path",{d:"M2 10V8"}],["path",{d:"M2 4a2 2 0 0 1 2-2"}],["path",{d:"M20 8a2 2 0 0 1 2 2"}],["path",{d:"M22 14v2"}],["path",{d:"M22 20a2 2 0 0 1-2 2"}],["path",{d:"M4 16a2 2 0 0 1-2-2"}],["path",{d:"M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"}],["path",{d:"M8 2h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M18 13h.01"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M5 22h14"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tH=[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eH=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aH=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iH=[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.9 4.9 1.4 1.4"}],["path",{d:"m17.7 17.7 1.4 1.4"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.3 17.7-1.4 1.4"}],["path",{d:"m19.1 4.9-1.4 1.4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nH=[["path",{d:"M10 21v-1"}],["path",{d:"M10 4V3"}],["path",{d:"M10 9a3 3 0 0 0 0 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6 1.5-3H22"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h1"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sH=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oH=[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rH=[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hH=[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cH=[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}],["path",{d:"M 7 17h.01"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lH=[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dH=[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pH=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uH=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fH=[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gH=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mH=[["path",{d:"M12 21v-6"}],["path",{d:"M12 9V3"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MH=[["path",{d:"M12 15V9"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vH=[["path",{d:"M14 14v2"}],["path",{d:"M14 20v2"}],["path",{d:"M14 2v2"}],["path",{d:"M14 8v2"}],["path",{d:"M2 15h8"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}],["path",{d:"M2 9h8"}],["path",{d:"M22 15h-4"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["path",{d:"M22 9h-4"}],["path",{d:"M5 3v18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yH=[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M16 6H3"}],["path",{d:"M21 12h.01"}],["path",{d:"M21 18h.01"}],["path",{d:"M21 6h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xH=[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bH=[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wH=[["path",{d:"M14 10h2"}],["path",{d:"M15 22v-8"}],["path",{d:"M15 2v4"}],["path",{d:"M2 10h2"}],["path",{d:"M20 10h2"}],["path",{d:"M3 19h18"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"}],["path",{d:"M8 10h2"}],["path",{d:"M9 22v-8"}],["path",{d:"M9 2v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _H=[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AH=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CH=[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EH=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SH=[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kH=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LH=[["path",{d:"M4 4v16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TH=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HH=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VH=[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PH=[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OH=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DH=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"}],["path",{d:"m13.56 11.747 4.332-.924"}],["path",{d:"m16 21-3.105-6.21"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"}],["path",{d:"m6.158 8.633 1.114 4.456"}],["path",{d:"m8 21 3.105-6.21"}],["circle",{cx:"12",cy:"13",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RH=[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IH=[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zH=[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BH=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NH=[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FH=[["path",{d:"M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1"}],["path",{d:"M9 6v12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $H=[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WH=[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jH=[["path",{d:"M21 6H3"}],["path",{d:"M10 12H3"}],["path",{d:"M10 18H3"}],["circle",{cx:"17",cy:"15",r:"3"}],["path",{d:"m21 19-1.9-1.9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M14 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}],["path",{d:"M7 8h8"}],["path",{d:"M9 21h1"}],["path",{d:"M9 3h1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UH=[["path",{d:"M15 18H3"}],["path",{d:"M17 6H3"}],["path",{d:"M21 12H3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qH=[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZH=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"M10.585 15H10"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YH=[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KH=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XH=[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GH=[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QH=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JH=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 9h.01"}],["path",{d:"m15 9-6 6"}],["path",{d:"M15 15h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}],["path",{d:"m9.5 9.5 5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}],["path",{d:"m12 13.5 3.75.5"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=[["circle",{cx:"9",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["circle",{cx:"15",cy:"12",r:"3"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["path",{d:"M12 20v-6"}],["path",{d:"M19.656 14H22"}],["path",{d:"M2 14h12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M9.656 4H20a2 2 0 0 1 2 2v10.344"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"}],["path",{d:"M16 18h-5"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"}],["path",{d:"M4 11V4"}],["path",{d:"M7 15h.01"}],["path",{d:"M8 10.1V4"}],["circle",{cx:"18",cy:"18",r:"2"}],["circle",{cx:"7",cy:"15",r:"5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"M16.05 10.966a5 2.5 0 0 1-8.1 0"}],["path",{d:"m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04"}],["path",{d:"M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z"}],["path",{d:"M9.194 6.57a5 2.5 0 0 0 5.61 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"M12 16v6"}],["path",{d:"M14 20h-4"}],["path",{d:"M18 2h4v4"}],["path",{d:"m2 2 7.17 7.17"}],["path",{d:"M2 5.355V2h3.357"}],["path",{d:"m22 2-7.17 7.17"}],["path",{d:"M8 5 5 8"}],["circle",{cx:"12",cy:"12",r:"4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{points:"16 17 22 17 22 11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["path",{d:"M14.828 14.828 21 21"}],["path",{d:"M21 16v5h-5"}],["path",{d:"m21 3-9 9-4-4-6 6"}],["path",{d:"M21 8V3h-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["path",{d:"M10.17 4.193a2 2 0 0 1 3.666.013"}],["path",{d:"M14 21h2"}],["path",{d:"m15.874 7.743 1 1.732"}],["path",{d:"m18.849 12.952 1 1.732"}],["path",{d:"M21.824 18.18a2 2 0 0 1-1.835 2.824"}],["path",{d:"M4.024 21a2 2 0 0 1-1.839-2.839"}],["path",{d:"m5.136 12.952-1 1.732"}],["path",{d:"M8 21h2"}],["path",{d:"m8.102 7.743-1 1.732"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["path",{d:"M14 19V7a2 2 0 0 0-2-2H9"}],["path",{d:"M15 19H9"}],["path",{d:"M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"}],["path",{d:"M2 13v5a1 1 0 0 0 1 1h2"}],["path",{d:"M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"}],["circle",{cx:"17",cy:"19",r:"2"}],["circle",{cx:"7",cy:"19",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2"}],["polyline",{points:"17 2 12 7 7 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["polyline",{points:"4 7 4 4 20 4 20 7"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13"}],["path",{d:"M3 7v6h6"}],["circle",{cx:"12",cy:"17",r:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["circle",{cx:"12",cy:"10",r:"1"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M6 17v.01"}],["path",{d:"M6 13v.01"}],["path",{d:"M18 17v.01"}],["path",{d:"M18 13v.01"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["polyline",{points:"16 11 18 13 22 9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m14.305 16.53.923-.382"}],["path",{d:"m15.228 13.852-.923-.383"}],["path",{d:"m16.852 12.228-.383-.923"}],["path",{d:"m16.852 17.772-.383.924"}],["path",{d:"m19.148 12.228.383-.923"}],["path",{d:"m19.53 18.696-.382-.924"}],["path",{d:"m20.772 13.852.924-.383"}],["path",{d:"m20.772 16.148.924.383"}],["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["path",{d:"M15 15.5V14a2 2 0 0 1 4 0v1.5"}],["rect",{width:"8",height:"5",x:"13",y:"16",rx:".899"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"7",r:"4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"m14.305 19.53.923-.382"}],["path",{d:"m15.228 16.852-.923-.383"}],["path",{d:"m16.852 15.228-.383-.923"}],["path",{d:"m16.852 20.772-.383.924"}],["path",{d:"m19.148 15.228.383-.923"}],["path",{d:"m19.53 21.696-.382-.924"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["path",{d:"m20.772 16.852.924-.383"}],["path",{d:"m20.772 19.148.924.383"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"8",r:"5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=[["path",{d:"M16 8q6 0 6-6-6 0-6 6"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 7.9 2.7 2.7"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 10.6 2.7-2.7"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 16.1 2.7-2.7"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 13.4 2.7 2.7"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=[["path",{d:"M18 11c-1.5 0-2.5.5-3 2"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["path",{d:"M10 20h4"}],["path",{d:"M12 16v6"}],["path",{d:"M17 2h4v4"}],["path",{d:"m21 2-5.46 5.46"}],["circle",{cx:"12",cy:"11",r:"5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["path",{d:"M12 15v7"}],["path",{d:"M9 19h6"}],["circle",{cx:"12",cy:"9",r:"6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=[["path",{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4"}],["path",{d:"M12 12a12.6 12.6 0 0 1-8.7 5"}],["path",{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5"}],["path",{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"}],["path",{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"}],["circle",{cx:"12",cy:"12",r:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["path",{d:"M16 9a5 5 0 0 1 .95 2.293"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}],["path",{d:"m2 2 20 20"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h.01"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}],["path",{d:"M6 18h12"}],["path",{d:"M6 14h12"}],["rect",{width:"12",height:"12",x:"6",y:"10"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["path",{d:"M3 6h3"}],["path",{d:"M17 6h.01"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2"}],["circle",{cx:"12",cy:"13",r:"5"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=[["circle",{cx:"12",cy:"12",r:"6"}],["polyline",{points:"12 10 12 12 13 13"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"M19 5a2 2 0 0 0-2 2v11"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M7 13h10"}],["path",{d:"M7 9h10"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414"}],["path",{d:"m12 6 .6 1"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tO=[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iO=[["path",{d:"M12 20h.01"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nO=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sO=[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=[["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M5 12.859a10 10 0 0 1 10.5-2.222"}],["path",{d:"M8.5 16.429a5 5 0 0 1 3-1.406"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rO=[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["path",{d:"M12 20h.01"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=[["path",{d:"M10 2v8"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"m6 6 4 4 4-4"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=[["path",{d:"m19 12-1.5 3"}],["path",{d:"M19.63 18.81 22 20"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["polyline",{points:"16 16 14 18 16 20"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]];/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oW=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:P4,AArrowUp:O4,ALargeSmall:D4,Accessibility:R4,Activity:I4,ActivitySquare:Tr,AirVent:z4,Airplay:B4,AlarmCheck:po,AlarmClock:F4,AlarmClockCheck:po,AlarmClockMinus:uo,AlarmClockOff:N4,AlarmClockPlus:fo,AlarmMinus:uo,AlarmPlus:fo,AlarmSmoke:$4,Album:W4,AlertCircle:Fo,AlertOctagon:or,AlertTriangle:Vh,AlignCenter:Z4,AlignCenterHorizontal:j4,AlignCenterVertical:U4,AlignEndHorizontal:q4,AlignEndVertical:K4,AlignHorizontalDistributeCenter:Y4,AlignHorizontalDistributeEnd:X4,AlignHorizontalDistributeStart:G4,AlignHorizontalJustifyCenter:Q4,AlignHorizontalJustifyEnd:J4,AlignHorizontalJustifyStart:tf,AlignHorizontalSpaceAround:ef,AlignHorizontalSpaceBetween:nf,AlignJustify:af,AlignLeft:of,AlignRight:sf,AlignStartHorizontal:rf,AlignStartVertical:hf,AlignVerticalDistributeCenter:cf,AlignVerticalDistributeEnd:lf,AlignVerticalDistributeStart:pf,AlignVerticalJustifyCenter:df,AlignVerticalJustifyEnd:uf,AlignVerticalJustifyStart:ff,AlignVerticalSpaceAround:mf,AlignVerticalSpaceBetween:gf,Ambulance:Mf,Ampersand:vf,Ampersands:yf,Amphora:xf,Anchor:bf,Angry:wf,Annoyed:_f,Antenna:Af,Anvil:Cf,Aperture:Ef,AppWindow:kf,AppWindowMac:Sf,Apple:Lf,Archive:Vf,ArchiveRestore:Tf,ArchiveX:Hf,AreaChart:ko,Armchair:Df,ArrowBigDown:Of,ArrowBigDownDash:Pf,ArrowBigLeft:If,ArrowBigLeftDash:Rf,ArrowBigRight:Bf,ArrowBigRightDash:zf,ArrowBigUp:Ff,ArrowBigUpDash:Nf,ArrowDown:Gf,ArrowDown01:$f,ArrowDown10:Wf,ArrowDownAZ:go,ArrowDownAz:go,ArrowDownCircle:$o,ArrowDownFromLine:jf,ArrowDownLeft:Uf,ArrowDownLeftFromCircle:Wo,ArrowDownLeftFromSquare:Dr,ArrowDownLeftSquare:Hr,ArrowDownNarrowWide:qf,ArrowDownRight:Zf,ArrowDownRightFromCircle:Uo,ArrowDownRightFromSquare:Rr,ArrowDownRightSquare:Vr,ArrowDownSquare:Pr,ArrowDownToDot:Yf,ArrowDownToLine:Kf,ArrowDownUp:Xf,ArrowDownWideNarrow:mo,ArrowDownZA:Mo,ArrowDownZa:Mo,ArrowLeft:e3,ArrowLeftCircle:jo,ArrowLeftFromLine:Jf,ArrowLeftRight:Qf,ArrowLeftSquare:Or,ArrowLeftToLine:t3,ArrowRight:n3,ArrowRightCircle:Yo,ArrowRightFromLine:a3,ArrowRightLeft:s3,ArrowRightSquare:Br,ArrowRightToLine:i3,ArrowUp:g3,ArrowUp01:r3,ArrowUp10:o3,ArrowUpAZ:vo,ArrowUpAz:vo,ArrowUpCircle:Ko,ArrowUpDown:h3,ArrowUpFromDot:c3,ArrowUpFromLine:d3,ArrowUpLeft:l3,ArrowUpLeftFromCircle:qo,ArrowUpLeftFromSquare:Ir,ArrowUpLeftSquare:Fr,ArrowUpNarrowWide:yo,ArrowUpRight:p3,ArrowUpRightFromCircle:Zo,ArrowUpRightFromSquare:zr,ArrowUpRightSquare:Nr,ArrowUpSquare:$r,ArrowUpToLine:u3,ArrowUpWideNarrow:f3,ArrowUpZA:xo,ArrowUpZa:xo,ArrowsUpFromLine:m3,Asterisk:M3,AsteriskSquare:Wr,AtSign:v3,Atom:y3,AudioLines:x3,AudioWaveform:w3,Award:b3,Axe:_3,Axis3D:bo,Axis3d:bo,Baby:A3,Backpack:C3,Badge:F3,BadgeAlert:E3,BadgeCent:S3,BadgeCheck:wo,BadgeDollarSign:k3,BadgeEuro:L3,BadgeHelp:T3,BadgeIndianRupee:H3,BadgeInfo:V3,BadgeJapaneseYen:P3,BadgeMinus:O3,BadgePercent:D3,BadgePlus:R3,BadgePoundSterling:I3,BadgeRussianRuble:z3,BadgeSwissFranc:B3,BadgeX:N3,BaggageClaim:$3,Ban:W3,Banana:j3,Bandage:U3,Banknote:K3,BanknoteArrowDown:q3,BanknoteArrowUp:Z3,BanknoteX:Y3,BarChart:Ro,BarChart2:Io,BarChart3:Oo,BarChart4:Po,BarChartBig:Vo,BarChartHorizontal:To,BarChartHorizontalBig:Lo,Barcode:X3,Baseline:G3,Bath:Q3,Battery:sg,BatteryCharging:J3,BatteryFull:tg,BatteryLow:eg,BatteryMedium:ag,BatteryPlus:ig,BatteryWarning:ng,Beaker:og,Bean:rg,BeanOff:hg,Bed:dg,BedDouble:lg,BedSingle:cg,Beef:pg,Beer:fg,BeerOff:ug,Bell:bg,BellDot:gg,BellElectric:mg,BellMinus:Mg,BellOff:vg,BellPlus:yg,BellRing:xg,BetweenHorizonalEnd:_o,BetweenHorizonalStart:Ao,BetweenHorizontalEnd:_o,BetweenHorizontalStart:Ao,BetweenVerticalEnd:wg,BetweenVerticalStart:_g,BicepsFlexed:Ag,Bike:Cg,Binary:Eg,Binoculars:Sg,Biohazard:kg,Bird:Lg,Bitcoin:Tg,Blend:Hg,Blinds:Vg,Blocks:Pg,Bluetooth:Ig,BluetoothConnected:Og,BluetoothOff:Dg,BluetoothSearching:Rg,Bold:zg,Bolt:Bg,Bomb:Ng,Bone:Fg,Book:l6,BookA:$g,BookAudio:Wg,BookCheck:jg,BookCopy:Ug,BookDashed:Co,BookDown:qg,BookHeadphones:Zg,BookHeart:Yg,BookImage:Kg,BookKey:Xg,BookLock:Qg,BookMarked:Gg,BookMinus:Jg,BookOpen:a6,BookOpenCheck:t6,BookOpenText:e6,BookPlus:i6,BookTemplate:Co,BookText:n6,BookType:s6,BookUp:r6,BookUp2:o6,BookUser:h6,BookX:c6,Bookmark:g6,BookmarkCheck:d6,BookmarkMinus:p6,BookmarkPlus:u6,BookmarkX:f6,BoomBox:m6,Bot:y6,BotMessageSquare:M6,BotOff:v6,BowArrow:b6,Box:x6,BoxSelect:th,Boxes:w6,Braces:Eo,Brackets:_6,Brain:E6,BrainCircuit:A6,BrainCog:C6,BrickWall:k6,BrickWallFire:S6,Briefcase:V6,BriefcaseBusiness:L6,BriefcaseConveyorBelt:T6,BriefcaseMedical:H6,BringToFront:P6,Brush:D6,BrushCleaning:O6,Bubbles:R6,Bug:B6,BugOff:I6,BugPlay:z6,Building:F6,Building2:N6,Bus:W6,BusFront:$6,Cable:U6,CableCar:j6,Cake:Z6,CakeSlice:q6,Calculator:Y6,Calendar:gm,Calendar1:K6,CalendarArrowDown:X6,CalendarArrowUp:G6,CalendarCheck:J6,CalendarCheck2:Q6,CalendarClock:tm,CalendarCog:em,CalendarDays:am,CalendarFold:im,CalendarHeart:nm,CalendarMinus:om,CalendarMinus2:sm,CalendarOff:rm,CalendarPlus:cm,CalendarPlus2:hm,CalendarRange:lm,CalendarSearch:dm,CalendarSync:pm,CalendarX:fm,CalendarX2:um,Camera:Mm,CameraOff:mm,CandlestickChart:Ho,Candy:xm,CandyCane:vm,CandyOff:ym,Cannabis:bm,Captions:So,CaptionsOff:wm,Car:Cm,CarFront:_m,CarTaxiFront:Am,Caravan:Em,Carrot:Sm,CaseLower:km,CaseSensitive:Lm,CaseUpper:Tm,CassetteTape:Hm,Cast:Vm,Castle:Om,Cat:Pm,Cctv:Dm,ChartArea:ko,ChartBar:To,ChartBarBig:Lo,ChartBarDecreasing:Rm,ChartBarIncreasing:Im,ChartBarStacked:zm,ChartCandlestick:Ho,ChartColumn:Oo,ChartColumnBig:Vo,ChartColumnDecreasing:Bm,ChartColumnIncreasing:Po,ChartColumnStacked:Nm,ChartGantt:Fm,ChartLine:Do,ChartNetwork:$m,ChartNoAxesColumn:Io,ChartNoAxesColumnDecreasing:Wm,ChartNoAxesColumnIncreasing:Ro,ChartNoAxesCombined:jm,ChartNoAxesGantt:zo,ChartPie:Bo,ChartScatter:No,ChartSpline:Um,Check:Ym,CheckCheck:qm,CheckCircle:Xo,CheckCircle2:Go,CheckLine:Zm,CheckSquare:Ur,CheckSquare2:qr,ChefHat:Km,Cherry:Xm,ChevronDown:Qm,ChevronDownCircle:Qo,ChevronDownSquare:Zr,ChevronFirst:Gm,ChevronLast:Jm,ChevronLeft:t8,ChevronLeftCircle:Jo,ChevronLeftSquare:Yr,ChevronRight:e8,ChevronRightCircle:t2,ChevronRightSquare:Kr,ChevronUp:a8,ChevronUpCircle:e2,ChevronUpSquare:Xr,ChevronsDown:n8,ChevronsDownUp:i8,ChevronsLeft:r8,ChevronsLeftRight:o8,ChevronsLeftRightEllipsis:s8,ChevronsRight:c8,ChevronsRightLeft:h8,ChevronsUp:d8,ChevronsUpDown:l8,Chrome:p8,Church:u8,Cigarette:g8,CigaretteOff:f8,Circle:S8,CircleAlert:Fo,CircleArrowDown:$o,CircleArrowLeft:jo,CircleArrowOutDownLeft:Wo,CircleArrowOutDownRight:Uo,CircleArrowOutUpLeft:qo,CircleArrowOutUpRight:Zo,CircleArrowRight:Yo,CircleArrowUp:Ko,CircleCheck:Go,CircleCheckBig:Xo,CircleChevronDown:Qo,CircleChevronLeft:Jo,CircleChevronRight:t2,CircleChevronUp:e2,CircleDashed:m8,CircleDivide:a2,CircleDollarSign:M8,CircleDot:y8,CircleDotDashed:v8,CircleEllipsis:x8,CircleEqual:b8,CircleFadingArrowUp:w8,CircleFadingPlus:_8,CircleGauge:i2,CircleHelp:n2,CircleMinus:s2,CircleOff:A8,CircleParking:r2,CircleParkingOff:o2,CirclePause:h2,CirclePercent:c2,CirclePlay:l2,CirclePlus:d2,CirclePower:p2,CircleSlash:C8,CircleSlash2:u2,CircleSlashed:u2,CircleSmall:E8,CircleStop:f2,CircleUser:m2,CircleUserRound:g2,CircleX:M2,CircuitBoard:k8,Citrus:L8,Clapperboard:T8,Clipboard:B8,ClipboardCheck:H8,ClipboardCopy:V8,ClipboardEdit:y2,ClipboardList:P8,ClipboardMinus:O8,ClipboardPaste:D8,ClipboardPen:y2,ClipboardPenLine:v2,ClipboardPlus:R8,ClipboardSignature:v2,ClipboardType:I8,ClipboardX:z8,Clock:iM,Clock1:N8,Clock10:F8,Clock11:$8,Clock12:W8,Clock2:j8,Clock3:U8,Clock4:q8,Clock5:Z8,Clock6:Y8,Clock7:K8,Clock8:X8,Clock9:G8,ClockAlert:Q8,ClockArrowDown:J8,ClockArrowUp:tM,ClockFading:eM,ClockPlus:aM,Cloud:vM,CloudAlert:nM,CloudCog:sM,CloudDownload:x2,CloudDrizzle:oM,CloudFog:rM,CloudHail:hM,CloudLightning:cM,CloudMoon:dM,CloudMoonRain:lM,CloudOff:pM,CloudRain:fM,CloudRainWind:uM,CloudSnow:gM,CloudSun:MM,CloudSunRain:mM,CloudUpload:b2,Cloudy:yM,Clover:xM,Club:bM,Code:wM,Code2:w2,CodeSquare:Gr,CodeXml:w2,Codepen:_M,Codesandbox:AM,Coffee:CM,Cog:EM,Coins:SM,Columns:_2,Columns2:_2,Columns3:A2,Columns3Cog:Yn,Columns4:kM,ColumnsSettings:Yn,Combine:LM,Command:TM,Compass:HM,Component:VM,Computer:PM,ConciergeBell:OM,Cone:DM,Construction:RM,Contact:IM,Contact2:C2,ContactRound:C2,Container:zM,Contrast:BM,Cookie:NM,CookingPot:FM,Copy:ZM,CopyCheck:$M,CopyMinus:WM,CopyPlus:jM,CopySlash:UM,CopyX:qM,Copyleft:YM,Copyright:KM,CornerDownLeft:GM,CornerDownRight:XM,CornerLeftDown:QM,CornerLeftUp:JM,CornerRightDown:t7,CornerRightUp:e7,CornerUpLeft:a7,CornerUpRight:i7,Cpu:n7,CreativeCommons:s7,CreditCard:r7,Croissant:o7,Crop:h7,Cross:c7,Crosshair:l7,Crown:d7,Cuboid:p7,CupSoda:u7,CurlyBraces:Eo,Currency:f7,Cylinder:g7,Dam:m7,Database:y7,DatabaseBackup:M7,DatabaseZap:v7,DecimalsArrowLeft:x7,DecimalsArrowRight:b7,Delete:w7,Dessert:_7,Diameter:A7,Diamond:S7,DiamondMinus:C7,DiamondPercent:E2,DiamondPlus:E7,Dice1:k7,Dice2:L7,Dice3:T7,Dice4:H7,Dice5:V7,Dice6:P7,Dices:O7,Diff:D7,Disc:B7,Disc2:R7,Disc3:I7,DiscAlbum:z7,Divide:N7,DivideCircle:a2,DivideSquare:eh,Dna:$7,DnaOff:F7,Dock:W7,Dog:j7,DollarSign:U7,Donut:q7,DoorClosed:Y7,DoorClosedLocked:Z7,DoorOpen:X7,Dot:K7,DotSquare:ah,Download:G7,DownloadCloud:x2,DraftingCompass:Q7,Drama:J7,Dribbble:tv,Drill:ev,Droplet:iv,DropletOff:av,Droplets:nv,Drum:sv,Drumstick:rv,Dumbbell:ov,Ear:cv,EarOff:hv,Earth:S2,EarthLock:lv,Eclipse:dv,Edit:wi,Edit2:yr,Edit3:vr,Egg:fv,EggFried:uv,EggOff:pv,Ellipsis:L2,EllipsisVertical:k2,Equal:Mv,EqualApproximately:gv,EqualNot:mv,EqualSquare:ih,Eraser:vv,EthernetPort:yv,Euro:xv,Expand:bv,ExternalLink:wv,Eye:Ev,EyeClosed:_v,EyeOff:Av,Facebook:Cv,Factory:Sv,Fan:kv,FastForward:Lv,Feather:Tv,Fence:Hv,FerrisWheel:Vv,Figma:Pv,File:T9,FileArchive:Ov,FileAudio:Rv,FileAudio2:Dv,FileAxis3D:T2,FileAxis3d:T2,FileBadge:zv,FileBadge2:Iv,FileBarChart:H2,FileBarChart2:V2,FileBox:Bv,FileChartColumn:V2,FileChartColumnIncreasing:H2,FileChartLine:P2,FileChartPie:O2,FileCheck:Fv,FileCheck2:Nv,FileClock:$v,FileCode:jv,FileCode2:Wv,FileCog:D2,FileCog2:D2,FileDiff:Uv,FileDigit:qv,FileDown:Zv,FileEdit:I2,FileHeart:Yv,FileImage:Kv,FileInput:Xv,FileJson:Qv,FileJson2:Gv,FileKey:t9,FileKey2:Jv,FileLineChart:P2,FileLock:a9,FileLock2:e9,FileMinus:i9,FileMinus2:n9,FileMusic:s9,FileOutput:o9,FilePen:I2,FilePenLine:R2,FilePieChart:O2,FilePlus:h9,FilePlus2:r9,FileQuestion:c9,FileScan:l9,FileSearch:p9,FileSearch2:d9,FileSignature:R2,FileSliders:f9,FileSpreadsheet:u9,FileStack:g9,FileSymlink:m9,FileTerminal:M9,FileText:v9,FileType:x9,FileType2:y9,FileUp:b9,FileUser:_9,FileVideo:A9,FileVideo2:w9,FileVolume:E9,FileVolume2:C9,FileWarning:S9,FileX:L9,FileX2:k9,Files:H9,Film:V9,Filter:F2,FilterX:N2,Fingerprint:P9,FireExtinguisher:O9,Fish:I9,FishOff:D9,FishSymbol:R9,Flag:F9,FlagOff:z9,FlagTriangleLeft:B9,FlagTriangleRight:N9,Flame:W9,FlameKindling:$9,Flashlight:U9,FlashlightOff:j9,FlaskConical:Z9,FlaskConicalOff:q9,FlaskRound:Y9,FlipHorizontal:K9,FlipHorizontal2:X9,FlipVertical:Q9,FlipVertical2:G9,Flower:ty,Flower2:J9,Focus:ey,FoldHorizontal:ay,FoldVertical:iy,Folder:Hy,FolderArchive:sy,FolderCheck:ny,FolderClock:oy,FolderClosed:ry,FolderCode:hy,FolderCog:z2,FolderCog2:z2,FolderDot:cy,FolderDown:ly,FolderEdit:B2,FolderGit:uy,FolderGit2:dy,FolderHeart:py,FolderInput:fy,FolderKanban:gy,FolderKey:my,FolderLock:My,FolderMinus:vy,FolderOpen:xy,FolderOpenDot:yy,FolderOutput:by,FolderPen:B2,FolderPlus:wy,FolderRoot:_y,FolderSearch:Cy,FolderSearch2:Ay,FolderSymlink:Ey,FolderSync:Sy,FolderTree:ky,FolderUp:Ly,FolderX:Ty,Folders:Vy,Footprints:Py,ForkKnife:$h,ForkKnifeCrossed:Wh,Forklift:Oy,FormInput:br,Forward:Ry,Frame:Dy,Framer:Iy,Frown:zy,Fuel:By,Fullscreen:Ny,FunctionSquare:nh,Funnel:F2,FunnelPlus:Fy,FunnelX:N2,GalleryHorizontal:Wy,GalleryHorizontalEnd:$y,GalleryThumbnails:jy,GalleryVertical:qy,GalleryVerticalEnd:Uy,Gamepad:Yy,Gamepad2:Zy,GanttChart:zo,GanttChartSquare:Xn,Gauge:Ky,GaugeCircle:i2,Gavel:Xy,Gem:Gy,Ghost:Jy,Gift:Qy,GitBranch:ex,GitBranchPlus:tx,GitCommit:$2,GitCommitHorizontal:$2,GitCommitVertical:ax,GitCompare:nx,GitCompareArrows:ix,GitFork:sx,GitGraph:ox,GitMerge:rx,GitPullRequest:ux,GitPullRequestArrow:hx,GitPullRequestClosed:cx,GitPullRequestCreate:dx,GitPullRequestCreateArrow:lx,GitPullRequestDraft:px,Github:fx,Gitlab:gx,GlassWater:mx,Glasses:Mx,Globe:yx,Globe2:S2,GlobeLock:vx,Goal:bx,Gpu:xx,Grab:_x,GraduationCap:wx,Grape:Ax,Grid:Kn,Grid2X2:q2,Grid2X2Check:W2,Grid2X2Plus:j2,Grid2X2X:U2,Grid2x2:q2,Grid2x2Check:W2,Grid2x2Plus:j2,Grid2x2X:U2,Grid3X3:Kn,Grid3x3:Kn,Grip:Sx,GripHorizontal:Cx,GripVertical:Ex,Group:kx,Guitar:Lx,Ham:Tx,Hamburger:Hx,Hammer:Vx,Hand:Ix,HandCoins:Px,HandHeart:Ox,HandHelping:Z2,HandMetal:Dx,HandPlatter:Rx,Handshake:zx,HardDrive:Fx,HardDriveDownload:Bx,HardDriveUpload:Nx,HardHat:$x,Hash:Wx,Haze:jx,HdmiPort:Ux,Heading:Jx,Heading1:qx,Heading2:Zx,Heading3:Yx,Heading4:Kx,Heading5:Xx,Heading6:Gx,HeadphoneOff:Qx,Headphones:tb,Headset:eb,Heart:hb,HeartCrack:ab,HeartHandshake:ib,HeartMinus:nb,HeartOff:sb,HeartPlus:rb,HeartPulse:ob,Heater:cb,HelpCircle:n2,HelpingHand:Z2,Hexagon:lb,Highlighter:ub,History:db,Home:Y2,Hop:fb,HopOff:pb,Hospital:gb,Hotel:mb,Hourglass:Mb,House:Y2,HousePlug:vb,HousePlus:xb,HouseWifi:yb,IceCream:X2,IceCream2:K2,IceCreamBowl:K2,IceCreamCone:X2,IdCard:bb,Image:Lb,ImageDown:wb,ImageMinus:_b,ImageOff:Ab,ImagePlay:Cb,ImagePlus:Eb,ImageUp:Sb,ImageUpscale:kb,Images:Tb,Import:Hb,Inbox:Vb,Indent:Q2,IndentDecrease:G2,IndentIncrease:Q2,IndianRupee:Pb,Infinity:Ob,Info:Db,Inspect:lh,InspectionPanel:Ib,Instagram:Rb,Italic:zb,IterationCcw:Bb,IterationCw:Nb,JapaneseYen:Fb,Joystick:$b,Kanban:Wb,KanbanSquare:sh,KanbanSquareDashed:Qr,Key:qb,KeyRound:jb,KeySquare:Ub,Keyboard:Kb,KeyboardMusic:Zb,KeyboardOff:Yb,Lamp:ew,LampCeiling:Xb,LampDesk:Gb,LampFloor:Qb,LampWallDown:Jb,LampWallUp:tw,LandPlot:aw,Landmark:iw,Languages:nw,Laptop:ow,Laptop2:J2,LaptopMinimal:J2,LaptopMinimalCheck:sw,Lasso:hw,LassoSelect:rw,Laugh:cw,Layers:tr,Layers2:lw,Layers3:tr,Layout:Mr,LayoutDashboard:dw,LayoutGrid:uw,LayoutList:pw,LayoutPanelLeft:fw,LayoutPanelTop:gw,LayoutTemplate:mw,Leaf:Mw,LeafyGreen:vw,Lectern:xw,LetterText:yw,Library:ww,LibraryBig:bw,LibrarySquare:oh,LifeBuoy:_w,Ligature:Aw,Lightbulb:Ew,LightbulbOff:Cw,LineChart:Do,Link:Lw,Link2:kw,Link2Off:Sw,Linkedin:Tw,List:Zw,ListCheck:Hw,ListChecks:Vw,ListCollapse:Pw,ListEnd:Ow,ListFilter:Rw,ListFilterPlus:Dw,ListMinus:zw,ListMusic:Iw,ListOrdered:Bw,ListPlus:Nw,ListRestart:Fw,ListStart:$w,ListTodo:Ww,ListTree:Uw,ListVideo:jw,ListX:qw,Loader:Kw,Loader2:er,LoaderCircle:er,LoaderPinwheel:Yw,Locate:Qw,LocateFixed:Xw,LocateOff:Gw,LocationEdit:Jw,Lock:e_,LockKeyhole:t_,LockKeyholeOpen:ar,LockOpen:ir,LogIn:a_,LogOut:i_,Logs:s_,Lollipop:n_,Luggage:o_,MSquare:rh,Magnet:r_,Mail:m_,MailCheck:h_,MailMinus:c_,MailOpen:l_,MailPlus:d_,MailQuestion:p_,MailSearch:u_,MailWarning:f_,MailX:g_,Mailbox:M_,Mails:v_,Map:V_,MapPin:H_,MapPinCheck:x_,MapPinCheckInside:y_,MapPinHouse:b_,MapPinMinus:__,MapPinMinusInside:w_,MapPinOff:A_,MapPinPlus:C_,MapPinPlusInside:E_,MapPinX:k_,MapPinXInside:S_,MapPinned:L_,MapPlus:T_,Mars:O_,MarsStroke:P_,Martini:R_,Maximize:I_,Maximize2:D_,Medal:z_,Megaphone:B_,MegaphoneOff:F_,Meh:N_,MemoryStick:$_,Menu:W_,MenuSquare:hh,Merge:U_,MessageCircle:eA,MessageCircleCode:j_,MessageCircleDashed:q_,MessageCircleHeart:Z_,MessageCircleMore:Y_,MessageCircleOff:K_,MessageCirclePlus:X_,MessageCircleQuestion:G_,MessageCircleReply:Q_,MessageCircleWarning:J_,MessageCircleX:tA,MessageSquare:MA,MessageSquareCode:aA,MessageSquareDashed:iA,MessageSquareDiff:nA,MessageSquareDot:sA,MessageSquareHeart:oA,MessageSquareLock:rA,MessageSquareMore:hA,MessageSquareOff:cA,MessageSquarePlus:lA,MessageSquareQuote:pA,MessageSquareReply:dA,MessageSquareShare:uA,MessageSquareText:fA,MessageSquareWarning:gA,MessageSquareX:mA,MessagesSquare:vA,Mic:xA,Mic2:nr,MicOff:yA,MicVocal:nr,Microchip:bA,Microscope:wA,Microwave:_A,Milestone:AA,Milk:CA,MilkOff:EA,Minimize:kA,Minimize2:SA,Minus:LA,MinusCircle:s2,MinusSquare:ch,Monitor:$A,MonitorCheck:TA,MonitorCog:VA,MonitorDot:HA,MonitorDown:PA,MonitorOff:OA,MonitorPause:RA,MonitorPlay:DA,MonitorSmartphone:IA,MonitorSpeaker:zA,MonitorStop:BA,MonitorUp:NA,MonitorX:FA,Moon:jA,MoonStar:WA,MoreHorizontal:L2,MoreVertical:k2,Mountain:qA,MountainSnow:UA,Mouse:QA,MouseOff:ZA,MousePointer:GA,MousePointer2:YA,MousePointerBan:KA,MousePointerClick:XA,MousePointerSquareDashed:Jr,Move:dC,Move3D:sr,Move3d:sr,MoveDiagonal:tC,MoveDiagonal2:JA,MoveDown:iC,MoveDownLeft:eC,MoveDownRight:aC,MoveHorizontal:nC,MoveLeft:sC,MoveRight:oC,MoveUp:cC,MoveUpLeft:rC,MoveUpRight:hC,MoveVertical:lC,Music:gC,Music2:pC,Music3:uC,Music4:fC,Navigation:yC,Navigation2:MC,Navigation2Off:mC,NavigationOff:vC,Network:xC,Newspaper:wC,Nfc:bC,NonBinary:AC,Notebook:SC,NotebookPen:_C,NotebookTabs:CC,NotebookText:EC,NotepadText:LC,NotepadTextDashed:kC,Nut:TC,NutOff:HC,Octagon:PC,OctagonAlert:or,OctagonMinus:VC,OctagonPause:rr,OctagonX:hr,Omega:OC,Option:DC,Orbit:RC,Origami:IC,Outdent:G2,Package:UC,Package2:zC,PackageCheck:BC,PackageMinus:NC,PackageOpen:FC,PackagePlus:$C,PackageSearch:WC,PackageX:jC,PaintBucket:qC,PaintRoller:ZC,Paintbrush:YC,Paintbrush2:cr,PaintbrushVertical:cr,Palette:KC,Palmtree:Hh,Panda:XC,PanelBottom:JC,PanelBottomClose:GC,PanelBottomDashed:lr,PanelBottomInactive:lr,PanelBottomOpen:QC,PanelLeft:fr,PanelLeftClose:pr,PanelLeftDashed:dr,PanelLeftInactive:dr,PanelLeftOpen:ur,PanelRight:aE,PanelRightClose:tE,PanelRightDashed:gr,PanelRightInactive:gr,PanelRightOpen:eE,PanelTop:sE,PanelTopClose:iE,PanelTopDashed:mr,PanelTopInactive:mr,PanelTopOpen:nE,PanelsLeftBottom:oE,PanelsLeftRight:A2,PanelsRightBottom:rE,PanelsTopBottom:Ar,PanelsTopLeft:Mr,Paperclip:hE,Parentheses:cE,ParkingCircle:r2,ParkingCircleOff:o2,ParkingMeter:lE,ParkingSquare:ph,ParkingSquareOff:dh,PartyPopper:dE,Pause:pE,PauseCircle:h2,PauseOctagon:rr,PawPrint:uE,PcCase:fE,Pen:yr,PenBox:wi,PenLine:vr,PenOff:gE,PenSquare:wi,PenTool:mE,Pencil:xE,PencilLine:ME,PencilOff:vE,PencilRuler:yE,Pentagon:bE,Percent:wE,PercentCircle:c2,PercentDiamond:E2,PercentSquare:uh,PersonStanding:AE,PhilippinePeso:_E,Phone:HE,PhoneCall:CE,PhoneForwarded:EE,PhoneIncoming:SE,PhoneMissed:kE,PhoneOff:LE,PhoneOutgoing:TE,Pi:VE,PiSquare:fh,Piano:PE,Pickaxe:OE,PictureInPicture:DE,PictureInPicture2:RE,PieChart:Bo,PiggyBank:IE,Pilcrow:NE,PilcrowLeft:zE,PilcrowRight:BE,PilcrowSquare:gh,Pill:$E,PillBottle:FE,Pin:jE,PinOff:WE,Pipette:UE,Pizza:qE,Plane:KE,PlaneLanding:YE,PlaneTakeoff:ZE,Play:XE,PlayCircle:l2,PlaySquare:mh,Plug:QE,Plug2:GE,PlugZap:xr,PlugZap2:xr,Plus:JE,PlusCircle:d2,PlusSquare:Mh,Pocket:eS,PocketKnife:tS,Podcast:aS,Pointer:nS,PointerOff:iS,Popcorn:sS,Popsicle:oS,PoundSterling:rS,Power:cS,PowerCircle:p2,PowerOff:hS,PowerSquare:vh,Presentation:lS,Printer:pS,PrinterCheck:dS,Projector:uS,Proportions:fS,Puzzle:gS,Pyramid:mS,QrCode:vS,Quote:MS,Rabbit:yS,Radar:xS,Radiation:wS,Radical:bS,Radio:CS,RadioReceiver:_S,RadioTower:AS,Radius:ES,RailSymbol:SS,Rainbow:kS,Rat:LS,Ratio:TS,Receipt:BS,ReceiptCent:HS,ReceiptEuro:PS,ReceiptIndianRupee:VS,ReceiptJapaneseYen:OS,ReceiptPoundSterling:DS,ReceiptRussianRuble:RS,ReceiptSwissFranc:IS,ReceiptText:zS,RectangleEllipsis:br,RectangleGoggles:FS,RectangleHorizontal:NS,RectangleVertical:$S,Recycle:jS,Redo:qS,Redo2:WS,RedoDot:US,RefreshCcw:YS,RefreshCcwDot:ZS,RefreshCw:XS,RefreshCwOff:KS,Refrigerator:QS,Regex:GS,RemoveFormatting:JS,Repeat:ak,Repeat1:tk,Repeat2:ek,Replace:ik,ReplaceAll:nk,Reply:ok,ReplyAll:sk,Rewind:rk,Ribbon:lk,Rocket:hk,RockingChair:ck,RollerCoaster:dk,Rotate3D:wr,Rotate3d:wr,RotateCcw:fk,RotateCcwKey:pk,RotateCcwSquare:uk,RotateCw:mk,RotateCwSquare:gk,Route:vk,RouteOff:Mk,Router:yk,Rows:_r,Rows2:_r,Rows3:Ar,Rows4:xk,Rss:bk,Ruler:_k,RulerDimensionLine:wk,RussianRuble:Ak,Sailboat:Ck,Salad:Ek,Sandwich:Sk,Satellite:Lk,SatelliteDish:kk,SaudiRiyal:Tk,Save:Pk,SaveAll:Hk,SaveOff:Vk,Scale:Ok,Scale3D:Cr,Scale3d:Cr,Scaling:Dk,Scan:jk,ScanBarcode:Rk,ScanEye:Ik,ScanFace:zk,ScanHeart:Bk,ScanLine:Nk,ScanQrCode:Fk,ScanSearch:$k,ScanText:Wk,ScatterChart:No,School:Uk,School2:Oh,Scissors:qk,ScissorsLineDashed:Zk,ScissorsSquare:yh,ScissorsSquareDashedBottom:jr,ScreenShare:Kk,ScreenShareOff:Yk,Scroll:Gk,ScrollText:Xk,Search:aL,SearchCheck:Qk,SearchCode:Jk,SearchSlash:tL,SearchX:eL,Section:iL,Send:sL,SendHorizonal:Er,SendHorizontal:Er,SendToBack:nL,SeparatorHorizontal:oL,SeparatorVertical:rL,Server:dL,ServerCog:hL,ServerCrash:cL,ServerOff:lL,Settings:uL,Settings2:pL,Shapes:fL,Share:mL,Share2:gL,Sheet:ML,Shell:vL,Shield:LL,ShieldAlert:yL,ShieldBan:xL,ShieldCheck:bL,ShieldClose:Sr,ShieldEllipsis:wL,ShieldHalf:_L,ShieldMinus:AL,ShieldOff:CL,ShieldPlus:EL,ShieldQuestion:SL,ShieldUser:kL,ShieldX:Sr,Ship:HL,ShipWheel:TL,Shirt:VL,ShoppingBag:PL,ShoppingBasket:OL,ShoppingCart:DL,Shovel:RL,ShowerHead:zL,Shredder:IL,Shrimp:BL,Shrink:NL,Shrub:FL,Shuffle:$L,Sidebar:fr,SidebarClose:pr,SidebarOpen:ur,Sigma:UL,SigmaSquare:xh,Signal:YL,SignalHigh:WL,SignalLow:jL,SignalMedium:qL,SignalZero:ZL,Signature:KL,Signpost:GL,SignpostBig:XL,Siren:QL,SkipBack:JL,SkipForward:tT,Skull:eT,Slack:aT,Slash:iT,SlashSquare:bh,Slice:nT,Sliders:kr,SlidersHorizontal:sT,SlidersVertical:kr,Smartphone:hT,SmartphoneCharging:rT,SmartphoneNfc:oT,Smile:lT,SmilePlus:cT,Snail:dT,Snowflake:pT,SoapDispenserDroplet:fT,Sofa:uT,SortAsc:yo,SortDesc:mo,Soup:gT,Space:mT,Spade:MT,Sparkle:vT,Sparkles:Lr,Speaker:yT,Speech:xT,SpellCheck:wT,SpellCheck2:bT,Spline:AT,SplinePointer:_T,Split:CT,SplitSquareHorizontal:wh,SplitSquareVertical:_h,SprayCan:ET,Sprout:ST,Square:OT,SquareActivity:Tr,SquareArrowDown:Pr,SquareArrowDownLeft:Hr,SquareArrowDownRight:Vr,SquareArrowLeft:Or,SquareArrowOutDownLeft:Dr,SquareArrowOutDownRight:Rr,SquareArrowOutUpLeft:Ir,SquareArrowOutUpRight:zr,SquareArrowRight:Br,SquareArrowUp:$r,SquareArrowUpLeft:Fr,SquareArrowUpRight:Nr,SquareAsterisk:Wr,SquareBottomDashedScissors:jr,SquareChartGantt:Xn,SquareCheck:qr,SquareCheckBig:Ur,SquareChevronDown:Zr,SquareChevronLeft:Yr,SquareChevronRight:Kr,SquareChevronUp:Xr,SquareCode:Gr,SquareDashed:th,SquareDashedBottom:LT,SquareDashedBottomCode:kT,SquareDashedKanban:Qr,SquareDashedMousePointer:Jr,SquareDivide:eh,SquareDot:ah,SquareEqual:ih,SquareFunction:nh,SquareGanttChart:Xn,SquareKanban:sh,SquareLibrary:oh,SquareM:rh,SquareMenu:hh,SquareMinus:ch,SquareMousePointer:lh,SquareParking:ph,SquareParkingOff:dh,SquarePen:wi,SquarePercent:uh,SquarePi:fh,SquarePilcrow:gh,SquarePlay:mh,SquarePlus:Mh,SquarePower:vh,SquareRadical:TT,SquareRoundCorner:HT,SquareScissors:yh,SquareSigma:xh,SquareSlash:bh,SquareSplitHorizontal:wh,SquareSplitVertical:_h,SquareSquare:VT,SquareStack:PT,SquareTerminal:Ah,SquareUser:Eh,SquareUserRound:Ch,SquareX:Sh,SquaresExclude:DT,SquaresIntersect:IT,SquaresSubtract:RT,SquaresUnite:zT,Squircle:BT,Squirrel:NT,Stamp:FT,Star:jT,StarHalf:$T,StarOff:WT,Stars:Lr,StepBack:UT,StepForward:qT,Stethoscope:ZT,Sticker:YT,StickyNote:KT,StopCircle:f2,Store:XT,StretchHorizontal:GT,StretchVertical:QT,Strikethrough:JT,Subscript:tH,Subtitles:So,Sun:sH,SunDim:eH,SunMedium:aH,SunMoon:iH,SunSnow:nH,Sunrise:rH,Sunset:oH,Superscript:hH,SwatchBook:cH,SwissFranc:lH,SwitchCamera:dH,Sword:pH,Swords:uH,Syringe:fH,Table:bH,Table2:gH,TableCellsMerge:mH,TableCellsSplit:MH,TableColumnsSplit:vH,TableConfig:Yn,TableOfContents:yH,TableProperties:xH,TableRowsSplit:wH,Tablet:AH,TabletSmartphone:_H,Tablets:CH,Tag:EH,Tags:SH,Tally1:LH,Tally2:kH,Tally3:TH,Tally4:HH,Tally5:VH,Tangent:PH,Target:OH,Telescope:DH,Tent:IH,TentTree:RH,Terminal:zH,TerminalSquare:Ah,TestTube:BH,TestTube2:kh,TestTubeDiagonal:kh,TestTubes:NH,Text:UH,TextCursor:$H,TextCursorInput:FH,TextQuote:WH,TextSearch:jH,TextSelect:Lh,TextSelection:Lh,Theater:qH,Thermometer:KH,ThermometerSnowflake:ZH,ThermometerSun:YH,ThumbsDown:XH,ThumbsUp:GH,Ticket:nV,TicketCheck:QH,TicketMinus:JH,TicketPercent:tV,TicketPlus:eV,TicketSlash:aV,TicketX:iV,Tickets:oV,TicketsPlane:sV,Timer:hV,TimerOff:cV,TimerReset:rV,ToggleLeft:lV,ToggleRight:dV,Toilet:pV,Tornado:uV,Torus:fV,Touchpad:mV,TouchpadOff:gV,TowerControl:MV,ToyBrick:vV,Tractor:yV,TrafficCone:xV,Train:Th,TrainFront:wV,TrainFrontTunnel:bV,TrainTrack:_V,TramFront:Th,Transgender:AV,Trash:EV,Trash2:CV,TreeDeciduous:SV,TreePalm:Hh,TreePine:kV,Trees:LV,Trello:TV,TrendingDown:HV,TrendingUp:PV,TrendingUpDown:VV,Triangle:DV,TriangleAlert:Vh,TriangleDashed:OV,TriangleRight:RV,Trophy:IV,Truck:BV,TruckElectric:zV,Turtle:FV,Tv:$V,Tv2:Ph,TvMinimal:Ph,TvMinimalPlay:NV,Twitch:WV,Twitter:jV,Type:qV,TypeOutline:UV,Umbrella:YV,UmbrellaOff:ZV,Underline:KV,Undo:QV,Undo2:XV,UndoDot:GV,UnfoldHorizontal:JV,UnfoldVertical:tP,Ungroup:eP,University:Oh,Unlink:iP,Unlink2:aP,Unlock:ir,UnlockKeyhole:ar,Unplug:nP,Upload:sP,UploadCloud:b2,Usb:oP,User:MP,User2:Nh,UserCheck:rP,UserCheck2:Dh,UserCircle:m2,UserCircle2:g2,UserCog:hP,UserCog2:Rh,UserLock:cP,UserMinus:lP,UserMinus2:Ih,UserPen:dP,UserPlus:pP,UserPlus2:zh,UserRound:Nh,UserRoundCheck:Dh,UserRoundCog:Rh,UserRoundMinus:Ih,UserRoundPen:uP,UserRoundPlus:zh,UserRoundSearch:fP,UserRoundX:Bh,UserSearch:gP,UserSquare:Eh,UserSquare2:Ch,UserX:mP,UserX2:Bh,Users:vP,Users2:Fh,UsersRound:Fh,Utensils:$h,UtensilsCrossed:Wh,UtilityPole:yP,Variable:xP,Vault:wP,Vegan:bP,VenetianMask:_P,Venus:CP,VenusAndMars:AP,Verified:wo,Vibrate:SP,VibrateOff:EP,Video:LP,VideoOff:kP,Videotape:TP,View:HP,Voicemail:VP,Volleyball:PP,Volume:BP,Volume1:OP,Volume2:DP,VolumeOff:RP,VolumeX:IP,Vote:zP,Wallet:FP,Wallet2:jh,WalletCards:NP,WalletMinimal:jh,Wallpaper:$P,Wand:WP,Wand2:Uh,WandSparkles:Uh,Warehouse:jP,WashingMachine:UP,Watch:qP,Waves:YP,WavesLadder:ZP,Waypoints:KP,Webcam:XP,Webhook:QP,WebhookOff:GP,Weight:JP,Wheat:eO,WheatOff:tO,WholeWord:aO,Wifi:rO,WifiHigh:iO,WifiLow:nO,WifiOff:sO,WifiPen:oO,WifiZero:hO,Wind:dO,WindArrowDown:cO,Wine:pO,WineOff:lO,Workflow:fO,Worm:uO,WrapText:gO,Wrench:mO,X:MO,XCircle:M2,XOctagon:hr,XSquare:Sh,Youtube:vO,Zap:xO,ZapOff:yO,ZoomIn:bO,ZoomOut:wO},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rW=({icons:e={},nameAttr:t="data-lucide",attrs:a={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${t}]`);if(Array.from(i).forEach(n=>lo(n,{nameAttr:t,icons:e,attrs:a})),t==="data-lucide"){const n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(s=>lo(s,{nameAttr:"icon-name",icons:e,attrs:a})))}};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function ei(e){return e+.5|0}const me=(e,t,a)=>Math.max(Math.min(e,a),t);function Ra(e){return me(ei(e*2.55),0,255)}function we(e){return me(ei(e*255),0,255)}function ie(e){return me(ei(e/2.55)/100,0,1)}function qh(e){return me(ei(e*100),0,100)}const Pt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ms=[..."0123456789ABCDEF"],_O=e=>Ms[e&15],AO=e=>Ms[(e&240)>>4]+Ms[e&15],_i=e=>(e&240)>>4===(e&15),CO=e=>_i(e.r)&&_i(e.g)&&_i(e.b)&&_i(e.a);function EO(e){var t=e.length,a;return e[0]==="#"&&(t===4||t===5?a={r:255&Pt[e[1]]*17,g:255&Pt[e[2]]*17,b:255&Pt[e[3]]*17,a:t===5?Pt[e[4]]*17:255}:(t===7||t===9)&&(a={r:Pt[e[1]]<<4|Pt[e[2]],g:Pt[e[3]]<<4|Pt[e[4]],b:Pt[e[5]]<<4|Pt[e[6]],a:t===9?Pt[e[7]]<<4|Pt[e[8]]:255})),a}const SO=(e,t)=>e<255?t(e):"";function kO(e){var t=CO(e)?_O:AO;return e?"#"+t(e.r)+t(e.g)+t(e.b)+SO(e.a,t):void 0}const LO=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Hc(e,t,a){const i=t*Math.min(a,1-a),n=(s,o=(s+e/30)%12)=>a-i*Math.max(Math.min(o-3,9-o,1),-1);return[n(0),n(8),n(4)]}function TO(e,t,a){const i=(n,s=(n+e/60)%6)=>a-a*t*Math.max(Math.min(s,4-s,1),0);return[i(5),i(3),i(1)]}function HO(e,t,a){const i=Hc(e,1,.5);let n;for(t+a>1&&(n=1/(t+a),t*=n,a*=n),n=0;n<3;n++)i[n]*=1-t-a,i[n]+=t;return i}function VO(e,t,a,i,n){return e===n?(t-a)/i+(t<a?6:0):t===n?(a-e)/i+2:(e-t)/i+4}function zs(e){const a=e.r/255,i=e.g/255,n=e.b/255,s=Math.max(a,i,n),o=Math.min(a,i,n),r=(s+o)/2;let h,c,d;return s!==o&&(d=s-o,c=r>.5?d/(2-s-o):d/(s+o),h=VO(a,i,n,d,s),h=h*60+.5),[h|0,c||0,r]}function Bs(e,t,a,i){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,a,i)).map(we)}function Ns(e,t,a){return Bs(Hc,e,t,a)}function PO(e,t,a){return Bs(HO,e,t,a)}function OO(e,t,a){return Bs(TO,e,t,a)}function Vc(e){return(e%360+360)%360}function DO(e){const t=LO.exec(e);let a=255,i;if(!t)return;t[5]!==i&&(a=t[6]?Ra(+t[5]):we(+t[5]));const n=Vc(+t[2]),s=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=PO(n,s,o):t[1]==="hsv"?i=OO(n,s,o):i=Ns(n,s,o),{r:i[0],g:i[1],b:i[2],a}}function RO(e,t){var a=zs(e);a[0]=Vc(a[0]+t),a=Ns(a),e.r=a[0],e.g=a[1],e.b=a[2]}function IO(e){if(!e)return;const t=zs(e),a=t[0],i=qh(t[1]),n=qh(t[2]);return e.a<255?`hsla(${a}, ${i}%, ${n}%, ${ie(e.a)})`:`hsl(${a}, ${i}%, ${n}%)`}const Zh={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Yh={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function zO(){const e={},t=Object.keys(Yh),a=Object.keys(Zh);let i,n,s,o,r;for(i=0;i<t.length;i++){for(o=r=t[i],n=0;n<a.length;n++)s=a[n],r=r.replace(s,Zh[s]);s=parseInt(Yh[o],16),e[r]=[s>>16&255,s>>8&255,s&255]}return e}let Ai;function BO(e){Ai||(Ai=zO(),Ai.transparent=[0,0,0,0]);const t=Ai[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const NO=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function FO(e){const t=NO.exec(e);let a=255,i,n,s;if(t){if(t[7]!==i){const o=+t[7];a=t[8]?Ra(o):me(o*255,0,255)}return i=+t[1],n=+t[3],s=+t[5],i=255&(t[2]?Ra(i):me(i,0,255)),n=255&(t[4]?Ra(n):me(n,0,255)),s=255&(t[6]?Ra(s):me(s,0,255)),{r:i,g:n,b:s,a}}}function $O(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${ie(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const Gn=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,ra=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function WO(e,t,a){const i=ra(ie(e.r)),n=ra(ie(e.g)),s=ra(ie(e.b));return{r:we(Gn(i+a*(ra(ie(t.r))-i))),g:we(Gn(n+a*(ra(ie(t.g))-n))),b:we(Gn(s+a*(ra(ie(t.b))-s))),a:e.a+a*(t.a-e.a)}}function Ci(e,t,a){if(e){let i=zs(e);i[t]=Math.max(0,Math.min(i[t]+i[t]*a,t===0?360:1)),i=Ns(i),e.r=i[0],e.g=i[1],e.b=i[2]}}function Pc(e,t){return e&&Object.assign(t||{},e)}function Kh(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=we(e[3]))):(t=Pc(e,{r:0,g:0,b:0,a:1}),t.a=we(t.a)),t}function jO(e){return e.charAt(0)==="r"?FO(e):DO(e)}class Za{constructor(t){if(t instanceof Za)return t;const a=typeof t;let i;a==="object"?i=Kh(t):a==="string"&&(i=EO(t)||BO(t)||jO(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Pc(this._rgb);return t&&(t.a=ie(t.a)),t}set rgb(t){this._rgb=Kh(t)}rgbString(){return this._valid?$O(this._rgb):void 0}hexString(){return this._valid?kO(this._rgb):void 0}hslString(){return this._valid?IO(this._rgb):void 0}mix(t,a){if(t){const i=this.rgb,n=t.rgb;let s;const o=a===s?.5:a,r=2*o-1,h=i.a-n.a,c=((r*h===-1?r:(r+h)/(1+r*h))+1)/2;s=1-c,i.r=255&c*i.r+s*n.r+.5,i.g=255&c*i.g+s*n.g+.5,i.b=255&c*i.b+s*n.b+.5,i.a=o*i.a+(1-o)*n.a,this.rgb=i}return this}interpolate(t,a){return t&&(this._rgb=WO(this._rgb,t._rgb,a)),this}clone(){return new Za(this.rgb)}alpha(t){return this._rgb.a=we(t),this}clearer(t){const a=this._rgb;return a.a*=1-t,this}greyscale(){const t=this._rgb,a=ei(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=a,this}opaquer(t){const a=this._rgb;return a.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Ci(this._rgb,2,t),this}darken(t){return Ci(this._rgb,2,-t),this}saturate(t){return Ci(this._rgb,1,t),this}desaturate(t){return Ci(this._rgb,1,-t),this}rotate(t){return RO(this._rgb,t),this}}/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function te(){}const UO=(()=>{let e=0;return()=>e++})();function W(e){return e==null}function et(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function j(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function it(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function St(e,t){return it(e)?e:t}function N(e,t){return typeof e>"u"?t:e}const qO=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,Oc=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function G(e,t,a){if(e&&typeof e.call=="function")return e.apply(a,t)}function K(e,t,a,i){let n,s,o;if(et(e))for(s=e.length,n=0;n<s;n++)t.call(a,e[n],n);else if(j(e))for(o=Object.keys(e),s=o.length,n=0;n<s;n++)t.call(a,e[o[n]],o[n])}function Qi(e,t){let a,i,n,s;if(!e||!t||e.length!==t.length)return!1;for(a=0,i=e.length;a<i;++a)if(n=e[a],s=t[a],n.datasetIndex!==s.datasetIndex||n.index!==s.index)return!1;return!0}function Ji(e){if(et(e))return e.map(Ji);if(j(e)){const t=Object.create(null),a=Object.keys(e),i=a.length;let n=0;for(;n<i;++n)t[a[n]]=Ji(e[a[n]]);return t}return e}function Dc(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function ZO(e,t,a,i){if(!Dc(e))return;const n=t[e],s=a[e];j(n)&&j(s)?Ya(n,s,i):t[e]=Ji(s)}function Ya(e,t,a){const i=et(t)?t:[t],n=i.length;if(!j(e))return e;a=a||{};const s=a.merger||ZO;let o;for(let r=0;r<n;++r){if(o=i[r],!j(o))continue;const h=Object.keys(o);for(let c=0,d=h.length;c<d;++c)s(h[c],e,o,a)}return e}function $a(e,t){return Ya(e,t,{merger:YO})}function YO(e,t,a){if(!Dc(e))return;const i=t[e],n=a[e];j(i)&&j(n)?$a(i,n):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Ji(n))}const Xh={"":e=>e,x:e=>e.x,y:e=>e.y};function KO(e){const t=e.split("."),a=[];let i="";for(const n of t)i+=n,i.endsWith("\\")?i=i.slice(0,-1)+".":(a.push(i),i="");return a}function XO(e){const t=KO(e);return a=>{for(const i of t){if(i==="")break;a=a&&a[i]}return a}}function _e(e,t){return(Xh[t]||(Xh[t]=XO(t)))(e)}function Fs(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Ka=e=>typeof e<"u",Ae=e=>typeof e=="function",Gh=(e,t)=>{if(e.size!==t.size)return!1;for(const a of e)if(!t.has(a))return!1;return!0};function GO(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const U=Math.PI,tt=2*U,QO=tt+U,tn=Number.POSITIVE_INFINITY,JO=U/180,ot=U/2,De=U/4,Qh=U*2/3,Me=Math.log10,Zt=Math.sign;function Wa(e,t,a){return Math.abs(e-t)<a}function Jh(e){const t=Math.round(e);e=Wa(e,t,e/1e3)?t:e;const a=Math.pow(10,Math.floor(Me(e))),i=e/a;return(i<=1?1:i<=2?2:i<=5?5:10)*a}function tD(e){const t=[],a=Math.sqrt(e);let i;for(i=1;i<a;i++)e%i===0&&(t.push(i),t.push(e/i));return a===(a|0)&&t.push(a),t.sort((n,s)=>n-s).pop(),t}function eD(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function fa(e){return!eD(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function aD(e,t){const a=Math.round(e);return a-t<=e&&a+t>=e}function Rc(e,t,a){let i,n,s;for(i=0,n=e.length;i<n;i++)s=e[i][a],isNaN(s)||(t.min=Math.min(t.min,s),t.max=Math.max(t.max,s))}function Nt(e){return e*(U/180)}function $s(e){return e*(180/U)}function t0(e){if(!it(e))return;let t=1,a=0;for(;Math.round(e*t)/t!==e;)t*=10,a++;return a}function Ic(e,t){const a=t.x-e.x,i=t.y-e.y,n=Math.sqrt(a*a+i*i);let s=Math.atan2(i,a);return s<-.5*U&&(s+=tt),{angle:s,distance:n}}function vs(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function iD(e,t){return(e-t+QO)%tt-U}function ft(e){return(e%tt+tt)%tt}function Xa(e,t,a,i){const n=ft(e),s=ft(t),o=ft(a),r=ft(s-n),h=ft(o-n),c=ft(n-s),d=ft(n-o);return n===s||n===o||i&&s===o||r>h&&c<d}function dt(e,t,a){return Math.max(t,Math.min(a,e))}function nD(e){return dt(e,-32768,32767)}function ne(e,t,a,i=1e-6){return e>=Math.min(t,a)-i&&e<=Math.max(t,a)+i}function Ws(e,t,a){a=a||(o=>e[o]<t);let i=e.length-1,n=0,s;for(;i-n>1;)s=n+i>>1,a(s)?n=s:i=s;return{lo:n,hi:i}}const se=(e,t,a,i)=>Ws(e,a,i?n=>{const s=e[n][t];return s<a||s===a&&e[n+1][t]===a}:n=>e[n][t]<a),sD=(e,t,a)=>Ws(e,a,i=>e[i][t]>=a);function oD(e,t,a){let i=0,n=e.length;for(;i<n&&e[i]<t;)i++;for(;n>i&&e[n-1]>a;)n--;return i>0||n<e.length?e.slice(i,n):e}const zc=["push","pop","shift","splice","unshift"];function rD(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),zc.forEach(a=>{const i="_onData"+Fs(a),n=e[a];Object.defineProperty(e,a,{configurable:!0,enumerable:!1,value(...s){const o=n.apply(this,s);return e._chartjs.listeners.forEach(r=>{typeof r[i]=="function"&&r[i](...s)}),o}})})}function e0(e,t){const a=e._chartjs;if(!a)return;const i=a.listeners,n=i.indexOf(t);n!==-1&&i.splice(n,1),!(i.length>0)&&(zc.forEach(s=>{delete e[s]}),delete e._chartjs)}function Bc(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const Nc=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function Fc(e,t){let a=[],i=!1;return function(...n){a=n,i||(i=!0,Nc.call(window,()=>{i=!1,e.apply(t,a)}))}}function hD(e,t){let a;return function(...i){return t?(clearTimeout(a),a=setTimeout(e,t,i)):e.apply(this,i),t}}const js=e=>e==="start"?"left":e==="end"?"right":"center",ut=(e,t,a)=>e==="start"?t:e==="end"?a:(t+a)/2,cD=(e,t,a,i)=>e===(i?"left":"right")?a:e==="center"?(t+a)/2:t;function $c(e,t,a){const i=t.length;let n=0,s=i;if(e._sorted){const{iScale:o,vScale:r,_parsed:h}=e,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,d=o.axis,{min:p,max:u,minDefined:g,maxDefined:M}=o.getUserBounds();if(g){if(n=Math.min(se(h,d,p).lo,a?i:se(t,d,o.getPixelForValue(p)).lo),c){const m=h.slice(0,n+1).reverse().findIndex(v=>!W(v[r.axis]));n-=Math.max(0,m)}n=dt(n,0,i-1)}if(M){let m=Math.max(se(h,o.axis,u,!0).hi+1,a?0:se(t,d,o.getPixelForValue(u),!0).hi+1);if(c){const v=h.slice(m-1).findIndex(b=>!W(b[r.axis]));m+=Math.max(0,v)}s=dt(m,n,i)-n}else s=i-n}return{start:n,count:s}}function Wc(e){const{xScale:t,yScale:a,_scaleRanges:i}=e,n={xmin:t.min,xmax:t.max,ymin:a.min,ymax:a.max};if(!i)return e._scaleRanges=n,!0;const s=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==a.min||i.ymax!==a.max;return Object.assign(i,n),s}const Ei=e=>e===0||e===1,a0=(e,t,a)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*tt/a)),i0=(e,t,a)=>Math.pow(2,-10*e)*Math.sin((e-t)*tt/a)+1,ja={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*ot)+1,easeOutSine:e=>Math.sin(e*ot),easeInOutSine:e=>-.5*(Math.cos(U*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Ei(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Ei(e)?e:a0(e,.075,.3),easeOutElastic:e=>Ei(e)?e:i0(e,.075,.3),easeInOutElastic(e){return Ei(e)?e:e<.5?.5*a0(e*2,.1125,.45):.5+.5*i0(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-ja.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?ja.easeInBounce(e*2)*.5:ja.easeOutBounce(e*2-1)*.5+.5};function Us(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function n0(e){return Us(e)?e:new Za(e)}function Qn(e){return Us(e)?e:new Za(e).saturate(.5).darken(.1).hexString()}const lD=["x","y","borderWidth","radius","tension"],dD=["color","borderColor","backgroundColor"];function pD(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:dD},numbers:{type:"number",properties:lD}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function uD(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const s0=new Map;function fD(e,t){t=t||{};const a=e+JSON.stringify(t);let i=s0.get(a);return i||(i=new Intl.NumberFormat(e,t),s0.set(a,i)),i}function ai(e,t,a){return fD(t,a).format(e)}const jc={values(e){return et(e)?e:""+e},numeric(e,t,a){if(e===0)return"0";const i=this.chart.options.locale;let n,s=e;if(a.length>1){const c=Math.max(Math.abs(a[0].value),Math.abs(a[a.length-1].value));(c<1e-4||c>1e15)&&(n="scientific"),s=gD(e,a)}const o=Me(Math.abs(s)),r=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),h={notation:n,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(h,this.options.ticks.format),ai(e,i,h)},logarithmic(e,t,a){if(e===0)return"0";const i=a[t].significand||e/Math.pow(10,Math.floor(Me(e)));return[1,2,3,5,10,15].includes(i)||t>.8*a.length?jc.numeric.call(this,e,t,a):""}};function gD(e,t){let a=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(a)>=1&&e!==Math.floor(e)&&(a=e-Math.floor(e)),a}var mn={formatters:jc};function mD(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,a)=>a.lineWidth,tickColor:(t,a)=>a.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:mn.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const qe=Object.create(null),ys=Object.create(null);function Ua(e,t){if(!t)return e;const a=t.split(".");for(let i=0,n=a.length;i<n;++i){const s=a[i];e=e[s]||(e[s]=Object.create(null))}return e}function Jn(e,t,a){return typeof t=="string"?Ya(Ua(e,t),a):Ya(Ua(e,""),t)}class MD{constructor(t,a){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,n)=>Qn(n.backgroundColor),this.hoverBorderColor=(i,n)=>Qn(n.borderColor),this.hoverColor=(i,n)=>Qn(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(a)}set(t,a){return Jn(this,t,a)}get(t){return Ua(this,t)}describe(t,a){return Jn(ys,t,a)}override(t,a){return Jn(qe,t,a)}route(t,a,i,n){const s=Ua(this,t),o=Ua(this,i),r="_"+a;Object.defineProperties(s,{[r]:{value:s[a],writable:!0},[a]:{enumerable:!0,get(){const h=this[r],c=o[n];return j(h)?Object.assign({},c,h):N(h,c)},set(h){this[r]=h}}})}apply(t){t.forEach(a=>a(this))}}var at=new MD({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[pD,uD,mD]);function vD(e){return!e||W(e.size)||W(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function en(e,t,a,i,n){let s=t[n];return s||(s=t[n]=e.measureText(n).width,a.push(n)),s>i&&(i=s),i}function yD(e,t,a,i){i=i||{};let n=i.data=i.data||{},s=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(n=i.data={},s=i.garbageCollect=[],i.font=t),e.save(),e.font=t;let o=0;const r=a.length;let h,c,d,p,u;for(h=0;h<r;h++)if(p=a[h],p!=null&&!et(p))o=en(e,n,s,o,p);else if(et(p))for(c=0,d=p.length;c<d;c++)u=p[c],u!=null&&!et(u)&&(o=en(e,n,s,o,u));e.restore();const g=s.length/2;if(g>a.length){for(h=0;h<g;h++)delete n[s[h]];s.splice(0,g)}return o}function Re(e,t,a){const i=e.currentDevicePixelRatio,n=a!==0?Math.max(a/2,.5):0;return Math.round((t-n)*i)/i+n}function o0(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function xs(e,t,a,i){Uc(e,t,a,i,null)}function Uc(e,t,a,i,n){let s,o,r,h,c,d,p,u;const g=t.pointStyle,M=t.rotation,m=t.radius;let v=(M||0)*JO;if(g&&typeof g=="object"&&(s=g.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){e.save(),e.translate(a,i),e.rotate(v),e.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),e.restore();return}if(!(isNaN(m)||m<=0)){switch(e.beginPath(),g){default:n?e.ellipse(a,i,n/2,m,0,0,tt):e.arc(a,i,m,0,tt),e.closePath();break;case"triangle":d=n?n/2:m,e.moveTo(a+Math.sin(v)*d,i-Math.cos(v)*m),v+=Qh,e.lineTo(a+Math.sin(v)*d,i-Math.cos(v)*m),v+=Qh,e.lineTo(a+Math.sin(v)*d,i-Math.cos(v)*m),e.closePath();break;case"rectRounded":c=m*.516,h=m-c,o=Math.cos(v+De)*h,p=Math.cos(v+De)*(n?n/2-c:h),r=Math.sin(v+De)*h,u=Math.sin(v+De)*(n?n/2-c:h),e.arc(a-p,i-r,c,v-U,v-ot),e.arc(a+u,i-o,c,v-ot,v),e.arc(a+p,i+r,c,v,v+ot),e.arc(a-u,i+o,c,v+ot,v+U),e.closePath();break;case"rect":if(!M){h=Math.SQRT1_2*m,d=n?n/2:h,e.rect(a-d,i-h,2*d,2*h);break}v+=De;case"rectRot":p=Math.cos(v)*(n?n/2:m),o=Math.cos(v)*m,r=Math.sin(v)*m,u=Math.sin(v)*(n?n/2:m),e.moveTo(a-p,i-r),e.lineTo(a+u,i-o),e.lineTo(a+p,i+r),e.lineTo(a-u,i+o),e.closePath();break;case"crossRot":v+=De;case"cross":p=Math.cos(v)*(n?n/2:m),o=Math.cos(v)*m,r=Math.sin(v)*m,u=Math.sin(v)*(n?n/2:m),e.moveTo(a-p,i-r),e.lineTo(a+p,i+r),e.moveTo(a+u,i-o),e.lineTo(a-u,i+o);break;case"star":p=Math.cos(v)*(n?n/2:m),o=Math.cos(v)*m,r=Math.sin(v)*m,u=Math.sin(v)*(n?n/2:m),e.moveTo(a-p,i-r),e.lineTo(a+p,i+r),e.moveTo(a+u,i-o),e.lineTo(a-u,i+o),v+=De,p=Math.cos(v)*(n?n/2:m),o=Math.cos(v)*m,r=Math.sin(v)*m,u=Math.sin(v)*(n?n/2:m),e.moveTo(a-p,i-r),e.lineTo(a+p,i+r),e.moveTo(a+u,i-o),e.lineTo(a-u,i+o);break;case"line":o=n?n/2:Math.cos(v)*m,r=Math.sin(v)*m,e.moveTo(a-o,i-r),e.lineTo(a+o,i+r);break;case"dash":e.moveTo(a,i),e.lineTo(a+Math.cos(v)*(n?n/2:m),i+Math.sin(v)*m);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function oe(e,t,a){return a=a||.5,!t||e&&e.x>t.left-a&&e.x<t.right+a&&e.y>t.top-a&&e.y<t.bottom+a}function Mn(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function vn(e){e.restore()}function xD(e,t,a,i,n){if(!t)return e.lineTo(a.x,a.y);if(n==="middle"){const s=(t.x+a.x)/2;e.lineTo(s,t.y),e.lineTo(s,a.y)}else n==="after"!=!!i?e.lineTo(t.x,a.y):e.lineTo(a.x,t.y);e.lineTo(a.x,a.y)}function bD(e,t,a,i){if(!t)return e.lineTo(a.x,a.y);e.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?a.cp2x:a.cp1x,i?a.cp2y:a.cp1y,a.x,a.y)}function wD(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),W(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function _D(e,t,a,i,n){if(n.strikethrough||n.underline){const s=e.measureText(i),o=t-s.actualBoundingBoxLeft,r=t+s.actualBoundingBoxRight,h=a-s.actualBoundingBoxAscent,c=a+s.actualBoundingBoxDescent,d=n.strikethrough?(h+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=n.decorationWidth||2,e.moveTo(o,d),e.lineTo(r,d),e.stroke()}}function AD(e,t){const a=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=a}function Ze(e,t,a,i,n,s={}){const o=et(t)?t:[t],r=s.strokeWidth>0&&s.strokeColor!=="";let h,c;for(e.save(),e.font=n.string,wD(e,s),h=0;h<o.length;++h)c=o[h],s.backdrop&&AD(e,s.backdrop),r&&(s.strokeColor&&(e.strokeStyle=s.strokeColor),W(s.strokeWidth)||(e.lineWidth=s.strokeWidth),e.strokeText(c,a,i,s.maxWidth)),e.fillText(c,a,i,s.maxWidth),_D(e,a,i,c,s),i+=Number(n.lineHeight);e.restore()}function Ga(e,t){const{x:a,y:i,w:n,h:s,radius:o}=t;e.arc(a+o.topLeft,i+o.topLeft,o.topLeft,1.5*U,U,!0),e.lineTo(a,i+s-o.bottomLeft),e.arc(a+o.bottomLeft,i+s-o.bottomLeft,o.bottomLeft,U,ot,!0),e.lineTo(a+n-o.bottomRight,i+s),e.arc(a+n-o.bottomRight,i+s-o.bottomRight,o.bottomRight,ot,0,!0),e.lineTo(a+n,i+o.topRight),e.arc(a+n-o.topRight,i+o.topRight,o.topRight,0,-ot,!0),e.lineTo(a+o.topLeft,i)}const CD=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,ED=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function SD(e,t){const a=(""+e).match(CD);if(!a||a[1]==="normal")return t*1.2;switch(e=+a[2],a[3]){case"px":return e;case"%":e/=100;break}return t*e}const kD=e=>+e||0;function qs(e,t){const a={},i=j(t),n=i?Object.keys(t):t,s=j(e)?i?o=>N(e[o],e[t[o]]):o=>e[o]:()=>e;for(const o of n)a[o]=kD(s(o));return a}function qc(e){return qs(e,{top:"y",right:"x",bottom:"y",left:"x"})}function We(e){return qs(e,["topLeft","topRight","bottomLeft","bottomRight"])}function mt(e){const t=qc(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ct(e,t){e=e||{},t=t||at.font;let a=N(e.size,t.size);typeof a=="string"&&(a=parseInt(a,10));let i=N(e.style,t.style);i&&!(""+i).match(ED)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const n={family:N(e.family,t.family),lineHeight:SD(N(e.lineHeight,t.lineHeight),a),size:a,style:i,weight:N(e.weight,t.weight),string:""};return n.string=vD(n),n}function Ia(e,t,a,i){let n,s,o;for(n=0,s=e.length;n<s;++n)if(o=e[n],o!==void 0&&o!==void 0)return o}function LD(e,t,a){const{min:i,max:n}=e,s=Oc(t,(n-i)/2),o=(r,h)=>a&&r===0?0:r+h;return{min:o(i,-Math.abs(s)),max:o(n,s)}}function Ce(e,t){return Object.assign(Object.create(e),t)}function Zs(e,t=[""],a,i,n=()=>e[0]){const s=a||e;typeof i>"u"&&(i=Xc("_fallback",e));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:s,_fallback:i,_getTarget:n,override:r=>Zs([r,...e],t,s,i)};return new Proxy(o,{deleteProperty(r,h){return delete r[h],delete r._keys,delete e[0][h],!0},get(r,h){return Yc(r,h,()=>ID(h,t,e,r))},getOwnPropertyDescriptor(r,h){return Reflect.getOwnPropertyDescriptor(r._scopes[0],h)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(r,h){return h0(r).includes(h)},ownKeys(r){return h0(r)},set(r,h,c){const d=r._storage||(r._storage=n());return r[h]=d[h]=c,delete r._keys,!0}})}function ga(e,t,a,i){const n={_cacheable:!1,_proxy:e,_context:t,_subProxy:a,_stack:new Set,_descriptors:Zc(e,i),setContext:s=>ga(e,s,a,i),override:s=>ga(e.override(s),t,a,i)};return new Proxy(n,{deleteProperty(s,o){return delete s[o],delete e[o],!0},get(s,o,r){return Yc(s,o,()=>HD(s,o,r))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(e,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,o)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(s,o){return Reflect.has(e,o)},ownKeys(){return Reflect.ownKeys(e)},set(s,o,r){return e[o]=r,delete s[o],!0}})}function Zc(e,t={scriptable:!0,indexable:!0}){const{_scriptable:a=t.scriptable,_indexable:i=t.indexable,_allKeys:n=t.allKeys}=e;return{allKeys:n,scriptable:a,indexable:i,isScriptable:Ae(a)?a:()=>a,isIndexable:Ae(i)?i:()=>i}}const TD=(e,t)=>e?e+Fs(t):t,Ys=(e,t)=>j(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Yc(e,t,a){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const i=a();return e[t]=i,i}function HD(e,t,a){const{_proxy:i,_context:n,_subProxy:s,_descriptors:o}=e;let r=i[t];return Ae(r)&&o.isScriptable(t)&&(r=VD(t,r,e,a)),et(r)&&r.length&&(r=PD(t,r,e,o.isIndexable)),Ys(t,r)&&(r=ga(r,n,s&&s[t],o)),r}function VD(e,t,a,i){const{_proxy:n,_context:s,_subProxy:o,_stack:r}=a;if(r.has(e))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+e);r.add(e);let h=t(s,o||i);return r.delete(e),Ys(e,h)&&(h=Ks(n._scopes,n,e,h)),h}function PD(e,t,a,i){const{_proxy:n,_context:s,_subProxy:o,_descriptors:r}=a;if(typeof s.index<"u"&&i(e))return t[s.index%t.length];if(j(t[0])){const h=t,c=n._scopes.filter(d=>d!==h);t=[];for(const d of h){const p=Ks(c,n,e,d);t.push(ga(p,s,o&&o[e],r))}}return t}function Kc(e,t,a){return Ae(e)?e(t,a):e}const OD=(e,t)=>e===!0?t:typeof e=="string"?_e(t,e):void 0;function DD(e,t,a,i,n){for(const s of t){const o=OD(a,s);if(o){e.add(o);const r=Kc(o._fallback,a,n);if(typeof r<"u"&&r!==a&&r!==i)return r}else if(o===!1&&typeof i<"u"&&a!==i)return null}return!1}function Ks(e,t,a,i){const n=t._rootScopes,s=Kc(t._fallback,a,i),o=[...e,...n],r=new Set;r.add(i);let h=r0(r,o,a,s||a,i);return h===null||typeof s<"u"&&s!==a&&(h=r0(r,o,s,h,i),h===null)?!1:Zs(Array.from(r),[""],n,s,()=>RD(t,a,i))}function r0(e,t,a,i,n){for(;a;)a=DD(e,t,a,i,n);return a}function RD(e,t,a){const i=e._getTarget();t in i||(i[t]={});const n=i[t];return et(n)&&j(a)?a:n||{}}function ID(e,t,a,i){let n;for(const s of t)if(n=Xc(TD(s,e),a),typeof n<"u")return Ys(e,n)?Ks(a,i,e,n):n}function Xc(e,t){for(const a of t){if(!a)continue;const i=a[e];if(typeof i<"u")return i}}function h0(e){let t=e._keys;return t||(t=e._keys=zD(e._scopes)),t}function zD(e){const t=new Set;for(const a of e)for(const i of Object.keys(a).filter(n=>!n.startsWith("_")))t.add(i);return Array.from(t)}function Gc(e,t,a,i){const{iScale:n}=e,{key:s="r"}=this._parsing,o=new Array(i);let r,h,c,d;for(r=0,h=i;r<h;++r)c=r+a,d=t[c],o[r]={r:n.parse(_e(d,s),c)};return o}const BD=Number.EPSILON||1e-14,ma=(e,t)=>t<e.length&&!e[t].skip&&e[t],Qc=e=>e==="x"?"y":"x";function ND(e,t,a,i){const n=e.skip?t:e,s=t,o=a.skip?t:a,r=vs(s,n),h=vs(o,s);let c=r/(r+h),d=h/(r+h);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const p=i*c,u=i*d;return{previous:{x:s.x-p*(o.x-n.x),y:s.y-p*(o.y-n.y)},next:{x:s.x+u*(o.x-n.x),y:s.y+u*(o.y-n.y)}}}function FD(e,t,a){const i=e.length;let n,s,o,r,h,c=ma(e,0);for(let d=0;d<i-1;++d)if(h=c,c=ma(e,d+1),!(!h||!c)){if(Wa(t[d],0,BD)){a[d]=a[d+1]=0;continue}n=a[d]/t[d],s=a[d+1]/t[d],r=Math.pow(n,2)+Math.pow(s,2),!(r<=9)&&(o=3/Math.sqrt(r),a[d]=n*o*t[d],a[d+1]=s*o*t[d])}}function $D(e,t,a="x"){const i=Qc(a),n=e.length;let s,o,r,h=ma(e,0);for(let c=0;c<n;++c){if(o=r,r=h,h=ma(e,c+1),!r)continue;const d=r[a],p=r[i];o&&(s=(d-o[a])/3,r[`cp1${a}`]=d-s,r[`cp1${i}`]=p-s*t[c]),h&&(s=(h[a]-d)/3,r[`cp2${a}`]=d+s,r[`cp2${i}`]=p+s*t[c])}}function WD(e,t="x"){const a=Qc(t),i=e.length,n=Array(i).fill(0),s=Array(i);let o,r,h,c=ma(e,0);for(o=0;o<i;++o)if(r=h,h=c,c=ma(e,o+1),!!h){if(c){const d=c[t]-h[t];n[o]=d!==0?(c[a]-h[a])/d:0}s[o]=r?c?Zt(n[o-1])!==Zt(n[o])?0:(n[o-1]+n[o])/2:n[o-1]:n[o]}FD(e,n,s),$D(e,s,t)}function Si(e,t,a){return Math.max(Math.min(e,a),t)}function jD(e,t){let a,i,n,s,o,r=oe(e[0],t);for(a=0,i=e.length;a<i;++a)o=s,s=r,r=a<i-1&&oe(e[a+1],t),s&&(n=e[a],o&&(n.cp1x=Si(n.cp1x,t.left,t.right),n.cp1y=Si(n.cp1y,t.top,t.bottom)),r&&(n.cp2x=Si(n.cp2x,t.left,t.right),n.cp2y=Si(n.cp2y,t.top,t.bottom)))}function UD(e,t,a,i,n){let s,o,r,h;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")WD(e,n);else{let c=i?e[e.length-1]:e[0];for(s=0,o=e.length;s<o;++s)r=e[s],h=ND(c,r,e[Math.min(s+1,o-(i?0:1))%o],t.tension),r.cp1x=h.previous.x,r.cp1y=h.previous.y,r.cp2x=h.next.x,r.cp2y=h.next.y,c=r}t.capBezierPoints&&jD(e,a)}function Xs(){return typeof window<"u"&&typeof document<"u"}function Gs(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function an(e,t,a){let i;return typeof e=="string"?(i=parseInt(e,10),e.indexOf("%")!==-1&&(i=i/100*t.parentNode[a])):i=e,i}const yn=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function qD(e,t){return yn(e).getPropertyValue(t)}const ZD=["top","right","bottom","left"];function je(e,t,a){const i={};a=a?"-"+a:"";for(let n=0;n<4;n++){const s=ZD[n];i[s]=parseFloat(e[t+"-"+s+a])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const YD=(e,t,a)=>(e>0||t>0)&&(!a||!a.shadowRoot);function KD(e,t){const a=e.touches,i=a&&a.length?a[0]:e,{offsetX:n,offsetY:s}=i;let o=!1,r,h;if(YD(n,s,e.target))r=n,h=s;else{const c=t.getBoundingClientRect();r=i.clientX-c.left,h=i.clientY-c.top,o=!0}return{x:r,y:h,box:o}}function Ne(e,t){if("native"in e)return e;const{canvas:a,currentDevicePixelRatio:i}=t,n=yn(a),s=n.boxSizing==="border-box",o=je(n,"padding"),r=je(n,"border","width"),{x:h,y:c,box:d}=KD(e,a),p=o.left+(d&&r.left),u=o.top+(d&&r.top);let{width:g,height:M}=t;return s&&(g-=o.width+r.width,M-=o.height+r.height),{x:Math.round((h-p)/g*a.width/i),y:Math.round((c-u)/M*a.height/i)}}function XD(e,t,a){let i,n;if(t===void 0||a===void 0){const s=e&&Gs(e);if(!s)t=e.clientWidth,a=e.clientHeight;else{const o=s.getBoundingClientRect(),r=yn(s),h=je(r,"border","width"),c=je(r,"padding");t=o.width-c.width-h.width,a=o.height-c.height-h.height,i=an(r.maxWidth,s,"clientWidth"),n=an(r.maxHeight,s,"clientHeight")}}return{width:t,height:a,maxWidth:i||tn,maxHeight:n||tn}}const ki=e=>Math.round(e*10)/10;function GD(e,t,a,i){const n=yn(e),s=je(n,"margin"),o=an(n.maxWidth,e,"clientWidth")||tn,r=an(n.maxHeight,e,"clientHeight")||tn,h=XD(e,t,a);let{width:c,height:d}=h;if(n.boxSizing==="content-box"){const u=je(n,"border","width"),g=je(n,"padding");c-=g.width+u.width,d-=g.height+u.height}return c=Math.max(0,c-s.width),d=Math.max(0,i?c/i:d-s.height),c=ki(Math.min(c,o,h.maxWidth)),d=ki(Math.min(d,r,h.maxHeight)),c&&!d&&(d=ki(c/2)),(t!==void 0||a!==void 0)&&i&&h.height&&d>h.height&&(d=h.height,c=ki(Math.floor(d*i))),{width:c,height:d}}function c0(e,t,a){const i=t||1,n=Math.floor(e.height*i),s=Math.floor(e.width*i);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const o=e.canvas;return o.style&&(a||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==i||o.height!==n||o.width!==s?(e.currentDevicePixelRatio=i,o.height=n,o.width=s,e.ctx.setTransform(i,0,0,i,0,0),!0):!1}const QD=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Xs()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function l0(e,t){const a=qD(e,t),i=a&&a.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Fe(e,t,a,i){return{x:e.x+a*(t.x-e.x),y:e.y+a*(t.y-e.y)}}function JD(e,t,a,i){return{x:e.x+a*(t.x-e.x),y:i==="middle"?a<.5?e.y:t.y:i==="after"?a<1?e.y:t.y:a>0?t.y:e.y}}function tR(e,t,a,i){const n={x:e.cp2x,y:e.cp2y},s={x:t.cp1x,y:t.cp1y},o=Fe(e,n,a),r=Fe(n,s,a),h=Fe(s,t,a),c=Fe(o,r,a),d=Fe(r,h,a);return Fe(c,d,a)}const eR=function(e,t){return{x(a){return e+e+t-a},setWidth(a){t=a},textAlign(a){return a==="center"?a:a==="right"?"left":"right"},xPlus(a,i){return a-i},leftForLtr(a,i){return a-i}}},aR=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function da(e,t,a){return e?eR(t,a):aR()}function Jc(e,t){let a,i;(t==="ltr"||t==="rtl")&&(a=e.canvas.style,i=[a.getPropertyValue("direction"),a.getPropertyPriority("direction")],a.setProperty("direction",t,"important"),e.prevTextDirection=i)}function tl(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function el(e){return e==="angle"?{between:Xa,compare:iD,normalize:ft}:{between:ne,compare:(t,a)=>t-a,normalize:t=>t}}function d0({start:e,end:t,count:a,loop:i,style:n}){return{start:e%a,end:t%a,loop:i&&(t-e+1)%a===0,style:n}}function iR(e,t,a){const{property:i,start:n,end:s}=a,{between:o,normalize:r}=el(i),h=t.length;let{start:c,end:d,loop:p}=e,u,g;if(p){for(c+=h,d+=h,u=0,g=h;u<g&&o(r(t[c%h][i]),n,s);++u)c--,d--;c%=h,d%=h}return d<c&&(d+=h),{start:c,end:d,loop:p,style:e.style}}function al(e,t,a){if(!a)return[e];const{property:i,start:n,end:s}=a,o=t.length,{compare:r,between:h,normalize:c}=el(i),{start:d,end:p,loop:u,style:g}=iR(e,t,a),M=[];let m=!1,v=null,b,w,S;const k=()=>h(n,S,b)&&r(n,S)!==0,_=()=>r(s,b)===0||h(s,S,b),E=()=>m||k(),T=()=>!m||_();for(let H=d,D=d;H<=p;++H)w=t[H%o],!w.skip&&(b=c(w[i]),b!==S&&(m=h(b,n,s),v===null&&E()&&(v=r(b,n)===0?H:D),v!==null&&T()&&(M.push(d0({start:v,end:H,loop:u,count:o,style:g})),v=null),D=H,S=b));return v!==null&&M.push(d0({start:v,end:p,loop:u,count:o,style:g})),M}function il(e,t){const a=[],i=e.segments;for(let n=0;n<i.length;n++){const s=al(i[n],e.points,t);s.length&&a.push(...s)}return a}function nR(e,t,a,i){let n=0,s=t-1;if(a&&!i)for(;n<t&&!e[n].skip;)n++;for(;n<t&&e[n].skip;)n++;for(n%=t,a&&(s+=n);s>n&&e[s%t].skip;)s--;return s%=t,{start:n,end:s}}function sR(e,t,a,i){const n=e.length,s=[];let o=t,r=e[t],h;for(h=t+1;h<=a;++h){const c=e[h%n];c.skip||c.stop?r.skip||(i=!1,s.push({start:t%n,end:(h-1)%n,loop:i}),t=o=c.stop?h:null):(o=h,r.skip&&(t=h)),r=c}return o!==null&&s.push({start:t%n,end:o%n,loop:i}),s}function oR(e,t){const a=e.points,i=e.options.spanGaps,n=a.length;if(!n)return[];const s=!!e._loop,{start:o,end:r}=nR(a,n,s,i);if(i===!0)return p0(e,[{start:o,end:r,loop:s}],a,t);const h=r<o?r+n:r,c=!!e._fullLoop&&o===0&&r===n-1;return p0(e,sR(a,o,h,c),a,t)}function p0(e,t,a,i){return!i||!i.setContext||!a?t:rR(e,t,a,i)}function rR(e,t,a,i){const n=e._chart.getContext(),s=u0(e.options),{_datasetIndex:o,options:{spanGaps:r}}=e,h=a.length,c=[];let d=s,p=t[0].start,u=p;function g(M,m,v,b){const w=r?-1:1;if(M!==m){for(M+=h;a[M%h].skip;)M-=w;for(;a[m%h].skip;)m+=w;M%h!==m%h&&(c.push({start:M%h,end:m%h,loop:v,style:b}),d=b,p=m%h)}}for(const M of t){p=r?p:M.start;let m=a[p%h],v;for(u=p+1;u<=M.end;u++){const b=a[u%h];v=u0(i.setContext(Ce(n,{type:"segment",p0:m,p1:b,p0DataIndex:(u-1)%h,p1DataIndex:u%h,datasetIndex:o}))),hR(v,d)&&g(p,u-1,M.loop,d),m=b,d=v}p<u-1&&g(p,u-1,M.loop,d)}return c}function u0(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function hR(e,t){if(!t)return!1;const a=[],i=function(n,s){return Us(s)?(a.includes(s)||a.push(s),a.indexOf(s)):s};return JSON.stringify(e,i)!==JSON.stringify(t,i)}function Li(e,t,a){return e.options.clip?e[a]:t[a]}function cR(e,t){const{xScale:a,yScale:i}=e;return a&&i?{left:Li(a,t,"left"),right:Li(a,t,"right"),top:Li(i,t,"top"),bottom:Li(i,t,"bottom")}:t}function nl(e,t){const a=t._clip;if(a.disabled)return!1;const i=cR(t,e.chartArea);return{left:a.left===!1?0:i.left-(a.left===!0?0:a.left),right:a.right===!1?e.width:i.right+(a.right===!0?0:a.right),top:a.top===!1?0:i.top-(a.top===!0?0:a.top),bottom:a.bottom===!1?e.height:i.bottom+(a.bottom===!0?0:a.bottom)}}/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class lR{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,a,i,n){const s=a.listeners[n],o=a.duration;s.forEach(r=>r({chart:t,initial:a.initial,numSteps:o,currentStep:Math.min(i-a.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Nc.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let a=0;this._charts.forEach((i,n)=>{if(!i.running||!i.items.length)return;const s=i.items;let o=s.length-1,r=!1,h;for(;o>=0;--o)h=s[o],h._active?(h._total>i.duration&&(i.duration=h._total),h.tick(t),r=!0):(s[o]=s[s.length-1],s.pop());r&&(n.draw(),this._notify(n,i,t,"progress")),s.length||(i.running=!1,this._notify(n,i,t,"complete"),i.initial=!1),a+=s.length}),this._lastDate=t,a===0&&(this._running=!1)}_getAnims(t){const a=this._charts;let i=a.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},a.set(t,i)),i}listen(t,a,i){this._getAnims(t).listeners[a].push(i)}add(t,a){!a||!a.length||this._getAnims(t).items.push(...a)}has(t){return this._getAnims(t).items.length>0}start(t){const a=this._charts.get(t);a&&(a.running=!0,a.start=Date.now(),a.duration=a.items.reduce((i,n)=>Math.max(i,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;const a=this._charts.get(t);return!(!a||!a.running||!a.items.length)}stop(t){const a=this._charts.get(t);if(!a||!a.items.length)return;const i=a.items;let n=i.length-1;for(;n>=0;--n)i[n].cancel();a.items=[],this._notify(t,a,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var ee=new lR;const f0="transparent",dR={boolean(e,t,a){return a>.5?t:e},color(e,t,a){const i=n0(e||f0),n=i.valid&&n0(t||f0);return n&&n.valid?n.mix(i,a).hexString():t},number(e,t,a){return e+(t-e)*a}};class pR{constructor(t,a,i,n){const s=a[i];n=Ia([t.to,n,s,t.from]);const o=Ia([t.from,s,n]);this._active=!0,this._fn=t.fn||dR[t.type||typeof o],this._easing=ja[t.easing]||ja.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=a,this._prop=i,this._from=o,this._to=n,this._promises=void 0}active(){return this._active}update(t,a,i){if(this._active){this._notify(!1);const n=this._target[this._prop],s=i-this._start,o=this._duration-s;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=s,this._loop=!!t.loop,this._to=Ia([t.to,a,n,t.from]),this._from=Ia([t.from,n,a])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const a=t-this._start,i=this._duration,n=this._prop,s=this._from,o=this._loop,r=this._to;let h;if(this._active=s!==r&&(o||a<i),!this._active){this._target[n]=r,this._notify(!0);return}if(a<0){this._target[n]=s;return}h=a/i%2,h=o&&h>1?2-h:h,h=this._easing(Math.min(1,Math.max(0,h))),this._target[n]=this._fn(s,r,h)}wait(){const t=this._promises||(this._promises=[]);return new Promise((a,i)=>{t.push({res:a,rej:i})})}_notify(t){const a=t?"res":"rej",i=this._promises||[];for(let n=0;n<i.length;n++)i[n][a]()}}class sl{constructor(t,a){this._chart=t,this._properties=new Map,this.configure(a)}configure(t){if(!j(t))return;const a=Object.keys(at.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const s=t[n];if(!j(s))return;const o={};for(const r of a)o[r]=s[r];(et(s.properties)&&s.properties||[n]).forEach(r=>{(r===n||!i.has(r))&&i.set(r,o)})})}_animateOptions(t,a){const i=a.options,n=fR(t,i);if(!n)return[];const s=this._createAnimations(n,i);return i.$shared&&uR(t.options.$animations,i).then(()=>{t.options=i},()=>{}),s}_createAnimations(t,a){const i=this._properties,n=[],s=t.$animations||(t.$animations={}),o=Object.keys(a),r=Date.now();let h;for(h=o.length-1;h>=0;--h){const c=o[h];if(c.charAt(0)==="$")continue;if(c==="options"){n.push(...this._animateOptions(t,a));continue}const d=a[c];let p=s[c];const u=i.get(c);if(p)if(u&&p.active()){p.update(u,d,r);continue}else p.cancel();if(!u||!u.duration){t[c]=d;continue}s[c]=p=new pR(u,t,c,d),n.push(p)}return n}update(t,a){if(this._properties.size===0){Object.assign(t,a);return}const i=this._createAnimations(t,a);if(i.length)return ee.add(this._chart,i),!0}}function uR(e,t){const a=[],i=Object.keys(t);for(let n=0;n<i.length;n++){const s=e[i[n]];s&&s.active()&&a.push(s.wait())}return Promise.all(a)}function fR(e,t){if(!t)return;let a=e.options;if(!a){e.options=t;return}return a.$shared&&(e.options=a=Object.assign({},a,{$shared:!1,$animations:{}})),a}function g0(e,t){const a=e&&e.options||{},i=a.reverse,n=a.min===void 0?t:0,s=a.max===void 0?t:0;return{start:i?s:n,end:i?n:s}}function gR(e,t,a){if(a===!1)return!1;const i=g0(e,a),n=g0(t,a);return{top:n.end,right:i.end,bottom:n.start,left:i.start}}function mR(e){let t,a,i,n;return j(e)?(t=e.top,a=e.right,i=e.bottom,n=e.left):t=a=i=n=e,{top:t,right:a,bottom:i,left:n,disabled:e===!1}}function ol(e,t){const a=[],i=e._getSortedDatasetMetas(t);let n,s;for(n=0,s=i.length;n<s;++n)a.push(i[n].index);return a}function m0(e,t,a,i={}){const n=e.keys,s=i.mode==="single";let o,r,h,c;if(t===null)return;let d=!1;for(o=0,r=n.length;o<r;++o){if(h=+n[o],h===a){if(d=!0,i.all)continue;break}c=e.values[h],it(c)&&(s||t===0||Zt(t)===Zt(c))&&(t+=c)}return!d&&!i.all?0:t}function MR(e,t){const{iScale:a,vScale:i}=t,n=a.axis==="x"?"x":"y",s=i.axis==="x"?"x":"y",o=Object.keys(e),r=new Array(o.length);let h,c,d;for(h=0,c=o.length;h<c;++h)d=o[h],r[h]={[n]:d,[s]:e[d]};return r}function ts(e,t){const a=e&&e.options.stacked;return a||a===void 0&&t.stack!==void 0}function vR(e,t,a){return`${e.id}.${t.id}.${a.stack||a.type}`}function yR(e){const{min:t,max:a,minDefined:i,maxDefined:n}=e.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:n?a:Number.POSITIVE_INFINITY}}function xR(e,t,a){const i=e[t]||(e[t]={});return i[a]||(i[a]={})}function M0(e,t,a,i){for(const n of t.getMatchingVisibleMetas(i).reverse()){const s=e[n.index];if(a&&s>0||!a&&s<0)return n.index}return null}function v0(e,t){const{chart:a,_cachedMeta:i}=e,n=a._stacks||(a._stacks={}),{iScale:s,vScale:o,index:r}=i,h=s.axis,c=o.axis,d=vR(s,o,i),p=t.length;let u;for(let g=0;g<p;++g){const M=t[g],{[h]:m,[c]:v}=M,b=M._stacks||(M._stacks={});u=b[c]=xR(n,d,m),u[r]=v,u._top=M0(u,o,!0,i.type),u._bottom=M0(u,o,!1,i.type);const w=u._visualValues||(u._visualValues={});w[r]=v}}function es(e,t){const a=e.scales;return Object.keys(a).filter(i=>a[i].axis===t).shift()}function bR(e,t){return Ce(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function wR(e,t,a){return Ce(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:a,index:t,mode:"default",type:"data"})}function Ha(e,t){const a=e.controller.index,i=e.vScale&&e.vScale.axis;if(i){t=t||e._parsed;for(const n of t){const s=n._stacks;if(!s||s[i]===void 0||s[i][a]===void 0)return;delete s[i][a],s[i]._visualValues!==void 0&&s[i]._visualValues[a]!==void 0&&delete s[i]._visualValues[a]}}}const as=e=>e==="reset"||e==="none",y0=(e,t)=>t?e:Object.assign({},e),_R=(e,t,a)=>e&&!t.hidden&&t._stacked&&{keys:ol(a,!0),values:null};class Ft{constructor(t,a){this.chart=t,this._ctx=t.ctx,this.index=a,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ts(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Ha(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,a=this._cachedMeta,i=this.getDataset(),n=(p,u,g,M)=>p==="x"?u:p==="r"?M:g,s=a.xAxisID=N(i.xAxisID,es(t,"x")),o=a.yAxisID=N(i.yAxisID,es(t,"y")),r=a.rAxisID=N(i.rAxisID,es(t,"r")),h=a.indexAxis,c=a.iAxisID=n(h,s,o,r),d=a.vAxisID=n(h,o,s,r);a.xScale=this.getScaleForId(s),a.yScale=this.getScaleForId(o),a.rScale=this.getScaleForId(r),a.iScale=this.getScaleForId(c),a.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const a=this._cachedMeta;return t===a.iScale?a.vScale:a.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&e0(this._data,this),t._stacked&&Ha(t)}_dataCheck(){const t=this.getDataset(),a=t.data||(t.data=[]),i=this._data;if(j(a)){const n=this._cachedMeta;this._data=MR(a,n)}else if(i!==a){if(i){e0(i,this);const n=this._cachedMeta;Ha(n),n._parsed=[]}a&&Object.isExtensible(a)&&rD(a,this),this._syncList=[],this._data=a}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const a=this._cachedMeta,i=this.getDataset();let n=!1;this._dataCheck();const s=a._stacked;a._stacked=ts(a.vScale,a),a.stack!==i.stack&&(n=!0,Ha(a),a.stack=i.stack),this._resyncElements(t),(n||s!==a._stacked)&&(v0(this,a._parsed),a._stacked=ts(a.vScale,a))}configure(){const t=this.chart.config,a=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),a,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,a){const{_cachedMeta:i,_data:n}=this,{iScale:s,_stacked:o}=i,r=s.axis;let h=t===0&&a===n.length?!0:i._sorted,c=t>0&&i._parsed[t-1],d,p,u;if(this._parsing===!1)i._parsed=n,i._sorted=!0,u=n;else{et(n[t])?u=this.parseArrayData(i,n,t,a):j(n[t])?u=this.parseObjectData(i,n,t,a):u=this.parsePrimitiveData(i,n,t,a);const g=()=>p[r]===null||c&&p[r]<c[r];for(d=0;d<a;++d)i._parsed[d+t]=p=u[d],h&&(g()&&(h=!1),c=p);i._sorted=h}o&&v0(this,u)}parsePrimitiveData(t,a,i,n){const{iScale:s,vScale:o}=t,r=s.axis,h=o.axis,c=s.getLabels(),d=s===o,p=new Array(n);let u,g,M;for(u=0,g=n;u<g;++u)M=u+i,p[u]={[r]:d||s.parse(c[M],M),[h]:o.parse(a[M],M)};return p}parseArrayData(t,a,i,n){const{xScale:s,yScale:o}=t,r=new Array(n);let h,c,d,p;for(h=0,c=n;h<c;++h)d=h+i,p=a[d],r[h]={x:s.parse(p[0],d),y:o.parse(p[1],d)};return r}parseObjectData(t,a,i,n){const{xScale:s,yScale:o}=t,{xAxisKey:r="x",yAxisKey:h="y"}=this._parsing,c=new Array(n);let d,p,u,g;for(d=0,p=n;d<p;++d)u=d+i,g=a[u],c[d]={x:s.parse(_e(g,r),u),y:o.parse(_e(g,h),u)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,a,i){const n=this.chart,s=this._cachedMeta,o=a[t.axis],r={keys:ol(n,!0),values:a._stacks[t.axis]._visualValues};return m0(r,o,s.index,{mode:i})}updateRangeFromParsed(t,a,i,n){const s=i[a.axis];let o=s===null?NaN:s;const r=n&&i._stacks[a.axis];n&&r&&(n.values=r,o=m0(n,s,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,a){const i=this._cachedMeta,n=i._parsed,s=i._sorted&&t===i.iScale,o=n.length,r=this._getOtherScale(t),h=_R(a,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:p}=yR(r);let u,g;function M(){g=n[u];const m=g[r.axis];return!it(g[t.axis])||d>m||p<m}for(u=0;u<o&&!(!M()&&(this.updateRangeFromParsed(c,t,g,h),s));++u);if(s){for(u=o-1;u>=0;--u)if(!M()){this.updateRangeFromParsed(c,t,g,h);break}}return c}getAllParsedValues(t){const a=this._cachedMeta._parsed,i=[];let n,s,o;for(n=0,s=a.length;n<s;++n)o=a[n][t.axis],it(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const a=this._cachedMeta,i=a.iScale,n=a.vScale,s=this.getParsed(t);return{label:i?""+i.getLabelForValue(s[i.axis]):"",value:n?""+n.getLabelForValue(s[n.axis]):""}}_update(t){const a=this._cachedMeta;this.update(t||"default"),a._clip=mR(N(this.options.clip,gR(a.xScale,a.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,a=this.chart,i=this._cachedMeta,n=i.data||[],s=a.chartArea,o=[],r=this._drawStart||0,h=this._drawCount||n.length-r,c=this.options.drawActiveElementsOnTop;let d;for(i.dataset&&i.dataset.draw(t,s,r,h),d=r;d<r+h;++d){const p=n[d];p.hidden||(p.active&&c?o.push(p):p.draw(t,s))}for(d=0;d<o.length;++d)o[d].draw(t,s)}getStyle(t,a){const i=a?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,a,i){const n=this.getDataset();let s;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];s=o.$context||(o.$context=wR(this.getContext(),t,o)),s.parsed=this.getParsed(t),s.raw=n.data[t],s.index=s.dataIndex=t}else s=this.$context||(this.$context=bR(this.chart.getContext(),this.index)),s.dataset=n,s.index=s.datasetIndex=this.index;return s.active=!!a,s.mode=i,s}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,a){return this._resolveElementOptions(this.dataElementType.id,a,t)}_resolveElementOptions(t,a="default",i){const n=a==="active",s=this._cachedDataOpts,o=t+"-"+a,r=s[o],h=this.enableOptionSharing&&Ka(i);if(r)return y0(r,h);const c=this.chart.config,d=c.datasetElementScopeKeys(this._type,t),p=n?[`${t}Hover`,"hover",t,""]:[t,""],u=c.getOptionScopes(this.getDataset(),d),g=Object.keys(at.elements[t]),M=()=>this.getContext(i,n,a),m=c.resolveNamedOptions(u,g,M,p);return m.$shared&&(m.$shared=h,s[o]=Object.freeze(y0(m,h))),m}_resolveAnimations(t,a,i){const n=this.chart,s=this._cachedDataOpts,o=`animation-${a}`,r=s[o];if(r)return r;let h;if(n.options.animation!==!1){const d=this.chart.config,p=d.datasetAnimationScopeKeys(this._type,a),u=d.getOptionScopes(this.getDataset(),p);h=d.createResolver(u,this.getContext(t,i,a))}const c=new sl(n,h&&h.animations);return h&&h._cacheable&&(s[o]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,a){return!a||as(t)||this.chart._animationsDisabled}_getSharedOptions(t,a){const i=this.resolveDataElementOptions(t,a),n=this._sharedOptions,s=this.getSharedOptions(i),o=this.includeOptions(a,s)||s!==n;return this.updateSharedOptions(s,a,i),{sharedOptions:s,includeOptions:o}}updateElement(t,a,i,n){as(n)?Object.assign(t,i):this._resolveAnimations(a,n).update(t,i)}updateSharedOptions(t,a,i){t&&!as(a)&&this._resolveAnimations(void 0,a).update(t,i)}_setStyle(t,a,i,n){t.active=n;const s=this.getStyle(a,n);this._resolveAnimations(a,i,n).update(t,{options:!n&&this.getSharedOptions(s)||s})}removeHoverStyle(t,a,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,a,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const a=this._data,i=this._cachedMeta.data;for(const[r,h,c]of this._syncList)this[r](h,c);this._syncList=[];const n=i.length,s=a.length,o=Math.min(s,n);o&&this.parse(0,o),s>n?this._insertElements(n,s-n,t):s<n&&this._removeElements(s,n-s)}_insertElements(t,a,i=!0){const n=this._cachedMeta,s=n.data,o=t+a;let r;const h=c=>{for(c.length+=a,r=c.length-1;r>=o;r--)c[r]=c[r-a]};for(h(s),r=t;r<o;++r)s[r]=new this.dataElementType;this._parsing&&h(n._parsed),this.parse(t,a),i&&this.updateElements(s,t,a,"reset")}updateElements(t,a,i,n){}_removeElements(t,a){const i=this._cachedMeta;if(this._parsing){const n=i._parsed.splice(t,a);i._stacked&&Ha(i,n)}i.data.splice(t,a)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[a,i,n]=t;this[a](i,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,a){a&&this._sync(["_removeElements",t,a]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}O(Ft,"defaults",{}),O(Ft,"datasetElementType",null),O(Ft,"dataElementType",null);function AR(e,t){if(!e._cache.$bar){const a=e.getMatchingVisibleMetas(t);let i=[];for(let n=0,s=a.length;n<s;n++)i=i.concat(a[n].controller.getAllParsedValues(e));e._cache.$bar=Bc(i.sort((n,s)=>n-s))}return e._cache.$bar}function CR(e){const t=e.iScale,a=AR(t,e.type);let i=t._length,n,s,o,r;const h=()=>{o===32767||o===-32768||(Ka(r)&&(i=Math.min(i,Math.abs(o-r)||i)),r=o)};for(n=0,s=a.length;n<s;++n)o=t.getPixelForValue(a[n]),h();for(r=void 0,n=0,s=t.ticks.length;n<s;++n)o=t.getPixelForTick(n),h();return i}function ER(e,t,a,i){const n=a.barThickness;let s,o;return W(n)?(s=t.min*a.categoryPercentage,o=a.barPercentage):(s=n*i,o=1),{chunk:s/i,ratio:o,start:t.pixels[e]-s/2}}function SR(e,t,a,i){const n=t.pixels,s=n[e];let o=e>0?n[e-1]:null,r=e<n.length-1?n[e+1]:null;const h=a.categoryPercentage;o===null&&(o=s-(r===null?t.end-t.start:r-s)),r===null&&(r=s+s-o);const c=s-(s-Math.min(o,r))/2*h;return{chunk:Math.abs(r-o)/2*h/i,ratio:a.barPercentage,start:c}}function kR(e,t,a,i){const n=a.parse(e[0],i),s=a.parse(e[1],i),o=Math.min(n,s),r=Math.max(n,s);let h=o,c=r;Math.abs(o)>Math.abs(r)&&(h=r,c=o),t[a.axis]=c,t._custom={barStart:h,barEnd:c,start:n,end:s,min:o,max:r}}function rl(e,t,a,i){return et(e)?kR(e,t,a,i):t[a.axis]=a.parse(e,i),t}function x0(e,t,a,i){const n=e.iScale,s=e.vScale,o=n.getLabels(),r=n===s,h=[];let c,d,p,u;for(c=a,d=a+i;c<d;++c)u=t[c],p={},p[n.axis]=r||n.parse(o[c],c),h.push(rl(u,p,s,c));return h}function is(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function LR(e,t,a){return e!==0?Zt(e):(t.isHorizontal()?1:-1)*(t.min>=a?1:-1)}function TR(e){let t,a,i,n,s;return e.horizontal?(t=e.base>e.x,a="left",i="right"):(t=e.base<e.y,a="bottom",i="top"),t?(n="end",s="start"):(n="start",s="end"),{start:a,end:i,reverse:t,top:n,bottom:s}}function HR(e,t,a,i){let n=t.borderSkipped;const s={};if(!n){e.borderSkipped=s;return}if(n===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:r,reverse:h,top:c,bottom:d}=TR(e);n==="middle"&&a&&(e.enableBorderRadius=!0,(a._top||0)===i?n=c:(a._bottom||0)===i?n=d:(s[b0(d,o,r,h)]=!0,n=c)),s[b0(n,o,r,h)]=!0,e.borderSkipped=s}function b0(e,t,a,i){return i?(e=VR(e,t,a),e=w0(e,a,t)):e=w0(e,t,a),e}function VR(e,t,a){return e===t?a:e===a?t:e}function w0(e,t,a){return e==="start"?t:e==="end"?a:e}function PR(e,{inflateAmount:t},a){e.inflateAmount=t==="auto"?a===1?.33:0:t}class Ni extends Ft{parsePrimitiveData(t,a,i,n){return x0(t,a,i,n)}parseArrayData(t,a,i,n){return x0(t,a,i,n)}parseObjectData(t,a,i,n){const{iScale:s,vScale:o}=t,{xAxisKey:r="x",yAxisKey:h="y"}=this._parsing,c=s.axis==="x"?r:h,d=o.axis==="x"?r:h,p=[];let u,g,M,m;for(u=i,g=i+n;u<g;++u)m=a[u],M={},M[s.axis]=s.parse(_e(m,c),u),p.push(rl(_e(m,d),M,o,u));return p}updateRangeFromParsed(t,a,i,n){super.updateRangeFromParsed(t,a,i,n);const s=i._custom;s&&a===this._cachedMeta.vScale&&(t.min=Math.min(t.min,s.min),t.max=Math.max(t.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const a=this._cachedMeta,{iScale:i,vScale:n}=a,s=this.getParsed(t),o=s._custom,r=is(o)?"["+o.start+", "+o.end+"]":""+n.getLabelForValue(s[n.axis]);return{label:""+i.getLabelForValue(s[i.axis]),value:r}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const a=this._cachedMeta;this.updateElements(a.data,0,a.data.length,t)}updateElements(t,a,i,n){const s=n==="reset",{index:o,_cachedMeta:{vScale:r}}=this,h=r.getBasePixel(),c=r.isHorizontal(),d=this._getRuler(),{sharedOptions:p,includeOptions:u}=this._getSharedOptions(a,n);for(let g=a;g<a+i;g++){const M=this.getParsed(g),m=s||W(M[r.axis])?{base:h,head:h}:this._calculateBarValuePixels(g),v=this._calculateBarIndexPixels(g,d),b=(M._stacks||{})[r.axis],w={horizontal:c,base:m.base,enableBorderRadius:!b||is(M._custom)||o===b._top||o===b._bottom,x:c?m.head:v.center,y:c?v.center:m.head,height:c?v.size:Math.abs(m.size),width:c?Math.abs(m.size):v.size};u&&(w.options=p||this.resolveDataElementOptions(g,t[g].active?"active":n));const S=w.options||t[g].options;HR(w,S,b,o),PR(w,S,d.ratio),this.updateElement(t[g],g,w,n)}}_getStacks(t,a){const{iScale:i}=this._cachedMeta,n=i.getMatchingVisibleMetas(this._type).filter(d=>d.controller.options.grouped),s=i.options.stacked,o=[],r=this._cachedMeta.controller.getParsed(a),h=r&&r[i.axis],c=d=>{const p=d._parsed.find(g=>g[i.axis]===h),u=p&&p[d.vScale.axis];if(W(u)||isNaN(u))return!0};for(const d of n)if(!(a!==void 0&&c(d))&&((s===!1||o.indexOf(d.stack)===-1||s===void 0&&d.stack===void 0)&&o.push(d.stack),d.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,a=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===a).shift()}_getAxis(){const t={},a=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[N(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,a)]=!0;return Object.keys(t)}_getStackIndex(t,a,i){const n=this._getStacks(t,i),s=a!==void 0?n.indexOf(a):-1;return s===-1?n.length-1:s}_getRuler(){const t=this.options,a=this._cachedMeta,i=a.iScale,n=[];let s,o;for(s=0,o=a.data.length;s<o;++s)n.push(i.getPixelForValue(this.getParsed(s)[i.axis],s));const r=t.barThickness;return{min:r||CR(a),pixels:n,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:r?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:a,_stacked:i,index:n},options:{base:s,minBarLength:o}}=this,r=s||0,h=this.getParsed(t),c=h._custom,d=is(c);let p=h[a.axis],u=0,g=i?this.applyStack(a,h,i):p,M,m;g!==p&&(u=g-p,g=p),d&&(p=c.barStart,g=c.barEnd-c.barStart,p!==0&&Zt(p)!==Zt(c.barEnd)&&(u=0),u+=p);const v=!W(s)&&!d?s:u;let b=a.getPixelForValue(v);if(this.chart.getDataVisibility(t)?M=a.getPixelForValue(u+g):M=b,m=M-b,Math.abs(m)<o){m=LR(m,a,r)*o,p===r&&(b-=m/2);const w=a.getPixelForDecimal(0),S=a.getPixelForDecimal(1),k=Math.min(w,S),_=Math.max(w,S);b=Math.max(Math.min(b,_),k),M=b+m,i&&!d&&(h._stacks[a.axis]._visualValues[n]=a.getValueForPixel(M)-a.getValueForPixel(b))}if(b===a.getPixelForValue(r)){const w=Zt(m)*a.getLineWidthForValue(r)/2;b+=w,m-=w}return{size:m,base:b,head:M,center:M+m/2}}_calculateBarIndexPixels(t,a){const i=a.scale,n=this.options,s=n.skipNull,o=N(n.maxBarThickness,1/0);let r,h;const c=this._getAxisCount();if(a.grouped){const d=s?this._getStackCount(t):a.stackCount,p=n.barThickness==="flex"?SR(t,a,n,d*c):ER(t,a,n,d*c),u=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(N(u,this.getFirstScaleIdForIndexAxis())),M=this._getStackIndex(this.index,this._cachedMeta.stack,s?t:void 0)+g;r=p.start+p.chunk*M+p.chunk/2,h=Math.min(o,p.chunk*p.ratio)}else r=i.getPixelForValue(this.getParsed(t)[i.axis],t),h=Math.min(o,a.min*a.ratio);return{base:r-h/2,head:r+h/2,center:r,size:h}}draw(){const t=this._cachedMeta,a=t.vScale,i=t.data,n=i.length;let s=0;for(;s<n;++s)this.getParsed(s)[a.axis]!==null&&!i[s].hidden&&i[s].draw(this._ctx)}}O(Ni,"id","bar"),O(Ni,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),O(Ni,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Fi extends Ft{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,a,i,n){const s=super.parsePrimitiveData(t,a,i,n);for(let o=0;o<s.length;o++)s[o]._custom=this.resolveDataElementOptions(o+i).radius;return s}parseArrayData(t,a,i,n){const s=super.parseArrayData(t,a,i,n);for(let o=0;o<s.length;o++){const r=a[i+o];s[o]._custom=N(r[2],this.resolveDataElementOptions(o+i).radius)}return s}parseObjectData(t,a,i,n){const s=super.parseObjectData(t,a,i,n);for(let o=0;o<s.length;o++){const r=a[i+o];s[o]._custom=N(r&&r.r&&+r.r,this.resolveDataElementOptions(o+i).radius)}return s}getMaxOverflow(){const t=this._cachedMeta.data;let a=0;for(let i=t.length-1;i>=0;--i)a=Math.max(a,t[i].size(this.resolveDataElementOptions(i))/2);return a>0&&a}getLabelAndValue(t){const a=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:s}=a,o=this.getParsed(t),r=n.getLabelForValue(o.x),h=s.getLabelForValue(o.y),c=o._custom;return{label:i[t]||"",value:"("+r+", "+h+(c?", "+c:"")+")"}}update(t){const a=this._cachedMeta.data;this.updateElements(a,0,a.length,t)}updateElements(t,a,i,n){const s=n==="reset",{iScale:o,vScale:r}=this._cachedMeta,{sharedOptions:h,includeOptions:c}=this._getSharedOptions(a,n),d=o.axis,p=r.axis;for(let u=a;u<a+i;u++){const g=t[u],M=!s&&this.getParsed(u),m={},v=m[d]=s?o.getPixelForDecimal(.5):o.getPixelForValue(M[d]),b=m[p]=s?r.getBasePixel():r.getPixelForValue(M[p]);m.skip=isNaN(v)||isNaN(b),c&&(m.options=h||this.resolveDataElementOptions(u,g.active?"active":n),s&&(m.options.radius=0)),this.updateElement(g,u,m,n)}}resolveDataElementOptions(t,a){const i=this.getParsed(t);let n=super.resolveDataElementOptions(t,a);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const s=n.radius;return a!=="active"&&(n.radius=0),n.radius+=N(i&&i._custom,s),n}}O(Fi,"id","bubble"),O(Fi,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),O(Fi,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function OR(e,t,a){let i=1,n=1,s=0,o=0;if(t<tt){const r=e,h=r+t,c=Math.cos(r),d=Math.sin(r),p=Math.cos(h),u=Math.sin(h),g=(S,k,_)=>Xa(S,r,h,!0)?1:Math.max(k,k*a,_,_*a),M=(S,k,_)=>Xa(S,r,h,!0)?-1:Math.min(k,k*a,_,_*a),m=g(0,c,p),v=g(ot,d,u),b=M(U,c,p),w=M(U+ot,d,u);i=(m-b)/2,n=(v-w)/2,s=-(m+b)/2,o=-(v+w)/2}return{ratioX:i,ratioY:n,offsetX:s,offsetY:o}}class $e extends Ft{constructor(t,a){super(t,a),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,a){const i=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=i;else{let s=h=>+i[h];if(j(i[t])){const{key:h="value"}=this._parsing;s=c=>+_e(i[c],h)}let o,r;for(o=t,r=t+a;o<r;++o)n._parsed[o]=s(o)}}_getRotation(){return Nt(this.options.rotation-90)}_getCircumference(){return Nt(this.options.circumference)}_getRotationExtents(){let t=tt,a=-tt;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const n=this.chart.getDatasetMeta(i).controller,s=n._getRotation(),o=n._getCircumference();t=Math.min(t,s),a=Math.max(a,s+o)}return{rotation:t,circumference:a-t}}update(t){const a=this.chart,{chartArea:i}=a,n=this._cachedMeta,s=n.data,o=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,r=Math.max((Math.min(i.width,i.height)-o)/2,0),h=Math.min(qO(this.options.cutout,r),1),c=this._getRingWeight(this.index),{circumference:d,rotation:p}=this._getRotationExtents(),{ratioX:u,ratioY:g,offsetX:M,offsetY:m}=OR(p,d,h),v=(i.width-o)/u,b=(i.height-o)/g,w=Math.max(Math.min(v,b)/2,0),S=Oc(this.options.radius,w),k=Math.max(S*h,0),_=(S-k)/this._getVisibleDatasetWeightTotal();this.offsetX=M*S,this.offsetY=m*S,n.total=this.calculateTotal(),this.outerRadius=S-_*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-_*c,0),this.updateElements(s,0,s.length,t)}_circumference(t,a){const i=this.options,n=this._cachedMeta,s=this._getCircumference();return a&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*s/tt)}updateElements(t,a,i,n){const s=n==="reset",o=this.chart,r=o.chartArea,c=o.options.animation,d=(r.left+r.right)/2,p=(r.top+r.bottom)/2,u=s&&c.animateScale,g=u?0:this.innerRadius,M=u?0:this.outerRadius,{sharedOptions:m,includeOptions:v}=this._getSharedOptions(a,n);let b=this._getRotation(),w;for(w=0;w<a;++w)b+=this._circumference(w,s);for(w=a;w<a+i;++w){const S=this._circumference(w,s),k=t[w],_={x:d+this.offsetX,y:p+this.offsetY,startAngle:b,endAngle:b+S,circumference:S,outerRadius:M,innerRadius:g};v&&(_.options=m||this.resolveDataElementOptions(w,k.active?"active":n)),b+=S,this.updateElement(k,w,_,n)}}calculateTotal(){const t=this._cachedMeta,a=t.data;let i=0,n;for(n=0;n<a.length;n++){const s=t._parsed[n];s!==null&&!isNaN(s)&&this.chart.getDataVisibility(n)&&!a[n].hidden&&(i+=Math.abs(s))}return i}calculateCircumference(t){const a=this._cachedMeta.total;return a>0&&!isNaN(t)?tt*(Math.abs(t)/a):0}getLabelAndValue(t){const a=this._cachedMeta,i=this.chart,n=i.data.labels||[],s=ai(a._parsed[t],i.options.locale);return{label:n[t]||"",value:s}}getMaxBorderWidth(t){let a=0;const i=this.chart;let n,s,o,r,h;if(!t){for(n=0,s=i.data.datasets.length;n<s;++n)if(i.isDatasetVisible(n)){o=i.getDatasetMeta(n),t=o.data,r=o.controller;break}}if(!t)return 0;for(n=0,s=t.length;n<s;++n)h=r.resolveDataElementOptions(n),h.borderAlign!=="inner"&&(a=Math.max(a,h.borderWidth||0,h.hoverBorderWidth||0));return a}getMaxOffset(t){let a=0;for(let i=0,n=t.length;i<n;++i){const s=this.resolveDataElementOptions(i);a=Math.max(a,s.offset||0,s.hoverOffset||0)}return a}_getRingWeightOffset(t){let a=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(a+=this._getRingWeight(i));return a}_getRingWeight(t){return Math.max(N(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}O($e,"id","doughnut"),O($e,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),O($e,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),O($e,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const a=t.data;if(a.labels.length&&a.datasets.length){const{labels:{pointStyle:i,color:n}}=t.legend.options;return a.labels.map((s,o)=>{const h=t.getDatasetMeta(0).controller.getStyle(o);return{text:s,fillStyle:h.backgroundColor,strokeStyle:h.borderColor,fontColor:n,lineWidth:h.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,a,i){i.chart.toggleDataVisibility(a.index),i.chart.update()}}}});class $i extends Ft{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const a=this._cachedMeta,{dataset:i,data:n=[],_dataset:s}=a,o=this.chart._animationsDisabled;let{start:r,count:h}=$c(a,n,o);this._drawStart=r,this._drawCount=h,Wc(a)&&(r=0,h=n.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!s._decimated,i.points=n;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},t),this.updateElements(n,r,h,t)}updateElements(t,a,i,n){const s=n==="reset",{iScale:o,vScale:r,_stacked:h,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:p}=this._getSharedOptions(a,n),u=o.axis,g=r.axis,{spanGaps:M,segment:m}=this.options,v=fa(M)?M:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||s||n==="none",w=a+i,S=t.length;let k=a>0&&this.getParsed(a-1);for(let _=0;_<S;++_){const E=t[_],T=b?E:{};if(_<a||_>=w){T.skip=!0;continue}const H=this.getParsed(_),D=W(H[g]),z=T[u]=o.getPixelForValue(H[u],_),R=T[g]=s||D?r.getBasePixel():r.getPixelForValue(h?this.applyStack(r,H,h):H[g],_);T.skip=isNaN(z)||isNaN(R)||D,T.stop=_>0&&Math.abs(H[u]-k[u])>v,m&&(T.parsed=H,T.raw=c.data[_]),p&&(T.options=d||this.resolveDataElementOptions(_,E.active?"active":n)),b||this.updateElement(E,_,T,n),k=H}}getMaxOverflow(){const t=this._cachedMeta,a=t.dataset,i=a.options&&a.options.borderWidth||0,n=t.data||[];if(!n.length)return i;const s=n[0].size(this.resolveDataElementOptions(0)),o=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,s,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}O($i,"id","line"),O($i,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),O($i,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class qa extends Ft{constructor(t,a){super(t,a),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const a=this._cachedMeta,i=this.chart,n=i.data.labels||[],s=ai(a._parsed[t].r,i.options.locale);return{label:n[t]||"",value:s}}parseObjectData(t,a,i,n){return Gc.bind(this)(t,a,i,n)}update(t){const a=this._cachedMeta.data;this._updateRadius(),this.updateElements(a,0,a.length,t)}getMinMax(){const t=this._cachedMeta,a={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,n)=>{const s=this.getParsed(n).r;!isNaN(s)&&this.chart.getDataVisibility(n)&&(s<a.min&&(a.min=s),s>a.max&&(a.max=s))}),a}_updateRadius(){const t=this.chart,a=t.chartArea,i=t.options,n=Math.min(a.right-a.left,a.bottom-a.top),s=Math.max(n/2,0),o=Math.max(i.cutoutPercentage?s/100*i.cutoutPercentage:1,0),r=(s-o)/t.getVisibleDatasetCount();this.outerRadius=s-r*this.index,this.innerRadius=this.outerRadius-r}updateElements(t,a,i,n){const s=n==="reset",o=this.chart,h=o.options.animation,c=this._cachedMeta.rScale,d=c.xCenter,p=c.yCenter,u=c.getIndexAngle(0)-.5*U;let g=u,M;const m=360/this.countVisibleElements();for(M=0;M<a;++M)g+=this._computeAngle(M,n,m);for(M=a;M<a+i;M++){const v=t[M];let b=g,w=g+this._computeAngle(M,n,m),S=o.getDataVisibility(M)?c.getDistanceFromCenterForValue(this.getParsed(M).r):0;g=w,s&&(h.animateScale&&(S=0),h.animateRotate&&(b=w=u));const k={x:d,y:p,innerRadius:0,outerRadius:S,startAngle:b,endAngle:w,options:this.resolveDataElementOptions(M,v.active?"active":n)};this.updateElement(v,M,k,n)}}countVisibleElements(){const t=this._cachedMeta;let a=0;return t.data.forEach((i,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&a++}),a}_computeAngle(t,a,i){return this.chart.getDataVisibility(t)?Nt(this.resolveDataElementOptions(t,a).angle||i):0}}O(qa,"id","polarArea"),O(qa,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),O(qa,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const a=t.data;if(a.labels.length&&a.datasets.length){const{labels:{pointStyle:i,color:n}}=t.legend.options;return a.labels.map((s,o)=>{const h=t.getDatasetMeta(0).controller.getStyle(o);return{text:s,fillStyle:h.backgroundColor,strokeStyle:h.borderColor,fontColor:n,lineWidth:h.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}})}return[]}},onClick(t,a,i){i.chart.toggleDataVisibility(a.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class bs extends $e{}O(bs,"id","pie"),O(bs,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Wi extends Ft{getLabelAndValue(t){const a=this._cachedMeta.vScale,i=this.getParsed(t);return{label:a.getLabels()[t],value:""+a.getLabelForValue(i[a.axis])}}parseObjectData(t,a,i,n){return Gc.bind(this)(t,a,i,n)}update(t){const a=this._cachedMeta,i=a.dataset,n=a.data||[],s=a.iScale.getLabels();if(i.points=n,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const r={_loop:!0,_fullLoop:s.length===n.length,options:o};this.updateElement(i,void 0,r,t)}this.updateElements(n,0,n.length,t)}updateElements(t,a,i,n){const s=this._cachedMeta.rScale,o=n==="reset";for(let r=a;r<a+i;r++){const h=t[r],c=this.resolveDataElementOptions(r,h.active?"active":n),d=s.getPointPositionForValue(r,this.getParsed(r).r),p=o?s.xCenter:d.x,u=o?s.yCenter:d.y,g={x:p,y:u,angle:d.angle,skip:isNaN(p)||isNaN(u),options:c};this.updateElement(h,r,g,n)}}}O(Wi,"id","radar"),O(Wi,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),O(Wi,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class ji extends Ft{getLabelAndValue(t){const a=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:s}=a,o=this.getParsed(t),r=n.getLabelForValue(o.x),h=s.getLabelForValue(o.y);return{label:i[t]||"",value:"("+r+", "+h+")"}}update(t){const a=this._cachedMeta,{data:i=[]}=a,n=this.chart._animationsDisabled;let{start:s,count:o}=$c(a,i,n);if(this._drawStart=s,this._drawCount=o,Wc(a)&&(s=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:r,_dataset:h}=a;r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!h._decimated,r.points=i;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(r,void 0,{animated:!n,options:c},t)}else this.datasetElementType&&(delete a.dataset,this.datasetElementType=!1);this.updateElements(i,s,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,a,i,n){const s=n==="reset",{iScale:o,vScale:r,_stacked:h,_dataset:c}=this._cachedMeta,d=this.resolveDataElementOptions(a,n),p=this.getSharedOptions(d),u=this.includeOptions(n,p),g=o.axis,M=r.axis,{spanGaps:m,segment:v}=this.options,b=fa(m)?m:Number.POSITIVE_INFINITY,w=this.chart._animationsDisabled||s||n==="none";let S=a>0&&this.getParsed(a-1);for(let k=a;k<a+i;++k){const _=t[k],E=this.getParsed(k),T=w?_:{},H=W(E[M]),D=T[g]=o.getPixelForValue(E[g],k),z=T[M]=s||H?r.getBasePixel():r.getPixelForValue(h?this.applyStack(r,E,h):E[M],k);T.skip=isNaN(D)||isNaN(z)||H,T.stop=k>0&&Math.abs(E[g]-S[g])>b,v&&(T.parsed=E,T.raw=c.data[k]),u&&(T.options=p||this.resolveDataElementOptions(k,_.active?"active":n)),w||this.updateElement(_,k,T,n),S=E}this.updateSharedOptions(p,n,d)}getMaxOverflow(){const t=this._cachedMeta,a=t.data||[];if(!this.options.showLine){let r=0;for(let h=a.length-1;h>=0;--h)r=Math.max(r,a[h].size(this.resolveDataElementOptions(h))/2);return r>0&&r}const i=t.dataset,n=i.options&&i.options.borderWidth||0;if(!a.length)return n;const s=a[0].size(this.resolveDataElementOptions(0)),o=a[a.length-1].size(this.resolveDataElementOptions(a.length-1));return Math.max(n,s,o)/2}}O(ji,"id","scatter"),O(ji,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),O(ji,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var DR=Object.freeze({__proto__:null,BarController:Ni,BubbleController:Fi,DoughnutController:$e,LineController:$i,PieController:bs,PolarAreaController:qa,RadarController:Wi,ScatterController:ji});function Ie(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Qs{constructor(t){O(this,"options");this.options=t||{}}static override(t){Object.assign(Qs.prototype,t)}init(){}formats(){return Ie()}parse(){return Ie()}format(){return Ie()}add(){return Ie()}diff(){return Ie()}startOf(){return Ie()}endOf(){return Ie()}}var RR={_date:Qs};function IR(e,t,a,i){const{controller:n,data:s,_sorted:o}=e,r=n._cachedMeta.iScale,h=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(r&&t===r.axis&&t!=="r"&&o&&s.length){const c=r._reversePixels?sD:se;if(i){if(n._sharedOptions){const d=s[0],p=typeof d.getRange=="function"&&d.getRange(t);if(p){const u=c(s,t,a-p),g=c(s,t,a+p);return{lo:u.lo,hi:g.hi}}}}else{const d=c(s,t,a);if(h){const{vScale:p}=n._cachedMeta,{_parsed:u}=e,g=u.slice(0,d.lo+1).reverse().findIndex(m=>!W(m[p.axis]));d.lo-=Math.max(0,g);const M=u.slice(d.hi).findIndex(m=>!W(m[p.axis]));d.hi+=Math.max(0,M)}return d}}return{lo:0,hi:s.length-1}}function xn(e,t,a,i,n){const s=e.getSortedVisibleDatasetMetas(),o=a[t];for(let r=0,h=s.length;r<h;++r){const{index:c,data:d}=s[r],{lo:p,hi:u}=IR(s[r],t,o,n);for(let g=p;g<=u;++g){const M=d[g];M.skip||i(M,c,g)}}}function zR(e){const t=e.indexOf("x")!==-1,a=e.indexOf("y")!==-1;return function(i,n){const s=t?Math.abs(i.x-n.x):0,o=a?Math.abs(i.y-n.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function ns(e,t,a,i,n){const s=[];return!n&&!e.isPointInArea(t)||xn(e,a,t,function(r,h,c){!n&&!oe(r,e.chartArea,0)||r.inRange(t.x,t.y,i)&&s.push({element:r,datasetIndex:h,index:c})},!0),s}function BR(e,t,a,i){let n=[];function s(o,r,h){const{startAngle:c,endAngle:d}=o.getProps(["startAngle","endAngle"],i),{angle:p}=Ic(o,{x:t.x,y:t.y});Xa(p,c,d)&&n.push({element:o,datasetIndex:r,index:h})}return xn(e,a,t,s),n}function NR(e,t,a,i,n,s){let o=[];const r=zR(a);let h=Number.POSITIVE_INFINITY;function c(d,p,u){const g=d.inRange(t.x,t.y,n);if(i&&!g)return;const M=d.getCenterPoint(n);if(!(!!s||e.isPointInArea(M))&&!g)return;const v=r(t,M);v<h?(o=[{element:d,datasetIndex:p,index:u}],h=v):v===h&&o.push({element:d,datasetIndex:p,index:u})}return xn(e,a,t,c),o}function ss(e,t,a,i,n,s){return!s&&!e.isPointInArea(t)?[]:a==="r"&&!i?BR(e,t,a,n):NR(e,t,a,i,n,s)}function _0(e,t,a,i,n){const s=[],o=a==="x"?"inXRange":"inYRange";let r=!1;return xn(e,a,t,(h,c,d)=>{h[o]&&h[o](t[a],n)&&(s.push({element:h,datasetIndex:c,index:d}),r=r||h.inRange(t.x,t.y,n))}),i&&!r?[]:s}var FR={modes:{index(e,t,a,i){const n=Ne(t,e),s=a.axis||"x",o=a.includeInvisible||!1,r=a.intersect?ns(e,n,s,i,o):ss(e,n,s,!1,i,o),h=[];return r.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const d=r[0].index,p=c.data[d];p&&!p.skip&&h.push({element:p,datasetIndex:c.index,index:d})}),h):[]},dataset(e,t,a,i){const n=Ne(t,e),s=a.axis||"xy",o=a.includeInvisible||!1;let r=a.intersect?ns(e,n,s,i,o):ss(e,n,s,!1,i,o);if(r.length>0){const h=r[0].datasetIndex,c=e.getDatasetMeta(h).data;r=[];for(let d=0;d<c.length;++d)r.push({element:c[d],datasetIndex:h,index:d})}return r},point(e,t,a,i){const n=Ne(t,e),s=a.axis||"xy",o=a.includeInvisible||!1;return ns(e,n,s,i,o)},nearest(e,t,a,i){const n=Ne(t,e),s=a.axis||"xy",o=a.includeInvisible||!1;return ss(e,n,s,a.intersect,i,o)},x(e,t,a,i){const n=Ne(t,e);return _0(e,n,"x",a.intersect,i)},y(e,t,a,i){const n=Ne(t,e);return _0(e,n,"y",a.intersect,i)}}};const hl=["left","top","right","bottom"];function Va(e,t){return e.filter(a=>a.pos===t)}function A0(e,t){return e.filter(a=>hl.indexOf(a.pos)===-1&&a.box.axis===t)}function Pa(e,t){return e.sort((a,i)=>{const n=t?i:a,s=t?a:i;return n.weight===s.weight?n.index-s.index:n.weight-s.weight})}function $R(e){const t=[];let a,i,n,s,o,r;for(a=0,i=(e||[]).length;a<i;++a)n=e[a],{position:s,options:{stack:o,stackWeight:r=1}}=n,t.push({index:a,box:n,pos:s,horizontal:n.isHorizontal(),weight:n.weight,stack:o&&s+o,stackWeight:r});return t}function WR(e){const t={};for(const a of e){const{stack:i,pos:n,stackWeight:s}=a;if(!i||!hl.includes(n))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return t}function jR(e,t){const a=WR(e),{vBoxMaxWidth:i,hBoxMaxHeight:n}=t;let s,o,r;for(s=0,o=e.length;s<o;++s){r=e[s];const{fullSize:h}=r.box,c=a[r.stack],d=c&&r.stackWeight/c.weight;r.horizontal?(r.width=d?d*i:h&&t.availableWidth,r.height=n):(r.width=i,r.height=d?d*n:h&&t.availableHeight)}return a}function UR(e){const t=$R(e),a=Pa(t.filter(c=>c.box.fullSize),!0),i=Pa(Va(t,"left"),!0),n=Pa(Va(t,"right")),s=Pa(Va(t,"top"),!0),o=Pa(Va(t,"bottom")),r=A0(t,"x"),h=A0(t,"y");return{fullSize:a,leftAndTop:i.concat(s),rightAndBottom:n.concat(h).concat(o).concat(r),chartArea:Va(t,"chartArea"),vertical:i.concat(n).concat(h),horizontal:s.concat(o).concat(r)}}function C0(e,t,a,i){return Math.max(e[a],t[a])+Math.max(e[i],t[i])}function cl(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function qR(e,t,a,i){const{pos:n,box:s}=a,o=e.maxPadding;if(!j(n)){a.size&&(e[n]-=a.size);const p=i[a.stack]||{size:0,count:1};p.size=Math.max(p.size,a.horizontal?s.height:s.width),a.size=p.size/p.count,e[n]+=a.size}s.getPadding&&cl(o,s.getPadding());const r=Math.max(0,t.outerWidth-C0(o,e,"left","right")),h=Math.max(0,t.outerHeight-C0(o,e,"top","bottom")),c=r!==e.w,d=h!==e.h;return e.w=r,e.h=h,a.horizontal?{same:c,other:d}:{same:d,other:c}}function ZR(e){const t=e.maxPadding;function a(i){const n=Math.max(t[i]-e[i],0);return e[i]+=n,n}e.y+=a("top"),e.x+=a("left"),a("right"),a("bottom")}function YR(e,t){const a=t.maxPadding;function i(n){const s={left:0,top:0,right:0,bottom:0};return n.forEach(o=>{s[o]=Math.max(t[o],a[o])}),s}return i(e?["left","right"]:["top","bottom"])}function za(e,t,a,i){const n=[];let s,o,r,h,c,d;for(s=0,o=e.length,c=0;s<o;++s){r=e[s],h=r.box,h.update(r.width||t.w,r.height||t.h,YR(r.horizontal,t));const{same:p,other:u}=qR(t,a,r,i);c|=p&&n.length,d=d||u,h.fullSize||n.push(r)}return c&&za(n,t,a,i)||d}function Ti(e,t,a,i,n){e.top=a,e.left=t,e.right=t+i,e.bottom=a+n,e.width=i,e.height=n}function E0(e,t,a,i){const n=a.padding;let{x:s,y:o}=t;for(const r of e){const h=r.box,c=i[r.stack]||{placed:0,weight:1},d=r.stackWeight/c.weight||1;if(r.horizontal){const p=t.w*d,u=c.size||h.height;Ka(c.start)&&(o=c.start),h.fullSize?Ti(h,n.left,o,a.outerWidth-n.right-n.left,u):Ti(h,t.left+c.placed,o,p,u),c.start=o,c.placed+=p,o=h.bottom}else{const p=t.h*d,u=c.size||h.width;Ka(c.start)&&(s=c.start),h.fullSize?Ti(h,s,n.top,u,a.outerHeight-n.bottom-n.top):Ti(h,s,t.top+c.placed,u,p),c.start=s,c.placed+=p,s=h.right}}t.x=s,t.y=o}var gt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(a){t.draw(a)}}]},e.boxes.push(t)},removeBox(e,t){const a=e.boxes?e.boxes.indexOf(t):-1;a!==-1&&e.boxes.splice(a,1)},configure(e,t,a){t.fullSize=a.fullSize,t.position=a.position,t.weight=a.weight},update(e,t,a,i){if(!e)return;const n=mt(e.options.layout.padding),s=Math.max(t-n.width,0),o=Math.max(a-n.height,0),r=UR(e.boxes),h=r.vertical,c=r.horizontal;K(e.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const d=h.reduce((m,v)=>v.box.options&&v.box.options.display===!1?m:m+1,0)||1,p=Object.freeze({outerWidth:t,outerHeight:a,padding:n,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/d,hBoxMaxHeight:o/2}),u=Object.assign({},n);cl(u,mt(i));const g=Object.assign({maxPadding:u,w:s,h:o,x:n.left,y:n.top},n),M=jR(h.concat(c),p);za(r.fullSize,g,p,M),za(h,g,p,M),za(c,g,p,M)&&za(h,g,p,M),ZR(g),E0(r.leftAndTop,g,p,M),g.x+=g.w,g.y+=g.h,E0(r.rightAndBottom,g,p,M),e.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},K(r.chartArea,m=>{const v=m.box;Object.assign(v,e.chartArea),v.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}};class ll{acquireContext(t,a){}releaseContext(t){return!1}addEventListener(t,a,i){}removeEventListener(t,a,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,a,i,n){return a=Math.max(0,a||t.width),i=i||t.height,{width:a,height:Math.max(0,n?Math.floor(a/n):i)}}isAttached(t){return!0}updateConfig(t){}}class KR extends ll{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ui="$chartjs",XR={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},S0=e=>e===null||e==="";function GR(e,t){const a=e.style,i=e.getAttribute("height"),n=e.getAttribute("width");if(e[Ui]={initial:{height:i,width:n,style:{display:a.display,height:a.height,width:a.width}}},a.display=a.display||"block",a.boxSizing=a.boxSizing||"border-box",S0(n)){const s=l0(e,"width");s!==void 0&&(e.width=s)}if(S0(i))if(e.style.height==="")e.height=e.width/(t||2);else{const s=l0(e,"height");s!==void 0&&(e.height=s)}return e}const dl=QD?{passive:!0}:!1;function QR(e,t,a){e&&e.addEventListener(t,a,dl)}function JR(e,t,a){e&&e.canvas&&e.canvas.removeEventListener(t,a,dl)}function tI(e,t){const a=XR[e.type]||e.type,{x:i,y:n}=Ne(e,t);return{type:a,chart:t,native:e,x:i!==void 0?i:null,y:n!==void 0?n:null}}function nn(e,t){for(const a of e)if(a===t||a.contains(t))return!0}function eI(e,t,a){const i=e.canvas,n=new MutationObserver(s=>{let o=!1;for(const r of s)o=o||nn(r.addedNodes,i),o=o&&!nn(r.removedNodes,i);o&&a()});return n.observe(document,{childList:!0,subtree:!0}),n}function aI(e,t,a){const i=e.canvas,n=new MutationObserver(s=>{let o=!1;for(const r of s)o=o||nn(r.removedNodes,i),o=o&&!nn(r.addedNodes,i);o&&a()});return n.observe(document,{childList:!0,subtree:!0}),n}const Qa=new Map;let k0=0;function pl(){const e=window.devicePixelRatio;e!==k0&&(k0=e,Qa.forEach((t,a)=>{a.currentDevicePixelRatio!==e&&t()}))}function iI(e,t){Qa.size||window.addEventListener("resize",pl),Qa.set(e,t)}function nI(e){Qa.delete(e),Qa.size||window.removeEventListener("resize",pl)}function sI(e,t,a){const i=e.canvas,n=i&&Gs(i);if(!n)return;const s=Fc((r,h)=>{const c=n.clientWidth;a(r,h),c<n.clientWidth&&a()},window),o=new ResizeObserver(r=>{const h=r[0],c=h.contentRect.width,d=h.contentRect.height;c===0&&d===0||s(c,d)});return o.observe(n),iI(e,s),o}function os(e,t,a){a&&a.disconnect(),t==="resize"&&nI(e)}function oI(e,t,a){const i=e.canvas,n=Fc(s=>{e.ctx!==null&&a(tI(s,e))},e);return QR(i,t,n),n}class rI extends ll{acquireContext(t,a){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(GR(t,a),i):null}releaseContext(t){const a=t.canvas;if(!a[Ui])return!1;const i=a[Ui].initial;["height","width"].forEach(s=>{const o=i[s];W(o)?a.removeAttribute(s):a.setAttribute(s,o)});const n=i.style||{};return Object.keys(n).forEach(s=>{a.style[s]=n[s]}),a.width=a.width,delete a[Ui],!0}addEventListener(t,a,i){this.removeEventListener(t,a);const n=t.$proxies||(t.$proxies={}),o={attach:eI,detach:aI,resize:sI}[a]||oI;n[a]=o(t,a,i)}removeEventListener(t,a){const i=t.$proxies||(t.$proxies={}),n=i[a];if(!n)return;({attach:os,detach:os,resize:os}[a]||JR)(t,a,n),i[a]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,a,i,n){return GD(t,a,i,n)}isAttached(t){const a=t&&Gs(t);return!!(a&&a.isConnected)}}function hI(e){return!Xs()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?KR:rI}var zi;let he=(zi=class{constructor(){O(this,"x");O(this,"y");O(this,"active",!1);O(this,"options");O(this,"$animations")}tooltipPosition(t){const{x:a,y:i}=this.getProps(["x","y"],t);return{x:a,y:i}}hasValue(){return fa(this.x)&&fa(this.y)}getProps(t,a){const i=this.$animations;if(!a||!i)return this;const n={};return t.forEach(s=>{n[s]=i[s]&&i[s].active()?i[s]._to:this[s]}),n}},O(zi,"defaults",{}),O(zi,"defaultRoutes"),zi);function cI(e,t){const a=e.options.ticks,i=lI(e),n=Math.min(a.maxTicksLimit||i,i),s=a.major.enabled?pI(t):[],o=s.length,r=s[0],h=s[o-1],c=[];if(o>n)return uI(t,c,s,o/n),c;const d=dI(s,t,n);if(o>0){let p,u;const g=o>1?Math.round((h-r)/(o-1)):null;for(Hi(t,c,d,W(g)?0:r-g,r),p=0,u=o-1;p<u;p++)Hi(t,c,d,s[p],s[p+1]);return Hi(t,c,d,h,W(g)?t.length:h+g),c}return Hi(t,c,d),c}function lI(e){const t=e.options.offset,a=e._tickSize(),i=e._length/a+(t?0:1),n=e._maxLength/a;return Math.floor(Math.min(i,n))}function dI(e,t,a){const i=fI(e),n=t.length/a;if(!i)return Math.max(n,1);const s=tD(i);for(let o=0,r=s.length-1;o<r;o++){const h=s[o];if(h>n)return h}return Math.max(n,1)}function pI(e){const t=[];let a,i;for(a=0,i=e.length;a<i;a++)e[a].major&&t.push(a);return t}function uI(e,t,a,i){let n=0,s=a[0],o;for(i=Math.ceil(i),o=0;o<e.length;o++)o===s&&(t.push(e[o]),n++,s=a[n*i])}function Hi(e,t,a,i,n){const s=N(i,0),o=Math.min(N(n,e.length),e.length);let r=0,h,c,d;for(a=Math.ceil(a),n&&(h=n-i,a=h/Math.floor(h/a)),d=s;d<0;)r++,d=Math.round(s+r*a);for(c=Math.max(s,0);c<o;c++)c===d&&(t.push(e[c]),r++,d=Math.round(s+r*a))}function fI(e){const t=e.length;let a,i;if(t<2)return!1;for(i=e[0],a=1;a<t;++a)if(e[a]-e[a-1]!==i)return!1;return i}const gI=e=>e==="left"?"right":e==="right"?"left":e,L0=(e,t,a)=>t==="top"||t==="left"?e[t]+a:e[t]-a,T0=(e,t)=>Math.min(t||e,e);function H0(e,t){const a=[],i=e.length/t,n=e.length;let s=0;for(;s<n;s+=i)a.push(e[Math.floor(s)]);return a}function mI(e,t,a){const i=e.ticks.length,n=Math.min(t,i-1),s=e._startPixel,o=e._endPixel,r=1e-6;let h=e.getPixelForTick(n),c;if(!(a&&(i===1?c=Math.max(h-s,o-h):t===0?c=(e.getPixelForTick(1)-h)/2:c=(h-e.getPixelForTick(n-1))/2,h+=n<t?c:-c,h<s-r||h>o+r)))return h}function MI(e,t){K(e,a=>{const i=a.gc,n=i.length/2;let s;if(n>t){for(s=0;s<n;++s)delete a.data[i[s]];i.splice(0,n)}})}function Oa(e){return e.drawTicks?e.tickLength:0}function V0(e,t){if(!e.display)return 0;const a=ct(e.font,t),i=mt(e.padding);return(et(e.text)?e.text.length:1)*a.lineHeight+i.height}function vI(e,t){return Ce(e,{scale:t,type:"scale"})}function yI(e,t,a){return Ce(e,{tick:a,index:t,type:"tick"})}function xI(e,t,a){let i=js(e);return(a&&t!=="right"||!a&&t==="right")&&(i=gI(i)),i}function bI(e,t,a,i){const{top:n,left:s,bottom:o,right:r,chart:h}=e,{chartArea:c,scales:d}=h;let p=0,u,g,M;const m=o-n,v=r-s;if(e.isHorizontal()){if(g=ut(i,s,r),j(a)){const b=Object.keys(a)[0],w=a[b];M=d[b].getPixelForValue(w)+m-t}else a==="center"?M=(c.bottom+c.top)/2+m-t:M=L0(e,a,t);u=r-s}else{if(j(a)){const b=Object.keys(a)[0],w=a[b];g=d[b].getPixelForValue(w)-v+t}else a==="center"?g=(c.left+c.right)/2-v+t:g=L0(e,a,t);M=ut(i,o,n),p=a==="left"?-ot:ot}return{titleX:g,titleY:M,maxWidth:u,rotation:p}}class Ke extends he{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,a){return t}getUserBounds(){let{_userMin:t,_userMax:a,_suggestedMin:i,_suggestedMax:n}=this;return t=St(t,Number.POSITIVE_INFINITY),a=St(a,Number.NEGATIVE_INFINITY),i=St(i,Number.POSITIVE_INFINITY),n=St(n,Number.NEGATIVE_INFINITY),{min:St(t,i),max:St(a,n),minDefined:it(t),maxDefined:it(a)}}getMinMax(t){let{min:a,max:i,minDefined:n,maxDefined:s}=this.getUserBounds(),o;if(n&&s)return{min:a,max:i};const r=this.getMatchingVisibleMetas();for(let h=0,c=r.length;h<c;++h)o=r[h].controller.getMinMax(this,t),n||(a=Math.min(a,o.min)),s||(i=Math.max(i,o.max));return a=s&&a>i?i:a,i=n&&a>i?a:i,{min:St(a,St(i,a)),max:St(i,St(a,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){G(this.options.beforeUpdate,[this])}update(t,a,i){const{beginAtZero:n,grace:s,ticks:o}=this.options,r=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=a,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=LD(this,s,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const h=r<this.ticks.length;this._convertTicksToLabels(h?H0(this.ticks,r):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=cI(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),h&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,a,i;this.isHorizontal()?(a=this.left,i=this.right):(a=this.top,i=this.bottom,t=!t),this._startPixel=a,this._endPixel=i,this._reversePixels=t,this._length=i-a,this._alignToPixels=this.options.alignToPixels}afterUpdate(){G(this.options.afterUpdate,[this])}beforeSetDimensions(){G(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){G(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),G(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){G(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const a=this.options.ticks;let i,n,s;for(i=0,n=t.length;i<n;i++)s=t[i],s.label=G(a.callback,[s.value,i,t],this)}afterTickToLabelConversion(){G(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){G(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,a=t.ticks,i=T0(this.ticks.length,t.ticks.maxTicksLimit),n=a.minRotation||0,s=a.maxRotation;let o=n,r,h,c;if(!this._isVisible()||!a.display||n>=s||i<=1||!this.isHorizontal()){this.labelRotation=n;return}const d=this._getLabelSizes(),p=d.widest.width,u=d.highest.height,g=dt(this.chart.width-p,0,this.maxWidth);r=t.offset?this.maxWidth/i:g/(i-1),p+6>r&&(r=g/(i-(t.offset?.5:1)),h=this.maxHeight-Oa(t.grid)-a.padding-V0(t.title,this.chart.options.font),c=Math.sqrt(p*p+u*u),o=$s(Math.min(Math.asin(dt((d.highest.height+6)/r,-1,1)),Math.asin(dt(h/c,-1,1))-Math.asin(dt(u/c,-1,1)))),o=Math.max(n,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){G(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){G(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:a,options:{ticks:i,title:n,grid:s}}=this,o=this._isVisible(),r=this.isHorizontal();if(o){const h=V0(n,a.options.font);if(r?(t.width=this.maxWidth,t.height=Oa(s)+h):(t.height=this.maxHeight,t.width=Oa(s)+h),i.display&&this.ticks.length){const{first:c,last:d,widest:p,highest:u}=this._getLabelSizes(),g=i.padding*2,M=Nt(this.labelRotation),m=Math.cos(M),v=Math.sin(M);if(r){const b=i.mirror?0:v*p.width+m*u.height;t.height=Math.min(this.maxHeight,t.height+b+g)}else{const b=i.mirror?0:m*p.width+v*u.height;t.width=Math.min(this.maxWidth,t.width+b+g)}this._calculatePadding(c,d,v,m)}}this._handleMargins(),r?(this.width=this._length=a.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=a.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,a,i,n){const{ticks:{align:s,padding:o},position:r}=this.options,h=this.labelRotation!==0,c=r!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,p=this.right-this.getPixelForTick(this.ticks.length-1);let u=0,g=0;h?c?(u=n*t.width,g=i*a.height):(u=i*t.height,g=n*a.width):s==="start"?g=a.width:s==="end"?u=t.width:s!=="inner"&&(u=t.width/2,g=a.width/2),this.paddingLeft=Math.max((u-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((g-p+o)*this.width/(this.width-p),0)}else{let d=a.height/2,p=t.height/2;s==="start"?(d=0,p=t.height):s==="end"&&(d=a.height,p=0),this.paddingTop=d+o,this.paddingBottom=p+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){G(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:a}=this.options;return a==="top"||a==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let a,i;for(a=0,i=t.length;a<i;a++)W(t[a].label)&&(t.splice(a,1),i--,a--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const a=this.options.ticks.sampleSize;let i=this.ticks;a<i.length&&(i=H0(i,a)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,a,i){const{ctx:n,_longestTextCache:s}=this,o=[],r=[],h=Math.floor(a/T0(a,i));let c=0,d=0,p,u,g,M,m,v,b,w,S,k,_;for(p=0;p<a;p+=h){if(M=t[p].label,m=this._resolveTickFontOptions(p),n.font=v=m.string,b=s[v]=s[v]||{data:{},gc:[]},w=m.lineHeight,S=k=0,!W(M)&&!et(M))S=en(n,b.data,b.gc,S,M),k=w;else if(et(M))for(u=0,g=M.length;u<g;++u)_=M[u],!W(_)&&!et(_)&&(S=en(n,b.data,b.gc,S,_),k+=w);o.push(S),r.push(k),c=Math.max(S,c),d=Math.max(k,d)}MI(s,a);const E=o.indexOf(c),T=r.indexOf(d),H=D=>({width:o[D]||0,height:r[D]||0});return{first:H(0),last:H(a-1),widest:H(E),highest:H(T),widths:o,heights:r}}getLabelForValue(t){return t}getPixelForValue(t,a){return NaN}getValueForPixel(t){}getPixelForTick(t){const a=this.ticks;return t<0||t>a.length-1?null:this.getPixelForValue(a[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const a=this._startPixel+t*this._length;return nD(this._alignToPixels?Re(this.chart,a,0):a)}getDecimalForPixel(t){const a=(t-this._startPixel)/this._length;return this._reversePixels?1-a:a}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:a}=this;return t<0&&a<0?a:t>0&&a>0?t:0}getContext(t){const a=this.ticks||[];if(t>=0&&t<a.length){const i=a[t];return i.$context||(i.$context=yI(this.getContext(),t,i))}return this.$context||(this.$context=vI(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,a=Nt(this.labelRotation),i=Math.abs(Math.cos(a)),n=Math.abs(Math.sin(a)),s=this._getLabelSizes(),o=t.autoSkipPadding||0,r=s?s.widest.width+o:0,h=s?s.highest.height+o:0;return this.isHorizontal()?h*i>r*n?r/i:h/n:h*n<r*i?h/i:r/n}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const a=this.axis,i=this.chart,n=this.options,{grid:s,position:o,border:r}=n,h=s.offset,c=this.isHorizontal(),p=this.ticks.length+(h?1:0),u=Oa(s),g=[],M=r.setContext(this.getContext()),m=M.display?M.width:0,v=m/2,b=function(X){return Re(i,X,m)};let w,S,k,_,E,T,H,D,z,R,$,nt;if(o==="top")w=b(this.bottom),T=this.bottom-u,D=w-v,R=b(t.top)+v,nt=t.bottom;else if(o==="bottom")w=b(this.top),R=t.top,nt=b(t.bottom)-v,T=w+v,D=this.top+u;else if(o==="left")w=b(this.right),E=this.right-u,H=w-v,z=b(t.left)+v,$=t.right;else if(o==="right")w=b(this.left),z=t.left,$=b(t.right)-v,E=w+v,H=this.left+u;else if(a==="x"){if(o==="center")w=b((t.top+t.bottom)/2+.5);else if(j(o)){const X=Object.keys(o)[0],J=o[X];w=b(this.chart.scales[X].getPixelForValue(J))}R=t.top,nt=t.bottom,T=w+v,D=T+u}else if(a==="y"){if(o==="center")w=b((t.left+t.right)/2);else if(j(o)){const X=Object.keys(o)[0],J=o[X];w=b(this.chart.scales[X].getPixelForValue(J))}E=w-v,H=E-u,z=t.left,$=t.right}const vt=N(n.ticks.maxTicksLimit,p),Y=Math.max(1,Math.ceil(p/vt));for(S=0;S<p;S+=Y){const X=this.getContext(S),J=s.setContext(X),bt=r.setContext(X),ht=J.lineWidth,ce=J.color,Ee=bt.dash||[],Kt=bt.dashOffset,Se=J.tickWidth,Xt=J.tickColor,le=J.tickBorderDash||[],$t=J.tickBorderDashOffset;k=mI(this,S,h),k!==void 0&&(_=Re(i,k,ht),c?E=H=z=$=_:T=D=R=nt=_,g.push({tx1:E,ty1:T,tx2:H,ty2:D,x1:z,y1:R,x2:$,y2:nt,width:ht,color:ce,borderDash:Ee,borderDashOffset:Kt,tickWidth:Se,tickColor:Xt,tickBorderDash:le,tickBorderDashOffset:$t}))}return this._ticksLength=p,this._borderValue=w,g}_computeLabelItems(t){const a=this.axis,i=this.options,{position:n,ticks:s}=i,o=this.isHorizontal(),r=this.ticks,{align:h,crossAlign:c,padding:d,mirror:p}=s,u=Oa(i.grid),g=u+d,M=p?-d:g,m=-Nt(this.labelRotation),v=[];let b,w,S,k,_,E,T,H,D,z,R,$,nt="middle";if(n==="top")E=this.bottom-M,T=this._getXAxisLabelAlignment();else if(n==="bottom")E=this.top+M,T=this._getXAxisLabelAlignment();else if(n==="left"){const Y=this._getYAxisLabelAlignment(u);T=Y.textAlign,_=Y.x}else if(n==="right"){const Y=this._getYAxisLabelAlignment(u);T=Y.textAlign,_=Y.x}else if(a==="x"){if(n==="center")E=(t.top+t.bottom)/2+g;else if(j(n)){const Y=Object.keys(n)[0],X=n[Y];E=this.chart.scales[Y].getPixelForValue(X)+g}T=this._getXAxisLabelAlignment()}else if(a==="y"){if(n==="center")_=(t.left+t.right)/2-g;else if(j(n)){const Y=Object.keys(n)[0],X=n[Y];_=this.chart.scales[Y].getPixelForValue(X)}T=this._getYAxisLabelAlignment(u).textAlign}a==="y"&&(h==="start"?nt="top":h==="end"&&(nt="bottom"));const vt=this._getLabelSizes();for(b=0,w=r.length;b<w;++b){S=r[b],k=S.label;const Y=s.setContext(this.getContext(b));H=this.getPixelForTick(b)+s.labelOffset,D=this._resolveTickFontOptions(b),z=D.lineHeight,R=et(k)?k.length:1;const X=R/2,J=Y.color,bt=Y.textStrokeColor,ht=Y.textStrokeWidth;let ce=T;o?(_=H,T==="inner"&&(b===w-1?ce=this.options.reverse?"left":"right":b===0?ce=this.options.reverse?"right":"left":ce="center"),n==="top"?c==="near"||m!==0?$=-R*z+z/2:c==="center"?$=-vt.highest.height/2-X*z+z:$=-vt.highest.height+z/2:c==="near"||m!==0?$=z/2:c==="center"?$=vt.highest.height/2-X*z:$=vt.highest.height-R*z,p&&($*=-1),m!==0&&!Y.showLabelBackdrop&&(_+=z/2*Math.sin(m))):(E=H,$=(1-R)*z/2);let Ee;if(Y.showLabelBackdrop){const Kt=mt(Y.backdropPadding),Se=vt.heights[b],Xt=vt.widths[b];let le=$-Kt.top,$t=0-Kt.left;switch(nt){case"middle":le-=Se/2;break;case"bottom":le-=Se;break}switch(T){case"center":$t-=Xt/2;break;case"right":$t-=Xt;break;case"inner":b===w-1?$t-=Xt:b>0&&($t-=Xt/2);break}Ee={left:$t,top:le,width:Xt+Kt.width,height:Se+Kt.height,color:Y.backdropColor}}v.push({label:k,font:D,textOffset:$,options:{rotation:m,color:J,strokeColor:bt,strokeWidth:ht,textAlign:ce,textBaseline:nt,translation:[_,E],backdrop:Ee}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:a}=this.options;if(-Nt(this.labelRotation))return t==="top"?"left":"right";let n="center";return a.align==="start"?n="left":a.align==="end"?n="right":a.align==="inner"&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:a,ticks:{crossAlign:i,mirror:n,padding:s}}=this.options,o=this._getLabelSizes(),r=t+s,h=o.widest.width;let c,d;return a==="left"?n?(d=this.right+s,i==="near"?c="left":i==="center"?(c="center",d+=h/2):(c="right",d+=h)):(d=this.right-r,i==="near"?c="right":i==="center"?(c="center",d-=h/2):(c="left",d=this.left)):a==="right"?n?(d=this.left+s,i==="near"?c="right":i==="center"?(c="center",d-=h/2):(c="left",d-=h)):(d=this.left+r,i==="near"?c="left":i==="center"?(c="center",d+=h/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,a=this.options.position;if(a==="left"||a==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(a==="top"||a==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:a},left:i,top:n,width:s,height:o}=this;a&&(t.save(),t.fillStyle=a,t.fillRect(i,n,s,o),t.restore())}getLineWidthForValue(t){const a=this.options.grid;if(!this._isVisible()||!a.display)return 0;const n=this.ticks.findIndex(s=>s.value===t);return n>=0?a.setContext(this.getContext(n)).lineWidth:0}drawGrid(t){const a=this.options.grid,i=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let s,o;const r=(h,c,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(h.x,h.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(a.display)for(s=0,o=n.length;s<o;++s){const h=n[s];a.drawOnChartArea&&r({x:h.x1,y:h.y1},{x:h.x2,y:h.y2},h),a.drawTicks&&r({x:h.tx1,y:h.ty1},{x:h.tx2,y:h.ty2},{color:h.tickColor,width:h.tickWidth,borderDash:h.tickBorderDash,borderDashOffset:h.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:a,options:{border:i,grid:n}}=this,s=i.setContext(this.getContext()),o=i.display?s.width:0;if(!o)return;const r=n.setContext(this.getContext(0)).lineWidth,h=this._borderValue;let c,d,p,u;this.isHorizontal()?(c=Re(t,this.left,o)-o/2,d=Re(t,this.right,r)+r/2,p=u=h):(p=Re(t,this.top,o)-o/2,u=Re(t,this.bottom,r)+r/2,c=d=h),a.save(),a.lineWidth=s.width,a.strokeStyle=s.color,a.beginPath(),a.moveTo(c,p),a.lineTo(d,u),a.stroke(),a.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,n=this._computeLabelArea();n&&Mn(i,n);const s=this.getLabelItems(t);for(const o of s){const r=o.options,h=o.font,c=o.label,d=o.textOffset;Ze(i,c,0,d,h,r)}n&&vn(i)}drawTitle(){const{ctx:t,options:{position:a,title:i,reverse:n}}=this;if(!i.display)return;const s=ct(i.font),o=mt(i.padding),r=i.align;let h=s.lineHeight/2;a==="bottom"||a==="center"||j(a)?(h+=o.bottom,et(i.text)&&(h+=s.lineHeight*(i.text.length-1))):h+=o.top;const{titleX:c,titleY:d,maxWidth:p,rotation:u}=bI(this,h,a,r);Ze(t,i.text,0,0,s,{color:i.color,maxWidth:p,rotation:u,textAlign:xI(r,a,n),textBaseline:"middle",translation:[c,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,a=t.ticks&&t.ticks.z||0,i=N(t.grid&&t.grid.z,-1),n=N(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ke.prototype.draw?[{z:a,draw:s=>{this.draw(s)}}]:[{z:i,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:a,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(t){const a=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",n=[];let s,o;for(s=0,o=a.length;s<o;++s){const r=a[s];r[i]===this.id&&(!t||r.type===t)&&n.push(r)}return n}_resolveTickFontOptions(t){const a=this.options.ticks.setContext(this.getContext(t));return ct(a.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Vi{constructor(t,a,i){this.type=t,this.scope=a,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const a=Object.getPrototypeOf(t);let i;AI(a)&&(i=this.register(a));const n=this.items,s=t.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+t);return s in n||(n[s]=t,wI(t,o,i),this.override&&at.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const a=this.items,i=t.id,n=this.scope;i in a&&delete a[i],n&&i in at[n]&&(delete at[n][i],this.override&&delete qe[i])}}function wI(e,t,a){const i=Ya(Object.create(null),[a?at.get(a):{},at.get(t),e.defaults]);at.set(t,i),e.defaultRoutes&&_I(t,e.defaultRoutes),e.descriptors&&at.describe(t,e.descriptors)}function _I(e,t){Object.keys(t).forEach(a=>{const i=a.split("."),n=i.pop(),s=[e].concat(i).join("."),o=t[a].split("."),r=o.pop(),h=o.join(".");at.route(s,n,h,r)})}function AI(e){return"id"in e&&"defaults"in e}class CI{constructor(){this.controllers=new Vi(Ft,"datasets",!0),this.elements=new Vi(he,"elements"),this.plugins=new Vi(Object,"plugins"),this.scales=new Vi(Ke,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,a,i){[...a].forEach(n=>{const s=i||this._getRegistryForType(n);i||s.isForType(n)||s===this.plugins&&n.id?this._exec(t,s,n):K(n,o=>{const r=i||this._getRegistryForType(o);this._exec(t,r,o)})})}_exec(t,a,i){const n=Fs(t);G(i["before"+n],[],i),a[t](i),G(i["after"+n],[],i)}_getRegistryForType(t){for(let a=0;a<this._typedRegistries.length;a++){const i=this._typedRegistries[a];if(i.isForType(t))return i}return this.plugins}_get(t,a,i){const n=a.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return n}}var Ut=new CI;class EI{constructor(){this._init=[]}notify(t,a,i,n){a==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const s=n?this._descriptors(t).filter(n):this._descriptors(t),o=this._notify(s,t,a,i);return a==="afterDestroy"&&(this._notify(s,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,a,i,n){n=n||{};for(const s of t){const o=s.plugin,r=o[i],h=[a,n,s.options];if(G(r,h,o)===!1&&n.cancelable)return!1}return!0}invalidate(){W(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const a=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),a}_createDescriptors(t,a){const i=t&&t.config,n=N(i.options&&i.options.plugins,{}),s=SI(i);return n===!1&&!a?[]:LI(t,s,n,a)}_notifyStateChanges(t){const a=this._oldCache||[],i=this._cache,n=(s,o)=>s.filter(r=>!o.some(h=>r.plugin.id===h.plugin.id));this._notify(n(a,i),t,"stop"),this._notify(n(i,a),t,"start")}}function SI(e){const t={},a=[],i=Object.keys(Ut.plugins.items);for(let s=0;s<i.length;s++)a.push(Ut.getPlugin(i[s]));const n=e.plugins||[];for(let s=0;s<n.length;s++){const o=n[s];a.indexOf(o)===-1&&(a.push(o),t[o.id]=!0)}return{plugins:a,localIds:t}}function kI(e,t){return!t&&e===!1?null:e===!0?{}:e}function LI(e,{plugins:t,localIds:a},i,n){const s=[],o=e.getContext();for(const r of t){const h=r.id,c=kI(i[h],n);c!==null&&s.push({plugin:r,options:TI(e.config,{plugin:r,local:a[h]},c,o)})}return s}function TI(e,{plugin:t,local:a},i,n){const s=e.pluginScopeKeys(t),o=e.getOptionScopes(i,s);return a&&t.defaults&&o.push(t.defaults),e.createResolver(o,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ws(e,t){const a=at.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||a.indexAxis||"x"}function HI(e,t){let a=e;return e==="_index_"?a=t:e==="_value_"&&(a=t==="x"?"y":"x"),a}function VI(e,t){return e===t?"_index_":"_value_"}function P0(e){if(e==="x"||e==="y"||e==="r")return e}function PI(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function _s(e,...t){if(P0(e))return e;for(const a of t){const i=a.axis||PI(a.position)||e.length>1&&P0(e[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function O0(e,t,a){if(a[t+"AxisID"]===e)return{axis:t}}function OI(e,t){if(t.data&&t.data.datasets){const a=t.data.datasets.filter(i=>i.xAxisID===e||i.yAxisID===e);if(a.length)return O0(e,"x",a[0])||O0(e,"y",a[0])}return{}}function DI(e,t){const a=qe[e.type]||{scales:{}},i=t.scales||{},n=ws(e.type,t),s=Object.create(null);return Object.keys(i).forEach(o=>{const r=i[o];if(!j(r))return console.error(`Invalid scale configuration for scale: ${o}`);if(r._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const h=_s(o,r,OI(o,e),at.scales[r.type]),c=VI(h,n),d=a.scales||{};s[o]=$a(Object.create(null),[{axis:h},r,d[h],d[c]])}),e.data.datasets.forEach(o=>{const r=o.type||e.type,h=o.indexAxis||ws(r,t),d=(qe[r]||{}).scales||{};Object.keys(d).forEach(p=>{const u=HI(p,h),g=o[u+"AxisID"]||u;s[g]=s[g]||Object.create(null),$a(s[g],[{axis:u},i[g],d[p]])})}),Object.keys(s).forEach(o=>{const r=s[o];$a(r,[at.scales[r.type],at.scale])}),s}function ul(e){const t=e.options||(e.options={});t.plugins=N(t.plugins,{}),t.scales=DI(e,t)}function fl(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function RI(e){return e=e||{},e.data=fl(e.data),ul(e),e}const D0=new Map,gl=new Set;function Pi(e,t){let a=D0.get(e);return a||(a=t(),D0.set(e,a),gl.add(a)),a}const Da=(e,t,a)=>{const i=_e(t,a);i!==void 0&&e.add(i)};class II{constructor(t){this._config=RI(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=fl(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),ul(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Pi(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,a){return Pi(`${t}.transition.${a}`,()=>[[`datasets.${t}.transitions.${a}`,`transitions.${a}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,a){return Pi(`${t}-${a}`,()=>[[`datasets.${t}.elements.${a}`,`datasets.${t}`,`elements.${a}`,""]])}pluginScopeKeys(t){const a=t.id,i=this.type;return Pi(`${i}-plugin-${a}`,()=>[[`plugins.${a}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,a){const i=this._scopeCache;let n=i.get(t);return(!n||a)&&(n=new Map,i.set(t,n)),n}getOptionScopes(t,a,i){const{options:n,type:s}=this,o=this._cachedScopes(t,i),r=o.get(a);if(r)return r;const h=new Set;a.forEach(d=>{t&&(h.add(t),d.forEach(p=>Da(h,t,p))),d.forEach(p=>Da(h,n,p)),d.forEach(p=>Da(h,qe[s]||{},p)),d.forEach(p=>Da(h,at,p)),d.forEach(p=>Da(h,ys,p))});const c=Array.from(h);return c.length===0&&c.push(Object.create(null)),gl.has(a)&&o.set(a,c),c}chartOptionScopes(){const{options:t,type:a}=this;return[t,qe[a]||{},at.datasets[a]||{},{type:a},at,ys]}resolveNamedOptions(t,a,i,n=[""]){const s={$shared:!0},{resolver:o,subPrefixes:r}=R0(this._resolverCache,t,n);let h=o;if(BI(o,a)){s.$shared=!1,i=Ae(i)?i():i;const c=this.createResolver(t,i,r);h=ga(o,i,c)}for(const c of a)s[c]=h[c];return s}createResolver(t,a,i=[""],n){const{resolver:s}=R0(this._resolverCache,t,i);return j(a)?ga(s,a,void 0,n):s}}function R0(e,t,a){let i=e.get(t);i||(i=new Map,e.set(t,i));const n=a.join();let s=i.get(n);return s||(s={resolver:Zs(t,a),subPrefixes:a.filter(r=>!r.toLowerCase().includes("hover"))},i.set(n,s)),s}const zI=e=>j(e)&&Object.getOwnPropertyNames(e).some(t=>Ae(e[t]));function BI(e,t){const{isScriptable:a,isIndexable:i}=Zc(e);for(const n of t){const s=a(n),o=i(n),r=(o||s)&&e[n];if(s&&(Ae(r)||zI(r))||o&&et(r))return!0}return!1}var NI="4.5.0";const FI=["top","bottom","left","right","chartArea"];function I0(e,t){return e==="top"||e==="bottom"||FI.indexOf(e)===-1&&t==="x"}function z0(e,t){return function(a,i){return a[e]===i[e]?a[t]-i[t]:a[e]-i[e]}}function B0(e){const t=e.chart,a=t.options.animation;t.notifyPlugins("afterRender"),G(a&&a.onComplete,[e],t)}function $I(e){const t=e.chart,a=t.options.animation;G(a&&a.onProgress,[e],t)}function ml(e){return Xs()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const qi={},N0=e=>{const t=ml(e);return Object.values(qi).filter(a=>a.canvas===t).pop()};function WI(e,t,a){const i=Object.keys(e);for(const n of i){const s=+n;if(s>=t){const o=e[n];delete e[n],(a>0||s>t)&&(e[s+a]=o)}}}function jI(e,t,a,i){return!a||e.type==="mouseout"?null:i?t:e}class Bt{static register(...t){Ut.add(...t),F0()}static unregister(...t){Ut.remove(...t),F0()}constructor(t,a){const i=this.config=new II(a),n=ml(t),s=N0(n);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||hI(n)),this.platform.updateConfig(i);const r=this.platform.acquireContext(n,o.aspectRatio),h=r&&r.canvas,c=h&&h.height,d=h&&h.width;if(this.id=UO(),this.ctx=r,this.canvas=h,this.width=d,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new EI,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=hD(p=>this.update(p),o.resizeDelay||0),this._dataChanges=[],qi[this.id]=this,!r||!h){console.error("Failed to create chart: can't acquire context from the given item");return}ee.listen(this,"complete",B0),ee.listen(this,"progress",$I),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:a},width:i,height:n,_aspectRatio:s}=this;return W(t)?a&&s?s:n?i/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Ut}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():c0(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return o0(this.canvas,this.ctx),this}stop(){return ee.stop(this),this}resize(t,a){ee.running(this)?this._resizeBeforeDraw={width:t,height:a}:this._resize(t,a)}_resize(t,a){const i=this.options,n=this.canvas,s=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(n,t,a,s),r=i.devicePixelRatio||this.platform.getDevicePixelRatio(),h=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,c0(this,r,!0)&&(this.notifyPlugins("resize",{size:o}),G(i.onResize,[this,o],this),this.attached&&this._doResize(h)&&this.render())}ensureScalesHaveIDs(){const a=this.options.scales||{};K(a,(i,n)=>{i.id=n})}buildOrUpdateScales(){const t=this.options,a=t.scales,i=this.scales,n=Object.keys(i).reduce((o,r)=>(o[r]=!1,o),{});let s=[];a&&(s=s.concat(Object.keys(a).map(o=>{const r=a[o],h=_s(o,r),c=h==="r",d=h==="x";return{options:r,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),K(s,o=>{const r=o.options,h=r.id,c=_s(h,r),d=N(r.type,o.dtype);(r.position===void 0||I0(r.position,c)!==I0(o.dposition))&&(r.position=o.dposition),n[h]=!0;let p=null;if(h in i&&i[h].type===d)p=i[h];else{const u=Ut.getScale(d);p=new u({id:h,type:d,ctx:this.ctx,chart:this}),i[p.id]=p}p.init(r,t)}),K(n,(o,r)=>{o||delete i[r]}),K(i,o=>{gt.configure(this,o,o.options),gt.addBox(this,o)})}_updateMetasets(){const t=this._metasets,a=this.data.datasets.length,i=t.length;if(t.sort((n,s)=>n.index-s.index),i>a){for(let n=a;n<i;++n)this._destroyDatasetMeta(n);t.splice(a,i-a)}this._sortedMetasets=t.slice(0).sort(z0("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:a}}=this;t.length>a.length&&delete this._stacks,t.forEach((i,n)=>{a.filter(s=>s===i._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){const t=[],a=this.data.datasets;let i,n;for(this._removeUnreferencedMetasets(),i=0,n=a.length;i<n;i++){const s=a[i];let o=this.getDatasetMeta(i);const r=s.type||this.config.type;if(o.type&&o.type!==r&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=r,o.indexAxis=s.indexAxis||ws(r,this.options),o.order=s.order||0,o.index=i,o.label=""+s.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const h=Ut.getController(r),{datasetElementType:c,dataElementType:d}=at.datasets[r];Object.assign(h,{dataElementType:Ut.getElement(d),datasetElementType:c&&Ut.getElement(c)}),o.controller=new h(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){K(this.data.datasets,(t,a)=>{this.getDatasetMeta(a).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const a=this.config;a.update();const i=this._options=a.createResolver(a.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,d=this.data.datasets.length;c<d;c++){const{controller:p}=this.getDatasetMeta(c),u=!n&&s.indexOf(p)===-1;p.buildOrUpdateElements(u),o=Math.max(+p.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),n||K(s,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(z0("z","_idx"));const{_active:r,_lastEvent:h}=this;h?this._eventHandler(h,!0):r.length&&this._updateHoverStyles(r,r,!0),this.render()}_updateScales(){K(this.scales,t=>{gt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,a=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Gh(a,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,a=this._getUniformDataChanges()||[];for(const{method:i,start:n,count:s}of a){const o=i==="_removeElements"?-s:s;WI(t,n,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const a=this.data.datasets.length,i=s=>new Set(t.filter(o=>o[0]===s).map((o,r)=>r+","+o.splice(1).join(","))),n=i(0);for(let s=1;s<a;s++)if(!Gh(n,i(s)))return;return Array.from(n).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;gt.update(this,this.width,this.height,t);const a=this.chartArea,i=a.width<=0||a.height<=0;this._layers=[],K(this.boxes,n=>{i&&n.position==="chartArea"||(n.configure&&n.configure(),this._layers.push(...n._layers()))},this),this._layers.forEach((n,s)=>{n._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let a=0,i=this.data.datasets.length;a<i;++a)this.getDatasetMeta(a).controller.configure();for(let a=0,i=this.data.datasets.length;a<i;++a)this._updateDataset(a,Ae(t)?t({datasetIndex:a}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,a){const i=this.getDatasetMeta(t),n={meta:i,index:t,mode:a,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",n)!==!1&&(i.controller._update(a),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(ee.has(this)?this.attached&&!ee.running(this)&&ee.start(this):(this.draw(),B0({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:n}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,n)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const a=this._layers;for(t=0;t<a.length&&a[t].z<=0;++t)a[t].draw(this.chartArea);for(this._drawDatasets();t<a.length;++t)a[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const a=this._sortedMetasets,i=[];let n,s;for(n=0,s=a.length;n<s;++n){const o=a[n];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let a=t.length-1;a>=0;--a)this._drawDataset(t[a]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const a=this.ctx,i={meta:t,index:t.index,cancelable:!0},n=nl(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(n&&Mn(a,n),t.controller.draw(),n&&vn(a),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return oe(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,a,i,n){const s=FR.modes[a];return typeof s=="function"?s(this,t,i,n):[]}getDatasetMeta(t){const a=this.data.datasets[t],i=this._metasets;let n=i.filter(s=>s&&s._dataset===a).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:a&&a.order||0,index:t,_dataset:a,_parsed:[],_sorted:!1},i.push(n)),n}getContext(){return this.$context||(this.$context=Ce(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const a=this.data.datasets[t];if(!a)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!a.hidden}setDatasetVisibility(t,a){const i=this.getDatasetMeta(t);i.hidden=!a}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,a,i){const n=i?"show":"hide",s=this.getDatasetMeta(t),o=s.controller._resolveAnimations(void 0,n);Ka(a)?(s.data[a].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(s,{visible:i}),this.update(r=>r.datasetIndex===t?n:void 0))}hide(t,a){this._updateVisibility(t,a,!1)}show(t,a){this._updateVisibility(t,a,!0)}_destroyDatasetMeta(t){const a=this._metasets[t];a&&a.controller&&a.controller._destroy(),delete this._metasets[t]}_stop(){let t,a;for(this.stop(),ee.remove(this),t=0,a=this.data.datasets.length;t<a;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:a}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),o0(t,a),this.platform.releaseContext(a),this.canvas=null,this.ctx=null),delete qi[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,a=this.platform,i=(s,o)=>{a.addEventListener(this,s,o),t[s]=o},n=(s,o,r)=>{s.offsetX=o,s.offsetY=r,this._eventHandler(s)};K(this.options.events,s=>i(s,n))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,a=this.platform,i=(h,c)=>{a.addEventListener(this,h,c),t[h]=c},n=(h,c)=>{t[h]&&(a.removeEventListener(this,h,c),delete t[h])},s=(h,c)=>{this.canvas&&this.resize(h,c)};let o;const r=()=>{n("attach",r),this.attached=!0,this.resize(),i("resize",s),i("detach",o)};o=()=>{this.attached=!1,n("resize",s),this._stop(),this._resize(0,0),i("attach",r)},a.isAttached(this.canvas)?r():o()}unbindEvents(){K(this._listeners,(t,a)=>{this.platform.removeEventListener(this,a,t)}),this._listeners={},K(this._responsiveListeners,(t,a)=>{this.platform.removeEventListener(this,a,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,a,i){const n=i?"set":"remove";let s,o,r,h;for(a==="dataset"&&(s=this.getDatasetMeta(t[0].datasetIndex),s.controller["_"+n+"DatasetHoverStyle"]()),r=0,h=t.length;r<h;++r){o=t[r];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[n+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const a=this._active||[],i=t.map(({datasetIndex:s,index:o})=>{const r=this.getDatasetMeta(s);if(!r)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:r.data[o],index:o}});!Qi(i,a)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,a))}notifyPlugins(t,a,i){return this._plugins.notify(this,t,a,i)}isPluginEnabled(t){return this._plugins._cache.filter(a=>a.plugin.id===t).length===1}_updateHoverStyles(t,a,i){const n=this.options.hover,s=(h,c)=>h.filter(d=>!c.some(p=>d.datasetIndex===p.datasetIndex&&d.index===p.index)),o=s(a,t),r=i?t:s(t,a);o.length&&this.updateHoverStyle(o,n.mode,!1),r.length&&n.mode&&this.updateHoverStyle(r,n.mode,!0)}_eventHandler(t,a){const i={event:t,replay:a,cancelable:!0,inChartArea:this.isPointInArea(t)},n=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,n)===!1)return;const s=this._handleEvent(t,a,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,n),(s||i.changed)&&this.render(),this}_handleEvent(t,a,i){const{_active:n=[],options:s}=this,o=a,r=this._getActiveElements(t,n,i,o),h=GO(t),c=jI(t,this._lastEvent,i,h);i&&(this._lastEvent=null,G(s.onHover,[t,r,this],this),h&&G(s.onClick,[t,r,this],this));const d=!Qi(r,n);return(d||a)&&(this._active=r,this._updateHoverStyles(r,n,a)),this._lastEvent=c,d}_getActiveElements(t,a,i,n){if(t.type==="mouseout")return[];if(!i)return a;const s=this.options.hover;return this.getElementsAtEventForMode(t,s.mode,s,n)}}O(Bt,"defaults",at),O(Bt,"instances",qi),O(Bt,"overrides",qe),O(Bt,"registry",Ut),O(Bt,"version",NI),O(Bt,"getChart",N0);function F0(){return K(Bt.instances,e=>e._plugins.invalidate())}function UI(e,t,a){const{startAngle:i,x:n,y:s,outerRadius:o,innerRadius:r,options:h}=t,{borderWidth:c,borderJoinStyle:d}=h,p=Math.min(c/o,ft(i-a));if(e.beginPath(),e.arc(n,s,o-c/2,i+p/2,a-p/2),r>0){const u=Math.min(c/r,ft(i-a));e.arc(n,s,r+c/2,a-u/2,i+u/2,!0)}else{const u=Math.min(c/2,o*ft(i-a));if(d==="round")e.arc(n,s,u,a-U/2,i+U/2,!0);else if(d==="bevel"){const g=2*u*u,M=-g*Math.cos(a+U/2)+n,m=-g*Math.sin(a+U/2)+s,v=g*Math.cos(i+U/2)+n,b=g*Math.sin(i+U/2)+s;e.lineTo(M,m),e.lineTo(v,b)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function qI(e,t,a){const{startAngle:i,pixelMargin:n,x:s,y:o,outerRadius:r,innerRadius:h}=t;let c=n/r;e.beginPath(),e.arc(s,o,r,i-c,a+c),h>n?(c=n/h,e.arc(s,o,h,a+c,i-c,!0)):e.arc(s,o,n,a+ot,i-ot),e.closePath(),e.clip()}function ZI(e){return qs(e,["outerStart","outerEnd","innerStart","innerEnd"])}function YI(e,t,a,i){const n=ZI(e.options.borderRadius),s=(a-t)/2,o=Math.min(s,i*t/2),r=h=>{const c=(a-Math.min(s,h))*i/2;return dt(h,0,Math.min(s,c))};return{outerStart:r(n.outerStart),outerEnd:r(n.outerEnd),innerStart:dt(n.innerStart,0,o),innerEnd:dt(n.innerEnd,0,o)}}function ha(e,t,a,i){return{x:a+e*Math.cos(t),y:i+e*Math.sin(t)}}function sn(e,t,a,i,n,s){const{x:o,y:r,startAngle:h,pixelMargin:c,innerRadius:d}=t,p=Math.max(t.outerRadius+i+a-c,0),u=d>0?d+i+a+c:0;let g=0;const M=n-h;if(i){const Y=d>0?d-i:0,X=p>0?p-i:0,J=(Y+X)/2,bt=J!==0?M*J/(J+i):M;g=(M-bt)/2}const m=Math.max(.001,M*p-a/U)/p,v=(M-m)/2,b=h+v+g,w=n-v-g,{outerStart:S,outerEnd:k,innerStart:_,innerEnd:E}=YI(t,u,p,w-b),T=p-S,H=p-k,D=b+S/T,z=w-k/H,R=u+_,$=u+E,nt=b+_/R,vt=w-E/$;if(e.beginPath(),s){const Y=(D+z)/2;if(e.arc(o,r,p,D,Y),e.arc(o,r,p,Y,z),k>0){const ht=ha(H,z,o,r);e.arc(ht.x,ht.y,k,z,w+ot)}const X=ha($,w,o,r);if(e.lineTo(X.x,X.y),E>0){const ht=ha($,vt,o,r);e.arc(ht.x,ht.y,E,w+ot,vt+Math.PI)}const J=(w-E/u+(b+_/u))/2;if(e.arc(o,r,u,w-E/u,J,!0),e.arc(o,r,u,J,b+_/u,!0),_>0){const ht=ha(R,nt,o,r);e.arc(ht.x,ht.y,_,nt+Math.PI,b-ot)}const bt=ha(T,b,o,r);if(e.lineTo(bt.x,bt.y),S>0){const ht=ha(T,D,o,r);e.arc(ht.x,ht.y,S,b-ot,D)}}else{e.moveTo(o,r);const Y=Math.cos(D)*p+o,X=Math.sin(D)*p+r;e.lineTo(Y,X);const J=Math.cos(z)*p+o,bt=Math.sin(z)*p+r;e.lineTo(J,bt)}e.closePath()}function KI(e,t,a,i,n){const{fullCircles:s,startAngle:o,circumference:r}=t;let h=t.endAngle;if(s){sn(e,t,a,i,h,n);for(let c=0;c<s;++c)e.fill();isNaN(r)||(h=o+(r%tt||tt))}return sn(e,t,a,i,h,n),e.fill(),h}function XI(e,t,a,i,n){const{fullCircles:s,startAngle:o,circumference:r,options:h}=t,{borderWidth:c,borderJoinStyle:d,borderDash:p,borderDashOffset:u,borderRadius:g}=h,M=h.borderAlign==="inner";if(!c)return;e.setLineDash(p||[]),e.lineDashOffset=u,M?(e.lineWidth=c*2,e.lineJoin=d||"round"):(e.lineWidth=c,e.lineJoin=d||"bevel");let m=t.endAngle;if(s){sn(e,t,a,i,m,n);for(let v=0;v<s;++v)e.stroke();isNaN(r)||(m=o+(r%tt||tt))}M&&qI(e,t,m),h.selfJoin&&m-o>=U&&g===0&&d!=="miter"&&UI(e,t,m),s||(sn(e,t,a,i,m,n),e.stroke())}class Ba extends he{constructor(a){super();O(this,"circumference");O(this,"endAngle");O(this,"fullCircles");O(this,"innerRadius");O(this,"outerRadius");O(this,"pixelMargin");O(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,a&&Object.assign(this,a)}inRange(a,i,n){const s=this.getProps(["x","y"],n),{angle:o,distance:r}=Ic(s,{x:a,y:i}),{startAngle:h,endAngle:c,innerRadius:d,outerRadius:p,circumference:u}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),g=(this.options.spacing+this.options.borderWidth)/2,M=N(u,c-h),m=Xa(o,h,c)&&h!==c,v=M>=tt||m,b=ne(r,d+g,p+g);return v&&b}getCenterPoint(a){const{x:i,y:n,startAngle:s,endAngle:o,innerRadius:r,outerRadius:h}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],a),{offset:c,spacing:d}=this.options,p=(s+o)/2,u=(r+h+d+c)/2;return{x:i+Math.cos(p)*u,y:n+Math.sin(p)*u}}tooltipPosition(a){return this.getCenterPoint(a)}draw(a){const{options:i,circumference:n}=this,s=(i.offset||0)/4,o=(i.spacing||0)/2,r=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=n>tt?Math.floor(n/tt):0,n===0||this.innerRadius<0||this.outerRadius<0)return;a.save();const h=(this.startAngle+this.endAngle)/2;a.translate(Math.cos(h)*s,Math.sin(h)*s);const c=1-Math.sin(Math.min(U,n||0)),d=s*c;a.fillStyle=i.backgroundColor,a.strokeStyle=i.borderColor,KI(a,this,d,o,r),XI(a,this,d,o,r),a.restore()}}O(Ba,"id","arc"),O(Ba,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),O(Ba,"defaultRoutes",{backgroundColor:"backgroundColor"}),O(Ba,"descriptors",{_scriptable:!0,_indexable:a=>a!=="borderDash"});function Ml(e,t,a=t){e.lineCap=N(a.borderCapStyle,t.borderCapStyle),e.setLineDash(N(a.borderDash,t.borderDash)),e.lineDashOffset=N(a.borderDashOffset,t.borderDashOffset),e.lineJoin=N(a.borderJoinStyle,t.borderJoinStyle),e.lineWidth=N(a.borderWidth,t.borderWidth),e.strokeStyle=N(a.borderColor,t.borderColor)}function GI(e,t,a){e.lineTo(a.x,a.y)}function QI(e){return e.stepped?xD:e.tension||e.cubicInterpolationMode==="monotone"?bD:GI}function vl(e,t,a={}){const i=e.length,{start:n=0,end:s=i-1}=a,{start:o,end:r}=t,h=Math.max(n,o),c=Math.min(s,r),d=n<o&&s<o||n>r&&s>r;return{count:i,start:h,loop:t.loop,ilen:c<h&&!d?i+c-h:c-h}}function JI(e,t,a,i){const{points:n,options:s}=t,{count:o,start:r,loop:h,ilen:c}=vl(n,a,i),d=QI(s);let{move:p=!0,reverse:u}=i||{},g,M,m;for(g=0;g<=c;++g)M=n[(r+(u?c-g:g))%o],!M.skip&&(p?(e.moveTo(M.x,M.y),p=!1):d(e,m,M,u,s.stepped),m=M);return h&&(M=n[(r+(u?c:0))%o],d(e,m,M,u,s.stepped)),!!h}function tz(e,t,a,i){const n=t.points,{count:s,start:o,ilen:r}=vl(n,a,i),{move:h=!0,reverse:c}=i||{};let d=0,p=0,u,g,M,m,v,b;const w=k=>(o+(c?r-k:k))%s,S=()=>{m!==v&&(e.lineTo(d,v),e.lineTo(d,m),e.lineTo(d,b))};for(h&&(g=n[w(0)],e.moveTo(g.x,g.y)),u=0;u<=r;++u){if(g=n[w(u)],g.skip)continue;const k=g.x,_=g.y,E=k|0;E===M?(_<m?m=_:_>v&&(v=_),d=(p*d+k)/++p):(S(),e.lineTo(k,_),M=E,p=0,m=v=_),b=_}S()}function As(e){const t=e.options,a=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!a?tz:JI}function ez(e){return e.stepped?JD:e.tension||e.cubicInterpolationMode==="monotone"?tR:Fe}function az(e,t,a,i){let n=t._path;n||(n=t._path=new Path2D,t.path(n,a,i)&&n.closePath()),Ml(e,t.options),e.stroke(n)}function iz(e,t,a,i){const{segments:n,options:s}=t,o=As(t);for(const r of n)Ml(e,s,r.style),e.beginPath(),o(e,t,r,{start:a,end:a+i-1})&&e.closePath(),e.stroke()}const nz=typeof Path2D=="function";function sz(e,t,a,i){nz&&!t.options.segment?az(e,t,a,i):iz(e,t,a,i)}class ve extends he{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,a){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const n=i.spanGaps?this._loop:this._fullLoop;UD(this._points,i,t,n,a),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=oR(this,this.options.segment))}first(){const t=this.segments,a=this.points;return t.length&&a[t[0].start]}last(){const t=this.segments,a=this.points,i=t.length;return i&&a[t[i-1].end]}interpolate(t,a){const i=this.options,n=t[a],s=this.points,o=il(this,{property:a,start:n,end:n});if(!o.length)return;const r=[],h=ez(i);let c,d;for(c=0,d=o.length;c<d;++c){const{start:p,end:u}=o[c],g=s[p],M=s[u];if(g===M){r.push(g);continue}const m=Math.abs((n-g[a])/(M[a]-g[a])),v=h(g,M,m,i.stepped);v[a]=t[a],r.push(v)}return r.length===1?r[0]:r}pathSegment(t,a,i){return As(this)(t,this,a,i)}path(t,a,i){const n=this.segments,s=As(this);let o=this._loop;a=a||0,i=i||this.points.length-a;for(const r of n)o&=s(t,this,r,{start:a,end:a+i-1});return!!o}draw(t,a,i,n){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(t.save(),sz(t,this,i,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}O(ve,"id","line"),O(ve,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),O(ve,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),O(ve,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function $0(e,t,a,i){const n=e.options,{[a]:s}=e.getProps([a],i);return Math.abs(t-s)<n.radius+n.hitRadius}class Zi extends he{constructor(a){super();O(this,"parsed");O(this,"skip");O(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,a&&Object.assign(this,a)}inRange(a,i,n){const s=this.options,{x:o,y:r}=this.getProps(["x","y"],n);return Math.pow(a-o,2)+Math.pow(i-r,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(a,i){return $0(this,a,"x",i)}inYRange(a,i){return $0(this,a,"y",i)}getCenterPoint(a){const{x:i,y:n}=this.getProps(["x","y"],a);return{x:i,y:n}}size(a){a=a||this.options||{};let i=a.radius||0;i=Math.max(i,i&&a.hoverRadius||0);const n=i&&a.borderWidth||0;return(i+n)*2}draw(a,i){const n=this.options;this.skip||n.radius<.1||!oe(this,i,this.size(n)/2)||(a.strokeStyle=n.borderColor,a.lineWidth=n.borderWidth,a.fillStyle=n.backgroundColor,xs(a,n,this.x,this.y))}getRange(){const a=this.options||{};return a.radius+a.hitRadius}}O(Zi,"id","point"),O(Zi,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),O(Zi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function yl(e,t){const{x:a,y:i,base:n,width:s,height:o}=e.getProps(["x","y","base","width","height"],t);let r,h,c,d,p;return e.horizontal?(p=o/2,r=Math.min(a,n),h=Math.max(a,n),c=i-p,d=i+p):(p=s/2,r=a-p,h=a+p,c=Math.min(i,n),d=Math.max(i,n)),{left:r,top:c,right:h,bottom:d}}function ye(e,t,a,i){return e?0:dt(t,a,i)}function oz(e,t,a){const i=e.options.borderWidth,n=e.borderSkipped,s=qc(i);return{t:ye(n.top,s.top,0,a),r:ye(n.right,s.right,0,t),b:ye(n.bottom,s.bottom,0,a),l:ye(n.left,s.left,0,t)}}function rz(e,t,a){const{enableBorderRadius:i}=e.getProps(["enableBorderRadius"]),n=e.options.borderRadius,s=We(n),o=Math.min(t,a),r=e.borderSkipped,h=i||j(n);return{topLeft:ye(!h||r.top||r.left,s.topLeft,0,o),topRight:ye(!h||r.top||r.right,s.topRight,0,o),bottomLeft:ye(!h||r.bottom||r.left,s.bottomLeft,0,o),bottomRight:ye(!h||r.bottom||r.right,s.bottomRight,0,o)}}function hz(e){const t=yl(e),a=t.right-t.left,i=t.bottom-t.top,n=oz(e,a/2,i/2),s=rz(e,a/2,i/2);return{outer:{x:t.left,y:t.top,w:a,h:i,radius:s},inner:{x:t.left+n.l,y:t.top+n.t,w:a-n.l-n.r,h:i-n.t-n.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,s.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(n.b,n.r))}}}}function rs(e,t,a,i){const n=t===null,s=a===null,r=e&&!(n&&s)&&yl(e,i);return r&&(n||ne(t,r.left,r.right))&&(s||ne(a,r.top,r.bottom))}function cz(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function lz(e,t){e.rect(t.x,t.y,t.w,t.h)}function hs(e,t,a={}){const i=e.x!==a.x?-t:0,n=e.y!==a.y?-t:0,s=(e.x+e.w!==a.x+a.w?t:0)-i,o=(e.y+e.h!==a.y+a.h?t:0)-n;return{x:e.x+i,y:e.y+n,w:e.w+s,h:e.h+o,radius:e.radius}}class Yi extends he{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:a,options:{borderColor:i,backgroundColor:n}}=this,{inner:s,outer:o}=hz(this),r=cz(o.radius)?Ga:lz;t.save(),(o.w!==s.w||o.h!==s.h)&&(t.beginPath(),r(t,hs(o,a,s)),t.clip(),r(t,hs(s,-a,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),r(t,hs(s,a)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,a,i){return rs(this,t,a,i)}inXRange(t,a){return rs(this,t,null,a)}inYRange(t,a){return rs(this,null,t,a)}getCenterPoint(t){const{x:a,y:i,base:n,horizontal:s}=this.getProps(["x","y","base","horizontal"],t);return{x:s?(a+n)/2:a,y:s?i:(i+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}O(Yi,"id","bar"),O(Yi,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),O(Yi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var dz=Object.freeze({__proto__:null,ArcElement:Ba,BarElement:Yi,LineElement:ve,PointElement:Zi});const Cs=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],W0=Cs.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function xl(e){return Cs[e%Cs.length]}function bl(e){return W0[e%W0.length]}function pz(e,t){return e.borderColor=xl(t),e.backgroundColor=bl(t),++t}function uz(e,t){return e.backgroundColor=e.data.map(()=>xl(t++)),t}function fz(e,t){return e.backgroundColor=e.data.map(()=>bl(t++)),t}function gz(e){let t=0;return(a,i)=>{const n=e.getDatasetMeta(i).controller;n instanceof $e?t=uz(a,t):n instanceof qa?t=fz(a,t):n&&(t=pz(a,t))}}function j0(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function mz(e){return e&&(e.borderColor||e.backgroundColor)}function Mz(){return at.borderColor!=="rgba(0,0,0,0.1)"||at.backgroundColor!=="rgba(0,0,0,0.1)"}var vz={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,a){if(!a.enabled)return;const{data:{datasets:i},options:n}=e.config,{elements:s}=n,o=j0(i)||mz(n)||s&&j0(s)||Mz();if(!a.forceOverride&&o)return;const r=gz(e);i.forEach(r)}};function yz(e,t,a,i,n){const s=n.samples||i;if(s>=a)return e.slice(t,t+a);const o=[],r=(a-2)/(s-2);let h=0;const c=t+a-1;let d=t,p,u,g,M,m;for(o[h++]=e[d],p=0;p<s-2;p++){let v=0,b=0,w;const S=Math.floor((p+1)*r)+1+t,k=Math.min(Math.floor((p+2)*r)+1,a)+t,_=k-S;for(w=S;w<k;w++)v+=e[w].x,b+=e[w].y;v/=_,b/=_;const E=Math.floor(p*r)+1+t,T=Math.min(Math.floor((p+1)*r)+1,a)+t,{x:H,y:D}=e[d];for(g=M=-1,w=E;w<T;w++)M=.5*Math.abs((H-v)*(e[w].y-D)-(H-e[w].x)*(b-D)),M>g&&(g=M,u=e[w],m=w);o[h++]=u,d=m}return o[h++]=e[c],o}function xz(e,t,a,i){let n=0,s=0,o,r,h,c,d,p,u,g,M,m;const v=[],b=t+a-1,w=e[t].x,k=e[b].x-w;for(o=t;o<t+a;++o){r=e[o],h=(r.x-w)/k*i,c=r.y;const _=h|0;if(_===d)c<M?(M=c,p=o):c>m&&(m=c,u=o),n=(s*n+r.x)/++s;else{const E=o-1;if(!W(p)&&!W(u)){const T=Math.min(p,u),H=Math.max(p,u);T!==g&&T!==E&&v.push({...e[T],x:n}),H!==g&&H!==E&&v.push({...e[H],x:n})}o>0&&E!==g&&v.push(e[E]),v.push(r),d=_,s=0,M=m=c,p=u=g=o}}return v}function wl(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function U0(e){e.data.datasets.forEach(t=>{wl(t)})}function bz(e,t){const a=t.length;let i=0,n;const{iScale:s}=e,{min:o,max:r,minDefined:h,maxDefined:c}=s.getUserBounds();return h&&(i=dt(se(t,s.axis,o).lo,0,a-1)),c?n=dt(se(t,s.axis,r).hi+1,i,a)-i:n=a-i,{start:i,count:n}}var wz={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,a)=>{if(!a.enabled){U0(e);return}const i=e.width;e.data.datasets.forEach((n,s)=>{const{_data:o,indexAxis:r}=n,h=e.getDatasetMeta(s),c=o||n.data;if(Ia([r,e.options.indexAxis])==="y"||!h.controller.supportsDecimation)return;const d=e.scales[h.xAxisID];if(d.type!=="linear"&&d.type!=="time"||e.options.parsing)return;let{start:p,count:u}=bz(h,c);const g=a.threshold||4*i;if(u<=g){wl(n);return}W(o)&&(n._data=c,delete n.data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(m){this._data=m}}));let M;switch(a.algorithm){case"lttb":M=yz(c,p,u,i,a);break;case"min-max":M=xz(c,p,u,i);break;default:throw new Error(`Unsupported decimation algorithm '${a.algorithm}'`)}n._decimated=M})},destroy(e){U0(e)}};function _z(e,t,a){const i=e.segments,n=e.points,s=t.points,o=[];for(const r of i){let{start:h,end:c}=r;c=bn(h,c,n);const d=Es(a,n[h],n[c],r.loop);if(!t.segments){o.push({source:r,target:d,start:n[h],end:n[c]});continue}const p=il(t,d);for(const u of p){const g=Es(a,s[u.start],s[u.end],u.loop),M=al(r,n,g);for(const m of M)o.push({source:m,target:u,start:{[a]:q0(d,g,"start",Math.max)},end:{[a]:q0(d,g,"end",Math.min)}})}}return o}function Es(e,t,a,i){if(i)return;let n=t[e],s=a[e];return e==="angle"&&(n=ft(n),s=ft(s)),{property:e,start:n,end:s}}function Az(e,t){const{x:a=null,y:i=null}=e||{},n=t.points,s=[];return t.segments.forEach(({start:o,end:r})=>{r=bn(o,r,n);const h=n[o],c=n[r];i!==null?(s.push({x:h.x,y:i}),s.push({x:c.x,y:i})):a!==null&&(s.push({x:a,y:h.y}),s.push({x:a,y:c.y}))}),s}function bn(e,t,a){for(;t>e;t--){const i=a[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function q0(e,t,a,i){return e&&t?i(e[a],t[a]):e?e[a]:t?t[a]:0}function _l(e,t){let a=[],i=!1;return et(e)?(i=!0,a=e):a=Az(e,t),a.length?new ve({points:a,options:{tension:0},_loop:i,_fullLoop:i}):null}function Z0(e){return e&&e.fill!==!1}function Cz(e,t,a){let n=e[t].fill;const s=[t];let o;if(!a)return n;for(;n!==!1&&s.indexOf(n)===-1;){if(!it(n))return n;if(o=e[n],!o)return!1;if(o.visible)return n;s.push(n),n=o.fill}return!1}function Ez(e,t,a){const i=Tz(e);if(j(i))return isNaN(i.value)?!1:i;let n=parseFloat(i);return it(n)&&Math.floor(n)===n?Sz(i[0],t,n,a):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function Sz(e,t,a,i){return(e==="-"||e==="+")&&(a=t+a),a===t||a<0||a>=i?!1:a}function kz(e,t){let a=null;return e==="start"?a=t.bottom:e==="end"?a=t.top:j(e)?a=t.getPixelForValue(e.value):t.getBasePixel&&(a=t.getBasePixel()),a}function Lz(e,t,a){let i;return e==="start"?i=a:e==="end"?i=t.options.reverse?t.min:t.max:j(e)?i=e.value:i=t.getBaseValue(),i}function Tz(e){const t=e.options,a=t.fill;let i=N(a&&a.target,a);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function Hz(e){const{scale:t,index:a,line:i}=e,n=[],s=i.segments,o=i.points,r=Vz(t,a);r.push(_l({x:null,y:t.bottom},i));for(let h=0;h<s.length;h++){const c=s[h];for(let d=c.start;d<=c.end;d++)Pz(n,o[d],r)}return new ve({points:n,options:{}})}function Vz(e,t){const a=[],i=e.getMatchingVisibleMetas("line");for(let n=0;n<i.length;n++){const s=i[n];if(s.index===t)break;s.hidden||a.unshift(s.dataset)}return a}function Pz(e,t,a){const i=[];for(let n=0;n<a.length;n++){const s=a[n],{first:o,last:r,point:h}=Oz(s,t,"x");if(!(!h||o&&r)){if(o)i.unshift(h);else if(e.push(h),!r)break}}e.push(...i)}function Oz(e,t,a){const i=e.interpolate(t,a);if(!i)return{};const n=i[a],s=e.segments,o=e.points;let r=!1,h=!1;for(let c=0;c<s.length;c++){const d=s[c],p=o[d.start][a],u=o[d.end][a];if(ne(n,p,u)){r=n===p,h=n===u;break}}return{first:r,last:h,point:i}}class Al{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,a,i){const{x:n,y:s,radius:o}=this;return a=a||{start:0,end:tt},t.arc(n,s,o,a.end,a.start,!0),!i.bounds}interpolate(t){const{x:a,y:i,radius:n}=this,s=t.angle;return{x:a+Math.cos(s)*n,y:i+Math.sin(s)*n,angle:s}}}function Dz(e){const{chart:t,fill:a,line:i}=e;if(it(a))return Rz(t,a);if(a==="stack")return Hz(e);if(a==="shape")return!0;const n=Iz(e);return n instanceof Al?n:_l(n,i)}function Rz(e,t){const a=e.getDatasetMeta(t);return a&&e.isDatasetVisible(t)?a.dataset:null}function Iz(e){return(e.scale||{}).getPointPositionForValue?Bz(e):zz(e)}function zz(e){const{scale:t={},fill:a}=e,i=kz(a,t);if(it(i)){const n=t.isHorizontal();return{x:n?i:null,y:n?null:i}}return null}function Bz(e){const{scale:t,fill:a}=e,i=t.options,n=t.getLabels().length,s=i.reverse?t.max:t.min,o=Lz(a,t,s),r=[];if(i.grid.circular){const h=t.getPointPositionForValue(0,s);return new Al({x:h.x,y:h.y,radius:t.getDistanceFromCenterForValue(o)})}for(let h=0;h<n;++h)r.push(t.getPointPositionForValue(h,o));return r}function cs(e,t,a){const i=Dz(t),{chart:n,index:s,line:o,scale:r,axis:h}=t,c=o.options,d=c.fill,p=c.backgroundColor,{above:u=p,below:g=p}=d||{},M=n.getDatasetMeta(s),m=nl(n,M);i&&o.points.length&&(Mn(e,a),Nz(e,{line:o,target:i,above:u,below:g,area:a,scale:r,axis:h,clip:m}),vn(e))}function Nz(e,t){const{line:a,target:i,above:n,below:s,area:o,scale:r,clip:h}=t,c=a._loop?"angle":t.axis;e.save();let d=s;s!==n&&(c==="x"?(Y0(e,i,o.top),ls(e,{line:a,target:i,color:n,scale:r,property:c,clip:h}),e.restore(),e.save(),Y0(e,i,o.bottom)):c==="y"&&(K0(e,i,o.left),ls(e,{line:a,target:i,color:s,scale:r,property:c,clip:h}),e.restore(),e.save(),K0(e,i,o.right),d=n)),ls(e,{line:a,target:i,color:d,scale:r,property:c,clip:h}),e.restore()}function Y0(e,t,a){const{segments:i,points:n}=t;let s=!0,o=!1;e.beginPath();for(const r of i){const{start:h,end:c}=r,d=n[h],p=n[bn(h,c,n)];s?(e.moveTo(d.x,d.y),s=!1):(e.lineTo(d.x,a),e.lineTo(d.x,d.y)),o=!!t.pathSegment(e,r,{move:o}),o?e.closePath():e.lineTo(p.x,a)}e.lineTo(t.first().x,a),e.closePath(),e.clip()}function K0(e,t,a){const{segments:i,points:n}=t;let s=!0,o=!1;e.beginPath();for(const r of i){const{start:h,end:c}=r,d=n[h],p=n[bn(h,c,n)];s?(e.moveTo(d.x,d.y),s=!1):(e.lineTo(a,d.y),e.lineTo(d.x,d.y)),o=!!t.pathSegment(e,r,{move:o}),o?e.closePath():e.lineTo(a,p.y)}e.lineTo(a,t.first().y),e.closePath(),e.clip()}function ls(e,t){const{line:a,target:i,property:n,color:s,scale:o,clip:r}=t,h=_z(a,i,n);for(const{source:c,target:d,start:p,end:u}of h){const{style:{backgroundColor:g=s}={}}=c,M=i!==!0;e.save(),e.fillStyle=g,Fz(e,o,r,M&&Es(n,p,u)),e.beginPath();const m=!!a.pathSegment(e,c);let v;if(M){m?e.closePath():X0(e,i,u,n);const b=!!i.pathSegment(e,d,{move:m,reverse:!0});v=m&&b,v||X0(e,i,p,n)}e.closePath(),e.fill(v?"evenodd":"nonzero"),e.restore()}}function Fz(e,t,a,i){const n=t.chart.chartArea,{property:s,start:o,end:r}=i||{};if(s==="x"||s==="y"){let h,c,d,p;s==="x"?(h=o,c=n.top,d=r,p=n.bottom):(h=n.left,c=o,d=n.right,p=r),e.beginPath(),a&&(h=Math.max(h,a.left),d=Math.min(d,a.right),c=Math.max(c,a.top),p=Math.min(p,a.bottom)),e.rect(h,c,d-h,p-c),e.clip()}}function X0(e,t,a,i){const n=t.interpolate(a,i);n&&e.lineTo(n.x,n.y)}var $z={id:"filler",afterDatasetsUpdate(e,t,a){const i=(e.data.datasets||[]).length,n=[];let s,o,r,h;for(o=0;o<i;++o)s=e.getDatasetMeta(o),r=s.dataset,h=null,r&&r.options&&r instanceof ve&&(h={visible:e.isDatasetVisible(o),index:o,fill:Ez(r,o,i),chart:e,axis:s.controller.options.indexAxis,scale:s.vScale,line:r}),s.$filler=h,n.push(h);for(o=0;o<i;++o)h=n[o],!(!h||h.fill===!1)&&(h.fill=Cz(n,o,a.propagate))},beforeDraw(e,t,a){const i=a.drawTime==="beforeDraw",n=e.getSortedVisibleDatasetMetas(),s=e.chartArea;for(let o=n.length-1;o>=0;--o){const r=n[o].$filler;r&&(r.line.updateControlPoints(s,r.axis),i&&r.fill&&cs(e.ctx,r,s))}},beforeDatasetsDraw(e,t,a){if(a.drawTime!=="beforeDatasetsDraw")return;const i=e.getSortedVisibleDatasetMetas();for(let n=i.length-1;n>=0;--n){const s=i[n].$filler;Z0(s)&&cs(e.ctx,s,e.chartArea)}},beforeDatasetDraw(e,t,a){const i=t.meta.$filler;!Z0(i)||a.drawTime!=="beforeDatasetDraw"||cs(e.ctx,i,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const G0=(e,t)=>{let{boxHeight:a=t,boxWidth:i=t}=e;return e.usePointStyle&&(a=Math.min(a,t),i=e.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:a,itemHeight:Math.max(t,a)}},Wz=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Q0 extends he{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,a,i){this.maxWidth=t,this.maxHeight=a,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let a=G(t.generateLabels,[this.chart],this)||[];t.filter&&(a=a.filter(i=>t.filter(i,this.chart.data))),t.sort&&(a=a.sort((i,n)=>t.sort(i,n,this.chart.data))),this.options.reverse&&a.reverse(),this.legendItems=a}fit(){const{options:t,ctx:a}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,n=ct(i.font),s=n.size,o=this._computeTitleHeight(),{boxWidth:r,itemHeight:h}=G0(i,s);let c,d;a.font=n.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(o,s,r,h)+10):(d=this.maxHeight,c=this._fitCols(o,n,r,h)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,a,i,n){const{ctx:s,maxWidth:o,options:{labels:{padding:r}}}=this,h=this.legendHitBoxes=[],c=this.lineWidths=[0],d=n+r;let p=t;s.textAlign="left",s.textBaseline="middle";let u=-1,g=-d;return this.legendItems.forEach((M,m)=>{const v=i+a/2+s.measureText(M.text).width;(m===0||c[c.length-1]+v+2*r>o)&&(p+=d,c[c.length-(m>0?0:1)]=0,g+=d,u++),h[m]={left:0,top:g,row:u,width:v,height:n},c[c.length-1]+=v+r}),p}_fitCols(t,a,i,n){const{ctx:s,maxHeight:o,options:{labels:{padding:r}}}=this,h=this.legendHitBoxes=[],c=this.columnSizes=[],d=o-t;let p=r,u=0,g=0,M=0,m=0;return this.legendItems.forEach((v,b)=>{const{itemWidth:w,itemHeight:S}=jz(i,a,s,v,n);b>0&&g+S+2*r>d&&(p+=u+r,c.push({width:u,height:g}),M+=u+r,m++,u=g=0),h[b]={left:M,top:g,col:m,width:w,height:S},u=Math.max(u,w),g+=S+r}),p+=u,c.push({width:u,height:g}),p}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:a,options:{align:i,labels:{padding:n},rtl:s}}=this,o=da(s,this.left,this.width);if(this.isHorizontal()){let r=0,h=ut(i,this.left+n,this.right-this.lineWidths[r]);for(const c of a)r!==c.row&&(r=c.row,h=ut(i,this.left+n,this.right-this.lineWidths[r])),c.top+=this.top+t+n,c.left=o.leftForLtr(o.x(h),c.width),h+=c.width+n}else{let r=0,h=ut(i,this.top+t+n,this.bottom-this.columnSizes[r].height);for(const c of a)c.col!==r&&(r=c.col,h=ut(i,this.top+t+n,this.bottom-this.columnSizes[r].height)),c.top=h,c.left+=this.left+n,c.left=o.leftForLtr(o.x(c.left),c.width),h+=c.height+n}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Mn(t,this),this._draw(),vn(t)}}_draw(){const{options:t,columnSizes:a,lineWidths:i,ctx:n}=this,{align:s,labels:o}=t,r=at.color,h=da(t.rtl,this.left,this.width),c=ct(o.font),{padding:d}=o,p=c.size,u=p/2;let g;this.drawTitle(),n.textAlign=h.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=c.string;const{boxWidth:M,boxHeight:m,itemHeight:v}=G0(o,p),b=function(E,T,H){if(isNaN(M)||M<=0||isNaN(m)||m<0)return;n.save();const D=N(H.lineWidth,1);if(n.fillStyle=N(H.fillStyle,r),n.lineCap=N(H.lineCap,"butt"),n.lineDashOffset=N(H.lineDashOffset,0),n.lineJoin=N(H.lineJoin,"miter"),n.lineWidth=D,n.strokeStyle=N(H.strokeStyle,r),n.setLineDash(N(H.lineDash,[])),o.usePointStyle){const z={radius:m*Math.SQRT2/2,pointStyle:H.pointStyle,rotation:H.rotation,borderWidth:D},R=h.xPlus(E,M/2),$=T+u;Uc(n,z,R,$,o.pointStyleWidth&&M)}else{const z=T+Math.max((p-m)/2,0),R=h.leftForLtr(E,M),$=We(H.borderRadius);n.beginPath(),Object.values($).some(nt=>nt!==0)?Ga(n,{x:R,y:z,w:M,h:m,radius:$}):n.rect(R,z,M,m),n.fill(),D!==0&&n.stroke()}n.restore()},w=function(E,T,H){Ze(n,H.text,E,T+v/2,c,{strikethrough:H.hidden,textAlign:h.textAlign(H.textAlign)})},S=this.isHorizontal(),k=this._computeTitleHeight();S?g={x:ut(s,this.left+d,this.right-i[0]),y:this.top+d+k,line:0}:g={x:this.left+d,y:ut(s,this.top+k+d,this.bottom-a[0].height),line:0},Jc(this.ctx,t.textDirection);const _=v+d;this.legendItems.forEach((E,T)=>{n.strokeStyle=E.fontColor,n.fillStyle=E.fontColor;const H=n.measureText(E.text).width,D=h.textAlign(E.textAlign||(E.textAlign=o.textAlign)),z=M+u+H;let R=g.x,$=g.y;h.setWidth(this.width),S?T>0&&R+z+d>this.right&&($=g.y+=_,g.line++,R=g.x=ut(s,this.left+d,this.right-i[g.line])):T>0&&$+_>this.bottom&&(R=g.x=R+a[g.line].width+d,g.line++,$=g.y=ut(s,this.top+k+d,this.bottom-a[g.line].height));const nt=h.x(R);if(b(nt,$,E),R=cD(D,R+M+u,S?R+z:this.right,t.rtl),w(h.x(R),$,E),S)g.x+=z+d;else if(typeof E.text!="string"){const vt=c.lineHeight;g.y+=Cl(E,vt)+d}else g.y+=_}),tl(this.ctx,t.textDirection)}drawTitle(){const t=this.options,a=t.title,i=ct(a.font),n=mt(a.padding);if(!a.display)return;const s=da(t.rtl,this.left,this.width),o=this.ctx,r=a.position,h=i.size/2,c=n.top+h;let d,p=this.left,u=this.width;if(this.isHorizontal())u=Math.max(...this.lineWidths),d=this.top+c,p=ut(t.align,p,this.right-u);else{const M=this.columnSizes.reduce((m,v)=>Math.max(m,v.height),0);d=c+ut(t.align,this.top,this.bottom-M-t.labels.padding-this._computeTitleHeight())}const g=ut(r,p,p+u);o.textAlign=s.textAlign(js(r)),o.textBaseline="middle",o.strokeStyle=a.color,o.fillStyle=a.color,o.font=i.string,Ze(o,a.text,g,d,i)}_computeTitleHeight(){const t=this.options.title,a=ct(t.font),i=mt(t.padding);return t.display?a.lineHeight+i.height:0}_getLegendItemAt(t,a){let i,n,s;if(ne(t,this.left,this.right)&&ne(a,this.top,this.bottom)){for(s=this.legendHitBoxes,i=0;i<s.length;++i)if(n=s[i],ne(t,n.left,n.left+n.width)&&ne(a,n.top,n.top+n.height))return this.legendItems[i]}return null}handleEvent(t){const a=this.options;if(!Zz(t.type,a))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const n=this._hoveredItem,s=Wz(n,i);n&&!s&&G(a.onLeave,[t,n,this],this),this._hoveredItem=i,i&&!s&&G(a.onHover,[t,i,this],this)}else i&&G(a.onClick,[t,i,this],this)}}function jz(e,t,a,i,n){const s=Uz(i,e,t,a),o=qz(n,i,t.lineHeight);return{itemWidth:s,itemHeight:o}}function Uz(e,t,a,i){let n=e.text;return n&&typeof n!="string"&&(n=n.reduce((s,o)=>s.length>o.length?s:o)),t+a.size/2+i.measureText(n).width}function qz(e,t,a){let i=e;return typeof t.text!="string"&&(i=Cl(t,a)),i}function Cl(e,t){const a=e.text?e.text.length:0;return t*a}function Zz(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var Yz={id:"legend",_element:Q0,start(e,t,a){const i=e.legend=new Q0({ctx:e.ctx,options:a,chart:e});gt.configure(e,i,a),gt.addBox(e,i)},stop(e){gt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,a){const i=e.legend;gt.configure(e,i,a),i.options=a},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,a){const i=t.datasetIndex,n=a.chart;n.isDatasetVisible(i)?(n.hide(i),t.hidden=!0):(n.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:a,pointStyle:i,textAlign:n,color:s,useBorderRadius:o,borderRadius:r}}=e.legend.options;return e._getSortedDatasetMetas().map(h=>{const c=h.controller.getStyle(a?0:void 0),d=mt(c.borderWidth);return{text:t[h.index].label,fillStyle:c.backgroundColor,fontColor:s,hidden:!h.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:n||c.textAlign,borderRadius:o&&(r||c.borderRadius),datasetIndex:h.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class Js extends he{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,a){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=a;const n=et(i.text)?i.text.length:1;this._padding=mt(i.padding);const s=n*ct(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:a,left:i,bottom:n,right:s,options:o}=this,r=o.align;let h=0,c,d,p;return this.isHorizontal()?(d=ut(r,i,s),p=a+t,c=s-i):(o.position==="left"?(d=i+t,p=ut(r,n,a),h=U*-.5):(d=s-t,p=ut(r,a,n),h=U*.5),c=n-a),{titleX:d,titleY:p,maxWidth:c,rotation:h}}draw(){const t=this.ctx,a=this.options;if(!a.display)return;const i=ct(a.font),s=i.lineHeight/2+this._padding.top,{titleX:o,titleY:r,maxWidth:h,rotation:c}=this._drawArgs(s);Ze(t,a.text,0,0,i,{color:a.color,maxWidth:h,rotation:c,textAlign:js(a.align),textBaseline:"middle",translation:[o,r]})}}function Kz(e,t){const a=new Js({ctx:e.ctx,options:t,chart:e});gt.configure(e,a,t),gt.addBox(e,a),e.titleBlock=a}var Xz={id:"title",_element:Js,start(e,t,a){Kz(e,a)},stop(e){const t=e.titleBlock;gt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,a){const i=e.titleBlock;gt.configure(e,i,a),i.options=a},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Oi=new WeakMap;var Gz={id:"subtitle",start(e,t,a){const i=new Js({ctx:e.ctx,options:a,chart:e});gt.configure(e,i,a),gt.addBox(e,i),Oi.set(e,i)},stop(e){gt.removeBox(e,Oi.get(e)),Oi.delete(e)},beforeUpdate(e,t,a){const i=Oi.get(e);gt.configure(e,i,a),i.options=a},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Na={average(e){if(!e.length)return!1;let t,a,i=new Set,n=0,s=0;for(t=0,a=e.length;t<a;++t){const r=e[t].element;if(r&&r.hasValue()){const h=r.tooltipPosition();i.add(h.x),n+=h.y,++s}}return s===0||i.size===0?!1:{x:[...i].reduce((r,h)=>r+h)/i.size,y:n/s}},nearest(e,t){if(!e.length)return!1;let a=t.x,i=t.y,n=Number.POSITIVE_INFINITY,s,o,r;for(s=0,o=e.length;s<o;++s){const h=e[s].element;if(h&&h.hasValue()){const c=h.getCenterPoint(),d=vs(t,c);d<n&&(n=d,r=h)}}if(r){const h=r.tooltipPosition();a=h.x,i=h.y}return{x:a,y:i}}};function jt(e,t){return t&&(et(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function ae(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function Qz(e,t){const{element:a,datasetIndex:i,index:n}=t,s=e.getDatasetMeta(i).controller,{label:o,value:r}=s.getLabelAndValue(n);return{chart:e,label:o,parsed:s.getParsed(n),raw:e.data.datasets[i].data[n],formattedValue:r,dataset:s.getDataset(),dataIndex:n,datasetIndex:i,element:a}}function J0(e,t){const a=e.chart.ctx,{body:i,footer:n,title:s}=e,{boxWidth:o,boxHeight:r}=t,h=ct(t.bodyFont),c=ct(t.titleFont),d=ct(t.footerFont),p=s.length,u=n.length,g=i.length,M=mt(t.padding);let m=M.height,v=0,b=i.reduce((k,_)=>k+_.before.length+_.lines.length+_.after.length,0);if(b+=e.beforeBody.length+e.afterBody.length,p&&(m+=p*c.lineHeight+(p-1)*t.titleSpacing+t.titleMarginBottom),b){const k=t.displayColors?Math.max(r,h.lineHeight):h.lineHeight;m+=g*k+(b-g)*h.lineHeight+(b-1)*t.bodySpacing}u&&(m+=t.footerMarginTop+u*d.lineHeight+(u-1)*t.footerSpacing);let w=0;const S=function(k){v=Math.max(v,a.measureText(k).width+w)};return a.save(),a.font=c.string,K(e.title,S),a.font=h.string,K(e.beforeBody.concat(e.afterBody),S),w=t.displayColors?o+2+t.boxPadding:0,K(i,k=>{K(k.before,S),K(k.lines,S),K(k.after,S)}),w=0,a.font=d.string,K(e.footer,S),a.restore(),v+=M.width,{width:v,height:m}}function Jz(e,t){const{y:a,height:i}=t;return a<i/2?"top":a>e.height-i/2?"bottom":"center"}function tB(e,t,a,i){const{x:n,width:s}=i,o=a.caretSize+a.caretPadding;if(e==="left"&&n+s+o>t.width||e==="right"&&n-s-o<0)return!0}function eB(e,t,a,i){const{x:n,width:s}=a,{width:o,chartArea:{left:r,right:h}}=e;let c="center";return i==="center"?c=n<=(r+h)/2?"left":"right":n<=s/2?c="left":n>=o-s/2&&(c="right"),tB(c,e,t,a)&&(c="center"),c}function tc(e,t,a){const i=a.yAlign||t.yAlign||Jz(e,a);return{xAlign:a.xAlign||t.xAlign||eB(e,t,a,i),yAlign:i}}function aB(e,t){let{x:a,width:i}=e;return t==="right"?a-=i:t==="center"&&(a-=i/2),a}function iB(e,t,a){let{y:i,height:n}=e;return t==="top"?i+=a:t==="bottom"?i-=n+a:i-=n/2,i}function ec(e,t,a,i){const{caretSize:n,caretPadding:s,cornerRadius:o}=e,{xAlign:r,yAlign:h}=a,c=n+s,{topLeft:d,topRight:p,bottomLeft:u,bottomRight:g}=We(o);let M=aB(t,r);const m=iB(t,h,c);return h==="center"?r==="left"?M+=c:r==="right"&&(M-=c):r==="left"?M-=Math.max(d,u)+n:r==="right"&&(M+=Math.max(p,g)+n),{x:dt(M,0,i.width-t.width),y:dt(m,0,i.height-t.height)}}function Di(e,t,a){const i=mt(a.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-i.right:e.x+i.left}function ac(e){return jt([],ae(e))}function nB(e,t,a){return Ce(e,{tooltip:t,tooltipItems:a,type:"tooltip"})}function ic(e,t){const a=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return a?e.override(a):e}const El={beforeTitle:te,title(e){if(e.length>0){const t=e[0],a=t.chart.data.labels,i=a?a.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return a[t.dataIndex]}return""},afterTitle:te,beforeBody:te,beforeLabel:te,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const a=e.formattedValue;return W(a)||(t+=a),t},labelColor(e){const a=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:a.borderColor,backgroundColor:a.backgroundColor,borderWidth:a.borderWidth,borderDash:a.borderDash,borderDashOffset:a.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const a=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:a.pointStyle,rotation:a.rotation}},afterLabel:te,afterBody:te,beforeFooter:te,footer:te,afterFooter:te};function _t(e,t,a,i){const n=e[t].call(a,i);return typeof n>"u"?El[t].call(a,i):n}class Ss extends he{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const a=this.chart,i=this.options.setContext(this.getContext()),n=i.enabled&&a.options.animation&&i.animations,s=new sl(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=nB(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,a){const{callbacks:i}=a,n=_t(i,"beforeTitle",this,t),s=_t(i,"title",this,t),o=_t(i,"afterTitle",this,t);let r=[];return r=jt(r,ae(n)),r=jt(r,ae(s)),r=jt(r,ae(o)),r}getBeforeBody(t,a){return ac(_t(a.callbacks,"beforeBody",this,t))}getBody(t,a){const{callbacks:i}=a,n=[];return K(t,s=>{const o={before:[],lines:[],after:[]},r=ic(i,s);jt(o.before,ae(_t(r,"beforeLabel",this,s))),jt(o.lines,_t(r,"label",this,s)),jt(o.after,ae(_t(r,"afterLabel",this,s))),n.push(o)}),n}getAfterBody(t,a){return ac(_t(a.callbacks,"afterBody",this,t))}getFooter(t,a){const{callbacks:i}=a,n=_t(i,"beforeFooter",this,t),s=_t(i,"footer",this,t),o=_t(i,"afterFooter",this,t);let r=[];return r=jt(r,ae(n)),r=jt(r,ae(s)),r=jt(r,ae(o)),r}_createItems(t){const a=this._active,i=this.chart.data,n=[],s=[],o=[];let r=[],h,c;for(h=0,c=a.length;h<c;++h)r.push(Qz(this.chart,a[h]));return t.filter&&(r=r.filter((d,p,u)=>t.filter(d,p,u,i))),t.itemSort&&(r=r.sort((d,p)=>t.itemSort(d,p,i))),K(r,d=>{const p=ic(t.callbacks,d);n.push(_t(p,"labelColor",this,d)),s.push(_t(p,"labelPointStyle",this,d)),o.push(_t(p,"labelTextColor",this,d))}),this.labelColors=n,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=r,r}update(t,a){const i=this.options.setContext(this.getContext()),n=this._active;let s,o=[];if(!n.length)this.opacity!==0&&(s={opacity:0});else{const r=Na[i.position].call(this,n,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const h=this._size=J0(this,i),c=Object.assign({},r,h),d=tc(this.chart,i,c),p=ec(i,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,s={opacity:1,x:p.x,y:p.y,width:h.width,height:h.height,caretX:r.x,caretY:r.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:a})}drawCaret(t,a,i,n){const s=this.getCaretPosition(t,i,n);a.lineTo(s.x1,s.y1),a.lineTo(s.x2,s.y2),a.lineTo(s.x3,s.y3)}getCaretPosition(t,a,i){const{xAlign:n,yAlign:s}=this,{caretSize:o,cornerRadius:r}=i,{topLeft:h,topRight:c,bottomLeft:d,bottomRight:p}=We(r),{x:u,y:g}=t,{width:M,height:m}=a;let v,b,w,S,k,_;return s==="center"?(k=g+m/2,n==="left"?(v=u,b=v-o,S=k+o,_=k-o):(v=u+M,b=v+o,S=k-o,_=k+o),w=v):(n==="left"?b=u+Math.max(h,d)+o:n==="right"?b=u+M-Math.max(c,p)-o:b=this.caretX,s==="top"?(S=g,k=S-o,v=b-o,w=b+o):(S=g+m,k=S+o,v=b+o,w=b-o),_=S),{x1:v,x2:b,x3:w,y1:S,y2:k,y3:_}}drawTitle(t,a,i){const n=this.title,s=n.length;let o,r,h;if(s){const c=da(i.rtl,this.x,this.width);for(t.x=Di(this,i.titleAlign,i),a.textAlign=c.textAlign(i.titleAlign),a.textBaseline="middle",o=ct(i.titleFont),r=i.titleSpacing,a.fillStyle=i.titleColor,a.font=o.string,h=0;h<s;++h)a.fillText(n[h],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+r,h+1===s&&(t.y+=i.titleMarginBottom-r)}}_drawColorBox(t,a,i,n,s){const o=this.labelColors[i],r=this.labelPointStyles[i],{boxHeight:h,boxWidth:c}=s,d=ct(s.bodyFont),p=Di(this,"left",s),u=n.x(p),g=h<d.lineHeight?(d.lineHeight-h)/2:0,M=a.y+g;if(s.usePointStyle){const m={radius:Math.min(c,h)/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:1},v=n.leftForLtr(u,c)+c/2,b=M+h/2;t.strokeStyle=s.multiKeyBackground,t.fillStyle=s.multiKeyBackground,xs(t,m,v,b),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,xs(t,m,v,b)}else{t.lineWidth=j(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const m=n.leftForLtr(u,c),v=n.leftForLtr(n.xPlus(u,1),c-2),b=We(o.borderRadius);Object.values(b).some(w=>w!==0)?(t.beginPath(),t.fillStyle=s.multiKeyBackground,Ga(t,{x:m,y:M,w:c,h,radius:b}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Ga(t,{x:v,y:M+1,w:c-2,h:h-2,radius:b}),t.fill()):(t.fillStyle=s.multiKeyBackground,t.fillRect(m,M,c,h),t.strokeRect(m,M,c,h),t.fillStyle=o.backgroundColor,t.fillRect(v,M+1,c-2,h-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,a,i){const{body:n}=this,{bodySpacing:s,bodyAlign:o,displayColors:r,boxHeight:h,boxWidth:c,boxPadding:d}=i,p=ct(i.bodyFont);let u=p.lineHeight,g=0;const M=da(i.rtl,this.x,this.width),m=function(H){a.fillText(H,M.x(t.x+g),t.y+u/2),t.y+=u+s},v=M.textAlign(o);let b,w,S,k,_,E,T;for(a.textAlign=o,a.textBaseline="middle",a.font=p.string,t.x=Di(this,v,i),a.fillStyle=i.bodyColor,K(this.beforeBody,m),g=r&&v!=="right"?o==="center"?c/2+d:c+2+d:0,k=0,E=n.length;k<E;++k){for(b=n[k],w=this.labelTextColors[k],a.fillStyle=w,K(b.before,m),S=b.lines,r&&S.length&&(this._drawColorBox(a,t,k,M,i),u=Math.max(p.lineHeight,h)),_=0,T=S.length;_<T;++_)m(S[_]),u=p.lineHeight;K(b.after,m)}g=0,u=p.lineHeight,K(this.afterBody,m),t.y-=s}drawFooter(t,a,i){const n=this.footer,s=n.length;let o,r;if(s){const h=da(i.rtl,this.x,this.width);for(t.x=Di(this,i.footerAlign,i),t.y+=i.footerMarginTop,a.textAlign=h.textAlign(i.footerAlign),a.textBaseline="middle",o=ct(i.footerFont),a.fillStyle=i.footerColor,a.font=o.string,r=0;r<s;++r)a.fillText(n[r],h.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,a,i,n){const{xAlign:s,yAlign:o}=this,{x:r,y:h}=t,{width:c,height:d}=i,{topLeft:p,topRight:u,bottomLeft:g,bottomRight:M}=We(n.cornerRadius);a.fillStyle=n.backgroundColor,a.strokeStyle=n.borderColor,a.lineWidth=n.borderWidth,a.beginPath(),a.moveTo(r+p,h),o==="top"&&this.drawCaret(t,a,i,n),a.lineTo(r+c-u,h),a.quadraticCurveTo(r+c,h,r+c,h+u),o==="center"&&s==="right"&&this.drawCaret(t,a,i,n),a.lineTo(r+c,h+d-M),a.quadraticCurveTo(r+c,h+d,r+c-M,h+d),o==="bottom"&&this.drawCaret(t,a,i,n),a.lineTo(r+g,h+d),a.quadraticCurveTo(r,h+d,r,h+d-g),o==="center"&&s==="left"&&this.drawCaret(t,a,i,n),a.lineTo(r,h+p),a.quadraticCurveTo(r,h,r+p,h),a.closePath(),a.fill(),n.borderWidth>0&&a.stroke()}_updateAnimationTarget(t){const a=this.chart,i=this.$animations,n=i&&i.x,s=i&&i.y;if(n||s){const o=Na[t.position].call(this,this._active,this._eventPosition);if(!o)return;const r=this._size=J0(this,t),h=Object.assign({},o,this._size),c=tc(a,t,h),d=ec(t,h,c,a);(n._to!==d.x||s._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=r.width,this.height=r.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const a=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(a);const n={width:this.width,height:this.height},s={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=mt(a.padding),r=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;a.enabled&&r&&(t.save(),t.globalAlpha=i,this.drawBackground(s,t,n,a),Jc(t,a.textDirection),s.y+=o.top,this.drawTitle(s,t,a),this.drawBody(s,t,a),this.drawFooter(s,t,a),tl(t,a.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,a){const i=this._active,n=t.map(({datasetIndex:r,index:h})=>{const c=this.chart.getDatasetMeta(r);if(!c)throw new Error("Cannot find a dataset at index "+r);return{datasetIndex:r,element:c.data[h],index:h}}),s=!Qi(i,n),o=this._positionChanged(n,a);(s||o)&&(this._active=n,this._eventPosition=a,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,a,i=!0){if(a&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,s=this._active||[],o=this._getActiveElements(t,s,a,i),r=this._positionChanged(o,t),h=a||!Qi(o,s)||r;return h&&(this._active=o,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,a))),h}_getActiveElements(t,a,i,n){const s=this.options;if(t.type==="mouseout")return[];if(!n)return a.filter(r=>this.chart.data.datasets[r.datasetIndex]&&this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,s.mode,s,i);return s.reverse&&o.reverse(),o}_positionChanged(t,a){const{caretX:i,caretY:n,options:s}=this,o=Na[s.position].call(this,t,a);return o!==!1&&(i!==o.x||n!==o.y)}}O(Ss,"positioners",Na);var sB={id:"tooltip",_element:Ss,positioners:Na,afterInit(e,t,a){a&&(e.tooltip=new Ss({chart:e,options:a}))},beforeUpdate(e,t,a){e.tooltip&&e.tooltip.initialize(a)},reset(e,t,a){e.tooltip&&e.tooltip.initialize(a)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const a={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...a,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",a)}},afterEvent(e,t){if(e.tooltip){const a=t.replay;e.tooltip.handleEvent(t.event,a,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:El},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},oB=Object.freeze({__proto__:null,Colors:vz,Decimation:wz,Filler:$z,Legend:Yz,SubTitle:Gz,Title:Xz,Tooltip:sB});const rB=(e,t,a,i)=>(typeof t=="string"?(a=e.push(t)-1,i.unshift({index:a,label:t})):isNaN(t)&&(a=null),a);function hB(e,t,a,i){const n=e.indexOf(t);if(n===-1)return rB(e,t,a,i);const s=e.lastIndexOf(t);return n!==s?a:n}const cB=(e,t)=>e===null?null:dt(Math.round(e),0,t);function nc(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class ks extends Ke{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const a=this._addedLabels;if(a.length){const i=this.getLabels();for(const{index:n,label:s}of a)i[n]===s&&i.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,a){if(W(t))return null;const i=this.getLabels();return a=isFinite(a)&&i[a]===t?a:hB(i,t,N(a,t),this._addedLabels),cB(a,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:a}=this.getUserBounds();let{min:i,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),a||(n=this.getLabels().length-1)),this.min=i,this.max=n}buildTicks(){const t=this.min,a=this.max,i=this.options.offset,n=[];let s=this.getLabels();s=t===0&&a===s.length-1?s:s.slice(t,a+1),this._valueRange=Math.max(s.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=a;o++)n.push({value:o});return n}getLabelForValue(t){return nc.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const a=this.ticks;return t<0||t>a.length-1?null:this.getPixelForValue(a[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}O(ks,"id","category"),O(ks,"defaults",{ticks:{callback:nc}});function lB(e,t){const a=[],{bounds:n,step:s,min:o,max:r,precision:h,count:c,maxTicks:d,maxDigits:p,includeBounds:u}=e,g=s||1,M=d-1,{min:m,max:v}=t,b=!W(o),w=!W(r),S=!W(c),k=(v-m)/(p+1);let _=Jh((v-m)/M/g)*g,E,T,H,D;if(_<1e-14&&!b&&!w)return[{value:m},{value:v}];D=Math.ceil(v/_)-Math.floor(m/_),D>M&&(_=Jh(D*_/M/g)*g),W(h)||(E=Math.pow(10,h),_=Math.ceil(_*E)/E),n==="ticks"?(T=Math.floor(m/_)*_,H=Math.ceil(v/_)*_):(T=m,H=v),b&&w&&s&&aD((r-o)/s,_/1e3)?(D=Math.round(Math.min((r-o)/_,d)),_=(r-o)/D,T=o,H=r):S?(T=b?o:T,H=w?r:H,D=c-1,_=(H-T)/D):(D=(H-T)/_,Wa(D,Math.round(D),_/1e3)?D=Math.round(D):D=Math.ceil(D));const z=Math.max(t0(_),t0(T));E=Math.pow(10,W(h)?z:h),T=Math.round(T*E)/E,H=Math.round(H*E)/E;let R=0;for(b&&(u&&T!==o?(a.push({value:o}),T<o&&R++,Wa(Math.round((T+R*_)*E)/E,o,sc(o,k,e))&&R++):T<o&&R++);R<D;++R){const $=Math.round((T+R*_)*E)/E;if(w&&$>r)break;a.push({value:$})}return w&&u&&H!==r?a.length&&Wa(a[a.length-1].value,r,sc(r,k,e))?a[a.length-1].value=r:a.push({value:r}):(!w||H===r)&&a.push({value:H}),a}function sc(e,t,{horizontal:a,minRotation:i}){const n=Nt(i),s=(a?Math.sin(n):Math.cos(n))||.001,o=.75*t*(""+e).length;return Math.min(t/s,o)}class on extends Ke{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,a){return W(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:a,maxDefined:i}=this.getUserBounds();let{min:n,max:s}=this;const o=h=>n=a?n:h,r=h=>s=i?s:h;if(t){const h=Zt(n),c=Zt(s);h<0&&c<0?r(0):h>0&&c>0&&o(0)}if(n===s){let h=s===0?1:Math.abs(s*.05);r(s+h),t||o(n-h)}this.min=n,this.max=s}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:a,stepSize:i}=t,n;return i?(n=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),a=a||11),a&&(n=Math.min(a,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,a=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const n={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:a.precision,step:a.stepSize,count:a.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:a.minRotation||0,includeBounds:a.includeBounds!==!1},s=this._range||this,o=lB(n,s);return t.bounds==="ticks"&&Rc(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let a=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const n=(i-a)/Math.max(t.length-1,1)/2;a-=n,i+=n}this._startValue=a,this._endValue=i,this._valueRange=i-a}getLabelForValue(t){return ai(t,this.chart.options.locale,this.options.ticks.format)}}class Ls extends on{determineDataLimits(){const{min:t,max:a}=this.getMinMax(!0);this.min=it(t)?t:0,this.max=it(a)?a:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),a=t?this.width:this.height,i=Nt(this.options.ticks.minRotation),n=(t?Math.sin(i):Math.cos(i))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(a/Math.min(40,s.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}O(Ls,"id","linear"),O(Ls,"defaults",{ticks:{callback:mn.formatters.numeric}});const Ja=e=>Math.floor(Me(e)),ze=(e,t)=>Math.pow(10,Ja(e)+t);function oc(e){return e/Math.pow(10,Ja(e))===1}function rc(e,t,a){const i=Math.pow(10,a),n=Math.floor(e/i);return Math.ceil(t/i)-n}function dB(e,t){const a=t-e;let i=Ja(a);for(;rc(e,t,i)>10;)i++;for(;rc(e,t,i)<10;)i--;return Math.min(i,Ja(e))}function pB(e,{min:t,max:a}){t=St(e.min,t);const i=[],n=Ja(t);let s=dB(t,a),o=s<0?Math.pow(10,Math.abs(s)):1;const r=Math.pow(10,s),h=n>s?Math.pow(10,n):0,c=Math.round((t-h)*o)/o,d=Math.floor((t-h)/r/10)*r*10;let p=Math.floor((c-d)/Math.pow(10,s)),u=St(e.min,Math.round((h+d+p*Math.pow(10,s))*o)/o);for(;u<a;)i.push({value:u,major:oc(u),significand:p}),p>=10?p=p<15?15:20:p++,p>=20&&(s++,p=2,o=s>=0?1:o),u=Math.round((h+d+p*Math.pow(10,s))*o)/o;const g=St(e.max,u);return i.push({value:g,major:oc(g),significand:p}),i}class Ts extends Ke{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,a){const i=on.prototype.parse.apply(this,[t,a]);if(i===0){this._zero=!0;return}return it(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:a}=this.getMinMax(!0);this.min=it(t)?Math.max(0,t):null,this.max=it(a)?Math.max(0,a):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!it(this._userMin)&&(this.min=t===ze(this.min,0)?ze(this.min,-1):ze(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:a}=this.getUserBounds();let i=this.min,n=this.max;const s=r=>i=t?i:r,o=r=>n=a?n:r;i===n&&(i<=0?(s(1),o(10)):(s(ze(i,-1)),o(ze(n,1)))),i<=0&&s(ze(n,-1)),n<=0&&o(ze(i,1)),this.min=i,this.max=n}buildTicks(){const t=this.options,a={min:this._userMin,max:this._userMax},i=pB(a,this);return t.bounds==="ticks"&&Rc(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":ai(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Me(t),this._valueRange=Me(this.max)-Me(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Me(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const a=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+a*this._valueRange)}}O(Ts,"id","logarithmic"),O(Ts,"defaults",{ticks:{callback:mn.formatters.logarithmic,major:{enabled:!0}}});function Hs(e){const t=e.ticks;if(t.display&&e.display){const a=mt(t.backdropPadding);return N(t.font&&t.font.size,at.font.size)+a.height}return 0}function uB(e,t,a){return a=et(a)?a:[a],{w:yD(e,t.string,a),h:a.length*t.lineHeight}}function hc(e,t,a,i,n){return e===i||e===n?{start:t-a/2,end:t+a/2}:e<i||e>n?{start:t-a,end:t}:{start:t,end:t+a}}function fB(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},a=Object.assign({},t),i=[],n=[],s=e._pointLabels.length,o=e.options.pointLabels,r=o.centerPointLabels?U/s:0;for(let h=0;h<s;h++){const c=o.setContext(e.getPointLabelContext(h));n[h]=c.padding;const d=e.getPointPosition(h,e.drawingArea+n[h],r),p=ct(c.font),u=uB(e.ctx,p,e._pointLabels[h]);i[h]=u;const g=ft(e.getIndexAngle(h)+r),M=Math.round($s(g)),m=hc(M,d.x,u.w,0,180),v=hc(M,d.y,u.h,90,270);gB(a,t,g,m,v)}e.setCenterPoint(t.l-a.l,a.r-t.r,t.t-a.t,a.b-t.b),e._pointLabelItems=vB(e,i,n)}function gB(e,t,a,i,n){const s=Math.abs(Math.sin(a)),o=Math.abs(Math.cos(a));let r=0,h=0;i.start<t.l?(r=(t.l-i.start)/s,e.l=Math.min(e.l,t.l-r)):i.end>t.r&&(r=(i.end-t.r)/s,e.r=Math.max(e.r,t.r+r)),n.start<t.t?(h=(t.t-n.start)/o,e.t=Math.min(e.t,t.t-h)):n.end>t.b&&(h=(n.end-t.b)/o,e.b=Math.max(e.b,t.b+h))}function mB(e,t,a){const i=e.drawingArea,{extra:n,additionalAngle:s,padding:o,size:r}=a,h=e.getPointPosition(t,i+n+o,s),c=Math.round($s(ft(h.angle+ot))),d=bB(h.y,r.h,c),p=yB(c),u=xB(h.x,r.w,p);return{visible:!0,x:h.x,y:d,textAlign:p,left:u,top:d,right:u+r.w,bottom:d+r.h}}function MB(e,t){if(!t)return!0;const{left:a,top:i,right:n,bottom:s}=e;return!(oe({x:a,y:i},t)||oe({x:a,y:s},t)||oe({x:n,y:i},t)||oe({x:n,y:s},t))}function vB(e,t,a){const i=[],n=e._pointLabels.length,s=e.options,{centerPointLabels:o,display:r}=s.pointLabels,h={extra:Hs(s)/2,additionalAngle:o?U/n:0};let c;for(let d=0;d<n;d++){h.padding=a[d],h.size=t[d];const p=mB(e,d,h);i.push(p),r==="auto"&&(p.visible=MB(p,c),p.visible&&(c=p))}return i}function yB(e){return e===0||e===180?"center":e<180?"left":"right"}function xB(e,t,a){return a==="right"?e-=t:a==="center"&&(e-=t/2),e}function bB(e,t,a){return a===90||a===270?e-=t/2:(a>270||a<90)&&(e-=t),e}function wB(e,t,a){const{left:i,top:n,right:s,bottom:o}=a,{backdropColor:r}=t;if(!W(r)){const h=We(t.borderRadius),c=mt(t.backdropPadding);e.fillStyle=r;const d=i-c.left,p=n-c.top,u=s-i+c.width,g=o-n+c.height;Object.values(h).some(M=>M!==0)?(e.beginPath(),Ga(e,{x:d,y:p,w:u,h:g,radius:h}),e.fill()):e.fillRect(d,p,u,g)}}function _B(e,t){const{ctx:a,options:{pointLabels:i}}=e;for(let n=t-1;n>=0;n--){const s=e._pointLabelItems[n];if(!s.visible)continue;const o=i.setContext(e.getPointLabelContext(n));wB(a,o,s);const r=ct(o.font),{x:h,y:c,textAlign:d}=s;Ze(a,e._pointLabels[n],h,c+r.lineHeight/2,r,{color:o.color,textAlign:d,textBaseline:"middle"})}}function Sl(e,t,a,i){const{ctx:n}=e;if(a)n.arc(e.xCenter,e.yCenter,t,0,tt);else{let s=e.getPointPosition(0,t);n.moveTo(s.x,s.y);for(let o=1;o<i;o++)s=e.getPointPosition(o,t),n.lineTo(s.x,s.y)}}function AB(e,t,a,i,n){const s=e.ctx,o=t.circular,{color:r,lineWidth:h}=t;!o&&!i||!r||!h||a<0||(s.save(),s.strokeStyle=r,s.lineWidth=h,s.setLineDash(n.dash||[]),s.lineDashOffset=n.dashOffset,s.beginPath(),Sl(e,a,o,i),s.closePath(),s.stroke(),s.restore())}function CB(e,t,a){return Ce(e,{label:a,index:t,type:"pointLabel"})}class Fa extends on{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=mt(Hs(this.options)/2),a=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+a/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(a,i)/2)}determineDataLimits(){const{min:t,max:a}=this.getMinMax(!1);this.min=it(t)&&!isNaN(t)?t:0,this.max=it(a)&&!isNaN(a)?a:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Hs(this.options))}generateTickLabels(t){on.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((a,i)=>{const n=G(this.options.pointLabels.callback,[a,i],this);return n||n===0?n:""}).filter((a,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?fB(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,a,i,n){this.xCenter+=Math.floor((t-a)/2),this.yCenter+=Math.floor((i-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,a,i,n))}getIndexAngle(t){const a=tt/(this._pointLabels.length||1),i=this.options.startAngle||0;return ft(t*a+Nt(i))}getDistanceFromCenterForValue(t){if(W(t))return NaN;const a=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*a:(t-this.min)*a}getValueForDistanceFromCenter(t){if(W(t))return NaN;const a=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-a:this.min+a}getPointLabelContext(t){const a=this._pointLabels||[];if(t>=0&&t<a.length){const i=a[t];return CB(this.getContext(),t,i)}}getPointPosition(t,a,i=0){const n=this.getIndexAngle(t)-ot+i;return{x:Math.cos(n)*a+this.xCenter,y:Math.sin(n)*a+this.yCenter,angle:n}}getPointPositionForValue(t,a){return this.getPointPosition(t,this.getDistanceFromCenterForValue(a))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:a,top:i,right:n,bottom:s}=this._pointLabelItems[t];return{left:a,top:i,right:n,bottom:s}}drawBackground(){const{backgroundColor:t,grid:{circular:a}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Sl(this,this.getDistanceFromCenterForValue(this._endValue),a,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,a=this.options,{angleLines:i,grid:n,border:s}=a,o=this._pointLabels.length;let r,h,c;if(a.pointLabels.display&&_B(this,o),n.display&&this.ticks.forEach((d,p)=>{if(p!==0||p===0&&this.min<0){h=this.getDistanceFromCenterForValue(d.value);const u=this.getContext(p),g=n.setContext(u),M=s.setContext(u);AB(this,g,h,o,M)}}),i.display){for(t.save(),r=o-1;r>=0;r--){const d=i.setContext(this.getPointLabelContext(r)),{color:p,lineWidth:u}=d;!u||!p||(t.lineWidth=u,t.strokeStyle=p,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,h=this.getDistanceFromCenterForValue(a.reverse?this.min:this.max),c=this.getPointPosition(r,h),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,a=this.options,i=a.ticks;if(!i.display)return;const n=this.getIndexAngle(0);let s,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((r,h)=>{if(h===0&&this.min>=0&&!a.reverse)return;const c=i.setContext(this.getContext(h)),d=ct(c.font);if(s=this.getDistanceFromCenterForValue(this.ticks[h].value),c.showLabelBackdrop){t.font=d.string,o=t.measureText(r.label).width,t.fillStyle=c.backdropColor;const p=mt(c.backdropPadding);t.fillRect(-o/2-p.left,-s-d.size/2-p.top,o+p.width,d.size+p.height)}Ze(t,r.label,0,-s,d,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}O(Fa,"id","radialLinear"),O(Fa,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:mn.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),O(Fa,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),O(Fa,"descriptors",{angleLines:{_fallback:"grid"}});const wn={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ct=Object.keys(wn);function cc(e,t){return e-t}function lc(e,t){if(W(t))return null;const a=e._adapter,{parser:i,round:n,isoWeekday:s}=e._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),it(o)||(o=typeof i=="string"?a.parse(o,i):a.parse(o)),o===null?null:(n&&(o=n==="week"&&(fa(s)||s===!0)?a.startOf(o,"isoWeek",s):a.startOf(o,n)),+o)}function dc(e,t,a,i){const n=Ct.length;for(let s=Ct.indexOf(e);s<n-1;++s){const o=wn[Ct[s]],r=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((a-t)/(r*o.size))<=i)return Ct[s]}return Ct[n-1]}function EB(e,t,a,i,n){for(let s=Ct.length-1;s>=Ct.indexOf(a);s--){const o=Ct[s];if(wn[o].common&&e._adapter.diff(n,i,o)>=t-1)return o}return Ct[a?Ct.indexOf(a):0]}function SB(e){for(let t=Ct.indexOf(e)+1,a=Ct.length;t<a;++t)if(wn[Ct[t]].common)return Ct[t]}function pc(e,t,a){if(!a)e[t]=!0;else if(a.length){const{lo:i,hi:n}=Ws(a,t),s=a[i]>=t?a[i]:a[n];e[s]=!0}}function kB(e,t,a,i){const n=e._adapter,s=+n.startOf(t[0].value,i),o=t[t.length-1].value;let r,h;for(r=s;r<=o;r=+n.add(r,1,i))h=a[r],h>=0&&(t[h].major=!0);return t}function uc(e,t,a){const i=[],n={},s=t.length;let o,r;for(o=0;o<s;++o)r=t[o],n[r]=o,i.push({value:r,major:!1});return s===0||!a?i:kB(e,i,n,a)}class ti extends Ke{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,a={}){const i=t.time||(t.time={}),n=this._adapter=new RR._date(t.adapters.date);n.init(a),$a(i.displayFormats,n.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=a.normalized}parse(t,a){return t===void 0?null:lc(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,a=this._adapter,i=t.time.unit||"day";let{min:n,max:s,minDefined:o,maxDefined:r}=this.getUserBounds();function h(c){!o&&!isNaN(c.min)&&(n=Math.min(n,c.min)),!r&&!isNaN(c.max)&&(s=Math.max(s,c.max))}(!o||!r)&&(h(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&h(this.getMinMax(!1))),n=it(n)&&!isNaN(n)?n:+a.startOf(Date.now(),i),s=it(s)&&!isNaN(s)?s:+a.endOf(Date.now(),i)+1,this.min=Math.min(n,s-1),this.max=Math.max(n+1,s)}_getLabelBounds(){const t=this.getLabelTimestamps();let a=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(a=t[0],i=t[t.length-1]),{min:a,max:i}}buildTicks(){const t=this.options,a=t.time,i=t.ticks,n=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const s=this.min,o=this.max,r=oD(n,s,o);return this._unit=a.unit||(i.autoSkip?dc(a.minUnit,this.min,this.max,this._getLabelCapacity(s)):EB(this,r.length,a.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:SB(this._unit),this.initOffsets(n),t.reverse&&r.reverse(),uc(this,r,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let a=0,i=0,n,s;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?a=1-n:a=(this.getDecimalForValue(t[1])-n)/2,s=this.getDecimalForValue(t[t.length-1]),t.length===1?i=s:i=(s-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;a=dt(a,0,o),i=dt(i,0,o),this._offsets={start:a,end:i,factor:1/(a+1+i)}}_generate(){const t=this._adapter,a=this.min,i=this.max,n=this.options,s=n.time,o=s.unit||dc(s.minUnit,a,i,this._getLabelCapacity(a)),r=N(n.ticks.stepSize,1),h=o==="week"?s.isoWeekday:!1,c=fa(h)||h===!0,d={};let p=a,u,g;if(c&&(p=+t.startOf(p,"isoWeek",h)),p=+t.startOf(p,c?"day":o),t.diff(i,a,o)>1e5*r)throw new Error(a+" and "+i+" are too far apart with stepSize of "+r+" "+o);const M=n.ticks.source==="data"&&this.getDataTimestamps();for(u=p,g=0;u<i;u=+t.add(u,r,o),g++)pc(d,u,M);return(u===i||n.bounds==="ticks"||g===1)&&pc(d,u,M),Object.keys(d).sort(cc).map(m=>+m)}getLabelForValue(t){const a=this._adapter,i=this.options.time;return i.tooltipFormat?a.format(t,i.tooltipFormat):a.format(t,i.displayFormats.datetime)}format(t,a){const n=this.options.time.displayFormats,s=this._unit,o=a||n[s];return this._adapter.format(t,o)}_tickFormatFunction(t,a,i,n){const s=this.options,o=s.ticks.callback;if(o)return G(o,[t,a,i],this);const r=s.time.displayFormats,h=this._unit,c=this._majorUnit,d=h&&r[h],p=c&&r[c],u=i[a],g=c&&p&&u&&u.major;return this._adapter.format(t,n||(g?p:d))}generateTickLabels(t){let a,i,n;for(a=0,i=t.length;a<i;++a)n=t[a],n.label=this._tickFormatFunction(n.value,a,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const a=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((a.start+i)*a.factor)}getValueForPixel(t){const a=this._offsets,i=this.getDecimalForPixel(t)/a.factor-a.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const a=this.options.ticks,i=this.ctx.measureText(t).width,n=Nt(this.isHorizontal()?a.maxRotation:a.minRotation),s=Math.cos(n),o=Math.sin(n),r=this._resolveTickFontOptions(0).size;return{w:i*s+r*o,h:i*o+r*s}}_getLabelCapacity(t){const a=this.options.time,i=a.displayFormats,n=i[a.unit]||i.millisecond,s=this._tickFormatFunction(t,0,uc(this,[t],this._majorUnit),n),o=this._getLabelSize(s),r=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return r>0?r:1}getDataTimestamps(){let t=this._cache.data||[],a,i;if(t.length)return t;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(a=0,i=n.length;a<i;++a)t=t.concat(n[a].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let a,i;if(t.length)return t;const n=this.getLabels();for(a=0,i=n.length;a<i;++a)t.push(lc(this,n[a]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Bc(t.sort(cc))}}O(ti,"id","time"),O(ti,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Ri(e,t,a){let i=0,n=e.length-1,s,o,r,h;a?(t>=e[i].pos&&t<=e[n].pos&&({lo:i,hi:n}=se(e,"pos",t)),{pos:s,time:r}=e[i],{pos:o,time:h}=e[n]):(t>=e[i].time&&t<=e[n].time&&({lo:i,hi:n}=se(e,"time",t)),{time:s,pos:r}=e[i],{time:o,pos:h}=e[n]);const c=o-s;return c?r+(h-r)*(t-s)/c:r}class Vs extends ti{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),a=this._table=this.buildLookupTable(t);this._minPos=Ri(a,this.min),this._tableRange=Ri(a,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:a,max:i}=this,n=[],s=[];let o,r,h,c,d;for(o=0,r=t.length;o<r;++o)c=t[o],c>=a&&c<=i&&n.push(c);if(n.length<2)return[{time:a,pos:0},{time:i,pos:1}];for(o=0,r=n.length;o<r;++o)d=n[o+1],h=n[o-1],c=n[o],Math.round((d+h)/2)!==c&&s.push({time:c,pos:o/(r-1)});return s}_generate(){const t=this.min,a=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(a)||i.length===1)&&i.push(a),i.sort((n,s)=>n-s)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const a=this.getDataTimestamps(),i=this.getLabelTimestamps();return a.length&&i.length?t=this.normalize(a.concat(i)):t=a.length?a:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Ri(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const a=this._offsets,i=this.getDecimalForPixel(t)/a.factor-a.end;return Ri(this._table,i*this._tableRange+this._minPos,!0)}}O(Vs,"id","timeseries"),O(Vs,"defaults",ti.defaults);var LB=Object.freeze({__proto__:null,CategoryScale:ks,LinearScale:Ls,LogarithmicScale:Ts,RadialLinearScale:Fa,TimeScale:ti,TimeSeriesScale:Vs});const TB=[DR,dz,oB,LB];Bt.register(...TB);var ds=function(){return b4.Date.now()},HB=/\s/;function VB(e){for(var t=e.length;t--&&HB.test(e.charAt(t)););return t}var PB=/^\s+/;function OB(e){return e&&e.slice(0,VB(e)+1).replace(PB,"")}var DB="[object Symbol]";function RB(e){return typeof e=="symbol"||w4(e)&&_4(e)==DB}var fc=NaN,IB=/^[-+]0x[0-9a-f]+$/i,zB=/^0b[01]+$/i,BB=/^0o[0-7]+$/i,NB=parseInt;function gc(e){if(typeof e=="number")return e;if(RB(e))return fc;if(Gi(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Gi(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=OB(e);var a=zB.test(e);return a||BB.test(e)?NB(e.slice(2),a?2:8):IB.test(e)?fc:+e}var FB="Expected a function",$B=Math.max,WB=Math.min;function Ki(e,t,a){var i,n,s,o,r,h,c=0,d=!1,p=!1,u=!0;if(typeof e!="function")throw new TypeError(FB);t=gc(t)||0,Gi(a)&&(d=!!a.leading,p="maxWait"in a,s=p?$B(gc(a.maxWait)||0,t):s,u="trailing"in a?!!a.trailing:u);function g(E){var T=i,H=n;return i=n=void 0,c=E,o=e.apply(H,T),o}function M(E){return c=E,r=setTimeout(b,t),d?g(E):o}function m(E){var T=E-h,H=E-c,D=t-T;return p?WB(D,s-H):D}function v(E){var T=E-h,H=E-c;return h===void 0||T>=t||T<0||p&&H>=s}function b(){var E=ds();if(v(E))return w(E);r=setTimeout(b,m(E))}function w(E){return r=void 0,u&&i?g(E):(i=n=void 0,o)}function S(){r!==void 0&&clearTimeout(r),c=0,i=h=n=r=void 0}function k(){return r===void 0?o:w(ds())}function _(){var E=ds(),T=v(E);if(i=arguments,n=this,h=E,T){if(r===void 0)return M(h);if(p)return clearTimeout(r),r=setTimeout(b,t),g(h)}return r===void 0&&(r=setTimeout(b,t)),o}return _.cancel=S,_.flush=k,_}var jB="Expected a function";function UB(e,t,a){var i=!0,n=!0;if(typeof e!="function")throw new TypeError(jB);return Gi(a)&&(i="leading"in a?!!a.leading:i,n="trailing"in a?!!a.trailing:n),Ki(e,t,{leading:i,maxWait:t,trailing:n})}var la=function(){return la=Object.assign||function(t){for(var a,i=1,n=arguments.length;i<n;i++){a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},la.apply(this,arguments)};function kl(e){return!e||!e.ownerDocument||!e.ownerDocument.defaultView?window:e.ownerDocument.defaultView}function Ll(e){return!e||!e.ownerDocument?document:e.ownerDocument}var Tl=function(e){var t={},a=Array.prototype.reduce.call(e,function(i,n){var s=n.name.match(/data-simplebar-(.+)/);if(s){var o=s[1].replace(/\W+(.)/g,function(r,h){return h.toUpperCase()});switch(n.value){case"true":i[o]=!0;break;case"false":i[o]=!1;break;case void 0:i[o]=!0;break;default:i[o]=n.value}}return i},t);return a};function Hl(e,t){var a;e&&(a=e.classList).add.apply(a,t.split(" "))}function Vl(e,t){e&&t.split(" ").forEach(function(a){e.classList.remove(a)})}function Pl(e){return".".concat(e.split(" ").join("."))}var t1=!!(typeof window<"u"&&window.document&&window.document.createElement),qB=Object.freeze({__proto__:null,addClasses:Hl,canUseDOM:t1,classNamesToQuery:Pl,getElementDocument:Ll,getElementWindow:kl,getOptions:Tl,removeClasses:Vl}),ca=null,mc=null;t1&&window.addEventListener("resize",function(){mc!==window.devicePixelRatio&&(mc=window.devicePixelRatio,ca=null)});function Mc(){if(ca===null){if(typeof document>"u")return ca=0,ca;var e=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),e.appendChild(t);var a=t.getBoundingClientRect().right;e.removeChild(t),ca=a}return ca}var ue=kl,ps=Ll,ZB=Tl,fe=Hl,ge=Vl,At=Pl,Xi=function(){function e(t,a){a===void 0&&(a={});var i=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.isDragging=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var n=ue(i.el);i.scrollXTicking||(n.requestAnimationFrame(i.scrollX),i.scrollXTicking=!0),i.scrollYTicking||(n.requestAnimationFrame(i.scrollY),i.scrollYTicking=!0),i.isScrolling||(i.isScrolling=!0,fe(i.el,i.classNames.scrolling)),i.showScrollbar("x"),i.showScrollbar("y"),i.onStopScrolling()},this.scrollX=function(){i.axis.x.isOverflowing&&i.positionScrollbar("x"),i.scrollXTicking=!1},this.scrollY=function(){i.axis.y.isOverflowing&&i.positionScrollbar("y"),i.scrollYTicking=!1},this._onStopScrolling=function(){ge(i.el,i.classNames.scrolling),i.options.autoHide&&(i.hideScrollbar("x"),i.hideScrollbar("y")),i.isScrolling=!1},this.onMouseEnter=function(){i.isMouseEntering||(fe(i.el,i.classNames.mouseEntered),i.showScrollbar("x"),i.showScrollbar("y"),i.isMouseEntering=!0),i.onMouseEntered()},this._onMouseEntered=function(){ge(i.el,i.classNames.mouseEntered),i.options.autoHide&&(i.hideScrollbar("x"),i.hideScrollbar("y")),i.isMouseEntering=!1},this._onMouseMove=function(n){i.mouseX=n.clientX,i.mouseY=n.clientY,(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&i.onMouseMoveForAxis("x"),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&i.onMouseMoveForAxis("y")},this.onMouseLeave=function(){i.onMouseMove.cancel(),(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&i.onMouseLeaveForAxis("x"),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&i.onMouseLeaveForAxis("y"),i.mouseX=-1,i.mouseY=-1},this._onWindowResize=function(){i.scrollbarWidth=i.getScrollbarWidth(),i.hideNativeScrollbar()},this.onPointerEvent=function(n){if(!(!i.axis.x.track.el||!i.axis.y.track.el||!i.axis.x.scrollbar.el||!i.axis.y.scrollbar.el)){var s,o;i.axis.x.track.rect=i.axis.x.track.el.getBoundingClientRect(),i.axis.y.track.rect=i.axis.y.track.el.getBoundingClientRect(),(i.axis.x.isOverflowing||i.axis.x.forceVisible)&&(s=i.isWithinBounds(i.axis.x.track.rect)),(i.axis.y.isOverflowing||i.axis.y.forceVisible)&&(o=i.isWithinBounds(i.axis.y.track.rect)),(s||o)&&(n.stopPropagation(),n.type==="pointerdown"&&n.pointerType!=="touch"&&(s&&(i.axis.x.scrollbar.rect=i.axis.x.scrollbar.el.getBoundingClientRect(),i.isWithinBounds(i.axis.x.scrollbar.rect)?i.onDragStart(n,"x"):i.onTrackClick(n,"x")),o&&(i.axis.y.scrollbar.rect=i.axis.y.scrollbar.el.getBoundingClientRect(),i.isWithinBounds(i.axis.y.scrollbar.rect)?i.onDragStart(n,"y"):i.onTrackClick(n,"y"))))}},this.drag=function(n){var s,o,r,h,c,d,p,u,g,M,m;if(!(!i.draggedAxis||!i.contentWrapperEl)){var v,b=i.axis[i.draggedAxis].track,w=(o=(s=b.rect)===null||s===void 0?void 0:s[i.axis[i.draggedAxis].sizeAttr])!==null&&o!==void 0?o:0,S=i.axis[i.draggedAxis].scrollbar,k=(h=(r=i.contentWrapperEl)===null||r===void 0?void 0:r[i.axis[i.draggedAxis].scrollSizeAttr])!==null&&h!==void 0?h:0,_=parseInt((d=(c=i.elStyles)===null||c===void 0?void 0:c[i.axis[i.draggedAxis].sizeAttr])!==null&&d!==void 0?d:"0px",10);n.preventDefault(),n.stopPropagation(),i.draggedAxis==="y"?v=n.pageY:v=n.pageX;var E=v-((u=(p=b.rect)===null||p===void 0?void 0:p[i.axis[i.draggedAxis].offsetAttr])!==null&&u!==void 0?u:0)-i.axis[i.draggedAxis].dragOffset;E=i.draggedAxis==="x"&&i.isRtl?((M=(g=b.rect)===null||g===void 0?void 0:g[i.axis[i.draggedAxis].sizeAttr])!==null&&M!==void 0?M:0)-S.size-E:E;var T=E/(w-S.size),H=T*(k-_);i.draggedAxis==="x"&&i.isRtl&&(H=!((m=e.getRtlHelpers())===null||m===void 0)&&m.isScrollingToNegative?-H:H),i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr]=H}},this.onEndDrag=function(n){i.isDragging=!1;var s=ps(i.el),o=ue(i.el);n.preventDefault(),n.stopPropagation(),ge(i.el,i.classNames.dragging),i.onStopScrolling(),s.removeEventListener("mousemove",i.drag,!0),s.removeEventListener("mouseup",i.onEndDrag,!0),i.removePreventClickId=o.setTimeout(function(){s.removeEventListener("click",i.preventClick,!0),s.removeEventListener("dblclick",i.preventClick,!0),i.removePreventClickId=null})},this.preventClick=function(n){n.preventDefault(),n.stopPropagation()},this.el=t,this.options=la(la({},e.defaultOptions),a),this.classNames=la(la({},e.defaultOptions.classNames),a.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},typeof this.el!="object"||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=UB(this._onMouseMove,64),this.onWindowResize=Ki(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=Ki(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=Ki(this._onMouseEntered,this.stopScrollDelay),this.init()}return e.getRtlHelpers=function(){if(e.rtlHelpers)return e.rtlHelpers;var t=document.createElement("div");t.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var a=t.firstElementChild,i=a==null?void 0:a.firstElementChild;if(!i)return null;document.body.appendChild(a),a.scrollLeft=0;var n=e.getOffset(a),s=e.getOffset(i);a.scrollLeft=-999;var o=e.getOffset(i);return document.body.removeChild(a),e.rtlHelpers={isScrollOriginAtZero:n.left!==s.left,isScrollingToNegative:s.left!==o.left},e.rtlHelpers},e.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display==="none"||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:Mc()}catch{return Mc()}},e.getOffset=function(t){var a=t.getBoundingClientRect(),i=ps(t),n=ue(t);return{top:a.top+(n.pageYOffset||i.documentElement.scrollTop),left:a.left+(n.pageXOffset||i.documentElement.scrollLeft)}},e.prototype.init=function(){t1&&(this.initDOM(),this.rtlHelpers=e.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.prototype.initDOM=function(){var t,a;this.wrapperEl=this.el.querySelector(At(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(At(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(At(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(At(this.classNames.offset)),this.maskEl=this.el.querySelector(At(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,At(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(At(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(At(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(At(this.classNames.track)).concat(At(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(At(this.classNames.track)).concat(At(this.classNames.vertical))),this.axis.x.scrollbar.el=((t=this.axis.x.track.el)===null||t===void 0?void 0:t.querySelector(At(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=((a=this.axis.y.track.el)===null||a===void 0?void 0:a.querySelector(At(this.classNames.scrollbar)))||null,this.options.autoHide||(fe(this.axis.x.scrollbar.el,this.classNames.visible),fe(this.axis.y.scrollbar.el,this.classNames.visible))},e.prototype.initListeners=function(){var t=this,a,i=ue(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),(a=this.contentWrapperEl)===null||a===void 0||a.addEventListener("scroll",this.onScroll),i.addEventListener("resize",this.onWindowResize),!!this.contentEl){if(window.ResizeObserver){var n=!1,s=i.ResizeObserver||ResizeObserver;this.resizeObserver=new s(function(){n&&i.requestAnimationFrame(function(){t.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),i.requestAnimationFrame(function(){n=!0})}this.mutationObserver=new i.MutationObserver(function(){i.requestAnimationFrame(function(){t.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},e.prototype.recalculate=function(){if(!(!this.heightAutoObserverEl||!this.contentEl||!this.contentWrapperEl||!this.wrapperEl||!this.placeholderEl)){var t=ue(this.el);this.elStyles=t.getComputedStyle(this.el),this.isRtl=this.elStyles.direction==="rtl";var a=this.contentEl.offsetWidth,i=this.heightAutoObserverEl.offsetHeight<=1,n=this.heightAutoObserverEl.offsetWidth<=1||a>0,s=this.contentWrapperEl.offsetWidth,o=this.elStyles.overflowX,r=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var h=this.contentEl.scrollHeight,c=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=i?"auto":"100%",this.placeholderEl.style.width=n?"".concat(a||c,"px"):"auto",this.placeholderEl.style.height="".concat(h,"px");var d=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=a!==0&&c>a,this.axis.y.isOverflowing=h>d,this.axis.x.isOverflowing=o==="hidden"?!1:this.axis.x.isOverflowing,this.axis.y.isOverflowing=r==="hidden"?!1:this.axis.y.isOverflowing,this.axis.x.forceVisible=this.options.forceVisible==="x"||this.options.forceVisible===!0,this.axis.y.forceVisible=this.options.forceVisible==="y"||this.options.forceVisible===!0,this.hideNativeScrollbar();var p=this.axis.x.isOverflowing?this.scrollbarWidth:0,u=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&c>s-u,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&h>d-p,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},e.prototype.getScrollbarSize=function(t){var a,i;if(t===void 0&&(t="y"),!this.axis[t].isOverflowing||!this.contentEl)return 0;var n=this.contentEl[this.axis[t].scrollSizeAttr],s=(i=(a=this.axis[t].track.el)===null||a===void 0?void 0:a[this.axis[t].offsetSizeAttr])!==null&&i!==void 0?i:0,o=s/n,r;return r=Math.max(~~(o*s),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(r=Math.min(r,this.options.scrollbarMaxSize)),r},e.prototype.positionScrollbar=function(t){var a,i,n;t===void 0&&(t="y");var s=this.axis[t].scrollbar;if(!(!this.axis[t].isOverflowing||!this.contentWrapperEl||!s.el||!this.elStyles)){var o=this.contentWrapperEl[this.axis[t].scrollSizeAttr],r=((a=this.axis[t].track.el)===null||a===void 0?void 0:a[this.axis[t].offsetSizeAttr])||0,h=parseInt(this.elStyles[this.axis[t].sizeAttr],10),c=this.contentWrapperEl[this.axis[t].scrollOffsetAttr];c=t==="x"&&this.isRtl&&(!((i=e.getRtlHelpers())===null||i===void 0)&&i.isScrollOriginAtZero)?-c:c,t==="x"&&this.isRtl&&(c=!((n=e.getRtlHelpers())===null||n===void 0)&&n.isScrollingToNegative?c:-c);var d=c/(o-h),p=~~((r-s.size)*d);p=t==="x"&&this.isRtl?-p+(r-s.size):p,s.el.style.transform=t==="x"?"translate3d(".concat(p,"px, 0, 0)"):"translate3d(0, ".concat(p,"px, 0)")}},e.prototype.toggleTrackVisibility=function(t){t===void 0&&(t="y");var a=this.axis[t].track.el,i=this.axis[t].scrollbar.el;!a||!i||!this.contentWrapperEl||(this.axis[t].isOverflowing||this.axis[t].forceVisible?(a.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(t))):(a.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(t))),this.axis[t].isOverflowing?i.style.display="block":i.style.display="none")},e.prototype.showScrollbar=function(t){t===void 0&&(t="y"),this.axis[t].isOverflowing&&!this.axis[t].scrollbar.isVisible&&(fe(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!0)},e.prototype.hideScrollbar=function(t){t===void 0&&(t="y"),!this.isDragging&&this.axis[t].isOverflowing&&this.axis[t].scrollbar.isVisible&&(ge(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!1)},e.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},e.prototype.onMouseMoveForAxis=function(t){t===void 0&&(t="y");var a=this.axis[t];!a.track.el||!a.scrollbar.el||(a.track.rect=a.track.el.getBoundingClientRect(),a.scrollbar.rect=a.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(a.track.rect)?(this.showScrollbar(t),fe(a.track.el,this.classNames.hover),this.isWithinBounds(a.scrollbar.rect)?fe(a.scrollbar.el,this.classNames.hover):ge(a.scrollbar.el,this.classNames.hover)):(ge(a.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)))},e.prototype.onMouseLeaveForAxis=function(t){t===void 0&&(t="y"),ge(this.axis[t].track.el,this.classNames.hover),ge(this.axis[t].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)},e.prototype.onDragStart=function(t,a){var i;a===void 0&&(a="y"),this.isDragging=!0;var n=ps(this.el),s=ue(this.el),o=this.axis[a].scrollbar,r=a==="y"?t.pageY:t.pageX;this.axis[a].dragOffset=r-(((i=o.rect)===null||i===void 0?void 0:i[this.axis[a].offsetAttr])||0),this.draggedAxis=a,fe(this.el,this.classNames.dragging),n.addEventListener("mousemove",this.drag,!0),n.addEventListener("mouseup",this.onEndDrag,!0),this.removePreventClickId===null?(n.addEventListener("click",this.preventClick,!0),n.addEventListener("dblclick",this.preventClick,!0)):(s.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.prototype.onTrackClick=function(t,a){var i=this,n,s,o,r;a===void 0&&(a="y");var h=this.axis[a];if(!(!this.options.clickOnTrack||!h.scrollbar.el||!this.contentWrapperEl)){t.preventDefault();var c=ue(this.el);this.axis[a].scrollbar.rect=h.scrollbar.el.getBoundingClientRect();var d=this.axis[a].scrollbar,p=(s=(n=d.rect)===null||n===void 0?void 0:n[this.axis[a].offsetAttr])!==null&&s!==void 0?s:0,u=parseInt((r=(o=this.elStyles)===null||o===void 0?void 0:o[this.axis[a].sizeAttr])!==null&&r!==void 0?r:"0px",10),g=this.contentWrapperEl[this.axis[a].scrollOffsetAttr],M=a==="y"?this.mouseY-p:this.mouseX-p,m=M<0?-1:1,v=m===-1?g-u:g+u,b=40,w=function(){i.contentWrapperEl&&(m===-1?g>v&&(g-=b,i.contentWrapperEl[i.axis[a].scrollOffsetAttr]=g,c.requestAnimationFrame(w)):g<v&&(g+=b,i.contentWrapperEl[i.axis[a].scrollOffsetAttr]=g,c.requestAnimationFrame(w)))};w()}},e.prototype.getContentElement=function(){return this.contentEl},e.prototype.getScrollElement=function(){return this.contentWrapperEl},e.prototype.removeListeners=function(){var t=ue(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},e.prototype.unMount=function(){this.removeListeners()},e.prototype.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},e.prototype.findChild=function(t,a){var i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,function(n){return i.call(n,a)})[0]},e.rtlHelpers=null,e.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",tabIndex:0,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},e.getOptions=ZB,e.helpers=qB,e}(),Ps=function(e,t){return Ps=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,i){a.__proto__=i}||function(a,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(a[n]=i[n])},Ps(e,t)};function YB(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ps(e,t);function a(){this.constructor=e}e.prototype=t===null?Object.create(t):(a.prototype=t.prototype,new a)}var e1=Xi.helpers,us=e1.getOptions,Ot=e1.addClasses,KB=e1.canUseDOM,XB=function(e){YB(t,e);function t(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];var n=e.apply(this,a)||this;return t.instances.set(a[0],n),n}return t.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),function(a){a.getAttribute("data-simplebar")!=="init"&&!t.instances.has(a)&&new t(a,us(a.attributes))})},t.removeObserver=function(){var a;(a=t.globalObserver)===null||a===void 0||a.disconnect()},t.prototype.initDOM=function(){var a=this,i,n,s;if(!Array.prototype.filter.call(this.el.children,function(h){return h.classList.contains(a.classNames.wrapper)}).length){for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),Ot(this.wrapperEl,this.classNames.wrapper),Ot(this.contentWrapperEl,this.classNames.contentWrapper),Ot(this.offsetEl,this.classNames.offset),Ot(this.maskEl,this.classNames.mask),Ot(this.contentEl,this.classNames.contentEl),Ot(this.placeholderEl,this.classNames.placeholder),Ot(this.heightAutoObserverWrapperEl,this.classNames.heightAutoObserverWrapperEl),Ot(this.heightAutoObserverEl,this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl),(i=this.contentWrapperEl)===null||i===void 0||i.setAttribute("tabindex",this.options.tabIndex.toString()),(n=this.contentWrapperEl)===null||n===void 0||n.setAttribute("role","region"),(s=this.contentWrapperEl)===null||s===void 0||s.setAttribute("aria-label",this.options.ariaLabel)}if(!this.axis.x.track.el||!this.axis.y.track.el){var o=document.createElement("div"),r=document.createElement("div");Ot(o,this.classNames.track),Ot(r,this.classNames.scrollbar),o.appendChild(r),this.axis.x.track.el=o.cloneNode(!0),Ot(this.axis.x.track.el,this.classNames.horizontal),this.axis.y.track.el=o.cloneNode(!0),Ot(this.axis.y.track.el,this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}Xi.prototype.initDOM.call(this),this.el.setAttribute("data-simplebar","init")},t.prototype.unMount=function(){Xi.prototype.unMount.call(this),t.instances.delete(this.el)},t.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),typeof MutationObserver<"u"&&(this.globalObserver=new MutationObserver(t.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},t.handleMutations=function(a){a.forEach(function(i){i.addedNodes.forEach(function(n){n.nodeType===1&&(n.hasAttribute("data-simplebar")?!t.instances.has(n)&&document.documentElement.contains(n)&&new t(n,us(n.attributes)):n.querySelectorAll("[data-simplebar]").forEach(function(s){s.getAttribute("data-simplebar")!=="init"&&!t.instances.has(s)&&document.documentElement.contains(s)&&new t(s,us(s.attributes))}))}),i.removedNodes.forEach(function(n){var s;n.nodeType===1&&(n.getAttribute("data-simplebar")==="init"?!document.documentElement.contains(n)&&((s=t.instances.get(n))===null||s===void 0||s.unMount()):Array.prototype.forEach.call(n.querySelectorAll('[data-simplebar="init"]'),function(o){var r;!document.documentElement.contains(o)&&((r=t.instances.get(o))===null||r===void 0||r.unMount())}))})})},t.instances=new WeakMap,t}(Xi);KB&&XB.initHtmlApi();/*!
* sweetalert2 v11.23.0
* Released under the MIT License.
*/function Ol(e,t,a){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:a;throw new TypeError("Private element is not present on this object")}function GB(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function vc(e,t){return e.get(Ol(e,t))}function QB(e,t,a){GB(e,t),t.set(e,a)}function JB(e,t,a){return e.set(Ol(e,t),a),a}const tN=100,B={},eN=()=>{B.previousActiveElement instanceof HTMLElement?(B.previousActiveElement.focus(),B.previousActiveElement=null):document.body&&document.body.focus()},aN=e=>new Promise(t=>{if(!e)return t();const a=window.scrollX,i=window.scrollY;B.restoreFocusTimeout=setTimeout(()=>{eN(),t()},tN),window.scrollTo(a,i)}),Dl="swal2-",iN=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],A=iN.reduce((e,t)=>(e[t]=Dl+t,e),{}),nN=["success","warning","info","question","error"],rn=nN.reduce((e,t)=>(e[t]=Dl+t,e),{}),Rl="SweetAlert2:",a1=e=>e.charAt(0).toUpperCase()+e.slice(1),yt=e=>{console.warn(`${Rl} ${typeof e=="object"?e.join(" "):e}`)},Xe=e=>{console.error(`${Rl} ${e}`)},yc=[],sN=e=>{yc.includes(e)||(yc.push(e),yt(e))},Il=(e,t=null)=>{sN(`"${e}" is deprecated and will be removed in the next major release.${t?` Use "${t}" instead.`:""}`)},_n=e=>typeof e=="function"?e():e,i1=e=>e&&typeof e.toPromise=="function",ii=e=>i1(e)?e.toPromise():Promise.resolve(e),n1=e=>e&&Promise.resolve(e)===e,xt=()=>document.body.querySelector(`.${A.container}`),ni=e=>{const t=xt();return t?t.querySelector(e):null},Lt=e=>ni(`.${e}`),q=()=>Lt(A.popup),ya=()=>Lt(A.icon),oN=()=>Lt(A["icon-content"]),zl=()=>Lt(A.title),s1=()=>Lt(A["html-container"]),Bl=()=>Lt(A.image),o1=()=>Lt(A["progress-steps"]),An=()=>Lt(A["validation-message"]),Yt=()=>ni(`.${A.actions} .${A.confirm}`),xa=()=>ni(`.${A.actions} .${A.cancel}`),Ge=()=>ni(`.${A.actions} .${A.deny}`),rN=()=>Lt(A["input-label"]),ba=()=>ni(`.${A.loader}`),si=()=>Lt(A.actions),Nl=()=>Lt(A.footer),Cn=()=>Lt(A["timer-progress-bar"]),r1=()=>Lt(A.close),hN=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,h1=()=>{const e=q();if(!e)return[];const t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),a=Array.from(t).sort((s,o)=>{const r=parseInt(s.getAttribute("tabindex")||"0"),h=parseInt(o.getAttribute("tabindex")||"0");return r>h?1:r<h?-1:0}),i=e.querySelectorAll(hN),n=Array.from(i).filter(s=>s.getAttribute("tabindex")!=="-1");return[...new Set(a.concat(n))].filter(s=>Et(s))},c1=()=>re(document.body,A.shown)&&!re(document.body,A["toast-shown"])&&!re(document.body,A["no-backdrop"]),En=()=>{const e=q();return e?re(e,A.toast):!1},cN=()=>{const e=q();return e?e.hasAttribute("data-loading"):!1},Tt=(e,t)=>{if(e.textContent="",t){const i=new DOMParser().parseFromString(t,"text/html"),n=i.querySelector("head");n&&Array.from(n.childNodes).forEach(o=>{e.appendChild(o)});const s=i.querySelector("body");s&&Array.from(s.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?e.appendChild(o.cloneNode(!0)):e.appendChild(o)})}},re=(e,t)=>{if(!t)return!1;const a=t.split(/\s+/);for(let i=0;i<a.length;i++)if(!e.classList.contains(a[i]))return!1;return!0},lN=(e,t)=>{Array.from(e.classList).forEach(a=>{!Object.values(A).includes(a)&&!Object.values(rn).includes(a)&&!Object.values(t.showClass||{}).includes(a)&&e.classList.remove(a)})},kt=(e,t,a)=>{if(lN(e,t),!t.customClass)return;const i=t.customClass[a];if(i){if(typeof i!="string"&&!i.forEach){yt(`Invalid type of customClass.${a}! Expected string or iterable object, got "${typeof i}"`);return}Z(e,i)}},Sn=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${A.popup} > .${A[t]}`);case"checkbox":return e.querySelector(`.${A.popup} > .${A.checkbox} input`);case"radio":return e.querySelector(`.${A.popup} > .${A.radio} input:checked`)||e.querySelector(`.${A.popup} > .${A.radio} input:first-child`);case"range":return e.querySelector(`.${A.popup} > .${A.range} input`);default:return e.querySelector(`.${A.popup} > .${A.input}`)}},Fl=e=>{if(e.focus(),e.type!=="file"){const t=e.value;e.value="",e.value=t}},$l=(e,t,a)=>{!e||!t||(typeof t=="string"&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(i=>{Array.isArray(e)?e.forEach(n=>{a?n.classList.add(i):n.classList.remove(i)}):a?e.classList.add(i):e.classList.remove(i)}))},Z=(e,t)=>{$l(e,t,!0)},Dt=(e,t)=>{$l(e,t,!1)},xe=(e,t)=>{const a=Array.from(e.children);for(let i=0;i<a.length;i++){const n=a[i];if(n instanceof HTMLElement&&re(n,t))return n}},Ue=(e,t,a)=>{a===`${parseInt(a)}`&&(a=parseInt(a)),a||parseInt(a)===0?e.style.setProperty(t,typeof a=="number"?`${a}px`:a):e.style.removeProperty(t)},pt=(e,t="flex")=>{e&&(e.style.display=t)},Mt=e=>{e&&(e.style.display="none")},l1=(e,t="block")=>{e&&new MutationObserver(()=>{oi(e,e.innerHTML,t)}).observe(e,{childList:!0,subtree:!0})},xc=(e,t,a,i)=>{const n=e.querySelector(t);n&&n.style.setProperty(a,i)},oi=(e,t,a="flex")=>{t?pt(e,a):Mt(e)},Et=e=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),dN=()=>!Et(Yt())&&!Et(Ge())&&!Et(xa()),Os=e=>e.scrollHeight>e.clientHeight,pN=(e,t)=>{let a=e;for(;a&&a!==t;){if(Os(a))return!0;a=a.parentElement}return!1},Wl=e=>{const t=window.getComputedStyle(e),a=parseFloat(t.getPropertyValue("animation-duration")||"0"),i=parseFloat(t.getPropertyValue("transition-duration")||"0");return a>0||i>0},d1=(e,t=!1)=>{const a=Cn();a&&Et(a)&&(t&&(a.style.transition="none",a.style.width="100%"),setTimeout(()=>{a.style.transition=`width ${e/1e3}s linear`,a.style.width="0%"},10))},uN=()=>{const e=Cn();if(!e)return;const t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const a=parseInt(window.getComputedStyle(e).width),i=t/a*100;e.style.width=`${i}%`},fN=()=>typeof window>"u"||typeof document>"u",gN=`
 <div aria-labelledby="${A.title}" aria-describedby="${A["html-container"]}" class="${A.popup}" tabindex="-1">
   <button type="button" class="${A.close}"></button>
   <ul class="${A["progress-steps"]}"></ul>
   <div class="${A.icon}"></div>
   <img class="${A.image}" />
   <h2 class="${A.title}" id="${A.title}"></h2>
   <div class="${A["html-container"]}" id="${A["html-container"]}"></div>
   <input class="${A.input}" id="${A.input}" />
   <input type="file" class="${A.file}" />
   <div class="${A.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${A.select}" id="${A.select}"></select>
   <div class="${A.radio}"></div>
   <label class="${A.checkbox}">
     <input type="checkbox" id="${A.checkbox}" />
     <span class="${A.label}"></span>
   </label>
   <textarea class="${A.textarea}" id="${A.textarea}"></textarea>
   <div class="${A["validation-message"]}" id="${A["validation-message"]}"></div>
   <div class="${A.actions}">
     <div class="${A.loader}"></div>
     <button type="button" class="${A.confirm}"></button>
     <button type="button" class="${A.deny}"></button>
     <button type="button" class="${A.cancel}"></button>
   </div>
   <div class="${A.footer}"></div>
   <div class="${A["timer-progress-bar-container"]}">
     <div class="${A["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),mN=()=>{const e=xt();return e?(e.remove(),Dt([document.documentElement,document.body],[A["no-backdrop"],A["toast-shown"],A["has-column"]]),!0):!1},Be=()=>{B.currentInstance.resetValidationMessage()},MN=()=>{const e=q(),t=xe(e,A.input),a=xe(e,A.file),i=e.querySelector(`.${A.range} input`),n=e.querySelector(`.${A.range} output`),s=xe(e,A.select),o=e.querySelector(`.${A.checkbox} input`),r=xe(e,A.textarea);t.oninput=Be,a.onchange=Be,s.onchange=Be,o.onchange=Be,r.oninput=Be,i.oninput=()=>{Be(),n.value=i.value},i.onchange=()=>{Be(),n.value=i.value}},vN=e=>typeof e=="string"?document.querySelector(e):e,yN=e=>{const t=q();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},xN=e=>{window.getComputedStyle(e).direction==="rtl"&&Z(xt(),A.rtl)},bN=e=>{const t=mN();if(fN()){Xe("SweetAlert2 requires document to initialize");return}const a=document.createElement("div");a.className=A.container,t&&Z(a,A["no-transition"]),Tt(a,gN),a.dataset.swal2Theme=e.theme;const i=vN(e.target);i.appendChild(a),e.topLayer&&(a.setAttribute("popover",""),a.showPopover()),yN(e),xN(i),MN()},p1=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):typeof e=="object"?wN(e,t):e&&Tt(t,e)},wN=(e,t)=>{e.jquery?_N(t,e):Tt(t,e.toString())},_N=(e,t)=>{if(e.textContent="",0 in t)for(let a=0;a in t;a++)e.appendChild(t[a].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},AN=(e,t)=>{const a=si(),i=ba();!a||!i||(!t.showConfirmButton&&!t.showDenyButton&&!t.showCancelButton?Mt(a):pt(a),kt(a,t,"actions"),CN(a,i,t),Tt(i,t.loaderHtml||""),kt(i,t,"loader"))};function CN(e,t,a){const i=Yt(),n=Ge(),s=xa();!i||!n||!s||(gs(i,"confirm",a),gs(n,"deny",a),gs(s,"cancel",a),EN(i,n,s,a),a.reverseButtons&&(a.toast?(e.insertBefore(s,i),e.insertBefore(n,i)):(e.insertBefore(s,t),e.insertBefore(n,t),e.insertBefore(i,t))))}function EN(e,t,a,i){if(!i.buttonsStyling){Dt([e,t,a],A.styled);return}Z([e,t,a],A.styled),i.confirmButtonColor&&e.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&t.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&a.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),fs(e),fs(t),fs(a)}function fs(e){const t=window.getComputedStyle(e);if(t.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const a=t.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");e.style.setProperty("--swal2-action-button-focus-box-shadow",t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${a}`))}function gs(e,t,a){const i=a1(t);oi(e,a[`show${i}Button`],"inline-block"),Tt(e,a[`${t}ButtonText`]||""),e.setAttribute("aria-label",a[`${t}ButtonAriaLabel`]||""),e.className=A[t],kt(e,a,`${t}Button`)}const SN=(e,t)=>{const a=r1();a&&(Tt(a,t.closeButtonHtml||""),kt(a,t,"closeButton"),oi(a,t.showCloseButton),a.setAttribute("aria-label",t.closeButtonAriaLabel||""))},kN=(e,t)=>{const a=xt();a&&(LN(a,t.backdrop),TN(a,t.position),HN(a,t.grow),kt(a,t,"container"))};function LN(e,t){typeof t=="string"?e.style.background=t:t||Z([document.documentElement,document.body],A["no-backdrop"])}function TN(e,t){t&&(t in A?Z(e,A[t]):(yt('The "position" parameter is not valid, defaulting to "center"'),Z(e,A.center)))}function HN(e,t){t&&Z(e,A[`grow-${t}`])}var Q={innerParams:new WeakMap,domCache:new WeakMap};const VN=["input","file","range","select","radio","checkbox","textarea"],PN=(e,t)=>{const a=q();if(!a)return;const i=Q.innerParams.get(e),n=!i||t.input!==i.input;VN.forEach(s=>{const o=xe(a,A[s]);o&&(RN(s,t.inputAttributes),o.className=A[s],n&&Mt(o))}),t.input&&(n&&ON(t),IN(t))},ON=e=>{if(!e.input)return;if(!st[e.input]){Xe(`Unexpected type of input! Expected ${Object.keys(st).join(" | ")}, got "${e.input}"`);return}const t=jl(e.input);if(!t)return;const a=st[e.input](t,e);pt(t),e.inputAutoFocus&&setTimeout(()=>{Fl(a)})},DN=e=>{for(let t=0;t<e.attributes.length;t++){const a=e.attributes[t].name;["id","type","value","style"].includes(a)||e.removeAttribute(a)}},RN=(e,t)=>{const a=q();if(!a)return;const i=Sn(a,e);if(i){DN(i);for(const n in t)i.setAttribute(n,t[n])}},IN=e=>{if(!e.input)return;const t=jl(e.input);t&&kt(t,e,"input")},u1=(e,t)=>{!e.placeholder&&t.inputPlaceholder&&(e.placeholder=t.inputPlaceholder)},ri=(e,t,a)=>{if(a.inputLabel){const i=document.createElement("label"),n=A["input-label"];i.setAttribute("for",e.id),i.className=n,typeof a.customClass=="object"&&Z(i,a.customClass.inputLabel),i.innerText=a.inputLabel,t.insertAdjacentElement("beforebegin",i)}},jl=e=>{const t=q();if(t)return xe(t,A[e]||A.input)},hn=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:n1(t)||yt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},st={};st.text=st.email=st.password=st.number=st.tel=st.url=st.search=st.date=st["datetime-local"]=st.time=st.week=st.month=(e,t)=>(hn(e,t.inputValue),ri(e,e,t),u1(e,t),e.type=t.input,e);st.file=(e,t)=>(ri(e,e,t),u1(e,t),e);st.range=(e,t)=>{const a=e.querySelector("input"),i=e.querySelector("output");return hn(a,t.inputValue),a.type=t.input,hn(i,t.inputValue),ri(a,e,t),e};st.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const a=document.createElement("option");Tt(a,t.inputPlaceholder),a.value="",a.disabled=!0,a.selected=!0,e.appendChild(a)}return ri(e,e,t),e};st.radio=e=>(e.textContent="",e);st.checkbox=(e,t)=>{const a=Sn(q(),"checkbox");a.value="1",a.checked=!!t.inputValue;const i=e.querySelector("span");return Tt(i,t.inputPlaceholder||t.inputLabel),a};st.textarea=(e,t)=>{hn(e,t.inputValue),u1(e,t),ri(e,e,t);const a=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=parseInt(window.getComputedStyle(q()).width),n=()=>{if(!document.body.contains(e))return;const s=e.offsetWidth+a(e);s>i?q().style.width=`${s}px`:Ue(q(),"width",t.width)};new MutationObserver(n).observe(e,{attributes:!0,attributeFilter:["style"]})}}),e};const zN=(e,t)=>{const a=s1();a&&(l1(a),kt(a,t,"htmlContainer"),t.html?(p1(t.html,a),pt(a,"block")):t.text?(a.textContent=t.text,pt(a,"block")):Mt(a),PN(e,t))},BN=(e,t)=>{const a=Nl();a&&(l1(a),oi(a,t.footer,"block"),t.footer&&p1(t.footer,a),kt(a,t,"footer"))},NN=(e,t)=>{const a=Q.innerParams.get(e),i=ya();if(!i)return;if(a&&t.icon===a.icon){wc(i,t),bc(i,t);return}if(!t.icon&&!t.iconHtml){Mt(i);return}if(t.icon&&Object.keys(rn).indexOf(t.icon)===-1){Xe(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),Mt(i);return}pt(i),wc(i,t),bc(i,t),Z(i,t.showClass&&t.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Ul)},bc=(e,t)=>{for(const[a,i]of Object.entries(rn))t.icon!==a&&Dt(e,i);Z(e,t.icon&&rn[t.icon]),WN(e,t),Ul(),kt(e,t,"icon")},Ul=()=>{const e=q();if(!e)return;const t=window.getComputedStyle(e).getPropertyValue("background-color"),a=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<a.length;i++)a[i].style.backgroundColor=t},FN=e=>`
  ${e.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${e.animation?'<div class="swal2-success-fix"></div>':""}
  ${e.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,$N=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,wc=(e,t)=>{if(!t.icon&&!t.iconHtml)return;let a=e.innerHTML,i="";t.iconHtml?i=_c(t.iconHtml):t.icon==="success"?(i=FN(t),a=a.replace(/ style=".*?"/g,"")):t.icon==="error"?i=$N:t.icon&&(i=_c({question:"?",warning:"!",info:"i"}[t.icon])),a.trim()!==i.trim()&&Tt(e,i)},WN=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const a of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])xc(e,a,"background-color",t.iconColor);xc(e,".swal2-success-ring","border-color",t.iconColor)}},_c=e=>`<div class="${A["icon-content"]}">${e}</div>`,jN=(e,t)=>{const a=Bl();if(a){if(!t.imageUrl){Mt(a);return}pt(a,""),a.setAttribute("src",t.imageUrl),a.setAttribute("alt",t.imageAlt||""),Ue(a,"width",t.imageWidth),Ue(a,"height",t.imageHeight),a.className=A.image,kt(a,t,"image")}};let f1=!1,ql=0,Zl=0,Yl=0,Kl=0;const UN=e=>{e.addEventListener("mousedown",cn),document.body.addEventListener("mousemove",ln),e.addEventListener("mouseup",dn),e.addEventListener("touchstart",cn),document.body.addEventListener("touchmove",ln),e.addEventListener("touchend",dn)},qN=e=>{e.removeEventListener("mousedown",cn),document.body.removeEventListener("mousemove",ln),e.removeEventListener("mouseup",dn),e.removeEventListener("touchstart",cn),document.body.removeEventListener("touchmove",ln),e.removeEventListener("touchend",dn)},cn=e=>{const t=q();if(e.target===t||ya().contains(e.target)){f1=!0;const a=Xl(e);ql=a.clientX,Zl=a.clientY,Yl=parseInt(t.style.insetInlineStart)||0,Kl=parseInt(t.style.insetBlockStart)||0,Z(t,"swal2-dragging")}},ln=e=>{const t=q();if(f1){let{clientX:a,clientY:i}=Xl(e);t.style.insetInlineStart=`${Yl+(a-ql)}px`,t.style.insetBlockStart=`${Kl+(i-Zl)}px`}},dn=()=>{const e=q();f1=!1,Dt(e,"swal2-dragging")},Xl=e=>{let t=0,a=0;return e.type.startsWith("mouse")?(t=e.clientX,a=e.clientY):e.type.startsWith("touch")&&(t=e.touches[0].clientX,a=e.touches[0].clientY),{clientX:t,clientY:a}},ZN=(e,t)=>{const a=xt(),i=q();if(!(!a||!i)){if(t.toast){Ue(a,"width",t.width),i.style.width="100%";const n=ba();n&&i.insertBefore(n,ya())}else Ue(i,"width",t.width);Ue(i,"padding",t.padding),t.color&&(i.style.color=t.color),t.background&&(i.style.background=t.background),Mt(An()),YN(i,t),t.draggable&&!t.toast?(Z(i,A.draggable),UN(i)):(Dt(i,A.draggable),qN(i))}},YN=(e,t)=>{const a=t.showClass||{};e.className=`${A.popup} ${Et(e)?a.popup:""}`,t.toast?(Z([document.documentElement,document.body],A["toast-shown"]),Z(e,A.toast)):Z(e,A.modal),kt(e,t,"popup"),typeof t.customClass=="string"&&Z(e,t.customClass),t.icon&&Z(e,A[`icon-${t.icon}`])},KN=(e,t)=>{const a=o1();if(!a)return;const{progressSteps:i,currentProgressStep:n}=t;if(!i||i.length===0||n===void 0){Mt(a);return}pt(a),a.textContent="",n>=i.length&&yt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((s,o)=>{const r=XN(s);if(a.appendChild(r),o===n&&Z(r,A["active-progress-step"]),o!==i.length-1){const h=GN(t);a.appendChild(h)}})},XN=e=>{const t=document.createElement("li");return Z(t,A["progress-step"]),Tt(t,e),t},GN=e=>{const t=document.createElement("li");return Z(t,A["progress-step-line"]),e.progressStepsDistance&&Ue(t,"width",e.progressStepsDistance),t},QN=(e,t)=>{const a=zl();a&&(l1(a),oi(a,t.title||t.titleText,"block"),t.title&&p1(t.title,a),t.titleText&&(a.innerText=t.titleText),kt(a,t,"title"))},Gl=(e,t)=>{ZN(e,t),kN(e,t),KN(e,t),NN(e,t),jN(e,t),QN(e,t),SN(e,t),zN(e,t),AN(e,t),BN(e,t);const a=q();typeof t.didRender=="function"&&a&&t.didRender(a),B.eventEmitter.emit("didRender",a)},JN=()=>Et(q()),Ql=()=>{var e;return(e=Yt())===null||e===void 0?void 0:e.click()},tF=()=>{var e;return(e=Ge())===null||e===void 0?void 0:e.click()},eF=()=>{var e;return(e=xa())===null||e===void 0?void 0:e.click()},wa=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Jl=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},aF=(e,t,a)=>{Jl(e),t.toast||(e.keydownHandler=i=>nF(t,i,a),e.keydownTarget=t.keydownListenerCapture?window:q(),e.keydownListenerCapture=t.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Ds=(e,t)=>{var a;const i=h1();if(i.length){e=e+t,e===-2&&(e=i.length-1),e===i.length?e=0:e===-1&&(e=i.length-1),i[e].focus();return}(a=q())===null||a===void 0||a.focus()},td=["ArrowRight","ArrowDown"],iF=["ArrowLeft","ArrowUp"],nF=(e,t,a)=>{e&&(t.isComposing||t.keyCode===229||(e.stopKeydownPropagation&&t.stopPropagation(),t.key==="Enter"?sF(t,e):t.key==="Tab"?oF(t):[...td,...iF].includes(t.key)?rF(t.key):t.key==="Escape"&&hF(t,e,a)))},sF=(e,t)=>{if(!_n(t.allowEnterKey))return;const a=Sn(q(),t.input);if(e.target&&a&&e.target instanceof HTMLElement&&e.target.outerHTML===a.outerHTML){if(["textarea","file"].includes(t.input))return;Ql(),e.preventDefault()}},oF=e=>{const t=e.target,a=h1();let i=-1;for(let n=0;n<a.length;n++)if(t===a[n]){i=n;break}e.shiftKey?Ds(i,-1):Ds(i,1),e.stopPropagation(),e.preventDefault()},rF=e=>{const t=si(),a=Yt(),i=Ge(),n=xa();if(!t||!a||!i||!n)return;const s=[a,i,n];if(document.activeElement instanceof HTMLElement&&!s.includes(document.activeElement))return;const o=td.includes(e)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;if(r){for(let h=0;h<t.children.length;h++){if(r=r[o],!r)return;if(r instanceof HTMLButtonElement&&Et(r))break}r instanceof HTMLButtonElement&&r.focus()}},hF=(e,t,a)=>{e.preventDefault(),_n(t.allowEscapeKey)&&a(wa.esc)};var Ma={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const cF=()=>{const e=xt();Array.from(document.body.children).forEach(a=>{a.contains(e)||(a.hasAttribute("aria-hidden")&&a.setAttribute("data-previous-aria-hidden",a.getAttribute("aria-hidden")||""),a.setAttribute("aria-hidden","true"))})},ed=()=>{Array.from(document.body.children).forEach(t=>{t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")||""),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},ad=typeof window<"u"&&!!window.GestureEvent,lF=()=>{if(ad&&!re(document.body,A.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,Z(document.body,A.iosfix),dF()}},dF=()=>{const e=xt();if(!e)return;let t;e.ontouchstart=a=>{t=pF(a)},e.ontouchmove=a=>{t&&(a.preventDefault(),a.stopPropagation())}},pF=e=>{const t=e.target,a=xt(),i=s1();return!a||!i||uF(e)||fF(e)?!1:t===a||!Os(a)&&t instanceof HTMLElement&&!pN(t,i)&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&!(Os(i)&&i.contains(t))},uF=e=>e.touches&&e.touches.length&&e.touches[0].touchType==="stylus",fF=e=>e.touches&&e.touches.length>1,gF=()=>{if(re(document.body,A.iosfix)){const e=parseInt(document.body.style.top,10);Dt(document.body,A.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},mF=()=>{const e=document.createElement("div");e.className=A["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t};let pa=null;const MF=e=>{pa===null&&(document.body.scrollHeight>window.innerHeight||e==="scroll")&&(pa=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${pa+mF()}px`)},vF=()=>{pa!==null&&(document.body.style.paddingRight=`${pa}px`,pa=null)};function id(e,t,a,i){En()?Ac(e,i):(aN(a).then(()=>Ac(e,i)),Jl(B)),ad?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),c1()&&(vF(),gF(),ed()),yF()}function yF(){Dt([document.documentElement,document.body],[A.shown,A["height-auto"],A["no-backdrop"],A["toast-shown"]])}function be(e){e=bF(e);const t=Ma.swalPromiseResolve.get(this),a=xF(this);this.isAwaitingPromise?e.isDismissed||(hi(this),t(e)):a&&t(e)}const xF=e=>{const t=q();if(!t)return!1;const a=Q.innerParams.get(e);if(!a||re(t,a.hideClass.popup))return!1;Dt(t,a.showClass.popup),Z(t,a.hideClass.popup);const i=xt();return Dt(i,a.showClass.backdrop),Z(i,a.hideClass.backdrop),wF(e,t,a),!0};function nd(e){const t=Ma.swalPromiseReject.get(this);hi(this),t&&t(e)}const hi=e=>{e.isAwaitingPromise&&(delete e.isAwaitingPromise,Q.innerParams.get(e)||e._destroy())},bF=e=>typeof e>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),wF=(e,t,a)=>{var i;const n=xt(),s=Wl(t);typeof a.willClose=="function"&&a.willClose(t),(i=B.eventEmitter)===null||i===void 0||i.emit("willClose",t),s?_F(e,t,n,a.returnFocus,a.didClose):id(e,n,a.returnFocus,a.didClose)},_F=(e,t,a,i,n)=>{B.swalCloseEventFinishedCallback=id.bind(null,e,a,i,n);const s=function(o){if(o.target===t){var r;(r=B.swalCloseEventFinishedCallback)===null||r===void 0||r.call(B),delete B.swalCloseEventFinishedCallback,t.removeEventListener("animationend",s),t.removeEventListener("transitionend",s)}};t.addEventListener("animationend",s),t.addEventListener("transitionend",s)},Ac=(e,t)=>{setTimeout(()=>{var a;typeof t=="function"&&t.bind(e.params)(),(a=B.eventEmitter)===null||a===void 0||a.emit("didClose"),e._destroy&&e._destroy()})},va=e=>{let t=q();if(t||new Is,t=q(),!t)return;const a=ba();En()?Mt(ya()):AF(t,e),pt(a),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},AF=(e,t)=>{const a=si(),i=ba();!a||!i||(!t&&Et(Yt())&&(t=Yt()),pt(a),t&&(Mt(t),i.setAttribute("data-button-to-replace",t.className),a.insertBefore(i,t)),Z([e,a],A.loading))},CF=(e,t)=>{t.input==="select"||t.input==="radio"?TF(e,t):["text","email","number","tel","textarea"].some(a=>a===t.input)&&(i1(t.inputValue)||n1(t.inputValue))&&(va(Yt()),HF(e,t))},EF=(e,t)=>{const a=e.getInput();if(!a)return null;switch(t.input){case"checkbox":return SF(a);case"radio":return kF(a);case"file":return LF(a);default:return t.inputAutoTrim?a.value.trim():a.value}},SF=e=>e.checked?1:0,kF=e=>e.checked?e.value:null,LF=e=>e.files&&e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null,TF=(e,t)=>{const a=q();if(!a)return;const i=n=>{t.input==="select"?VF(a,pn(n),t):t.input==="radio"&&PF(a,pn(n),t)};i1(t.inputOptions)||n1(t.inputOptions)?(va(Yt()),ii(t.inputOptions).then(n=>{e.hideLoading(),i(n)})):typeof t.inputOptions=="object"?i(t.inputOptions):Xe(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`)},HF=(e,t)=>{const a=e.getInput();a&&(Mt(a),ii(t.inputValue).then(i=>{a.value=t.input==="number"?`${parseFloat(i)||0}`:`${i}`,pt(a),a.focus(),e.hideLoading()}).catch(i=>{Xe(`Error in inputValue promise: ${i}`),a.value="",pt(a),a.focus(),e.hideLoading()}))};function VF(e,t,a){const i=xe(e,A.select);if(!i)return;const n=(s,o,r)=>{const h=document.createElement("option");h.value=r,Tt(h,o),h.selected=sd(r,a.inputValue),s.appendChild(h)};t.forEach(s=>{const o=s[0],r=s[1];if(Array.isArray(r)){const h=document.createElement("optgroup");h.label=o,h.disabled=!1,i.appendChild(h),r.forEach(c=>n(h,c[1],c[0]))}else n(i,r,o)}),i.focus()}function PF(e,t,a){const i=xe(e,A.radio);if(!i)return;t.forEach(s=>{const o=s[0],r=s[1],h=document.createElement("input"),c=document.createElement("label");h.type="radio",h.name=A.radio,h.value=o,sd(o,a.inputValue)&&(h.checked=!0);const d=document.createElement("span");Tt(d,r),d.className=A.label,c.appendChild(h),c.appendChild(d),i.appendChild(c)});const n=i.querySelectorAll("input");n.length&&n[0].focus()}const pn=e=>{const t=[];return e instanceof Map?e.forEach((a,i)=>{let n=a;typeof n=="object"&&(n=pn(n)),t.push([i,n])}):Object.keys(e).forEach(a=>{let i=e[a];typeof i=="object"&&(i=pn(i)),t.push([a,i])}),t},sd=(e,t)=>!!t&&t.toString()===e.toString(),OF=e=>{const t=Q.innerParams.get(e);e.disableButtons(),t.input?od(e,"confirm"):m1(e,!0)},DF=e=>{const t=Q.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?od(e,"deny"):g1(e,!1)},RF=(e,t)=>{e.disableButtons(),t(wa.cancel)},od=(e,t)=>{const a=Q.innerParams.get(e);if(!a.input){Xe(`The "input" parameter is needed to be set when using returnInputValueOn${a1(t)}`);return}const i=e.getInput(),n=EF(e,a);a.inputValidator?IF(e,n,t):i&&!i.checkValidity()?(e.enableButtons(),e.showValidationMessage(a.validationMessage||i.validationMessage)):t==="deny"?g1(e,n):m1(e,n)},IF=(e,t,a)=>{const i=Q.innerParams.get(e);e.disableInput(),Promise.resolve().then(()=>ii(i.inputValidator(t,i.validationMessage))).then(s=>{e.enableButtons(),e.enableInput(),s?e.showValidationMessage(s):a==="deny"?g1(e,t):m1(e,t)})},g1=(e,t)=>{const a=Q.innerParams.get(e||void 0);a.showLoaderOnDeny&&va(Ge()),a.preDeny?(e.isAwaitingPromise=!0,Promise.resolve().then(()=>ii(a.preDeny(t,a.validationMessage))).then(n=>{n===!1?(e.hideLoading(),hi(e)):e.close({isDenied:!0,value:typeof n>"u"?t:n})}).catch(n=>rd(e||void 0,n))):e.close({isDenied:!0,value:t})},Cc=(e,t)=>{e.close({isConfirmed:!0,value:t})},rd=(e,t)=>{e.rejectPromise(t)},m1=(e,t)=>{const a=Q.innerParams.get(e||void 0);a.showLoaderOnConfirm&&va(),a.preConfirm?(e.resetValidationMessage(),e.isAwaitingPromise=!0,Promise.resolve().then(()=>ii(a.preConfirm(t,a.validationMessage))).then(n=>{Et(An())||n===!1?(e.hideLoading(),hi(e)):Cc(e,typeof n>"u"?t:n)}).catch(n=>rd(e||void 0,n))):Cc(e,t)};function un(){const e=Q.innerParams.get(this);if(!e)return;const t=Q.domCache.get(this);Mt(t.loader),En()?e.icon&&pt(ya()):zF(t),Dt([t.popup,t.actions],A.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}const zF=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?pt(t[0],"inline-block"):dN()&&Mt(e.actions)};function hd(){const e=Q.innerParams.get(this),t=Q.domCache.get(this);return t?Sn(t.popup,e.input):null}function cd(e,t,a){const i=Q.domCache.get(e);t.forEach(n=>{i[n].disabled=a})}function ld(e,t){const a=q();if(!(!a||!e))if(e.type==="radio"){const i=a.querySelectorAll(`[name="${A.radio}"]`);for(let n=0;n<i.length;n++)i[n].disabled=t}else e.disabled=t}function dd(){cd(this,["confirmButton","denyButton","cancelButton"],!1)}function pd(){cd(this,["confirmButton","denyButton","cancelButton"],!0)}function ud(){ld(this.getInput(),!1)}function fd(){ld(this.getInput(),!0)}function gd(e){const t=Q.domCache.get(this),a=Q.innerParams.get(this);Tt(t.validationMessage,e),t.validationMessage.className=A["validation-message"],a.customClass&&a.customClass.validationMessage&&Z(t.validationMessage,a.customClass.validationMessage),pt(t.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",A["validation-message"]),Fl(i),Z(i,A.inputerror))}function md(){const e=Q.domCache.get(this);e.validationMessage&&Mt(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),Dt(t,A.inputerror))}const ua={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},BF=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],NF={allowEnterKey:void 0},FF=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Md=e=>Object.prototype.hasOwnProperty.call(ua,e),vd=e=>BF.indexOf(e)!==-1,yd=e=>NF[e],$F=e=>{Md(e)||yt(`Unknown parameter "${e}"`)},WF=e=>{FF.includes(e)&&yt(`The parameter "${e}" is incompatible with toasts`)},jF=e=>{const t=yd(e);t&&Il(e,t)},xd=e=>{e.backdrop===!1&&e.allowOutsideClick&&yt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),e.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(e.theme)&&yt(`Invalid theme "${e.theme}"`);for(const t in e)$F(t),e.toast&&WF(t),jF(t)};function bd(e){const t=xt(),a=q(),i=Q.innerParams.get(this);if(!a||re(a,i.hideClass.popup)){yt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const n=UF(e),s=Object.assign({},i,n);xd(s),t.dataset.swal2Theme=s.theme,Gl(this,s),Q.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const UF=e=>{const t={};return Object.keys(e).forEach(a=>{vd(a)?t[a]=e[a]:yt(`Invalid parameter to update: ${a}`)}),t};function wd(){const e=Q.domCache.get(this),t=Q.innerParams.get(this);if(!t){_d(this);return}e.popup&&B.swalCloseEventFinishedCallback&&(B.swalCloseEventFinishedCallback(),delete B.swalCloseEventFinishedCallback),typeof t.didDestroy=="function"&&t.didDestroy(),B.eventEmitter.emit("didDestroy"),qF(this)}const qF=e=>{_d(e),delete e.params,delete B.keydownHandler,delete B.keydownTarget,delete B.currentInstance},_d=e=>{e.isAwaitingPromise?(ms(Q,e),e.isAwaitingPromise=!0):(ms(Ma,e),ms(Q,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},ms=(e,t)=>{for(const a in e)e[a].delete(t)};var ZF=Object.freeze({__proto__:null,_destroy:wd,close:be,closeModal:be,closePopup:be,closeToast:be,disableButtons:pd,disableInput:fd,disableLoading:un,enableButtons:dd,enableInput:ud,getInput:hd,handleAwaitingPromise:hi,hideLoading:un,rejectPromise:nd,resetValidationMessage:md,showValidationMessage:gd,update:bd});const YF=(e,t,a)=>{e.toast?KF(e,t,a):(GF(t),QF(t),JF(e,t,a))},KF=(e,t,a)=>{t.popup.onclick=()=>{e&&(XF(e)||e.timer||e.input)||a(wa.close)}},XF=e=>!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton);let fn=!1;const GF=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=()=>{},t.target===e.container&&(fn=!0)}}},QF=e=>{e.container.onmousedown=t=>{t.target===e.container&&t.preventDefault(),e.popup.onmouseup=function(a){e.popup.onmouseup=()=>{},(a.target===e.popup||a.target instanceof HTMLElement&&e.popup.contains(a.target))&&(fn=!0)}}},JF=(e,t,a)=>{t.container.onclick=i=>{if(fn){fn=!1;return}i.target===t.container&&_n(e.allowOutsideClick)&&a(wa.backdrop)}},t$=e=>typeof e=="object"&&e.jquery,Ec=e=>e instanceof Element||t$(e),e$=e=>{const t={};return typeof e[0]=="object"&&!Ec(e[0])?Object.assign(t,e[0]):["title","html","icon"].forEach((a,i)=>{const n=e[i];typeof n=="string"||Ec(n)?t[a]=n:n!==void 0&&Xe(`Unexpected type of ${a}! Expected "string" or "Element", got ${typeof n}`)}),t};function a$(...e){return new this(...e)}function i$(e){class t extends this{_main(i,n){return super._main(i,Object.assign({},e,n))}}return t}const n$=()=>B.timeout&&B.timeout.getTimerLeft(),Ad=()=>{if(B.timeout)return uN(),B.timeout.stop()},Cd=()=>{if(B.timeout){const e=B.timeout.start();return d1(e),e}},s$=()=>{const e=B.timeout;return e&&(e.running?Ad():Cd())},o$=e=>{if(B.timeout){const t=B.timeout.increase(e);return d1(t,!0),t}},r$=()=>!!(B.timeout&&B.timeout.isRunning());let Sc=!1;const Rs={};function h$(e="data-swal-template"){Rs[e]=this,Sc||(document.body.addEventListener("click",c$),Sc=!0)}const c$=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const a in Rs){const i=t.getAttribute(a);if(i){Rs[a].fire({template:i});return}}};class l${constructor(){this.events={}}_getHandlersByEventName(t){return typeof this.events[t]>"u"&&(this.events[t]=[]),this.events[t]}on(t,a){const i=this._getHandlersByEventName(t);i.includes(a)||i.push(a)}once(t,a){const i=(...n)=>{this.removeListener(t,i),a.apply(this,n)};this.on(t,i)}emit(t,...a){this._getHandlersByEventName(t).forEach(i=>{try{i.apply(this,a)}catch(n){console.error(n)}})}removeListener(t,a){const i=this._getHandlersByEventName(t),n=i.indexOf(a);n>-1&&i.splice(n,1)}removeAllListeners(t){this.events[t]!==void 0&&(this.events[t].length=0)}reset(){this.events={}}}B.eventEmitter=new l$;const d$=(e,t)=>{B.eventEmitter.on(e,t)},p$=(e,t)=>{B.eventEmitter.once(e,t)},u$=(e,t)=>{if(!e){B.eventEmitter.reset();return}t?B.eventEmitter.removeListener(e,t):B.eventEmitter.removeAllListeners(e)};var f$=Object.freeze({__proto__:null,argsToParams:e$,bindClickHandler:h$,clickCancel:eF,clickConfirm:Ql,clickDeny:tF,enableLoading:va,fire:a$,getActions:si,getCancelButton:xa,getCloseButton:r1,getConfirmButton:Yt,getContainer:xt,getDenyButton:Ge,getFocusableElements:h1,getFooter:Nl,getHtmlContainer:s1,getIcon:ya,getIconContent:oN,getImage:Bl,getInputLabel:rN,getLoader:ba,getPopup:q,getProgressSteps:o1,getTimerLeft:n$,getTimerProgressBar:Cn,getTitle:zl,getValidationMessage:An,increaseTimer:o$,isDeprecatedParameter:yd,isLoading:cN,isTimerRunning:r$,isUpdatableParameter:vd,isValidParameter:Md,isVisible:JN,mixin:i$,off:u$,on:d$,once:p$,resumeTimer:Cd,showLoading:va,stopTimer:Ad,toggleTimer:s$});class g${constructor(t,a){this.callback=t,this.remaining=a,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(t){const a=this.running;return a&&this.stop(),this.remaining+=t,a&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Ed=["swal-title","swal-html","swal-footer"],m$=e=>{const t=typeof e.template=="string"?document.querySelector(e.template):e.template;if(!t)return{};const a=t.content;return A$(a),Object.assign(M$(a),v$(a),y$(a),x$(a),b$(a),w$(a),_$(a,Ed))},M$=e=>{const t={};return Array.from(e.querySelectorAll("swal-param")).forEach(i=>{Ye(i,["name","value"]);const n=i.getAttribute("name"),s=i.getAttribute("value");!n||!s||(typeof ua[n]=="boolean"?t[n]=s!=="false":typeof ua[n]=="object"?t[n]=JSON.parse(s):t[n]=s)}),t},v$=e=>{const t={};return Array.from(e.querySelectorAll("swal-function-param")).forEach(i=>{const n=i.getAttribute("name"),s=i.getAttribute("value");!n||!s||(t[n]=new Function(`return ${s}`)())}),t},y$=e=>{const t={};return Array.from(e.querySelectorAll("swal-button")).forEach(i=>{Ye(i,["type","color","aria-label"]);const n=i.getAttribute("type");!n||!["confirm","cancel","deny"].includes(n)||(t[`${n}ButtonText`]=i.innerHTML,t[`show${a1(n)}Button`]=!0,i.hasAttribute("color")&&(t[`${n}ButtonColor`]=i.getAttribute("color")),i.hasAttribute("aria-label")&&(t[`${n}ButtonAriaLabel`]=i.getAttribute("aria-label")))}),t},x$=e=>{const t={},a=e.querySelector("swal-image");return a&&(Ye(a,["src","width","height","alt"]),a.hasAttribute("src")&&(t.imageUrl=a.getAttribute("src")||void 0),a.hasAttribute("width")&&(t.imageWidth=a.getAttribute("width")||void 0),a.hasAttribute("height")&&(t.imageHeight=a.getAttribute("height")||void 0),a.hasAttribute("alt")&&(t.imageAlt=a.getAttribute("alt")||void 0)),t},b$=e=>{const t={},a=e.querySelector("swal-icon");return a&&(Ye(a,["type","color"]),a.hasAttribute("type")&&(t.icon=a.getAttribute("type")),a.hasAttribute("color")&&(t.iconColor=a.getAttribute("color")),t.iconHtml=a.innerHTML),t},w$=e=>{const t={},a=e.querySelector("swal-input");a&&(Ye(a,["type","label","placeholder","value"]),t.input=a.getAttribute("type")||"text",a.hasAttribute("label")&&(t.inputLabel=a.getAttribute("label")),a.hasAttribute("placeholder")&&(t.inputPlaceholder=a.getAttribute("placeholder")),a.hasAttribute("value")&&(t.inputValue=a.getAttribute("value")));const i=Array.from(e.querySelectorAll("swal-input-option"));return i.length&&(t.inputOptions={},i.forEach(n=>{Ye(n,["value"]);const s=n.getAttribute("value");if(!s)return;const o=n.innerHTML;t.inputOptions[s]=o})),t},_$=(e,t)=>{const a={};for(const i in t){const n=t[i],s=e.querySelector(n);s&&(Ye(s,[]),a[n.replace(/^swal-/,"")]=s.innerHTML.trim())}return a},A$=e=>{const t=Ed.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(a=>{const i=a.tagName.toLowerCase();t.includes(i)||yt(`Unrecognized element <${i}>`)})},Ye=(e,t)=>{Array.from(e.attributes).forEach(a=>{t.indexOf(a.name)===-1&&yt([`Unrecognized attribute "${a.name}" on <${e.tagName.toLowerCase()}>.`,`${t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."}`])})},Sd=10,C$=e=>{const t=xt(),a=q();typeof e.willOpen=="function"&&e.willOpen(a),B.eventEmitter.emit("willOpen",a);const n=window.getComputedStyle(document.body).overflowY;k$(t,a,e),setTimeout(()=>{E$(t,a)},Sd),c1()&&(S$(t,e.scrollbarPadding,n),cF()),!En()&&!B.previousActiveElement&&(B.previousActiveElement=document.activeElement),typeof e.didOpen=="function"&&setTimeout(()=>e.didOpen(a)),B.eventEmitter.emit("didOpen",a),Dt(t,A["no-transition"])},gn=e=>{const t=q();if(e.target!==t)return;const a=xt();t.removeEventListener("animationend",gn),t.removeEventListener("transitionend",gn),a.style.overflowY="auto"},E$=(e,t)=>{Wl(t)?(e.style.overflowY="hidden",t.addEventListener("animationend",gn),t.addEventListener("transitionend",gn)):e.style.overflowY="auto"},S$=(e,t,a)=>{lF(),t&&a!=="hidden"&&MF(a),setTimeout(()=>{e.scrollTop=0})},k$=(e,t,a)=>{Z(e,a.showClass.backdrop),a.animation?(t.style.setProperty("opacity","0","important"),pt(t,"grid"),setTimeout(()=>{Z(t,a.showClass.popup),t.style.removeProperty("opacity")},Sd)):pt(t,"grid"),Z([document.documentElement,document.body],A.shown),a.heightAuto&&a.backdrop&&!a.toast&&Z([document.documentElement,document.body],A["height-auto"])};var kc={email:(e,t)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function L$(e){e.inputValidator||(e.input==="email"&&(e.inputValidator=kc.email),e.input==="url"&&(e.inputValidator=kc.url))}function T$(e){(!e.target||typeof e.target=="string"&&!document.querySelector(e.target)||typeof e.target!="string"&&!e.target.appendChild)&&(yt('Target parameter is not valid, defaulting to "body"'),e.target="body")}function H$(e){L$(e),e.showLoaderOnConfirm&&!e.preConfirm&&yt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),T$(e),typeof e.title=="string"&&(e.title=e.title.split(`
`).join("<br />")),bN(e)}let qt;var Ii=new WeakMap;class rt{constructor(...t){if(QB(this,Ii,void 0),typeof window>"u")return;qt=this;const a=Object.freeze(this.constructor.argsToParams(t));this.params=a,this.isAwaitingPromise=!1,JB(Ii,this,this._main(qt.params))}_main(t,a={}){if(xd(Object.assign({},a,t)),B.currentInstance){const s=Ma.swalPromiseResolve.get(B.currentInstance),{isAwaitingPromise:o}=B.currentInstance;B.currentInstance._destroy(),o||s({isDismissed:!0}),c1()&&ed()}B.currentInstance=qt;const i=P$(t,a);H$(i),Object.freeze(i),B.timeout&&(B.timeout.stop(),delete B.timeout),clearTimeout(B.restoreFocusTimeout);const n=O$(qt);return Gl(qt,i),Q.innerParams.set(qt,i),V$(qt,n,i)}then(t){return vc(Ii,this).then(t)}finally(t){return vc(Ii,this).finally(t)}}const V$=(e,t,a)=>new Promise((i,n)=>{const s=o=>{e.close({isDismissed:!0,dismiss:o})};Ma.swalPromiseResolve.set(e,i),Ma.swalPromiseReject.set(e,n),t.confirmButton.onclick=()=>{OF(e)},t.denyButton.onclick=()=>{DF(e)},t.cancelButton.onclick=()=>{RF(e,s)},t.closeButton.onclick=()=>{s(wa.close)},YF(a,t,s),aF(B,a,s),CF(e,a),C$(a),D$(B,a,s),R$(t,a),setTimeout(()=>{t.container.scrollTop=0})}),P$=(e,t)=>{const a=m$(e),i=Object.assign({},ua,t,a,e);return i.showClass=Object.assign({},ua.showClass,i.showClass),i.hideClass=Object.assign({},ua.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},O$=e=>{const t={popup:q(),container:xt(),actions:si(),confirmButton:Yt(),denyButton:Ge(),cancelButton:xa(),loader:ba(),closeButton:r1(),validationMessage:An(),progressSteps:o1()};return Q.domCache.set(e,t),t},D$=(e,t,a)=>{const i=Cn();Mt(i),t.timer&&(e.timeout=new g$(()=>{a("timer"),delete e.timeout},t.timer),t.timerProgressBar&&(pt(i),kt(i,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&d1(t.timer)})))},R$=(e,t)=>{if(!t.toast){if(!_n(t.allowEnterKey)){Il("allowEnterKey"),B$();return}I$(e)||z$(e,t)||Ds(-1,1)}},I$=e=>{const t=Array.from(e.popup.querySelectorAll("[autofocus]"));for(const a of t)if(a instanceof HTMLElement&&Et(a))return a.focus(),!0;return!1},z$=(e,t)=>t.focusDeny&&Et(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&Et(e.cancelButton)?(e.cancelButton.focus(),!0):t.focusConfirm&&Et(e.confirmButton)?(e.confirmButton.focus(),!0):!1,B$=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};rt.prototype.disableButtons=pd;rt.prototype.enableButtons=dd;rt.prototype.getInput=hd;rt.prototype.disableInput=fd;rt.prototype.enableInput=ud;rt.prototype.hideLoading=un;rt.prototype.disableLoading=un;rt.prototype.showValidationMessage=gd;rt.prototype.resetValidationMessage=md;rt.prototype.close=be;rt.prototype.closePopup=be;rt.prototype.closeModal=be;rt.prototype.closeToast=be;rt.prototype.rejectPromise=nd;rt.prototype.update=bd;rt.prototype._destroy=wd;Object.assign(rt,f$);Object.keys(ZF).forEach(e=>{rt[e]=function(...t){return qt&&qt[e]?qt[e](...t):null}});rt.DismissReason=wa;rt.version="11.23.0";const Is=rt;Is.default=Is;typeof document<"u"&&function(e,t){var a=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(a),a.styleSheet)a.styleSheet.disabled||(a.styleSheet.cssText=t);else try{a.innerHTML=t}catch{a.innerText=t}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');class kn{constructor(t,a={}){if(this.element=typeof t=="string"?document.querySelector(t):t,this.options={loadingText:"Please wait...",spinnerSize:"sm",spinnerColor:"",disabledClass:"disabled",loadingClass:"loading",...a},!this.element){console.error("LoadingButton: Element not found");return}this.init()}init(){this.originalContent=this.element.innerHTML,this.originalDisabled=this.element.disabled,this.element.type==="submit"?this.initSubmitButton():this.element.addEventListener("click",t=>{!this.element.disabled&&!this.isLoading()&&this.showLoading()})}initSubmitButton(){const t=this.element.closest("form");t&&(this.form=t,this.submitTriggered=!1,t.addEventListener("submit",a=>{document.activeElement===this.element&&(this.submitTriggered=!0,t.classList.contains("needs-validation")||!t.hasAttribute("novalidate")?requestAnimationFrame(()=>{t.checkValidity()&&this.submitTriggered?this.showLoading():this.submitTriggered=!1}):this.showLoading())}),t.addEventListener("invalid",()=>{this.submitTriggered=!1}),this.element.addEventListener("click",a=>{!this.element.disabled&&!this.isLoading()&&setTimeout(()=>{!this.submitTriggered&&t.checkValidity()&&this.showLoading()},50)}))}showLoading(t=null){if(this.isLoading())return;const a=t||this.options.loadingText,i=this.options.spinnerSize?`spinner-border-${this.options.spinnerSize}`:"spinner-border-sm",n=this.options.spinnerColor?`text-${this.options.spinnerColor}`:"";this.element.dataset.originalContent=this.originalContent,this.element.dataset.originalDisabled=this.originalDisabled.toString(),this.element.disabled=!0,this.element.classList.add(this.options.loadingClass),this.element.innerHTML=`
            <span class="spinner-border ${i} ${n} me-2" role="status" aria-hidden="true"></span>
            ${a}
        `,this.element.dispatchEvent(new CustomEvent("loading:start",{detail:{button:this.element,loadingText:a}}))}hideLoading(){this.isLoading()&&(this.element.innerHTML=this.element.dataset.originalContent||this.originalContent,this.element.disabled=this.element.dataset.originalDisabled==="true",this.element.classList.remove(this.options.loadingClass),delete this.element.dataset.originalContent,delete this.element.dataset.originalDisabled,this.element.dispatchEvent(new CustomEvent("loading:end",{detail:{button:this.element}})))}isLoading(){return this.element.classList.contains(this.options.loadingClass)||this.element.querySelector(".spinner-border")!==null}setLoadingText(t){this.options.loadingText=t}setSpinnerSize(t){this.options.spinnerSize=t}setSpinnerColor(t){this.options.spinnerColor=t}handleValidationError(){this.isLoading()&&this.hideLoading(),this.submitTriggered=!1}showLoadingImmediately(t=null){this.showLoading(t)}static initAll(t="[data-loading-button]",a={}){const i=document.querySelectorAll(t),n=[];return i.forEach(s=>{const o={...a,...this.getOptionsFromDataAttributes(s)};n.push(new kn(s,o))}),n}static getOptionsFromDataAttributes(t){const a={};return t.dataset.loadingText&&(a.loadingText=t.dataset.loadingText),t.dataset.spinnerSize&&(a.spinnerSize=t.dataset.spinnerSize),t.dataset.spinnerColor&&(a.spinnerColor=t.dataset.spinnerColor),t.dataset.loadingClass&&(a.loadingClass=t.dataset.loadingClass),a}}document.addEventListener("DOMContentLoaded",function(){kn.initAll()});window.LoadingButton=kn;document.addEventListener("DOMContentLoaded",async()=>{var p;console.log("Analytics script loaded");const e=document.querySelector("#appointmentsChart"),t=document.querySelector("#rxUsersChart"),a=document.querySelector("#totalPharmaciesChart");if(!e&&!t&&!a)return;await new Promise(u=>setTimeout(u,100));const i=(p=document.querySelector('meta[name="csrf-token"]'))==null?void 0:p.getAttribute("content");let n=null;try{console.log("Fetching appointments data from API...");const u=await fetch("/api/dashboard/appointments",{method:"GET",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":i||"",Accept:"application/json"}});if(!u.ok)throw new Error(`API request failed with status ${u.status}`);const g=await u.json();if(console.log("Appointments API Response:",g),g.success){n=g.data,console.log("Appointments data loaded:",n);const M=document.getElementById("appointmentsThisMonth"),m=document.getElementById("appointmentsLastMonth"),v=document.getElementById("appointmentsRevenueChange");console.log("Updating DOM elements with data:",{this_month:g.data.this_month,last_month:g.data.last_month,revenue_change_percentage:g.data.revenue_change_percentage}),M?(M.textContent=g.data.this_month,console.log("Updated this month element:",M)):console.error("This month element not found"),m?(m.textContent=g.data.last_month,console.log("Updated last month element:",m)):console.error("Last month element not found"),v?(v.textContent=g.data.revenue_change_percentage,console.log("Updated revenue percentage element:",v)):console.error("Revenue percentage element not found"),h(n)}}catch(u){console.error("Error fetching appointments data:",u)}let s=null;try{console.log("Fetching Rx Orders data from API...");const u=await fetch("/api/dashboard/rx-orders",{method:"GET",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":i||"",Accept:"application/json"}});if(!u.ok)throw new Error(`Rx Orders API request failed with status ${u.status}`);const g=await u.json();if(console.log("Rx Orders API Response:",g),g.success){s=g.data,console.log("Rx Orders data loaded:",s);const M=document.querySelector('[data-target="78"]'),m=document.querySelector('[data-target="22"]'),v=document.querySelector('[data-target="2389"]');if(console.log("Found elements:",{processedElement:!!M,pendingElement:!!m,totalOrdersElement:!!v}),console.log("Element details:",{processedElement:M,pendingElement:m,totalOrdersElement:v}),M&&(console.log("Updating processed from",M.textContent,"to",g.data.processed_percentage),M.textContent=g.data.processed_percentage),m&&(console.log("Updating pending from",m.textContent,"to",g.data.pending_percentage),m.textContent=g.data.pending_percentage),v)console.log("Updating total orders from",v.textContent,"to",g.data.total_orders_this_month.toLocaleString()),v.textContent=g.data.total_orders_this_month.toLocaleString();else{console.log("totalOrdersElement not found, trying fallback selector...");const S=document.querySelector('span[data-target="2389"]');S?(console.log("Found fallback element:",S),S.textContent=g.data.total_orders_this_month.toLocaleString()):console.log("Fallback element also not found")}const b=document.getElementById("processedProgressBar"),w=document.getElementById("pendingProgressBar");console.log("Found progress bars:",{processedProgressBar:!!b,pendingProgressBar:!!w}),b&&(console.log("Updating processed progress bar to",g.data.processed_percentage+"%"),b.style.width=g.data.processed_percentage+"%"),w&&(console.log("Updating pending progress bar to",g.data.pending_percentage+"%"),w.style.width=g.data.pending_percentage+"%"),console.log("Updated Rx Orders data:",{processed:g.data.processed_percentage,pending:g.data.pending_percentage,total:g.data.total_orders_this_month})}}catch(u){console.error("Error fetching Rx Orders data:",u)}let o=null;try{console.log("Fetching Rx Users data from API...");const u=await fetch("/api/dashboard/rx-users",{method:"GET",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":i||"",Accept:"application/json"}});if(!u.ok)throw new Error(`Rx Users API request failed with status ${u.status}`);const g=await u.json();if(console.log("Rx Users API Response:",g),g.success){o=g.data,console.log("Rx Users data loaded:",o);const M=document.querySelector('[data-target="2000"]'),m=document.querySelector('[data-target="90"]'),v=document.querySelector('[data-target="10"]');M&&(M.textContent=g.data.total_users.toLocaleString()),m&&(m.textContent=g.data.male_percentage),v&&(v.textContent=g.data.female_percentage),d(o)}}catch(u){console.error("Error fetching Rx Users data:",u)}let r=null;try{console.log("Fetching Total Pharmacies data from API...");const u=await fetch("/api/dashboard/total-pharmacies",{method:"GET",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":i||"",Accept:"application/json"}});if(!u.ok)throw new Error(`Total Pharmacies API request failed with status ${u.status}`);const g=await u.json();if(console.log("Total Pharmacies API Response:",g),g.success){r=g.data;const M=document.getElementById("totalPharmaciesCurrentTotal"),m=document.getElementById("totalPharmaciesCurrentMonthNew");M&&(M.textContent=g.data.current_total.toLocaleString()),m&&(m.textContent=g.data.current_month_new.toLocaleString()),c(r)}}catch(u){console.error("Error fetching Total Pharmacies data:",u)}function h(u){const g=document.querySelector("#appointmentsChart");if(!g){console.error("Appointments chart canvas not found");return}window.appointmentsChart&&typeof window.appointmentsChart.destroy=="function"&&window.appointmentsChart.destroy();const M=g.getContext("2d"),m=u.chart.data||[],v=u.chart.labels||["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];console.log("Creating chart with data:",m),console.log("Chart labels:",v),window.appointmentsChart=new Bt(M,{type:"bar",data:{labels:v,datasets:[{data:m,backgroundColor:"#3f51b5",borderRadius:4,borderSkipped:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{title:function(b){return u.chart.tooltips?u.chart.tooltips[b[0].dataIndex].month:b[0].label},label:function(b){return u.chart.tooltips?`Revenue: ${u.chart.tooltips[b.dataIndex].revenue}`:`Revenue: €${b.parsed.y.toLocaleString()}`}}}},scales:{x:{display:!1,grid:{display:!1}},y:{display:!1,grid:{display:!1}}}}})}function c(u){const g=document.querySelector("#totalPharmaciesChart");if(!g)return;window.totalPharmaciesChart&&typeof window.totalPharmaciesChart.destroy=="function"&&window.totalPharmaciesChart.destroy();const M=g.getContext("2d"),m=getComputedStyle(document.documentElement),v=m.getPropertyValue("--bs-primary").trim()||"#3e60d5",b=m.getPropertyValue("--bs-primary-rgb").trim()||"62, 96, 213",w=m.getPropertyValue("--bs-secondary-color").trim()||"#6c757d",S=m.getPropertyValue("--bs-border-color").trim()||"rgba(0,0,0,0.1)",k=M.createLinearGradient(0,0,0,300);k.addColorStop(0,`rgba(${b}, 0.30)`),k.addColorStop(1,`rgba(${b}, 0.02)`),window.totalPharmaciesChart=new Bt(M,{type:"line",data:{labels:u.chart.labels,datasets:[{label:"Total Pharmacies",data:u.chart.data,fill:!0,backgroundColor:k,borderColor:v,borderWidth:2,tension:.35,pointRadius:3,pointHoverRadius:4,pointBackgroundColor:v,pointBorderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{title:function(_){var E,T;return((T=(E=u.chart.tooltips)==null?void 0:E[_[0].dataIndex])==null?void 0:T.month)||_[0].label},label:function(_){var D;const E=(D=u.chart.tooltips)==null?void 0:D[_.dataIndex],T=_.parsed.y.toLocaleString(),H=E!=null&&E.as_of?` (as of ${E.as_of})`:"";return`Total pharmacies: ${T}${H}`}}}},scales:{x:{grid:{display:!1},ticks:{color:w},border:{display:!1}},y:{beginAtZero:!0,ticks:{precision:0,color:w},grid:{color:S},border:{display:!1}}}}})}function d(u){const g=document.querySelector("#rxUsersChart");if(!g){console.error("Rx Users chart canvas not found");return}window.rxUsersChart&&typeof window.rxUsersChart.destroy=="function"&&window.rxUsersChart.destroy();const M=g.getContext("2d"),m=u.age_groups,v=u.percentages,b=Object.entries(m).filter(([_,E])=>E>0),w=b.map(([_])=>_),S=b.map(([_,E])=>E),k=["#3f51b5","#ff9800","#4caf50","#f44336"];console.log("Creating Rx Users chart with age group data:",{originalData:m,filteredLabels:w,filteredValues:S,percentages:v}),window.rxUsersChart=new Bt(M,{type:"doughnut",data:{labels:w,datasets:[{data:S,backgroundColor:k,borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:function(_){const E=_.label||"",T=_.parsed,H=v[E]||0;return`${E}: ${T} users (${H}%)`}}}},cutout:"60%"}})}});export{Bt as C,Is as S,sW as b,rW as c,oW as i};
