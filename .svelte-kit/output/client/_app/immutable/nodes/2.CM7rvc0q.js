import"../chunks/CWj6FrbW.js";import{f as li,i as fi,b as Q,d as Va,a as ci,n as ui,c as di,o as mi,e as ut,s as J}from"../chunks/B9lt_pYx.js";import{a5 as pt,Y as Ba,h as Ka,av as R,b4 as Ce,ap as ke,at as tn,am as x,aT as gi,q as pi,b9 as Zn,b5 as Te,au as Ee,e as kn,n as vi,aA as Jn,a6 as De,k as ee,Z as Ue,ad as hi,b7 as bi,ab as yi,aD as Xa,V as En,j as xi,i as wi,aK as $a,ba as ea,E as Ai,D as _i,aX as qa,aN as Qa,I as Ht,aS as Sn,c as ki,g as Ei,a0 as Si,aJ as Ci,ac as yt,aq as xt,bf as re,K as Za,W as Yt,aU as Ti,ax as Oi,o as Pi,a4 as Ni,v as Ii,u as Mi,m as Li,B as Fi,R as zi,ae as it,bi as _t,J as Di,aF as Ri,aM as Xe,bn as Ja,H as ji,aV as er,a7 as tr,a_ as Ui,aI as nr,C as ta,G as na,a$ as Hi,aC as Yi,be as Wi,F as Gi,O as Vi,t as Bi,a as Ki,N as Xi,s as ot,ar as $i,ao as qi,ai as Qi,A as Zi,X as ar,U as Ji,aH as eo,bh as to,a2 as no,bm as ao,bl as nn,aZ as aa,aY as ro,aa as io,ag as oo,aR as Cn,aW as C,Q as $,aO as Tn,al as so,b0 as H,a1 as lo,ah as rr,bb as ge,aQ as fo,b8 as N,ak as ae,$ as co,_ as O,aL as pe,bk as Fe}from"../chunks/BfudYDrc.js";import{p as I,b as uo,l as ra,i as _e,s as mo}from"../chunks/CJGR1-0h.js";import{n as go,i as po,b as vo,c as ho,a as bo}from"../chunks/EDPLhndW.js";function ia(e,t){return t}function yo(e,t,n){for(var a=[],r=t.length,i,o=t.length,s=0;s<r;s++){let v=t[s];Qa(v,()=>{if(i){if(i.pending.delete(v),i.done.add(v),i.pending.size===0){var u=e.outrogroups;an(e,En(i.done)),u.delete(i),u.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=a.length===0&&n!==null;if(c){var l=n,f=l.parentNode;Si(f),f.append(l),e.items.clear()}an(e,t,!c)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function an(e,t,n=!0){var a;if(e.pending.size>0){a=new Set;for(const o of e.pending.values())for(const s of o)a.add(e.items.get(s).e)}for(var r=0;r<t.length;r++){var i=t[r];if(a!=null&&a.has(i)){i.f|=ee;const o=document.createDocumentFragment();Ci(i,o)}else yt(t[r],n)}}var oa;function Wt(e,t,n,a,r,i=null){var o=e,s=new Map,c=(t&Ka)!==0;if(c){var l=e;o=R?Ce(ke(l)):l.appendChild(pt())}R&&tn();var f=null,v=yi(()=>{var _=n();return Xa(_)?_:_==null?[]:En(_)}),u,y=new Map,b=!0;function A(_){P.effect.f&_i||(P.pending.delete(_),P.fallback=f,xo(P,u,o,t,a),f!==null&&(u.length===0?f.f&ee?(f.f^=ee,Ze(f,null,o)):qa(f):Qa(f,()=>{f=null})))}function m(_){P.pending.delete(_)}var d=Ba(()=>{u=x(v);var _=u.length;let S=!1;if(R){var j=gi(o)===pi;j!==(_===0)&&(o=Zn(),Ce(o),Te(!1),S=!0)}for(var T=new Set,k=De,M=bi(),z=0;z<_;z+=1){R&&Ee.nodeType===kn&&Ee.data===vi&&(o=Ee,S=!0,Te(!1));var L=u[z],K=a(L,z),U=b?null:s.get(K);U?(U.v&&Jn(U.v,L),U.i&&Jn(U.i,z),M&&k.unskip_effect(U.e)):(U=wo(s,b?o:oa??(oa=pt()),L,K,z,r,t,n),b||(U.e.f|=ee),s.set(K,U)),T.add(K)}if(_===0&&i&&!f&&(b?f=Ue(()=>i(o)):(f=Ue(()=>i(oa??(oa=pt()))),f.f|=ee)),_>T.size&&hi(),R&&_>0&&Ce(Zn()),!b)if(y.set(k,T),M){for(const[fe,ce]of s)T.has(fe)||k.skip_effect(ce.e);k.oncommit(A),k.ondiscard(m)}else A(k);S&&Te(!0),x(v)}),P={effect:d,items:s,pending:y,outrogroups:null,fallback:f};b=!1,R&&(o=Ee)}function $e(e){for(;e!==null&&!(e.f&ki);)e=e.next;return e}function xo(e,t,n,a,r){var L,K,U,fe,ce,We,Ne,Ge,Ve;var i=(a&Ei)!==0,o=t.length,s=e.items,c=$e(e.effect.first),l,f=null,v,u=[],y=[],b,A,m,d;if(i)for(d=0;d<o;d+=1)b=t[d],A=r(b,d),m=s.get(A).e,m.f&ee||((K=(L=m.nodes)==null?void 0:L.a)==null||K.measure(),(v??(v=new Set)).add(m));for(d=0;d<o;d+=1){if(b=t[d],A=r(b,d),m=s.get(A).e,e.outrogroups!==null)for(const X of e.outrogroups)X.pending.delete(m),X.done.delete(m);if(m.f&Ht&&(qa(m),i&&((fe=(U=m.nodes)==null?void 0:U.a)==null||fe.unfix(),(v??(v=new Set)).delete(m))),m.f&ee)if(m.f^=ee,m===c)Ze(m,null,n);else{var P=f?f.next:c;m===e.effect.last&&(e.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),ve(e,f,m),ve(e,m,P),Ze(m,P,n),f=m,u=[],y=[],c=$e(f.next);continue}if(m!==c){if(l!==void 0&&l.has(m)){if(u.length<y.length){var _=y[0],S;f=_.prev;var j=u[0],T=u[u.length-1];for(S=0;S<u.length;S+=1)Ze(u[S],_,n);for(S=0;S<y.length;S+=1)l.delete(y[S]);ve(e,j.prev,T.next),ve(e,f,j),ve(e,T,_),c=_,f=T,d-=1,u=[],y=[]}else l.delete(m),Ze(m,c,n),ve(e,m.prev,m.next),ve(e,m,f===null?e.effect.first:f.next),ve(e,f,m),f=m;continue}for(u=[],y=[];c!==null&&c!==m;)(l??(l=new Set)).add(c),y.push(c),c=$e(c.next);if(c===null)continue}m.f&ee||u.push(m),f=m,c=$e(m.next)}if(e.outrogroups!==null){for(const X of e.outrogroups)X.pending.size===0&&(an(e,En(X.done)),(ce=e.outrogroups)==null||ce.delete(X));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||l!==void 0){var k=[];if(l!==void 0)for(m of l)m.f&Ht||k.push(m);for(;c!==null;)!(c.f&Ht)&&c!==e.fallback&&k.push(c),c=$e(c.next);var M=k.length;if(M>0){var z=a&Ka&&o===0?n:null;if(i){for(d=0;d<M;d+=1)(Ne=(We=k[d].nodes)==null?void 0:We.a)==null||Ne.measure();for(d=0;d<M;d+=1)(Ve=(Ge=k[d].nodes)==null?void 0:Ge.a)==null||Ve.fix()}yo(e,k,z)}}i&&Sn(()=>{var X,Ie;if(v!==void 0)for(m of v)(Ie=(X=m.nodes)==null?void 0:X.a)==null||Ie.apply()})}function wo(e,t,n,a,r,i,o,s){var c=o&xi?o&wi?ea(n):$a(n,!1,!1):null,l=o&Ai?ea(r):null;return{v:c,i:l,e:Ue(()=>(i(t,c??n,l??r,s),()=>{e.delete(a)}))}}function Ze(e,t,n){if(e.nodes)for(var a=e.nodes.start,r=e.nodes.end,i=t&&!(t.f&ee)?t.nodes.start:n;a!==null;){var o=xt(a);if(i.before(a),a===r)return;a=o}}function ve(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Ao(e,t,n=!1,a=!1,r=!1,i=!1){var o=e,s="";if(n){var c=e;R&&(o=Ce(ke(c)))}re(()=>{var l=Za;if(s===(s=t()??"")){R&&tn();return}if(n&&!R){l.nodes=null,c.innerHTML=s,s!==""&&Yt(ke(c),c.lastChild);return}if(l.nodes!==null&&(Ti(l.nodes.start,l.nodes.end),l.nodes=null),s!==""){if(R){Ee.data;for(var f=tn(),v=f;f!==null&&(f.nodeType!==kn||f.data!=="");)v=f,f=xt(f);if(f===null)throw Oi(),Pi;Yt(Ee,v),o=Ce(f);return}var u=a?Ii:r?Mi:void 0,y=Ni(a?"svg":r?"math":"template",u);y.innerHTML=s;var b=a||r?y:y.content;if(Yt(ke(b),b.lastChild),a||r)for(;ke(b);)o.before(ke(b));else o.before(b)}})}const _o=()=>performance.now(),ie={tick:e=>requestAnimationFrame(e),now:()=>_o(),tasks:new Set};function ir(){const e=ie.now();ie.tasks.forEach(t=>{t.c(e)||(ie.tasks.delete(t),t.f())}),ie.tasks.size!==0&&ie.tick(ir)}function ko(e){let t;return ie.tasks.size===0&&ie.tick(ir),{promise:new Promise(n=>{ie.tasks.add(t={c:e,f:n})}),abort(){ie.tasks.delete(t)}}}function dt(e,t){Ja(()=>{e.dispatchEvent(new CustomEvent(t))})}function Eo(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function sa(e){const t={},n=e.split(";");for(const a of n){const[r,i]=a.split(":");if(!r||i===void 0)break;const o=Eo(r.trim());t[o]=i.trim()}return t}const So=e=>e;function la(e,t,n,a){var m;var r=(e&Di)!==0,i="both",o,s=t.inert,c=t.style.overflow,l,f;function v(){return Ja(()=>o??(o=n()(t,(a==null?void 0:a())??{},{direction:i})))}var u={is_global:r,in(){t.inert=s,l=rn(t,v(),f,1,()=>{dt(t,"introstart")},()=>{dt(t,"introend"),l==null||l.abort(),l=o=void 0,t.style.overflow=c})},out(d){t.inert=!0,f=rn(t,v(),l,0,()=>{dt(t,"outrostart")},()=>{dt(t,"outroend"),d==null||d()})},stop:()=>{l==null||l.abort(),f==null||f.abort()}},y=Za;if(((m=y.nodes).t??(m.t=[])).push(u),li){var b=r;if(!b){for(var A=y.parent;A&&A.f&Li;)for(;(A=A.parent)&&!(A.f&Fi););b=!A||(A.f&zi)!==0}b&&it(()=>{_t(()=>u.in())})}}function rn(e,t,n,a,r,i){var o=a===1;if(Ri(t)){var s,c=!1;return Sn(()=>{if(!c){var d=t({direction:o?"in":"out"});s=rn(e,d,n,a,r,i)}}),{abort:()=>{c=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(n==null||n.deactivate(),!(t!=null&&t.duration)&&!(t!=null&&t.delay))return r(),i(),{abort:Xe,deactivate:Xe,reset:Xe,t:()=>a};const{delay:l=0,css:f,tick:v,easing:u=So}=t;var y=[];if(o&&n===void 0&&(v&&v(0,1),f)){var b=sa(f(0,1));y.push(b,b)}var A=()=>1-a,m=e.animate(y,{duration:l,fill:"forwards"});return m.onfinish=()=>{m.cancel(),r();var d=(n==null?void 0:n.t())??1-a;n==null||n.abort();var P=a-d,_=t.duration*Math.abs(P),S=[];if(_>0){var j=!1;if(f)for(var T=Math.ceil(_/16.666666666666668),k=0;k<=T;k+=1){var M=d+P*u(k/T),z=sa(f(M,1-M));S.push(z),j||(j=z.overflow==="hidden")}j&&(e.style.overflow="hidden"),A=()=>{var L=m.currentTime;return d+P*u(L/_)},v&&ko(()=>{if(m.playState!=="running")return!1;var L=A();return v(L,1-L),!0})}m=e.animate(S,{duration:_,fill:"forwards"}),m.onfinish=()=>{A=()=>a,v==null||v(a,1-a),i()}},{abort:()=>{m&&(m.cancel(),m.effect=null,m.onfinish=Xe)},deactivate:()=>{i=Xe},reset:()=>{a===0&&(v==null||v(1,0))},t:()=>A()}}function Co(e,t){let n=null,a=R;var r;if(R){n=Ee;for(var i=ke(document.head);i!==null&&(i.nodeType!==kn||i.data!==e);)i=xt(i);if(i===null)Te(!1);else{var o=xt(i);i.remove(),Ce(o)}}R||(r=document.head.appendChild(pt()));try{Ba(()=>{var s=Ue(()=>t(r));s.f|=ji})}finally{a&&(Te(!0),Ce(n))}}function fa(e,t,n){it(()=>{var a=_t(()=>t(e,n==null?void 0:n())||{});if(n&&(a!=null&&a.update)){var r=!1,i={};er(()=>{var o=n();tr(o),r&&Ui(i,o)&&(i=o,a.update(o))}),r=!0}if(a!=null&&a.destroy)return()=>a.destroy()})}function To(e,t){var n=void 0,a;nr(()=>{n!==(n=t())&&(a&&(yt(a),a=null),n&&(a=Ue(()=>{it(()=>n(e))})))})}function or(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=or(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function Oo(){for(var e,t,n=0,a="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=or(e))&&(a&&(a+=" "),a+=t);return a}function Po(e){return typeof e=="object"?Oo(e):e??""}const ca=[...` 	
\r\f \v\uFEFF`];function No(e,t,n){var a=e==null?"":""+e;if(n){for(var r of Object.keys(n))if(n[r])a=a?a+" "+r:r;else if(a.length)for(var i=r.length,o=0;(o=a.indexOf(r,o))>=0;){var s=o+i;(o===0||ca.includes(a[o-1]))&&(s===a.length||ca.includes(a[s]))?a=(o===0?"":a.substring(0,o))+a.substring(s+1):o=s}}return a===""?null:a}function ua(e,t=!1){var n=t?" !important;":";",a="";for(var r of Object.keys(e)){var i=e[r];i!=null&&i!==""&&(a+=" "+r+": "+i+n)}return a}function Gt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Io(e,t){if(t){var n="",a,r;if(Array.isArray(t)?(a=t[0],r=t[1]):a=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,s=!1,c=[];a&&c.push(...Object.keys(a).map(Gt)),r&&c.push(...Object.keys(r).map(Gt));var l=0,f=-1;const A=e.length;for(var v=0;v<A;v++){var u=e[v];if(s?u==="/"&&e[v-1]==="*"&&(s=!1):i?i===u&&(i=!1):u==="/"&&e[v+1]==="*"?s=!0:u==='"'||u==="'"?i=u:u==="("?o++:u===")"&&o--,!s&&i===!1&&o===0){if(u===":"&&f===-1)f=v;else if(u===";"||v===A-1){if(f!==-1){var y=Gt(e.substring(l,f).trim());if(!c.includes(y)){u!==";"&&v++;var b=e.substring(l,v).trim();n+=" "+b+";"}}l=v+1,f=-1}}}}return a&&(n+=ua(a)),r&&(n+=ua(r,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Je(e,t,n,a,r,i){var o=e[ta];if(R||o!==n||o===void 0){var s=No(n,a,i);(!R||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s)),e[ta]=n}else if(i&&r!==i)for(var c in i){var l=!!i[c];(r==null||l!==!!r[c])&&e.classList.toggle(c,l)}return i}function Vt(e,t={},n,a){for(var r in n){var i=n[r];t[r]!==i&&(n[r]==null?e.style.removeProperty(r):e.style.setProperty(r,i,a))}}function Mo(e,t,n,a){var r=e[na];if(R||r!==t){var i=Io(t,a);(!R||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e[na]=t}else a&&(Array.isArray(a)?(Vt(e,n==null?void 0:n[0],a[0]),Vt(e,n==null?void 0:n[1],a[1],"important")):Vt(e,n,a));return a}function on(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Xa(t))return Hi();for(var a of e.options)a.selected=t.includes(da(a));return}for(a of e.options){var r=da(a);if(Yi(r,t)){a.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Lo(e){var t=new MutationObserver(()=>{on(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Wi(()=>{t.disconnect()})}function da(e){return"__value"in e?e.__value:e.value}const qe=Symbol("class"),Qe=Symbol("style"),sr=Symbol("is custom element"),lr=Symbol("is html"),Fo=ot?"link":"LINK",zo=ot?"input":"INPUT",Do=ot?"option":"OPTION",Ro=ot?"select":"SELECT",jo=ot?"progress":"PROGRESS";function vt(e){if(R){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var a=e.value;be(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var r=e.checked;be(e,"checked",null),e.checked=r}}};e[Gi]=n,Sn(n),Vi()}}function Uo(e,t){var n=On(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==jo)||(e.value=t??"")}function Ho(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function be(e,t,n,a){var r=On(e);R&&(r[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Fo)||r[t]!==(r[t]=n)&&(t==="loading"&&(e[Bi]=n),n==null?e.removeAttribute(t):typeof n!="string"&&fr(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Yo(e,t,n,a,r=!1,i=!1){if(R&&r&&e.nodeName===zo){var o=e,s=o.type==="checkbox"?"defaultChecked":"defaultValue";s in n||vt(o)}var c=On(e),l=c[sr],f=!c[lr];let v=R&&l;v&&Te(!1);var u=t||{},y=e.nodeName===Do;for(var b in t)b in n||(n[b]=null);n.class?n.class=Po(n.class):n[qe]&&(n.class=null),n[Qe]&&(n.style??(n.style=null));var A=fr(e);for(const T in n){let k=n[T];if(y&&T==="value"&&k==null){e.value=e.__value="",u[T]=k;continue}if(T==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Je(e,m,k,a,t==null?void 0:t[qe],n[qe]),u[T]=k,u[qe]=n[qe];continue}if(T==="style"){Mo(e,k,t==null?void 0:t[Qe],n[Qe]),u[T]=k,u[Qe]=n[Qe];continue}var d=u[T];if(!(k===d&&!(k===void 0&&e.hasAttribute(T)))){u[T]=k;var P=T[0]+T[1];if(P!=="$$")if(P==="on"){const M={},z="$$"+T;let L=T.slice(2);var _=di(L);if(fi(L)&&(L=L.slice(0,-7),M.capture=!0),!_&&d){if(k!=null)continue;e.removeEventListener(L,u[z],M),u[z]=null}if(_)Q(L,e,k),Va([L]);else if(k!=null){let K=function(U){u[T].call(this,U)};u[z]=ci(L,e,K,M)}}else if(T==="style")be(e,T,k);else if(T==="autofocus")ar(e,!!k);else if(!l&&(T==="__value"||T==="value"&&k!=null))e.value=e.__value=k;else if(T==="selected"&&y)Ho(e,k);else{var S=T;f||(S=ui(S));var j=S==="defaultValue"||S==="defaultChecked";if(k==null&&!l&&!j)if(c[T]=null,S==="value"||S==="checked"){let M=e;const z=t===void 0;if(S==="value"){let L=M.defaultValue;M.removeAttribute(S),M.defaultValue=L,M.value=M.__value=z?L:null}else{let L=M.defaultChecked;M.removeAttribute(S),M.defaultChecked=L,M.checked=z?L:!1}}else e.removeAttribute(T);else j||A.includes(S)&&(l||typeof k!="string")?(e[S]=k,S in c&&(c[S]=Ji)):typeof k!="function"&&be(e,S,k)}}}return v&&Te(!0),u}function Wo(e,t,n=[],a=[],r=[],i,o=!1,s=!1){Qi(r,n,a,c=>{var l=void 0,f={},v=e.nodeName===Ro,u=!1;if(nr(()=>{var b=t(...c.map(x)),A=Yo(e,l,b,i,o,s);u&&v&&"value"in b&&on(e,b.value);for(let d of Object.getOwnPropertySymbols(f))b[d]||yt(f[d]);for(let d of Object.getOwnPropertySymbols(b)){var m=b[d];d.description===Zi&&(!l||m!==l[d])&&(f[d]&&yt(f[d]),f[d]=Ue(()=>To(e,()=>m))),A[d]=m}l=A}),v){var y=e;it(()=>{on(y,l.value,!0),Lo(y)})}u=!0})}function On(e){var t;return e[t=Ki]??(e[t]={[sr]:e.nodeName.includes("-"),[lr]:e.namespaceURI===Xi})}var ma=new Map;function fr(e){var t=e.getAttribute("is")||e.nodeName,n=ma.get(t);if(n)return n;ma.set(t,n=[]);for(var a,r=e,i=Element.prototype;i!==r;){a=qi(r);for(var o in a)a[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&n.push(o);r=$i(r)}return n}function ga(e,t,n=t){var a=new WeakSet;eo(e,"input",async r=>{var i=r?e.defaultValue:e.value;if(i=Bt(e)?Kt(i):i,n(i),De!==null&&a.add(De),await to(),i!==(i=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=i??"",s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(R&&e.defaultValue!==e.value||_t(t)==null&&e.value)&&(n(Bt(e)?Kt(e.value):e.value),De!==null&&a.add(De)),er(()=>{var r=t();if(e===document.activeElement){var i=De;if(a.has(i))return}Bt(e)&&r===Kt(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}function Bt(e){var t=e.type;return t==="number"||t==="range"}function Kt(e){return e===""?null:+e}function cr(e=!1){const t=no,n=t.l.u;if(!n)return;let a=()=>tr(t.s);if(e){let r=0,i={};const o=io(()=>{let s=!1;const c=t.s;for(const l in c)c[l]!==i[l]&&(i[l]=c[l],s=!0);return s&&r++,r});a=()=>x(o)}n.b.length&&ao(()=>{pa(t,a),aa(n.b)}),nn(()=>{const r=_t(()=>n.m.map(ro));return()=>{for(const i of r)typeof i=="function"&&i()}}),n.a.length&&nn(()=>{pa(t,a),aa(n.a)})}function pa(e,t){if(e.l.s)for(const n of e.l.s)x(n);t()}oo();function Go(e){const{beat:t,fade:n,beatFade:a,bounce:r,shake:i,flash:o,spin:s,spinPulse:c,spinReverse:l,pulse:f,fixedWidth:v,inverse:u,border:y,listItem:b,flip:A,size:m,rotation:d,pull:P}=e,_={"fa-beat":t,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":v,"fa-inverse":u,"fa-border":y,"fa-li":b,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both",[`fa-${m}`]:typeof m<"u"&&m!==null,[`fa-rotate-${d}`]:typeof d<"u"&&d!==null&&d!==0,[`fa-pull-${P}`]:typeof P<"u"&&P!==null,"fa-swap-opacity":e.swapOpacity};return Object.keys(_).map(S=>_[S]?S:null).filter(S=>S)}function Vo(e){return e=e-0,e===e}function Bo(e){return Vo(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}function Ko(e){return typeof e=="string"?e:Object.keys(e).reduce((t,n)=>t+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+e[n]+";","")}function ur(e,t,n={}){if(typeof t=="string")return t;const a=(t.children||[]).map(i=>ur(e,i)),r=Object.keys(t.attributes||{}).reduce((i,o)=>{const s=t.attributes[o];return o==="style"?i.attrs.style=Ko(s):o.indexOf("aria-")===0||o.indexOf("data-")===0?i.attrs[o.toLowerCase()]=s:i.attrs[Bo(o)]=s,i},{attrs:{}});return e(t.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Xo(e,t,n){return(t=qo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?va(Object(n),!0).forEach(function(a){Xo(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):va(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function $o(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qo(e){var t=$o(e,"string");return typeof t=="symbol"?t:t+""}const ha=()=>{};let Pn={},dr={},mr=null,gr={mark:ha,measure:ha};try{typeof window<"u"&&(Pn=window),typeof document<"u"&&(dr=document),typeof MutationObserver<"u"&&(mr=MutationObserver),typeof performance<"u"&&(gr=performance)}catch{}const{userAgent:ba=""}=Pn.navigator||{},ye=Pn,F=dr,ya=mr,mt=gr;ye.document;const le=!!F.documentElement&&!!F.head&&typeof F.addEventListener=="function"&&typeof F.createElement=="function",pr=~ba.indexOf("MSIE")||~ba.indexOf("Trident/");var Qo=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Zo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,vr={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Jo={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},hr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Y="classic",kt="duotone",es="sharp",ts="sharp-duotone",br=[Y,kt,es,ts],ns={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},as={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},rs=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),is={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},os=["fak","fa-kit","fakd","fa-kit-duotone"],xa={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ss=["kit"],ls={kit:{"fa-kit":"fak"}},fs=["fak","fakd"],cs={kit:{fak:"fa-kit"}},wa={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},us=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ds=["fak","fa-kit","fakd","fa-kit-duotone"],ms={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},gs={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ps={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},sn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},vs=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ln=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...us,...vs],hs=["solid","regular","light","thin","duotone","brands"],yr=[1,2,3,4,5,6,7,8,9,10],bs=yr.concat([11,12,13,14,15,16,17,18,19,20]),ys=[...Object.keys(ps),...hs,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY].concat(yr.map(e=>"".concat(e,"x"))).concat(bs.map(e=>"w-".concat(e))),xs={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const oe="___FONT_AWESOME___",fn=16,xr="fa",wr="svg-inline--fa",Oe="data-fa-i2svg",cn="data-fa-pseudo-element",ws="data-fa-pseudo-element-pending",Nn="data-prefix",In="data-icon",Aa="fontawesome-i2svg",As="async",_s=["HTML","HEAD","STYLE","SCRIPT"],Ar=(()=>{try{return!0}catch{return!1}})();function st(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[Y]}})}const _r=g({},vr);_r[Y]=g(g(g(g({},{"fa-duotone":"duotone"}),vr[Y]),xa.kit),xa["kit-duotone"]);const ks=st(_r),un=g({},is);un[Y]=g(g(g(g({},{duotone:"fad"}),un[Y]),wa.kit),wa["kit-duotone"]);const _a=st(un),dn=g({},sn);dn[Y]=g(g({},dn[Y]),cs.kit);const Mn=st(dn),mn=g({},gs);mn[Y]=g(g({},mn[Y]),ls.kit);st(mn);const Es=Qo,kr="fa-layers-text",Ss=Zo,Cs=g({},ns);st(Cs);const Ts=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xt=Jo,Os=[...ss,...ys],tt=ye.FontAwesomeConfig||{};function Ps(e){var t=F.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ns(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}F&&typeof F.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=Ns(Ps(n));r!=null&&(tt[a]=r)});const Er={styleDefault:"solid",familyDefault:Y,cssPrefix:xr,replacementClass:wr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);const He=g(g({},Er),tt);He.autoReplaceSvg||(He.observeMutations=!1);const w={};Object.keys(Er).forEach(e=>{Object.defineProperty(w,e,{enumerable:!0,set:function(t){He[e]=t,nt.forEach(n=>n(w))},get:function(){return He[e]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(e){He.cssPrefix=e,nt.forEach(t=>t(w))},get:function(){return He.cssPrefix}});ye.FontAwesomeConfig=w;const nt=[];function Is(e){return nt.push(e),()=>{nt.splice(nt.indexOf(e),1)}}const he=fn,te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ms(e){if(!e||!le)return;const t=F.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=F.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return F.head.insertBefore(t,a),e}const Ls="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function at(){let e=12,t="";for(;e-- >0;)t+=Ls[Math.random()*62|0];return t}function Ye(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ln(e){return e.classList?Ye(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Sr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fs(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Sr(e[n]),'" '),"").trim()}function Et(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Fn(e){return e.size!==te.size||e.x!==te.x||e.y!==te.y||e.rotate!==te.rotate||e.flipX||e.flipY}function zs(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:l}}function Ds(e){let{transform:t,width:n=fn,height:a=fn,startCentered:r=!1}=e,i="";return r&&pr?i+="translate(".concat(t.x/he-n/2,"em, ").concat(t.y/he-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(t.x/he,"em), calc(-50% + ").concat(t.y/he,"em)) "):i+="translate(".concat(t.x/he,"em, ").concat(t.y/he,"em) "),i+="scale(".concat(t.size/he*(t.flipX?-1:1),", ").concat(t.size/he*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var Rs=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
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

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
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
  z-index: var(--fa-stack-z-index, auto);
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
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Cr(){const e=xr,t=wr,n=w.cssPrefix,a=w.replacementClass;let r=Rs;if(n!==e||a!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let ka=!1;function $t(){w.autoAddCss&&!ka&&(Ms(Cr()),ka=!0)}var js={mixout(){return{dom:{css:Cr,insertCss:$t}}},hooks(){return{beforeDOMElementCreation(){$t()},beforeI2svg(){$t()}}}};const se=ye||{};se[oe]||(se[oe]={});se[oe].styles||(se[oe].styles={});se[oe].hooks||(se[oe].hooks={});se[oe].shims||(se[oe].shims=[]);var ne=se[oe];const Tr=[],Or=function(){F.removeEventListener("DOMContentLoaded",Or),wt=1,Tr.map(e=>e())};let wt=!1;le&&(wt=(F.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(F.readyState),wt||F.addEventListener("DOMContentLoaded",Or));function Us(e){le&&(wt?setTimeout(e,0):Tr.push(e))}function lt(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?Sr(e):"<".concat(t," ").concat(Fs(n),">").concat(a.map(lt).join(""),"</").concat(t,">")}function Ea(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var qt=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=n,c,l,f;for(a===void 0?(c=1,f=t[i[0]]):(c=0,f=a);c<o;c++)l=i[c],f=s(f,t[l],l,t);return f};function Hs(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function gn(e){const t=Hs(e);return t.length===1?t[0].toString(16):null}function Ys(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Sa(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function pn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Sa(t);typeof ne.hooks.addPack=="function"&&!a?ne.hooks.addPack(e,Sa(t)):ne.styles[e]=g(g({},ne.styles[e]||{}),r),e==="fas"&&pn("fa",t)}const{styles:rt,shims:Ws}=ne,Pr=Object.keys(Mn),Gs=Pr.reduce((e,t)=>(e[t]=Object.keys(Mn[t]),e),{});let zn=null,Nr={},Ir={},Mr={},Lr={},Fr={};function Vs(e){return~Os.indexOf(e)}function Bs(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Vs(r)?r:null}const zr=()=>{const e=a=>qt(rt,(r,i,o)=>(r[o]=qt(i,a,{}),r),{});Nr=e((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Ir=e((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),Fr=e((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const t="far"in rt||w.autoFetchSvg,n=qt(Ws,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});Mr=n.names,Lr=n.unicodes,zn=St(w.styleDefault,{family:w.familyDefault})};Is(e=>{zn=St(e.styleDefault,{family:w.familyDefault})});zr();function Dn(e,t){return(Nr[e]||{})[t]}function Ks(e,t){return(Ir[e]||{})[t]}function Se(e,t){return(Fr[e]||{})[t]}function Dr(e){return Mr[e]||{prefix:null,iconName:null}}function Xs(e){const t=Lr[e],n=Dn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xe(){return zn}const Rr=()=>({prefix:null,iconName:null,rest:[]});function $s(e){let t=Y;const n=Pr.reduce((a,r)=>(a[r]="".concat(w.cssPrefix,"-").concat(r),a),{});return br.forEach(a=>{(e.includes(n[a])||e.some(r=>Gs[a].includes(r)))&&(t=a)}),t}function St(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Y}=t,a=ks[n][e];if(n===kt&&!e)return"fad";const r=_a[n][e]||_a[n][a],i=e in ne.styles?e:null;return r||i||null}function qs(e){let t=[],n=null;return e.forEach(a=>{const r=Bs(w.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function Ca(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function Ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=ln.concat(ds),i=Ca(e.filter(v=>r.includes(v))),o=Ca(e.filter(v=>!ln.includes(v))),s=i.filter(v=>(a=v,!hr.includes(v))),[c=null]=s,l=$s(i),f=g(g({},qs(o)),{},{prefix:St(c,{family:l})});return g(g(g({},f),el({values:e,family:l,styles:rt,config:w,canonical:f,givenPrefix:a})),Qs(n,a,f))}function Qs(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const i=t==="fa"?Dr(r):{},o=Se(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!rt.far&&rt.fas&&!w.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Zs=br.filter(e=>e!==Y||e!==kt),Js=Object.keys(sn).filter(e=>e!==Y).map(e=>Object.keys(sn[e])).flat();function el(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=e,s=n===kt,c=t.includes("fa-duotone")||t.includes("fad"),l=o.familyDefault==="duotone",f=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(c||l||f)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Zs.includes(n)&&(Object.keys(i).find(u=>Js.includes(u))||o.autoFetchSvg)){const u=rs.get(n).defaultShortPrefixId;a.prefix=u,a.iconName=Se(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=xe()||"fas"),a}class tl{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=g(g({},this.definitions[i]||{}),r[i]),pn(i,r[i]);const o=Mn[Y][i];o&&pn(o,r[i]),zr()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],c=s[2];t[i]||(t[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(t[i][l]=s)}),t[i][o]=s}),t}}let Ta=[],Re={};const je={},nl=Object.keys(je);function al(e,t){let{mixoutsTo:n}=t;return Ta=e,Re={},Object.keys(je).forEach(a=>{nl.indexOf(a)===-1&&delete je[a]}),Ta.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{Re[o]||(Re[o]=[]),Re[o].push(i[o])})}a.provides&&a.provides(je)}),n}function vn(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Re[e]||[]).forEach(o=>{t=o.apply(null,[t,...a])}),t}function Pe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(Re[e]||[]).forEach(i=>{i.apply(null,n)})}function we(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return je[e]?je[e].apply(null,t):void 0}function hn(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||xe();if(t)return t=Se(n,t)||t,Ea(jr.definitions,n,t)||Ea(ne.styles,n,t)}const jr=new tl,rl=()=>{w.autoReplaceSvg=!1,w.observeMutations=!1,Pe("noAuto")},il={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return le?(Pe("beforeI2svg",e),we("pseudoElements2svg",e),we("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,Us(()=>{sl({autoReplaceSvgRoot:t}),Pe("watch",e)})}},ol={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Se(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=St(e[0]);return{prefix:n,iconName:Se(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(w.cssPrefix,"-"))>-1||e.match(Es))){const t=Ct(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||xe(),iconName:Se(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=xe();return{prefix:t,iconName:Se(t,e)||e}}}},B={noAuto:rl,config:w,dom:il,parse:ol,library:jr,findIconDefinition:hn,toHtml:lt},sl=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=F}=e;(Object.keys(ne.styles).length>0||w.autoFetchSvg)&&le&&w.autoReplaceSvg&&B.dom.i2svg({node:t})};function Tt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>lt(n))}}),Object.defineProperty(e,"node",{get:function(){if(!le)return;const n=F.createElement("div");return n.innerHTML=e.html,n.children}}),e}function ll(e){let{children:t,main:n,mask:a,attributes:r,styles:i,transform:o}=e;if(Fn(o)&&n.found&&!a.found){const{width:s,height:c}=n,l={x:s/c/2,y:.5};r.style=Et(g(g({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function fl(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(w.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},r),{},{id:o}),children:a}]}]}function Rn(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:c,titleId:l,extra:f,watchable:v=!1}=e,{width:u,height:y}=n.found?n:t,b=fs.includes(a),A=[w.replacementClass,r?"".concat(w.cssPrefix,"-").concat(r):""].filter(j=>f.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(f.classes).join(" ");let m={children:[],attributes:g(g({},f.attributes),{},{"data-prefix":a,"data-icon":r,class:A,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(y)})};const d=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(u/y*16*.0625,"em")}:{};v&&(m.attributes[Oe]=""),s&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(l||at())},children:[s]}),delete m.attributes.title);const P=g(g({},m),{},{prefix:a,iconName:r,main:t,mask:n,maskId:c,transform:i,symbol:o,styles:g(g({},d),f.styles)}),{children:_,attributes:S}=n.found&&t.found?we("generateAbstractMask",P)||{children:[],attributes:{}}:we("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=_,P.attributes=S,o?fl(P):ll(P)}function Oa(e){const{content:t,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=e,c=g(g(g({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(c[Oe]="");const l=g({},o.styles);Fn(r)&&(l.transform=Ds({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const f=Et(l);f.length>0&&(c.style=f);const v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function cl(e){const{content:t,title:n,extra:a}=e,r=g(g(g({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Et(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Qt}=ne;function bn(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(Xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(Xt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(Xt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const ul={found:!1,width:512,height:512};function dl(e,t){!Ar&&!w.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function yn(e,t){let n=t;return t==="fa"&&w.styleDefault!==null&&(t=xe()),new Promise((a,r)=>{if(n==="fa"){const i=Dr(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Qt[t]&&Qt[t][e]){const i=Qt[t][e];return a(bn(i))}dl(e,t),a(g(g({},ul),{},{icon:w.showMissingIcons&&e?we("missingIconAbstract")||{}:{}}))})}const Pa=()=>{},xn=w.measurePerformance&&mt&&mt.mark&&mt.measure?mt:{mark:Pa,measure:Pa},et='FA "6.7.2"',ml=e=>(xn.mark("".concat(et," ").concat(e," begins")),()=>Ur(e)),Ur=e=>{xn.mark("".concat(et," ").concat(e," ends")),xn.measure("".concat(et," ").concat(e),"".concat(et," ").concat(e," begins"),"".concat(et," ").concat(e," ends"))};var jn={begin:ml,end:Ur};const ht=()=>{};function Na(e){return typeof(e.getAttribute?e.getAttribute(Oe):null)=="string"}function gl(e){const t=e.getAttribute?e.getAttribute(Nn):null,n=e.getAttribute?e.getAttribute(In):null;return t&&n}function pl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(w.replacementClass)}function vl(){return w.autoReplaceSvg===!0?bt.replace:bt[w.autoReplaceSvg]||bt.replace}function hl(e){return F.createElementNS("http://www.w3.org/2000/svg",e)}function bl(e){return F.createElement(e)}function Hr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?hl:bl}=t;if(typeof e=="string")return F.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){a.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){a.appendChild(Hr(i,{ceFn:n}))}),a}function yl(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const bt={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Hr(n),t)}),t.getAttribute(Oe)===null&&w.keepOriginalSource){let n=F.createComment(yl(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Ln(t).indexOf(w.replacementClass))return bt.replace(e);const a=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===w.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>lt(i)).join(`
`);t.setAttribute(Oe,""),t.innerHTML=r}};function Ia(e){e()}function Yr(e,t){const n=typeof t=="function"?t:ht;if(e.length===0)n();else{let a=Ia;w.mutateApproach===As&&(a=ye.requestAnimationFrame||Ia),a(()=>{const r=vl(),i=jn.begin("mutate");e.map(r),i(),n()})}}let Un=!1;function Wr(){Un=!0}function wn(){Un=!1}let At=null;function Ma(e){if(!ya||!w.observeMutations)return;const{treeCallback:t=ht,nodeCallback:n=ht,pseudoElementsCallback:a=ht,observeMutationsRoot:r=F}=e;At=new ya(i=>{if(Un)return;const o=xe();Ye(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Na(s.addedNodes[0])&&(w.searchPseudoElements&&a(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&w.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Na(s.target)&&~Ts.indexOf(s.attributeName))if(s.attributeName==="class"&&gl(s.target)){const{prefix:c,iconName:l}=Ct(Ln(s.target));s.target.setAttribute(Nn,c||o),l&&s.target.setAttribute(In,l)}else pl(s.target)&&n(s.target)})}),le&&At.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function xl(){At&&At.disconnect()}function wl(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Al(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=Ct(Ln(e));return r.prefix||(r.prefix=xe()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ks(r.prefix,e.innerText)||Dn(r.prefix,gn(e.innerText))),!r.iconName&&w.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function _l(e){const t=Ye(e.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return w.autoA11y&&(n?t["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(a||at()):(t["aria-hidden"]="true",t.focusable="false")),t}function kl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function La(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Al(e),i=_l(e),o=vn("parseNodeAttributes",{},e);let s=t.styleParser?wl(e):[];return g({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:El}=ne;function Gr(e){const t=w.autoReplaceSvg==="nest"?La(e,{styleParser:!1}):La(e);return~t.extra.classes.indexOf(kr)?we("generateLayersText",e,t):we("generateSvgReplacementMutation",e,t)}function Sl(){return[...os,...ln]}function Fa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!le)return Promise.resolve();const n=F.documentElement.classList,a=f=>n.add("".concat(Aa,"-").concat(f)),r=f=>n.remove("".concat(Aa,"-").concat(f)),i=w.autoFetchSvg?Sl():hr.concat(Object.keys(El));i.includes("fa")||i.push("fa");const o=[".".concat(kr,":not([").concat(Oe,"])")].concat(i.map(f=>".".concat(f,":not([").concat(Oe,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=Ye(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const c=jn.begin("onTree"),l=s.reduce((f,v)=>{try{const u=Gr(v);u&&f.push(u)}catch(u){Ar||u.name==="MissingIcon"&&console.error(u)}return f},[]);return new Promise((f,v)=>{Promise.all(l).then(u=>{Yr(u,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),c(),f()})}).catch(u=>{c(),v(u)})})}function Cl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gr(e).then(n=>{n&&Yr([n],t)})}function Tl(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:hn(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:hn(r||{})),e(a,g(g({},n),{},{mask:r}))}}const Ol=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=te,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:f={}}=t;if(!e)return;const{prefix:v,iconName:u,icon:y}=e;return Tt(g({type:"icon"},e),()=>(Pe("beforeDOMElementCreation",{iconDefinition:e,params:t}),w.autoA11y&&(o?l["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(s||at()):(l["aria-hidden"]="true",l.focusable="false")),Rn({icons:{main:bn(y),mask:r?bn(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:u,transform:g(g({},te),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:f,classes:c}})))};var Pl={mixout(){return{icon:Tl(Ol)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Fa,e.nodeCallback=Cl,e}}},provides(e){e.i2svg=function(t){const{node:n=F,callback:a=()=>{}}=t;return Fa(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:c,mask:l,maskId:f,extra:v}=n;return new Promise((u,y)=>{Promise.all([yn(a,o),l.iconName?yn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[A,m]=b;u([t,Rn({icons:{main:A,mask:m},prefix:o,iconName:a,transform:s,symbol:c,maskId:f,title:r,titleId:i,extra:v,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:i,styles:o}=t;const s=Et(o);s.length>0&&(a.style=s);let c;return Fn(i)&&(c=we("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Nl={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Tt({type:"layer"},()=>{Pe("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Il={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=t;return Tt({type:"counter",content:e},()=>(Pe("beforeDOMElementCreation",{content:e,params:t}),cl({content:e.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(w.cssPrefix,"-layers-counter"),...a]}})))}}}},Ml={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=te,title:a=null,classes:r=[],attributes:i={},styles:o={}}=t;return Tt({type:"text",content:e},()=>(Pe("beforeDOMElementCreation",{content:e,params:t}),Oa({content:e,transform:g(g({},te),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(w.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(pr){const c=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/c,s=l.height/c}return w.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Oa({content:t.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const Ll=new RegExp('"',"ug"),za=[1105920,1112319],Da=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),as),xs),ms),An=Object.keys(Da).reduce((e,t)=>(e[t.toLowerCase()]=Da[t],e),{}),Fl=Object.keys(An).reduce((e,t)=>{const n=An[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function zl(e){const t=e.replace(Ll,""),n=Ys(t,0),a=n>=za[0]&&n<=za[1],r=t.length===2?t[0]===t[1]:!1;return{value:gn(r?t[0]:t),isSecondary:a||r}}function Dl(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(An[n]||{})[r]||Fl[n]}function Ra(e,t){const n="".concat(ws).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const o=Ye(e.children).filter(u=>u.getAttribute(cn)===t)[0],s=ye.getComputedStyle(e,t),c=s.getPropertyValue("font-family"),l=c.match(Ss),f=s.getPropertyValue("font-weight"),v=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&v!=="none"&&v!==""){const u=s.getPropertyValue("content");let y=Dl(c,f);const{value:b,isSecondary:A}=zl(u),m=l[0].startsWith("FontAwesome");let d=Dn(y,b),P=d;if(m){const _=Xs(b);_.iconName&&_.prefix&&(d=_.iconName,y=_.prefix)}if(d&&!A&&(!o||o.getAttribute(Nn)!==y||o.getAttribute(In)!==P)){e.setAttribute(n,P),o&&e.removeChild(o);const _=kl(),{extra:S}=_;S.attributes[cn]=t,yn(d,y).then(j=>{const T=Rn(g(g({},_),{},{icons:{main:j,mask:Rr()},prefix:y,iconName:P,extra:S,watchable:!0})),k=F.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(k,e.firstChild):e.appendChild(k),k.outerHTML=T.map(M=>lt(M)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Rl(e){return Promise.all([Ra(e,"::before"),Ra(e,"::after")])}function jl(e){return e.parentNode!==document.head&&!~_s.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(cn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ja(e){if(le)return new Promise((t,n)=>{const a=Ye(e.querySelectorAll("*")).filter(jl).map(Rl),r=jn.begin("searchPseudoElements");Wr(),Promise.all(a).then(()=>{r(),wn(),t()}).catch(()=>{r(),wn(),n()})})}var Ul={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=ja,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=F}=t;w.searchPseudoElements&&ja(n)}}};let Ua=!1;var Hl={mixout(){return{dom:{unwatch(){Wr(),Ua=!0}}}},hooks(){return{bootstrap(){Ma(vn("mutationObserverCallbacks",{}))},noAuto(){xl()},watch(e){const{observeMutationsRoot:t}=e;Ua?wn():Ma(vn("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Ha=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var Yl={mixout(){return{parse:{transform:e=>Ha(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Ha(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:i}=t;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(c," ").concat(l)},v={transform:"translate(".concat(i/2*-1," -256)")},u={outer:o,inner:f,path:v};return{tag:"g",attributes:g({},u.outer),children:[{tag:"g",attributes:g({},u.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:g(g({},n.icon.attributes),u.path)}]}]}}}};const Zt={x:0,y:0,width:"100%",height:"100%"};function Ya(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Wl(e){return e.tag==="g"?e.children:[e]}var Gl={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?Ct(n.split(" ").map(r=>r.trim())):Rr();return a.prefix||(a.prefix=xe()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=t;const{width:c,icon:l}=r,{width:f,icon:v}=i,u=zs({transform:s,containerWidth:f,iconWidth:c}),y={tag:"rect",attributes:g(g({},Zt),{},{fill:"white"})},b=l.children?{children:l.children.map(Ya)}:{},A={tag:"g",attributes:g({},u.inner),children:[Ya(g({tag:l.tag,attributes:g(g({},l.attributes),u.path)},b))]},m={tag:"g",attributes:g({},u.outer),children:[A]},d="mask-".concat(o||at()),P="clip-".concat(o||at()),_={tag:"mask",attributes:g(g({},Zt),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Wl(v)},_]};return n.push(S,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(d,")")},Zt)}),{children:n,attributes:a}}}},Vl={provides(e){let t=!1;ye.matchMedia&&(t=ye.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:g(g({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=g(g({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:g(g({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:g(g({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:g(g({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:g(g({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:g(g({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Bl={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Kl=[js,Pl,Nl,Il,Ml,Ul,Hl,Yl,Gl,Vl,Bl];al(Kl,{mixoutsTo:B});B.noAuto;B.config;B.library;B.dom;const _n=B.parse;B.findIconDefinition;B.toHtml;const Xl=B.icon;B.layer;B.text;B.counter;let Vr=!1;try{Vr=!0}catch{}function $l(...e){!Vr&&console&&typeof console.error=="function"&&console.error(...e)}function Wa(e){if(e&&typeof e=="object"&&e.prefix&&e.iconName&&e.icon)return e;if(_n.icon)return _n.icon(e);if(e===null)return null;if(e&&typeof e=="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Jt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?{[e]:t}:{}}var ql=so("<svg></svg>");function Ql(e,t){var y;Cn(t,!1);let n=I(t,"tag",8),a=I(t,"props",8),r=I(t,"children",8),i=I(t,"style",8,null),o=I(t,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function s(b){return(b==null?void 0:b.reduce((A,m)=>A+(m.tag?c(m):m),""))||""}function c({tag:b,props:A,children:m}){const d=Object.keys(A).map(P=>`${P}="${A[P]}"`).join(" ");return`<${b} ${d}>${s(m)}</${b}>`}const l=s(r()),f=(y=a())!=null&&y.style?`${a().style}${i()||""}`:i(),v={...a(),style:f};cr();var u=ql();Wo(u,()=>({...v})),Ao(u,()=>l,!0),C(u),uo(u,b=>o(b),()=>o()),$(e,u),Tn()}function q(e,t){const n=ra(t,["children","$$slots","$$events","$$legacy"]),a=ra(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);Cn(t,!1),I(t,"border",8,!1);let r=I(t,"mask",8,null),i=I(t,"maskId",8,null);I(t,"fixedWidth",8,!1),I(t,"inverse",8,!1),I(t,"flip",8,!1);let o=I(t,"icon",8,null);I(t,"listItem",8,!1),I(t,"pull",8,null),I(t,"pulse",8,!1),I(t,"rotation",8,null),I(t,"size",8,null),I(t,"spin",8,!1),I(t,"spinPulse",8,!1),I(t,"spinReverse",8,!1),I(t,"beat",8,!1),I(t,"fade",8,!1),I(t,"beatFade",8,!1),I(t,"bounce",8,!1),I(t,"shake",8,!1);let s=I(t,"symbol",8,!1),c=I(t,"title",8,""),l=I(t,"titleId",8,null),f=I(t,"transform",8,null);I(t,"swapOpacity",8,!1);let v=I(t,"ref",12,null),u=I(t,"style",8,null);const y=Wa(o()),b=Jt("classes",[...Go(n),...(n.class||"").split(" ")]),A=Jt("transform",typeof f()=="string"?_n.transform(f()):f()),m=Jt("mask",Wa(r())),d=Xl(y,{...b,...A,...m,symbol:s(),title:c(),titleId:l(),maskId:i()});let P=$a(null);if(!d)$l("Could not find icon",y);else{const{abstract:T}=d;H(P,ur((k,M,z)=>({tag:k,props:M,children:z}),T[0],a))}cr();var _=lo(),S=rr(_);{var j=T=>{Ql(T,mo(()=>x(P),{get style(){return u()},get ref(){return v()},set ref(k){v(k)},$$legacy:!0}))};_e(S,T=>{x(P)&&T(j)})}$(e,_),Tn()}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Zl={prefix:"fas",iconName:"folder-open",icon:[576,512,[128194,128449,61717],"f07c","M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"]},Jl={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},ef={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},tf={prefix:"fas",iconName:"upload",icon:[512,512,[],"f093","M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},nf={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},af={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"]},rf={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},of={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ga=of,sf={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},lf={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},ff={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},cf={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};function uf(e){const t=JSON.parse(e);return t.data&&(t.data=ho(t.data,bo.decoders)),t}function en(e){return HTMLElement.prototype.cloneNode.call(e)}function ze(e,t=go){const n=async({action:r,result:i,reset:o=!0,invalidateAll:s=!0})=>{i.type==="success"&&(o&&HTMLFormElement.prototype.reset.call(e),s&&await po()),(location.origin+location.pathname===r.origin+r.pathname||i.type==="redirect"||i.type==="error")&&await vo(i)};async function a(r){var b,A,m;if(((b=r.submitter)!=null&&b.hasAttribute("formmethod")?r.submitter.formMethod:en(e).method)!=="post")return;r.preventDefault();const o=new URL((A=r.submitter)!=null&&A.hasAttribute("formaction")?r.submitter.formAction:en(e).action),s=(m=r.submitter)!=null&&m.hasAttribute("formenctype")?r.submitter.formEnctype:en(e).enctype,c=new FormData(e,r.submitter),l=new AbortController;let f=!1;const u=await t({action:o,cancel:()=>f=!0,controller:l,formData:c,formElement:e,submitter:r.submitter})??n;if(f)return;let y;try{const d=new Headers({accept:"application/json","x-sveltekit-action":"true"});s!=="multipart/form-data"&&d.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(s)?s:"application/x-www-form-urlencoded");const P=s==="multipart/form-data"?c:new URLSearchParams(c),_=await fetch(o,{method:"POST",headers:d,cache:"no-store",body:P,signal:l.signal});y=uf(await _.text()),y.type==="error"&&(y.status=_.status)}catch(d){if((d==null?void 0:d.name)==="AbortError")return;y={type:"error",error:d}}await u({action:o,formData:c,formElement:e,update:d=>n({action:o,result:y,reset:d==null?void 0:d.reset,invalidateAll:d==null?void 0:d.invalidateAll}),result:y})}return HTMLFormElement.prototype.addEventListener.call(e,"submit",a),{destroy(){HTMLFormElement.prototype.removeEventListener.call(e,"submit",a)}}}const df=e=>e;function mf(e){const t=e-1;return t*t*t+1}function gf(e,{delay:t=0,duration:n=400,easing:a=df}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:a,css:i=>`opacity: ${i*r}`}}function pf(e,{delay:t=0,duration:n=400,easing:a=mf,axis:r="y"}={}){const i=getComputedStyle(e),o=+i.opacity,s=r==="y"?"height":"width",c=parseFloat(i[s]),l=r==="y"?["top","bottom"]:["left","right"],f=l.map(d=>`${d[0].toUpperCase()}${d.slice(1)}`),v=parseFloat(i[`padding${f[0]}`]),u=parseFloat(i[`padding${f[1]}`]),y=parseFloat(i[`margin${f[0]}`]),b=parseFloat(i[`margin${f[1]}`]),A=parseFloat(i[`border${f[0]}Width`]),m=parseFloat(i[`border${f[1]}Width`]);return{delay:t,duration:n,easing:a,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*o};${s}: ${d*c}px;padding-${l[0]}: ${d*v}px;padding-${l[1]}: ${d*u}px;margin-${l[0]}: ${d*y}px;margin-${l[1]}: ${d*b}px;border-${l[0]}-width: ${d*A}px;border-${l[1]}-width: ${d*m}px;min-${s}: 0`}}var vf=ae('<div class="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-lg flex items-center gap-3 border border-border text-sm font-medium"><!> </div>'),hf=ae("<button> </button>"),bf=ae("<button> </button>"),yf=ae('<div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1"><span class="text-xs text-muted-foreground font-medium uppercase tracking-wider mr-2">Ext:</span> <button>All</button> <!></div>'),xf=ae('<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10" loading="lazy"/>'),wf=ae('<button class="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-medium py-1.5 rounded transition-colors shadow-sm"><!> HTML</button>'),Af=ae('<article class="group flex flex-col bg-card border border-border rounded-lg hover:border-ring/50 hover:shadow-md transition-all duration-300 relative overflow-hidden"><div class="aspect-square bg-secondary/30 relative flex items-center justify-center border-b border-border overflow-hidden"><div class="absolute inset-0 opacity-[0.05] dark:opacity-[0.02]" style="background-image: linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%); background-size: 10px 10px; background-position: 0 0, 0 5px, 5px -5px, -5px 0px;"></div> <!> <div class="absolute top-2 right-2 z-20 bg-background/80 backdrop-blur px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider text-foreground uppercase border border-border shadow-sm"> </div> <div class="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 flex flex-col items-center justify-center gap-2 p-4 backdrop-blur-sm"><button class="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-medium py-1.5 rounded transition-colors shadow-sm"><!> URL</button> <!> <button class="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-medium py-1.5 rounded transition-colors shadow-sm mt-1"><!> Move</button></div></div> <div class="p-3 flex flex-col flex-grow justify-between gap-3"><div><div class="text-[10px] text-muted-foreground font-mono truncate mb-0.5"> </div> <h3 class="text-sm font-medium text-foreground line-clamp-1"> </h3></div> <div class="flex items-center justify-between text-[10px] text-muted-foreground font-medium pt-2 border-t border-border/50"><span title="Size"> </span> <span title="Date"> </span></div></div></article>'),_f=ae('<div class="col-span-full py-20 text-center"><!> <p class="text-muted-foreground text-sm font-medium">No assets found.</p></div>'),kf=ae('<div class="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"><form method="POST" action="?/rename" class="bg-card border border-border p-6 rounded-lg shadow-xl max-w-lg w-full relative"><h3 class="text-lg font-medium mb-5">Move / Rename Asset</h3> <input type="hidden" name="oldKey"/> <div class="space-y-4"><div><label class="text-xs text-muted-foreground block mb-1 uppercase tracking-wider font-medium">Current S3 Key</label> <div class="text-sm font-mono bg-secondary/50 p-2.5 rounded border border-border text-muted-foreground break-all"> </div></div> <div><label class="text-xs text-foreground block mb-1 uppercase tracking-wider font-medium">New Target Path & Filename</label> <div class="relative"><input type="text" name="newKey" class="w-full bg-background border border-border rounded p-2.5 text-sm font-mono focus:ring-2 focus:ring-ring outline-none transition-shadow"/></div> <p class="text-[10px] text-muted-foreground mt-2">Example: Change <code>mailers/image.jpg</code> to <code>mailers/2024/new_image.jpg</code> to move it to a new folder.</p></div></div> <div class="mt-8 flex justify-end gap-3 border-t border-border pt-4"><button type="button" class="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary rounded transition-colors">Cancel</button> <button type="submit" class="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity shadow-sm">Save Changes</button></div></form></div>'),Ef=ae('<!> <main class="min-h-screen pb-24"><header class="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-40"><div class="max-w-[1600px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4"><div class="flex items-center gap-4"><div><h1 class="text-xl font-semibold tracking-tight">Media Vault</h1> <p class="text-muted-foreground text-[10px] uppercase tracking-wider font-medium">Sovereign CDN Manager</p></div></div> <div class="flex-1 w-full max-w-md mx-8 relative hidden md:block"><!> <input type="text" placeholder="Search by prefix or filename..." class="w-full bg-secondary/50 border border-border rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all"/></div> <div class="flex items-center gap-4"><div class="text-right hidden lg:block"><div class="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Edge Network</div> <div class="text-xs font-mono bg-secondary px-2 py-1 rounded text-foreground">media.crackinglanguage.com</div></div> <button class="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground" aria-label="Toggle Theme"><!></button></div></div></header> <div class="max-w-[1600px] mx-auto px-6 mt-8"><section class="mb-12"><form method="POST" action="?/upload" enctype="multipart/form-data"><input id="file-upload" type="file" name="file" multiple="" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"/> <div class="relative z-20 text-center space-y-4 pointer-events-none"><div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-muted-foreground group-hover:text-foreground group-hover:bg-accent transition-colors duration-300"><!></div> <div><h3 class="text-base font-medium"> </h3> <p class="text-sm text-muted-foreground mt-1">or click to browse</p></div></div> <div class="relative z-30 mt-6"><div class="flex items-center gap-2 bg-background border border-border rounded-md px-3 py-1.5 focus-within:ring-2 focus-within:ring-ring transition-shadow"><!> <input type="text" name="prefix" placeholder="Target Prefix (e.g. mailers/)" class="bg-transparent border-none outline-none text-sm w-48 font-mono"/></div></div></form></section> <div class="sticky top-[73px] z-30 bg-background/95 backdrop-blur pt-2 pb-4 mb-6 border-b border-border"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><nav class="flex space-x-1 bg-secondary/50 p-1 rounded-lg self-start"></nav> <!></div></div> <section><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"><!> <!></div></section></div></main> <!>',1);function Nf(e,t){Cn(t,!0);let n=ge(""),a=ge(!1),r=ge(!1),i=ge(fo({show:!1,message:"",type:"success"})),o=ge(!0),s=ge(null),c=ge("All"),l=ge(null);nn(()=>{x(c),H(l,null)}),mi(()=>{H(o,document.documentElement.classList.contains("dark"),!0)});function f(){H(o,!x(o)),x(o)?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))}const v={Images:["jpg","jpeg","png","gif","webp","svg"],Videos:["mp4","webm","ogg","mov","ts","m3u8","avi","mkv"],Documents:["pdf","doc","docx","xls","xlsx","txt","csv","md"]};function u(p){const h=p.toLowerCase();return v.Images.includes(h)?"Images":v.Videos.includes(h)?"Videos":v.Documents.includes(h)?"Documents":"Other"}function y(p,h=1){if(!+p)return"0 B";const E=1024,D=h<0?0:h,W=["B","KB","MB","GB","TB"],G=Math.floor(Math.log(p)/Math.log(E));return`${parseFloat((p/Math.pow(E,G)).toFixed(D))} ${W[G]}`}function b(p){if(!p)return"Unknown";const h=new Date(p);return new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"short",year:"numeric"}).format(h)}function A(p){var G;const h=p.split("/"),E=h.pop()||p,D=h.length>0?h.join("/")+"/":"/",W=((G=E.split(".").pop())==null?void 0:G.toLowerCase())||"file";return{filename:E,path:D,extension:W}}function m(p){return`<img src="${p}" alt="" style="display:block; width:100%; max-width:600px; height:auto;">`}function d(p){H(i,{show:!0,message:p,type:"success"},!0),setTimeout(()=>{x(i).message===p&&(x(i).show=!1)},3e3)}function P(p,h){navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(p).then(()=>d(`${h} copied`)).catch(()=>_(p,h)):_(p,h)}function _(p,h){try{const E=document.createElement("textarea");E.value=p,E.style.position="fixed",E.style.left="-9999px",E.style.top="0",document.body.appendChild(E),E.focus(),E.select();const D=document.execCommand("copy");if(document.body.removeChild(E),D)d(`${h} copied (Legacy)`);else throw new Error("Copy command failed")}catch(E){console.error("Fallback copy failed:",E),d(`Failed to copy ${h}`),window.prompt("Copy to clipboard: Ctrl+C, Enter",p)}}function S(p,h){p.preventDefault(),p.stopPropagation(),H(r,h,!0)}function j(p){var h,E,D;if(p.preventDefault(),p.stopPropagation(),H(r,!1),(E=(h=p.dataTransfer)==null?void 0:h.files)!=null&&E.length){const W=document.getElementById("file-upload");W.files=p.dataTransfer.files,(D=W.form)==null||D.requestSubmit()}}const T=Fe(()=>t.data.assets.map(p=>{const h=A(p.key);return{...p,...h,category:u(h.extension),formattedSize:y(p.size||0),formattedDate:b(p.lastModified)}})),k=Fe(()=>x(T).filter(p=>{const h=p.key.toLowerCase().includes(x(n).toLowerCase()),E=x(c)==="All"||p.category===x(c);return h&&E})),M=Fe(()=>[...new Set(x(k).map(p=>p.extension))].sort()),z=Fe(()=>x(k).filter(p=>!x(l)||p.extension===x(l)).sort((p,h)=>new Date(h.lastModified).getTime()-new Date(p.lastModified).getTime()));var L=Ef();Co("1uha8ag",p=>{it(()=>{co.title="Media Vault | Sovereign CDN"})});var K=rr(L);{var U=p=>{var h=vf(),E=O(h);q(E,{get icon(){return cf},class:"text-green-500"});var D=N(E);C(h),re(()=>J(D,` ${x(i).message??""}`)),la(3,h,()=>pf,()=>({duration:200})),$(p,h)};_e(K,p=>{x(i).show&&p(U)})}var fe=N(K,2),ce=O(fe),We=O(ce),Ne=N(O(We),2),Ge=O(Ne);q(Ge,{get icon(){return Ga},class:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm"});var Ve=N(Ge,2);vt(Ve),C(Ne);var X=N(Ne,2),Ie=N(O(X),2),Br=O(Ie);{let p=Fe(()=>x(o)?nf:ff);q(Br,{get icon(){return x(p)}})}C(Ie),C(X),C(We),C(ce);var Hn=N(ce,2),Ot=O(Hn),ue=O(Ot),Pt=O(ue),Nt=N(Pt,2),It=O(Nt),Kr=O(It);{let p=Fe(()=>x(a)?lf:tf);q(Kr,{get icon(){return x(p)},get spin(){return x(a)},class:"text-2xl"})}C(It);var Yn=N(It,2),Wn=O(Yn),Xr=O(Wn,!0);C(Wn),pe(2),C(Yn),C(Nt);var Mt=N(Nt,2),Gn=O(Mt),$r=O(Gn);q($r,{get icon(){return Zl},class:"text-muted-foreground text-sm"}),pe(2),C(Gn),C(Mt),C(ue),fa(ue,(p,h)=>ze==null?void 0:ze(p,h),()=>()=>(H(a,!0),async({update:p,result:h})=>{var E;H(a,!1),h.type==="success"?d(`Successfully uploaded ${((E=h.data)==null?void 0:E.count)||1} asset(s)`):d("Upload failed"),p()})),C(Ot);var Lt=N(Ot,2),Vn=O(Lt),Ft=O(Vn);Wt(Ft,20,()=>["All","Images","Videos","Documents","Other"],ia,(p,h)=>{var E=hf(),D=O(E,!0);C(E),re(()=>{Je(E,1,`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${x(c)===h?"bg-background text-foreground shadow-sm":"text-muted-foreground hover:text-foreground hover:bg-background/50"}`),J(D,h)}),Q("click",E,()=>H(c,h,!0)),$(p,E)}),C(Ft);var qr=N(Ft,2);{var Qr=p=>{var h=yf(),E=N(O(h),2),D=N(E,2);Wt(D,17,()=>x(M),ia,(W,G)=>{var Z=bf(),Be=O(Z,!0);C(Z),re(()=>{Je(Z,1,`px-2.5 py-1 text-xs uppercase rounded-full border transition-colors ${x(l)===x(G)?"bg-primary text-primary-foreground border-primary":"bg-transparent border-border text-muted-foreground hover:border-foreground"}`),J(Be,x(G))}),Q("click",Z,()=>H(l,x(G),!0)),$(W,Z)}),C(h),re(()=>Je(E,1,`px-2.5 py-1 text-xs rounded-full border transition-colors ${x(l)===null?"bg-primary text-primary-foreground border-primary":"bg-transparent border-border text-muted-foreground hover:border-foreground"}`)),Q("click",E,()=>H(l,null)),$(p,h)};_e(qr,p=>{x(M).length>0&&p(Qr)})}C(Vn),C(Lt);var Bn=N(Lt,2),Kn=O(Bn),Xn=O(Kn);Wt(Xn,17,()=>x(z),p=>p.key,(p,h)=>{var E=Af(),D=O(E),W=N(O(D),2);{var G=V=>{var me=xf();re(()=>{be(me,"src",x(h).url),be(me,"alt",x(h).filename)}),$(V,me)},Z=V=>{q(V,{get icon(){return rf},class:"text-3xl text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-300 relative z-10"})},Be=V=>{q(V,{get icon(){return af},class:"text-3xl text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-300 relative z-10"})};_e(W,V=>{x(h).category==="Images"?V(G):x(h).category==="Videos"?V(Z,1):V(Be,-1)})}var Me=N(W,2),ft=O(Me,!0);C(Me);var Le=N(Me,2),Ae=O(Le),zt=O(Ae);q(zt,{get icon(){return sf},class:"mr-1.5"}),pe(),C(Ae);var de=N(Ae,2);{var Ke=V=>{var me=wf(),si=O(me);q(si,{get icon(){return Jl},class:"mr-1.5"}),pe(),C(me),Q("click",me,()=>P(m(x(h).url),"HTML")),$(V,me)};_e(de,V=>{x(h).category==="Images"&&V(Ke)})}var Dt=N(de,2),ni=O(Dt);q(ni,{get icon(){return ef},class:"mr-1.5"}),pe(),C(Dt),C(Le),C(D);var $n=N(D,2),Rt=O($n),ct=O(Rt),ai=O(ct,!0);C(ct);var jt=N(ct,2),ri=O(jt,!0);C(jt),C(Rt);var qn=N(Rt,2),Ut=O(qn),ii=O(Ut,!0);C(Ut);var Qn=N(Ut,2),oi=O(Qn,!0);C(Qn),C(qn),C($n),C(E),re(()=>{J(ft,x(h).extension),be(ct,"title",x(h).path),J(ai,x(h).path),be(jt,"title",x(h).filename),J(ri,x(h).filename),J(ii,x(h).formattedSize),J(oi,x(h).formattedDate)}),Q("click",Ae,()=>P(x(h).url,"URL")),Q("click",Dt,()=>H(s,{oldKey:x(h).key,newKey:x(h).key},!0)),$(p,E)});var Zr=N(Xn,2);{var Jr=p=>{var h=_f(),E=O(h);q(E,{get icon(){return Ga},class:"text-4xl text-muted-foreground/30 mb-3"}),pe(2),C(h),$(p,h)};_e(Zr,p=>{x(z).length===0&&p(Jr)})}C(Kn),C(Bn),C(Hn),C(fe);var ei=N(fe,2);{var ti=p=>{var h=kf(),E=O(h),D=N(O(E),2);vt(D);var W=N(D,2),G=O(W),Z=N(O(G),2),Be=O(Z,!0);C(Z),C(G);var Me=N(G,2),ft=N(O(Me),2),Le=O(ft);vt(Le),ar(Le,!0),C(ft),pe(2),C(Me),C(W);var Ae=N(W,2),zt=O(Ae);pe(2),C(Ae),C(E),fa(E,(de,Ke)=>ze==null?void 0:ze(de,Ke),()=>()=>async({update:de,result:Ke})=>{Ke.type==="success"?(d("Asset moved successfully"),H(s,null)):d("Failed to move asset"),de()}),C(h),re(()=>{Uo(D,x(s).oldKey),J(Be,x(s).oldKey)}),ga(Le,()=>x(s).newKey,de=>x(s).newKey=de),Q("click",zt,()=>H(s,null)),la(3,h,()=>gf,()=>({duration:150})),$(p,h)};_e(ei,p=>{x(s)&&p(ti)})}re(()=>{Je(ue,1,`group relative border-2 border-dashed rounded-xl transition-all duration-300 flex flex-col items-center justify-center p-10 bg-card overflow-hidden
                    ${x(r)?"border-ring bg-secondary/50":"border-border hover:border-muted-foreground/50"}`),Pt.disabled=x(a),J(Xr,x(a)?"Transmitting batch to S3...":"Drag & Drop Multiple Assets")}),ga(Ve,()=>x(n),p=>H(n,p)),Q("click",Ie,f),ut("dragenter",ue,p=>S(p,!0)),ut("dragleave",ue,p=>S(p,!1)),ut("dragover",ue,p=>S(p,!0)),ut("drop",ue,j),Q("change",Pt,p=>{var h,E;(h=p.currentTarget.files)!=null&&h.length&&((E=p.currentTarget.form)==null||E.requestSubmit())}),Q("click",Mt,p=>p.stopPropagation()),$(e,L),Tn()}Va(["click","change"]);export{Nf as component};
