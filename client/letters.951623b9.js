import{S as t,i as s,s as a,h as e,j as r,q as c,d as l,k as n,l as o,f as i,m as h,t as $,p as d,r as f,v as p,w as u,c as m,b as x,x as b,e as g,g as v,H as j}from"./client.964b71b2.js";import{C as y,c as C}from"./Card.05a71ef5.js";function k(t){let s,a;return{c(){s=p("h1"),a=u(t[1]),this.h()},l(e){s=m(e,"H1",{class:!0});var r=x(s);a=b(r,t[1]),r.forEach(l),this.h()},h(){g(s,"class","svelte-81qx0b")},m(t,e){i(t,s,e),v(s,a)},p(t,s){2&s&&j(a,t[1])},d(t){t&&l(s)}}}function O(t){let s,a,p;return a=new y({props:{inputText:t[0],inputTextCallback:t[2],color:"#1dd1a1",$$slots:{default:[k]},$$scope:{ctx:t}}}),{c(){s=e(),r(a.$$.fragment),this.h()},l(t){c('[data-svelte="svelte-1thlaaj"]',document.head).forEach(l),s=n(t),o(a.$$.fragment,t),this.h()},h(){document.title="中文字母練習"},m(t,e){i(t,s,e),h(a,t,e),p=!0},p(t,[s]){const e={};1&s&&(e.inputText=t[0]),18&s&&(e.$$scope={dirty:s,ctx:t}),a.$set(e)},i(t){p||($(a.$$.fragment,t),p=!0)},o(t){d(a.$$.fragment,t),p=!1},d(t){t&&l(s),f(a,t)}}}function T(t,s,a){let e,r;let c;return t.$$.update=()=>{if(9&t.$$.dirty&&(r&&(r.length>1&&a(0,r=r.slice(-1)),a(0,r=C[r.toUpperCase()]||(Object.values(C).indexOf(r)>=0?r:""))),void 0===r||r===C[e])){const t=Object.keys(C).filter((t=>t!==e));a(3,e=t[Math.floor(Math.random()*t.length)]),a(0,r="")}8&t.$$.dirty&&a(1,c=C[e]||"")},[r,c,t=>{a(0,r=t)}]}export default class extends t{constructor(t){super(),s(this,t,T,O,a,{})}}
