function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function v(){return g(" ")}function $(){return g("")}function y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function w(t){return Array.from(t.childNodes)}function x(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?m(e):d(e)}function k(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function S(t){return k(t," ")}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e){t.value=null==e?"":e}function P(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function q(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function j(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function L(t,e,n){t.classList[n?"add":"remove"](e)}function R(t,e=document.body){return Array.from(e.querySelectorAll(t))}let I;function C(t){I=t}function O(){if(!I)throw new Error("Function called outside component initialization");return I}function T(t){O().$$.on_mount.push(t)}function U(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const V=[],D=[],H=[],J=[],K=Promise.resolve();let B=!1;function M(t){H.push(t)}let z=!1;const G=new Set;function F(){if(!z){z=!0;do{for(let t=0;t<V.length;t+=1){const e=V[t];C(e),Y(e.$$)}for(C(null),V.length=0;D.length;)D.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];G.has(e)||(G.add(e),e())}H.length=0}while(V.length);for(;J.length;)J.pop()();B=!1,z=!1,G.clear()}}function Y(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const W=new Set;let X;function Q(){X={r:0,c:[],p:X}}function Z(){X.r||o(X.c),X=X.p}function tt(t,e){t&&t.i&&(W.delete(t),t.i(e))}function et(t,e,n,r){if(t&&t.o){if(W.has(t))return;W.add(t),X.c.push((()=>{W.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function nt(t,e){const n=e.token={};function r(t,r,o,s){if(e.token!==n)return;e.resolved=s;let c=e.ctx;void 0!==o&&(c=c.slice(),c[o]=s);const a=t&&(e.current=t)(c);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(Q(),et(t,1,1,(()=>{e.blocks[n]=null})),Z())})):e.block.d(1),a.c(),tt(a,1),a.m(e.mount(),e.anchor),i=!0),e.block=a,e.blocks&&(e.blocks[r]=a),i&&F()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=O();if(t.then((t=>{C(n),r(e.then,1,e.value,t),C(null)}),(t=>{if(C(n),r(e.catch,2,e.error,t),C(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function rt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function ot(t){return"object"==typeof t&&null!==t?t:{}}function st(t){t&&t.c()}function ct(t,e){t&&t.l(e)}function at(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),M((()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(M)}function it(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){-1===t.$$.dirty[0]&&(V.push(t),B||(B=!0,K.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,s,c,a,i,l=[-1]){const u=I;C(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(p.ctx=s?s(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&lt(e,t)),n})):[],p.update(),d=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=w(n.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&tt(e.$$.fragment),at(e,n.target,n.anchor),F()}C(u)}class ft{$destroy(){it(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ht=[];function pt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!ht.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ht.push(n,e)}if(t){for(let t=0;t<ht.length;t+=2)ht[t][0](ht[t+1]);ht.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const dt={};function mt(e){let n,r,c,a,i,l,p,m,$,_,A,N,P,q,j,L,R,I,C,O,T,U,V,D,H,J,K,B,M,z,G,F,Y,W,X,Q,Z,tt,et,nt,rt,ot,st,ct,at,it,lt;return{c(){n=d("div"),r=d("div"),c=d("div"),a=d("div"),i=d("div"),l=v(),p=d("h1"),m=g("這是什麼？"),$=v(),_=d("p"),A=g("這是一個練習倉頡輸入法的網站。倉頡的優點在於打字不用選字，因為每一個字都有它自己的順序。"),N=v(),P=d("h1"),q=g("使用說明"),j=v(),L=d("p"),R=g("要使用這個練習網站時，請你把你的輸入法設成「英文」或「倉頡」，因為這個網站用英文字幕去對相對的倉頡字幕。"),I=v(),C=d("p"),O=g("「"),T=d("a"),U=g("倉頡練習"),V=g("」可以練習打一些常見的字和詞彙，「"),D=d("a"),H=g("中文字幕練習"),J=g("」可以練習倉頡在鍵盤上用的字幕的位置。"),K=v(),B=d("h1"),M=g("問題回報"),z=v(),G=d("p"),F=g("如果遇到問題或有新功能的想法，請到 "),Y=d("a"),W=g("github"),X=g(" 開問題單。也歡迎直接開 "),Q=d("a"),Z=g("pull request"),tt=g("。"),et=v(),nt=d("h1"),rt=g("為什麼是豬？"),ot=v(),st=d("p"),ct=d("a"),at=g("為什麼不是？"),this.h()},l(t){n=x(t,"DIV",{class:!0});var e=w(n);r=x(e,"DIV",{class:!0});var o=w(r);c=x(o,"DIV",{class:!0});var s=w(c);a=x(s,"DIV",{class:!0}),w(a).forEach(h),i=x(s,"DIV",{class:!0}),w(i).forEach(h),s.forEach(h),l=S(o),p=x(o,"H1",{class:!0});var u=w(p);m=k(u,"這是什麼？"),u.forEach(h),$=S(o),_=x(o,"P",{});var f=w(_);A=k(f,"這是一個練習倉頡輸入法的網站。倉頡的優點在於打字不用選字，因為每一個字都有它自己的順序。"),f.forEach(h),N=S(o),P=x(o,"H1",{class:!0});var d=w(P);q=k(d,"使用說明"),d.forEach(h),j=S(o),L=x(o,"P",{});var g=w(L);R=k(g,"要使用這個練習網站時，請你把你的輸入法設成「英文」或「倉頡」，因為這個網站用英文字幕去對相對的倉頡字幕。"),g.forEach(h),I=S(o),C=x(o,"P",{});var v=w(C);O=k(v,"「"),T=x(v,"A",{href:!0});var y=w(T);U=k(y,"倉頡練習"),y.forEach(h),V=k(v,"」可以練習打一些常見的字和詞彙，「"),D=x(v,"A",{href:!0});var b=w(D);H=k(b,"中文字幕練習"),b.forEach(h),J=k(v,"」可以練習倉頡在鍵盤上用的字幕的位置。"),v.forEach(h),K=S(o),B=x(o,"H1",{class:!0});var E=w(B);M=k(E,"問題回報"),E.forEach(h),z=S(o),G=x(o,"P",{});var it=w(G);F=k(it,"如果遇到問題或有新功能的想法，請到 "),Y=x(it,"A",{href:!0});var lt=w(Y);W=k(lt,"github"),lt.forEach(h),X=k(it," 開問題單。也歡迎直接開 "),Q=x(it,"A",{href:!0});var ut=w(Q);Z=k(ut,"pull request"),ut.forEach(h),tt=k(it,"。"),it.forEach(h),et=S(o),nt=x(o,"H1",{class:!0});var ft=w(nt);rt=k(ft,"為什麼是豬？"),ft.forEach(h),ot=S(o),st=x(o,"P",{});var ht=w(st);ct=x(ht,"A",{href:!0,target:!0,rel:!0});var pt=w(ct);at=k(pt,"為什麼不是？"),pt.forEach(h),ht.forEach(h),o.forEach(h),e.forEach(h),this.h()},h(){E(a,"class","diagonal svelte-1ueop3q"),E(i,"class","diagonal svelte-1ueop3q"),E(c,"class","close svelte-1ueop3q"),E(p,"class","svelte-1ueop3q"),E(P,"class","svelte-1ueop3q"),E(T,"href","/"),E(D,"href","letters"),E(B,"class","svelte-1ueop3q"),E(Y,"href","https://github.com/dkaoster/oiargrmbc/issues"),E(Q,"href","https://github.com/dkaoster/oiargrmbc"),E(nt,"class","svelte-1ueop3q"),E(ct,"href","https://udn.com/news/story/9750/5047555"),E(ct,"target","_blank"),E(ct,"rel","noopener noreferrer"),E(r,"class","about-box svelte-1ueop3q"),E(n,"class","cover svelte-1ueop3q")},m(t,o){f(t,n,o),u(n,r),u(r,c),u(c,a),u(c,i),u(r,l),u(r,p),u(p,m),u(r,$),u(r,_),u(_,A),u(r,N),u(r,P),u(P,q),u(r,j),u(r,L),u(L,R),u(r,I),u(r,C),u(C,O),u(C,T),u(T,U),u(C,V),u(C,D),u(D,H),u(C,J),u(r,K),u(r,B),u(B,M),u(r,z),u(r,G),u(G,F),u(G,Y),u(Y,W),u(G,X),u(G,Q),u(Q,Z),u(G,tt),u(r,et),u(r,nt),u(nt,rt),u(r,ot),u(r,st),u(st,ct),u(ct,at),it||(lt=[y(window,"click",(function(){s(e[0])&&e[0].apply(this,arguments)})),y(c,"click",(function(){s(e[0])&&e[0].apply(this,arguments)})),y(r,"click",b(e[1]))],it=!0)},p(t,[n]){e=t},i:t,o:t,d(t){t&&h(n),it=!1,o(lt)}}}function gt(t,e,n){let{toggleAbout:r}=e;return t.$$set=t=>{"toggleAbout"in t&&n(0,r=t.toggleAbout)},[r,function(e){U(t,e)}]}class vt extends ft{constructor(t){super(),ut(this,t,gt,mt,c,{toggleAbout:0})}}function $t(e){let n,r;return n=new vt({props:{toggleAbout:e[2]}}),{c(){st(n.$$.fragment)},l(t){ct(n.$$.fragment,t)},m(t,e){at(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){it(n,t)}}}function yt(t){let e,n,r,o,s,c,a,i,l,p,m,_,A,N,P,q,j=t[1]&&$t(t);return{c(){e=d("nav"),n=d("div"),r=d("img"),s=v(),c=d("div"),a=d("a"),i=g("倉頡練習"),l=v(),p=d("a"),m=g("中文字母練習"),_=v(),j&&j.c(),A=$(),this.h()},l(t){e=x(t,"NAV",{class:!0});var o=w(e);n=x(o,"DIV",{class:!0});var u=w(n);r=x(u,"IMG",{src:!0,alt:!0,class:!0}),s=S(u),c=x(u,"DIV",{class:!0});var f=w(c);a=x(f,"A",{href:!0,class:!0});var d=w(a);i=k(d,"倉頡練習"),d.forEach(h),l=S(f),p=x(f,"A",{href:!0,class:!0});var g=w(p);m=k(g,"中文字母練習"),g.forEach(h),f.forEach(h),u.forEach(h),o.forEach(h),_=S(t),j&&j.l(t),A=$(),this.h()},h(){r.src!==(o="apple-touch-icon.png")&&E(r,"src","apple-touch-icon.png"),E(r,"alt","logo"),E(r,"class","svelte-ofivij"),E(a,"href","/"),E(a,"class","svelte-ofivij"),L(a,"active",!t[0]),E(p,"href","letters"),E(p,"class","svelte-ofivij"),L(p,"active","letters"===t[0]),E(c,"class","links"),E(n,"class","nav-inner svelte-ofivij"),E(e,"class","svelte-ofivij")},m(o,h){f(o,e,h),u(e,n),u(n,r),u(n,s),u(n,c),u(c,a),u(a,i),u(c,l),u(c,p),u(p,m),f(o,_,h),j&&j.m(o,h),f(o,A,h),N=!0,P||(q=y(r,"click",b(t[2])),P=!0)},p(t,[e]){1&e&&L(a,"active",!t[0]),1&e&&L(p,"active","letters"===t[0]),t[1]?j?(j.p(t,e),2&e&&tt(j,1)):(j=$t(t),j.c(),tt(j,1),j.m(A.parentNode,A)):j&&(Q(),et(j,1,1,(()=>{j=null})),Z())},i(t){N||(tt(j),N=!0)},o(t){et(j),N=!1},d(t){t&&h(e),t&&h(_),j&&j.d(t),t&&h(A),P=!1,q()}}}function bt(t,e,n){let{segment:r}=e,o=!1;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r,o,()=>{n(1,o=!o)}]}class Et extends ft{constructor(t){super(),ut(this,t,bt,yt,c,{segment:0})}}function _t(t){let e,n,r,o,s,c,i;o=new Et({props:{segment:t[0]}});const p=t[2].default,m=a(p,t,t[1],null);return{c(){e=d("link"),n=d("link"),r=v(),st(o.$$.fragment),s=v(),c=d("main"),m&&m.c(),this.h()},l(t){const a=R('[data-svelte="svelte-rmv37m"]',document.head);e=x(a,"LINK",{rel:!0,href:!0}),n=x(a,"LINK",{href:!0,rel:!0}),a.forEach(h),r=S(t),ct(o.$$.fragment,t),s=S(t),c=x(t,"MAIN",{class:!0});var i=w(c);m&&m.l(i),i.forEach(h),this.h()},h(){E(e,"rel","preconnect"),E(e,"href","https://fonts.gstatic.com"),E(n,"href","https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400&display=swap"),E(n,"rel","stylesheet"),E(c,"class","svelte-fzs7nw")},m(t,a){u(document.head,e),u(document.head,n),f(t,r,a),at(o,t,a),f(t,s,a),f(t,c,a),m&&m.m(c,null),i=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),m&&m.p&&2&e&&l(m,p,t,t[1],e,null,null)},i(t){i||(tt(o.$$.fragment,t),tt(m,t),i=!0)},o(t){et(o.$$.fragment,t),et(m,t),i=!1},d(t){h(e),h(n),t&&h(r),it(o,t),t&&h(s),t&&h(c),m&&m.d(t)}}}function wt(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class xt extends ft{constructor(t){super(),ut(this,t,wt,_t,c,{segment:0})}}function kt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=g(r)},l(t){e=x(t,"PRE",{});var o=w(e);n=k(o,r),o.forEach(h)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&A(n,r)},d(t){t&&h(e)}}}function St(e){let n,r,o,s,c,a,i,l,p,m=e[1].message+"";document.title=n=e[0];let y=e[2]&&e[1].stack&&kt(e);return{c(){r=v(),o=d("h1"),s=g(e[0]),c=v(),a=d("p"),i=g(m),l=v(),y&&y.c(),p=$(),this.h()},l(t){R('[data-svelte="svelte-1moakz"]',document.head).forEach(h),r=S(t),o=x(t,"H1",{class:!0});var n=w(o);s=k(n,e[0]),n.forEach(h),c=S(t),a=x(t,"P",{class:!0});var u=w(a);i=k(u,m),u.forEach(h),l=S(t),y&&y.l(t),p=$(),this.h()},h(){E(o,"class","svelte-hc3g3x"),E(a,"class","svelte-hc3g3x")},m(t,e){f(t,r,e),f(t,o,e),u(o,s),f(t,c,e),f(t,a,e),u(a,i),f(t,l,e),y&&y.m(t,e),f(t,p,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&A(s,t[0]),2&e&&m!==(m=t[1].message+"")&&A(i,m),t[2]&&t[1].stack?y?y.p(t,e):(y=kt(t),y.c(),y.m(p.parentNode,p)):y&&(y.d(1),y=null)},i:t,o:t,d(t){t&&h(r),t&&h(o),t&&h(c),t&&h(a),t&&h(l),y&&y.d(t),t&&h(p)}}}function At(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class Nt extends ft{constructor(t){super(),ut(this,t,At,St,c,{status:0,error:1})}}function Pt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&st(n.$$.fragment),r=$()},l(t){n&&ct(n.$$.fragment,t),r=$()},m(t,e){n&&at(n,t,e),f(t,r,e),o=!0},p(t,e){const o=16&e?rt(s,[ot(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){Q();const t=n;et(t.$$.fragment,1,0,(()=>{it(t,1)})),Z()}c?(n=new c(a()),st(n.$$.fragment),tt(n.$$.fragment,1),at(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&tt(n.$$.fragment,t),o=!0)},o(t){n&&et(n.$$.fragment,t),o=!1},d(t){t&&h(r),n&&it(n,t)}}}function qt(t){let e,n;return e=new Nt({props:{error:t[0],status:t[1]}}),{c(){st(e.$$.fragment)},l(t){ct(e.$$.fragment,t)},m(t,r){at(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}function jt(t){let e,n,r,o;const s=[qt,Pt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){c[e].m(t,n),f(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(Q(),et(c[i],1,1,(()=>{c[i]=null})),Z(),n=c[e],n||(n=c[e]=s[e](t),n.c()),tt(n,1),n.m(r.parentNode,r))},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){c[e].d(t),t&&h(r)}}}function Lt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[jt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new xt({props:s}),{c(){st(n.$$.fragment)},l(t){ct(n.$$.fragment,t)},m(t,e){at(n,t,e),r=!0},p(t,[e]){const r=12&e?rt(o,[4&e&&{segment:t[2][0]},8&e&&ot(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){it(n,t)}}}function Rt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,h;return u=l,O().$$.after_update.push(u),f=dt,h=r,O().$$.context.set(f,h),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class It extends ft{constructor(t){super(),ut(this,t,Rt,Lt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ct=[],Ot=[{js:()=>Promise.all([import("./index.0999c1d1.js"),__inject_styles(["client-3ab87434.css","Card-84a2a677.css","index-ecb72281.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./letters.7b44d71b.js"),__inject_styles(["client-3ab87434.css","Card-84a2a677.css","letters-55f60206.css"])]).then((function(t){return t[0]}))}],Tt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/letters\/?$/,parts:[{i:1}]}];
/*! *****************************************************************************
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
***************************************************************************** */
function Ut(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{i(r.next(t))}catch(t){s(t)}}function a(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))}function Vt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Dt,Ht=1;const Jt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Kt={};let Bt,Mt;function zt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Gt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Bt))return null;let e=t.pathname.slice(Bt.length);if(""===e&&(e="/"),!Ct.some((t=>t.test(e))))for(let n=0;n<Tt.length;n+=1){const r=Tt[n],o=r.pattern.exec(e);if(o){const n=zt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Ft(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Vt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Gt(o);if(s){Xt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Jt.pushState({id:Dt},"",o.href)}}function Yt(){return{x:pageXOffset,y:pageYOffset}}function Wt(t){if(Kt[Dt]=Yt(),t.state){const e=Gt(new URL(location.href));e?Xt(e,t.state.id):location.href=location.href}else Ht=Ht+1,function(t){Dt=t}(Ht),Jt.replaceState({id:Dt},"",location.href)}function Xt(t,e,n,r){return Ut(this,void 0,void 0,(function*(){const o=!!e;if(o)Dt=e;else{const t=Yt();Kt[Dt]=t,Dt=e=++Ht,Kt[Dt]=n?t:{x:0,y:0}}if(yield Mt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Kt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Kt[Dt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Qt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Zt,te=null;function ee(t){const e=Vt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Gt(new URL(t,Qt(document)));if(e)te&&t===te.href||(te={href:t,promise:$e(e)}),te.promise}(e.href)}function ne(t){clearTimeout(Zt),Zt=setTimeout((()=>{ee(t)}),20)}function re(t,e={noscroll:!1,replaceState:!1}){const n=Gt(new URL(t,Qt(document)));return n?(Jt[e.replaceState?"replaceState":"pushState"]({id:Dt},"",t),Xt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const oe="undefined"!=typeof __SAPPER__&&__SAPPER__;let se,ce,ae,ie=!1,le=[],ue="{}";const fe={page:function(t){const e=pt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:pt(null),session:pt(oe&&oe.session)};let he,pe,de;function me(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ge(t){return Ut(this,void 0,void 0,(function*(){se&&fe.preloading.set(!0);const e=function(t){return te&&te.href===t.href?te.promise:$e(t)}(t),n=ce={},r=yield e,{redirect:o}=r;if(n===ce)if(o)yield re(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ve(n,e,me(e,t.page))}}))}function ve(t,e,n){return Ut(this,void 0,void 0,(function*(){fe.page.set(n),fe.preloading.set(!1),se?se.$set(e):(e.stores={page:{subscribe:fe.page.subscribe},preloading:{subscribe:fe.preloading.subscribe},session:fe.session},e.level0={props:yield ae},e.notify=fe.page.notify,se=new It({target:de,props:e,hydrate:!0})),le=t,ue=JSON.stringify(n.query),ie=!0,pe=!1}))}function $e(t){return Ut(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!ae){const t=()=>({});ae=oe.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},he)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>Ut(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==ue)return!0;const o=le[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const h=i++;if(!pe&&!u&&le[a]&&le[a].part===e.i)return le[a];u=!1;const{default:p,preload:d}=yield Ot[e.i].js();let m;return m=ie||!oe.preloaded[a+1]?d?yield d.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},he):{}:oe.preloaded[a+1],s["level"+h]={component:p,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var ye,be,Ee;fe.session.subscribe((t=>Ut(void 0,void 0,void 0,(function*(){if(he=t,!ie)return;pe=!0;const e=Gt(new URL(location.href)),n=ce={},{redirect:r,props:o,branch:s}=yield $e(e);n===ce&&(r?yield re(r.location,{replaceState:!0}):yield ve(s,o,me(o,e.page)))})))),ye={target:document.querySelector("#sapper")},be=ye.target,de=be,Ee=oe.baseUrl,Bt=Ee,Mt=ge,"scrollRestoration"in Jt&&(Jt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Jt.scrollRestoration="auto"})),addEventListener("load",(()=>{Jt.scrollRestoration="manual"})),addEventListener("click",Ft),addEventListener("popstate",Wt),addEventListener("touchstart",ee),addEventListener("mousemove",ne),oe.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=oe;ae||(ae=o&&o[0]);const a={error:c,status:s,session:r,level0:{props:ae},level1:{props:{status:s,error:c},component:Nt},segments:o},i=zt(n);ve([],a,{host:t,path:e,query:i,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Jt.replaceState({id:Ht},"",e);const n=Gt(new URL(location.href));if(n)return Xt(n,Ht,!0,t)}));export{b as A,p as B,o as C,nt as D,U as E,j as F,$ as G,A as H,_ as I,a as J,Q as K,Z as L,P as M,N,l as O,ft as S,m as a,w as b,x as c,h as d,E as e,f,u as g,v as h,ut as i,st as j,S as k,ct as l,at as m,t as n,y as o,et as p,R as q,it as r,c as s,tt as t,T as u,d as v,g as w,k as x,M as y,q as z};

import __inject_styles from './inject_styles.5607aec6.js';