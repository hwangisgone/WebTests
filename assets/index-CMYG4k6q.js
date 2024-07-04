var Nm=Object.defineProperty;var Em=(b,q,w)=>q in b?Nm(b,q,{enumerable:!0,configurable:!0,writable:!0,value:w}):b[q]=w;var Pc=(b,q,w)=>Em(b,typeof q!="symbol"?q+"":q,w);(function(){const q=document.createElement("link").relList;if(q&&q.supports&&q.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))S(M);new MutationObserver(M=>{for(const H of M)if(H.type==="childList")for(const Z of H.addedNodes)Z.tagName==="LINK"&&Z.rel==="modulepreload"&&S(Z)}).observe(document,{childList:!0,subtree:!0});function w(M){const H={};return M.integrity&&(H.integrity=M.integrity),M.referrerPolicy&&(H.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?H.credentials="include":M.crossOrigin==="anonymous"?H.credentials="omit":H.credentials="same-origin",H}function S(M){if(M.ep)return;M.ep=!0;const H=w(M);fetch(M.href,H)}})();function pi(){}function Oh(b){return b()}function kh(){return Object.create(null)}function di(b){b.forEach(Oh)}function Ih(b){return typeof b=="function"}function Vc(b,q){return b!=b?q==q:b!==q||b&&typeof b=="object"||typeof b=="function"}function $m(b){return Object.keys(b).length===0}function An(b,q){b.appendChild(q)}function Qt(b,q,w){b.insertBefore(q,w||null)}function _t(b){b.parentNode&&b.parentNode.removeChild(b)}function Mm(b,q){for(let w=0;w<b.length;w+=1)b[w]&&b[w].d(q)}function Yn(b){return document.createElement(b)}function yr(b){return document.createTextNode(b)}function vt(){return yr(" ")}function pr(b,q,w,S){return b.addEventListener(q,w,S),()=>b.removeEventListener(q,w,S)}function Ht(b,q,w){w==null?b.removeAttribute(q):b.getAttribute(q)!==w&&b.setAttribute(q,w)}function Am(b){let q;return{p(...w){q=w,q.forEach(S=>b.push(S))},r(){q.forEach(w=>b.splice(b.indexOf(w),1))}}}function Lm(b){return b===""?null:+b}function Om(b){return Array.from(b.childNodes)}function Kh(b,q){q=""+q,b.data!==q&&(b.data=q)}function vr(b,q){b.value=q??""}let Wc;function mi(b){Wc=b}const Le=[],Ie=[];let Oe=[];const Hc=[],Im=Promise.resolve();let Qc=!1;function Km(){Qc||(Qc=!0,Im.then(Ph))}function Dc(b){Oe.push(b)}function jc(b){Hc.push(b)}const Rc=new Set;let Ae=0;function Ph(){if(Ae!==0)return;const b=Wc;do{try{for(;Ae<Le.length;){const q=Le[Ae];Ae++,mi(q),Pm(q.$$)}}catch(q){throw Le.length=0,Ae=0,q}for(mi(null),Le.length=0,Ae=0;Ie.length;)Ie.pop()();for(let q=0;q<Oe.length;q+=1){const w=Oe[q];Rc.has(w)||(Rc.add(w),w())}Oe.length=0}while(Le.length);for(;Hc.length;)Hc.pop()();Qc=!1,Rc.clear(),mi(b)}function Pm(b){if(b.fragment!==null){b.update(),di(b.before_update);const q=b.dirty;b.dirty=[-1],b.fragment&&b.fragment.p(b.ctx,q),b.after_update.forEach(Dc)}}function Rm(b){const q=[],w=[];Oe.forEach(S=>b.indexOf(S)===-1?q.push(S):w.push(S)),w.forEach(S=>S()),Oe=q}const dr=new Set;let Hm;function kr(b,q){b&&b.i&&(dr.delete(b),b.i(q))}function Bc(b,q,w,S){if(b&&b.o){if(dr.has(b))return;dr.add(b),Hm.c.push(()=>{dr.delete(b)}),b.o(q)}}function bh(b){return(b==null?void 0:b.length)!==void 0?b:Array.from(b)}function Uc(b,q,w){const S=b.$$.props[q];S!==void 0&&(b.$$.bound[S]=w,w(b.$$.ctx[S]))}function Xc(b){b&&b.c()}function br(b,q,w){const{fragment:S,after_update:M}=b.$$;S&&S.m(q,w),Dc(()=>{const H=b.$$.on_mount.map(Oh).filter(Ih);b.$$.on_destroy?b.$$.on_destroy.push(...H):di(H),b.$$.on_mount=[]}),M.forEach(Dc)}function xr(b,q){const w=b.$$;w.fragment!==null&&(Rm(w.after_update),di(w.on_destroy),w.fragment&&w.fragment.d(q),w.on_destroy=w.fragment=null,w.ctx=[])}function Qm(b,q){b.$$.dirty[0]===-1&&(Le.push(b),Km(),b.$$.dirty.fill(0)),b.$$.dirty[q/31|0]|=1<<q%31}function Yc(b,q,w,S,M,H,Z=null,U=[-1]){const gn=Wc;mi(b);const K=b.$$={fragment:null,ctx:[],props:H,update:pi,not_equal:M,bound:kh(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(q.context||(gn?gn.$$.context:[])),callbacks:kh(),dirty:U,skip_bound:!1,root:q.target||gn.$$.root};Z&&Z(K.root);let on=!1;if(K.ctx=w?w(b,q.props||{},(xn,qn,...Tn)=>{const st=Tn.length?Tn[0]:qn;return K.ctx&&M(K.ctx[xn],K.ctx[xn]=st)&&(!K.skip_bound&&K.bound[xn]&&K.bound[xn](st),on&&Qm(b,xn)),qn}):[],K.update(),on=!0,di(K.before_update),K.fragment=S?S(K.ctx):!1,q.target){if(q.hydrate){const xn=Om(q.target);K.fragment&&K.fragment.l(xn),xn.forEach(_t)}else K.fragment&&K.fragment.c();q.intro&&kr(b.$$.fragment),br(b,q.target,q.anchor),Ph()}mi(gn)}class Jc{constructor(){Pc(this,"$$");Pc(this,"$$set")}$destroy(){xr(this,1),this.$destroy=pi}$on(q,w){if(!Ih(w))return pi;const S=this.$$.callbacks[q]||(this.$$.callbacks[q]=[]);return S.push(w),()=>{const M=S.indexOf(w);M!==-1&&S.splice(M,1)}}$set(q){this.$$set&&!$m(q)&&(this.$$.skip_bound=!0,this.$$set(q),this.$$.skip_bound=!1)}}const Dm="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Dm);var mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Rh={exports:{}};(function(b,q){(function(w,S){b.exports=S()})(mr,function(){function w(){}const S=t=>t;function M(t,n){for(const e in n)t[e]=n[e];return t}function H(t){return t()}function Z(){return Object.create(null)}function U(t){t.forEach(H)}function gn(t){return typeof t=="function"}function K(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function on(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function xn(t){let n;return on(t,e=>n=e)(),n}function qn(t,n,e){t.$$.on_destroy.push(on(n,e))}function Tn(t,n,e,i){if(t){const r=st(t,n,e,i);return t[0](r)}}function st(t,n,e,i){return t[1]&&i?M(e.ctx.slice(),t[1](i(n))):e.ctx}function en(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const c=[],o=Math.max(n.dirty.length,r.length);for(let s=0;s<o;s+=1)c[s]=n.dirty[s]|r[s];return c}return n.dirty|r}return n.dirty}function zn(t,n,e,i,r,c){if(r){const o=st(n,e,i,c);t.p(o,r)}}function Dn(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function Qn(t){return t??""}const Ct=typeof window<"u";let Dt=Ct?()=>window.performance.now():()=>Date.now(),te=Ct?t=>requestAnimationFrame(t):w;const St=new Set;function Ke(t){St.forEach(n=>{n.c(t)||(St.delete(n),n.f())}),St.size!==0&&te(Ke)}function Ln(t){let n;return St.size===0&&te(Ke),{promise:new Promise(e=>{St.add(n={c:t,f:e})}),abort(){St.delete(n)}}}function A(t,n){t.appendChild(n)}function Gn(t,n,e){const i=wr(t);if(!i.getElementById(n)){const r=Q("style");r.id=n,r.textContent=e,Zc(i,r)}}function wr(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function Zc(t,n){A(t.head||t,n)}function G(t,n,e){t.insertBefore(n,e||null)}function X(t){t.parentNode.removeChild(t)}function yi(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Q(t){return document.createElement(t)}function ee(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Vn(t){return document.createTextNode(t)}function wn(){return Vn(" ")}function nt(){return Vn("")}function On(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function N(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function jt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function ie(t,n,e,i){t.style.setProperty(n,e,"")}let vi;function Hh(){if(vi===void 0){vi=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{vi=!0}}return vi}class re{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=Q(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)G(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(X)}}const Tr=new Set;let ki,bi=0;function no(t,n,e,i,r,c,o,s=0){const a=16.666/i;let h=`{
`;for(let f=0;f<=1;f+=a){const y=n+(e-n)*c(f);h+=100*f+`%{${o(y,1-y)}}
`}const l=h+`100% {${o(e,1-e)}}
}`,g=`__svelte_${function(f){let y=5381,d=f.length;for(;d--;)y=(y<<5)-y^f.charCodeAt(d);return y>>>0}(l)}_${s}`,u=wr(t);Tr.add(u);const v=u.__svelte_stylesheet||(u.__svelte_stylesheet=function(f){const y=Q("style");return Zc(wr(f),y),y}(t).sheet),p=u.__svelte_rules||(u.__svelte_rules={});p[g]||(p[g]=!0,v.insertRule(`@keyframes ${g} ${l}`,v.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${g} ${i}ms linear ${r}ms 1 both`,bi+=1,g}function qr(t,n){const e=(t.style.animation||"").split(", "),i=e.filter(n?c=>c.indexOf(n)<0:c=>c.indexOf("__svelte")===-1),r=e.length-i.length;r&&(t.style.animation=i.join(", "),bi-=r,bi||te(()=>{bi||(Tr.forEach(c=>{const o=c.__svelte_stylesheet;let s=o.cssRules.length;for(;s--;)o.deleteRule(s);c.__svelte_rules={}}),Tr.clear())}))}function Qh(t){const n=getComputedStyle(t);if(n.position!=="absolute"&&n.position!=="fixed"){const{width:e,height:i}=n,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=e,t.style.height=i,function(c,o){const s=c.getBoundingClientRect();if(o.left!==s.left||o.top!==s.top){const a=getComputedStyle(c),h=a.transform==="none"?"":a.transform;c.style.transform=`${h} translate(${o.left-s.left}px, ${o.top-s.top}px)`}}(t,r)}}function Nt(t){ki=t}function zr(){if(!ki)throw new Error("Function called outside component initialization");return ki}function to(t){zr().$$.before_update.push(t)}function eo(t){zr().$$.on_mount.push(t)}const Pe=[],ce=[],xi=[],_r=[],Dh=Promise.resolve();let Cr=!1;function kt(t){xi.push(t)}let Sr=!1;const Nr=new Set;function Er(){if(!Sr){Sr=!0;do{for(let t=0;t<Pe.length;t+=1){const n=Pe[t];Nt(n),jh(n.$$)}for(Nt(null),Pe.length=0;ce.length;)ce.pop()();for(let t=0;t<xi.length;t+=1){const n=xi[t];Nr.has(n)||(Nr.add(n),n())}xi.length=0}while(Pe.length);for(;_r.length;)_r.pop()();Cr=!1,Sr=!1,Nr.clear()}}function jh(t){if(t.fragment!==null){t.update(),U(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(kt)}}let Re;function io(t,n,e){t.dispatchEvent(function(i,r,c=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(i,c,!1,r),o}(`intro${e}`))}const wi=new Set;let Bt;function oe(){Bt={r:0,c:[],p:Bt}}function se(){Bt.r||U(Bt.c),Bt=Bt.p}function j(t,n){t&&t.i&&(wi.delete(t),t.i(n))}function Y(t,n,e,i){if(t&&t.o){if(wi.has(t))return;wi.add(t),Bt.c.push(()=>{wi.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}const Bh={duration:0};function Ti(t,n,e){let i,r,c=n(t,e),o=!1,s=0;function a(){i&&qr(t,i)}function h(){const{delay:g=0,duration:u=300,easing:v=S,tick:p=w,css:m}=c||Bh;m&&(i=no(t,0,1,u,g,v,m,s++)),p(0,1);const f=Dt()+g,y=f+u;r&&r.abort(),o=!0,kt(()=>io(t,!0,"start")),r=Ln(d=>{if(o){if(d>=y)return p(1,0),io(t,!0,"end"),a(),o=!1;if(d>=f){const x=v((d-f)/u);p(x,1-x)}}return o})}let l=!1;return{start(){l||(l=!0,qr(t),gn(c)?(c=c(),(Re||(Re=Promise.resolve(),Re.then(()=>{Re=null})),Re).then(h)):h())},invalidate(){l=!1},end(){o&&(a(),o=!1)}}}function ro(t,n){const e=n.token={};function i(c,o,s,a){if(n.token!==e)return;n.resolved=a;let h=n.ctx;s!==void 0&&(h=h.slice(),h[s]=a);const l=c&&(n.current=c)(h);let g=!1;n.block&&(n.blocks?n.blocks.forEach((u,v)=>{v!==o&&u&&(oe(),Y(u,1,1,()=>{n.blocks[v]===u&&(n.blocks[v]=null)}),se())}):n.block.d(1),l.c(),j(l,1),l.m(n.mount(),n.anchor),g=!0),n.block=l,n.blocks&&(n.blocks[o]=l),g&&Er()}if((r=t)&&typeof r=="object"&&typeof r.then=="function"){const c=zr();if(t.then(o=>{Nt(c),i(n.then,1,n.value,o),Nt(null)},o=>{if(Nt(c),i(n.catch,2,n.error,o),Nt(null),!n.hasCatch)throw o}),n.current!==n.pending)return i(n.pending,0),!0}else{if(n.current!==n.then)return i(n.then,1,n.value,t),!0;n.resolved=t}var r}function Uh(t,n){t.f(),function(e,i){e.d(1),i.delete(e.key)}(t,n)}function yn(t){t&&t.c()}function pn(t,n,e,i){const{fragment:r,on_mount:c,on_destroy:o,after_update:s}=t.$$;r&&r.m(n,e),i||kt(()=>{const a=c.map(H).filter(gn);o?o.push(...a):U(a),t.$$.on_mount=[]}),s.forEach(kt)}function dn(t,n){const e=t.$$;e.fragment!==null&&(U(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Xh(t,n){t.$$.dirty[0]===-1&&(Pe.push(t),Cr||(Cr=!0,Dh.then(Er)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Kn(t,n,e,i,r,c,o,s=[-1]){const a=ki;Nt(t);const h=t.$$={fragment:null,ctx:null,props:c,update:w,not_equal:r,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(a?a.$$.context:[])),callbacks:Z(),dirty:s,skip_bound:!1,root:n.target||a.$$.root};o&&o(h.root);let l=!1;if(h.ctx=e?e(t,n.props||{},(g,u,...v)=>{const p=v.length?v[0]:u;return h.ctx&&r(h.ctx[g],h.ctx[g]=p)&&(!h.skip_bound&&h.bound[g]&&h.bound[g](p),l&&Xh(t,g)),u}):[],h.update(),l=!0,U(h.before_update),h.fragment=!!i&&i(h.ctx),n.target){if(n.hydrate){const g=function(u){return Array.from(u.childNodes)}(n.target);h.fragment&&h.fragment.l(g),g.forEach(X)}else h.fragment&&h.fragment.c();n.intro&&j(t.$$.fragment),pn(t,n.target,n.anchor,n.customElement),Er()}Nt(a)}class Pn{$destroy(){dn(this,1),this.$destroy=w}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){var e;this.$$set&&(e=n,Object.keys(e).length!==0)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const ae=[];function Jn(t,n=w){let e;const i=new Set;function r(c){if(K(t,c)&&(t=c,e)){const o=!ae.length;for(const s of i)s[1](),ae.push(s,t);if(o){for(let s=0;s<ae.length;s+=2)ae[s][0](ae[s+1]);ae.length=0}}}return{set:r,update:function(c){r(c(t))},subscribe:function(c,o=w){const s=[c,o];return i.add(s),i.size===1&&(e=n(r)||w),c(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}}}function he(t,n,e){const i=!Array.isArray(t),r=i?[t]:t,c=n.length<2;return{subscribe:Jn(e,o=>{let s=!1;const a=[];let h=0,l=w;const g=()=>{if(h)return;l();const v=n(i?a[0]:a,o);c?o(v):l=gn(v)?v:w},u=r.map((v,p)=>on(v,m=>{a[p]=m,h&=~(1<<p),s&&g()},()=>{h|=1<<p}));return s=!0,g(),function(){U(u),l()}}).subscribe}}function $r(t){const n=t-1;return n*n*n+1}function co(t){return Object.prototype.toString.call(t)==="[object Date]"}function Mr(t,n){if(t===n||t!=t)return()=>t;const e=typeof t;if(e!==typeof n||Array.isArray(t)!==Array.isArray(n))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const i=n.map((r,c)=>Mr(t[c],r));return r=>i.map(c=>c(r))}if(e==="object"){if(!t||!n)throw new Error("Object cannot be null");if(co(t)&&co(n)){t=t.getTime();const c=(n=n.getTime())-t;return o=>new Date(t+o*c)}const i=Object.keys(n),r={};return i.forEach(c=>{r[c]=Mr(t[c],n[c])}),c=>{const o={};return i.forEach(s=>{o[s]=r[s](c)}),o}}if(e==="number"){const i=n-t;return r=>t+r*i}throw new Error(`Cannot interpolate ${e} values`)}function oo(t,n={}){const e=Jn(t);let i,r=t;function c(o,s){if(t==null)return e.set(t=o),Promise.resolve();r=o;let a=i,h=!1,{delay:l=0,duration:g=400,easing:u=S,interpolate:v=Mr}=M(M({},n),s);if(g===0)return a&&(a.abort(),a=null),e.set(t=r),Promise.resolve();const p=Dt()+l;let m;return i=Ln(f=>{if(f<p)return!0;h||(m=v(t,o),typeof g=="function"&&(g=g(t,o)),h=!0),a&&(a.abort(),a=null);const y=f-p;return y>g?(e.set(t=o),!1):(e.set(t=m(u(y/g))),!0)}),i.promise}return{set:c,update:(o,s)=>c(o(r,t),s),subscribe:e.subscribe}}function Fh(t){Gn(t,"svelte-1po3g9q",".progress.svelte-1po3g9q.svelte-1po3g9q{grid-area:auto;height:0.4em;width:100%;position:relative}.progress.svelte-1po3g9q .progress-slider.svelte-1po3g9q{background-color:var(--quizdown-color-primary);height:100%;display:block}")}function Gh(t){let n,e;return{c(){n=Q("div"),e=Q("div"),N(e,"class","progress-slider svelte-1po3g9q"),ie(e,"width",t[0]),N(n,"class","progress svelte-1po3g9q"),N(n,"data-label","")},m(i,r){G(i,n,r),A(n,e)},p(i,[r]){1&r&&ie(e,"width",i[0])},i:w,o:w,d(i){i&&X(n)}}}function Vh(t,n,e){let i,r,{value:c}=n,{max:o}=n;const s=oo(0,{duration:400,easing:$r});return qn(t,s,a=>e(4,r=a)),t.$$set=a=>{"value"in a&&e(2,c=a.value),"max"in a&&e(3,o=a.max)},t.$$.update=()=>{12&t.$$.dirty&&s.set(Math.min(o,c)+.5),24&t.$$.dirty&&e(0,i=String(r/(o+.5)*100)+"%")},[i,s,c,o,r]}class Wh extends Pn{constructor(n){super(),Kn(this,n,Vh,Gh,K,{value:2,max:3},Fh)}}var Yh=function(t){return function(n){return!!n&&typeof n=="object"}(t)&&!function(n){var e=Object.prototype.toString.call(n);return e==="[object RegExp]"||e==="[object Date]"||function(i){return i.$$typeof===Jh}(n)}(t)},Jh=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function He(t,n){return n.clone!==!1&&n.isMergeableObject(t)?le((e=t,Array.isArray(e)?[]:{}),t,n):t;var e}function Zh(t,n,e){return t.concat(n).map(function(i){return He(i,e)})}function so(t){return Object.keys(t).concat(function(n){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter(function(e){return n.propertyIsEnumerable(e)}):[]}(t))}function ao(t,n){try{return n in t}catch{return!1}}function nl(t,n,e){var i={};return e.isMergeableObject(t)&&so(t).forEach(function(r){i[r]=He(t[r],e)}),so(n).forEach(function(r){(function(c,o){return ao(c,o)&&!(Object.hasOwnProperty.call(c,o)&&Object.propertyIsEnumerable.call(c,o))})(t,r)||(ao(t,r)&&e.isMergeableObject(n[r])?i[r]=function(c,o){if(!o.customMerge)return le;var s=o.customMerge(c);return typeof s=="function"?s:le}(r,e)(t[r],n[r],e):i[r]=He(n[r],e))}),i}function le(t,n,e){(e=e||{}).arrayMerge=e.arrayMerge||Zh,e.isMergeableObject=e.isMergeableObject||Yh,e.cloneUnlessOtherwiseSpecified=He;var i=Array.isArray(n);return i===Array.isArray(t)?i?e.arrayMerge(t,n,e):nl(t,n,e):He(n,e)}le.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(e,i){return le(e,i,n)},{})};var tl=le,ho=function(t,n){return(ho=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])})(t,n)};function qi(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}ho(t,n),t.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}var an,_n,ue,vn=function(){return(vn=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function Ar(t,n,e){if(arguments.length===2)for(var i,r=0,c=n.length;r<c;r++)!i&&r in n||(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return t.concat(i||n)}function lo(t){return t.type===_n.literal}function el(t){return t.type===_n.argument}function uo(t){return t.type===_n.number}function go(t){return t.type===_n.date}function fo(t){return t.type===_n.time}function mo(t){return t.type===_n.select}function po(t){return t.type===_n.plural}function il(t){return t.type===_n.pound}function yo(t){return t.type===_n.tag}function vo(t){return!(!t||typeof t!="object"||t.type!==ue.number)}function Lr(t){return!(!t||typeof t!="object"||t.type!==ue.dateTime)}(function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(an||(an={})),function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"}(_n||(_n={})),function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"}(ue||(ue={}));var ko=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,rl=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function cl(t){var n={};return t.replace(rl,function(e){var i=e.length;switch(e[0]){case"G":n.era=i===4?"long":i===5?"narrow":"short";break;case"y":n.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=i===4?"short":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][i-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][i-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][i-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][i-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][i-1];break;case"s":n.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n}var ol=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,Or,bo=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,xo=/^(@+)?(\+|#+)?$/g,sl=/(\*)(0+)|(#+)(0+)|(0+)/g,wo=/^(0+)$/;function To(t){var n={};return t.replace(xo,function(e,i,r){return typeof r!="string"?(n.minimumSignificantDigits=i.length,n.maximumSignificantDigits=i.length):r==="+"?n.minimumSignificantDigits=i.length:i[0]==="#"?n.maximumSignificantDigits=i.length:(n.minimumSignificantDigits=i.length,n.maximumSignificantDigits=i.length+(typeof r=="string"?r.length:0)),""}),n}function qo(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function al(t){var n;if(t[0]==="E"&&t[1]==="E"?(n={notation:"engineering"},t=t.slice(2)):t[0]==="E"&&(n={notation:"scientific"},t=t.slice(1)),n){var e=t.slice(0,2);if(e==="+!"?(n.signDisplay="always",t=t.slice(2)):e==="+?"&&(n.signDisplay="exceptZero",t=t.slice(2)),!wo.test(t))throw new Error("Malformed concise eng/scientific notation");n.minimumIntegerDigits=t.length}return n}function zo(t){var n=qo(t);return n||{}}function hl(t){for(var n={},e=0,i=t;e<i.length;e++){var r=i[e];switch(r.stem){case"percent":case"%":n.style="percent";continue;case"%x100":n.style="percent",n.scale=100;continue;case"currency":n.style="currency",n.currency=r.options[0];continue;case"group-off":case",_":n.useGrouping=!1;continue;case"precision-integer":case".":n.maximumFractionDigits=0;continue;case"measure-unit":case"unit":n.style="unit",n.unit=r.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":case"K":n.notation="compact",n.compactDisplay="short";continue;case"compact-long":case"KK":n.notation="compact",n.compactDisplay="long";continue;case"scientific":n=vn(vn(vn({},n),{notation:"scientific"}),r.options.reduce(function(s,a){return vn(vn({},s),zo(a))},{}));continue;case"engineering":n=vn(vn(vn({},n),{notation:"engineering"}),r.options.reduce(function(s,a){return vn(vn({},s),zo(a))},{}));continue;case"notation-simple":n.notation="standard";continue;case"unit-width-narrow":n.currencyDisplay="narrowSymbol",n.unitDisplay="narrow";continue;case"unit-width-short":n.currencyDisplay="code",n.unitDisplay="short";continue;case"unit-width-full-name":n.currencyDisplay="name",n.unitDisplay="long";continue;case"unit-width-iso-code":n.currencyDisplay="symbol";continue;case"scale":n.scale=parseFloat(r.options[0]);continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(sl,function(s,a,h,l,g,u){if(a)n.minimumIntegerDigits=h.length;else{if(l&&g)throw new Error("We currently do not support maximum integer digits");if(u)throw new Error("We currently do not support exact integer digits")}return""});continue}if(wo.test(r.stem))n.minimumIntegerDigits=r.stem.length;else if(bo.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(bo,function(s,a,h,l,g,u){return h==="*"?n.minimumFractionDigits=a.length:l&&l[0]==="#"?n.maximumFractionDigits=l.length:g&&u?(n.minimumFractionDigits=g.length,n.maximumFractionDigits=g.length+u.length):(n.minimumFractionDigits=a.length,n.maximumFractionDigits=a.length),""}),r.options.length&&(n=vn(vn({},n),To(r.options[0])))}else if(xo.test(r.stem))n=vn(vn({},n),To(r.stem));else{var c=qo(r.stem);c&&(n=vn(vn({},n),c));var o=al(r.stem);o&&(n=vn(vn({},n),o))}}return n}var ll=new RegExp("^"+ko.source+"*"),ul=new RegExp(ko.source+"*$");function un(t,n){return{start:t,end:n}}var gl=!!String.prototype.startsWith,fl=!!String.fromCodePoint,ml=!!Object.fromEntries,pl=!!String.prototype.codePointAt,dl=!!String.prototype.trimStart,yl=!!String.prototype.trimEnd,vl=Number.isSafeInteger?Number.isSafeInteger:function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},Ir=!0;try{Ir=((Or=No("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))===null||Or===void 0?void 0:Or[0])==="a"}catch{Ir=!1}var Kr,_o=gl?function(t,n,e){return t.startsWith(n,e)}:function(t,n,e){return t.slice(e,e+n.length)===n},Pr=fl?String.fromCodePoint:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var e,i="",r=t.length,c=0;r>c;){if((e=t[c++])>1114111)throw RangeError(e+" is not a valid code point");i+=e<65536?String.fromCharCode(e):String.fromCharCode(55296+((e-=65536)>>10),e%1024+56320)}return i},Co=ml?Object.fromEntries:function(t){for(var n={},e=0,i=t;e<i.length;e++){var r=i[e],c=r[0],o=r[1];n[c]=o}return n},So=pl?function(t,n){return t.codePointAt(n)}:function(t,n){var e=t.length;if(!(n<0||n>=e)){var i,r=t.charCodeAt(n);return r<55296||r>56319||n+1===e||(i=t.charCodeAt(n+1))<56320||i>57343?r:i-56320+(r-55296<<10)+65536}},kl=dl?function(t){return t.trimStart()}:function(t){return t.replace(ll,"")},bl=yl?function(t){return t.trimEnd()}:function(t){return t.replace(ul,"")};function No(t,n){return new RegExp(t,n)}if(Ir){var Eo=No("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Kr=function(t,n){var e;return Eo.lastIndex=n,(e=Eo.exec(t)[1])!==null&&e!==void 0?e:""}}else Kr=function(t,n){for(var e=[];;){var i=So(t,n);if(i===void 0||$o(i)||Tl(i))break;e.push(i),n+=i>=65536?2:1}return Pr.apply(void 0,e)};var xl=function(){function t(n,e){e===void 0&&(e={}),this.message=n,this.position={offset:0,line:1,column:1},this.ignoreTag=!!e.ignoreTag,this.requiresOtherClause=!!e.requiresOtherClause,this.shouldParseSkeletons=!!e.shouldParseSkeletons}return t.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(n,e,i){for(var r=[];!this.isEOF();){var c=this.char();if(c===123){if((o=this.parseArgument(n,i)).err)return o;r.push(o.val)}else{if(c===125&&n>0)break;if(c!==35||e!=="plural"&&e!=="selectordinal"){if(c===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error(an.UNMATCHED_CLOSING_TAG,un(this.clonePosition(),this.clonePosition()))}if(c===60&&!this.ignoreTag&&Rr(this.peek()||0)){if((o=this.parseTag(n,e)).err)return o;r.push(o.val)}else{var o;if((o=this.parseLiteral(n,e)).err)return o;r.push(o.val)}}else{var s=this.clonePosition();this.bump(),r.push({type:_n.pound,location:un(s,this.clonePosition())})}}}return{val:r,err:null}},t.prototype.parseTag=function(n,e){var i=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:_n.literal,value:"<"+r+"/>",location:un(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var c=this.parseMessage(n+1,e,!0);if(c.err)return c;var o=c.val,s=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Rr(this.char()))return this.error(an.INVALID_TAG,un(s,this.clonePosition()));var a=this.clonePosition();return r!==this.parseTagName()?this.error(an.UNMATCHED_CLOSING_TAG,un(a,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:_n.tag,value:r,children:o,location:un(i,this.clonePosition())},err:null}:this.error(an.INVALID_TAG,un(s,this.clonePosition())))}return this.error(an.UNCLOSED_TAG,un(i,this.clonePosition()))}return this.error(an.INVALID_TAG,un(i,this.clonePosition()))},t.prototype.parseTagName=function(){var n=this.offset();for(this.bump();!this.isEOF()&&wl(this.char());)this.bump();return this.message.slice(n,this.offset())},t.prototype.parseLiteral=function(n,e){for(var i=this.clonePosition(),r="";;){var c=this.tryParseQuote(e);if(c)r+=c;else{var o=this.tryParseUnquoted(n,e);if(o)r+=o;else{var s=this.tryParseLeftAngleBracket();if(!s)break;r+=s}}}var a=un(i,this.clonePosition());return{val:{type:_n.literal,value:r,location:a},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||this.char()!==60||!this.ignoreTag&&(Rr(n=this.peek()||0)||n===47)?null:(this.bump(),"<");var n},t.prototype.tryParseQuote=function(n){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(n==="plural"||n==="selectordinal")break;return null;default:return null}this.bump();var e=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39){if(this.peek()!==39){this.bump();break}e.push(39),this.bump()}else e.push(i);this.bump()}return Pr.apply(void 0,e)},t.prototype.tryParseUnquoted=function(n,e){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(e==="plural"||e==="selectordinal")||i===125&&n>0?null:(this.bump(),Pr(i))},t.prototype.parseArgument=function(n,e){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE,un(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(an.EMPTY_ARGUMENT,un(i,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error(an.MALFORMED_ARGUMENT,un(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE,un(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:_n.argument,value:r,location:un(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE,un(i,this.clonePosition())):this.parseArgumentOptions(n,e,r,i);default:return this.error(an.MALFORMED_ARGUMENT,un(i,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var n=this.clonePosition(),e=this.offset(),i=Kr(this.message,e),r=e+i.length;return this.bumpTo(r),{value:i,location:un(n,this.clonePosition())}},t.prototype.parseArgumentOptions=function(n,e,i,r){var c,o=this.clonePosition(),s=this.parseIdentifierIfPossible().value,a=this.clonePosition();switch(s){case"":return this.error(an.EXPECT_ARGUMENT_TYPE,un(o,a));case"number":case"date":case"time":this.bumpSpace();var h=null;if(this.bumpIf(",")){this.bumpSpace();var l=this.clonePosition();if((y=this.parseSimpleArgStyleIfPossible()).err)return y;if((v=bl(y.val)).length===0)return this.error(an.EXPECT_ARGUMENT_STYLE,un(this.clonePosition(),this.clonePosition()));h={style:v,styleLocation:un(l,this.clonePosition())}}if((d=this.tryParseArgumentClose(r)).err)return d;var g=un(r,this.clonePosition());if(h&&_o(h==null?void 0:h.style,"::",0)){var u=kl(h.style.slice(2));if(s==="number")return(y=this.parseNumberSkeletonFromString(u,h.styleLocation)).err?y:{val:{type:_n.number,value:i,location:g,style:y.val},err:null};if(u.length===0)return this.error(an.EXPECT_DATE_TIME_SKELETON,g);var v={type:ue.dateTime,pattern:u,location:h.styleLocation,parsedOptions:this.shouldParseSkeletons?cl(u):{}};return{val:{type:s==="date"?_n.date:_n.time,value:i,location:g,style:v},err:null}}return{val:{type:s==="number"?_n.number:s==="date"?_n.date:_n.time,value:i,location:g,style:(c=h==null?void 0:h.style)!==null&&c!==void 0?c:null},err:null};case"plural":case"selectordinal":case"select":var p=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(an.EXPECT_SELECT_ARGUMENT_OPTIONS,un(p,vn({},p)));this.bumpSpace();var m=this.parseIdentifierIfPossible(),f=0;if(s!=="select"&&m.value==="offset"){if(!this.bumpIf(":"))return this.error(an.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,un(this.clonePosition(),this.clonePosition()));var y;if(this.bumpSpace(),(y=this.tryParseDecimalInteger(an.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,an.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return y;this.bumpSpace(),m=this.parseIdentifierIfPossible(),f=y.val}var d,x=this.tryParsePluralOrSelectOptions(n,s,e,m);if(x.err)return x;if((d=this.tryParseArgumentClose(r)).err)return d;var T=un(r,this.clonePosition());return s==="select"?{val:{type:_n.select,value:i,options:Co(x.val),location:T},err:null}:{val:{type:_n.plural,value:i,options:Co(x.val),offset:f,pluralType:s==="plural"?"cardinal":"ordinal",location:T},err:null};default:return this.error(an.INVALID_ARGUMENT_TYPE,un(o,a))}},t.prototype.tryParseArgumentClose=function(n){return this.isEOF()||this.char()!==125?this.error(an.EXPECT_ARGUMENT_CLOSING_BRACE,un(n,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var n=0,e=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump();var i=this.clonePosition();if(!this.bumpUntil("'"))return this.error(an.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,un(i,this.clonePosition()));this.bump();break;case 123:n+=1,this.bump();break;case 125:if(!(n>0))return{val:this.message.slice(e.offset,this.offset()),err:null};n-=1;break;default:this.bump()}return{val:this.message.slice(e.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(n,e){var i=[];try{i=function(r){if(r.length===0)throw new Error("Number skeleton cannot be empty");for(var c=[],o=0,s=r.split(ol).filter(function(v){return v.length>0});o<s.length;o++){var a=s[o].split("/");if(a.length===0)throw new Error("Invalid number skeleton");for(var h=a[0],l=a.slice(1),g=0,u=l;g<u.length;g++)if(u[g].length===0)throw new Error("Invalid number skeleton");c.push({stem:h,options:l})}return c}(n)}catch{return this.error(an.INVALID_NUMBER_SKELETON,e)}return{val:{type:ue.number,tokens:i,location:e,parsedOptions:this.shouldParseSkeletons?hl(i):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(n,e,i,r){for(var c,o=!1,s=[],a=new Set,h=r.value,l=r.location;;){if(h.length===0){var g=this.clonePosition();if(e==="select"||!this.bumpIf("="))break;var u=this.tryParseDecimalInteger(an.EXPECT_PLURAL_ARGUMENT_SELECTOR,an.INVALID_PLURAL_ARGUMENT_SELECTOR);if(u.err)return u;l=un(g,this.clonePosition()),h=this.message.slice(g.offset,this.offset())}if(a.has(h))return this.error(e==="select"?an.DUPLICATE_SELECT_ARGUMENT_SELECTOR:an.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,l);h==="other"&&(o=!0),this.bumpSpace();var v=this.clonePosition();if(!this.bumpIf("{"))return this.error(e==="select"?an.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:an.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,un(this.clonePosition(),this.clonePosition()));var p=this.parseMessage(n+1,e,i);if(p.err)return p;var m=this.tryParseArgumentClose(v);if(m.err)return m;s.push([h,{value:p.val,location:un(v,this.clonePosition())}]),a.add(h),this.bumpSpace(),h=(c=this.parseIdentifierIfPossible()).value,l=c.location}return s.length===0?this.error(e==="select"?an.EXPECT_SELECT_ARGUMENT_SELECTOR:an.EXPECT_PLURAL_ARGUMENT_SELECTOR,un(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!o?this.error(an.MISSING_OTHER_CLAUSE,un(this.clonePosition(),this.clonePosition())):{val:s,err:null}},t.prototype.tryParseDecimalInteger=function(n,e){var i=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var c=!1,o=0;!this.isEOF();){var s=this.char();if(!(s>=48&&s<=57))break;c=!0,o=10*o+(s-48),this.bump()}var a=un(r,this.clonePosition());return c?vl(o*=i)?{val:o,err:null}:this.error(e,a):this.error(n,a)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var n=this.position.offset;if(n>=this.message.length)throw Error("out of bound");var e=So(this.message,n);if(e===void 0)throw Error("Offset "+n+" is at invalid UTF-16 code unit boundary");return e},t.prototype.error=function(n,e){return{val:null,err:{kind:n,message:this.message,location:e}}},t.prototype.bump=function(){if(!this.isEOF()){var n=this.char();n===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=n<65536?1:2)}},t.prototype.bumpIf=function(n){if(_o(this.message,n,this.offset())){for(var e=0;e<n.length;e++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(n){var e=this.offset(),i=this.message.indexOf(n,e);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(n){if(this.offset()>n)throw Error("targetOffset "+n+" must be greater than or equal to the current offset "+this.offset());for(n=Math.min(n,this.message.length);;){var e=this.offset();if(e===n)break;if(e>n)throw Error("targetOffset "+n+" is at invalid UTF-16 code unit boundary");if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&$o(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var n=this.char(),e=this.offset(),i=this.message.charCodeAt(e+(n>=65536?2:1));return i??null},t}();function Rr(t){return t>=97&&t<=122||t>=65&&t<=90}function wl(t){return t===45||t===46||t>=48&&t<=57||t===95||t>=97&&t<=122||t>=65&&t<=90||t==183||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function $o(t){return t>=9&&t<=13||t===32||t===133||t>=8206&&t<=8207||t===8232||t===8233}function Tl(t){return t>=33&&t<=35||t===36||t>=37&&t<=39||t===40||t===41||t===42||t===43||t===44||t===45||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||t===91||t===92||t===93||t===94||t===96||t===123||t===124||t===125||t===126||t===161||t>=162&&t<=165||t===166||t===167||t===169||t===171||t===172||t===174||t===176||t===177||t===182||t===187||t===191||t===215||t===247||t>=8208&&t<=8213||t>=8214&&t<=8215||t===8216||t===8217||t===8218||t>=8219&&t<=8220||t===8221||t===8222||t===8223||t>=8224&&t<=8231||t>=8240&&t<=8248||t===8249||t===8250||t>=8251&&t<=8254||t>=8257&&t<=8259||t===8260||t===8261||t===8262||t>=8263&&t<=8273||t===8274||t===8275||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||t===8608||t>=8609&&t<=8610||t===8611||t>=8612&&t<=8613||t===8614||t>=8615&&t<=8621||t===8622||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||t===8658||t===8659||t===8660||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||t===8968||t===8969||t===8970||t===8971||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||t===9001||t===9002||t>=9003&&t<=9083||t===9084||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||t===9655||t>=9656&&t<=9664||t===9665||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||t===9839||t>=9840&&t<=10087||t===10088||t===10089||t===10090||t===10091||t===10092||t===10093||t===10094||t===10095||t===10096||t===10097||t===10098||t===10099||t===10100||t===10101||t>=10132&&t<=10175||t>=10176&&t<=10180||t===10181||t===10182||t>=10183&&t<=10213||t===10214||t===10215||t===10216||t===10217||t===10218||t===10219||t===10220||t===10221||t===10222||t===10223||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||t===10627||t===10628||t===10629||t===10630||t===10631||t===10632||t===10633||t===10634||t===10635||t===10636||t===10637||t===10638||t===10639||t===10640||t===10641||t===10642||t===10643||t===10644||t===10645||t===10646||t===10647||t===10648||t>=10649&&t<=10711||t===10712||t===10713||t===10714||t===10715||t>=10716&&t<=10747||t===10748||t===10749||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||t===11158||t>=11159&&t<=11263||t>=11776&&t<=11777||t===11778||t===11779||t===11780||t===11781||t>=11782&&t<=11784||t===11785||t===11786||t===11787||t===11788||t===11789||t>=11790&&t<=11798||t===11799||t>=11800&&t<=11801||t===11802||t===11803||t===11804||t===11805||t>=11806&&t<=11807||t===11808||t===11809||t===11810||t===11811||t===11812||t===11813||t===11814||t===11815||t===11816||t===11817||t>=11818&&t<=11822||t===11823||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||t===11840||t===11841||t===11842||t>=11843&&t<=11855||t>=11856&&t<=11857||t===11858||t>=11859&&t<=11903||t>=12289&&t<=12291||t===12296||t===12297||t===12298||t===12299||t===12300||t===12301||t===12302||t===12303||t===12304||t===12305||t>=12306&&t<=12307||t===12308||t===12309||t===12310||t===12311||t===12312||t===12313||t===12314||t===12315||t===12316||t===12317||t>=12318&&t<=12319||t===12320||t===12336||t===64830||t===64831||t>=65093&&t<=65094}function Hr(t){t.forEach(function(n){if(delete n.location,mo(n)||po(n))for(var e in n.options)delete n.options[e].location,Hr(n.options[e].value);else uo(n)&&vo(n.style)||(go(n)||fo(n))&&Lr(n.style)?delete n.style.location:yo(n)&&Hr(n.children)})}function ql(t,n){n===void 0&&(n={}),n=vn({shouldParseSkeletons:!0,requiresOtherClause:!0},n);var e=new xl(t,n).parse();if(e.err){var i=SyntaxError(an[e.err.kind]);throw i.location=e.err.location,i.originalMessage=e.err.message,i}return n!=null&&n.captureLocation||Hr(e.val),e.val}function Qr(t,n){var e=n&&n.cache?n.cache:Cl,i=n&&n.serializer?n.serializer:_l;return(n&&n.strategy?n.strategy:zl)(t,{cache:e,serializer:i})}function Mo(t,n,e,i){var r,c=(r=i)==null||typeof r=="number"||typeof r=="boolean"?i:e(i),o=n.get(c);return o===void 0&&(o=t.call(this,i),n.set(c,o)),o}function Ao(t,n,e){var i=Array.prototype.slice.call(arguments,3),r=e(i),c=n.get(r);return c===void 0&&(c=t.apply(this,i),n.set(r,c)),c}function Dr(t,n,e,i,r){return e.bind(n,t,i,r)}function zl(t,n){return Dr(t,this,t.length===1?Mo:Ao,n.cache.create(),n.serializer)}var _l=function(){return JSON.stringify(arguments)};function zi(){this.cache=Object.create(null)}zi.prototype.has=function(t){return t in this.cache},zi.prototype.get=function(t){return this.cache[t]},zi.prototype.set=function(t,n){this.cache[t]=n};var ge,Cl={create:function(){return new zi}},jr={variadic:function(t,n){return Dr(t,this,Ao,n.cache.create(),n.serializer)},monadic:function(t,n){return Dr(t,this,Mo,n.cache.create(),n.serializer)}};(function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"})(ge||(ge={}));var jn,_i=function(t){function n(e,i,r){var c=t.call(this,e)||this;return c.code=i,c.originalMessage=r,c}return qi(n,t),n.prototype.toString=function(){return"[formatjs Error: "+this.code+"] "+this.message},n}(Error),Lo=function(t){function n(e,i,r,c){return t.call(this,'Invalid values for "'+e+'": "'+i+'". Options are "'+Object.keys(r).join('", "')+'"',ge.INVALID_VALUE,c)||this}return qi(n,t),n}(_i),Sl=function(t){function n(e,i,r){return t.call(this,'Value for "'+e+'" must be of type '+i,ge.INVALID_VALUE,r)||this}return qi(n,t),n}(_i),Nl=function(t){function n(e,i){return t.call(this,'The intl string context variable "'+e+'" was not provided to the string "'+i+'"',ge.MISSING_VALUE,i)||this}return qi(n,t),n}(_i);function El(t){return typeof t=="function"}function Ci(t,n,e,i,r,c,o){if(t.length===1&&lo(t[0]))return[{type:jn.literal,value:t[0].value}];for(var s=[],a=0,h=t;a<h.length;a++){var l=h[a];if(lo(l))s.push({type:jn.literal,value:l.value});else if(il(l))typeof c=="number"&&s.push({type:jn.literal,value:e.getNumberFormat(n).format(c)});else{var g=l.value;if(!r||!(g in r))throw new Nl(g,o);var u=r[g];if(el(l))u&&typeof u!="string"&&typeof u!="number"||(u=typeof u=="string"||typeof u=="number"?String(u):""),s.push({type:typeof u=="string"?jn.literal:jn.object,value:u});else if(go(l)){var v=typeof l.style=="string"?i.date[l.style]:Lr(l.style)?l.style.parsedOptions:void 0;s.push({type:jn.literal,value:e.getDateTimeFormat(n,v).format(u)})}else if(fo(l))v=typeof l.style=="string"?i.time[l.style]:Lr(l.style)?l.style.parsedOptions:void 0,s.push({type:jn.literal,value:e.getDateTimeFormat(n,v).format(u)});else if(uo(l))(v=typeof l.style=="string"?i.number[l.style]:vo(l.style)?l.style.parsedOptions:void 0)&&v.scale&&(u*=v.scale||1),s.push({type:jn.literal,value:e.getNumberFormat(n,v).format(u)});else{if(yo(l)){var p=l.children,m=l.value,f=r[m];if(!El(f))throw new Sl(m,"function",o);var y=f(Ci(p,n,e,i,r,c).map(function(T){return T.value}));Array.isArray(y)||(y=[y]),s.push.apply(s,y.map(function(T){return{type:typeof T=="string"?jn.literal:jn.object,value:T}}))}if(mo(l)){if(!(d=l.options[u]||l.options.other))throw new Lo(l.value,u,Object.keys(l.options),o);s.push.apply(s,Ci(d.value,n,e,i,r))}else if(po(l)){var d;if(!(d=l.options["="+u])){if(!Intl.PluralRules)throw new _i(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ge.MISSING_INTL_API,o);var x=e.getPluralRules(n,{type:l.pluralType}).select(u-(l.offset||0));d=l.options[x]||l.options.other}if(!d)throw new Lo(l.value,u,Object.keys(l.options),o);s.push.apply(s,Ci(d.value,n,e,i,r,u-(l.offset||0)))}}}}return function(T){return T.length<2?T:T.reduce(function(z,_){var D=z[z.length-1];return D&&D.type===jn.literal&&_.type===jn.literal?D.value+=_.value:z.push(_),z},[])}(s)}function $l(t,n){return n?Object.keys(t).reduce(function(e,i){var r,c;return e[i]=(r=t[i],(c=n[i])?vn(vn(vn({},r||{}),c||{}),Object.keys(r).reduce(function(o,s){return o[s]=vn(vn({},r[s]),c[s]||{}),o},{})):r),e},vn({},t)):t}function Br(t){return{create:function(){return{has:function(n){return n in t},get:function(n){return t[n]},set:function(n,e){t[n]=e}}}}}(function(t){t[t.literal=0]="literal",t[t.object=1]="object"})(jn||(jn={}));var Ml=function(){function t(n,e,i,r){var c,o=this;if(e===void 0&&(e=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(s){var a=o.formatToParts(s);if(a.length===1)return a[0].value;var h=a.reduce(function(l,g){return l.length&&g.type===jn.literal&&typeof l[l.length-1]=="string"?l[l.length-1]+=g.value:l.push(g.value),l},[]);return h.length<=1?h[0]||"":h},this.formatToParts=function(s){return Ci(o.ast,o.locales,o.formatters,o.formats,s,void 0,o.message)},this.resolvedOptions=function(){return{locale:Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},typeof n=="string"){if(this.message=n,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=t.__parse(n,{ignoreTag:r==null?void 0:r.ignoreTag})}else this.ast=n;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=$l(t.formats,i),this.locales=e,this.formatters=r&&r.formatters||((c=this.formatterCache)===void 0&&(c={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Qr(function(){for(var s,a=[],h=0;h<arguments.length;h++)a[h]=arguments[h];return new((s=Intl.NumberFormat).bind.apply(s,Ar([void 0],a)))},{cache:Br(c.number),strategy:jr.variadic}),getDateTimeFormat:Qr(function(){for(var s,a=[],h=0;h<arguments.length;h++)a[h]=arguments[h];return new((s=Intl.DateTimeFormat).bind.apply(s,Ar([void 0],a)))},{cache:Br(c.dateTime),strategy:jr.variadic}),getPluralRules:Qr(function(){for(var s,a=[],h=0;h<arguments.length;h++)a[h]=arguments[h];return new((s=Intl.PluralRules).bind.apply(s,Ar([void 0],a)))},{cache:Br(c.pluralRules),strategy:jr.variadic})})}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.__parse=ql,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}();const Et={},Al=(t,n,e)=>e&&(n in Et||(Et[n]={}),t in Et[n]||(Et[n][t]=e),e),Oo=(t,n)=>{if(n==null)return;if(n in Et&&t in Et[n])return Et[n][t];const e=Ue(n);for(let i=0;i<e.length;i++){const r=Ll(e[i],t);if(r)return Al(t,n,r)}};let Ur;const Qe=Jn({});function Io(t){return t in Ur}function Ll(t,n){return Io(t)?function(e,i){if(i in e)return e[i];const r=i.split(".");let c=e;for(let o=0;o<r.length;o++)if(typeof c=="object"){if(o>0){const s=r.slice(o,r.length).join(".");if(s in c){c=c[s];break}}c=c[r[o]]}else c=void 0;return c}(function(e){return Ur[e]||null}(t),n):null}function De(t,...n){delete Et[t],Qe.update(e=>(e[t]=tl.all([e[t]||{},...n]),e))}he([Qe],([t])=>Object.keys(t)),Qe.subscribe(t=>Ur=t);const Si={};function Ko(t){return Si[t]}function Ni(t){return Ue(t).some(n=>{var e;return(e=Ko(n))===null||e===void 0?void 0:e.size})}const je={};function Po(t){if(!Ni(t))return t in je?je[t]:void 0;const n=function(e){return Ue(e).map(i=>{const r=Ko(i);return[i,r?[...r]:[]]}).filter(([,i])=>i.length>0)}(t);return je[t]=Promise.all(n.map(([e,i])=>function(r,c){return Promise.all(c.map(o=>(function(s,a){Si[s].delete(a),Si[s].size===0&&delete Si[s]}(r,o),o().then(s=>s.default||s)))).then(o=>De(r,...o))}(e,i))).then(()=>{if(Ni(t))return Po(t);delete je[t]}),je[t]}/*! *****************************************************************************
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
    ***************************************************************************** */function Ut(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(e[i[r]]=t[i[r]])}return e}const Be={fallbackLocale:null,initialLocale:null,loadingDelay:200,formats:{number:{scientific:{notation:"scientific"},engineering:{notation:"engineering"},compactLong:{notation:"compact",compactDisplay:"long"},compactShort:{notation:"compact",compactDisplay:"short"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},warnOnMissingMessages:!0,ignoreTag:!0};function fe(){return Be}const Xr=Jn(!1);let Fr;const ut=Jn(null);function Ro(t){return t.split("-").map((n,e,i)=>i.slice(0,e+1).join("-")).reverse()}function Ue(t,n=fe().fallbackLocale){const e=Ro(t);return n?[...new Set([...e,...Ro(n)])]:e}function $t(){return Fr}ut.subscribe(t=>{Fr=t,typeof window<"u"&&t!==null&&document.documentElement.setAttribute("lang",t)});const Gr=ut.set;ut.set=t=>{if(function(n){if(n==null)return;const e=Ue(n);for(let i=0;i<e.length;i++){const r=e[i];if(Io(r))return r}}(t)&&Ni(t)){const{loadingDelay:n}=fe();let e;return typeof window<"u"&&$t()!=null&&n?e=window.setTimeout(()=>Xr.set(!0),n):Xr.set(!0),Po(t).then(()=>{Gr(t)}).finally(()=>{clearTimeout(e),Xr.set(!1)})}return Gr(t)},ut.update=t=>Gr(t(Fr));const Ei=t=>{const n=Object.create(null);return e=>{const i=JSON.stringify(e);return i in n?n[i]:n[i]=t(e)}},Xe=(t,n)=>{const{formats:e}=fe();if(t in e&&n in e[t])return e[t][n];throw new Error(`[svelte-i18n] Unknown "${n}" ${t} format.`)},Ol=Ei(t=>{var{locale:n,format:e}=t,i=Ut(t,["locale","format"]);if(n==null)throw new Error('[svelte-i18n] A "locale" must be set to format numbers');return e&&(i=Xe("number",e)),new Intl.NumberFormat(n,i)}),Il=Ei(t=>{var{locale:n,format:e}=t,i=Ut(t,["locale","format"]);if(n==null)throw new Error('[svelte-i18n] A "locale" must be set to format dates');return e?i=Xe("date",e):Object.keys(i).length===0&&(i=Xe("date","short")),new Intl.DateTimeFormat(n,i)}),Kl=Ei(t=>{var{locale:n,format:e}=t,i=Ut(t,["locale","format"]);if(n==null)throw new Error('[svelte-i18n] A "locale" must be set to format time values');return e?i=Xe("time",e):Object.keys(i).length===0&&(i=Xe("time","short")),new Intl.DateTimeFormat(n,i)}),Pl=Ei((t,n=$t())=>new Ml(t,n,fe().formats,{ignoreTag:fe().ignoreTag})),Rl=(t,n={})=>{typeof t=="object"&&(t=(n=t).id);const{values:e,locale:i=$t(),default:r}=n;if(i==null)throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");let c=Oo(t,i);if(c){if(typeof c!="string")return console.warn(`[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof c}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`),c}else fe().warnOnMissingMessages&&console.warn(`[svelte-i18n] The message "${t}" was not found in "${Ue(i).join('", "')}".${Ni($t())?`

Note: there are at least one loader still registered to this locale that wasn't executed.`:""}`),c=r||t;if(!e)return c;let o=c;try{o=Pl(c,i).format(e)}catch(s){console.warn(`[svelte-i18n] Message "${t}" has syntax error:`,s.message)}return o},Hl=(t,n)=>((e={})=>{var{locale:i=$t()}=e,r=Ut(e,["locale"]);return Kl(Object.assign({locale:i},r))})(n).format(t),Ql=(t,n)=>((e={})=>{var{locale:i=$t()}=e,r=Ut(e,["locale"]);return Il(Object.assign({locale:i},r))})(n).format(t),Dl=(t,n)=>((e={})=>{var{locale:i=$t()}=e,r=Ut(e,["locale"]);return Ol(Object.assign({locale:i},r))})(n).format(t),jl=(t,n=$t())=>Oo(t,n),Ho=he([ut,Qe],()=>Rl);he([ut],()=>Hl),he([ut],()=>Ql),he([ut],()=>Dl),he([ut,Qe],()=>jl);var Bl={next:"Next",previous:"Previous",evaluate:"Evaluate",reset:"One more time!",hint:"Show hint",resultsTitle:"Your quiz results",resultsText:"You have answered {points} out of {total} questions correctly!"},Ul={next:"Weiter",previous:"Zurück",evaluate:"Zum Ergebnis",reset:"Noch einmal!",hint:"Tipp anzeigen",resultsTitle:"Ihr Ergebnis",resultsText:"Sie haben {points} von {total} Fragen richtig beantwortet!"},Xl={next:"Suivant",previous:"Précédent",evaluate:"Réponse",reset:"Recommencer!",hint:"Indice",resultsTitle:"Vos résultats",resultsText:"Vous avez répondu correctement à {points} questions sur {total}!"},Fl={next:"Siguiente",previous:"Anterior",evaluate:"Respuesta",reset:"Otra vez!",hint:"Pista",resultsTitle:"Resultados",resultsText:"Ha acertado a {points} preguntas de {total}!"};function Gl(t){De("de",Ul),De("en",Bl),De("fr",Xl),De("es",Fl),function(n){const{formats:e}=n,i=Ut(n,["formats"]),r=n.initialLocale||n.fallbackLocale;Object.assign(Be,i,{initialLocale:r}),e&&("number"in e&&Object.assign(Be.formats.number,e.number),"date"in e&&Object.assign(Be.formats.date,e.date),"time"in e&&Object.assign(Be.formats.time,e.time)),ut.set(r)}({fallbackLocale:"en",initialLocale:t===null?typeof window>"u"?null:window.navigator.language||window.navigator.languages[0]:t})}function Vl(t){Gn(t,"svelte-najif3",".card.svelte-najif3{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);border-radius:0 0 4px 4px}")}function Wl(t){let n,e;const i=t[1].default,r=Tn(i,t,t[0],null);return{c(){n=Q("div"),r&&r.c(),N(n,"class","card svelte-najif3")},m(c,o){G(c,n,o),r&&r.m(n,null),e=!0},p(c,[o]){r&&r.p&&(!e||1&o)&&zn(r,i,c,c[0],e?en(i,c[0],o,null):Dn(c[0]),null)},i(c){e||(j(r,c),e=!0)},o(c){Y(r,c),e=!1},d(c){c&&X(n),r&&r.d(c)}}}function Yl(t,n,e){let{$$slots:i={},$$scope:r}=n;return t.$$set=c=>{"$$scope"in c&&e(0,r=c.$$scope)},[r,i]}class Jl extends Pn{constructor(n){super(),Kn(this,n,Yl,Wl,K,{},Vl)}}function Zl(t){Gn(t,"svelte-15b7mrd",".credits.svelte-15b7mrd a.svelte-15b7mrd{color:gray;text-decoration:none}.credits.svelte-15b7mrd a.svelte-15b7mrd:hover{text-decoration:underline}.credits.svelte-15b7mrd.svelte-15b7mrd{margin-top:1rem;font-size:small;text-align:end;color:lightgray}")}function nu(t){let n,e;return{c(){n=Q("div"),e=Q("a"),e.textContent="quizdown v0.6.0",N(e,"href","https://github.com/bonartm/quizdown-js"),N(e,"class","svelte-15b7mrd"),N(n,"class","credits svelte-15b7mrd")},m(i,r){G(i,n,r),A(n,e)},p:w,i:w,o:w,d(i){i&&X(n)}}}class tu extends Pn{constructor(n){super(),Kn(this,n,null,nu,K,{},Zl)}}function eu(t){let n,e,i,r;const c=t[6].default,o=Tn(c,t,t[5],null);return{c(){n=Q("div"),e=Q("div"),o&&o.c(),kt(()=>t[7].call(e)),ie(n,"height",t[1]+"px")},m(s,a){G(s,n,a),A(n,e),o&&o.m(e,null),i=function(h,l){getComputedStyle(h).position==="static"&&(h.style.position="relative");const g=Q("iframe");g.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),g.setAttribute("aria-hidden","true"),g.tabIndex=-1;const u=Hh();let v;return u?(g.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",v=On(window,"message",p=>{p.source===g.contentWindow&&l()})):(g.src="about:blank",g.onload=()=>{v=On(g.contentWindow,"resize",l)}),A(h,g),()=>{(u||v&&g.contentWindow)&&v(),X(g)}}(e,t[7].bind(e)),r=!0},p(s,[a]){o&&o.p&&(!r||32&a)&&zn(o,c,s,s[5],r?en(c,s[5],a,null):Dn(s[5]),null),(!r||2&a)&&ie(n,"height",s[1]+"px")},i(s){r||(j(o,s),r=!0)},o(s){Y(o,s),r=!1},d(s){s&&X(n),o&&o.d(s),i()}}}function iu(t,n,e){let i,r,{$$slots:c={},$$scope:o}=n,{minHeight:s=0}=n;const a=oo(r,{duration:100});qn(t,a,l=>e(1,i=l));let h=!1;return eo(()=>e(4,h=!0)),t.$$set=l=>{"minHeight"in l&&e(3,s=l.minHeight),"$$scope"in l&&e(5,o=l.$$scope)},t.$$.update=()=>{25&t.$$.dirty&&h&&a.set(Math.max(s,r))},[r,i,a,s,h,o,c,function(){r=this.clientHeight,e(0,r)}]}class ru extends Pn{constructor(n){super(),Kn(this,n,iu,eu,K,{minHeight:3})}}function cu(t,{from:n,to:e},i={}){const r=getComputedStyle(t),c=r.transform==="none"?"":r.transform,[o,s]=r.transformOrigin.split(" ").map(parseFloat),a=n.left+n.width*o/e.width-(e.left+o),h=n.top+n.height*s/e.height-(e.top+s),{delay:l=0,duration:g=v=>120*Math.sqrt(v),easing:u=$r}=i;return{delay:l,duration:gn(g)?g(Math.sqrt(a*a+h*h)):g,easing:u,css:(v,p)=>{const m=p*a,f=p*h,y=v+p*n.width/e.width,d=v+p*n.height/e.height;return`transform: ${c} translate(${m}px, ${f}px) scale(${y}, ${d});`}}}function ou(t){Gn(t,"svelte-1imq117",".dragdroplist.svelte-1imq117.svelte-1imq117{position:relative;padding:0}.list.svelte-1imq117.svelte-1imq117{cursor:grab;z-index:5;display:flex;flex-direction:column}.item.svelte-1imq117.svelte-1imq117{box-sizing:border-box;display:inline-flex;width:100%;margin-bottom:0.5em;border-radius:2px;user-select:none;margin:5px;padding:0;background-color:var(--quizdown-color-secondary);border:3px solid transparent;color:var(--quizdown-color-text)}.item.svelte-1imq117.svelte-1imq117:last-child{margin-bottom:0}.item.svelte-1imq117.svelte-1imq117:not(#grabbed):not(#ghost){z-index:10}.item.svelte-1imq117>.svelte-1imq117{margin:auto auto auto 0}.buttons.svelte-1imq117.svelte-1imq117{width:32px;min-width:32px;margin:auto 0;display:flex;flex-direction:column}.buttons.svelte-1imq117 button.svelte-1imq117{cursor:pointer;width:18px;height:18px;margin:0 auto;padding:0;border:1px solid rgba(0, 0, 0, 0);background-color:inherit}.buttons.svelte-1imq117 button.svelte-1imq117:focus{border:1px solid black}.delete.svelte-1imq117.svelte-1imq117{width:32px}#grabbed.svelte-1imq117.svelte-1imq117{opacity:0}#ghost.svelte-1imq117.svelte-1imq117{pointer-events:none;z-index:-5;position:absolute;top:0;left:0;opacity:0;border:3px solid var(--quizdown-color-primary);background-color:var(--quizdown-color-secondary)}#ghost.svelte-1imq117 .svelte-1imq117{pointer-events:none}#ghost.haunting.svelte-1imq117.svelte-1imq117{z-index:20;opacity:1}")}function Qo(t,n,e){const i=t.slice();return i[28]=n[e],i[30]=e,i}function su(t){let n,e,i=t[28]+"";return{c(){n=Q("p"),e=Vn(i)},m(r,c){G(r,n,c),A(n,e)},p(r,c){1&c&&i!==(i=r[28]+"")&&jt(e,i)},d(r){r&&X(n)}}}function au(t){let n,e,i=t[28].text+"";return{c(){n=Q("p"),e=Vn(i)},m(r,c){G(r,n,c),A(n,e)},p(r,c){1&c&&i!==(i=r[28].text+"")&&jt(e,i)},d(r){r&&X(n)}}}function hu(t){let n,e,i=t[28].html+"";return{c(){n=new re,e=nt(),n.a=e},m(r,c){n.m(i,r,c),G(r,e,c)},p(r,c){1&c&&i!==(i=r[28].html+"")&&n.p(i)},d(r){r&&X(e),r&&n.d()}}}function Do(t){let n,e,i;function r(...c){return t[17](t[30],...c)}return{c(){n=Q("button"),n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>',N(n,"class","svelte-1imq117")},m(c,o){G(c,n,o),e||(i=On(n,"click",r),e=!0)},p(c,o){t=c},d(c){c&&X(n),e=!1,i()}}}function jo(t,n){let e,i,r,c,o,s,a,h,l,g,u,v,p,m,f,y,d,x,T,z,_,D,F,cn,R=w;function J(...W){return n[15](n[30],...W)}function O(...W){return n[16](n[30],...W)}function P(W,rn){return W[28].html?hu:W[28].text?au:su}let E=P(n),B=E(n),C=n[1]&&Do(n);return{key:t,first:null,c(){e=Q("div"),i=Q("div"),r=Q("button"),c=ee("svg"),o=ee("path"),s=ee("path"),h=wn(),l=Q("button"),g=ee("svg"),u=ee("path"),v=ee("path"),m=wn(),f=Q("div"),B.c(),y=wn(),d=Q("div"),C&&C.c(),x=wn(),N(o,"d","M0 0h24v24H0V0z"),N(o,"fill","none"),N(s,"d","M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"),N(c,"xmlns","http://www.w3.org/2000/svg"),N(c,"viewBox","0 0 24 24"),N(c,"width","16px"),N(c,"height","16px"),N(r,"class","up svelte-1imq117"),N(r,"style",a="visibility: "+(n[30]>0?"":"hidden")+";"),N(u,"d","M0 0h24v24H0V0z"),N(u,"fill","none"),N(v,"d","M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"),N(g,"xmlns","http://www.w3.org/2000/svg"),N(g,"viewBox","0 0 24 24"),N(g,"width","16px"),N(g,"height","16px"),N(l,"class","down svelte-1imq117"),N(l,"style",p="visibility: "+(n[30]<n[0].length-1?"":"hidden")+";"),N(i,"class","buttons svelte-1imq117"),N(f,"class","content svelte-1imq117"),N(d,"class","buttons delete svelte-1imq117"),N(e,"id",T=n[3]&&(n[28].id?n[28].id:JSON.stringify(n[28]))==n[3].dataset.id?"grabbed":""),N(e,"class","item svelte-1imq117"),N(e,"data-index",z=n[30]),N(e,"data-id",_=n[28].id?n[28].id:JSON.stringify(n[28])),N(e,"data-graby","0"),this.first=e},m(W,rn){G(W,e,rn),A(e,i),A(i,r),A(r,c),A(c,o),A(c,s),A(i,h),A(i,l),A(l,g),A(g,u),A(g,v),A(e,m),A(e,f),B.m(f,null),A(e,y),A(e,d),C&&C.m(d,null),A(e,x),F||(cn=[On(r,"click",J),On(l,"click",O),On(e,"mousedown",n[18]),On(e,"touchstart",n[19]),On(e,"mouseenter",n[20]),On(e,"touchmove",n[21])],F=!0)},p(W,rn){n=W,1&rn&&a!==(a="visibility: "+(n[30]>0?"":"hidden")+";")&&N(r,"style",a),1&rn&&p!==(p="visibility: "+(n[30]<n[0].length-1?"":"hidden")+";")&&N(l,"style",p),E===(E=P(n))&&B?B.p(n,rn):(B.d(1),B=E(n),B&&(B.c(),B.m(f,null))),n[1]?C?C.p(n,rn):(C=Do(n),C.c(),C.m(d,null)):C&&(C.d(1),C=null),9&rn&&T!==(T=n[3]&&(n[28].id?n[28].id:JSON.stringify(n[28]))==n[3].dataset.id?"grabbed":"")&&N(e,"id",T),1&rn&&z!==(z=n[30])&&N(e,"data-index",z),1&rn&&_!==(_=n[28].id?n[28].id:JSON.stringify(n[28]))&&N(e,"data-id",_)},r(){D=e.getBoundingClientRect()},f(){Qh(e),R()},a(){R(),R=function(W,rn,Mn,In){if(!rn)return w;const Rn=W.getBoundingClientRect();if(rn.left===Rn.left&&rn.right===Rn.right&&rn.top===Rn.top&&rn.bottom===Rn.bottom)return w;const{delay:fn=0,duration:hn=300,easing:Nn=S,start:ln=Dt()+fn,end:Xn=ln+hn,tick:ct=w,css:dt}=Mn(W,{from:rn,to:Rn},In);let ne,It=!0,Kt=!1;function qt(){dt&&qr(W,ne),It=!1}return Ln(yt=>{if(!Kt&&yt>=ln&&(Kt=!0),Kt&&yt>=Xn&&(ct(1,0),qt()),!It)return!1;if(Kt){const Ne=0+1*Nn((yt-ln)/hn);ct(Ne,1-Ne)}return!0}),dt&&(ne=no(W,0,1,hn,fn,Nn,dt)),fn||(Kt=!0),ct(0,1),qt}(e,D,cu,{duration:200})},d(W){W&&X(e),B.d(),C&&C.d(),F=!1,U(cn)}}}function lu(t){let n,e,i,r,c,o,s,a,h,l=[],g=new Map,u=t[0];const v=p=>p[28].id?p[28].id:JSON.stringify(p[28]);for(let p=0;p<u.length;p+=1){let m=Qo(t,u,p),f=v(m);g.set(f,l[p]=jo(f,m))}return{c(){n=Q("div"),e=Q("div"),i=Q("p"),o=wn(),s=Q("div");for(let p=0;p<l.length;p+=1)l[p].c();N(i,"class","svelte-1imq117"),N(e,"id","ghost"),N(e,"class",r=Qn(t[3]?"item haunting":"item")+" svelte-1imq117"),N(e,"style",c="top: "+(t[4]+t[5]-t[6])+"px"),N(s,"class","list svelte-1imq117"),N(n,"class","dragdroplist svelte-1imq117")},m(p,m){G(p,n,m),A(n,e),A(e,i),t[14](e),A(n,o),A(n,s);for(let f=0;f<l.length;f+=1)l[f].m(s,null);a||(h=[On(s,"mousemove",t[22]),On(s,"touchmove",t[23]),On(s,"mouseup",t[24]),On(s,"mouseleave",t[25]),On(s,"touchend",t[26])],a=!0)},p(p,[m]){if(8&m&&r!==(r=Qn(p[3]?"item haunting":"item")+" svelte-1imq117")&&N(e,"class",r),112&m&&c!==(c="top: "+(p[4]+p[5]-p[6])+"px")&&N(e,"style",c),11915&m){u=p[0];for(let f=0;f<l.length;f+=1)l[f].r();l=function(f,y,d,x,T,z,_,D,F,cn,R,J){let O=f.length,P=z.length,E=O;const B={};for(;E--;)B[f[E].key]=E;const C=[],W=new Map,rn=new Map;for(E=P;E--;){const fn=J(T,z,E),hn=d(fn);let Nn=_.get(hn);Nn?Nn.p(fn,y):(Nn=cn(hn,fn),Nn.c()),W.set(hn,C[E]=Nn),hn in B&&rn.set(hn,Math.abs(E-B[hn]))}const Mn=new Set,In=new Set;function Rn(fn){j(fn,1),fn.m(D,R),_.set(fn.key,fn),R=fn.first,P--}for(;O&&P;){const fn=C[P-1],hn=f[O-1],Nn=fn.key,ln=hn.key;fn===hn?(R=fn.first,O--,P--):W.has(ln)?!_.has(Nn)||Mn.has(Nn)?Rn(fn):In.has(ln)?O--:rn.get(Nn)>rn.get(ln)?(In.add(Nn),Rn(fn)):(Mn.add(ln),O--):(F(hn,_),O--)}for(;O--;){const fn=f[O];W.has(fn.key)||F(fn,_)}for(;P;)Rn(C[P-1]);return C}(l,m,v,1,p,u,g,s,Uh,jo,null,Qo);for(let f=0;f<l.length;f+=1)l[f].a()}},i:w,o:w,d(p){p&&X(n),t[14](null);for(let m=0;m<l.length;m+=1)l[m].d();a=!1,U(h)}}}function uu(t,n,e){let i,r,c,{data:o=[]}=n,{removesItems:s=!1}=n,a=0,h=0,l=0;function g(d,x){e(3,r=x),e(3,r.dataset.grabY=String(d),r),e(2,i.innerHTML=r.innerHTML,i),e(5,h=r.getBoundingClientRect().y-d),u(d)}function u(d){r&&(e(4,a=d),e(6,l=i.parentElement.getBoundingClientRect().y))}function v(d){u(d.clientY);let x=i.getRootNode().elementFromPoint(d.clientX,d.clientY);x&&(x=x.closest(".item"),x&&x!=c&&(c=x,p(d,x)))}function p(d,x){let T=x;r&&x!=r&&T.classList.contains("item")&&m(parseInt(r.dataset.index),parseInt(T.dataset.index))}function m(d,x){let T=o[d];e(0,o=[...o.slice(0,d),...o.slice(d+1)]),e(0,o=[...o.slice(0,x),T,...o.slice(x)])}function f(d){e(3,r=null)}function y(d){e(0,o=[...o.slice(0,d),...o.slice(d+1)])}return t.$$set=d=>{"data"in d&&e(0,o=d.data),"removesItems"in d&&e(1,s=d.removesItems)},[o,s,i,r,a,h,l,g,u,v,p,m,f,y,function(d){ce[d?"unshift":"push"](()=>{i=d,e(2,i)})},function(d,x){m(d,d-1)},function(d,x){m(d,d+1)},function(d,x){y(d)},function(d){g(d.clientY,this)},function(d){g(d.touches[0].clientY,this)},function(d){d.stopPropagation(),p(0,d.target)},function(d){d.stopPropagation(),d.preventDefault(),v(d.touches[0])},function(d){d.stopPropagation(),u(d.clientY)},function(d){d.stopPropagation(),u(d.touches[0].clientY)},function(d){d.stopPropagation(),f()},function(d){d.stopPropagation(),f()},function(d){d.stopPropagation(),f(d.touches[0])}]}class gu extends Pn{constructor(n){super(),Kn(this,n,uu,lu,K,{data:0,removesItems:1},ou)}}function fu(t){let n,e,i;function r(o){t[1](o)}let c={};return t[0].answers!==void 0&&(c.data=t[0].answers),n=new gu({props:c}),ce.push(()=>function(o,s,a){const h=o.$$.props[s];h!==void 0&&(o.$$.bound[h]=a,a(o.$$.ctx[h]))}(n,"data",r)),{c(){yn(n.$$.fragment)},m(o,s){pn(n,o,s),i=!0},p(o,[s]){const a={};var h;!e&&1&s&&(e=!0,a.data=o[0].answers,h=()=>e=!1,_r.push(h)),n.$set(a)},i(o){i||(j(n.$$.fragment,o),i=!0)},o(o){Y(n.$$.fragment,o),i=!1},d(o){dn(n,o)}}}function mu(t,n,e){let{question:i}=n;return t.$$set=r=>{"question"in r&&e(0,i=r.question)},t.$$.update=()=>{1&t.$$.dirty&&e(0,i.selected=i.answers.map(r=>r.id),i)},[i,function(r){t.$$.not_equal(i.answers,r)&&(i.answers=r,e(0,i))}]}class pu extends Pn{constructor(n){super(),Kn(this,n,mu,fu,K,{question:0})}}function du(t){Gn(t,"svelte-1m16lsk","fieldset.svelte-1m16lsk.svelte-1m16lsk{border:0}[type='checkbox'].svelte-1m16lsk.svelte-1m16lsk,[type='radio'].svelte-1m16lsk.svelte-1m16lsk{position:absolute;opacity:0}[type='radio'].svelte-1m16lsk+span.svelte-1m16lsk{border-radius:0.5em}[type='checkbox'].svelte-1m16lsk+span.svelte-1m16lsk{border-radius:2px}[type='checkbox'].svelte-1m16lsk+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk+span.svelte-1m16lsk{transition-duration:0.3s;background-color:var(--quizdown-color-secondary);color:var(--quizdown-color-text);display:block;padding:0.5rem;margin:5px;border:3px solid transparent;cursor:pointer}[type='checkbox'].svelte-1m16lsk:hover+span.svelte-1m16lsk,[type='checkbox'].svelte-1m16lsk:focus+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk:hover+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk:focus+span.svelte-1m16lsk{filter:brightness(0.9)}[type='checkbox'].svelte-1m16lsk:checked+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk:checked+span.svelte-1m16lsk{border:3px solid var(--quizdown-color-primary)}")}function Bo(t,n,e){const i=t.slice();return i[4]=n[e],i[6]=e,i}function Uo(t,n,e){const i=t.slice();return i[4]=n[e],i[6]=e,i}function yu(t){let n,e=t[0].answers,i=[];for(let r=0;r<e.length;r+=1)i[r]=Xo(Bo(t,e,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();n=nt()},m(r,c){for(let o=0;o<i.length;o+=1)i[o].m(r,c);G(r,n,c)},p(r,c){if(1&c){let o;for(e=r[0].answers,o=0;o<e.length;o+=1){const s=Bo(r,e,o);i[o]?i[o].p(s,c):(i[o]=Xo(s),i[o].c(),i[o].m(n.parentNode,n))}for(;o<i.length;o+=1)i[o].d(1);i.length=e.length}},d(r){yi(i,r),r&&X(n)}}}function vu(t){let n,e=t[0].answers,i=[];for(let r=0;r<e.length;r+=1)i[r]=Fo(Uo(t,e,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();n=nt()},m(r,c){for(let o=0;o<i.length;o+=1)i[o].m(r,c);G(r,n,c)},p(r,c){if(1&c){let o;for(e=r[0].answers,o=0;o<e.length;o+=1){const s=Uo(r,e,o);i[o]?i[o].p(s,c):(i[o]=Fo(s),i[o].c(),i[o].m(n.parentNode,n))}for(;o<i.length;o+=1)i[o].d(1);i.length=e.length}},d(r){yi(i,r),r&&X(n)}}}function Xo(t){let n,e,i,r,c,o,s,a=t[4].html+"";return{c(){n=Q("label"),e=Q("input"),i=wn(),r=Q("span"),c=wn(),N(e,"type","radio"),e.__value=t[6],e.value=e.__value,N(e,"class","svelte-1m16lsk"),t[2][1].push(e),N(r,"class","svelte-1m16lsk")},m(h,l){G(h,n,l),A(n,e),e.checked=e.__value===t[0].selected[0],A(n,i),A(n,r),r.innerHTML=a,A(n,c),o||(s=On(e,"change",t[3]),o=!0)},p(h,l){1&l&&(e.checked=e.__value===h[0].selected[0]),1&l&&a!==(a=h[4].html+"")&&(r.innerHTML=a)},d(h){h&&X(n),t[2][1].splice(t[2][1].indexOf(e),1),o=!1,s()}}}function Fo(t){let n,e,i,r,c,o,s,a=t[4].html+"";return{c(){n=Q("label"),e=Q("input"),i=wn(),r=Q("span"),c=wn(),N(e,"type","checkbox"),e.__value=t[6],e.value=e.__value,N(e,"class","svelte-1m16lsk"),t[2][0].push(e),N(r,"class","svelte-1m16lsk")},m(h,l){G(h,n,l),A(n,e),e.checked=~t[0].selected.indexOf(e.__value),A(n,i),A(n,r),r.innerHTML=a,A(n,c),o||(s=On(e,"change",t[1]),o=!0)},p(h,l){1&l&&(e.checked=~h[0].selected.indexOf(e.__value)),1&l&&a!==(a=h[4].html+"")&&(r.innerHTML=a)},d(h){h&&X(n),t[2][0].splice(t[2][0].indexOf(e),1),o=!1,s()}}}function ku(t){let n;function e(c,o){return c[0].questionType==="MultipleChoice"?vu:yu}let i=e(t),r=i(t);return{c(){n=Q("fieldset"),r.c(),N(n,"class","svelte-1m16lsk")},m(c,o){G(c,n,o),r.m(n,null)},p(c,[o]){i===(i=e(c))&&r?r.p(c,o):(r.d(1),r=i(c),r&&(r.c(),r.m(n,null)))},i:w,o:w,d(c){c&&X(n),r.d()}}}function bu(t,n,e){let{question:i}=n;const r=[[],[]];return t.$$set=c=>{"question"in c&&e(0,i=c.question)},[i,function(){i.selected=function(c,o,s){const a=new Set;for(let h=0;h<c.length;h+=1)c[h].checked&&a.add(c[h].__value);return s||a.delete(o),Array.from(a)}(r[0],this.__value,this.checked),e(0,i)},r,function(){i.selected[0]=this.__value,e(0,i)}]}class Go extends Pn{constructor(n){super(),Kn(this,n,bu,ku,K,{question:0},du)}}function Vo(t){let n,e=t[0].explanation+"";return{c(){n=Q("p")},m(i,r){G(i,n,r),n.innerHTML=e},p(i,r){1&r&&e!==(e=i[0].explanation+"")&&(n.innerHTML=e)},d(i){i&&X(n)}}}function xu(t){let n,e,i,r,c,o,s,a,h,l,g=t[0].text+"",u=t[0].explanation&&Vo(t);var v=t[2][t[0].questionType];function p(m){return{props:{question:m[0]}}}return v&&(a=new v(p(t))),{c(){n=Q("h3"),e=Vn("Q"),i=Vn(t[1]),r=Vn(": "),c=new re,o=wn(),u&&u.c(),s=wn(),a&&yn(a.$$.fragment),h=nt(),c.a=null},m(m,f){G(m,n,f),A(n,e),A(n,i),A(n,r),c.m(g,n),G(m,o,f),u&&u.m(m,f),G(m,s,f),a&&pn(a,m,f),G(m,h,f),l=!0},p(m,[f]){(!l||2&f)&&jt(i,m[1]),(!l||1&f)&&g!==(g=m[0].text+"")&&c.p(g),m[0].explanation?u?u.p(m,f):(u=Vo(m),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null);const y={};if(1&f&&(y.question=m[0]),v!==(v=m[2][m[0].questionType])){if(a){oe();const d=a;Y(d.$$.fragment,1,0,()=>{dn(d,1)}),se()}v?(a=new v(p(m)),yn(a.$$.fragment),j(a.$$.fragment,1),pn(a,h.parentNode,h)):a=null}else v&&a.$set(y)},i(m){l||(a&&j(a.$$.fragment,m),l=!0)},o(m){a&&Y(a.$$.fragment,m),l=!1},d(m){m&&X(n),m&&X(o),u&&u.d(m),m&&X(s),m&&X(h),a&&dn(a,m)}}}function wu(t,n,e){let{question:i}=n,{n:r}=n,c={Sequence:pu,MultipleChoice:Go,SingleChoice:Go};return t.$$set=o=>{"question"in o&&e(0,i=o.question),"n"in o&&e(1,r=o.n)},[i,r,c]}class Tu extends Pn{constructor(n){super(),Kn(this,n,wu,xu,K,{question:0,n:1})}}function qu(t){Gn(t,"svelte-s6fim0",".row.svelte-s6fim0{padding-top:2em;display:flex}.left.svelte-s6fim0{flex:1;display:flex;justify-content:flex-start}.center.svelte-s6fim0{display:flex;justify-content:center}.right.svelte-s6fim0{flex:1;display:flex;justify-content:flex-end}")}const zu=t=>({}),Wo=t=>({}),_u=t=>({}),Yo=t=>({class:"center svelte-s6fim0"}),Cu=t=>({}),Jo=t=>({});function Su(t){let n,e,i,r,c,o,s;const a=t[1].left,h=Tn(a,t,t[0],Jo),l=t[1].center,g=Tn(l,t,t[0],Yo),u=t[1].right,v=Tn(u,t,t[0],Wo);return{c(){n=Q("div"),e=Q("div"),h&&h.c(),i=wn(),r=Q("div"),g&&g.c(),c=wn(),o=Q("div"),v&&v.c(),N(e,"class","left svelte-s6fim0"),N(r,"class","center svelte-s6fim0"),N(o,"class","right svelte-s6fim0"),N(n,"class","row svelte-s6fim0")},m(p,m){G(p,n,m),A(n,e),h&&h.m(e,null),A(n,i),A(n,r),g&&g.m(r,null),A(n,c),A(n,o),v&&v.m(o,null),s=!0},p(p,[m]){h&&h.p&&(!s||1&m)&&zn(h,a,p,p[0],s?en(a,p[0],m,Cu):Dn(p[0]),Jo),g&&g.p&&(!s||1&m)&&zn(g,l,p,p[0],s?en(l,p[0],m,_u):Dn(p[0]),Yo),v&&v.p&&(!s||1&m)&&zn(v,u,p,p[0],s?en(u,p[0],m,zu):Dn(p[0]),Wo)},i(p){s||(j(h,p),j(g,p),j(v,p),s=!0)},o(p){Y(h,p),Y(g,p),Y(v,p),s=!1},d(p){p&&X(n),h&&h.d(p),g&&g.d(p),v&&v.d(p)}}}function Nu(t,n,e){let{$$slots:i={},$$scope:r}=n;return t.$$set=c=>{"$$scope"in c&&e(0,r=c.$$scope)},[r,i]}class Eu extends Pn{constructor(n){super(),Kn(this,n,Nu,Su,K,{},qu)}}function $u(t){Gn(t,"svelte-14ro1nj","button.svelte-14ro1nj:disabled{background-color:white;filter:grayscale(100%);color:gray;cursor:initial;opacity:50%}button.svelte-14ro1nj{background-color:white;color:var(--quizdown-color-text);padding:0.5rem 1rem;border-radius:4px;border:1px solid transparent;line-height:1;text-align:center;transition:opacity 0.2s ease;text-decoration:none;display:inline-block;cursor:pointer;margin:0.2rem;font-size:1em}button.svelte-14ro1nj:hover:not(:checked):not(:active):not(:disabled){filter:brightness(0.9)}")}function Mu(t){let n,e,i,r;const c=t[4].default,o=Tn(c,t,t[3],null);return{c(){n=Q("button"),o&&o.c(),N(n,"title",t[2]),n.disabled=t[1],N(n,"class","svelte-14ro1nj")},m(s,a){G(s,n,a),o&&o.m(n,null),e=!0,i||(r=On(n,"click",function(){gn(t[0])&&t[0].apply(this,arguments)}),i=!0)},p(s,[a]){t=s,o&&o.p&&(!e||8&a)&&zn(o,c,t,t[3],e?en(c,t[3],a,null):Dn(t[3]),null),(!e||4&a)&&N(n,"title",t[2]),(!e||2&a)&&(n.disabled=t[1])},i(s){e||(j(o,s),e=!0)},o(s){Y(o,s),e=!1},d(s){s&&X(n),o&&o.d(s),i=!1,r()}}}function Au(t,n,e){let{$$slots:i={},$$scope:r}=n,{buttonAction:c=()=>alert("Life has never Svelte better")}=n,{disabled:o=!1}=n,{title:s=""}=n;return t.$$set=a=>{"buttonAction"in a&&e(0,c=a.buttonAction),"disabled"in a&&e(1,o=a.disabled),"title"in a&&e(2,s=a.title),"$$scope"in a&&e(3,r=a.$$scope)},[c,o,s,r,i]}class Fe extends Pn{constructor(n){super(),Kn(this,n,Au,Mu,K,{buttonAction:0,disabled:1,title:2},$u)}}function Vr(t,{delay:n=0,duration:e=400,easing:i=S}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:e,easing:i,css:c=>"opacity: "+c*r}}function Lu(t,{delay:n=0,duration:e=400,easing:i=$r,x:r=0,y:c=0,opacity:o=0}={}){const s=getComputedStyle(t),a=+s.opacity,h=s.transform==="none"?"":s.transform,l=a*(1-o);return{delay:n,duration:e,easing:i,css:(g,u)=>`
			transform: ${h} translate(${(1-g)*r}px, ${(1-g)*c}px);
			opacity: ${a-l*u}`}}/*!
     * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */function Ou(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Iu(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function mn(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{},i=Object.keys(e);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.forEach(function(r){Iu(t,r,e[r])})}return t}function Zo(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,i){var r=[],c=!0,o=!1,s=void 0;try{for(var a,h=e[Symbol.iterator]();!(c=(a=h.next()).done)&&(r.push(a.value),!i||r.length!==i);c=!0);}catch(l){o=!0,s=l}finally{try{c||h.return==null||h.return()}finally{if(o)throw s}}return r}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ns=function(){},Wr={},ts={},es={mark:ns,measure:ns};try{typeof window<"u"&&(Wr=window),typeof document<"u"&&(ts=document),typeof MutationObserver<"u",typeof performance<"u"&&(es=performance)}catch{}var is=(Wr.navigator||{}).userAgent,rs=is===void 0?"":is,$i=Wr,Bn=ts,Yr=es;$i.document;var Jr=!!Bn.documentElement&&!!Bn.head&&typeof Bn.addEventListener=="function"&&typeof Bn.createElement=="function";~rs.indexOf("MSIE")||rs.indexOf("Trident/");var cs="svg-inline--fa",Ku="group",Pu="primary",Ru="secondary",os=$i.FontAwesomeConfig||{};Bn&&typeof Bn.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(t){var n=Zo(t,2),e=n[0],i=n[1],r=function(c){return c===""||c!=="false"&&(c==="true"||c)}(function(c){var o=Bn.querySelector("script["+c+"]");if(o)return o.getAttribute(c)}(e));r!=null&&(os[i]=r)});var Zr=mn({},{familyPrefix:"fa",replacementClass:cs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},os);Zr.autoReplaceSvg||(Zr.observeMutations=!1);var Wn=mn({},Zr);$i.FontAwesomeConfig=Wn;var bt=$i||{};bt.___FONT_AWESOME___||(bt.___FONT_AWESOME___={}),bt.___FONT_AWESOME___.styles||(bt.___FONT_AWESOME___.styles={}),bt.___FONT_AWESOME___.hooks||(bt.___FONT_AWESOME___.hooks={}),bt.___FONT_AWESOME___.shims||(bt.___FONT_AWESOME___.shims=[]);var gt=bt.___FONT_AWESOME___,Hu=[];Jr&&((Bn.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Bn.readyState)||Bn.addEventListener("DOMContentLoaded",function t(){Bn.removeEventListener("DOMContentLoaded",t),Hu.map(function(n){return n()})})),typeof mr<"u"&&mr.process!==void 0&&mr.process.emit,typeof setImmediate>"u"||setImmediate;var me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mi(){for(var t=12,n="";t-- >0;)n+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return n}function ss(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function as(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e],";")},"")}function hs(t){return t.size!==me.size||t.x!==me.x||t.y!==me.y||t.rotate!==me.rotate||t.flipX||t.flipY}function ls(t){var n=t.transform,e=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},c="translate(".concat(32*n.x,", ").concat(32*n.y,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(c," ").concat(o," ").concat(s)},path:{transform:"translate(".concat(i/2*-1," -256)")}}}var nc={x:0,y:0,width:"100%",height:"100%"};function us(t){var n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Qu(t){var n=t.icons,e=n.main,i=n.mask,r=t.prefix,c=t.iconName,o=t.transform,s=t.symbol,a=t.title,h=t.maskId,l=t.titleId,g=t.extra,u=t.watchable,v=u!==void 0&&u,p=i.found?i:e,m=p.width,f=p.height,y=r==="fak",d=y?"":"fa-w-".concat(Math.ceil(m/f*16)),x=[Wn.replacementClass,c?"".concat(Wn.familyPrefix,"-").concat(c):"",d].filter(function(R){return g.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(g.classes).join(" "),T={children:[],attributes:mn({},g.attributes,{"data-prefix":r,"data-icon":c,class:x,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(f)})},z=y&&!~g.classes.indexOf("fa-fw")?{width:"".concat(m/f*16*.0625,"em")}:{};v&&(T.attributes["data-fa-i2svg"]=""),a&&T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(l||Mi())},children:[a]});var _=mn({},T,{prefix:r,iconName:c,main:e,mask:i,maskId:h,transform:o,symbol:s,styles:mn({},z,g.styles)}),D=i.found&&e.found?function(R){var J,O=R.children,P=R.attributes,E=R.main,B=R.mask,C=R.maskId,W=R.transform,rn=E.width,Mn=E.icon,In=B.width,Rn=B.icon,fn=ls({transform:W,containerWidth:In,iconWidth:rn}),hn={tag:"rect",attributes:mn({},nc,{fill:"white"})},Nn=Mn.children?{children:Mn.children.map(us)}:{},ln={tag:"g",attributes:mn({},fn.inner),children:[us(mn({tag:Mn.tag,attributes:mn({},Mn.attributes,fn.path)},Nn))]},Xn={tag:"g",attributes:mn({},fn.outer),children:[ln]},ct="mask-".concat(C||Mi()),dt="clip-".concat(C||Mi()),ne={tag:"mask",attributes:mn({},nc,{id:ct,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[hn,Xn]},It={tag:"defs",children:[{tag:"clipPath",attributes:{id:dt},children:(J=Rn,J.tag==="g"?J.children:[J])},ne]};return O.push(It,{tag:"rect",attributes:mn({fill:"currentColor","clip-path":"url(#".concat(dt,")"),mask:"url(#".concat(ct,")")},nc)}),{children:O,attributes:P}}(_):function(R){var J=R.children,O=R.attributes,P=R.main,E=R.transform,B=as(R.styles);if(B.length>0&&(O.style=B),hs(E)){var C=ls({transform:E,containerWidth:P.width,iconWidth:P.width});J.push({tag:"g",attributes:mn({},C.outer),children:[{tag:"g",attributes:mn({},C.inner),children:[{tag:P.icon.tag,children:P.icon.children,attributes:mn({},P.icon.attributes,C.path)}]}]})}else J.push(P.icon);return{children:J,attributes:O}}(_),F=D.children,cn=D.attributes;return _.children=F,_.attributes=cn,s?function(R){var J=R.prefix,O=R.iconName,P=R.children,E=R.attributes,B=R.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:mn({},E,{id:B===!0?"".concat(J,"-").concat(Wn.familyPrefix,"-").concat(O):B}),children:P}]}]}(_):function(R){var J=R.children,O=R.main,P=R.mask,E=R.attributes,B=R.styles,C=R.transform;if(hs(C)&&O.found&&!P.found){var W={x:O.width/O.height/2,y:.5};E.style=as(mn({},B,{"transform-origin":"".concat(W.x+C.x/16,"em ").concat(W.y+C.y/16,"em")}))}return[{tag:"svg",attributes:E,children:J}]}(_)}Wn.measurePerformance&&Yr&&Yr.mark&&Yr.measure;var tc=function(t,n,e,i){var r,c,o,s=Object.keys(t),a=s.length,h=n;for(e===void 0?(r=1,o=t[s[0]]):(r=0,o=e);r<a;r++)o=h(o,t[c=s[r]],c,t);return o};function gs(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=e.skipHooks,r=i!==void 0&&i,c=Object.keys(n).reduce(function(o,s){var a=n[s];return a.icon?o[a.iconName]=a.icon:o[s]=a,o},{});typeof gt.hooks.addPack!="function"||r?gt.styles[t]=mn({},gt.styles[t]||{},c):gt.hooks.addPack(t,c),t==="fas"&&gs("fa",n)}var fs=gt.styles,Du=gt.shims,ms=function(){var t=function(e){return tc(fs,function(i,r,c){return i[c]=tc(r,e,{}),i},{})};t(function(e,i,r){return i[3]&&(e[i[3]]=r),e}),t(function(e,i,r){var c=i[2];return e[r]=r,c.forEach(function(o){e[o]=r}),e});var n="far"in fs;tc(Du,function(e,i){var r=i[0],c=i[1],o=i[2];return c!=="far"||n||(c="fas"),e[r]={prefix:c,iconName:o},e},{})};function ps(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}function ds(t){var n=t.tag,e=t.attributes,i=e===void 0?{}:e,r=t.children,c=r===void 0?[]:r;return typeof t=="string"?ss(t):"<".concat(n," ").concat(function(o){return Object.keys(o||{}).reduce(function(s,a){return s+"".concat(a,'="').concat(ss(o[a]),'" ')},"").trim()}(i),">").concat(c.map(ds).join(""),"</").concat(n,">")}function ec(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}ms(),gt.styles,ec.prototype=Object.create(Error.prototype),ec.prototype.constructor=ec;var Ai={fill:"currentColor"},ys={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};mn({},Ai,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var ic=mn({},ys,{attributeName:"opacity"});function vs(t){var n=t[0],e=t[1],i=Zo(t.slice(4),1)[0];return{found:!0,width:n,height:e,icon:Array.isArray(i)?{tag:"g",attributes:{class:"".concat(Wn.familyPrefix,"-").concat(Ku)},children:[{tag:"path",attributes:{class:"".concat(Wn.familyPrefix,"-").concat(Ru),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Wn.familyPrefix,"-").concat(Pu),fill:"currentColor",d:i[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:i}}}}mn({},Ai,{cx:"256",cy:"364",r:"28"}),mn({},ys,{attributeName:"r",values:"28;14;28;28;14;28;"}),mn({},ic,{values:"1;0;1;1;0;1;"}),mn({},Ai,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),mn({},ic,{values:"1;0;0;0;0;1;"}),mn({},Ai,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),mn({},ic,{values:"0;0;1;1;0;0;"}),gt.styles,gt.styles;function ju(){Wn.autoAddCss&&!xs&&(function(t){if(t&&Jr){var n=Bn.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=Bn.head.childNodes,i=null,r=e.length-1;r>-1;r--){var c=e[r],o=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=c)}Bn.head.insertBefore(n,i)}}(function(){var t="fa",n=cs,e=Wn.familyPrefix,i=Wn.replacementClass,r=`svg:not(:root).svg-inline--fa {
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
}`;if(e!==t||i!==n){var c=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(c,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(i))}return r}()),xs=!0)}function Bu(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return ds(e)})}}),Object.defineProperty(t,"node",{get:function(){if(Jr){var e=Bn.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ks(t){var n=t.prefix,e=n===void 0?"fa":n,i=t.iconName;if(i)return ps(bs.definitions,e,i)||ps(gt.styles,e,i)}var bs=new(function(){function t(){(function(i,r){if(!(i instanceof r))throw new TypeError("Cannot call a class as a function")})(this,t),this.definitions={}}var n,e;return n=t,(e=[{key:"add",value:function(){for(var i=this,r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];var s=c.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){i.definitions[a]=mn({},i.definitions[a]||{},s[a]),gs(a,s[a]),ms()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,r){var c=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(c).map(function(o){var s=c[o],a=s.prefix,h=s.iconName,l=s.icon;i[a]||(i[a]={}),i[a][h]=l}),i}}])&&Ou(n.prototype,e),t}()),xs=!1,Uu=function(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(n||{}).icon?n:ks(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:ks(r||{})),t(i,mn({},e,{mask:r}))}}(function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.transform,i=e===void 0?me:e,r=n.symbol,c=r!==void 0&&r,o=n.mask,s=o===void 0?null:o,a=n.maskId,h=a===void 0?null:a,l=n.title,g=l===void 0?null:l,u=n.titleId,v=u===void 0?null:u,p=n.classes,m=p===void 0?[]:p,f=n.attributes,y=f===void 0?{}:f,d=n.styles,x=d===void 0?{}:d;if(t){var T=t.prefix,z=t.iconName,_=t.icon;return Bu(mn({type:"icon"},t),function(){return ju(),Wn.autoA11y&&(g?y["aria-labelledby"]="".concat(Wn.replacementClass,"-title-").concat(v||Mi()):(y["aria-hidden"]="true",y.focusable="false")),Qu({icons:{main:vs(_),mask:s?vs(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:z,transform:mn({},me,i),symbol:c,title:g,maskId:h,titleId:v,extra:{attributes:y,styles:x,classes:m}})})}});function Xu(t){let n,e;return{c(){n=new re,e=nt(),n.a=e},m(i,r){n.m(t[0],i,r),G(i,e,r)},p(i,[r]){1&r&&n.p(i[0])},i:w,o:w,d(i){i&&X(e),i&&n.d()}}}function Fu(t,n,e){let{size:i}=n,{spin:r=!1}=n,{name:c}=n,{solid:o=!0}=n,s=o?"fas":"far",a={classes:[i?`fa-${i}`:void 0,r?"fa-spin":void 0]},h="";return to(()=>{const l=Uu({prefix:s,iconName:c},a);e(0,h=l.html[0])}),t.$$set=l=>{"size"in l&&e(1,i=l.size),"spin"in l&&e(2,r=l.spin),"name"in l&&e(3,c=l.name),"solid"in l&&e(4,o=l.solid)},[h,i,r,c,o]}class Xt extends Pn{constructor(n){super(),Kn(this,n,Fu,Xu,K,{size:1,spin:2,name:3,solid:4})}}function Gu(t){Gn(t,"svelte-1nkw7cw",".loading.svelte-1nkw7cw{vertical-align:middle;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}")}function Vu(t){return{c:w,m:w,p:w,i:w,o:w,d:w}}function Wu(t){let n;const e=t[6].default,i=Tn(e,t,t[5],null);return{c(){i&&i.c()},m(r,c){i&&i.m(r,c),n=!0},p(r,c){i&&i.p&&(!n||32&c)&&zn(i,e,r,r[5],n?en(e,r[5],c,null):Dn(r[5]),null)},i(r){n||(j(i,r),n=!0)},o(r){Y(i,r),n=!1},d(r){i&&i.d(r)}}}function Yu(t){let n,e,i;return e=new Xt({props:{name:"circle-notch",spin:!0,size:"2x"}}),{c(){n=Q("div"),yn(e.$$.fragment),N(n,"class","loading svelte-1nkw7cw"),ie(n,"min-height",t[1]+"px")},m(r,c){G(r,n,c),pn(e,n,null),t[7](n),i=!0},p(r,c){(!i||2&c)&&ie(n,"min-height",r[1]+"px")},i(r){i||(j(e.$$.fragment,r),i=!0)},o(r){Y(e.$$.fragment,r),i=!1},d(r){r&&X(n),dn(e),t[7](null)}}}function ws(t){let n,e,i,r={ctx:t,current:null,token:null,hasCatch:!1,pending:Yu,then:Wu,catch:Vu,value:9,blocks:[,,,]};return ro(e=t[4](t[0]),r),{c(){n=nt(),r.block.c()},m(c,o){G(c,n,o),r.block.m(c,r.anchor=o),r.mount=()=>n.parentNode,r.anchor=n,i=!0},p(c,o){t=c,r.ctx=t,1&o&&e!==(e=t[4](t[0]))&&ro(e,r)||function(s,a,h){const l=a.slice(),{resolved:g}=s;s.current===s.then&&(l[s.value]=g),s.current===s.catch&&(l[s.error]=g),s.block.p(l,h)}(r,t,o)},i(c){i||(j(r.block),i=!0)},o(c){for(let o=0;o<3;o+=1)Y(r.blocks[o]);i=!1},d(c){c&&X(n),r.block.d(c),r.token=null,r=null}}}function Ju(t){let n,e,i=t[2],r=ws(t);return{c(){r.c(),n=nt()},m(c,o){r.m(c,o),G(c,n,o),e=!0},p(c,[o]){4&o&&K(i,i=c[2])?(oe(),Y(r,1,1,w),se(),r=ws(c),r.c(),j(r),r.m(n.parentNode,n)):r.p(c,o)},i(c){e||(j(r),e=!0)},o(c){Y(r),e=!1},d(c){c&&X(n),r.d(c)}}}function Zu(t,n,e){let{$$slots:i={},$$scope:r}=n;var c=this&&this.__awaiter||function(l,g,u,v){return new(u||(u=Promise))(function(p,m){function f(x){try{d(v.next(x))}catch(T){m(T)}}function y(x){try{d(v.throw(x))}catch(T){m(T)}}function d(x){var T;x.done?p(x.value):(T=x.value,T instanceof u?T:new u(function(z){z(T)})).then(f,y)}d((v=v.apply(l,g||[])).next())})};let o,{ms:s}=n,{minHeight:a=0}=n,{update:h=!1}=n;return t.$$set=l=>{"ms"in l&&e(0,s=l.ms),"minHeight"in l&&e(1,a=l.minHeight),"update"in l&&e(2,h=l.update),"$$scope"in l&&e(5,r=l.$$scope)},[s,a,h,o,function(l){return c(this,void 0,void 0,function*(){yield new Promise(g=>setTimeout(g,l))})},r,i,function(l){ce[l?"unshift":"push"](()=>{o=l,e(3,o)})}]}class Ts extends Pn{constructor(n){super(),Kn(this,n,Zu,Ju,K,{ms:0,minHeight:1,update:2},Gu)}}function ng(t){Gn(t,"svelte-1sz4kvi","ol.svelte-1sz4kvi.svelte-1sz4kvi{padding-left:0;display:inline-block}.top-list-item.svelte-1sz4kvi.svelte-1sz4kvi{margin-bottom:0.2rem;list-style-type:none;list-style:none}.top-list-item.svelte-1sz4kvi.svelte-1sz4kvi:hover{cursor:pointer;background-color:var(--quizdown-color-secondary)}.top-list-item.svelte-1sz4kvi:hover .list-question.svelte-1sz4kvi{text-decoration:underline}.list-comment.svelte-1sz4kvi.svelte-1sz4kvi{margin-left:2em;list-style-type:initial}")}function qs(t,n,e){const i=t.slice();return i[6]=n[e],i[8]=e,i}function zs(t,n,e){const i=t.slice();return i[9]=n[e],i}function _s(t){let n,e,i,r,c,o=t[6].answers[t[9]].html+"",s=t[6].answers[t[9]].comment+"";return{c(){n=Q("li"),e=Q("i"),i=Vn(`:
                                    `),r=new re,c=wn(),r.a=c,N(n,"class","list-comment svelte-1sz4kvi")},m(a,h){G(a,n,h),A(n,e),e.innerHTML=o,A(n,i),r.m(s,n),A(n,c)},p(a,h){1&h&&o!==(o=a[6].answers[a[9]].html+"")&&(e.innerHTML=o),1&h&&s!==(s=a[6].answers[a[9]].comment+"")&&r.p(s)},d(a){a&&X(n)}}}function Cs(t){let n,e=t[6].answers[t[9]].comment!==""&&_s(t);return{c(){e&&e.c(),n=nt()},m(i,r){e&&e.m(i,r),G(i,n,r)},p(i,r){i[6].answers[i[9]].comment!==""?e?e.p(i,r):(e=_s(i),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(i){e&&e.d(i),i&&X(n)}}}function Ss(t){let n,e,i,r,c,o,s,a,h,l,g=t[4][+t[6].solved]+"",u=t[6].text+"",v=t[6].selected,p=[];for(let f=0;f<v.length;f+=1)p[f]=Cs(zs(t,v,f));function m(){return t[5](t[8])}return{c(){n=Q("li"),e=Q("span"),i=Vn(g),r=wn(),c=new re,o=wn(),s=Q("ol");for(let f=0;f<p.length;f+=1)p[f].c();a=wn(),c.a=null,N(e,"class","list-question svelte-1sz4kvi"),N(s,"class","svelte-1sz4kvi"),N(n,"class","top-list-item svelte-1sz4kvi")},m(f,y){G(f,n,y),A(n,e),A(e,i),A(e,r),c.m(u,e),A(n,o),A(n,s);for(let d=0;d<p.length;d+=1)p[d].m(s,null);A(n,a),h||(l=On(n,"click",m),h=!0)},p(f,y){if(t=f,1&y&&g!==(g=t[4][+t[6].solved]+"")&&jt(i,g),1&y&&u!==(u=t[6].text+"")&&c.p(u),1&y){let d;for(v=t[6].selected,d=0;d<v.length;d+=1){const x=zs(t,v,d);p[d]?p[d].p(x,y):(p[d]=Cs(x),p[d].c(),p[d].m(s,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=v.length}},d(f){f&&X(n),yi(p,f),h=!1,l()}}}function tg(t){let n,e,i,r,c,o,s,a,h,l,g,u=Li(t[2])+"",v=Li(t[0].questions.length)+"";i=new Xt({props:{name:"check-double"}});let p=t[0].questions,m=[];for(let f=0;f<p.length;f+=1)m[f]=Ss(qs(t,p,f));return{c(){n=Q("div"),e=Q("h1"),yn(i.$$.fragment),r=wn(),c=Vn(u),o=Vn("/"),s=Vn(v),a=wn(),h=Q("ol");for(let f=0;f<m.length;f+=1)m[f].c();N(h,"class","svelte-1sz4kvi")},m(f,y){G(f,n,y),A(n,e),pn(i,e,null),A(e,r),A(e,c),A(e,o),A(e,s),A(n,a),A(n,h);for(let d=0;d<m.length;d+=1)m[d].m(h,null);g=!0},p(f,y){if((!g||4&y)&&u!==(u=Li(f[2])+"")&&jt(c,u),(!g||1&y)&&v!==(v=Li(f[0].questions.length)+"")&&jt(s,v),17&y){let d;for(p=f[0].questions,d=0;d<p.length;d+=1){const x=qs(f,p,d);m[d]?m[d].p(x,y):(m[d]=Ss(x),m[d].c(),m[d].m(h,null))}for(;d<m.length;d+=1)m[d].d(1);m.length=p.length}},i(f){g||(j(i.$$.fragment,f),l||kt(()=>{l=Ti(n,Vr,{duration:1e3}),l.start()}),g=!0)},o(f){Y(i.$$.fragment,f),g=!1},d(f){f&&X(n),dn(i),yi(m,f)}}}function eg(t){let n,e,i,r,c,o=t[3]("resultsTitle")+"";return r=new Ts({props:{ms:t[1],minHeight:150,$$slots:{default:[tg]},$$scope:{ctx:t}}}),{c(){n=Q("h3"),e=Vn(o),i=wn(),yn(r.$$.fragment)},m(s,a){G(s,n,a),A(n,e),G(s,i,a),pn(r,s,a),c=!0},p(s,[a]){(!c||8&a)&&o!==(o=s[3]("resultsTitle")+"")&&jt(e,o);const h={};2&a&&(h.ms=s[1]),4101&a&&(h.$$scope={dirty:a,ctx:s}),r.$set(h)},i(s){c||(j(r.$$.fragment,s),c=!0)},o(s){Y(r.$$.fragment,s),c=!1},d(s){s&&X(n),s&&X(i),dn(r,s)}}}function Li(t){return t.toLocaleString("en-US",{minimumIntegerDigits:2})}function ig(t,n,e){let i;qn(t,Ho,s=>e(3,i=s));let{quiz:r}=n,c=800;xn(r.isEvaluated)&&(c=300);let o=0;return to(()=>e(2,o=r.evaluate())),t.$$set=s=>{"quiz"in s&&e(0,r=s.quiz)},[r,c,o,i,["❌","✅"],s=>r.jump(s)]}class rg extends Pn{constructor(n){super(),Kn(this,n,ig,eg,K,{quiz:0},ng)}}function Ns(t){let n,e,i;const r=t[2].default,c=Tn(r,t,t[1],null);return{c(){n=Q("div"),c&&c.c(),N(n,"class","animated")},m(o,s){G(o,n,s),c&&c.m(n,null),i=!0},p(o,s){c&&c.p&&(!i||2&s)&&zn(c,r,o,o[1],i?en(r,o[1],s,null):Dn(o[1]),null)},i(o){i||(j(c,o),e||kt(()=>{e=Ti(n,Vr,{duration:400}),e.start()}),i=!0)},o(o){Y(c,o),i=!1},d(o){o&&X(n),c&&c.d(o)}}}function cg(t){let n,e,i=t[0],r=Ns(t);return{c(){r.c(),n=nt()},m(c,o){r.m(c,o),G(c,n,o),e=!0},p(c,[o]){1&o&&K(i,i=c[0])?(oe(),Y(r,1,1,w),se(),r=Ns(c),r.c(),j(r),r.m(n.parentNode,n)):r.p(c,o)},i(c){e||(j(r),e=!0)},o(c){Y(r),e=!1},d(c){c&&X(n),r.d(c)}}}function og(t,n,e){let{$$slots:i={},$$scope:r}=n,{update:c}=n;return t.$$set=o=>{"update"in o&&e(0,c=o.update),"$$scope"in o&&e(1,r=o.$$scope)},[c,r,i]}class sg extends Pn{constructor(n){super(),Kn(this,n,og,cg,K,{update:0})}}/*!
     * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var ag={prefix:"fas",iconName:"arrow-left",icon:[448,512,[],"f060","M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"]},hg={prefix:"fas",iconName:"arrow-right",icon:[448,512,[],"f061","M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"]},lg={prefix:"fas",iconName:"check-double",icon:[512,512,[],"f560","M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"]},ug={prefix:"fas",iconName:"circle-notch",icon:[512,512,[],"f1ce","M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"]},gg={prefix:"fas",iconName:"redo",icon:[512,512,[],"f01e","M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"]},fg={prefix:"far",iconName:"lightbulb",icon:[352,512,[],"f0eb","M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]};function Es(t){let n,e,i,r;return{c(){n=Q("p"),e=Vn("💡 "),i=new re,i.a=null,N(n,"class","hint")},m(c,o){G(c,n,o),A(n,e),i.m(t[1],n)},p(c,o){2&o&&i.p(c[1])},i(c){c&&(r||kt(()=>{r=Ti(n,Vr,{duration:400}),r.start()}))},o:w,d(c){c&&X(n)}}}function mg(t){let n,e=t[0]&&Es(t);return{c(){e&&e.c(),n=nt()},m(i,r){e&&e.m(i,r),G(i,n,r)},p(i,[r]){i[0]?e?(e.p(i,r),1&r&&j(e,1)):(e=Es(i),e.c(),j(e,1),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},i(i){j(e)},o:w,d(i){e&&e.d(i),i&&X(n)}}}function pg(t,n,e){let{show:i}=n,{hint:r}=n;return t.$$set=c=>{"show"in c&&e(0,i=c.show),"hint"in c&&e(1,r=c.hint)},[i,r]}class dg extends Pn{constructor(n){super(),Kn(this,n,pg,mg,K,{show:0,hint:1})}}function yg(t){Gn(t,"svelte-1s4z0g",".container.svelte-1s4z0g{padding:2px 16px;display:grid;align-items:start;overflow:hidden}")}function vg(t){let n,e;const i=t[1].default,r=Tn(i,t,t[0],null);return{c(){n=Q("div"),r&&r.c(),N(n,"class","container svelte-1s4z0g")},m(c,o){G(c,n,o),r&&r.m(n,null),e=!0},p(c,[o]){r&&r.p&&(!e||1&o)&&zn(r,i,c,c[0],e?en(i,c[0],o,null):Dn(c[0]),null)},i(c){e||(j(r,c),e=!0)},o(c){Y(r,c),e=!1},d(c){c&&X(n),r&&r.d(c)}}}function kg(t,n,e){let{$$slots:i={},$$scope:r}=n;return t.$$set=c=>{"$$scope"in c&&e(0,r=c.$$scope)},[r,i]}class bg extends Pn{constructor(n){super(),Kn(this,n,kg,vg,K,{},yg)}}function xg(t){Gn(t,"svelte-k2exh3",'.hljs{display:block;overflow-x:auto;padding:0.5em;color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:bold}.hljs-number,.hljs-literal,.hljs-variable,.hljs-template-variable,.hljs-tag .hljs-attr{color:#008080}.hljs-string,.hljs-doctag{color:#d14}.hljs-title,.hljs-section,.hljs-selector-id{color:#900;font-weight:bold}.hljs-subst{font-weight:normal}.hljs-type,.hljs-class .hljs-title{color:#458;font-weight:bold}.hljs-tag,.hljs-name,.hljs-attribute{color:#000080;font-weight:normal}.hljs-regexp,.hljs-link{color:#009926}.hljs-symbol,.hljs-bullet{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:bold}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}@font-face{font-family:"KaTeX_AMS";src:url(fonts/KaTeX_AMS-Regular.woff2) format("woff2"), url(fonts/KaTeX_AMS-Regular.woff) format("woff"), url(fonts/KaTeX_AMS-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Caligraphic";src:url(fonts/KaTeX_Caligraphic-Bold.woff2) format("woff2"), url(fonts/KaTeX_Caligraphic-Bold.woff) format("woff"), url(fonts/KaTeX_Caligraphic-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_Caligraphic";src:url(fonts/KaTeX_Caligraphic-Regular.woff2) format("woff2"), url(fonts/KaTeX_Caligraphic-Regular.woff) format("woff"), url(fonts/KaTeX_Caligraphic-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Fraktur";src:url(fonts/KaTeX_Fraktur-Bold.woff2) format("woff2"), url(fonts/KaTeX_Fraktur-Bold.woff) format("woff"), url(fonts/KaTeX_Fraktur-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_Fraktur";src:url(fonts/KaTeX_Fraktur-Regular.woff2) format("woff2"), url(fonts/KaTeX_Fraktur-Regular.woff) format("woff"), url(fonts/KaTeX_Fraktur-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-Bold.woff2) format("woff2"), url(fonts/KaTeX_Main-Bold.woff) format("woff"), url(fonts/KaTeX_Main-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-BoldItalic.woff2) format("woff2"), url(fonts/KaTeX_Main-BoldItalic.woff) format("woff"), url(fonts/KaTeX_Main-BoldItalic.ttf) format("truetype");font-weight:bold;font-style:italic}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-Italic.woff2) format("woff2"), url(fonts/KaTeX_Main-Italic.woff) format("woff"), url(fonts/KaTeX_Main-Italic.ttf) format("truetype");font-weight:normal;font-style:italic}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-Regular.woff2) format("woff2"), url(fonts/KaTeX_Main-Regular.woff) format("woff"), url(fonts/KaTeX_Main-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Math";src:url(fonts/KaTeX_Math-BoldItalic.woff2) format("woff2"), url(fonts/KaTeX_Math-BoldItalic.woff) format("woff"), url(fonts/KaTeX_Math-BoldItalic.ttf) format("truetype");font-weight:bold;font-style:italic}@font-face{font-family:"KaTeX_Math";src:url(fonts/KaTeX_Math-Italic.woff2) format("woff2"), url(fonts/KaTeX_Math-Italic.woff) format("woff"), url(fonts/KaTeX_Math-Italic.ttf) format("truetype");font-weight:normal;font-style:italic}@font-face{font-family:"KaTeX_SansSerif";src:url(fonts/KaTeX_SansSerif-Bold.woff2) format("woff2"), url(fonts/KaTeX_SansSerif-Bold.woff) format("woff"), url(fonts/KaTeX_SansSerif-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_SansSerif";src:url(fonts/KaTeX_SansSerif-Italic.woff2) format("woff2"), url(fonts/KaTeX_SansSerif-Italic.woff) format("woff"), url(fonts/KaTeX_SansSerif-Italic.ttf) format("truetype");font-weight:normal;font-style:italic}@font-face{font-family:"KaTeX_SansSerif";src:url(fonts/KaTeX_SansSerif-Regular.woff2) format("woff2"), url(fonts/KaTeX_SansSerif-Regular.woff) format("woff"), url(fonts/KaTeX_SansSerif-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Script";src:url(fonts/KaTeX_Script-Regular.woff2) format("woff2"), url(fonts/KaTeX_Script-Regular.woff) format("woff"), url(fonts/KaTeX_Script-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size1";src:url(fonts/KaTeX_Size1-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size1-Regular.woff) format("woff"), url(fonts/KaTeX_Size1-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size2";src:url(fonts/KaTeX_Size2-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size2-Regular.woff) format("woff"), url(fonts/KaTeX_Size2-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size3";src:url(fonts/KaTeX_Size3-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size3-Regular.woff) format("woff"), url(fonts/KaTeX_Size3-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size4";src:url(fonts/KaTeX_Size4-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size4-Regular.woff) format("woff"), url(fonts/KaTeX_Size4-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Typewriter";src:url(fonts/KaTeX_Typewriter-Regular.woff2) format("woff2"), url(fonts/KaTeX_Typewriter-Regular.woff) format("woff"), url(fonts/KaTeX_Typewriter-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}.katex{font:normal 1.21em KaTeX_Main, Times New Roman, serif;line-height:1.2;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none !important;border-color:currentColor}.katex .katex-version::after{content:"0.13.11"}.katex .katex-mathml{position:absolute;clip:rect(1px, 1px, 1px, 1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .katex-html>.newline{display:block}.katex .base{position:relative;display:inline-block;white-space:nowrap;width:-webkit-min-content;width:-moz-min-content;width:min-content}.katex .strut{display:inline-block}.katex .textbf{font-weight:bold}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:bold}.katex .boldsymbol{font-family:KaTeX_Math;font-weight:bold;font-style:italic}.katex .amsrm{font-family:KaTeX_AMS}.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:bold}.katex .mathitsf,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{display:inline-table;table-layout:fixed;border-collapse:collapse}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;vertical-align:bottom;position:relative}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px}.katex .vbox{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.katex .hbox{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.katex .thinbox{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:0;max-width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .underline .underline-line,.katex .hline,.katex .hdashline,.katex .rule{min-height:1px}.katex .mspace{display:inline-block}.katex .llap,.katex .rlap,.katex .clap{width:0;position:relative}.katex .llap>.inner,.katex .rlap>.inner,.katex .clap>.inner{position:absolute}.katex .llap>.fix,.katex .rlap>.fix,.katex .clap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .rlap>.inner,.katex .clap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{display:inline-block;border:solid 0;position:relative}.katex .overline .overline-line,.katex .underline .underline-line,.katex .hline{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline{display:inline-block;width:100%;border-bottom-style:dashed}.katex .sqrt>.root{margin-left:0.27777778em;margin-right:-0.55555556em}.katex .sizing.reset-size1.size1,.katex .fontsize-ensurer.reset-size1.size1{font-size:1em}.katex .sizing.reset-size1.size2,.katex .fontsize-ensurer.reset-size1.size2{font-size:1.2em}.katex .sizing.reset-size1.size3,.katex .fontsize-ensurer.reset-size1.size3{font-size:1.4em}.katex .sizing.reset-size1.size4,.katex .fontsize-ensurer.reset-size1.size4{font-size:1.6em}.katex .sizing.reset-size1.size5,.katex .fontsize-ensurer.reset-size1.size5{font-size:1.8em}.katex .sizing.reset-size1.size6,.katex .fontsize-ensurer.reset-size1.size6{font-size:2em}.katex .sizing.reset-size1.size7,.katex .fontsize-ensurer.reset-size1.size7{font-size:2.4em}.katex .sizing.reset-size1.size8,.katex .fontsize-ensurer.reset-size1.size8{font-size:2.88em}.katex .sizing.reset-size1.size9,.katex .fontsize-ensurer.reset-size1.size9{font-size:3.456em}.katex .sizing.reset-size1.size10,.katex .fontsize-ensurer.reset-size1.size10{font-size:4.148em}.katex .sizing.reset-size1.size11,.katex .fontsize-ensurer.reset-size1.size11{font-size:4.976em}.katex .sizing.reset-size2.size1,.katex .fontsize-ensurer.reset-size2.size1{font-size:0.83333333em}.katex .sizing.reset-size2.size2,.katex .fontsize-ensurer.reset-size2.size2{font-size:1em}.katex .sizing.reset-size2.size3,.katex .fontsize-ensurer.reset-size2.size3{font-size:1.16666667em}.katex .sizing.reset-size2.size4,.katex .fontsize-ensurer.reset-size2.size4{font-size:1.33333333em}.katex .sizing.reset-size2.size5,.katex .fontsize-ensurer.reset-size2.size5{font-size:1.5em}.katex .sizing.reset-size2.size6,.katex .fontsize-ensurer.reset-size2.size6{font-size:1.66666667em}.katex .sizing.reset-size2.size7,.katex .fontsize-ensurer.reset-size2.size7{font-size:2em}.katex .sizing.reset-size2.size8,.katex .fontsize-ensurer.reset-size2.size8{font-size:2.4em}.katex .sizing.reset-size2.size9,.katex .fontsize-ensurer.reset-size2.size9{font-size:2.88em}.katex .sizing.reset-size2.size10,.katex .fontsize-ensurer.reset-size2.size10{font-size:3.45666667em}.katex .sizing.reset-size2.size11,.katex .fontsize-ensurer.reset-size2.size11{font-size:4.14666667em}.katex .sizing.reset-size3.size1,.katex .fontsize-ensurer.reset-size3.size1{font-size:0.71428571em}.katex .sizing.reset-size3.size2,.katex .fontsize-ensurer.reset-size3.size2{font-size:0.85714286em}.katex .sizing.reset-size3.size3,.katex .fontsize-ensurer.reset-size3.size3{font-size:1em}.katex .sizing.reset-size3.size4,.katex .fontsize-ensurer.reset-size3.size4{font-size:1.14285714em}.katex .sizing.reset-size3.size5,.katex .fontsize-ensurer.reset-size3.size5{font-size:1.28571429em}.katex .sizing.reset-size3.size6,.katex .fontsize-ensurer.reset-size3.size6{font-size:1.42857143em}.katex .sizing.reset-size3.size7,.katex .fontsize-ensurer.reset-size3.size7{font-size:1.71428571em}.katex .sizing.reset-size3.size8,.katex .fontsize-ensurer.reset-size3.size8{font-size:2.05714286em}.katex .sizing.reset-size3.size9,.katex .fontsize-ensurer.reset-size3.size9{font-size:2.46857143em}.katex .sizing.reset-size3.size10,.katex .fontsize-ensurer.reset-size3.size10{font-size:2.96285714em}.katex .sizing.reset-size3.size11,.katex .fontsize-ensurer.reset-size3.size11{font-size:3.55428571em}.katex .sizing.reset-size4.size1,.katex .fontsize-ensurer.reset-size4.size1{font-size:0.625em}.katex .sizing.reset-size4.size2,.katex .fontsize-ensurer.reset-size4.size2{font-size:0.75em}.katex .sizing.reset-size4.size3,.katex .fontsize-ensurer.reset-size4.size3{font-size:0.875em}.katex .sizing.reset-size4.size4,.katex .fontsize-ensurer.reset-size4.size4{font-size:1em}.katex .sizing.reset-size4.size5,.katex .fontsize-ensurer.reset-size4.size5{font-size:1.125em}.katex .sizing.reset-size4.size6,.katex .fontsize-ensurer.reset-size4.size6{font-size:1.25em}.katex .sizing.reset-size4.size7,.katex .fontsize-ensurer.reset-size4.size7{font-size:1.5em}.katex .sizing.reset-size4.size8,.katex .fontsize-ensurer.reset-size4.size8{font-size:1.8em}.katex .sizing.reset-size4.size9,.katex .fontsize-ensurer.reset-size4.size9{font-size:2.16em}.katex .sizing.reset-size4.size10,.katex .fontsize-ensurer.reset-size4.size10{font-size:2.5925em}.katex .sizing.reset-size4.size11,.katex .fontsize-ensurer.reset-size4.size11{font-size:3.11em}.katex .sizing.reset-size5.size1,.katex .fontsize-ensurer.reset-size5.size1{font-size:0.55555556em}.katex .sizing.reset-size5.size2,.katex .fontsize-ensurer.reset-size5.size2{font-size:0.66666667em}.katex .sizing.reset-size5.size3,.katex .fontsize-ensurer.reset-size5.size3{font-size:0.77777778em}.katex .sizing.reset-size5.size4,.katex .fontsize-ensurer.reset-size5.size4{font-size:0.88888889em}.katex .sizing.reset-size5.size5,.katex .fontsize-ensurer.reset-size5.size5{font-size:1em}.katex .sizing.reset-size5.size6,.katex .fontsize-ensurer.reset-size5.size6{font-size:1.11111111em}.katex .sizing.reset-size5.size7,.katex .fontsize-ensurer.reset-size5.size7{font-size:1.33333333em}.katex .sizing.reset-size5.size8,.katex .fontsize-ensurer.reset-size5.size8{font-size:1.6em}.katex .sizing.reset-size5.size9,.katex .fontsize-ensurer.reset-size5.size9{font-size:1.92em}.katex .sizing.reset-size5.size10,.katex .fontsize-ensurer.reset-size5.size10{font-size:2.30444444em}.katex .sizing.reset-size5.size11,.katex .fontsize-ensurer.reset-size5.size11{font-size:2.76444444em}.katex .sizing.reset-size6.size1,.katex .fontsize-ensurer.reset-size6.size1{font-size:0.5em}.katex .sizing.reset-size6.size2,.katex .fontsize-ensurer.reset-size6.size2{font-size:0.6em}.katex .sizing.reset-size6.size3,.katex .fontsize-ensurer.reset-size6.size3{font-size:0.7em}.katex .sizing.reset-size6.size4,.katex .fontsize-ensurer.reset-size6.size4{font-size:0.8em}.katex .sizing.reset-size6.size5,.katex .fontsize-ensurer.reset-size6.size5{font-size:0.9em}.katex .sizing.reset-size6.size6,.katex .fontsize-ensurer.reset-size6.size6{font-size:1em}.katex .sizing.reset-size6.size7,.katex .fontsize-ensurer.reset-size6.size7{font-size:1.2em}.katex .sizing.reset-size6.size8,.katex .fontsize-ensurer.reset-size6.size8{font-size:1.44em}.katex .sizing.reset-size6.size9,.katex .fontsize-ensurer.reset-size6.size9{font-size:1.728em}.katex .sizing.reset-size6.size10,.katex .fontsize-ensurer.reset-size6.size10{font-size:2.074em}.katex .sizing.reset-size6.size11,.katex .fontsize-ensurer.reset-size6.size11{font-size:2.488em}.katex .sizing.reset-size7.size1,.katex .fontsize-ensurer.reset-size7.size1{font-size:0.41666667em}.katex .sizing.reset-size7.size2,.katex .fontsize-ensurer.reset-size7.size2{font-size:0.5em}.katex .sizing.reset-size7.size3,.katex .fontsize-ensurer.reset-size7.size3{font-size:0.58333333em}.katex .sizing.reset-size7.size4,.katex .fontsize-ensurer.reset-size7.size4{font-size:0.66666667em}.katex .sizing.reset-size7.size5,.katex .fontsize-ensurer.reset-size7.size5{font-size:0.75em}.katex .sizing.reset-size7.size6,.katex .fontsize-ensurer.reset-size7.size6{font-size:0.83333333em}.katex .sizing.reset-size7.size7,.katex .fontsize-ensurer.reset-size7.size7{font-size:1em}.katex .sizing.reset-size7.size8,.katex .fontsize-ensurer.reset-size7.size8{font-size:1.2em}.katex .sizing.reset-size7.size9,.katex .fontsize-ensurer.reset-size7.size9{font-size:1.44em}.katex .sizing.reset-size7.size10,.katex .fontsize-ensurer.reset-size7.size10{font-size:1.72833333em}.katex .sizing.reset-size7.size11,.katex .fontsize-ensurer.reset-size7.size11{font-size:2.07333333em}.katex .sizing.reset-size8.size1,.katex .fontsize-ensurer.reset-size8.size1{font-size:0.34722222em}.katex .sizing.reset-size8.size2,.katex .fontsize-ensurer.reset-size8.size2{font-size:0.41666667em}.katex .sizing.reset-size8.size3,.katex .fontsize-ensurer.reset-size8.size3{font-size:0.48611111em}.katex .sizing.reset-size8.size4,.katex .fontsize-ensurer.reset-size8.size4{font-size:0.55555556em}.katex .sizing.reset-size8.size5,.katex .fontsize-ensurer.reset-size8.size5{font-size:0.625em}.katex .sizing.reset-size8.size6,.katex .fontsize-ensurer.reset-size8.size6{font-size:0.69444444em}.katex .sizing.reset-size8.size7,.katex .fontsize-ensurer.reset-size8.size7{font-size:0.83333333em}.katex .sizing.reset-size8.size8,.katex .fontsize-ensurer.reset-size8.size8{font-size:1em}.katex .sizing.reset-size8.size9,.katex .fontsize-ensurer.reset-size8.size9{font-size:1.2em}.katex .sizing.reset-size8.size10,.katex .fontsize-ensurer.reset-size8.size10{font-size:1.44027778em}.katex .sizing.reset-size8.size11,.katex .fontsize-ensurer.reset-size8.size11{font-size:1.72777778em}.katex .sizing.reset-size9.size1,.katex .fontsize-ensurer.reset-size9.size1{font-size:0.28935185em}.katex .sizing.reset-size9.size2,.katex .fontsize-ensurer.reset-size9.size2{font-size:0.34722222em}.katex .sizing.reset-size9.size3,.katex .fontsize-ensurer.reset-size9.size3{font-size:0.40509259em}.katex .sizing.reset-size9.size4,.katex .fontsize-ensurer.reset-size9.size4{font-size:0.46296296em}.katex .sizing.reset-size9.size5,.katex .fontsize-ensurer.reset-size9.size5{font-size:0.52083333em}.katex .sizing.reset-size9.size6,.katex .fontsize-ensurer.reset-size9.size6{font-size:0.5787037em}.katex .sizing.reset-size9.size7,.katex .fontsize-ensurer.reset-size9.size7{font-size:0.69444444em}.katex .sizing.reset-size9.size8,.katex .fontsize-ensurer.reset-size9.size8{font-size:0.83333333em}.katex .sizing.reset-size9.size9,.katex .fontsize-ensurer.reset-size9.size9{font-size:1em}.katex .sizing.reset-size9.size10,.katex .fontsize-ensurer.reset-size9.size10{font-size:1.20023148em}.katex .sizing.reset-size9.size11,.katex .fontsize-ensurer.reset-size9.size11{font-size:1.43981481em}.katex .sizing.reset-size10.size1,.katex .fontsize-ensurer.reset-size10.size1{font-size:0.24108004em}.katex .sizing.reset-size10.size2,.katex .fontsize-ensurer.reset-size10.size2{font-size:0.28929605em}.katex .sizing.reset-size10.size3,.katex .fontsize-ensurer.reset-size10.size3{font-size:0.33751205em}.katex .sizing.reset-size10.size4,.katex .fontsize-ensurer.reset-size10.size4{font-size:0.38572806em}.katex .sizing.reset-size10.size5,.katex .fontsize-ensurer.reset-size10.size5{font-size:0.43394407em}.katex .sizing.reset-size10.size6,.katex .fontsize-ensurer.reset-size10.size6{font-size:0.48216008em}.katex .sizing.reset-size10.size7,.katex .fontsize-ensurer.reset-size10.size7{font-size:0.57859209em}.katex .sizing.reset-size10.size8,.katex .fontsize-ensurer.reset-size10.size8{font-size:0.69431051em}.katex .sizing.reset-size10.size9,.katex .fontsize-ensurer.reset-size10.size9{font-size:0.83317261em}.katex .sizing.reset-size10.size10,.katex .fontsize-ensurer.reset-size10.size10{font-size:1em}.katex .sizing.reset-size10.size11,.katex .fontsize-ensurer.reset-size10.size11{font-size:1.19961427em}.katex .sizing.reset-size11.size1,.katex .fontsize-ensurer.reset-size11.size1{font-size:0.20096463em}.katex .sizing.reset-size11.size2,.katex .fontsize-ensurer.reset-size11.size2{font-size:0.24115756em}.katex .sizing.reset-size11.size3,.katex .fontsize-ensurer.reset-size11.size3{font-size:0.28135048em}.katex .sizing.reset-size11.size4,.katex .fontsize-ensurer.reset-size11.size4{font-size:0.32154341em}.katex .sizing.reset-size11.size5,.katex .fontsize-ensurer.reset-size11.size5{font-size:0.36173633em}.katex .sizing.reset-size11.size6,.katex .fontsize-ensurer.reset-size11.size6{font-size:0.40192926em}.katex .sizing.reset-size11.size7,.katex .fontsize-ensurer.reset-size11.size7{font-size:0.48231511em}.katex .sizing.reset-size11.size8,.katex .fontsize-ensurer.reset-size11.size8{font-size:0.57877814em}.katex .sizing.reset-size11.size9,.katex .fontsize-ensurer.reset-size11.size9{font-size:0.69453376em}.katex .sizing.reset-size11.size10,.katex .fontsize-ensurer.reset-size11.size10{font-size:0.83360129em}.katex .sizing.reset-size11.size11,.katex .fontsize-ensurer.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:0.12em}.katex .delimcenter{position:relative}.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .op-limits>.vlist-t{text-align:center}.katex .accent>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;min-width:1px}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{display:block;position:absolute;width:100%;height:inherit;fill:currentColor;stroke:currentColor;fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1}.katex svg path{stroke:none}.katex img{border-style:none;min-width:0;min-height:0;max-width:none;max-height:none}.katex .stretchy{width:100%;display:block;position:relative;overflow:hidden}.katex .stretchy::before,.katex .stretchy::after{content:""}.katex .hide-tail{width:100%;position:relative;overflow:hidden}.katex .halfarrow-left{position:absolute;left:0;width:50.2%;overflow:hidden}.katex .halfarrow-right{position:absolute;right:0;width:50.2%;overflow:hidden}.katex .brace-left{position:absolute;left:0;width:25.1%;overflow:hidden}.katex .brace-center{position:absolute;left:25%;width:50%;overflow:hidden}.katex .brace-right{position:absolute;right:0;width:25.1%;overflow:hidden}.katex .x-arrow-pad{padding:0 0.5em}.katex .cd-arrow-pad{padding:0 0.55556em 0 0.27778em}.katex .x-arrow,.katex .mover,.katex .munder{text-align:center}.katex .boxpad{padding:0 0.3em 0 0.3em}.katex .fbox,.katex .fcolorbox{box-sizing:border-box;border:0.04em solid}.katex .cancel-pad{padding:0 0.2em 0 0.2em}.katex .cancel-lap{margin-left:-0.2em;margin-right:-0.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:0.08em}.katex .angl{box-sizing:border-content;border-top:0.049em solid;border-right:0.049em solid;margin-right:0.03889em}.katex .anglpad{padding:0 0.03889em 0 0.03889em}.katex .eqn-num::before{counter-increment:katexEqnNo;content:"(" counter(katexEqnNo) ")"}.katex .mml-eqn-num::before{counter-increment:mmlEqnNo;content:"(" counter(mmlEqnNo) ")"}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{display:inline-block;position:absolute;right:-webkit-calc(50% + 0.3em);right:calc(50% + 0.3em);text-align:left}.katex .cd-label-right{display:inline-block;position:absolute;left:-webkit-calc(50% + 0.3em);left:calc(50% + 0.3em);text-align:right}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{text-align:left;padding-left:2em}body{counter-reset:katexEqnNo mmlEqnNo}svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em}.svg-inline--fa.fa-lg{vertical-align:-0.225em}.svg-inline--fa.fa-w-1{width:0.0625em}.svg-inline--fa.fa-w-2{width:0.125em}.svg-inline--fa.fa-w-3{width:0.1875em}.svg-inline--fa.fa-w-4{width:0.25em}.svg-inline--fa.fa-w-5{width:0.3125em}.svg-inline--fa.fa-w-6{width:0.375em}.svg-inline--fa.fa-w-7{width:0.4375em}.svg-inline--fa.fa-w-8{width:0.5em}.svg-inline--fa.fa-w-9{width:0.5625em}.svg-inline--fa.fa-w-10{width:0.625em}.svg-inline--fa.fa-w-11{width:0.6875em}.svg-inline--fa.fa-w-12{width:0.75em}.svg-inline--fa.fa-w-13{width:0.8125em}.svg-inline--fa.fa-w-14{width:0.875em}.svg-inline--fa.fa-w-15{width:0.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:0.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:0.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-0.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text,.fa-layers-counter{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:0.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:0.75em;vertical-align:-0.0667em}.fa-xs{font-size:0.75em}.fa-sm{font-size:0.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid 0.08em #eee;border-radius:0.1em;padding:0.2em 0.25em 0.15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fas.fa-pull-left,.far.fa-pull-left,.fal.fa-pull-left,.fab.fa-pull-left{margin-right:0.3em}.fa.fa-pull-right,.fas.fa-pull-right,.far.fa-pull-right,.fal.fa-pull-right,.fab.fa-pull-right{margin-left:0.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(1, -1);transform:scale(1, -1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(-1, -1);transform:scale(-1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-flip-both{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color, currentColor);opacity:1;opacity:var(--fa-primary-opacity, 1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color, currentColor);opacity:0.4;opacity:var(--fa-secondary-opacity, 0.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:0.4;opacity:var(--fa-secondary-opacity, 0.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity, 1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:black}.fad.fa-inverse{color:#fff}img{max-height:400px;border-radius:4px;max-width:100%;height:auto}code{padding:0 0.4rem;font-size:85%;color:#333;white-space:pre-wrap;border-radius:4px;padding:0.2em 0.4em;background-color:#f8f8f8;font-family:Consolas, Monaco, monospace}a{color:var(--quizdown-color-primary)}.quizdown-content{padding:1rem;max-width:900px;margin:auto}')}function wg(t){let n,e,i,r;return n=new Tu({props:{question:t[1],n:t[12]+1}}),i=new dg({props:{hint:t[1].hint,show:t[14]}}),{c(){yn(n.$$.fragment),e=wn(),yn(i.$$.fragment)},m(c,o){pn(n,c,o),G(c,e,o),pn(i,c,o),r=!0},p(c,o){const s={};2&o&&(s.question=c[1]),4096&o&&(s.n=c[12]+1),n.$set(s);const a={};2&o&&(a.hint=c[1].hint),16384&o&&(a.show=c[14]),i.$set(a)},i(c){r||(j(n.$$.fragment,c),j(i.$$.fragment,c),r=!0)},o(c){Y(n.$$.fragment,c),Y(i.$$.fragment,c),r=!1},d(c){dn(n,c),c&&X(e),dn(i,c)}}}function Tg(t){let n,e;return n=new rg({props:{quiz:t[0]}}),{c(){yn(n.$$.fragment)},m(i,r){pn(n,i,r),e=!0},p(i,r){const c={};1&r&&(c.quiz=i[0]),n.$set(c)},i(i){e||(j(n.$$.fragment,i),e=!0)},o(i){Y(n.$$.fragment,i),e=!1},d(i){dn(n,i)}}}function qg(t){let n,e,i,r;const c=[Tg,wg],o=[];function s(a,h){return a[13]?0:1}return n=s(t),e=o[n]=c[n](t),{c(){e.c(),i=nt()},m(a,h){o[n].m(a,h),G(a,i,h),r=!0},p(a,h){let l=n;n=s(a),n===l?o[n].p(a,h):(oe(),Y(o[l],1,1,()=>{o[l]=null}),se(),e=o[n],e?e.p(a,h):(e=o[n]=c[n](a),e.c()),j(e,1),e.m(i.parentNode,i))},i(a){r||(j(e),r=!0)},o(a){Y(e),r=!1},d(a){o[n].d(a),a&&X(i)}}}function zg(t){let n,e;return n=new sg({props:{update:t[12],$$slots:{default:[qg]},$$scope:{ctx:t}}}),{c(){yn(n.$$.fragment)},m(i,r){pn(n,i,r),e=!0},p(i,r){const c={};4096&r&&(c.update=i[12]),16805891&r&&(c.$$scope={dirty:r,ctx:i}),n.$set(c)},i(i){e||(j(n.$$.fragment,i),e=!0)},o(i){Y(n.$$.fragment,i),e=!1},d(i){dn(n,i)}}}function _g(t){let n,e;return n=new Xt({props:{name:"lightbulb",solid:!1}}),{c(){yn(n.$$.fragment)},m(i,r){pn(n,i,r),e=!0},p:w,i(i){e||(j(n.$$.fragment,i),e=!0)},o(i){Y(n.$$.fragment,i),e=!1},d(i){dn(n,i)}}}function Cg(t){let n,e;return n=new Fe({props:{slot:"left",title:t[15]("hint"),disabled:!t[1].hint||t[14]||t[13],buttonAction:t[1].enableHint,$$slots:{default:[_g]},$$scope:{ctx:t}}}),{c(){yn(n.$$.fragment)},m(i,r){pn(n,i,r),e=!0},p(i,r){const c={};32768&r&&(c.title=i[15]("hint")),24578&r&&(c.disabled=!i[1].hint||i[14]||i[13]),2&r&&(c.buttonAction=i[1].enableHint),16777216&r&&(c.$$scope={dirty:r,ctx:i}),n.$set(c)},i(i){e||(j(n.$$.fragment,i),e=!0)},o(i){Y(n.$$.fragment,i),e=!1},d(i){dn(n,i)}}}function Sg(t){let n,e;return n=new Xt({props:{name:"arrow-left",size:"lg"}}),{c(){yn(n.$$.fragment)},m(i,r){pn(n,i,r),e=!0},p:w,i(i){e||(j(n.$$.fragment,i),e=!0)},o(i){Y(n.$$.fragment,i),e=!1},d(i){dn(n,i)}}}function Ng(t){let n,e;return n=new Xt({props:{name:"arrow-right",size:"lg"}}),{c(){yn(n.$$.fragment)},m(i,r){pn(n,i,r),e=!0},p:w,i(i){e||(j(n.$$.fragment,i),e=!0)},o(i){Y(n.$$.fragment,i),e=!1},d(i){dn(n,i)}}}function $s(t){let n,e,i,r;return e=new Fe({props:{disabled:!(t[18]||t[19])||t[13],title:t[15]("evaluate"),buttonAction:t[21],$$slots:{default:[Eg]},$$scope:{ctx:t}}}),{c(){n=Q("div"),yn(e.$$.fragment)},m(c,o){G(c,n,o),pn(e,n,null),r=!0},p(c,o){const s={};794624&o&&(s.disabled=!(c[18]||c[19])||c[13]),32768&o&&(s.title=c[15]("evaluate")),1&o&&(s.buttonAction=c[21]),16777216&o&&(s.$$scope={dirty:o,ctx:c}),e.$set(s)},i(c){r||(j(e.$$.fragment,c),i||kt(()=>{i=Ti(n,Lu,{x:200,duration:500}),i.start()}),r=!0)},o(c){Y(e.$$.fragment,c),r=!1},d(c){c&&X(n),dn(e)}}}function Eg(t){let n,e;return n=new Xt({props:{name:"check-double",size:"lg"}}),{c(){yn(n.$$.fragment)},m(i,r){pn(n,i,r),e=!0},p:w,i(i){e||(j(n.$$.fragment,i),e=!0)},o(i){Y(n.$$.fragment,i),e=!1},d(i){dn(n,i)}}}function $g(t){let n,e,i,r,c,o;n=new Fe({props:{title:t[15]("previous"),disabled:t[16]||t[13]||t[17],buttonAction:t[0].previous,$$slots:{default:[Sg]},$$scope:{ctx:t}}}),i=new Fe({props:{disabled:t[18]||t[13]||t[17],buttonAction:t[0].next,title:t[15]("next"),$$slots:{default:[Ng]},$$scope:{ctx:t}}});let s=(t[18]||t[19])&&$s(t);return{c(){yn(n.$$.fragment),e=wn(),yn(i.$$.fragment),r=wn(),s&&s.c(),c=nt()},m(a,h){pn(n,a,h),G(a,e,h),pn(i,a,h),G(a,r,h),s&&s.m(a,h),G(a,c,h),o=!0},p(a,h){const l={};32768&h&&(l.title=a[15]("previous")),204800&h&&(l.disabled=a[16]||a[13]||a[17]),1&h&&(l.buttonAction=a[0].previous),16777216&h&&(l.$$scope={dirty:h,ctx:a}),n.$set(l);const g={};401408&h&&(g.disabled=a[18]||a[13]||a[17]),1&h&&(g.buttonAction=a[0].next),32768&h&&(g.title=a[15]("next")),16777216&h&&(g.$$scope={dirty:h,ctx:a}),i.$set(g),a[18]||a[19]?s?(s.p(a,h),786432&h&&j(s,1)):(s=$s(a),s.c(),j(s,1),s.m(c.parentNode,c)):s&&(oe(),Y(s,1,1,()=>{s=null}),se())},i(a){o||(j(n.$$.fragment,a),j(i.$$.fragment,a),j(s),o=!0)},o(a){Y(n.$$.fragment,a),Y(i.$$.fragment,a),Y(s),o=!1},d(a){dn(n,a),a&&X(e),dn(i,a),a&&X(r),s&&s.d(a),a&&X(c)}}}function Mg(t){let n,e;return n=new Xt({props:{name:"redo"}}),{c(){yn(n.$$.fragment)},m(i,r){pn(n,i,r),e=!0},p:w,i(i){e||(j(n.$$.fragment,i),e=!0)},o(i){Y(n.$$.fragment,i),e=!1},d(i){dn(n,i)}}}function Ag(t){let n,e;return n=new Fe({props:{slot:"right",title:t[15]("reset"),buttonAction:t[20],$$slots:{default:[Mg]},$$scope:{ctx:t}}}),{c(){yn(n.$$.fragment)},m(i,r){pn(n,i,r),e=!0},p(i,r){const c={};32768&r&&(c.title=i[15]("reset")),9&r&&(c.buttonAction=i[20]),16777216&r&&(c.$$scope={dirty:r,ctx:i}),n.$set(c)},i(i){e||(j(n.$$.fragment,i),e=!0)},o(i){Y(n.$$.fragment,i),e=!1},d(i){dn(n,i)}}}function Lg(t){let n,e,i,r,c,o;return n=new ru({props:{minHeight:rc,$$slots:{default:[zg]},$$scope:{ctx:t}}}),i=new Eu({props:{$$slots:{right:[Ag],center:[$g],left:[Cg]},$$scope:{ctx:t}}}),c=new tu({}),{c(){yn(n.$$.fragment),e=wn(),yn(i.$$.fragment),r=wn(),yn(c.$$.fragment)},m(s,a){pn(n,s,a),G(s,e,a),pn(i,s,a),G(s,r,a),pn(c,s,a),o=!0},p(s,a){const h={};16805891&a&&(h.$$scope={dirty:a,ctx:s}),n.$set(h);const l={};17817611&a&&(l.$$scope={dirty:a,ctx:s}),i.$set(l)},i(s){o||(j(n.$$.fragment,s),j(i.$$.fragment,s),j(c.$$.fragment,s),o=!0)},o(s){Y(n.$$.fragment,s),Y(i.$$.fragment,s),Y(c.$$.fragment,s),o=!1},d(s){dn(n,s),s&&X(e),dn(i,s),s&&X(r),dn(c,s)}}}function Og(t){let n,e;return n=new bg({props:{$$slots:{default:[Lg]},$$scope:{ctx:t}}}),{c(){yn(n.$$.fragment)},m(i,r){pn(n,i,r),e=!0},p(i,r){const c={};17821707&r&&(c.$$scope={dirty:r,ctx:i}),n.$set(c)},i(i){e||(j(n.$$.fragment,i),e=!0)},o(i){Y(n.$$.fragment,i),e=!1},d(i){dn(n,i)}}}function Ig(t){let n,e,i,r;return n=new Wh({props:{value:t[12],max:t[0].questions.length-1}}),i=new Ts({props:{update:t[3],ms:800,minHeight:rc,$$slots:{default:[Og]},$$scope:{ctx:t}}}),{c(){yn(n.$$.fragment),e=wn(),yn(i.$$.fragment)},m(c,o){pn(n,c,o),G(c,e,o),pn(i,c,o),r=!0},p(c,o){const s={};4096&o&&(s.value=c[12]),1&o&&(s.max=c[0].questions.length-1),n.$set(s);const a={};8&o&&(a.update=c[3]),17821707&o&&(a.$$scope={dirty:o,ctx:c}),i.$set(a)},i(c){r||(j(n.$$.fragment,c),j(i.$$.fragment,c),r=!0)},o(c){Y(n.$$.fragment,c),Y(i.$$.fragment,c),r=!1},d(c){dn(n,c),c&&X(e),dn(i,c)}}}function Kg(t){let n,e,i;return e=new Jl({props:{$$slots:{default:[Ig]},$$scope:{ctx:t}}}),{c(){n=Q("div"),yn(e.$$.fragment),N(n,"class","quizdown-content")},m(r,c){G(r,n,c),pn(e,n,null),t[22](n),i=!0},p(r,[c]){const o={};17821707&c&&(o.$$scope={dirty:c,ctx:r}),e.$set(o)},i(r){i||(j(e.$$.fragment,r),i=!0)},o(r){Y(e.$$.fragment,r),i=!1},d(r){r&&X(n),dn(e),t[22](null)}}}let rc=150;function Pg(t,n,e){let i,r,c,o,s,a,h,l,g,u,v,p,m,f,y,d,x,T=w,z=w,_=w,D=w,F=w,cn=w,R=w,J=w;qn(t,Ho,C=>e(15,m=C)),t.$$.on_destroy.push(()=>T()),t.$$.on_destroy.push(()=>z()),t.$$.on_destroy.push(()=>_()),t.$$.on_destroy.push(()=>D()),t.$$.on_destroy.push(()=>F()),t.$$.on_destroy.push(()=>cn()),t.$$.on_destroy.push(()=>R()),t.$$.on_destroy.push(()=>J());var O=this&&this.__awaiter||function(C,W,rn,Mn){return new(rn||(rn=Promise))(function(In,Rn){function fn(ln){try{Nn(Mn.next(ln))}catch(Xn){Rn(Xn)}}function hn(ln){try{Nn(Mn.throw(ln))}catch(Xn){Rn(Xn)}}function Nn(ln){var Xn;ln.done?In(ln.value):(Xn=ln.value,Xn instanceof rn?Xn:new rn(function(ct){ct(Xn)})).then(fn,hn)}Nn((Mn=Mn.apply(C,W||[])).next())})};let P,{quiz:E}=n;Gl(E.config.locale),Wn.autoAddCss=!1,bs.add(ag,hg,gg,fg,lg,ug);let B=!1;return eo(()=>O(void 0,void 0,void 0,function*(){let C=E.config.primaryColor,W=E.config.secondaryColor,rn=E.config.textColor;P.style.setProperty("--quizdown-color-primary",C),P.style.setProperty("--quizdown-color-secondary",W),P.style.setProperty("--quizdown-color-text",rn),e(2,P.style.minHeight=`${rc}px`,P)})),t.$$set=C=>{"quiz"in C&&e(0,E=C.quiz)},t.$$.update=()=>{1&t.$$.dirty&&(e(11,i=E.active),T(),T=on(i,C=>e(1,g=C))),2&t.$$.dirty&&(e(10,r=g.showHint),D(),D=on(r,C=>e(14,p=C))),1&t.$$.dirty&&(e(9,c=E.index),z(),z=on(c,C=>e(12,u=C))),1&t.$$.dirty&&(e(8,o=E.onLast),R(),R=on(o,C=>e(18,d=C))),1&t.$$.dirty&&(e(7,s=E.onFirst),F(),F=on(s,C=>e(16,f=C))),1&t.$$.dirty&&(e(6,a=E.onResults),_(),_=on(a,C=>e(13,v=C))),1&t.$$.dirty&&(e(5,h=E.isEvaluated),cn(),cn=on(h,C=>e(17,y=C))),1&t.$$.dirty&&(e(4,l=E.allVisited),J(),J=on(l,C=>e(19,x=C)))},[E,g,P,B,l,h,a,s,o,c,r,i,u,v,p,m,f,y,d,x,()=>{e(3,B=!B),E.reset()},()=>E.jump(E.questions.length),function(C){ce[C?"unshift":"push"](()=>{P=C,e(2,P)})}]}class Rg extends Pn{constructor(n){super(),Kn(this,n,Pg,Kg,K,{quiz:0},xg)}}/*! @license DOMPurify 2.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.0/LICENSE */var Hg=Object.hasOwnProperty,Ms=Object.setPrototypeOf,Qg=Object.isFrozen,Dg=Object.getPrototypeOf,jg=Object.getOwnPropertyDescriptor,Un=Object.freeze,xt=Object.seal,Bg=Object.create,As=typeof Reflect<"u"&&Reflect,Oi=As.apply,cc=As.construct;Oi||(Oi=function(t,n,e){return t.apply(n,e)}),Un||(Un=function(t){return t}),xt||(xt=function(t){return t}),cc||(cc=function(t,n){return new(Function.prototype.bind.apply(t,[null].concat(function(e){if(Array.isArray(e)){for(var i=0,r=Array(e.length);i<e.length;i++)r[i]=e[i];return r}return Array.from(e)}(n))))});var Ls,Ug=at(Array.prototype.forEach),Os=at(Array.prototype.pop),Ge=at(Array.prototype.push),Ft=at(String.prototype.toLowerCase),Is=at(String.prototype.match),Mt=at(String.prototype.replace),Xg=at(String.prototype.indexOf),Fg=at(String.prototype.trim),At=at(RegExp.prototype.test),Ks=(Ls=TypeError,function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];return cc(Ls,n)});function at(t){return function(n){for(var e=arguments.length,i=Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];return Oi(t,n,i)}}function sn(t,n){Ms&&Ms(t,null);for(var e=n.length;e--;){var i=n[e];if(typeof i=="string"){var r=Ft(i);r!==i&&(Qg(n)||(n[e]=r),i=r)}t[i]=!0}return t}function pe(t){var n=Bg(null),e=void 0;for(e in t)Oi(Hg,t,[e])&&(n[e]=t[e]);return n}function Ii(t,n){for(;t!==null;){var e=jg(t,n);if(e){if(e.get)return at(e.get);if(typeof e.value=="function")return at(e.value)}t=Dg(t)}return function(i){return console.warn("fallback value for",i),null}}var Ps=Un(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),oc=Un(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),sc=Un(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Gg=Un(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ac=Un(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Vg=Un(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Rs=Un(["#text"]),Hs=Un(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),hc=Un(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Qs=Un(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ki=Un(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Wg=xt(/\{\{[\s\S]*|[\s\S]*\}\}/gm),Yg=xt(/<%[\s\S]*|[\s\S]*%>/gm),Jg=xt(/^data-[\-\w.\u00B7-\uFFFF]/),Zg=xt(/^aria-[\-\w]+$/),nf=xt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),tf=xt(/^(?:\w+script|data):/i),ef=xt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function ft(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}var rf=function(){return typeof window>"u"?null:window},cf=function(t,n){if((t===void 0?"undefined":Ve(t))!=="object"||typeof t.createPolicy!="function")return null;var e=null,i="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(i)&&(e=n.currentScript.getAttribute(i));var r="dompurify"+(e?"#"+e:"");try{return t.createPolicy(r,{createHTML:function(c){return c}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}},of=function t(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:rf(),e=function(k){return t(k)};if(e.version="2.3.0",e.removed=[],!n||!n.document||n.document.nodeType!==9)return e.isSupported=!1,e;var i=n.document,r=n.document,c=n.DocumentFragment,o=n.HTMLTemplateElement,s=n.Node,a=n.Element,h=n.NodeFilter,l=n.NamedNodeMap,g=l===void 0?n.NamedNodeMap||n.MozNamedAttrMap:l,u=n.Text,v=n.Comment,p=n.DOMParser,m=n.trustedTypes,f=a.prototype,y=Ii(f,"cloneNode"),d=Ii(f,"nextSibling"),x=Ii(f,"childNodes"),T=Ii(f,"parentNode");if(typeof o=="function"){var z=r.createElement("template");z.content&&z.content.ownerDocument&&(r=z.content.ownerDocument)}var _=cf(m,i),D=_&&lr?_.createHTML(""):"",F=r,cn=F.implementation,R=F.createNodeIterator,J=F.createDocumentFragment,O=F.getElementsByTagName,P=i.importNode,E={};try{E=pe(r).documentMode?r.documentMode:{}}catch{}var B={};e.isSupported=typeof T=="function"&&cn&&cn.createHTMLDocument!==void 0&&E!==9;var C=Wg,W=Yg,rn=Jg,Mn=Zg,In=tf,Rn=ef,fn=nf,hn=null,Nn=sn({},[].concat(ft(Ps),ft(oc),ft(sc),ft(ac),ft(Rs))),ln=null,Xn=sn({},[].concat(ft(Hs),ft(hc),ft(Qs),ft(Ki))),ct=null,dt=null,ne=!0,It=!0,Kt=!1,qt=!1,yt=!1,Ne=!1,$c=!1,Ee=!1,hr=!1,rh=!0,lr=!1,ch=!0,Mc=!0,gi=!1,$e={},Tm=sn({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),oh=null,sh=sn({},["audio","video","img","source","image","track"]),Ac=null,ah=sn({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Lc="http://www.w3.org/1998/Math/MathML",Oc="http://www.w3.org/2000/svg",Pt="http://www.w3.org/1999/xhtml",ur=Pt,hh=!1,Me=null,qm=r.createElement("form"),Ic=function(k){Me&&Me===k||(k&&(k===void 0?"undefined":Ve(k))==="object"||(k={}),k=pe(k),hn="ALLOWED_TAGS"in k?sn({},k.ALLOWED_TAGS):Nn,ln="ALLOWED_ATTR"in k?sn({},k.ALLOWED_ATTR):Xn,Ac="ADD_URI_SAFE_ATTR"in k?sn(pe(ah),k.ADD_URI_SAFE_ATTR):ah,oh="ADD_DATA_URI_TAGS"in k?sn(pe(sh),k.ADD_DATA_URI_TAGS):sh,ct="FORBID_TAGS"in k?sn({},k.FORBID_TAGS):{},dt="FORBID_ATTR"in k?sn({},k.FORBID_ATTR):{},$e="USE_PROFILES"in k&&k.USE_PROFILES,ne=k.ALLOW_ARIA_ATTR!==!1,It=k.ALLOW_DATA_ATTR!==!1,Kt=k.ALLOW_UNKNOWN_PROTOCOLS||!1,qt=k.SAFE_FOR_TEMPLATES||!1,yt=k.WHOLE_DOCUMENT||!1,Ee=k.RETURN_DOM||!1,hr=k.RETURN_DOM_FRAGMENT||!1,rh=k.RETURN_DOM_IMPORT!==!1,lr=k.RETURN_TRUSTED_TYPE||!1,$c=k.FORCE_BODY||!1,ch=k.SANITIZE_DOM!==!1,Mc=k.KEEP_CONTENT!==!1,gi=k.IN_PLACE||!1,fn=k.ALLOWED_URI_REGEXP||fn,ur=k.NAMESPACE||Pt,qt&&(It=!1),hr&&(Ee=!0),$e&&(hn=sn({},[].concat(ft(Rs))),ln=[],$e.html===!0&&(sn(hn,Ps),sn(ln,Hs)),$e.svg===!0&&(sn(hn,oc),sn(ln,hc),sn(ln,Ki)),$e.svgFilters===!0&&(sn(hn,sc),sn(ln,hc),sn(ln,Ki)),$e.mathMl===!0&&(sn(hn,ac),sn(ln,Qs),sn(ln,Ki))),k.ADD_TAGS&&(hn===Nn&&(hn=pe(hn)),sn(hn,k.ADD_TAGS)),k.ADD_ATTR&&(ln===Xn&&(ln=pe(ln)),sn(ln,k.ADD_ATTR)),k.ADD_URI_SAFE_ATTR&&sn(Ac,k.ADD_URI_SAFE_ATTR),Mc&&(hn["#text"]=!0),yt&&sn(hn,["html","head","body"]),hn.table&&(sn(hn,["tbody"]),delete ct.tbody),Un&&Un(k),Me=k)},lh=sn({},["mi","mo","mn","ms","mtext"]),uh=sn({},["foreignobject","desc","title","annotation-xml"]),gr=sn({},oc);sn(gr,sc),sn(gr,Gg);var Kc=sn({},ac);sn(Kc,Vg);var zm=function(k){var L=T(k);L&&L.tagName||(L={namespaceURI:Pt,tagName:"template"});var $=Ft(k.tagName),bn=Ft(L.tagName);if(k.namespaceURI===Oc)return L.namespaceURI===Pt?$==="svg":L.namespaceURI===Lc?$==="svg"&&(bn==="annotation-xml"||lh[bn]):!!gr[$];if(k.namespaceURI===Lc)return L.namespaceURI===Pt?$==="math":L.namespaceURI===Oc?$==="math"&&uh[bn]:!!Kc[$];if(k.namespaceURI===Pt){if(L.namespaceURI===Oc&&!uh[bn]||L.namespaceURI===Lc&&!lh[bn])return!1;var Sn=sn({},["title","style","font","a","script"]);return!Kc[$]&&(Sn[$]||!gr[$])}return!1},Rt=function(k){Ge(e.removed,{element:k});try{k.parentNode.removeChild(k)}catch{try{k.outerHTML=D}catch{k.remove()}}},gh=function(k,L){try{Ge(e.removed,{attribute:L.getAttributeNode(k),from:L})}catch{Ge(e.removed,{attribute:null,from:L})}if(L.removeAttribute(k),k==="is"&&!ln[k])if(Ee||hr)try{Rt(L)}catch{}else try{L.setAttribute(k,"")}catch{}},fh=function(k){var L=void 0,$=void 0;if($c)k="<remove></remove>"+k;else{var bn=Is(k,/^[\r\n\t ]+/);$=bn&&bn[0]}var Sn=_?_.createHTML(k):k;if(ur===Pt)try{L=new p().parseFromString(Sn,"text/html")}catch{}if(!L||!L.documentElement){L=cn.createDocument(ur,"template",null);try{L.documentElement.innerHTML=hh?"":Sn}catch{}}var Fn=L.body||L.documentElement;return k&&$&&Fn.insertBefore(r.createTextNode($),Fn.childNodes[0]||null),ur===Pt?O.call(L,yt?"html":"body")[0]:yt?L.documentElement:Fn},mh=function(k){return R.call(k.ownerDocument||k,k,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT,null,!1)},_m=function(k){return!(k instanceof u||k instanceof v)&&!(typeof k.nodeName=="string"&&typeof k.textContent=="string"&&typeof k.removeChild=="function"&&k.attributes instanceof g&&typeof k.removeAttribute=="function"&&typeof k.setAttribute=="function"&&typeof k.namespaceURI=="string"&&typeof k.insertBefore=="function")},fi=function(k){return(s===void 0?"undefined":Ve(s))==="object"?k instanceof s:k&&(k===void 0?"undefined":Ve(k))==="object"&&typeof k.nodeType=="number"&&typeof k.nodeName=="string"},zt=function(k,L,$){B[k]&&Ug(B[k],function(bn){bn.call(e,L,$,Me)})},ph=function(k){var L=void 0;if(zt("beforeSanitizeElements",k,null),_m(k)||Is(k.nodeName,/[\u0080-\uFFFF]/))return Rt(k),!0;var $=Ft(k.nodeName);if(zt("uponSanitizeElement",k,{tagName:$,allowedTags:hn}),!fi(k.firstElementChild)&&(!fi(k.content)||!fi(k.content.firstElementChild))&&At(/<[/\w]/g,k.innerHTML)&&At(/<[/\w]/g,k.textContent))return Rt(k),!0;if(!hn[$]||ct[$]){if(Mc&&!Tm[$]){var bn=T(k)||k.parentNode,Sn=x(k)||k.childNodes;if(Sn&&bn)for(var Fn=Sn.length-1;Fn>=0;--Fn)bn.insertBefore(y(Sn[Fn],!0),d(k))}return Rt(k),!0}return k instanceof a&&!zm(k)?(Rt(k),!0):$!=="noscript"&&$!=="noembed"||!At(/<\/no(script|embed)/i,k.innerHTML)?(qt&&k.nodeType===3&&(L=k.textContent,L=Mt(L,C," "),L=Mt(L,W," "),k.textContent!==L&&(Ge(e.removed,{element:k.cloneNode()}),k.textContent=L)),zt("afterSanitizeElements",k,null),!1):(Rt(k),!0)},dh=function(k,L,$){if(ch&&(L==="id"||L==="name")&&($ in r||$ in qm))return!1;if(!(It&&!dt[L]&&At(rn,L))){if(!(ne&&At(Mn,L))){if(!ln[L]||dt[L])return!1;if(!Ac[L]){if(!At(fn,Mt($,Rn,""))){if((L!=="src"&&L!=="xlink:href"&&L!=="href"||k==="script"||Xg($,"data:")!==0||!oh[k])&&!(Kt&&!At(In,Mt($,Rn,"")))){if($)return!1}}}}}return!0},yh=function(k){var L=void 0,$=void 0,bn=void 0,Sn=void 0;zt("beforeSanitizeAttributes",k,null);var Fn=k.attributes;if(Fn){var Hn={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ln};for(Sn=Fn.length;Sn--;){var fr=L=Fn[Sn],ot=fr.name,vh=fr.namespaceURI;if($=Fg(L.value),bn=Ft(ot),Hn.attrName=bn,Hn.attrValue=$,Hn.keepAttr=!0,Hn.forceKeepAttr=void 0,zt("uponSanitizeAttribute",k,Hn),$=Hn.attrValue,!Hn.forceKeepAttr&&(gh(ot,k),Hn.keepAttr))if(At(/\/>/i,$))gh(ot,k);else{qt&&($=Mt($,C," "),$=Mt($,W," "));var Sm=k.nodeName.toLowerCase();if(dh(Sm,bn,$))try{vh?k.setAttributeNS(vh,ot,$):k.setAttribute(ot,$),Os(e.removed)}catch{}}}zt("afterSanitizeAttributes",k,null)}},Cm=function k(L){var $=void 0,bn=mh(L);for(zt("beforeSanitizeShadowDOM",L,null);$=bn.nextNode();)zt("uponSanitizeShadowNode",$,null),ph($)||($.content instanceof c&&k($.content),yh($));zt("afterSanitizeShadowDOM",L,null)};return e.sanitize=function(k,L){var $=void 0,bn=void 0,Sn=void 0,Fn=void 0,Hn=void 0;if((hh=!k)&&(k="<!-->"),typeof k!="string"&&!fi(k)){if(typeof k.toString!="function")throw Ks("toString is not a function");if(typeof(k=k.toString())!="string")throw Ks("dirty is not a string, aborting")}if(!e.isSupported){if(Ve(n.toStaticHTML)==="object"||typeof n.toStaticHTML=="function"){if(typeof k=="string")return n.toStaticHTML(k);if(fi(k))return n.toStaticHTML(k.outerHTML)}return k}if(Ne||Ic(L),e.removed=[],typeof k=="string"&&(gi=!1),!gi)if(k instanceof s)(bn=($=fh("<!---->")).ownerDocument.importNode(k,!0)).nodeType===1&&bn.nodeName==="BODY"||bn.nodeName==="HTML"?$=bn:$.appendChild(bn);else{if(!Ee&&!qt&&!yt&&k.indexOf("<")===-1)return _&&lr?_.createHTML(k):k;if(!($=fh(k)))return Ee?null:D}$&&$c&&Rt($.firstChild);for(var fr=mh(gi?k:$);Sn=fr.nextNode();)Sn.nodeType===3&&Sn===Fn||ph(Sn)||(Sn.content instanceof c&&Cm(Sn.content),yh(Sn),Fn=Sn);if(Fn=null,gi)return k;if(Ee){if(hr)for(Hn=J.call($.ownerDocument);$.firstChild;)Hn.appendChild($.firstChild);else Hn=$;return rh&&(Hn=P.call(i,Hn,!0)),Hn}var ot=yt?$.outerHTML:$.innerHTML;return qt&&(ot=Mt(ot,C," "),ot=Mt(ot,W," ")),_&&lr?_.createHTML(ot):ot},e.setConfig=function(k){Ic(k),Ne=!0},e.clearConfig=function(){Me=null,Ne=!1},e.isValidAttribute=function(k,L,$){Me||Ic({});var bn=Ft(k),Sn=Ft(L);return dh(bn,Sn,$)},e.addHook=function(k,L){typeof L=="function"&&(B[k]=B[k]||[],Ge(B[k],L))},e.removeHook=function(k){B[k]&&Os(B[k])},e.removeHooks=function(k){B[k]&&(B[k]=[])},e.removeAllHooks=function(){B={}},e}();const sf=t=>{const n=t.match(/^[ \t]*(?=\S)/gm);return n?n.reduce((e,i)=>Math.min(e,i.length),1/0):0};var lc=(t,{include:n,exclude:e}={})=>{const i=r=>{const c=o=>typeof o=="string"?r===o:o.test(r);return n?n.some(c):!e||!e.some(c)};for(const[r,c]of(o=>{const s=new Set;do for(const a of Reflect.ownKeys(o))s.add([o,a]);while((o=Reflect.getPrototypeOf(o))&&o!==Object.prototype);return s})(t.constructor.prototype)){if(c==="constructor"||!i(c))continue;const o=Reflect.getOwnPropertyDescriptor(r,c);o&&typeof o.value=="function"&&(t[c]=t[c].bind(t))}return t};function Ds(t,n){return JSON.stringify(t)===JSON.stringify(n)}function js(t,n){let e,i,r=t.length;for(;r!==0;)i=Math.floor(Math.random()*r),r-=1,e=t[r],t[r]=t[i],t[i]=e;return t.slice(0,n)}class Bs{constructor(n,e,i,r,c,o){if(r.length===0)throw"no answers for question provided";this.text=n,this.explanation=e,this.hint=i,this.solved=!1,this.showHint=Jn(!1),this.options=o,this.answers=r,this.questionType=c,this.visited=!1,lc(this),this.reset()}enableHint(){this.showHint.update(n=>!0)}reset(){this.selected=[],this.solved=!1,this.visited=!1,this.showHint.set(!1),this.options.shuffleAnswers&&(this.answers=js(this.answers,this.answers.length))}}class af extends Bs{constructor(n,e,i,r,c){c.shuffleAnswers=!0,super(n,e,i,r,"Sequence",c)}isCorrect(){let n=this.answers.map(e=>e.id);return this.solved=Ds(n.sort(),this.selected),this.solved}}class Us extends Bs{isCorrect(){let n=this.answers.filter(i=>i.correct).map(i=>i.id),e=this.selected.map(i=>this.answers[i].id);return this.solved=Ds(n.sort(),e.sort()),this.solved}}class hf extends Us{constructor(n,e,i,r,c){super(n,e,i,r,"MultipleChoice",c)}}class lf extends Us{constructor(n,e,i,r,c){if(super(n,e,i,r,"SingleChoice",c),this.answers.filter(o=>o.correct).length>1)throw"Single Choice questions can not have more than one correct answer."}}class uf{constructor(n,e,i,r){this.html=e,this.correct=i,this.id=n,this.comment=r,lc(this)}}class gf{constructor(n,e){if(this.index=Jn(0),this.questions=n,this.config=e,this.config.shuffleQuestions&&(this.questions=js(this.questions,this.config.nQuestions)),this.questions.length==0)throw"No questions for quiz provided";this.active=Jn(this.questions[0]),this.questions[0].visited=!0,this.onLast=Jn(this.questions.length==1),this.onResults=Jn(!1),this.onFirst=Jn(!0),this.allVisited=Jn(this.questions.length==1),this.isEvaluated=Jn(!1),lc(this)}setActive(){let n=xn(this.index);this.active.update(e=>this.questions[n]),this.questions[n].visited=!0}checkAllVisited(){for(let n of this.questions)if(!n.visited)return!1;return!0}jump(n){return n<=this.questions.length-1&&n>=0?(this.index.set(n),this.setActive(),this.allVisited.set(this.checkAllVisited()),this.onResults.set(!1),this.onLast.set(n==this.questions.length-1),this.onFirst.set(n==0),!0):n==this.questions.length&&(this.onResults.set(!0),this.onLast.set(!1),this.index.set(n),!0)}next(){return this.jump(xn(this.index)+1)}previous(){return this.jump(xn(this.index)-1)}reset(){return this.onLast.set(!1),this.onResults.set(!1),this.allVisited.set(!1),this.isEvaluated.set(!1),this.questions.forEach(n=>n.reset()),this.jump(0)}evaluate(){var n=0;for(var e of this.questions)e.isCorrect()&&(n+=1);return this.isEvaluated.set(!0),n}}function Lt(t,n){return t!==void 0?t:n}const Xs={start_on_load:"startOnLoad",shuffle_answers:"shuffleAnswers",shuffle_questions:"shuffleQuestions",primary_color:"primaryColor",secondary_color:"secondaryColor",text_color:"textColor"};class Pi{constructor(n){for(const c in Xs)i=Xs[c],(e=c)in(r=n)&&(r[i]=r[e]);var e,i,r;this.startOnLoad=Lt(n.startOnLoad,!0),this.shuffleAnswers=Lt(n.shuffleAnswers,!0),this.shuffleQuestions=Lt(n.shuffleQuestions,!1),this.nQuestions=Lt(n.nQuestions,void 0),this.primaryColor=Lt(n.primaryColor,"steelblue"),this.secondaryColor=Lt(n.secondaryColor,"#f2f2f2"),this.textColor=Lt(n.textColor,"black"),this.locale=Lt(n.locale,null)}}var Gt={exports:{}};function ff(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}Gt.exports={defaults:{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:ff,changeDefaults:function(t){Gt.exports.defaults=t}};const mf=/[&<>"']/,pf=/[&<>"']/g,df=/[<>"']|&(?!#?\w+;)/,yf=/[<>"']|&(?!#?\w+;)/g,vf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Fs=t=>vf[t],kf=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Gs(t){return t.replace(kf,(n,e)=>(e=e.toLowerCase())==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):"")}const bf=/(^|[^\[])\^/g,xf=/[^\w:]/g,wf=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,Ri={},Tf=/^[^:]+:\/*[^/]*$/,qf=/^([^:]+:)[\s\S]*$/,zf=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Vs(t,n){Ri[" "+t]||(Tf.test(t)?Ri[" "+t]=t+"/":Ri[" "+t]=Ws(t,"/",!0));const e=(t=Ri[" "+t]).indexOf(":")===-1;return n.substring(0,2)==="//"?e?n:t.replace(qf,"$1")+n:n.charAt(0)==="/"?e?n:t.replace(zf,"$1")+n:t+n}function Ws(t,n,e){const i=t.length;if(i===0)return"";let r=0;for(;r<i;){const c=t.charAt(i-r-1);if(c!==n||e){if(c===n||!e)break;r++}else r++}return t.substr(0,i-r)}var de={escape:function(t,n){if(n){if(mf.test(t))return t.replace(pf,Fs)}else if(df.test(t))return t.replace(yf,Fs);return t},unescape:Gs,edit:function(t,n){t=t.source||t,n=n||"";const e={replace:(i,r)=>(r=(r=r.source||r).replace(bf,"$1"),t=t.replace(i,r),e),getRegex:()=>new RegExp(t,n)};return e},cleanUrl:function(t,n,e){if(t){let i;try{i=decodeURIComponent(Gs(e)).replace(xf,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}n&&!wf.test(e)&&(e=Vs(n,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e},resolveUrl:Vs,noopTest:{exec:function(){}},merge:function(t){let n,e,i=1;for(;i<arguments.length;i++)for(e in n=arguments[i],n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t},splitCells:function(t,n){const e=t.replace(/\|/g,(r,c,o)=>{let s=!1,a=c;for(;--a>=0&&o[a]==="\\";)s=!s;return s?"|":" |"}).split(/ \|/);let i=0;if(e.length>n)e.splice(n);else for(;e.length<n;)e.push("");for(;i<e.length;i++)e[i]=e[i].trim().replace(/\\\|/g,"|");return e},rtrim:Ws,findClosingBracket:function(t,n){if(t.indexOf(n[1])===-1)return-1;const e=t.length;let i=0,r=0;for(;r<e;r++)if(t[r]==="\\")r++;else if(t[r]===n[0])i++;else if(t[r]===n[1]&&(i--,i<0))return r;return-1},checkSanitizeDeprecation:function(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},repeatString:function(t,n){if(n<1)return"";let e="";for(;n>1;)1&n&&(e+=t),n>>=1,t+=t;return e+t}};const{defaults:_f}=Gt.exports,{rtrim:Hi,splitCells:Qi,escape:tt,findClosingBracket:Cf}=de;function Ys(t,n,e){const i=n.href,r=n.title?tt(n.title):null,c=t[1].replace(/\\([\[\]])/g,"$1");return t[0].charAt(0)!=="!"?{type:"link",raw:e,href:i,title:r,text:c}:{type:"image",raw:e,href:i,title:r,text:tt(c)}}var Js=class{constructor(t){this.options=t||_f}space(t){const n=this.rules.block.newline.exec(t);if(n)return n[0].length>1?{type:"space",raw:n[0]}:{raw:`
`}}code(t){const n=this.rules.block.code.exec(t);if(n){const e=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Hi(e,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const e=n[0],i=function(r,c){const o=r.match(/^(\s+)(?:```)/);if(o===null)return c;const s=o[1];return c.split(`
`).map(a=>{const h=a.match(/^\s+/);if(h===null)return a;const[l]=h;return l.length>=s.length?a.slice(s.length):a}).join(`
`)}(e,n[3]||"");return{type:"code",raw:e,lang:n[2]?n[2].trim():n[2],text:i}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let e=n[2].trim();if(/#$/.test(e)){const i=Hi(e,"#");this.options.pedantic?e=i.trim():i&&!/ $/.test(i)||(e=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:e}}}nptable(t){const n=this.rules.block.nptable.exec(t);if(n){const e={type:"table",header:Qi(n[1].replace(/^ *| *\| *$/g,"")),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:n[3]?n[3].replace(/\n$/,"").split(`
`):[],raw:n[0]};if(e.header.length===e.align.length){let i,r=e.align.length;for(i=0;i<r;i++)/^ *-+: *$/.test(e.align[i])?e.align[i]="right":/^ *:-+: *$/.test(e.align[i])?e.align[i]="center":/^ *:-+ *$/.test(e.align[i])?e.align[i]="left":e.align[i]=null;for(r=e.cells.length,i=0;i<r;i++)e.cells[i]=Qi(e.cells[i],e.header.length);return e}}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:n[0]}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){const e=n[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:n[0],text:e}}}list(t){const n=this.rules.block.list.exec(t);if(n){let e=n[0];const i=n[2],r=i.length>1,c={type:"list",raw:e,ordered:r,start:r?+i.slice(0,-1):"",loose:!1,items:[]},o=n[0].match(this.rules.block.item);let s,a,h,l,g,u,v,p,m,f=!1,y=o.length;h=this.rules.block.listItemStart.exec(o[0]);for(let d=0;d<y;d++){if(s=o[d],e=s,this.options.pedantic||(m=s.match(new RegExp("\\n\\s*\\n {0,"+(h[0].length-1)+"}\\S")),m&&(g=s.length-m.index+o.slice(d+1).join(`
`).length,c.raw=c.raw.substring(0,c.raw.length-g),s=s.substring(0,m.index),e=s,y=d+1)),d!==y-1){if(l=this.rules.block.listItemStart.exec(o[d+1]),this.options.pedantic?l[1].length>h[1].length:l[1].length>=h[0].length||l[1].length>3){o.splice(d,2,o[d]+(!this.options.pedantic&&l[1].length<h[0].length&&!o[d].match(/\n$/)?"":`
`)+o[d+1]),d--,y--;continue}(!this.options.pedantic||this.options.smartLists?l[2][l[2].length-1]!==i[i.length-1]:r===(l[2].length===1))&&(g=o.slice(d+1).join(`
`).length,c.raw=c.raw.substring(0,c.raw.length-g),d=y-1),h=l}a=s.length,s=s.replace(/^ *([*+-]|\d+[.)]) ?/,""),~s.indexOf(`
 `)&&(a-=s.length,s=this.options.pedantic?s.replace(/^ {1,4}/gm,""):s.replace(new RegExp("^ {1,"+a+"}","gm"),"")),s=Hi(s,`
`),d!==y-1&&(e+=`
`),u=f||/\n\n(?!\s*$)/.test(e),d!==y-1&&(f=e.slice(-2)===`

`,u||(u=f)),u&&(c.loose=!0),this.options.gfm&&(v=/^\[[ xX]\] /.test(s),p=void 0,v&&(p=s[1]!==" ",s=s.replace(/^\[[ xX]\] +/,""))),c.items.push({type:"list_item",raw:e,task:v,checked:p,loose:u,text:s})}return c}}html(t){const n=this.rules.block.html.exec(t);if(n)return{type:this.options.sanitize?"paragraph":"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):tt(n[0]):n[0]}}def(t){const n=this.rules.block.def.exec(t);if(n)return n[3]&&(n[3]=n[3].substring(1,n[3].length-1)),{type:"def",tag:n[1].toLowerCase().replace(/\s+/g," "),raw:n[0],href:n[2],title:n[3]}}table(t){const n=this.rules.block.table.exec(t);if(n){const e={type:"table",header:Qi(n[1].replace(/^ *| *\| *$/g,"")),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:n[3]?n[3].replace(/\n$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=n[0];let i,r=e.align.length;for(i=0;i<r;i++)/^ *-+: *$/.test(e.align[i])?e.align[i]="right":/^ *:-+: *$/.test(e.align[i])?e.align[i]="center":/^ *:-+ *$/.test(e.align[i])?e.align[i]="left":e.align[i]=null;for(r=e.cells.length,i=0;i<r;i++)e.cells[i]=Qi(e.cells[i].replace(/^ *\| *| *\| *$/g,""),e.header.length);return e}}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1]}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n)return{type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1]}}text(t){const n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0]}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:tt(n[1])}}tag(t,n,e){const i=this.rules.inline.tag.exec(t);if(i)return!n&&/^<a /i.test(i[0])?n=!0:n&&/^<\/a>/i.test(i[0])&&(n=!1),!e&&/^<(pre|code|kbd|script)(\s|>)/i.test(i[0])?e=!0:e&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0])&&(e=!1),{type:this.options.sanitize?"text":"html",raw:i[0],inLink:n,inRawBlock:e,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):tt(i[0]):i[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const e=n[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const c=Hi(e.slice(0,-1),"\\");if((e.length-c.length)%2==0)return}else{const c=Cf(n[2],"()");if(c>-1){const o=(n[0].indexOf("!")===0?5:4)+n[1].length+c;n[2]=n[2].substring(0,c),n[0]=n[0].substring(0,o).trim(),n[3]=""}}let i=n[2],r="";if(this.options.pedantic){const c=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);c&&(i=c[1],r=c[3])}else r=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(e)?i.slice(1):i.slice(1,-1)),Ys(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},n[0])}}reflink(t,n){let e;if((e=this.rules.inline.reflink.exec(t))||(e=this.rules.inline.nolink.exec(t))){let i=(e[2]||e[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i||!i.href){const r=e[0].charAt(0);return{type:"text",raw:r,text:r}}return Ys(e,i,e[0])}}emStrong(t,n,e=""){let i=this.rules.inline.emStrong.lDelim.exec(t);if(!i||i[3]&&e.match(/[\p{L}\p{N}]/u))return;const r=i[1]||i[2]||"";if(!r||r&&(e===""||this.rules.inline.punctuation.exec(e))){const c=i[0].length-1;let o,s,a=c,h=0;const l=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,n=n.slice(-1*t.length+c);(i=l.exec(n))!=null;)if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],o)if(s=o.length,i[3]||i[4])a+=s;else if(!((i[5]||i[6])&&c%3)||(c+s)%3){if(a-=s,!(a>0))return s=Math.min(s,s+a+h),Math.min(c,s)%2?{type:"em",raw:t.slice(0,c+i.index+s+1),text:t.slice(1,c+i.index+s)}:{type:"strong",raw:t.slice(0,c+i.index+s+1),text:t.slice(2,c+i.index+s-1)}}else h+=s}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let e=n[2].replace(/\n/g," ");const i=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return i&&r&&(e=e.substring(1,e.length-1)),e=tt(e,!0),{type:"codespan",raw:n[0],text:e}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2]}}autolink(t,n){const e=this.rules.inline.autolink.exec(t);if(e){let i,r;return e[2]==="@"?(i=tt(this.options.mangle?n(e[1]):e[1]),r="mailto:"+i):(i=tt(e[1]),r=i),{type:"link",raw:e[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}url(t,n){let e;if(e=this.rules.inline.url.exec(t)){let i,r;if(e[2]==="@")i=tt(this.options.mangle?n(e[0]):e[0]),r="mailto:"+i;else{let c;do c=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(c!==e[0]);i=tt(e[0]),r=e[1]==="www."?"http://"+i:i}return{type:"link",raw:e[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t,n,e){const i=this.rules.inline.text.exec(t);if(i){let r;return r=n?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):tt(i[0]):i[0]:tt(this.options.smartypants?e(i[0]):i[0]),{type:"text",raw:i[0],text:r}}}};const{noopTest:We,edit:kn,merge:Vt}=de,V={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:We,table:We,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};V.def=kn(V.def).replace("label",V._label).replace("title",V._title).getRegex(),V.bullet=/(?:[*+-]|\d{1,9}[.)])/,V.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,V.item=kn(V.item,"gm").replace(/bull/g,V.bullet).getRegex(),V.listItemStart=kn(/^( *)(bull) */).replace("bull",V.bullet).getRegex(),V.list=kn(V.list).replace(/bull/g,V.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+V.def.source+")").getRegex(),V._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",V._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,V.html=kn(V.html,"i").replace("comment",V._comment).replace("tag",V._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),V.paragraph=kn(V._paragraph).replace("hr",V.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",V._tag).getRegex(),V.blockquote=kn(V.blockquote).replace("paragraph",V.paragraph).getRegex(),V.normal=Vt({},V),V.gfm=Vt({},V.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),V.gfm.nptable=kn(V.gfm.nptable).replace("hr",V.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",V._tag).getRegex(),V.gfm.table=kn(V.gfm.table).replace("hr",V.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",V._tag).getRegex(),V.pedantic=Vt({},V.normal,{html:kn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",V._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:We,paragraph:kn(V.normal._paragraph).replace("hr",V.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",V.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const I={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:We,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:We,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};I.punctuation=kn(I.punctuation).replace(/punctuation/g,I._punctuation).getRegex(),I.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,I.escapedEmSt=/\\\*|\\_/g,I._comment=kn(V._comment).replace("(?:-->|$)","-->").getRegex(),I.emStrong.lDelim=kn(I.emStrong.lDelim).replace(/punct/g,I._punctuation).getRegex(),I.emStrong.rDelimAst=kn(I.emStrong.rDelimAst,"g").replace(/punct/g,I._punctuation).getRegex(),I.emStrong.rDelimUnd=kn(I.emStrong.rDelimUnd,"g").replace(/punct/g,I._punctuation).getRegex(),I._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,I._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,I._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,I.autolink=kn(I.autolink).replace("scheme",I._scheme).replace("email",I._email).getRegex(),I._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,I.tag=kn(I.tag).replace("comment",I._comment).replace("attribute",I._attribute).getRegex(),I._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,I._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,I._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,I.link=kn(I.link).replace("label",I._label).replace("href",I._href).replace("title",I._title).getRegex(),I.reflink=kn(I.reflink).replace("label",I._label).getRegex(),I.reflinkSearch=kn(I.reflinkSearch,"g").replace("reflink",I.reflink).replace("nolink",I.nolink).getRegex(),I.normal=Vt({},I),I.pedantic=Vt({},I.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:kn(/^!?\[(label)\]\((.*?)\)/).replace("label",I._label).getRegex(),reflink:kn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",I._label).getRegex()}),I.gfm=Vt({},I.normal,{escape:kn(I.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),I.gfm.url=kn(I.gfm.url,"i").replace("email",I.gfm._extended_email).getRegex(),I.breaks=Vt({},I.gfm,{br:kn(I.br).replace("{2,}","*").getRegex(),text:kn(I.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var Sf={block:V,inline:I};const Nf=Js,{defaults:Ef}=Gt.exports,{block:Di,inline:Ye}=Sf,{repeatString:Zs}=de;function $f(t){return t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function na(t){let n,e,i="";const r=t.length;for(n=0;n<r;n++)e=t.charCodeAt(n),Math.random()>.5&&(e="x"+e.toString(16)),i+="&#"+e+";";return i}const{defaults:Mf}=Gt.exports,{cleanUrl:ta,escape:ji}=de;var ea=class{constructor(t){this.options=t||Mf}code(t,n,e){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(t,i);r!=null&&r!==t&&(e=!0,t=r)}return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+ji(i,!0)+'">'+(e?t:ji(t,!0))+`</code></pre>
`:"<pre><code>"+(e?t:ji(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
`+t+`</blockquote>
`}html(t){return t}heading(t,n,e,i){return this.options.headerIds?"<h"+n+' id="'+this.options.headerPrefix+i.slug(e)+'">'+t+"</h"+n+`>
`:"<h"+n+">"+t+"</h"+n+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,n,e){const i=n?"ol":"ul";return"<"+i+(n&&e!==1?' start="'+e+'"':"")+`>
`+t+"</"+i+`>
`}listitem(t){return"<li>"+t+`</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return"<p>"+t+`</p>
`}table(t,n){return n&&(n="<tbody>"+n+"</tbody>"),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow(t){return`<tr>
`+t+`</tr>
`}tablecell(t,n){const e=n.header?"th":"td";return(n.align?"<"+e+' align="'+n.align+'">':"<"+e+">")+t+"</"+e+`>
`}strong(t){return"<strong>"+t+"</strong>"}em(t){return"<em>"+t+"</em>"}codespan(t){return"<code>"+t+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return"<del>"+t+"</del>"}link(t,n,e){if((t=ta(this.options.sanitize,this.options.baseUrl,t))===null)return e;let i='<a href="'+ji(t)+'"';return n&&(i+=' title="'+n+'"'),i+=">"+e+"</a>",i}image(t,n,e){if((t=ta(this.options.sanitize,this.options.baseUrl,t))===null)return e;let i='<img src="'+t+'" alt="'+e+'"';return n&&(i+=' title="'+n+'"'),i+=this.options.xhtml?"/>":">",i}text(t){return t}},ia=class{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,n,e){return""+e}image(t,n,e){return""+e}br(){return""}},ra=class{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,n){let e=t,i=0;if(this.seen.hasOwnProperty(e)){i=this.seen[t];do i++,e=t+"-"+i;while(this.seen.hasOwnProperty(e))}return n||(this.seen[t]=i,this.seen[e]=0),e}slug(t,n={}){const e=this.serialize(t);return this.getNextSafeSlug(e,n.dryrun)}};const Af=ea,Lf=ia,Of=ra,{defaults:If}=Gt.exports,{unescape:Kf}=de,Je=class Fc{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Ef,this.options.tokenizer=this.options.tokenizer||new Nf,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const e={block:Di.normal,inline:Ye.normal};this.options.pedantic?(e.block=Di.pedantic,e.inline=Ye.pedantic):this.options.gfm&&(e.block=Di.gfm,this.options.breaks?e.inline=Ye.breaks:e.inline=Ye.gfm),this.tokenizer.rules=e}static get rules(){return{block:Di,inline:Ye}}static lex(n,e){return new Fc(e).lex(n)}static lexInline(n,e){return new Fc(e).inlineTokens(n)}lex(n){return n=n.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(n,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(n,e=[],i=!0){let r,c,o,s,a,h;for(this.options.pedantic&&(n=n.replace(/^ +$/gm,""));n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>!!(r=l.call(this,n,e))&&(n=n.substring(r.raw.length),e.push(r),!0))))if(r=this.tokenizer.space(n))n=n.substring(r.raw.length),r.type&&e.push(r);else if(r=this.tokenizer.code(n))n=n.substring(r.raw.length),s=e[e.length-1],s&&s.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text):e.push(r);else if(r=this.tokenizer.fences(n))n=n.substring(r.raw.length),e.push(r);else if(r=this.tokenizer.heading(n))n=n.substring(r.raw.length),e.push(r);else if(r=this.tokenizer.nptable(n))n=n.substring(r.raw.length),e.push(r);else if(r=this.tokenizer.hr(n))n=n.substring(r.raw.length),e.push(r);else if(r=this.tokenizer.blockquote(n))n=n.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],i),e.push(r);else if(r=this.tokenizer.list(n)){for(n=n.substring(r.raw.length),o=r.items.length,c=0;c<o;c++)r.items[c].tokens=this.blockTokens(r.items[c].text,[],!1);e.push(r)}else if(r=this.tokenizer.html(n))n=n.substring(r.raw.length),e.push(r);else if(i&&(r=this.tokenizer.def(n)))n=n.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(n))n=n.substring(r.raw.length),e.push(r);else if(r=this.tokenizer.lheading(n))n=n.substring(r.raw.length),e.push(r);else{if(a=n,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const g=n.slice(1);let u;this.options.extensions.startBlock.forEach(function(v){u=v.call(this,g),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(a=n.substring(0,l+1))}if(i&&(r=this.tokenizer.paragraph(a)))s=e[e.length-1],h&&s.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text):e.push(r),h=a.length!==n.length,n=n.substring(r.raw.length);else if(r=this.tokenizer.text(n))n=n.substring(r.raw.length),s=e[e.length-1],s&&s.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text):e.push(r);else if(n){const l="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(l);break}throw new Error(l)}}return e}inline(n){let e,i,r,c,o,s;const a=n.length;for(e=0;e<a;e++)switch(s=n[e],s.type){case"paragraph":case"text":case"heading":s.tokens=[],this.inlineTokens(s.text,s.tokens);break;case"table":for(s.tokens={header:[],cells:[]},c=s.header.length,i=0;i<c;i++)s.tokens.header[i]=[],this.inlineTokens(s.header[i],s.tokens.header[i]);for(c=s.cells.length,i=0;i<c;i++)for(o=s.cells[i],s.tokens.cells[i]=[],r=0;r<o.length;r++)s.tokens.cells[i][r]=[],this.inlineTokens(o[r],s.tokens.cells[i][r]);break;case"blockquote":this.inline(s.tokens);break;case"list":for(c=s.items.length,i=0;i<c;i++)this.inline(s.items[i].tokens)}return n}inlineTokens(n,e=[],i=!1,r=!1){let c,o,s,a,h,l,g=n;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(g))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(g=g.slice(0,a.index)+"["+Zs("a",a[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(g))!=null;)g=g.slice(0,a.index)+"["+Zs("a",a[0].length-2)+"]"+g.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(g))!=null;)g=g.slice(0,a.index)+"++"+g.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;n;)if(h||(l=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>!!(c=u.call(this,n,e))&&(n=n.substring(c.raw.length),e.push(c),!0))))if(c=this.tokenizer.escape(n))n=n.substring(c.raw.length),e.push(c);else if(c=this.tokenizer.tag(n,i,r))n=n.substring(c.raw.length),i=c.inLink,r=c.inRawBlock,o=e[e.length-1],o&&c.type==="text"&&o.type==="text"?(o.raw+=c.raw,o.text+=c.text):e.push(c);else if(c=this.tokenizer.link(n))n=n.substring(c.raw.length),c.type==="link"&&(c.tokens=this.inlineTokens(c.text,[],!0,r)),e.push(c);else if(c=this.tokenizer.reflink(n,this.tokens.links))n=n.substring(c.raw.length),o=e[e.length-1],c.type==="link"?(c.tokens=this.inlineTokens(c.text,[],!0,r),e.push(c)):o&&c.type==="text"&&o.type==="text"?(o.raw+=c.raw,o.text+=c.text):e.push(c);else if(c=this.tokenizer.emStrong(n,g,l))n=n.substring(c.raw.length),c.tokens=this.inlineTokens(c.text,[],i,r),e.push(c);else if(c=this.tokenizer.codespan(n))n=n.substring(c.raw.length),e.push(c);else if(c=this.tokenizer.br(n))n=n.substring(c.raw.length),e.push(c);else if(c=this.tokenizer.del(n))n=n.substring(c.raw.length),c.tokens=this.inlineTokens(c.text,[],i,r),e.push(c);else if(c=this.tokenizer.autolink(n,na))n=n.substring(c.raw.length),e.push(c);else if(i||!(c=this.tokenizer.url(n,na))){if(s=n,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const v=n.slice(1);let p;this.options.extensions.startInline.forEach(function(m){p=m.call(this,v),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(s=n.substring(0,u+1))}if(c=this.tokenizer.inlineText(s,r,$f))n=n.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(l=c.raw.slice(-1)),h=!0,o=e[e.length-1],o&&o.type==="text"?(o.raw+=c.raw,o.text+=c.text):e.push(c);else if(n){const u="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}else n=n.substring(c.raw.length),e.push(c);return e}},Ze=class Gc{constructor(n){this.options=n||If,this.options.renderer=this.options.renderer||new Af,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Lf,this.slugger=new Of}static parse(n,e){return new Gc(e).parse(n)}static parseInline(n,e){return new Gc(e).parseInline(n)}parse(n,e=!0){let i,r,c,o,s,a,h,l,g,u,v,p,m,f,y,d,x,T,z,_="";const D=n.length;for(i=0;i<D;i++)if(u=n[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(z=this.options.extensions.renderers[u.type].call(this,u),z!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))_+=z||"";else switch(u.type){case"space":continue;case"hr":_+=this.renderer.hr();continue;case"heading":_+=this.renderer.heading(this.parseInline(u.tokens),u.depth,Kf(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":_+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(l="",h="",o=u.header.length,r=0;r<o;r++)h+=this.renderer.tablecell(this.parseInline(u.tokens.header[r]),{header:!0,align:u.align[r]});for(l+=this.renderer.tablerow(h),g="",o=u.cells.length,r=0;r<o;r++){for(a=u.tokens.cells[r],h="",s=a.length,c=0;c<s;c++)h+=this.renderer.tablecell(this.parseInline(a[c]),{header:!1,align:u.align[c]});g+=this.renderer.tablerow(h)}_+=this.renderer.table(l,g);continue;case"blockquote":g=this.parse(u.tokens),_+=this.renderer.blockquote(g);continue;case"list":for(v=u.ordered,p=u.start,m=u.loose,o=u.items.length,g="",r=0;r<o;r++)y=u.items[r],d=y.checked,x=y.task,f="",y.task&&(T=this.renderer.checkbox(d),m?y.tokens.length>0&&y.tokens[0].type==="text"?(y.tokens[0].text=T+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&y.tokens[0].tokens[0].type==="text"&&(y.tokens[0].tokens[0].text=T+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:T}):f+=T),f+=this.parse(y.tokens,m),g+=this.renderer.listitem(f,x,d);_+=this.renderer.list(g,v,p);continue;case"html":_+=this.renderer.html(u.text);continue;case"paragraph":_+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(g=u.tokens?this.parseInline(u.tokens):u.text;i+1<D&&n[i+1].type==="text";)u=n[++i],g+=`
`+(u.tokens?this.parseInline(u.tokens):u.text);_+=e?this.renderer.paragraph(g):g;continue;default:{const F='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(F);throw new Error(F)}}return _}parseInline(n,e){e=e||this.renderer;let i,r,c,o="";const s=n.length;for(i=0;i<s;i++)if(r=n[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(c=this.options.extensions.renderers[r.type].call(this,r),c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))o+=c||"";else switch(r.type){case"escape":o+=e.text(r.text);break;case"html":o+=e.html(r.text);break;case"link":o+=e.link(r.href,r.title,this.parseInline(r.tokens,e));break;case"image":o+=e.image(r.href,r.title,r.text);break;case"strong":o+=e.strong(this.parseInline(r.tokens,e));break;case"em":o+=e.em(this.parseInline(r.tokens,e));break;case"codespan":o+=e.codespan(r.text);break;case"br":o+=e.br();break;case"del":o+=e.del(this.parseInline(r.tokens,e));break;case"text":o+=e.text(r.text);break;default:{const a='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(a);throw new Error(a)}}return o}},ca=Js,oa=ea,Pf=ia,Rf=ra,{merge:Bi,checkSanitizeDeprecation:sa,escape:aa}=de,{getDefaults:Hf,changeDefaults:Qf,defaults:Df}=Gt.exports;function nn(t,n,e){if(t==null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof n=="function"&&(e=n,n=null),n=Bi({},nn.defaults,n||{}),sa(n),e){const i=n.highlight;let r;try{r=Je.lex(t,n)}catch(s){return e(s)}const c=function(s){let a;if(!s)try{n.walkTokens&&nn.walkTokens(r,n.walkTokens),a=Ze.parse(r,n)}catch(h){s=h}return n.highlight=i,s?e(s):e(null,a)};if(!i||i.length<3||(delete n.highlight,!r.length))return c();let o=0;return nn.walkTokens(r,function(s){s.type==="code"&&(o++,setTimeout(()=>{i(s.text,s.lang,function(a,h){if(a)return c(a);h!=null&&h!==s.text&&(s.text=h,s.escaped=!0),o--,o===0&&c()})},0))}),void(o===0&&c())}try{const i=Je.lex(t,n);return n.walkTokens&&nn.walkTokens(i,n.walkTokens),Ze.parse(i,n)}catch(i){if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,n.silent)return"<p>An error occurred:</p><pre>"+aa(i.message+"",!0)+"</pre>";throw i}}nn.options=nn.setOptions=function(t){return Bi(nn.defaults,t),Qf(nn.defaults),nn},nn.getDefaults=Hf,nn.defaults=Df,nn.use=function(...t){const n=Bi({},...t),e=nn.defaults.extensions||{renderers:{},childTokens:{}};let i;t.forEach(r=>{if(r.extensions&&(i=!0,r.extensions.forEach(c=>{if(!c.name)throw new Error("extension name required");if(c.renderer){const o=e.renderers?e.renderers[c.name]:null;e.renderers[c.name]=o?function(...s){let a=c.renderer.apply(this,s);return a===!1&&(a=o.apply(this,s)),a}:c.renderer}if(c.tokenizer){if(!c.level||c.level!=="block"&&c.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[c.level]?e[c.level].unshift(c.tokenizer):e[c.level]=[c.tokenizer],c.start&&(c.level==="block"?e.startBlock?e.startBlock.push(c.start):e.startBlock=[c.start]:c.level==="inline"&&(e.startInline?e.startInline.push(c.start):e.startInline=[c.start]))}c.childTokens&&(e.childTokens[c.name]=c.childTokens)})),r.renderer){const c=nn.defaults.renderer||new oa;for(const o in r.renderer){const s=c[o];c[o]=(...a)=>{let h=r.renderer[o].apply(c,a);return h===!1&&(h=s.apply(c,a)),h}}n.renderer=c}if(r.tokenizer){const c=nn.defaults.tokenizer||new ca;for(const o in r.tokenizer){const s=c[o];c[o]=(...a)=>{let h=r.tokenizer[o].apply(c,a);return h===!1&&(h=s.apply(c,a)),h}}n.tokenizer=c}if(r.walkTokens){const c=nn.defaults.walkTokens;n.walkTokens=o=>{r.walkTokens.call(this,o),c&&c(o)}}i&&(n.extensions=e),nn.setOptions(n)})},nn.walkTokens=function(t,n){for(const e of t)switch(n(e),e.type){case"table":for(const i of e.tokens.header)nn.walkTokens(i,n);for(const i of e.tokens.cells)for(const r of i)nn.walkTokens(r,n);break;case"list":nn.walkTokens(e.items,n);break;default:nn.defaults.extensions&&nn.defaults.extensions.childTokens&&nn.defaults.extensions.childTokens[e.type]?nn.defaults.extensions.childTokens[e.type].forEach(function(i){nn.walkTokens(e[i],n)}):e.tokens&&nn.walkTokens(e.tokens,n)}},nn.parseInline=function(t,n){if(t==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");n=Bi({},nn.defaults,n||{}),sa(n);try{const e=Je.lexInline(t,n);return n.walkTokens&&nn.walkTokens(e,n.walkTokens),Ze.parseInline(e,n)}catch(e){if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n.silent)return"<p>An error occurred:</p><pre>"+aa(e.message+"",!0)+"</pre>";throw e}},nn.Parser=Ze,nn.parser=Ze.parse,nn.Renderer=oa,nn.TextRenderer=Pf,nn.Lexer=Je,nn.lexer=Je.lex,nn.Tokenizer=ca,nn.Slugger=Rf,nn.parse=nn;var Ui=nn;const uc=Symbol.for("yaml.alias"),ha=Symbol.for("yaml.document"),Ot=Symbol.for("yaml.map"),la=Symbol.for("yaml.pair"),Wt=Symbol.for("yaml.scalar"),ye=Symbol.for("yaml.seq"),ht=Symbol.for("yaml.node.type"),ni=t=>!!t&&typeof t=="object"&&t[ht]===uc,ua=t=>!!t&&typeof t=="object"&&t[ht]===ha,ve=t=>!!t&&typeof t=="object"&&t[ht]===Ot,$n=t=>!!t&&typeof t=="object"&&t[ht]===la,Cn=t=>!!t&&typeof t=="object"&&t[ht]===Wt,ti=t=>!!t&&typeof t=="object"&&t[ht]===ye;function En(t){if(t&&typeof t=="object")switch(t[ht]){case Ot:case ye:return!0}return!1}function Zn(t){if(t&&typeof t=="object")switch(t[ht]){case uc:case Ot:case Wt:case ye:return!0}return!1}class gc{constructor(n){Object.defineProperty(this,ht,{value:n})}}const Yt=Symbol("break visit"),jf=Symbol("skip children"),ei=Symbol("remove node");function Jt(t,n){typeof n=="object"&&(n.Collection||n.Node||n.Value)&&(n=Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n)),ua(t)?ke(null,t.contents,n,Object.freeze([t]))===ei&&(t.contents=null):ke(null,t,n,Object.freeze([]))}function ke(t,n,e,i){let r;if(typeof e=="function"?r=e(t,n,i):ve(n)?e.Map&&(r=e.Map(t,n,i)):ti(n)?e.Seq&&(r=e.Seq(t,n,i)):$n(n)?e.Pair&&(r=e.Pair(t,n,i)):Cn(n)?e.Scalar&&(r=e.Scalar(t,n,i)):ni(n)&&e.Alias&&(r=e.Alias(t,n,i)),Zn(r)||$n(r)){const c=i[i.length-1];if(En(c))c.items[t]=r;else if($n(c))t==="key"?c.key=r:c.value=r;else{if(!ua(c)){const o=ni(c)?"alias":"scalar";throw new Error(`Cannot replace node with ${o} parent`)}c.contents=r}return ke(t,r,e,i)}if(typeof r!="symbol"){if(En(n)){i=Object.freeze(i.concat(n));for(let c=0;c<n.items.length;++c){const o=ke(c,n.items[c],e,i);if(typeof o=="number")c=o-1;else{if(o===Yt)return Yt;o===ei&&(n.items.splice(c,1),c-=1)}}}else if($n(n)){i=Object.freeze(i.concat(n));const c=ke("key",n.key,e,i);if(c===Yt)return Yt;c===ei&&(n.key=null);const o=ke("value",n.value,e,i);if(o===Yt)return Yt;o===ei&&(n.value=null)}}return r}Jt.BREAK=Yt,Jt.SKIP=jf,Jt.REMOVE=ei;const Bf={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"};class et{constructor(n,e){this.marker=null,this.yaml=Object.assign({},et.defaultYaml,n),this.tags=Object.assign({},et.defaultTags,e)}atDocument(){const n=new et(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:et.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},et.defaultTags)}return n}add(n,e){this.atNextDocument&&(this.yaml={explicit:et.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},et.defaultTags),this.atNextDocument=!1);const i=n.trim().split(/[ \t]+/),r=i.shift();switch(r){case"%TAG":{if(i.length!==2&&(e(0,"%TAG directive should contain exactly two parts"),i.length<2))return!1;const[c,o]=i;return this.tags[c]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,i.length<1)return e(0,"%YAML directive should contain exactly one part"),!1;const[c]=i;return c==="1.1"||c==="1.2"?(this.yaml.version=c,!0):(e(6,`Unsupported YAML version ${c}`,!0),!1)}default:return e(0,`Unknown directive ${r}`,!0),!1}}tagName(n,e){if(n==="!")return"!";if(n[0]!=="!")return e(`Not a valid tag: ${n}`),null;if(n[1]==="<"){const o=n.slice(2,-1);return o==="!"||o==="!!"?(e(`Verbatim tags aren't resolved, so ${n} is invalid.`),null):(n[n.length-1]!==">"&&e("Verbatim tags must end with a >"),o)}const[,i,r]=n.match(/^(.*!)([^!]*)$/);r||e(`The ${n} tag has no suffix`);const c=this.tags[i];return c?c+decodeURIComponent(r):i==="!"?n:(e(`Could not resolve tag: ${n}`),null)}tagString(n){for(const[e,i]of Object.entries(this.tags))if(n.startsWith(i))return e+n.substring(i.length).replace(/[!,[\]{}]/g,r=>Bf[r]);return n[0]==="!"?n:`!<${n}>`}toString(n){const e=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],i=Object.entries(this.tags);let r;if(n&&i.length>0&&Zn(n.contents)){const c={};Jt(n.contents,(o,s)=>{Zn(s)&&s.tag&&(c[s.tag]=!0)}),r=Object.keys(c)}else r=[];for(const[c,o]of i)c==="!!"&&o==="tag:yaml.org,2002:"||n&&!r.some(s=>s.startsWith(o))||e.push(`%TAG ${c} ${o}`);return e.join(`
`)}}function ga(t){if(/[\x00-\x19\s,[\]{}]/.test(t)){const n=JSON.stringify(t);throw new Error(`Anchor must not contain whitespace or control characters: ${n}`)}return!0}function fa(t){const n=new Set;return Jt(t,{Value(e,i){i.anchor&&n.add(i.anchor)}}),n}function ma(t,n){for(let e=1;;++e){const i=`${t}${e}`;if(!n.has(i))return i}}et.defaultYaml={explicit:!1,version:"1.2"},et.defaultTags={"!!":"tag:yaml.org,2002:"};class fc extends gc{constructor(n){super(uc),this.source=n,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(n){let e;return Jt(n,{Node:(i,r)=>{if(r===this)return Jt.BREAK;r.anchor===this.source&&(e=r)}}),e}toJSON(n,e){if(!e)return{source:this.source};const{anchors:i,doc:r,maxAliasCount:c}=e,o=this.resolve(r);if(!o){const a=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(a)}const s=i.get(o);if(!s||s.res===void 0)throw new ReferenceError("This should not happen: Alias anchor was not resolved?");if(c>=0&&(s.count+=1,s.aliasCount===0&&(s.aliasCount=Xi(r,o,i)),s.count*s.aliasCount>c))throw new ReferenceError("Excessive alias count indicates a resource exhaustion attack");return s.res}toString(n,e,i){const r=`*${this.source}`;if(n){if(ga(this.source),n.options.verifyAliasOrder&&!n.anchors.has(this.source)){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(c)}if(n.implicitKey)return`${r} `}return r}}function Xi(t,n,e){if(ni(n)){const i=n.resolve(t),r=e&&i&&e.get(i);return r?r.count*r.aliasCount:0}if(En(n)){let i=0;for(const r of n.items){const c=Xi(t,r,e);c>i&&(i=c)}return i}if($n(n)){const i=Xi(t,n.key,e),r=Xi(t,n.value,e);return Math.max(i,r)}return 1}function mt(t,n,e){if(Array.isArray(t))return t.map((r,c)=>mt(r,String(c),e));if(t&&typeof t.toJSON=="function"){if(!e||!Cn(i=t)&&!En(i)||!i.anchor)return t.toJSON(n,e);const r={aliasCount:0,count:1,res:void 0};e.anchors.set(t,r),e.onCreate=o=>{r.res=o,delete e.onCreate};const c=t.toJSON(n,e);return e.onCreate&&e.onCreate(c),c}var i;return typeof t!="bigint"||e&&e.keep?t:Number(t)}const pa=t=>!t||typeof t!="function"&&typeof t!="object";class tn extends gc{constructor(n){super(Wt),this.value=n}toJSON(n,e){return e&&e.keep?this.value:mt(this.value,n,e)}toString(){return String(this.value)}}tn.BLOCK_FOLDED="BLOCK_FOLDED",tn.BLOCK_LITERAL="BLOCK_LITERAL",tn.PLAIN="PLAIN",tn.QUOTE_DOUBLE="QUOTE_DOUBLE",tn.QUOTE_SINGLE="QUOTE_SINGLE";function ii(t,n,e){var i,r;if(Zn(t))return t;if($n(t)){const u=(r=(i=e.schema[Ot]).createNode)===null||r===void 0?void 0:r.call(i,e.schema,null,e);return u.items.push(t),u}(t instanceof String||t instanceof Number||t instanceof Boolean||typeof BigInt=="function"&&t instanceof BigInt)&&(t=t.valueOf());const{onAnchor:c,onTagObj:o,schema:s,sourceObjects:a}=e;let h;if(t&&typeof t=="object"){if(h=a.get(t),h)return h.anchor||(h.anchor=c(t)),new fc(h.anchor);h={anchor:null,node:null},a.set(t,h)}n&&n.startsWith("!!")&&(n="tag:yaml.org,2002:"+n.slice(2));let l=function(u,v,p){if(v){const m=p.filter(y=>y.tag===v),f=m.find(y=>!y.format)||m[0];if(!f)throw new Error(`Tag ${v} not found`);return f}return p.find(m=>m.identify&&m.identify(u)&&!m.format)}(t,n,s.tags);if(!l){if(t&&typeof t.toJSON=="function"&&(t=t.toJSON()),!t||typeof t!="object")return new tn(t);l=t instanceof Map?s[Ot]:Symbol.iterator in Object(t)?s[ye]:s[Ot]}o&&(o(l),delete e.onTagObj);const g=l!=null&&l.createNode?l.createNode(e.schema,t,e):new tn(t);return n&&(g.tag=n),h&&(h.node=g),g}function Fi(t,n,e){let i=e;for(let r=n.length-1;r>=0;--r){const c=n[r];if(typeof c=="number"&&Number.isInteger(c)&&c>=0){const o=[];o[c]=i,i=o}else{const o={};Object.defineProperty(o,typeof c=="symbol"?c:String(c),{value:i,writable:!0,enumerable:!0,configurable:!0}),i=o}}return ii(i,void 0,{onAnchor(){throw new Error("Repeated objects are not supported here")},schema:t,sourceObjects:new Map})}const ri=t=>t==null||typeof t=="object"&&!!t[Symbol.iterator]().next().done;class Gi extends gc{constructor(n,e){super(n),Object.defineProperty(this,"schema",{value:e,configurable:!0,enumerable:!1,writable:!0})}addIn(n,e){if(ri(n))this.add(e);else{const[i,...r]=n,c=this.get(i,!0);if(En(c))c.addIn(r,e);else{if(c!==void 0||!this.schema)throw new Error(`Expected YAML collection at ${i}. Remaining path: ${r}`);this.set(i,Fi(this.schema,r,e))}}}deleteIn([n,...e]){if(e.length===0)return this.delete(n);const i=this.get(n,!0);if(En(i))return i.deleteIn(e);throw new Error(`Expected YAML collection at ${n}. Remaining path: ${e}`)}getIn([n,...e],i){const r=this.get(n,!0);return e.length===0?!i&&Cn(r)?r.value:r:En(r)?r.getIn(e,i):void 0}hasAllNullValues(n){return this.items.every(e=>{if(!$n(e))return!1;const i=e.value;return i==null||n&&Cn(i)&&i.value==null&&!i.commentBefore&&!i.comment&&!i.tag})}hasIn([n,...e]){if(e.length===0)return this.has(n);const i=this.get(n,!0);return!!En(i)&&i.hasIn(e)}setIn([n,...e],i){if(e.length===0)this.set(n,i);else{const r=this.get(n,!0);if(En(r))r.setIn(e,i);else{if(r!==void 0||!this.schema)throw new Error(`Expected YAML collection at ${n}. Remaining path: ${e}`);this.set(n,Fi(this.schema,e,i))}}}}function be(t,n,e){return e?e.includes(`
`)?`${t}
`+e.replace(/^/gm,`${n||""}#`):t.endsWith(" ")?`${t}#${e}`:`${t} #${e}`:t}Gi.maxFlowStringSingleLineLength=60;const da="flow",mc="block",Vi="quoted";function Wi(t,n,e="flow",{indentAtStart:i,lineWidth:r=80,minContentWidth:c=20,onFold:o,onOverflow:s}={}){if(!r||r<0)return t;const a=Math.max(1+c,1+r-n.length);if(t.length<=a)return t;const h=[],l={};let g,u,v=r-n.length;typeof i=="number"&&(i>r-Math.max(2,c)?h.push(0):v=r-i);let p,m=!1,f=-1,y=-1,d=-1;for(e===mc&&(f=ya(t,f),f!==-1&&(v=f+a));p=t[f+=1];){if(e===Vi&&p==="\\"){switch(y=f,t[f+1]){case"x":f+=3;break;case"u":f+=5;break;case"U":f+=9;break;default:f+=1}d=f}if(p===`
`)e===mc&&(f=ya(t,f)),v=f+a,g=void 0;else{if(p===" "&&u&&u!==" "&&u!==`
`&&u!=="	"){const T=t[f+1];T&&T!==" "&&T!==`
`&&T!=="	"&&(g=f)}if(f>=v)if(g)h.push(g),v=g+a,g=void 0;else if(e===Vi){for(;u===" "||u==="	";)u=p,p=t[f+=1],m=!0;const T=f>d+1?f-2:y-1;if(l[T])return t;h.push(T),l[T]=!0,v=T+a,g=void 0}else m=!0}u=p}if(m&&s&&s(),h.length===0)return t;o&&o();let x=t.slice(0,h[0]);for(let T=0;T<h.length;++T){const z=h[T],_=h[T+1]||t.length;z===0?x=`
${n}${t.slice(0,_)}`:(e===Vi&&l[z]&&(x+=`${t[z]}\\`),x+=`
${n}${t.slice(z+1,_)}`)}return x}function ya(t,n){let e=t[n+1];for(;e===" "||e==="	";){do e=t[n+=1];while(e&&e!==`
`);e=t[n+1]}return n}const Yi=t=>({indentAtStart:t.indentAtStart,lineWidth:t.options.lineWidth,minContentWidth:t.options.minContentWidth}),Ji=t=>/^(%|---|\.\.\.)/m.test(t);function wt(t,n){const e=JSON.stringify(t);if(n.options.doubleQuotedAsJSON)return e;const{implicitKey:i}=n,r=n.options.doubleQuotedMinMultiLineLength,c=n.indent||(Ji(t)?"  ":"");let o="",s=0;for(let a=0,h=e[a];h;h=e[++a])if(h===" "&&e[a+1]==="\\"&&e[a+2]==="n"&&(o+=e.slice(s,a)+"\\ ",a+=1,s=a,h="\\"),h==="\\")switch(e[a+1]){case"u":{o+=e.slice(s,a);const l=e.substr(a+2,4);switch(l){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:l.substr(0,2)==="00"?o+="\\x"+l.substr(2):o+=e.substr(a,6)}a+=5,s=a+1}break;case"n":if(i||e[a+2]==='"'||e.length<r)a+=1;else{for(o+=e.slice(s,a)+`

`;e[a+2]==="\\"&&e[a+3]==="n"&&e[a+4]!=='"';)o+=`
`,a+=2;o+=c,e[a+2]===" "&&(o+="\\"),a+=1,s=a+1}break;default:a+=1}return o=s?o+e.slice(s):e,i?o:Wi(o,c,Vi,Yi(n))}function pc(t,n){if(n.implicitKey){if(/\n/.test(t))return wt(t,n)}else if(/[ \t]\n|\n[ \t]/.test(t))return wt(t,n);const e=n.indent||(Ji(t)?"  ":""),i="'"+t.replace(/'/g,"''").replace(/\n+/g,`$&
${e}`)+"'";return n.implicitKey?i:Wi(i,e,da,Yi(n))}function Zi({comment:t,type:n,value:e},i,r,c){if(/\n[\t ]+$/.test(e)||/^\s*$/.test(e))return wt(e,i);const o=i.indent||(i.forceBlockIndent||Ji(e)?"  ":""),s=n!==tn.BLOCK_FOLDED&&(n===tn.BLOCK_LITERAL||!function(y,d,x){if(!d||d<0)return!1;const T=d-x,z=y.length;if(z<=T)return!1;for(let _=0,D=0;_<z;++_)if(y[_]===`
`){if(_-D>T)return!0;if(D=_+1,z-D<=T)return!1}return!0}(e,i.options.lineWidth,o.length));if(!e)return s?`|
`:`>
`;let a,h;for(h=e.length;h>0;--h){const y=e[h-1];if(y!==`
`&&y!=="	"&&y!==" ")break}let l=e.substring(h);const g=l.indexOf(`
`);g===-1?a="-":e===l||g!==l.length-1?(a="+",c&&c()):a="",l&&(e=e.slice(0,-l.length),l[l.length-1]===`
`&&(l=l.slice(0,-1)),l=l.replace(/\n+(?!\n|$)/g,`$&${o}`));let u,v=!1,p=-1;for(u=0;u<e.length;++u){const y=e[u];if(y===" ")v=!0;else{if(y!==`
`)break;p=u}}let m=e.substring(0,p<u?p+1:u);m&&(e=e.substring(m.length),m=m.replace(/\n+/g,`$&${o}`));let f=(s?"|":">")+(v?o?"2":"1":"")+a;return t&&(f+=" #"+t.replace(/ ?[\r\n]+/g," "),r&&r()),s?`${f}
${o}${m}${e=e.replace(/\n+/g,`$&${o}`)}${l}`:`${f}
${o}${Wi(`${m}${e=e.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${o}`)}${l}`,o,mc,Yi(i))}`}function dc(t,n,e,i){const{implicitKey:r,inFlow:c}=n,o=typeof t.value=="string"?t:Object.assign({},t,{value:String(t.value)});let{type:s}=t;s!==tn.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(s=tn.QUOTE_DOUBLE);const a=l=>{switch(l){case tn.BLOCK_FOLDED:case tn.BLOCK_LITERAL:return r||c?wt(o.value,n):Zi(o,n,e,i);case tn.QUOTE_DOUBLE:return wt(o.value,n);case tn.QUOTE_SINGLE:return pc(o.value,n);case tn.PLAIN:return function(g,u,v,p){var m;const{type:f,value:y}=g,{actualString:d,implicitKey:x,indent:T,inFlow:z}=u;if(x&&/[\n[\]{},]/.test(y)||z&&/[[\]{},]/.test(y))return wt(y,u);if(!y||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(y)){const D=y.indexOf('"')!==-1,F=y.indexOf("'")!==-1;let cn;return cn=D&&!F?pc:F&&!D?wt:u.options.singleQuote?pc:wt,x||z||y.indexOf(`
`)===-1?cn(y,u):Zi(g,u,v,p)}if(!x&&!z&&f!==tn.PLAIN&&y.indexOf(`
`)!==-1)return Zi(g,u,v,p);if(T===""&&Ji(y))return u.forceBlockIndent=!0,Zi(g,u,v,p);const _=y.replace(/\n+/g,`$&
${T}`);if(d){for(const D of u.doc.schema.tags)if(D.default&&D.tag!=="tag:yaml.org,2002:str"&&(!((m=D.test)===null||m===void 0)&&m.test(_)))return wt(y,u)}return x?_:Wi(_,T,da,Yi(u))}(o,n,e,i);default:return null}};let h=a(s);if(h===null){const{defaultKeyType:l,defaultStringType:g}=n.options,u=r&&l||g;if(h=a(u),h===null)throw new Error(`Unsupported default string type ${u}`)}return h}const va=(t,n)=>({anchors:new Set,doc:t,indent:"",indentStep:typeof n.indent=="number"?" ".repeat(n.indent):"  ",options:Object.assign({defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:!1,trueStr:"true",verifyAliasOrder:!0},n)});function xe(t,n,e,i){if($n(t))return t.toString(n,e,i);if(ni(t))return t.toString(n);let r;const c=Zn(t)?t:n.doc.createNode(t,{onTagObj:a=>r=a});r||(r=function(a,h){if(h.tag){const u=a.filter(v=>v.tag===h.tag);if(u.length>0)return u.find(v=>v.format===h.format)||u[0]}let l,g;if(Cn(h)){g=h.value;const u=a.filter(v=>v.identify&&v.identify(g));l=u.find(v=>v.format===h.format)||u.find(v=>!v.format)}else g=h,l=a.find(u=>u.nodeClass&&g instanceof u.nodeClass);if(!l){const u=g&&g.constructor?g.constructor.name:typeof g;throw new Error(`Tag not resolved for ${u} value`)}return l}(n.doc.schema.tags,c));const o=function(a,h,{anchors:l,doc:g}){const u=[],v=(Cn(a)||En(a))&&a.anchor;return v&&ga(v)&&(l.add(v),u.push(`&${v}`)),a.tag?u.push(g.directives.tagString(a.tag)):h.default||u.push(g.directives.tagString(h.tag)),u.join(" ")}(c,r,n);o.length>0&&(n.indentAtStart=(n.indentAtStart||0)+o.length+1);const s=typeof r.stringify=="function"?r.stringify(c,n,e,i):Cn(c)?dc(c,n,e,i):c.toString(n,e,i);return o?Cn(c)||s[0]==="{"||s[0]==="["?`${o} ${s}`:`${o}
${n.indent}${s}`:s}function ka(t,n){t!=="debug"&&t!=="warn"||(typeof process<"u"&&process.emitWarning?process.emitWarning(n):console.warn(n))}function ba(t,n,{key:e,value:i}){if(t&&t.doc.schema.merge&&Uf(e))if(ti(i))for(const r of i.items)yc(t,n,r);else if(Array.isArray(i))for(const r of i)yc(t,n,r);else yc(t,n,i);else{const r=mt(e,"",t);if(n instanceof Map)n.set(r,mt(i,r,t));else if(n instanceof Set)n.add(r);else{const c=function(s,a,h){if(a===null)return"";if(typeof a!="object")return String(a);if(Zn(s)&&h&&h.doc){const l=va(h.doc,{});l.anchors=new Set;for(const u of h.anchors.keys())l.anchors.add(u.anchor);l.inFlow=!0,l.inStringifyKey=!0;const g=s.toString(l);if(!h.mapKeyWarned){let u=JSON.stringify(g);u.length>40&&(u=u.substring(0,36)+'..."'),ka(h.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${u}. Set mapAsMap: true to use object keys.`),h.mapKeyWarned=!0}return g}return JSON.stringify(a)}(e,r,t),o=mt(i,c,t);c in n?Object.defineProperty(n,c,{value:o,writable:!0,enumerable:!0,configurable:!0}):n[c]=o}}return n}const Uf=t=>t==="<<"||Cn(t)&&t.value==="<<"&&(!t.type||t.type===tn.PLAIN);function yc(t,n,e){const i=t&&ni(e)?e.resolve(t.doc):null;if(!ve(i))throw new Error("Merge sources must be map aliases");const r=i.toJSON(null,t,Map);for(const[c,o]of r)n instanceof Map?n.has(c)||n.set(c,o):n instanceof Set?n.add(c):Object.prototype.hasOwnProperty.call(n,c)||Object.defineProperty(n,c,{value:o,writable:!0,enumerable:!0,configurable:!0});return n}function vc(t,n,e){const i=ii(t,void 0,e),r=ii(n,void 0,e);return new it(i,r)}class it{constructor(n,e=null){Object.defineProperty(this,ht,{value:la}),this.key=n,this.value=e}toJSON(n,e){return ba(e,e&&e.mapAsMap?new Map:{},this)}toString(n,e,i){return n&&n.doc?function({key:r,value:c},o,s,a){const{allNullValues:h,doc:l,indent:g,indentStep:u,options:{indentSeq:v,simpleKeys:p}}=o;let m=Zn(r)&&r.comment||null;if(p){if(m)throw new Error("With simple keys, key nodes cannot have comments");if(En(r))throw new Error("With simple keys, collection cannot be used as a key value")}let f=!p&&(!r||m&&c==null&&!o.inFlow||En(r)||(Cn(r)?r.type===tn.BLOCK_FOLDED||r.type===tn.BLOCK_LITERAL:typeof r=="object"));o=Object.assign({},o,{allNullValues:!1,implicitKey:!f&&(p||!h),indent:g+u});let y=!1,d=!1,x=xe(r,o,()=>y=!0,()=>d=!0);if(!f&&!o.inFlow&&x.length>1024){if(p)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");f=!0}if(o.inFlow){if(h||c==null)return y&&s&&s(),f?`? ${x}`:x}else if(h&&!p||c==null&&f)return y&&(m=null),d&&!m&&a&&a(),be(`? ${x}`,o.indent,m);y&&(m=null),x=f?`? ${be(x,o.indent,m)}
${g}:`:be(`${x}:`,o.indent,m);let T="",z=null;Zn(c)?(c.spaceBefore&&(T=`
`),c.commentBefore&&(T+=`
${c.commentBefore.replace(/^/gm,`${o.indent}#`)}`),z=c.comment):c&&typeof c=="object"&&(c=l.createNode(c)),o.implicitKey=!1,f||m||!Cn(c)||(o.indentAtStart=x.length+1),d=!1,v||!(u.length>=2)||o.inFlow||f||!ti(c)||c.flow||c.tag||c.anchor||(o.indent=o.indent.substr(2));let _=!1;const D=xe(c,o,()=>_=!0,()=>d=!0);let F=" ";return T||m?F=`${T}
${o.indent}`:!f&&En(c)?(D[0]==="["||D[0]==="{")&&!D.includes(`
`)||(F=`
${o.indent}`):D[0]===`
`&&(F=""),o.inFlow?(_&&s&&s(),x+F+D):(_&&(z=null),d&&!z&&a&&a(),be(x+F+D,o.indent,z))}(this,n,e,i):JSON.stringify(this)}}const xa={intAsBigInt:!1,logLevel:"warn",prettyErrors:!0,strict:!0,version:"1.2"};function wa({comment:t,flow:n,items:e},i,{blockItem:r,flowChars:c,itemIndent:o,onChompKeep:s,onComment:a}){const{indent:h,indentStep:l}=i,g=n||i.inFlow;g&&(o+=l),i=Object.assign({},i,{indent:o,inFlow:g,type:null});let u=!0,v=!1;const p=e.reduce((f,y,d)=>{let x=null;if(Zn(y)){if(!v&&y.spaceBefore&&f.push({comment:!0,str:""}),y.commentBefore)for(const z of y.commentBefore.match(/^.*$/gm))f.push({comment:!0,str:`#${z}`});y.comment&&(x=y.comment,u=!1)}else if($n(y)){const z=Zn(y.key)?y.key:null;if(z){if(!v&&z.spaceBefore&&f.push({comment:!0,str:""}),z.commentBefore)for(const _ of z.commentBefore.match(/^.*$/gm))f.push({comment:!0,str:`#${_}`});z.comment&&(u=!1)}if(g){const _=Zn(y.value)?y.value:null;_?(_.comment&&(x=_.comment),(_.comment||_.commentBefore)&&(u=!1)):y.value==null&&z&&z.comment&&(x=z.comment)}}v=!1;let T=xe(y,i,()=>x=null,()=>v=!0);return g&&d<e.length-1&&(T+=","),T=be(T,o,x),v&&(x||g)&&(v=!1),f.push({comment:!1,str:T}),f},[]);let m;if(p.length===0)m=c.start+c.end;else if(g){const{start:f,end:y}=c,d=p.map(T=>T.str);let x=2;for(const T of p){if(T.comment||T.str.includes(`
`)){u=!1;break}x+=T.str.length+2}if(!u||x>Gi.maxFlowStringSingleLineLength){m=f;for(const T of d)m+=T?`
${l}${h}${T}`:`
`;m+=`
${h}${y}`}else m=`${f} ${d.join(" ")} ${y}`}else{const f=p.map(r);m=f.shift()||"";for(const y of f)m+=y?`
${h}${y}`:`
`}return t?(m+=`
`+t.replace(/^/gm,`${h}#`),a&&a()):v&&s&&s(),m}function Zt(t,n){const e=Cn(n)?n.value:n;for(const i of t)if($n(i)&&(i.key===n||i.key===e||Cn(i.key)&&i.key.value===e))return i}class lt extends Gi{constructor(n){super(Ot,n),this.items=[]}static get tagName(){return"tag:yaml.org,2002:map"}add(n,e){let i;i=$n(n)?n:new it(n&&typeof n=="object"&&"key"in n?n.key:n,n.value);const r=Zt(this.items,i.key),c=this.schema&&this.schema.sortMapEntries;if(r){if(!e)throw new Error(`Key ${i.key} already set`);Cn(r.value)&&pa(i.value)?r.value.value=i.value:r.value=i.value}else if(c){const o=this.items.findIndex(s=>c(i,s)<0);o===-1?this.items.push(i):this.items.splice(o,0,i)}else this.items.push(i)}delete(n){const e=Zt(this.items,n);return e?this.items.splice(this.items.indexOf(e),1).length>0:!1}get(n,e){const i=Zt(this.items,n),r=i&&i.value;return!e&&Cn(r)?r.value:r}has(n){return!!Zt(this.items,n)}set(n,e){this.add(new it(n,e),!0)}toJSON(n,e,i){const r=i?new i:e&&e.mapAsMap?new Map:{};e&&e.onCreate&&e.onCreate(r);for(const c of this.items)ba(e,r,c);return r}toString(n,e,i){if(!n)return JSON.stringify(this);for(const r of this.items)if(!$n(r))throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`);return!n.allNullValues&&this.hasAllNullValues(!1)&&(n=Object.assign({},n,{allNullValues:!0})),wa(this,n,{blockItem:r=>r.str,flowChars:{start:"{",end:"}"},itemIndent:n.indent||"",onChompKeep:i,onComment:e})}}const we={collection:"map",createNode:function(t,n,e){const{keepUndefined:i,replacer:r}=e,c=new lt(t),o=(s,a)=>{if(typeof r=="function")a=r.call(n,s,a);else if(Array.isArray(r)&&!r.includes(s))return;(a!==void 0||i)&&c.items.push(vc(s,a,e))};if(n instanceof Map)for(const[s,a]of n)o(s,a);else if(n&&typeof n=="object")for(const s of Object.keys(n))o(s,n[s]);return typeof t.sortMapEntries=="function"&&c.items.sort(t.sortMapEntries),c},default:!0,nodeClass:lt,tag:"tag:yaml.org,2002:map",resolve:(t,n)=>(ve(t)||n("Expected a mapping for this tag"),t)};class Te extends Gi{constructor(n){super(ye,n),this.items=[]}static get tagName(){return"tag:yaml.org,2002:seq"}add(n){this.items.push(n)}delete(n){const e=nr(n);return typeof e!="number"?!1:this.items.splice(e,1).length>0}get(n,e){const i=nr(n);if(typeof i!="number")return;const r=this.items[i];return!e&&Cn(r)?r.value:r}has(n){const e=nr(n);return typeof e=="number"&&e<this.items.length}set(n,e){const i=nr(n);if(typeof i!="number")throw new Error(`Expected a valid index, not ${n}.`);const r=this.items[i];Cn(r)&&pa(e)?r.value=e:this.items[i]=e}toJSON(n,e){const i=[];e&&e.onCreate&&e.onCreate(i);let r=0;for(const c of this.items)i.push(mt(c,String(r++),e));return i}toString(n,e,i){return n?wa(this,n,{blockItem:r=>r.comment?r.str:`- ${r.str}`,flowChars:{start:"[",end:"]"},itemIndent:(n.indent||"")+"  ",onChompKeep:i,onComment:e}):JSON.stringify(this)}}function nr(t){let n=Cn(t)?t.value:t;return n&&typeof n=="string"&&(n=Number(n)),typeof n=="number"&&Number.isInteger(n)&&n>=0?n:null}const qe={collection:"seq",createNode:function(t,n,e){const{replacer:i}=e,r=new Te(t);if(n&&Symbol.iterator in Object(n)){let c=0;for(let o of n){if(typeof i=="function"){const s=n instanceof Set?o:String(c++);o=i.call(n,s,o)}r.items.push(ii(o,void 0,e))}}return r},default:!0,nodeClass:Te,tag:"tag:yaml.org,2002:seq",resolve:(t,n)=>(ti(t)||n("Expected a sequence for this tag"),t)},tr={identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify:(t,n,e,i)=>dc(t,n=Object.assign({actualString:!0},n),e,i)},er={identify:t=>t==null,createNode:()=>new tn(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new tn(null),stringify:({source:t},n)=>t&&er.test.test(t)?t:n.options.nullStr},kc={identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:t=>new tn(t[0]==="t"||t[0]==="T"),stringify({source:t,value:n},e){return t&&kc.test.test(t)&&n===(t[0]==="t"||t[0]==="T")?t:n?e.options.trueStr:e.options.falseStr}};function Tt({format:t,minFractionDigits:n,tag:e,value:i}){if(typeof i=="bigint")return String(i);const r=typeof i=="number"?i:Number(i);if(!isFinite(r))return isNaN(r)?".nan":r<0?"-.inf":".inf";let c=JSON.stringify(i);if(!t&&n&&(!e||e==="tag:yaml.org,2002:float")&&/^\d/.test(c)){let o=c.indexOf(".");o<0&&(o=c.length,c+=".");let s=n-(c.length-o-1);for(;s-- >0;)c+="0"}return c}const Ta={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Tt},qa={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t),stringify:({value:t})=>Number(t).toExponential()},za={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(t){const n=new tn(parseFloat(t)),e=t.indexOf(".");return e!==-1&&t[t.length-1]==="0"&&(n.minFractionDigits=t.length-e-1),n},stringify:Tt},ir=t=>typeof t=="bigint"||Number.isInteger(t),bc=(t,n,e,{intAsBigInt:i})=>i?BigInt(t):parseInt(t.substring(n),e);function _a(t,n,e){const{value:i}=t;return ir(i)&&i>=0?e+i.toString(n):Tt(t)}const Ca={identify:t=>ir(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(t,n,e)=>bc(t,2,8,e),stringify:t=>_a(t,8,"0o")},Sa={identify:ir,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(t,n,e)=>bc(t,0,10,e),stringify:Tt},Na={identify:t=>ir(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(t,n,e)=>bc(t,2,16,e),stringify:t=>_a(t,16,"0x")},Xf=[we,qe,tr,er,kc,Ca,Sa,Na,Ta,qa,za];function Ea(t){return typeof t=="bigint"||Number.isInteger(t)}const rr=({value:t})=>JSON.stringify(t),Ff=[we,qe].concat([{identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify:rr},{identify:t=>t==null,createNode:()=>new tn(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:rr},{identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true|false$/,resolve:t=>t==="true",stringify:rr},{identify:Ea,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(t,n,{intAsBigInt:e})=>e?BigInt(t):parseInt(t,10),stringify:({value:t})=>Ea(t)?t.toString():JSON.stringify(t)},{identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:t=>parseFloat(t),stringify:rr}],{default:!0,tag:"",test:/^/,resolve:(t,n)=>(n(`Unresolved plain scalar ${JSON.stringify(t)}`),t)}),xc={identify:t=>t instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(t,n){if(typeof Buffer=="function")return Buffer.from(t,"base64");if(typeof atob=="function"){const e=atob(t.replace(/[\n\r]/g,"")),i=new Uint8Array(e.length);for(let r=0;r<e.length;++r)i[r]=e.charCodeAt(r);return i}return n("This environment does not support reading binary tags; either Buffer or atob is required"),t},stringify({comment:t,type:n,value:e},i,r,c){const o=e;let s;if(typeof Buffer=="function")s=o instanceof Buffer?o.toString("base64"):Buffer.from(o.buffer).toString("base64");else{if(typeof btoa!="function")throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");{let a="";for(let h=0;h<o.length;++h)a+=String.fromCharCode(o[h]);s=btoa(a)}}if(n||(n=tn.BLOCK_LITERAL),n!==tn.QUOTE_DOUBLE){const a=Math.max(i.options.lineWidth-i.indent.length,i.options.minContentWidth),h=Math.ceil(s.length/a),l=new Array(h);for(let g=0,u=0;g<h;++g,u+=a)l[g]=s.substr(u,a);s=l.join(n===tn.BLOCK_LITERAL?`
`:" ")}return dc({comment:t,type:n,value:s},i,r,c)}};function $a(t,n){if(ti(t))for(let e=0;e<t.items.length;++e){let i=t.items[e];if(!$n(i)){if(ve(i)){i.items.length>1&&n("Each pair must have its own sequence indicator");const r=i.items[0]||new it(new tn(null));if(i.commentBefore&&(r.key.commentBefore=r.key.commentBefore?`${i.commentBefore}
${r.key.commentBefore}`:i.commentBefore),i.comment){const c=r.value||r.key;c.comment=c.comment?`${i.comment}
${c.comment}`:i.comment}i=r}t.items[e]=$n(i)?i:new it(i)}}else n("Expected a sequence for this tag");return t}function Ma(t,n,e){const{replacer:i}=e,r=new Te(t);r.tag="tag:yaml.org,2002:pairs";let c=0;if(n&&Symbol.iterator in Object(n))for(let o of n){let s,a;if(typeof i=="function"&&(o=i.call(n,String(c++),o)),Array.isArray(o)){if(o.length!==2)throw new TypeError(`Expected [key, value] tuple: ${o}`);s=o[0],a=o[1]}else if(o&&o instanceof Object){const h=Object.keys(o);if(h.length!==1)throw new TypeError(`Expected { key: value } tuple: ${o}`);s=h[0],a=o[s]}else s=o;r.items.push(vc(s,a,e))}return r}const wc={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:$a,createNode:Ma};class ze extends Te{constructor(){super(),this.add=lt.prototype.add.bind(this),this.delete=lt.prototype.delete.bind(this),this.get=lt.prototype.get.bind(this),this.has=lt.prototype.has.bind(this),this.set=lt.prototype.set.bind(this),this.tag=ze.tag}toJSON(n,e){if(!e)return super.toJSON(n);const i=new Map;e&&e.onCreate&&e.onCreate(i);for(const r of this.items){let c,o;if($n(r)?(c=mt(r.key,"",e),o=mt(r.value,c,e)):c=mt(r,"",e),i.has(c))throw new Error("Ordered maps must not include duplicate keys");i.set(c,o)}return i}}ze.tag="tag:yaml.org,2002:omap";const Tc={collection:"seq",identify:t=>t instanceof Map,nodeClass:ze,default:!1,tag:"tag:yaml.org,2002:omap",resolve(t,n){const e=$a(t,n),i=[];for(const{key:r}of e.items)Cn(r)&&(i.includes(r.value)?n(`Ordered maps must not include duplicate keys: ${r.value}`):i.push(r.value));return Object.assign(new ze,e)},createNode(t,n,e){const i=Ma(t,n,e),r=new ze;return r.items=i.items,r}};function Aa({value:t,source:n},e){return n&&(t?La:Oa).test.test(n)?n:t?e.options.trueStr:e.options.falseStr}const La={identify:t=>t===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new tn(!0),stringify:Aa},Oa={identify:t=>t===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,resolve:()=>new tn(!1),stringify:Aa},Gf={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Tt},Vf={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t.replace(/_/g,"")),stringify:({value:t})=>Number(t).toExponential()},Wf={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(t){const n=new tn(parseFloat(t.replace(/_/g,""))),e=t.indexOf(".");if(e!==-1){const i=t.substring(e+1).replace(/_/g,"");i[i.length-1]==="0"&&(n.minFractionDigits=i.length)}return n},stringify:Tt},ci=t=>typeof t=="bigint"||Number.isInteger(t);function cr(t,n,e,{intAsBigInt:i}){const r=t[0];if(r!=="-"&&r!=="+"||(n+=1),t=t.substring(n).replace(/_/g,""),i){switch(e){case 2:t=`0b${t}`;break;case 8:t=`0o${t}`;break;case 16:t=`0x${t}`}const o=BigInt(t);return r==="-"?BigInt(-1)*o:o}const c=parseInt(t,e);return r==="-"?-1*c:c}function qc(t,n,e){const{value:i}=t;if(ci(i)){const r=i.toString(n);return i<0?"-"+e+r.substr(1):e+r}return Tt(t)}const Yf={identify:ci,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(t,n,e)=>cr(t,2,2,e),stringify:t=>qc(t,2,"0b")},Jf={identify:ci,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(t,n,e)=>cr(t,1,8,e),stringify:t=>qc(t,8,"0")},Zf={identify:ci,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(t,n,e)=>cr(t,0,10,e),stringify:Tt},nm={identify:ci,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(t,n,e)=>cr(t,2,16,e),stringify:t=>qc(t,16,"0x")};class _e extends lt{constructor(n){super(n),this.tag=_e.tag}add(n){let e;e=$n(n)?n:typeof n=="object"&&"key"in n&&"value"in n&&n.value===null?new it(n.key,null):new it(n,null),Zt(this.items,e.key)||this.items.push(e)}get(n,e){const i=Zt(this.items,n);return!e&&$n(i)?Cn(i.key)?i.key.value:i.key:i}set(n,e){if(typeof e!="boolean")throw new Error("Expected boolean value for set(key, value) in a YAML set, not "+typeof e);const i=Zt(this.items,n);i&&!e?this.items.splice(this.items.indexOf(i),1):!i&&e&&this.items.push(new it(n))}toJSON(n,e){return super.toJSON(n,e,Set)}toString(n,e,i){if(!n)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},n,{allNullValues:!0}),e,i);throw new Error("Set items must all have null values")}}_e.tag="tag:yaml.org,2002:set";const zc={collection:"map",identify:t=>t instanceof Set,nodeClass:_e,default:!1,tag:"tag:yaml.org,2002:set",resolve(t,n){if(ve(t)){if(t.hasAllNullValues(!0))return Object.assign(new _e,t);n("Set items must all have null values")}else n("Expected a mapping for this tag");return t},createNode(t,n,e){const{replacer:i}=e,r=new _e(t);if(n&&Symbol.iterator in Object(n))for(let c of n)typeof i=="function"&&(c=i.call(n,c,c)),r.items.push(vc(c,null,e));return r}};function _c(t,n){const e=t[0],i=e==="-"||e==="+"?t.substring(1):t,r=o=>n?BigInt(o):Number(o),c=i.replace(/_/g,"").split(":").reduce((o,s)=>o*r(60)+r(s),r(0));return e==="-"?r(-1)*c:c}function Ia(t){let{value:n}=t,e=o=>o;if(typeof n=="bigint")e=o=>BigInt(o);else if(isNaN(n)||!isFinite(n))return Tt(t);let i="";n<0&&(i="-",n*=e(-1));const r=e(60),c=[n%r];return n<60?c.unshift(0):(n=(n-c[0])/r,c.unshift(n%r),n>=60&&(n=(n-c[0])/r,c.unshift(n))),i+c.map(o=>o<10?"0"+String(o):String(o)).join(":").replace(/000000\d*$/,"")}const Ka={identify:t=>typeof t=="bigint"||Number.isInteger(t),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(t,n,{intAsBigInt:e})=>_c(t,e),stringify:Ia},Pa={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:t=>_c(t,!1),stringify:Ia},or={identify:t=>t instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(t){const n=t.match(or.test);if(!n)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,e,i,r,c,o,s]=n.map(Number),a=n[7]?Number((n[7]+"00").substr(1,3)):0;let h=Date.UTC(e,i-1,r,c||0,o||0,s||0,a);const l=n[8];if(l&&l!=="Z"){let g=_c(l,!1);Math.abs(g)<30&&(g*=60),h-=6e4*g}return new Date(h)},stringify:({value:t})=>t.toISOString().replace(/((T00:00)?:00)?\.000Z$/,"")},Ra=[we,qe,tr,er,La,Oa,Yf,Jf,Zf,nm,Gf,Vf,Wf,xc,Tc,wc,zc,Ka,Pa,or],Ha={core:Xf,failsafe:[we,qe,tr],json:Ff,yaml11:Ra,"yaml-1.1":Ra},Qa={binary:xc,bool:kc,float:za,floatExp:qa,floatNaN:Ta,floatTime:Pa,int:Sa,intHex:Na,intOct:Ca,intTime:Ka,map:we,null:er,omap:Tc,pairs:wc,seq:qe,set:zc,timestamp:or},tm={"tag:yaml.org,2002:binary":xc,"tag:yaml.org,2002:omap":Tc,"tag:yaml.org,2002:pairs":wc,"tag:yaml.org,2002:set":zc,"tag:yaml.org,2002:timestamp":or},em=(t,n)=>t.key<n.key?-1:t.key>n.key?1:0;class im{constructor({customTags:n,merge:e,resolveKnownTags:i,schema:r,sortMapEntries:c}){this.merge=!!e,this.name=r||"core",this.knownTags=i?tm:{},this.tags=function(o,s){let a=Ha[s];if(!a){const h=Object.keys(Ha).filter(l=>l!=="yaml11").map(l=>JSON.stringify(l)).join(", ");throw new Error(`Unknown schema "${s}"; use one of ${h}`)}if(Array.isArray(o))for(const h of o)a=a.concat(h);else typeof o=="function"&&(a=o(a.slice()));return a.map(h=>{if(typeof h!="string")return h;const l=Qa[h];if(l)return l;const g=Object.keys(Qa).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag "${h}"; use one of ${g}`)})}(n,this.name),Object.defineProperty(this,Ot,{value:we}),Object.defineProperty(this,Wt,{value:tr}),Object.defineProperty(this,ye,{value:qe}),this.sortMapEntries=c===!0?em:c||null}}function oi(t,n,e,i){if(i&&typeof i=="object")if(Array.isArray(i))for(let r=0,c=i.length;r<c;++r){const o=i[r],s=oi(t,i,String(r),o);s===void 0?delete i[r]:s!==o&&(i[r]=s)}else if(i instanceof Map)for(const r of Array.from(i.keys())){const c=i.get(r),o=oi(t,i,r,c);o===void 0?i.delete(r):o!==c&&i.set(r,o)}else if(i instanceof Set)for(const r of Array.from(i)){const c=oi(t,i,r,r);c===void 0?i.delete(r):c!==r&&(i.delete(r),i.add(c))}else for(const[r,c]of Object.entries(i)){const o=oi(t,i,r,c);o===void 0?delete i[r]:o!==c&&(i[r]=o)}return t.call(n,e,i)}class Da{constructor(n,e,i){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ht,{value:ha});let r=null;typeof e=="function"||Array.isArray(e)?r=e:i===void 0&&e&&(i=e,e=void 0);const c=Object.assign({},xa,i);this.options=c;let{version:o}=c;i!=null&&i.directives?(this.directives=i.directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new et({version:o}),this.setSchema(o,i),this.contents=n===void 0?null:this.createNode(n,r,i)}add(n){Ce(this.contents)&&this.contents.add(n)}addIn(n,e){Ce(this.contents)&&this.contents.addIn(n,e)}createAlias(n,e){if(!n.anchor){const i=fa(this);n.anchor=!e||i.has(e)?ma(e||"a",i):e}return new fc(n.anchor)}createNode(n,e,i){let r;if(typeof e=="function")n=e.call({"":n},"",n),r=e;else if(Array.isArray(e)){const p=f=>typeof f=="number"||f instanceof String||f instanceof Number,m=e.filter(p).map(String);m.length>0&&(e=e.concat(m)),r=e}else i===void 0&&e&&(i=e,e=void 0);const{anchorPrefix:c,flow:o,keepUndefined:s,onTagObj:a,tag:h}=i||{},{onAnchor:l,setAnchors:g,sourceObjects:u}=function(p,m){const f=[],y=new Map;let d=null;return{onAnchor(x){f.push(x),d||(d=fa(p));const T=ma(m,d);return d.add(T),T},setAnchors(){for(const x of f){const T=y.get(x);if(typeof T!="object"||!T.anchor||!Cn(T.node)&&!En(T.node)){const z=new Error("Failed to resolve repeated object (this should not happen)");throw z.source=x,z}T.node.anchor=T.anchor}},sourceObjects:y}}(this,c||"a"),v=ii(n,h,{keepUndefined:s!=null&&s,onAnchor:l,onTagObj:a,replacer:r,schema:this.schema,sourceObjects:u});return o&&En(v)&&(v.flow=!0),g(),v}createPair(n,e,i={}){const r=this.createNode(n,null,i),c=this.createNode(e,null,i);return new it(r,c)}delete(n){return!!Ce(this.contents)&&this.contents.delete(n)}deleteIn(n){return ri(n)?this.contents!=null&&(this.contents=null,!0):!!Ce(this.contents)&&this.contents.deleteIn(n)}get(n,e){return En(this.contents)?this.contents.get(n,e):void 0}getIn(n,e){return ri(n)?!e&&Cn(this.contents)?this.contents.value:this.contents:En(this.contents)?this.contents.getIn(n,e):void 0}has(n){return!!En(this.contents)&&this.contents.has(n)}hasIn(n){return ri(n)?this.contents!==void 0:!!En(this.contents)&&this.contents.hasIn(n)}set(n,e){this.contents==null?this.contents=Fi(this.schema,[n],e):Ce(this.contents)&&this.contents.set(n,e)}setIn(n,e){ri(n)?this.contents=e:this.contents==null?this.contents=Fi(this.schema,Array.from(n),e):Ce(this.contents)&&this.contents.setIn(n,e)}setSchema(n,e){let i;switch(String(n)){case"1.1":this.directives.yaml.version="1.1",i=Object.assign({merge:!0,resolveKnownTags:!1,schema:"yaml-1.1"},e);break;case"1.2":this.directives.yaml.version="1.2",i=Object.assign({merge:!1,resolveKnownTags:!0,schema:"core"},e);break;default:{const r=JSON.stringify(n);throw new Error(`Expected '1.1' or '1.2' as version, but found: ${r}`)}}this.schema=new im(i)}toJS({json:n,jsonArg:e,mapAsMap:i,maxAliasCount:r,onAnchor:c,reviver:o}={}){const s={anchors:new Map,doc:this,keep:!n,mapAsMap:i===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100,stringify:xe},a=mt(this.contents,e||"",s);if(typeof c=="function")for(const{count:h,res:l}of s.anchors.values())c(l,h);return typeof o=="function"?oi(o,{"":a},"",a):a}toJSON(n,e){return this.toJS({json:!0,jsonArg:n,mapAsMap:!1,onAnchor:e})}toString(n={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in n&&(!Number.isInteger(n.indent)||Number(n.indent)<=0)){const e=JSON.stringify(n.indent);throw new Error(`"indent" option must be a positive integer, not ${e}`)}return function(e,i){const r=[];let c=i.directives===!0;if(i.directives!==!1){const h=e.directives.toString(e);h?(r.push(h),c=!0):e.directives.marker&&(c=!0)}c&&r.push("---"),e.commentBefore&&(r.length!==1&&r.unshift(""),r.unshift(e.commentBefore.replace(/^/gm,"#")));const o=va(e,i);let s=!1,a=null;if(e.contents){Zn(e.contents)&&(e.contents.spaceBefore&&c&&r.push(""),e.contents.commentBefore&&r.push(e.contents.commentBefore.replace(/^/gm,"#")),o.forceBlockIndent=!!e.comment,a=e.contents.comment);const h=a?void 0:()=>s=!0;let l=xe(e.contents,o,()=>a=null,h);a&&(l=be(l,"",a)),l[0]!=="|"&&l[0]!==">"||r[r.length-1]!=="---"?r.push(l):r[r.length-1]=`--- ${l}`}else r.push(xe(e.contents,o));return e.comment&&(s&&!a||r[r.length-1]===""||r.push(""),r.push(e.comment.replace(/^/gm,"#"))),r.join(`
`)+`
`}(this,n)}}function Ce(t){if(En(t))return!0;throw new Error("Expected a YAML collection as document contents")}class ja extends Error{constructor(n,e,i,r){super(),this.name=n,this.code=i,this.message=r,this.pos=e}}class si extends ja{constructor(n,e,i){super("YAMLParseError",n,e,i)}}class rm extends ja{constructor(n,e,i){super("YAMLWarning",n,e,i)}}const Ba=(t,n)=>e=>{if(e.pos[0]===-1)return;e.linePos=e.pos.map(s=>n.linePos(s));const{line:i,col:r}=e.linePos[0];e.message+=` at line ${i}, column ${r}`;let c=r-1,o=t.substring(n.lineStarts[i-1],n.lineStarts[i]).replace(/[\n\r]+$/,"");if(c>=60&&o.length>80){const s=Math.min(c-39,o.length-79);o="…"+o.substring(s),c-=s-1}if(o.length>80&&(o=o.substring(0,79)+"…"),i>1&&/^ *$/.test(o.substring(0,c))){let s=t.substring(n.lineStarts[i-2],n.lineStarts[i-1]);s.length>80&&(s=s.substring(0,79)+`…
`),o=s+o}if(/[^ ]/.test(o)){let s=1;const a=e.linePos[1];a&&a.line===i&&a.col>r&&(s=Math.min(a.col-r,80-c));const h=" ".repeat(c)+"^".repeat(s);e.message+=`:

${o}
${h}
`}};function Se(t,{ctx:n,flow:e,indicator:i,offset:r,onError:c,startOnNewline:o}){let s=!1,a=o,h=o,l="",g="",u=!1,v=null,p=null,m=null,f=null,y=null;for(const T of t)switch(T.type){case"space":!e&&a&&i!=="doc-start"&&T.source[0]==="	"&&c(T,"TAB_AS_INDENT","Tabs are not allowed as indentation"),h=!0;break;case"comment":{n.options.strict&&!h&&c(T,"COMMENT_SPACE","Comments must be separated from other tokens by white space characters");const z=T.source.substring(1);l?l+=g+z:l=z,g="";break}case"newline":a&&!l&&(s=!0),a=!0,u=!0,h=!0,g+=T.source;break;case"anchor":v&&c(T,"MULTIPLE_ANCHORS","A node can have at most one anchor"),v=T,y===null&&(y=T.offset),a=!1,h=!1;break;case"tag":p&&c(T,"MULTIPLE_TAGS","A node can have at most one tag"),p=T,y===null&&(y=T.offset),a=!1,h=!1;break;case i:(v||p)&&c(T,"BAD_PROP_ORDER",`Anchors and tags must be after the ${T.source} indicator`),f=T,a=!1,h=!1;break;case"comma":if(e){m&&c(T,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),m=T,a=!1,h=!1;break}default:c(T,"UNEXPECTED_TOKEN",`Unexpected ${T.type} token`),a=!1,h=!1}const d=t[t.length-1],x=d?d.offset+d.source.length:r;return{comma:m,found:f,spaceBefore:s,comment:l,hasNewline:u,anchor:v,tag:p,end:x,start:y??x}}function sr(t){if(!t)return null;switch(t.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(t.source.includes(`
`))return!0;if(t.end){for(const n of t.end)if(n.type==="newline")return!0}return!1;case"flow-collection":for(const n of t.items){for(const e of n.start)if(e.type==="newline")return!0;if(n.sep){for(const e of n.sep)if(e.type==="newline")return!0}if(sr(n.key)||sr(n.value))return!0}return!1;default:return!0}}const Ua="All mapping items must start at the same column";function ai(t,n,e,i){let r="";if(t){let c=!1,o="";for(const s of t){const{source:a,type:h}=s;switch(h){case"space":c=!0;break;case"comment":{e&&!c&&i(s,"COMMENT_SPACE","Comments must be separated from other tokens by white space characters");const l=a.substring(1);r?r+=o+l:r=l,o="";break}case"newline":r&&(o+=a),c=!0;break;default:i(s,"UNEXPECTED_TOKEN",`Unexpected ${h} at node end`)}n+=a.length}}return{comment:r,offset:n}}const Cc="Block collections are not allowed within flow collections",Sc=t=>t&&(t.type==="block-map"||t.type==="block-seq");function cm(t,n,e,i,r){let c;switch(e.type){case"block-map":c=function({composeNode:u,composeEmptyNode:v},p,m,f){var y;const d=new lt(p.schema);let x=m.offset;for(const{start:T,key:z,sep:_,value:D}of m.items){const F=Se(T,{ctx:p,indicator:"explicit-key-ind",offset:x,onError:f,startOnNewline:!0}),cn=!F.found;if(cn){if(z&&(z.type==="block-seq"?f(x,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in z&&z.indent!==m.indent&&f(x,"BAD_INDENT",Ua)),!F.anchor&&!F.tag&&!_){F.comment&&(d.comment?d.comment+=`
`+F.comment:d.comment=F.comment);continue}}else((y=F.found)===null||y===void 0?void 0:y.indent)!==m.indent&&f(x,"BAD_INDENT",Ua);cn&&sr(z)&&f(z,"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line");const R=F.end,J=z?u(p,z,F,f):v(p,R,T,null,F,f),O=Se(_||[],{ctx:p,indicator:"map-value-ind",offset:J.range[2],onError:f,startOnNewline:!z||z.type==="block-scalar"});if(x=O.end,O.found){cn&&((D==null?void 0:D.type)!=="block-map"||O.hasNewline||f(x,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),p.options.strict&&F.start<O.found.offset-1024&&f(J.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const P=D?u(p,D,O,f):v(p,x,_,null,O,f);x=P.range[2],d.items.push(new it(J,P))}else cn&&f(J.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),O.comment&&(J.comment?J.comment+=`
`+O.comment:J.comment=O.comment),d.items.push(new it(J))}return d.range=[m.offset,x,x],d}(t,n,e,r);break;case"block-seq":c=function({composeNode:u,composeEmptyNode:v},p,m,f){const y=new Te(p.schema);let d=m.offset;for(const{start:x,value:T}of m.items){const z=Se(x,{ctx:p,indicator:"seq-item-ind",offset:d,onError:f,startOnNewline:!0});if(d=z.end,!z.found){if(!(z.anchor||z.tag||T)){z.comment&&(y.comment=z.comment);continue}T&&T.type==="block-seq"?f(d,"BAD_INDENT","All sequence items must start at the same column"):f(d,"MISSING_CHAR","Sequence item without - indicator")}const _=T?u(p,T,z,f):v(p,d,x,null,z,f);d=_.range[2],y.items.push(_)}return y.range=[m.offset,d,d],y}(t,n,e,r);break;case"flow-collection":c=function({composeNode:u,composeEmptyNode:v},p,m,f){const y=m.start.source==="{",d=y?"flow map":"flow sequence",x=y?new lt(p.schema):new Te(p.schema);x.flow=!0;let T=m.offset;for(let cn=0;cn<m.items.length;++cn){const{start:R,key:J,sep:O,value:P}=m.items[cn],E=Se(R,{ctx:p,flow:d,indicator:"explicit-key-ind",offset:T,onError:f,startOnNewline:!1});if(!E.found){if(!(E.anchor||E.tag||O||P)){cn===0&&E.comma?f(E.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${d}`):cn<m.items.length-1&&f(E.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${d}`),E.comment&&(x.comment?x.comment+=`
`+E.comment:x.comment=E.comment);continue}!y&&p.options.strict&&sr(J)&&f(J,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(cn===0)E.comma&&f(E.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${d}`);else if(E.comma||f(E.start,"MISSING_CHAR",`Missing , between ${d} items`),E.comment){let B="";n:for(const C of R)switch(C.type){case"comma":case"space":break;case"comment":B=C.source.substring(1);break n;default:break n}if(B){let C=x.items[x.items.length-1];$n(C)&&(C=C.value||C.key),C.comment?C.comment+=`
`+B:C.comment=B,E.comment=E.comment.substring(B.length+1)}}if(y||O||E.found){const B=E.end,C=J?u(p,J,E,f):v(p,B,R,null,E,f);Sc(J)&&f(C.range,"BLOCK_IN_FLOW",Cc);const W=Se(O||[],{ctx:p,flow:d,indicator:"map-value-ind",offset:C.range[2],onError:f,startOnNewline:!1});if(W.found){if(!y&&!E.found&&p.options.strict){if(O)for(const In of O){if(In===W.found)break;if(In.type==="newline"){f(In,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}E.start<W.found.offset-1024&&f(W.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else P&&("source"in P&&P.source&&P.source[0]===":"?f(P,"MISSING_CHAR",`Missing space after : in ${d}`):f(W.start,"MISSING_CHAR",`Missing , or : between ${d} items`));const rn=P?u(p,P,W,f):W.found?v(p,W.end,O,null,W,f):null;rn?Sc(P)&&f(rn.range,"BLOCK_IN_FLOW",Cc):W.comment&&(C.comment?C.comment+=`
`+W.comment:C.comment=W.comment);const Mn=new it(C,rn);if(y)x.items.push(Mn);else{const In=new lt(p.schema);In.flow=!0,In.items.push(Mn),x.items.push(In)}T=rn?rn.range[2]:W.end}else{const B=P?u(p,P,E,f):v(p,E.end,O,null,E,f);x.items.push(B),T=B.range[2],Sc(P)&&f(B.range,"BLOCK_IN_FLOW",Cc)}}const z=y?"}":"]",[_,...D]=m.end;let F=T;if(_&&_.source===z?F+=_.source.length:(f(T+1,"MISSING_CHAR",`Expected ${d} to end with ${z}`),_&&_.source.length!==1&&D.unshift(_)),D.length>0){const cn=ai(D,F,p.options.strict,f);cn.comment&&(x.comment?x.comment+=`
`+cn.comment:x.comment=cn.comment),x.range=[m.offset,F,cn.offset]}else x.range=[m.offset,F,F];return x}(t,n,e,r)}if(!i)return c;const o=n.directives.tagName(i.source,u=>r(i,"TAG_RESOLVE_FAILED",u));if(!o)return c;const s=c.constructor;if(o==="!"||o===s.tagName)return c.tag=s.tagName,c;const a=ve(c)?"map":"seq";let h=n.schema.tags.find(u=>u.collection===a&&u.tag===o);if(!h){const u=n.schema.knownTags[o];if(!u||u.collection!==a)return r(i,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),c.tag=o,c;n.schema.tags.push(Object.assign({},u,{default:!1})),h=u}const l=h.resolve(c,u=>r(i,"TAG_RESOLVE_FAILED",u),n.options),g=Zn(l)?l:new tn(l);return g.range=c.range,g.tag=o,h!=null&&h.format&&(g.format=h.format),g}function om(t,n,e){const i=t.offset,r=function({offset:m,props:f},y,d){if(f[0].type!=="block-scalar-header")return d(f[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:x}=f[0],T=x[0];let z=0,_="",D=-1;for(let J=1;J<x.length;++J){const O=x[J];if(_||O!=="-"&&O!=="+"){const P=Number(O);!z&&P?z=P:D===-1&&(D=m+J)}else _=O}D!==-1&&d(D,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${x}`);let F=!1,cn="",R=x.length;for(let J=1;J<f.length;++J){const O=f[J];switch(O.type){case"space":F=!0;case"newline":R+=O.source.length;break;case"comment":y&&!F&&d(O,"COMMENT_SPACE","Comments must be separated from other tokens by white space characters"),R+=O.source.length,cn=O.source.substring(1);break;case"error":d(O,"UNEXPECTED_TOKEN",O.message),R+=O.source.length;break;default:{d(O,"UNEXPECTED_TOKEN",`Unexpected token in block scalar header: ${O.type}`);const P=O.source;P&&typeof P=="string"&&(R+=P.length)}}}return{mode:T,indent:z,chomp:_,comment:cn,length:R}}(t,n,e);if(!r)return{value:"",type:null,comment:"",range:[i,i,i]};const c=r.mode===">"?tn.BLOCK_FOLDED:tn.BLOCK_LITERAL,o=t.source?function(m){const f=m.split(/\n( *)/),y=f[0],d=y.match(/^( *)/),x=[d&&d[1]?[d[1],y.slice(d[1].length)]:["",y]];for(let T=1;T<f.length;T+=2)x.push([f[T],f[T+1]]);return x}(t.source):[];let s=o.length;for(let m=o.length-1;m>=0;--m){const f=o[m][1];if(f!==""&&f!=="\r")break;s=m}if(!t.source||s===0){const m=r.chomp==="+"?o.map(y=>y[0]).join(`
`):"";let f=i+r.length;return t.source&&(f+=t.source.length),{value:m,type:c,comment:r.comment,range:[i,f,f]}}let a=t.indent+r.indent,h=t.offset+r.length,l=0;for(let m=0;m<s;++m){const[f,y]=o[m];if(y!==""&&y!=="\r"){f.length<a&&e(h+f.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),r.indent===0&&(a=f.length),l=m;break}r.indent===0&&f.length>a&&(a=f.length),h+=f.length+y.length+1}let g="",u="",v=!1;for(let m=0;m<l;++m)g+=o[m][0].slice(a)+`
`;for(let m=l;m<s;++m){let[f,y]=o[m];h+=f.length+y.length+1;const d=y[y.length-1]==="\r";if(d&&(y=y.slice(0,-1)),y&&f.length<a){const x=`Block scalar lines must not be less indented than their ${r.indent?"explicit indentation indicator":"first line"}`;e(h-y.length-(d?2:1),"BAD_INDENT",x),f=""}c===tn.BLOCK_LITERAL?(g+=u+f.slice(a)+y,u=`
`):f.length>a||y[0]==="	"?(u===" "?u=`
`:v||u!==`
`||(u=`

`),g+=u+f.slice(a)+y,u=`
`,v=!0):y===""?u===`
`?g+=`
`:u=`
`:(g+=u+y,u=" ",v=!1)}switch(r.chomp){case"-":break;case"+":for(let m=s;m<o.length;++m)g+=`
`+o[m][0].slice(a);g[g.length-1]!==`
`&&(g+=`
`);break;default:g+=`
`}const p=i+r.length+t.source.length;return{value:g,type:c,comment:r.comment,range:[i,p,p]}}function sm(t,n,e){const{offset:i,type:r,source:c,end:o}=t;let s,a;const h=(u,v,p)=>e(i+u,v,p);switch(r){case"scalar":s=tn.PLAIN,a=function(u,v){let p="";switch(u[0]){case"	":p="Plain value cannot start with a tab character";break;case"|":case">":p=`Plain value cannot start with block scalar indicator ${u[0]}`;break;case"@":case"`":p=`Plain value cannot start with reserved character ${u[0]}`}return p&&v(0,"BAD_SCALAR_START",p),Xa(u)}(c,h);break;case"single-quoted-scalar":s=tn.QUOTE_SINGLE,a=function(u,v){return u[u.length-1]==="'"&&u.length!==1||v(u.length,"MISSING_CHAR","Missing closing 'quote"),Xa(u.slice(1,-1)).replace(/''/g,"'")}(c,h);break;case"double-quoted-scalar":s=tn.QUOTE_DOUBLE,a=function(u,v){let p="";for(let m=1;m<u.length-1;++m){const f=u[m];if(f!=="\r"||u[m+1]!==`
`)if(f===`
`){const{fold:y,offset:d}=am(u,m);p+=y,m=d}else if(f==="\\"){let y=u[++m];const d=hm[y];if(d)p+=d;else if(y===`
`)for(y=u[m+1];y===" "||y==="	";)y=u[1+ ++m];else if(y==="x"||y==="u"||y==="U"){const x={x:2,u:4,U:8}[y];p+=lm(u,m+1,x,v),m+=x}else{const x=u.substr(m-1,2);v(m-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${x}`),p+=x}}else if(f===" "||f==="	"){const y=m;let d=u[m+1];for(;d===" "||d==="	";)d=u[1+ ++m];d!==`
`&&(p+=m>y?u.slice(y,m+1):f)}else p+=f}return u[u.length-1]==='"'&&u.length!==1||v(u.length,"MISSING_CHAR",'Missing closing "quote'),p}(c,h);break;default:return e(t,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${r}`),{value:"",type:null,comment:"",range:[i,i+c.length,i+c.length]}}const l=i+c.length,g=ai(o,l,n,e);return{value:a,type:s,comment:g.comment,range:[i,l,g.offset]}}function Xa(t){let n,e;try{n=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),e=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{n=/(.*?)[ \t]*\r?\n/ys,e=/[ \t]*(.*?)[ \t]*\r?\n/ys}let i=n.exec(t);if(!i)return t;let r=i[1],c=" ",o=n.lastIndex;for(e.lastIndex=o;i=e.exec(t);)i[1]===""?c===`
`?r+=c:c=`
`:(r+=c+i[1],c=" "),o=e.lastIndex;const s=/[ \t]*(.*)/ys;return s.lastIndex=o,i=s.exec(t),r+c+(i&&i[1]||"")}function am(t,n){let e="",i=t[n+1];for(;!(i!==" "&&i!=="	"&&i!==`
`&&i!=="\r"||i==="\r"&&t[n+2]!==`
`);)i===`
`&&(e+=`
`),i=t[(n+=1)+1];return e||(e=" "),{fold:e,offset:n}}const hm={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function lm(t,n,e,i){const r=t.substr(n,e),c=r.length===e&&/^[0-9a-fA-F]+$/.test(r)?parseInt(r,16):NaN;if(isNaN(c)){const o=t.substr(n-2,e+2);return i(n-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(c)}function Fa(t,n,e,i){const{value:r,type:c,comment:o,range:s}=n.type==="block-scalar"?om(n,t.options.strict,i):sm(n,t.options.strict,i),a=e?t.directives.tagName(e.source,g=>i(e,"TAG_RESOLVE_FAILED",g)):null,h=e&&a?function(g,u,v,p,m){var f;if(v==="!")return g[Wt];const y=[];for(const x of g.tags)if(!x.collection&&x.tag===v){if(!x.default||!x.test)return x;y.push(x)}for(const x of y)if(!((f=x.test)===null||f===void 0)&&f.test(u))return x;const d=g.knownTags[v];return d&&!d.collection?(g.tags.push(Object.assign({},d,{default:!1,test:void 0})),d):(m(p,"TAG_RESOLVE_FAILED",`Unresolved tag: ${v}`,v!=="tag:yaml.org,2002:str"),g[Wt])}(t.schema,r,a,e,i):function(g,u,v){var p;if(v){for(const m of g.tags)if(m.default&&(!((p=m.test)===null||p===void 0)&&p.test(u)))return m}return g[Wt]}(t.schema,r,n.type==="scalar");let l;try{const g=h.resolve(r,u=>i(e||n,"TAG_RESOLVE_FAILED",u),t.options);l=Cn(g)?g:new tn(g)}catch(g){i(e||n,"TAG_RESOLVE_FAILED",g.message),l=new tn(r)}return l.range=s,l.source=r,c&&(l.type=c),a&&(l.tag=a),h.format&&(l.format=h.format),o&&(l.comment=o),l}function um(t,n,e){if(n){e===null&&(e=n.length);for(let i=e-1;i>=0;--i){let r=n[i];switch(r.type){case"space":case"comment":case"newline":t-=r.source.length;continue}for(r=n[++i];(r==null?void 0:r.type)==="space";)t+=r.source.length,r=n[++i];break}}return t}const gm={composeNode:Ga,composeEmptyNode:Va};function Ga(t,n,e,i){const{spaceBefore:r,comment:c,anchor:o,tag:s}=e;let a;switch(n.type){case"alias":a=function({options:h},{offset:l,source:g,end:u},v){const p=new fc(g.substring(1)),m=l+g.length,f=ai(u,m,h.strict,v);return p.range=[l,m,f.offset],f.comment&&(p.comment=f.comment),p}(t,n,i),(o||s)&&i(n,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":a=Fa(t,n,s,i),o&&(a.anchor=o.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":a=cm(gm,t,n,s,i),o&&(a.anchor=o.source.substring(1));break;default:throw console.log(n),new Error(`Unsupporten token type: ${n.type}`)}return r&&(a.spaceBefore=!0),c&&(n.type==="scalar"&&n.source===""?a.comment=c:a.commentBefore=c),a}function Va(t,n,e,i,{spaceBefore:r,comment:c,anchor:o,tag:s},a){const h=Fa(t,{type:"scalar",offset:um(n,e,i),indent:-1,source:""},s,a);return o&&(h.anchor=o.source.substring(1)),r&&(h.spaceBefore=!0),c&&(h.comment=c),h}function hi(t){if(typeof t=="number")return[t,t+1];if(Array.isArray(t))return t.length===2?t:[t[0],t[1]];const{offset:n,source:e}=t;return[n,n+(typeof e=="string"?e.length:1)]}function Wa(t){let n="",e=!1,i=!1;for(let r=0;r<t.length;++r){const c=t[r];switch(c[0]){case"#":n+=(n===""?"":i?`

`:`
`)+c.substring(1),e=!0,i=!1;break;case"%":t[r+1][0]!=="#"&&(r+=1),e=!1;break;default:e||(i=!0),e=!1}}return{comment:n,afterEmptyLine:i}}class fm{constructor(n={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(e,i,r,c)=>{const o=hi(e);c?this.warnings.push(new rm(o,i,r)):this.errors.push(new si(o,i,r))},this.directives=new et({version:n.version||xa.version}),this.options=n}decorate(n,e){const{comment:i,afterEmptyLine:r}=Wa(this.prelude);if(i){const c=n.contents;if(e)n.comment=n.comment?`${n.comment}
${i}`:i;else if(r||n.directives.marker||!c)n.commentBefore=i;else if(En(c)&&!c.flow&&c.items.length>0){let o=c.items[0];$n(o)&&(o=o.key);const s=o.commentBefore;o.commentBefore=s?`${i}
${s}`:i}else{const o=c.commentBefore;c.commentBefore=o?`${i}
${o}`:i}}e?(Array.prototype.push.apply(n.errors,this.errors),Array.prototype.push.apply(n.warnings,this.warnings)):(n.errors=this.errors,n.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Wa(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(n,e=!1,i=-1){for(const r of n)yield*this.next(r);yield*this.end(e,i)}*next(n){switch(n.type){case"directive":this.directives.add(n.source,(e,i,r)=>{const c=hi(n);c[0]+=e,this.onError(c,"BAD_DIRECTIVE",i,r)}),this.prelude.push(n.source),this.atDirectives=!0;break;case"document":{const e=function(i,r,{offset:c,start:o,value:s,end:a},h){const l=Object.assign({directives:r},i),g=new Da(void 0,l),u={directives:g.directives,options:g.options,schema:g.schema},v=Se(o,{ctx:u,indicator:"doc-start",offset:c,onError:h,startOnNewline:!0});v.found&&(g.directives.marker=!0,!s||s.type!=="block-map"&&s.type!=="block-seq"||v.hasNewline||h(v.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),g.contents=s?Ga(u,s,v,h):Va(u,v.end,o,null,v,h);const p=g.contents.range[2],m=ai(a,p,!1,h);return m.comment&&(g.comment=m.comment),g.range=[c,p,m.offset],g}(this.options,this.directives,n,this.onError);this.atDirectives&&!e.directives.marker&&this.onError(n,"MISSING_CHAR","Missing directives-end indicator line"),this.decorate(e,!1),this.doc&&(yield this.doc),this.doc=e,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(n.source);break;case"error":{const e=n.source?`${n.message}: ${JSON.stringify(n.source)}`:n.message,i=new si(hi(n),"UNEXPECTED_TOKEN",e);this.atDirectives||!this.doc?this.errors.push(i):this.doc.errors.push(i);break}case"doc-end":{if(!this.doc){const i="Unexpected doc-end without preceding document";this.errors.push(new si(hi(n),"UNEXPECTED_TOKEN",i));break}const e=ai(n.end,n.offset+n.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),e.comment){const i=this.doc.comment;this.doc.comment=i?`${i}
${e.comment}`:e.comment}this.doc.range[2]=e.offset;break}default:this.errors.push(new si(hi(n),"UNEXPECTED_TOKEN",`Unsupported token ${n.type}`))}}*end(n=!1,e=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(n){const i=Object.assign({directives:this.directives},this.options),r=new Da(void 0,i);this.atDirectives&&this.onError(e,"MISSING_CHAR","Missing directives-end indicator line"),r.range=[0,e,e],this.decorate(r,!1),yield r}}}function rt(t){switch(t){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Ya=[",","[","]","{","}"],mm=[" ",",","[","]","{","}",`
`,"\r","	"],Nc=t=>!t||mm.includes(t);class pm{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.next=null,this.pos=0}*lex(n,e=!1){n&&(this.buffer=this.buffer?this.buffer+n:n),this.atEnd=!e;let i=this.next||"stream";for(;i&&(e||this.hasChars(1));)i=yield*this.parseNext(i)}atLineEnd(){let n=this.pos,e=this.buffer[n];for(;e===" "||e==="	";)e=this.buffer[++n];return!e||e==="#"||e===`
`||e==="\r"&&this.buffer[n+1]===`
`}charAt(n){return this.buffer[this.pos+n]}continueScalar(n){let e=this.buffer[n];if(this.indentNext>0){let i=0;for(;e===" ";)e=this.buffer[++i+n];if(e==="\r"){const r=this.buffer[i+n+1];if(r===`
`||!r&&!this.atEnd)return n+i+1}return e===`
`||i>=this.indentNext||!e&&!this.atEnd?n+i:-1}if(e==="-"||e==="."){const i=this.buffer.substr(n,3);if((i==="---"||i==="...")&&rt(this.buffer[n+3]))return-1}return n}getLine(){let n=this.buffer.indexOf(`
`,this.pos);return n===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[n-1]==="\r"&&(n-=1),this.buffer.substring(this.pos,n))}hasChars(n){return this.pos+n<=this.buffer.length}setNext(n){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.next=n,null}peek(n){return this.buffer.substr(this.pos,n)}*parseNext(n){switch(n){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let n=this.getLine();if(n===null)return this.setNext("stream");if(n[0]==="\uFEFF"&&(yield*this.pushCount(1),n=n.substring(1)),n[0]==="%"){let e=n.length;const i=n.indexOf("#");if(i!==-1){const c=n[i-1];c!==" "&&c!=="	"||(e=i-1)}for(;;){const c=n[e-1];if(c!==" "&&c!=="	")break;e-=1}const r=(yield*this.pushCount(e))+(yield*this.pushSpaces(!0));return yield*this.pushCount(n.length-r),this.pushNewline(),"stream"}if(this.atLineEnd()){const e=yield*this.pushSpaces(!0);return yield*this.pushCount(n.length-e),yield*this.pushNewline(),"stream"}return yield"",yield*this.parseLineStart()}*parseLineStart(){const n=this.charAt(0);if(!n&&!this.atEnd)return this.setNext("line-start");if(n==="-"||n==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const e=this.peek(3);if(e==="---"&&rt(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,"doc";if(e==="..."&&rt(this.charAt(3)))return yield*this.pushCount(3),"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!rt(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[n,e]=this.peek(2);if(!e&&!this.atEnd)return this.setNext("block-start");if((n==="-"||n==="?"||n===":")&&rt(e)){const i=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=i,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const n=this.getLine();if(n===null)return this.setNext("doc");let e=yield*this.pushIndicators();switch(n[e]){case"#":yield*this.pushCount(n.length-e);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Nc),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return e+=yield*this.parseBlockScalarHeader(),e+=yield*this.pushSpaces(!0),yield*this.pushCount(n.length-e),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let n,e,i=-1;do n=yield*this.pushNewline(),e=yield*this.pushSpaces(!0),n>0&&(this.indentValue=i=e);while(n+e>0);const r=this.getLine();if(r===null)return this.setNext("flow");if((i!==-1&&i<this.indentNext||i===0&&(r.startsWith("---")||r.startsWith("..."))&&rt(r[3]))&&!(i===this.indentNext-1&&this.flowLevel===1&&(r[0]==="]"||r[0]==="}")))return this.flowLevel=0,yield"",yield*this.parseLineStart();let c=0;for(;r[c]===",";)c+=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));switch(c+=yield*this.pushIndicators(),r[c]){case void 0:return"flow";case"#":return yield*this.pushCount(r.length-c),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Nc),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const o=this.charAt(1);if(this.flowKey||rt(o)||o===",")return yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const n=this.charAt(0);let e=this.buffer.indexOf(n,this.pos+1);if(n==="'")for(;e!==-1&&this.buffer[e+1]==="'";)e=this.buffer.indexOf("'",e+2);else for(;e!==-1;){let r=0;for(;this.buffer[e-1-r]==="\\";)r+=1;if(r%2==0)break;e=this.buffer.indexOf('"',e+1)}let i=this.buffer.indexOf(`
`,this.pos);if(i!==-1&&i<e){for(;i!==-1&&i<e;){const r=this.continueScalar(i+1);if(r===-1)break;i=this.buffer.indexOf(`
`,r)}i!==-1&&i<e&&(e=i-1)}if(e===-1){if(!this.atEnd)return this.setNext("quoted-scalar");e=this.buffer.length}return yield*this.pushToIndex(e+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let n=this.pos;for(;;){const e=this.buffer[++n];if(e==="+")this.blockScalarKeep=!0;else if(e>"0"&&e<="9")this.blockScalarIndent=Number(e)-1;else if(e!=="-")break}return yield*this.pushUntil(e=>rt(e)||e==="#")}*parseBlockScalar(){let n,e=this.pos-1,i=0;n:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case" ":i+=1;break;case`
`:e=r,i=0;break;case"\r":{const c=this.buffer[r+1];if(!c&&!this.atEnd)return this.setNext("block-scalar");if(c===`
`)break}default:break n}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(i>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=i:this.indentNext+=this.blockScalarIndent;do{const r=this.continueScalar(e+1);if(r===-1)break;e=this.buffer.indexOf(`
`,r)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}if(!this.blockScalarKeep)for(;;){let r=e-1,c=this.buffer[r];for(c==="\r"&&(c=this.buffer[--r]);c===" "||c==="	";)c=this.buffer[--r];if(!(c===`
`&&r>=this.pos))break;e=r}return yield"",yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const n=this.flowLevel>0;let e,i=this.pos-1,r=this.pos-1;for(;e=this.buffer[++r];)if(e===":"){const c=this.buffer[r+1];if(rt(c)||n&&c===",")break;i=r}else if(rt(e)){const c=this.buffer[r+1];if(c==="#"||n&&Ya.includes(c))break;if(e==="\r"&&(c===`
`?(r+=1,e=`
`):i=r),e===`
`){const o=this.continueScalar(r+1);if(o===-1)break;r=Math.max(r,o-2)}}else{if(n&&Ya.includes(e))break;i=r}return e||this.atEnd?(yield"",yield*this.pushToIndex(i+1,!0),n?"flow":"doc"):this.setNext("plain-scalar")}*pushCount(n){return n>0?(yield this.buffer.substr(this.pos,n),this.pos+=n,n):0}*pushToIndex(n,e){const i=this.buffer.slice(this.pos,n);return i?(yield i,this.pos+=i.length,i.length):(e&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":if(this.charAt(1)==="<")return(yield*this.pushVerbatimTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Nc))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case":":case"?":case"-":if(rt(this.charAt(1)))return this.flowLevel===0&&(this.indentNext=this.indentValue+1),(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}return 0}*pushVerbatimTag(){let n=this.pos+2,e=this.buffer[n];for(;!rt(e)&&e!==">";)e=this.buffer[++n];return yield*this.pushToIndex(e===">"?n+1:n,!1)}*pushNewline(){const n=this.buffer[this.pos];return n===`
`?yield*this.pushCount(1):n==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(n){let e,i=this.pos-1;do e=this.buffer[++i];while(e===" "||n&&e==="	");const r=i-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=i),r}*pushUntil(n){let e=this.pos,i=this.buffer[e];for(;!n(i);)i=this.buffer[++e];return yield*this.pushToIndex(e,!1)}}class dm{constructor(){this.lineStarts=[],this.addNewLine=n=>this.lineStarts.push(n),this.linePos=n=>{let e=0,i=this.lineStarts.length;for(;e<i;){const r=e+i>>1;this.lineStarts[r]<n?e=r+1:i=r}return this.lineStarts[e]===n?{line:e+1,col:1}:e===0?{line:0,col:n}:{line:e,col:n-this.lineStarts[e-1]+1}}}}function pt(t,n){for(let e=0;e<t.length;++e)if(t[e].type===n)return!0;return!1}function Ec(t){for(let n=0;n<t.length;++n)switch(t[n].type){case"space":case"comment":case"newline":break;default:return!0}return!1}function Ja(t){let n=!1;for(let e=0;e<t.length;++e)switch(t[e].type){case"space":break;case"comment":n=!0;break;case"newline":if(!n)return!1;break;default:return!1}if(n)for(let e=t.length-1;e>=0;--e)switch(t[e].type){case"space":break;case"newline":return!0;default:return!1}return!1}function Za(t){switch(t==null?void 0:t.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function ar(t){switch(t.type){case"document":return t.start;case"block-map":{const n=t.items[t.items.length-1];return n.sep||n.start}case"block-seq":return t.items[t.items.length-1].start;default:return[]}}function li(t){var n;if(t.length===0)return[];let e=t.length;n:for(;--e>=0;)switch(t[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break n}for(;((n=t[++e])===null||n===void 0?void 0:n.type)==="space";);return t.splice(e,t.length)}function nh(t){if(t.start.type==="flow-seq-start")for(const n of t.items)!n.sep||n.value||pt(n.start,"explicit-key-ind")||pt(n.sep,"map-value-ind")||(n.key&&(n.value=n.key),delete n.key,Za(n.value)?n.value.end?Array.prototype.push.apply(n.value.end,n.sep):n.value.end=n.sep:Array.prototype.push.apply(n.start,n.sep),delete n.sep)}class ym{constructor(n){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new pm,this.onNewLine=n}*parse(n,e=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const i of this.lexer.lex(n,e))yield*this.next(i);e||(yield*this.end())}*next(n){if(this.source=n,this.atScalar)return this.atScalar=!1,yield*this.step(),void(this.offset+=n.length);const e=function(i){switch(i){case"\uFEFF":return"byte-order-mark";case"":return"doc-mode";case"":return"flow-error-end";case"":return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(i[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}(n);if(e)if(e==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=e,yield*this.step(),e){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+n.length);break;case"space":this.atNewLine&&n[0]===" "&&(this.indent+=n.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=n.length);break;case"doc-mode":return;default:this.atNewLine=!1}this.offset+=n.length}else{const i=`Not a YAML token: ${n}`;yield*this.pop({type:"error",offset:this.offset,message:i,source:n}),this.offset+=n.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const n=this.peek(1);if(this.type!=="doc-end"||n&&n.type==="doc-end"){if(!n)return yield*this.stream();switch(n.type){case"document":return yield*this.document(n);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(n);case"block-scalar":return yield*this.blockScalar(n);case"block-map":return yield*this.blockMap(n);case"block-seq":return yield*this.blockSequence(n);case"flow-collection":return yield*this.flowCollection(n);case"doc-end":return yield*this.documentEnd(n)}yield*this.pop()}else{for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source})}}peek(n){return this.stack[this.stack.length-n]}*pop(n){const e=n||this.stack.pop();if(e)if(this.stack.length===0)yield e;else{const i=this.peek(1);switch(e.type!=="block-scalar"&&e.type!=="flow-collection"||(e.indent="indent"in i?i.indent:-1),e.type==="flow-collection"&&nh(e),i.type){case"document":i.value=e;break;case"block-scalar":i.props.push(e);break;case"block-map":{const r=i.items[i.items.length-1];if(r.value)return i.items.push({start:[],key:e,sep:[]}),void(this.onKeyLine=!0);if(!r.sep)return Object.assign(r,{key:e,sep:[]}),void(this.onKeyLine=!pt(r.start,"explicit-key-ind"));r.value=e;break}case"block-seq":{const r=i.items[i.items.length-1];r.value?i.items.push({start:[],value:e}):r.value=e;break}case"flow-collection":{const r=i.items[i.items.length-1];return void(!r||r.value?i.items.push({start:[],key:e,sep:[]}):r.sep?r.value=e:Object.assign(r,{key:e,sep:[]}))}default:yield*this.pop(),yield*this.pop(e)}if(!(i.type!=="document"&&i.type!=="block-map"&&i.type!=="block-seq"||e.type!=="block-map"&&e.type!=="block-seq")){const r=e.items[e.items.length-1];r&&!r.sep&&!r.value&&r.start.length>0&&!Ec(r.start)&&(e.indent===0||r.start.every(c=>c.type!=="comment"||c.indent<e.indent))&&(i.type==="document"?i.end=r.start:i.items.push({start:r.start}),e.items.splice(-1,1))}}else yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"}}*stream(){switch(this.type){case"directive-line":return void(yield{type:"directive",offset:this.offset,source:this.source});case"byte-order-mark":case"space":case"comment":case"newline":return void(yield this.sourceToken);case"doc-mode":case"doc-start":{const n={type:"document",offset:this.offset,start:[]};return this.type==="doc-start"&&n.start.push(this.sourceToken),void this.stack.push(n)}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(n){if(n.value)return yield*this.lineEnd(n);switch(this.type){case"doc-start":return void(Ec(n.start)?(yield*this.pop(),yield*this.step()):n.start.push(this.sourceToken));case"anchor":case"tag":case"space":case"comment":case"newline":return void n.start.push(this.sourceToken)}const e=this.startBlockValue(n);e?this.stack.push(e):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(n){if(this.type==="map-value-ind"){const e=li(ar(this.peek(2)));let i;n.end?(i=n.end,i.push(this.sourceToken),delete n.end):i=[this.sourceToken];const r={type:"block-map",offset:n.offset,indent:n.indent,items:[{start:e,key:n,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(n)}*blockScalar(n){switch(this.type){case"space":case"comment":case"newline":return void n.props.push(this.sourceToken);case"scalar":if(n.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(n){var e;const i=n.items[n.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,!i.sep&&Ja(i.start)){const r=n.items[n.items.length-2],c=(e=r==null?void 0:r.value)===null||e===void 0?void 0:e.end;if(Array.isArray(c))return Array.prototype.push.apply(c,i.start),void(i.start=[this.sourceToken])}case"space":case"comment":return void(i.value?n.items.push({start:[this.sourceToken]}):i.sep?i.sep.push(this.sourceToken):i.start.push(this.sourceToken))}if(this.indent>=n.indent){const r=!this.onKeyLine&&this.indent===n.indent&&(i.sep||Ec(i.start));switch(this.type){case"anchor":case"tag":return void(r||i.value?(n.items.push({start:[this.sourceToken]}),this.onKeyLine=!0):i.sep?i.sep.push(this.sourceToken):i.start.push(this.sourceToken));case"explicit-key-ind":return i.sep||pt(i.start,"explicit-key-ind")?r||i.value?n.items.push({start:[this.sourceToken]}):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]}):i.start.push(this.sourceToken),void(this.onKeyLine=!0);case"map-value-ind":if(i.sep)if(i.value||r&&!pt(i.start,"explicit-key-ind"))n.items.push({start:[],key:null,sep:[this.sourceToken]});else if(pt(i.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]});else if(pt(i.start,"explicit-key-ind")&&Za(i.key)&&!pt(i.sep,"newline")){const c=li(i.start),o=i.key,s=i.sep;s.push(this.sourceToken),delete i.key,delete i.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:c,key:o,sep:s}]})}else i.sep.push(this.sourceToken);else Object.assign(i,{key:null,sep:[this.sourceToken]});return void(this.onKeyLine=!0);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const c=this.flowScalar(this.type);return void(r||i.value?(n.items.push({start:[],key:c,sep:[]}),this.onKeyLine=!0):i.sep?this.stack.push(c):(Object.assign(i,{key:c,sep:[]}),this.onKeyLine=!0))}default:{const c=this.startBlockValue(n);if(c)return r&&c.type!=="block-seq"&&pt(i.start,"explicit-key-ind")&&n.items.push({start:[]}),void this.stack.push(c)}}}yield*this.pop(),yield*this.step()}*blockSequence(n){var e;const i=n.items[n.items.length-1];switch(this.type){case"newline":if(!i.value&&Ja(i.start)){const r=n.items[n.items.length-2],c=(e=r==null?void 0:r.value)===null||e===void 0?void 0:e.end;if(Array.isArray(c))return Array.prototype.push.apply(c,i.start),void(i.start=[this.sourceToken])}case"space":case"comment":return void(i.value?n.items.push({start:[this.sourceToken]}):i.start.push(this.sourceToken));case"anchor":case"tag":if(i.value||this.indent<=n.indent)break;return void i.start.push(this.sourceToken);case"seq-item-ind":if(this.indent!==n.indent)break;return void(i.value||pt(i.start,"seq-item-ind")?n.items.push({start:[this.sourceToken]}):i.start.push(this.sourceToken))}if(this.indent>n.indent){const r=this.startBlockValue(n);if(r)return void this.stack.push(r)}yield*this.pop(),yield*this.step()}*flowCollection(n){const e=n.items[n.items.length-1];if(this.type==="flow-error-end"){let i;do yield*this.pop(),i=this.peek(1);while(i&&i.type==="flow-collection")}else if(n.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":return void(!e||e.sep?n.items.push({start:[this.sourceToken]}):e.start.push(this.sourceToken));case"map-value-ind":return void(!e||e.value?n.items.push({start:[],key:null,sep:[this.sourceToken]}):e.sep?e.sep.push(this.sourceToken):Object.assign(e,{key:null,sep:[this.sourceToken]}));case"space":case"comment":case"newline":case"anchor":case"tag":return void(!e||e.value?n.items.push({start:[this.sourceToken]}):e.sep?e.sep.push(this.sourceToken):e.start.push(this.sourceToken));case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const r=this.flowScalar(this.type);return void(!e||e.value?n.items.push({start:[],key:r,sep:[]}):e.sep?this.stack.push(r):Object.assign(e,{key:r,sep:[]}))}case"flow-map-end":case"flow-seq-end":return void n.end.push(this.sourceToken)}const i=this.startBlockValue(n);i?this.stack.push(i):(yield*this.pop(),yield*this.step())}else{const i=this.peek(2);if(i.type!=="block-map"||this.type!=="map-value-ind"&&(this.type!=="newline"||i.items[i.items.length-1].sep))if(this.type==="map-value-ind"&&i.type!=="flow-collection"){const r=li(ar(i));nh(n);const c=n.end.splice(1,n.end.length);c.push(this.sourceToken);const o={type:"block-map",offset:n.offset,indent:n.indent,items:[{start:r,key:n,sep:c}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(n);else yield*this.pop(),yield*this.step()}}flowScalar(n){if(this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}return{type:n,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(n){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const e=li(ar(n));return e.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:e}]}}case"map-value-ind":{this.onKeyLine=!0;const e=li(ar(n));return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:e,key:null,sep:[this.sourceToken]}]}}}return null}*documentEnd(n){this.type!=="doc-mode"&&(n.end?n.end.push(this.sourceToken):n.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(n){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:n.end?n.end.push(this.sourceToken):n.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function vm(t,n={}){const{lineCounter:e,prettyErrors:i}=function(s){const a=!s||s.prettyErrors!==!1;return{lineCounter:s&&s.lineCounter||a&&new dm||null,prettyErrors:a}}(n),r=new ym(e==null?void 0:e.addNewLine),c=new fm(n);let o=null;for(const s of c.compose(r.parse(t),!0,t.length))if(o){if(o.options.logLevel!=="silent"){o.errors.push(new si(s.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}}else o=s;return i&&e&&(o.errors.forEach(Ba(t,e)),o.warnings.forEach(Ba(t,e))),o}function km(t,n,e){let i;typeof n=="function"?i=n:e===void 0&&n&&typeof n=="object"&&(e=n);const r=vm(t,e);if(!r)return null;if(r.warnings.forEach(c=>ka(r.options.logLevel,c)),r.errors.length>0){if(r.options.logLevel!=="silent")throw r.errors[0];r.errors=[]}return r.toJS(Object.assign({reviver:i},e))}const bm={hr(t){const n=RegExp(/^ {0,3}(-{3,}(?=[^-\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~-]* *(?:\n+|$)|$)/).exec(t);if(n)return{type:"options",raw:n[0],data:km(n[3],{})}}},xm={paragraph:t=>t,blockquote:t=>t,heading:t=>t};function th(t,n){let e=function(o){return Ui.lexer(function(s){return s.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}((s=>{const a=sf(s);if(a===0)return s;const h=new RegExp(`^[ \\t]{${a}}`,"gm");return s.replace(h,"")})(o)))}(t),i=new Pi(n);(function(o){let s=o.findIndex(h=>h.type=="options"),a=o.findIndex(h=>h.type=="heading");return s!==-1&&a>s})(e)&&(i=function(o,s){let a=o.find(h=>h.type=="options");return function(h,l){let g=new Pi(h);for(let u in l)Object.prototype.hasOwnProperty.call(l,u)&&(g[u]=l[u]);return g}(s,a.data)}(e,i));let r=eh(e),c=function(o,s){let a=[],h=0;for(;o.length!==0;){h=eh(o.slice(1)),h===-1&&(h=o.length);let l=wm(o.splice(0,h+1),s);a.push(l)}return a}(e.slice(r),i);return new gf(c,i)}function wm(t,n){let e=function(a){return ui(a.filter(h=>h.type=="paragraph"||h.type=="code"))}(t),i=function(a){return ui(a.filter(h=>h.type=="blockquote"))}(t),r=function(a){return ui(a.filter(h=>h.type=="heading"))}(t),c=function(a){let h=a.find(g=>g.type=="list"),l=[];return h.items.forEach(function(g,u){let v=function(p){let m=p.tokens.filter(f=>f.type=="blockquote");return{text:ui(p.tokens.filter(f=>f.type!="blockquote")),comment:ui(m)}}(g);l.push(new uf(u,v.text,g.checked,v.comment))}),l}(t),o=function(a){let h=a.find(l=>l.type=="list");return h.ordered?h.items[0].task?"SingleChoice":"Sequence":"MultipleChoice"}(t);const s=[r,e,i,c,new Pi(n)];switch(o){case"SingleChoice":return new lf(...s);case"MultipleChoice":return new hf(...s);case"Sequence":return new af(...s)}}function eh(t){return t.findIndex(n=>n.type=="heading")}function ui(t){return of.sanitize(Ui.parser(t))}function ih(t,n,e){let i;n.innerHTML="",n.shadowRoot?(i=n.shadowRoot,i.innerHTML=""):i=n.attachShadow({mode:"open"});try{let r=th(t,e);return new Rg({target:i,intro:!1,props:{quiz:r}})}catch(r){i.innerHTML=`${r}. App could not render. Please check your quizdown syntax.`}}return Ui.use({renderer:xm,tokenizer:bm}),{init:function(t={}){let n=new Pi(t);n.startOnLoad&&typeof document<"u"&&window.addEventListener("load",function(){let e=document.querySelectorAll(".quizdown");for(let i of e)ih(i.innerHTML,i,n)},!1)},register:function(t){return t.setup(this),this},parseQuizdown:th,createApp:ih,getMarkedParser:function(){return Ui}}})})(Rh);var jm=Rh.exports;function xh(b,q,w){const S=b.slice();return S[4]=q[w],S}function wh(b){let q,w,S,M=!1,H,Z=b[4].name+"",U,gn,K,on,xn;return K=Am(b[3][0]),{c(){q=Yn("label"),w=Yn("input"),H=vt(),U=yr(Z),gn=vt(),Ht(w,"type","radio"),w.__value=S=b[4].md,vr(w,w.__value),K.p(w)},m(qn,Tn){Qt(qn,q,Tn),An(q,w),w.checked=w.__value===b[0],An(q,H),An(q,U),An(q,gn),on||(xn=pr(w,"change",b[2]),on=!0)},p(qn,Tn){Tn&2&&S!==(S=qn[4].md)&&(w.__value=S,vr(w,w.__value),M=!0),(M||Tn&3)&&(w.checked=w.__value===qn[0]),Tn&2&&Z!==(Z=qn[4].name+"")&&Kh(U,Z)},d(qn){qn&&_t(q),K.r(),on=!1,xn()}}}function Bm(b){let q,w,S=bh(b[1]),M=[];for(let H=0;H<S.length;H+=1)M[H]=wh(xh(b,S,H));return{c(){q=Yn("div"),w=Yn("div");for(let H=0;H<M.length;H+=1)M[H].c();Ht(q,"class","options-container")},m(H,Z){Qt(H,q,Z),An(q,w);for(let U=0;U<M.length;U+=1)M[U]&&M[U].m(w,null)},p(H,[Z]){if(Z&3){S=bh(H[1]);let U;for(U=0;U<S.length;U+=1){const gn=xh(H,S,U);M[U]?M[U].p(gn,Z):(M[U]=wh(gn),M[U].c(),M[U].m(w,null))}for(;U<M.length;U+=1)M[U].d(1);M.length=S.length}},i:pi,o:pi,d(H){H&&_t(q),Mm(M,H)}}}function Um(b,q,w){let{md_list:S=[{name:"Nothing",md:""}]}=q,{using_md:M}=q;const H=[[]];function Z(){M=this.__value,w(0,M)}return b.$$set=U=>{"md_list"in U&&w(1,S=U.md_list),"using_md"in U&&w(0,M=U.using_md)},[M,S,Z,H]}class Th extends Jc{constructor(q){super(),Yc(this,q,Um,Bm,Vc,{md_list:1,using_md:0})}}const qh=`
# How Web servers authenticate clients?
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
- [ ] None above`,zh=`
# Which of these elements are all \`<table>\` elements?
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
- [x] \`<meter>\` `,_h=`
# What does the CSS property \`display: none;\` do?
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
- [ ] transition-duration: 2s; transition-effect: width;
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
- [ ] \`corner-effect: round;\`
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
- [ ] alpha-effect: round-corner;
- [ ] corner-effect: round;
- [x] border-radius: 30px;
- [ ] border\\[round\\]: 30px

# How to modify a border image using CSS3?
- [x] border-image: url(border.png) 30 30 round;
- [ ] border-variable: image url(image.png);
- [ ] border: url(image.png);`,Ch=`
# What is the correct place to insert a JavaScript?
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
- [x] 5undefined`,Sh="\n# Which of the following expressions can be used to select the element with the HTML attribute `id=\"first\"`?\n- [ ] `document.getElementById('first')`\n- [ ] `document.querySelector('first')`\n- [x] Both of the above\n- [ ] None of the above\n\n\n# Suppose that `ele` is an element node. Select all the expressions below which can be used to select the parent node of `ele`\n- [x] `ele.parentElement`\n- [ ] `ele.parentContainer`\n- [x] `ele.parentNode`\n- [ ] `ele.getParent()`\n\n\n# How to select the first element in an HTML document matching the CSS selector `.main .title .t1`?\n- [x] `document.querySelector('.main .title .t1')`\n- [ ] `document.querySelectorAll('.main .title .t1')`\n- [ ] `document.body.matches('.main .title .t1')`\n\n\n# What will `document.getElementById('t1').childNodes[0]` return?\nConsider the code below:\n```js\n<div id=\"t1\">\n   <p>A paragraph</p>\n</div>\n```\n- [x] A text node\n- [ ] An element node\n- [ ] A comment node\n- [ ] None of the above\n\n\n# The methods `getElementsByClassName()` and `getElementsByTagName()`, of the `Node` interface, both return an array-like list of the matched elements, even if the match is for a single element. True or false?\n- [x] True\n- [ ] False\n\n\n# What does this JavaScript code do to the <div> element?\nConsider the following HTML:\n\n```html\n<div class=\"a1\">A div</div>\n```\nNow consider the following JavaScript where divElement is assumed to be holding the <div> element shown above:\n\n```js\ndivElement.className += ' intro';\n```\nWhat does this JavaScript code do to the <div> element?\n\n- [x] Adds a new class `'intro'` to it\n- [ ] Replaces the previous class `'a1'` with the class `'intro'`\n\n\n# Consider the following HTML\nConsider the following HTML:\n```html\n<div id=\"div1\">I am Div1</div>\n<div id=\"div2\">I am Div2</div>\n```\nHow to add an element node `element` before the `#div2` element and after the `#div1` element shown above?\n\nYou shall assume that #div1 is saved in the variable div1Element and `#div2` in div2Element.\n\n- [ ] `div1Element.appendChild(ele)` \n- [ ] `div2Element.appendChild(ele) `\n- [ ] `div2Element.parentNode.insertBefore(div2Element, ele)`\n- [x] `div2Element.parentNode.insertBefore(ele, div2Element)`\n\n\n# In which of the following ways can the value of the HTML `id` attribute of an element node element be retrieved?\nYou may assume that `element` has only one attribute on it and that is `id`.\n- [x] `element.id`\n- [x] `element.attributes.id`\n- [x] `element.attributes[0]`\n\n\n# How to remove the `'p1'` class from the following element? Choose all the possible choices.\nYou may assume that the element is already selected in the variable `paraElement`.\n```html\n<p class=\"p1\">A simple paragraph</p>\n```\n```js\nvar p = document.getElementsByClassName(\"nav\")[0];\n```\n- [x] `paraElement.classList.remove(\"nav\")`\n- [x] `paraElement.className = \"\"`\n- [x] `paraElement.removeAttribute('class')`\n\n\n# In which of the following ways could we change the content of an element node `divElement` to the text `'Changed'`?\n- [x] `divElement.innerHTML = 'Changed'`\n- [x] `divElement.innerText = 'Changed'`\n- [ ] `divElement.innerContent = 'Changed'`\n- [ ] `divElement.appendChild(document.createTextNode('Changed'))`\n\n\n# How could we remove the highlighted element in the code below, given that it's not a child node of `<body>`?\nYou may assume that the element has already been selected in the variable `paraElement`.\n\n```html\n<p>A paragraph</p>\n<!-- Remove the following paragraph -->\n<p>Another paragraph</p>\n```\n- [ ] `paraElement.removeChild()`\n- [x] `paraElement.parentNode.removeChild(paraElement)`\n- [ ] `document.body.removeChild(paraElement)`\n\n\n# Which of the following is a property available on element nodes that allows us to specifically work with HTML `data-` attributes on them?\n- [x] `dataset`\n- [ ] `dataSet`\n- [ ] `dataList`\n- [ ] `dataAttributes`\n\n\n# In which of the following ways could we add the text `'Hello'` to an empty element node `divElement`?\n- [ ] `divElement.nodeValue = 'Hello'`\n- [x] `divElement.innerText = 'Hello'`\n- [x] `divElement.textContent = 'Hello'`\n- [x] `divElement.appendChild(document.createTextNode('Hello'))`\n\n\n# Spot the error in the code below.\n```html\n<div id=\"d1\"><div>\n```\n```js\nvar divElement = document.getElementById('d1');\ndivElement.appendChild('<p>A paragraph</p>');\n```\n- [x] The argument to appendChild() is not a node\n- [ ] There is no such method as appendChild() on divElement\n- [ ] There is no error",Nh=`
# Which of the following code sends a cookie in servlet?
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
`,Eh=`


# Cha đẻ của phương pháp nghiên cứu quản trị theo chức năng
- [ ] F. W Taylor
- [ ] Henry L. Gantt
- [x] Henry Fayol
- [ ] Elton Mayo

# Hướng dẫn, đốc thúc, điều khiển công nhân trong công việc hàng ngày là công việc chính của
- [ ] Nhà quản trị cấp trung gian
- [ ] Nhà quản trị cấp cao và nhà quản trị cấp cơ sở
- [x] Nhà quản trị cấp cơ sở
- [ ] Nhà quản trị cấp cao

# Hoạt động quản trị được thực hiện thông qua 4 chức năng là:
- [x] Lập kế hoạch, tổ chức, lãnh đạo, kiểm tra
- [ ] Lập kế hoạch, nhân sự, chỉ đạo, phối hợp
- [ ] Lập kế hoạch, tổ chức, phối hợp, báo cáo
- [ ] Lập kế hoạch, tổ chức, phối hợp, kiểm tra

# Chức năng đầu tiên của quá trình quản trị là:
- [ ] Kiểm tra
- [ ] Lãnh đạo
- [ ] Tổ chức
- [x] Lập kế hoạch

# Nói về cấp bậc quản trị, người ta chia ra:
- [ ] Ba cấp: cấp lãnh đạo, cấp điều hành, và cấp thực hiện
- [x] Ba cấp: cấp cao, cấp trung, cấp cơ sở
- [ ] Hai cấp: cấp quản trị và cấp thừa hành
- [ ] Bốn cấp: cấp cao, cấp giữa, cấp cơ sở và cấp thấp

# Kỹ năng nào thuộc về kỹ năng chuyên môn
- [ ] Kỹ năng thuyết trình
- [ ] Khả năng nhận dạng cơ hội để đổi mới
- [ ] Xây dựng mạng lưới quan hệ
- [x] Khả năng vận dụng quy trình kỹ thuật để thực hiện hoạt động cụ thể

# Trong bốn chức năng cơ bản của quản trị, Quản trị viên cấp cao dành nhiều thời gian nhất để thực hiện chức năng quản trị nào?
- [ ] Tổ chức
- [ ] Lãnh đạo
- [x] Lập kế hoạch
- [ ] Kiểm tra

# Trong bốn chức năng cơ bản của quản trị, Quản trị viên cấp trung dành nhiều thời gian nhất để thực hiện chức năng quản trị nào?
- [ ] Lãnh đạo
- [ ] Lập kế hoạch
- [x] Tổ chức
- [ ] Kiểm tra

# Trong bốn chức năng cơ bản của quản trị, Quản trị viên cấp cơ sở dành nhiều thời gian nhất để thực hiện chức năng quản trị nào?
- [x] Lãnh đạo
- [ ] Lập kế hoạch
- [ ] Tất cả các chức năng trên
- [ ] Tổ chức và kiểm tra

# Chức năng nào không nằm trong 4 chức năng quản trị?
- [ ] Tổ chức
- [x] Đào tạo
- [ ] Kiểm tra
- [ ] Hoạch định


# Nhằm kịp thời phát hiện những sai sót trong quá trình hoạt động và các cơ hội đột biến của tổ chức là
- [ ] Chức năng điều khiển
- [ ] Chức năng tổ chức
- [x] Chức năng kiểm tra
- [ ] Chức năng hoạch định

# Mệnh đề nào sau đây mô tả đúng nhất cách tiếp cận Quản trị theo quan điểm hệ thống?
- [ ] Các bộ phận phụ thuộc lẫn nhau nhưng không tương tác với bên ngoài
- [ ] Một tập hợp các bộ phận không liên quan đến nhau và mỗi bộ phận lại tương
tác với môi trường bên ngoài
- [ ] Các bộ phận có quan hệ tương đối ổn định với môi trường bên ngoài.
- [x] Các bộ phận phụ thuộc lẫn nhau trong mối liên hệ năng động với môi trường bên ngoài.

# Khả năng khái quát hoá các mối quan hệ giữa các sự vật - hiện tượng qua đó giúp cho việc nhận dạng vấn đề và đưa ra giải pháp là kỹ năng ... của nhà quản trị
- [ ] Nhân sự
- [x] Tư duy
- [ ] Kỹ thuật
- [ ] Giao tiếp

# Sản phẩm của doanh nghiệp bị lỗi thời hoặc giá bán trở nên đắt hơn so với sản
phẩm của đối thủ cạnh tranh là bị tác động bởi yếu tố môi trường sau:
- [ ] Văn hóa – xã hội
- [ ] Chính trị - pháp luật
- [ ] Sự toàn cầu hóa kinh tế
- [x] Công nghệ

# Nhà quản trị phải có kiến thức về lĩnh vực mà họ quản lý là yêu cầu thuộc về:
- [ ] Kỹ năng giao tiếp
- [ ] Kỹ năng tư duy
- [ ] Kỹ năng nhân sự
- [x] Kỹ năng kỹ thuật

<!-- # Mệnh đề nào KHÔNG phải là một trong những vai trò của hoạt động quản trị:

- [x] Phân chia công việc chung thành các công việc cụ thể.
- [ ] Giải quyết được mâu thuẫn giữa nhu cầu ngày càng tăng của con người và sự cạn kiệt nguồn lực thiên nhiên
- [ ] Kiềm chế sự gia tăng của các yếu tố có tính ngẫu nhiên, bất định, rủi ro
- [ ] Bù đắp sự thiếu hụt về tài nguyên.

The correct answer is: Phân chia công việc chung thành các công việc cụ thể. -->


# Các hoạt động tuyển dụng, đào tạo, hướng dẫn, một số khía cạnh sẽ liên quan đến chức năng lãnh đạo như thúc đẩy và động viên cấp dưới hoàn thành nhiệm vụ và đáp ứng các yêu cầu của tổ chức là các ví dụ minh họa cho vai trò quản lý nào dưới đây?
- [ ] Vai trò đại diện.
- [ ] Vai trò truyền thông.
- [x] Vai trò lãnh đạo.
- [ ] Vai trò liên kết.

# Viết một kế hoạch chiến lược của tổ chức là một ví dụ minh họa của chức năng
quản lý nào?
- [x] Lập kế hoạch.
- [ ] Điều phối.
- [ ] Kiểm tra
- [ ] Lãnh đạo.

# Nói quản trị là nghệ thuật vì quản trị….
- [ ] Cung cấp cho nhà quản trị những kỹ thuật, kinh nghiệm đối phó với vấn đề trong công việc…
- [ ] Giúp Cung cấp cho nhà quản trị những phương pháp khoa học cần thiết để giải quyết vấn đề trong thực tiễn
- [ ] Cung cấp cho nhà quản trị các quan niệm, ý niệm nhằm phân tích, đánh giá và nhận diện bản chất vấn đề
- [x] Không thể áp dụng theo công thức, tùy thuộc vào từng tình huống quản trị cụ thể

# Nhà Quản trị là người có …. điều khiển công việc của người khác nhằm đạt được mục tiêu chung của sản xuất.
- [ ] Nghĩa vụ
- [x] Quyền và trách nhiệm
- [ ] Trách nhiệm
- [ ] Khả năng

# Nhà quản trị là người
- [x] Có quyền và có trách nhiệm điều khiển công việc của người khác
- [ ] Có tầm quan trọng như nhau
- [ ] Có khả năng lãnh đạo
- [ ] Có quyền và nghĩa vụ tuân theo các cấp lãnh đạo khác nhau

# Các nhóm vai trò nhà quản trị trong tổ chức cần phải thực hiện
- [x] Vai trò quan hệ với con người, vai trò thông tin, vai trò quyết định
- [ ] Vai trò kết nối, vai trò cung cấp thông tin, vai trò người thương lượng
- [ ] Vai trò người kết nối, vai trò người phổ biến thông tin, vai trò người điều khiển
- [ ] Vai trò người lãnh đạo, vai trò người đại diện, vai trò nhà thương lượng

# Sự khác nhau trong yêu cầu về kỹ năng đối với nhà quản trị cấp cao (QTCC) và cấp trung (QTCT) là:
- [x] QTCC có kỹ năng tư duy cao hơn nhưng kỹ năng kỹ thuật thấp hơn QTCT
- [ ] QTCC thường phải có các kỹ năng cao hơn QTCT ở tất cả các khía cạnh
- [ ] QTCT phải có kỹ năng kỹ thuật và kỹ năng tư duy cao hơn QTCC
- [ ] QTCC thường phải có kỹ năng kỹ thuật và kỹ năng nhân sự tốt hơn QTCT

# Một trong những lý do cơ bản nhất tồn tại hoạt động quản trị
- [ ] Giúp doanh nghiệp tăng trưởng nhanh
- [x] Giúp doanh nghiệp đạt được hiệu quả quản trị
- [ ] Giúp doanh nghiệp kiếm được lợi nhuận
- [ ] Giúp doanh nghiệp có bộ máy tổ chức chặt chẽ

# Hiệu quả phản ánh____________.
- [x] Mối quan hệ giữa yếu tố đầu vào và đầu ra
- [ ] Quan hệ hàm số mũ giữa chi phí và kết quả
- [ ] Quan hệ “cộng thêm” giữa chi phí và lợi ích
- [ ] Tăng kết quả không kể đến chi phí

# Vai trò quản lý của Mintzberg được phân thành các nhóm nào sau đây?
- [ ] Lãnh đạo, ra quyết định, lập kế hoạch.
- [x] Vai trò quan hệ con người, truyền thông, và ra quyết định
- [ ] Vai trò quan hệ con người, lãnh đạo, và ra quyết định
- [ ] Truyền đạt thông tin, ra quyết định, và phân bổ các nguồn

# Người đưa ra 14 nguyên tắc quản trị tổng quát là:
- [ ] Frederick Winslow
- [x] Henri Fayol
- [ ] Max Weber
- [ ] Douglas Mc Gregor

<!-- # Vai trò thực hiện các công việc thường lệ mang tính chất đại hiện pháp lý hoặc xã hội (như ký các văn bản pháp lý) được gọi là

- [x] Người phổ biến thông tin
- [ ] Người thương lượng
- [ ] Người xử lý xáo trộn/nguy cơ
- [ ] Người khởi xướng

The correct answer is: Người phổ biến thông tin -->

# Trong các kỹ năng của nhà quản trị thì kỹ năng mà nhà quản trị cấp cao cần thực hiện nhiều nhất là:
- [ ] Cả hai kỹ năng: Kỹ năng tư duy và kỹ năng kỹ thuật
- [ ] Kỹ năng kỹ thuật
- [ ] Kỹ năng nhân sự
- [x] Kỹ năng tư duy



# .………. là khả năng thiết lập các mối quan hệ tốt đẹp với các đối tác, khả năng cùng làm việc, động viên và điều khiển nhân sự:
- [ ] Kỹ năng tư duy
- [ ] Kỹ năng kỹ thuật
- [x] Kỹ năng quan hệ
- [ ] Kỹ năng giải quyết vấn đề

# Một hệ thống mà không chịu tác động của môi trường được gọi là hệ thống:
- [ ] Mở
- [ ] Hoạt động
- [x] Đóng
- [ ] Phụ

# Cấp quản trị chịu trách nhiệm chính đối với các hoạt động chức năng là:
- [ ] Nhân viên thừa hành
- [ ] Cấp cao
- [ ] Cấp cơ sở
- [x] Cấp trung gian

# Khả năng sử dụng và lựa chọn thông tin để ra quyết định quản trị ở nhà quản trị
cấp cao thuộc:
- [ ] Kỹ năng kỹ thuật
- [x] Kỹ năng tư duy
- [ ] Kỹ năng nhân sự
- [ ] Kỹ năng giao tiếp

# Hãy sắp xếp mức độ quan trọng tăng dần các kỹ năng quản lý của một nhà quản lý cấp cao?
- [ ] Chuyên môn – tư duy – quan hệ con người.
- [ ] Tư duy – quan hệ con người – chuyên môn.
- [x] Chuyên môn – quan hệ con người – tư duy.
- [ ] Quan hệ con người– tư duy – chuyên môn.

# Tiếp xúc với khách hàng, nhà cung cấp… là vai trò nào của nhà quản trị
- [ ] Vai trò người đại diện
- [ ] Vai trò nhà thương lượng
- [x] Vai trò liên lạc
- [ ] Vai trò người điều khiển

# Vai trò tìm kiếm cơ hội và đưa ra các "dự án cải tiến" nhằm đem lại sự thay đổi trong tổ chức được hiểu là:
- [ ] Người thương lượng
- [x] Người khởi xướng (entrerpreneur)
- [ ] Người phổ biến thông tin (Disseminator)
- [ ] Người phát ngôn

# “Quản trị hướng tổ chức đạt được mục tiêu với….cao nhất và chi phí thấp nhất”
- [ ] Lợi nhuận
- [ ] Sự thỏa mãn
- [x] Kết quả
- [ ] Lợi ích

# Môi trường vi mô của tổ chức gồm những yếu tố nào sau đây:
- [ ] Các yếu tố công nghệ
- [x] Các đối thủ cạnh tranh
- [ ] Các điều kiện chính trị
- [ ] Các yếu tố kinh tế

# Vai trò nào dưới đây khiến nhà quản lý đảm nhận vai trò tương tác đến mọi người, mọi bộ phận có liên quan, có thể là cấp dưới, ngang cấp hay cấp trên qua các kênh thông tin chính thức như văn bản hay các kênh thông tin không chính thức?
- [x] Vai trò phổ biến thông tin
- [ ] Vai trò phát ngôn.
- [ ] Vai trò thu thập và tiếp nhận thông tin.
- [ ] Vai trò liên kết.

# “Nhà quản trị cấp thấp thì kỹ năng………..càng quan trọng”
- [ ] Tư duy
- [x] Chuyên môn
- [ ] Giao tiếp
- [ ] Nhân sự

# Nhà quản trị cấp cơ sở cần có kỹ năng nào nhiều hơn
- [x] Kỹ năng kỹ thuật
- [ ] Kỹ năng nhân sự
- [ ] Các kỹ năng có mức quan trọng như nhau
- [ ] Kỹ năng tư duy

# Nhà quản lý là người phải kịp thời đối phó với những biến cố bất ngờ nảy sinh làm xáo trộn hoạt động bình thường của tổ chức như mâu thuẫn về quyền lợi, khách hàng thay đổi, đây là mô tả cho vai trò quản lý nào?
- [ ] Vai trò đàm phán.
- [ ] Vai trò phân phối các nguồn lực.
- [x] Vai trò giải quyết vấn đề.
- [ ] Vai trò sáng nghiệp.

# Phát biểu nào sau đây là sai:
- [x] Quản trị chỉ cần thiết đối với tổ chức có quy mô lớn
- [ ] Quản trị cần thiết đối với trường đại học
- [ ] Quản trị cần thiết đối với bệnh viện
- [ ] Quản trị cần thiết đối với doanh nghiệp

Nhà quản trị cấp cao cần có kỹ năng nào quan trọng hơn

- [ ] Kỹ năng nhân sự
- [ ] Các kỹ năng có mức quan trọng như nhau
- [ ] Kỹ năng kỹ thuật
- [x] Kỹ năng tư duy

# Vì sao quản trị là hoạt động cần thiết với mọi tổ chức?
- [ ] Vì quản trị không tốt thì tổ chức sẽ hoạt động kém hiệu quả
- [x] Vì con người kết hợp với nhau trong các tổ chức nhằm đạt được những mục tiêu chung phải thông qua hoạt động quản trị
- [ ] Vì chỉ có quản trị thì tổ chức mới phát triển
- [ ] Vì quản trị giúp con người gắn kết lại với nhau

# Đặc điểm nào sau đây để phân biệt một tổ chức và một nhóm người:
- [ ] Có mục đích chung
- [x] Hệ thống thứ bậc quyền lực
- [ ] Phân công lao động
- [ ] Kết hợp nỗ lực của các thành viên

# Đây là chức năng quan trọng nhất các chức năng của quản trị nếu phân loại theo giai đoạn tác động
- [x] Chức năng hoạch định
- [ ] Chức năng tổ chức
- [ ] Chức năng kiểm tra
- [ ] Chức năng điều khiển

# Các cấp quản lý nằm giữa cấp giám sát và cấp cao nhất trong tổ chức là cấp quản lý nào dưới đây?
- [x] Người quản lý cấp trung gian.
- [ ] Giám sát viên.
- [ ] Người quản lý cấp cơ sở.
- [ ] Đốc công.

# Khả năng nhận ra tình huống có vấn đề rủi ro và triển khai các giải pháp giải quyết rủi ro được gọi là
- [ ] Kỹ năng giao tiếp
- [x] Kỹ năng tư duy
- [ ] Kỹ năng nhân sự
- [ ] Kỹ năng kỹ thuật

# Các kỹ năng của nhà quản trị
- [ ] Kỹ năng hoạch định, kỹ năng tổ chức, kỹ năng nhân sự
- [x] Kỹ năng kỹ thuật, kỹ năng nhân sự, kỹ năng tư duy
- [ ] Kỹ năng hoạch định, kỹ năng nhân sự, kỹ năng kiểm soát
- [ ] Kỹ năng kỹ thuật, kỹ năng nhân sự, kỹ năng kiểm soát


# Nhà quản trị thường xuyên xem xét, phân tích bối cảnh xung quanh tổ chức để nhận ra những tin tức, những hoạt động và những sự kiện có thể đem lại cơ hội tốt hay sự đe dọa đối với hoạt động của tổ chức là mô tả cho vai trò quản trị nào dưới đây:
- [ ] Liên kết
- [x] Thu thập và tiếp nhận thông tin
- [ ] Phát ngôn
- [ ] Phổ biến thông tin

# Tổ chức là một thực thể
- [ ] Bao gồm cơ cấu tổ chức, các mục tiêu tổ chức, và môi trường xung quanh tổ chức
- [x] Có mục đích riêng biệt, có những thành viên và có một cơ cấu chặt chẽ có tính hệ thống
- [ ] Bao gồm cơ cấu tổ chức, các mục tiêu tổ chức, và văn hóa tổ chức
- [ ] Được sử dụng bởi con người để kết hợp các hành động lại nhằm đạt được mục tiêu chung.


# Xây dựng chiến lược, kế hoạch hành động & phát triển của tổ chức là công việc
chính của
- [ ] Nhà quản trị cấp cao và nhà quản trị cấp trung gian
- [ ] Nhà quản trị cấp cơ sở
- [x] Nhà quản trị cấp cao
- [ ] Nhà quản trị cấp trung gian

# Nhà quản trị cấp cao có nhiệm vụ đề ra chiến lược đồng thời triển khai các mục tiêu chiến lược đó?
- [ ] Đúng
- [ ] Sai vì nhà quản trị cấp cơ sở sẽ triển khai các chiến lược đó
- [ ] Sai vì nhà quản trị cấp trung gian sẽ triển khai các chiến lược đó
- [x] Sai vì nhà quản trị cấp trung gian và cấp cơ sở sẽ triển khai các chiến lược đó


# Những khía cạnh nào dưới đây đúng với hoạt động quản trị:
- [ ] Được định hướng bởi mục tiêu của tổ chức
- [ ] Đối tượng của quản trị là con người
- [ ] Là một quá trình
- [x] Quản trị là một quá trình quản trị con người và được định hướng bởi mục tiêu của của tổ chức


# Chức năng lãnh đạo có thể là các hoạt động dưới đây, ngoại trừ:
- [ ] Động viên nhân viên cấp dưới
- [x] Xác định tầm nhìn cho tổ chức
- [ ] Phân định rõ quyền hạn và trách nhiệm
- [ ] Cung cấp những chỉ dẫn và hỗ trợ cho nhân viên


# Vai trò của nhà quản trị thể hiện qua
- [x] Vai trò thông tin, vai trò quan hệ với con người, vai trò quyết định
- [ ] Vai trò thông tin
- [ ] Vai trò quan hệ với con người
- [ ] Vai trò quyết định

# Nhà quản lý tiến hành các hoạt động nhằm thiết lập mối quan hệ với những người khác bên ngoài tổ chức, để tìm kiếm sự ủng hộ và hợp tác của các cá nhân, tổ chức khác đối với tổ chức của mình, đây là mô tả cho vai trò quản lý nào?
- [ ] Vai trò truyền thông.
- [ ] Vai trò đại diện.
- [ ] Vai trò lãnh đạo.
- [x] Vai trò liên kết.

# Hoạt động quản trị có hiệu quả khi, ngoại trừ
- [ ] Giảm chi phí đầu vào, tăng sản lượng đầu ra
- [ ] Giảm thiểu chi phí đầu vào, giữ nguyên sản lượng đầu ra
- [ ] Giữ nguyên yếu tố đầu vào, sản lượng đầu ra nhiều hơn
- [x] Tăng chi phí đầu vào, giảm sản lượng đầu ra

# Chức năng tổ chức có thể là các hoạt động dưới đây, ngoại trừ:
- [ ] Nhóm (tích hợp) các công việc và xác lập quyền hạn cho các bộ phận
- [ ] Xác lập quyền hạn cho các bộ phận
- [x] Tuyển dụng
- [ ] Phân chia nhiệm vụ chung thành các công việc cụ thể

# Nhà quản lý là người chịu trách nhiệm trực tiếp điều hành, phối hợp và kiểm tra công việc của nhân viên dưới quyền, đây là mô tả cho vai trò quản lý nào?
- [ ] Vai trò truyền thông.
- [x] Vai trò lãnh đạo.
- [ ] Vai trò đại diện.
- [ ] Vai trò liên kết.

# Khả năng dẫn dắt, lãnh đạo động viên, giải quyết xung đột và làm việc với người khác là kỹ năng nào của nhà quản trị:
- [ ] Chuyên môn
- [x] Nhân sự
- [ ] Giao tiếp
- [ ] Khái quát hoá

# Một tổ chức được gọi là hệ thống mở có đặc điểm dưới đây, ngoại trừ:
- [ ] Có mục tiêu riêng
- [ ] Các yếu tố bên trong có mối quan hệ tương tác với nhau
- [x] Tổ chức không có khả năng tác động đến môi trường
- [ ] Có sự tương tác với môi trường bên ngoài



<!--
The correct answer is: Quan tâm tới việc tăng hiệu quả.
Question 15

Mark 1.00 out of 1.00

Mục tiêu quản trị cần:

- [ ] Có tính khoa học, khả thi và cụ thể
- [ ] Có tính khoa học
- [ ] Có tính cụ thể
- [ ] Có tính khả thi

The correct answer is: Có tính khoa học, khả thi và cụ thể
Question 16

Mark 0.00 out of 1.00


Đây là đặc điểm của hệ thống động

- [ ] Hệ có độ đa dạng nhỏ hay lớn
- [ ] Hệ biến đổi theo thời gian
- [ ] Hệ không có quan hệ với môi trường
- [ ] Hệ mà cứ mỗi tác động của môi trường chỉ có một vài cách phản ứng đơn trị
nhất định theo quy luật

The correct answer is: Hệ biến đổi theo thời gian
Question 17

Mark 1.00 out of 1.00


The correct answer is: Tổ chức không có khả năng tác động đến môi
trường
Question 18

Mark 0.00 out of 1.00


Các hoạt động khai trương chi nhánh, khai trương chương trình mới, sản phẩm
mới, tiếp đón khách mời đến thăm và làm việc chính thức với tổ chức, là các ví
dụ minh họa cho vai trò quản lý nào dưới đây?

- [ ] Vai trò liên kết.
- [ ] Vai trò truyền thông.
- [ ] Vai trò đại diện.
- [ ] Vai trò lãnh đạo.

The correct answer is: Vai trò đại diện.Question 19

Mark 1.00 out of 1.00


Khả năng xây dựng mạng lưới nguồn nhân lực bên trong và bên ngoài tổ chức
được gọi là

- [ ] Kỹ năng khái quát hoá
- [ ] Kỹ năng nhân sự
- [ ] Kỹ năng chuyên môn
- [ ] Kỹ năng giao tiếp

The correct answer is: Kỹ năng nhân sự
Question 20

Mark 1.00 out of 1.00


Hoạt động quản trị cần thiết vì:

- [ ] Thể hiện người quản trị cấp cao là quan trọng nhất
- [ ] Thể hiện người quản trị cấp thấp luôn có năng lực thấp hơn người quản trị cấp
cao
- [ ] Đảm bảo cho việc sử dụng các yếu tố nguồn lực có hiệu quả nhất
- [ ] Cho thấy sự phân chia cấp bậc rõ ràng
The correct answer is: Đảm bảo cho việc sử dụng các yếu tố nguồn lực có hiệu
quả nhất
Question 21

Mark 1.00 out of 1.00


Để đạt được hiệu quả, nhà quản trị cần:

- [ ] Giảm chi phí đầu vào
- [ ] Tất cả các phương án đều sai
- [ ] Tăng doanh thu ở đầu ra
- [ ] Xác định và hoàn thành đúng mục tiêu

The correct answer is: Xác định và hoàn thành đúng mục tiêu
Question 22

Mark 1.00 out of 1.00


Nhà quản trị cấp cao trong một tổ chức làm việc hoạch định nào trong các loại
hoạch định sau đây

- [ ] Hoạch định tiếp thị
- [ ] Hoạch định chiến lược
- [ ] Hoạch định sản xuất
- [ ] Hoạch định tài chính
The correct answer is: Hoạch định chiến lược
Question 23

Mark 1.00 out of 1.00




The correct answer is: Lập kế hoạch
Question 24

Mark 1.00 out of 1.00


Hùng thích ra quyết định quản lý dựa vào cảm giác quyết tâm và kinh nghiệm.
Cách thức áp dụng trong quản lý được hiểu là gì?

- [ ] Lý thuyết Y.
- [ ] Khoa học.- [ ] Lý thuyết X.
- [ ] Nghệ thuật.

The correct answer is: Nghệ thuật.
Question 25

Mark 1.00 out of 1.00


Tổ chức là một................................... có mục đích riêng biệt, có những thành
viên và có một cơ cấu ............................. có tính hệ thống.

- [ ] Thực thể/ chặt chẽ
- [ ] Thực thể/ lớn
- [ ] Cá thể/ chặt chẽ
- [ ] Cá thể/ nhỏ

The correct answer is: Thực thể/ chặt chẽ
Question 26

Mark 1.00 out of 1.00


Phân công lao động giúp tổ chức:
- [ ] tạo điều kiện cho mỗi thành viên chuyên sâu hơn vào một lĩnh vực cụ thể
- [ ] sử dụng nguồn lực một cách hiệu quả
- [ ] phân chia các công việc phức tạp thành các công việc cụ thể
- [ ] tất cả các ý trên

The correct answer is: tất cả các ý trên
Question 27

Mark 1.00 out of 1.00


The correct answer is: Nhà quản lý cấp trung gian.
Question 28


Question 29

Mark 1.00 out of 1.00


Hệ thống thứ bậc quyền lực trong một tổ chức giúp nhà quản trị:

- [ ] Xác định giới hạn hành vi của từng thành viên trong tổ chức
- [ ] Tất cả các phương án trên
- [ ] Xây dựng và áp dụng các phương pháp quản trị phù hợp với từng tổ chức
- [ ] Phối hợp các nỗ lực của các thành viên trong tổ chức

The correct answer is: Tất cả các phương án trên
Question 30

Mark 1.00 out of 1.00

Nhìn chung trong các doanh nghiệp, nhà quản lý nào là người chịu trách nhiệm
quản lý toàn bộ tổ chức, quyết định các chiến lược, các chính sách và thiết lập
mối quan hệ giữa tổ chức với môi trường bên ngoài?

- [ ] Nhân viên thuộc cấp.
- [ ] Người quản lý cấp cơ sở.
- [ ] Người quản lý cấp cao.
- [ ] Người quản lý cấp trung.

The correct answer is: Người quản lý cấp cao.
Question 31

Mark 0.00 out of 1.00


Điểm quan tâm chung của các trường phái quản trị là:

- [ ] Năng suất lao động
- [ ] Con người
- [ ] Hiệu quả
- [ ] Lợi nhuận

The correct answer is: Hiệu quả
Question 32

Mark 1.00 out of 1.00

Bích là trưởng nhóm bán hàng của công ty CP Long Thịnh. Bích là nhà quản trị
cấp nào của công ty?

- [ ] Nhà quản lý cấp trung gian.
- [ ] Nhà quản lý cấp cơ sở.
- [ ] Nhà quản lý cấp cao.
- [ ] Trưởng nhóm bán hàng.

The correct answer is: Nhà quản lý cấp cơ sở.
Question 33

Mark 0.00 out of 1.00


Đối tượng nào dưới đây là các thành viên của tổ chức, liên kết và điều phối công
việc của những người khác?

- [ ] Trưởng nhóm
- [ ] Người quản lý.
- [ ] Người đại diện
- [ ] Người thuộc cấp

The correct answer is: Người quản lý.Question 34

Mark 0.00 out of 1.00


Quản trị là ……

- [ ] Quá trình thực hiện các tác động của chủ thể quản lý lên đối tượng quản lý để
phối hợp hoạt động của các cá nhân và tập thể nhằm đạt được các mục tiêu đã
đề ra của tổ chức
- [ ] Quá trình làm việc với và thông qua những người khác để thực hiện các mục
tiêu của tổ chức trong một môi trường luôn biến động
- [ ] Quá trình nghiên cứu các mối quan hệ tài chính phát sinh trong quá trình sản
xuất và kinh doanh của một doanh nghiệp hay một tổ chức
- [ ] Việc thiết kế hệ thống chính thức trong một tổ chức để đảm bảo hiệu quả và
hiệu suất sử dụng khả năng nhân lực nhằm đạt được những mục đích của tổ
chức

The correct answer is: Quá trình làm việc với và thông qua những người khác để
thực hiện các mục tiêu của tổ chức trong một môi trường luôn biến động
Question 35

Mark 1.00 out of 1.00


Nhân tố nào sau đây của môi trường quản trị doanh nghiệp không thuộc nhóm
môi trường bên ngoài?

- [ ] Nhà cung cấp- [ ] Khách hàng
- [ ] Đoàn thanh niên của doanh nghiệp
- [ ] Đối thủ tiềm ẩn

The correct answer is: Đoàn thanh niên của doanh nghiệp
Question 36

Mark 1.00 out of 1.00


Môi trường vi mô của tổ chức gồm những yếu tố nào sau đây:

- [ ] Các điều kiện chính trị
- [ ] Các đối thủ cạnh tranh
- [ ] Các yếu tố công nghệ
- [ ] Các yếu tố kinh tế

The correct answer is: Các đối thủ cạnh tranh
Question 37

Mark 1.00 out of 1.00


Có thể hiểu thuật ngữ "Quản trị" như sau:
- [ ] Quản trị là sự bắt buộc người khác hành động
- [ ] Quản trị là phương thức làm cho nhiệm vụ và tổ chức của nhà quản trị đạt
mục tiêu bằng cách làm việc với và thông qua những người khác
- [ ] Quản trị là tự mình hành động hướng tới mục tiêu bằng chính nỗ lực cá nhân
- [ ] Quản trị là quá trình quản lý

The correct answer is: Quản trị là phương thức làm cho nhiệm vụ và tổ chức của
nhà quản trị đạt mục tiêu bằng cách làm việc với và thông qua những người
khác
Question 38

Mark 1.00 out of 1.00


Các kỹ năng quản trị có thể có được từ

- [ ] Bẩm sinh
- [ ] Đào tạo chính quy
- [ ] Kinh nghiệm thực tế
- [ ] Do bẩm sinh, kinh nghiệm thực tế và đào tạo chính quy

The correct answer is: Do bẩm sinh, kinh nghiệm thực tế và đào tạo
chính quy
Question 39

Mark 1.00 out of 1.00


Question 40

Mark 0.00 out of 1.00



Question 41

Mark 0.00 out of 1.00

Các hoạt động tiếp xúc với khách hàng và những nhà cung cấp, các viên chức
chính phủ là ví dụ minh họa cho vai trò quản lý nào dưới đây?

- [ ] Vai trò lãnh đạo.
- [ ] Vai trò đại diện.
- [ ] Vai trò truyền thông.
- [ ] Vai trò liên kết.

The correct answer is: Vai trò đại diện.
Question 42

Mark 1.00 out of 1.00




The correct answer is: Nhà quản trị cấp caoQuestion 43

Mark 0.00 out of 1.00


Việc giám sát kỹ thuật đối với hoạt động của nhân viên là chức năng của các
quản trị viên:

- [ ] Cấp trung và cấp cơ sở
- [ ] Cấp trung gian
- [ ] Cấp cơ sở
- [ ] Cấp cao

The correct answer is: Cấp cơ sở
Question 44

Mark 0.00 out of 1.00


Nhóm vai trò quyết định, gồm có vai trò:

- [ ] Người sáng tạo, người điều khiển, người phân phối tài nguyên, nhà
thương lương
- [ ] Người lãnh đạo, người điều khiển, người đại diện, nhà thương lượng
- [ ] Người sáng tạo, người lãnh đạo, người phân phối tài nguyên, nhà th
ương lượng- [ ] [&lt;$&gt;]
Người đại diện, người lãnh đạo, người phân phối tài nguyên, nhà thương lượng

The correct answer is: [&lt;
$&gt;] Người sáng tạo, người điều khiển, người phân phối tài nguyên, nhà thươn
g lương
Question 45

Mark 1.00 out of 1.00



Question 1

Mark 0.00 out of 1.00

Một giám đốc kinh doanh biết cách tác động và hướng dẫn nhân viên trong tổ
chức để hoàn thành các công việc là kỹ năng gì?

- [ ] Kỹ năng nhân sự
- [ ] Kỹ năng chuyên môn
- [ ] Kỹ năng giao tiếp
- [ ] Kỹ năng quan hệ

The correct answer is: Kỹ năng nhân sự
Question 2

Mark 1.00 out of 1.00


___________ là quá trình làm việc với và thông qua người khác để công việc được
hoàn thành với kết quả mong đợi và hiệu quả cao.

- [ ] Điều khiển
- [ ] Giám sát
- [ ] Lãnh đạo
- [ ] Quản trị

The correct answer is: Quản trị
Question 3

Mark 1.00 out of 1.00

Có bao nhiêu cấp quản trị?

- [ ] 5 cấp quản trị
- [ ] 4 cấp quản trị
- [ ] 2 cấp quản trị
- [ ] 3 cấp quản trị

The correct answer is: 3 cấp quản trị
Question 4

Mark 1.00 out of 1.00


Mục tiêu của hoạt động quản trị nhằm:

- [ ] Đạt được kết quả và hiệu quả cao
- [ ] Đạt được hiệu suất cao
- [ ] Thỏa mãn ý muốn của nhà quản trị
- [ ] Đạt được hiệu quả cao

The correct answer is: Đạt được kết quả và hiệu quả cao
Question 5

Mark 1.00 out of 1.00

Các cấp bậc quản trị được chia thành

- [ ] Nhà quản trị cấp cao, nhà quản trị cấp thấp
- [ ] Nhà quản trị cấp cơ sở và nhà quản trị cấp cao
- [ ] Nhà quản trị cấp cao, nhà quản trị cấp trung gian và nhà quản trị
cấp cơ sở
- [ ] Nhà quản trị cấp trung gian và nhà quản trị cấp cơ sở

The correct answer is: Nhà quản trị cấp cao, nhà quản trị cấp trung
gian và nhà quản trị cấp cơ sở
Question 6

Mark 1.00 out of 1.00



Question 7

Mark 1.00 out of 1.00


Question 15

Mark 1.00 out of 1.00

Question 16

Mark 1.00 out of 1.00

Có thể nói "hoạt động quản trị là hoạt động có từ khi xuất hiện loài người trên
trái đất, nhưng lý thuyết quản trị lại là sản phẩm của xã hội hiện đại". Câu này
có thể được hiểu như sau:

- [ ] Lý thuyết quản trị ra đời là một tất yếu đối với xã hội loài người vốn từ lâu đã
có hoạt động quản trị
- [ ] Lý thuyết quản trị chẳng qua là một sự sao chép những hoạt động quản trị
vốn có trong xã hội loài người
- [ ] Không cần có lý thuyết quản trị, người ta vẫn có thể quản trị được
- [ ] Hoạt động quản trị là nội dung, còn lý thuyết quản trị chỉ là hình thức mà thôi

The correct answer is: Lý thuyết quản trị ra đời là một tất yếu đối với xã hội loài
người vốn từ lâu đã có hoạt động quản trị
Question 17

Mark 1.00 out of 1.00


Question 18

Mark 0.00 out of 1.00


Tổ chức thường phải hoạt động trong hoàn cảnh các nguồn lực (tài chính, nhân
lực, vật lực, quyền hạn...) khan hiếm mà nhu cầu phát triển thì không dừng lại,
nhà quản lý phải thực hiện vai trò nào dưới đây hợp lý để giúp tổ chức đạt được
mục tiêu một cách có hiệu quả?

- [ ] Vai trò giải quyết vấn đề.
- [ ] Vai trò phân phối các nguồn lực.
- [ ] Vai trò đàm phán
- [ ] Vai trò sáng nghiệp.

The correct answer is: Vai trò phân phối các nguồn lực.
Question 19

Mark 1.00 out of 1.00


Question 20

Mark 1.00 out of 1.00


Kỹ năng nào là khả năng của nhà quản lý nhìn nhận những cơ hội cho sự phát
triển, những tình huống gây bất lợi cho tổ chức.

- [ ] Kỹ năng tư duy.
- [ ] Kỹ năng nhân sự.
- [ ] Kỹ năng kỹ thuật.
- [ ] Kỹ năng giải quyết vấn đề.

The correct answer is: Kỹ năng tư duy.
Question 21

Mark 1.00 out of 1.00


Đưa ra các quyết định chiến thuật để thực hiện kế hoạch và chính sách của tổ
chức là công việc chính của
- [ ] Nhà quản trị cấp cơ sở
- [ ] Nhà quản trị cấp trung gian
- [ ] Nhà quản trị cấp cao và cấp cơ sở
- [ ] Nhà quản trị cấp cao

The correct answer is: Nhà quản trị cấp trung gian
Question 22

Mark 1.00 out of 1.00



# Phát biểu nào sau đây đúng:
- [ ] Khi kết quả của một quá trình quản trị rất cao, thì hiển nhiên hiệu quả của quá trình đó cũng rất cao.
- [ ] Khi nói về kết quả của một quá trình quản trị thì cũng có nghĩa là nói về hiệu quả của quá trình đó.
- [ ] Kết quả, hay còn gọi là hiệu quả, của một quá trình quản trị là đầu ra của quá trình đó, theo nghĩa chưa đề cập gì đến chi phí bỏ ra trong quá trình đó.
- [x] Hiệu quả của một quá trình quản trị chỉ đầy đủ ý nghĩa khi nó hàm ý so sánh kết quả với chi phí bỏ ra trong quá trình quản trị đó.

The correct answer is: Hiệu quả của một quá trình quản trị chỉ đầy đủ ý nghĩa
khi nó hàm ý so sánh kết quả với chi phí bỏ ra trong quá trình quản trị đó.
Question 24

Mark 1.00 out of 1.00


Yếu tố nào dưới đây là quá trình hoạch định, tổ chức, phối hợp, kiểm tra các
nguồn lực và các hoạt động của con người trong một hay nhiều hoạt động nào
đó nhằm thực hiện mục tiêu chung của tổ chức với kết quả và hiệu quả cao
trong điều kiện môi trường luôn thay đổi?

- [ ] Quản lý.
- [ ] Điều khiển
- [ ] Giám sát.
- [ ] Lãnh đạo.

The correct answer is: Quản lý.
Question 25

Mark 1.00 out of 1.00

Bốn chức năng cơ bản của Quản trị là:

- [ ] Hoạch định, chỉ đạo, điều khiển, kiểm tra
- [ ] Lập kế hoạch, tổ chức, lãnh đạo, kiểm tra
- [ ] Lập kế hoạch, chỉ đạo, tổ chức, kiểm tra
- [ ] Hoạch định, chỉ đạo, phối hợp, kiểm tra

The correct answer is: Lập kế hoạch, tổ chức, lãnh đạo, kiểm tra
Question 26

Mark 1.00 out of 1.00


Question 27
Mark 1.00 out of 1.00


Nhà quản lý đảm nhiệm vai trò nào thông qua cách thường xuyên xem xét, phân
tích bối cảnh xung quanh tổ chức để nhận ra những tin tức, những hoạt động và
những sự kiện có thể đem lại cơ hội tốt hay sự đe dọa đối với hoạt động của tổ
chức.

- [ ] Vai trò phát ngôn.
- [ ] Vai trò thu thập và tiếp nhận thông tin.
- [ ] Vai trò liên kết.
- [ ] Vai trò phổ biến thông tin

The correct answer is: Vai trò thu thập và tiếp nhận thông tin.
Question 28

Mark 1.00 out of 1.00


Chức năng tổ chức gắn liền với việc

- [ ] Phân phối ngân sách cần thiết để thực hiện kế hoạch và phân công nhiệm vụ
- [ ] Phân công nhiệm vụ
- [ ] Thúc đẩy, hướng dẫn nguồn nhân lực việc thực hiện mục tiêu của tổ chức
- [ ] Phân phối ngân sách cần thiết để thực hiện kế hoạch
The correct answer is: Phân phối ngân sách cần thiết để thực hiện kế hoạch và
phân công nhiệm vụ
Question 29

Mark 1.00 out of 1.00


Một nhà quản trị cần có những kỹ năng nào?

- [ ] Kỹ năng thuyết trình, kỹ năng giao tiếp, kỹ năng quan hệ
- [ ] Kỹ năng làm việc nhóm, kỹ năng tư duy, kỹ năng đàm phán
- [ ] Kỹ năng kỹ thuật, kỹ năng giao tiếp, kỹ năng đàm phán
- [ ] Kỹ năng kỹ thuật, kỹ năng nhân sự, kỹ năng tư duy

The correct answer is: [&lt;
$&gt;] Kỹ năng kỹ thuật, kỹ năng nhân sự, kỹ năng tư duy
Question 30

Mark 1.00 out of 1.00


Kỹ năng nào cần thiết ở mức độ như nhau đối với các nhà quản trị:

- [ ] Quan hệ con người
- [ ] Kỹ thuật
- [ ] Tất cả các phương ántrên
- [ ] Tư duy
The correct answer is: Quan hệ con người
Question 31

Mark 1.00 out of 1.00


Quản trị viên cấp trung thường tập trung vào việc ra các loại quyết định nào?

- [ ] Chiến thuật
- [ ] Tác nghiệp
- [ ] Tất cả các phương án trên
- [ ] Chiến lược

The correct answer is: Chiến thuật
Question 32

Mark 1.00 out of 1.00



Question 33

Mark 0.00 out of 1.00


Trong 1 tổ chức, nhà quản trị cấp cao là người…

- [ ] Triển khai các mục tiêu, kế hoạch chiến lược
- [ ] Thực hiện chi tiết, cụ thể các kế hoạch đã được vạch ra.
- [ ] Phải chịu trách nhiệm kiểm tra, đôn đốc và chịu trách nhiệm trước
kết quả hàng ngày của nhân viên
- [ ] Nghiên cứu, xây dựng mục tiêu và kế hoạch chiến lược

The correct answer is: Nghiên cứu, xây dựng mục tiêu và kế hoạch
chiến lược
Question 34

Mark 1.00 out of 1.00


Tạo động lực cho nhân viên, quan tâm chia sẻ với người khác, có khả năng giao
tiếp tốt là kỹ năng …..của nhà quản trị.
- [ ] Nhân sự
- [ ] Kỹ thuật
- [ ] Tư duy
- [ ] Giao tiếp

The correct answer is: Nhân sự
Question 35

Mark 0.00 out of 1.00


Các tổ chức phi lợi nhuận khác với các tổ chức vì lợi nhuận chủ yếu______________

- [ ] Trong cách thức đưa ra quyết định
- [ ] Trong cách thức thuê nhân viên
- [ ] Trong cách thức đo lường thành công
- [ ] Trong cách thức thúc đẩy nhân viên

The correct answer is: Trong cách thức đo lường thành công
Question 36

Mark 0.00 out of 1.00


Ở Việt Nam, trong thời kỳ bao cấp, hầu như người ta quản trị mà chẳng quan
tâm đến hiệu quả, đó là vì:
- [ ] Người ta chưa được học quản trị nên không biết hiệu quả là gì
- [ ] Mọi người đều làm chủ tập thể, nên hiển nhiên đạt hiệu quả cao
- [ ] Mọi ngưồn lực cho đầu vào và việc giải quyết đầu ra hầu như đã
được nhà nước lo liệu rất đầy đủ
- [ ] Năng suất lao động của chúng ta quá cao, không cần phải quan
tâm đến các chi phí nữa

The correct answer is: Mọi ngưồn lực cho đầu vào và việc giải quyết
đầu ra hầu như đã được nhà nước lo liệu rất đầy đủ
Question 37

Mark 1.00 out of 1.00


Kỹ năng nào thuộc về kỹ năng chuyên môn

- [ ] Xây dựng mạng lưới quan hệ
- [ ] Kỹ năng thuyết trình
- [ ] Khả năng nhận dạng cơ hội để đổi mới
- [ ] Khả năng vận dụng quy trình kỹ thuật để thực hiện hoạt động cụ t
hể

The correct answer is: [&lt;
$&gt;] Khả năng vận dụng quy trình kỹ thuật để thực hiện hoạt động cụ thể
Question 38

Mark 1.00 out of 1.00

Ai là nhà quản trị trong doanh nghiệp?

- [ ] Trưởng phòng quản lý nhân lực
- [ ] Chủ tịch hội đồng quản trị
- [ ] Tất cả các nhà quản quản lí các cấp đều là các nhà quản trị
- [ ] Giám đốc công ty

The correct answer is: Tất cả các nhà quản quản lí các cấp đều là các nhà quản
trị
Question 39

Mark 1.00 out of 1.00


# Đốc công, trưởng ca, tổ trưởng sản xuất, trưởng nhóm bán hàng v.v. được gọi là nhà quản trị:
- [ ] Cấp cao
- [ ] Tất cả các phương án trên đều sai.
- [ ] Cấp trung gian
- [x] Cấp cơ sở



Mark 0.00 out of 1.00


………… là đưa ra các quyết định tác nghiệp, hướng dẫn và đôn đốc các nhân
viên dưới quyền triển khai các công việc cụ thể.

- [ ] Nhà quản lý cấp cao
- [ ] Nhà quản lý cấp cơ sở
- [ ] Nhân viên
- [ ] Nhà quản lý cấp trung gian

The correct answer is: Nhà quản lý cấp cơ sở
Question 41

Mark 1.00 out of 1.00


Question 42

Mark 1.00 out of 1.00


Một tổ chức được hiểu là:

- [ ] Một địa điểm cụ thể nơi mọi thành viên làm việc.
- [ ] Một tập hợp các cá nhân cùng làm việc trong một công ty.
- [ ] Một tập hợp của hai hay nhiều người cùng hoạt động trong những hình thái cơ
cấu nhất định để đạt được các mục tiêu chung.
- [ ] Một nhóm các các nhân tập trung vào lợi nhuận mang lại cho các cổ đông của
họ.

The correct answer is: Một tập hợp của hai hay nhiều người cùng hoạt động
trong những hình thái cơ cấu nhất định để đạt được các mục tiêu chung.
Question 43

Mark 1.00 out of 1.00


Theo cách tiếp cận các hệ thống, yếu tố nào sau đây có thể là một ví dụ minh
họa cho các yếu tố đầu vào của tổ chức?

- [ ] Sự hài lòng của nhân viên
- [ ] Lợi nhuận- [ ] Hoạt động của nhà quản trị
- [ ] Thông tin

The correct answer is: Thông tin
Question 44

Mark 1.00 out of 1.00


Khả năng làm việc nhóm thuộc về:

- [ ] Kỹ năng giao tiếp
- [ ] Kỹ năng nhân sự
- [ ] Kỹ năng tư duy
- [ ] Kỹ năng kỹ thuật

The correct answer is: Kỹ năng nhân sự
Question 45

Mark 1.00 out of 1.00



Question 1

Mark 1.00 out of 1.00



The correct answer is: Nhà quản lý cấp trung gian.
Question 2

Mark 1.00 out of 1.00

Question 3

Mark 1.00 out of 1.00


Mark 1.00 out of 1.00


Đặc điểm chung của một tổ chức là:

- [ ] Tất cả lựa chọn trên đều đúng
- [ ] Có mục đích chung
- [ ] Kết hợp nỗ lực của các thành viên
- [ ] Có một cấu trúc nhất định

The correct answer is: Tất cả lựa chọn trên đều đúng
Question 15

Mark 1.00 out of 1.00

Xây dựng chiến lược, kế hoạch hành động & phát triển của tổ chức là công việc
chính của

- [ ] Nhà quản trị cấp trung gian
- [ ] Nhà quản trị cấp cao
- [ ] Nhà quản trị cấp cơ sở
- [ ] Nhà quản trị cấp cao và nhà quản trị cấp trung gian

The correct answer is: Nhà quản trị cấp cao
Question 16

Mark 1.00 out of 1.00


Các hoạt động khai trương chi nhánh, khai trương chương trình mới, sản phẩm
mới, tiếp đón khách mời đến thăm và làm việc chính thức với tổ chức, là các ví
dụ minh họa cho vai trò quản lý nào dưới đây?

- [ ] Vai trò liên kết.
- [ ] Vai trò lãnh đạo.
- [ ] Vai trò đại diện.
- [ ] Vai trò truyền thông.

The correct answer is: Vai trò đại diện.Question 17

Mark 1.00 out of 1.00


Quản trị cần thiết cho:

- [ ] Các doanh nghiệp hoạt động sản xuất kinh doanh
- [ ] Tất cả các tổ chức
- [ ] Các công ty lớn
- [ ] Các tổ chức lợi nhuận và các tổ chức phi lợi nhuận

The correct answer is: Tất cả các tổ chức
Question 18

Mark 1.00 out of 1.00


Phát biểu nào sau đây đúng:

- [ ] Kết quả, hay còn gọi là hiệu quả, của một quá trình quản trị là đầu ra của quá
trình đó, theo nghĩa chưa đề cập gì đến chi phí bỏ ra trong quá trình đó.
- [ ] Khi kết quả của một quá trình quản trị rất cao, thì hiển nhiên hiệu quả của
quá trình đó cũng rất cao.
- [ ] Hiệu quả của một quá trình quản trị chỉ đầy đủ ý nghĩa khi nó hàm ý so sánh
kết quả với chi phí bỏ ra trong quá trình quản trị đó.- [ ] Khi nói về kết quả của một quá trình quản trị thì cũng có nghĩa là nói về hiệu
quả của quá trình đó.

The correct answer is: Hiệu quả của một quá trình quản trị chỉ đầy đủ ý nghĩa
khi nó hàm ý so sánh kết quả với chi phí bỏ ra trong quá trình quản trị đó.
Question 19

Mark 1.00 out of 1.00


Tất cả các nhà quản trị cần có các kỹ năng:

- [ ] Tất cả những câu trên
- [ ] Tư duy (Nhận thức + thiết kế)
- [ ] Quan hệ con người
- [ ] Kỹ thuật

The correct answer is: Tất cả những câu trên
Question 20

Mark 1.00 out of 1.00


Lãi suất, lạm phát, chỉ số thị trường chứng khoán đều là ví dụ minh hoạ cho các
yếu tố nào của môi trường chung của tổ chức:
- [ ] Kinh tế
- [ ] Chính trị
- [ ] Pháp luật
- [ ] Xã hội

The correct answer is: Kinh tế
Question 21

Mark 1.00 out of 1.00


Trong bốn chức năng cơ bản của quản trị, Quản trị viên cấp trung dành nhiều
thời gian nhất để thực hiện chức năng quản trị nào?

- [ ] Kiểm tra
- [ ] Lập kế hoạch
- [ ] Lãnh đạo
- [ ] Tổ chức

The correct answer is: Tổ chức
Question 22

Mark 1.00 out of 1.00


Nhà quản trị phải có kiến thức về lĩnh vực mà họ quản lý là yêu cầu thuộc về:
- [ ] Kỹ năng kỹ thuật
- [ ] Kỹ năng giao tiếp
- [ ] Kỹ năng nhân sự
- [ ] Kỹ năng tư duy

The correct answer is: Kỹ năng kỹ thuật
Question 23

Mark 1.00 out of 1.00


Tổ chức thường phải hoạt động trong hoàn cảnh khan hiếm nhân lực, vật lực, tài
chính...., nhà quản trị phải thực hiện vai trò nào dưới đây để giúp tổ chức đạt
được mục tiêu một cách có hiệu quả.

- [ ] Sáng nghiệp
- [ ] Giải quyết vấn đề
- [ ] Đàm phán
- [ ] Phân phối các nguồn lực

The correct answer is: Phân phối các nguồn lực
Question 24

Mark 1.00 out of 1.00

Trong 1 tổ chức, nhà quản trị cấp cao là người…

- [ ] Thực hiện chi tiết, cụ thể các kế hoạch đã được vạch ra.
- [ ] Nghiên cứu, xây dựng mục tiêu và kế hoạch chiến lược
- [ ] Triển khai các mục tiêu, kế hoạch chiến lược
- [ ] Phải chịu trách nhiệm kiểm tra, đôn đốc và chịu trách nhiệm trước
kết quả hàng ngày của nhân viên

The correct answer is: Nghiên cứu, xây dựng mục tiêu và kế hoạch
chiến lược
Question 25

Mark 1.00 out of 1.00


Kỹ năng nào là khả năng của nhà quản lý nhìn nhận những cơ hội cho sự phát
triển, những tình huống gây bất lợi cho tổ chức.

- [ ] Kỹ năng nhân sự.
- [ ] Kỹ năng giải quyết vấn đề.
- [ ] Kỹ năng kỹ thuật.
- [ ] Kỹ năng tư duy.

The correct answer is: Kỹ năng tư duy.
Question 26

Mark 1.00 out of 1.00

Đây là phát biểu chính xác nhất: “…………… được hiểu là quá trình làm việc với
và thông qua người khác nhằm đạt được mục tiêu mà tổ chức đặt ra một cách có
kết quả và hiệu quả”?

- [ ] Lãnh đạo
- [ ] Điều khiển
- [ ] Quản lý
- [ ] Giám sát

The correct answer is: Quản lý
Question 27

Mark 1.00 out of 1.00


Chức năng tổ chức gắn liền với việc

- [ ] Thúc đẩy, hướng dẫn nguồn nhân lực việc thực hiện mục tiêu của tổ chức
- [ ] Phân phối ngân sách cần thiết để thực hiện kế hoạch
- [ ] Phân phối ngân sách cần thiết để thực hiện kế hoạch và phân công nhiệm vụ
- [ ] Phân công nhiệm vụ

The correct answer is: Phân phối ngân sách cần thiết để thực hiện kế hoạch và
phân công nhiệm vụQuestion 28

Mark 1.00 out of 1.00


Quản trị là tác động có mục tiêu, có hướng đích từ chủ thể quản trị lên các đối
tượng quản trị trong một tổ chức, thông qua các tác động trực tiếp hoặc gián
tiếp, một lần hoặc thường xuyên nhằm đạt được các _________chung mà tổ chức
đó đặt ra

- [ ] Kế hoạch
- [ ] Lợi nhuận
- [ ] Lợi ích
- [ ] Mục tiêu

The correct answer is: Mục tiêu
Question 29

Mark 1.00 out of 1.00


Viết một kế hoạch chiến lược của tổ chức là một ví dụ minh họa của chức năng
quản lý nào?

- [ ] Lập kế hoạch.
- [ ] Lãnh đạo.
- [ ] Điều phối.- [ ] Kiểm tra

The correct answer is: Lập kế hoạch.
Question 30

Mark 1.00 out of 1.00


Quản trị được thực hiện trong một tổ chức nhằm:

- [ ] Sử dụng có hiệu quả cao nhất các nguồn lực
- [ ] Tối đa hóa lợi nhuận
- [ ] Đạt được mục tiêu của tổ chức với hiệu quả cao
- [ ] Đạt mục tiêu của tổ chức

The correct answer is: Đạt được mục tiêu của tổ chức với hiệu quả cao
Question 31

Mark 0.00 out of 1.00




The correct answer is: Lãnh đạo
Question 32

Mark 1.00 out of 1.00


# Trong một tổ chức, các cấp bậc quản trị được phân thành:
- [ ] 5 cấp
- [x] 3 cấp
- [ ] 4 cấp
- [ ] 2 cấp



Hoạt động giúp phân biệt một vị trí quản lý với một vị trí phi quản lý khác?
- [ ] Điều phối và kết hợp công việc của người khác.
- [ ] Xác định thị phần.
- [ ] Nâng cao hiệu năng
- [ ] Điều khiển máy móc

The correct answer is: Điều phối và kết hợp công việc của người khác.
Question 34

Mark 1.00 out of 1.00


Nhóm vai trò quyết định, gồm có vai trò:

- [ ] [&lt;$&gt;]
Người đại diện, người lãnh đạo, người phân phối tài nguyên, nhà thương lượng
- [ ] Người sáng tạo, người điều khiển, người phân phối tài nguyên, nhà
thương lương
- [ ] Người lãnh đạo, người điều khiển, người đại diện, nhà thương lượng
- [ ] Người sáng tạo, người lãnh đạo, người phân phối tài nguyên, nhà t
hương lượng

The correct answer is: [&lt;
$&gt;] Người sáng tạo, người điều khiển, người phân phối tài nguyên, nhà thươn
g lương
Question 35

Mark 1.00 out of 1.00

Một nhà quản trị cần có những kỹ năng nào?

- [ ] Kỹ năng thuyết trình, kỹ năng giao tiếp, kỹ năng quan hệ
- [ ] Kỹ năng kỹ thuật, kỹ năng giao tiếp, kỹ năng đàm phán
- [ ] Kỹ năng kỹ thuật, kỹ năng nhân sự, kỹ năng tư duy
- [ ] Kỹ năng làm việc nhóm, kỹ năng tư duy, kỹ năng đàm phán

The correct answer is: [&lt;
$&gt;] Kỹ năng kỹ thuật, kỹ năng nhân sự, kỹ năng tư duy
Question 36

Mark 0.00 out of 1.00



Question 37

Mark 1.00 out of 1.00

Tổ chức là một thực thể

- [ ] Được sử dụng bởi con người để kết hợp các hành động lại nhằm đạt được mục
tiêu chung.
- [ ] Có mục đích riêng biệt, có những thành viên và có một cơ cấu chặt chẽ có
tính hệ thống
- [ ] Bao gồm cơ cấu tổ chức, các mục tiêu tổ chức, và môi trường xung quanh tổ
chức
- [ ] Bao gồm cơ cấu tổ chức, các mục tiêu tổ chức, và văn hóa tổ chức

The correct answer is: Có mục đích riêng biệt, có những thành viên và có một cơ
cấu chặt chẽ có tính hệ thống
Question 38

Mark 1.00 out of 1.00


Các cấp bậc quản trị được chia thành

- [ ] Nhà quản trị cấp trung gian và nhà quản trị cấp cơ sở
- [ ] Nhà quản trị cấp cao, nhà quản trị cấp trung gian và nhà quản trị
cấp cơ sở
- [ ] Nhà quản trị cấp cơ sở và nhà quản trị cấp cao
- [ ] Nhà quản trị cấp cao, nhà quản trị cấp thấp
The correct answer is: Nhà quản trị cấp cao, nhà quản trị cấp trung
gian và nhà quản trị cấp cơ sở
Question 39

Mark 1.00 out of 1.00


Khái niệm của tổ chức

- [ ] Một nhóm các các nhân tập trung vào lợi nhuận mang lại cho các cổ đông của
họ
- [ ] Một địa điểm cụ thể nơi mọi thành viên làm việc.
- [ ] Một tập hợp các cá nhân cùng làm việc trong một công ty
- [ ] Một sự sắp xếp có chủ đích các thành viên nhằm cùng đạt được những mục
đích cụ thể

The correct answer is: Một sự sắp xếp có chủ đích các thành viên nhằm cùng đạt
được những mục đích cụ thể
Question 40

Mark 1.00 out of 1.00


Theo Henry Mintzberg, các nhà quản trị phải thực hiện 10 vai trò và phân loại
thành 3 nhóm vai trò, đó là:

- [ ] Vai trò liên lạc, vai trò phân bổ nguồn nhân lực và vai trò ra quyết định
- [ ] Vai trò quan hệ con người, vai trò truyền thông và vai trò ra quyết định- [ ] Vai trò lãnh đạo, vai trò truyền thông và vai trò ra quyết định
- [ ] Vài trò đại diện, vai trò đàm phán và vai trò lãnh đạo

The correct answer is: Vai trò quan hệ con người, vai trò truyền thông và vai trò
ra quyết định
Question 41

Mark 1.00 out of 1.00




The correct answer is: Tổ chức không có khả năng tác động đến môi
trường
Question 42

Mark 1.00 out of 1.00

Question 43

Mark 1.00 out of 1.00


Kế toán trưởng của công ty TNHH Thành Công là nhà quản trị thuộc cấp bậc
nào?

- [ ] Nhà quản trị cấp cao
- [ ] Nhà quản trị cấp cơ sở
- [ ] Nhà quản trị cấp trung gian
- [ ] Nhà quản trị cấp thấp.

The correct answer is: Nhà quản trị cấp trung gian
Question 44

Mark 1.00 out of 1.00

Các hoạt động tuyển dụng, đào tạo, hướng dẫn, một số khía cạnh sẽ liên quan
đến chức năng lãnh đạo như thúc đẩy và động viên cấp dưới hoàn thành nhiệm
vụ và đáp ứng các yêu cầu của tổ chức là các ví dụ minh họa cho vai trò quản lý
nào dưới đây?

- [ ] Vai trò truyền thông.
- [ ] Vai trò lãnh đạo.
- [ ] Vai trò liên kết.
- [ ] Vai trò đại diện.

The correct answer is: Vai trò lãnh đạo.
Question 45

Mark 1.00 out of 1.00


Để đạt được hiệu quả, nhà quản trị cần:

- [ ] Tất cả đều sai
- [ ] Giảm chi phí đầu vào
- [ ] Xác định và hoàn thành đúng mục tiêu
- [ ] Tăng doanh thu ở đầu ra

The correct answer is: Xác định và hoàn thành đúng mục tiêuQuestion 1

Mark 1.00 out of 1.00


Đây là một trong kỹ năng quan trọng nhất liên quan đến con người nhà quản trị
cần phải vượt trội hơn các nhân viên của mình:

- [ ] Nhân sự
- [ ] Chuyên môn
- [ ] Giao tiếp
- [ ] Tư duy

The correct answer is: Nhân sự
Question 2

Mark 1.00 out of 1.00


Yếu tố nào dưới đây là quá trình hoạch định, tổ chức, phối hợp, kiểm tra các
nguồn lực và các hoạt động của con người trong một hay nhiều hoạt động nào
đó nhằm thực hiện mục tiêu chung của tổ chức với kết quả và hiệu quả cao
trong điều kiện môi trường luôn thay đổi?

- [ ] Điều khiển
- [ ] Quản lý.- [ ] Lãnh đạo.
- [ ] Giám sát.

The correct answer is: Quản lý.
Question 3

Mark 1.00 out of 1.00


Có thể hiểu thuật ngữ "Quản trị" như sau:

- [ ] Quản trị là quá trình quản lý
- [ ] Quản trị là phương thức làm cho nhiệm vụ và tổ chức của nhà quản trị đạt
mục tiêu bằng cách làm việc với và thông qua những người khác
- [ ] Quản trị là sự bắt buộc người khác hành động
- [ ] Quản trị là tự mình hành động hướng tới mục tiêu bằng chính nỗ lực cá nhân

The correct answer is: Quản trị là phương thức làm cho nhiệm vụ và tổ chức của
nhà quản trị đạt mục tiêu bằng cách làm việc với và thông qua những người
khác
Question 4

Mark 1.00 out of 1.00


Vai trò quản lý của Mintzberg được phân thành các nhóm nào sau đây?
- [ ] Vai trò quan hệ con người, lãnh đạo, và ra quyết định
- [ ] Vai trò quan hệ con người, truyền thông, và ra quyết định
- [ ] Lãnh đạo, ra quyết định, lập kế hoạch.
- [ ] Truyền đạt thông tin, ra quyết định, và phân bổ các nguồn

The correct answer is: Vai trò quan hệ con người, truyền thông, và ra
quyết định
Question 5

Mark 1.00 out of 1.00


Nhìn chung trong các doanh nghiệp, nhà quản lý nào là người chịu trách nhiệm
quản lý toàn bộ tổ chức, quyết định các chiến lược, các chính sách và thiết lập
mối quan hệ giữa tổ chức với môi trường bên ngoài?

- [ ] Người quản lý cấp trung.
- [ ] Người quản lý cấp cơ sở.
- [ ] Nhân viên thuộc cấp.
- [ ] Người quản lý cấp cao.

The correct answer is: Người quản lý cấp cao.
Question 6

Mark 1.00 out of 1.00

Hướng dẫn, đốc thúc, điều khiển công nhân trong công việc hàng ngày là công
việc chính của

- [ ] Nhà quản trị cấp trung gian
- [ ] Nhà quản trị cấp cao và nhà quản trị cấp cơ sở
- [ ] Nhà quản trị cấp cao
- [ ] Nhà quản trị cấp cơ sở

The correct answer is: Nhà quản trị cấp cơ sở
Question 7

Mark 1.00 out of 1.00


Chức năng kiểm soát có thể là các hoạt động dưới đây, ngoại trừ:

- [ ] So sánh các kết quả đạt được với mục tiêu đã đặt ra
- [ ] Xây dựng cơ cấu tổ chức của doanh nghiệp
- [ ] Đo lường các kết quả của việc thực hiện
- [ ] Điều chỉnh mục tiêu nếu cần thiết

The correct answer is: Xây dựng cơ cấu tổ chức của doanh nghiệp
Question 8

Mark 1.00 out of 1.00



The correct answer is: Liên kết
Question 9

Mark 1.00 out of 1.00


Tổ chức là một................................... có mục đích riêng biệt, có những thành
viên và có một cơ cấu ............................. có tính hệ thống.

- [ ] Cá thể/ nhỏ
- [ ] Cá thể/ chặt chẽ
- [ ] Thực thể/ chặt chẽ
- [ ] Thực thể/ lớn

The correct answer is: Thực thể/ chặt chẽQuestion 10

Mark 1.00 out of 1.00


# Mối quan hệ giữa các cấp bậc quản trị và các kỹ năng của nhà quản trị là:
- [ ] Tất cả các phương án trên đều sai
- [ ] Ở bậc quản trị càng cao kỹ năng kỹ thuật càng có tầm quan trọng
- [x] Kỹ năng nhân sự có tầm quan trọng như nhau đối với các cấp bậc quản trị
- [ ] Ở bậc quản trị càng cao kỹ năng nhận sự càng có tầm quan trọng


Question 11

Mark 1.00 out of 1.00


Hoạt động quản trị chịu sự tác động của _______luôn biến động

- [ ] Môi trường
- [ ] Kinh tế
- [ ] Kỹ thuật
- [ ] Công nghệ
The correct answer is: Môi trường
Question 12

Mark 1.00 out of 1.00



Question 13

Mark 1.00 out of 1.00


Là một nhà quản trị sản xuất của công ty Ford, Kiên chịu trách nhiệm động vên
khuyến khích các người quản lý cấp dưới và nhân viên làm việ- [ ] Để hoàn thành
công việc này, anh ta phải sử dụng chủ yếu kỹ năng nào?

- [ ] Ra quyết định
- [ ] Tư duy
- [ ] Kỹ thuật- [ ] Quan hệ con người

The correct answer is: Quan hệ con người
Question 14

Mark 1.00 out of 1.00


Ở Việt Nam, trong thời kỳ bao cấp, hầu như người ta quản trị mà chẳng quan
tâm đến hiệu quả, đó là vì:

- [ ] Người ta chưa được học quản trị nên không biết hiệu quả là gì
- [ ] Mọi ngưồn lực cho đầu vào và việc giải quyết đầu ra hầu như đã
được nhà nước lo liệu rất đầy đủ
- [ ] Mọi người đều làm chủ tập thể, nên hiển nhiên đạt hiệu quả cao
- [ ] Năng suất lao động của chúng ta quá cao, không cần phải quan
tâm đến các chi phí nữa

The correct answer is: Mọi ngưồn lực cho đầu vào và việc giải quyết
đầu ra hầu như đã được nhà nước lo liệu rất đầy đủ
Question 15

Mark 1.00 out of 1.00


Kiến thức chuyên sâu về chuyên môn công nghệ thông tin, tài chính, cơ khí, là
các ví dụ minh họa cho kỹ năng quản lý nào dưới đây?
- [ ] Kỹ năng nhân sự.
- [ ] Kỹ năng tư duy.
- [ ] Kỹ năng giải quyết vấn đề.
- [ ] Kỹ năng kỹ thuật.

The correct answer is: Kỹ năng kỹ thuật.
Question 16

Mark 1.00 out of 1.00



Question 17

Mark 1.00 out of 1.00

The correct answer is: Nhà quản lý cấp trung gian.
Question 18

Mark 1.00 out of 1.00


Kỹ năng nào dưới đây thuộc về nhóm kỹ năng kỹ thuật

- [ ] Khả năng nhận ra nơi có vấn đề và triển khai giải pháp
- [ ] Khả năng vận dụng quy trình kỹ thuật để thực hiện một hoạt động cụ thể.
- [ ] Khả năng nhận dạng cơ hội để đổi mới
- [ ] Kỹ năng trình bày bằng lời nói

The correct answer is: Khả năng vận dụng quy trình kỹ thuật để thực hiện một
hoạt động cụ thể.
Question 19

Mark 1.00 out of 1.00

Để tăng hiệu quả của hoạt động quản trị, các nhà quản trị có thể thực hiện bằng
cách:

- [ ] Chi phí ở đầu vào không thay đổi và tăng doanh thu ở đầu ra
- [ ] Giảm chi phí ở đầu vào và doanh thu ở đầu ra không thay đổi
- [ ] Vừa giảm chi phí đầu vào và vừa tăng doanh thu ở đầu ra
- [ ] Tất cả các phương án trên

The correct answer is: Tất cả các phương án trên
Question 20

Mark 1.00 out of 1.00



Tiếp xúc với khách hàng, nhà cung cấp… là vai trò nào của nhà quản trị

- [ ] Vai trò người điều khiển
- [ ] Vai trò liên lạc
- [ ] Vai trò người đại diện
- [ ] Vai trò nhà thương lượng

The correct answer is: Vai trò liên lạc
Question 23
Mark 0.00 out of 1.00 -->


# Bốn nguồn lực cơ bản được nhà quản trị sử dụng là: con người, tài chính, vật chất và
- [ ] Địa điểm kinh doanh
- [x] Thông tin
- [ ] Công nghệ
- [ ] Kỹ thuật và thiết bị

# Chuyên gia cố vấn được mời đến tư vấn cho ban giám đốc cuả một doanh nghiệp là
- [x] Một chuyên gia cao cấp từ bên ngoài doanh nghiệp
- [ ] Quản trị viên cấp trung gian
- [ ] Quản trị viên cấp cơ sở
- [ ] Quản trị viên cấp cao

# Phân công lao động giúp tổ chức:
- [ ] phân chia các công việc phức tạp thành các công việc cụ thể
- [ ] sử dụng nguồn lực một cách hiệu quả
- [x] tất cả các ý trên
- [ ] tạo điều kiện cho mỗi thành viên chuyên sâu hơn vào một lĩnh vực cụ thể

# Một giám đốc kinh doanh biết cách tác động và hướng dẫn nhân viên trong tổ chức để hoàn thành các công việc là kỹ năng gì?
- [x] Kỹ năng nhân sự
- [ ] Kỹ năng giao tiếp
- [ ] Kỹ năng quan hệ
- [ ] Kỹ năng chuyên môn

# Nhà quản trị cấp cao trong một tổ chức làm việc hoạch định nào trong các loại
hoạch định sau đây
- [x] Hoạch định chiến lược
- [ ] Hoạch định tiếp thị
- [ ] Hoạch định sản xuất
- [ ] Hoạch định tài chính

# Quản trị là quá trình ................................. với người khác và thông qua những người khác để thực hiện các mục tiêu của tổ chức trong một môi trường................................
- [ ] Làm việc/ thay đổi
- [ ] Làm việc/không thay đổi
- [ ] Làm việc/ ít thay đổi
- [x] Làm việc/ luôn biến động

# Lãi suất, lạm phát, chỉ số thị trường chứng khoán đều là ví dụ minh hoạ cho các yếu tố nào của môi trường chung của tổ chức:
- [ ] Chính trị
- [ ] Pháp luật
- [x] Kinh tế
- [ ] Xã hội

# Cấp quản trị chịu trách nhiệm chính đối với các hoạt động chức năng là:
- [ ] Nhân viên thừa hành
- [ ] Cấp cao
- [x] Cấp trung gian
- [ ] Cấp cơ sở

# Hiệu quả của quản trị chỉ có được khi
- [ ] Làm đúng việc
- [ ] Làm đúng cách
- [ ] Tỷ lệ giữa kết quả đạt được/chi phí bỏ ra
- [x] Làm đúng cách để đạt được mục tiêu


# Quản trị là ……
- [ ] Quá trình nghiên cứu các mối quan hệ tài chính phát sinh trong quá trình sản xuất và kinh doanh của một doanh nghiệp hay một tổ chức
- [ ] Việc thiết kế hệ thống chính thức trong một tổ chức để đảm bảo hiệu quả và hiệu suất sử dụng khả năng nhân lực nhằm đạt được những mục đích của tổ chức
- [x] Quá trình làm việc với và thông qua những người khác để thực hiện các mục tiêu của tổ chức trong một môi trường luôn biến động
- [ ] Quá trình thực hiện các tác động của chủ thể quản lý lên đối tượng quản lý để phối hợp hoạt động của các cá nhân và tập thể nhằm đạt được các mục tiêu đã đề ra của tổ chức


<!-- Situational -->

# Ông Trần Văn Nam là giám đốc một công ty thời trang vào TPHCM để khai trương chi nhánh của Công ty, ông đã thực hiện vai trò nào:
- [ ] Liên kết
- [ ] Lãnh đạo
- [x] Đại diện
- [ ] Truyền thông

# Hương là phó tổng giám đốc nhưng cô ấy chỉ phụ trách tài chính của công ty TNHH Việt Mỹ. Hương là nhà quản trị cấp nào của công ty?
- [ ] Nhà quản lý cấp cao.
- [ ] Kỹ thuật viên.
- [x] Nhà quản lý cấp trung gian.
- [ ] Nhà quản lý cấp cơ sở.

# Kế toán trưởng của công ty TNHH Thành Công là nhà quản trị thuộc cấp bậc nào?
- [x] Nhà quản trị cấp trung gian
- [ ] Nhà quản trị cấp thấp.
- [ ] Nhà quản trị cấp cao
- [ ] Nhà quản trị cấp cơ sở

# Một hãng sản xuất xe hơi tăng số lượng xe sản xuất với cùng mức chi phí, nhưng có nhiều sản phẩm hỏng. Mối quan tâm ngay được ưu tiên trong thời điểm này?
- [ ] Quan tâm tới việc tăng kết quả.
- [ ] Quan tâm đến các yếu tố đầu vào
- [ ] Quan tâm tới kết quả và hiệu quả.
- [x] Quan tâm tới việc tăng hiệu quả.


# Đây không phải là nhà quản trị cấp cao?
- [ ] Giám đốc
- [x] Trưởng phòng
- [ ] Chủ tịch HĐQT
- [ ] Kiểm soát viên cao cấp


<!-- Questionable -->
<!-- 
# Đây là một trong kỹ năng quan trọng nhất liên quan đến con người nhà quản trị cần phải vượt trội hơn các nhân viên của mình:
- [ ] Giao tiếp
- [ ] Chuyên môn
- [x] Nhân sự
- [ ] Tư duy


 -->




<!-- Too simple -->
<!-- 
# Kiến thức chuyên sâu về chuyên môn công nghệ thông tin, tài chính, cơ khí, là các ví dụ minh họa cho kỹ năng quản lý nào dưới đây?
- [x] Kỹ năng kỹ thuật.
- [ ] Kỹ năng nhân sự.
- [ ] Kỹ năng tư duy.
- [ ] Kỹ năng giải quyết vấn đề.
 -->`,$h=`# Các tổ chức cung cấp các sản phẩm, dịch vụ cùng loại với sản phẩm, dịch vụ mà doanh nghiệp đang cung cấp trên thị trường được gọi là
- [x] Đối thủ cạnh tranh trực tiếp
- [ ] Các nhà phân phối
- [ ] Các khách hàng
- [ ] Đối thủ cạnh tranh tiềm năng

# Yếu tố nào sau đây không thuộc môi trường quản trị vi mô
- [x] Khoa học công nghệ
- [ ] Đối thủ cạnh tranh
- [ ] Nhà cung cấp
- [ ] Khách hàng

# Phân loại kế hoạch thành kế hoạch chiến lược và kế hoạch tác nghiệp là dựa trên tiêu chí:
- [ ] Thời gian
- [x] Phạm vi hoạt động
- [ ] Mức độ cụ thể
- [ ] Tần suất sử dụng


# Người ta thường sử dụng kế hoạch chiến lược nhằm
- [ ] Thực hiện kế hoạch hoạt động hàng quý
- [ ] Giải quyết công việc hàng ngày
- [ ] Xây dựng quy trình làm việc hàng ngày
- [x] Xác định tương lai lâu dài của doanh nghiệp

# Môi trường nội bộ của doanh nghiệp
- [ ] Triết lý kinh doanh, nhân sự, nhà cung cấp, khách hàng, mục tiêu
- [ ] Cơ sở vật chất, triết lý kinh doanh, nhân sự, nhà cung cấp, mục tiêu
- [x] Cơ sở vật chất, mục tiêu, triết lý kinh doanh, chiến lược, nhân sự
- [ ] Cơ sở vật chất, triết lý kinh doanh, khách hàng, nhân sự, mục tiêu

# Các phương án dưới đây là nguyên tắc lập kế hoạch, trừ
- [ ] Chủ động lập kế hoạch
- [ ] Người quản lý ở các cấp cùng tham gia vào quá trình lập kế hoạch
- [ ] Tạo môi trường làm việc có kế hoạch trong tổ chức
- [x] Kế hoạch cần được lập càng nhanh càng tốt
- [ ] Cần có sự phối hợp giữa các loại kế hoạch
- [ ] Kế hoạch cần linh hoạt

# Loại kế hoạch nào xác định vị thế của doanh nghiệp trong môi trường hoạt động?
- [ ] Thường trực
- [ ] Cụ thể
- [ ] Tác nghiệp
- [x] Chiến lược

# Kế hoạch tác nghiệp có
- [ ] Rủi ro lớn
- [ ] Môi trường xác định
- [ ] Kết quả lâu dài
- [x] Mục tiêu cụ thể, rõ ràng

# “Tất cả nhân viên phải nghiêm túc tuân thủ các tiêu chuẩn về an toàn lao động” là một ví dụ của
- [ ] Thủ tục
- [ ] Chính sách
- [x] Quy tắc
- [ ] Chương trình

# Một phương pháp quản trị bằng mục tiêu (MBO) là:
- [ ] Xác định các mục tiêu cụ thể của đơn vị
- [x] Việc hoàn thành mục tiêu được thúc đẩy bởi hệ thống mục tiêu đã đề ra và phần thưởng dựa trên thành tích
- [ ] Kiểm tra thường xuyên tiến trình thực hiện các mục tiêu, thông tin phản hồi được cung cấp
- [ ] Xác định mục tiêu tổng thể và chiến lược

# Trong chiến lược chi phí thấp, yếu tố nào được ưu tiên nhiều nhất
- [ ] Đổi mới
- [ ] Khả năng đáp ứng nhu cầu khách hàng
- [x] Hiệu suất
- [ ] Chất lượng

# Nhà cung cấp và khách hàng là yếu tố thuộc:
- [ ] Môi trường quản trị vĩ mô
- [x] Môi trường quản trị vi mô
- [ ] Môi trường xã hội
- [ ] Môi trường nội bộ

# Yếu tố nào tác động trực tiếp tới doanh nghiệp
- [ ] Vai trò của chính phủ
- [x] Người tiêu dùng sản phẩm của doanh nghiệp
- [ ] Tăng trưởng kinh tế
- [ ] Văn hóa xã hội

# Phương án nào dưới đây thể hiện thách thức của công ty?
- [ ] Tỷ lệ sản phẩm sai hỏng của bộ phận sản xuất cao
- [ ] Nhu cầu của khách hàng về sản phẩm của công ty ngày càng tăng
- [ ] Hoạt động nghiên cứu và phát triển sản phẩm mới của công ty có kết quả tốt
- [x] Nguồn nguyên liệu ngày càng khan hiếm

# ___ là những hoạt động cần thiết được sắp xếp theo trình tự thời gian và nhờ đó, hoạt động của các bộ phận được diễn ra một cách hiệu quả
- [ ] Chương trình
- [ ] Quy tắc
- [ ] Chính sách
- [x] Thủ tục

# Phương án nào dưới đây thể hiện điểm mạnh của công ty?
- [ ] Thị trường chưa được khai thác hết
- [x] Năng suất lao động của công ty cao
- [ ] Chính sách thuế ưu đãi của cơ quan quản lý nhà nước với nguyên vật liệu của công ty
- [ ] Cơ quan quản lý nhà nước tăng cường kiểm tra hoạt động của công ty

# Hoạch định là:
- [x] Công việc của các nhà quản trị cấp cao
- [ ] Một công việc mang tính cứng nhắc
- [ ] Công việc của mọi nhà quản trị các cấp
- [ ] Kiểm tra quá trình thực hiện

# Việc mở rộng sản lượng tiềm năng của một quốc gia trong một giai đoạn nhất định là
- [x] Tăng trưởng GNP
- [ ] Phát triển kinh tế
- [ ] Tăng trưởng GDP
- [ ] Tăng trưởng kinh tế

# Văn hóa tổ chức thuộc yếu tố môi trường
- [x] Nội bộ
- [ ] Vĩ mô
- [ ] Vi mô
- [ ] Bên ngoài

# Yếu tố nào là những yếu tố của môi trường bên ngoài có tác động tích cực đến hoạt
động của tổ chức?
- [ ] Các nguy cơ
- [ ] Các điểm mạnh
- [ ] Các điểm yếu
- [c] Các cơ hội

# Hoạch định do các nhà quản trị cấp cao đưa ra
- [ ] Hoạch định tác nghiệp
- [ ] Hoạch định kế hoạch, hoạch định chiến lược
- [x] Hoạch định chiến lược
- [ ] Hoạch định chiến lược, hoạch định tác nghiệp

# Kế hoạch chiến lược có
- [ ] Mục tiêu cụ thể, rõ ràng
- [ ] Kết quả có thể điều chỉnh
- [x] Môi trường biến đổi
- [ ] Rủi ro hạn chế

# Lạm phát năm nay tăng hơn so với năm ngoái khiến người tiêu dùng thắt chặt chi tiêu, ảnh hưởng đến hoạt động của doanh nghiệp, đó là ảnh hưởng của yếu tố
- [x] Kinh tế
- [ ] Xã hội
- [ ] Khách hàng
- [ ] Dân số

# Bước đầu tiên của quá trình hoạch định chiến lược là:
- [ ] Phân tích môi trường bên ngoài
- [x] Xác định sứ mạng, mục tiêu và các chiến lược hiện tại của doanh nghiệp
- [ ] Phân tích những gì đối thủ cạnh tranh đang làm
- [ ] Hình thành các chiến lược

# Đối với công ty điện tử Sam Sung, các siêu thị điện máy, các cửa hàng giới thiệu sản phẩm điện máy, các đại lý bán hàng của Sam Sung là các ví dụ minh họa cho yếu tố nào dưới đây
- [ ] Các đối thủ cạnh tranh
- [ ] Các khách hàng tiềm ẩn
- [ ] Các nhà cung cấp
- [x] Các nhà phân phối

# Yếu tố nào là các đảm bảo vật chất cho việc thực hiện kế hoạch, đồng thời nó cũng là công cụ giúp cho nhà quản lý có thể kiểm tra được tiến độ thực hiện kế hoạch thông qua việc kiểm tra các nguồn thu và chi?
- [ ] Chương trình
- [ ] Chính sách
- [ ] Quy tắc
- [x] Ngân quỹ

# Việc tìm kiếm cơ hội phát triển trong các thị trường mà doanh nghiệp đang hoạt động với những hàng hoá hay dịch vụ hiện có là
- [ ] Chiến lược phát triển sản phẩm
- [ ] Chiến lược đa dạng hoá trong kinh doanh
- [ ] Chiến lược mở rộng thị trường
- [x] Chiến lược thâm nhập thị trường

# Kế hoạch chiến lược của doanh nghiệp thường do người quản lý cấp nào lập ra
- [x] Cấp cao
- [ ] Cấp cơ sơ
- [ ] Tất cả các phương án trên không đúng
- [ ] Cấp trung

# Không có đặc điểm nào dưới đây khi thiết lập một mục tiêu
- [ ] Thách thức và mang tính khả thi
- [ ] Phải trình bày bằng văn bản
- [x] Mang tính dài hạn
- [ ] Được phổ biến cho mọi đối tượng có liên quan

# Chiến lược khác biệt hóa đòi hỏi
- [x] Sản phẩm được thiết kế đặc biệt
- [ ] Sản phẩm được thiết kế để sản xuất hàng loạt
- [ ] Đẩy mạnh kênh phân phối
- [ ] Đẩy mạnh chiến lược Marketing

# Việc lựa chọn chiến lược để đạt được mục tiêu của tổ chức là một phần của
- [ ] Chức năng tổ chức
- [x] Chức năng hoạch định
- [ ] Chức năng lãnh đạo
- [ ] Chức năng kiểm soát

# Phương án nào dưới đây là căn cứ lập kế hoạch
- [ ] Tổng số nhân công
- [ ] Xu hướng thị trường
- [ ] Hệ thống phân phối của doanh nghiệp
- [x] Tất cả các phương án trên đều đúng

# Các kế hoạch được áp dụng cho từng bộ phận trong tổ chức, chỉ ra cách thức đạt được mục tiêu và liên quan tới công việc hàng ngày của tổ chức, được gọi là kế hoạch gì?
- [ ] Kế hoạch định hướng
- [ ] Kế hoạch dài hạn
- [x] Kế hoạch tác nghiệp
- [ ] Kế hoạch chiến lược

# Việc tìm kiếm những thị trường mới cho những sản phẩm hiện có là
- [x] Chiến lược mở rộng thị trường
- [ ] Chiến lược thâm nhập thị trường
- [ ] Chiến lược đa dạng hoá trong kinh doanh
- [ ] Chiến lược phát triển sản phẩm

# Yếu tố nào không nằm trong môi trường nội bộ của doanh nghiệp
- [x] Khách hàng
- [ ] Nhân sự
- [ ] Chiến lược
- [ ] Sứ mệnh

# Môi trường hoạt động của tổ chức là:
- [ ] Môi trường nội bộ
- [ ] Môi trường ngành
- [x] Môi trường vĩ mô, môi trường vi mô, môi trường nội bộ
- [ ] Môi trường vĩ mô

# Tồn trữ vật tư để dự phòng biến động giá cả; Bảo trì phòng ngừa những chi tiết vật tư đã đến kỳ bảo dưỡng, thay thế; Tuyển và huấn luyện nhân viên mới vào những mùa vụ hay có biến động nhân sự là các ví dụ minh họa cho giải pháp quản trị biến động môi trường nào dưới đây

- [ ] Hợp đồng
- [x] Dùng đệm (phòng ngừa)
- [ ] Kết nạp
- [ ] Cấp hạn chế

# Trong quản lý kế hoạch chiến lược, yếu tố nào xác định mục đích của tổ chức và trả lời câu hỏi: “lý do tồn tại, hoạt động của tổ chức là gì”
- [x] Sứ mệnh.
- [ ] Chiến lược.
- [ ] Mục tiêu.
- [ ] Đánh giá.

# Viết một kế hoạch chiến lược của tổ chức là một ví dụ minh hoạ của chức năng quản
trị nào?
- [ ] Lãnh đạo
- [x] Lập kế hoạch
- [ ] Kiểm tra
- [ ] Điều phối

# Môi trường văn hoá xã hội là môi trường
- [ ] Môi trường có đặc tính bất biến
- [x] Môi trường tiềm ẩn đặc tính ổn định và sự thay đổi
- [ ] Môi trường có đặc tính thay đổi
- [ ] Môi trường có đặc tính ổn định

# Phát biểu này là một phần của quá trình hoạch định trong tổ chức, thể hiện ý nghĩa về sự tồn tại của doanh nghiệp
- [ ] Phân quyền trong tổ chức
- [x] Phát biểu sứ mệnh
- [ ] Hoạch định mục tiêu
- [ ] Sắp xếp lại nguồn nhân lực

# Nói một cách điển hình, yếu tố nào sau đây thuộc môi trường ngành của tổ chức?
- [ ] Các yếu tố công nghệ
- [ ] Các điều kiện chính trị
- [ ] Các yếu tố kinh tế
- [x] Đối thủ cạnh tranh

# Theo ma trận BCG, một SBU có các sản phẩm trong một ngành hấp dẫn nhưng lại có thị phần thấp thì được gọi là
- [ ] Con chó
- [ ] Ngôi sao
- [ ] Con bò sữa
- [x] Dấu chấm hỏi

# Xây dựng ngân quỹ là khi người quản lý
- [x] Xác định số tiền cần huy động để thực hiện dự án
- [ ] Xây dựng phương án phụ trợ
- [ ] Xác định mục tiêu của kế hoạch
- [ ] Tất cả các phương án trên sai

# Loại kế hoạch nào có xu hướng diễn ra trong một khoảng thời gian ngắn như
tháng, tuần và ngày?
- [ ] Dài hạn
- [ ] Chiến lược
- [x] Chiến thuật
- [ ] Định hướng
`,Mh=`


# Xu hướng quyền lực ….....có ý nghĩa hơn trong quá trình quản lý doanh nghiệp.
- [ ] Bá quyền
- [x] Phân quyền
- [ ] Lạm quyền
- [ ] Tập quyền

# Tầm hạn quản trị là chỉ số lượng nhân viên cấp dưới mà nhà quản trị có khả năng điều hành hữu hiệu nhất. Mỗi tầm hạn có thể được lựa chọn là rộng hoặc hẹp. Nó sẽ được hiểu đúng nhất là
- [ ] Tầm hạn quản trị hẹp thích hợp khi các nhân viên thực hiện nhiệm vụ đơn giản và lặp lại
- [ ] Tầm hạn quản trị hẹp có xu hướng tạo một cấu trúc tổ chức phẳng
- [x] Tầm hạn quản trị rộng thì thích hợp khi các nhân viên của nhà quản trị thực hiện các nhiệm vụ tương tự nhau
- [ ] Tầm hạn quản trị rộng có xu hướng tạo một cấu trúc tổ chức có nhiều thang bậc

# Ủy quyền đảm bảo nguyên tắc về tính tuyệt đối trong trách nhiệm:
- [ ] Cấp trên chịu trách nhiệm và ra quyết định hết
- [x] Cấp dưới dám ra quyết định và chịu trách nhiệm chứ không đùn đẩy lại nhiệm vụ cho cấp trên
- [ ] Cấp dưới tuyệt đối tuân thủ và không ra quyết định
- [ ] Cấp dưới chịu trách nhiệm hoàn toàn, cấp trên không liên quan

# Trong quy trình thiết kế cơ cấu tổ chức, bước nào thực hiện trước bước xác định các hoạt động cần thiết.
- [x] Xây dựng mục tiêu chiến lược
- [ ] Thiết kế hệ thống thông tin quản lý
- [ ] Xác định mối quan hệ giữa các bộ phận
- [ ] Xác định các hoạt động cần thiết

# Ủy quyền có vai trò:
- [ ] Phát huy tiềm năng của cán bộ quản lý cấp dưới
- [ ] Giảm bớt gánh nặng cho người quản lý cấp cao
- [ ] Làm cho việc ra quyết định quản lý nhanh hơn
- [x] Tất cả các phương án trên

# ………….. là quyền tự chủ trong quá trình ra quyết định và quyền đòi hỏi sự tuân thủ quyết định gắn liền với một vị trí quản lý nhất định
- [ ] Trách nhiệm
- [ ] Trách nhiệm hoạt động
- [ ] Thứ bậc
- [x] Quyền hạn

# Những người có quyền hành và trách nhiệm phải báo cáo và giải trình các kết quả công việc cho những người bên trên họ trong chuỗi mệnh lệnh. Điều này được gọi là ………..
- [ ] Quyền tham mưu
- [ ] Ủy quyền
- [ ] Tuyến quyền hành
- [x] Trách nhiệm giải trình

<!-- 
# Công ty phần mềm kế toán MISA mở thêm 01 chi nhánh tại thành phố HCM được gọi là chiến lược gì?
- [ ] Đa dạng hóa tập trung
- [ ] Hội nhập hàng ngang
- [ ] Đa dạng hóa tổ hợp
- [x] Tăng trưởng tập trung 
-->

# ….. được áp dụng phổ biến trong các doanh nghiệp Việt Nam hiện nay:
- [ ] Cơ cấu kiểu ma trận
- [ ] Cơ cấu kiểu trực tuyến
- [ ] Cơ cấu kiểu trực tuyến tham mưu
- [x] Cơ cấu kiểu trực tuyến - chức năng

# Một tổ chức với đặc điểm là phạm vi hoạt động toàn cầu hay quốc tế thì cơ cấu tổ chức hợp lý là
- [ ] Cơ cấu tổ chức theo sản phẩm
- [ ] Cơ cấu trực tuyến
- [x] Cơ cấu tổ chức theo khu vực địa lý
- [ ] Cơ cấu chức năng

# ………….. là công cụ của nhà quản lý, gắn liền với một vị trí quản lý nhất định
- [ ] Trách nhiệm
- [ ] Đạo đức xã hội
- [x] Quyền hạn
- [ ] Quyền lực


# ………..là giao phó quyền hạn và trách nhiệm cho người khác để họ thay quyền thực hiện những công việc nhất định
- [ ] Tập quyền
- [ ] Dân chủ
- [ ] Phân quyền
- [x] Ủy quyền

# …………quy định mỗi nhân viên được bố trí để chỉ có một người giám sát.
- [ ] Phân công lao động
- [ ] Tầm hạn quản trị
- [ ] Chuyên môn hóa công việc
- [x] Tính duy nhất/thống nhất mệnh lệnh


# Trong cùng một điều kiện, tầm mức quản lý càng rộng, mô hình tổ chức càng
- [ ] Dân chủ
- [x] Hiệu quả
- [ ] Có kết quả
- [ ] Quan liêu

# Phát biểu nào sau đây không đúng trong một tổ chức:
- [x] Nhà quản trị cấp giữa cần có kỹ năng nhân sự cao hơn các nhà quản trị cấp cao và cấp cơ sở vì họ phải vừa tiếp xúc với cấp trên, vừa tiếp xúc với cấp dưới
- [ ] Cấp bậc quản trị càng cao thì kỹ năng kỹ thuật càng giảm dần tính quan trọng, tức nhà quản trị cấp cao thì không đòi hỏi phải có kỹ năng về các chuyên môn nghiệp vụ cao hơn nhà quản trị cấp giữa và cơ sở.
- [ ] Các nhà quản trị cấp cơ sở cần thiết phải có kỹ năng kỹ thuật, chuyên môn cao hơn các nhà quản trị cấp cao và cấp giữa vì họ phải gắn liền với những công việc mang tính chuyên môn nghiệp vụ
- [ ] Cấp bậc quản trị càng cao thì kỹ năng tư duy càng cần phải cao, tức nhà quản trị cấp cao nhất thiết phải có kỹ năng tư duy, sáng tạo, nhận định, đánh giá cao hơn nhà quản trị cấp giữa và cơ sở

# Trong việc xác định nhu cầu nhân sự của doanh nghiệp mình
- [ ] Nhà quản trị nhân sự là người duy nhất phải xác định nhu cầu nhân sự của doanh nghiệp mình
- [ ] Nhà quản trị luôn chủ động
- [ ] Nhà quản trị có thể bị động
- [x] Nhà quản trị luôn chủ động, đôi khi bị động

# Cấp dưới chỉ có một cấp trên duy nhất là nội dung của nguyên tắc quản lý nào
dưới đây:
- [ ] Tầm hạn quản trị
- [x] Thống nhất chỉ huy
- [ ] Quyền hạn theo cấp bậc

# Phát biểu sau đây về mô hình tổ chức là sai
- [ ] Một công ty có Tổng Giám đốc Cty và các Giám đốc phụ trách riêng từng loại sản phẩm của công ty, ta gọi đó là tổ chức theo sản phẩm
- [ ] Một công ty được sắp xếp gồm 4 phòng Tài vụ, Hành chính-nhân sự, Kế hoạch-kinh doanh; Kỹ thuật, ta gọi đó là tổ chức theo chức năng.
- [ ] Một công ty có các mạng lưới đại lý ở các tỉnh, thành phố khắp nước thì ta gọi đó là tổ chức theo địa bàn hoạt động
- [x] Một công ty có Tổng Giám đốc công ty và 03 Giám đốc phụ trách: bán hàng cho các đại lý, xuất khẩu hàng ra các nước, và bán hàng cho tiêu dùng lẻ trong nước, thì ta gọi đó là tổ chức theo khách hàng

# Các trách nhiệm thuộc về bán hàng được chia thành các khu vực Tây Nam, miền Nam, miền Bắc và miền Tây có thể là ví dụ minh họa cho hình thức phân chia bộ phận …………..
- [ ] Theo quá trình
- [x] Theo địa lý
- [ ] Theo sản phẩm
- [ ] Theo khách hàng

# …..trong đó bộ máy quản lý được xây dựng sao cho các tuyến quyền lực trong doanh nghiệp là các đường thẳng; mỗi cấp dưới chỉ chịu sự quản lý trực tiếp và nhận mệnh lệnh từ một cấp trên
- [ ] Cơ cấu tổ chức theo kiểu dự án
- [ ] Cơ cấu tổ chức theo kiểu ma trận
- [x] Cơ cấu tổ chức theo kiểu trực tuyến
- [ ] Cơ cấu tổ chức theo kiểu chức năng

# Trong ba kỹ năng quản lý căn bản, kỹ năng tư duy chiếm 40% đối với quản trị viên cấp cao vì liên quan đến:
- [ ] Xây dựng bầu không khí hợp tác giữa các nhân viên thuộc cấp
- [ ] Khả năng phối hợp với các đơn vị khác khi thực hiện kế hoạch định kỳ
- [x] Nắm bắt sự thay đổi lớn của môi trường và đề ra các ứng phó hiệu quả
- [ ] Tính chuyên môn được đào tạo và gắn liền với tiến trình sản xuất

# Công việc nào dưới đây không nằm trong các bước của quá trình ủy quyền?
- [ ] Xác định kết quả mong muốn
- [ ] Giao quyền hạn và các điều kiện cần thiết để thực hiện các nhiệm vụ đó.
- [ ] Chọn người và giao nhiệm vụ
- [x] Dự toán chi phí

# Xác lập cơ cấu tổ chức phải căn cứ vào
- [ ] Quy mô của doanh nghiệp
- [ ] Chiến lược của doanh nghiệp
- [ ] Năng lực nhà quản trị
- [x] Quy mô doanh nghiệp, chiến lược, nguồn nhân lực và các nguồn
lực khác

# Nội dung nào sau đây không phải là một trong 4 nội dung cơ bản của quy trình
thiết kế tổ chức
- [ ] Chuỗi mệnh lệnh
- [ ] Hình thành bộ phận
- [ ] Chuyên môn hóa công việc
- [x] Thiết kế bộ máy hành chính

# Phân loại theo mức độ hoạt động, người ta chia ra thành
- [ ] Hoạch định tài chính, hoạch định nhân sự, hoạch định vật tư, hoạc
h định sản xuất, hoạch định tiêu thụ
- [ ] Hoạch định vi mô và hoạch định vĩ mô
- [ ] Hoạch định toàn diện và hoạch định từng phần
- [x] Hoạch định chiến lược và hoạc định tác nghiệp

# Doanh nghiệp nên lựa chọn cơ cấu nào sau đây:
- [x] Tùy theo quy mô, ngành nghề, cơ cấu mỗi doanh nghiệp
- [ ] Cơ cấu ma trận
- [ ] Cơ cấu kiểu chức năng
- [ ] Cơ cấu kiểu trực tuyến

# Chức năng ….là việc triển khai nguồn lực để đạt được mục tiêu của tổ chức:
- [ ] Lập kế hoạch
- [x] Tổ chức
- [ ] Lãnh đạo
- [ ] Kiểm tra

# Công ty và các doanh nghiệp nên nên lựa chọn cơ cấu tổ chức như thế nào
- [ ] Cơ cấu tổ chức trực tuyến tham mưu
- [ ] Cơ cấu tổ chức theo chức năng
- [x] Cơ cấu tổ chức phù hợp với thực tế của doanh nghiệp
- [ ] Cơ cấu tổ chức theo trực tuyến

# ….là hình thức sử dụng quyền lực mà người quản lý muốn phát huy tối đa sự nhiệt tình, chủ động sáng tạo của cấp dưới trong doanh nghiệp.
- [x] Phân quyền
- [ ] Tập quyền
- [ ] Bá quyền
- [ ] Lạm quyền

# Tập quyền là:
- [x] Quyền lực tập trung
- [ ] Quyền lực tập đoàn
- [ ] Quyền lực tập sự
- [ ] Quyền lực tập thể

# Ủy quyền theo nguyên tắc bậc thang có nghĩa là:
- [x] Ủy quyền càng xuống cấp quản lý dưới thì càng chi tiết
- [ ] Ủy quyền càng xuống cấp quản lý dưới thì càng nhanh
- [ ] Ủy quyền càng xuống cấp quản lý thấp thì càng đơn giản
- [ ] Ủy quyền càng xuống cấp quản lý dưới thì càng thuận tiện

# Xu thế quản lý trên thế giới hiện nay là:
- [ ] Tăng tầm hạn quản trị, tăng số cấp quản trị
- [ ] Giảm tầm hạn quản trị, tăng số cấp quản trị
- [x] Tăng tầm hạn quản trị, giảm số cấp quản trị
- [ ] Giảm tầm hạn quản trị, giảm số cấp quản trị

# Các nguyên tắc cơ bản của phối hợp các bộ phận trong tổ chức
- [x] Nguyên tắc mỗi nhân viên chỉ có 1 người ra mệnh lệnh, nguyên tắc định hướng, nguyên tắc tầm mức quản trị
- [ ] Nguyên tắc mỗi nhân viên có nhiều người ra mệnh lệnh, nguyên tắc định hướng
- [ ] Nguyên tắc định hướng, nguyên tắc tầm mức quản trị, nguyên tắc tuân thủ
- [ ] Nguyên tắc tuân thủ, nguyên tắc mệnh lệnh

# Phát biểu nào sau đây không đúng
- [ ] Cơ cấu tổ chức trực tuyến chức năng là cơ cấu tổ chức trong đó hình thành các bộ phận chuyên môn hóa được gọi là các phòng ban chức năng
- [x] Cơ cấu tổ chức chức năng là cơ cấu tổ chức tối ưu nhất đối với mọi loại hình tổ chức hiện nay
- [ ] Cơ cấu tổ chức trực tuyến chức năng phát huy được sức mạnh và khả năng của đội ngũ cán bộ theo từng chức năng.
- [ ] Cơ cấu tổ chức trực tuyến chức năng có đặc điểm quyền lực đi theo đường thẳng từ trên xuống


# Mục đích của công tác tổ chức là:
- [x] Không có phương án nào đúng
- [ ] Phân chia tiền lương công bằng cho người lao động
- [ ] Bổ nhiệm các vị trí quản lý cho tổ chức
- [ ] Duy trì sự ổn định của tổ chức

# Tầm hạn quản trị là:
- [ ] Số đơn vị chịu sự kiểm soát của nhà quản trị
- [x] Số nhân viên cấp dưới mà nhà quản trị quản lý trực tiếp có hiệu quả.
- [ ] Các địa phương chịu sự kiểm soát của nhà quản trị
- [ ] Bán kính vùng chịu sự kiểm soát của nhà quản trị


# …………… là quá trình xây dựng cơ cấu của tổ chức
- [x] Tổ chức cơ cấu
- [ ] Quản lý nhân lực
- [ ] Lãnh đạo
- [ ] Hình thành bộ phận

# ….là kỹ năng giao tiếp hữu hiệu với nhân viên thuộc cấp nhằm tạo ra sự đồng thuận khi thực hiện mục tiêu đã đề ra thuộc về.
- [x] Kỹ năng quan hệ
- [ ] Kỹ năng hùng biện
- [ ] Kỹ năng kỹ thuật chuyên môn
- [ ] Kỹ năng tư duy
The correct answer is: Kỹ năng quan hệ

# Quyền chính thức và hợp pháp của người ra quyết định là …………
- [ ] Lãnh đạo
- [ ] Trách nhiệm
- [ ] Ủy quyền
- [x] Quyền hành

# ……………. là một hệ thống chính thức về các mối quan hệ vừa độc lập vừa phụ thuộc thể hiện rõ những việc do ai làm.
- [ ] Tầm hạn quản trị
- [ ] Cơ cấu tổ chức
- [ ] Phân công lao động
- [ ] Hệ thống công việc

# Sau khi tốt nghiệp đại học, An đã đi làm được 3 năm với vị trí là kĩ sư chế tạo tại một Nhà máy sản xuất thép. An vừa được được Ban giám đốc bổ nhiệm vị trí trưởng bộ phận chế tạo. Theo anh/chị, đối với An, kĩ năng quản trị nào là quan trọng nhất:
- [ ] Kỹ năng thuyết trình
- [x] Kỹ năng kĩ thuật
- [ ] Kỹ năng quan hệ
- [ ] Kỹ năng tư duy

# Công tác tổ chức có vai trò quan trọng vì nó liên quan đến việc:
- [ ] Xác lập mục tiêu của tổ chức
- [ ] Kiểm tra, giám sát việc thực hiện các kế hoạch của tổ chức
- [x] Triển khai thực hiện tất cả các kế hoạch của tổ chức
- [ ] Điều khiển, dẫn dắt nhân viên hoàn thành mục tiêu của tổ chức

# Một cơ cấu tổ chức có thể cung cấp thông tin:
- [ ] Các bộ phận
- [ ] Nhiệm vụ
- [x] Tất cả các thông tin trên
- [ ] Các cấp quản lý

# Phân quyền là:
- [x] Phân chia quyền lực
- [ ] Cả 2 phương án trên đều sai
- [ ] Phân tích quyền lực
- [ ] Cả 2 phương án trên đều đúng

# Phát biểu nào sau đây là chính xác khi nói về các kỹ năng trong một tổ chức:
- [x] Ông Trưởng Phòng Hành chính cần nhận ra những điểm chưa chuẩn xác trong lối soạn thảo văn bản của nhân viên soạn thảo văn thư
- [ ] Ông Giám đốc bệnh viện cần phải giỏi về chuyên môn hơn ông bác sĩ trưởng khoa thần kinh thì mới chỉ huy được khoa này
- [ ] Ông giám đốc tài chính không cần biết về nghiệp vụ kế toán vì đã có nhân viên dưới quyền lo về việc sổ sách kế toán
- [ ] Ông Trưởng Phòng kinh doanh cần có kỹ năng giao tế nhân sự tốt hơn ông Trưởng phòng Kỹ thuật vì phải tiếp xúc với khách hàng mỗi ngày


# …........thường được áp dụng đối với các doanh nghiệp có tính đặc thù cao, có nhiều loại sản phẩm giống nhau, mỗi sản phẩm có giá trị lớn và thực hiện ở những địa điểm khác nhau:
- [ ] Cơ cấu trực tuyến tham mưu
- [ ] Cơ cấu trực tuyến - chức năng
- [ ] Cơ cấu kiểu ma trận
- [x] Cơ cấu kiểu dự án

# Tầm mức quản trị rộng hay hẹp phụ thuộc
- [x] Trình độ nhà quản trị
- [ ] Cơ cấu tổ chức
- [ ] Quy mô và cơ cấu tổ chức
- [ ] Quy mô doanh nghiệp

# ….... thể hiện trình độ quản lý cao và phù hợp với mô hình tập đoàn, tổng công ty, công ty đa quốc gia:
- [ ] Cơ cấu kiểu chức năng
- [ ] Cơ cấu kiểu dự án
- [ ] Cơ cấu kiểu trực tuyến - chức năng
- [x] Cơ cấu kiểu ma trận

# Quyền lực trong một tổ chức là…..trong hoạt động dành cho một người thông
qua việc trao cho họ quyền ra các ….hay đưa ra các mệnh lệnh chỉ thị
- [ ] Mức độ giải quyết/ biện pháp
- [ ] Mức độ độc lập/ biện pháp
- [x] Mức độ độc lập/ quyết định
- [ ] Mức độ giải quyết/ quyết định

# …………….là bộ khung chính tắc theo đó các phần việc được phân chia, tập hợp,
và điều phối.
- [ ] Rà soát môi trường
- [ ] Sứ mệnh
- [ ] Phân tích nguồn lực nội tại
- [x] Cơ cấu tổ chức

<!-- …………. là nghĩa vụ phải thực hiện các công việc được giao
- [ ] Chuỗi mệnh lệnh
- [ ] Quy chuẩn hóa
The correct answer is: Trách nhiệm
- [ ] Hệ thống báo cáo
- [ ] Hệ thống thông tin- [ ] Trung tâm điều hành
- [ ] Cơ cấu quyền lực
The correct answer is: Cơ cấu quyền lực
Kết quả của phân quyền là
- [ ] Cấp dưới chủ động hơn trong công việc
- [ ] Cấp dưới nhận thức được mệnh lệnh
- [ ] Cấp trên lạm quyền cấp dưới
- [ ] Cấp dưới thực hiện công việc như chỉ dẫn
The correct answer is: Cấp dưới chủ động hơn trong công việc
Vai trò của hoạch định không có
- [ ] Thực hiện biện pháp khắc phục sự sai lệch hướng đến việc hoàn th
ành mục tiêu đã định
- [ ] Tăng khả năng đạt được các kết quả mong muốn của tổ chức
- [ ] Giúp nhà quản trị kiểm tra tình hình thực hiện mục tiêu dễ dàng
- [ ] Giúp tổ chức có thể phát triển tinh thần tập thể
The correct answer is: [&lt;
$&gt;] Thực hiện biện pháp khắc phục sự sai lệch hướng đến việc hoàn thành m
ục tiêu đã định
Tầm mức quản lý đề cập đến khái niệm nào sau đây
- [ ] Khoảng thời gian cần thiết để truyền đạt thông tin thông qua chuỗi
mệnh lệnh của người quản lý
- [ ] Số lượng nhân viên thuộc cấp một người quản lý có thể giám sát
một cách hiệu quả và hiệu năng
- [ ] Mức độ quyền lực một người quản lý có được trong tổ chức
- [ ] Số lượng nhân viên thuộc cấp tuân thủ một mệnh lệnh quản lý
The correct answer is: Số lượng nhân viên thuộc cấp một người quản
lý có thể giám sát một cách hiệu quả và hiệu năng
…………….. là cơ sở theo đó các phần việc được tập hợp lại với nhau nhằm thực
hiện các mục tiêu của tổ chức
- [ ] Hình thành bộ phận
- [ ] Quy chuẩn hóa
- [ ] Tập trung hóa
- [ ] Điều phối
The correct answer is: Hình thành bộ phận
Văn hóa tổ chức là
- [ ] Một nhân tố quan trọng của môi trường vĩ mô
- [ ] Hệ thống do ban giám đốc quyết định
- [ ] Nhà quản lý cấp cao tập trung / thâu tóm việc ra quyết định
- [ ] Một hệ thống các quy phạm và niềm tin được chia sẻ trong một tổ chức
The correct answer is: Một hệ thống các quy phạm và niềm tin được chia sẻ
trong một tổ chứcQuestion 37
Đặc điểm của tổ chức
- [ ] Có sự nỗ lực của tất cả các thành viên
- [ ] Có sự nỗ lực của tất cả các thành viên và có sự phân công lao
động, thứ bậc quyền lực
- [ ] Có sự phân công lao động, có hệ thống thứ bậc quyền lực
- [ ] Hoạt động vì mục tiêu lợi nhuận
The correct answer is: Có sự nỗ lực của tất cả các thành viên và có sự
phân công lao động, thứ bậc quyền lực
Phương án nào dưới đây không nằm trong các yêu cầu có tính nguyên tắc khi
xây dựng cơ cấu tổ chức quản lý:
- [ ] Tính lịch sử
- [ ] Tính kinh tế
- [ ] Tính tối ưu của hệ thống
- [ ] Độ tin cậy trong hoạt động
The correct answer is: Tính lịch sử
............ là việc thiết kế quá trình quản lý, nó giúp cho cơ cấu quản lý đã được
xây dựng có thể vận hành được trong thực tế thông qua việc xây dựng các nội
quy, quy chế trong hợp tác nội bộ cũng như mối liên hệ giữa các bộ phận trong
quá trình thực hiện các kế hoạch của doanh nghiệp
- [ ] Tổ chức nhân sự
- [ ] Tổ chức cơ cấu
- [ ] Không có phương án nào đúng
- [ ] Tổ chức quá trình quản lý
The correct answer is: Tổ chức quá trình quản lý
Nhóm bộ phận chế tạo máy tập thể thao vào một khu vực, may quần áo nam
giới vào một bộ phận, và sản xuất mỹ phẩm vào một bộ phận khác là ví dụ minh
họa cho hình thức hình thành bộ phận nào
- [ ] Theo khách hàng.
- [ ] Theo địa lý.
- [ ] Theo sản phẩm.
- [ ] Theo quá trình.
The correct answer is: Theo sản phẩm.
Khi chúng ta phân loại các kế hoạch thành kế hoạch chiến lược và kế hoạch
hành động, chúng ta đang mô tả chúng theo đặc điểm nào
- [ ] Mức độ cụ thể
- [ ] Khung thời gian
- [ ] Bề rộng
- [ ] Tần suất sử dụng
The correct answer is: Bề rộng
Question textPhát biểu nào sau đây không đúng trong một tổ chức:
- [ ] Các nhà quản trị cấp trung cần có kỹ năng quan hệ cao hơn các nhà quản trị
cấp cao và cấp cơ sở
- [ ] Cấp bậc quản trị càng cao thì kỹ năng kỹ thuật càng giảm dần tính quan
trọng
- [ ] Cấp bậc quản trị càng cao thì kỹ năng tư duy càng cần phải cao
- [ ] Các nhà quản trị cấp cơ sở cần thiết phải có kỹ năng kỹ thuật, chuyên môn
cao hơn các nhà quản trị cấp cao và cấp trung
The correct answer is: Các nhà quản trị cấp trung cần có kỹ năng quan hệ cao
hơn các nhà quản trị cấp cao và cấp cơ sở
Với cùng số lượng nhân viên thì:
- [ ] Không câu nào đúng
- [ ] Khi tầm hạn quản trị giảm, số cấp quản trị tăng
- [ ] Khi tầm hạn quản trị tăng, công việc sẽ tăng
- [ ] Khi tầm hạn quản trị giảm, số cấp quản trị giảm
The correct answer is: Khi tầm hạn quản trị giảm, số cấp quản trị tăng
Chức danh Đội trưởng trong một Công ty xây dựng là quản trị viên cấp nào?
- [ ] Quản trị viên cấp cao
- [ ] Quản trị viên cấp trung
- [ ] Chưa xác định được
- [ ] Quản trị viên cấp cơ sở
The correct answer is: Quản trị viên cấp cơ sở
Cơ cấu tổ chức theo kiểu ma trận
- [ ] Áp dụng cho doanh nghiệp quy mô vừa
- [ ] Áp dụng cho các công ty vừa và lớn
- [ ] Áp dụng cho các tập đoàn lớn, các công ty đa quốc gia
- [ ] Áp dụng cho các doanh nghiệp có quy mô nhỏ, các hợp tác xã
$&gt;] Áp dụng cho các tập đoàn lớn, các công ty đa quốc giaQuestion 6
- [ ] Tập trung hóa
- [ ] Điều phối
- [ ] Quy chuẩn hóa
Nhà quản trị thường không ủy quyền cho cấp dưới trong trường hợp
- [ ] Cấp dưới có năng lực và kinh nghiệm
- [ ] Các quyết định ít quan trọng
- [ ] Doanh nghiệp đang khủng hoảng
- [ ] Môi trường biến động
The correct answer is: Doanh nghiệp đang khủng hoảng
…………….là việc thiết kế quá trình quản lý bao gồm việc xác định mối quan hệ
quyền hạn, trách nhiệm giữa các bộ phận và xây dựng nội quy, quy chế hợp tác
nội bộ và giữa các bộ phận.
- [ ] Tổ chức quá trình quản lý
- [ ] Tổ chức nhân sự
- [ ] Tổ chức thực hiện
The correct answer is: Tổ chức quá trình quản lý
…..là hình thức sử dụng quyền lực mà người quản lý cấp cao muốn doanh
nghiệp đi theo một đường lối thống nhất nào đó, tránh các suy nghĩ và quyết
định phân tán, cục bộ trong doanh nghiệp.
- [ ] Trao quyền- [ ] Tập quyền
- [ ] Ủy quyền
The correct answer is: Tập quyền
Công ty C & D có phản ứng chậm với những thay đổi bên ngoài, ra quyết định
tập trung và sự phối hợp kém. Nó có khả năng được tổ chức theo cơ cấu:
- [ ] Trên cơ sở tiếp cận theo đội
- [ ] Theo tuyến chức năng
- [ ] Trên cơ sở tiếp cận theo mạng lưới ảo
- [ ] Theo tuyến bộ phận
The correct answer is: Theo tuyến chức năng
- [ ] Ủy quyền càng xuống cấp quản lý thấp thì càng đơn giản
- [ ] Ủy quyền càng xuống cấp quản lý dưới thì càng chi tiết
- [ ] Ủy quyền càng xuống cấp quản lý dưới thì càng nhanh
Có phải kiểu cơ cấu tổ chức hỗn hợp (Trực tuyến – Chức năng) là hợp lý nhất cho
mọi tổ chức
- [ ] Hợp lý với các doanh nghiệp dịch vụ
- [ ] Sai
- [ ] Đúng
- [ ] Sai, vì có thể hợp với tổ chức này, và không phù hợp với tổ chức
khác
The correct answer is: Sai, vì có thể hợp với tổ chức này, và không
phù hợp với tổ chức khác
…..... xuất phát từ trong quân đội và ít được áp dụng trong quản lý kinh tế:
- [ ] Cơ cấu kiểu trực tuyến - chức năng
- [ ] Cơ cấu kiểu chức năng
- [ ] Cơ cấu kiểu trực tuyến - tham mưu
The correct answer is: Cơ cấu kiểu trực tuyến - tham mưu
- [ ] Chọn người và giao nhiệm vụ
- [ ] Dự toán chi phí
- [ ] Giao quyền hạn và các điều kiện cần thiết để thực hiện các nhiệm
- [ ] Xác định kết quả mong muốn
The correct answer is: Dự toán chi phí
- [ ] Cơ cấu trực tuyến chức năng và cơ cấu ma trận
- [ ] Cơ cấu trực tuyến chức năng và cơ cấu sản phẩm
- [ ] Cơ cấu trực tuyến chức năng và cơ cấu địa lý
Khi xem xét cơ cấu quyền lực trong quản lý doanh nghiệp, người ta nhận thấy
quá trình quản lý doanh nghiệp tồn tại ………xu hướng.
- [ ] 5
- [ ] 3
- [ ] 4
- [ ] 2
The correct answer is: 2
Thông tin nào không được cung cấp trong một cơ cấu tổ chức:
- [ ] Các tuyến quyền hạn
- [ ] Nhiệm vụ
- [ ] Tiền lương, chế độ đãi ngộ
The correct answer is: Tiền lương, chế độ đãi ngộ
- [ ] Kỹ năng kĩ thuật
- [ ] Kỹ năng thuyết trình
- [ ] Kỹ năng tư duy- [ ] Kỹ năng quan hệ
Cơ cấu có ưu điểm là chất lượng các loại quyết định có thể tăng lên do có sự
chuyên môn hóa trong quản lý:
- [ ] Cơ cấu kiểu trực tiếp
The correct answer is: Cơ cấu kiểu chức năng
Tầm mức quản trị là khái niệm
- [ ] Giới hạn quyền lực của nhà quản trị- [ ] Dùng để chỉ số lượng nhà quản trị trong một tổ chức
- [ ] Dùng để chỉ số cấp quản trị trong tổ chức
- [ ] Số lượng nhân viên báo cáo trực tiếp với nhà quản trị
The correct answer is: Số lượng nhân viên
báo cáo trực tiếp với nhà quản trị
- [ ] Tính kinh tế
- [ ] Tính lịch sử
- [ ] Độ tin cậy trong hoạt động
Question text…………….là bộ khung chính tắc theo đó các phần việc được phân chia, tập hợp,
- [ ] Phân tích nguồn lực nội tại
- [ ] Rà soát môi trường
- [ ] Cơ cấu tổ chức
Kiểu hình thành bộ phận nào được áp dụng trong các tổ chức kinh doanh dịch vụ
khi các dịch vụ công cộng được phân chia thành các hoạt động cho các công ty,
trẻ em, và người tàn tật
- [ ] Sản phẩm
- [ ] Khách hàng
- [ ] Địa lý
- [ ] Quá trình
The correct answer is: Khách hàng
- [ ] Theo sản phẩm.
- [ ] Theo khách hàng.
- [ ] Theo quá trình.
- [ ] Theo địa lý.
Doanh nghiệp bán với giá thấp hơn giá sản phẩm tương đương của đối thủ cạnh
tranh thể hiện chiến lược nào dưới đây
- [ ] Chiến lược tập trung
- [ ] Chiến lược đa dạng hóa
- [ ] Chiến lược cạnh tranh
- [ ] Chiến lược tăng trưởng
The correct answer is: Chiến lược cạnh tranh
Tổ chức nhân sự bao gồm các nội dung:
- [ ] Sử dụng, đào tạo, đãi ngộ
- [ ] Tuyển chọn, đào tạo
- [ ] Tuyển chọn, sử dụng, đào tạo, đãi ngộ
- [ ] Đào tạo, đề bạt
The correct answer is: Tuyển chọn, sử dụng, đào tạo, đãi ngộ
- [ ] Lãnh đạo
- [ ] Tổ chức cơ cấu
- [ ] Hình thành bộ phận
- [ ] Quản lý nhân lực
The correct answer is: Tổ chức cơ cấu
Tổ chức là một trong những chức năng chung của quản trị, liên quan đến các
hoạt động:
- [ ] Định kỳ thay đổi vai trò của những người quản trị và những người thừa hành
- [ ] Xác lập các mối quan hệ về chức năng, nhiệm vụ, trách nhiệm và quyền hạn
giữa các bộ phận
- [ ] Sa thải nhân viên cũ và tuyển dụng nhân viên mới một cách đều đặn
- [ ] Giải tán bộ máy tổ chức và thành lập nên các bộ phận mới trong tổ chức một
cách định kỳ
The correct answer is: Xác lập các mối quan hệ về chức năng, nhiệm vụ, trách
nhiệm và quyền hạn giữa các bộ phận
..... là việc tuyển dụng, lựa chọn, bổ nhiệm, và duy trì các chức vụ bổ nhiệm
trong doanh nghiệp:
- [ ] Tổ chức nhân sự- [ ] Không có phương án nào đúng
- [ ] Tổ chức cơ cấu
The correct answer is: Tổ chức nhân sự
…...có bộ máy quản lý vẫn được thiết kế theo nguyên tắc trực tuyến, nhưng ở
mỗi cấp quản lý người ta tổ chức các bộ phận tham mưu có nhiệm vụ giúp người
quản lý đó trong quá trình chuẩn bị, ban hành, và thực hiện tất cả các quyết
định thuộc chức năng chuyên môn:
- [ ] Cơ cấu kiểu trực tuyến
- [ ] Cơ cấu kiểu trực tuyến-chức năng
The correct answer is: Cơ cấu kiểu trực tuyến tham mưu
Question text………..là giao phó quyền hạn và trách nhiệm cho người khác để họ thay quyền
- [ ] Phân quyền
- [ ] Tập quyền
Sơ đồ cơ cấu tổ chức:
- [ ] Cho thấy các đặc điểm của cấu trúc theo chiều dọc của tổ chức
- [ ] Các chi tiết về các mối quan hệ báo cáo chính thức tồn tại trong tổ chức
- [ ] Tất cả các phương án trên đều đúng
- [ ] Là một sự thể hiện trực quan cấu trúc của tổ chức
The correct answer is: Tất cả các phương án trên đều đúng
…. có ưu điểm đạt được sự thống nhất trong mệnh lệnh nhưng tập trung gánh
nặng vào quản lý cấp cao, đòi hỏi người quản lý cấp cao phải có hiểu biết sâu về
nhiều lĩnh vực chuyên môn khác nhau:
- [ ] Cơ cấu kiểu trực tiếp
The correct answer is: Cơ cấu kiểu trực tuyến
- [ ] Quy chuẩn hóa
- [ ] Trách nhiệm
- [ ] Quyền hạn theo cấp bậc
- [ ] Chuỗi mệnh lệnh
- [ ] Tầm hạn quản trị
Mức độ phân quyền càng lớn khi
- [ ] Phần lớn các quyết định được đề ra ở cấp cao
- [ ] Có nhiều cấp quản trị
- [ ] Phần lớn các quyết định được đề ra ở cấp cơ sở
- [ ] Các cấp quản trị cao hơn được đề ra nhiều loại quyết định
The correct answer is: [&lt;$&gt;]
Phần lớn các quyết định được đề ra ở cấp cơ sởQuestion 37
- [ ] Cơ cấu tổ chức trực tuyến chức năng có đặc điểm quyền lực đi
- [ ] Cơ cấu tổ chức trực tuyến chức năng là cơ cấu tổ chức trong đó
hình thành các bộ phận chuyên môn hóa được gọi là các phòng ban chức năng
- [ ] Cơ cấu tổ chức chức năng là cơ cấu tổ chức tối ưu nhất đối với mọi
- [ ] Cơ cấu tổ chức trực tuyến chức năng phát huy được sức mạnh và
Để cơ cấu tổ chức quản lý có thể hoạt động được trên thực tế thì cần tổ chức
quản lý thông qua việc xây dựng ………trong doanh nghiệp.
- [ ] Cơ cấu quyền lực
- [ ] Trung tâm điều hành- [ ] Hệ thống thông tin
- [ ] Hệ thống báo cáo
Ưu điểm tầm quản trị hẹp
- [ ] Giám sát và kiểm soát chặt chẽ
- [ ] Giảm số cấp quản trị
- [ ] Có thể tiết kiệm được chi phí quản trị
- [ ] Nhà quản trị giỏi
The correct answer is: Giám sát và kiểm soát chặt chẽ
- [ ] &lt;$&gt;] Theo địa lý- [ ] Theo trực tuyến chức năng
- [ ] Cơ cấu kiểu trực tuyến-chức năng
- [ ] Cả 2 phương án trên đều sai
- [ ] Cả 2 phương án trên đều đúng
- [ ] Phân chia quyền lực
- [ ] Cơ cấu tổ chức trực tuyến chức năng phát huy được sức mạnh và
- [ ] Cơ cấu tổ chức trực tuyến chức năng có đặc điểm quyền lực đi
theo đường thẳng từ trên xuống- [ ] Cơ cấu tổ chức trực tuyến chức năng là cơ cấu tổ chức trong đó
- [ ] Cơ cấu tổ chức chức năng là cơ cấu tổ chức tối ưu nhất đối với mọi
Chức danh Giám đốc trong một doanh nghiệp là quản trị viên cấp nào?
- [ ] Quản trị viên cấp trung
- [ ] Quản trị viên cấp cơ sở\`
- [ ] Quản trị viên cấp cao
- [ ] Chưa xác định được
The correct answer is: Quản trị viên cấp cao
Mục đích của …....là lập ra một hệ thống chính thức gồm có những vai trò và
nhiệm vụ mà mỗi con người phải thực hiện sao cho họ có thể cộng tác một cách
tốt nhất với nhau trong quá trình thực hiện các mục tiêu của doanh nghiệp
- [ ] Chức năng Lãnh đạo
- [ ] Chức năng Kiểm tra
- [ ] Chức năng Lập kế hoạch
- [ ] Chức năng Tổ chức
The correct answer is: Chức năng Tổ chức
…..trong đó bộ máy quản lý được sắp xếp theo các bộ phận chức năng. Các bộ
phận này sẽ trực tiếp ra quyết định xuống các bộ phận trực thuộc trong phạm vị
chuyên môn của mình.
- [ ] Cơ cấu tổ chức theo kiểu chức năng
- [ ] Cơ cấu tổ chức theo kiểu dự án- [ ] Cơ cấu tổ chức theo kiểu ma trận
- [ ] Cơ cấu tổ chức theo kiểu trực tuyến
The correct answer is: Cơ cấu tổ chức theo kiểu chức năng
- [ ] Có kết quả
- [ ] Hiệu quả
Question textCó phải kiểu cơ cấu tổ chức hỗn hợp (Trực tuyến – Chức năng) là hợp lý nhất cho
- [ ] Sai
- [ ] Hợp lý với các doanh nghiệp dịch vụ
Quang muốn chuyển quyền hành và trách nhiệm của mình cho cấp dưới. Quá
trình này được gọi là:
- [ ] Trách nhiệm giải trình
- [ ] Chuyên môn hóa bộ phận
- [ ] Phối hợp
The correct answer is: Ủy quyềnQuestion 10
- [ ] Cấp trên lạm quyền cấp dưới
- [ ] Cấp dưới chủ động hơn trong công việc
- [ ] Cơ cấu kiểu trực tiếp- [ ] Cơ cấu kiểu chức năng
- [ ] Cơ cấu kiểu trực tuyến
- [ ] Cơ cấu kiểu trực tuyến tham mưu
- [ ] Điều phối
Nhà quản trị ra quyết định phát triển sản phẩm mới và lựa chọn cơ cấu tổ chức
năng động trong điều kiện nào?
- [ ] Đội ngũ nhân viên có tay nghề cao
- [ ] Diễn biến môi trường rất ít biến động
- [ ] Ban lãnh đạo muốn tập trung quyền lực
- [ ] Diễn biến môi trường quá nhiều biến động
The correct answer is: Diễn biến môi trường quá nhiều biến động
- [ ] Số nhân viên cấp dưới mà nhà quản trị quản lý trực tiếp có hiệu quả.
- [ ] Số đơn vị chịu sự kiểm soát của nhà quản trị
- [ ] Bán kính vùng chịu sự kiểm soát của nhà quản trị- [ ] Các địa phương chịu sự kiểm soát của nhà quản trị
Xây dựng cơ cấu của tổ chức là
- [ ] Xác lập mối quan hệ hàng ngang giữa các đơn vị
- [ ] Hình thành cơ cấu tổ chức, xác lập mối quan hệ hàng ngang và
hàng dọc giữa các đơn vị
- [ ] Sự hình thành sơ đồ tổ chức
- [ ] Xác lập mối quan hệ hàng dọc giữa các đơn vị
The correct answer is: Hình thành cơ cấu tổ chức, xác lập mối quan
hệ hàng ngang và hàng dọc giữa các đơn vị
- [ ] Cấp bậc quản trị càng cao thì kỹ năng tư duy càng cần phải cao
- [ ] Các nhà quản trị cấp trung cần có kỹ năng quan hệ cao hơn các nhà quản trị
Các nội dung của chức năng Tổ chức bao gồm:
- [ ] Tổ chức công nghệ, tổ chức đấu thầu, tổ chức sản xuất
- [ ] Tổ chức cơ cấu, tổ chức quá trình, tổ chức nhân sự
- [ ] Tổ chức sản xuất, tổ chức lao động, tổ chức tài chính
- [ ] Tổ chức nhân sự, tổ chức cơ cấu, tổ chức tài chính
The correct answer is: Tổ chức cơ cấu, tổ chức quá trình, tổ chức nhân sự
…...là việc xây dựng cấu trúc hoặc cơ cấu bộ máy quản lý, nó bao hàm việc
người quản lý phải phân chia doanh nghiệp thành các bộ phận khác nhau và xác
định nhiệm vụ cho từng bộ phận
- [ ] Tổ chức quá trình quản lý
- [ ] Tổ chức nhân sự
- [ ] Tổ chức cơ cấu
The correct answer is: Tổ chức cơ cấu
thực hiện những công việc nhất định
Khi công ty hoạt động trong môi trường toàn cầu thì hình thức chuyên môn hóa
nào sau đây là phù hợp nhất?
- [ ] Chuyên môn hóa theo địa lý
- [ ] Chuyên môn hóa theo sản phẩm
- [ ] Chuyên môn hóa theo khách hàng
- [ ] Chuyên môn hóa theo chức năng
The correct answer is: Chuyên môn hóa theo địa lý
Mục đích của chức năng …..là xây dựng cơ cấu của một hệ thống và trên cơ sở
đó để xác định các mối quan hệ qua lại và tác động lẫn nhau giữa các bộ phận
trong hệ thống để chúng hoạt động một cách tốt nhất:
- [ ] Tổ chức
- [ ] Lập kế hoạch
- [ ] 3
- [ ] 4- [ ] 2
- [ ] 5
The correct answer is: 2
- [ ] Quyền lực
- [ ] Đạo đức xã hội
Question textPhương án nào dưới đây không nằm trong các yêu cầu có tính nguyên tắc khi
- [ ] Tính tối ưu của hệ thống
- [ ] Tính lịch sử
- [ ] Hệ thống do ban giám đốc quyết định
- [ ] Nhà quản lý cấp cao tập trung / thâu tóm việc ra quyết định
- [ ] Một hệ thống các quy phạm và niềm tin được chia sẻ trong một tổ chức
- [ ] Một nhân tố quan trọng của môi trường vĩ mô
trong một tổ chức
Correct
Dễ xảy ra tranh chấp ảnh hưởng giữa nhà quản lý cấp cao nhất và trưởng các dự
án, đơn vị kinh doanh; Đòi hỏi nhà quản lý cấp cao cần phải tạo ra ảnh hưởng
lớn là những nhược điểm của mô hình cơ cấu tổ chức nào
- [ ] Cơ cấu theo địa lý
- [ ] Cơ cấu trực tuyến chức năng
- [ ] Cơ cấu theo sản phẩm
- [ ] Cơ cấu ma trận
The correct answer is: Cơ cấu ma trận
- [ ] Cơ cấu kiểu chức năng- [ ] Cơ cấu kiểu trực tuyến
- [ ] Cơ cấu kiểu trực tuyến - tham mưu
Đây không phải là vai trò của kế hoạch đã được duyệt của một tổ chức
- [ ] Là cơ sở cho sự phối hợp giữa các đơn vị
- [ ] Thực hiện mục tiêu đã đề ra của tổ chức
- [ ] Định hướng cho các hoạt động
- [ ] Là căn cứ cho các hoạt động kiểm soát
The correct answer is: Thực hiện mục tiêu đã đề ra của tổ chức
Question text………….. là tuyến quyền hạn liên tục kéo dài từ cấp quản lý cao nhất đến cấp
quản lý thấp nhất trong tổ chức và nêu rõ ai phải bảo cáo tới ai
- [ ] Cấu trúc liên tục
- [ ] Thứ bậc yêu cầu
- [ ] Chuỗi mệnh lệnh
- [ ] Chuỗi yêu cầu
The correct answer is: Chuỗi mệnh lệnh
Trong quy trình thiết kế cơ cấu tổ chức, bước nào thực hiện trước bước xác định
- [ ] Xác định các hoạt động cần thiết
- [ ] Xây dựng mục tiêu chiến lược
- [ ] Thiết kế hệ thống thông tin quản lý
- [ ] Theo ma trận
- [ ] &lt;$&gt;] Theo địa lý
- [ ] Theo sản phẩm
Tầm hạn quản trị rộng hay hẹp tùy thuộc vào
- [ ] Trình độ của nhân viên
- [ ] Công việc
- [ ] Trình độ của nhà quản trị, trình độ của nhân viên, và công việc- [ ] Trình độ của nhà quản trị
The correct answer is: Trình độ của nhà quản trị, trình độ của nhân
viên, và công việc
- [ ] Khi tầm hạn quản trị giảm, số cấp quản trị giảm
- [ ] Không câu nào đúng
- [ ] Khi tầm hạn quản trị giảm, số cấp quản trị tăng
Question textTrong ba kỹ năng quản lý căn bản, kỹ năng tư duy chiếm 40% đối với quản trị
- [ ] Tổ chức cơ cấu

Một người quản lý trong ngành công nghệ phần mềm nên có thái độ như thế nào
khi lập kế hoạch
- [ ] Nên linh hoạt
- [ ] Nên tập trung vào các kế hoạch chiến thuật
- [ ] Nên tập trung vào các kế hoạch dài hạn
- [ ] Nên hướng sự tập chung vào các chi tiết
The correct answer is: Nên linh hoạt
Nhận xét nào sau đây đưa ra sự so sánh từ thực tế về các doanh nghiệp có lập
kế hoạch rõ ràng và những doanh nghiệp không lập kế hoạch rõ ràng
- [ ] Doanh nghiệp không lập kế hoạch rõ ràng luôn luôn đạt được kết
quả tốt hơn các doanh nghiệp có lập kế hoạch rõ ràng- [ ] Doanh nghiệp có lập kế hoạch rõ ràng luôn luôn đạt được kết quả
tốt hơn các doanh nghiệp không lập kế hoạch rõ ràng
- [ ] Doanh nghiệp lập kế hoạch rõ ràng, nói chung, sẽ đạt được kết
quả tốt hơn các doanh nghiệp không lập kế hoạch rõ ràng
- [ ] Doanh nghiệp không lập kế hoạch rõ ràng, nói chung, sẽ đạt được
kết quả tốt hơn doanh nghiệp có lập kế hoạch rõ ràng
The correct answer is: Doanh nghiệp lập kế hoạch rõ ràng, nói chung,
sẽ đạt được kết quả tốt hơn các doanh nghiệp không lập kế hoạch rõ ràng
Nhà quản trị ra quyết định mang tính tập trung và lựa chọn cơ cấu tổ chức ổn
định trong điều kiện nào?
- [ ] Diễn biến môi trường quá nhiều biến động
- [ ] Đội ngũ nhân viên có tay nghề cao
- [ ] Ban lãnh đạo muốn tập trung quyền lực
The correct answer is: Diễn biến môi trường rất ít biến động
- [ ] Năng lực nhà quản trị
- [ ] Quy mô của doanh nghiệp
- [ ] Chiến lược của doanh nghiệp
lực khác
- [ ] Cơ cấu tổ chức
- [ ] Rà soát môi trường- [ ] Sứ mệnh
- [ ] Phân tích nguồn lực nội tại
- [ ] Quyền hạn
- [ ] Đạo đức xã hội
- [ ] Dự toán chi phí
- [ ] Xác định kết quả mong muốn
- [ ] Giao quyền hạn và các điều kiện cần thiết để thực hiện các nhiệm
- [ ] Điều khiển, dẫn dắt nhân viên hoàn thành mục tiêu của tổ chức
- [ ] Triển khai thực hiện tất cả các kế hoạch của tổ chức
- [ ] Kiểm tra, giám sát việc thực hiện các kế hoạch của tổ chức
- [ ] Xác lập mục tiêu của tổ chức
Question textXu thế quản lý trên thế giới hiện nay là:
- [ ] Tăng tầm hạn quản trị, giảm số cấp quản trị
- [ ] Giảm tầm hạn quản trị, giảm số cấp quản trị
- [ ] Tăng tầm hạn quản trị, tăng số cấp quản trị
- [ ] Theo quá trình.
- [ ] Theo khách hàng.
- [ ] Theo sản phẩm.
- [ ] Chuyên môn hóa bộ phận
- [ ] Trách nhiệm giải trình
- [ ] Phối hợp
Theo ý nghĩa hành động, tổ chức được hiểu là
- [ ] Một nhóm các các nhân tập trung vào lợi nhuận mang lại cho các
cổ đông của họ
- [ ] Một địa điểm cụ thể nơi mọi thành viên làm việc
- [ ] Một tập hợp các cá nhân cùng làm việc trong một công ty
- [ ] Một sự sắp xếp có chủ đích các thành viên nhằm cùng đạt được
những mục đích cụ thể
The correct answer is: Một sự sắp xếp có chủ đích các thành viên
nhằm cùng đạt được những mục đích cụ thể
Trong các bước hoạch định chiến lược không có
- [ ] Xác định sứ mạng của tổ chức
- [ ] Phân tích cơ hội và đe dọa của thị trường
- [ ] Tìm kiếm người thực hiện chiến lược
- [ ] Kiểm tra đánh giá kết quả
The correct answer is: Tìm kiếm người thực hiện chiến lược
- [ ] Tổ chức nhân sự, tổ chức cơ cấu, tổ chức tài chính
- [ ] Tổ chức công nghệ, tổ chức đấu thầu, tổ chức sản xuất
The correct answer is: Tổ chức cơ cấu, tổ chức quá trình, tổ chức nhân sự
- [ ] Chưa xác định được
- [ ] Quản trị viên cấp trung
- [ ] Quản trị viên cấp cao
Nhược điểm lớn nhất của cơ cấu tổ chức ma trận chính là
- [ ] Sử dụng nhân lực không hiệu quả.
- [ ] Tốn kém- [ ] Một nhân viên phải chịu sự chi phối của hai người quản lý trực tiếp
cùng lúc
- [ ] Hình thức tổ chức kém linh hoạt
The correct answer is: Một nhân viên phải chịu sự chi phối của hai
người quản lý trực tiếp cùng lúc
- [ ] Cơ cấu trực tuyến chức năng, cơ cấu sản phẩm, cơ cấu ma trận và
- [ ] Cơ cấu trực tuyến chức năng và cơ cấu sản phẩm
- [ ] Cơ cấu trực tuyến chức năng và cơ cấu địa lý
- [ ] Cơ cấu trực tuyến chức năng và cơ cấu ma trận
Question textXác lập cơ cấu tổ chức phải căn cứ vào
- [ ] Quy mô doanh nghiệp, chiến lược, nguồn nhân lực và các nguồn
- [ ] Quy mô của doanh nghiệp
- [ ] Đào tạo, đề bạt
- [ ] Sử dụng, đào tạo, đãi ngộ
- [ ] Tuyển chọn, đào tạo
- [ ] Thiết kế bộ máy hành chính
- [ ] Chuỗi mệnh lệnh
The correct answer is: Trách nhiệmQuestion 17
- [ ] Chức năng Tổ chức
- [ ] Chức năng Lãnh đạo
- [ ] Chức năng Kiểm tra
- [ ] Chức năng Lập kế hoạch
- [ ] Không có phương án nào đúng- [ ] Tổ chức cơ cấu
- [ ] Số lượng nhân viên báo cáo trực tiếp với nhà quản trị
- [ ] Dùng để chỉ số cấp quản trị trong tổ chức
- [ ] Dùng để chỉ số lượng nhà quản trị trong một tổ chức
- [ ] Giới hạn quyền lực của nhà quản trị
- [ ] Áp dụng cho doanh nghiệp quy mô vừa- [ ] Áp dụng cho các doanh nghiệp có quy mô nhỏ, các hợp tác xã
- [ ] Áp dụng cho các công ty vừa và lớn
- [ ] Áp dụng cho các tập đoàn lớn, các công ty đa quốc gia
$&gt;] Áp dụng cho các tập đoàn lớn, các công ty đa quốc gia
- [ ] Thứ bậc
Đây là ưu điểm khi nhà quản trị thực hiện chức năng hoạch định
- [ ] Không điều chỉnh được chiến lược đã lựa chọn
- [ ] Giảm tính linh hoạt của doanh nghiệp
- [ ] Bị lãng phí thời gian
- [ ] Phối hợp nỗ lực của toàn bộ doanh nghiệp tốt hơn
Phối hợp nỗ lực của toàn bộ doanh nghiệp tốt hơn
- [ ] Kỹ năng tư duy
- [ ] Kỹ năng kĩ thuật
- [ ] Kỹ năng quan hệ
- [ ] Xây dựng mục tiêu chiến lược
- [ ] Xác lập mối quan hệ hàng dọc giữa các đơn vị
- [ ] Hình thành cơ cấu tổ chức, xác lập mối quan hệ hàng ngang và
- [ ] Sự hình thành sơ đồ tổ chức
The correct answer is: Hình thành cơ cấu tổ chức, xác lập mối quan
- [ ] Trung tâm điều hành
- [ ] Hệ thống thông tin
- [ ] Quyền lực tập thể
- [ ] Quyền lực tập sự- [ ] Quyền lực tập đoàn
- [ ] Quản trị viên cấp cơ sở
- [ ] Cơ cấu kiểu trực tiếp
- [ ] Cơ cấu kiểu dự án
- [ ] Cơ cấu trực tuyến tham mưu
- [ ] Cơ cấu trực tuyến - chức năng
Question text…………quy định mỗi nhân viên được bố trí để chỉ có một người giám sát.
- [ ] Chuyên môn hóa công việc
- [ ] Tính duy nhất/thống nhất mệnh lệnh
- [ ] Tầm hạn quản trị
- [ ] Phân công lao động
- [ ] Theo tuyến chức năng
- [ ] Theo tuyến bộ phận
- [ ] Trên cơ sở tiếp cận theo đội
- [ ] Theo địa lý
- [ ] Theo sản phẩm
- [ ] Theo quá trình
- [ ] Trao quyền
- [ ] Phân quyền
Các yếu tố nào dưới đây không ảnh hưởng đến chất lượng của một bản kế
hoạch?
- [ ] Trình độ của người lập kế hoạch.
- [ ] Chất lượng thông tin đầu vào.
- [ ] Phương pháp lập kế hoạch.
- [ ] Trình độ của nhân viên.
The correct answer is: Trình độ của nhân viên.
- [ ] Ủy quyền
- [ ] Tập quyền
The correct answer is: Ủy quyềnQuestion 37
- [ ] Cơ cấu kiểu trực tuyến - chức năng
- [ ] Cơ cấu kiểu dự án
The correct answer is: Cơ cấu kiểu ma trận
- [ ] Kỹ năng kỹ thuật chuyên môn
- [ ] Kỹ năng quan hệ
- [ ] Kỹ năng tư duy
- [ ] Kỹ năng hùng biện
The correct answer is: Kỹ năng quan hệ
- [ ] Các nhà quản trị cấp cơ sở cần thiết phải có kỹ năng kỹ thuật,
- [ ] Cấp bậc quản trị càng cao thì kỹ năng kỹ thuật càng giảm dần tính
chuyên môn nghiệp vụ cao hơn nhà quản trị cấp giữa và cơ sở
- [ ] Tất cả các phương án trên
- [ ] Phát huy tiềm năng của cán bộ quản lý cấp dưới
- [ ] Giảm bớt gánh nặng cho người quản lý cấp cao -->



<!-- Scenarios -->

# Hùng làm việc tại công ty A & B. Ông có hai cấp trên trực tiếp, một nhà quản trị chức năng và một nhà quản trị một đơn vị độc lập. A & B tổ chức theo một cấu trúc……….
- [x] Ma trận
- [ ] Chức năng
- [ ] Đơn vị độc lập
- [ ] Địa lý

# Gần đây, ông Hùng đang xem xét sơ đồ cấu trúc tổ chức của công ty mình để khám phá những người nào báo cáo cho người nào. Ông Hùng đang nghiên cứu điều gì về tổ chức của mình.
- [ ] Mức độ chính thức hóa
- [ ] Mức độ tập trung quyền hành
- [ ] Số lượng khác biệt hóa
- [x] Chuỗi mệnh lệnh

# Anh A không có chuyên môn về Tài chính - Kế toán nhưng được Giám đốc ủy quyền ra các quyết định liên quan đến việc quản lý công quỹ của cơ quan. Việc ủy quyền này vi phạm nguyên tắc:
- [ ] Ủy quyền theo nguyên tắc bậc thang
- [ ] Về tính tuyệt đối trong trách nhiệm
- [ ] Giao quyền theo kết quả mong muốn
- [x] Ủy quyền theo chức năng`,Ah=`

# Nhận định nào không thuộc thuyết ngẫu nhiên của Fiedler
- [ ] Sự lãnh đạo thành công tùy thuộc vào sự phù hợp giữa phong cách lãnh đạo với yêu cầu của tình huống
- [ ] Tìm một người có phong cách lãnh đạo phù hợp với tính huống
- [ ] Tác động vào tình huống để làm cho nó phù hợp với phong cách lãnh đạo
- [x] Lãnh đạo có hiệu quả bằng cách nâng cao động cơ của người dưới quyền

# Những nhận định nào không phải của thuyết Y
- [x] Siêng năng hay lười biếng không phải là bản chất
- [ ] Sự đam mê công việc thúc đẩy con người làm việc
- [ ] Tìm kiếm trách nhiệm
- [ ] Cần áp dụng phong cách lãnh đạo tham gia

# Theo lý thuyết công bằng, sự công bằng đạt được khi
- [ ] Lợi ích của nhân viên A bằng lợi ích của nhân viên B
- [x] Tỷ lệ (Lợi ích/Cống hiến) của nhân viên A bằng của nhân viên B
- [ ] Lợi ích của nhân viên A lớn hơn hoặc bằng cống hiến của chính họ
- [ ] Cống hiến của nhân viên A bằng lợi ích của nhân viên B

# Khi cần tạo mối quan hệ lâu dài thì nên chọn biện pháp:giải quyết xung đột
- [ ] Né tránh
- [x] Hợp tác
- [ ] Cạnh tranh
- [ ] Thỏa hiệp

# Giải quyết xung đột bằng biện pháp thỏa hiệp không phù hợp khi
- [ ] Thời gian là quan trọng
- [ ] Hai bên đều khăng khăng giữ mục tiêu của mình
- [x] Bảo vệ nguyện vọng chính đáng
- [ ] Vấn đề tương đối quan trọng

# …...cho rằng quản lý doanh nghiệp thực chất là việc sử dụng kinh nghiệm của mình để ứng xử với những tình huống theo cách mà họ đã ứng xử thành công với những tình huống đó ở trong quá khứ
- [x] Cách tiếp cận quản lý theo kinh nghiệm
- [ ] Cách tiếp cận quản lý theo hành vi quan hệ cá nhân
- [ ] Cách tiếp cận quản lý theo lý thuyết ra quyết định
- [ ] Cách tiếp cận quản lý theo vai trò của nhà quản lý

# Khi vấn đề không quan trọng thì nên chọn biện pháp giải quyết xung đột
- [ ] Hợp tác
- [x] Né tránh
- [ ] Nhượng bộ
- [ ] Cạnh tranh

# Khi một người lãnh đạo xây dựng những mục tiêu thách thức và mong đợi kết quả công việc rất cao từ nhân viên có thể được xem là phong cách lãnh đạo nào theo thuyết đường dẫn – mục tiêu
- [ ] Hỗ trợ
- [ ] Điều hành trực tiếp
- [ ] Tham gia
- [x] Định hướng thành tích

# Theo thuyết E.R.G của Clayton Alderfer, nhu cầu được tôn trọng thuộc về nhóm nhu cầu
- [ ] Tự thể hiện
- [ ] Phát triển
- [ ] Tồn tại
- [x] Mối quan hệ

# Phong cách lãnh đạo nào sau đây mô tả một nhà lãnh đạo có xu hướng lôi kéo các nhân viên tham gia quá trình ra quyết định, ủy quyền, khuyến khích tham gia việc quyết định phương pháp làm việc và mục tiêu, và sử dụng thông tin phản hồi như một cơ hội để huấn luyện nhân viên
- [ ] Phong cách văn hóa
- [ ] Phong cách độc đoán
- [x] Phong cách dân chủ
- [ ] Phong cách tham vấn

# Theo thuyết nhu cầu của Maslow, đảm điều kiện thuận lợi, công việc ổn định nhằm thỏa mãn
- [ ] Nhu cầu sinh lý
- [x] Nhu cầu an toàn
- [ ] Nhu cầu mức thấp
- [ ] Nhu cầu xã hội

# …… là khả năng hình dung ra những viễn cảnh, những triển vọng tương lai của doanh nghiệp, tổ chức và cách thức tiến hành để đạt tới viễn cảnh đó
- [ ] Khả năng điều hòa các giá trị
- [x] Khả năng nhìn xa trông rộng
- [ ] Khả năng tự hiểu mình
- [ ] Khả năng trực cảm

# Lý thuyết nào sau đây không phải lý thuyết về lãnh đạo của trường phái hành vi
- [x] Thuyết ngẫu nhiên của Fiedler
- [ ] Quan niệm về lãnh đạo theo thuyết X và thuyết Y
- [ ] Phân loại phong cách lãnh đạo theo mức độ quan tâm đến công việc và con người
- [ ] Sơ đồ lưới quản trị

# Theo Fiedler, 2 cách để cải thiện tính hiệu quả của lãnh đạo là thay đổi tình huống để phù hợp với người lãnh đạo hoặc
- [x] Đổi người lãnh đạo
- [ ] Đào tạo người lãnh đạo
- [ ] Đào tạo nhân viên
- [ ] Củng cố hệ thống khen thưởng

# Theo thuyết E.R.G của Clayton Alderfer, nhu cầu an toàn thuộc về nhóm nhu cầu
- [ ] Phát triển
- [ ] Mối quan hệ
- [x] Tồn tại
- [ ] Tự thể hiện

# Theo thuyết về các nhu cầu của David McClelland, mong muốn về những quan hệ qua lại gần gũi thân thiết là loại nhu cầu nào
- [x] Nhu cầu liên minh
- [ ] Nhu cầu quyền lực
- [ ] Nhu cầu thành tích
- [ ] Nhu cầu được tôn trọng

# Theo thuyết lãnh đạo tình huống của Hersey và Blanchard, với nhân viên mới thì áp dụng phong cách lãnh đạo
- [x] Điều hành trực tiếp
- [ ] Hướng dẫn
- [ ] Kèm cặp
- [ ] Ủy quyền

# Theo Fiedler, “quan tâm đến nhân viên, tạo điều kiện cho nhân viên tham gia ra quyết định” là đặc điểm của phong cách lãnh đạo định hướng
- [ ] Nhiệm vụ
- [ ] Công việc
- [x] Quan hệ
- [ ] Quyền lực

# Theo thuyết 2 nhóm nhân tố của F. Herzberg, khi hệ thống phân phối thu nhập công bằng thì ảnh hưởng tới nhân viên
- [ ] Tạo nên sự thỏa mãn, động lực trong công việc
- [x] Không bất mãn và cũng không có hưng phấn
- [ ] Tạo nên sự thỏa mãn nhưng không tạo động lực
- [ ] Bất mãn nhưng vẫn cố gắng

# Theo Vroom-Yettor – Jago, người lãnh đạo và nhân viên hợp thành một nhóm để cùng thảo luận về tình huống và ra quyết định là phong cách lãnh đạo
- [ ] Tham vấn
- [x] Dân chủ
- [ ] Độc đoán
- [ ] Ủy quyền

# Theo thuyết mong đợi của Vroom, điều gì sau đây không tạo động lực
- [ ] Thấy rõ khả năng nhận được phần thưởng
- [x] Cơ hội hoàn thành nhiệm vụ nhỏ
- [ ] Sự rõ ràng trong mối liên hệ giữa phần thưởng và hiệu quả làm việc
- [ ] Thấy rõ giá trị phần thưởng

# Theo thuyết đường dẫn – mục tiêu, một người lãnh đạo thân thiện và thể hiện sự quan tâm của mình với các nhu cầu của nhân viên, được xem là phong cách lãnh đạo nào
- [x] Hỗ trợ
- [ ] Điều hành trực tiếp
- [ ] Định hướng thành tích
- [ ] Tham gia

# Theo thuyết nhu cầu của Maslow, tạo điều kiện làm việc theo nhóm, tham gia ý kiến nhằm thỏa mãn…
- [ ] Nhu cầu mức cao
- [ ] Nhu cầu an toàn
- [ ] Nhu cầu tôn trọng
- [x] Nhu cầu xã hội

# Sơ đồ lưới quản trị phân loại phong cách lãnh đạo theo ….. mức độ đối với mỗi tiêu chí
- [ ] 5
- [ ] 4
- [x] 9
- [ ] 7

# Theo thuyết nhu cầu của Maslow, động lực làm việc của con người xuất phát từ
- [x] Nhu cầu chưa được thỏa mãn
- [ ] Nhu cầu bậc thấp
- [ ] 5 cấp bậc nhu cầu
- [ ] Nhu cầu bậc cao

# Lý thuyết về yếu tố bẩm sinh của nhà lãnh đạo cho rằng
- [ ] Những tố chất cần thiết của nhà lãnh đạo do được đào tạo
- [ ] Những tố chất cần thiết của nhà lãnh đạo do rèn luyện, rút kinh nghiệm
- [x] Những tố chất cần thiết có sẵn trong nhà lãnh đạo
- [ ] Những tố chất cần thiết của nhà lãnh đạo do họ được đặt đúng tình huống

# Phong cách lãnh đạo theo các nhà nghiên cứu tại Đại học Ohio chia theo:
- [ ] Mức độ quan tâm đến con người và tình huống
- [x] Mức độ quan tâm đến con người và công việc
- [ ] Mức độ quan tâm đến nhu cầu và tình huống
- [ ] Mức độ quan tâm đến con người và sản xuất

# Đặc điểm chính của phong cách lãnh đạo tự do là
- [ ] Ra quyết định đơn phương
- [ ] Giám sát chặt chẽ
- [ ] Giao nhiệm vụ kiểu mệnh lệnh
- [x] Cấp dưới được phép ra một số quyết định

# Theo thuyết về các nhu cầu của David McClelland, đạt tới những mục tiêu cao, và theo đuổi sự thành công là loại nhu cầu nào
- [ ] Nhu cầu quyền lực
- [ ] Nhu cầu tự hoàn thiện
- [x] Nhu cầu thành tích
- [ ] Nhu cầu liên minh

# Theo thuyết hai yếu tố của Herzberg……….. là những yếu tố thuộc bên trong công việc bao gồm sự thách thức của chính công việc, trách nhiệm cá nhânchúng quy định sự hứng thú và thoả mãn xuất phát từ một công việc
- [ ] Nhóm yếu tố kích động
- [x] Nhóm yếu tố động lực
- [ ] Nhóm yếu tố động cơ
- [ ] Nhóm yếu tố duy trì

<!--  -->

# Question 1
Theo thuyết 2 nhóm nhân tố của F. Herzberg, khi nhân viên có thành tích được người lãnh đạo công nhận thì ảnh hưởng tới nhân viên
- [ ] Không bất mãn và cũng không có hưng phấn
- [ ] Tạo nên sự thỏa mãn, động lực trong công việc
- [x] Tạo nên sự thỏa mãn, động lực trong công việc
- [ ] Tạo nên sự thỏa mãn nhưng không tạo động lực

# Question 2
Theo thuyết nhu cầu của Maslow, tôn vinh sự thành công và phổ biến thành tích nhằm thỏa mãn
- [ ] Nhu cầu tự thể hiện
- [ ] Nhu cầu xã hội
- [ ] Nhu cầu mức cao
- [x] Nhu cầu tôn trọng

# Question 3
Theo thuyết lãnh đạo tình huống của Hersey và Blanchard, khi nhân viên chưa sẵn sàng để đảm bảo hoàn thành nhiệm vụ thì áp dụng phong cách lãnh đạo
- [ ] Điều hành trực tiếp
- [ ] Ủy quyền
- [x] Kèm cặp
- [ ] Hỗ trợ

# Question 4
Khi hai bên giữ mục tiêu và cần có giải pháp tạm thời thì nên chọn biện pháp giải quyết xung đột
- [ ] Hợp tác
- [ ] Cạnh tranh
- [x] Thỏa hiệp
- [ ] Né tránh

# Question 5
Trong lưới quản trị của Blake và Mouton, cách thức lãnh đạo tốt nhất là
- [ ] 1.9
- [ ] 5.5
- [ ] 9.1
- [x] 9.9

# Question 6
Theo thuyết lãnh đạo tình huống của Hersey và Blanchard, khi nhân viên đã trưởng thành ở mức cao thì áp dụng phong cách lãnh đạo
- [ ] Hướng dẫn
- [x] Ủy quyền
- [ ] Kèm cặp
- [ ] Hỗ trợ

# Question 7
Thuyết đường dẫn tới mục tiêu của Robert House, có thể nâng cao động cơ của người dưới quyền bằng cách
- [x] Làm cho người dưới quyền nhận diện rõ ràng nhiệm vụ
- [ ] Giám sát chặt chẽ và thường xuyên
- [ ] Không quan tâm nhu cầu cấp dưới
- [ ] Giao nhiệm vụ tổng quát cho nhân viên

# Question 8
Phong cách lãnh đạo nào sau đây mô tả người lãnh đạo thực hiện rất ít hành vi chỉ đạo và hỗ trợ trong mô hình lãnh đạo của Hersey và Blanchard
- [ ] Kèm cặp
- [ ] Điều hành trực tiếp
- [x] Ủy quyền
- [ ] Tham gia

# Question 9
Theo thuyết nhu cầu của Maslow, trả lương tốt và công bằng, cung cấp ăn trưa, ăn giữa ca miễn phí, phúc lợi nhằm thỏa mãn
- [ ] Nhu cầu mức thấp
- [ ] Nhu cầu an toàn
- [x] Nhu cầu sinh lý
- [ ] Nhu cầu xã hội

# Question 10
Phong cách lãnh đạo độc đoán có đặc điểm nào sau đây
- [ ] Phát huy tính chủ động sáng tạo của quần chúng
- [ ] Dựa vào ý kiến tập thể để ra quyết định
- [ ] Thu hút người khác tham gia ý kiến
- [x] Nhà lãnh đạo tự ra quyết định dựa vào những thông tin có sẵn

# Question 11
Các nhóm yếu tố ảnh hưởng đến tạo động lực cho nhân viên gồm
- [ ] Các đặc điểm cá nhân; Đặc điểm doanh nghiệp; Môi trường vi mô bên ngoài
- [ ] Các đặc điểm cá nhân; Đặc điểm doanh nghiệp; Môi trường vĩ mô bên ngoài
- [ ] Các đặc điểm cá nhân; Đặc điểm doanh nghiệp; Môi trường bên trong và bên ngoài
- [x] Các đặc điểm cá nhân; Đặc trưng công việc; Đặc điểm doanh nghiệp

# Question 12
Khi cần giải quyết xung đột nhanh mà biết chắc mình đúng thì nên chọn biện pháp
- [ ] Hợp tác
- [x] Cạnh tranh
- [ ] Né tránh
- [ ] Nhượng bộ

# Question 13
Xung đột phát sinh không phải do
- [ ] Tình cảm khác nhau
- [x] Bộ phận trong cơ cấu tổ chức khác nhau
- [ ] Quan điểm khác nhau
- [ ] Mục tiêu khác nhau

# Question 14
Hạn chế của lý thuyết về các yếu tố bẩm sinh của nhà lãnh đạo:
- [x] Chú trọng quá nhiều vào đặc điểm cá tính, thể chất
- [ ] Chú trọng sự hợp tác của cấp dưới
- [ ] Khẳng định việc đào tạo nhà lãnh đạo rất quan trọng
- [ ] Đánh giá cao ảnh hưởng của môi trường

# Question 15
Phong cách lãnh đạo độc đoán không mang đặc điểm sau đây
- [x] Thu hút người khác tham gia ý kiến
- [ ] Chỉ phù hợp với những tập thể thiếu kỷ luật, không tự giác, công việc trì trệ,... cần chấn chỉnh nhanh
- [ ] Không phát huy tính chủ động sáng tạo của quần chúng
- [ ] Không tính đến ý kiến tập thể mà chỉ dựa vào năng lực, kinh nghiệm cá nhân để ra quyết định

# Question 16
Giải quyết xung đột bằng biện pháp nhượng bộ không phù hợp khi
- [x] Bảo vệ nguyện vọng chính đáng
- [ ] Vấn đề quan trọng với người khác hơn với mình
- [ ] Tiếp tục đấu tranh sẽ có hại
- [ ] Có thể đối thủ đúng

# Question 17
Theo thuyết đường dẫn đến mục tiêu của Robert House, những người lãnh đạo để đạt được thành công cần
- [ ] Là những người quản lý
- [ ] Được đào tạo
- [ ] Bẩm sinh
- [x] Linh hoạt

# Question 18
Lương là nhân tố nào trong thuyết 2 nhóm nhân tố của F. Herzberg
- [x] Nhân tố có tính duy trì
- [ ] Nhân tố có tính động viên
- [ ] Nhân tố tạo sự hấp dẫn trong công việc
- [ ] Nhân tố đảm bảo sự an toàn trong công việc

# Question 19
Quan điểm tích cực về xung đột coi
- [ ] Xung đột trong tổ chức là điều không mong muốn, nên dập tắt
- [ ] Xung đột trong tổ chức là có hại
- [x] Xung đột đem lại tính sáng tạo, đổi mới và sự tiến bộ trong tổ chức
- [ ] Xung đột trong tổ chức là không thể tránh được và đôi khi cần thiết

# Question 20
Nhu cầu được hiểu là
- [ ] những yêu cầu, ràng buộc mà tổng thể hệ thống định ra, đòi hỏi con người phải tuân thủ trong mỗi giai đoạn phát triển nhất định của hệ thống
- [ ] kết quả mà con người có thể nhận được qua các hoạt động của bản thân, cộng đồng, tập thể, xã hội nhằm thỏa mãn nhu cầu của bản thân
- [ ] mục đích chủ quan của hoạt động của con người (cộng đồng, tập thể, xã hội), là động lực thúc đẩy con người hành động nhằm đáp ứng các nhu cầu đặt ra
- [x] trạng thái tâm sinh lý căng thẳng khiến con người cảm thấy thiếu thốn không thỏa mãn về một cái gì đó và mong được đáp ứng nó. Nhu cầu gắn liền với sự tồn tại và phát triển của con người, cộng đồng, tập thể và xã hội

# Question 21
Phong cách lãnh đạo nào sau đây mô tả người lãnh đạo có xu hướng tập trung quyền hạn, chỉ thị các phương pháp làm việc, ra quyết định đơn phương và hạn chế sự tham gia của nhân viên
- [ ] Phong cách dân chủ
- [ ] Phong cách tham vấn
- [ ] Phong cách văn hóa
- [x] Phong cách độc đoán

# Question 22
Thuyết lãnh đạo tình huống của Hersey và Blanchard không liên quan đến
- [ ] Hành vi lãnh đạo
- [ ] Sự trưởng thành
- [ ] Hành vi hỗ trợ
- [x] Định hướng thành tích

# Question 23
Theo thuyết nhu cầu của Maslow, đề bạt nhằm thỏa mãn nhu cầu
- [ ] Quan hệ xã hội
- [ ] An toàn
- [ ] Tự hoàn thiện mình
- [x] Được tôn trọng

# Question 24
Theo thuyết 2 nhóm nhân tố của F. Herzberg, khi nhân viên có mối quan hệ không tốt với đồng nghiệp thì ảnh hưởng
- [x] Tạo nên sự bất mãn, chán nản công việc
- [ ] Không tạo ra sự thoả mãn nhưng cũng không có sự bất mãn
- [ ] Tạo nên sự thỏa mãn nhưng không tạo động lực
- [ ] Không ảnh hưởng tới công việc

# Question 25
Các phương pháp giải quyết xung đột không bao gồm
- [ ] Hợp tác
- [ ] Nhượng bộ
- [x] Ủy quyền
- [ ] Thỏa hiệp

# Question 28
Theo thuyết 2 nhóm nhân tố của F. Herzberg, khi công việc của nhân viên không
có tính hấp dẫn, không có tính thử thách thì ảnh hưởng tới nhân viên
- [ ] Tạo nên sự thỏa mãn nhưng không tạo động lực
- [ ] Không tạo ra sự thoả mãn nhưng cũng không có sự bất mãn
- [x] Không bất mãn nhưng vẫn tạo động lực
- [ ] Tạo nên sự bất mãn, chán nản công việc

# Question 29
Phương pháp lãnh đạo được thuyết X đề xuất
- [ ] Phải tạo cho họ môi trường làm việc thích hợp
- [x] Phải hướng dẫn cho họ tỷ mỷ và phải kiểm soát họ chặt chẽ
- [ ] Phải tôn trọng người lao động, để họ được tự thực hiện mục tiêu
- [ ] Cần động viên khen thưởng kịp thời

# Question 30
Theo thuyết hai nhóm nhân tố của F. Herzberg, "điều kiện làm việc" được xếp vào nhóm
- [ ] Nhân tố động viên
- [x] Nhân tố duy trì
- [ ] Nhân tố thúc đẩy
- [ ] Nhân tố khuyến khích

<!--  -->

# Question 1
……….là một cảm giác thôi thúc mạnh mẽ do sự thiếu hụt về một mặt nào đó trong đời sống con người
- [x] Nhu cầu
- [ ] Động cơ thúc đẩy
- [ ] Sự thỏa mãn
- [ ] Động lực

# Question 2
Phát biểu nào không phải là hạn chế của lý thuyết về các yếu tố bẩm sinh của nhà lãnh đạo
- [x] Chú trọng sự hợp tác của cấp dưới
- [ ] Đánh giá cao quá yếu tố thể chất, diện mạo nhà lãnh đạo
- [ ] Không thấy được hạn chế từ một số cá tính bẩm sinh tới hiệu quả lãnh đạo
- [ ] Chú trọng quá cá tính nhà lãnh đạo

# Question 3
sự lãnh đạo của nhà quản trị đến nhân viên liên quan tới
- [x] Sự động viên
- [ ] Truyền thông
- [ ] Kiểm tra
- [ ] Hoạch định

# Question 4
Khi chưa chắc mình đúng và nếu để xung đột kéo dài sẽ đem lại tổn thất thì nên chọn biện pháp giải quyết xung đột
- [ ] Hợp tác
- [ ] Né tránh
- [ ] Cạnh tranh
- [x] Nhượng bộ

# Question 6
Lý thuyết nào sau đây không liên quan đến tạo động lực dựa trên sự thỏa mãn nhu cầu
- [ ] Thuyết nhu cầu của Maslow
- [ ] Thuyết 2 nhóm yếu tố của Herzberg
- [x] Thuyết quản trị khoa học
- [ ] Thuyết mong đợi

# Question 7
Mục đích cuối cùng của động viên nhân viên là để
- [ ] Xác định mức lương và thưởng hợp lí
- [ ] Thỏa mãn 1 nhu cầu nào đó của nhân viên
- [x] Tạo ra sự nỗ lực hơn cho nhân viên trong công việc
- [ ] Xây dựng một môi trường làm việc tốt

# Question 9
“Lãnh đạo là tìm cách gây ảnh hưởng đến người khác nhằm đạt được _________ của tổ chức”
- [x] Mục tiêu
- [ ] Lợi nhuận
- [ ] Môi trường nội bộ tốt
- [ ] Kế hoạch

# Question 10
Theo thuyết về các nhu cầu của David McClelland, làm cho người khác hành động theo cách mà đáng ra họ không hành động như vậy là loại nhu cầu nào
- [ ] Nhu cầu tự hoàn thiện
- [ ] Nhu cầu được tôn trọng
- [x] Nhu cầu quyền lực
- [ ] Nhu cầu thành tích

# Question 11
Sơ đồ lưới quản trị phân loại phong cách lãnh đạo theo
- [ ] Mức độ quan tâm đến con người và công việc
- [ ] Mức độ quan tâm đến con người và tình huống
- [x] Mức độ quan tâm đến con người và sản xuất
- [ ] Mức độ quan tâm đến nhu cầu và tình huống

# Question 12
Lý thuyết về lãnh đạo theo trường phái hành vi không có điều nào sau đây
- [x] Cho rằng hiệu quả lãnh đạo phụ thuộc nhiều vào chiều cao, sức mạnh hay cân nặng của một người
- [ ] Phân tích những khác biệt trong các hoạt động của nhà lãnh đạo thành công và các nhà lãnh đạo không thành công
- [ ] Tính hiệu quả của hành vi nhà lãnh đạo tùy thuộc tình huống cụ thể
- [ ] Có thể huấn luyện cho một người lãnh đạo để họ thực hiện tốt vai trò của mình

# Question 13
Phong cách lãnh đạo nào sau đây mô tả người lãnh đạo thực hiện cả hành vi chỉ đạo và hỗ trợ trong mô hình lãnh đạo của Hersey và Blanchard
- [ ] Ủy quyền
- [x] Kèm cặp
- [ ] Điều hành trực tiếp
- [ ] Tham gia

# Question 14
Khi cần làm đối tác bình tĩnh lại và cần thu nhập thêm thông tin thì nên chọn biện pháp giải quyết xung đột
- [ ] Cạnh tranh
- [x] Né tránh
- [ ] Nhượng bộ
- [ ] Hợp tác

# Question 15
Đây là bậc thấp nhất trong 5 bậc nhu cầu của Maslow
- [ ] Nhu cầu xã hội
- [ ] Nhu cầu tự hoàn thiện
- [x] Nhu cầu sinh lý
- [ ] Nhu cầu về an toàn

# Theo thuyết lãnh đạo tình huống của Hersey và Blanchard, khi nhân viên thấy tự
tin hoàn thành nhiệm vụ thì áp dụng phong cách lãnh đạo
- [x] Hỗ trợ
- [ ] Kèm cặp
- [ ] Điều hành trực tiếp
- [ ] Tham gia

# Thuyết lãnh đạo tình huống của Hersey và Blanchard chia phòng cách lãnh đạo
thành các loại
- [x] Hỗ trợ; kèm cặp; điều hành trực tiếp; ủy quyền
- [ ] Hướng dẫn; kèm cặp; điều hành trực tiếp; ủy quyền
- [ ] Hướng dẫn, hỗ trợ; kèm cặp; điều hành trực tiếp
- [ ] Hỗ trợ; điều hành trực tiếp; ủy quyền

# Loại nào không phải là một trong các loại xung đột cơ bản
- [ ] Xung đột mục tiêu
- [ ] Xung đột nhận thức
- [x] Xung đột ý tưởng
- [ ] Xung đột tình cảm

# Theo thuyết nhu cầu của Maslow, được tham gia quá trình cải biến doanh nghiệp nhằm thỏa mãn
- [ ] Nhu cầu mức cao
- [x] Nhu cầu tự thể hiện
- [ ] Nhu cầu tôn trọng
- [ ] Nhu cầu xã hội

# Theo Fiedler, người lãnh đạo định hướng quan hệ phù hợp nhất với tình huống nào
- [ ] Thuận lợi
- [ ] Rất không thuận lợi
- [x] Mức độ thuận lợi trung bình
- [ ] Rất thuận lợi

<!--  -->

# Question 2
Theo thuyết 2 nhóm nhân tố của F. Herzberg, khi nhân viên có mối quan hệ không tốt với đồng nghiệp thì ảnh hưởng
- [x] Tạo nên sự bất mãn, chán nản công việc
- [ ] Tạo nên sự thỏa mãn nhưng không tạo động lực
- [ ] Không bất mãn và cũng không có hưng phấn
- [ ] Không tạo ra sự thoả mãn nhưng cũng không có sự bất mãn

# Question 5
……… là khả năng hình dung ra những viễn cảnh, những triển vọng tương lai của doanh nghiệp, tổ chức và cách thức tiến hành để đạt tới viễn cảnh đó
- [ ] Khả năng điều hòa các giá trị
- [x] Khả năng nhìn xa trông rộng
- [ ] Khả năng tự hiểu mình
- [ ] Khả năng trực cảm

# Question 11
Động viên là tạo ra sự _________ ở nhân viên trong quá trình thực hiện nhiệm vụ của tổ chức trên cơ sở thỏa mãn nhu cầu cá nhân”
- [ ] Quan tâm
- [ ] Miễn cưỡng
- [ ] Chấp nhận
- [x] Nỗ lực

`,Lh=`


# Kiểm tra ……. là loại kiểm tra được thực hiện sau khi hoạt động đã xảy ra và đề xuất biện pháp điều chỉnh trong tương lai
- [x] Phản hồi
- [ ] Chéo
- [ ] Lường trước
- [ ] Đồng thời

# Hình thức nhà quản trị đo lường/ đánh giá công việc thực tế của nhân viên gần giống với hình thức mà giáo viên….. :
- [x] cho điểm bài kiểm tra
- [ ] giúp sinh viên chuẩn bị cho bài kiểm tra.
- [ ] soạn bài kiểm tra
- [ ] chuẩn bị bài tập

# Trong bước 2 của quá trình kiểm tra cơ bản, số liệu đo lường thực tế có thể chấp nhận được miễn là kết quả đó không………?
- [ ] trong phạm vị giới hạn có thể chấp nhận.
- [ ] ít hơn tiêu chuẩn đề ra trên 15%
- [x] ra ngoài phạm vi giới hạn có thể chấp nhận
- [ ] ít hơn tiêu chuẩn đề ra trên 30%

# Các nhà quản lý kiểm soát tài chính đối với một tổ chức bằng cách sử dụng phân tích ________.
- [ ] Hoạt động.
- [x] Tỷ lệ thu chi và ngân sách.
- [ ] Năng suất.
- [ ] Năng suất và nguồn lực.

# Hình thức kiểm tra nào là phổ biến nhất?
- [x] Kiểm tra phản hồi
- [ ] Kiểm tra chéo
- [ ] Kiểm tra lường trước
- [ ] Kiểm tra đồng thời

# Hình thức được biết đến nhiều nhất của …….là giám sát trực tiếp.
- [ ] Kiểm tra phản hồi
- [ ] Kiểm tra lường trước
- [x] Kiểm tra đồng thời
- [ ] Kiểm tra chéo

# Thay dầu và rửa bộ lọc xe máy của anh/chị sau mỗi 1000 km là ví dụ minh họa cho hình thức kiểm tra nào?
- [ ] Kiểm tra đồng thời
- [x] Kiểm tra lường trước
- [ ] Kiểm tra phản hồi
- [ ] Kiểm tra chéo

# Các tiêu chuẩn kiểm tra có thể được biểu hiện dưới dạng:
- [ ] định tính, định lượng
- [ ] Tất cả các phương án trên đều sai.
- [x] số lượng, chất lượng
- [ ] Phương án A và B

# Khi một gói ngân sách được sử dụng để kiểm soát, nó cung cấp ________ để so sánh mức sử dụng các nguồn lực
Select one:
- [ ] tiêu chuẩn linh hoạt
- [x] tiêu chuẩn định lượng
- [ ] tiêu chuẩn phi ngân quỹ
- [ ] tiêu chuẩn định tính

# Kiểm tra đưa ra những thông tin giúp liên hệ trở lại với chức năng nào của quản lý?
- [ ] Văn hoá tổ chức
- [ ] Tuyển dụng
- [ ] Lựa chọn nhân viêc
- [x] Lập kế hoạch

# Ưu điểm của kiểm tra lường trước là?
- [ ] Tất cả các phương án trên.
- [ ] Tiết kiệm thời gian.
- [x] Dự báo trước những việc có thể xảy ra trước khi thực hiện công việc.
- [ ] Tiết kiệm chi phí

# Để tiến hành bước 2 trong quá trình kiểm tra cơ bản, một cửa hàng bán bánh cần so sánh số bánh thực tế bán và…….?
- [ ] số lượng bán của đối thủ.
- [x] mục tiêu sản lượng bán kế hoạch trong tổng doanh thu.
- [ ] tổng số lượng bán năm ngoái.
- [ ] số lượng bánh tiềm năng có thể bán.

# Nhà quản trị chỉ cần thực hiện kiểm tra
- [x] Không có phương án nào chính xác
- [ ] Trong khi thực hiện kế hoạch
- [ ] Trước khi thực hiện kế hoạch
- [ ] Sau khi hoàn thành kế hoạch

# Một công ty điện thoại cho một nhóm khách hàng tiềm năng dùng thử sản phẩm mới của mình với đầy đủ các chức năng. Đây là hình thức kiểm tra nào?
- [ ] Kiểm tra tiền bán hàng
- [ ] Kiểm tra đồng thời
- [ ] Kiểm tra lường trước
- [x] Kiểm tra phản hồi

# Trong quá trình kiểm tra cơ bản, bước nào sẽ được thực hiện trước bước “điều chỉnh các sai lệch”?
- [ ] Thiết lập các tiêu chuẩn
- [ ] Không có đáp án nào đúng.
- [x] Đo lường việc thực hiện KH theo các tiêu chuẩn.
- [ ] Kiểm tra độ tin cậy

# Khi kiểm soát phản hồi cho thấy rằng các mục tiêu kế hoạch và kết quả thực tế có khác biệt đáng kể, kết luận có khả năng nhất là ________.
- [ ] lập kế hoạch đã đúng mục tiêu
- [ ] các phép lường không đáng tin cậy
- [ ] mục tiêu không cần thay đổi
- [x] lập kế hoạch không đúng mục tiêu

# Một gia đình đang sử dụng chương trình máy tính để tạo ngân sách gia đình sử dụng. Họ đang sử dụng ngân sách dưới dạng ________.
- [ ] công cụ lãnh đạo
- [x] công cụ lập kế hoạch
- [ ] công cụ kiểm tra
- [ ] công cụ tổ chức`;function Xm(b){let q,w,S,M,H,Z,U,gn,K,on;function xn(en){b[3](en)}let qn={md_list:b[2]};b[0]!==void 0&&(qn.using_md=b[0]),S=new Th({props:qn}),Ie.push(()=>Uc(S,"using_md",xn));function Tn(en){b[4](en)}let st={md_list:b[1]};return b[0]!==void 0&&(st.using_md=b[0]),gn=new Th({props:st}),Ie.push(()=>Uc(gn,"using_md",Tn)),{c(){q=Yn("div"),q.textContent="QTHDC:",w=vt(),Xc(S.$$.fragment),H=vt(),Z=Yn("div"),Z.textContent="Web:",U=vt(),Xc(gn.$$.fragment)},m(en,zn){Qt(en,q,zn),Qt(en,w,zn),br(S,en,zn),Qt(en,H,zn),Qt(en,Z,zn),Qt(en,U,zn),br(gn,en,zn),on=!0},p(en,[zn]){const Dn={};!M&&zn&1&&(M=!0,Dn.using_md=en[0],jc(()=>M=!1)),S.$set(Dn);const Qn={};!K&&zn&1&&(K=!0,Qn.using_md=en[0],jc(()=>K=!1)),gn.$set(Qn)},i(en){on||(kr(S.$$.fragment,en),kr(gn.$$.fragment,en),on=!0)},o(en){Bc(S.$$.fragment,en),Bc(gn.$$.fragment,en),on=!1},d(en){en&&(_t(q),_t(w),_t(H),_t(Z),_t(U)),xr(S,en),xr(gn,en)}}}function Fm(b,q,w){let{using_md:S}=q;const M=qh+zh+_h+Ch+Sh+Nh,H=[{name:"First",md:qh},{name:"HTML",md:zh},{name:"CSS",md:_h},{name:"Javascript",md:Ch},{name:"DOM",md:Sh},{name:"Servelet",md:Nh},{name:"ALL",md:M}],Z=Eh+$h+Mh+Ah+Lh,U=[{name:"Chương 1",md:Eh},{name:"Chương 2",md:$h},{name:"Chương 3",md:Mh},{name:"Chương 4",md:Ah},{name:"Chương 5",md:Lh},{name:"ALL",md:Z}];function gn(on){S=on,w(0,S)}function K(on){S=on,w(0,S)}return b.$$set=on=>{"using_md"in on&&w(0,S=on.using_md)},[S,H,U,gn,K]}class Gm extends Jc{constructor(q){super(),Yc(this,q,Fm,Xm,Vc,{using_md:0})}}function Vm(b){let q,w,S,M,H,Z,U,gn,K,on,xn,qn,Tn,st,en=(b[0]==130?"None":b[0])+"",zn,Dn,Qn,Ct,Dt,te;function St(Ln){b[5](Ln)}let Ke={};return b[2]!==void 0&&(Ke.using_md=b[2]),K=new Gm({props:Ke}),Ie.push(()=>Uc(K,"using_md",St)),{c(){q=Yn("main"),w=Yn("div"),w.innerHTML="",S=vt(),M=Yn("h3"),M.textContent="Choose quiz",H=vt(),Z=Yn("div"),U=Yn("button"),U.textContent="REFRESH QUIZ",gn=vt(),Xc(K.$$.fragment),xn=vt(),qn=Yn("div"),Tn=Yn("div"),st=yr("Limit: "),zn=yr(en),Dn=vt(),Qn=Yn("input"),Ht(w,"class","quizdown svelte-nm2889"),Ht(Qn,"type","range"),Ht(Qn,"min","20"),Ht(Qn,"max","130"),Ht(Qn,"step","10"),Ht(Z,"class","options-container svelte-nm2889")},m(Ln,A){Qt(Ln,q,A),An(q,w),b[4](w),An(q,S),An(q,M),An(q,H),An(q,Z),An(Z,U),An(Z,gn),br(K,Z,null),An(Z,xn),An(Z,qn),An(qn,Tn),An(Tn,st),An(Tn,zn),An(qn,Dn),An(qn,Qn),vr(Qn,b[0]),Ct=!0,Dt||(te=[pr(U,"click",b[3]),pr(Qn,"change",b[6]),pr(Qn,"input",b[6])],Dt=!0)},p(Ln,[A]){const Gn={};!on&&A&4&&(on=!0,Gn.using_md=Ln[2],jc(()=>on=!1)),K.$set(Gn),(!Ct||A&1)&&en!==(en=(Ln[0]==130?"None":Ln[0])+"")&&Kh(zn,en),A&1&&vr(Qn,Ln[0])},i(Ln){Ct||(kr(K.$$.fragment,Ln),Ct=!0)},o(Ln){Bc(K.$$.fragment,Ln),Ct=!1},d(Ln){Ln&&_t(q),b[4](null),xr(K),Dt=!1,di(te)}}}function Wm(b,q,w){let S={startOnLoad:!0,shuffleAnswers:!0,shuffleQuestions:!0,nQuestions:void 0,primaryColor:"#ff3e00",secondaryColor:"#f2f2f2",textColor:"black"},M=60,H,Z="";function U(){S.nQuestions=M==130?void 0:M,jm.createApp(Z,H,S)}function gn(xn){Ie[xn?"unshift":"push"](()=>{H=xn,w(1,H)})}function K(xn){Z=xn,w(2,Z)}function on(){M=Lm(this.value),w(0,M)}return[M,H,Z,U,gn,K,on]}class Ym extends Jc{constructor(q){super(),Yc(this,q,Wm,Vm,Vc,{})}}new Ym({target:document.getElementById("app")});
