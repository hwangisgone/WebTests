var fp=Object.defineProperty;var hp=(k,T,z)=>T in k?fp(k,T,{enumerable:!0,configurable:!0,writable:!0,value:z}):k[T]=z;var Ni=(k,T,z)=>hp(k,typeof T!="symbol"?T+"":T,z);(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const te of document.querySelectorAll('link[rel="modulepreload"]'))V(te);new MutationObserver(te=>{for(const ue of te)if(ue.type==="childList")for(const fe of ue.addedNodes)fe.tagName==="LINK"&&fe.rel==="modulepreload"&&V(fe)}).observe(document,{childList:!0,subtree:!0});function z(te){const ue={};return te.integrity&&(ue.integrity=te.integrity),te.referrerPolicy&&(ue.referrerPolicy=te.referrerPolicy),te.crossOrigin==="use-credentials"?ue.credentials="include":te.crossOrigin==="anonymous"?ue.credentials="omit":ue.credentials="same-origin",ue}function V(te){if(te.ep)return;te.ep=!0;const ue=z(te);fetch(te.href,ue)}})();function hs(){}function yc(k){return k()}function ac(){return Object.create(null)}function ds(k){k.forEach(yc)}function bc(k){return typeof k=="function"}function dp(k,T){return k!=k?T==T:k!==T||k&&typeof k=="object"||typeof k=="function"}function pp(k){return Object.keys(k).length===0}function Oe(k,T){k.appendChild(T)}function vc(k,T,z){k.insertBefore(T,z||null)}function qi(k){k.parentNode&&k.parentNode.removeChild(k)}function mp(k,T){for(let z=0;z<k.length;z+=1)k[z]&&k[z].d(T)}function ut(k){return document.createElement(k)}function dr(k){return document.createTextNode(k)}function Jt(){return dr(" ")}function hr(k,T,z,V){return k.addEventListener(T,z,V),()=>k.removeEventListener(T,z,V)}function Yt(k,T,z){z==null?k.removeAttribute(T):k.getAttribute(T)!==z&&k.setAttribute(T,z)}function gp(k){let T;return{p(...z){T=z,T.forEach(V=>k.push(V))},r(){T.forEach(z=>k.splice(k.indexOf(z),1))}}}function yp(k){return k===""?null:+k}function bp(k){return Array.from(k.childNodes)}function vp(k,T){T=""+T,k.data!==T&&(k.data=T)}function Ci(k,T){k.value=T??""}let Di;function fs(k){Di=k}const On=[],Ii=[];let Cn=[];const lc=[],wp=Promise.resolve();let Mi=!1;function xp(){Mi||(Mi=!0,wp.then(wc))}function Ri(k){Cn.push(k)}const Li=new Set;let Ln=0;function wc(){if(Ln!==0)return;const k=Di;do{try{for(;Ln<On.length;){const T=On[Ln];Ln++,fs(T),kp(T.$$)}}catch(T){throw On.length=0,Ln=0,T}for(fs(null),On.length=0,Ln=0;Ii.length;)Ii.pop()();for(let T=0;T<Cn.length;T+=1){const z=Cn[T];Li.has(z)||(Li.add(z),z())}Cn.length=0}while(On.length);for(;lc.length;)lc.pop()();Mi=!1,Li.clear(),fs(k)}function kp(k){if(k.fragment!==null){k.update(),ds(k.before_update);const T=k.dirty;k.dirty=[-1],k.fragment&&k.fragment.p(k.ctx,T),k.after_update.forEach(Ri)}}function zp(k){const T=[],z=[];Cn.forEach(V=>k.indexOf(V)===-1?T.push(V):z.push(V)),z.forEach(V=>V()),Cn=T}const Tp=new Set;function Sp(k,T){k&&k.i&&(Tp.delete(k),k.i(T))}function cc(k){return(k==null?void 0:k.length)!==void 0?k:Array.from(k)}function Ep(k,T,z){const{fragment:V,after_update:te}=k.$$;V&&V.m(T,z),Ri(()=>{const ue=k.$$.on_mount.map(yc).filter(bc);k.$$.on_destroy?k.$$.on_destroy.push(...ue):ds(ue),k.$$.on_mount=[]}),te.forEach(Ri)}function _p(k,T){const z=k.$$;z.fragment!==null&&(zp(z.after_update),ds(z.on_destroy),z.fragment&&z.fragment.d(T),z.on_destroy=z.fragment=null,z.ctx=[])}function $p(k,T){k.$$.dirty[0]===-1&&(On.push(k),xp(),k.$$.dirty.fill(0)),k.$$.dirty[T/31|0]|=1<<T%31}function Ap(k,T,z,V,te,ue,fe=null,we=[-1]){const Te=Di;fs(k);const W=k.$$={fragment:null,ctx:[],props:ue,update:hs,not_equal:te,bound:ac(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(T.context||(Te?Te.$$.context:[])),callbacks:ac(),dirty:we,skip_bound:!1,root:T.target||Te.$$.root};fe&&fe(W.root);let be=!1;if(W.ctx=z?z(k,T.props||{},(ve,Ke,...Me)=>{const Ge=Me.length?Me[0]:Ke;return W.ctx&&te(W.ctx[ve],W.ctx[ve]=Ge)&&(!W.skip_bound&&W.bound[ve]&&W.bound[ve](Ge),be&&$p(k,ve)),Ke}):[],W.update(),be=!0,ds(W.before_update),W.fragment=V?V(W.ctx):!1,T.target){if(T.hydrate){const ve=bp(T.target);W.fragment&&W.fragment.l(ve),ve.forEach(qi)}else W.fragment&&W.fragment.c();T.intro&&Sp(k.$$.fragment),Ep(k,T.target,T.anchor),wc()}fs(Te)}class Np{constructor(){Ni(this,"$$");Ni(this,"$$set")}$destroy(){_p(this,1),this.$destroy=hs}$on(T,z){if(!bc(z))return hs;const V=this.$$.callbacks[T]||(this.$$.callbacks[T]=[]);return V.push(z),()=>{const te=V.indexOf(z);te!==-1&&V.splice(te,1)}}$set(T){this.$$set&&!pp(T)&&(this.$$.skip_bound=!0,this.$$set(T),this.$$.skip_bound=!1)}}const Lp="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Lp);var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xc={exports:{}};(function(k,T){(function(z,V){k.exports=V()})(fr,function(){function z(){}const V=t=>t;function te(t,e){for(const n in e)t[n]=e[n];return t}function ue(t){return t()}function fe(){return Object.create(null)}function we(t){t.forEach(ue)}function Te(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function be(t,...e){if(t==null)return z;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ve(t){let e;return be(t,n=>e=n)(),e}function Ke(t,e,n){t.$$.on_destroy.push(be(e,n))}function Me(t,e,n,s){if(t){const r=Ge(t,e,n,s);return t[0](r)}}function Ge(t,e,n,s){return t[1]&&s?te(n.ctx.slice(),t[1](s(e))):n.ctx}function Ve(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)i[a]=e.dirty[a]|r[a];return i}return e.dirty|r}return e.dirty}function Qe(t,e,n,s,r,i){if(r){const o=Ge(e,n,s,i);t.p(o,r)}}function $e(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Qt(t){return t??""}const In=typeof window<"u";let ft=In?()=>window.performance.now():()=>Date.now(),Ae=In?t=>requestAnimationFrame(t):z;const ge=new Set;function vt(t){ge.forEach(e=>{e.c(t)||(ge.delete(e),e.f())}),ge.size!==0&&Ae(vt)}function Ee(t){let e;return ge.size===0&&Ae(vt),{promise:new Promise(n=>{ge.add(e={c:t,f:n})}),abort(){ge.delete(e)}}}function O(t,e){t.appendChild(e)}function ot(t,e,n){const s=pr(t);if(!s.getElementById(e)){const r=P("style");r.id=e,r.textContent=n,Ui(s,r)}}function pr(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ui(t,e){O(t.head||t,e)}function B(t,e,n){t.insertBefore(e,n||null)}function U(t){t.parentNode.removeChild(t)}function ps(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function P(t){return document.createElement(t)}function Zt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function We(t){return document.createTextNode(t)}function ye(){return We(" ")}function Ze(){return We("")}function Ce(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function $(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function en(t,e,n,s){t.style.setProperty(e,n,"")}let ms;function kc(){if(ms===void 0){ms=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ms=!0}}return ms}class tn{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.e=P(n.nodeName),this.t=n,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)B(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(U)}}const mr=new Set;let gs,ys=0;function Hi(t,e,n,s,r,i,o,a=0){const l=16.666/s;let c=`{
`;for(let d=0;d<=1;d+=l){const y=e+(n-e)*i(d);c+=100*d+`%{${o(y,1-y)}}
`}const u=c+`100% {${o(n,1-n)}}
}`,h=`__svelte_${function(d){let y=5381,g=d.length;for(;g--;)y=(y<<5)-y^d.charCodeAt(g);return y>>>0}(u)}_${a}`,f=pr(t);mr.add(f);const b=f.__svelte_stylesheet||(f.__svelte_stylesheet=function(d){const y=P("style");return Ui(pr(d),y),y}(t).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[h]||(m[h]=!0,b.insertRule(`@keyframes ${h} ${u}`,b.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${h} ${s}ms linear ${r}ms 1 both`,ys+=1,h}function gr(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),ys-=r,ys||Ae(()=>{ys||(mr.forEach(i=>{const o=i.__svelte_stylesheet;let a=o.cssRules.length;for(;a--;)o.deleteRule(a);i.__svelte_rules={}}),mr.clear())}))}function zc(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,function(i,o){const a=i.getBoundingClientRect();if(o.left!==a.left||o.top!==a.top){const l=getComputedStyle(i),c=l.transform==="none"?"":l.transform;i.style.transform=`${c} translate(${o.left-a.left}px, ${o.top-a.top}px)`}}(t,r)}}function _t(t){gs=t}function yr(){if(!gs)throw new Error("Function called outside component initialization");return gs}function Bi(t){yr().$$.before_update.push(t)}function Fi(t){yr().$$.on_mount.push(t)}const Mn=[],nn=[],bs=[],br=[],Tc=Promise.resolve();let vr=!1;function wt(t){bs.push(t)}let wr=!1;const xr=new Set;function kr(){if(!wr){wr=!0;do{for(let t=0;t<Mn.length;t+=1){const e=Mn[t];_t(e),Sc(e.$$)}for(_t(null),Mn.length=0;nn.length;)nn.pop()();for(let t=0;t<bs.length;t+=1){const e=bs[t];xr.has(e)||(xr.add(e),e())}bs.length=0}while(Mn.length);for(;br.length;)br.pop()();vr=!1,wr=!1,xr.clear()}}function Sc(t){if(t.fragment!==null){t.update(),we(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(wt)}}let Rn;function Ki(t,e,n){t.dispatchEvent(function(s,r,i=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(s,i,!1,r),o}(`intro${n}`))}const vs=new Set;let qt;function sn(){qt={r:0,c:[],p:qt}}function rn(){qt.r||we(qt.c),qt=qt.p}function q(t,e){t&&t.i&&(vs.delete(t),t.i(e))}function X(t,e,n,s){if(t&&t.o){if(vs.has(t))return;vs.add(t),qt.c.push(()=>{vs.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Ec={duration:0};function ws(t,e,n){let s,r,i=e(t,n),o=!1,a=0;function l(){s&&gr(t,s)}function c(){const{delay:h=0,duration:f=300,easing:b=V,tick:m=z,css:p}=i||Ec;p&&(s=Hi(t,0,1,f,h,b,p,a++)),m(0,1);const d=ft()+h,y=d+f;r&&r.abort(),o=!0,wt(()=>Ki(t,!0,"start")),r=Ee(g=>{if(o){if(g>=y)return m(1,0),Ki(t,!0,"end"),l(),o=!1;if(g>=d){const w=b((g-d)/f);m(w,1-w)}}return o})}let u=!1;return{start(){u||(u=!0,gr(t),Te(i)?(i=i(),(Rn||(Rn=Promise.resolve(),Rn.then(()=>{Rn=null})),Rn).then(c)):c())},invalidate(){u=!1},end(){o&&(l(),o=!1)}}}function Wi(t,e){const n=e.token={};function s(i,o,a,l){if(e.token!==n)return;e.resolved=l;let c=e.ctx;a!==void 0&&(c=c.slice(),c[a]=l);const u=i&&(e.current=i)(c);let h=!1;e.block&&(e.blocks?e.blocks.forEach((f,b)=>{b!==o&&f&&(sn(),X(f,1,1,()=>{e.blocks[b]===f&&(e.blocks[b]=null)}),rn())}):e.block.d(1),u.c(),q(u,1),u.m(e.mount(),e.anchor),h=!0),e.block=u,e.blocks&&(e.blocks[o]=u),h&&kr()}if((r=t)&&typeof r=="object"&&typeof r.then=="function"){const i=yr();if(t.then(o=>{_t(i),s(e.then,1,e.value,o),_t(null)},o=>{if(_t(i),s(e.catch,2,e.error,o),_t(null),!e.hasCatch)throw o}),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}var r}function _c(t,e){t.f(),function(n,s){n.d(1),s.delete(n.key)}(t,e)}function he(t){t&&t.c()}function le(t,e,n,s){const{fragment:r,on_mount:i,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),s||wt(()=>{const l=i.map(ue).filter(Te);o?o.push(...l):we(l),t.$$.on_mount=[]}),a.forEach(wt)}function ce(t,e){const n=t.$$;n.fragment!==null&&(we(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $c(t,e){t.$$.dirty[0]===-1&&(Mn.push(t),vr||(vr=!0,Tc.then(kr)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Re(t,e,n,s,r,i,o,a=[-1]){const l=gs;_t(t);const c=t.$$={fragment:null,ctx:null,props:i,update:z,not_equal:r,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:fe(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,f,...b)=>{const m=b.length?b[0]:f;return c.ctx&&r(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),u&&$c(t,h)),f}):[],c.update(),u=!0,we(c.before_update),c.fragment=!!s&&s(c.ctx),e.target){if(e.hydrate){const h=function(f){return Array.from(f.childNodes)}(e.target);c.fragment&&c.fragment.l(h),h.forEach(U)}else c.fragment&&c.fragment.c();e.intro&&q(t.$$.fragment),le(t,e.target,e.anchor,e.customElement),kr()}_t(l)}class Pe{$destroy(){ce(this,1),this.$destroy=z}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){var n;this.$$set&&(n=e,Object.keys(n).length!==0)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const on=[];function Ye(t,e=z){let n;const s=new Set;function r(i){if(W(t,i)&&(t=i,n)){const o=!on.length;for(const a of s)a[1](),on.push(a,t);if(o){for(let a=0;a<on.length;a+=2)on[a][0](on[a+1]);on.length=0}}}return{set:r,update:function(i){r(i(t))},subscribe:function(i,o=z){const a=[i,o];return s.add(a),s.size===1&&(n=e(r)||z),i(t),()=>{s.delete(a),s.size===0&&(n(),n=null)}}}}function an(t,e,n){const s=!Array.isArray(t),r=s?[t]:t,i=e.length<2;return{subscribe:Ye(n,o=>{let a=!1;const l=[];let c=0,u=z;const h=()=>{if(c)return;u();const b=e(s?l[0]:l,o);i?o(b):u=Te(b)?b:z},f=r.map((b,m)=>be(b,p=>{l[m]=p,c&=~(1<<m),a&&h()},()=>{c|=1<<m}));return a=!0,h(),function(){we(f),u()}}).subscribe}}function zr(t){const e=t-1;return e*e*e+1}function Xi(t){return Object.prototype.toString.call(t)==="[object Date]"}function Tr(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const s=e.map((r,i)=>Tr(t[i],r));return r=>s.map(i=>i(r))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(Xi(t)&&Xi(e)){t=t.getTime();const i=(e=e.getTime())-t;return o=>new Date(t+o*i)}const s=Object.keys(e),r={};return s.forEach(i=>{r[i]=Tr(t[i],e[i])}),i=>{const o={};return s.forEach(a=>{o[a]=r[a](i)}),o}}if(n==="number"){const s=e-t;return r=>t+r*s}throw new Error(`Cannot interpolate ${n} values`)}function Gi(t,e={}){const n=Ye(t);let s,r=t;function i(o,a){if(t==null)return n.set(t=o),Promise.resolve();r=o;let l=s,c=!1,{delay:u=0,duration:h=400,easing:f=V,interpolate:b=Tr}=te(te({},e),a);if(h===0)return l&&(l.abort(),l=null),n.set(t=r),Promise.resolve();const m=ft()+u;let p;return s=Ee(d=>{if(d<m)return!0;c||(p=b(t,o),typeof h=="function"&&(h=h(t,o)),c=!0),l&&(l.abort(),l=null);const y=d-m;return y>h?(n.set(t=o),!1):(n.set(t=p(f(y/h))),!0)}),s.promise}return{set:i,update:(o,a)=>i(o(r,t),a),subscribe:n.subscribe}}function Ac(t){ot(t,"svelte-1po3g9q",".progress.svelte-1po3g9q.svelte-1po3g9q{grid-area:auto;height:0.4em;width:100%;position:relative}.progress.svelte-1po3g9q .progress-slider.svelte-1po3g9q{background-color:var(--quizdown-color-primary);height:100%;display:block}")}function Nc(t){let e,n;return{c(){e=P("div"),n=P("div"),$(n,"class","progress-slider svelte-1po3g9q"),en(n,"width",t[0]),$(e,"class","progress svelte-1po3g9q"),$(e,"data-label","")},m(s,r){B(s,e,r),O(e,n)},p(s,[r]){1&r&&en(n,"width",s[0])},i:z,o:z,d(s){s&&U(e)}}}function Lc(t,e,n){let s,r,{value:i}=e,{max:o}=e;const a=Gi(0,{duration:400,easing:zr});return Ke(t,a,l=>n(4,r=l)),t.$$set=l=>{"value"in l&&n(2,i=l.value),"max"in l&&n(3,o=l.max)},t.$$.update=()=>{12&t.$$.dirty&&a.set(Math.min(o,i)+.5),24&t.$$.dirty&&n(0,s=String(r/(o+.5)*100)+"%")},[s,a,i,o,r]}class Oc extends Pe{constructor(e){super(),Re(this,e,Lc,Nc,W,{value:2,max:3},Ac)}}var Cc=function(t){return function(e){return!!e&&typeof e=="object"}(t)&&!function(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||function(s){return s.$$typeof===Ic}(e)}(t)},Ic=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Pn(t,e){return e.clone!==!1&&e.isMergeableObject(t)?ln((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function Mc(t,e,n){return t.concat(e).map(function(s){return Pn(s,n)})}function Vi(t){return Object.keys(t).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return e.propertyIsEnumerable(n)}):[]}(t))}function Yi(t,e){try{return e in t}catch{return!1}}function Rc(t,e,n){var s={};return n.isMergeableObject(t)&&Vi(t).forEach(function(r){s[r]=Pn(t[r],n)}),Vi(e).forEach(function(r){(function(i,o){return Yi(i,o)&&!(Object.hasOwnProperty.call(i,o)&&Object.propertyIsEnumerable.call(i,o))})(t,r)||(Yi(t,r)&&n.isMergeableObject(e[r])?s[r]=function(i,o){if(!o.customMerge)return ln;var a=o.customMerge(i);return typeof a=="function"?a:ln}(r,n)(t[r],e[r],n):s[r]=Pn(e[r],n))}),s}function ln(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||Mc,n.isMergeableObject=n.isMergeableObject||Cc,n.cloneUnlessOtherwiseSpecified=Pn;var s=Array.isArray(e);return s===Array.isArray(t)?s?n.arrayMerge(t,e,n):Rc(t,e,n):Pn(e,n)}ln.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,s){return ln(n,s,e)},{})};var Pc=ln,Ji=function(t,e){return(Ji=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])})(t,e)};function xs(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}Ji(t,e),t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var ne,xe,cn,de=function(){return(de=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function Sr(t,e,n){if(arguments.length===2)for(var s,r=0,i=e.length;r<i;r++)!s&&r in e||(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||e)}function Qi(t){return t.type===xe.literal}function jc(t){return t.type===xe.argument}function Zi(t){return t.type===xe.number}function eo(t){return t.type===xe.date}function to(t){return t.type===xe.time}function no(t){return t.type===xe.select}function so(t){return t.type===xe.plural}function qc(t){return t.type===xe.pound}function ro(t){return t.type===xe.tag}function io(t){return!(!t||typeof t!="object"||t.type!==cn.number)}function Er(t){return!(!t||typeof t!="object"||t.type!==cn.dateTime)}(function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ne||(ne={})),function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"}(xe||(xe={})),function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"}(cn||(cn={}));var oo=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Dc=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Uc(t){var e={};return t.replace(Dc,function(n){var s=n.length;switch(n[0]){case"G":e.era=s===4?"long":s===5?"narrow":"short";break;case"y":e.year=s===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][s-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][s-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=s===4?"short":s===5?"narrow":"short";break;case"e":if(s<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][s-4];break;case"c":if(s<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][s-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][s-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][s-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][s-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][s-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][s-1];break;case"s":e.second=["numeric","2-digit"][s-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=s<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),e}var Hc=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,_r,ao=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,lo=/^(@+)?(\+|#+)?$/g,Bc=/(\*)(0+)|(#+)(0+)|(0+)/g,co=/^(0+)$/;function uo(t){var e={};return t.replace(lo,function(n,s,r){return typeof r!="string"?(e.minimumSignificantDigits=s.length,e.maximumSignificantDigits=s.length):r==="+"?e.minimumSignificantDigits=s.length:s[0]==="#"?e.maximumSignificantDigits=s.length:(e.minimumSignificantDigits=s.length,e.maximumSignificantDigits=s.length+(typeof r=="string"?r.length:0)),""}),e}function fo(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Fc(t){var e;if(t[0]==="E"&&t[1]==="E"?(e={notation:"engineering"},t=t.slice(2)):t[0]==="E"&&(e={notation:"scientific"},t=t.slice(1)),e){var n=t.slice(0,2);if(n==="+!"?(e.signDisplay="always",t=t.slice(2)):n==="+?"&&(e.signDisplay="exceptZero",t=t.slice(2)),!co.test(t))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=t.length}return e}function ho(t){var e=fo(t);return e||{}}function Kc(t){for(var e={},n=0,s=t;n<s.length;n++){var r=s[n];switch(r.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=r.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=r.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=de(de(de({},e),{notation:"scientific"}),r.options.reduce(function(a,l){return de(de({},a),ho(l))},{}));continue;case"engineering":e=de(de(de({},e),{notation:"engineering"}),r.options.reduce(function(a,l){return de(de({},a),ho(l))},{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(r.options[0]);continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(Bc,function(a,l,c,u,h,f){if(l)e.minimumIntegerDigits=c.length;else{if(u&&h)throw new Error("We currently do not support maximum integer digits");if(f)throw new Error("We currently do not support exact integer digits")}return""});continue}if(co.test(r.stem))e.minimumIntegerDigits=r.stem.length;else if(ao.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(ao,function(a,l,c,u,h,f){return c==="*"?e.minimumFractionDigits=l.length:u&&u[0]==="#"?e.maximumFractionDigits=u.length:h&&f?(e.minimumFractionDigits=h.length,e.maximumFractionDigits=h.length+f.length):(e.minimumFractionDigits=l.length,e.maximumFractionDigits=l.length),""}),r.options.length&&(e=de(de({},e),uo(r.options[0])))}else if(lo.test(r.stem))e=de(de({},e),uo(r.stem));else{var i=fo(r.stem);i&&(e=de(de({},e),i));var o=Fc(r.stem);o&&(e=de(de({},e),o))}}return e}var Wc=new RegExp("^"+oo.source+"*"),Xc=new RegExp(oo.source+"*$");function ie(t,e){return{start:t,end:e}}var Gc=!!String.prototype.startsWith,Vc=!!String.fromCodePoint,Yc=!!Object.fromEntries,Jc=!!String.prototype.codePointAt,Qc=!!String.prototype.trimStart,Zc=!!String.prototype.trimEnd,eu=Number.isSafeInteger?Number.isSafeInteger:function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},$r=!0;try{$r=((_r=yo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))===null||_r===void 0?void 0:_r[0])==="a"}catch{$r=!1}var Ar,po=Gc?function(t,e,n){return t.startsWith(e,n)}:function(t,e,n){return t.slice(n,n+e.length)===e},Nr=Vc?String.fromCodePoint:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n,s="",r=t.length,i=0;r>i;){if((n=t[i++])>1114111)throw RangeError(n+" is not a valid code point");s+=n<65536?String.fromCharCode(n):String.fromCharCode(55296+((n-=65536)>>10),n%1024+56320)}return s},mo=Yc?Object.fromEntries:function(t){for(var e={},n=0,s=t;n<s.length;n++){var r=s[n],i=r[0],o=r[1];e[i]=o}return e},go=Jc?function(t,e){return t.codePointAt(e)}:function(t,e){var n=t.length;if(!(e<0||e>=n)){var s,r=t.charCodeAt(e);return r<55296||r>56319||e+1===n||(s=t.charCodeAt(e+1))<56320||s>57343?r:s-56320+(r-55296<<10)+65536}},tu=Qc?function(t){return t.trimStart()}:function(t){return t.replace(Wc,"")},nu=Zc?function(t){return t.trimEnd()}:function(t){return t.replace(Xc,"")};function yo(t,e){return new RegExp(t,e)}if($r){var bo=yo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ar=function(t,e){var n;return bo.lastIndex=e,(n=bo.exec(t)[1])!==null&&n!==void 0?n:""}}else Ar=function(t,e){for(var n=[];;){var s=go(t,e);if(s===void 0||vo(s)||iu(s))break;n.push(s),e+=s>=65536?2:1}return Nr.apply(void 0,n)};var su=function(){function t(e,n){n===void 0&&(n={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!n.ignoreTag,this.requiresOtherClause=!!n.requiresOtherClause,this.shouldParseSkeletons=!!n.shouldParseSkeletons}return t.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(e,n,s){for(var r=[];!this.isEOF();){var i=this.char();if(i===123){if((o=this.parseArgument(e,s)).err)return o;r.push(o.val)}else{if(i===125&&e>0)break;if(i!==35||n!=="plural"&&n!=="selectordinal"){if(i===60&&!this.ignoreTag&&this.peek()===47){if(s)break;return this.error(ne.UNMATCHED_CLOSING_TAG,ie(this.clonePosition(),this.clonePosition()))}if(i===60&&!this.ignoreTag&&Lr(this.peek()||0)){if((o=this.parseTag(e,n)).err)return o;r.push(o.val)}else{var o;if((o=this.parseLiteral(e,n)).err)return o;r.push(o.val)}}else{var a=this.clonePosition();this.bump(),r.push({type:xe.pound,location:ie(a,this.clonePosition())})}}}return{val:r,err:null}},t.prototype.parseTag=function(e,n){var s=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:xe.literal,value:"<"+r+"/>",location:ie(s,this.clonePosition())},err:null};if(this.bumpIf(">")){var i=this.parseMessage(e+1,n,!0);if(i.err)return i;var o=i.val,a=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Lr(this.char()))return this.error(ne.INVALID_TAG,ie(a,this.clonePosition()));var l=this.clonePosition();return r!==this.parseTagName()?this.error(ne.UNMATCHED_CLOSING_TAG,ie(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:xe.tag,value:r,children:o,location:ie(s,this.clonePosition())},err:null}:this.error(ne.INVALID_TAG,ie(a,this.clonePosition())))}return this.error(ne.UNCLOSED_TAG,ie(s,this.clonePosition()))}return this.error(ne.INVALID_TAG,ie(s,this.clonePosition()))},t.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&ru(this.char());)this.bump();return this.message.slice(e,this.offset())},t.prototype.parseLiteral=function(e,n){for(var s=this.clonePosition(),r="";;){var i=this.tryParseQuote(n);if(i)r+=i;else{var o=this.tryParseUnquoted(e,n);if(o)r+=o;else{var a=this.tryParseLeftAngleBracket();if(!a)break;r+=a}}}var l=ie(s,this.clonePosition());return{val:{type:xe.literal,value:r,location:l},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||this.char()!==60||!this.ignoreTag&&(Lr(e=this.peek()||0)||e===47)?null:(this.bump(),"<");var e},t.prototype.tryParseQuote=function(e){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(e==="plural"||e==="selectordinal")break;return null;default:return null}this.bump();var n=[this.char()];for(this.bump();!this.isEOF();){var s=this.char();if(s===39){if(this.peek()!==39){this.bump();break}n.push(39),this.bump()}else n.push(s);this.bump()}return Nr.apply(void 0,n)},t.prototype.tryParseUnquoted=function(e,n){if(this.isEOF())return null;var s=this.char();return s===60||s===123||s===35&&(n==="plural"||n==="selectordinal")||s===125&&e>0?null:(this.bump(),Nr(s))},t.prototype.parseArgument=function(e,n){var s=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE,ie(s,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ne.EMPTY_ARGUMENT,ie(s,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error(ne.MALFORMED_ARGUMENT,ie(s,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE,ie(s,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:xe.argument,value:r,location:ie(s,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE,ie(s,this.clonePosition())):this.parseArgumentOptions(e,n,r,s);default:return this.error(ne.MALFORMED_ARGUMENT,ie(s,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),n=this.offset(),s=Ar(this.message,n),r=n+s.length;return this.bumpTo(r),{value:s,location:ie(e,this.clonePosition())}},t.prototype.parseArgumentOptions=function(e,n,s,r){var i,o=this.clonePosition(),a=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(a){case"":return this.error(ne.EXPECT_ARGUMENT_TYPE,ie(o,l));case"number":case"date":case"time":this.bumpSpace();var c=null;if(this.bumpIf(",")){this.bumpSpace();var u=this.clonePosition();if((y=this.parseSimpleArgStyleIfPossible()).err)return y;if((b=nu(y.val)).length===0)return this.error(ne.EXPECT_ARGUMENT_STYLE,ie(this.clonePosition(),this.clonePosition()));c={style:b,styleLocation:ie(u,this.clonePosition())}}if((g=this.tryParseArgumentClose(r)).err)return g;var h=ie(r,this.clonePosition());if(c&&po(c==null?void 0:c.style,"::",0)){var f=tu(c.style.slice(2));if(a==="number")return(y=this.parseNumberSkeletonFromString(f,c.styleLocation)).err?y:{val:{type:xe.number,value:s,location:h,style:y.val},err:null};if(f.length===0)return this.error(ne.EXPECT_DATE_TIME_SKELETON,h);var b={type:cn.dateTime,pattern:f,location:c.styleLocation,parsedOptions:this.shouldParseSkeletons?Uc(f):{}};return{val:{type:a==="date"?xe.date:xe.time,value:s,location:h,style:b},err:null}}return{val:{type:a==="number"?xe.number:a==="date"?xe.date:xe.time,value:s,location:h,style:(i=c==null?void 0:c.style)!==null&&i!==void 0?i:null},err:null};case"plural":case"selectordinal":case"select":var m=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ne.EXPECT_SELECT_ARGUMENT_OPTIONS,ie(m,de({},m)));this.bumpSpace();var p=this.parseIdentifierIfPossible(),d=0;if(a!=="select"&&p.value==="offset"){if(!this.bumpIf(":"))return this.error(ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ie(this.clonePosition(),this.clonePosition()));var y;if(this.bumpSpace(),(y=this.tryParseDecimalInteger(ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ne.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return y;this.bumpSpace(),p=this.parseIdentifierIfPossible(),d=y.val}var g,w=this.tryParsePluralOrSelectOptions(e,a,n,p);if(w.err)return w;if((g=this.tryParseArgumentClose(r)).err)return g;var x=ie(r,this.clonePosition());return a==="select"?{val:{type:xe.select,value:s,options:mo(w.val),location:x},err:null}:{val:{type:xe.plural,value:s,options:mo(w.val),offset:d,pluralType:a==="plural"?"cardinal":"ordinal",location:x},err:null};default:return this.error(ne.INVALID_ARGUMENT_TYPE,ie(o,l))}},t.prototype.tryParseArgumentClose=function(e){return this.isEOF()||this.char()!==125?this.error(ne.EXPECT_ARGUMENT_CLOSING_BRACE,ie(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,n=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ne.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ie(s,this.clonePosition()));this.bump();break;case 123:e+=1,this.bump();break;case 125:if(!(e>0))return{val:this.message.slice(n.offset,this.offset()),err:null};e-=1;break;default:this.bump()}return{val:this.message.slice(n.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(e,n){var s=[];try{s=function(r){if(r.length===0)throw new Error("Number skeleton cannot be empty");for(var i=[],o=0,a=r.split(Hc).filter(function(b){return b.length>0});o<a.length;o++){var l=a[o].split("/");if(l.length===0)throw new Error("Invalid number skeleton");for(var c=l[0],u=l.slice(1),h=0,f=u;h<f.length;h++)if(f[h].length===0)throw new Error("Invalid number skeleton");i.push({stem:c,options:u})}return i}(e)}catch{return this.error(ne.INVALID_NUMBER_SKELETON,n)}return{val:{type:cn.number,tokens:s,location:n,parsedOptions:this.shouldParseSkeletons?Kc(s):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(e,n,s,r){for(var i,o=!1,a=[],l=new Set,c=r.value,u=r.location;;){if(c.length===0){var h=this.clonePosition();if(n==="select"||!this.bumpIf("="))break;var f=this.tryParseDecimalInteger(ne.EXPECT_PLURAL_ARGUMENT_SELECTOR,ne.INVALID_PLURAL_ARGUMENT_SELECTOR);if(f.err)return f;u=ie(h,this.clonePosition()),c=this.message.slice(h.offset,this.offset())}if(l.has(c))return this.error(n==="select"?ne.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ne.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,u);c==="other"&&(o=!0),this.bumpSpace();var b=this.clonePosition();if(!this.bumpIf("{"))return this.error(n==="select"?ne.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ne.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ie(this.clonePosition(),this.clonePosition()));var m=this.parseMessage(e+1,n,s);if(m.err)return m;var p=this.tryParseArgumentClose(b);if(p.err)return p;a.push([c,{value:m.val,location:ie(b,this.clonePosition())}]),l.add(c),this.bumpSpace(),c=(i=this.parseIdentifierIfPossible()).value,u=i.location}return a.length===0?this.error(n==="select"?ne.EXPECT_SELECT_ARGUMENT_SELECTOR:ne.EXPECT_PLURAL_ARGUMENT_SELECTOR,ie(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!o?this.error(ne.MISSING_OTHER_CLAUSE,ie(this.clonePosition(),this.clonePosition())):{val:a,err:null}},t.prototype.tryParseDecimalInteger=function(e,n){var s=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(s=-1);for(var i=!1,o=0;!this.isEOF();){var a=this.char();if(!(a>=48&&a<=57))break;i=!0,o=10*o+(a-48),this.bump()}var l=ie(r,this.clonePosition());return i?eu(o*=s)?{val:o,err:null}:this.error(n,l):this.error(e,l)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var n=go(this.message,e);if(n===void 0)throw Error("Offset "+e+" is at invalid UTF-16 code unit boundary");return n},t.prototype.error=function(e,n){return{val:null,err:{kind:e,message:this.message,location:n}}},t.prototype.bump=function(){if(!this.isEOF()){var e=this.char();e===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},t.prototype.bumpIf=function(e){if(po(this.message,e,this.offset())){for(var n=0;n<e.length;n++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(e){var n=this.offset(),s=this.message.indexOf(e,n);return s>=0?(this.bumpTo(s),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset "+e+" must be greater than or equal to the current offset "+this.offset());for(e=Math.min(e,this.message.length);;){var n=this.offset();if(n===e)break;if(n>e)throw Error("targetOffset "+e+" is at invalid UTF-16 code unit boundary");if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&vo(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),n=this.offset(),s=this.message.charCodeAt(n+(e>=65536?2:1));return s??null},t}();function Lr(t){return t>=97&&t<=122||t>=65&&t<=90}function ru(t){return t===45||t===46||t>=48&&t<=57||t===95||t>=97&&t<=122||t>=65&&t<=90||t==183||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function vo(t){return t>=9&&t<=13||t===32||t===133||t>=8206&&t<=8207||t===8232||t===8233}function iu(t){return t>=33&&t<=35||t===36||t>=37&&t<=39||t===40||t===41||t===42||t===43||t===44||t===45||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||t===91||t===92||t===93||t===94||t===96||t===123||t===124||t===125||t===126||t===161||t>=162&&t<=165||t===166||t===167||t===169||t===171||t===172||t===174||t===176||t===177||t===182||t===187||t===191||t===215||t===247||t>=8208&&t<=8213||t>=8214&&t<=8215||t===8216||t===8217||t===8218||t>=8219&&t<=8220||t===8221||t===8222||t===8223||t>=8224&&t<=8231||t>=8240&&t<=8248||t===8249||t===8250||t>=8251&&t<=8254||t>=8257&&t<=8259||t===8260||t===8261||t===8262||t>=8263&&t<=8273||t===8274||t===8275||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||t===8608||t>=8609&&t<=8610||t===8611||t>=8612&&t<=8613||t===8614||t>=8615&&t<=8621||t===8622||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||t===8658||t===8659||t===8660||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||t===8968||t===8969||t===8970||t===8971||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||t===9001||t===9002||t>=9003&&t<=9083||t===9084||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||t===9655||t>=9656&&t<=9664||t===9665||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||t===9839||t>=9840&&t<=10087||t===10088||t===10089||t===10090||t===10091||t===10092||t===10093||t===10094||t===10095||t===10096||t===10097||t===10098||t===10099||t===10100||t===10101||t>=10132&&t<=10175||t>=10176&&t<=10180||t===10181||t===10182||t>=10183&&t<=10213||t===10214||t===10215||t===10216||t===10217||t===10218||t===10219||t===10220||t===10221||t===10222||t===10223||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||t===10627||t===10628||t===10629||t===10630||t===10631||t===10632||t===10633||t===10634||t===10635||t===10636||t===10637||t===10638||t===10639||t===10640||t===10641||t===10642||t===10643||t===10644||t===10645||t===10646||t===10647||t===10648||t>=10649&&t<=10711||t===10712||t===10713||t===10714||t===10715||t>=10716&&t<=10747||t===10748||t===10749||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||t===11158||t>=11159&&t<=11263||t>=11776&&t<=11777||t===11778||t===11779||t===11780||t===11781||t>=11782&&t<=11784||t===11785||t===11786||t===11787||t===11788||t===11789||t>=11790&&t<=11798||t===11799||t>=11800&&t<=11801||t===11802||t===11803||t===11804||t===11805||t>=11806&&t<=11807||t===11808||t===11809||t===11810||t===11811||t===11812||t===11813||t===11814||t===11815||t===11816||t===11817||t>=11818&&t<=11822||t===11823||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||t===11840||t===11841||t===11842||t>=11843&&t<=11855||t>=11856&&t<=11857||t===11858||t>=11859&&t<=11903||t>=12289&&t<=12291||t===12296||t===12297||t===12298||t===12299||t===12300||t===12301||t===12302||t===12303||t===12304||t===12305||t>=12306&&t<=12307||t===12308||t===12309||t===12310||t===12311||t===12312||t===12313||t===12314||t===12315||t===12316||t===12317||t>=12318&&t<=12319||t===12320||t===12336||t===64830||t===64831||t>=65093&&t<=65094}function Or(t){t.forEach(function(e){if(delete e.location,no(e)||so(e))for(var n in e.options)delete e.options[n].location,Or(e.options[n].value);else Zi(e)&&io(e.style)||(eo(e)||to(e))&&Er(e.style)?delete e.style.location:ro(e)&&Or(e.children)})}function ou(t,e){e===void 0&&(e={}),e=de({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var n=new su(t,e).parse();if(n.err){var s=SyntaxError(ne[n.err.kind]);throw s.location=n.err.location,s.originalMessage=n.err.message,s}return e!=null&&e.captureLocation||Or(n.val),n.val}function Cr(t,e){var n=e&&e.cache?e.cache:cu,s=e&&e.serializer?e.serializer:lu;return(e&&e.strategy?e.strategy:au)(t,{cache:n,serializer:s})}function wo(t,e,n,s){var r,i=(r=s)==null||typeof r=="number"||typeof r=="boolean"?s:n(s),o=e.get(i);return o===void 0&&(o=t.call(this,s),e.set(i,o)),o}function xo(t,e,n){var s=Array.prototype.slice.call(arguments,3),r=n(s),i=e.get(r);return i===void 0&&(i=t.apply(this,s),e.set(r,i)),i}function Ir(t,e,n,s,r){return n.bind(e,t,s,r)}function au(t,e){return Ir(t,this,t.length===1?wo:xo,e.cache.create(),e.serializer)}var lu=function(){return JSON.stringify(arguments)};function ks(){this.cache=Object.create(null)}ks.prototype.has=function(t){return t in this.cache},ks.prototype.get=function(t){return this.cache[t]},ks.prototype.set=function(t,e){this.cache[t]=e};var un,cu={create:function(){return new ks}},Mr={variadic:function(t,e){return Ir(t,this,xo,e.cache.create(),e.serializer)},monadic:function(t,e){return Ir(t,this,wo,e.cache.create(),e.serializer)}};(function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"})(un||(un={}));var De,zs=function(t){function e(n,s,r){var i=t.call(this,n)||this;return i.code=s,i.originalMessage=r,i}return xs(e,t),e.prototype.toString=function(){return"[formatjs Error: "+this.code+"] "+this.message},e}(Error),ko=function(t){function e(n,s,r,i){return t.call(this,'Invalid values for "'+n+'": "'+s+'". Options are "'+Object.keys(r).join('", "')+'"',un.INVALID_VALUE,i)||this}return xs(e,t),e}(zs),uu=function(t){function e(n,s,r){return t.call(this,'Value for "'+n+'" must be of type '+s,un.INVALID_VALUE,r)||this}return xs(e,t),e}(zs),fu=function(t){function e(n,s){return t.call(this,'The intl string context variable "'+n+'" was not provided to the string "'+s+'"',un.MISSING_VALUE,s)||this}return xs(e,t),e}(zs);function hu(t){return typeof t=="function"}function Ts(t,e,n,s,r,i,o){if(t.length===1&&Qi(t[0]))return[{type:De.literal,value:t[0].value}];for(var a=[],l=0,c=t;l<c.length;l++){var u=c[l];if(Qi(u))a.push({type:De.literal,value:u.value});else if(qc(u))typeof i=="number"&&a.push({type:De.literal,value:n.getNumberFormat(e).format(i)});else{var h=u.value;if(!r||!(h in r))throw new fu(h,o);var f=r[h];if(jc(u))f&&typeof f!="string"&&typeof f!="number"||(f=typeof f=="string"||typeof f=="number"?String(f):""),a.push({type:typeof f=="string"?De.literal:De.object,value:f});else if(eo(u)){var b=typeof u.style=="string"?s.date[u.style]:Er(u.style)?u.style.parsedOptions:void 0;a.push({type:De.literal,value:n.getDateTimeFormat(e,b).format(f)})}else if(to(u))b=typeof u.style=="string"?s.time[u.style]:Er(u.style)?u.style.parsedOptions:void 0,a.push({type:De.literal,value:n.getDateTimeFormat(e,b).format(f)});else if(Zi(u))(b=typeof u.style=="string"?s.number[u.style]:io(u.style)?u.style.parsedOptions:void 0)&&b.scale&&(f*=b.scale||1),a.push({type:De.literal,value:n.getNumberFormat(e,b).format(f)});else{if(ro(u)){var m=u.children,p=u.value,d=r[p];if(!hu(d))throw new uu(p,"function",o);var y=d(Ts(m,e,n,s,r,i).map(function(x){return x.value}));Array.isArray(y)||(y=[y]),a.push.apply(a,y.map(function(x){return{type:typeof x=="string"?De.literal:De.object,value:x}}))}if(no(u)){if(!(g=u.options[f]||u.options.other))throw new ko(u.value,f,Object.keys(u.options),o);a.push.apply(a,Ts(g.value,e,n,s,r))}else if(so(u)){var g;if(!(g=u.options["="+f])){if(!Intl.PluralRules)throw new zs(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,un.MISSING_INTL_API,o);var w=n.getPluralRules(e,{type:u.pluralType}).select(f-(u.offset||0));g=u.options[w]||u.options.other}if(!g)throw new ko(u.value,f,Object.keys(u.options),o);a.push.apply(a,Ts(g.value,e,n,s,r,f-(u.offset||0)))}}}}return function(x){return x.length<2?x:x.reduce(function(S,E){var j=S[S.length-1];return j&&j.type===De.literal&&E.type===De.literal?j.value+=E.value:S.push(E),S},[])}(a)}function du(t,e){return e?Object.keys(t).reduce(function(n,s){var r,i;return n[s]=(r=t[s],(i=e[s])?de(de(de({},r||{}),i||{}),Object.keys(r).reduce(function(o,a){return o[a]=de(de({},r[a]),i[a]||{}),o},{})):r),n},de({},t)):t}function Rr(t){return{create:function(){return{has:function(e){return e in t},get:function(e){return t[e]},set:function(e,n){t[e]=n}}}}}(function(t){t[t.literal=0]="literal",t[t.object=1]="object"})(De||(De={}));var pu=function(){function t(e,n,s,r){var i,o=this;if(n===void 0&&(n=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(a){var l=o.formatToParts(a);if(l.length===1)return l[0].value;var c=l.reduce(function(u,h){return u.length&&h.type===De.literal&&typeof u[u.length-1]=="string"?u[u.length-1]+=h.value:u.push(h.value),u},[]);return c.length<=1?c[0]||"":c},this.formatToParts=function(a){return Ts(o.ast,o.locales,o.formatters,o.formats,a,void 0,o.message)},this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},typeof e=="string"){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=t.__parse(e,{ignoreTag:r==null?void 0:r.ignoreTag})}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=du(t.formats,s),this.locales=n,this.formatters=r&&r.formatters||((i=this.formatterCache)===void 0&&(i={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Cr(function(){for(var a,l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return new((a=Intl.NumberFormat).bind.apply(a,Sr([void 0],l)))},{cache:Rr(i.number),strategy:Mr.variadic}),getDateTimeFormat:Cr(function(){for(var a,l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return new((a=Intl.DateTimeFormat).bind.apply(a,Sr([void 0],l)))},{cache:Rr(i.dateTime),strategy:Mr.variadic}),getPluralRules:Cr(function(){for(var a,l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return new((a=Intl.PluralRules).bind.apply(a,Sr([void 0],l)))},{cache:Rr(i.pluralRules),strategy:Mr.variadic})})}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.__parse=ou,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}();const $t={},mu=(t,e,n)=>n&&(e in $t||($t[e]={}),t in $t[e]||($t[e][t]=n),n),zo=(t,e)=>{if(e==null)return;if(e in $t&&t in $t[e])return $t[e][t];const n=Hn(e);for(let s=0;s<n.length;s++){const r=gu(n[s],t);if(r)return mu(t,e,r)}};let Pr;const jn=Ye({});function To(t){return t in Pr}function gu(t,e){return To(t)?function(n,s){if(s in n)return n[s];const r=s.split(".");let i=n;for(let o=0;o<r.length;o++)if(typeof i=="object"){if(o>0){const a=r.slice(o,r.length).join(".");if(a in i){i=i[a];break}}i=i[r[o]]}else i=void 0;return i}(function(n){return Pr[n]||null}(t),e):null}function qn(t,...e){delete $t[t],jn.update(n=>(n[t]=Pc.all([n[t]||{},...e]),n))}an([jn],([t])=>Object.keys(t)),jn.subscribe(t=>Pr=t);const Ss={};function So(t){return Ss[t]}function Es(t){return Hn(t).some(e=>{var n;return(n=So(e))===null||n===void 0?void 0:n.size})}const Dn={};function Eo(t){if(!Es(t))return t in Dn?Dn[t]:void 0;const e=function(n){return Hn(n).map(s=>{const r=So(s);return[s,r?[...r]:[]]}).filter(([,s])=>s.length>0)}(t);return Dn[t]=Promise.all(e.map(([n,s])=>function(r,i){return Promise.all(i.map(o=>(function(a,l){Ss[a].delete(l),Ss[a].size===0&&delete Ss[a]}(r,o),o().then(a=>a.default||a)))).then(o=>qn(r,...o))}(n,s))).then(()=>{if(Es(t))return Eo(t);delete Dn[t]}),Dn[t]}/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function Dt(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]])}return n}const Un={fallbackLocale:null,initialLocale:null,loadingDelay:200,formats:{number:{scientific:{notation:"scientific"},engineering:{notation:"engineering"},compactLong:{notation:"compact",compactDisplay:"long"},compactShort:{notation:"compact",compactDisplay:"short"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},warnOnMissingMessages:!0,ignoreTag:!0};function fn(){return Un}const jr=Ye(!1);let qr;const ht=Ye(null);function _o(t){return t.split("-").map((e,n,s)=>s.slice(0,n+1).join("-")).reverse()}function Hn(t,e=fn().fallbackLocale){const n=_o(t);return e?[...new Set([...n,..._o(e)])]:n}function At(){return qr}ht.subscribe(t=>{qr=t,typeof window<"u"&&t!==null&&document.documentElement.setAttribute("lang",t)});const Dr=ht.set;ht.set=t=>{if(function(e){if(e==null)return;const n=Hn(e);for(let s=0;s<n.length;s++){const r=n[s];if(To(r))return r}}(t)&&Es(t)){const{loadingDelay:e}=fn();let n;return typeof window<"u"&&At()!=null&&e?n=window.setTimeout(()=>jr.set(!0),e):jr.set(!0),Eo(t).then(()=>{Dr(t)}).finally(()=>{clearTimeout(n),jr.set(!1)})}return Dr(t)},ht.update=t=>Dr(t(qr));const _s=t=>{const e=Object.create(null);return n=>{const s=JSON.stringify(n);return s in e?e[s]:e[s]=t(n)}},Bn=(t,e)=>{const{formats:n}=fn();if(t in n&&e in n[t])return n[t][e];throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`)},yu=_s(t=>{var{locale:e,format:n}=t,s=Dt(t,["locale","format"]);if(e==null)throw new Error('[svelte-i18n] A "locale" must be set to format numbers');return n&&(s=Bn("number",n)),new Intl.NumberFormat(e,s)}),bu=_s(t=>{var{locale:e,format:n}=t,s=Dt(t,["locale","format"]);if(e==null)throw new Error('[svelte-i18n] A "locale" must be set to format dates');return n?s=Bn("date",n):Object.keys(s).length===0&&(s=Bn("date","short")),new Intl.DateTimeFormat(e,s)}),vu=_s(t=>{var{locale:e,format:n}=t,s=Dt(t,["locale","format"]);if(e==null)throw new Error('[svelte-i18n] A "locale" must be set to format time values');return n?s=Bn("time",n):Object.keys(s).length===0&&(s=Bn("time","short")),new Intl.DateTimeFormat(e,s)}),wu=_s((t,e=At())=>new pu(t,e,fn().formats,{ignoreTag:fn().ignoreTag})),xu=(t,e={})=>{typeof t=="object"&&(t=(e=t).id);const{values:n,locale:s=At(),default:r}=e;if(s==null)throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");let i=zo(t,s);if(i){if(typeof i!="string")return console.warn(`[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof i}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`),i}else fn().warnOnMissingMessages&&console.warn(`[svelte-i18n] The message "${t}" was not found in "${Hn(s).join('", "')}".${Es(At())?`

Note: there are at least one loader still registered to this locale that wasn't executed.`:""}`),i=r||t;if(!n)return i;let o=i;try{o=wu(i,s).format(n)}catch(a){console.warn(`[svelte-i18n] Message "${t}" has syntax error:`,a.message)}return o},ku=(t,e)=>((n={})=>{var{locale:s=At()}=n,r=Dt(n,["locale"]);return vu(Object.assign({locale:s},r))})(e).format(t),zu=(t,e)=>((n={})=>{var{locale:s=At()}=n,r=Dt(n,["locale"]);return bu(Object.assign({locale:s},r))})(e).format(t),Tu=(t,e)=>((n={})=>{var{locale:s=At()}=n,r=Dt(n,["locale"]);return yu(Object.assign({locale:s},r))})(e).format(t),Su=(t,e=At())=>zo(t,e),$o=an([ht,jn],()=>xu);an([ht],()=>ku),an([ht],()=>zu),an([ht],()=>Tu),an([ht,jn],()=>Su);var Eu={next:"Next",previous:"Previous",evaluate:"Evaluate",reset:"One more time!",hint:"Show hint",resultsTitle:"Your quiz results",resultsText:"You have answered {points} out of {total} questions correctly!"},_u={next:"Weiter",previous:"Zurück",evaluate:"Zum Ergebnis",reset:"Noch einmal!",hint:"Tipp anzeigen",resultsTitle:"Ihr Ergebnis",resultsText:"Sie haben {points} von {total} Fragen richtig beantwortet!"},$u={next:"Suivant",previous:"Précédent",evaluate:"Réponse",reset:"Recommencer!",hint:"Indice",resultsTitle:"Vos résultats",resultsText:"Vous avez répondu correctement à {points} questions sur {total}!"},Au={next:"Siguiente",previous:"Anterior",evaluate:"Respuesta",reset:"Otra vez!",hint:"Pista",resultsTitle:"Resultados",resultsText:"Ha acertado a {points} preguntas de {total}!"};function Nu(t){qn("de",_u),qn("en",Eu),qn("fr",$u),qn("es",Au),function(e){const{formats:n}=e,s=Dt(e,["formats"]),r=e.initialLocale||e.fallbackLocale;Object.assign(Un,s,{initialLocale:r}),n&&("number"in n&&Object.assign(Un.formats.number,n.number),"date"in n&&Object.assign(Un.formats.date,n.date),"time"in n&&Object.assign(Un.formats.time,n.time)),ht.set(r)}({fallbackLocale:"en",initialLocale:t===null?typeof window>"u"?null:window.navigator.language||window.navigator.languages[0]:t})}function Lu(t){ot(t,"svelte-najif3",".card.svelte-najif3{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);border-radius:0 0 4px 4px}")}function Ou(t){let e,n;const s=t[1].default,r=Me(s,t,t[0],null);return{c(){e=P("div"),r&&r.c(),$(e,"class","card svelte-najif3")},m(i,o){B(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||1&o)&&Qe(r,s,i,i[0],n?Ve(s,i[0],o,null):$e(i[0]),null)},i(i){n||(q(r,i),n=!0)},o(i){X(r,i),n=!1},d(i){i&&U(e),r&&r.d(i)}}}function Cu(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class Iu extends Pe{constructor(e){super(),Re(this,e,Cu,Ou,W,{},Lu)}}function Mu(t){ot(t,"svelte-15b7mrd",".credits.svelte-15b7mrd a.svelte-15b7mrd{color:gray;text-decoration:none}.credits.svelte-15b7mrd a.svelte-15b7mrd:hover{text-decoration:underline}.credits.svelte-15b7mrd.svelte-15b7mrd{margin-top:1rem;font-size:small;text-align:end;color:lightgray}")}function Ru(t){let e,n;return{c(){e=P("div"),n=P("a"),n.textContent="quizdown v0.6.0",$(n,"href","https://github.com/bonartm/quizdown-js"),$(n,"class","svelte-15b7mrd"),$(e,"class","credits svelte-15b7mrd")},m(s,r){B(s,e,r),O(e,n)},p:z,i:z,o:z,d(s){s&&U(e)}}}class Pu extends Pe{constructor(e){super(),Re(this,e,null,Ru,W,{},Mu)}}function ju(t){let e,n,s,r;const i=t[6].default,o=Me(i,t,t[5],null);return{c(){e=P("div"),n=P("div"),o&&o.c(),wt(()=>t[7].call(n)),en(e,"height",t[1]+"px")},m(a,l){B(a,e,l),O(e,n),o&&o.m(n,null),s=function(c,u){getComputedStyle(c).position==="static"&&(c.style.position="relative");const h=P("iframe");h.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),h.setAttribute("aria-hidden","true"),h.tabIndex=-1;const f=kc();let b;return f?(h.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",b=Ce(window,"message",m=>{m.source===h.contentWindow&&u()})):(h.src="about:blank",h.onload=()=>{b=Ce(h.contentWindow,"resize",u)}),O(c,h),()=>{(f||b&&h.contentWindow)&&b(),U(h)}}(n,t[7].bind(n)),r=!0},p(a,[l]){o&&o.p&&(!r||32&l)&&Qe(o,i,a,a[5],r?Ve(i,a[5],l,null):$e(a[5]),null),(!r||2&l)&&en(e,"height",a[1]+"px")},i(a){r||(q(o,a),r=!0)},o(a){X(o,a),r=!1},d(a){a&&U(e),o&&o.d(a),s()}}}function qu(t,e,n){let s,r,{$$slots:i={},$$scope:o}=e,{minHeight:a=0}=e;const l=Gi(r,{duration:100});Ke(t,l,u=>n(1,s=u));let c=!1;return Fi(()=>n(4,c=!0)),t.$$set=u=>{"minHeight"in u&&n(3,a=u.minHeight),"$$scope"in u&&n(5,o=u.$$scope)},t.$$.update=()=>{25&t.$$.dirty&&c&&l.set(Math.max(a,r))},[r,s,l,a,c,o,i,function(){r=this.clientHeight,n(0,r)}]}class Du extends Pe{constructor(e){super(),Re(this,e,qu,ju,W,{minHeight:3})}}function Uu(t,{from:e,to:n},s={}){const r=getComputedStyle(t),i=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/n.width-(n.left+o),c=e.top+e.height*a/n.height-(n.top+a),{delay:u=0,duration:h=b=>120*Math.sqrt(b),easing:f=zr}=s;return{delay:u,duration:Te(h)?h(Math.sqrt(l*l+c*c)):h,easing:f,css:(b,m)=>{const p=m*l,d=m*c,y=b+m*e.width/n.width,g=b+m*e.height/n.height;return`transform: ${i} translate(${p}px, ${d}px) scale(${y}, ${g});`}}}function Hu(t){ot(t,"svelte-1imq117",".dragdroplist.svelte-1imq117.svelte-1imq117{position:relative;padding:0}.list.svelte-1imq117.svelte-1imq117{cursor:grab;z-index:5;display:flex;flex-direction:column}.item.svelte-1imq117.svelte-1imq117{box-sizing:border-box;display:inline-flex;width:100%;margin-bottom:0.5em;border-radius:2px;user-select:none;margin:5px;padding:0;background-color:var(--quizdown-color-secondary);border:3px solid transparent;color:var(--quizdown-color-text)}.item.svelte-1imq117.svelte-1imq117:last-child{margin-bottom:0}.item.svelte-1imq117.svelte-1imq117:not(#grabbed):not(#ghost){z-index:10}.item.svelte-1imq117>.svelte-1imq117{margin:auto auto auto 0}.buttons.svelte-1imq117.svelte-1imq117{width:32px;min-width:32px;margin:auto 0;display:flex;flex-direction:column}.buttons.svelte-1imq117 button.svelte-1imq117{cursor:pointer;width:18px;height:18px;margin:0 auto;padding:0;border:1px solid rgba(0, 0, 0, 0);background-color:inherit}.buttons.svelte-1imq117 button.svelte-1imq117:focus{border:1px solid black}.delete.svelte-1imq117.svelte-1imq117{width:32px}#grabbed.svelte-1imq117.svelte-1imq117{opacity:0}#ghost.svelte-1imq117.svelte-1imq117{pointer-events:none;z-index:-5;position:absolute;top:0;left:0;opacity:0;border:3px solid var(--quizdown-color-primary);background-color:var(--quizdown-color-secondary)}#ghost.svelte-1imq117 .svelte-1imq117{pointer-events:none}#ghost.haunting.svelte-1imq117.svelte-1imq117{z-index:20;opacity:1}")}function Ao(t,e,n){const s=t.slice();return s[28]=e[n],s[30]=n,s}function Bu(t){let e,n,s=t[28]+"";return{c(){e=P("p"),n=We(s)},m(r,i){B(r,e,i),O(e,n)},p(r,i){1&i&&s!==(s=r[28]+"")&&jt(n,s)},d(r){r&&U(e)}}}function Fu(t){let e,n,s=t[28].text+"";return{c(){e=P("p"),n=We(s)},m(r,i){B(r,e,i),O(e,n)},p(r,i){1&i&&s!==(s=r[28].text+"")&&jt(n,s)},d(r){r&&U(e)}}}function Ku(t){let e,n,s=t[28].html+"";return{c(){e=new tn,n=Ze(),e.a=n},m(r,i){e.m(s,r,i),B(r,n,i)},p(r,i){1&i&&s!==(s=r[28].html+"")&&e.p(s)},d(r){r&&U(n),r&&e.d()}}}function No(t){let e,n,s;function r(...i){return t[17](t[30],...i)}return{c(){e=P("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>',$(e,"class","svelte-1imq117")},m(i,o){B(i,e,o),n||(s=Ce(e,"click",r),n=!0)},p(i,o){t=i},d(i){i&&U(e),n=!1,s()}}}function Lo(t,e){let n,s,r,i,o,a,l,c,u,h,f,b,m,p,d,y,g,w,x,S,E,j,H,Z,R=z;function G(...K){return e[15](e[30],...K)}function C(...K){return e[16](e[30],...K)}function M(K,Q){return K[28].html?Ku:K[28].text?Fu:Bu}let A=M(e),D=A(e),_=e[1]&&No(e);return{key:t,first:null,c(){n=P("div"),s=P("div"),r=P("button"),i=Zt("svg"),o=Zt("path"),a=Zt("path"),c=ye(),u=P("button"),h=Zt("svg"),f=Zt("path"),b=Zt("path"),p=ye(),d=P("div"),D.c(),y=ye(),g=P("div"),_&&_.c(),w=ye(),$(o,"d","M0 0h24v24H0V0z"),$(o,"fill","none"),$(a,"d","M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"),$(i,"xmlns","http://www.w3.org/2000/svg"),$(i,"viewBox","0 0 24 24"),$(i,"width","16px"),$(i,"height","16px"),$(r,"class","up svelte-1imq117"),$(r,"style",l="visibility: "+(e[30]>0?"":"hidden")+";"),$(f,"d","M0 0h24v24H0V0z"),$(f,"fill","none"),$(b,"d","M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"),$(h,"xmlns","http://www.w3.org/2000/svg"),$(h,"viewBox","0 0 24 24"),$(h,"width","16px"),$(h,"height","16px"),$(u,"class","down svelte-1imq117"),$(u,"style",m="visibility: "+(e[30]<e[0].length-1?"":"hidden")+";"),$(s,"class","buttons svelte-1imq117"),$(d,"class","content svelte-1imq117"),$(g,"class","buttons delete svelte-1imq117"),$(n,"id",x=e[3]&&(e[28].id?e[28].id:JSON.stringify(e[28]))==e[3].dataset.id?"grabbed":""),$(n,"class","item svelte-1imq117"),$(n,"data-index",S=e[30]),$(n,"data-id",E=e[28].id?e[28].id:JSON.stringify(e[28])),$(n,"data-graby","0"),this.first=n},m(K,Q){B(K,n,Q),O(n,s),O(s,r),O(r,i),O(i,o),O(i,a),O(s,c),O(s,u),O(u,h),O(h,f),O(h,b),O(n,p),O(n,d),D.m(d,null),O(n,y),O(n,g),_&&_.m(g,null),O(n,w),H||(Z=[Ce(r,"click",G),Ce(u,"click",C),Ce(n,"mousedown",e[18]),Ce(n,"touchstart",e[19]),Ce(n,"mouseenter",e[20]),Ce(n,"touchmove",e[21])],H=!0)},p(K,Q){e=K,1&Q&&l!==(l="visibility: "+(e[30]>0?"":"hidden")+";")&&$(r,"style",l),1&Q&&m!==(m="visibility: "+(e[30]<e[0].length-1?"":"hidden")+";")&&$(u,"style",m),A===(A=M(e))&&D?D.p(e,Q):(D.d(1),D=A(e),D&&(D.c(),D.m(d,null))),e[1]?_?_.p(e,Q):(_=No(e),_.c(),_.m(g,null)):_&&(_.d(1),_=null),9&Q&&x!==(x=e[3]&&(e[28].id?e[28].id:JSON.stringify(e[28]))==e[3].dataset.id?"grabbed":"")&&$(n,"id",x),1&Q&&S!==(S=e[30])&&$(n,"data-index",S),1&Q&&E!==(E=e[28].id?e[28].id:JSON.stringify(e[28]))&&$(n,"data-id",E)},r(){j=n.getBoundingClientRect()},f(){zc(n),R()},a(){R(),R=function(K,Q,Le,Ie){if(!Q)return z;const je=K.getBoundingClientRect();if(Q.left===je.left&&Q.right===je.right&&Q.top===je.top&&Q.bottom===je.bottom)return z;const{delay:oe=0,duration:se=300,easing:Se=V,start:re=ft()+oe,end:Be=re+se,tick:rt=z,css:yt}=Le(K,{from:Q,to:je},Ie);let Vt,It=!0,Mt=!1;function St(){yt&&gr(K,Vt),It=!1}return Ee(bt=>{if(!Mt&&bt>=re&&(Mt=!0),Mt&&bt>=Be&&(rt(1,0),St()),!It)return!1;if(Mt){const _n=0+1*Se((bt-re)/se);rt(_n,1-_n)}return!0}),yt&&(Vt=Hi(K,0,1,se,oe,Se,yt)),oe||(Mt=!0),rt(0,1),St}(n,j,Uu,{duration:200})},d(K){K&&U(n),D.d(),_&&_.d(),H=!1,we(Z)}}}function Wu(t){let e,n,s,r,i,o,a,l,c,u=[],h=new Map,f=t[0];const b=m=>m[28].id?m[28].id:JSON.stringify(m[28]);for(let m=0;m<f.length;m+=1){let p=Ao(t,f,m),d=b(p);h.set(d,u[m]=Lo(d,p))}return{c(){e=P("div"),n=P("div"),s=P("p"),o=ye(),a=P("div");for(let m=0;m<u.length;m+=1)u[m].c();$(s,"class","svelte-1imq117"),$(n,"id","ghost"),$(n,"class",r=Qt(t[3]?"item haunting":"item")+" svelte-1imq117"),$(n,"style",i="top: "+(t[4]+t[5]-t[6])+"px"),$(a,"class","list svelte-1imq117"),$(e,"class","dragdroplist svelte-1imq117")},m(m,p){B(m,e,p),O(e,n),O(n,s),t[14](n),O(e,o),O(e,a);for(let d=0;d<u.length;d+=1)u[d].m(a,null);l||(c=[Ce(a,"mousemove",t[22]),Ce(a,"touchmove",t[23]),Ce(a,"mouseup",t[24]),Ce(a,"mouseleave",t[25]),Ce(a,"touchend",t[26])],l=!0)},p(m,[p]){if(8&p&&r!==(r=Qt(m[3]?"item haunting":"item")+" svelte-1imq117")&&$(n,"class",r),112&p&&i!==(i="top: "+(m[4]+m[5]-m[6])+"px")&&$(n,"style",i),11915&p){f=m[0];for(let d=0;d<u.length;d+=1)u[d].r();u=function(d,y,g,w,x,S,E,j,H,Z,R,G){let C=d.length,M=S.length,A=C;const D={};for(;A--;)D[d[A].key]=A;const _=[],K=new Map,Q=new Map;for(A=M;A--;){const oe=G(x,S,A),se=g(oe);let Se=E.get(se);Se?Se.p(oe,y):(Se=Z(se,oe),Se.c()),K.set(se,_[A]=Se),se in D&&Q.set(se,Math.abs(A-D[se]))}const Le=new Set,Ie=new Set;function je(oe){q(oe,1),oe.m(j,R),E.set(oe.key,oe),R=oe.first,M--}for(;C&&M;){const oe=_[M-1],se=d[C-1],Se=oe.key,re=se.key;oe===se?(R=oe.first,C--,M--):K.has(re)?!E.has(Se)||Le.has(Se)?je(oe):Ie.has(re)?C--:Q.get(Se)>Q.get(re)?(Ie.add(Se),je(oe)):(Le.add(re),C--):(H(se,E),C--)}for(;C--;){const oe=d[C];K.has(oe.key)||H(oe,E)}for(;M;)je(_[M-1]);return _}(u,p,b,1,m,f,h,a,_c,Lo,null,Ao);for(let d=0;d<u.length;d+=1)u[d].a()}},i:z,o:z,d(m){m&&U(e),t[14](null);for(let p=0;p<u.length;p+=1)u[p].d();l=!1,we(c)}}}function Xu(t,e,n){let s,r,i,{data:o=[]}=e,{removesItems:a=!1}=e,l=0,c=0,u=0;function h(g,w){n(3,r=w),n(3,r.dataset.grabY=String(g),r),n(2,s.innerHTML=r.innerHTML,s),n(5,c=r.getBoundingClientRect().y-g),f(g)}function f(g){r&&(n(4,l=g),n(6,u=s.parentElement.getBoundingClientRect().y))}function b(g){f(g.clientY);let w=s.getRootNode().elementFromPoint(g.clientX,g.clientY);w&&(w=w.closest(".item"),w&&w!=i&&(i=w,m(g,w)))}function m(g,w){let x=w;r&&w!=r&&x.classList.contains("item")&&p(parseInt(r.dataset.index),parseInt(x.dataset.index))}function p(g,w){let x=o[g];n(0,o=[...o.slice(0,g),...o.slice(g+1)]),n(0,o=[...o.slice(0,w),x,...o.slice(w)])}function d(g){n(3,r=null)}function y(g){n(0,o=[...o.slice(0,g),...o.slice(g+1)])}return t.$$set=g=>{"data"in g&&n(0,o=g.data),"removesItems"in g&&n(1,a=g.removesItems)},[o,a,s,r,l,c,u,h,f,b,m,p,d,y,function(g){nn[g?"unshift":"push"](()=>{s=g,n(2,s)})},function(g,w){p(g,g-1)},function(g,w){p(g,g+1)},function(g,w){y(g)},function(g){h(g.clientY,this)},function(g){h(g.touches[0].clientY,this)},function(g){g.stopPropagation(),m(0,g.target)},function(g){g.stopPropagation(),g.preventDefault(),b(g.touches[0])},function(g){g.stopPropagation(),f(g.clientY)},function(g){g.stopPropagation(),f(g.touches[0].clientY)},function(g){g.stopPropagation(),d()},function(g){g.stopPropagation(),d()},function(g){g.stopPropagation(),d(g.touches[0])}]}class Gu extends Pe{constructor(e){super(),Re(this,e,Xu,Wu,W,{data:0,removesItems:1},Hu)}}function Vu(t){let e,n,s;function r(o){t[1](o)}let i={};return t[0].answers!==void 0&&(i.data=t[0].answers),e=new Gu({props:i}),nn.push(()=>function(o,a,l){const c=o.$$.props[a];c!==void 0&&(o.$$.bound[c]=l,l(o.$$.ctx[c]))}(e,"data",r)),{c(){he(e.$$.fragment)},m(o,a){le(e,o,a),s=!0},p(o,[a]){const l={};var c;!n&&1&a&&(n=!0,l.data=o[0].answers,c=()=>n=!1,br.push(c)),e.$set(l)},i(o){s||(q(e.$$.fragment,o),s=!0)},o(o){X(e.$$.fragment,o),s=!1},d(o){ce(e,o)}}}function Yu(t,e,n){let{question:s}=e;return t.$$set=r=>{"question"in r&&n(0,s=r.question)},t.$$.update=()=>{1&t.$$.dirty&&n(0,s.selected=s.answers.map(r=>r.id),s)},[s,function(r){t.$$.not_equal(s.answers,r)&&(s.answers=r,n(0,s))}]}class Ju extends Pe{constructor(e){super(),Re(this,e,Yu,Vu,W,{question:0})}}function Qu(t){ot(t,"svelte-1m16lsk","fieldset.svelte-1m16lsk.svelte-1m16lsk{border:0}[type='checkbox'].svelte-1m16lsk.svelte-1m16lsk,[type='radio'].svelte-1m16lsk.svelte-1m16lsk{position:absolute;opacity:0}[type='radio'].svelte-1m16lsk+span.svelte-1m16lsk{border-radius:0.5em}[type='checkbox'].svelte-1m16lsk+span.svelte-1m16lsk{border-radius:2px}[type='checkbox'].svelte-1m16lsk+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk+span.svelte-1m16lsk{transition-duration:0.3s;background-color:var(--quizdown-color-secondary);color:var(--quizdown-color-text);display:block;padding:0.5rem;margin:5px;border:3px solid transparent;cursor:pointer}[type='checkbox'].svelte-1m16lsk:hover+span.svelte-1m16lsk,[type='checkbox'].svelte-1m16lsk:focus+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk:hover+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk:focus+span.svelte-1m16lsk{filter:brightness(0.9)}[type='checkbox'].svelte-1m16lsk:checked+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk:checked+span.svelte-1m16lsk{border:3px solid var(--quizdown-color-primary)}")}function Oo(t,e,n){const s=t.slice();return s[4]=e[n],s[6]=n,s}function Co(t,e,n){const s=t.slice();return s[4]=e[n],s[6]=n,s}function Zu(t){let e,n=t[0].answers,s=[];for(let r=0;r<n.length;r+=1)s[r]=Io(Oo(t,n,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=Ze()},m(r,i){for(let o=0;o<s.length;o+=1)s[o].m(r,i);B(r,e,i)},p(r,i){if(1&i){let o;for(n=r[0].answers,o=0;o<n.length;o+=1){const a=Oo(r,n,o);s[o]?s[o].p(a,i):(s[o]=Io(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(r){ps(s,r),r&&U(e)}}}function ef(t){let e,n=t[0].answers,s=[];for(let r=0;r<n.length;r+=1)s[r]=Mo(Co(t,n,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=Ze()},m(r,i){for(let o=0;o<s.length;o+=1)s[o].m(r,i);B(r,e,i)},p(r,i){if(1&i){let o;for(n=r[0].answers,o=0;o<n.length;o+=1){const a=Co(r,n,o);s[o]?s[o].p(a,i):(s[o]=Mo(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(r){ps(s,r),r&&U(e)}}}function Io(t){let e,n,s,r,i,o,a,l=t[4].html+"";return{c(){e=P("label"),n=P("input"),s=ye(),r=P("span"),i=ye(),$(n,"type","radio"),n.__value=t[6],n.value=n.__value,$(n,"class","svelte-1m16lsk"),t[2][1].push(n),$(r,"class","svelte-1m16lsk")},m(c,u){B(c,e,u),O(e,n),n.checked=n.__value===t[0].selected[0],O(e,s),O(e,r),r.innerHTML=l,O(e,i),o||(a=Ce(n,"change",t[3]),o=!0)},p(c,u){1&u&&(n.checked=n.__value===c[0].selected[0]),1&u&&l!==(l=c[4].html+"")&&(r.innerHTML=l)},d(c){c&&U(e),t[2][1].splice(t[2][1].indexOf(n),1),o=!1,a()}}}function Mo(t){let e,n,s,r,i,o,a,l=t[4].html+"";return{c(){e=P("label"),n=P("input"),s=ye(),r=P("span"),i=ye(),$(n,"type","checkbox"),n.__value=t[6],n.value=n.__value,$(n,"class","svelte-1m16lsk"),t[2][0].push(n),$(r,"class","svelte-1m16lsk")},m(c,u){B(c,e,u),O(e,n),n.checked=~t[0].selected.indexOf(n.__value),O(e,s),O(e,r),r.innerHTML=l,O(e,i),o||(a=Ce(n,"change",t[1]),o=!0)},p(c,u){1&u&&(n.checked=~c[0].selected.indexOf(n.__value)),1&u&&l!==(l=c[4].html+"")&&(r.innerHTML=l)},d(c){c&&U(e),t[2][0].splice(t[2][0].indexOf(n),1),o=!1,a()}}}function tf(t){let e;function n(i,o){return i[0].questionType==="MultipleChoice"?ef:Zu}let s=n(t),r=s(t);return{c(){e=P("fieldset"),r.c(),$(e,"class","svelte-1m16lsk")},m(i,o){B(i,e,o),r.m(e,null)},p(i,[o]){s===(s=n(i))&&r?r.p(i,o):(r.d(1),r=s(i),r&&(r.c(),r.m(e,null)))},i:z,o:z,d(i){i&&U(e),r.d()}}}function nf(t,e,n){let{question:s}=e;const r=[[],[]];return t.$$set=i=>{"question"in i&&n(0,s=i.question)},[s,function(){s.selected=function(i,o,a){const l=new Set;for(let c=0;c<i.length;c+=1)i[c].checked&&l.add(i[c].__value);return a||l.delete(o),Array.from(l)}(r[0],this.__value,this.checked),n(0,s)},r,function(){s.selected[0]=this.__value,n(0,s)}]}class Ro extends Pe{constructor(e){super(),Re(this,e,nf,tf,W,{question:0},Qu)}}function Po(t){let e,n=t[0].explanation+"";return{c(){e=P("p")},m(s,r){B(s,e,r),e.innerHTML=n},p(s,r){1&r&&n!==(n=s[0].explanation+"")&&(e.innerHTML=n)},d(s){s&&U(e)}}}function sf(t){let e,n,s,r,i,o,a,l,c,u,h=t[0].text+"",f=t[0].explanation&&Po(t);var b=t[2][t[0].questionType];function m(p){return{props:{question:p[0]}}}return b&&(l=new b(m(t))),{c(){e=P("h3"),n=We("Q"),s=We(t[1]),r=We(": "),i=new tn,o=ye(),f&&f.c(),a=ye(),l&&he(l.$$.fragment),c=Ze(),i.a=null},m(p,d){B(p,e,d),O(e,n),O(e,s),O(e,r),i.m(h,e),B(p,o,d),f&&f.m(p,d),B(p,a,d),l&&le(l,p,d),B(p,c,d),u=!0},p(p,[d]){(!u||2&d)&&jt(s,p[1]),(!u||1&d)&&h!==(h=p[0].text+"")&&i.p(h),p[0].explanation?f?f.p(p,d):(f=Po(p),f.c(),f.m(a.parentNode,a)):f&&(f.d(1),f=null);const y={};if(1&d&&(y.question=p[0]),b!==(b=p[2][p[0].questionType])){if(l){sn();const g=l;X(g.$$.fragment,1,0,()=>{ce(g,1)}),rn()}b?(l=new b(m(p)),he(l.$$.fragment),q(l.$$.fragment,1),le(l,c.parentNode,c)):l=null}else b&&l.$set(y)},i(p){u||(l&&q(l.$$.fragment,p),u=!0)},o(p){l&&X(l.$$.fragment,p),u=!1},d(p){p&&U(e),p&&U(o),f&&f.d(p),p&&U(a),p&&U(c),l&&ce(l,p)}}}function rf(t,e,n){let{question:s}=e,{n:r}=e,i={Sequence:Ju,MultipleChoice:Ro,SingleChoice:Ro};return t.$$set=o=>{"question"in o&&n(0,s=o.question),"n"in o&&n(1,r=o.n)},[s,r,i]}class of extends Pe{constructor(e){super(),Re(this,e,rf,sf,W,{question:0,n:1})}}function af(t){ot(t,"svelte-s6fim0",".row.svelte-s6fim0{padding-top:2em;display:flex}.left.svelte-s6fim0{flex:1;display:flex;justify-content:flex-start}.center.svelte-s6fim0{display:flex;justify-content:center}.right.svelte-s6fim0{flex:1;display:flex;justify-content:flex-end}")}const lf=t=>({}),jo=t=>({}),cf=t=>({}),qo=t=>({class:"center svelte-s6fim0"}),uf=t=>({}),Do=t=>({});function ff(t){let e,n,s,r,i,o,a;const l=t[1].left,c=Me(l,t,t[0],Do),u=t[1].center,h=Me(u,t,t[0],qo),f=t[1].right,b=Me(f,t,t[0],jo);return{c(){e=P("div"),n=P("div"),c&&c.c(),s=ye(),r=P("div"),h&&h.c(),i=ye(),o=P("div"),b&&b.c(),$(n,"class","left svelte-s6fim0"),$(r,"class","center svelte-s6fim0"),$(o,"class","right svelte-s6fim0"),$(e,"class","row svelte-s6fim0")},m(m,p){B(m,e,p),O(e,n),c&&c.m(n,null),O(e,s),O(e,r),h&&h.m(r,null),O(e,i),O(e,o),b&&b.m(o,null),a=!0},p(m,[p]){c&&c.p&&(!a||1&p)&&Qe(c,l,m,m[0],a?Ve(l,m[0],p,uf):$e(m[0]),Do),h&&h.p&&(!a||1&p)&&Qe(h,u,m,m[0],a?Ve(u,m[0],p,cf):$e(m[0]),qo),b&&b.p&&(!a||1&p)&&Qe(b,f,m,m[0],a?Ve(f,m[0],p,lf):$e(m[0]),jo)},i(m){a||(q(c,m),q(h,m),q(b,m),a=!0)},o(m){X(c,m),X(h,m),X(b,m),a=!1},d(m){m&&U(e),c&&c.d(m),h&&h.d(m),b&&b.d(m)}}}function hf(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class df extends Pe{constructor(e){super(),Re(this,e,hf,ff,W,{},af)}}function pf(t){ot(t,"svelte-14ro1nj","button.svelte-14ro1nj:disabled{background-color:white;filter:grayscale(100%);color:gray;cursor:initial;opacity:50%}button.svelte-14ro1nj{background-color:white;color:var(--quizdown-color-text);padding:0.5rem 1rem;border-radius:4px;border:1px solid transparent;line-height:1;text-align:center;transition:opacity 0.2s ease;text-decoration:none;display:inline-block;cursor:pointer;margin:0.2rem;font-size:1em}button.svelte-14ro1nj:hover:not(:checked):not(:active):not(:disabled){filter:brightness(0.9)}")}function mf(t){let e,n,s,r;const i=t[4].default,o=Me(i,t,t[3],null);return{c(){e=P("button"),o&&o.c(),$(e,"title",t[2]),e.disabled=t[1],$(e,"class","svelte-14ro1nj")},m(a,l){B(a,e,l),o&&o.m(e,null),n=!0,s||(r=Ce(e,"click",function(){Te(t[0])&&t[0].apply(this,arguments)}),s=!0)},p(a,[l]){t=a,o&&o.p&&(!n||8&l)&&Qe(o,i,t,t[3],n?Ve(i,t[3],l,null):$e(t[3]),null),(!n||4&l)&&$(e,"title",t[2]),(!n||2&l)&&(e.disabled=t[1])},i(a){n||(q(o,a),n=!0)},o(a){X(o,a),n=!1},d(a){a&&U(e),o&&o.d(a),s=!1,r()}}}function gf(t,e,n){let{$$slots:s={},$$scope:r}=e,{buttonAction:i=()=>alert("Life has never Svelte better")}=e,{disabled:o=!1}=e,{title:a=""}=e;return t.$$set=l=>{"buttonAction"in l&&n(0,i=l.buttonAction),"disabled"in l&&n(1,o=l.disabled),"title"in l&&n(2,a=l.title),"$$scope"in l&&n(3,r=l.$$scope)},[i,o,a,r,s]}class Fn extends Pe{constructor(e){super(),Re(this,e,gf,mf,W,{buttonAction:0,disabled:1,title:2},pf)}}function Ur(t,{delay:e=0,duration:n=400,easing:s=V}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:i=>"opacity: "+i*r}}function yf(t,{delay:e=0,duration:n=400,easing:s=zr,x:r=0,y:i=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o);return{delay:e,duration:n,easing:s,css:(h,f)=>`
			transform: ${c} translate(${(1-h)*r}px, ${(1-h)*i}px);
			opacity: ${l-u*f}`}}/*!
     * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */function bf(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function vf(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ae(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},s=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),s.forEach(function(r){vf(t,r,n[r])})}return t}function Uo(t,e){return function(n){if(Array.isArray(n))return n}(t)||function(n,s){var r=[],i=!0,o=!1,a=void 0;try{for(var l,c=n[Symbol.iterator]();!(i=(l=c.next()).done)&&(r.push(l.value),!s||r.length!==s);i=!0);}catch(u){o=!0,a=u}finally{try{i||c.return==null||c.return()}finally{if(o)throw a}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Ho=function(){},Hr={},Bo={},Fo={mark:Ho,measure:Ho};try{typeof window<"u"&&(Hr=window),typeof document<"u"&&(Bo=document),typeof MutationObserver<"u",typeof performance<"u"&&(Fo=performance)}catch{}var Ko=(Hr.navigator||{}).userAgent,Wo=Ko===void 0?"":Ko,$s=Hr,Ue=Bo,Br=Fo;$s.document;var Fr=!!Ue.documentElement&&!!Ue.head&&typeof Ue.addEventListener=="function"&&typeof Ue.createElement=="function";~Wo.indexOf("MSIE")||Wo.indexOf("Trident/");var Xo="svg-inline--fa",wf="group",xf="primary",kf="secondary",Go=$s.FontAwesomeConfig||{};Ue&&typeof Ue.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(t){var e=Uo(t,2),n=e[0],s=e[1],r=function(i){return i===""||i!=="false"&&(i==="true"||i)}(function(i){var o=Ue.querySelector("script["+i+"]");if(o)return o.getAttribute(i)}(n));r!=null&&(Go[s]=r)});var Kr=ae({},{familyPrefix:"fa",replacementClass:Xo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Go);Kr.autoReplaceSvg||(Kr.observeMutations=!1);var Xe=ae({},Kr);$s.FontAwesomeConfig=Xe;var xt=$s||{};xt.___FONT_AWESOME___||(xt.___FONT_AWESOME___={}),xt.___FONT_AWESOME___.styles||(xt.___FONT_AWESOME___.styles={}),xt.___FONT_AWESOME___.hooks||(xt.___FONT_AWESOME___.hooks={}),xt.___FONT_AWESOME___.shims||(xt.___FONT_AWESOME___.shims=[]);var dt=xt.___FONT_AWESOME___,zf=[];Fr&&((Ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ue.readyState)||Ue.addEventListener("DOMContentLoaded",function t(){Ue.removeEventListener("DOMContentLoaded",t),zf.map(function(e){return e()})})),typeof fr<"u"&&fr.process!==void 0&&fr.process.emit,typeof setImmediate>"u"||setImmediate;var hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function As(){for(var t=12,e="";t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function Vo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function Jo(t){return t.size!==hn.size||t.x!==hn.x||t.y!==hn.y||t.rotate!==hn.rotate||t.flipX||t.flipY}function Qo(t){var e=t.transform,n=t.containerWidth,s=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(a)},path:{transform:"translate(".concat(s/2*-1," -256)")}}}var Wr={x:0,y:0,width:"100%",height:"100%"};function Zo(t){var e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Tf(t){var e=t.icons,n=e.main,s=e.mask,r=t.prefix,i=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,b=f!==void 0&&f,m=s.found?s:n,p=m.width,d=m.height,y=r==="fak",g=y?"":"fa-w-".concat(Math.ceil(p/d*16)),w=[Xe.replacementClass,i?"".concat(Xe.familyPrefix,"-").concat(i):"",g].filter(function(R){return h.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(h.classes).join(" "),x={children:[],attributes:ae({},h.attributes,{"data-prefix":r,"data-icon":i,class:w,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(d)})},S=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(p/d*16*.0625,"em")}:{};b&&(x.attributes["data-fa-i2svg"]=""),l&&x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||As())},children:[l]});var E=ae({},x,{prefix:r,iconName:i,main:n,mask:s,maskId:c,transform:o,symbol:a,styles:ae({},S,h.styles)}),j=s.found&&n.found?function(R){var G,C=R.children,M=R.attributes,A=R.main,D=R.mask,_=R.maskId,K=R.transform,Q=A.width,Le=A.icon,Ie=D.width,je=D.icon,oe=Qo({transform:K,containerWidth:Ie,iconWidth:Q}),se={tag:"rect",attributes:ae({},Wr,{fill:"white"})},Se=Le.children?{children:Le.children.map(Zo)}:{},re={tag:"g",attributes:ae({},oe.inner),children:[Zo(ae({tag:Le.tag,attributes:ae({},Le.attributes,oe.path)},Se))]},Be={tag:"g",attributes:ae({},oe.outer),children:[re]},rt="mask-".concat(_||As()),yt="clip-".concat(_||As()),Vt={tag:"mask",attributes:ae({},Wr,{id:rt,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[se,Be]},It={tag:"defs",children:[{tag:"clipPath",attributes:{id:yt},children:(G=je,G.tag==="g"?G.children:[G])},Vt]};return C.push(It,{tag:"rect",attributes:ae({fill:"currentColor","clip-path":"url(#".concat(yt,")"),mask:"url(#".concat(rt,")")},Wr)}),{children:C,attributes:M}}(E):function(R){var G=R.children,C=R.attributes,M=R.main,A=R.transform,D=Yo(R.styles);if(D.length>0&&(C.style=D),Jo(A)){var _=Qo({transform:A,containerWidth:M.width,iconWidth:M.width});G.push({tag:"g",attributes:ae({},_.outer),children:[{tag:"g",attributes:ae({},_.inner),children:[{tag:M.icon.tag,children:M.icon.children,attributes:ae({},M.icon.attributes,_.path)}]}]})}else G.push(M.icon);return{children:G,attributes:C}}(E),H=j.children,Z=j.attributes;return E.children=H,E.attributes=Z,a?function(R){var G=R.prefix,C=R.iconName,M=R.children,A=R.attributes,D=R.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ae({},A,{id:D===!0?"".concat(G,"-").concat(Xe.familyPrefix,"-").concat(C):D}),children:M}]}]}(E):function(R){var G=R.children,C=R.main,M=R.mask,A=R.attributes,D=R.styles,_=R.transform;if(Jo(_)&&C.found&&!M.found){var K={x:C.width/C.height/2,y:.5};A.style=Yo(ae({},D,{"transform-origin":"".concat(K.x+_.x/16,"em ").concat(K.y+_.y/16,"em")}))}return[{tag:"svg",attributes:A,children:G}]}(E)}Xe.measurePerformance&&Br&&Br.mark&&Br.measure;var Xr=function(t,e,n,s){var r,i,o,a=Object.keys(t),l=a.length,c=e;for(n===void 0?(r=1,o=t[a[0]]):(r=0,o=n);r<l;r++)o=c(o,t[i=a[r]],i,t);return o};function ea(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=n.skipHooks,r=s!==void 0&&s,i=Object.keys(e).reduce(function(o,a){var l=e[a];return l.icon?o[l.iconName]=l.icon:o[a]=l,o},{});typeof dt.hooks.addPack!="function"||r?dt.styles[t]=ae({},dt.styles[t]||{},i):dt.hooks.addPack(t,i),t==="fas"&&ea("fa",e)}var ta=dt.styles,Sf=dt.shims,na=function(){var t=function(n){return Xr(ta,function(s,r,i){return s[i]=Xr(r,n,{}),s},{})};t(function(n,s,r){return s[3]&&(n[s[3]]=r),n}),t(function(n,s,r){var i=s[2];return n[r]=r,i.forEach(function(o){n[o]=r}),n});var e="far"in ta;Xr(Sf,function(n,s){var r=s[0],i=s[1],o=s[2];return i!=="far"||e||(i="fas"),n[r]={prefix:i,iconName:o},n},{})};function sa(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function ra(t){var e=t.tag,n=t.attributes,s=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Vo(t):"<".concat(e," ").concat(function(o){return Object.keys(o||{}).reduce(function(a,l){return a+"".concat(l,'="').concat(Vo(o[l]),'" ')},"").trim()}(s),">").concat(i.map(ra).join(""),"</").concat(e,">")}function Gr(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}na(),dt.styles,Gr.prototype=Object.create(Error.prototype),Gr.prototype.constructor=Gr;var Ns={fill:"currentColor"},ia={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};ae({},Ns,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var Vr=ae({},ia,{attributeName:"opacity"});function oa(t){var e=t[0],n=t[1],s=Uo(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(s)?{tag:"g",attributes:{class:"".concat(Xe.familyPrefix,"-").concat(wf)},children:[{tag:"path",attributes:{class:"".concat(Xe.familyPrefix,"-").concat(kf),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Xe.familyPrefix,"-").concat(xf),fill:"currentColor",d:s[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:s}}}}ae({},Ns,{cx:"256",cy:"364",r:"28"}),ae({},ia,{attributeName:"r",values:"28;14;28;28;14;28;"}),ae({},Vr,{values:"1;0;1;1;0;1;"}),ae({},Ns,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),ae({},Vr,{values:"1;0;0;0;0;1;"}),ae({},Ns,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),ae({},Vr,{values:"0;0;1;1;0;0;"}),dt.styles,dt.styles;function Ef(){Xe.autoAddCss&&!ca&&(function(t){if(t&&Fr){var e=Ue.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ue.head.childNodes,s=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=i)}Ue.head.insertBefore(e,s)}}(function(){var t="fa",e=Xo,n=Xe.familyPrefix,s=Xe.replacementClass,r=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;if(n!==t||s!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(s))}return r}()),ca=!0)}function _f(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return ra(n)})}}),Object.defineProperty(t,"node",{get:function(){if(Fr){var n=Ue.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function aa(t){var e=t.prefix,n=e===void 0?"fa":e,s=t.iconName;if(s)return sa(la.definitions,n,s)||sa(dt.styles,n,s)}var la=new(function(){function t(){(function(s,r){if(!(s instanceof r))throw new TypeError("Cannot call a class as a function")})(this,t),this.definitions={}}var e,n;return e=t,(n=[{key:"add",value:function(){for(var s=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){s.definitions[l]=ae({},s.definitions[l]||{},a[l]),ea(l,a[l]),na()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],l=a.prefix,c=a.iconName,u=a.icon;s[l]||(s[l]={}),s[l][c]=u}),s}}])&&bf(e.prototype,n),t}()),ca=!1,$f=function(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:aa(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:aa(r||{})),t(s,ae({},n,{mask:r}))}}(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,s=n===void 0?hn:n,r=e.symbol,i=r!==void 0&&r,o=e.mask,a=o===void 0?null:o,l=e.maskId,c=l===void 0?null:l,u=e.title,h=u===void 0?null:u,f=e.titleId,b=f===void 0?null:f,m=e.classes,p=m===void 0?[]:m,d=e.attributes,y=d===void 0?{}:d,g=e.styles,w=g===void 0?{}:g;if(t){var x=t.prefix,S=t.iconName,E=t.icon;return _f(ae({type:"icon"},t),function(){return Ef(),Xe.autoA11y&&(h?y["aria-labelledby"]="".concat(Xe.replacementClass,"-title-").concat(b||As()):(y["aria-hidden"]="true",y.focusable="false")),Tf({icons:{main:oa(E),mask:a?oa(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:S,transform:ae({},hn,s),symbol:i,title:h,maskId:c,titleId:b,extra:{attributes:y,styles:w,classes:p}})})}});function Af(t){let e,n;return{c(){e=new tn,n=Ze(),e.a=n},m(s,r){e.m(t[0],s,r),B(s,n,r)},p(s,[r]){1&r&&e.p(s[0])},i:z,o:z,d(s){s&&U(n),s&&e.d()}}}function Nf(t,e,n){let{size:s}=e,{spin:r=!1}=e,{name:i}=e,{solid:o=!0}=e,a=o?"fas":"far",l={classes:[s?`fa-${s}`:void 0,r?"fa-spin":void 0]},c="";return Bi(()=>{const u=$f({prefix:a,iconName:i},l);n(0,c=u.html[0])}),t.$$set=u=>{"size"in u&&n(1,s=u.size),"spin"in u&&n(2,r=u.spin),"name"in u&&n(3,i=u.name),"solid"in u&&n(4,o=u.solid)},[c,s,r,i,o]}class Ut extends Pe{constructor(e){super(),Re(this,e,Nf,Af,W,{size:1,spin:2,name:3,solid:4})}}function Lf(t){ot(t,"svelte-1nkw7cw",".loading.svelte-1nkw7cw{vertical-align:middle;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}")}function Of(t){return{c:z,m:z,p:z,i:z,o:z,d:z}}function Cf(t){let e;const n=t[6].default,s=Me(n,t,t[5],null);return{c(){s&&s.c()},m(r,i){s&&s.m(r,i),e=!0},p(r,i){s&&s.p&&(!e||32&i)&&Qe(s,n,r,r[5],e?Ve(n,r[5],i,null):$e(r[5]),null)},i(r){e||(q(s,r),e=!0)},o(r){X(s,r),e=!1},d(r){s&&s.d(r)}}}function If(t){let e,n,s;return n=new Ut({props:{name:"circle-notch",spin:!0,size:"2x"}}),{c(){e=P("div"),he(n.$$.fragment),$(e,"class","loading svelte-1nkw7cw"),en(e,"min-height",t[1]+"px")},m(r,i){B(r,e,i),le(n,e,null),t[7](e),s=!0},p(r,i){(!s||2&i)&&en(e,"min-height",r[1]+"px")},i(r){s||(q(n.$$.fragment,r),s=!0)},o(r){X(n.$$.fragment,r),s=!1},d(r){r&&U(e),ce(n),t[7](null)}}}function ua(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:If,then:Cf,catch:Of,value:9,blocks:[,,,]};return Wi(n=t[4](t[0]),r),{c(){e=Ze(),r.block.c()},m(i,o){B(i,e,o),r.block.m(i,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,s=!0},p(i,o){t=i,r.ctx=t,1&o&&n!==(n=t[4](t[0]))&&Wi(n,r)||function(a,l,c){const u=l.slice(),{resolved:h}=a;a.current===a.then&&(u[a.value]=h),a.current===a.catch&&(u[a.error]=h),a.block.p(u,c)}(r,t,o)},i(i){s||(q(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1)X(r.blocks[o]);s=!1},d(i){i&&U(e),r.block.d(i),r.token=null,r=null}}}function Mf(t){let e,n,s=t[2],r=ua(t);return{c(){r.c(),e=Ze()},m(i,o){r.m(i,o),B(i,e,o),n=!0},p(i,[o]){4&o&&W(s,s=i[2])?(sn(),X(r,1,1,z),rn(),r=ua(i),r.c(),q(r),r.m(e.parentNode,e)):r.p(i,o)},i(i){n||(q(r),n=!0)},o(i){X(r),n=!1},d(i){i&&U(e),r.d(i)}}}function Rf(t,e,n){let{$$slots:s={},$$scope:r}=e;var i=this&&this.__awaiter||function(u,h,f,b){return new(f||(f=Promise))(function(m,p){function d(w){try{g(b.next(w))}catch(x){p(x)}}function y(w){try{g(b.throw(w))}catch(x){p(x)}}function g(w){var x;w.done?m(w.value):(x=w.value,x instanceof f?x:new f(function(S){S(x)})).then(d,y)}g((b=b.apply(u,h||[])).next())})};let o,{ms:a}=e,{minHeight:l=0}=e,{update:c=!1}=e;return t.$$set=u=>{"ms"in u&&n(0,a=u.ms),"minHeight"in u&&n(1,l=u.minHeight),"update"in u&&n(2,c=u.update),"$$scope"in u&&n(5,r=u.$$scope)},[a,l,c,o,function(u){return i(this,void 0,void 0,function*(){yield new Promise(h=>setTimeout(h,u))})},r,s,function(u){nn[u?"unshift":"push"](()=>{o=u,n(3,o)})}]}class fa extends Pe{constructor(e){super(),Re(this,e,Rf,Mf,W,{ms:0,minHeight:1,update:2},Lf)}}function Pf(t){ot(t,"svelte-1sz4kvi","ol.svelte-1sz4kvi.svelte-1sz4kvi{padding-left:0;display:inline-block}.top-list-item.svelte-1sz4kvi.svelte-1sz4kvi{margin-bottom:0.2rem;list-style-type:none;list-style:none}.top-list-item.svelte-1sz4kvi.svelte-1sz4kvi:hover{cursor:pointer;background-color:var(--quizdown-color-secondary)}.top-list-item.svelte-1sz4kvi:hover .list-question.svelte-1sz4kvi{text-decoration:underline}.list-comment.svelte-1sz4kvi.svelte-1sz4kvi{margin-left:2em;list-style-type:initial}")}function ha(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function da(t,e,n){const s=t.slice();return s[9]=e[n],s}function pa(t){let e,n,s,r,i,o=t[6].answers[t[9]].html+"",a=t[6].answers[t[9]].comment+"";return{c(){e=P("li"),n=P("i"),s=We(`:
                                    `),r=new tn,i=ye(),r.a=i,$(e,"class","list-comment svelte-1sz4kvi")},m(l,c){B(l,e,c),O(e,n),n.innerHTML=o,O(e,s),r.m(a,e),O(e,i)},p(l,c){1&c&&o!==(o=l[6].answers[l[9]].html+"")&&(n.innerHTML=o),1&c&&a!==(a=l[6].answers[l[9]].comment+"")&&r.p(a)},d(l){l&&U(e)}}}function ma(t){let e,n=t[6].answers[t[9]].comment!==""&&pa(t);return{c(){n&&n.c(),e=Ze()},m(s,r){n&&n.m(s,r),B(s,e,r)},p(s,r){s[6].answers[s[9]].comment!==""?n?n.p(s,r):(n=pa(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&U(e)}}}function ga(t){let e,n,s,r,i,o,a,l,c,u,h=t[4][+t[6].solved]+"",f=t[6].text+"",b=t[6].selected,m=[];for(let d=0;d<b.length;d+=1)m[d]=ma(da(t,b,d));function p(){return t[5](t[8])}return{c(){e=P("li"),n=P("span"),s=We(h),r=ye(),i=new tn,o=ye(),a=P("ol");for(let d=0;d<m.length;d+=1)m[d].c();l=ye(),i.a=null,$(n,"class","list-question svelte-1sz4kvi"),$(a,"class","svelte-1sz4kvi"),$(e,"class","top-list-item svelte-1sz4kvi")},m(d,y){B(d,e,y),O(e,n),O(n,s),O(n,r),i.m(f,n),O(e,o),O(e,a);for(let g=0;g<m.length;g+=1)m[g].m(a,null);O(e,l),c||(u=Ce(e,"click",p),c=!0)},p(d,y){if(t=d,1&y&&h!==(h=t[4][+t[6].solved]+"")&&jt(s,h),1&y&&f!==(f=t[6].text+"")&&i.p(f),1&y){let g;for(b=t[6].selected,g=0;g<b.length;g+=1){const w=da(t,b,g);m[g]?m[g].p(w,y):(m[g]=ma(w),m[g].c(),m[g].m(a,null))}for(;g<m.length;g+=1)m[g].d(1);m.length=b.length}},d(d){d&&U(e),ps(m,d),c=!1,u()}}}function jf(t){let e,n,s,r,i,o,a,l,c,u,h,f=Ls(t[2])+"",b=Ls(t[0].questions.length)+"";s=new Ut({props:{name:"check-double"}});let m=t[0].questions,p=[];for(let d=0;d<m.length;d+=1)p[d]=ga(ha(t,m,d));return{c(){e=P("div"),n=P("h1"),he(s.$$.fragment),r=ye(),i=We(f),o=We("/"),a=We(b),l=ye(),c=P("ol");for(let d=0;d<p.length;d+=1)p[d].c();$(c,"class","svelte-1sz4kvi")},m(d,y){B(d,e,y),O(e,n),le(s,n,null),O(n,r),O(n,i),O(n,o),O(n,a),O(e,l),O(e,c);for(let g=0;g<p.length;g+=1)p[g].m(c,null);h=!0},p(d,y){if((!h||4&y)&&f!==(f=Ls(d[2])+"")&&jt(i,f),(!h||1&y)&&b!==(b=Ls(d[0].questions.length)+"")&&jt(a,b),17&y){let g;for(m=d[0].questions,g=0;g<m.length;g+=1){const w=ha(d,m,g);p[g]?p[g].p(w,y):(p[g]=ga(w),p[g].c(),p[g].m(c,null))}for(;g<p.length;g+=1)p[g].d(1);p.length=m.length}},i(d){h||(q(s.$$.fragment,d),u||wt(()=>{u=ws(e,Ur,{duration:1e3}),u.start()}),h=!0)},o(d){X(s.$$.fragment,d),h=!1},d(d){d&&U(e),ce(s),ps(p,d)}}}function qf(t){let e,n,s,r,i,o=t[3]("resultsTitle")+"";return r=new fa({props:{ms:t[1],minHeight:150,$$slots:{default:[jf]},$$scope:{ctx:t}}}),{c(){e=P("h3"),n=We(o),s=ye(),he(r.$$.fragment)},m(a,l){B(a,e,l),O(e,n),B(a,s,l),le(r,a,l),i=!0},p(a,[l]){(!i||8&l)&&o!==(o=a[3]("resultsTitle")+"")&&jt(n,o);const c={};2&l&&(c.ms=a[1]),4101&l&&(c.$$scope={dirty:l,ctx:a}),r.$set(c)},i(a){i||(q(r.$$.fragment,a),i=!0)},o(a){X(r.$$.fragment,a),i=!1},d(a){a&&U(e),a&&U(s),ce(r,a)}}}function Ls(t){return t.toLocaleString("en-US",{minimumIntegerDigits:2})}function Df(t,e,n){let s;Ke(t,$o,a=>n(3,s=a));let{quiz:r}=e,i=800;ve(r.isEvaluated)&&(i=300);let o=0;return Bi(()=>n(2,o=r.evaluate())),t.$$set=a=>{"quiz"in a&&n(0,r=a.quiz)},[r,i,o,s,["❌","✅"],a=>r.jump(a)]}class Uf extends Pe{constructor(e){super(),Re(this,e,Df,qf,W,{quiz:0},Pf)}}function ya(t){let e,n,s;const r=t[2].default,i=Me(r,t,t[1],null);return{c(){e=P("div"),i&&i.c(),$(e,"class","animated")},m(o,a){B(o,e,a),i&&i.m(e,null),s=!0},p(o,a){i&&i.p&&(!s||2&a)&&Qe(i,r,o,o[1],s?Ve(r,o[1],a,null):$e(o[1]),null)},i(o){s||(q(i,o),n||wt(()=>{n=ws(e,Ur,{duration:400}),n.start()}),s=!0)},o(o){X(i,o),s=!1},d(o){o&&U(e),i&&i.d(o)}}}function Hf(t){let e,n,s=t[0],r=ya(t);return{c(){r.c(),e=Ze()},m(i,o){r.m(i,o),B(i,e,o),n=!0},p(i,[o]){1&o&&W(s,s=i[0])?(sn(),X(r,1,1,z),rn(),r=ya(i),r.c(),q(r),r.m(e.parentNode,e)):r.p(i,o)},i(i){n||(q(r),n=!0)},o(i){X(r),n=!1},d(i){i&&U(e),r.d(i)}}}function Bf(t,e,n){let{$$slots:s={},$$scope:r}=e,{update:i}=e;return t.$$set=o=>{"update"in o&&n(0,i=o.update),"$$scope"in o&&n(1,r=o.$$scope)},[i,r,s]}class Ff extends Pe{constructor(e){super(),Re(this,e,Bf,Hf,W,{update:0})}}/*!
     * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var Kf={prefix:"fas",iconName:"arrow-left",icon:[448,512,[],"f060","M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"]},Wf={prefix:"fas",iconName:"arrow-right",icon:[448,512,[],"f061","M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"]},Xf={prefix:"fas",iconName:"check-double",icon:[512,512,[],"f560","M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"]},Gf={prefix:"fas",iconName:"circle-notch",icon:[512,512,[],"f1ce","M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"]},Vf={prefix:"fas",iconName:"redo",icon:[512,512,[],"f01e","M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"]},Yf={prefix:"far",iconName:"lightbulb",icon:[352,512,[],"f0eb","M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]};function ba(t){let e,n,s,r;return{c(){e=P("p"),n=We("💡 "),s=new tn,s.a=null,$(e,"class","hint")},m(i,o){B(i,e,o),O(e,n),s.m(t[1],e)},p(i,o){2&o&&s.p(i[1])},i(i){i&&(r||wt(()=>{r=ws(e,Ur,{duration:400}),r.start()}))},o:z,d(i){i&&U(e)}}}function Jf(t){let e,n=t[0]&&ba(t);return{c(){n&&n.c(),e=Ze()},m(s,r){n&&n.m(s,r),B(s,e,r)},p(s,[r]){s[0]?n?(n.p(s,r),1&r&&q(n,1)):(n=ba(s),n.c(),q(n,1),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i(s){q(n)},o:z,d(s){n&&n.d(s),s&&U(e)}}}function Qf(t,e,n){let{show:s}=e,{hint:r}=e;return t.$$set=i=>{"show"in i&&n(0,s=i.show),"hint"in i&&n(1,r=i.hint)},[s,r]}class Zf extends Pe{constructor(e){super(),Re(this,e,Qf,Jf,W,{show:0,hint:1})}}function eh(t){ot(t,"svelte-1s4z0g",".container.svelte-1s4z0g{padding:2px 16px;display:grid;align-items:start;overflow:hidden}")}function th(t){let e,n;const s=t[1].default,r=Me(s,t,t[0],null);return{c(){e=P("div"),r&&r.c(),$(e,"class","container svelte-1s4z0g")},m(i,o){B(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||1&o)&&Qe(r,s,i,i[0],n?Ve(s,i[0],o,null):$e(i[0]),null)},i(i){n||(q(r,i),n=!0)},o(i){X(r,i),n=!1},d(i){i&&U(e),r&&r.d(i)}}}function nh(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class sh extends Pe{constructor(e){super(),Re(this,e,nh,th,W,{},eh)}}function rh(t){ot(t,"svelte-k2exh3",'.hljs{display:block;overflow-x:auto;padding:0.5em;color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:bold}.hljs-number,.hljs-literal,.hljs-variable,.hljs-template-variable,.hljs-tag .hljs-attr{color:#008080}.hljs-string,.hljs-doctag{color:#d14}.hljs-title,.hljs-section,.hljs-selector-id{color:#900;font-weight:bold}.hljs-subst{font-weight:normal}.hljs-type,.hljs-class .hljs-title{color:#458;font-weight:bold}.hljs-tag,.hljs-name,.hljs-attribute{color:#000080;font-weight:normal}.hljs-regexp,.hljs-link{color:#009926}.hljs-symbol,.hljs-bullet{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:bold}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}@font-face{font-family:"KaTeX_AMS";src:url(fonts/KaTeX_AMS-Regular.woff2) format("woff2"), url(fonts/KaTeX_AMS-Regular.woff) format("woff"), url(fonts/KaTeX_AMS-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Caligraphic";src:url(fonts/KaTeX_Caligraphic-Bold.woff2) format("woff2"), url(fonts/KaTeX_Caligraphic-Bold.woff) format("woff"), url(fonts/KaTeX_Caligraphic-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_Caligraphic";src:url(fonts/KaTeX_Caligraphic-Regular.woff2) format("woff2"), url(fonts/KaTeX_Caligraphic-Regular.woff) format("woff"), url(fonts/KaTeX_Caligraphic-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Fraktur";src:url(fonts/KaTeX_Fraktur-Bold.woff2) format("woff2"), url(fonts/KaTeX_Fraktur-Bold.woff) format("woff"), url(fonts/KaTeX_Fraktur-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_Fraktur";src:url(fonts/KaTeX_Fraktur-Regular.woff2) format("woff2"), url(fonts/KaTeX_Fraktur-Regular.woff) format("woff"), url(fonts/KaTeX_Fraktur-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-Bold.woff2) format("woff2"), url(fonts/KaTeX_Main-Bold.woff) format("woff"), url(fonts/KaTeX_Main-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-BoldItalic.woff2) format("woff2"), url(fonts/KaTeX_Main-BoldItalic.woff) format("woff"), url(fonts/KaTeX_Main-BoldItalic.ttf) format("truetype");font-weight:bold;font-style:italic}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-Italic.woff2) format("woff2"), url(fonts/KaTeX_Main-Italic.woff) format("woff"), url(fonts/KaTeX_Main-Italic.ttf) format("truetype");font-weight:normal;font-style:italic}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-Regular.woff2) format("woff2"), url(fonts/KaTeX_Main-Regular.woff) format("woff"), url(fonts/KaTeX_Main-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Math";src:url(fonts/KaTeX_Math-BoldItalic.woff2) format("woff2"), url(fonts/KaTeX_Math-BoldItalic.woff) format("woff"), url(fonts/KaTeX_Math-BoldItalic.ttf) format("truetype");font-weight:bold;font-style:italic}@font-face{font-family:"KaTeX_Math";src:url(fonts/KaTeX_Math-Italic.woff2) format("woff2"), url(fonts/KaTeX_Math-Italic.woff) format("woff"), url(fonts/KaTeX_Math-Italic.ttf) format("truetype");font-weight:normal;font-style:italic}@font-face{font-family:"KaTeX_SansSerif";src:url(fonts/KaTeX_SansSerif-Bold.woff2) format("woff2"), url(fonts/KaTeX_SansSerif-Bold.woff) format("woff"), url(fonts/KaTeX_SansSerif-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_SansSerif";src:url(fonts/KaTeX_SansSerif-Italic.woff2) format("woff2"), url(fonts/KaTeX_SansSerif-Italic.woff) format("woff"), url(fonts/KaTeX_SansSerif-Italic.ttf) format("truetype");font-weight:normal;font-style:italic}@font-face{font-family:"KaTeX_SansSerif";src:url(fonts/KaTeX_SansSerif-Regular.woff2) format("woff2"), url(fonts/KaTeX_SansSerif-Regular.woff) format("woff"), url(fonts/KaTeX_SansSerif-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Script";src:url(fonts/KaTeX_Script-Regular.woff2) format("woff2"), url(fonts/KaTeX_Script-Regular.woff) format("woff"), url(fonts/KaTeX_Script-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size1";src:url(fonts/KaTeX_Size1-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size1-Regular.woff) format("woff"), url(fonts/KaTeX_Size1-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size2";src:url(fonts/KaTeX_Size2-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size2-Regular.woff) format("woff"), url(fonts/KaTeX_Size2-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size3";src:url(fonts/KaTeX_Size3-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size3-Regular.woff) format("woff"), url(fonts/KaTeX_Size3-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size4";src:url(fonts/KaTeX_Size4-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size4-Regular.woff) format("woff"), url(fonts/KaTeX_Size4-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Typewriter";src:url(fonts/KaTeX_Typewriter-Regular.woff2) format("woff2"), url(fonts/KaTeX_Typewriter-Regular.woff) format("woff"), url(fonts/KaTeX_Typewriter-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}.katex{font:normal 1.21em KaTeX_Main, Times New Roman, serif;line-height:1.2;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none !important;border-color:currentColor}.katex .katex-version::after{content:"0.13.11"}.katex .katex-mathml{position:absolute;clip:rect(1px, 1px, 1px, 1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .katex-html>.newline{display:block}.katex .base{position:relative;display:inline-block;white-space:nowrap;width:-webkit-min-content;width:-moz-min-content;width:min-content}.katex .strut{display:inline-block}.katex .textbf{font-weight:bold}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:bold}.katex .boldsymbol{font-family:KaTeX_Math;font-weight:bold;font-style:italic}.katex .amsrm{font-family:KaTeX_AMS}.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:bold}.katex .mathitsf,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{display:inline-table;table-layout:fixed;border-collapse:collapse}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;vertical-align:bottom;position:relative}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px}.katex .vbox{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.katex .hbox{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.katex .thinbox{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:0;max-width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .underline .underline-line,.katex .hline,.katex .hdashline,.katex .rule{min-height:1px}.katex .mspace{display:inline-block}.katex .llap,.katex .rlap,.katex .clap{width:0;position:relative}.katex .llap>.inner,.katex .rlap>.inner,.katex .clap>.inner{position:absolute}.katex .llap>.fix,.katex .rlap>.fix,.katex .clap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .rlap>.inner,.katex .clap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{display:inline-block;border:solid 0;position:relative}.katex .overline .overline-line,.katex .underline .underline-line,.katex .hline{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline{display:inline-block;width:100%;border-bottom-style:dashed}.katex .sqrt>.root{margin-left:0.27777778em;margin-right:-0.55555556em}.katex .sizing.reset-size1.size1,.katex .fontsize-ensurer.reset-size1.size1{font-size:1em}.katex .sizing.reset-size1.size2,.katex .fontsize-ensurer.reset-size1.size2{font-size:1.2em}.katex .sizing.reset-size1.size3,.katex .fontsize-ensurer.reset-size1.size3{font-size:1.4em}.katex .sizing.reset-size1.size4,.katex .fontsize-ensurer.reset-size1.size4{font-size:1.6em}.katex .sizing.reset-size1.size5,.katex .fontsize-ensurer.reset-size1.size5{font-size:1.8em}.katex .sizing.reset-size1.size6,.katex .fontsize-ensurer.reset-size1.size6{font-size:2em}.katex .sizing.reset-size1.size7,.katex .fontsize-ensurer.reset-size1.size7{font-size:2.4em}.katex .sizing.reset-size1.size8,.katex .fontsize-ensurer.reset-size1.size8{font-size:2.88em}.katex .sizing.reset-size1.size9,.katex .fontsize-ensurer.reset-size1.size9{font-size:3.456em}.katex .sizing.reset-size1.size10,.katex .fontsize-ensurer.reset-size1.size10{font-size:4.148em}.katex .sizing.reset-size1.size11,.katex .fontsize-ensurer.reset-size1.size11{font-size:4.976em}.katex .sizing.reset-size2.size1,.katex .fontsize-ensurer.reset-size2.size1{font-size:0.83333333em}.katex .sizing.reset-size2.size2,.katex .fontsize-ensurer.reset-size2.size2{font-size:1em}.katex .sizing.reset-size2.size3,.katex .fontsize-ensurer.reset-size2.size3{font-size:1.16666667em}.katex .sizing.reset-size2.size4,.katex .fontsize-ensurer.reset-size2.size4{font-size:1.33333333em}.katex .sizing.reset-size2.size5,.katex .fontsize-ensurer.reset-size2.size5{font-size:1.5em}.katex .sizing.reset-size2.size6,.katex .fontsize-ensurer.reset-size2.size6{font-size:1.66666667em}.katex .sizing.reset-size2.size7,.katex .fontsize-ensurer.reset-size2.size7{font-size:2em}.katex .sizing.reset-size2.size8,.katex .fontsize-ensurer.reset-size2.size8{font-size:2.4em}.katex .sizing.reset-size2.size9,.katex .fontsize-ensurer.reset-size2.size9{font-size:2.88em}.katex .sizing.reset-size2.size10,.katex .fontsize-ensurer.reset-size2.size10{font-size:3.45666667em}.katex .sizing.reset-size2.size11,.katex .fontsize-ensurer.reset-size2.size11{font-size:4.14666667em}.katex .sizing.reset-size3.size1,.katex .fontsize-ensurer.reset-size3.size1{font-size:0.71428571em}.katex .sizing.reset-size3.size2,.katex .fontsize-ensurer.reset-size3.size2{font-size:0.85714286em}.katex .sizing.reset-size3.size3,.katex .fontsize-ensurer.reset-size3.size3{font-size:1em}.katex .sizing.reset-size3.size4,.katex .fontsize-ensurer.reset-size3.size4{font-size:1.14285714em}.katex .sizing.reset-size3.size5,.katex .fontsize-ensurer.reset-size3.size5{font-size:1.28571429em}.katex .sizing.reset-size3.size6,.katex .fontsize-ensurer.reset-size3.size6{font-size:1.42857143em}.katex .sizing.reset-size3.size7,.katex .fontsize-ensurer.reset-size3.size7{font-size:1.71428571em}.katex .sizing.reset-size3.size8,.katex .fontsize-ensurer.reset-size3.size8{font-size:2.05714286em}.katex .sizing.reset-size3.size9,.katex .fontsize-ensurer.reset-size3.size9{font-size:2.46857143em}.katex .sizing.reset-size3.size10,.katex .fontsize-ensurer.reset-size3.size10{font-size:2.96285714em}.katex .sizing.reset-size3.size11,.katex .fontsize-ensurer.reset-size3.size11{font-size:3.55428571em}.katex .sizing.reset-size4.size1,.katex .fontsize-ensurer.reset-size4.size1{font-size:0.625em}.katex .sizing.reset-size4.size2,.katex .fontsize-ensurer.reset-size4.size2{font-size:0.75em}.katex .sizing.reset-size4.size3,.katex .fontsize-ensurer.reset-size4.size3{font-size:0.875em}.katex .sizing.reset-size4.size4,.katex .fontsize-ensurer.reset-size4.size4{font-size:1em}.katex .sizing.reset-size4.size5,.katex .fontsize-ensurer.reset-size4.size5{font-size:1.125em}.katex .sizing.reset-size4.size6,.katex .fontsize-ensurer.reset-size4.size6{font-size:1.25em}.katex .sizing.reset-size4.size7,.katex .fontsize-ensurer.reset-size4.size7{font-size:1.5em}.katex .sizing.reset-size4.size8,.katex .fontsize-ensurer.reset-size4.size8{font-size:1.8em}.katex .sizing.reset-size4.size9,.katex .fontsize-ensurer.reset-size4.size9{font-size:2.16em}.katex .sizing.reset-size4.size10,.katex .fontsize-ensurer.reset-size4.size10{font-size:2.5925em}.katex .sizing.reset-size4.size11,.katex .fontsize-ensurer.reset-size4.size11{font-size:3.11em}.katex .sizing.reset-size5.size1,.katex .fontsize-ensurer.reset-size5.size1{font-size:0.55555556em}.katex .sizing.reset-size5.size2,.katex .fontsize-ensurer.reset-size5.size2{font-size:0.66666667em}.katex .sizing.reset-size5.size3,.katex .fontsize-ensurer.reset-size5.size3{font-size:0.77777778em}.katex .sizing.reset-size5.size4,.katex .fontsize-ensurer.reset-size5.size4{font-size:0.88888889em}.katex .sizing.reset-size5.size5,.katex .fontsize-ensurer.reset-size5.size5{font-size:1em}.katex .sizing.reset-size5.size6,.katex .fontsize-ensurer.reset-size5.size6{font-size:1.11111111em}.katex .sizing.reset-size5.size7,.katex .fontsize-ensurer.reset-size5.size7{font-size:1.33333333em}.katex .sizing.reset-size5.size8,.katex .fontsize-ensurer.reset-size5.size8{font-size:1.6em}.katex .sizing.reset-size5.size9,.katex .fontsize-ensurer.reset-size5.size9{font-size:1.92em}.katex .sizing.reset-size5.size10,.katex .fontsize-ensurer.reset-size5.size10{font-size:2.30444444em}.katex .sizing.reset-size5.size11,.katex .fontsize-ensurer.reset-size5.size11{font-size:2.76444444em}.katex .sizing.reset-size6.size1,.katex .fontsize-ensurer.reset-size6.size1{font-size:0.5em}.katex .sizing.reset-size6.size2,.katex .fontsize-ensurer.reset-size6.size2{font-size:0.6em}.katex .sizing.reset-size6.size3,.katex .fontsize-ensurer.reset-size6.size3{font-size:0.7em}.katex .sizing.reset-size6.size4,.katex .fontsize-ensurer.reset-size6.size4{font-size:0.8em}.katex .sizing.reset-size6.size5,.katex .fontsize-ensurer.reset-size6.size5{font-size:0.9em}.katex .sizing.reset-size6.size6,.katex .fontsize-ensurer.reset-size6.size6{font-size:1em}.katex .sizing.reset-size6.size7,.katex .fontsize-ensurer.reset-size6.size7{font-size:1.2em}.katex .sizing.reset-size6.size8,.katex .fontsize-ensurer.reset-size6.size8{font-size:1.44em}.katex .sizing.reset-size6.size9,.katex .fontsize-ensurer.reset-size6.size9{font-size:1.728em}.katex .sizing.reset-size6.size10,.katex .fontsize-ensurer.reset-size6.size10{font-size:2.074em}.katex .sizing.reset-size6.size11,.katex .fontsize-ensurer.reset-size6.size11{font-size:2.488em}.katex .sizing.reset-size7.size1,.katex .fontsize-ensurer.reset-size7.size1{font-size:0.41666667em}.katex .sizing.reset-size7.size2,.katex .fontsize-ensurer.reset-size7.size2{font-size:0.5em}.katex .sizing.reset-size7.size3,.katex .fontsize-ensurer.reset-size7.size3{font-size:0.58333333em}.katex .sizing.reset-size7.size4,.katex .fontsize-ensurer.reset-size7.size4{font-size:0.66666667em}.katex .sizing.reset-size7.size5,.katex .fontsize-ensurer.reset-size7.size5{font-size:0.75em}.katex .sizing.reset-size7.size6,.katex .fontsize-ensurer.reset-size7.size6{font-size:0.83333333em}.katex .sizing.reset-size7.size7,.katex .fontsize-ensurer.reset-size7.size7{font-size:1em}.katex .sizing.reset-size7.size8,.katex .fontsize-ensurer.reset-size7.size8{font-size:1.2em}.katex .sizing.reset-size7.size9,.katex .fontsize-ensurer.reset-size7.size9{font-size:1.44em}.katex .sizing.reset-size7.size10,.katex .fontsize-ensurer.reset-size7.size10{font-size:1.72833333em}.katex .sizing.reset-size7.size11,.katex .fontsize-ensurer.reset-size7.size11{font-size:2.07333333em}.katex .sizing.reset-size8.size1,.katex .fontsize-ensurer.reset-size8.size1{font-size:0.34722222em}.katex .sizing.reset-size8.size2,.katex .fontsize-ensurer.reset-size8.size2{font-size:0.41666667em}.katex .sizing.reset-size8.size3,.katex .fontsize-ensurer.reset-size8.size3{font-size:0.48611111em}.katex .sizing.reset-size8.size4,.katex .fontsize-ensurer.reset-size8.size4{font-size:0.55555556em}.katex .sizing.reset-size8.size5,.katex .fontsize-ensurer.reset-size8.size5{font-size:0.625em}.katex .sizing.reset-size8.size6,.katex .fontsize-ensurer.reset-size8.size6{font-size:0.69444444em}.katex .sizing.reset-size8.size7,.katex .fontsize-ensurer.reset-size8.size7{font-size:0.83333333em}.katex .sizing.reset-size8.size8,.katex .fontsize-ensurer.reset-size8.size8{font-size:1em}.katex .sizing.reset-size8.size9,.katex .fontsize-ensurer.reset-size8.size9{font-size:1.2em}.katex .sizing.reset-size8.size10,.katex .fontsize-ensurer.reset-size8.size10{font-size:1.44027778em}.katex .sizing.reset-size8.size11,.katex .fontsize-ensurer.reset-size8.size11{font-size:1.72777778em}.katex .sizing.reset-size9.size1,.katex .fontsize-ensurer.reset-size9.size1{font-size:0.28935185em}.katex .sizing.reset-size9.size2,.katex .fontsize-ensurer.reset-size9.size2{font-size:0.34722222em}.katex .sizing.reset-size9.size3,.katex .fontsize-ensurer.reset-size9.size3{font-size:0.40509259em}.katex .sizing.reset-size9.size4,.katex .fontsize-ensurer.reset-size9.size4{font-size:0.46296296em}.katex .sizing.reset-size9.size5,.katex .fontsize-ensurer.reset-size9.size5{font-size:0.52083333em}.katex .sizing.reset-size9.size6,.katex .fontsize-ensurer.reset-size9.size6{font-size:0.5787037em}.katex .sizing.reset-size9.size7,.katex .fontsize-ensurer.reset-size9.size7{font-size:0.69444444em}.katex .sizing.reset-size9.size8,.katex .fontsize-ensurer.reset-size9.size8{font-size:0.83333333em}.katex .sizing.reset-size9.size9,.katex .fontsize-ensurer.reset-size9.size9{font-size:1em}.katex .sizing.reset-size9.size10,.katex .fontsize-ensurer.reset-size9.size10{font-size:1.20023148em}.katex .sizing.reset-size9.size11,.katex .fontsize-ensurer.reset-size9.size11{font-size:1.43981481em}.katex .sizing.reset-size10.size1,.katex .fontsize-ensurer.reset-size10.size1{font-size:0.24108004em}.katex .sizing.reset-size10.size2,.katex .fontsize-ensurer.reset-size10.size2{font-size:0.28929605em}.katex .sizing.reset-size10.size3,.katex .fontsize-ensurer.reset-size10.size3{font-size:0.33751205em}.katex .sizing.reset-size10.size4,.katex .fontsize-ensurer.reset-size10.size4{font-size:0.38572806em}.katex .sizing.reset-size10.size5,.katex .fontsize-ensurer.reset-size10.size5{font-size:0.43394407em}.katex .sizing.reset-size10.size6,.katex .fontsize-ensurer.reset-size10.size6{font-size:0.48216008em}.katex .sizing.reset-size10.size7,.katex .fontsize-ensurer.reset-size10.size7{font-size:0.57859209em}.katex .sizing.reset-size10.size8,.katex .fontsize-ensurer.reset-size10.size8{font-size:0.69431051em}.katex .sizing.reset-size10.size9,.katex .fontsize-ensurer.reset-size10.size9{font-size:0.83317261em}.katex .sizing.reset-size10.size10,.katex .fontsize-ensurer.reset-size10.size10{font-size:1em}.katex .sizing.reset-size10.size11,.katex .fontsize-ensurer.reset-size10.size11{font-size:1.19961427em}.katex .sizing.reset-size11.size1,.katex .fontsize-ensurer.reset-size11.size1{font-size:0.20096463em}.katex .sizing.reset-size11.size2,.katex .fontsize-ensurer.reset-size11.size2{font-size:0.24115756em}.katex .sizing.reset-size11.size3,.katex .fontsize-ensurer.reset-size11.size3{font-size:0.28135048em}.katex .sizing.reset-size11.size4,.katex .fontsize-ensurer.reset-size11.size4{font-size:0.32154341em}.katex .sizing.reset-size11.size5,.katex .fontsize-ensurer.reset-size11.size5{font-size:0.36173633em}.katex .sizing.reset-size11.size6,.katex .fontsize-ensurer.reset-size11.size6{font-size:0.40192926em}.katex .sizing.reset-size11.size7,.katex .fontsize-ensurer.reset-size11.size7{font-size:0.48231511em}.katex .sizing.reset-size11.size8,.katex .fontsize-ensurer.reset-size11.size8{font-size:0.57877814em}.katex .sizing.reset-size11.size9,.katex .fontsize-ensurer.reset-size11.size9{font-size:0.69453376em}.katex .sizing.reset-size11.size10,.katex .fontsize-ensurer.reset-size11.size10{font-size:0.83360129em}.katex .sizing.reset-size11.size11,.katex .fontsize-ensurer.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:0.12em}.katex .delimcenter{position:relative}.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .op-limits>.vlist-t{text-align:center}.katex .accent>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;min-width:1px}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{display:block;position:absolute;width:100%;height:inherit;fill:currentColor;stroke:currentColor;fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1}.katex svg path{stroke:none}.katex img{border-style:none;min-width:0;min-height:0;max-width:none;max-height:none}.katex .stretchy{width:100%;display:block;position:relative;overflow:hidden}.katex .stretchy::before,.katex .stretchy::after{content:""}.katex .hide-tail{width:100%;position:relative;overflow:hidden}.katex .halfarrow-left{position:absolute;left:0;width:50.2%;overflow:hidden}.katex .halfarrow-right{position:absolute;right:0;width:50.2%;overflow:hidden}.katex .brace-left{position:absolute;left:0;width:25.1%;overflow:hidden}.katex .brace-center{position:absolute;left:25%;width:50%;overflow:hidden}.katex .brace-right{position:absolute;right:0;width:25.1%;overflow:hidden}.katex .x-arrow-pad{padding:0 0.5em}.katex .cd-arrow-pad{padding:0 0.55556em 0 0.27778em}.katex .x-arrow,.katex .mover,.katex .munder{text-align:center}.katex .boxpad{padding:0 0.3em 0 0.3em}.katex .fbox,.katex .fcolorbox{box-sizing:border-box;border:0.04em solid}.katex .cancel-pad{padding:0 0.2em 0 0.2em}.katex .cancel-lap{margin-left:-0.2em;margin-right:-0.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:0.08em}.katex .angl{box-sizing:border-content;border-top:0.049em solid;border-right:0.049em solid;margin-right:0.03889em}.katex .anglpad{padding:0 0.03889em 0 0.03889em}.katex .eqn-num::before{counter-increment:katexEqnNo;content:"(" counter(katexEqnNo) ")"}.katex .mml-eqn-num::before{counter-increment:mmlEqnNo;content:"(" counter(mmlEqnNo) ")"}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{display:inline-block;position:absolute;right:-webkit-calc(50% + 0.3em);right:calc(50% + 0.3em);text-align:left}.katex .cd-label-right{display:inline-block;position:absolute;left:-webkit-calc(50% + 0.3em);left:calc(50% + 0.3em);text-align:right}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{text-align:left;padding-left:2em}body{counter-reset:katexEqnNo mmlEqnNo}svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em}.svg-inline--fa.fa-lg{vertical-align:-0.225em}.svg-inline--fa.fa-w-1{width:0.0625em}.svg-inline--fa.fa-w-2{width:0.125em}.svg-inline--fa.fa-w-3{width:0.1875em}.svg-inline--fa.fa-w-4{width:0.25em}.svg-inline--fa.fa-w-5{width:0.3125em}.svg-inline--fa.fa-w-6{width:0.375em}.svg-inline--fa.fa-w-7{width:0.4375em}.svg-inline--fa.fa-w-8{width:0.5em}.svg-inline--fa.fa-w-9{width:0.5625em}.svg-inline--fa.fa-w-10{width:0.625em}.svg-inline--fa.fa-w-11{width:0.6875em}.svg-inline--fa.fa-w-12{width:0.75em}.svg-inline--fa.fa-w-13{width:0.8125em}.svg-inline--fa.fa-w-14{width:0.875em}.svg-inline--fa.fa-w-15{width:0.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:0.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:0.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-0.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text,.fa-layers-counter{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:0.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:0.75em;vertical-align:-0.0667em}.fa-xs{font-size:0.75em}.fa-sm{font-size:0.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid 0.08em #eee;border-radius:0.1em;padding:0.2em 0.25em 0.15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fas.fa-pull-left,.far.fa-pull-left,.fal.fa-pull-left,.fab.fa-pull-left{margin-right:0.3em}.fa.fa-pull-right,.fas.fa-pull-right,.far.fa-pull-right,.fal.fa-pull-right,.fab.fa-pull-right{margin-left:0.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(1, -1);transform:scale(1, -1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(-1, -1);transform:scale(-1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-flip-both{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color, currentColor);opacity:1;opacity:var(--fa-primary-opacity, 1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color, currentColor);opacity:0.4;opacity:var(--fa-secondary-opacity, 0.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:0.4;opacity:var(--fa-secondary-opacity, 0.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity, 1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:black}.fad.fa-inverse{color:#fff}img{max-height:400px;border-radius:4px;max-width:100%;height:auto}code{padding:0 0.4rem;font-size:85%;color:#333;white-space:pre-wrap;border-radius:4px;padding:0.2em 0.4em;background-color:#f8f8f8;font-family:Consolas, Monaco, monospace}a{color:var(--quizdown-color-primary)}.quizdown-content{padding:1rem;max-width:900px;margin:auto}')}function ih(t){let e,n,s,r;return e=new of({props:{question:t[1],n:t[12]+1}}),s=new Zf({props:{hint:t[1].hint,show:t[14]}}),{c(){he(e.$$.fragment),n=ye(),he(s.$$.fragment)},m(i,o){le(e,i,o),B(i,n,o),le(s,i,o),r=!0},p(i,o){const a={};2&o&&(a.question=i[1]),4096&o&&(a.n=i[12]+1),e.$set(a);const l={};2&o&&(l.hint=i[1].hint),16384&o&&(l.show=i[14]),s.$set(l)},i(i){r||(q(e.$$.fragment,i),q(s.$$.fragment,i),r=!0)},o(i){X(e.$$.fragment,i),X(s.$$.fragment,i),r=!1},d(i){ce(e,i),i&&U(n),ce(s,i)}}}function oh(t){let e,n;return e=new Uf({props:{quiz:t[0]}}),{c(){he(e.$$.fragment)},m(s,r){le(e,s,r),n=!0},p(s,r){const i={};1&r&&(i.quiz=s[0]),e.$set(i)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function ah(t){let e,n,s,r;const i=[oh,ih],o=[];function a(l,c){return l[13]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),s=Ze()},m(l,c){o[e].m(l,c),B(l,s,c),r=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(sn(),X(o[u],1,1,()=>{o[u]=null}),rn(),n=o[e],n?n.p(l,c):(n=o[e]=i[e](l),n.c()),q(n,1),n.m(s.parentNode,s))},i(l){r||(q(n),r=!0)},o(l){X(n),r=!1},d(l){o[e].d(l),l&&U(s)}}}function lh(t){let e,n;return e=new Ff({props:{update:t[12],$$slots:{default:[ah]},$$scope:{ctx:t}}}),{c(){he(e.$$.fragment)},m(s,r){le(e,s,r),n=!0},p(s,r){const i={};4096&r&&(i.update=s[12]),16805891&r&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function ch(t){let e,n;return e=new Ut({props:{name:"lightbulb",solid:!1}}),{c(){he(e.$$.fragment)},m(s,r){le(e,s,r),n=!0},p:z,i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function uh(t){let e,n;return e=new Fn({props:{slot:"left",title:t[15]("hint"),disabled:!t[1].hint||t[14]||t[13],buttonAction:t[1].enableHint,$$slots:{default:[ch]},$$scope:{ctx:t}}}),{c(){he(e.$$.fragment)},m(s,r){le(e,s,r),n=!0},p(s,r){const i={};32768&r&&(i.title=s[15]("hint")),24578&r&&(i.disabled=!s[1].hint||s[14]||s[13]),2&r&&(i.buttonAction=s[1].enableHint),16777216&r&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function fh(t){let e,n;return e=new Ut({props:{name:"arrow-left",size:"lg"}}),{c(){he(e.$$.fragment)},m(s,r){le(e,s,r),n=!0},p:z,i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function hh(t){let e,n;return e=new Ut({props:{name:"arrow-right",size:"lg"}}),{c(){he(e.$$.fragment)},m(s,r){le(e,s,r),n=!0},p:z,i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function va(t){let e,n,s,r;return n=new Fn({props:{disabled:!(t[18]||t[19])||t[13],title:t[15]("evaluate"),buttonAction:t[21],$$slots:{default:[dh]},$$scope:{ctx:t}}}),{c(){e=P("div"),he(n.$$.fragment)},m(i,o){B(i,e,o),le(n,e,null),r=!0},p(i,o){const a={};794624&o&&(a.disabled=!(i[18]||i[19])||i[13]),32768&o&&(a.title=i[15]("evaluate")),1&o&&(a.buttonAction=i[21]),16777216&o&&(a.$$scope={dirty:o,ctx:i}),n.$set(a)},i(i){r||(q(n.$$.fragment,i),s||wt(()=>{s=ws(e,yf,{x:200,duration:500}),s.start()}),r=!0)},o(i){X(n.$$.fragment,i),r=!1},d(i){i&&U(e),ce(n)}}}function dh(t){let e,n;return e=new Ut({props:{name:"check-double",size:"lg"}}),{c(){he(e.$$.fragment)},m(s,r){le(e,s,r),n=!0},p:z,i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function ph(t){let e,n,s,r,i,o;e=new Fn({props:{title:t[15]("previous"),disabled:t[16]||t[13]||t[17],buttonAction:t[0].previous,$$slots:{default:[fh]},$$scope:{ctx:t}}}),s=new Fn({props:{disabled:t[18]||t[13]||t[17],buttonAction:t[0].next,title:t[15]("next"),$$slots:{default:[hh]},$$scope:{ctx:t}}});let a=(t[18]||t[19])&&va(t);return{c(){he(e.$$.fragment),n=ye(),he(s.$$.fragment),r=ye(),a&&a.c(),i=Ze()},m(l,c){le(e,l,c),B(l,n,c),le(s,l,c),B(l,r,c),a&&a.m(l,c),B(l,i,c),o=!0},p(l,c){const u={};32768&c&&(u.title=l[15]("previous")),204800&c&&(u.disabled=l[16]||l[13]||l[17]),1&c&&(u.buttonAction=l[0].previous),16777216&c&&(u.$$scope={dirty:c,ctx:l}),e.$set(u);const h={};401408&c&&(h.disabled=l[18]||l[13]||l[17]),1&c&&(h.buttonAction=l[0].next),32768&c&&(h.title=l[15]("next")),16777216&c&&(h.$$scope={dirty:c,ctx:l}),s.$set(h),l[18]||l[19]?a?(a.p(l,c),786432&c&&q(a,1)):(a=va(l),a.c(),q(a,1),a.m(i.parentNode,i)):a&&(sn(),X(a,1,1,()=>{a=null}),rn())},i(l){o||(q(e.$$.fragment,l),q(s.$$.fragment,l),q(a),o=!0)},o(l){X(e.$$.fragment,l),X(s.$$.fragment,l),X(a),o=!1},d(l){ce(e,l),l&&U(n),ce(s,l),l&&U(r),a&&a.d(l),l&&U(i)}}}function mh(t){let e,n;return e=new Ut({props:{name:"redo"}}),{c(){he(e.$$.fragment)},m(s,r){le(e,s,r),n=!0},p:z,i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function gh(t){let e,n;return e=new Fn({props:{slot:"right",title:t[15]("reset"),buttonAction:t[20],$$slots:{default:[mh]},$$scope:{ctx:t}}}),{c(){he(e.$$.fragment)},m(s,r){le(e,s,r),n=!0},p(s,r){const i={};32768&r&&(i.title=s[15]("reset")),9&r&&(i.buttonAction=s[20]),16777216&r&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function yh(t){let e,n,s,r,i,o;return e=new Du({props:{minHeight:Yr,$$slots:{default:[lh]},$$scope:{ctx:t}}}),s=new df({props:{$$slots:{right:[gh],center:[ph],left:[uh]},$$scope:{ctx:t}}}),i=new Pu({}),{c(){he(e.$$.fragment),n=ye(),he(s.$$.fragment),r=ye(),he(i.$$.fragment)},m(a,l){le(e,a,l),B(a,n,l),le(s,a,l),B(a,r,l),le(i,a,l),o=!0},p(a,l){const c={};16805891&l&&(c.$$scope={dirty:l,ctx:a}),e.$set(c);const u={};17817611&l&&(u.$$scope={dirty:l,ctx:a}),s.$set(u)},i(a){o||(q(e.$$.fragment,a),q(s.$$.fragment,a),q(i.$$.fragment,a),o=!0)},o(a){X(e.$$.fragment,a),X(s.$$.fragment,a),X(i.$$.fragment,a),o=!1},d(a){ce(e,a),a&&U(n),ce(s,a),a&&U(r),ce(i,a)}}}function bh(t){let e,n;return e=new sh({props:{$$slots:{default:[yh]},$$scope:{ctx:t}}}),{c(){he(e.$$.fragment)},m(s,r){le(e,s,r),n=!0},p(s,r){const i={};17821707&r&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){X(e.$$.fragment,s),n=!1},d(s){ce(e,s)}}}function vh(t){let e,n,s,r;return e=new Oc({props:{value:t[12],max:t[0].questions.length-1}}),s=new fa({props:{update:t[3],ms:800,minHeight:Yr,$$slots:{default:[bh]},$$scope:{ctx:t}}}),{c(){he(e.$$.fragment),n=ye(),he(s.$$.fragment)},m(i,o){le(e,i,o),B(i,n,o),le(s,i,o),r=!0},p(i,o){const a={};4096&o&&(a.value=i[12]),1&o&&(a.max=i[0].questions.length-1),e.$set(a);const l={};8&o&&(l.update=i[3]),17821707&o&&(l.$$scope={dirty:o,ctx:i}),s.$set(l)},i(i){r||(q(e.$$.fragment,i),q(s.$$.fragment,i),r=!0)},o(i){X(e.$$.fragment,i),X(s.$$.fragment,i),r=!1},d(i){ce(e,i),i&&U(n),ce(s,i)}}}function wh(t){let e,n,s;return n=new Iu({props:{$$slots:{default:[vh]},$$scope:{ctx:t}}}),{c(){e=P("div"),he(n.$$.fragment),$(e,"class","quizdown-content")},m(r,i){B(r,e,i),le(n,e,null),t[22](e),s=!0},p(r,[i]){const o={};17821707&i&&(o.$$scope={dirty:i,ctx:r}),n.$set(o)},i(r){s||(q(n.$$.fragment,r),s=!0)},o(r){X(n.$$.fragment,r),s=!1},d(r){r&&U(e),ce(n),t[22](null)}}}let Yr=150;function xh(t,e,n){let s,r,i,o,a,l,c,u,h,f,b,m,p,d,y,g,w,x=z,S=z,E=z,j=z,H=z,Z=z,R=z,G=z;Ke(t,$o,_=>n(15,p=_)),t.$$.on_destroy.push(()=>x()),t.$$.on_destroy.push(()=>S()),t.$$.on_destroy.push(()=>E()),t.$$.on_destroy.push(()=>j()),t.$$.on_destroy.push(()=>H()),t.$$.on_destroy.push(()=>Z()),t.$$.on_destroy.push(()=>R()),t.$$.on_destroy.push(()=>G());var C=this&&this.__awaiter||function(_,K,Q,Le){return new(Q||(Q=Promise))(function(Ie,je){function oe(re){try{Se(Le.next(re))}catch(Be){je(Be)}}function se(re){try{Se(Le.throw(re))}catch(Be){je(Be)}}function Se(re){var Be;re.done?Ie(re.value):(Be=re.value,Be instanceof Q?Be:new Q(function(rt){rt(Be)})).then(oe,se)}Se((Le=Le.apply(_,K||[])).next())})};let M,{quiz:A}=e;Nu(A.config.locale),Xe.autoAddCss=!1,la.add(Kf,Wf,Vf,Yf,Xf,Gf);let D=!1;return Fi(()=>C(void 0,void 0,void 0,function*(){let _=A.config.primaryColor,K=A.config.secondaryColor,Q=A.config.textColor;M.style.setProperty("--quizdown-color-primary",_),M.style.setProperty("--quizdown-color-secondary",K),M.style.setProperty("--quizdown-color-text",Q),n(2,M.style.minHeight=`${Yr}px`,M)})),t.$$set=_=>{"quiz"in _&&n(0,A=_.quiz)},t.$$.update=()=>{1&t.$$.dirty&&(n(11,s=A.active),x(),x=be(s,_=>n(1,h=_))),2&t.$$.dirty&&(n(10,r=h.showHint),j(),j=be(r,_=>n(14,m=_))),1&t.$$.dirty&&(n(9,i=A.index),S(),S=be(i,_=>n(12,f=_))),1&t.$$.dirty&&(n(8,o=A.onLast),R(),R=be(o,_=>n(18,g=_))),1&t.$$.dirty&&(n(7,a=A.onFirst),H(),H=be(a,_=>n(16,d=_))),1&t.$$.dirty&&(n(6,l=A.onResults),E(),E=be(l,_=>n(13,b=_))),1&t.$$.dirty&&(n(5,c=A.isEvaluated),Z(),Z=be(c,_=>n(17,y=_))),1&t.$$.dirty&&(n(4,u=A.allVisited),G(),G=be(u,_=>n(19,w=_)))},[A,h,M,D,u,c,l,a,o,i,r,s,f,b,m,p,d,y,g,w,()=>{n(3,D=!D),A.reset()},()=>A.jump(A.questions.length),function(_){nn[_?"unshift":"push"](()=>{M=_,n(2,M)})}]}class kh extends Pe{constructor(e){super(),Re(this,e,xh,wh,W,{quiz:0},rh)}}/*! @license DOMPurify 2.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.0/LICENSE */var zh=Object.hasOwnProperty,wa=Object.setPrototypeOf,Th=Object.isFrozen,Sh=Object.getPrototypeOf,Eh=Object.getOwnPropertyDescriptor,He=Object.freeze,kt=Object.seal,_h=Object.create,xa=typeof Reflect<"u"&&Reflect,Os=xa.apply,Jr=xa.construct;Os||(Os=function(t,e,n){return t.apply(e,n)}),He||(He=function(t){return t}),kt||(kt=function(t){return t}),Jr||(Jr=function(t,e){return new(Function.prototype.bind.apply(t,[null].concat(function(n){if(Array.isArray(n)){for(var s=0,r=Array(n.length);s<n.length;s++)r[s]=n[s];return r}return Array.from(n)}(e))))});var ka,$h=at(Array.prototype.forEach),za=at(Array.prototype.pop),Kn=at(Array.prototype.push),Ht=at(String.prototype.toLowerCase),Ta=at(String.prototype.match),Nt=at(String.prototype.replace),Ah=at(String.prototype.indexOf),Nh=at(String.prototype.trim),Lt=at(RegExp.prototype.test),Sa=(ka=TypeError,function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return Jr(ka,e)});function at(t){return function(e){for(var n=arguments.length,s=Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];return Os(t,e,s)}}function ee(t,e){wa&&wa(t,null);for(var n=e.length;n--;){var s=e[n];if(typeof s=="string"){var r=Ht(s);r!==s&&(Th(e)||(e[n]=r),s=r)}t[s]=!0}return t}function dn(t){var e=_h(null),n=void 0;for(n in t)Os(zh,t,[n])&&(e[n]=t[n]);return e}function Cs(t,e){for(;t!==null;){var n=Eh(t,e);if(n){if(n.get)return at(n.get);if(typeof n.value=="function")return at(n.value)}t=Sh(t)}return function(s){return console.warn("fallback value for",s),null}}var Ea=He(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Qr=He(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Zr=He(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Lh=He(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ei=He(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Oh=He(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),_a=He(["#text"]),$a=He(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),ti=He(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Aa=He(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Is=He(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ch=kt(/\{\{[\s\S]*|[\s\S]*\}\}/gm),Ih=kt(/<%[\s\S]*|[\s\S]*%>/gm),Mh=kt(/^data-[\-\w.\u00B7-\uFFFF]/),Rh=kt(/^aria-[\-\w]+$/),Ph=kt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),jh=kt(/^(?:\w+script|data):/i),qh=kt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function pt(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var Dh=function(){return typeof window>"u"?null:window},Uh=function(t,e){if((t===void 0?"undefined":Wn(t))!=="object"||typeof t.createPolicy!="function")return null;var n=null,s="data-tt-policy-suffix";e.currentScript&&e.currentScript.hasAttribute(s)&&(n=e.currentScript.getAttribute(s));var r="dompurify"+(n?"#"+n:"");try{return t.createPolicy(r,{createHTML:function(i){return i}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}},Hh=function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Dh(),n=function(v){return t(v)};if(n.version="2.3.0",n.removed=[],!e||!e.document||e.document.nodeType!==9)return n.isSupported=!1,n;var s=e.document,r=e.document,i=e.DocumentFragment,o=e.HTMLTemplateElement,a=e.Node,l=e.Element,c=e.NodeFilter,u=e.NamedNodeMap,h=u===void 0?e.NamedNodeMap||e.MozNamedAttrMap:u,f=e.Text,b=e.Comment,m=e.DOMParser,p=e.trustedTypes,d=l.prototype,y=Cs(d,"cloneNode"),g=Cs(d,"nextSibling"),w=Cs(d,"childNodes"),x=Cs(d,"parentNode");if(typeof o=="function"){var S=r.createElement("template");S.content&&S.content.ownerDocument&&(r=S.content.ownerDocument)}var E=Uh(p,s),j=E&&ar?E.createHTML(""):"",H=r,Z=H.implementation,R=H.createNodeIterator,G=H.createDocumentFragment,C=H.getElementsByTagName,M=s.importNode,A={};try{A=dn(r).documentMode?r.documentMode:{}}catch{}var D={};n.isSupported=typeof x=="function"&&Z&&Z.createHTMLDocument!==void 0&&A!==9;var _=Ch,K=Ih,Q=Mh,Le=Rh,Ie=jh,je=qh,oe=Ph,se=null,Se=ee({},[].concat(pt(Ea),pt(Qr),pt(Zr),pt(ei),pt(_a))),re=null,Be=ee({},[].concat(pt($a),pt(ti),pt(Aa),pt(Is))),rt=null,yt=null,Vt=!0,It=!0,Mt=!1,St=!1,bt=!1,_n=!1,zi=!1,$n=!1,or=!1,Wl=!0,ar=!1,Xl=!0,Ti=!0,cs=!1,An={},ip=ee({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Gl=null,Vl=ee({},["audio","video","img","source","image","track"]),Si=null,Yl=ee({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ei="http://www.w3.org/1998/Math/MathML",_i="http://www.w3.org/2000/svg",Rt="http://www.w3.org/1999/xhtml",lr=Rt,Jl=!1,Nn=null,op=r.createElement("form"),$i=function(v){Nn&&Nn===v||(v&&(v===void 0?"undefined":Wn(v))==="object"||(v={}),v=dn(v),se="ALLOWED_TAGS"in v?ee({},v.ALLOWED_TAGS):Se,re="ALLOWED_ATTR"in v?ee({},v.ALLOWED_ATTR):Be,Si="ADD_URI_SAFE_ATTR"in v?ee(dn(Yl),v.ADD_URI_SAFE_ATTR):Yl,Gl="ADD_DATA_URI_TAGS"in v?ee(dn(Vl),v.ADD_DATA_URI_TAGS):Vl,rt="FORBID_TAGS"in v?ee({},v.FORBID_TAGS):{},yt="FORBID_ATTR"in v?ee({},v.FORBID_ATTR):{},An="USE_PROFILES"in v&&v.USE_PROFILES,Vt=v.ALLOW_ARIA_ATTR!==!1,It=v.ALLOW_DATA_ATTR!==!1,Mt=v.ALLOW_UNKNOWN_PROTOCOLS||!1,St=v.SAFE_FOR_TEMPLATES||!1,bt=v.WHOLE_DOCUMENT||!1,$n=v.RETURN_DOM||!1,or=v.RETURN_DOM_FRAGMENT||!1,Wl=v.RETURN_DOM_IMPORT!==!1,ar=v.RETURN_TRUSTED_TYPE||!1,zi=v.FORCE_BODY||!1,Xl=v.SANITIZE_DOM!==!1,Ti=v.KEEP_CONTENT!==!1,cs=v.IN_PLACE||!1,oe=v.ALLOWED_URI_REGEXP||oe,lr=v.NAMESPACE||Rt,St&&(It=!1),or&&($n=!0),An&&(se=ee({},[].concat(pt(_a))),re=[],An.html===!0&&(ee(se,Ea),ee(re,$a)),An.svg===!0&&(ee(se,Qr),ee(re,ti),ee(re,Is)),An.svgFilters===!0&&(ee(se,Zr),ee(re,ti),ee(re,Is)),An.mathMl===!0&&(ee(se,ei),ee(re,Aa),ee(re,Is))),v.ADD_TAGS&&(se===Se&&(se=dn(se)),ee(se,v.ADD_TAGS)),v.ADD_ATTR&&(re===Be&&(re=dn(re)),ee(re,v.ADD_ATTR)),v.ADD_URI_SAFE_ATTR&&ee(Si,v.ADD_URI_SAFE_ATTR),Ti&&(se["#text"]=!0),bt&&ee(se,["html","head","body"]),se.table&&(ee(se,["tbody"]),delete rt.tbody),He&&He(v),Nn=v)},Ql=ee({},["mi","mo","mn","ms","mtext"]),Zl=ee({},["foreignobject","desc","title","annotation-xml"]),cr=ee({},Qr);ee(cr,Zr),ee(cr,Lh);var Ai=ee({},ei);ee(Ai,Oh);var ap=function(v){var L=x(v);L&&L.tagName||(L={namespaceURI:Rt,tagName:"template"});var N=Ht(v.tagName),me=Ht(L.tagName);if(v.namespaceURI===_i)return L.namespaceURI===Rt?N==="svg":L.namespaceURI===Ei?N==="svg"&&(me==="annotation-xml"||Ql[me]):!!cr[N];if(v.namespaceURI===Ei)return L.namespaceURI===Rt?N==="math":L.namespaceURI===_i?N==="math"&&Zl[me]:!!Ai[N];if(v.namespaceURI===Rt){if(L.namespaceURI===_i&&!Zl[me]||L.namespaceURI===Ei&&!Ql[me])return!1;var ze=ee({},["title","style","font","a","script"]);return!Ai[N]&&(ze[N]||!cr[N])}return!1},Pt=function(v){Kn(n.removed,{element:v});try{v.parentNode.removeChild(v)}catch{try{v.outerHTML=j}catch{v.remove()}}},ec=function(v,L){try{Kn(n.removed,{attribute:L.getAttributeNode(v),from:L})}catch{Kn(n.removed,{attribute:null,from:L})}if(L.removeAttribute(v),v==="is"&&!re[v])if($n||or)try{Pt(L)}catch{}else try{L.setAttribute(v,"")}catch{}},tc=function(v){var L=void 0,N=void 0;if(zi)v="<remove></remove>"+v;else{var me=Ta(v,/^[\r\n\t ]+/);N=me&&me[0]}var ze=E?E.createHTML(v):v;if(lr===Rt)try{L=new m().parseFromString(ze,"text/html")}catch{}if(!L||!L.documentElement){L=Z.createDocument(lr,"template",null);try{L.documentElement.innerHTML=Jl?"":ze}catch{}}var Fe=L.body||L.documentElement;return v&&N&&Fe.insertBefore(r.createTextNode(N),Fe.childNodes[0]||null),lr===Rt?C.call(L,bt?"html":"body")[0]:bt?L.documentElement:Fe},nc=function(v){return R.call(v.ownerDocument||v,v,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null,!1)},lp=function(v){return!(v instanceof f||v instanceof b)&&!(typeof v.nodeName=="string"&&typeof v.textContent=="string"&&typeof v.removeChild=="function"&&v.attributes instanceof h&&typeof v.removeAttribute=="function"&&typeof v.setAttribute=="function"&&typeof v.namespaceURI=="string"&&typeof v.insertBefore=="function")},us=function(v){return(a===void 0?"undefined":Wn(a))==="object"?v instanceof a:v&&(v===void 0?"undefined":Wn(v))==="object"&&typeof v.nodeType=="number"&&typeof v.nodeName=="string"},Et=function(v,L,N){D[v]&&$h(D[v],function(me){me.call(n,L,N,Nn)})},sc=function(v){var L=void 0;if(Et("beforeSanitizeElements",v,null),lp(v)||Ta(v.nodeName,/[\u0080-\uFFFF]/))return Pt(v),!0;var N=Ht(v.nodeName);if(Et("uponSanitizeElement",v,{tagName:N,allowedTags:se}),!us(v.firstElementChild)&&(!us(v.content)||!us(v.content.firstElementChild))&&Lt(/<[/\w]/g,v.innerHTML)&&Lt(/<[/\w]/g,v.textContent))return Pt(v),!0;if(!se[N]||rt[N]){if(Ti&&!ip[N]){var me=x(v)||v.parentNode,ze=w(v)||v.childNodes;if(ze&&me)for(var Fe=ze.length-1;Fe>=0;--Fe)me.insertBefore(y(ze[Fe],!0),g(v))}return Pt(v),!0}return v instanceof l&&!ap(v)?(Pt(v),!0):N!=="noscript"&&N!=="noembed"||!Lt(/<\/no(script|embed)/i,v.innerHTML)?(St&&v.nodeType===3&&(L=v.textContent,L=Nt(L,_," "),L=Nt(L,K," "),v.textContent!==L&&(Kn(n.removed,{element:v.cloneNode()}),v.textContent=L)),Et("afterSanitizeElements",v,null),!1):(Pt(v),!0)},rc=function(v,L,N){if(Xl&&(L==="id"||L==="name")&&(N in r||N in op))return!1;if(!(It&&!yt[L]&&Lt(Q,L))){if(!(Vt&&Lt(Le,L))){if(!re[L]||yt[L])return!1;if(!Si[L]){if(!Lt(oe,Nt(N,je,""))){if((L!=="src"&&L!=="xlink:href"&&L!=="href"||v==="script"||Ah(N,"data:")!==0||!Gl[v])&&!(Mt&&!Lt(Ie,Nt(N,je,"")))){if(N)return!1}}}}}return!0},ic=function(v){var L=void 0,N=void 0,me=void 0,ze=void 0;Et("beforeSanitizeAttributes",v,null);var Fe=v.attributes;if(Fe){var qe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:re};for(ze=Fe.length;ze--;){var ur=L=Fe[ze],it=ur.name,oc=ur.namespaceURI;if(N=Nh(L.value),me=Ht(it),qe.attrName=me,qe.attrValue=N,qe.keepAttr=!0,qe.forceKeepAttr=void 0,Et("uponSanitizeAttribute",v,qe),N=qe.attrValue,!qe.forceKeepAttr&&(ec(it,v),qe.keepAttr))if(Lt(/\/>/i,N))ec(it,v);else{St&&(N=Nt(N,_," "),N=Nt(N,K," "));var up=v.nodeName.toLowerCase();if(rc(up,me,N))try{oc?v.setAttributeNS(oc,it,N):v.setAttribute(it,N),za(n.removed)}catch{}}}Et("afterSanitizeAttributes",v,null)}},cp=function v(L){var N=void 0,me=nc(L);for(Et("beforeSanitizeShadowDOM",L,null);N=me.nextNode();)Et("uponSanitizeShadowNode",N,null),sc(N)||(N.content instanceof i&&v(N.content),ic(N));Et("afterSanitizeShadowDOM",L,null)};return n.sanitize=function(v,L){var N=void 0,me=void 0,ze=void 0,Fe=void 0,qe=void 0;if((Jl=!v)&&(v="<!-->"),typeof v!="string"&&!us(v)){if(typeof v.toString!="function")throw Sa("toString is not a function");if(typeof(v=v.toString())!="string")throw Sa("dirty is not a string, aborting")}if(!n.isSupported){if(Wn(e.toStaticHTML)==="object"||typeof e.toStaticHTML=="function"){if(typeof v=="string")return e.toStaticHTML(v);if(us(v))return e.toStaticHTML(v.outerHTML)}return v}if(_n||$i(L),n.removed=[],typeof v=="string"&&(cs=!1),!cs)if(v instanceof a)(me=(N=tc("<!---->")).ownerDocument.importNode(v,!0)).nodeType===1&&me.nodeName==="BODY"||me.nodeName==="HTML"?N=me:N.appendChild(me);else{if(!$n&&!St&&!bt&&v.indexOf("<")===-1)return E&&ar?E.createHTML(v):v;if(!(N=tc(v)))return $n?null:j}N&&zi&&Pt(N.firstChild);for(var ur=nc(cs?v:N);ze=ur.nextNode();)ze.nodeType===3&&ze===Fe||sc(ze)||(ze.content instanceof i&&cp(ze.content),ic(ze),Fe=ze);if(Fe=null,cs)return v;if($n){if(or)for(qe=G.call(N.ownerDocument);N.firstChild;)qe.appendChild(N.firstChild);else qe=N;return Wl&&(qe=M.call(s,qe,!0)),qe}var it=bt?N.outerHTML:N.innerHTML;return St&&(it=Nt(it,_," "),it=Nt(it,K," ")),E&&ar?E.createHTML(it):it},n.setConfig=function(v){$i(v),_n=!0},n.clearConfig=function(){Nn=null,_n=!1},n.isValidAttribute=function(v,L,N){Nn||$i({});var me=Ht(v),ze=Ht(L);return rc(me,ze,N)},n.addHook=function(v,L){typeof L=="function"&&(D[v]=D[v]||[],Kn(D[v],L))},n.removeHook=function(v){D[v]&&za(D[v])},n.removeHooks=function(v){D[v]&&(D[v]=[])},n.removeAllHooks=function(){D={}},n}();const Bh=t=>{const e=t.match(/^[ \t]*(?=\S)/gm);return e?e.reduce((n,s)=>Math.min(n,s.length),1/0):0};var ni=(t,{include:e,exclude:n}={})=>{const s=r=>{const i=o=>typeof o=="string"?r===o:o.test(r);return e?e.some(i):!n||!n.some(i)};for(const[r,i]of(o=>{const a=new Set;do for(const l of Reflect.ownKeys(o))a.add([o,l]);while((o=Reflect.getPrototypeOf(o))&&o!==Object.prototype);return a})(t.constructor.prototype)){if(i==="constructor"||!s(i))continue;const o=Reflect.getOwnPropertyDescriptor(r,i);o&&typeof o.value=="function"&&(t[i]=t[i].bind(t))}return t};function Na(t,e){return JSON.stringify(t)===JSON.stringify(e)}function La(t,e){let n,s,r=t.length;for(;r!==0;)s=Math.floor(Math.random()*r),r-=1,n=t[r],t[r]=t[s],t[s]=n;return t.slice(0,e)}class Oa{constructor(e,n,s,r,i,o){if(r.length===0)throw"no answers for question provided";this.text=e,this.explanation=n,this.hint=s,this.solved=!1,this.showHint=Ye(!1),this.options=o,this.answers=r,this.questionType=i,this.visited=!1,ni(this),this.reset()}enableHint(){this.showHint.update(e=>!0)}reset(){this.selected=[],this.solved=!1,this.visited=!1,this.showHint.set(!1),this.options.shuffleAnswers&&(this.answers=La(this.answers,this.answers.length))}}class Fh extends Oa{constructor(e,n,s,r,i){i.shuffleAnswers=!0,super(e,n,s,r,"Sequence",i)}isCorrect(){let e=this.answers.map(n=>n.id);return this.solved=Na(e.sort(),this.selected),this.solved}}class Ca extends Oa{isCorrect(){let e=this.answers.filter(s=>s.correct).map(s=>s.id),n=this.selected.map(s=>this.answers[s].id);return this.solved=Na(e.sort(),n.sort()),this.solved}}class Kh extends Ca{constructor(e,n,s,r,i){super(e,n,s,r,"MultipleChoice",i)}}class Wh extends Ca{constructor(e,n,s,r,i){if(super(e,n,s,r,"SingleChoice",i),this.answers.filter(o=>o.correct).length>1)throw"Single Choice questions can not have more than one correct answer."}}class Xh{constructor(e,n,s,r){this.html=n,this.correct=s,this.id=e,this.comment=r,ni(this)}}class Gh{constructor(e,n){if(this.index=Ye(0),this.questions=e,this.config=n,this.config.shuffleQuestions&&(this.questions=La(this.questions,this.config.nQuestions)),this.questions.length==0)throw"No questions for quiz provided";this.active=Ye(this.questions[0]),this.questions[0].visited=!0,this.onLast=Ye(this.questions.length==1),this.onResults=Ye(!1),this.onFirst=Ye(!0),this.allVisited=Ye(this.questions.length==1),this.isEvaluated=Ye(!1),ni(this)}setActive(){let e=ve(this.index);this.active.update(n=>this.questions[e]),this.questions[e].visited=!0}checkAllVisited(){for(let e of this.questions)if(!e.visited)return!1;return!0}jump(e){return e<=this.questions.length-1&&e>=0?(this.index.set(e),this.setActive(),this.allVisited.set(this.checkAllVisited()),this.onResults.set(!1),this.onLast.set(e==this.questions.length-1),this.onFirst.set(e==0),!0):e==this.questions.length&&(this.onResults.set(!0),this.onLast.set(!1),this.index.set(e),!0)}next(){return this.jump(ve(this.index)+1)}previous(){return this.jump(ve(this.index)-1)}reset(){return this.onLast.set(!1),this.onResults.set(!1),this.allVisited.set(!1),this.isEvaluated.set(!1),this.questions.forEach(e=>e.reset()),this.jump(0)}evaluate(){var e=0;for(var n of this.questions)n.isCorrect()&&(e+=1);return this.isEvaluated.set(!0),e}}function Ot(t,e){return t!==void 0?t:e}const Ia={start_on_load:"startOnLoad",shuffle_answers:"shuffleAnswers",shuffle_questions:"shuffleQuestions",primary_color:"primaryColor",secondary_color:"secondaryColor",text_color:"textColor"};class Ms{constructor(e){for(const i in Ia)s=Ia[i],(n=i)in(r=e)&&(r[s]=r[n]);var n,s,r;this.startOnLoad=Ot(e.startOnLoad,!0),this.shuffleAnswers=Ot(e.shuffleAnswers,!0),this.shuffleQuestions=Ot(e.shuffleQuestions,!1),this.nQuestions=Ot(e.nQuestions,void 0),this.primaryColor=Ot(e.primaryColor,"steelblue"),this.secondaryColor=Ot(e.secondaryColor,"#f2f2f2"),this.textColor=Ot(e.textColor,"black"),this.locale=Ot(e.locale,null)}}var Bt={exports:{}};function Vh(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}Bt.exports={defaults:{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:Vh,changeDefaults:function(t){Bt.exports.defaults=t}};const Yh=/[&<>"']/,Jh=/[&<>"']/g,Qh=/[<>"']|&(?!#?\w+;)/,Zh=/[<>"']|&(?!#?\w+;)/g,ed={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ma=t=>ed[t],td=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Ra(t){return t.replace(td,(e,n)=>(n=n.toLowerCase())==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):"")}const nd=/(^|[^\[])\^/g,sd=/[^\w:]/g,rd=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,Rs={},id=/^[^:]+:\/*[^/]*$/,od=/^([^:]+:)[\s\S]*$/,ad=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Pa(t,e){Rs[" "+t]||(id.test(t)?Rs[" "+t]=t+"/":Rs[" "+t]=ja(t,"/",!0));const n=(t=Rs[" "+t]).indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:t.replace(od,"$1")+e:e.charAt(0)==="/"?n?e:t.replace(ad,"$1")+e:t+e}function ja(t,e,n){const s=t.length;if(s===0)return"";let r=0;for(;r<s;){const i=t.charAt(s-r-1);if(i!==e||n){if(i===e||!n)break;r++}else r++}return t.substr(0,s-r)}var pn={escape:function(t,e){if(e){if(Yh.test(t))return t.replace(Jh,Ma)}else if(Qh.test(t))return t.replace(Zh,Ma);return t},unescape:Ra,edit:function(t,e){t=t.source||t,e=e||"";const n={replace:(s,r)=>(r=(r=r.source||r).replace(nd,"$1"),t=t.replace(s,r),n),getRegex:()=>new RegExp(t,e)};return n},cleanUrl:function(t,e,n){if(t){let s;try{s=decodeURIComponent(Ra(n)).replace(sd,"").toLowerCase()}catch{return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}e&&!rd.test(n)&&(n=Pa(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n},resolveUrl:Pa,noopTest:{exec:function(){}},merge:function(t){let e,n,s=1;for(;s<arguments.length;s++)for(n in e=arguments[s],e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},splitCells:function(t,e){const n=t.replace(/\|/g,(r,i,o)=>{let a=!1,l=i;for(;--l>=0&&o[l]==="\\";)a=!a;return a?"|":" |"}).split(/ \|/);let s=0;if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n},rtrim:ja,findClosingBracket:function(t,e){if(t.indexOf(e[1])===-1)return-1;const n=t.length;let s=0,r=0;for(;r<n;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])s++;else if(t[r]===e[1]&&(s--,s<0))return r;return-1},checkSanitizeDeprecation:function(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},repeatString:function(t,e){if(e<1)return"";let n="";for(;e>1;)1&e&&(n+=t),e>>=1,t+=t;return n+t}};const{defaults:ld}=Bt.exports,{rtrim:Ps,splitCells:js,escape:et,findClosingBracket:cd}=pn;function qa(t,e,n){const s=e.href,r=e.title?et(e.title):null,i=t[1].replace(/\\([\[\]])/g,"$1");return t[0].charAt(0)!=="!"?{type:"link",raw:n,href:s,title:r,text:i}:{type:"image",raw:n,href:s,title:r,text:et(i)}}var Da=class{constructor(t){this.options=t||ld}space(t){const e=this.rules.block.newline.exec(t);if(e)return e[0].length>1?{type:"space",raw:e[0]}:{raw:`
`}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Ps(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],s=function(r,i){const o=r.match(/^(\s+)(?:```)/);if(o===null)return i;const a=o[1];return i.split(`
`).map(l=>{const c=l.match(/^\s+/);if(c===null)return l;const[u]=c;return u.length>=a.length?l.slice(a.length):l}).join(`
`)}(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim():e[2],text:s}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const s=Ps(n,"#");this.options.pedantic?n=s.trim():s&&!/ $/.test(s)||(n=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n}}}nptable(t){const e=this.rules.block.nptable.exec(t);if(e){const n={type:"table",header:js(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split(`
`):[],raw:e[0]};if(n.header.length===n.align.length){let s,r=n.align.length;for(s=0;s<r;s++)/^ *-+: *$/.test(n.align[s])?n.align[s]="right":/^ *:-+: *$/.test(n.align[s])?n.align[s]="center":/^ *:-+ *$/.test(n.align[s])?n.align[s]="left":n.align[s]=null;for(r=n.cells.length,s=0;s<r;s++)n.cells[s]=js(n.cells[s],n.header.length);return n}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const n=e[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:e[0],text:n}}}list(t){const e=this.rules.block.list.exec(t);if(e){let n=e[0];const s=e[2],r=s.length>1,i={type:"list",raw:n,ordered:r,start:r?+s.slice(0,-1):"",loose:!1,items:[]},o=e[0].match(this.rules.block.item);let a,l,c,u,h,f,b,m,p,d=!1,y=o.length;c=this.rules.block.listItemStart.exec(o[0]);for(let g=0;g<y;g++){if(a=o[g],n=a,this.options.pedantic||(p=a.match(new RegExp("\\n\\s*\\n {0,"+(c[0].length-1)+"}\\S")),p&&(h=a.length-p.index+o.slice(g+1).join(`
`).length,i.raw=i.raw.substring(0,i.raw.length-h),a=a.substring(0,p.index),n=a,y=g+1)),g!==y-1){if(u=this.rules.block.listItemStart.exec(o[g+1]),this.options.pedantic?u[1].length>c[1].length:u[1].length>=c[0].length||u[1].length>3){o.splice(g,2,o[g]+(!this.options.pedantic&&u[1].length<c[0].length&&!o[g].match(/\n$/)?"":`
`)+o[g+1]),g--,y--;continue}(!this.options.pedantic||this.options.smartLists?u[2][u[2].length-1]!==s[s.length-1]:r===(u[2].length===1))&&(h=o.slice(g+1).join(`
`).length,i.raw=i.raw.substring(0,i.raw.length-h),g=y-1),c=u}l=a.length,a=a.replace(/^ *([*+-]|\d+[.)]) ?/,""),~a.indexOf(`
 `)&&(l-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+l+"}","gm"),"")),a=Ps(a,`
`),g!==y-1&&(n+=`
`),f=d||/\n\n(?!\s*$)/.test(n),g!==y-1&&(d=n.slice(-2)===`

`,f||(f=d)),f&&(i.loose=!0),this.options.gfm&&(b=/^\[[ xX]\] /.test(a),m=void 0,b&&(m=a[1]!==" ",a=a.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:n,task:b,checked:m,loose:f,text:a})}return i}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:this.options.sanitize?"paragraph":"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):et(e[0]):e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e)return e[3]&&(e[3]=e[3].substring(1,e[3].length-1)),{type:"def",tag:e[1].toLowerCase().replace(/\s+/g," "),raw:e[0],href:e[2],title:e[3]}}table(t){const e=this.rules.block.table.exec(t);if(e){const n={type:"table",header:js(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=e[0];let s,r=n.align.length;for(s=0;s<r;s++)/^ *-+: *$/.test(n.align[s])?n.align[s]="right":/^ *:-+: *$/.test(n.align[s])?n.align[s]="center":/^ *:-+ *$/.test(n.align[s])?n.align[s]="left":n.align[s]=null;for(r=n.cells.length,s=0;s<r;s++)n.cells[s]=js(n.cells[s].replace(/^ *\| *| *\| *$/g,""),n.header.length);return n}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1]}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e)return{type:"paragraph",raw:e[0],text:e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1]}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0]}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:et(e[1])}}tag(t,e,n){const s=this.rules.inline.tag.exec(t);if(s)return!e&&/^<a /i.test(s[0])?e=!0:e&&/^<\/a>/i.test(s[0])&&(e=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:e,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):et(s[0]):s[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const i=Ps(n.slice(0,-1),"\\");if((n.length-i.length)%2==0)return}else{const i=cd(e[2],"()");if(i>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let s=e[2],r="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);i&&(s=i[1],r=i[3])}else r=e[3]?e[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(s=this.options.pedantic&&!/>$/.test(n)?s.slice(1):s.slice(1,-1)),qa(e,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},e[0])}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let s=(n[2]||n[1]).replace(/\s+/g," ");if(s=e[s.toLowerCase()],!s||!s.href){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return qa(n,s,n[0])}}emStrong(t,e,n=""){let s=this.rules.inline.emStrong.lDelim.exec(t);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;const r=s[1]||s[2]||"";if(!r||r&&(n===""||this.rules.inline.punctuation.exec(n))){const i=s[0].length-1;let o,a,l=i,c=0;const u=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(u.lastIndex=0,e=e.slice(-1*t.length+i);(s=u.exec(e))!=null;)if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],o)if(a=o.length,s[3]||s[4])l+=a;else if(!((s[5]||s[6])&&i%3)||(i+a)%3){if(l-=a,!(l>0))return a=Math.min(a,a+l+c),Math.min(i,a)%2?{type:"em",raw:t.slice(0,i+s.index+a+1),text:t.slice(1,i+s.index+a)}:{type:"strong",raw:t.slice(0,i+s.index+a+1),text:t.slice(2,i+s.index+a-1)}}else c+=a}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const s=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return s&&r&&(n=n.substring(1,n.length-1)),n=et(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2]}}autolink(t,e){const n=this.rules.inline.autolink.exec(t);if(n){let s,r;return n[2]==="@"?(s=et(this.options.mangle?e(n[1]):n[1]),r="mailto:"+s):(s=et(n[1]),r=s),{type:"link",raw:n[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}url(t,e){let n;if(n=this.rules.inline.url.exec(t)){let s,r;if(n[2]==="@")s=et(this.options.mangle?e(n[0]):n[0]),r="mailto:"+s;else{let i;do i=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(i!==n[0]);s=et(n[0]),r=n[1]==="www."?"http://"+s:s}return{type:"link",raw:n[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(t,e,n){const s=this.rules.inline.text.exec(t);if(s){let r;return r=e?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):et(s[0]):s[0]:et(this.options.smartypants?n(s[0]):s[0]),{type:"text",raw:s[0],text:r}}}};const{noopTest:Xn,edit:pe,merge:Ft}=pn,F={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:Xn,table:Xn,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};F.def=pe(F.def).replace("label",F._label).replace("title",F._title).getRegex(),F.bullet=/(?:[*+-]|\d{1,9}[.)])/,F.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,F.item=pe(F.item,"gm").replace(/bull/g,F.bullet).getRegex(),F.listItemStart=pe(/^( *)(bull) */).replace("bull",F.bullet).getRegex(),F.list=pe(F.list).replace(/bull/g,F.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+F.def.source+")").getRegex(),F._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",F._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,F.html=pe(F.html,"i").replace("comment",F._comment).replace("tag",F._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),F.paragraph=pe(F._paragraph).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex(),F.blockquote=pe(F.blockquote).replace("paragraph",F.paragraph).getRegex(),F.normal=Ft({},F),F.gfm=Ft({},F.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),F.gfm.nptable=pe(F.gfm.nptable).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex(),F.gfm.table=pe(F.gfm.table).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex(),F.pedantic=Ft({},F.normal,{html:pe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",F._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Xn,paragraph:pe(F.normal._paragraph).replace("hr",F.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",F.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const I={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Xn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Xn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};I.punctuation=pe(I.punctuation).replace(/punctuation/g,I._punctuation).getRegex(),I.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,I.escapedEmSt=/\\\*|\\_/g,I._comment=pe(F._comment).replace("(?:-->|$)","-->").getRegex(),I.emStrong.lDelim=pe(I.emStrong.lDelim).replace(/punct/g,I._punctuation).getRegex(),I.emStrong.rDelimAst=pe(I.emStrong.rDelimAst,"g").replace(/punct/g,I._punctuation).getRegex(),I.emStrong.rDelimUnd=pe(I.emStrong.rDelimUnd,"g").replace(/punct/g,I._punctuation).getRegex(),I._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,I._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,I._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,I.autolink=pe(I.autolink).replace("scheme",I._scheme).replace("email",I._email).getRegex(),I._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,I.tag=pe(I.tag).replace("comment",I._comment).replace("attribute",I._attribute).getRegex(),I._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,I._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,I._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,I.link=pe(I.link).replace("label",I._label).replace("href",I._href).replace("title",I._title).getRegex(),I.reflink=pe(I.reflink).replace("label",I._label).getRegex(),I.reflinkSearch=pe(I.reflinkSearch,"g").replace("reflink",I.reflink).replace("nolink",I.nolink).getRegex(),I.normal=Ft({},I),I.pedantic=Ft({},I.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:pe(/^!?\[(label)\]\((.*?)\)/).replace("label",I._label).getRegex(),reflink:pe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",I._label).getRegex()}),I.gfm=Ft({},I.normal,{escape:pe(I.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),I.gfm.url=pe(I.gfm.url,"i").replace("email",I.gfm._extended_email).getRegex(),I.breaks=Ft({},I.gfm,{br:pe(I.br).replace("{2,}","*").getRegex(),text:pe(I.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var ud={block:F,inline:I};const fd=Da,{defaults:hd}=Bt.exports,{block:qs,inline:Gn}=ud,{repeatString:Ua}=pn;function dd(t){return t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Ha(t){let e,n,s="";const r=t.length;for(e=0;e<r;e++)n=t.charCodeAt(e),Math.random()>.5&&(n="x"+n.toString(16)),s+="&#"+n+";";return s}const{defaults:pd}=Bt.exports,{cleanUrl:Ba,escape:Ds}=pn;var Fa=class{constructor(t){this.options=t||pd}code(t,e,n){const s=(e||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(t,s);r!=null&&r!==t&&(n=!0,t=r)}return t=t.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+Ds(s,!0)+'">'+(n?t:Ds(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:Ds(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
`+t+`</blockquote>
`}html(t){return t}heading(t,e,n,s){return this.options.headerIds?"<h"+e+' id="'+this.options.headerPrefix+s.slug(n)+'">'+t+"</h"+e+`>
`:"<h"+e+">"+t+"</h"+e+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,e,n){const s=e?"ol":"ul";return"<"+s+(e&&n!==1?' start="'+n+'"':"")+`>
`+t+"</"+s+`>
`}listitem(t){return"<li>"+t+`</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return"<p>"+t+`</p>
`}table(t,e){return e&&(e="<tbody>"+e+"</tbody>"),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
`+t+`</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?"<"+n+' align="'+e.align+'">':"<"+n+">")+t+"</"+n+`>
`}strong(t){return"<strong>"+t+"</strong>"}em(t){return"<em>"+t+"</em>"}codespan(t){return"<code>"+t+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return"<del>"+t+"</del>"}link(t,e,n){if((t=Ba(this.options.sanitize,this.options.baseUrl,t))===null)return n;let s='<a href="'+Ds(t)+'"';return e&&(s+=' title="'+e+'"'),s+=">"+n+"</a>",s}image(t,e,n){if((t=Ba(this.options.sanitize,this.options.baseUrl,t))===null)return n;let s='<img src="'+t+'" alt="'+n+'"';return e&&(s+=' title="'+e+'"'),s+=this.options.xhtml?"/>":">",s}text(t){return t}},Ka=class{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}},Wa=class{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,e){let n=t,s=0;if(this.seen.hasOwnProperty(n)){s=this.seen[t];do s++,n=t+"-"+s;while(this.seen.hasOwnProperty(n))}return e||(this.seen[t]=s,this.seen[n]=0),n}slug(t,e={}){const n=this.serialize(t);return this.getNextSafeSlug(n,e.dryrun)}};const md=Fa,gd=Ka,yd=Wa,{defaults:bd}=Bt.exports,{unescape:vd}=pn,Vn=class Pi{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||hd,this.options.tokenizer=this.options.tokenizer||new fd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const n={block:qs.normal,inline:Gn.normal};this.options.pedantic?(n.block=qs.pedantic,n.inline=Gn.pedantic):this.options.gfm&&(n.block=qs.gfm,this.options.breaks?n.inline=Gn.breaks:n.inline=Gn.gfm),this.tokenizer.rules=n}static get rules(){return{block:qs,inline:Gn}}static lex(e,n){return new Pi(n).lex(e)}static lexInline(e,n){return new Pi(n).inlineTokens(e)}lex(e){return e=e.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(e,n=[],s=!0){let r,i,o,a,l,c;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(u=>!!(r=u.call(this,e,n))&&(e=e.substring(r.raw.length),n.push(r),!0))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&n.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),a=n[n.length-1],a&&a.type==="paragraph"?(a.raw+=`
`+r.raw,a.text+=`
`+r.text):n.push(r);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],s),n.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),o=r.items.length,i=0;i<o;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);n.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),n.push(r);else if(s&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),n.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),n.push(r);else{if(l=e,this.options.extensions&&this.options.extensions.startBlock){let u=1/0;const h=e.slice(1);let f;this.options.extensions.startBlock.forEach(function(b){f=b.call(this,h),typeof f=="number"&&f>=0&&(u=Math.min(u,f))}),u<1/0&&u>=0&&(l=e.substring(0,u+1))}if(s&&(r=this.tokenizer.paragraph(l)))a=n[n.length-1],c&&a.type==="paragraph"?(a.raw+=`
`+r.raw,a.text+=`
`+r.text):n.push(r),c=l.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+r.raw,a.text+=`
`+r.text):n.push(r);else if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}return n}inline(e){let n,s,r,i,o,a;const l=e.length;for(n=0;n<l;n++)switch(a=e[n],a.type){case"paragraph":case"text":case"heading":a.tokens=[],this.inlineTokens(a.text,a.tokens);break;case"table":for(a.tokens={header:[],cells:[]},i=a.header.length,s=0;s<i;s++)a.tokens.header[s]=[],this.inlineTokens(a.header[s],a.tokens.header[s]);for(i=a.cells.length,s=0;s<i;s++)for(o=a.cells[s],a.tokens.cells[s]=[],r=0;r<o.length;r++)a.tokens.cells[s][r]=[],this.inlineTokens(o[r],a.tokens.cells[s][r]);break;case"blockquote":this.inline(a.tokens);break;case"list":for(i=a.items.length,s=0;s<i;s++)this.inline(a.items[s].tokens)}return e}inlineTokens(e,n=[],s=!1,r=!1){let i,o,a,l,c,u,h=e;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(h))!=null;)f.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(h=h.slice(0,l.index)+"["+Ua("a",l[0].length-2)+"]"+h.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(h))!=null;)h=h.slice(0,l.index)+"["+Ua("a",l[0].length-2)+"]"+h.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(h))!=null;)h=h.slice(0,l.index)+"++"+h.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(c||(u=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(f=>!!(i=f.call(this,e,n))&&(e=e.substring(i.raw.length),n.push(i),!0))))if(i=this.tokenizer.escape(e))e=e.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.tag(e,s,r))e=e.substring(i.raw.length),s=i.inLink,r=i.inRawBlock,o=n[n.length-1],o&&i.type==="text"&&o.type==="text"?(o.raw+=i.raw,o.text+=i.text):n.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),i.type==="link"&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),n.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),o=n[n.length-1],i.type==="link"?(i.tokens=this.inlineTokens(i.text,[],!0,r),n.push(i)):o&&i.type==="text"&&o.type==="text"?(o.raw+=i.raw,o.text+=i.text):n.push(i);else if(i=this.tokenizer.emStrong(e,h,u))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],s,r),n.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),n.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],s,r),n.push(i);else if(i=this.tokenizer.autolink(e,Ha))e=e.substring(i.raw.length),n.push(i);else if(s||!(i=this.tokenizer.url(e,Ha))){if(a=e,this.options.extensions&&this.options.extensions.startInline){let f=1/0;const b=e.slice(1);let m;this.options.extensions.startInline.forEach(function(p){m=p.call(this,b),typeof m=="number"&&m>=0&&(f=Math.min(f,m))}),f<1/0&&f>=0&&(a=e.substring(0,f+1))}if(i=this.tokenizer.inlineText(a,r,dd))e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(u=i.raw.slice(-1)),c=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=i.raw,o.text+=i.text):n.push(i);else if(e){const f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}throw new Error(f)}}else e=e.substring(i.raw.length),n.push(i);return n}},Yn=class ji{constructor(e){this.options=e||bd,this.options.renderer=this.options.renderer||new md,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new gd,this.slugger=new yd}static parse(e,n){return new ji(n).parse(e)}static parseInline(e,n){return new ji(n).parseInline(e)}parse(e,n=!0){let s,r,i,o,a,l,c,u,h,f,b,m,p,d,y,g,w,x,S,E="";const j=e.length;for(s=0;s<j;s++)if(f=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(S=this.options.extensions.renderers[f.type].call(this,f),S!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)))E+=S||"";else switch(f.type){case"space":continue;case"hr":E+=this.renderer.hr();continue;case"heading":E+=this.renderer.heading(this.parseInline(f.tokens),f.depth,vd(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue;case"code":E+=this.renderer.code(f.text,f.lang,f.escaped);continue;case"table":for(u="",c="",o=f.header.length,r=0;r<o;r++)c+=this.renderer.tablecell(this.parseInline(f.tokens.header[r]),{header:!0,align:f.align[r]});for(u+=this.renderer.tablerow(c),h="",o=f.cells.length,r=0;r<o;r++){for(l=f.tokens.cells[r],c="",a=l.length,i=0;i<a;i++)c+=this.renderer.tablecell(this.parseInline(l[i]),{header:!1,align:f.align[i]});h+=this.renderer.tablerow(c)}E+=this.renderer.table(u,h);continue;case"blockquote":h=this.parse(f.tokens),E+=this.renderer.blockquote(h);continue;case"list":for(b=f.ordered,m=f.start,p=f.loose,o=f.items.length,h="",r=0;r<o;r++)y=f.items[r],g=y.checked,w=y.task,d="",y.task&&(x=this.renderer.checkbox(g),p?y.tokens.length>0&&y.tokens[0].type==="text"?(y.tokens[0].text=x+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&y.tokens[0].tokens[0].type==="text"&&(y.tokens[0].tokens[0].text=x+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:x}):d+=x),d+=this.parse(y.tokens,p),h+=this.renderer.listitem(d,w,g);E+=this.renderer.list(h,b,m);continue;case"html":E+=this.renderer.html(f.text);continue;case"paragraph":E+=this.renderer.paragraph(this.parseInline(f.tokens));continue;case"text":for(h=f.tokens?this.parseInline(f.tokens):f.text;s+1<j&&e[s+1].type==="text";)f=e[++s],h+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);E+=n?this.renderer.paragraph(h):h;continue;default:{const H='Token with "'+f.type+'" type was not found.';if(this.options.silent)return void console.error(H);throw new Error(H)}}return E}parseInline(e,n){n=n||this.renderer;let s,r,i,o="";const a=e.length;for(s=0;s<a;s++)if(r=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(i=this.options.extensions.renderers[r.type].call(this,r),i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))o+=i||"";else switch(r.type){case"escape":o+=n.text(r.text);break;case"html":o+=n.html(r.text);break;case"link":o+=n.link(r.href,r.title,this.parseInline(r.tokens,n));break;case"image":o+=n.image(r.href,r.title,r.text);break;case"strong":o+=n.strong(this.parseInline(r.tokens,n));break;case"em":o+=n.em(this.parseInline(r.tokens,n));break;case"codespan":o+=n.codespan(r.text);break;case"br":o+=n.br();break;case"del":o+=n.del(this.parseInline(r.tokens,n));break;case"text":o+=n.text(r.text);break;default:{const l='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}}return o}},Xa=Da,Ga=Fa,wd=Ka,xd=Wa,{merge:Us,checkSanitizeDeprecation:Va,escape:Ya}=pn,{getDefaults:kd,changeDefaults:zd,defaults:Td}=Bt.exports;function Y(t,e,n){if(t==null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=Us({},Y.defaults,e||{}),Va(e),n){const s=e.highlight;let r;try{r=Vn.lex(t,e)}catch(a){return n(a)}const i=function(a){let l;if(!a)try{e.walkTokens&&Y.walkTokens(r,e.walkTokens),l=Yn.parse(r,e)}catch(c){a=c}return e.highlight=s,a?n(a):n(null,l)};if(!s||s.length<3||(delete e.highlight,!r.length))return i();let o=0;return Y.walkTokens(r,function(a){a.type==="code"&&(o++,setTimeout(()=>{s(a.text,a.lang,function(l,c){if(l)return i(l);c!=null&&c!==a.text&&(a.text=c,a.escaped=!0),o--,o===0&&i()})},0))}),void(o===0&&i())}try{const s=Vn.lex(t,e);return e.walkTokens&&Y.walkTokens(s,e.walkTokens),Yn.parse(s,e)}catch(s){if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Ya(s.message+"",!0)+"</pre>";throw s}}Y.options=Y.setOptions=function(t){return Us(Y.defaults,t),zd(Y.defaults),Y},Y.getDefaults=kd,Y.defaults=Td,Y.use=function(...t){const e=Us({},...t),n=Y.defaults.extensions||{renderers:{},childTokens:{}};let s;t.forEach(r=>{if(r.extensions&&(s=!0,r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const o=n.renderers?n.renderers[i.name]:null;n.renderers[i.name]=o?function(...a){let l=i.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[i.level]?n[i.level].unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}i.childTokens&&(n.childTokens[i.name]=i.childTokens)})),r.renderer){const i=Y.defaults.renderer||new Ga;for(const o in r.renderer){const a=i[o];i[o]=(...l)=>{let c=r.renderer[o].apply(i,l);return c===!1&&(c=a.apply(i,l)),c}}e.renderer=i}if(r.tokenizer){const i=Y.defaults.tokenizer||new Xa;for(const o in r.tokenizer){const a=i[o];i[o]=(...l)=>{let c=r.tokenizer[o].apply(i,l);return c===!1&&(c=a.apply(i,l)),c}}e.tokenizer=i}if(r.walkTokens){const i=Y.defaults.walkTokens;e.walkTokens=o=>{r.walkTokens.call(this,o),i&&i(o)}}s&&(e.extensions=n),Y.setOptions(e)})},Y.walkTokens=function(t,e){for(const n of t)switch(e(n),n.type){case"table":for(const s of n.tokens.header)Y.walkTokens(s,e);for(const s of n.tokens.cells)for(const r of s)Y.walkTokens(r,e);break;case"list":Y.walkTokens(n.items,e);break;default:Y.defaults.extensions&&Y.defaults.extensions.childTokens&&Y.defaults.extensions.childTokens[n.type]?Y.defaults.extensions.childTokens[n.type].forEach(function(s){Y.walkTokens(n[s],e)}):n.tokens&&Y.walkTokens(n.tokens,e)}},Y.parseInline=function(t,e){if(t==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");e=Us({},Y.defaults,e||{}),Va(e);try{const n=Vn.lexInline(t,e);return e.walkTokens&&Y.walkTokens(n,e.walkTokens),Yn.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Ya(n.message+"",!0)+"</pre>";throw n}},Y.Parser=Yn,Y.parser=Yn.parse,Y.Renderer=Ga,Y.TextRenderer=wd,Y.Lexer=Vn,Y.lexer=Vn.lex,Y.Tokenizer=Xa,Y.Slugger=xd,Y.parse=Y;var Hs=Y;const si=Symbol.for("yaml.alias"),Ja=Symbol.for("yaml.document"),Ct=Symbol.for("yaml.map"),Qa=Symbol.for("yaml.pair"),Kt=Symbol.for("yaml.scalar"),mn=Symbol.for("yaml.seq"),lt=Symbol.for("yaml.node.type"),Jn=t=>!!t&&typeof t=="object"&&t[lt]===si,Za=t=>!!t&&typeof t=="object"&&t[lt]===Ja,gn=t=>!!t&&typeof t=="object"&&t[lt]===Ct,Ne=t=>!!t&&typeof t=="object"&&t[lt]===Qa,ke=t=>!!t&&typeof t=="object"&&t[lt]===Kt,Qn=t=>!!t&&typeof t=="object"&&t[lt]===mn;function _e(t){if(t&&typeof t=="object")switch(t[lt]){case Ct:case mn:return!0}return!1}function Je(t){if(t&&typeof t=="object")switch(t[lt]){case si:case Ct:case Kt:case mn:return!0}return!1}class ri{constructor(e){Object.defineProperty(this,lt,{value:e})}}const Wt=Symbol("break visit"),Sd=Symbol("skip children"),Zn=Symbol("remove node");function Xt(t,e){typeof e=="object"&&(e.Collection||e.Node||e.Value)&&(e=Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e)),Za(t)?yn(null,t.contents,e,Object.freeze([t]))===Zn&&(t.contents=null):yn(null,t,e,Object.freeze([]))}function yn(t,e,n,s){let r;if(typeof n=="function"?r=n(t,e,s):gn(e)?n.Map&&(r=n.Map(t,e,s)):Qn(e)?n.Seq&&(r=n.Seq(t,e,s)):Ne(e)?n.Pair&&(r=n.Pair(t,e,s)):ke(e)?n.Scalar&&(r=n.Scalar(t,e,s)):Jn(e)&&n.Alias&&(r=n.Alias(t,e,s)),Je(r)||Ne(r)){const i=s[s.length-1];if(_e(i))i.items[t]=r;else if(Ne(i))t==="key"?i.key=r:i.value=r;else{if(!Za(i)){const o=Jn(i)?"alias":"scalar";throw new Error(`Cannot replace node with ${o} parent`)}i.contents=r}return yn(t,r,n,s)}if(typeof r!="symbol"){if(_e(e)){s=Object.freeze(s.concat(e));for(let i=0;i<e.items.length;++i){const o=yn(i,e.items[i],n,s);if(typeof o=="number")i=o-1;else{if(o===Wt)return Wt;o===Zn&&(e.items.splice(i,1),i-=1)}}}else if(Ne(e)){s=Object.freeze(s.concat(e));const i=yn("key",e.key,n,s);if(i===Wt)return Wt;i===Zn&&(e.key=null);const o=yn("value",e.value,n,s);if(o===Wt)return Wt;o===Zn&&(e.value=null)}}return r}Xt.BREAK=Wt,Xt.SKIP=Sd,Xt.REMOVE=Zn;const Ed={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"};class tt{constructor(e,n){this.marker=null,this.yaml=Object.assign({},tt.defaultYaml,e),this.tags=Object.assign({},tt.defaultTags,n)}atDocument(){const e=new tt(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:tt.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},tt.defaultTags)}return e}add(e,n){this.atNextDocument&&(this.yaml={explicit:tt.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},tt.defaultTags),this.atNextDocument=!1);const s=e.trim().split(/[ \t]+/),r=s.shift();switch(r){case"%TAG":{if(s.length!==2&&(n(0,"%TAG directive should contain exactly two parts"),s.length<2))return!1;const[i,o]=s;return this.tags[i]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,s.length<1)return n(0,"%YAML directive should contain exactly one part"),!1;const[i]=s;return i==="1.1"||i==="1.2"?(this.yaml.version=i,!0):(n(6,`Unsupported YAML version ${i}`,!0),!1)}default:return n(0,`Unknown directive ${r}`,!0),!1}}tagName(e,n){if(e==="!")return"!";if(e[0]!=="!")return n(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const o=e.slice(2,-1);return o==="!"||o==="!!"?(n(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&n("Verbatim tags must end with a >"),o)}const[,s,r]=e.match(/^(.*!)([^!]*)$/);r||n(`The ${e} tag has no suffix`);const i=this.tags[s];return i?i+decodeURIComponent(r):s==="!"?e:(n(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[n,s]of Object.entries(this.tags))if(e.startsWith(s))return n+e.substring(s.length).replace(/[!,[\]{}]/g,r=>Ed[r]);return e[0]==="!"?e:`!<${e}>`}toString(e){const n=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],s=Object.entries(this.tags);let r;if(e&&s.length>0&&Je(e.contents)){const i={};Xt(e.contents,(o,a)=>{Je(a)&&a.tag&&(i[a.tag]=!0)}),r=Object.keys(i)}else r=[];for(const[i,o]of s)i==="!!"&&o==="tag:yaml.org,2002:"||e&&!r.some(a=>a.startsWith(o))||n.push(`%TAG ${i} ${o}`);return n.join(`
`)}}function el(t){if(/[\x00-\x19\s,[\]{}]/.test(t)){const e=JSON.stringify(t);throw new Error(`Anchor must not contain whitespace or control characters: ${e}`)}return!0}function tl(t){const e=new Set;return Xt(t,{Value(n,s){s.anchor&&e.add(s.anchor)}}),e}function nl(t,e){for(let n=1;;++n){const s=`${t}${n}`;if(!e.has(s))return s}}tt.defaultYaml={explicit:!1,version:"1.2"},tt.defaultTags={"!!":"tag:yaml.org,2002:"};class ii extends ri{constructor(e){super(si),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let n;return Xt(e,{Node:(s,r)=>{if(r===this)return Xt.BREAK;r.anchor===this.source&&(n=r)}}),n}toJSON(e,n){if(!n)return{source:this.source};const{anchors:s,doc:r,maxAliasCount:i}=n,o=this.resolve(r);if(!o){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}const a=s.get(o);if(!a||a.res===void 0)throw new ReferenceError("This should not happen: Alias anchor was not resolved?");if(i>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=Bs(r,o,s)),a.count*a.aliasCount>i))throw new ReferenceError("Excessive alias count indicates a resource exhaustion attack");return a.res}toString(e,n,s){const r=`*${this.source}`;if(e){if(el(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(e.implicitKey)return`${r} `}return r}}function Bs(t,e,n){if(Jn(e)){const s=e.resolve(t),r=n&&s&&n.get(s);return r?r.count*r.aliasCount:0}if(_e(e)){let s=0;for(const r of e.items){const i=Bs(t,r,n);i>s&&(s=i)}return s}if(Ne(e)){const s=Bs(t,e.key,n),r=Bs(t,e.value,n);return Math.max(s,r)}return 1}function mt(t,e,n){if(Array.isArray(t))return t.map((r,i)=>mt(r,String(i),n));if(t&&typeof t.toJSON=="function"){if(!n||!ke(s=t)&&!_e(s)||!s.anchor)return t.toJSON(e,n);const r={aliasCount:0,count:1,res:void 0};n.anchors.set(t,r),n.onCreate=o=>{r.res=o,delete n.onCreate};const i=t.toJSON(e,n);return n.onCreate&&n.onCreate(i),i}var s;return typeof t!="bigint"||n&&n.keep?t:Number(t)}const sl=t=>!t||typeof t!="function"&&typeof t!="object";class J extends ri{constructor(e){super(Kt),this.value=e}toJSON(e,n){return n&&n.keep?this.value:mt(this.value,e,n)}toString(){return String(this.value)}}J.BLOCK_FOLDED="BLOCK_FOLDED",J.BLOCK_LITERAL="BLOCK_LITERAL",J.PLAIN="PLAIN",J.QUOTE_DOUBLE="QUOTE_DOUBLE",J.QUOTE_SINGLE="QUOTE_SINGLE";function es(t,e,n){var s,r;if(Je(t))return t;if(Ne(t)){const f=(r=(s=n.schema[Ct]).createNode)===null||r===void 0?void 0:r.call(s,n.schema,null,n);return f.items.push(t),f}(t instanceof String||t instanceof Number||t instanceof Boolean||typeof BigInt=="function"&&t instanceof BigInt)&&(t=t.valueOf());const{onAnchor:i,onTagObj:o,schema:a,sourceObjects:l}=n;let c;if(t&&typeof t=="object"){if(c=l.get(t),c)return c.anchor||(c.anchor=i(t)),new ii(c.anchor);c={anchor:null,node:null},l.set(t,c)}e&&e.startsWith("!!")&&(e="tag:yaml.org,2002:"+e.slice(2));let u=function(f,b,m){if(b){const p=m.filter(y=>y.tag===b),d=p.find(y=>!y.format)||p[0];if(!d)throw new Error(`Tag ${b} not found`);return d}return m.find(p=>p.identify&&p.identify(f)&&!p.format)}(t,e,a.tags);if(!u){if(t&&typeof t.toJSON=="function"&&(t=t.toJSON()),!t||typeof t!="object")return new J(t);u=t instanceof Map?a[Ct]:Symbol.iterator in Object(t)?a[mn]:a[Ct]}o&&(o(u),delete n.onTagObj);const h=u!=null&&u.createNode?u.createNode(n.schema,t,n):new J(t);return e&&(h.tag=e),c&&(c.node=h),h}function Fs(t,e,n){let s=n;for(let r=e.length-1;r>=0;--r){const i=e[r];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const o=[];o[i]=s,s=o}else{const o={};Object.defineProperty(o,typeof i=="symbol"?i:String(i),{value:s,writable:!0,enumerable:!0,configurable:!0}),s=o}}return es(s,void 0,{onAnchor(){throw new Error("Repeated objects are not supported here")},schema:t,sourceObjects:new Map})}const ts=t=>t==null||typeof t=="object"&&!!t[Symbol.iterator]().next().done;class Ks extends ri{constructor(e,n){super(e),Object.defineProperty(this,"schema",{value:n,configurable:!0,enumerable:!1,writable:!0})}addIn(e,n){if(ts(e))this.add(n);else{const[s,...r]=e,i=this.get(s,!0);if(_e(i))i.addIn(r,n);else{if(i!==void 0||!this.schema)throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`);this.set(s,Fs(this.schema,r,n))}}}deleteIn([e,...n]){if(n.length===0)return this.delete(e);const s=this.get(e,!0);if(_e(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${e}. Remaining path: ${n}`)}getIn([e,...n],s){const r=this.get(e,!0);return n.length===0?!s&&ke(r)?r.value:r:_e(r)?r.getIn(n,s):void 0}hasAllNullValues(e){return this.items.every(n=>{if(!Ne(n))return!1;const s=n.value;return s==null||e&&ke(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn([e,...n]){if(n.length===0)return this.has(e);const s=this.get(e,!0);return!!_e(s)&&s.hasIn(n)}setIn([e,...n],s){if(n.length===0)this.set(e,s);else{const r=this.get(e,!0);if(_e(r))r.setIn(n,s);else{if(r!==void 0||!this.schema)throw new Error(`Expected YAML collection at ${e}. Remaining path: ${n}`);this.set(e,Fs(this.schema,n,s))}}}}function bn(t,e,n){return n?n.includes(`
`)?`${t}
`+n.replace(/^/gm,`${e||""}#`):t.endsWith(" ")?`${t}#${n}`:`${t} #${n}`:t}Ks.maxFlowStringSingleLineLength=60;const rl="flow",oi="block",Ws="quoted";function Xs(t,e,n="flow",{indentAtStart:s,lineWidth:r=80,minContentWidth:i=20,onFold:o,onOverflow:a}={}){if(!r||r<0)return t;const l=Math.max(1+i,1+r-e.length);if(t.length<=l)return t;const c=[],u={};let h,f,b=r-e.length;typeof s=="number"&&(s>r-Math.max(2,i)?c.push(0):b=r-s);let m,p=!1,d=-1,y=-1,g=-1;for(n===oi&&(d=il(t,d),d!==-1&&(b=d+l));m=t[d+=1];){if(n===Ws&&m==="\\"){switch(y=d,t[d+1]){case"x":d+=3;break;case"u":d+=5;break;case"U":d+=9;break;default:d+=1}g=d}if(m===`
`)n===oi&&(d=il(t,d)),b=d+l,h=void 0;else{if(m===" "&&f&&f!==" "&&f!==`
`&&f!=="	"){const x=t[d+1];x&&x!==" "&&x!==`
`&&x!=="	"&&(h=d)}if(d>=b)if(h)c.push(h),b=h+l,h=void 0;else if(n===Ws){for(;f===" "||f==="	";)f=m,m=t[d+=1],p=!0;const x=d>g+1?d-2:y-1;if(u[x])return t;c.push(x),u[x]=!0,b=x+l,h=void 0}else p=!0}f=m}if(p&&a&&a(),c.length===0)return t;o&&o();let w=t.slice(0,c[0]);for(let x=0;x<c.length;++x){const S=c[x],E=c[x+1]||t.length;S===0?w=`
${e}${t.slice(0,E)}`:(n===Ws&&u[S]&&(w+=`${t[S]}\\`),w+=`
${e}${t.slice(S+1,E)}`)}return w}function il(t,e){let n=t[e+1];for(;n===" "||n==="	";){do n=t[e+=1];while(n&&n!==`
`);n=t[e+1]}return e}const Gs=t=>({indentAtStart:t.indentAtStart,lineWidth:t.options.lineWidth,minContentWidth:t.options.minContentWidth}),Vs=t=>/^(%|---|\.\.\.)/m.test(t);function zt(t,e){const n=JSON.stringify(t);if(e.options.doubleQuotedAsJSON)return n;const{implicitKey:s}=e,r=e.options.doubleQuotedMinMultiLineLength,i=e.indent||(Vs(t)?"  ":"");let o="",a=0;for(let l=0,c=n[l];c;c=n[++l])if(c===" "&&n[l+1]==="\\"&&n[l+2]==="n"&&(o+=n.slice(a,l)+"\\ ",l+=1,a=l,c="\\"),c==="\\")switch(n[l+1]){case"u":{o+=n.slice(a,l);const u=n.substr(l+2,4);switch(u){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:u.substr(0,2)==="00"?o+="\\x"+u.substr(2):o+=n.substr(l,6)}l+=5,a=l+1}break;case"n":if(s||n[l+2]==='"'||n.length<r)l+=1;else{for(o+=n.slice(a,l)+`

`;n[l+2]==="\\"&&n[l+3]==="n"&&n[l+4]!=='"';)o+=`
`,l+=2;o+=i,n[l+2]===" "&&(o+="\\"),l+=1,a=l+1}break;default:l+=1}return o=a?o+n.slice(a):n,s?o:Xs(o,i,Ws,Gs(e))}function ai(t,e){if(e.implicitKey){if(/\n/.test(t))return zt(t,e)}else if(/[ \t]\n|\n[ \t]/.test(t))return zt(t,e);const n=e.indent||(Vs(t)?"  ":""),s="'"+t.replace(/'/g,"''").replace(/\n+/g,`$&
${n}`)+"'";return e.implicitKey?s:Xs(s,n,rl,Gs(e))}function Ys({comment:t,type:e,value:n},s,r,i){if(/\n[\t ]+$/.test(n)||/^\s*$/.test(n))return zt(n,s);const o=s.indent||(s.forceBlockIndent||Vs(n)?"  ":""),a=e!==J.BLOCK_FOLDED&&(e===J.BLOCK_LITERAL||!function(y,g,w){if(!g||g<0)return!1;const x=g-w,S=y.length;if(S<=x)return!1;for(let E=0,j=0;E<S;++E)if(y[E]===`
`){if(E-j>x)return!0;if(j=E+1,S-j<=x)return!1}return!0}(n,s.options.lineWidth,o.length));if(!n)return a?`|
`:`>
`;let l,c;for(c=n.length;c>0;--c){const y=n[c-1];if(y!==`
`&&y!=="	"&&y!==" ")break}let u=n.substring(c);const h=u.indexOf(`
`);h===-1?l="-":n===u||h!==u.length-1?(l="+",i&&i()):l="",u&&(n=n.slice(0,-u.length),u[u.length-1]===`
`&&(u=u.slice(0,-1)),u=u.replace(/\n+(?!\n|$)/g,`$&${o}`));let f,b=!1,m=-1;for(f=0;f<n.length;++f){const y=n[f];if(y===" ")b=!0;else{if(y!==`
`)break;m=f}}let p=n.substring(0,m<f?m+1:f);p&&(n=n.substring(p.length),p=p.replace(/\n+/g,`$&${o}`));let d=(a?"|":">")+(b?o?"2":"1":"")+l;return t&&(d+=" #"+t.replace(/ ?[\r\n]+/g," "),r&&r()),a?`${d}
${o}${p}${n=n.replace(/\n+/g,`$&${o}`)}${u}`:`${d}
${o}${Xs(`${p}${n=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${o}`)}${u}`,o,oi,Gs(s))}`}function li(t,e,n,s){const{implicitKey:r,inFlow:i}=e,o=typeof t.value=="string"?t:Object.assign({},t,{value:String(t.value)});let{type:a}=t;a!==J.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(a=J.QUOTE_DOUBLE);const l=u=>{switch(u){case J.BLOCK_FOLDED:case J.BLOCK_LITERAL:return r||i?zt(o.value,e):Ys(o,e,n,s);case J.QUOTE_DOUBLE:return zt(o.value,e);case J.QUOTE_SINGLE:return ai(o.value,e);case J.PLAIN:return function(h,f,b,m){var p;const{type:d,value:y}=h,{actualString:g,implicitKey:w,indent:x,inFlow:S}=f;if(w&&/[\n[\]{},]/.test(y)||S&&/[[\]{},]/.test(y))return zt(y,f);if(!y||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(y)){const j=y.indexOf('"')!==-1,H=y.indexOf("'")!==-1;let Z;return Z=j&&!H?ai:H&&!j?zt:f.options.singleQuote?ai:zt,w||S||y.indexOf(`
`)===-1?Z(y,f):Ys(h,f,b,m)}if(!w&&!S&&d!==J.PLAIN&&y.indexOf(`
`)!==-1)return Ys(h,f,b,m);if(x===""&&Vs(y))return f.forceBlockIndent=!0,Ys(h,f,b,m);const E=y.replace(/\n+/g,`$&
${x}`);if(g){for(const j of f.doc.schema.tags)if(j.default&&j.tag!=="tag:yaml.org,2002:str"&&(!((p=j.test)===null||p===void 0)&&p.test(E)))return zt(y,f)}return w?E:Xs(E,x,rl,Gs(f))}(o,e,n,s);default:return null}};let c=l(a);if(c===null){const{defaultKeyType:u,defaultStringType:h}=e.options,f=r&&u||h;if(c=l(f),c===null)throw new Error(`Unsupported default string type ${f}`)}return c}const ol=(t,e)=>({anchors:new Set,doc:t,indent:"",indentStep:typeof e.indent=="number"?" ".repeat(e.indent):"  ",options:Object.assign({defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:!1,trueStr:"true",verifyAliasOrder:!0},e)});function vn(t,e,n,s){if(Ne(t))return t.toString(e,n,s);if(Jn(t))return t.toString(e);let r;const i=Je(t)?t:e.doc.createNode(t,{onTagObj:l=>r=l});r||(r=function(l,c){if(c.tag){const f=l.filter(b=>b.tag===c.tag);if(f.length>0)return f.find(b=>b.format===c.format)||f[0]}let u,h;if(ke(c)){h=c.value;const f=l.filter(b=>b.identify&&b.identify(h));u=f.find(b=>b.format===c.format)||f.find(b=>!b.format)}else h=c,u=l.find(f=>f.nodeClass&&h instanceof f.nodeClass);if(!u){const f=h&&h.constructor?h.constructor.name:typeof h;throw new Error(`Tag not resolved for ${f} value`)}return u}(e.doc.schema.tags,i));const o=function(l,c,{anchors:u,doc:h}){const f=[],b=(ke(l)||_e(l))&&l.anchor;return b&&el(b)&&(u.add(b),f.push(`&${b}`)),l.tag?f.push(h.directives.tagString(l.tag)):c.default||f.push(h.directives.tagString(c.tag)),f.join(" ")}(i,r,e);o.length>0&&(e.indentAtStart=(e.indentAtStart||0)+o.length+1);const a=typeof r.stringify=="function"?r.stringify(i,e,n,s):ke(i)?li(i,e,n,s):i.toString(e,n,s);return o?ke(i)||a[0]==="{"||a[0]==="["?`${o} ${a}`:`${o}
${e.indent}${a}`:a}function al(t,e){t!=="debug"&&t!=="warn"||(typeof process<"u"&&process.emitWarning?process.emitWarning(e):console.warn(e))}function ll(t,e,{key:n,value:s}){if(t&&t.doc.schema.merge&&_d(n))if(Qn(s))for(const r of s.items)ci(t,e,r);else if(Array.isArray(s))for(const r of s)ci(t,e,r);else ci(t,e,s);else{const r=mt(n,"",t);if(e instanceof Map)e.set(r,mt(s,r,t));else if(e instanceof Set)e.add(r);else{const i=function(a,l,c){if(l===null)return"";if(typeof l!="object")return String(l);if(Je(a)&&c&&c.doc){const u=ol(c.doc,{});u.anchors=new Set;for(const f of c.anchors.keys())u.anchors.add(f.anchor);u.inFlow=!0,u.inStringifyKey=!0;const h=a.toString(u);if(!c.mapKeyWarned){let f=JSON.stringify(h);f.length>40&&(f=f.substring(0,36)+'..."'),al(c.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${f}. Set mapAsMap: true to use object keys.`),c.mapKeyWarned=!0}return h}return JSON.stringify(l)}(n,r,t),o=mt(s,i,t);i in e?Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0}):e[i]=o}}return e}const _d=t=>t==="<<"||ke(t)&&t.value==="<<"&&(!t.type||t.type===J.PLAIN);function ci(t,e,n){const s=t&&Jn(n)?n.resolve(t.doc):null;if(!gn(s))throw new Error("Merge sources must be map aliases");const r=s.toJSON(null,t,Map);for(const[i,o]of r)e instanceof Map?e.has(i)||e.set(i,o):e instanceof Set?e.add(i):Object.prototype.hasOwnProperty.call(e,i)||Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0});return e}function ui(t,e,n){const s=es(t,void 0,n),r=es(e,void 0,n);return new nt(s,r)}class nt{constructor(e,n=null){Object.defineProperty(this,lt,{value:Qa}),this.key=e,this.value=n}toJSON(e,n){return ll(n,n&&n.mapAsMap?new Map:{},this)}toString(e,n,s){return e&&e.doc?function({key:r,value:i},o,a,l){const{allNullValues:c,doc:u,indent:h,indentStep:f,options:{indentSeq:b,simpleKeys:m}}=o;let p=Je(r)&&r.comment||null;if(m){if(p)throw new Error("With simple keys, key nodes cannot have comments");if(_e(r))throw new Error("With simple keys, collection cannot be used as a key value")}let d=!m&&(!r||p&&i==null&&!o.inFlow||_e(r)||(ke(r)?r.type===J.BLOCK_FOLDED||r.type===J.BLOCK_LITERAL:typeof r=="object"));o=Object.assign({},o,{allNullValues:!1,implicitKey:!d&&(m||!c),indent:h+f});let y=!1,g=!1,w=vn(r,o,()=>y=!0,()=>g=!0);if(!d&&!o.inFlow&&w.length>1024){if(m)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");d=!0}if(o.inFlow){if(c||i==null)return y&&a&&a(),d?`? ${w}`:w}else if(c&&!m||i==null&&d)return y&&(p=null),g&&!p&&l&&l(),bn(`? ${w}`,o.indent,p);y&&(p=null),w=d?`? ${bn(w,o.indent,p)}
${h}:`:bn(`${w}:`,o.indent,p);let x="",S=null;Je(i)?(i.spaceBefore&&(x=`
`),i.commentBefore&&(x+=`
${i.commentBefore.replace(/^/gm,`${o.indent}#`)}`),S=i.comment):i&&typeof i=="object"&&(i=u.createNode(i)),o.implicitKey=!1,d||p||!ke(i)||(o.indentAtStart=w.length+1),g=!1,b||!(f.length>=2)||o.inFlow||d||!Qn(i)||i.flow||i.tag||i.anchor||(o.indent=o.indent.substr(2));let E=!1;const j=vn(i,o,()=>E=!0,()=>g=!0);let H=" ";return x||p?H=`${x}
${o.indent}`:!d&&_e(i)?(j[0]==="["||j[0]==="{")&&!j.includes(`
`)||(H=`
${o.indent}`):j[0]===`
`&&(H=""),o.inFlow?(E&&a&&a(),w+H+j):(E&&(S=null),g&&!S&&l&&l(),bn(w+H+j,o.indent,S))}(this,e,n,s):JSON.stringify(this)}}const cl={intAsBigInt:!1,logLevel:"warn",prettyErrors:!0,strict:!0,version:"1.2"};function ul({comment:t,flow:e,items:n},s,{blockItem:r,flowChars:i,itemIndent:o,onChompKeep:a,onComment:l}){const{indent:c,indentStep:u}=s,h=e||s.inFlow;h&&(o+=u),s=Object.assign({},s,{indent:o,inFlow:h,type:null});let f=!0,b=!1;const m=n.reduce((d,y,g)=>{let w=null;if(Je(y)){if(!b&&y.spaceBefore&&d.push({comment:!0,str:""}),y.commentBefore)for(const S of y.commentBefore.match(/^.*$/gm))d.push({comment:!0,str:`#${S}`});y.comment&&(w=y.comment,f=!1)}else if(Ne(y)){const S=Je(y.key)?y.key:null;if(S){if(!b&&S.spaceBefore&&d.push({comment:!0,str:""}),S.commentBefore)for(const E of S.commentBefore.match(/^.*$/gm))d.push({comment:!0,str:`#${E}`});S.comment&&(f=!1)}if(h){const E=Je(y.value)?y.value:null;E?(E.comment&&(w=E.comment),(E.comment||E.commentBefore)&&(f=!1)):y.value==null&&S&&S.comment&&(w=S.comment)}}b=!1;let x=vn(y,s,()=>w=null,()=>b=!0);return h&&g<n.length-1&&(x+=","),x=bn(x,o,w),b&&(w||h)&&(b=!1),d.push({comment:!1,str:x}),d},[]);let p;if(m.length===0)p=i.start+i.end;else if(h){const{start:d,end:y}=i,g=m.map(x=>x.str);let w=2;for(const x of m){if(x.comment||x.str.includes(`
`)){f=!1;break}w+=x.str.length+2}if(!f||w>Ks.maxFlowStringSingleLineLength){p=d;for(const x of g)p+=x?`
${u}${c}${x}`:`
`;p+=`
${c}${y}`}else p=`${d} ${g.join(" ")} ${y}`}else{const d=m.map(r);p=d.shift()||"";for(const y of d)p+=y?`
${c}${y}`:`
`}return t?(p+=`
`+t.replace(/^/gm,`${c}#`),l&&l()):b&&a&&a(),p}function Gt(t,e){const n=ke(e)?e.value:e;for(const s of t)if(Ne(s)&&(s.key===e||s.key===n||ke(s.key)&&s.key.value===n))return s}class ct extends Ks{constructor(e){super(Ct,e),this.items=[]}static get tagName(){return"tag:yaml.org,2002:map"}add(e,n){let s;s=Ne(e)?e:new nt(e&&typeof e=="object"&&"key"in e?e.key:e,e.value);const r=Gt(this.items,s.key),i=this.schema&&this.schema.sortMapEntries;if(r){if(!n)throw new Error(`Key ${s.key} already set`);ke(r.value)&&sl(s.value)?r.value.value=s.value:r.value=s.value}else if(i){const o=this.items.findIndex(a=>i(s,a)<0);o===-1?this.items.push(s):this.items.splice(o,0,s)}else this.items.push(s)}delete(e){const n=Gt(this.items,e);return n?this.items.splice(this.items.indexOf(n),1).length>0:!1}get(e,n){const s=Gt(this.items,e),r=s&&s.value;return!n&&ke(r)?r.value:r}has(e){return!!Gt(this.items,e)}set(e,n){this.add(new nt(e,n),!0)}toJSON(e,n,s){const r=s?new s:n&&n.mapAsMap?new Map:{};n&&n.onCreate&&n.onCreate(r);for(const i of this.items)ll(n,r,i);return r}toString(e,n,s){if(!e)return JSON.stringify(this);for(const r of this.items)if(!Ne(r))throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),ul(this,e,{blockItem:r=>r.str,flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:n})}}const wn={collection:"map",createNode:function(t,e,n){const{keepUndefined:s,replacer:r}=n,i=new ct(t),o=(a,l)=>{if(typeof r=="function")l=r.call(e,a,l);else if(Array.isArray(r)&&!r.includes(a))return;(l!==void 0||s)&&i.items.push(ui(a,l,n))};if(e instanceof Map)for(const[a,l]of e)o(a,l);else if(e&&typeof e=="object")for(const a of Object.keys(e))o(a,e[a]);return typeof t.sortMapEntries=="function"&&i.items.sort(t.sortMapEntries),i},default:!0,nodeClass:ct,tag:"tag:yaml.org,2002:map",resolve:(t,e)=>(gn(t)||e("Expected a mapping for this tag"),t)};class xn extends Ks{constructor(e){super(mn,e),this.items=[]}static get tagName(){return"tag:yaml.org,2002:seq"}add(e){this.items.push(e)}delete(e){const n=Js(e);return typeof n!="number"?!1:this.items.splice(n,1).length>0}get(e,n){const s=Js(e);if(typeof s!="number")return;const r=this.items[s];return!n&&ke(r)?r.value:r}has(e){const n=Js(e);return typeof n=="number"&&n<this.items.length}set(e,n){const s=Js(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const r=this.items[s];ke(r)&&sl(n)?r.value=n:this.items[s]=n}toJSON(e,n){const s=[];n&&n.onCreate&&n.onCreate(s);let r=0;for(const i of this.items)s.push(mt(i,String(r++),n));return s}toString(e,n,s){return e?ul(this,e,{blockItem:r=>r.comment?r.str:`- ${r.str}`,flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:n}):JSON.stringify(this)}}function Js(t){let e=ke(t)?t.value:t;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}const kn={collection:"seq",createNode:function(t,e,n){const{replacer:s}=n,r=new xn(t);if(e&&Symbol.iterator in Object(e)){let i=0;for(let o of e){if(typeof s=="function"){const a=e instanceof Set?o:String(i++);o=s.call(e,a,o)}r.items.push(es(o,void 0,n))}}return r},default:!0,nodeClass:xn,tag:"tag:yaml.org,2002:seq",resolve:(t,e)=>(Qn(t)||e("Expected a sequence for this tag"),t)},Qs={identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify:(t,e,n,s)=>li(t,e=Object.assign({actualString:!0},e),n,s)},Zs={identify:t=>t==null,createNode:()=>new J(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new J(null),stringify:({source:t},e)=>t&&Zs.test.test(t)?t:e.options.nullStr},fi={identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:t=>new J(t[0]==="t"||t[0]==="T"),stringify({source:t,value:e},n){return t&&fi.test.test(t)&&e===(t[0]==="t"||t[0]==="T")?t:e?n.options.trueStr:n.options.falseStr}};function Tt({format:t,minFractionDigits:e,tag:n,value:s}){if(typeof s=="bigint")return String(s);const r=typeof s=="number"?s:Number(s);if(!isFinite(r))return isNaN(r)?".nan":r<0?"-.inf":".inf";let i=JSON.stringify(s);if(!t&&e&&(!n||n==="tag:yaml.org,2002:float")&&/^\d/.test(i)){let o=i.indexOf(".");o<0&&(o=i.length,i+=".");let a=e-(i.length-o-1);for(;a-- >0;)i+="0"}return i}const fl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Tt},hl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t),stringify:({value:t})=>Number(t).toExponential()},dl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(t){const e=new J(parseFloat(t)),n=t.indexOf(".");return n!==-1&&t[t.length-1]==="0"&&(e.minFractionDigits=t.length-n-1),e},stringify:Tt},er=t=>typeof t=="bigint"||Number.isInteger(t),hi=(t,e,n,{intAsBigInt:s})=>s?BigInt(t):parseInt(t.substring(e),n);function pl(t,e,n){const{value:s}=t;return er(s)&&s>=0?n+s.toString(e):Tt(t)}const ml={identify:t=>er(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(t,e,n)=>hi(t,2,8,n),stringify:t=>pl(t,8,"0o")},gl={identify:er,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(t,e,n)=>hi(t,0,10,n),stringify:Tt},yl={identify:t=>er(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(t,e,n)=>hi(t,2,16,n),stringify:t=>pl(t,16,"0x")},$d=[wn,kn,Qs,Zs,fi,ml,gl,yl,fl,hl,dl];function bl(t){return typeof t=="bigint"||Number.isInteger(t)}const tr=({value:t})=>JSON.stringify(t),Ad=[wn,kn].concat([{identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify:tr},{identify:t=>t==null,createNode:()=>new J(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:tr},{identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true|false$/,resolve:t=>t==="true",stringify:tr},{identify:bl,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(t,e,{intAsBigInt:n})=>n?BigInt(t):parseInt(t,10),stringify:({value:t})=>bl(t)?t.toString():JSON.stringify(t)},{identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:t=>parseFloat(t),stringify:tr}],{default:!0,tag:"",test:/^/,resolve:(t,e)=>(e(`Unresolved plain scalar ${JSON.stringify(t)}`),t)}),di={identify:t=>t instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(t,e){if(typeof Buffer=="function")return Buffer.from(t,"base64");if(typeof atob=="function"){const n=atob(t.replace(/[\n\r]/g,"")),s=new Uint8Array(n.length);for(let r=0;r<n.length;++r)s[r]=n.charCodeAt(r);return s}return e("This environment does not support reading binary tags; either Buffer or atob is required"),t},stringify({comment:t,type:e,value:n},s,r,i){const o=n;let a;if(typeof Buffer=="function")a=o instanceof Buffer?o.toString("base64"):Buffer.from(o.buffer).toString("base64");else{if(typeof btoa!="function")throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");{let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);a=btoa(l)}}if(e||(e=J.BLOCK_LITERAL),e!==J.QUOTE_DOUBLE){const l=Math.max(s.options.lineWidth-s.indent.length,s.options.minContentWidth),c=Math.ceil(a.length/l),u=new Array(c);for(let h=0,f=0;h<c;++h,f+=l)u[h]=a.substr(f,l);a=u.join(e===J.BLOCK_LITERAL?`
`:" ")}return li({comment:t,type:e,value:a},s,r,i)}};function vl(t,e){if(Qn(t))for(let n=0;n<t.items.length;++n){let s=t.items[n];if(!Ne(s)){if(gn(s)){s.items.length>1&&e("Each pair must have its own sequence indicator");const r=s.items[0]||new nt(new J(null));if(s.commentBefore&&(r.key.commentBefore=r.key.commentBefore?`${s.commentBefore}
${r.key.commentBefore}`:s.commentBefore),s.comment){const i=r.value||r.key;i.comment=i.comment?`${s.comment}
${i.comment}`:s.comment}s=r}t.items[n]=Ne(s)?s:new nt(s)}}else e("Expected a sequence for this tag");return t}function wl(t,e,n){const{replacer:s}=n,r=new xn(t);r.tag="tag:yaml.org,2002:pairs";let i=0;if(e&&Symbol.iterator in Object(e))for(let o of e){let a,l;if(typeof s=="function"&&(o=s.call(e,String(i++),o)),Array.isArray(o)){if(o.length!==2)throw new TypeError(`Expected [key, value] tuple: ${o}`);a=o[0],l=o[1]}else if(o&&o instanceof Object){const c=Object.keys(o);if(c.length!==1)throw new TypeError(`Expected { key: value } tuple: ${o}`);a=c[0],l=o[a]}else a=o;r.items.push(ui(a,l,n))}return r}const pi={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:vl,createNode:wl};class zn extends xn{constructor(){super(),this.add=ct.prototype.add.bind(this),this.delete=ct.prototype.delete.bind(this),this.get=ct.prototype.get.bind(this),this.has=ct.prototype.has.bind(this),this.set=ct.prototype.set.bind(this),this.tag=zn.tag}toJSON(e,n){if(!n)return super.toJSON(e);const s=new Map;n&&n.onCreate&&n.onCreate(s);for(const r of this.items){let i,o;if(Ne(r)?(i=mt(r.key,"",n),o=mt(r.value,i,n)):i=mt(r,"",n),s.has(i))throw new Error("Ordered maps must not include duplicate keys");s.set(i,o)}return s}}zn.tag="tag:yaml.org,2002:omap";const mi={collection:"seq",identify:t=>t instanceof Map,nodeClass:zn,default:!1,tag:"tag:yaml.org,2002:omap",resolve(t,e){const n=vl(t,e),s=[];for(const{key:r}of n.items)ke(r)&&(s.includes(r.value)?e(`Ordered maps must not include duplicate keys: ${r.value}`):s.push(r.value));return Object.assign(new zn,n)},createNode(t,e,n){const s=wl(t,e,n),r=new zn;return r.items=s.items,r}};function xl({value:t,source:e},n){return e&&(t?kl:zl).test.test(e)?e:t?n.options.trueStr:n.options.falseStr}const kl={identify:t=>t===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new J(!0),stringify:xl},zl={identify:t=>t===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,resolve:()=>new J(!1),stringify:xl},Nd={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Tt},Ld={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t.replace(/_/g,"")),stringify:({value:t})=>Number(t).toExponential()},Od={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(t){const e=new J(parseFloat(t.replace(/_/g,""))),n=t.indexOf(".");if(n!==-1){const s=t.substring(n+1).replace(/_/g,"");s[s.length-1]==="0"&&(e.minFractionDigits=s.length)}return e},stringify:Tt},ns=t=>typeof t=="bigint"||Number.isInteger(t);function nr(t,e,n,{intAsBigInt:s}){const r=t[0];if(r!=="-"&&r!=="+"||(e+=1),t=t.substring(e).replace(/_/g,""),s){switch(n){case 2:t=`0b${t}`;break;case 8:t=`0o${t}`;break;case 16:t=`0x${t}`}const o=BigInt(t);return r==="-"?BigInt(-1)*o:o}const i=parseInt(t,n);return r==="-"?-1*i:i}function gi(t,e,n){const{value:s}=t;if(ns(s)){const r=s.toString(e);return s<0?"-"+n+r.substr(1):n+r}return Tt(t)}const Cd={identify:ns,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(t,e,n)=>nr(t,2,2,n),stringify:t=>gi(t,2,"0b")},Id={identify:ns,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(t,e,n)=>nr(t,1,8,n),stringify:t=>gi(t,8,"0")},Md={identify:ns,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(t,e,n)=>nr(t,0,10,n),stringify:Tt},Rd={identify:ns,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(t,e,n)=>nr(t,2,16,n),stringify:t=>gi(t,16,"0x")};class Tn extends ct{constructor(e){super(e),this.tag=Tn.tag}add(e){let n;n=Ne(e)?e:typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?new nt(e.key,null):new nt(e,null),Gt(this.items,n.key)||this.items.push(n)}get(e,n){const s=Gt(this.items,e);return!n&&Ne(s)?ke(s.key)?s.key.value:s.key:s}set(e,n){if(typeof n!="boolean")throw new Error("Expected boolean value for set(key, value) in a YAML set, not "+typeof n);const s=Gt(this.items,e);s&&!n?this.items.splice(this.items.indexOf(s),1):!s&&n&&this.items.push(new nt(e))}toJSON(e,n){return super.toJSON(e,n,Set)}toString(e,n,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),n,s);throw new Error("Set items must all have null values")}}Tn.tag="tag:yaml.org,2002:set";const yi={collection:"map",identify:t=>t instanceof Set,nodeClass:Tn,default:!1,tag:"tag:yaml.org,2002:set",resolve(t,e){if(gn(t)){if(t.hasAllNullValues(!0))return Object.assign(new Tn,t);e("Set items must all have null values")}else e("Expected a mapping for this tag");return t},createNode(t,e,n){const{replacer:s}=n,r=new Tn(t);if(e&&Symbol.iterator in Object(e))for(let i of e)typeof s=="function"&&(i=s.call(e,i,i)),r.items.push(ui(i,null,n));return r}};function bi(t,e){const n=t[0],s=n==="-"||n==="+"?t.substring(1):t,r=o=>e?BigInt(o):Number(o),i=s.replace(/_/g,"").split(":").reduce((o,a)=>o*r(60)+r(a),r(0));return n==="-"?r(-1)*i:i}function Tl(t){let{value:e}=t,n=o=>o;if(typeof e=="bigint")n=o=>BigInt(o);else if(isNaN(e)||!isFinite(e))return Tt(t);let s="";e<0&&(s="-",e*=n(-1));const r=n(60),i=[e%r];return e<60?i.unshift(0):(e=(e-i[0])/r,i.unshift(e%r),e>=60&&(e=(e-i[0])/r,i.unshift(e))),s+i.map(o=>o<10?"0"+String(o):String(o)).join(":").replace(/000000\d*$/,"")}const Sl={identify:t=>typeof t=="bigint"||Number.isInteger(t),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(t,e,{intAsBigInt:n})=>bi(t,n),stringify:Tl},El={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:t=>bi(t,!1),stringify:Tl},sr={identify:t=>t instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(t){const e=t.match(sr.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,n,s,r,i,o,a]=e.map(Number),l=e[7]?Number((e[7]+"00").substr(1,3)):0;let c=Date.UTC(n,s-1,r,i||0,o||0,a||0,l);const u=e[8];if(u&&u!=="Z"){let h=bi(u,!1);Math.abs(h)<30&&(h*=60),c-=6e4*h}return new Date(c)},stringify:({value:t})=>t.toISOString().replace(/((T00:00)?:00)?\.000Z$/,"")},_l=[wn,kn,Qs,Zs,kl,zl,Cd,Id,Md,Rd,Nd,Ld,Od,di,mi,pi,yi,Sl,El,sr],$l={core:$d,failsafe:[wn,kn,Qs],json:Ad,yaml11:_l,"yaml-1.1":_l},Al={binary:di,bool:fi,float:dl,floatExp:hl,floatNaN:fl,floatTime:El,int:gl,intHex:yl,intOct:ml,intTime:Sl,map:wn,null:Zs,omap:mi,pairs:pi,seq:kn,set:yi,timestamp:sr},Pd={"tag:yaml.org,2002:binary":di,"tag:yaml.org,2002:omap":mi,"tag:yaml.org,2002:pairs":pi,"tag:yaml.org,2002:set":yi,"tag:yaml.org,2002:timestamp":sr},jd=(t,e)=>t.key<e.key?-1:t.key>e.key?1:0;class qd{constructor({customTags:e,merge:n,resolveKnownTags:s,schema:r,sortMapEntries:i}){this.merge=!!n,this.name=r||"core",this.knownTags=s?Pd:{},this.tags=function(o,a){let l=$l[a];if(!l){const c=Object.keys($l).filter(u=>u!=="yaml11").map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown schema "${a}"; use one of ${c}`)}if(Array.isArray(o))for(const c of o)l=l.concat(c);else typeof o=="function"&&(l=o(l.slice()));return l.map(c=>{if(typeof c!="string")return c;const u=Al[c];if(u)return u;const h=Object.keys(Al).map(f=>JSON.stringify(f)).join(", ");throw new Error(`Unknown custom tag "${c}"; use one of ${h}`)})}(e,this.name),Object.defineProperty(this,Ct,{value:wn}),Object.defineProperty(this,Kt,{value:Qs}),Object.defineProperty(this,mn,{value:kn}),this.sortMapEntries=i===!0?jd:i||null}}function ss(t,e,n,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let r=0,i=s.length;r<i;++r){const o=s[r],a=ss(t,s,String(r),o);a===void 0?delete s[r]:a!==o&&(s[r]=a)}else if(s instanceof Map)for(const r of Array.from(s.keys())){const i=s.get(r),o=ss(t,s,r,i);o===void 0?s.delete(r):o!==i&&s.set(r,o)}else if(s instanceof Set)for(const r of Array.from(s)){const i=ss(t,s,r,r);i===void 0?s.delete(r):i!==r&&(s.delete(r),s.add(i))}else for(const[r,i]of Object.entries(s)){const o=ss(t,s,r,i);o===void 0?delete s[r]:o!==i&&(s[r]=o)}return t.call(e,n,s)}class Nl{constructor(e,n,s){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,lt,{value:Ja});let r=null;typeof n=="function"||Array.isArray(n)?r=n:s===void 0&&n&&(s=n,n=void 0);const i=Object.assign({},cl,s);this.options=i;let{version:o}=i;s!=null&&s.directives?(this.directives=s.directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new tt({version:o}),this.setSchema(o,s),this.contents=e===void 0?null:this.createNode(e,r,s)}add(e){Sn(this.contents)&&this.contents.add(e)}addIn(e,n){Sn(this.contents)&&this.contents.addIn(e,n)}createAlias(e,n){if(!e.anchor){const s=tl(this);e.anchor=!n||s.has(n)?nl(n||"a",s):n}return new ii(e.anchor)}createNode(e,n,s){let r;if(typeof n=="function")e=n.call({"":e},"",e),r=n;else if(Array.isArray(n)){const m=d=>typeof d=="number"||d instanceof String||d instanceof Number,p=n.filter(m).map(String);p.length>0&&(n=n.concat(p)),r=n}else s===void 0&&n&&(s=n,n=void 0);const{anchorPrefix:i,flow:o,keepUndefined:a,onTagObj:l,tag:c}=s||{},{onAnchor:u,setAnchors:h,sourceObjects:f}=function(m,p){const d=[],y=new Map;let g=null;return{onAnchor(w){d.push(w),g||(g=tl(m));const x=nl(p,g);return g.add(x),x},setAnchors(){for(const w of d){const x=y.get(w);if(typeof x!="object"||!x.anchor||!ke(x.node)&&!_e(x.node)){const S=new Error("Failed to resolve repeated object (this should not happen)");throw S.source=w,S}x.node.anchor=x.anchor}},sourceObjects:y}}(this,i||"a"),b=es(e,c,{keepUndefined:a!=null&&a,onAnchor:u,onTagObj:l,replacer:r,schema:this.schema,sourceObjects:f});return o&&_e(b)&&(b.flow=!0),h(),b}createPair(e,n,s={}){const r=this.createNode(e,null,s),i=this.createNode(n,null,s);return new nt(r,i)}delete(e){return!!Sn(this.contents)&&this.contents.delete(e)}deleteIn(e){return ts(e)?this.contents!=null&&(this.contents=null,!0):!!Sn(this.contents)&&this.contents.deleteIn(e)}get(e,n){return _e(this.contents)?this.contents.get(e,n):void 0}getIn(e,n){return ts(e)?!n&&ke(this.contents)?this.contents.value:this.contents:_e(this.contents)?this.contents.getIn(e,n):void 0}has(e){return!!_e(this.contents)&&this.contents.has(e)}hasIn(e){return ts(e)?this.contents!==void 0:!!_e(this.contents)&&this.contents.hasIn(e)}set(e,n){this.contents==null?this.contents=Fs(this.schema,[e],n):Sn(this.contents)&&this.contents.set(e,n)}setIn(e,n){ts(e)?this.contents=n:this.contents==null?this.contents=Fs(this.schema,Array.from(e),n):Sn(this.contents)&&this.contents.setIn(e,n)}setSchema(e,n){let s;switch(String(e)){case"1.1":this.directives.yaml.version="1.1",s=Object.assign({merge:!0,resolveKnownTags:!1,schema:"yaml-1.1"},n);break;case"1.2":this.directives.yaml.version="1.2",s=Object.assign({merge:!1,resolveKnownTags:!0,schema:"core"},n);break;default:{const r=JSON.stringify(e);throw new Error(`Expected '1.1' or '1.2' as version, but found: ${r}`)}}this.schema=new qd(s)}toJS({json:e,jsonArg:n,mapAsMap:s,maxAliasCount:r,onAnchor:i,reviver:o}={}){const a={anchors:new Map,doc:this,keep:!e,mapAsMap:s===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100,stringify:vn},l=mt(this.contents,n||"",a);if(typeof i=="function")for(const{count:c,res:u}of a.anchors.values())i(u,c);return typeof o=="function"?ss(o,{"":l},"",l):l}toJSON(e,n){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:n})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const n=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${n}`)}return function(n,s){const r=[];let i=s.directives===!0;if(s.directives!==!1){const c=n.directives.toString(n);c?(r.push(c),i=!0):n.directives.marker&&(i=!0)}i&&r.push("---"),n.commentBefore&&(r.length!==1&&r.unshift(""),r.unshift(n.commentBefore.replace(/^/gm,"#")));const o=ol(n,s);let a=!1,l=null;if(n.contents){Je(n.contents)&&(n.contents.spaceBefore&&i&&r.push(""),n.contents.commentBefore&&r.push(n.contents.commentBefore.replace(/^/gm,"#")),o.forceBlockIndent=!!n.comment,l=n.contents.comment);const c=l?void 0:()=>a=!0;let u=vn(n.contents,o,()=>l=null,c);l&&(u=bn(u,"",l)),u[0]!=="|"&&u[0]!==">"||r[r.length-1]!=="---"?r.push(u):r[r.length-1]=`--- ${u}`}else r.push(vn(n.contents,o));return n.comment&&(a&&!l||r[r.length-1]===""||r.push(""),r.push(n.comment.replace(/^/gm,"#"))),r.join(`
`)+`
`}(this,e)}}function Sn(t){if(_e(t))return!0;throw new Error("Expected a YAML collection as document contents")}class Ll extends Error{constructor(e,n,s,r){super(),this.name=e,this.code=s,this.message=r,this.pos=n}}class rs extends Ll{constructor(e,n,s){super("YAMLParseError",e,n,s)}}class Dd extends Ll{constructor(e,n,s){super("YAMLWarning",e,n,s)}}const Ol=(t,e)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(a=>e.linePos(a));const{line:s,col:r}=n.linePos[0];n.message+=` at line ${s}, column ${r}`;let i=r-1,o=t.substring(e.lineStarts[s-1],e.lineStarts[s]).replace(/[\n\r]+$/,"");if(i>=60&&o.length>80){const a=Math.min(i-39,o.length-79);o="…"+o.substring(a),i-=a-1}if(o.length>80&&(o=o.substring(0,79)+"…"),s>1&&/^ *$/.test(o.substring(0,i))){let a=t.substring(e.lineStarts[s-2],e.lineStarts[s-1]);a.length>80&&(a=a.substring(0,79)+`…
`),o=a+o}if(/[^ ]/.test(o)){let a=1;const l=n.linePos[1];l&&l.line===s&&l.col>r&&(a=Math.min(l.col-r,80-i));const c=" ".repeat(i)+"^".repeat(a);n.message+=`:

${o}
${c}
`}};function En(t,{ctx:e,flow:n,indicator:s,offset:r,onError:i,startOnNewline:o}){let a=!1,l=o,c=o,u="",h="",f=!1,b=null,m=null,p=null,d=null,y=null;for(const x of t)switch(x.type){case"space":!n&&l&&s!=="doc-start"&&x.source[0]==="	"&&i(x,"TAB_AS_INDENT","Tabs are not allowed as indentation"),c=!0;break;case"comment":{e.options.strict&&!c&&i(x,"COMMENT_SPACE","Comments must be separated from other tokens by white space characters");const S=x.source.substring(1);u?u+=h+S:u=S,h="";break}case"newline":l&&!u&&(a=!0),l=!0,f=!0,c=!0,h+=x.source;break;case"anchor":b&&i(x,"MULTIPLE_ANCHORS","A node can have at most one anchor"),b=x,y===null&&(y=x.offset),l=!1,c=!1;break;case"tag":m&&i(x,"MULTIPLE_TAGS","A node can have at most one tag"),m=x,y===null&&(y=x.offset),l=!1,c=!1;break;case s:(b||m)&&i(x,"BAD_PROP_ORDER",`Anchors and tags must be after the ${x.source} indicator`),d=x,l=!1,c=!1;break;case"comma":if(n){p&&i(x,"UNEXPECTED_TOKEN",`Unexpected , in ${n}`),p=x,l=!1,c=!1;break}default:i(x,"UNEXPECTED_TOKEN",`Unexpected ${x.type} token`),l=!1,c=!1}const g=t[t.length-1],w=g?g.offset+g.source.length:r;return{comma:p,found:d,spaceBefore:a,comment:u,hasNewline:f,anchor:b,tag:m,end:w,start:y??w}}function rr(t){if(!t)return null;switch(t.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(t.source.includes(`
`))return!0;if(t.end){for(const e of t.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of t.items){for(const n of e.start)if(n.type==="newline")return!0;if(e.sep){for(const n of e.sep)if(n.type==="newline")return!0}if(rr(e.key)||rr(e.value))return!0}return!1;default:return!0}}const Cl="All mapping items must start at the same column";function is(t,e,n,s){let r="";if(t){let i=!1,o="";for(const a of t){const{source:l,type:c}=a;switch(c){case"space":i=!0;break;case"comment":{n&&!i&&s(a,"COMMENT_SPACE","Comments must be separated from other tokens by white space characters");const u=l.substring(1);r?r+=o+u:r=u,o="";break}case"newline":r&&(o+=l),i=!0;break;default:s(a,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}e+=l.length}}return{comment:r,offset:e}}const vi="Block collections are not allowed within flow collections",wi=t=>t&&(t.type==="block-map"||t.type==="block-seq");function Ud(t,e,n,s,r){let i;switch(n.type){case"block-map":i=function({composeNode:f,composeEmptyNode:b},m,p,d){var y;const g=new ct(m.schema);let w=p.offset;for(const{start:x,key:S,sep:E,value:j}of p.items){const H=En(x,{ctx:m,indicator:"explicit-key-ind",offset:w,onError:d,startOnNewline:!0}),Z=!H.found;if(Z){if(S&&(S.type==="block-seq"?d(w,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in S&&S.indent!==p.indent&&d(w,"BAD_INDENT",Cl)),!H.anchor&&!H.tag&&!E){H.comment&&(g.comment?g.comment+=`
`+H.comment:g.comment=H.comment);continue}}else((y=H.found)===null||y===void 0?void 0:y.indent)!==p.indent&&d(w,"BAD_INDENT",Cl);Z&&rr(S)&&d(S,"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line");const R=H.end,G=S?f(m,S,H,d):b(m,R,x,null,H,d),C=En(E||[],{ctx:m,indicator:"map-value-ind",offset:G.range[2],onError:d,startOnNewline:!S||S.type==="block-scalar"});if(w=C.end,C.found){Z&&((j==null?void 0:j.type)!=="block-map"||C.hasNewline||d(w,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),m.options.strict&&H.start<C.found.offset-1024&&d(G.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const M=j?f(m,j,C,d):b(m,w,E,null,C,d);w=M.range[2],g.items.push(new nt(G,M))}else Z&&d(G.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),C.comment&&(G.comment?G.comment+=`
`+C.comment:G.comment=C.comment),g.items.push(new nt(G))}return g.range=[p.offset,w,w],g}(t,e,n,r);break;case"block-seq":i=function({composeNode:f,composeEmptyNode:b},m,p,d){const y=new xn(m.schema);let g=p.offset;for(const{start:w,value:x}of p.items){const S=En(w,{ctx:m,indicator:"seq-item-ind",offset:g,onError:d,startOnNewline:!0});if(g=S.end,!S.found){if(!(S.anchor||S.tag||x)){S.comment&&(y.comment=S.comment);continue}x&&x.type==="block-seq"?d(g,"BAD_INDENT","All sequence items must start at the same column"):d(g,"MISSING_CHAR","Sequence item without - indicator")}const E=x?f(m,x,S,d):b(m,g,w,null,S,d);g=E.range[2],y.items.push(E)}return y.range=[p.offset,g,g],y}(t,e,n,r);break;case"flow-collection":i=function({composeNode:f,composeEmptyNode:b},m,p,d){const y=p.start.source==="{",g=y?"flow map":"flow sequence",w=y?new ct(m.schema):new xn(m.schema);w.flow=!0;let x=p.offset;for(let Z=0;Z<p.items.length;++Z){const{start:R,key:G,sep:C,value:M}=p.items[Z],A=En(R,{ctx:m,flow:g,indicator:"explicit-key-ind",offset:x,onError:d,startOnNewline:!1});if(!A.found){if(!(A.anchor||A.tag||C||M)){Z===0&&A.comma?d(A.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${g}`):Z<p.items.length-1&&d(A.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${g}`),A.comment&&(w.comment?w.comment+=`
`+A.comment:w.comment=A.comment);continue}!y&&m.options.strict&&rr(G)&&d(G,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(Z===0)A.comma&&d(A.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${g}`);else if(A.comma||d(A.start,"MISSING_CHAR",`Missing , between ${g} items`),A.comment){let D="";e:for(const _ of R)switch(_.type){case"comma":case"space":break;case"comment":D=_.source.substring(1);break e;default:break e}if(D){let _=w.items[w.items.length-1];Ne(_)&&(_=_.value||_.key),_.comment?_.comment+=`
`+D:_.comment=D,A.comment=A.comment.substring(D.length+1)}}if(y||C||A.found){const D=A.end,_=G?f(m,G,A,d):b(m,D,R,null,A,d);wi(G)&&d(_.range,"BLOCK_IN_FLOW",vi);const K=En(C||[],{ctx:m,flow:g,indicator:"map-value-ind",offset:_.range[2],onError:d,startOnNewline:!1});if(K.found){if(!y&&!A.found&&m.options.strict){if(C)for(const Ie of C){if(Ie===K.found)break;if(Ie.type==="newline"){d(Ie,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}A.start<K.found.offset-1024&&d(K.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else M&&("source"in M&&M.source&&M.source[0]===":"?d(M,"MISSING_CHAR",`Missing space after : in ${g}`):d(K.start,"MISSING_CHAR",`Missing , or : between ${g} items`));const Q=M?f(m,M,K,d):K.found?b(m,K.end,C,null,K,d):null;Q?wi(M)&&d(Q.range,"BLOCK_IN_FLOW",vi):K.comment&&(_.comment?_.comment+=`
`+K.comment:_.comment=K.comment);const Le=new nt(_,Q);if(y)w.items.push(Le);else{const Ie=new ct(m.schema);Ie.flow=!0,Ie.items.push(Le),w.items.push(Ie)}x=Q?Q.range[2]:K.end}else{const D=M?f(m,M,A,d):b(m,A.end,C,null,A,d);w.items.push(D),x=D.range[2],wi(M)&&d(D.range,"BLOCK_IN_FLOW",vi)}}const S=y?"}":"]",[E,...j]=p.end;let H=x;if(E&&E.source===S?H+=E.source.length:(d(x+1,"MISSING_CHAR",`Expected ${g} to end with ${S}`),E&&E.source.length!==1&&j.unshift(E)),j.length>0){const Z=is(j,H,m.options.strict,d);Z.comment&&(w.comment?w.comment+=`
`+Z.comment:w.comment=Z.comment),w.range=[p.offset,H,Z.offset]}else w.range=[p.offset,H,H];return w}(t,e,n,r)}if(!s)return i;const o=e.directives.tagName(s.source,f=>r(s,"TAG_RESOLVE_FAILED",f));if(!o)return i;const a=i.constructor;if(o==="!"||o===a.tagName)return i.tag=a.tagName,i;const l=gn(i)?"map":"seq";let c=e.schema.tags.find(f=>f.collection===l&&f.tag===o);if(!c){const f=e.schema.knownTags[o];if(!f||f.collection!==l)return r(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),i.tag=o,i;e.schema.tags.push(Object.assign({},f,{default:!1})),c=f}const u=c.resolve(i,f=>r(s,"TAG_RESOLVE_FAILED",f),e.options),h=Je(u)?u:new J(u);return h.range=i.range,h.tag=o,c!=null&&c.format&&(h.format=c.format),h}function Hd(t,e,n){const s=t.offset,r=function({offset:p,props:d},y,g){if(d[0].type!=="block-scalar-header")return g(d[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:w}=d[0],x=w[0];let S=0,E="",j=-1;for(let G=1;G<w.length;++G){const C=w[G];if(E||C!=="-"&&C!=="+"){const M=Number(C);!S&&M?S=M:j===-1&&(j=p+G)}else E=C}j!==-1&&g(j,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${w}`);let H=!1,Z="",R=w.length;for(let G=1;G<d.length;++G){const C=d[G];switch(C.type){case"space":H=!0;case"newline":R+=C.source.length;break;case"comment":y&&!H&&g(C,"COMMENT_SPACE","Comments must be separated from other tokens by white space characters"),R+=C.source.length,Z=C.source.substring(1);break;case"error":g(C,"UNEXPECTED_TOKEN",C.message),R+=C.source.length;break;default:{g(C,"UNEXPECTED_TOKEN",`Unexpected token in block scalar header: ${C.type}`);const M=C.source;M&&typeof M=="string"&&(R+=M.length)}}}return{mode:x,indent:S,chomp:E,comment:Z,length:R}}(t,e,n);if(!r)return{value:"",type:null,comment:"",range:[s,s,s]};const i=r.mode===">"?J.BLOCK_FOLDED:J.BLOCK_LITERAL,o=t.source?function(p){const d=p.split(/\n( *)/),y=d[0],g=y.match(/^( *)/),w=[g&&g[1]?[g[1],y.slice(g[1].length)]:["",y]];for(let x=1;x<d.length;x+=2)w.push([d[x],d[x+1]]);return w}(t.source):[];let a=o.length;for(let p=o.length-1;p>=0;--p){const d=o[p][1];if(d!==""&&d!=="\r")break;a=p}if(!t.source||a===0){const p=r.chomp==="+"?o.map(y=>y[0]).join(`
`):"";let d=s+r.length;return t.source&&(d+=t.source.length),{value:p,type:i,comment:r.comment,range:[s,d,d]}}let l=t.indent+r.indent,c=t.offset+r.length,u=0;for(let p=0;p<a;++p){const[d,y]=o[p];if(y!==""&&y!=="\r"){d.length<l&&n(c+d.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),r.indent===0&&(l=d.length),u=p;break}r.indent===0&&d.length>l&&(l=d.length),c+=d.length+y.length+1}let h="",f="",b=!1;for(let p=0;p<u;++p)h+=o[p][0].slice(l)+`
`;for(let p=u;p<a;++p){let[d,y]=o[p];c+=d.length+y.length+1;const g=y[y.length-1]==="\r";if(g&&(y=y.slice(0,-1)),y&&d.length<l){const w=`Block scalar lines must not be less indented than their ${r.indent?"explicit indentation indicator":"first line"}`;n(c-y.length-(g?2:1),"BAD_INDENT",w),d=""}i===J.BLOCK_LITERAL?(h+=f+d.slice(l)+y,f=`
`):d.length>l||y[0]==="	"?(f===" "?f=`
`:b||f!==`
`||(f=`

`),h+=f+d.slice(l)+y,f=`
`,b=!0):y===""?f===`
`?h+=`
`:f=`
`:(h+=f+y,f=" ",b=!1)}switch(r.chomp){case"-":break;case"+":for(let p=a;p<o.length;++p)h+=`
`+o[p][0].slice(l);h[h.length-1]!==`
`&&(h+=`
`);break;default:h+=`
`}const m=s+r.length+t.source.length;return{value:h,type:i,comment:r.comment,range:[s,m,m]}}function Bd(t,e,n){const{offset:s,type:r,source:i,end:o}=t;let a,l;const c=(f,b,m)=>n(s+f,b,m);switch(r){case"scalar":a=J.PLAIN,l=function(f,b){let m="";switch(f[0]){case"	":m="Plain value cannot start with a tab character";break;case"|":case">":m=`Plain value cannot start with block scalar indicator ${f[0]}`;break;case"@":case"`":m=`Plain value cannot start with reserved character ${f[0]}`}return m&&b(0,"BAD_SCALAR_START",m),Il(f)}(i,c);break;case"single-quoted-scalar":a=J.QUOTE_SINGLE,l=function(f,b){return f[f.length-1]==="'"&&f.length!==1||b(f.length,"MISSING_CHAR","Missing closing 'quote"),Il(f.slice(1,-1)).replace(/''/g,"'")}(i,c);break;case"double-quoted-scalar":a=J.QUOTE_DOUBLE,l=function(f,b){let m="";for(let p=1;p<f.length-1;++p){const d=f[p];if(d!=="\r"||f[p+1]!==`
`)if(d===`
`){const{fold:y,offset:g}=Fd(f,p);m+=y,p=g}else if(d==="\\"){let y=f[++p];const g=Kd[y];if(g)m+=g;else if(y===`
`)for(y=f[p+1];y===" "||y==="	";)y=f[1+ ++p];else if(y==="x"||y==="u"||y==="U"){const w={x:2,u:4,U:8}[y];m+=Wd(f,p+1,w,b),p+=w}else{const w=f.substr(p-1,2);b(p-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${w}`),m+=w}}else if(d===" "||d==="	"){const y=p;let g=f[p+1];for(;g===" "||g==="	";)g=f[1+ ++p];g!==`
`&&(m+=p>y?f.slice(y,p+1):d)}else m+=d}return f[f.length-1]==='"'&&f.length!==1||b(f.length,"MISSING_CHAR",'Missing closing "quote'),m}(i,c);break;default:return n(t,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${r}`),{value:"",type:null,comment:"",range:[s,s+i.length,s+i.length]}}const u=s+i.length,h=is(o,u,e,n);return{value:l,type:a,comment:h.comment,range:[s,u,h.offset]}}function Il(t){let e,n;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),n=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/ys,n=/[ \t]*(.*?)[ \t]*\r?\n/ys}let s=e.exec(t);if(!s)return t;let r=s[1],i=" ",o=e.lastIndex;for(n.lastIndex=o;s=n.exec(t);)s[1]===""?i===`
`?r+=i:i=`
`:(r+=i+s[1],i=" "),o=n.lastIndex;const a=/[ \t]*(.*)/ys;return a.lastIndex=o,s=a.exec(t),r+i+(s&&s[1]||"")}function Fd(t,e){let n="",s=t[e+1];for(;!(s!==" "&&s!=="	"&&s!==`
`&&s!=="\r"||s==="\r"&&t[e+2]!==`
`);)s===`
`&&(n+=`
`),s=t[(e+=1)+1];return n||(n=" "),{fold:n,offset:e}}const Kd={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Wd(t,e,n,s){const r=t.substr(e,n),i=r.length===n&&/^[0-9a-fA-F]+$/.test(r)?parseInt(r,16):NaN;if(isNaN(i)){const o=t.substr(e-2,n+2);return s(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(i)}function Ml(t,e,n,s){const{value:r,type:i,comment:o,range:a}=e.type==="block-scalar"?Hd(e,t.options.strict,s):Bd(e,t.options.strict,s),l=n?t.directives.tagName(n.source,h=>s(n,"TAG_RESOLVE_FAILED",h)):null,c=n&&l?function(h,f,b,m,p){var d;if(b==="!")return h[Kt];const y=[];for(const w of h.tags)if(!w.collection&&w.tag===b){if(!w.default||!w.test)return w;y.push(w)}for(const w of y)if(!((d=w.test)===null||d===void 0)&&d.test(f))return w;const g=h.knownTags[b];return g&&!g.collection?(h.tags.push(Object.assign({},g,{default:!1,test:void 0})),g):(p(m,"TAG_RESOLVE_FAILED",`Unresolved tag: ${b}`,b!=="tag:yaml.org,2002:str"),h[Kt])}(t.schema,r,l,n,s):function(h,f,b){var m;if(b){for(const p of h.tags)if(p.default&&(!((m=p.test)===null||m===void 0)&&m.test(f)))return p}return h[Kt]}(t.schema,r,e.type==="scalar");let u;try{const h=c.resolve(r,f=>s(n||e,"TAG_RESOLVE_FAILED",f),t.options);u=ke(h)?h:new J(h)}catch(h){s(n||e,"TAG_RESOLVE_FAILED",h.message),u=new J(r)}return u.range=a,u.source=r,i&&(u.type=i),l&&(u.tag=l),c.format&&(u.format=c.format),o&&(u.comment=o),u}function Xd(t,e,n){if(e){n===null&&(n=e.length);for(let s=n-1;s>=0;--s){let r=e[s];switch(r.type){case"space":case"comment":case"newline":t-=r.source.length;continue}for(r=e[++s];(r==null?void 0:r.type)==="space";)t+=r.source.length,r=e[++s];break}}return t}const Gd={composeNode:Rl,composeEmptyNode:Pl};function Rl(t,e,n,s){const{spaceBefore:r,comment:i,anchor:o,tag:a}=n;let l;switch(e.type){case"alias":l=function({options:c},{offset:u,source:h,end:f},b){const m=new ii(h.substring(1)),p=u+h.length,d=is(f,p,c.strict,b);return m.range=[u,p,d.offset],d.comment&&(m.comment=d.comment),m}(t,e,s),(o||a)&&s(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=Ml(t,e,a,s),o&&(l.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":l=Ud(Gd,t,e,a,s),o&&(l.anchor=o.source.substring(1));break;default:throw console.log(e),new Error(`Unsupporten token type: ${e.type}`)}return r&&(l.spaceBefore=!0),i&&(e.type==="scalar"&&e.source===""?l.comment=i:l.commentBefore=i),l}function Pl(t,e,n,s,{spaceBefore:r,comment:i,anchor:o,tag:a},l){const c=Ml(t,{type:"scalar",offset:Xd(e,n,s),indent:-1,source:""},a,l);return o&&(c.anchor=o.source.substring(1)),r&&(c.spaceBefore=!0),i&&(c.comment=i),c}function os(t){if(typeof t=="number")return[t,t+1];if(Array.isArray(t))return t.length===2?t:[t[0],t[1]];const{offset:e,source:n}=t;return[e,e+(typeof n=="string"?n.length:1)]}function jl(t){let e="",n=!1,s=!1;for(let r=0;r<t.length;++r){const i=t[r];switch(i[0]){case"#":e+=(e===""?"":s?`

`:`
`)+i.substring(1),n=!0,s=!1;break;case"%":t[r+1][0]!=="#"&&(r+=1),n=!1;break;default:n||(s=!0),n=!1}}return{comment:e,afterEmptyLine:s}}class Vd{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(n,s,r,i)=>{const o=os(n);i?this.warnings.push(new Dd(o,s,r)):this.errors.push(new rs(o,s,r))},this.directives=new tt({version:e.version||cl.version}),this.options=e}decorate(e,n){const{comment:s,afterEmptyLine:r}=jl(this.prelude);if(s){const i=e.contents;if(n)e.comment=e.comment?`${e.comment}
${s}`:s;else if(r||e.directives.marker||!i)e.commentBefore=s;else if(_e(i)&&!i.flow&&i.items.length>0){let o=i.items[0];Ne(o)&&(o=o.key);const a=o.commentBefore;o.commentBefore=a?`${s}
${a}`:s}else{const o=i.commentBefore;i.commentBefore=o?`${s}
${o}`:s}}n?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:jl(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,n=!1,s=-1){for(const r of e)yield*this.next(r);yield*this.end(n,s)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(n,s,r)=>{const i=os(e);i[0]+=n,this.onError(i,"BAD_DIRECTIVE",s,r)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const n=function(s,r,{offset:i,start:o,value:a,end:l},c){const u=Object.assign({directives:r},s),h=new Nl(void 0,u),f={directives:h.directives,options:h.options,schema:h.schema},b=En(o,{ctx:f,indicator:"doc-start",offset:i,onError:c,startOnNewline:!0});b.found&&(h.directives.marker=!0,!a||a.type!=="block-map"&&a.type!=="block-seq"||b.hasNewline||c(b.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),h.contents=a?Rl(f,a,b,c):Pl(f,b.end,o,null,b,c);const m=h.contents.range[2],p=is(l,m,!1,c);return p.comment&&(h.comment=p.comment),h.range=[i,m,p.offset],h}(this.options,this.directives,e,this.onError);this.atDirectives&&!n.directives.marker&&this.onError(e,"MISSING_CHAR","Missing directives-end indicator line"),this.decorate(n,!1),this.doc&&(yield this.doc),this.doc=n,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const n=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,s=new rs(os(e),"UNEXPECTED_TOKEN",n);this.atDirectives||!this.doc?this.errors.push(s):this.doc.errors.push(s);break}case"doc-end":{if(!this.doc){const s="Unexpected doc-end without preceding document";this.errors.push(new rs(os(e),"UNEXPECTED_TOKEN",s));break}const n=is(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),n.comment){const s=this.doc.comment;this.doc.comment=s?`${s}
${n.comment}`:n.comment}this.doc.range[2]=n.offset;break}default:this.errors.push(new rs(os(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,n=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const s=Object.assign({directives:this.directives},this.options),r=new Nl(void 0,s);this.atDirectives&&this.onError(n,"MISSING_CHAR","Missing directives-end indicator line"),r.range=[0,n,n],this.decorate(r,!1),yield r}}}function st(t){switch(t){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const ql=[",","[","]","{","}"],Yd=[" ",",","[","]","{","}",`
`,"\r","	"],xi=t=>!t||Yd.includes(t);class Jd{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.next=null,this.pos=0}*lex(e,n=!1){e&&(this.buffer=this.buffer?this.buffer+e:e),this.atEnd=!n;let s=this.next||"stream";for(;s&&(n||this.hasChars(1));)s=yield*this.parseNext(s)}atLineEnd(){let e=this.pos,n=this.buffer[e];for(;n===" "||n==="	";)n=this.buffer[++e];return!n||n==="#"||n===`
`||n==="\r"&&this.buffer[e+1]===`
`}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let n=this.buffer[e];if(this.indentNext>0){let s=0;for(;n===" ";)n=this.buffer[++s+e];if(n==="\r"){const r=this.buffer[s+e+1];if(r===`
`||!r&&!this.atEnd)return e+s+1}return n===`
`||s>=this.indentNext||!n&&!this.atEnd?e+s:-1}if(n==="-"||n==="."){const s=this.buffer.substr(e,3);if((s==="---"||s==="...")&&st(this.buffer[e+3]))return-1}return e}getLine(){let e=this.buffer.indexOf(`
`,this.pos);return e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]==="\uFEFF"&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let n=e.length;const s=e.indexOf("#");if(s!==-1){const i=e[s-1];i!==" "&&i!=="	"||(n=s-1)}for(;;){const i=e[n-1];if(i!==" "&&i!=="	")break;n-=1}const r=(yield*this.pushCount(n))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-r),this.pushNewline(),"stream"}if(this.atLineEnd()){const n=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-n),yield*this.pushNewline(),"stream"}return yield"",yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const n=this.peek(3);if(n==="---"&&st(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,"doc";if(n==="..."&&st(this.charAt(3)))return yield*this.pushCount(3),"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!st(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,n]=this.peek(2);if(!n&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&st(n)){const s=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=s,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let n=yield*this.pushIndicators();switch(e[n]){case"#":yield*this.pushCount(e.length-n);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(xi),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return n+=yield*this.parseBlockScalarHeader(),n+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-n),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,n,s=-1;do e=yield*this.pushNewline(),n=yield*this.pushSpaces(!0),e>0&&(this.indentValue=s=n);while(e+n>0);const r=this.getLine();if(r===null)return this.setNext("flow");if((s!==-1&&s<this.indentNext||s===0&&(r.startsWith("---")||r.startsWith("..."))&&st(r[3]))&&!(s===this.indentNext-1&&this.flowLevel===1&&(r[0]==="]"||r[0]==="}")))return this.flowLevel=0,yield"",yield*this.parseLineStart();let i=0;for(;r[i]===",";)i+=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));switch(i+=yield*this.pushIndicators(),r[i]){case void 0:return"flow";case"#":return yield*this.pushCount(r.length-i),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(xi),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const o=this.charAt(1);if(this.flowKey||st(o)||o===",")return yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let n=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;n!==-1&&this.buffer[n+1]==="'";)n=this.buffer.indexOf("'",n+2);else for(;n!==-1;){let r=0;for(;this.buffer[n-1-r]==="\\";)r+=1;if(r%2==0)break;n=this.buffer.indexOf('"',n+1)}let s=this.buffer.indexOf(`
`,this.pos);if(s!==-1&&s<n){for(;s!==-1&&s<n;){const r=this.continueScalar(s+1);if(r===-1)break;s=this.buffer.indexOf(`
`,r)}s!==-1&&s<n&&(n=s-1)}if(n===-1){if(!this.atEnd)return this.setNext("quoted-scalar");n=this.buffer.length}return yield*this.pushToIndex(n+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const n=this.buffer[++e];if(n==="+")this.blockScalarKeep=!0;else if(n>"0"&&n<="9")this.blockScalarIndent=Number(n)-1;else if(n!=="-")break}return yield*this.pushUntil(n=>st(n)||n==="#")}*parseBlockScalar(){let e,n=this.pos-1,s=0;e:for(let r=this.pos;e=this.buffer[r];++r)switch(e){case" ":s+=1;break;case`
`:n=r,s=0;break;case"\r":{const i=this.buffer[r+1];if(!i&&!this.atEnd)return this.setNext("block-scalar");if(i===`
`)break}default:break e}if(!e&&!this.atEnd)return this.setNext("block-scalar");if(s>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=s:this.indentNext+=this.blockScalarIndent;do{const r=this.continueScalar(n+1);if(r===-1)break;n=this.buffer.indexOf(`
`,r)}while(n!==-1);if(n===-1){if(!this.atEnd)return this.setNext("block-scalar");n=this.buffer.length}}if(!this.blockScalarKeep)for(;;){let r=n-1,i=this.buffer[r];for(i==="\r"&&(i=this.buffer[--r]);i===" "||i==="	";)i=this.buffer[--r];if(!(i===`
`&&r>=this.pos))break;n=r}return yield"",yield*this.pushToIndex(n+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let n,s=this.pos-1,r=this.pos-1;for(;n=this.buffer[++r];)if(n===":"){const i=this.buffer[r+1];if(st(i)||e&&i===",")break;s=r}else if(st(n)){const i=this.buffer[r+1];if(i==="#"||e&&ql.includes(i))break;if(n==="\r"&&(i===`
`?(r+=1,n=`
`):s=r),n===`
`){const o=this.continueScalar(r+1);if(o===-1)break;r=Math.max(r,o-2)}}else{if(e&&ql.includes(n))break;s=r}return n||this.atEnd?(yield"",yield*this.pushToIndex(s+1,!0),e?"flow":"doc"):this.setNext("plain-scalar")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,n){const s=this.buffer.slice(this.pos,e);return s?(yield s,this.pos+=s.length,s.length):(n&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":if(this.charAt(1)==="<")return(yield*this.pushVerbatimTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(xi))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case":":case"?":case"-":if(st(this.charAt(1)))return this.flowLevel===0&&(this.indentNext=this.indentValue+1),(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}return 0}*pushVerbatimTag(){let e=this.pos+2,n=this.buffer[e];for(;!st(n)&&n!==">";)n=this.buffer[++e];return yield*this.pushToIndex(n===">"?e+1:e,!1)}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let n,s=this.pos-1;do n=this.buffer[++s];while(n===" "||e&&n==="	");const r=s-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=s),r}*pushUntil(e){let n=this.pos,s=this.buffer[n];for(;!e(s);)s=this.buffer[++n];return yield*this.pushToIndex(n,!1)}}class Qd{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let n=0,s=this.lineStarts.length;for(;n<s;){const r=n+s>>1;this.lineStarts[r]<e?n=r+1:s=r}return this.lineStarts[n]===e?{line:n+1,col:1}:n===0?{line:0,col:e}:{line:n,col:e-this.lineStarts[n-1]+1}}}}function gt(t,e){for(let n=0;n<t.length;++n)if(t[n].type===e)return!0;return!1}function ki(t){for(let e=0;e<t.length;++e)switch(t[e].type){case"space":case"comment":case"newline":break;default:return!0}return!1}function Dl(t){let e=!1;for(let n=0;n<t.length;++n)switch(t[n].type){case"space":break;case"comment":e=!0;break;case"newline":if(!e)return!1;break;default:return!1}if(e)for(let n=t.length-1;n>=0;--n)switch(t[n].type){case"space":break;case"newline":return!0;default:return!1}return!1}function Ul(t){switch(t==null?void 0:t.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function ir(t){switch(t.type){case"document":return t.start;case"block-map":{const e=t.items[t.items.length-1];return e.sep||e.start}case"block-seq":return t.items[t.items.length-1].start;default:return[]}}function as(t){var e;if(t.length===0)return[];let n=t.length;e:for(;--n>=0;)switch(t[n].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((e=t[++n])===null||e===void 0?void 0:e.type)==="space";);return t.splice(n,t.length)}function Hl(t){if(t.start.type==="flow-seq-start")for(const e of t.items)!e.sep||e.value||gt(e.start,"explicit-key-ind")||gt(e.sep,"map-value-ind")||(e.key&&(e.value=e.key),delete e.key,Ul(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class Zd{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Jd,this.onNewLine=e}*parse(e,n=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const s of this.lexer.lex(e,n))yield*this.next(s);n||(yield*this.end())}*next(e){if(this.source=e,this.atScalar)return this.atScalar=!1,yield*this.step(),void(this.offset+=e.length);const n=function(s){switch(s){case"\uFEFF":return"byte-order-mark";case"":return"doc-mode";case"":return"flow-error-end";case"":return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(s[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}(e);if(n)if(n==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=n,yield*this.step(),n){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":return;default:this.atNewLine=!1}this.offset+=e.length}else{const s=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:s,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type!=="doc-end"||e&&e.type==="doc-end"){if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}else{for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source})}}peek(e){return this.stack[this.stack.length-e]}*pop(e){const n=e||this.stack.pop();if(n)if(this.stack.length===0)yield n;else{const s=this.peek(1);switch(n.type!=="block-scalar"&&n.type!=="flow-collection"||(n.indent="indent"in s?s.indent:-1),n.type==="flow-collection"&&Hl(n),s.type){case"document":s.value=n;break;case"block-scalar":s.props.push(n);break;case"block-map":{const r=s.items[s.items.length-1];if(r.value)return s.items.push({start:[],key:n,sep:[]}),void(this.onKeyLine=!0);if(!r.sep)return Object.assign(r,{key:n,sep:[]}),void(this.onKeyLine=!gt(r.start,"explicit-key-ind"));r.value=n;break}case"block-seq":{const r=s.items[s.items.length-1];r.value?s.items.push({start:[],value:n}):r.value=n;break}case"flow-collection":{const r=s.items[s.items.length-1];return void(!r||r.value?s.items.push({start:[],key:n,sep:[]}):r.sep?r.value=n:Object.assign(r,{key:n,sep:[]}))}default:yield*this.pop(),yield*this.pop(n)}if(!(s.type!=="document"&&s.type!=="block-map"&&s.type!=="block-seq"||n.type!=="block-map"&&n.type!=="block-seq")){const r=n.items[n.items.length-1];r&&!r.sep&&!r.value&&r.start.length>0&&!ki(r.start)&&(n.indent===0||r.start.every(i=>i.type!=="comment"||i.indent<n.indent))&&(s.type==="document"?s.end=r.start:s.items.push({start:r.start}),n.items.splice(-1,1))}}else yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"}}*stream(){switch(this.type){case"directive-line":return void(yield{type:"directive",offset:this.offset,source:this.source});case"byte-order-mark":case"space":case"comment":case"newline":return void(yield this.sourceToken);case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};return this.type==="doc-start"&&e.start.push(this.sourceToken),void this.stack.push(e)}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":return void(ki(e.start)?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken));case"anchor":case"tag":case"space":case"comment":case"newline":return void e.start.push(this.sourceToken)}const n=this.startBlockValue(e);n?this.stack.push(n):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const n=as(ir(this.peek(2)));let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const r={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":return void e.props.push(this.sourceToken);case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const s=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,!s.sep&&Dl(s.start)){const r=e.items[e.items.length-2],i=(n=r==null?void 0:r.value)===null||n===void 0?void 0:n.end;if(Array.isArray(i))return Array.prototype.push.apply(i,s.start),void(s.start=[this.sourceToken])}case"space":case"comment":return void(s.value?e.items.push({start:[this.sourceToken]}):s.sep?s.sep.push(this.sourceToken):s.start.push(this.sourceToken))}if(this.indent>=e.indent){const r=!this.onKeyLine&&this.indent===e.indent&&(s.sep||ki(s.start));switch(this.type){case"anchor":case"tag":return void(r||s.value?(e.items.push({start:[this.sourceToken]}),this.onKeyLine=!0):s.sep?s.sep.push(this.sourceToken):s.start.push(this.sourceToken));case"explicit-key-ind":return s.sep||gt(s.start,"explicit-key-ind")?r||s.value?e.items.push({start:[this.sourceToken]}):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]}):s.start.push(this.sourceToken),void(this.onKeyLine=!0);case"map-value-ind":if(s.sep)if(s.value||r&&!gt(s.start,"explicit-key-ind"))e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(gt(s.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]});else if(gt(s.start,"explicit-key-ind")&&Ul(s.key)&&!gt(s.sep,"newline")){const i=as(s.start),o=s.key,a=s.sep;a.push(this.sourceToken),delete s.key,delete s.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:o,sep:a}]})}else s.sep.push(this.sourceToken);else Object.assign(s,{key:null,sep:[this.sourceToken]});return void(this.onKeyLine=!0);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);return void(r||s.value?(e.items.push({start:[],key:i,sep:[]}),this.onKeyLine=!0):s.sep?this.stack.push(i):(Object.assign(s,{key:i,sep:[]}),this.onKeyLine=!0))}default:{const i=this.startBlockValue(e);if(i)return r&&i.type!=="block-seq"&&gt(s.start,"explicit-key-ind")&&e.items.push({start:[]}),void this.stack.push(i)}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const s=e.items[e.items.length-1];switch(this.type){case"newline":if(!s.value&&Dl(s.start)){const r=e.items[e.items.length-2],i=(n=r==null?void 0:r.value)===null||n===void 0?void 0:n.end;if(Array.isArray(i))return Array.prototype.push.apply(i,s.start),void(s.start=[this.sourceToken])}case"space":case"comment":return void(s.value?e.items.push({start:[this.sourceToken]}):s.start.push(this.sourceToken));case"anchor":case"tag":if(s.value||this.indent<=e.indent)break;return void s.start.push(this.sourceToken);case"seq-item-ind":if(this.indent!==e.indent)break;return void(s.value||gt(s.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):s.start.push(this.sourceToken))}if(this.indent>e.indent){const r=this.startBlockValue(e);if(r)return void this.stack.push(r)}yield*this.pop(),yield*this.step()}*flowCollection(e){const n=e.items[e.items.length-1];if(this.type==="flow-error-end"){let s;do yield*this.pop(),s=this.peek(1);while(s&&s.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":return void(!n||n.sep?e.items.push({start:[this.sourceToken]}):n.start.push(this.sourceToken));case"map-value-ind":return void(!n||n.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):Object.assign(n,{key:null,sep:[this.sourceToken]}));case"space":case"comment":case"newline":case"anchor":case"tag":return void(!n||n.value?e.items.push({start:[this.sourceToken]}):n.sep?n.sep.push(this.sourceToken):n.start.push(this.sourceToken));case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const r=this.flowScalar(this.type);return void(!n||n.value?e.items.push({start:[],key:r,sep:[]}):n.sep?this.stack.push(r):Object.assign(n,{key:r,sep:[]}))}case"flow-map-end":case"flow-seq-end":return void e.end.push(this.sourceToken)}const s=this.startBlockValue(e);s?this.stack.push(s):(yield*this.pop(),yield*this.step())}else{const s=this.peek(2);if(s.type!=="block-map"||this.type!=="map-value-ind"&&(this.type!=="newline"||s.items[s.items.length-1].sep))if(this.type==="map-value-ind"&&s.type!=="flow-collection"){const r=as(ir(s));Hl(e);const i=e.end.splice(1,e.end.length);i.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e);else yield*this.pop(),yield*this.step()}}flowScalar(e){if(this.onNewLine){let n=this.source.indexOf(`
`)+1;for(;n!==0;)this.onNewLine(this.offset+n),n=this.source.indexOf(`
`,n)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const n=as(ir(e));return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n}]}}case"map-value-ind":{this.onKeyLine=!0;const n=as(ir(e));return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function ep(t,e={}){const{lineCounter:n,prettyErrors:s}=function(a){const l=!a||a.prettyErrors!==!1;return{lineCounter:a&&a.lineCounter||l&&new Qd||null,prettyErrors:l}}(e),r=new Zd(n==null?void 0:n.addNewLine),i=new Vd(e);let o=null;for(const a of i.compose(r.parse(t),!0,t.length))if(o){if(o.options.logLevel!=="silent"){o.errors.push(new rs(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}}else o=a;return s&&n&&(o.errors.forEach(Ol(t,n)),o.warnings.forEach(Ol(t,n))),o}function tp(t,e,n){let s;typeof e=="function"?s=e:n===void 0&&e&&typeof e=="object"&&(n=e);const r=ep(t,n);if(!r)return null;if(r.warnings.forEach(i=>al(r.options.logLevel,i)),r.errors.length>0){if(r.options.logLevel!=="silent")throw r.errors[0];r.errors=[]}return r.toJS(Object.assign({reviver:s},n))}const np={hr(t){const e=RegExp(/^ {0,3}(-{3,}(?=[^-\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~-]* *(?:\n+|$)|$)/).exec(t);if(e)return{type:"options",raw:e[0],data:tp(e[3],{})}}},sp={paragraph:t=>t,blockquote:t=>t,heading:t=>t};function Bl(t,e){let n=function(o){return Hs.lexer(function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}((a=>{const l=Bh(a);if(l===0)return a;const c=new RegExp(`^[ \\t]{${l}}`,"gm");return a.replace(c,"")})(o)))}(t),s=new Ms(e);(function(o){let a=o.findIndex(c=>c.type=="options"),l=o.findIndex(c=>c.type=="heading");return a!==-1&&l>a})(n)&&(s=function(o,a){let l=o.find(c=>c.type=="options");return function(c,u){let h=new Ms(c);for(let f in u)Object.prototype.hasOwnProperty.call(u,f)&&(h[f]=u[f]);return h}(a,l.data)}(n,s));let r=Fl(n),i=function(o,a){let l=[],c=0;for(;o.length!==0;){c=Fl(o.slice(1)),c===-1&&(c=o.length);let u=rp(o.splice(0,c+1),a);l.push(u)}return l}(n.slice(r),s);return new Gh(i,s)}function rp(t,e){let n=function(l){return ls(l.filter(c=>c.type=="paragraph"||c.type=="code"))}(t),s=function(l){return ls(l.filter(c=>c.type=="blockquote"))}(t),r=function(l){return ls(l.filter(c=>c.type=="heading"))}(t),i=function(l){let c=l.find(h=>h.type=="list"),u=[];return c.items.forEach(function(h,f){let b=function(m){let p=m.tokens.filter(d=>d.type=="blockquote");return{text:ls(m.tokens.filter(d=>d.type!="blockquote")),comment:ls(p)}}(h);u.push(new Xh(f,b.text,h.checked,b.comment))}),u}(t),o=function(l){let c=l.find(u=>u.type=="list");return c.ordered?c.items[0].task?"SingleChoice":"Sequence":"MultipleChoice"}(t);const a=[r,n,s,i,new Ms(e)];switch(o){case"SingleChoice":return new Wh(...a);case"MultipleChoice":return new Kh(...a);case"Sequence":return new Fh(...a)}}function Fl(t){return t.findIndex(e=>e.type=="heading")}function ls(t){return Hh.sanitize(Hs.parser(t))}function Kl(t,e,n){let s;e.innerHTML="",e.shadowRoot?(s=e.shadowRoot,s.innerHTML=""):s=e.attachShadow({mode:"open"});try{let r=Bl(t,n);return new kh({target:s,intro:!1,props:{quiz:r}})}catch(r){s.innerHTML=`${r}. App could not render. Please check your quizdown syntax.`}}return Hs.use({renderer:sp,tokenizer:np}),{init:function(t={}){let e=new Ms(t);e.startOnLoad&&typeof document<"u"&&window.addEventListener("load",function(){let n=document.querySelectorAll(".quizdown");for(let s of n)Kl(s.innerHTML,s,e)},!1)},register:function(t){return t.setup(this),this},parseQuizdown:Bl,createApp:Kl,getMarkedParser:function(){return Hs}}})})(xc);var Op=xc.exports;const Oi=`# How Web servers authenticate clients?
- [ ] Clients pass auth details along with any request
- [x] Servers keep the session information after the first request

# A web cookie is a small piece of data.
- [x] Sent from a website and stored in user’s web browser while a user is browsing a website
- [ ] Sent from user and stored in the server while a user is browsing a website
- [ ] Sent from root server to all servers
- [ ] All
- [ ] None

# Can we use custom HTTP method names in HTTP protocol?
- [x] Yes
- [ ] No

# What is the main feature of the HTTP protocol?
- [ ] It's secure.
- [ ] It's fast.
- [ ] It's text-only.
- [x] It's stateless.

# Do Web servers keep the session state of client requests?
- [ ] Yes, it is required by the protocol specification
- [ ] Yes, to handle client authorization
- [x] No

# What is the maximum allowed size of the POST request in HTTP protocol?
- [ ] 8mb
- [ ] 20mb
- [ ] 100mb
- [x] Unlimited

# Dynamic web page...
- [ ] Is same every time whenever it displays
- [x] Generates on demand by a program or a request from browser
- [ ] Both
- [ ] None of 2 above

# Can browsers cache POST requests in HTTP protocol?
- [ ] Yes
- [x] No

# What is the difference between GET and POST methods in HTTP protocol?
- [ ] The GET method cannot send any data to the server, while POST can.
- [x] GET method can send only a limited amount of data to the server, while POST can send an unlimited amount of data.
- [ ] POST method cannot be redirected, while GET can.
- [x] They send data from browser to server by using different parts in HTTP packet.

# What is the 500 status code in HTTP protocol used for?
- [x] Indicates unexpected incident on the server side.
- [ ] Indicates unauthorized user request for secure resource.
- [ ] Indicates that the requested method is not allowed.
- [ ] Indicates that the requested resource cannot be found.

# What are the HTTP header fields used for?
- [ ] To pass URL parameters to the server.
- [ ] To pass message body to the server.
- [x] To pass additional information about request or response to the server.

# ........... is the simplest form of a website, in which the site's content is delivered without the use of server-side processing.
- [ ] Social Networking Websites
- [ ] Generate executable files from web content by web server
- [x] Static website
- [ ] E-Commerce Website

# What is cURL?
- [ ] cURL is a command line option for Google Chrome browser.
- [ ] cURL is a way browsers interact with servers.
- [x] cURL is a command-line tool for getting or sending data.

# What are cacheable HTTP Methods?
- [ ] GET, HEAD, DELETE and OPTIONS are cacheable methods.
- [ ] All idempotent methods are cacheable.
- [x] The response is cacheable if it can be stored in the browse's cache.

# Which protocol is used for secure communication over the internet?
- [ ] UDP
- [x] HTTPS
- [ ] HTTP
- [ ] IP

# Can browsers cache GET requests in HTTP protocol?
- [x] Yes
- [ ] No

# What are safe HTTP methods?
- [ ] GET, HEAD, DELETE and OPTIONS are safe methods
- [ ] Only GET and POST are safe methods
- [ ] Safe methods don't pass any data to the server.
- [x] Safe methods don't alter the server state.

# Can the GET method of HTTP have a message body?
- [x] Yes
- [ ] No

# What are HTTP Cookies?
- [x] Servers use cookies to store data on user's computer.
- [ ] Clients use cookies to store data on the server.
- [ ] Proxies use cookies to store data on user's computer.

# Which of the following statements are true?
- [ ] HTTP runs over TCP
- [ ] HTTP allows information to be stored in a URL
- [x] Both
- [ ] None

# Common gateway interface (CGI) is used to?
- [ ] Generate web pages
- [x] Generate executable files from web content by web server
- [ ] Stream videos
- [ ] All above
- [ ] None above`,uc=`# Which of these elements are all \`<table>\` elements?
- [ ] \`<table> <tr> <tt>\`
- [ ] \`<table> <head> <tfoot>\`
- [x] \`<table> <tr> <td>\`

# Choose the correct HTML element to define emphasized text
- [ ] \`<italic>\`
- [x] \`<em>\`
- [ ] \`<i>\`

# Block elements are normally displayed without starting a new line.
- [ ] True
- [x] False

# An \`<iframe>\` is used to display a web page within a web page.
- [x] True
- [ ] False
- [ ] There is no such thing as an < iframe >

# What is the correct HTML for creating a hyperlink?
- [ ] \`<a> http://www.w3schools.com</a>\`
- [ ] \`<a name="http://www.w3schools.com"> W3Schools.com</a>\`
- [ ] \`<a url="http://www.w3schools.com"> W3Schools.com</a>\`
- [x] \`<a href="http://www.w3schools.com"> W3Schools</a>\`

# The HTML5 \`<canvas>\` element is used to:
- [x] draw graphics
- [ ] display database records
- [ ] manipulate data in MySQL
- [ ] create draggable elements

# In HTML, \`onblur\` and \`onfocus\` are:
- [ ] HTML elements
- [ ] Style attributes
- [x] Event attributes

# HTML comments start with \`<!--\` and end with \`-->\`
- [x] True
- [ ] False

# What is the correct HTML for making a drop-down list?
- [ ] \`<input type="list">\`
- [ ] \`<input type="dropdown">\`
- [ ] \`<list>\`
- [x] \`<select>\`

# Which HTML5 element defines navigation links?
- [ ] \`<navigation>\`
- [ ] \`<navigate>\`
- [x] \`<nav>\`

# What is the correct HTML element for inserting a line break?
- [ ] \`<p>\`
- [x] \`<br>\`
- [ ] \`<break>\`
- [ ] \`<lb>\`

# Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?
- [ ] title
- [ ] longdesc
- [x] alt
- [ ] src

# Which character is used to indicate an end tag?
- [x] /
- [ ] \\*
- [ ] <
- [ ] \\>

# Choose the correct HTML element for the largest heading:
- [ ] \`<heading>\`
- [ ] \`<head>\`
- [ ] \`<h6>\`
- [x] \`<h1>\`

# How can you make a numbered list?
- [ ] \`<dl>\`
- [ ] \`<ul>\`
- [ ] \`<list>\`
- [x] \`<ol>\`

# Which HTML element defines the title of a document?
- [x] \`<title>\`
- [ ] \`<head>\`
- [ ] \`<meta>\`

# Which input type defines a slider control?
- [ ] controls
- [x] range
- [ ] slider
- [ ] search

# Who is making the Web standards?
- [ ] Microsoft
- [ ] Mozilla
- [ ] Google
- [x] The World Wide Web Consortium

# What is the correct HTML5 element for playing video files?
- [ ] \`<movie>\`
- [ ] \`<media>\`
- [x] \`<video>\`

# What is the correct HTML for adding a background color?
- [x] \`<body style="background-color:yellow;">\`
- [ ] \`<body bg="yellow">\`
- [ ] \`<background>yellow</background>\`

# What is the correct HTML for making a text input field?
- [ ] \`<textinput type="text">\`
- [ ] \`<input type="textfield">\`
- [ ] \`<textfield>\`
- [x] \`<input type="text">\`

# Which HTML5 element is used to specify a footer for a document or section?
- [x] \`<footer>\`
- [ ] \`<section>\`
- [ ] \`<bottom>\`

# What does HTML stand for?
- [ ] Hyperlinks and Text Markup Language
- [ ] Home Tool Markup Language
- [x] Hyper Text Markup Language

# What is the correct HTML for making a text area?
- [ ] \`<input type="textarea">\`
- [x] \`<textarea>\`
- [ ] \`<input type="textbox">\`

# Choose the correct HTML element to define important text
- [ ] \`<i>\`
- [x] \`<strong>\`
- [ ] \`<b>\`
- [ ] \`<important>\`

# What is the correct HTML5 element for playing audio files?
- [x] \`<audio>\`
- [ ] \`<mp3>\`
- [ ] \`<sound>\`

# In HTML, which attribute is used to specify that an input field must be filled out?
- [ ] placeholder
- [x] required
- [ ] validate
- [ ] formvalidate

# What is the correct HTML for inserting a background image?
- [x] \`<body style="background-image:url(background.gif);">\`
- [ ] \`<body bg="background.gif">\`
- [ ] \`<background img="background.gif">\`

# What is the correct HTML for inserting an image?
- [ ] \`<img alt="MyImage"> image.gif </img>\`
- [ ] \`<img href="image.gif" alt="MyImage">\`
- [x] \`<img src="image.gif" alt="MyImage">\`
- [ ] \`<image src="image.gif" alt="MyImage">\`

# What is the correct HTML for making a checkbox?
- [ ] \`<checkbox>\`
- [ ] \`<check>\`
- [x] \`<input type="checkbox">\`
- [ ] \`<input type="check">\`

# How can you make a bulleted list?
- [ ] \`<ol>\`
- [ ] \`<dl>\`
- [x] \`<ul>\`
- [ ] \`<list>\`

# Inline elements are normally displayed without starting a new line.
- [x] True
- [ ] False

# The HTML global attribute, "contenteditable" is used to:
- [x] Specify whether the content of an element should be editable or not
- [ ] Specifies a context menu for an element. The menu appears when a user right-clicks on the element
- [ ] Update content from the server
- [ ] Return the position of the first found occurrence of content inside a string

# How can you open a link in a new tab/browser window?
- [ ] \`<a href="url" target="new">\`
- [ ] \`<a href="url" new>\`
- [x] \`<a href="url" target="_blank">\`

# Which HTML element is used to display a scalar measurement within a range?
- [ ] \`<range> \`
- [ ] \`<measure>\`
- [ ] \`<gauge>\`
- [x] \`<meter>\` `,fc=`# What does the CSS property \`display: none;\` do?
- [x] Hides the element
- [ ] Makes the element semi-transparent
- [ ] Shows the element
- [ ] Displays an error

# Which CSS property is used for changing the text color of an element?
- [ ] textColor
- [ ] text-color
- [ ] font-color
- [x] color

# Which CSS property is used for creating a shadow effect on text?
- [ ] font-shadow
- [ ] shadow-effect
- [ ] text-outline
- [x] text-shadow

# Which CSS feature is used to select elements based on their state, such as hover or focus?
- [ ] :modifier
- [ ] :condition
- [x] :pseudo-class
- [ ] :state

# In CSS, what is the default value of the \`position\` property?
- [ ] absolute
- [x] static
- [ ] fixed
- [ ] relative

# How can you vertically center an element using CSS?
- [ ] position: absolute; top: 50%;
- [ ] margin: auto;
- [x] display: flex; align-items: center;
- [ ] vertical-align: center;

# What does CSS stand for?
- [ ] Colorful Style Sheets
- [ ] Computer Style Sheets
- [x] Cascading Style Sheets
- [ ] Creative Style Sheets

# How can you create a CSS animation that repeats indefinitely?
- [x] \`animation-iteration-count: infinite;\`
- [ ] \`animation-repeat: infinite;\`
- [ ] \`animation-loop: true;\`
- [ ] \`animation-iteration: infinite;\`

# Which CSS property is used to change the font of an element?
- [ ] text-family
- [ ] text-font
- [x] font-family
- [ ] font-style

# What does the CSS property \`transform: scale(2)\` do?
- [ ] Translates the element by 2 pixels
- [x] Scales the element to twice its size
- [ ] Skews the element horizontally
- [ ] Rotates the element by 2 degrees

# What is the difference between \`em\` and \`rem\` units in CSS?
- [ ] em is a fixed unit, while rem is a responsive unit
- [ ] em is absolute, while rem is relative
- [ ] em is used for vertical spacing, while rem is used for horizontal spacing
- [x] em is relative to the font-size of the element, while rem is relative to the font-size of the root element

# In CSS Grid, what is the purpose of the \`grid-template-areas\` property?
- [ ] Sets the size of the grid container
- [ ] Specifies the alignment of grid items
- [x] Creates named grid areas
- [ ] Defines the number of rows and columns in the grid

# What is the correct way to link an external CSS file to an HTML document?
- [ ] \`<link src="styles.css">\`
- [ ] \`<style src="styles.css">\`
- [ ] \`<css href="styles.css">\`
- [x] \`<link rel="stylesheet" href="styles.css">\`

# How do you apply multiple styles to an element using a class?
- [x] \`<div class="style1 style2">\`
- [ ] \`<div style="style1 style2">\` 
- [ ] \`<div class="style1, style2">\`
- [ ] \`<div style="style1, style2">\`

# How can you make a text bold in CSS?
- [ ] font-bold: true
- [ ] text-style: bold
- [ ] bold: true
- [x] font-weight: bold

# How do you select an element with the ID "example"?
- [ ] @example
- [ ] .example
- [ ] $example
- [x] #example

# What does the CSS property \`box-sizing: border-box;\` do?
- [ ] Removes the box from the layout
- [x] Includes padding and border in the element's total width and height
- [ ] Sets the box model to its default behavior
- [ ] Adds a border around the box

# Which CSS property is used for adding a background color to an element?
- [ ] background
- [x] background-color
- [ ] bgcolor
- [ ] color

# What is the purpose of the CSS \`margin\` property?
- [ ] To change the element's font size
- [x] To control the space outside the border
- [ ] To define the padding of an element
- [ ] To set the border thickness

# What does the CSS property \`backface-visibility: hidden;\` do?
- [ ] Controls the visibility of child elements
- [x] Makes the element invisible from the back
- [ ] Sets the visibility of the entire page
- [ ] Hides the background of an element

# What is the purpose of the CSS \`counter-reset\` property?
- [ ] Removes a counter from the document
- [x] Resets the count of a counter
- [ ] Sets the initial value of a counter
- [ ] Resets the position of a counter

# Which CSS property is used to control the spacing between lines of text?
- [ ] text-spacing
- [x] line-height
- [ ] letter-spacing
- [ ] spacing

# What is the purpose of the CSS \`padding\` property?
- [ ] To change the element's font color
- [x] To control the space inside the border
- [ ] To define the thickness of the border
- [ ] To set the margin of an element

# What does the CSS property \`filter: grayscale(100%);\` do?
- [ ] Adjusts the saturation of the element
- [x] Converts the element to black and white
- [ ] Sets the font color to gray
- [ ] Adds a grayscale filter to the background

# In CSS, how do you comment out a single line?
- [ ] \`** This is a comment **\`
- [ ] \`< !-- This is a comment -- >\`
- [ ] \`// This is a comment\`
- [x] \`/* This is a comment */\`

# What is the purpose of the CSS property \`z-index\`?
- [ ] Defines the width of the element
- [x] Specifies the stacking order of positioned elements
- [ ] Sets the zoom level of an element
- [ ] Controls the transparency of an element

# What is the purpose of the CSS \`will-change\` property?
- [ ] Specifies the layout of an element
- [x] Indicates that an element is likely to change in the future
- [ ] Animates the element continuously
- [ ] Sets the initial value of an element

# What is the \`flex\` shorthand property used for in Flexbox?
- [ ] Determines the order of the flex items
- [x] Sets the flex-grow, flex-shrink, and flex-basis properties at once
- [ ] Defines the flex container
- [ ] Controls the flex-direction

# Which CSS property is used to create a flexible and responsive navigation bar?
- [ ] \`responsive-nav\`
- [ ] \`flex-nav\`
- [x] \`flexbox\`
- [ ] \`nav-style\`

# Which CSS property is used to create rounded corners?
- [ ] round-corner
- [x] border-radius
- [ ] corner-radius


<!-- Part 2 -->


# What does the 'a' stand for in RGBa?
- [ ] about
- [ ] aqua
- [ ] Apple
- [x] alpha

# In vertical offsets for box shadows, the (-1) means that the box-shadow will be below the box?
- [ ] True
- [x] False

# Which prefix do you need to get CSS3 properties to work on older Mozilla Firefox browsers?
- [ ] -gecko-
- [x] -moz-
- [ ] -o-
- [ ] -webkit-

# How to create transition effects using CSS3?
- [ ] alpha-effect: transition (width,2s);
- [ ] transition-duration: 2s; transition-exect: width;
- [x] transition: width 2s;
- [ ] None of all above

# Can you have multiple box-shadows?
- [x] yes
- [ ] no

# How to add text shadow using CSS3?
- [ ] shadow: text 5px 5px 5px grey;
- [ ] font-shadow: 5px 5px 5px grey;
- [x] text-shadow: 5px 5px 5px grey;
- [ ] font: shadowed 5px 5px 5px grey;

# How can you create rounded corners using CSS3?
- [ ] \`alpha-effect: round-corner;\`
- [ ] \`corner-exect: round;\`
- [x] \`border-radius: 30px;\`
- [ ] \`border[round]: 30px;\`

# How to force a word wrap using CSS3?
- [ ] text-width: set;
- [ ] text-wrap: break-word;
- [ ] text-wrap: force;
- [x] word-wrap: break-word;

# Has CSS3 been fully supported by all browsers?
- [x] Yes
- [ ] No

# Look at the code. What piece of code is missing to make a text shadow? #basicTextShadow p{ text-shadow: 1px 1px 3px; }
- [ ] the text shadow height
- [ ] the element
- [x] the color
- [ ] the id name

# How do four values work on border-radius?
- [ ] bottom-left, bottom-right, top-right, top-left
- [ ] up, down, front, behind
- [x] top-left, top-right, bottom-right, bottom-left
- [ ] top, bottom, left, right

# Box-Shadow is a property that allows developers to apply a....
- [ ] Background
- [x] Drop Shadow
- [ ] Rounded Corner
- [ ] Border

# What are the first three values of text-shadow in order?
- [x] horizontal, vertical, blur
- [ ] blur, vertical, horizontal
- [ ] vertical, horizontal, blur
- [ ] None of the above

# What does RGBA mean?
- [ ] Red Gold Black alpha
- [x] Red Green Blue alpha
- [ ] Red Gray Brown alpha
- [ ] Review Get assistance Back-up your information acquire proof

# How to re-size/scale objects using CSS3?
- [ ] scale: (2,4);
- [ ] scale-object: 2,4;
- [x] transform: scale(2,4);
- [ ] None of all above

# How to modify a border image using CSS3?
- [x] border-image: url(border.png) 30 30 round;
- [ ] border: image url(image.png);
- [ ] border: url(image.png);
- [ ] None of all above

# How to rotate objects using CSS3
- [ ] transform: rotate-30deg-clockwise;
- [x] transform: rotate(30deg);
- [ ] rotate-object: 30deg;
- [ ] object-rotation: 30deg;

# Which of these are valid CSS3 transformation statements.
- [ ] simulate()
- [ ] modify()
- [ ] skip()
- [x] matrix()

# How to resize a background image using CSS3?
- [ ] alpha-effect: bg-resize 80px 60px;
- [ ] bg-dimensions: 80px 60px;
- [ ] background-proportion: 80px 60px;
- [x] background-size: 80px 60px;

# Does the box-shadow support all browsers ?
- [x] true
- [ ] false

# How to rotate objects using CSS3?
- [ ] transform: rotate-30deg-clockwise;
- [x] transform: rotate(30deg);
- [ ] rotate-object: 30deg;
- [ ] object-rotation: 30deg;

# How to resize a background image using CSS3?
- [ ] alpha-effect: bg-resize 80px 60px;
- [ ] background-proportion: 80px 60px;
- [x] background-size: 80px 60px;
- [ ] None of all above

# How do you add shadow to elements in CSS3?
- [ ] alpha-effect\\[shadow\\]: 10px 10px 5px grey;
- [ ] shadow-right: 10px shadow-bottom: 10px;
- [ ] shadow-color: grey;
- [x] box-shadow: 10px 10px 5px grey;

# __________ is a property that allows developers to add rounded corners on the design elements.
- [x] Border-Radius
- [ ] Box Shadow
- [ ] Round Corner
- [ ] Corner

# If you put a value of 0 for a Border-Radius what will happen?
- [ ] The world will end.
- [x] The Corner will be square.
- [ ] The Corner will curve vertical.
- [ ] The Corner will curve horizontal.

# How can you create rounded corners using CSS3?
- [ ] alpha-exect: round-corner;
- [ ] corner-exect: round;
- [x] border-radius: 30px;
- [ ] border\\[round\\]: 30px

# How to modify a border image using CSS3?
- [x] border-image: url(border.png) 30 30 round;
- [ ] border-variable: image url(image.png);
- [ ] border: url(image.png);`,hc=`# What is the correct place to insert a JavaScript?
- [ ] The \`<body>\` section
- [ ] The \`<head>\` section
- [x] Both the \`<head>\` section and the \`<body>\` section are correct

# What will be shown in the console?
\`\`\`javascript
var arr = [1, 2, 3];
var arrCopy = arr;
arr.push(4);
console.log(arrCopy.length);
\`\`\`
- [ ] 3
- [x] 4
- [ ] 5
- [ ] 6

# How does a WHILE loop start?
- [ ] while i = 1 to 10
- [x] while (i <= 10)
- [ ] while (i <= 10; i++)
- [ ] None of these

# The external JavaScript file must contain the \`<script>\` tag.
- [x] False
- [ ] True

# Which event occurs when the user clicks on an HTML element?
- [ ] onmouseclick
- [x] onclick
- [ ] onmouseover
- [ ] onchange

# We have javascript code as below. Which is the return value of the function call \`compare()\`?
\`\`\`js
function compare() {
  int x=1;
  string y="1";
  if(x==y) return true;
  else return false;
}
\`\`\`
- [ ] true
- [ ] false
- [x] syntax error
- [ ] runtime error

# How do you round the number 7.25, to the nearest integer?
- [ ] \`rnd(7.25)\`
- [x] \`Math.round(7.25)\`
- [ ] \`round(7.25)\`
- [ ] \`Math.rnd(7.25)\`

# How do you create a function in JavaScript?

- [ ] \`function:myFunction()\`
- [x] \`function myFunction()\`
- [ ] \`function = myFunction()\`

# We have javascript code as below. What will be shown in the console?
\`\`\`js
var x = 5;
function double(x) {
  x = x * 2;
}
double(x);
console.log(x);
\`\`\`
- [ ] 10
- [x] 5
- [ ] undefined
- [ ] NaN

# What is the correct JavaScript syntax for opening a new window called \`"w2"\`?
- [ ] \`w2 = window.new("https://www.daotao.ai");\`
- [x] \`w2 = window.open("https://www.daotao.ai");\`

# How does a FOR loop start?
- [ ] \`for (i = 0; i <= 5)\`
- [ ] \`for (i <= 5; i++)\`
- [ ] \`for i = 1 to 5\`
- [x] \`for (i = 0; i <= 5; i++)\`

# We have javascript code as below. What will be shown in the console?
\`\`\`js
var x = 5;
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}
test();
\`\`\`
- [x] undefined, 2
- [ ] 1, 2
- [ ] ReferenceError, 2
- [ ] ReferenceError, undefined

# We have javascript code as below. What will be shown in the console?
\`\`\`js
var a = 1;
function outer() {
  var a = 2;
  function inner() {
    console.log(a);
    var a = 3;
  } i
  inner();
}
outer();
\`\`\`
- [ ] 3
- [ ] 2
- [ ] 1
- [x] undefined

# How to write an IF statement in JavaScript?
- [x] \`if (i == 5)\`
- [ ] \`if i = 5 then\`
- [ ] \`if i == 5 then\`
- [ ] \`if i = 5\`

# Is JavaScript case-sensitive?
- [ ] No
- [x] Yes

# How can you add a comment in a JavaScript?
- [ ] \`'This is a comment'\`
- [ ] \`<!--This is a comment-->\`
- [x] \`//This is a comment\`

# We have a javascript code as below. Which statement will show the string "NguyenVanAn"?
\`\`\`js
function logUserName() {
  return this.name;
}
const user = {name: "NguyenVanAn"}
\`\`\`
- [x] \`logUserName.call(user)\`
- [ ] \`logUserName.bind(user)\`
- [ ] \`logUserName(this=user)\`
- [ ] Syntax error!!!

# How can you detect the client's browser name?
- [ ] \`client.navName\`
- [ ] \`browser.name\`
- [x] \`navigator.appName\`

# How do you find the number with the highest value of x and y?
- [x] \`Math.max(x, y)\`
- [ ] \`top(x, y)\`
- [ ] \`ceil(x, y)\`
- [ ] \`Math.ceil(x, y)\`

# What is the correct syntax for referring to an external script called "xxx.js"?
- [x] \`<script src="xxx.js">\`
- [ ] \`<script name="xxx.js">\`
- [ ] \`<script href="xxx.js">\`

# What will the following code return: \`Boolean(10 > 9)\`
- [x] true
- [ ] false
- [ ] NaN

# How to insert a comment that has more than one line?
- [x] \`/*This comment has more than one line*/\`
- [ ] \`<!--This comment has more than one line-->\`
- [ ] \`//This comment has more than one line//\`

# How do you write "Hello World" in an alert box?
- [ ] \`msgBox("Hello World");\`
- [ ] \`alertBox("Hello World");\`
- [x] \`alert("Hello World");\`
- [ ] \`msg("Hello World");\`

# Inside which HTML element do we put the JavaScript?
- [x] \`<script>\`
- [ ] \`<javascript>\`
- [ ] \`<scripting>\`
- [ ] \`<js>\`

# How do you declare a JavaScript variable?
- [ ] \`v carName;\`
- [ ] \`variable carName;\`
- [x] \`var carName;\`

# What is the correct way to write a JavaScript array?
- [ ] \`var colors = (1:"red", 2:"green", 3:"blue")\`
- [ ] \`var colors = "red", "green", "blue"\`
- [x] \`var colors = ["red", "green", "blue"]\`
- [ ] \`var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")\`

# How to write an IF statement for executing some code if "i" is NOT equal to 5?
- [x] \`if (i != 5)\`
- [ ] \`if i <> 5 then\`
- [ ] \`if i =! 5 then\`
- [ ] \`if (i <> 5)\`

# What is the correct JavaScript syntax to change the content of the HTML element below?
\`<p id="demo">This is a demonstration.</p>\`
- [x] \`document.getElementById("demo").innerHTML = "Hello World!";\`
- [ ] \`#demo.innerHTML = "Hello World!";\`
- [ ] \`document.getElement("p").innerHTML = "Hello World!";\`
- [ ] \`document.getElementByName("p").innerHTML = "Hello World!";\`

# How do you call a function named "myFunction"?
- [ ] \`call function myFunction()\`
- [x] \`myFunction()\`
- [ ] \`call myFunction()\`

# We have javascript code as below. What will be shown in the console?
\`\`\`js
var x = 5;
if (function f() {}) {
  x += typeof f;
}
console.log(x);
\`\`\`
- [ ] 5function
- [x] 5undefined`,dc="# Which of the following expressions can be used to select the element with the HTML attribute `id=\"first\"`?\n- [ ] `document.getElementById('first')`\n- [ ] `document.querySelector('first')`\n- [x] Both of the above\n- [ ] None of the above\n\n\n# Suppose that `ele` is an element node. Select all the expressions below which can be used to select the parent node of `ele`\n- [x] `ele.parentElement`\n- [ ] `ele.parentContainer`\n- [x] `ele.parentNode`\n- [ ] `ele.getParent()`\n\n\n# How to select the first element in an HTML document matching the CSS selector `.main .title .t1`?\n- [x] `document.querySelector('.main .title .t1')`\n- [ ] `document.querySelectorAll('.main .title .t1')`\n- [ ] `document.body.matches('.main .title .t1')`\n\n\n# What will `document.getElementById('t1').childNodes[0]` return?\nConsider the code below:\n```js\n<div id=\"t1\">\n   <p>A paragraph</p>\n</div>\n```\n- [x] A text node\n- [ ] An element node\n- [ ] A comment node\n- [ ] None of the above\n\n\n# The methods `getElementsByClassName()` and `getElementsByTagName()`, of the `Node` interface, both return an array-like list of the matched elements, even if the match is for a single element. True or false?\n- [x] True\n- [ ] False\n\n\n# What does this JavaScript code do to the <div> element?\nConsider the following HTML:\n\n```html\n<div class=\"a1\">A div</div>\n```\nNow consider the following JavaScript where divElement is assumed to be holding the <div> element shown above:\n\n```js\ndivElement.className += ' intro';\n```\nWhat does this JavaScript code do to the <div> element?\n\n- [x] Adds a new class `'intro'` to it\n- [ ] Replaces the previous class `'a1'` with the class `'intro'`\n\n\n# Consider the following HTML\nConsider the following HTML:\n```html\n<div id=\"div1\">I am Div1</div>\n<div id=\"div2\">I am Div2</div>\n```\nHow to add an element node `element` before the `#div2` element and after the `#div1` element shown above?\n\nYou shall assume that #div1 is saved in the variable div1Element and `#div2` in div2Element.\n\n- [ ] `div1Element.appendChild(ele)` \n- [ ] `div2Element.appendChild(ele) `\n- [ ] `div2Element.parentNode.insertBefore(div2Element, ele)`\n- [x] `div2Element.parentNode.insertBefore(ele, div2Element)`\n\n\n# In which of the following ways can the value of the HTML `id` attribute of an element node element be retrieved?\nYou may assume that `element` has only one attribute on it and that is `id`.\n- [x] `element.id`\n- [x] `element.attributes.id`\n- [x] `element.attributes[0]`\n\n\n# How to remove the `'p1'` class from the following element? Choose all the possible choices.\nYou may assume that the element is already selected in the variable `paraElement`.\n```html\n<p class=\"p1\">A simple paragraph</p>\n```\n```js\nvar p = document.getElementsByClassName(\"nav\")[0];\n```\n- [x] `paraElement.classList.remove(\"nav\")`\n- [x] `paraElement.className = \"\"`\n- [x] `paraElement.removeAttribute('class')`\n\n\n# In which of the following ways could we change the content of an element node `divElement` to the text `'Changed'`?\n- [x] `divElement.innerHTML = 'Changed'`\n- [x] `divElement.innerText = 'Changed'`\n- [ ] `divElement.innerContent = 'Changed'`\n- [ ] `divElement.appendChild(document.createTextNode('Changed'))`\n\n\n# How could we remove the highlighted element in the code below, given that it's not a child node of `<body>`?\nYou may assume that the element has already been selected in the variable `paraElement`.\n\n```html\n<p>A paragraph</p>\n<!-- Remove the following paragraph -->\n<p>Another paragraph</p>\n```\n- [ ] `paraElement.removeChild()`\n- [x] `paraElement.parentNode.removeChild(paraElement)`\n- [ ] `document.body.removeChild(paraElement)`\n\n\n# Which of the following is a property available on element nodes that allows us to specifically work with HTML `data-` attributes on them?\n- [x] `dataset`\n- [ ] `dataSet`\n- [ ] `dataList`\n- [ ] `dataAttributes`\n\n\n# In which of the following ways could we add the text `'Hello'` to an empty element node `divElement`?\n- [ ] `divElement.nodeValue = 'Hello'`\n- [x] `divElement.innerText = 'Hello'`\n- [x] `divElement.textContent = 'Hello'`\n- [x] `divElement.appendChild(document.createTextNode('Hello'))`\n\n\n# Spot the error in the code below.\n```html\n<div id=\"d1\"><div>\n```\n```js\nvar divElement = document.getElementById('d1');\ndivElement.appendChild('<p>A paragraph</p>');\n```\n- [x] The argument to appendChild() is not a node\n- [ ] There is no such method as appendChild() on divElement\n- [ ] There is no error",pc=`# Which of the following code sends a cookie in servlet?
- [x] \`response.addCookie(cookie);\`
- [ ] \`response.sendCookie(cookie);\`
- [ ] \`response.createCookie(cookie);\`
- [ ] None of the above

# When \`doPost()\` method of servlet gets called?
- [ ] A POST request results from an HTML form that specifically lists POST as the METHOD.
- [ ] The \`service()\` method checks the HTTP request type as POST and calls \`doPost()\` method.
- [x] Both of the above.
- [ ] None of the above.

# When doGet method of servlet gets called?
- [ ] A GET request results from a normal request for a URL.
- [ ] The service method checks the HTTP request type as GET and calls doGet method.
- [x] Both of the above.
- [ ] None of the above

# The \`HttpServletRequest\` and \`HttpServletResponse\` objects are part of the \`javax.servlet\` package?
> They are protocol specific and so have their own package called \`javax.servlet.http\`
- [ ] true
- [x] false

# You get one \`ServletContext\` object per web application?
- [x] true
- [ ] false

# What is \`javax.servlet.Servlet\`?
- [x] interface
- [ ] abstract class
- [ ] concrete class
- [ ] None of the above.

# Which of the following code encodes the specified URL for use in the \`sendRedirect\` method?
- [x] \`response.encodeRedirectURL(url)\`
- [ ] \`request.encodeRedirectURL(url)\`
- [ ] \`Header.encodeRedirectURL(url)\`
- [ ] None of the above.

# A web container stores all our EJBs, JSPs and servlets?
> A web container stores web components which are JSPs and servlets. An EJB container stores EJBs.
- [ ] true
- [x] false

# Which of the following code can be used to add a header?
- [ ] \`Header.addDateHeader(name,value)\`
- [x] \`response.addDateHeader(name,value)\`
- [ ] \`request.addHeader(name,value)\`
- [ ] None of the above.

# Which of the following code retrieves the name of the authentication scheme?
- [x] \`request.getAuthType()\`
- [ ] \`new AuthType()\`
- [ ] \`response.getAuthType()\`
- [ ] None of the above.

# Which HTTP \`doXXX()\` method is the default for delegation from the \`service()\` method?
- [x] \`doGet()\`
- [ ] \`doHead()\`
- [ ] \`doPost()\`
- [ ] \`doOptions()\`

# When \`destroy()\` method of filter gets called?
- [ ] Both of the above.
- [ ] The \`destroy()\` method is called after the filter has executed \`doFilter\` method.
- [x] The \`destroy()\` method is called only once at the end of the life cycle of a filter.
- [ ] None of the above.

# Where in Tomcat would we put static and dynamic view components we want a client to access directly?
- [x] Within our project folder
- [ ] Within the lib folder
- [ ] Within the WEB-INF folder
- [ ] Any of these is fine

# Which class does \`HttpServlet\` extend?
- [ ] \`Servlet\`
- [ ] \`ServletConfig\`
- [ ] \`ServletContext\`
- [x] \`GenericServlet\`

# Which of the following code is used to get country/region code in servlets?
- [x] \`request.getCountry()\`
- [ ] \`response.getCountry()\`
- [ ] \`Locale.getCountry()\`
- [ ] None of the above.

# What is the recommended method of deploying into Tomcat?
- [ ] Editing the server.xml file
- [x] Using a WAR file
- [ ] Defining a context
- [ ] Manually moving the files into a project folder

# Which of the following code retrieves the MIME type of the body of the request?
- [ ] \`response.getContentType()\`
- [ ] \`new MimeType()\`
- [x] \`request.getContentType()\`
- [ ] None of the above.

# What type of requests can servlets respond to?
- [ ] Protocol-specific requests
- [x] Any Type of requests
- [ ] HTTP requests
- [ ] Servlets do not respond to requests

# The \`javax.servlet.GenericServlet\` class is a concrete implementation of the \`javax.servlet.Servlet\` interface?
- [ ] true
- [x] false

# \`HttpServletRequest\` implements \`ServletRequest\`?
- [ ] true
- [x] false

# Which of the following code can be used to set the locale of the response?
- [ ] \`request.setLocale(locale)\`
- [x] \`response.setLocale(locale)\`
- [ ] \`header.setLocale(locale)\`
- [ ] None of the above.

# How many stages are there in the servlet lifecycle?
> These being class loading, instantiation, initialisation, servicing and destruction.
- [ ] 3
- [ ] 4
- [x] 5
- [ ] 6
- [ ] 7

# How are servlets invoked?
- [ ] using a \`main()\` method
- [x] from a web container
- [ ] from a JSP
- [ ] dynamically within the HTML

# How many servlet lifecycle methods are there?
> \`init()\`, \`service()\`, \`destroy()\`
- [ ] 1
- [ ] 2
- [x] 3
- [ ] 4
- [ ] 5

# Which of these methods of \`GenericServlet\` should you override for initialization within a servlet?
- [x] \`init()\`
- [ ] \`init(Servlet servlet)\`
- [ ] \`init(ServletConfig servletConfig)\`
- [ ] \`init(ServletContext servletContext)\`

# How are \`ServletRequest\` and \`ServletResponse\` objects created?
- [ ] By the client
- [ ] Programmatically within a servlet
- [x] By the container
- [ ] By the user agent



<!-- Extra -->
# How are the \`doXXX()\` methods of the \`javax.servlet.http.HttpServlet\` class invoked?
- [ ] Via the appropriate HTTP method
- [x] Via the protected \`service()\` method
- [ ] Via the public \`service()\` method
- [ ] The \`doXXX()\` methods are abstract and never invoked

# What is the first stage in the servlet life cycle?
- [ ] initialisation
- [ ] creation
- [x] class loading
- [ ] instantiation
- [ ] requesting

# Which of these lifecycle stage comes first, initialisation or instantiation?
- [ ] initialisation
- [x] instantiation

# Servlets get loaded by the container on server statup?
- [x] true
- [ ] false

# Each servlet gets one of which of the following objects?
- [x] \`ServletConfig\`
- [ ] \`ServletContext\`
- [ ] \`WebConfig\`
- [ ] \`WebContext\`

# The \`destroy()\` lifecycle method will always run for a servlet?
- [ ] true
- [x] false

# Which servlet object is accessible when directly implementing the \`Servlet\` interface?
- [ ] ServletConfig
- [ ] ServletContext
- [ ] neither
- [x] both

# Which HTTP protocol specific \`service()\` method delegates servicing to one of the HTTP \`doXXX()\` methods?
- [ ] both
- [ ] neither
- [x] protected
- [ ] public
`;function mc(k,T,z){const V=k.slice();return V[11]=T[z],V}function gc(k){let T,z,V,te=k[11].name+"",ue,fe,we,Te,W;return we=gp(k[7][0]),{c(){T=ut("label"),z=ut("input"),V=Jt(),ue=dr(te),fe=Jt(),Yt(z,"type","radio"),z.__value=k[11].md,Ci(z,z.__value),we.p(z)},m(be,ve){vc(be,T,ve),Oe(T,z),z.checked=z.__value===k[2],Oe(T,V),Oe(T,ue),Oe(T,fe),Te||(W=hr(z,"change",k[6]),Te=!0)},p(be,ve){ve&4&&(z.checked=z.__value===be[2])},d(be){be&&qi(T),we.r(),Te=!1,W()}}}function Cp(k){let T,z,V,te,ue,fe,we,Te,W,be,ve,Ke,Me,Ge=(k[0]==130?"None":k[0])+"",Ve,Qe,$e,Qt,In,ft=cc(k[3]),Ae=[];for(let ge=0;ge<ft.length;ge+=1)Ae[ge]=gc(mc(k,ft,ge));return{c(){T=ut("main"),z=ut("div"),z.innerHTML="",V=Jt(),te=ut("h3"),te.textContent="Choose quiz",ue=Jt(),fe=ut("div"),we=ut("div");for(let ge=0;ge<Ae.length;ge+=1)Ae[ge].c();Te=Jt(),W=ut("button"),W.textContent="REFRESH QUIZ",be=Jt(),ve=ut("div"),Ke=ut("div"),Me=dr("Limit: "),Ve=dr(Ge),Qe=Jt(),$e=ut("input"),Yt(z,"class","quizdown svelte-hctorx"),Yt($e,"type","range"),Yt($e,"min","20"),Yt($e,"max","130"),Yt($e,"step","10"),Yt(fe,"class","options-container svelte-hctorx")},m(ge,vt){vc(ge,T,vt),Oe(T,z),k[5](z),Oe(T,V),Oe(T,te),Oe(T,ue),Oe(T,fe),Oe(fe,we);for(let Ee=0;Ee<Ae.length;Ee+=1)Ae[Ee]&&Ae[Ee].m(we,null);Oe(fe,Te),Oe(fe,W),Oe(fe,be),Oe(fe,ve),Oe(ve,Ke),Oe(Ke,Me),Oe(Ke,Ve),Oe(ve,Qe),Oe(ve,$e),Ci($e,k[0]),Qt||(In=[hr(W,"click",k[4]),hr($e,"change",k[8]),hr($e,"input",k[8])],Qt=!0)},p(ge,[vt]){if(vt&12){ft=cc(ge[3]);let Ee;for(Ee=0;Ee<ft.length;Ee+=1){const O=mc(ge,ft,Ee);Ae[Ee]?Ae[Ee].p(O,vt):(Ae[Ee]=gc(O),Ae[Ee].c(),Ae[Ee].m(we,null))}for(;Ee<Ae.length;Ee+=1)Ae[Ee].d(1);Ae.length=ft.length}vt&1&&Ge!==(Ge=(ge[0]==130?"None":ge[0])+"")&&vp(Ve,Ge),vt&1&&Ci($e,ge[0])},i:hs,o:hs,d(ge){ge&&qi(T),k[5](null),mp(Ae,ge),Qt=!1,ds(In)}}}function Ip(k,T,z){let V={startOnLoad:!0,shuffleAnswers:!0,shuffleQuestions:!0,nQuestions:void 0,primaryColor:"#ff3e00",secondaryColor:"#f2f2f2",textColor:"black"};const te=Oi+uc+fc+hc+dc+pc,ue=[{name:"First",md:Oi},{name:"HTML",md:uc},{name:"CSS",md:fc},{name:"Javascript",md:hc},{name:"DOM",md:dc},{name:"Servelet",md:pc},{name:"ALL",md:te}];let fe=60,we,Te=Oi;function W(){V.nQuestions=fe==130?void 0:fe,Op.createApp(Te,we,V)}const be=[[]];function ve(Ge){Ii[Ge?"unshift":"push"](()=>{we=Ge,z(1,we)})}function Ke(){Te=this.__value,z(2,Te)}function Me(){fe=yp(this.value),z(0,fe)}return[fe,we,Te,ue,W,ve,Ke,be,Me]}class Mp extends Np{constructor(T){super(),Ap(this,T,Ip,Cp,dp,{})}}new Mp({target:document.getElementById("app")});
