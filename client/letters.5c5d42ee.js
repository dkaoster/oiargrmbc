import{S as t,i as s,s as a,a as e,c as r,q as n,d as o,b as c,e as l,f as i,m as h,t as $,g as d,h as f,j as p,k as u,l as m,n as g,p as x,w as j,r as v,E as y}from"./client.5016a9d7.js";import{C,c as b}from"./Card.a3f4f200.js";function k(t){let s,a;return{c(){s=p("h1"),a=u(t[1]),this.h()},l(e){s=m(e,"H1",{class:!0});var r=g(s);a=x(r,t[1]),r.forEach(o),this.h()},h(){j(s,"class","svelte-13h7up0")},m(t,e){i(t,s,e),v(s,a)},p(t,s){2&s&&y(a,t[1])},d(t){t&&o(s)}}}function E(t){let s,a,p;return a=new C({props:{inputText:t[0],inputTextCallback:t[2],color:"#1dd1a1",$$slots:{default:[k]},$$scope:{ctx:t}}}),{c(){s=e(),r(a.$$.fragment),this.h()},l(t){n('[data-svelte="svelte-1thlaaj"]',document.head).forEach(o),s=c(t),l(a.$$.fragment,t),this.h()},h(){document.title="中文字母練習"},m(t,e){i(t,s,e),h(a,t,e),p=!0},p(t,[s]){const e={};1&s&&(e.inputText=t[0]),18&s&&(e.$$scope={dirty:s,ctx:t}),a.$set(e)},i(t){p||($(a.$$.fragment,t),p=!0)},o(t){d(a.$$.fragment,t),p=!1},d(t){t&&o(s),f(a,t)}}}function T(t,s,a){let e,r;let n;return t.$$.update=()=>{if(9&t.$$.dirty&&(r&&(r.length>1&&a(0,r=r.slice(-1)),a(0,r=b[r.toUpperCase()]||"")),void 0===r||r===b[e])){const t=Object.keys(b).filter((t=>t!==e));a(3,e=t[Math.floor(Math.random()*t.length)]),a(0,r="")}8&t.$$.dirty&&a(1,n=b[e]||"")},[r,n,t=>{a(0,r=t)}]}export default class extends t{constructor(t){super(),s(this,t,T,E,a,{})}}