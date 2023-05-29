"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[316],{768:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(689),o=n(791),l=n(311),u=n(87),p=n(274),v=n(184),d=function(e){var t,n,r,a,s,c=e.movie,o=(0,i.TH)(),l="";Array.isArray(c.genres)&&c.genres.length>0&&(l=c.genres.map((function(e){return e.name})).join(", "));var p=new Date(c.release_date).getFullYear(),d=c.poster_path?"https://image.tmdb.org/t/p/w400/".concat(c.poster_path):"https://placehold.co/600x400?text=Not+Available",h=c.vote_average?"".concat((10*c.vote_average).toFixed(0),"%"):"Not available";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"card",children:[(0,v.jsx)("img",{className:"poster",src:d,alt:c.original_title}),(0,v.jsxs)("div",{className:"movie-info",children:[(0,v.jsxs)("h2",{className:"title",children:[null!==(t=c.original_title)&&void 0!==t?t:"Unknown","(",p,")"]}),(0,v.jsxs)("p",{className:"user-score",children:["User Score: ",h]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{className:"overview",children:c.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{className:"genres",children:l})]})]}),(0,v.jsxs)("div",{className:"additional-info",children:[(0,v.jsx)("h3",{children:"Aditional Information"}),(0,v.jsxs)("ul",{className:"links",children:[(0,v.jsx)("li",{className:"link-item",children:(0,v.jsx)(u.rU,{className:"link-details",to:"cast",state:{from:null!==(n=null===o||void 0===o||null===(r=o.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/"},children:"Cast"})}),(0,v.jsx)("li",{className:"link-item",children:(0,v.jsx)(u.rU,{className:"link-details",to:"reviews",state:{from:null!==(a=null===o||void 0===o||null===(s=o.state)||void 0===s?void 0:s.from)&&void 0!==a?a:"/"},children:"Reviews"})})]})]})]})},h=function(){var e,t,n=(0,i.UO)().movieId,s=(0,i.TH)(),h=(0,o.useState)({}),f=(0,a.Z)(h,2),m=f[0],g=f[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.TP)(t);case 3:n=e.sent,g(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();e(n)}),[n]),(0,v.jsx)("main",{children:(0,v.jsxs)("div",{children:[(0,v.jsx)(u.rU,{to:null!==(e=null===s||void 0===s||null===(t=s.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,v.jsxs)("button",{className:"glow-on-hover",children:[(0,v.jsx)(p.gYP,{style:{width:"25px",height:"25px",display:"inline-block"}}),"Go back"]})}),(0,v.jsx)(d,{movie:m}),(0,v.jsx)(i.j3,{})]})})}},311:function(e,t,n){n.d(t,{IR:function(){return p},TP:function(){return d},UF:function(){return l},tx:function(){return g},zv:function(){return f}});var r=n(861),a=n(757),s=n.n(a),c=n(243),i="https://api.themoviedb.org/3",o="79a2e1dc126f87040f8de2557416f9fd";function l(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(s().mark((function e(){var t,n,r,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.prev=1,n={api_key:o,language:"en-US"},e.next=5,c.Z.get("".concat(i,"/trending/movie/day?page=").concat(t),{params:n});case 5:return r=e.sent,e.abrupt("return",r.data.results);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),u.apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US",query:t,page:1},e.next=4,c.Z.get("".concat(i,"/search/movie?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US"},e.next=4,c.Z.get("".concat(i,"/movie/").concat(t,"?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US"},e.next=4,c.Z.get("".concat(i,"/movie/").concat(t,"/credits?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:o,language:"en-US",page:1},e.next=4,c.Z.get("".concat(i,"/movie/").concat(t,"/reviews?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=316.838f4cb9.chunk.js.map