import{S as K,i as O,s as V,k as _,q as d,a as B,l as v,m as y,r as f,h as a,c as C,n as W,b as h,G as p,I as $,B as j}from"../../chunks/index-44c6832b.js";import{j as o}from"../../chunks/singletons-1a43d08d.js";o.disable_scroll_handling;const w=o.goto;o.invalidate;o.invalidateAll;o.preload_data;o.preload_code;o.before_navigate;o.after_navigate;function G(b){let e,n,r,s,k,c,S,x,m,i,E,T,P;return{c(){e=_("h1"),n=d("Welcome to SvelteKit"),r=B(),s=_("p"),k=d("Visit "),c=_("a"),S=d("kit.svelte.dev"),x=d(" to read the documentation"),m=B(),i=_("button"),E=d("pay"),this.h()},l(t){e=v(t,"H1",{});var l=y(e);n=f(l,"Welcome to SvelteKit"),l.forEach(a),r=C(t),s=v(t,"P",{});var u=y(s);k=f(u,"Visit "),c=v(u,"A",{href:!0});var q=y(c);S=f(q,"kit.svelte.dev"),q.forEach(a),x=f(u," to read the documentation"),u.forEach(a),m=C(t),i=v(t,"BUTTON",{});var A=y(i);E=f(A,"pay"),A.forEach(a),this.h()},h(){W(c,"href","https://kit.svelte.dev")},m(t,l){h(t,e,l),p(e,n),h(t,r,l),h(t,s,l),p(s,k),p(s,c),p(c,S),p(s,x),h(t,m,l),h(t,i,l),p(i,E),T||(P=$(i,"click",b[0]),T=!0)},p:j,i:j,o:j,d(t){t&&a(e),t&&a(r),t&&a(s),t&&a(m),t&&a(i),T=!1,P()}}}function H(b){async function e(){const n=await fetch("/api/pay",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}}).then(r=>r.json());console.log(n),w(n.result)}return[e]}class U extends K{constructor(e){super(),O(this,e,H,G,V,{})}}export{U as default};