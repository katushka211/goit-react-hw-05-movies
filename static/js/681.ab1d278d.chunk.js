"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{681:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(689),i=n(311),p=n(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,s.useState)([]),n=(0,a.Z)(t,2),c=n[0],l=n[1];return(0,s.useEffect)((function(){var t=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.tx)(t);case 3:n=e.sent,l(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();t(e)}),[e]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:"Reviews"}),c.length?(0,p.jsx)("ul",{children:c.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h4",{children:["Author: ",e.author]}),(0,p.jsx)("p",{children:e.content})]},e.id)}))}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie"})]})}},311:function(e,t,n){n.d(t,{IR:function(){return l},TP:function(){return h},UF:function(){return i},tx:function(){return m},zv:function(){return d}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s="https://api.themoviedb.org/3",o="79a2e1dc126f87040f8de2557416f9fd";function i(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.prev=1,n={api_key:o,language:"en-US"},e.next=5,u.Z.get("".concat(s,"/trending/movie/day?page=").concat(t),{params:n});case 5:return r=e.sent,e.abrupt("return",r.data.results);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),p.apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US",query:t,page:1},e.next=4,u.Z.get("".concat(s,"/search/movie?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US"},e.next=4,u.Z.get("".concat(s,"/movie/").concat(t,"?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US"},e.next=4,u.Z.get("".concat(s,"/movie/").concat(t,"/credits?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US",page:1},e.next=4,u.Z.get("".concat(s,"/movie/").concat(t,"/reviews?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=681.ab1d278d.chunk.js.map