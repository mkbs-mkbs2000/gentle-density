function p(){}function V(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(L)}function W(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function yt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function X(t){return Object.keys(t).length===0}function Y(t,...e){if(t==null)return p;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t,e,n){t.$$.on_destroy.push(Y(e,n))}function bt(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?V(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function wt(t,e,n,i,r,o){if(r){const s=B(e,n,i,o);t.p(s,r)}}function $t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function vt(t){return t==null?"":t}const H=typeof window<"u";let Et=H?()=>window.performance.now():()=>Date.now(),O=H?t=>requestAnimationFrame(t):p;const _=new Set;function F(t){_.forEach(e=>{e.c(t)||(_.delete(e),e.f())}),_.size!==0&&O(F)}function At(t){let e;return _.size===0&&O(F),{promise:new Promise(n=>{_.add(e={c:t,f:n})}),abort(){_.delete(e)}}}let A=!1;function Z(){A=!0}function tt(){A=!1}function et(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:et(1,r,b=>e[n[b]].claim_order,u))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const o=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(s[c],f)}}function it(t,e){t.appendChild(e)}function rt(t,e){if(A){for(nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){A&&!n?rt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function I(t){t.parentNode.removeChild(t)}function St(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function R(t){return document.createElement(t)}function st(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function Ct(){return j(" ")}function kt(){return j("")}function P(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function jt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return Array.from(t.childNodes)}function ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,i,r=!1){ct(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function J(t,e,n,i){return G(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Dt(t,e,n){return J(t,e,n,R)}function Tt(t,e,n){return J(t,e,n,st)}function ut(t,e){return G(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function Mt(t){return ut(t," ")}function Pt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function qt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let w;function lt(){if(w===void 0){w=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{w=!0}}return w}function Lt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=R("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=lt();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=P(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=P(i.contentWindow,"resize",e)}),it(t,i),()=>{(r||o&&i.contentWindow)&&o(),I(i)}}function Wt(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Bt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ht(t,e){return new t(e)}let y;function m(t){y=t}function z(){if(!y)throw new Error("Function called outside component initialization");return y}function Ot(t){z().$$.on_mount.push(t)}function Ft(t){z().$$.after_update.push(t)}function It(){const t=z();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=at(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}const h=[],q=[],v=[],S=[],K=Promise.resolve();let C=!1;function Q(){C||(C=!0,K.then(U))}function Rt(){return Q(),K}function k(t){v.push(t)}function Gt(t){S.push(t)}const N=new Set;let $=0;function U(){const t=y;do{for(;$<h.length;){const e=h[$];$++,m(e),ft(e.$$)}for(m(null),h.length=0,$=0;q.length;)q.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];N.has(n)||(N.add(n),n())}v.length=0}while(h.length);for(;S.length;)S.pop()();C=!1,N.clear(),m(t)}function ft(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const E=new Set;let d;function Jt(){d={r:0,c:[],p:d}}function Kt(){d.r||g(d.c),d=d.p}function dt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Qt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ut(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Vt(t){t&&t.c()}function Xt(t,e){t&&t.l(e)}function _t(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||k(()=>{const s=t.$$.on_mount.map(L).filter(W);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),o.forEach(k)}function ht(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(h.push(t),Q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Yt(t,e,n,i,r,o,s,l=[-1]){const c=y;m(t);const u=t.$$={fragment:null,ctx:[],props:o,update:p,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,b,...D)=>{const T=D.length?D[0]:b;return u.ctx&&r(u.ctx[a],u.ctx[a]=T)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](T),f&&mt(t,a)),b}):[],u.update(),f=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){Z();const a=ot(e.target);u.fragment&&u.fragment.l(a),a.forEach(I)}else u.fragment&&u.fragment.c();e.intro&&dt(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),tt(),U()}m(c)}class Zt{$destroy(){ht(this,1),this.$destroy=p}$on(e,n){if(!W(n))return p;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Gt as $,Rt as A,p as B,bt as C,wt as D,$t as E,xt as F,rt as G,gt as H,st as I,Tt as J,k as K,Lt as L,St as M,Et as N,At as O,Wt as P,P as Q,W as R,Zt as S,jt as T,g as U,It as V,Y as W,q as X,Ut as Y,vt as Z,yt as _,Ct as a,Bt as a0,Nt as b,Mt as c,Kt as d,kt as e,dt as f,Jt as g,I as h,Yt as i,Ft as j,R as k,Dt as l,ot as m,zt as n,Ot as o,qt as p,j as q,ut as r,pt as s,Qt as t,Pt as u,Ht as v,Vt as w,Xt as x,_t as y,ht as z};