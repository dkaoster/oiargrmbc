import{S as t,i as n,s as e,e as r,t as o,c as a,a as l,b as i,d as c,f as s,g as u,n as f,h,j as p,q as d,k as v,l as m,m as g,o as y,p as k,r as w,u as T,v as C,w as E,x as j,y as b,z as A}from"./client.b8da4c00.js";var x,P=(x=Math.random,function(t,n=0,e=t.length){let r=e-(n=+n);for(;r;){const e=x()*r--|0,o=t[r+n];t[r+n]=t[e+n],t[e+n]=o}return t});var _={value:()=>{}};function U(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new $(r)}function $(t){this._=t}function N(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function O(t,n){for(var e,r=0,o=t.length;r<o;++r)if((e=t[r]).name===n)return e.value}function I(t,n,e){for(var r=0,o=t.length;r<o;++r)if(t[r].name===n){t[r]=_,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}$.prototype=U.prototype={constructor:$,on:function(t,n){var e,r=this._,o=N(t+"",r),a=-1,l=o.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++a<l;)if(e=(t=o[a]).type)r[e]=I(r[e],t.name,n);else if(null==n)for(e in r)r[e]=I(r[e],t.name,null);return this}for(;++a<l;)if((e=(t=o[a]).type)&&(e=O(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new $(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,o=new Array(e),a=0;a<e;++a)o[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,e=(r=this._[t]).length;a<e;++a)r[a].value.apply(n,o)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],o=0,a=r.length;o<a;++o)r[o].value.apply(n,e)}};U("start","end","cancel","interrupt");var S={},D={};function M(t){return new Function("d","return {"+t.map((function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'})).join(",")+"}")}function R(t){var n=Object.create(null),e=[];return t.forEach((function(t){for(var r in t)r in n||e.push(n[r]=r)})),e}function Z(t,n){var e=t+"",r=e.length;return r<n?new Array(n-r+1).join(0)+e:e}function H(t){var n,e=t.getUTCHours(),r=t.getUTCMinutes(),o=t.getUTCSeconds(),a=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((n=t.getUTCFullYear())<0?"-"+Z(-n,6):n>9999?"+"+Z(n,6):Z(n,4))+"-"+Z(t.getUTCMonth()+1,2)+"-"+Z(t.getUTCDate(),2)+(a?"T"+Z(e,2)+":"+Z(r,2)+":"+Z(o,2)+"."+Z(a,3)+"Z":o?"T"+Z(e,2)+":"+Z(r,2)+":"+Z(o,2)+"Z":r||e?"T"+Z(e,2)+":"+Z(r,2)+"Z":"")}var L=function(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function r(t,n){var r,o=[],a=t.length,l=0,i=0,c=a<=0,s=!1;function u(){if(c)return D;if(s)return s=!1,S;var n,r,o=l;if(34===t.charCodeAt(o)){for(;l++<a&&34!==t.charCodeAt(l)||34===t.charCodeAt(++l););return(n=l)>=a?c=!0:10===(r=t.charCodeAt(l++))?s=!0:13===r&&(s=!0,10===t.charCodeAt(l)&&++l),t.slice(o+1,n-1).replace(/""/g,'"')}for(;l<a;){if(10===(r=t.charCodeAt(n=l++)))s=!0;else if(13===r)s=!0,10===t.charCodeAt(l)&&++l;else if(r!==e)continue;return t.slice(o,n)}return c=!0,t.slice(o,a)}for(10===t.charCodeAt(a-1)&&--a,13===t.charCodeAt(a-1)&&--a;(r=u())!==D;){for(var f=[];r!==S&&r!==D;)f.push(r),r=u();n&&null==(f=n(f,i++))||o.push(f)}return o}function o(n,e){return n.map((function(n){return e.map((function(t){return l(n[t])})).join(t)}))}function a(n){return n.map(l).join(t)}function l(t){return null==t?"":t instanceof Date?H(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,o,a=r(t,(function(t,r){if(e)return e(t,r-1);o=t,e=n?function(t,n){var e=M(t);return function(r,o){return n(e(r),o,t)}}(t,n):M(t)}));return a.columns=o||[],a},parseRows:r,format:function(n,e){return null==e&&(e=R(n)),[e.map(l).join(t)].concat(o(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=R(t)),o(t,n).join("\n")},formatRows:function(t){return t.map(a).join("\n")},formatRow:a,formatValue:l}}(",").parse;function F(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function K(t,n){return fetch(t,n).then(F)}var V,z=(V=L,function(t,n,e){return 2===arguments.length&&"function"==typeof n&&(e=n,n=void 0),K(t,n).then((function(t){return V(t,e)}))});function B(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);if(204!==t.status&&205!==t.status)return t.json()}function J(t){t[15]=t[17][0],t[16]=t[17][1]}function Y(t,n,e){const r=t.slice();return r[18]=n[e],r}function q(t){let n,e,h,p=t[18]+1+"";return{c(){n=r("option"),e=o(p),this.h()},l(t){n=a(t,"OPTION",{value:!0});var r=l(n);e=i(r,p),r.forEach(c),this.h()},h(){n.__value=h=t[18]+1,n.value=n.__value},m(t,r){s(t,n,r),u(n,e)},p:f,d(t){t&&c(n)}}}function G(t){return{c:f,l:f,m:f,p:f,d:f}}function Q(t){J(t);let n,e,r,a,l=t[9](t[15])+"",u={ctx:t,current:null,token:null,hasCatch:!1,pending:tt,then:X,catch:W,value:5};return h(a=Promise.resolve(t[6](t[16])),u),{c(){n=o(l),e=p(),r=b(),u.block.c()},l(t){n=i(t,l),e=v(t),r=b(),u.block.l(t)},m(t,o){s(t,n,o),s(t,e,o),s(t,r,o),u.block.m(t,u.anchor=o),u.mount=()=>r.parentNode,u.anchor=r},p(e,r){if(J(t=e),24&r&&l!==(l=t[9](t[15])+"")&&A(n,l),u.ctx=t,24&r&&a!==(a=Promise.resolve(t[6](t[16])))&&h(a,u));else{const n=t.slice();n[5]=u.resolved,u.block.p(n,r)}},d(t){t&&c(n),t&&c(e),t&&c(r),u.block.d(t),u.token=null,u=null}}}function W(t){return{c:f,l:f,m:f,p:f,d:f}}function X(t){let n,e,f,h,d,g,y,k,w=t[5][t[1]].Traditional+"",T=t[8](t[7](t[5][t[1]].Traditional))+"",C=t[7](t[5][t[1]].Traditional)+"";return{c(){n=r("h1"),e=o(w),f=p(),h=r("p"),d=o(T),g=p(),y=r("p"),k=o(C),this.h()},l(t){n=a(t,"H1",{class:!0});var r=l(n);e=i(r,w),r.forEach(c),f=v(t),h=a(t,"P",{class:!0});var o=l(h);d=i(o,T),o.forEach(c),g=v(t),y=a(t,"P",{class:!0});var s=l(y);k=i(s,C),s.forEach(c),this.h()},h(){m(n,"class","svelte-1h0ki0p"),m(h,"class","cj-zh svelte-1h0ki0p"),m(y,"class","cj-en svelte-1h0ki0p")},m(t,r){s(t,n,r),u(n,e),s(t,f,r),s(t,h,r),u(h,d),s(t,g,r),s(t,y,r),u(y,k)},p(t,n){26&n&&w!==(w=t[5][t[1]].Traditional+"")&&A(e,w),26&n&&T!==(T=t[8](t[7](t[5][t[1]].Traditional))+"")&&A(d,T),26&n&&C!==(C=t[7](t[5][t[1]].Traditional)+"")&&A(k,C)},d(t){t&&c(n),t&&c(f),t&&c(h),t&&c(g),t&&c(y)}}}function tt(t){return{c:f,l:f,m:f,p:f,d:f}}function nt(t){let n,e;return{c(){n=r("h1"),e=o("載入中..."),this.h()},l(t){n=a(t,"H1",{class:!0});var r=l(n);e=i(r,"載入中..."),r.forEach(c),this.h()},h(){m(n,"class","svelte-1h0ki0p")},m(t,r){s(t,n,r),u(n,e)},p:f,d(t){t&&c(n)}}}function et(t){let n,e,o,i,C,j,b,A,x,P,_,U=[...Array(10).keys()],$=[];for(let n=0;n<U.length;n+=1)$[n]=q(Y(t,U,n));let N={ctx:t,current:null,token:null,hasCatch:!1,pending:nt,then:Q,catch:G,value:17};return h(b=Promise.all([t[3],t[4]]),N),{c(){n=r("link"),e=r("link"),o=p(),i=r("div"),C=r("select");for(let t=0;t<$.length;t+=1)$[t].c();j=p(),N.block.c(),A=p(),x=r("input"),this.h()},l(t){const r=d('[data-svelte="svelte-1j7keu9"]',document.head);n=a(r,"LINK",{rel:!0,href:!0}),e=a(r,"LINK",{href:!0,rel:!0}),r.forEach(c),o=v(t),i=a(t,"DIV",{class:!0});var s=l(i);C=a(s,"SELECT",{name:!0,id:!0});var u=l(C);for(let t=0;t<$.length;t+=1)$[t].l(u);u.forEach(c),j=v(s),N.block.l(s),A=v(s),x=a(s,"INPUT",{type:!0,class:!0}),s.forEach(c),this.h()},h(){document.title="倉頡練習",m(n,"rel","preconnect"),m(n,"href","https://fonts.gstatic.com"),m(e,"href","https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap"),m(e,"rel","stylesheet"),m(C,"name","level"),m(C,"id","level"),void 0===t[0]&&E((()=>t[10].call(C))),m(x,"type","text"),m(x,"class","svelte-1h0ki0p"),m(i,"class","wrap svelte-1h0ki0p")},m(r,a){u(document.head,n),u(document.head,e),s(r,o,a),s(r,i,a),u(i,C);for(let t=0;t<$.length;t+=1)$[t].m(C,null);g(C,t[0]),u(i,j),N.block.m(i,N.anchor=null),N.mount=()=>i,N.anchor=A,u(i,A),u(i,x),y(x,t[2]),P||(_=[k(C,"change",t[10]),k(x,"input",t[11])],P=!0)},p(n,[e]){if(t=n,0&e){let n;for(U=[...Array(10).keys()],n=0;n<U.length;n+=1){const r=Y(t,U,n);$[n]?$[n].p(r,e):($[n]=q(r),$[n].c(),$[n].m(C,null))}for(;n<$.length;n+=1)$[n].d(1);$.length=U.length}if(1&e&&g(C,t[0]),N.ctx=t,24&e&&b!==(b=Promise.all([t[3],t[4]]))&&h(b,N));else{const n=t.slice();n[17]=N.resolved,N.block.p(n,e)}4&e&&x.value!==t[2]&&y(x,t[2])},i:f,o:f,d(t){c(n),c(e),t&&c(o),t&&c(i),w($,t),N.block.d(),N.token=null,N=null,P=!1,T(_)}}}function rt(t,n,e){const r={A:"日",B:"月",C:"金",D:"木",E:"水",F:"火",G:"土",H:"竹",I:"戈",J:"十",K:"大",L:"中",M:"一",N:"弓",O:"人",P:"心",Q:"手",R:"口",S:"尸",T:"廿",U:"山",V:"女",W:"田",X:"難",Y:"卜",Z:"Z"};let o,a,l=!1,i="1",c=0,s="";const u=t=>t.split("").map((t=>a[t].toUpperCase())).join(" ");let f,h;return C((()=>{e(12,l=!0)})),t.$$.update=()=>{4096&t.$$.dirty&&e(3,f=l&&function(t,n){return fetch(t,n).then(B)}("data/all_chars.json")),4097&t.$$.dirty&&e(4,h=l&&z(`data/mandarin-${i}000.csv`)),1&t.$$.dirty&&i&&e(1,c=0),38&t.$$.dirty&&(!o||s!==o[c].Traditional&&s.toUpperCase()!==u(o[c].Traditional)||(e(1,c++,c),e(2,s="")))},[i,c,s,f,h,o,t=>(e(5,o=P(t)),o),u,t=>t.split("").map((t=>r[t]||" ")).join(""),t=>(a=t,""),function(){i=j(this),e(0,i)},function(){s=this.value,e(2,s),e(5,o),e(1,c),e(0,i)}]}export default class extends t{constructor(t){super(),n(this,t,rt,et,e,{})}}