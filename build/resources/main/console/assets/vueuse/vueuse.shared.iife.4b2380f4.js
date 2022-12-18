var VueDemi=function(o,i,F){if(o.install)return o;if(!i)return console.error("[vue-demi] no Vue instance found, please be sure to import `vue` before `vue-demi`."),o;if(i.version.slice(0,4)==="2.7."){let O=function(w,A){var g,C={},N={config:i.config,use:i.use.bind(i),mixin:i.mixin.bind(i),component:i.component.bind(i),provide:function(b,$){return C[b]=$,this},directive:function(b,$){return $?(i.directive(b,$),N):i.directive(b)},mount:function(b,$){return g||(g=new i(Object.assign({propsData:A},w,{provide:Object.assign(C,w.provide)})),g.$mount(b,$),g)},unmount:function(){g&&(g.$destroy(),g=void 0)}};return N};var zt=O;for(var m in i)o[m]=i[m];o.isVue2=!0,o.isVue3=!1,o.install=function(){},o.Vue=i,o.Vue2=i,o.version=i.version,o.warn=i.util.warn,o.createApp=O}else if(i.version.slice(0,2)==="2.")if(F){for(var m in F)o[m]=F[m];o.isVue2=!0,o.isVue3=!1,o.install=function(){},o.Vue=i,o.Vue2=i,o.version=i.version}else console.error("[vue-demi] no VueCompositionAPI instance found, please be sure to import `@vue/composition-api` before `vue-demi`.");else if(i.version.slice(0,2)==="3."){for(var m in i)o[m]=i[m];o.isVue2=!1,o.isVue3=!0,o.install=function(){},o.Vue=i,o.Vue2=void 0,o.version=i.version,o.set=function(O,w,A){return Array.isArray(O)?(O.length=Math.max(O.length,w),O.splice(w,1,A),A):(O[w]=A,A)},o.del=function(O,w){if(Array.isArray(O)){O.splice(w,1);return}delete O[w]}}else console.error("[vue-demi] Vue version "+i.version+" is unsupported.");return o}(this.VueDemi=this.VueDemi||(typeof VueDemi!="undefined"?VueDemi:{}),this.Vue||(typeof Vue!="undefined"?Vue:void 0),this.VueCompositionAPI||(typeof VueCompositionAPI!="undefined"?VueCompositionAPI:void 0));(function(o,i){"use strict";var F=Object.defineProperty,m=Object.defineProperties,zt=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,g=(t,e,r)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,C=(t,e)=>{for(var r in e||(e={}))w.call(e,r)&&g(t,r,e[r]);if(O)for(var r of O(e))A.call(e,r)&&g(t,r,e[r]);return t},N=(t,e)=>m(t,zt(e));function b(t,e){var r;const n=i.shallowRef();return i.watchEffect(()=>{n.value=t()},N(C({},e),{flush:(r=e==null?void 0:e.flush)!=null?r:"sync"})),i.readonly(n)}var $;const E=typeof window!="undefined",Zt=t=>typeof t!="undefined",Jt=(t,...e)=>{t||console.warn(...e)},D=Object.prototype.toString,Xt=t=>typeof t=="boolean",G=t=>typeof t=="function",qt=t=>typeof t=="number",Kt=t=>typeof t=="string",Qt=t=>D.call(t)==="[object Object]",Vt=t=>typeof window!="undefined"&&D.call(t)==="[object Window]",Dt=()=>Date.now(),x=()=>+Date.now(),xt=(t,e,r)=>Math.min(r,Math.max(e,t)),tt=()=>{},te=(t,e)=>(t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t),ee=E&&(($=window==null?void 0:window.navigator)==null?void 0:$.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent),re=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);function y(t){return typeof t=="function"?t():i.unref(t)}function M(t,e){function r(...n){t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})}return r}const W=t=>t();function k(t,e={}){let r,n;return l=>{const c=y(t),u=y(e.maxWait);if(r&&clearTimeout(r),c<=0||u!==void 0&&u<=0)return n&&(clearTimeout(n),n=null),l();u&&!n&&(n=setTimeout(()=>{r&&clearTimeout(r),n=null,l()},u)),r=setTimeout(()=>{n&&clearTimeout(n),n=null,l()},c)}}function z(t,e=!0,r=!0){let n=0,a,l=!0;const c=()=>{a&&(clearTimeout(a),a=void 0)};return d=>{const _=y(t),s=Date.now()-n;if(c(),_<=0)return n=Date.now(),d();s>_&&(r||!l)?(n=Date.now(),d()):e&&(a=setTimeout(()=>{n=Date.now(),l=!0,c(),d()},_-s)),!r&&!a&&(a=setTimeout(()=>l=!0,_)),l=!1}}function et(t=W){const e=i.ref(!0);function r(){e.value=!1}function n(){e.value=!0}return{isActive:e,pause:r,resume:n,eventFilter:(...l)=>{e.value&&t(...l)}}}function rt(t="this function"){if(!i.isVue3)throw new Error(`[VueUse] ${t} is only works on Vue 3.`)}const ne={mounted:i.isVue3?"mounted":"inserted",updated:i.isVue3?"updated":"componentUpdated",unmounted:i.isVue3?"unmounted":"unbind"};function Z(t,e=!1,r="Timeout"){return new Promise((n,a)=>{setTimeout(e?()=>a(r):n,t)})}function oe(t){return t}function ae(t){let e;function r(){return e||(e=t()),e}return r.reset=async()=>{const n=e;e=void 0,n&&await n},r}function ie(t){return t()}function le(t,...e){return e.some(r=>r in t)}function ce(t,e){var r;if(typeof t=="number")return t+e;const n=((r=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:r[0])||"",a=t.slice(n.length),l=parseFloat(n)+e;return Number.isNaN(l)?t:l+a}function ue(t,e,r=!1){return e.reduce((n,a)=>(a in t&&(!r||t[a]!==void 0)&&(n[a]=t[a]),n),{})}function nt(t,e){let r,n,a;const l=i.ref(!0),c=()=>{l.value=!0,a()};i.watch(t,c,{flush:"sync"});const u=G(e)?e:e.get,d=G(e)?void 0:e.set,_=i.customRef((s,f)=>(n=s,a=f,{get(){return l.value&&(r=u(),l.value=!1),n(),r},set(p){d==null||d(p)}}));return Object.isExtensible(_)&&(_.trigger=c),_}function se(){const t=[],e=a=>{const l=t.indexOf(a);l!==-1&&t.splice(l,1)};return{on:a=>(t.push(a),{off:()=>e(a)}),off:e,trigger:a=>{t.forEach(l=>l(a))}}}function fe(t){let e=!1,r;const n=i.effectScope(!0);return()=>(e||(r=n.run(t),e=!0),r)}function de(t){const e=Symbol("InjectionState");return[(...a)=>{i.provide(e,t(...a))},()=>i.inject(e)]}function j(t){return i.getCurrentScope()?(i.onScopeDispose(t),!0):!1}function pe(t){let e=0,r,n;const a=()=>{e-=1,n&&e<=0&&(n.stop(),r=void 0,n=void 0)};return(...l)=>(e+=1,r||(n=i.effectScope(!0),r=n.run(()=>t(...l))),j(a),r)}function ot(t,e,{enumerable:r=!1,unwrap:n=!0}={}){rt();for(const[a,l]of Object.entries(e))a!=="value"&&(i.isRef(l)&&n?Object.defineProperty(t,a,{get(){return l.value},set(c){l.value=c},enumerable:r}):Object.defineProperty(t,a,{value:l,enumerable:r}));return t}function ye(t,e){return e==null?i.unref(t):i.unref(t)[e]}function _e(t){return i.unref(t)!=null}var ve=Object.defineProperty,at=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,it=(t,e,r)=>e in t?ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,we=(t,e)=>{for(var r in e||(e={}))he.call(e,r)&&it(t,r,e[r]);if(at)for(var r of at(e))Oe.call(e,r)&&it(t,r,e[r]);return t};function ge(t,e){if(typeof Symbol!="undefined"){const r=we({},t);return Object.defineProperty(r,Symbol.iterator,{enumerable:!1,value(){let n=0;return{next:()=>({value:e[n++],done:n>e.length})}}}),r}else return Object.assign([...e],t)}function J(t,e){const r=(e==null?void 0:e.computedGetter)===!1?i.unref:y;return function(...n){return i.computed(()=>t.apply(this,n.map(a=>r(a))))}}function me(t,e={}){let r=[],n;if(Array.isArray(e))r=e;else{n=e;const{includeOwnProperties:a=!0}=e;r.push(...Object.keys(t)),a&&r.push(...Object.getOwnPropertyNames(t))}return Object.fromEntries(r.map(a=>{const l=t[a];return[a,typeof l=="function"?J(l.bind(t),n):l]}))}function lt(t){if(!i.isRef(t))return i.reactive(t);const e=new Proxy({},{get(r,n,a){return i.unref(Reflect.get(t.value,n,a))},set(r,n,a){return i.isRef(t.value[n])&&!i.isRef(a)?t.value[n].value=a:t.value[n]=a,!0},deleteProperty(r,n){return Reflect.deleteProperty(t.value,n)},has(r,n){return Reflect.has(t.value,n)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return i.reactive(e)}function ct(t){return lt(i.computed(t))}function Pe(t,...e){const r=e.flat();return ct(()=>Object.fromEntries(Object.entries(i.toRefs(t)).filter(n=>!r.includes(n[0]))))}function be(t,...e){const r=e.flat();return i.reactive(Object.fromEntries(r.map(n=>[n,i.toRef(t,n)])))}function ut(t,e=1e4){return i.customRef((r,n)=>{let a=t,l;const c=()=>setTimeout(()=>{a=t,n()},y(e));return j(()=>{clearTimeout(l)}),{get(){return r(),a},set(u){a=u,n(),clearTimeout(l),l=c()}}})}function st(t,e=200,r={}){return M(k(e,r),t)}function X(t,e=200,r={}){const n=i.ref(t.value),a=st(()=>{n.value=t.value},e,r);return i.watch(t,()=>a()),n}function $e(t,e){return i.computed({get(){var r;return(r=t.value)!=null?r:e},set(r){t.value=r}})}function ft(t,e=200,r=!1,n=!0){return M(z(e,r,n),t)}function q(t,e=200,r=!0,n=!0){if(e<=0)return t;const a=i.ref(t.value),l=ft(()=>{a.value=t.value},e,r,n);return i.watch(t,()=>l()),a}function dt(t,e={}){let r=t,n,a;const l=i.customRef((p,h)=>(n=p,a=h,{get(){return c()},set(v){u(v)}}));function c(p=!0){return p&&n(),r}function u(p,h=!0){var v,S;if(p===r)return;const P=r;((v=e.onBeforeChange)==null?void 0:v.call(e,p,P))!==!1&&(r=p,(S=e.onChanged)==null||S.call(e,p,P),h&&a())}return ot(l,{get:c,set:u,untrackedGet:()=>c(!1),silentSet:p=>u(p,!1),peek:()=>c(!1),lay:p=>u(p,!1)},{enumerable:!0})}const Se=dt;function Ae(t){return typeof t=="function"?i.computed(t):i.ref(t)}function je(...t){if(t.length===2){const[e,r]=t;e.value=r}if(t.length===3)if(i.isVue2)i.set(...t);else{const[e,r,n]=t;e[r]=n}}function Ie(t,e,r={}){var n,a;const{flush:l="sync",deep:c=!1,immediate:u=!0,direction:d="both",transform:_={}}=r;let s,f;const p=(n=_.ltr)!=null?n:v=>v,h=(a=_.rtl)!=null?a:v=>v;return(d==="both"||d==="ltr")&&(s=i.watch(t,v=>e.value=p(v),{flush:l,deep:c,immediate:u})),(d==="both"||d==="rtl")&&(f=i.watch(e,v=>t.value=h(v),{flush:l,deep:c,immediate:u})),()=>{s==null||s(),f==null||f()}}function Te(t,e,r={}){const{flush:n="sync",deep:a=!1,immediate:l=!0}=r;return Array.isArray(e)||(e=[e]),i.watch(t,c=>e.forEach(u=>u.value=c),{flush:n,deep:a,immediate:l})}var Fe=Object.defineProperty,Ee=Object.defineProperties,Me=Object.getOwnPropertyDescriptors,pt=Object.getOwnPropertySymbols,Re=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,yt=(t,e,r)=>e in t?Fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ne=(t,e)=>{for(var r in e||(e={}))Re.call(e,r)&&yt(t,r,e[r]);if(pt)for(var r of pt(e))Ce.call(e,r)&&yt(t,r,e[r]);return t},We=(t,e)=>Ee(t,Me(e));function Ue(t){if(!i.isRef(t))return i.toRefs(t);const e=Array.isArray(t.value)?new Array(t.value.length):{};for(const r in t.value)e[r]=i.customRef(()=>({get(){return t.value[r]},set(n){if(Array.isArray(t.value)){const a=[...t.value];a[r]=n,t.value=a}else{const a=We(Ne({},t.value),{[r]:n});Object.setPrototypeOf(a,t.value),t.value=a}}}));return e}function Be(t,e=!0){i.getCurrentInstance()?i.onBeforeMount(t):e?t():i.nextTick(t)}function Le(t){i.getCurrentInstance()&&i.onBeforeUnmount(t)}function He(t,e=!0){i.getCurrentInstance()?i.onMounted(t):e?t():i.nextTick(t)}function Ye(t){i.getCurrentInstance()&&i.onUnmounted(t)}function K(t,e=!1){function r(f,{flush:p="sync",deep:h=!1,timeout:v,throwOnTimeout:S}={}){let P=null;const V=[new Promise(Y=>{P=i.watch(t,T=>{f(T)!==e&&(P==null||P(),Y(T))},{flush:p,deep:h,immediate:!0})})];return v!=null&&V.push(Z(v,S).then(()=>y(t)).finally(()=>P==null?void 0:P())),Promise.race(V)}function n(f,p){if(!i.isRef(f))return r(T=>T===f,p);const{flush:h="sync",deep:v=!1,timeout:S,throwOnTimeout:P}=p??{};let I=null;const Y=[new Promise(T=>{I=i.watch([t,f],([kt,ln])=>{e!==(kt===ln)&&(I==null||I(),T(kt))},{flush:h,deep:v,immediate:!0})})];return S!=null&&Y.push(Z(S,P).then(()=>y(t)).finally(()=>(I==null||I(),y(t)))),Promise.race(Y)}function a(f){return r(p=>Boolean(p),f)}function l(f){return n(null,f)}function c(f){return n(void 0,f)}function u(f){return r(Number.isNaN,f)}function d(f,p){return r(h=>{const v=Array.from(h);return v.includes(f)||v.includes(y(f))},p)}function _(f){return s(1,f)}function s(f=1,p){let h=-1;return r(()=>(h+=1,h>=f),p)}return Array.isArray(y(t))?{toMatch:r,toContains:d,changed:_,changedTimes:s,get not(){return K(t,!e)}}:{toMatch:r,toBe:n,toBeTruthy:a,toBeNull:l,toBeNaN:u,toBeUndefined:c,changed:_,changedTimes:s,get not(){return K(t,!e)}}}function Ge(t){return K(t)}function ke(t,e){return i.computed(()=>y(t).every((r,n,a)=>e(y(r),n,a)))}function ze(t,e){return i.computed(()=>y(t).map(r=>y(r)).filter(e))}function Ze(t,e){return i.computed(()=>y(y(t).find((r,n,a)=>e(y(r),n,a))))}function Je(t,e){return i.computed(()=>y(t).findIndex((r,n,a)=>e(y(r),n,a)))}function Xe(t,e){return i.computed(()=>y(t).map(r=>y(r)).join(y(e)))}function qe(t,e){return i.computed(()=>y(t).map(r=>y(r)).map(e))}function Ke(t,e,...r){const n=(a,l,c)=>e(y(a),y(l),c);return i.computed(()=>{const a=y(t);return r.length?a.reduce(n,y(r[0])):a.reduce(n)})}function Qe(t,e){return i.computed(()=>y(t).some((r,n,a)=>e(y(r),n,a)))}function Ve(t=0,e={}){const r=i.ref(t),{max:n=1/0,min:a=-1/0}=e,l=(s=1)=>r.value=Math.min(n,r.value+s),c=(s=1)=>r.value=Math.max(a,r.value-s),u=()=>r.value,d=s=>r.value=Math.max(a,Math.min(n,s));return{count:r,inc:l,dec:c,get:u,set:d,reset:(s=t)=>(t=s,d(s))}}const De=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,xe=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g,tr=(t,e,r,n)=>{let a=t<12?"AM":"PM";return n&&(a=a.split("").reduce((l,c)=>l+=`${c}.`,"")),r?a.toLowerCase():a},_t=(t,e,r={})=>{var n;const a=t.getFullYear(),l=t.getMonth(),c=t.getDate(),u=t.getHours(),d=t.getMinutes(),_=t.getSeconds(),s=t.getMilliseconds(),f=t.getDay(),p=(n=r.customMeridiem)!=null?n:tr,h={YY:()=>String(a).slice(-2),YYYY:()=>a,M:()=>l+1,MM:()=>`${l+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(r.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(r.locales,{month:"long"}),D:()=>String(c),DD:()=>`${c}`.padStart(2,"0"),H:()=>String(u),HH:()=>`${u}`.padStart(2,"0"),h:()=>`${u%12||12}`.padStart(1,"0"),hh:()=>`${u%12||12}`.padStart(2,"0"),m:()=>String(d),mm:()=>`${d}`.padStart(2,"0"),s:()=>String(_),ss:()=>`${_}`.padStart(2,"0"),SSS:()=>`${s}`.padStart(3,"0"),d:()=>f,dd:()=>t.toLocaleDateString(r.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(r.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(r.locales,{weekday:"long"}),A:()=>p(u,d),AA:()=>p(u,d,!1,!0),a:()=>p(u,d,!0),aa:()=>p(u,d,!0,!0)};return e.replace(xe,(v,S)=>S||h[v]())},vt=t=>{if(t===null)return new Date(NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(De);if(e){const r=e[2]-1||0,n=(e[7]||"0").substring(0,3);return new Date(e[1],r,e[3]||1,e[4]||0,e[5]||0,e[6]||0,n)}}return new Date(t)};function er(t,e="HH:mm:ss",r={}){return i.computed(()=>_t(vt(y(t)),y(e),r))}function ht(t,e=1e3,r={}){const{immediate:n=!0,immediateCallback:a=!1}=r;let l=null;const c=i.ref(!1);function u(){l&&(clearInterval(l),l=null)}function d(){c.value=!1,u()}function _(){i.unref(e)<=0||(c.value=!0,a&&t(),u(),l=setInterval(t,y(e)))}if(n&&E&&_(),i.isRef(e)){const s=i.watch(e,()=>{c.value&&E&&_()});j(s)}return j(d),{isActive:c,pause:d,resume:_}}var rr=Object.defineProperty,Ot=Object.getOwnPropertySymbols,nr=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable,wt=(t,e,r)=>e in t?rr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ar=(t,e)=>{for(var r in e||(e={}))nr.call(e,r)&&wt(t,r,e[r]);if(Ot)for(var r of Ot(e))or.call(e,r)&&wt(t,r,e[r]);return t};function ir(t=1e3,e={}){const{controls:r=!1,immediate:n=!0,callback:a}=e,l=i.ref(0),c=()=>l.value+=1,u=ht(a?()=>{c(),a(l.value)}:c,t,{immediate:n});return r?ar({counter:l},u):l}function lr(t,e={}){var r;const n=i.ref((r=e.initialValue)!=null?r:null);return i.watch(t,()=>n.value=x(),e),n}function gt(t,e,r={}){const{immediate:n=!0}=r,a=i.ref(!1);let l=null;function c(){l&&(clearTimeout(l),l=null)}function u(){a.value=!1,c()}function d(..._){c(),a.value=!0,l=setTimeout(()=>{a.value=!1,l=null,t(..._)},y(e))}return n&&(a.value=!0,E&&d()),j(u),{isPending:a,start:d,stop:u}}var cr=Object.defineProperty,mt=Object.getOwnPropertySymbols,ur=Object.prototype.hasOwnProperty,sr=Object.prototype.propertyIsEnumerable,Pt=(t,e,r)=>e in t?cr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,fr=(t,e)=>{for(var r in e||(e={}))ur.call(e,r)&&Pt(t,r,e[r]);if(mt)for(var r of mt(e))sr.call(e,r)&&Pt(t,r,e[r]);return t};function dr(t=1e3,e={}){const{controls:r=!1,callback:n}=e,a=gt(n??tt,t,e),l=i.computed(()=>!a.isPending.value);return r?fr({ready:l},a):l}function pr(t,e={}){const{method:r="parseFloat",radix:n,nanToZero:a}=e;return i.computed(()=>{let l=y(t);return typeof l=="string"&&(l=Number[r](l,n)),a&&isNaN(l)&&(l=0),l})}function yr(t){return i.computed(()=>`${y(t)}`)}function _r(t=!1,e={}){const{truthyValue:r=!0,falsyValue:n=!1}=e,a=i.isRef(t),l=i.ref(t);function c(u){if(arguments.length)return l.value=u,l.value;{const d=y(r);return l.value=l.value===d?y(n):d,l.value}}return a?c:[l,c]}function vr(t,e,r){let n=(r==null?void 0:r.immediate)?[]:[...t instanceof Function?t():Array.isArray(t)?t:i.unref(t)];return i.watch(t,(a,l,c)=>{const u=new Array(n.length),d=[];for(const s of a){let f=!1;for(let p=0;p<n.length;p++)if(!u[p]&&s===n[p]){u[p]=!0,f=!0;break}f||d.push(s)}const _=n.filter((s,f)=>!u[f]);e(a,n,d,_,c),n=[...a]},r)}var bt=Object.getOwnPropertySymbols,hr=Object.prototype.hasOwnProperty,Or=Object.prototype.propertyIsEnumerable,wr=(t,e)=>{var r={};for(var n in t)hr.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&bt)for(var n of bt(t))e.indexOf(n)<0&&Or.call(t,n)&&(r[n]=t[n]);return r};function R(t,e,r={}){const n=r,{eventFilter:a=W}=n,l=wr(n,["eventFilter"]);return i.watch(t,M(a,e),l)}var $t=Object.getOwnPropertySymbols,gr=Object.prototype.hasOwnProperty,mr=Object.prototype.propertyIsEnumerable,Pr=(t,e)=>{var r={};for(var n in t)gr.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&$t)for(var n of $t(t))e.indexOf(n)<0&&mr.call(t,n)&&(r[n]=t[n]);return r};function br(t,e,r){const n=r,{count:a}=n,l=Pr(n,["count"]),c=i.ref(0),u=R(t,(...d)=>{c.value+=1,c.value>=y(a)&&i.nextTick(()=>u()),e(...d)},l);return{count:c,stop:u}}var $r=Object.defineProperty,Sr=Object.defineProperties,Ar=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable,jt=(t,e,r)=>e in t?$r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,jr=(t,e)=>{for(var r in e||(e={}))St.call(e,r)&&jt(t,r,e[r]);if(U)for(var r of U(e))At.call(e,r)&&jt(t,r,e[r]);return t},Ir=(t,e)=>Sr(t,Ar(e)),Tr=(t,e)=>{var r={};for(var n in t)St.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&U)for(var n of U(t))e.indexOf(n)<0&&At.call(t,n)&&(r[n]=t[n]);return r};function It(t,e,r={}){const n=r,{debounce:a=0,maxWait:l=void 0}=n,c=Tr(n,["debounce","maxWait"]);return R(t,e,Ir(jr({},c),{eventFilter:k(a,{maxWait:l})}))}var Fr=Object.defineProperty,Er=Object.defineProperties,Mr=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,Tt=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,Et=(t,e,r)=>e in t?Fr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Rr=(t,e)=>{for(var r in e||(e={}))Tt.call(e,r)&&Et(t,r,e[r]);if(B)for(var r of B(e))Ft.call(e,r)&&Et(t,r,e[r]);return t},Cr=(t,e)=>Er(t,Mr(e)),Nr=(t,e)=>{var r={};for(var n in t)Tt.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&B)for(var n of B(t))e.indexOf(n)<0&&Ft.call(t,n)&&(r[n]=t[n]);return r};function Q(t,e,r={}){const n=r,{eventFilter:a=W}=n,l=Nr(n,["eventFilter"]),c=M(a,e);let u,d,_;if(l.flush==="sync"){const s=i.ref(!1);d=()=>{},u=f=>{s.value=!0,f(),s.value=!1},_=i.watch(t,(...f)=>{s.value||c(...f)},l)}else{const s=[],f=i.ref(0),p=i.ref(0);d=()=>{f.value=p.value},s.push(i.watch(t,()=>{p.value++},Cr(Rr({},l),{flush:"sync"}))),u=h=>{const v=p.value;h(),f.value+=p.value-v},s.push(i.watch(t,(...h)=>{const v=f.value>0&&f.value===p.value;f.value=0,p.value=0,!v&&c(...h)},l)),_=()=>{s.forEach(h=>h())}}return{stop:_,ignoreUpdates:u,ignorePrevAsyncUpdates:d}}function Wr(t,e,r){const n=i.watch(t,(...a)=>(i.nextTick(()=>n()),e(...a)),r)}var Ur=Object.defineProperty,Br=Object.defineProperties,Lr=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,Mt=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable,Ct=(t,e,r)=>e in t?Ur(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Hr=(t,e)=>{for(var r in e||(e={}))Mt.call(e,r)&&Ct(t,r,e[r]);if(L)for(var r of L(e))Rt.call(e,r)&&Ct(t,r,e[r]);return t},Yr=(t,e)=>Br(t,Lr(e)),Gr=(t,e)=>{var r={};for(var n in t)Mt.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&L)for(var n of L(t))e.indexOf(n)<0&&Rt.call(t,n)&&(r[n]=t[n]);return r};function Nt(t,e,r={}){const n=r,{eventFilter:a}=n,l=Gr(n,["eventFilter"]),{eventFilter:c,pause:u,resume:d,isActive:_}=et(a);return{stop:R(t,e,Yr(Hr({},l),{eventFilter:c})),pause:u,resume:d,isActive:_}}var kr=Object.defineProperty,zr=Object.defineProperties,Zr=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Wt=Object.prototype.hasOwnProperty,Ut=Object.prototype.propertyIsEnumerable,Bt=(t,e,r)=>e in t?kr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Jr=(t,e)=>{for(var r in e||(e={}))Wt.call(e,r)&&Bt(t,r,e[r]);if(H)for(var r of H(e))Ut.call(e,r)&&Bt(t,r,e[r]);return t},Xr=(t,e)=>zr(t,Zr(e)),qr=(t,e)=>{var r={};for(var n in t)Wt.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&H)for(var n of H(t))e.indexOf(n)<0&&Ut.call(t,n)&&(r[n]=t[n]);return r};function Lt(t,e,r={}){const n=r,{throttle:a=0,trailing:l=!0,leading:c=!0}=n,u=qr(n,["throttle","trailing","leading"]);return R(t,e,Xr(Jr({},u),{eventFilter:z(a,l,c)}))}var Kr=Object.defineProperty,Qr=Object.defineProperties,Vr=Object.getOwnPropertyDescriptors,Ht=Object.getOwnPropertySymbols,Dr=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable,Yt=(t,e,r)=>e in t?Kr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,tn=(t,e)=>{for(var r in e||(e={}))Dr.call(e,r)&&Yt(t,r,e[r]);if(Ht)for(var r of Ht(e))xr.call(e,r)&&Yt(t,r,e[r]);return t},en=(t,e)=>Qr(t,Vr(e));function rn(t,e,r={}){let n;function a(){if(!n)return;const s=n;n=void 0,s()}function l(s){n=s}const c=(s,f)=>(a(),e(s,f,l)),u=Q(t,c,r),{ignoreUpdates:d}=u,_=()=>{let s;return d(()=>{s=c(nn(t),on(t))}),s};return en(tn({},u),{trigger:_})}function nn(t){return i.isReactive(t)?t:Array.isArray(t)?t.map(e=>Gt(e)):Gt(t)}function Gt(t){return typeof t=="function"?t():i.unref(t)}function on(t){return Array.isArray(t)?t.map(()=>{}):void 0}function an(t,e,r){return i.watch(t,(n,a,l)=>{n&&e(n,a,l)},r)}o.__onlyVue3=rt,o.assert=Jt,o.autoResetRef=ut,o.bypassFilter=W,o.clamp=xt,o.computedEager=b,o.computedWithControl=nt,o.containsProp=le,o.controlledComputed=nt,o.controlledRef=Se,o.createEventHook=se,o.createFilterWrapper=M,o.createGlobalState=fe,o.createInjectionState=de,o.createReactiveFn=J,o.createSharedComposable=pe,o.createSingletonPromise=ae,o.debounceFilter=k,o.debouncedRef=X,o.debouncedWatch=It,o.directiveHooks=ne,o.eagerComputed=b,o.extendRef=ot,o.formatDate=_t,o.get=ye,o.hasOwn=re,o.identity=oe,o.ignorableWatch=Q,o.increaseWithUnit=ce,o.invoke=ie,o.isBoolean=Xt,o.isClient=E,o.isDef=Zt,o.isDefined=_e,o.isFunction=G,o.isIOS=ee,o.isNumber=qt,o.isObject=Qt,o.isString=Kt,o.isWindow=Vt,o.makeDestructurable=ge,o.noop=tt,o.normalizeDate=vt,o.now=Dt,o.objectPick=ue,o.pausableFilter=et,o.pausableWatch=Nt,o.promiseTimeout=Z,o.rand=te,o.reactify=J,o.reactifyObject=me,o.reactiveComputed=ct,o.reactiveOmit=Pe,o.reactivePick=be,o.refAutoReset=ut,o.refDebounced=X,o.refDefault=$e,o.refThrottled=q,o.refWithControl=dt,o.resolveRef=Ae,o.resolveUnref=y,o.set=je,o.syncRef=Ie,o.syncRefs=Te,o.throttleFilter=z,o.throttledRef=q,o.throttledWatch=Lt,o.timestamp=x,o.toReactive=lt,o.toRefs=Ue,o.tryOnBeforeMount=Be,o.tryOnBeforeUnmount=Le,o.tryOnMounted=He,o.tryOnScopeDispose=j,o.tryOnUnmounted=Ye,o.until=Ge,o.useArrayEvery=ke,o.useArrayFilter=ze,o.useArrayFind=Ze,o.useArrayFindIndex=Je,o.useArrayJoin=Xe,o.useArrayMap=qe,o.useArrayReduce=Ke,o.useArraySome=Qe,o.useCounter=Ve,o.useDateFormat=er,o.useDebounce=X,o.useDebounceFn=st,o.useInterval=ir,o.useIntervalFn=ht,o.useLastChanged=lr,o.useThrottle=q,o.useThrottleFn=ft,o.useTimeout=dr,o.useTimeoutFn=gt,o.useToNumber=pr,o.useToString=yr,o.useToggle=_r,o.watchArray=vr,o.watchAtMost=br,o.watchDebounced=It,o.watchIgnorable=Q,o.watchOnce=Wr,o.watchPausable=Nt,o.watchThrottled=Lt,o.watchTriggerable=rn,o.watchWithFilter=R,o.whenever=an})(this.VueUse=this.VueUse||{},VueDemi);
