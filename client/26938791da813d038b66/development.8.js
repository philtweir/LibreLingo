(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{33:function(e,t,c){"use strict";const s=(e,t,c,s)=>{if("length"===c||"prototype"===c)return;const n=Object.getOwnPropertyDescriptor(e,c),o=Object.getOwnPropertyDescriptor(t,c);!b(n,o)&&s||Object.defineProperty(e,c,o)},b=function(e,t){return void 0===e||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},n=(e,t)=>`/* Wrapped ${e}*/\n${t}`,o=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),r=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");e.exports=(e,t,{ignoreNonConfigurable:c=!1}={})=>{const{name:b}=e;for(const b of Reflect.ownKeys(t))s(e,t,b,c);return((e,t)=>{const c=Object.getPrototypeOf(t);c!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,c)})(e,t),((e,t,c)=>{const s=""===c?"":`with ${c.trim()}() `,b=n.bind(null,s,t.toString());Object.defineProperty(b,"name",r),Object.defineProperty(e,"toString",{...o,value:b})})(e,t,b),e}},352:function(e,t,c){"use strict";c.r(t);var s=c(0),b=c(38),n=c(54),o=c(64),r=c(79),i=c(36),O=c(37),a=c(43),j=c(5),l=c(42),$=c.n(l);function g(e,t,c){const s=e.slice();return s[7]=t[c].name,s[8]=t[c].color,s}function f(e,t,c){const s=e.slice();return s[2]=t[c].title,s[3]=t[c].html_url,s[4]=t[c].labels,s}function h(e){let t,c,b;return c=new a.a({props:{$$slots:{default:[d]},$$scope:{ctx:e}}}),{c(){t=Object(s.A)("div"),Object(s.t)(c.$$.fragment),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var b=Object(s.m)(t);Object(s.n)(c.$$.fragment,b),b.forEach(s.z),this.h()},h(){Object(s.i)(t,"class","pageloader is-active")},m(e,n){Object(s.K)(e,t,n),Object(s.O)(c,t,null),b=!0},i(e){b||(Object(s.gb)(c.$$.fragment,e),b=!0)},o(e){Object(s.hb)(c.$$.fragment,e),b=!1},d(e){e&&Object(s.z)(t),Object(s.x)(c)}}}function d(e){let t;return{c(){t=Object(s.eb)("LibreLingo")},l(e){t=Object(s.q)(e,"LibreLingo")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function m(e){let t,c;return{c(){t=Object(s.A)("img"),this.h()},l(e){t=Object(s.o)(e,"IMG",{src:!0,alt:!0}),this.h()},h(){t.src!==(c="images/logo.svg")&&Object(s.i)(t,"src","images/logo.svg"),Object(s.i)(t,"alt","LibreLingo")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function u(e){let t,c;return t=new a.a({props:{$$slots:{default:[m]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e)},m(e,b){Object(s.O)(t,e,b),c=!0},p(e,c){const s={};2048&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.gb)(t.$$.fragment,e),c=!0)},o(e){Object(s.hb)(t.$$.fragment,e),c=!1},d(e){Object(s.x)(t,e)}}}function p(e){let t,c=e[1]("index.subtitle")+"";return{c(){t=Object(s.eb)(c)},l(e){t=Object(s.q)(e,c)},m(e,c){Object(s.K)(e,t,c)},p(e,b){2&b&&c!==(c=e[1]("index.subtitle")+"")&&Object(s.Z)(t,c)},d(e){e&&Object(s.z)(t)}}}function v(e){let t,c,b,n,r,i,O,j,l,$,g,f,h,d,m=e[1]("index.start_spanish_course")+"",u=e[1]("index.start_german_course")+"",v=e[1]("index.about_librelingo")+"";return t=new a.a({props:{size:2,isSubtitle:!0,$$slots:{default:[p]},$$scope:{ctx:e}}}),h=new o.a({}),{c(){Object(s.t)(t.$$.fragment),c=Object(s.cb)(),b=Object(s.A)("div"),n=Object(s.A)("a"),r=Object(s.eb)(m),i=Object(s.cb)(),O=Object(s.A)("a"),j=Object(s.eb)(u),l=Object(s.cb)(),$=Object(s.A)("a"),g=Object(s.eb)(v),f=Object(s.cb)(),Object(s.t)(h.$$.fragment),this.h()},l(e){Object(s.n)(t.$$.fragment,e),c=Object(s.p)(e),b=Object(s.o)(e,"DIV",{class:!0});var o=Object(s.m)(b);n=Object(s.o)(o,"A",{class:!0,href:!0});var a=Object(s.m)(n);r=Object(s.q)(a,m),a.forEach(s.z),i=Object(s.p)(o),O=Object(s.o)(o,"A",{class:!0,href:!0});var d=Object(s.m)(O);j=Object(s.q)(d,u),d.forEach(s.z),l=Object(s.p)(o),$=Object(s.o)(o,"A",{class:!0,href:!0});var p=Object(s.m)($);g=Object(s.q)(p,v),p.forEach(s.z),f=Object(s.p)(o),Object(s.n)(h.$$.fragment,o),o.forEach(s.z),this.h()},h(){Object(s.i)(n,"class","button is-primary is-inverted is-outlined"),Object(s.i)(n,"href","course/spanish-from-english"),Object(s.i)(O,"class","button is-primary is-inverted is-outlined is-hidden"),Object(s.i)(O,"href","course/german-from-english"),Object(s.i)($,"class","button is-primary is-inverted is-outlined"),Object(s.i)($,"href","about"),Object(s.i)(b,"class","buttons")},m(e,o){Object(s.O)(t,e,o),Object(s.K)(e,c,o),Object(s.K)(e,b,o),Object(s.g)(b,n),Object(s.g)(n,r),Object(s.g)(b,i),Object(s.g)(b,O),Object(s.g)(O,j),Object(s.g)(b,l),Object(s.g)(b,$),Object(s.g)($,g),Object(s.g)(b,f),Object(s.O)(h,b,null),d=!0},p(e,c){const b={};2050&c&&(b.$$scope={dirty:c,ctx:e}),t.$set(b),(!d||2&c)&&m!==(m=e[1]("index.start_spanish_course")+"")&&Object(s.Z)(r,m),(!d||2&c)&&u!==(u=e[1]("index.start_german_course")+"")&&Object(s.Z)(j,u),(!d||2&c)&&v!==(v=e[1]("index.about_librelingo")+"")&&Object(s.Z)(g,v)},i(e){d||(Object(s.gb)(t.$$.fragment,e),Object(s.gb)(h.$$.fragment,e),d=!0)},o(e){Object(s.hb)(t.$$.fragment,e),Object(s.hb)(h.$$.fragment,e),d=!1},d(e){Object(s.x)(t,e),e&&Object(s.z)(c),e&&Object(s.z)(b),Object(s.x)(h)}}}function x(e){let t;return{c(){t=Object(s.eb)("Recent major new features")},l(e){t=Object(s.q)(e,"Recent major new features")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function z(e){let t,c,b;return c=new n.a({props:{shadow:!1,glow:!0}}),{c(){t=Object(s.A)("div"),Object(s.t)(c.$$.fragment),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var b=Object(s.m)(t);Object(s.n)(c.$$.fragment,b),b.forEach(s.z),this.h()},h(){Object(s.i)(t,"class","mascot svelte-1xeeodg")},m(e,n){Object(s.K)(e,t,n),Object(s.O)(c,t,null),b=!0},p:s.P,i(e){b||(Object(s.gb)(c.$$.fragment,e),b=!0)},o(e){Object(s.hb)(c.$$.fragment,e),b=!1},d(e){e&&Object(s.z)(t),Object(s.x)(c)}}}function w(e){let t,c,b,n,o,r,i,O,a,j;return{c(){t=Object(s.A)("div"),c=Object(s.A)("div"),b=Object(s.A)("h3"),n=Object(s.eb)("A new mascot designed by\n                "),o=Object(s.A)("a"),r=Object(s.eb)("Caroline Delesalle"),i=Object(s.cb)(),O=Object(s.A)("p"),a=Object(s.A)("a"),j=Object(s.eb)("Want to help naming it?"),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var l=Object(s.m)(t);c=Object(s.o)(l,"DIV",{});var $=Object(s.m)(c);b=Object(s.o)($,"H3",{class:!0});var g=Object(s.m)(b);n=Object(s.q)(g,"A new mascot designed by\n                "),o=Object(s.o)(g,"A",{href:!0,target:!0,class:!0});var f=Object(s.m)(o);r=Object(s.q)(f,"Caroline Delesalle"),f.forEach(s.z),g.forEach(s.z),i=Object(s.p)($),O=Object(s.o)($,"P",{});var h=Object(s.m)(O);a=Object(s.o)(h,"A",{href:!0,class:!0});var d=Object(s.m)(a);j=Object(s.q)(d,"Want to help naming it?"),d.forEach(s.z),h.forEach(s.z),$.forEach(s.z),l.forEach(s.z),this.h()},h(){Object(s.i)(o,"href","https://carolinedelesalle.com/"),Object(s.i)(o,"target","_blank"),Object(s.i)(o,"class","link svelte-1xeeodg"),Object(s.i)(b,"class","is-size-3 is-size-4-mobile svelte-1xeeodg"),Object(s.i)(a,"href","https://github.com/kantord/LibreLingo/issues/367"),Object(s.i)(a,"class","link svelte-1xeeodg"),Object(s.i)(t,"class","is-centered-both-ways svelte-1xeeodg")},m(e,l){Object(s.K)(e,t,l),Object(s.g)(t,c),Object(s.g)(c,b),Object(s.g)(b,n),Object(s.g)(b,o),Object(s.g)(o,r),Object(s.g)(c,i),Object(s.g)(c,O),Object(s.g)(O,a),Object(s.g)(a,j)},d(e){e&&Object(s.z)(t)}}}function y(e){let t,c,b,n;return t=new i.a({props:{size:"1/4",$$slots:{default:[z]},$$scope:{ctx:e}}}),b=new i.a({props:{$$slots:{default:[w]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment),c=Object(s.cb)(),Object(s.t)(b.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e),c=Object(s.p)(e),Object(s.n)(b.$$.fragment,e)},m(e,o){Object(s.O)(t,e,o),Object(s.K)(e,c,o),Object(s.O)(b,e,o),n=!0},p(e,c){const s={};2048&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s);const n={};2048&c&&(n.$$scope={dirty:c,ctx:e}),b.$set(n)},i(e){n||(Object(s.gb)(t.$$.fragment,e),Object(s.gb)(b.$$.fragment,e),n=!0)},o(e){Object(s.hb)(t.$$.fragment,e),Object(s.hb)(b.$$.fragment,e),n=!1},d(e){Object(s.x)(t,e),e&&Object(s.z)(c),Object(s.x)(b,e)}}}function k(e){let t;return{c(){t=Object(s.eb)("Spaced repetition")},l(e){t=Object(s.q)(e,"Spaced repetition")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function A(e){let t,c,b;return c=new a.a({props:{size:3,$$slots:{default:[k]},$$scope:{ctx:e}}}),{c(){t=Object(s.A)("div"),Object(s.t)(c.$$.fragment),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var b=Object(s.m)(t);Object(s.n)(c.$$.fragment,b),b.forEach(s.z),this.h()},h(){Object(s.i)(t,"class"," has-text-centered is-centered-both-ways svelte-1xeeodg")},m(e,n){Object(s.K)(e,t,n),Object(s.O)(c,t,null),b=!0},p(e,t){const s={};2048&t&&(s.$$scope={dirty:t,ctx:e}),c.$set(s)},i(e){b||(Object(s.gb)(c.$$.fragment,e),b=!0)},o(e){Object(s.hb)(c.$$.fragment,e),b=!1},d(e){e&&Object(s.z)(t),Object(s.x)(c)}}}function E(e){let t,c;return{c(){t=Object(s.A)("img"),this.h()},l(e){t=Object(s.o)(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){t.src!==(c="images/screenshot-spaced-repetition.png")&&Object(s.i)(t,"src","images/screenshot-spaced-repetition.png"),Object(s.i)(t,"alt",""),Object(s.i)(t,"class","screenshot svelte-1xeeodg")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function D(e){let t,c,b,n;return t=new i.a({props:{$$slots:{default:[A]},$$scope:{ctx:e}}}),b=new i.a({props:{sizeTablet:"1/3",$$slots:{default:[E]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment),c=Object(s.cb)(),Object(s.t)(b.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e),c=Object(s.p)(e),Object(s.n)(b.$$.fragment,e)},m(e,o){Object(s.O)(t,e,o),Object(s.K)(e,c,o),Object(s.O)(b,e,o),n=!0},p(e,c){const s={};2048&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s);const n={};2048&c&&(n.$$scope={dirty:c,ctx:e}),b.$set(n)},i(e){n||(Object(s.gb)(t.$$.fragment,e),Object(s.gb)(b.$$.fragment,e),n=!0)},o(e){Object(s.hb)(t.$$.fragment,e),Object(s.hb)(b.$$.fragment,e),n=!1},d(e){Object(s.x)(t,e),e&&Object(s.z)(c),Object(s.x)(b,e)}}}function K(e){let t,c;return{c(){t=Object(s.A)("img"),this.h()},l(e){t=Object(s.o)(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){t.src!==(c="images/screenshot-chips-challenge.png")&&Object(s.i)(t,"src","images/screenshot-chips-challenge.png"),Object(s.i)(t,"alt",""),Object(s.i)(t,"class","screenshot svelte-1xeeodg")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function I(e){let t;return{c(){t=Object(s.eb)("Practice word order")},l(e){t=Object(s.q)(e,"Practice word order")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function q(e){let t,c,b;return c=new a.a({props:{size:3,$$slots:{default:[I]},$$scope:{ctx:e}}}),{c(){t=Object(s.A)("div"),Object(s.t)(c.$$.fragment),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var b=Object(s.m)(t);Object(s.n)(c.$$.fragment,b),b.forEach(s.z),this.h()},h(){Object(s.i)(t,"class","has-text-centered is-centered-both-ways svelte-1xeeodg")},m(e,n){Object(s.K)(e,t,n),Object(s.O)(c,t,null),b=!0},p(e,t){const s={};2048&t&&(s.$$scope={dirty:t,ctx:e}),c.$set(s)},i(e){b||(Object(s.gb)(c.$$.fragment,e),b=!0)},o(e){Object(s.hb)(c.$$.fragment,e),b=!1},d(e){e&&Object(s.z)(t),Object(s.x)(c)}}}function V(e){let t,c,b,n;return t=new i.a({props:{sizeTablet:"1/3",$$slots:{default:[K]},$$scope:{ctx:e}}}),b=new i.a({props:{$$slots:{default:[q]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment),c=Object(s.cb)(),Object(s.t)(b.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e),c=Object(s.p)(e),Object(s.n)(b.$$.fragment,e)},m(e,o){Object(s.O)(t,e,o),Object(s.K)(e,c,o),Object(s.O)(b,e,o),n=!0},p(e,c){const s={};2048&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s);const n={};2048&c&&(n.$$scope={dirty:c,ctx:e}),b.$set(n)},i(e){n||(Object(s.gb)(t.$$.fragment,e),Object(s.gb)(b.$$.fragment,e),n=!0)},o(e){Object(s.hb)(t.$$.fragment,e),Object(s.hb)(b.$$.fragment,e),n=!1},d(e){Object(s.x)(t,e),e&&Object(s.z)(c),Object(s.x)(b,e)}}}function P(e){let t;return{c(){t=Object(s.eb)("Course editor")},l(e){t=Object(s.q)(e,"Course editor")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function _(e){let t,c,b;return c=new a.a({props:{size:3,$$slots:{default:[P]},$$scope:{ctx:e}}}),{c(){t=Object(s.A)("div"),Object(s.t)(c.$$.fragment),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var b=Object(s.m)(t);Object(s.n)(c.$$.fragment,b),b.forEach(s.z),this.h()},h(){Object(s.i)(t,"class","has-text-centered is-centered-both-ways svelte-1xeeodg")},m(e,n){Object(s.K)(e,t,n),Object(s.O)(c,t,null),b=!0},p(e,t){const s={};2048&t&&(s.$$scope={dirty:t,ctx:e}),c.$set(s)},i(e){b||(Object(s.gb)(c.$$.fragment,e),b=!0)},o(e){Object(s.hb)(c.$$.fragment,e),b=!1},d(e){e&&Object(s.z)(t),Object(s.x)(c)}}}function L(e){let t,c;return{c(){t=Object(s.A)("img"),this.h()},l(e){t=Object(s.o)(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){t.src!==(c="images/screenshot-course-editor.png")&&Object(s.i)(t,"src","images/screenshot-course-editor.png"),Object(s.i)(t,"alt",""),Object(s.i)(t,"class","screenshot svelte-1xeeodg")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function T(e){let t,c,b,n;return t=new i.a({props:{$$slots:{default:[_]},$$scope:{ctx:e}}}),b=new i.a({props:{sizeTablet:"1/3",$$slots:{default:[L]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment),c=Object(s.cb)(),Object(s.t)(b.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e),c=Object(s.p)(e),Object(s.n)(b.$$.fragment,e)},m(e,o){Object(s.O)(t,e,o),Object(s.K)(e,c,o),Object(s.O)(b,e,o),n=!0},p(e,c){const s={};2048&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s);const n={};2048&c&&(n.$$scope={dirty:c,ctx:e}),b.$set(n)},i(e){n||(Object(s.gb)(t.$$.fragment,e),Object(s.gb)(b.$$.fragment,e),n=!0)},o(e){Object(s.hb)(t.$$.fragment,e),Object(s.hb)(b.$$.fragment,e),n=!1},d(e){Object(s.x)(t,e),e&&Object(s.z)(c),Object(s.x)(b,e)}}}function C(e){let t,c;return{c(){t=Object(s.A)("img"),this.h()},l(e){t=Object(s.o)(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){t.src!==(c="images/screenshot-dictionary.png")&&Object(s.i)(t,"src","images/screenshot-dictionary.png"),Object(s.i)(t,"alt",""),Object(s.i)(t,"class","screenshot svelte-1xeeodg")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function M(e){let t;return{c(){t=Object(s.eb)("Built-in mini-dictionary")},l(e){t=Object(s.q)(e,"Built-in mini-dictionary")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function S(e){let t,c,b;return c=new a.a({props:{size:3,$$slots:{default:[M]},$$scope:{ctx:e}}}),{c(){t=Object(s.A)("div"),Object(s.t)(c.$$.fragment),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var b=Object(s.m)(t);Object(s.n)(c.$$.fragment,b),b.forEach(s.z),this.h()},h(){Object(s.i)(t,"class","has-text-centered is-centered-both-ways svelte-1xeeodg")},m(e,n){Object(s.K)(e,t,n),Object(s.O)(c,t,null),b=!0},p(e,t){const s={};2048&t&&(s.$$scope={dirty:t,ctx:e}),c.$set(s)},i(e){b||(Object(s.gb)(c.$$.fragment,e),b=!0)},o(e){Object(s.hb)(c.$$.fragment,e),b=!1},d(e){e&&Object(s.z)(t),Object(s.x)(c)}}}function R(e){let t,c,b,n;return t=new i.a({props:{sizeTablet:"1/3",$$slots:{default:[C]},$$scope:{ctx:e}}}),b=new i.a({props:{$$slots:{default:[S]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment),c=Object(s.cb)(),Object(s.t)(b.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e),c=Object(s.p)(e),Object(s.n)(b.$$.fragment,e)},m(e,o){Object(s.O)(t,e,o),Object(s.K)(e,c,o),Object(s.O)(b,e,o),n=!0},p(e,c){const s={};2048&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s);const n={};2048&c&&(n.$$scope={dirty:c,ctx:e}),b.$set(n)},i(e){n||(Object(s.gb)(t.$$.fragment,e),Object(s.gb)(b.$$.fragment,e),n=!0)},o(e){Object(s.hb)(t.$$.fragment,e),Object(s.hb)(b.$$.fragment,e),n=!1},d(e){Object(s.x)(t,e),e&&Object(s.z)(c),Object(s.x)(b,e)}}}function W(e){let t;return{c(){t=Object(s.eb)("Progress towards alpha release")},l(e){t=Object(s.q)(e,"Progress towards alpha release")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function B(e){let t,c,b,n,o,r;b=new a.a({props:{size:3,$$slots:{default:[J]},$$scope:{ctx:e}}});let i=e[0],O=[];for(let t=0;t<i.length;t+=1)O[t]=X(f(e,i,t));return{c(){t=Object(s.A)("section"),c=Object(s.A)("div"),Object(s.t)(b.$$.fragment),n=Object(s.cb)(),o=Object(s.A)("div");for(let e=0;e<O.length;e+=1)O[e].c();this.h()},l(e){t=Object(s.o)(e,"SECTION",{class:!0});var r=Object(s.m)(t);c=Object(s.o)(r,"DIV",{class:!0});var i=Object(s.m)(c);Object(s.n)(b.$$.fragment,i),n=Object(s.p)(i),o=Object(s.o)(i,"DIV",{class:!0});var a=Object(s.m)(o);for(let e=0;e<O.length;e+=1)O[e].l(a);a.forEach(s.z),i.forEach(s.z),r.forEach(s.z),this.h()},h(){Object(s.i)(o,"class","columns is-multiline svelte-1xeeodg"),Object(s.i)(c,"class","container"),Object(s.i)(t,"class","section")},m(e,i){Object(s.K)(e,t,i),Object(s.g)(t,c),Object(s.O)(b,c,null),Object(s.g)(c,n),Object(s.g)(c,o);for(let e=0;e<O.length;e+=1)O[e].m(o,null);r=!0},p(e,t){const c={};if(2048&t&&(c.$$scope={dirty:t,ctx:e}),b.$set(c),1&t){let c;for(i=e[0],c=0;c<i.length;c+=1){const s=f(e,i,c);O[c]?O[c].p(s,t):(O[c]=X(s),O[c].c(),O[c].m(o,null))}for(;c<O.length;c+=1)O[c].d(1);O.length=i.length}},i(e){r||(Object(s.gb)(b.$$.fragment,e),r=!0)},o(e){Object(s.hb)(b.$$.fragment,e),r=!1},d(e){e&&Object(s.z)(t),Object(s.x)(b),Object(s.y)(O,e)}}}function J(e){let t;return{c(){t=Object(s.eb)("Looking for a challange? Check out these issues:")},l(e){t=Object(s.q)(e,"Looking for a challange? Check out these issues:")},m(e,c){Object(s.K)(e,t,c)},d(e){e&&Object(s.z)(t)}}}function G(e){let t,c,b,n,o=e[7]+"";return{c(){t=Object(s.A)("div"),c=Object(s.eb)(o),b=Object(s.cb)(),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0,style:!0});var n=Object(s.m)(t);c=Object(s.q)(n,o),b=Object(s.p)(n),n.forEach(s.z),this.h()},h(){Object(s.i)(t,"class","tag svelte-1xeeodg"),Object(s.i)(t,"style",n=`background-color: #${e[8]}`)},m(e,n){Object(s.K)(e,t,n),Object(s.g)(t,c),Object(s.g)(t,b)},p(e,b){1&b&&o!==(o=e[7]+"")&&Object(s.Z)(c,o),1&b&&n!==(n=`background-color: #${e[8]}`)&&Object(s.i)(t,"style",n)},d(e){e&&Object(s.z)(t)}}}function X(e){let t,c,b,n,o,r,i,O,a,j,l,$,f,h,d,m,u=e[2]+"",p=e[4],v=[];for(let t=0;t<p.length;t+=1)v[t]=G(g(e,p,t));return{c(){t=Object(s.A)("div"),c=Object(s.A)("a"),b=Object(s.A)("div"),n=Object(s.A)("header"),o=Object(s.A)("p"),r=Object(s.eb)(u),i=Object(s.cb)(),O=Object(s.A)("div"),a=Object(s.A)("div"),j=Object(s.A)("div");for(let e=0;e<v.length;e+=1)v[e].c();l=Object(s.cb)(),$=Object(s.A)("footer"),f=Object(s.A)("div"),h=Object(s.eb)("Contribute to this issue"),m=Object(s.cb)(),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var g=Object(s.m)(t);c=Object(s.o)(g,"A",{href:!0});var d=Object(s.m)(c);b=Object(s.o)(d,"DIV",{class:!0});var p=Object(s.m)(b);n=Object(s.o)(p,"HEADER",{class:!0});var x=Object(s.m)(n);o=Object(s.o)(x,"P",{class:!0});var z=Object(s.m)(o);r=Object(s.q)(z,u),z.forEach(s.z),x.forEach(s.z),i=Object(s.p)(p),O=Object(s.o)(p,"DIV",{class:!0});var w=Object(s.m)(O);a=Object(s.o)(w,"DIV",{class:!0});var y=Object(s.m)(a);j=Object(s.o)(y,"DIV",{class:!0});var k=Object(s.m)(j);for(let e=0;e<v.length;e+=1)v[e].l(k);k.forEach(s.z),y.forEach(s.z),w.forEach(s.z),l=Object(s.p)(p),$=Object(s.o)(p,"FOOTER",{class:!0});var A=Object(s.m)($);f=Object(s.o)(A,"DIV",{class:!0});var E=Object(s.m)(f);h=Object(s.q)(E,"Contribute to this issue"),E.forEach(s.z),A.forEach(s.z),p.forEach(s.z),d.forEach(s.z),m=Object(s.p)(g),g.forEach(s.z),this.h()},h(){Object(s.i)(o,"class","card-header-title"),Object(s.i)(n,"class","card-header"),Object(s.i)(j,"class","tags"),Object(s.i)(a,"class","content"),Object(s.i)(O,"class","card-content"),Object(s.i)(f,"class","card-footer-item"),Object(s.i)($,"class","card-footer"),Object(s.i)(b,"class","card svelte-1xeeodg"),Object(s.i)(c,"href",d=e[3]),Object(s.i)(t,"class","column is-one-third")},m(e,g){Object(s.K)(e,t,g),Object(s.g)(t,c),Object(s.g)(c,b),Object(s.g)(b,n),Object(s.g)(n,o),Object(s.g)(o,r),Object(s.g)(b,i),Object(s.g)(b,O),Object(s.g)(O,a),Object(s.g)(a,j);for(let e=0;e<v.length;e+=1)v[e].m(j,null);Object(s.g)(b,l),Object(s.g)(b,$),Object(s.g)($,f),Object(s.g)(f,h),Object(s.g)(t,m)},p(e,t){if(1&t&&u!==(u=e[2]+"")&&Object(s.Z)(r,u),1&t){let c;for(p=e[4],c=0;c<p.length;c+=1){const s=g(e,p,c);v[c]?v[c].p(s,t):(v[c]=G(s),v[c].c(),v[c].m(j,null))}for(;c<v.length;c+=1)v[c].d(1);v.length=p.length}1&t&&d!==(d=e[3])&&Object(s.i)(c,"href",d)},d(e){e&&Object(s.z)(t),Object(s.y)(v,e)}}}function Z(e){let t,c,n,j,l,$,g,f,d,m,p,z,w,k,A,E,K,I,q,P,_,L,C,M,S,J,G,X,Z,F,H,N,Q,U,Y,ee,te,ce,se,be,ne,oe,re,ie,Oe=null===e[0]&&h(e);g=new b.a({}),z=new i.a({props:{size:"1/3",$$slots:{default:[u]},$$scope:{ctx:e}}}),k=new i.a({props:{$$slots:{default:[v]},$$scope:{ctx:e}}}),K=new a.a({props:{size:2,sizeMobile:3,$$slots:{default:[x]},$$scope:{ctx:e}}}),q=new O.a({props:{$$slots:{default:[y]},$$scope:{ctx:e}}}),_=new O.a({props:{$$slots:{default:[D]},$$scope:{ctx:e}}}),C=new O.a({props:{reversed:!0,$$slots:{default:[V]},$$scope:{ctx:e}}}),S=new O.a({props:{$$slots:{default:[T]},$$scope:{ctx:e}}}),G=new O.a({props:{reversed:"",$$slots:{default:[R]},$$scope:{ctx:e}}}),F=new a.a({props:{size:3,$$slots:{default:[W]},$$scope:{ctx:e}}}),se=new r.a({props:{size:"default"}}),ne=new o.a({});let ae=null!==e[0]&&e[0].length&&B(e);return{c(){t=Object(s.A)("meta"),n=Object(s.cb)(),Oe&&Oe.c(),j=Object(s.cb)(),l=Object(s.A)("section"),$=Object(s.A)("div"),Object(s.t)(g.$$.fragment),f=Object(s.cb)(),d=Object(s.A)("div"),m=Object(s.A)("div"),p=Object(s.A)("div"),Object(s.t)(z.$$.fragment),w=Object(s.cb)(),Object(s.t)(k.$$.fragment),A=Object(s.cb)(),E=Object(s.A)("div"),Object(s.t)(K.$$.fragment),I=Object(s.cb)(),Object(s.t)(q.$$.fragment),P=Object(s.cb)(),Object(s.t)(_.$$.fragment),L=Object(s.cb)(),Object(s.t)(C.$$.fragment),M=Object(s.cb)(),Object(s.t)(S.$$.fragment),J=Object(s.cb)(),Object(s.t)(G.$$.fragment),X=Object(s.cb)(),Z=Object(s.A)("div"),Object(s.t)(F.$$.fragment),H=Object(s.cb)(),N=Object(s.A)("progress"),Q=Object(s.eb)("45%"),U=Object(s.cb)(),Y=Object(s.A)("div"),ee=Object(s.A)("a"),te=Object(s.eb)("Development documentation"),ce=Object(s.cb)(),Object(s.t)(se.$$.fragment),be=Object(s.cb)(),Object(s.t)(ne.$$.fragment),oe=Object(s.cb)(),ae&&ae.c(),re=Object(s.B)(),this.h()},l(e){const c=Object(s.V)('[data-svelte="svelte-ctj7jw"]',document.head);t=Object(s.o)(c,"META",{name:!0,content:!0}),c.forEach(s.z),n=Object(s.p)(e),Oe&&Oe.l(e),j=Object(s.p)(e),l=Object(s.o)(e,"SECTION",{class:!0});var b=Object(s.m)(l);$=Object(s.o)(b,"DIV",{class:!0});var o=Object(s.m)($);Object(s.n)(g.$$.fragment,o),o.forEach(s.z),f=Object(s.p)(b),d=Object(s.o)(b,"DIV",{class:!0});var r=Object(s.m)(d);m=Object(s.o)(r,"DIV",{class:!0});var i=Object(s.m)(m);p=Object(s.o)(i,"DIV",{class:!0});var O=Object(s.m)(p);Object(s.n)(z.$$.fragment,O),w=Object(s.p)(O),Object(s.n)(k.$$.fragment,O),O.forEach(s.z),i.forEach(s.z),A=Object(s.p)(r),E=Object(s.o)(r,"DIV",{class:!0});var a=Object(s.m)(E);Object(s.n)(K.$$.fragment,a),I=Object(s.p)(a),Object(s.n)(q.$$.fragment,a),P=Object(s.p)(a),Object(s.n)(_.$$.fragment,a),L=Object(s.p)(a),Object(s.n)(C.$$.fragment,a),M=Object(s.p)(a),Object(s.n)(S.$$.fragment,a),J=Object(s.p)(a),Object(s.n)(G.$$.fragment,a),X=Object(s.p)(a),Z=Object(s.o)(a,"DIV",{class:!0});var h=Object(s.m)(Z);Object(s.n)(F.$$.fragment,h),H=Object(s.p)(h),N=Object(s.o)(h,"PROGRESS",{class:!0,value:!0,max:!0});var u=Object(s.m)(N);Q=Object(s.q)(u,"45%"),u.forEach(s.z),h.forEach(s.z),U=Object(s.p)(a),Y=Object(s.o)(a,"DIV",{class:!0});var v=Object(s.m)(Y);ee=Object(s.o)(v,"A",{class:!0,href:!0});var x=Object(s.m)(ee);te=Object(s.q)(x,"Development documentation"),x.forEach(s.z),ce=Object(s.p)(v),Object(s.n)(se.$$.fragment,v),be=Object(s.p)(v),Object(s.n)(ne.$$.fragment,v),v.forEach(s.z),a.forEach(s.z),r.forEach(s.z),b.forEach(s.z),oe=Object(s.p)(e),ae&&ae.l(e),re=Object(s.B)(),this.h()},h(){document.title="LibreLingo - Development",Object(s.i)(t,"name","description"),Object(s.i)(t,"content",c=e[1]("development.meta.description")),Object(s.i)($,"class","hero-head"),Object(s.i)(p,"class","columns project-introduction svelte-1xeeodg"),Object(s.i)(m,"class","container"),Object(s.i)(N,"class","progress is-medium is-info"),N.value="75",Object(s.i)(N,"max","100"),Object(s.i)(Z,"class","development-progress svelte-1xeeodg"),Object(s.i)(ee,"class","button is-primary is-inverted is-outlined"),Object(s.i)(ee,"href","https://librelingo.readthedocs.io/en/latest/"),Object(s.i)(Y,"class","buttons buttons-bottom svelte-1xeeodg"),Object(s.i)(E,"class","container"),Object(s.i)(d,"class","hero-body"),Object(s.i)(l,"class","hero is-primary svelte-1xeeodg")},m(e,c){Object(s.g)(document.head,t),Object(s.K)(e,n,c),Oe&&Oe.m(e,c),Object(s.K)(e,j,c),Object(s.K)(e,l,c),Object(s.g)(l,$),Object(s.O)(g,$,null),Object(s.g)(l,f),Object(s.g)(l,d),Object(s.g)(d,m),Object(s.g)(m,p),Object(s.O)(z,p,null),Object(s.g)(p,w),Object(s.O)(k,p,null),Object(s.g)(d,A),Object(s.g)(d,E),Object(s.O)(K,E,null),Object(s.g)(E,I),Object(s.O)(q,E,null),Object(s.g)(E,P),Object(s.O)(_,E,null),Object(s.g)(E,L),Object(s.O)(C,E,null),Object(s.g)(E,M),Object(s.O)(S,E,null),Object(s.g)(E,J),Object(s.O)(G,E,null),Object(s.g)(E,X),Object(s.g)(E,Z),Object(s.O)(F,Z,null),Object(s.g)(Z,H),Object(s.g)(Z,N),Object(s.g)(N,Q),Object(s.g)(E,U),Object(s.g)(E,Y),Object(s.g)(Y,ee),Object(s.g)(ee,te),Object(s.g)(Y,ce),Object(s.O)(se,Y,null),Object(s.g)(Y,be),Object(s.O)(ne,Y,null),Object(s.K)(e,oe,c),ae&&ae.m(e,c),Object(s.K)(e,re,c),ie=!0},p(e,[b]){(!ie||2&b&&c!==(c=e[1]("development.meta.description")))&&Object(s.i)(t,"content",c),null===e[0]?Oe?1&b&&Object(s.gb)(Oe,1):(Oe=h(e),Oe.c(),Object(s.gb)(Oe,1),Oe.m(j.parentNode,j)):Oe&&(Object(s.H)(),Object(s.hb)(Oe,1,1,()=>{Oe=null}),Object(s.l)());const n={};2048&b&&(n.$$scope={dirty:b,ctx:e}),z.$set(n);const o={};2050&b&&(o.$$scope={dirty:b,ctx:e}),k.$set(o);const r={};2048&b&&(r.$$scope={dirty:b,ctx:e}),K.$set(r);const i={};2048&b&&(i.$$scope={dirty:b,ctx:e}),q.$set(i);const O={};2048&b&&(O.$$scope={dirty:b,ctx:e}),_.$set(O);const a={};2048&b&&(a.$$scope={dirty:b,ctx:e}),C.$set(a);const l={};2048&b&&(l.$$scope={dirty:b,ctx:e}),S.$set(l);const $={};2048&b&&($.$$scope={dirty:b,ctx:e}),G.$set($);const g={};2048&b&&(g.$$scope={dirty:b,ctx:e}),F.$set(g),null!==e[0]&&e[0].length?ae?(ae.p(e,b),1&b&&Object(s.gb)(ae,1)):(ae=B(e),ae.c(),Object(s.gb)(ae,1),ae.m(re.parentNode,re)):ae&&(Object(s.H)(),Object(s.hb)(ae,1,1,()=>{ae=null}),Object(s.l)())},i(e){ie||(Object(s.gb)(Oe),Object(s.gb)(g.$$.fragment,e),Object(s.gb)(z.$$.fragment,e),Object(s.gb)(k.$$.fragment,e),Object(s.gb)(K.$$.fragment,e),Object(s.gb)(q.$$.fragment,e),Object(s.gb)(_.$$.fragment,e),Object(s.gb)(C.$$.fragment,e),Object(s.gb)(S.$$.fragment,e),Object(s.gb)(G.$$.fragment,e),Object(s.gb)(F.$$.fragment,e),Object(s.gb)(se.$$.fragment,e),Object(s.gb)(ne.$$.fragment,e),Object(s.gb)(ae),ie=!0)},o(e){Object(s.hb)(Oe),Object(s.hb)(g.$$.fragment,e),Object(s.hb)(z.$$.fragment,e),Object(s.hb)(k.$$.fragment,e),Object(s.hb)(K.$$.fragment,e),Object(s.hb)(q.$$.fragment,e),Object(s.hb)(_.$$.fragment,e),Object(s.hb)(C.$$.fragment,e),Object(s.hb)(S.$$.fragment,e),Object(s.hb)(G.$$.fragment,e),Object(s.hb)(F.$$.fragment,e),Object(s.hb)(se.$$.fragment,e),Object(s.hb)(ne.$$.fragment,e),Object(s.hb)(ae),ie=!1},d(e){Object(s.z)(t),e&&Object(s.z)(n),Oe&&Oe.d(e),e&&Object(s.z)(j),e&&Object(s.z)(l),Object(s.x)(g),Object(s.x)(z),Object(s.x)(k),Object(s.x)(K),Object(s.x)(q),Object(s.x)(_),Object(s.x)(C),Object(s.x)(S),Object(s.x)(G),Object(s.x)(F),Object(s.x)(se),Object(s.x)(ne),e&&Object(s.z)(oe),ae&&ae.d(e),e&&Object(s.z)(re)}}}function F(e,t,c){let b;Object(s.r)(e,j.a,e=>c(1,b=e));let n=null;return fetch("https://api.github.com/repos/kantord/LibreLingo/issues?per_page=100").then(e=>e.json()).then(e=>{c(0,n=$()(e).filter(({state:e,pull_request:t,labels:c})=>"open"===e&&!t&&0!==c.length).slice(0,10))}).catch(()=>c(0,n=[])),[n,b]}class H extends s.b{constructor(e){var t;super(),document.getElementById("svelte-1xeeodg-style")||((t=Object(s.A)("style")).id="svelte-1xeeodg-style",t.textContent="@keyframes svelte-1xeeodg-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.card.svelte-1xeeodg.svelte-1xeeodg{background:white}.tag.svelte-1xeeodg.svelte-1xeeodg{color:white;text-shadow:1px 1px 0 #0a0a0a}.project-introduction.svelte-1xeeodg.svelte-1xeeodg{margin-bottom:4em}h3.svelte-1xeeodg.svelte-1xeeodg{margin-bottom:1em}.screenshot.svelte-1xeeodg.svelte-1xeeodg{box-shadow:0 0 2em #ffffff42}.is-centered-both-ways.svelte-1xeeodg.svelte-1xeeodg{display:flex;align-items:center;justify-content:center;height:100%}.development-progress.svelte-1xeeodg.svelte-1xeeodg{margin-top:4em;margin-bottom:4em}.hero.svelte-1xeeodg.svelte-1xeeodg{padding-bottom:5em;min-height:100vh}.hero.svelte-1xeeodg .link.svelte-1xeeodg{color:white;text-decoration:underline;text-decoration-style:dotted}@media screen and (max-width: 768px){.mascot.svelte-1xeeodg.svelte-1xeeodg{width:45%;margin:auto}.columns.svelte-1xeeodg.svelte-1xeeodg{margin-bottom:6em}}@media screen and (min-width: 769px){.buttons-bottom.svelte-1xeeodg.svelte-1xeeodg{margin-top:6em}}",Object(s.g)(document.head,t)),Object(s.J)(this,e,F,Z,s.X,{})}}t.default=H},36:function(e,t,c){"use strict";var s=c(0);function b(e){let t,c;const b=e[4].default,n=Object(s.w)(b,e,e[3],null);return{c(){t=Object(s.A)("div"),n&&n.c(),this.h()},l(e){t=Object(s.o)(e,"DIV",{"data-size":!0,"data-size-desktop":!0,"data-size-tablet":!0,class:!0});var c=Object(s.m)(t);n&&n.l(c),c.forEach(s.z),this.h()},h(){Object(s.i)(t,"data-size",e[0]),Object(s.i)(t,"data-size-desktop",e[1]),Object(s.i)(t,"data-size-tablet",e[2]),Object(s.i)(t,"class","column"),Object(s.fb)(t,"is-one-third-desktop","1/3"===e[1]),Object(s.fb)(t,"is-half-tablet","1/2"===e[2]),Object(s.fb)(t,"is-one-third-tablet","1/3"===e[2]),Object(s.fb)(t,"is-one-quarter","1/4"===e[0]),Object(s.fb)(t,"is-one-third","1/3"===e[0]),Object(s.fb)(t,"is-three-fifths","3/5"===e[0]),Object(s.fb)(t,"is-1","1"===e[0])},m(e,b){Object(s.K)(e,t,b),n&&n.m(t,null),c=!0},p(e,[o]){n&&n.p&&8&o&&Object(s.jb)(n,b,e,e[3],o,null,null),(!c||1&o)&&Object(s.i)(t,"data-size",e[0]),(!c||2&o)&&Object(s.i)(t,"data-size-desktop",e[1]),(!c||4&o)&&Object(s.i)(t,"data-size-tablet",e[2]),2&o&&Object(s.fb)(t,"is-one-third-desktop","1/3"===e[1]),4&o&&Object(s.fb)(t,"is-half-tablet","1/2"===e[2]),4&o&&Object(s.fb)(t,"is-one-third-tablet","1/3"===e[2]),1&o&&Object(s.fb)(t,"is-one-quarter","1/4"===e[0]),1&o&&Object(s.fb)(t,"is-one-third","1/3"===e[0]),1&o&&Object(s.fb)(t,"is-three-fifths","3/5"===e[0]),1&o&&Object(s.fb)(t,"is-1","1"===e[0])},i(e){c||(Object(s.gb)(n,e),c=!0)},o(e){Object(s.hb)(n,e),c=!1},d(e){e&&Object(s.z)(t),n&&n.d(e)}}}function n(e,t,c){let{$$slots:s={},$$scope:b}=t,{size:n=null}=t,{sizeDesktop:o=null}=t,{sizeTablet:r=null}=t;return e.$$set=e=>{"size"in e&&c(0,n=e.size),"sizeDesktop"in e&&c(1,o=e.sizeDesktop),"sizeTablet"in e&&c(2,r=e.sizeTablet),"$$scope"in e&&c(3,b=e.$$scope)},[n,o,r,b,s]}class o extends s.b{constructor(e){super(),Object(s.J)(this,e,n,b,s.X,{size:0,sizeDesktop:1,sizeTablet:2})}}t.a=o},37:function(e,t,c){"use strict";var s=c(0);function b(e){let t,c;const b=e[3].default,n=Object(s.w)(b,e,e[2],null);return{c(){t=Object(s.A)("div"),n&&n.c(),this.h()},l(e){t=Object(s.o)(e,"DIV",{class:!0});var c=Object(s.m)(t);n&&n.l(c),c.forEach(s.z),this.h()},h(){Object(s.i)(t,"class","columns svelte-rt8gqk"),Object(s.fb)(t,"is-multiline",e[0]),Object(s.fb)(t,"is-reversed",e[1])},m(e,b){Object(s.K)(e,t,b),n&&n.m(t,null),c=!0},p(e,[c]){n&&n.p&&4&c&&Object(s.jb)(n,b,e,e[2],c,null,null),1&c&&Object(s.fb)(t,"is-multiline",e[0]),2&c&&Object(s.fb)(t,"is-reversed",e[1])},i(e){c||(Object(s.gb)(n,e),c=!0)},o(e){Object(s.hb)(n,e),c=!1},d(e){e&&Object(s.z)(t),n&&n.d(e)}}}function n(e,t,c){let{$$slots:s={},$$scope:b}=t,{multiline:n=!1}=t,{reversed:o=!1}=t;return e.$$set=e=>{"multiline"in e&&c(0,n=e.multiline),"reversed"in e&&c(1,o=e.reversed),"$$scope"in e&&c(2,b=e.$$scope)},[n,o,b,s]}class o extends s.b{constructor(e){var t;super(),document.getElementById("svelte-rt8gqk-style")||((t=Object(s.A)("style")).id="svelte-rt8gqk-style",t.textContent="@keyframes svelte-rt8gqk-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}@media screen and (max-width: 768px){.is-reversed.svelte-rt8gqk{flex-direction:column-reverse;display:flex}}",Object(s.g)(document.head,t)),Object(s.J)(this,e,n,b,s.X,{multiline:0,reversed:1})}}t.a=o},43:function(e,t,c){"use strict";var s=c(0);function b(e){let t,c,b;const n=e[9].default,o=Object(s.w)(n,e,e[8],null);return{c(){t=Object(s.A)("h1"),o&&o.c(),this.h()},l(e){t=Object(s.o)(e,"H1",{class:!0});var c=Object(s.m)(t);o&&o.l(c),c.forEach(s.z),this.h()},h(){Object(s.i)(t,"class",c=Object(s.R)(`is-size-${e[5]}\n  ${e[0]?`is-size-${e[0]}-mobile`:""}\n  ${e[1]?`is-size-${e[1]}-tablet`:""}\n  ${e[2]?`is-size-${e[2]}-desktop`:""}\n  ${e[6]?`has-text-weight-${e[6]}`:""}\n  ${e[7]?`has-text-${e[7]}`:""}`)+" svelte-k5ikha"),Object(s.fb)(t,"title",!e[3]),Object(s.fb)(t,"subtitle",e[3]),Object(s.fb)(t,"is-spaced",e[4])},m(e,c){Object(s.K)(e,t,c),o&&o.m(t,null),b=!0},p(e,[r]){o&&o.p&&256&r&&Object(s.jb)(o,n,e,e[8],r,null,null),(!b||231&r&&c!==(c=Object(s.R)(`is-size-${e[5]}\n  ${e[0]?`is-size-${e[0]}-mobile`:""}\n  ${e[1]?`is-size-${e[1]}-tablet`:""}\n  ${e[2]?`is-size-${e[2]}-desktop`:""}\n  ${e[6]?`has-text-weight-${e[6]}`:""}\n  ${e[7]?`has-text-${e[7]}`:""}`)+" svelte-k5ikha"))&&Object(s.i)(t,"class",c),239&r&&Object(s.fb)(t,"title",!e[3]),239&r&&Object(s.fb)(t,"subtitle",e[3]),247&r&&Object(s.fb)(t,"is-spaced",e[4])},i(e){b||(Object(s.gb)(o,e),b=!0)},o(e){Object(s.hb)(o,e),b=!1},d(e){e&&Object(s.z)(t),o&&o.d(e)}}}function n(e,t,c){let{$$slots:s={},$$scope:b}=t,{sizeMobile:n=null}=t,{sizeTablet:o=null}=t,{sizeDesktop:r=null}=t,{isSubtitle:i=!1}=t,{isSpaced:O=!1}=t,{size:a=(i?5:3)}=t,{textWeight:j=null}=t,{align:l=null}=t;return e.$$set=e=>{"sizeMobile"in e&&c(0,n=e.sizeMobile),"sizeTablet"in e&&c(1,o=e.sizeTablet),"sizeDesktop"in e&&c(2,r=e.sizeDesktop),"isSubtitle"in e&&c(3,i=e.isSubtitle),"isSpaced"in e&&c(4,O=e.isSpaced),"size"in e&&c(5,a=e.size),"textWeight"in e&&c(6,j=e.textWeight),"align"in e&&c(7,l=e.align),"$$scope"in e&&c(8,b=e.$$scope)},[n,o,r,i,O,a,j,l,b,s]}class o extends s.b{constructor(e){var t;super(),document.getElementById("svelte-k5ikha-style")||((t=Object(s.A)("style")).id="svelte-k5ikha-style",t.textContent="@keyframes svelte-k5ikha-spinAround{from{transform:rotate(0deg)}to{transform:rotate(359deg)}}.title.svelte-k5ikha:not(:last-child),.subtitle.svelte-k5ikha:not(:last-child){margin-bottom:1.5rem}.title.svelte-k5ikha,.subtitle.svelte-k5ikha{word-break:break-word}.title.svelte-k5ikha{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title.is-1.svelte-k5ikha{font-size:3rem}.title.is-2.svelte-k5ikha{font-size:2.5rem}.title.is-3.svelte-k5ikha{font-size:2rem}.title.is-4.svelte-k5ikha{font-size:1.5rem}.title.is-5.svelte-k5ikha{font-size:1.25rem}.title.is-6.svelte-k5ikha{font-size:1rem}.title.is-7.svelte-k5ikha{font-size:0.75rem}.subtitle.svelte-k5ikha{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle.is-1.svelte-k5ikha{font-size:3rem}.subtitle.is-2.svelte-k5ikha{font-size:2.5rem}.subtitle.is-3.svelte-k5ikha{font-size:2rem}.subtitle.is-4.svelte-k5ikha{font-size:1.5rem}.subtitle.is-5.svelte-k5ikha{font-size:1.25rem}.subtitle.is-6.svelte-k5ikha{font-size:1rem}.subtitle.is-7.svelte-k5ikha{font-size:0.75rem}",Object(s.g)(document.head,t)),Object(s.J)(this,e,n,b,s.X,{sizeMobile:0,sizeTablet:1,sizeDesktop:2,isSubtitle:3,isSpaced:4,size:5,textWeight:6,align:7})}}t.a=o},45:function(e,t,c){"use strict";const s=c(33),b=c(46),n=new WeakMap;e.exports=(e,t={})=>{const c=t.cache||new WeakMap,{cacheKey:o=(([e])=>e),cache:r=new Map,maxAge:i}=t;"number"==typeof i&&b(r);const O=function(...t){const s=o(t),b=!s||"object"!=typeof s&&"function"!=typeof s?r:c;if(b.has(s))return b.get(s).data;const n=e.apply(this,t);return b.set(s,{data:n,maxAge:i?Date.now()+i:1/0}),n};try{s(O,e)}catch(e){}return n.set(O,r),O},e.exports.clear=e=>{if(!n.has(e))throw new Error("Can't clear a function that was not memoized!");const t=n.get(e);"function"==typeof t.clear&&t.clear()}},46:function(e,t,c){"use strict";var s=this&&this.__awaiter||function(e,t,c,s){return new(c||(c=Promise))((function(b,n){function o(e){try{i(s.next(e))}catch(e){n(e)}}function r(e){try{i(s.throw(e))}catch(e){n(e)}}function i(e){e.done?b(e.value):new c((function(t){t(e.value)})).then(o,r)}i((s=s.apply(e,t||[])).next())}))},b=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=b(c(47));function o(e,t="maxAge"){let c,b,o;const r=()=>s(this,void 0,void 0,(function*(){if(void 0!==c)return;const r=r=>s(this,void 0,void 0,(function*(){o=n.default();const s=r[1][t]-Date.now();return s<=0?(e.delete(r[0]),void o.resolve()):(c=r[0],b=setTimeout(()=>{e.delete(r[0]),o&&o.resolve()},s),"function"==typeof b.unref&&b.unref(),o.promise)}));try{for(const t of e)yield r(t)}catch(e){}c=void 0})),i=e.set.bind(e);return e.set=(t,s)=>{e.has(t)&&e.delete(t);const n=i(t,s);return c&&c===t&&(c=void 0,void 0!==b&&(clearTimeout(b),b=void 0),void 0!==o&&(o.reject(void 0),o=void 0)),r(),n},r(),e}t.default=o,e.exports=o,e.exports.default=o},47:function(e,t,c){"use strict";e.exports=()=>{const e={};return e.promise=new Promise((t,c)=>{e.resolve=t,e.reject=c}),e}},54:function(e,t,c){"use strict";var s=c(0);function b(e){let t,c;return{c(){t=Object(s.A)("img"),this.h()},l(e){t=Object(s.o)(e,"IMG",{"data-test":!0,src:!0,alt:!0,class:!0}),this.h()},h(){Object(s.i)(t,"data-test","mascot-jetpack"),t.src!==(c=e[1])&&Object(s.i)(t,"src",c),Object(s.i)(t,"alt",""),Object(s.i)(t,"class","svelte-1ceej21"),Object(s.fb)(t,"glow",e[0])},m(e,c){Object(s.K)(e,t,c)},p(e,[c]){1&c&&Object(s.fb)(t,"glow",e[0])},i:s.P,o:s.P,d(e){e&&Object(s.z)(t)}}}function n(e,t,c){let{shadow:s=!0}=t,{glow:b=!1}=t,n=!0===s?"images/mascot-jetpack.svg":"images/mascot-jetpack-noshadow.svg";return e.$$set=e=>{"shadow"in e&&c(2,s=e.shadow),"glow"in e&&c(0,b=e.glow)},[b,n,s]}class o extends s.b{constructor(e){var t;super(),document.getElementById("svelte-1ceej21-style")||((t=Object(s.A)("style")).id="svelte-1ceej21-style",t.textContent=".glow.svelte-1ceej21{filter:drop-shadow(0 0 2em #ffffff1c)}",Object(s.g)(document.head,t)),Object(s.J)(this,e,n,b,s.X,{shadow:2,glow:0})}}t.a=o},63:function(e,t,c){"use strict";const s=c(45),b=c(33),n=new WeakMap;e.exports=(e,{cachePromiseRejection:t=!1,...c}={})=>{const o=c.cache||new Map,r=c.cacheKey||(([e])=>e),i=s(e,{...c,cache:o,cacheKey:r}),O=function(...e){const c=i.apply(this,e);return!t&&c&&c.catch&&c.catch(()=>{o.delete(r(e))}),c};return b(O,e),n.set(O,i),O},e.exports.clear=e=>{if(!n.has(e))throw new Error("Can't clear a function that was not memoized!");s.clear(n.get(e))}},64:function(e,t,c){"use strict";var s=c(0),b=c(30),n=c(41);function o(e){let t,c,b,o,r;return t=new n.a({props:{icon:"twitter",prefix:"fab"}}),{c(){Object(s.t)(t.$$.fragment),c=Object(s.cb)(),b=Object(s.A)("div"),o=Object(s.eb)("Tweet about LibreLingo")},l(e){Object(s.n)(t.$$.fragment,e),c=Object(s.p)(e),b=Object(s.o)(e,"DIV",{});var n=Object(s.m)(b);o=Object(s.q)(n,"Tweet about LibreLingo"),n.forEach(s.z)},m(e,n){Object(s.O)(t,e,n),Object(s.K)(e,c,n),Object(s.K)(e,b,n),Object(s.g)(b,o),r=!0},p:s.P,i(e){r||(Object(s.gb)(t.$$.fragment,e),r=!0)},o(e){Object(s.hb)(t.$$.fragment,e),r=!1},d(e){Object(s.x)(t,e),e&&Object(s.z)(c),e&&Object(s.z)(b)}}}function r(e){let t,c;return t=new b.a({props:{color:"#55acee",textColor:"white",target:"_blank",href:"https://twitter.com/intent/tweet?hashtags=LibreLingo%2Copensource&url=https%3A%2F%2Flibrelingo.app&text=LibreLingo%20-%20an%20experiment%20to%20create%20a%20community-owned%20language%20learning%20tool%0A",$$slots:{default:[o]},$$scope:{ctx:e}}}),{c(){Object(s.t)(t.$$.fragment)},l(e){Object(s.n)(t.$$.fragment,e)},m(e,b){Object(s.O)(t,e,b),c=!0},p(e,[c]){const s={};1&c&&(s.$$scope={dirty:c,ctx:e}),t.$set(s)},i(e){c||(Object(s.gb)(t.$$.fragment,e),c=!0)},o(e){Object(s.hb)(t.$$.fragment,e),c=!1},d(e){Object(s.x)(t,e)}}}class i extends s.b{constructor(e){super(),Object(s.J)(this,e,null,r,s.X,{})}}t.a=i}}]);