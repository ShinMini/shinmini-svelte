import{s as x,n as u,e as y}from"../chunks/scheduler.030eb7dd.js";import{S,i as j,g as h,m as d,s as q,h as v,j as g,n as E,f as m,c as C,a as _,y as $,o as b}from"../chunks/index.de91beb6.js";import{p as H}from"../chunks/stores.b2d6b13f.js";function P(p){var f;let a,t=p[0].status+"",r,o,n,i=((f=p[0].error)==null?void 0:f.message)+"",c;return{c(){a=h("h1"),r=d(t),o=q(),n=h("p"),c=d(i)},l(e){a=v(e,"H1",{});var s=g(a);r=E(s,t),s.forEach(m),o=C(e),n=v(e,"P",{});var l=g(n);c=E(l,i),l.forEach(m)},m(e,s){_(e,a,s),$(a,r),_(e,o,s),_(e,n,s),$(n,c)},p(e,[s]){var l;s&1&&t!==(t=e[0].status+"")&&b(r,t),s&1&&i!==(i=((l=e[0].error)==null?void 0:l.message)+"")&&b(c,i)},i:u,o:u,d(e){e&&(m(a),m(o),m(n))}}}function k(p,a,t){let r;return y(p,H,o=>t(0,r=o)),[r]}class B extends S{constructor(a){super(),j(this,a,k,P,x,{})}}export{B as component};
