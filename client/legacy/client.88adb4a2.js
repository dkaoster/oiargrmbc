function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,n,r,o=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,e,n){var r=h;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=S(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",m={};function g(){}function y(){}function b(){}var $={};$[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(A([])));x&&x!==r&&o.call(x,i)&&($=x);var E=b.prototype=g.prototype=Object.create($);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,n){function r(a,i,c,u){var s=l(e[a],e,i);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"===t(h)&&o.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function A(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return y.prototype=E.constructor=b,b.constructor=y,y.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},_(k.prototype),k.prototype[c]=function(){return this},e.AsyncIterator=k,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new k(f(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(E),s(E,u,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function p(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function g(t,e){for(var n in e)t[n]=e[n];return t}function y(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(y)}function w(t){return"function"==typeof t}function x(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function E(t,e,n,r){if(t){var o=_(t,e,n,r);return t[0](o)}}function _(t,e,n,r){return t[1]&&r?g(n.ctx.slice(),t[1](r(e))):n.ctx}function k(e,n,r,o,a,i,c){var u=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(u){var s=_(n,r,o,c);e.p(s,u)}}function S(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function j(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function P(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function O(t){return document.createTextNode(t)}function N(){return O(" ")}function I(){return O("")}function q(t,e,n,r){return t.addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}function T(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function D(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function U(t){return Array.from(t.childNodes)}function V(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];n[u.name]||c.push(u.name)}for(var s=0;s<c.length;s++)a.removeAttribute(c[s]);return t.splice(o,1)[0]}}return r?P(e):A(e)}function G(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return O(e)}function F(t){return G(t," ")}function H(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function J(t,e){t.value=null==e?"":e}function K(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function M(t,e){for(var n=0;n<t.options.length;n+=1){var r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function B(t){var e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function z(t,e,n){t.classList[n?"add":"remove"](e)}function Y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function W(t){r=t}function X(){if(!r)throw new Error("Function called outside component initialization");return r}function Q(t){X().$$.on_mount.push(t)}function Z(t,e){var n=t.$$.callbacks[e.type];n&&n.slice().forEach((function(t){return t(e)}))}var tt=[],et=[],nt=[],rt=[],ot=Promise.resolve(),at=!1;function it(t){nt.push(t)}var ct=!1,ut=new Set;function st(){if(!ct){ct=!0;do{for(var t=0;t<tt.length;t+=1){var e=tt[t];W(e),ft(e.$$)}for(W(null),tt.length=0;et.length;)et.pop()();for(var n=0;n<nt.length;n+=1){var r=nt[n];ut.has(r)||(ut.add(r),r())}nt.length=0}while(tt.length);for(;rt.length;)rt.pop()();at=!1,ct=!1,ut.clear()}}function ft(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}var lt,ht=new Set;function pt(){lt={r:0,c:[],p:lt}}function vt(){lt.r||$(lt.c),lt=lt.p}function dt(t,e){t&&t.i&&(ht.delete(t),t.i(e))}function mt(t,e,n,r){if(t&&t.o){if(ht.has(t))return;ht.add(t),lt.c.push((function(){ht.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function gt(e,n){var r,o=n.token={};function a(t,e,r,a){if(n.token===o){n.resolved=a;var i=n.ctx;void 0!==r&&((i=i.slice())[r]=a);var c=t&&(n.current=t)(i),u=!1;n.block&&(n.blocks?n.blocks.forEach((function(t,r){r!==e&&t&&(pt(),mt(t,1,1,(function(){n.blocks[r]=null})),vt())})):n.block.d(1),c.c(),dt(c,1),c.m(n.mount(),n.anchor),u=!0),n.block=c,n.blocks&&(n.blocks[e]=c),u&&st()}}if((r=e)&&"object"===t(r)&&"function"==typeof r.then){var i=X();if(e.then((function(t){W(i),a(n.then,1,n.value,t),W(null)}),(function(t){if(W(i),a(n.catch,2,n.error,t),W(null),!n.hasCatch)throw t})),n.current!==n.pending)return a(n.pending,0),!0}else{if(n.current!==n.then)return a(n.then,1,n.value,e),!0;n.resolved=e}}function yt(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var s in c)o[s]||(n[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function bt(e){return"object"===t(e)&&null!==e?e:{}}function $t(t){t&&t.c()}function wt(t,e){t&&t.l(e)}function xt(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,c=r.after_update;o&&o.m(e,n),it((function(){var e=a.map(y).filter(w);i?i.push.apply(i,p(e)):$(e),t.$$.on_mount=[]})),c.forEach(it)}function Et(t,e){var n=t.$$;null!==n.fragment&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){-1===t.$$.dirty[0]&&(tt.push(t),at||(at=!0,ot.then(st)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function kt(t,e,n,o,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=r;W(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c,skip_bound:!1},l=!1;if(f.ctx=n?n(t,s,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),l&&_t(t,e)),n})):[],f.update(),l=!0,$(f.before_update),f.fragment=!!o&&o(f.ctx),e.target){if(e.hydrate){var h=U(e.target);f.fragment&&f.fragment.l(h),h.forEach(L)}else f.fragment&&f.fragment.c();e.intro&&dt(t.$$.fragment),xt(t,e.target,e.anchor),st()}W(u)}var St=function(){function t(){v(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){Et(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&d(e.prototype,n),r&&d(e,r),t}(),Rt=[];function Lt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if(x(t,n)&&(t=n,e)){for(var o=!Rt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),Rt.push(i,t)}if(o){for(var c=0;c<Rt.length;c+=2)Rt[c][0](Rt[c+1]);Rt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||m),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var jt={};function At(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function Pt(t){var e,n,r,o,a,i,u,s,f,l,h,p,v,d,g,y,b,x,E,_,k,j,P,I,C,H,J,K,M,B,z,Y,W,X,Q,Z,tt,et,nt,rt,ot,at,it,ct,ut,st,ft;return{c:function(){e=A("div"),n=A("div"),r=A("div"),o=A("div"),a=A("div"),i=N(),u=A("h1"),s=O("這是什麼？"),f=N(),l=A("p"),h=O("這是一個練習倉頡輸入法的網站。倉頡的優點在於打字不用選字，因為每一個字都有它自己的順序。"),p=N(),v=A("h1"),d=O("使用說明"),g=N(),y=A("p"),b=O("要使用這個練習網站時，請你把你的輸入法設成「英文」或「倉頡」，因為這個網站用英文字幕去對相對的倉頡字幕。"),x=N(),E=A("p"),_=O("「"),k=A("a"),j=O("倉頡練習"),P=O("」可以練習打一些常見的字和詞彙，「"),I=A("a"),C=O("中文字幕練習"),H=O("」可以練習倉頡在鍵盤上用的字幕的位置。"),J=N(),K=A("h1"),M=O("問題回報"),B=N(),z=A("p"),Y=O("如果遇到問題或有新功能的想法，請到 "),W=A("a"),X=O("github"),Q=O(" 開問題單。也歡迎直接開 "),Z=A("a"),tt=O("pull request"),et=O("。"),nt=N(),rt=A("h1"),ot=O("為什麼是豬？"),at=N(),it=A("p"),ct=A("a"),ut=O("為什麼不是？"),this.h()},l:function(t){var c=U(e=V(t,"DIV",{class:!0})),m=U(n=V(c,"DIV",{class:!0})),$=U(r=V(m,"DIV",{class:!0}));U(o=V($,"DIV",{class:!0})).forEach(L),U(a=V($,"DIV",{class:!0})).forEach(L),$.forEach(L),i=F(m);var w=U(u=V(m,"H1",{class:!0}));s=G(w,"這是什麼？"),w.forEach(L),f=F(m);var S=U(l=V(m,"P",{}));h=G(S,"這是一個練習倉頡輸入法的網站。倉頡的優點在於打字不用選字，因為每一個字都有它自己的順序。"),S.forEach(L),p=F(m);var R=U(v=V(m,"H1",{class:!0}));d=G(R,"使用說明"),R.forEach(L),g=F(m);var A=U(y=V(m,"P",{}));b=G(A,"要使用這個練習網站時，請你把你的輸入法設成「英文」或「倉頡」，因為這個網站用英文字幕去對相對的倉頡字幕。"),A.forEach(L),x=F(m);var O=U(E=V(m,"P",{}));_=G(O,"「");var N=U(k=V(O,"A",{href:!0}));j=G(N,"倉頡練習"),N.forEach(L),P=G(O,"」可以練習打一些常見的字和詞彙，「");var q=U(I=V(O,"A",{href:!0}));C=G(q,"中文字幕練習"),q.forEach(L),H=G(O,"」可以練習倉頡在鍵盤上用的字幕的位置。"),O.forEach(L),J=F(m);var T=U(K=V(m,"H1",{class:!0}));M=G(T,"問題回報"),T.forEach(L),B=F(m);var D=U(z=V(m,"P",{}));Y=G(D,"如果遇到問題或有新功能的想法，請到 ");var st=U(W=V(D,"A",{href:!0}));X=G(st,"github"),st.forEach(L),Q=G(D," 開問題單。也歡迎直接開 ");var ft=U(Z=V(D,"A",{href:!0}));tt=G(ft,"pull request"),ft.forEach(L),et=G(D,"。"),D.forEach(L),nt=F(m);var lt=U(rt=V(m,"H1",{class:!0}));ot=G(lt,"為什麼是豬？"),lt.forEach(L),at=F(m);var ht=U(it=V(m,"P",{})),pt=U(ct=V(ht,"A",{href:!0,target:!0,rel:!0}));ut=G(pt,"為什麼不是？"),pt.forEach(L),ht.forEach(L),m.forEach(L),c.forEach(L),this.h()},h:function(){D(o,"class","diagonal svelte-1ueop3q"),D(a,"class","diagonal svelte-1ueop3q"),D(r,"class","close svelte-1ueop3q"),D(u,"class","svelte-1ueop3q"),D(v,"class","svelte-1ueop3q"),D(k,"href","/"),D(I,"href","letters"),D(K,"class","svelte-1ueop3q"),D(W,"href","https://github.com/dkaoster/oiargrmbc/issues"),D(Z,"href","https://github.com/dkaoster/oiargrmbc"),D(rt,"class","svelte-1ueop3q"),D(ct,"href","https://udn.com/news/story/9750/5047555"),D(ct,"target","_blank"),D(ct,"rel","noopener noreferrer"),D(n,"class","about-box svelte-1ueop3q"),D(e,"class","cover svelte-1ueop3q")},m:function(c,m){R(c,e,m),S(e,n),S(n,r),S(r,o),S(r,a),S(n,i),S(n,u),S(u,s),S(n,f),S(n,l),S(l,h),S(n,p),S(n,v),S(v,d),S(n,g),S(n,y),S(y,b),S(n,x),S(n,E),S(E,_),S(E,k),S(k,j),S(E,P),S(E,I),S(I,C),S(E,H),S(n,J),S(n,K),S(K,M),S(n,B),S(n,z),S(z,Y),S(z,W),S(W,X),S(z,Q),S(z,Z),S(Z,tt),S(z,et),S(n,nt),S(n,rt),S(rt,ot),S(n,at),S(n,it),S(it,ct),S(ct,ut),st||(ft=[q(window,"click",(function(){w(t[0])&&t[0].apply(this,arguments)})),q(r,"click",(function(){w(t[0])&&t[0].apply(this,arguments)})),q(n,"click",T(t[1]))],st=!0)},p:function(e,n){c(n,1)[0];t=e},i:m,o:m,d:function(t){t&&L(e),st=!1,$(ft)}}}function Ot(t,e,n){var r=e.toggleAbout;return t.$$set=function(t){"toggleAbout"in t&&n(0,r=t.toggleAbout)},[r,function(e){Z(t,e)}]}var Nt=function(t){f(n,St);var e=At(n);function n(t){var r;return v(this,n),kt(l(r=e.call(this)),t,Ot,Pt,x,{toggleAbout:0}),r}return n}();function It(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function qt(t){var e,n;return e=new Nt({props:{toggleAbout:t[2]}}),{c:function(){$t(e.$$.fragment)},l:function(t){wt(e.$$.fragment,t)},m:function(t,r){xt(e,t,r),n=!0},p:m,i:function(t){n||(dt(e.$$.fragment,t),n=!0)},o:function(t){mt(e.$$.fragment,t),n=!1},d:function(t){Et(e,t)}}}function Tt(t){var e,n,r,o,a,i,u,s,f,l,h,p,v,d,m,g=t[1]&&qt(t);return{c:function(){e=A("nav"),n=A("div"),r=A("img"),o=N(),a=A("div"),i=A("a"),u=O("倉頡練習"),s=N(),f=A("a"),l=O("中文字母練習"),h=N(),g&&g.c(),p=I(),this.h()},l:function(t){var c=U(e=V(t,"NAV",{class:!0})),v=U(n=V(c,"DIV",{class:!0}));r=V(v,"IMG",{src:!0,alt:!0,class:!0}),o=F(v);var d=U(a=V(v,"DIV",{class:!0})),m=U(i=V(d,"A",{href:!0,class:!0}));u=G(m,"倉頡練習"),m.forEach(L),s=F(d);var y=U(f=V(d,"A",{href:!0,class:!0}));l=G(y,"中文字母練習"),y.forEach(L),d.forEach(L),v.forEach(L),c.forEach(L),h=F(t),g&&g.l(t),p=I(),this.h()},h:function(){r.src!=="apple-touch-icon.png"&&D(r,"src","apple-touch-icon.png"),D(r,"alt","logo"),D(r,"class","svelte-ofivij"),D(i,"href","/"),D(i,"class","svelte-ofivij"),z(i,"active",!t[0]),D(f,"href","letters"),D(f,"class","svelte-ofivij"),z(f,"active","letters"===t[0]),D(a,"class","links"),D(n,"class","nav-inner svelte-ofivij"),D(e,"class","svelte-ofivij")},m:function(c,y){R(c,e,y),S(e,n),S(n,r),S(n,o),S(n,a),S(a,i),S(i,u),S(a,s),S(a,f),S(f,l),R(c,h,y),g&&g.m(c,y),R(c,p,y),v=!0,d||(m=q(r,"click",T(t[2])),d=!0)},p:function(t,e){var n=c(e,1)[0];1&n&&z(i,"active",!t[0]),1&n&&z(f,"active","letters"===t[0]),t[1]?g?(g.p(t,n),2&n&&dt(g,1)):((g=qt(t)).c(),dt(g,1),g.m(p.parentNode,p)):g&&(pt(),mt(g,1,1,(function(){g=null})),vt())},i:function(t){v||(dt(g),v=!0)},o:function(t){mt(g),v=!1},d:function(t){t&&L(e),t&&L(h),g&&g.d(t),t&&L(p),d=!1,m()}}}function Dt(t,e,n){var r=e.segment,o=!1;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r,o,function(){n(1,o=!o)}]}var Ct=function(t){f(n,St);var e=It(n);function n(t){var r;return v(this,n),kt(l(r=e.call(this)),t,Dt,Tt,x,{segment:0}),r}return n}();function Ut(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function Vt(t){var e,n,r,o,a,i,u;o=new Ct({props:{segment:t[0]}});var s=t[2].default,f=E(s,t,t[1],null);return{c:function(){e=A("link"),n=A("link"),r=N(),$t(o.$$.fragment),a=N(),i=A("main"),f&&f.c(),this.h()},l:function(t){var c=Y('[data-svelte="svelte-rmv37m"]',document.head);e=V(c,"LINK",{rel:!0,href:!0}),n=V(c,"LINK",{href:!0,rel:!0}),c.forEach(L),r=F(t),wt(o.$$.fragment,t),a=F(t);var u=U(i=V(t,"MAIN",{class:!0}));f&&f.l(u),u.forEach(L),this.h()},h:function(){D(e,"rel","preconnect"),D(e,"href","https://fonts.gstatic.com"),D(n,"href","https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400&display=swap"),D(n,"rel","stylesheet"),D(i,"class","svelte-fzs7nw")},m:function(t,c){S(document.head,e),S(document.head,n),R(t,r,c),xt(o,t,c),R(t,a,c),R(t,i,c),f&&f.m(i,null),u=!0},p:function(t,e){var n=c(e,1)[0],r={};1&n&&(r.segment=t[0]),o.$set(r),f&&f.p&&2&n&&k(f,s,t,t[1],n,null,null)},i:function(t){u||(dt(o.$$.fragment,t),dt(f,t),u=!0)},o:function(t){mt(o.$$.fragment,t),mt(f,t),u=!1},d:function(t){L(e),L(n),t&&L(r),Et(o,t),t&&L(a),t&&L(i),f&&f.d(t)}}}function Gt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var Ft=function(t){f(n,St);var e=Ut(n);function n(t){var r;return v(this,n),kt(l(r=e.call(this)),t,Gt,Vt,x,{segment:0}),r}return n}();function Ht(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function Jt(t){var e,n,r=t[1].stack+"";return{c:function(){e=A("pre"),n=O(r)},l:function(t){var o=U(e=V(t,"PRE",{}));n=G(o,r),o.forEach(L)},m:function(t,r){R(t,e,r),S(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&H(n,r)},d:function(t){t&&L(e)}}}function Kt(t){var e,n,r,o,a,i,u,s,f,l=t[1].message+"";document.title=e=t[0];var h=t[2]&&t[1].stack&&Jt(t);return{c:function(){n=N(),r=A("h1"),o=O(t[0]),a=N(),i=A("p"),u=O(l),s=N(),h&&h.c(),f=I(),this.h()},l:function(e){Y('[data-svelte="svelte-1moakz"]',document.head).forEach(L),n=F(e);var c=U(r=V(e,"H1",{class:!0}));o=G(c,t[0]),c.forEach(L),a=F(e);var p=U(i=V(e,"P",{class:!0}));u=G(p,l),p.forEach(L),s=F(e),h&&h.l(e),f=I(),this.h()},h:function(){D(r,"class","svelte-hc3g3x"),D(i,"class","svelte-hc3g3x")},m:function(t,e){R(t,n,e),R(t,r,e),S(r,o),R(t,a,e),R(t,i,e),S(i,u),R(t,s,e),h&&h.m(t,e),R(t,f,e)},p:function(t,n){var r=c(n,1)[0];1&r&&e!==(e=t[0])&&(document.title=e),1&r&&H(o,t[0]),2&r&&l!==(l=t[1].message+"")&&H(u,l),t[2]&&t[1].stack?h?h.p(t,r):((h=Jt(t)).c(),h.m(f.parentNode,f)):h&&(h.d(1),h=null)},i:m,o:m,d:function(t){t&&L(n),t&&L(r),t&&L(a),t&&L(i),t&&L(s),h&&h.d(t),t&&L(f)}}}function Mt(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var Bt=function(t){f(n,St);var e=Ht(n);function n(t){var r;return v(this,n),kt(l(r=e.call(this)),t,Mt,Kt,x,{status:0,error:1}),r}return n}();function zt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function Yt(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=g(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&$t(e.$$.fragment),n=I()},l:function(t){e&&wt(e.$$.fragment,t),n=I()},m:function(t,o){e&&xt(e,t,o),R(t,n,o),r=!0},p:function(t,r){var c=16&r?yt(o,[bt(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){pt();var u=e;mt(u.$$.fragment,1,0,(function(){Et(u,1)})),vt()}a?($t((e=new a(i())).$$.fragment),dt(e.$$.fragment,1),xt(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&dt(e.$$.fragment,t),r=!0)},o:function(t){e&&mt(e.$$.fragment,t),r=!1},d:function(t){t&&L(n),e&&Et(e,t)}}}function Wt(t){var e,n;return e=new Bt({props:{error:t[0],status:t[1]}}),{c:function(){$t(e.$$.fragment)},l:function(t){wt(e.$$.fragment,t)},m:function(t,r){xt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(dt(e.$$.fragment,t),n=!0)},o:function(t){mt(e.$$.fragment,t),n=!1},d:function(t){Et(e,t)}}}function Xt(t){var e,n,r,o,a=[Wt,Yt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=I()},l:function(t){n.l(t),r=I()},m:function(t,n){i[e].m(t,n),R(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(pt(),mt(i[u],1,1,(function(){i[u]=null})),vt(),(n=i[e])||(n=i[e]=a[e](t)).c(),dt(n,1),n.m(r.parentNode,r))},i:function(t){o||(dt(n),o=!0)},o:function(t){mt(n),o=!1},d:function(t){i[e].d(t),t&&L(r)}}}function Qt(t){for(var e,n,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Xt]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=g(o,r[a]);return e=new Ft({props:o}),{c:function(){$t(e.$$.fragment)},l:function(t){wt(e.$$.fragment,t)},m:function(t,r){xt(e,t,r),n=!0},p:function(t,n){var o=c(n,1)[0],a=12&o?yt(r,[4&o&&{segment:t[2][0]},8&o&&bt(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i:function(t){n||(dt(e.$$.fragment,t),n=!0)},o:function(t){mt(e.$$.fragment,t),n=!1},d:function(t){Et(e,t)}}}function Zt(t,e,n){var r,o,a=e.stores,i=e.error,c=e.status,u=e.segments,s=e.level0,f=e.level1,l=void 0===f?null:f,h=e.notify;return function(t){X().$$.after_update.push(t)}(h),r=jt,o=a,X().$$.context.set(r,o),t.$$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,i=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,u=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,h=t.notify)},[i,c,u,s,l,a,h]}var te=function(t){f(n,St);var e=zt(n);function n(t){var r;return v(this,n),kt(l(r=e.call(this)),t,Zt,Qt,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),ee=[],ne=[{js:function(){return Promise.all([import("./index.072ed1b1.js"),__inject_styles(["client-3ab87434.css","Card-84a2a677.css","index-ecb72281.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./letters.c90afa60.js"),__inject_styles(["client-3ab87434.css","Card-84a2a677.css","letters-55f60206.css"])]).then((function(t){return t[0]}))}}],re=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/letters\/?$/,parts:[{i:1}]}];
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
function oe(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))}function ae(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var ie,ce=1;var ue,se,fe="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},le={};function he(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var r=c(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=r[1],a=r[2],i=void 0===a?"":a;"string"==typeof n[o]&&(n[o]=[n[o]]),"object"===t(n[o])?n[o].push(i):n[o]=i})),n}function pe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ue))return null;var e=t.pathname.slice(ue.length);if(""===e&&(e="/"),!ee.some((function(t){return t.test(e)})))for(var n=0;n<re.length;n+=1){var r=re[n],o=r.pattern.exec(e);if(o){var a=he(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function ve(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=ae(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=pe(a);if(i)ge(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),fe.pushState({id:ie},"",a.href)}}}else location.hash||e.preventDefault()}}}function de(){return{x:pageXOffset,y:pageYOffset}}function me(t){if(le[ie]=de(),t.state){var e=pe(new URL(location.href));e?ge(e,t.state.id):location.href=location.href}else(function(t){ie=t})(ce=ce+1),fe.replaceState({id:ie},"",location.href)}function ge(t,e,n,r){return oe(this,void 0,void 0,o.mark((function a(){var i,c,u,s;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!e)?ie=e:(c=de(),le[ie]=c,ie=e=++ce,le[ie]=n?c:{x:0,y:0}),o.next=4,se(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(u=le[e],r&&(s=document.getElementById(r.slice(1)))&&(u={x:0,y:s.getBoundingClientRect().top+scrollY}),le[ie]=u,i||s?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),a)})))}function ye(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var be,$e=null;function we(t){return $e&&$e.href===t.href?$e.promise:He(t)}function xe(t){var e=ae(t.target);e&&"prefetch"===e.rel&&function(t){var e=pe(new URL(t,ye(document)));if(e)$e&&t===$e.href||($e={href:t,promise:He(e)}),$e.promise}(e.href)}function Ee(t){clearTimeout(be),be=setTimeout((function(){xe(t)}),20)}function _e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=pe(new URL(t,ye(document)));return n?(fe[e.replaceState?"replaceState":"pushState"]({id:ie},"",t),ge(n,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var ke,Se,Re,Le,je,Ae,Pe,Oe,Ne,Ie="undefined"!=typeof __SAPPER__&&__SAPPER__,qe=!1,Te=[],De="{}",Ce={page:function(t){var e=Lt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:Lt(null),session:Lt(Ie&&Ie.session)};function Ue(t,e){var n=t.error;return Object.assign({error:n},e)}function Ve(t){return oe(this,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ke&&Ce.preloading.set(!0),n=we(t),r=Se={},e.next=5,n;case 5:if(a=e.sent,i=a.redirect,r===Se){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,_e(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return c=a.props,u=a.branch,e.next=17,Ge(u,c,Ue(c,t.page));case 17:case"end":return e.stop()}}),e)})))}function Ge(t,e,n){return oe(this,void 0,void 0,o.mark((function r(){return o.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(Ce.page.set(n),Ce.preloading.set(!1),!ke){r.next=6;break}ke.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:Ce.page.subscribe},preloading:{subscribe:Ce.preloading.subscribe},session:Ce.session},r.next=9,Re;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=Ce.page.notify,ke=new te({target:Ae,props:e,hydrate:!0});case 13:Te=t,De=JSON.stringify(n.query),qe=!0,je=!1;case 17:case"end":return r.stop()}}),r)})))}function Fe(t,e,n,r){if(r!==De)return!0;var o=Te[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function He(t){return oe(this,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u,s,f,l,h,p,v,d=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,a=r.path.split("/").filter(Boolean),i=null,c={error:null,status:200,segments:[a[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},Re||(s=function(){return{}},Re=Ie.preloaded[0]||s.call(u,{host:r.host,path:r.path,query:r.query,params:{}},Le)),l=1,e.prev=7,h=JSON.stringify(r.query),p=n.pattern.exec(r.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return oe(d,void 0,void 0,o.mark((function i(){var s,f,d,m,g,y;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(s=a[n],Fe(n,s,p,h)&&(v=!0),c.segments[l]=a[n+1],e){o.next=5;break}return o.abrupt("return",{segment:s});case 5:if(f=l++,je||v||!Te[n]||Te[n].part!==e.i){o.next=8;break}return o.abrupt("return",Te[n]);case 8:return v=!1,o.next=11,ne[e.i].js();case 11:if(d=o.sent,m=d.default,g=d.preload,!qe&&Ie.preloaded[n+1]){o.next=25;break}if(!g){o.next=21;break}return o.next=18,g.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},Le);case 18:o.t0=o.sent,o.next=22;break;case 21:o.t0={};case 22:y=o.t0,o.next=26;break;case 25:y=Ie.preloaded[n+1];case 26:return o.abrupt("return",c["level".concat(f)]={component:m,props:y,segment:s,match:p,part:e.i});case 27:case"end":return o.stop()}}),i)})))})));case 13:f=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),c.error=e.t0,c.status=500,f=[];case 21:return e.abrupt("return",{redirect:i,props:c,branch:f});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}Ce.session.subscribe((function(t){return oe(void 0,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Le=t,qe){e.next=3;break}return e.abrupt("return");case 3:return je=!0,n=pe(new URL(location.href)),r=Se={},e.next=8,He(n);case 8:if(a=e.sent,i=a.redirect,c=a.props,u=a.branch,r===Se){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,_e(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,Ge(u,c,Ue(c,n.page));case 21:case"end":return e.stop()}}),e)})))})),Pe={target:document.querySelector("#sapper")},Oe=Pe.target,Ae=Oe,Ne=Ie.baseUrl,ue=Ne,se=Ve,"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(function(){fe.scrollRestoration="auto"})),addEventListener("load",(function(){fe.scrollRestoration="manual"})),addEventListener("click",ve),addEventListener("popstate",me),addEventListener("touchstart",xe),addEventListener("mousemove",Ee),Ie.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=Ie.session,a=Ie.preloaded,i=Ie.status,c=Ie.error;Re||(Re=a&&a[0]);var u={error:c,status:i,session:o,level0:{props:Re},level1:{props:{status:i,error:c},component:Bt},segments:a},s=he(r);Ge([],u,{host:e,path:n,query:s,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;fe.replaceState({id:ce},"",n);var r=pe(new URL(location.href));if(r)return ge(r,ce,!0,e)}));export{Et as A,Q as B,A as C,O as D,G as E,it as F,M as G,T as H,p as I,j as J,$ as K,gt as L,Z as M,B as N,I as O,H as P,C as Q,E as R,St as S,pt as T,vt as U,K as V,J as W,k as X,t as _,f as a,u as b,h as c,v as d,l as e,P as f,V as g,U as h,kt as i,L as j,D as k,R as l,S as m,c as n,m as o,N as p,$t as q,o as r,x as s,Y as t,F as u,wt as v,xt as w,q as x,dt as y,mt as z};

import __inject_styles from './inject_styles.fe622066.js';