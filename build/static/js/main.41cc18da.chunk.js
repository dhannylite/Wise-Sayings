(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{13:function(e,t,n){e.exports={header:"Navigation_header__1yF_L",links:"Navigation_links__2Sg6A",link:"Navigation_link__1Jlvi",active:"Navigation_active__3ifum"}},14:function(e,t,n){e.exports={quotes:"NewQuotes_quotes__pRvbd",form:"NewQuotes_form__1eD6q",author:"NewQuotes_author__kAhh-",text:"NewQuotes_text__Hfyu3",text_label:"NewQuotes_text_label__3pPEz",btn_box:"NewQuotes_btn_box__XotB7",btn:"NewQuotes_btn__1n8dW",center:"NewQuotes_center__3GC2l"}},16:function(e,t,n){e.exports={list:"QuotesList_list__Uq3Sa",show:"QuotesList_show__VFaWk",link_container:"QuotesList_link_container__yh5Cs",content:"QuotesList_content__14krc",text:"QuotesList_text__fEuxN"}},18:function(e,t,n){e.exports={container:"AllQuotes_container__3hxms",lists:"AllQuotes_lists__15Xi_",btn:"AllQuotes_btn___ULjh",filler:"AllQuotes_filler__3oDrs",center:"AllQuotes_center__coxE3"}},21:function(e,t,n){e.exports={details:"QuoteDetail_details__2nEOA",author:"QuoteDetail_author__2LfM4",btn_box:"QuoteDetail_btn_box__2uLuY",comment:"QuoteDetail_comment__2Y7dt",text:"QuoteDetail_text__3XToK",center:"QuoteDetail_center__1X-YT"}},22:function(e,t,n){e.exports={comment:"Comments_comment__RPbZp",text:"Comments_text__2yL3b",btn_box:"Comments_btn_box__7mJfl"}},27:function(e,t,n){e.exports={lists:"CommentList_lists__vrfNy",list:"CommentList_list__eWa05"}},47:function(e,t,n){},49:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(31),a=n.n(c),s=(n(47),n(3)),r=n(0),o=n(10),i=n(13),u=n.n(i),l=n(2);function j(){return Object(l.jsxs)("header",{className:u.a.header,children:[Object(l.jsx)("h2",{children:"Wise Sayings"}),Object(l.jsxs)("div",{className:u.a.links,children:[Object(l.jsx)(o.c,{className:function(e){return e.isActive?"".concat(u.a.link," ").concat(u.a.active):u.a.link},to:"/quotes",children:"All Quotes"}),Object(l.jsx)(o.c,{className:function(e){return e.isActive?"".concat(u.a.link," ").concat(u.a.active):u.a.link},to:"/new-quote",children:"New Quotes"})]})]})}var b=n(6),d=n(16),x=n.n(d);function h(e){var t=Object(r.useState)(!1),n=Object(b.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){a(!0)}),500);return function(){clearTimeout(e)}})),Object(l.jsxs)("li",{className:"".concat(c?"".concat(x.a.list," ").concat(x.a.show):x.a.list),children:[Object(l.jsxs)("div",{className:x.a.content,children:[Object(l.jsx)("p",{className:x.a.text,children:e.text}),Object(l.jsx)("p",{children:e.author})]}),Object(l.jsx)("div",{className:x.a.link_container,children:Object(l.jsx)(o.b,{to:"/detail/".concat(e.id),children:"View Fullscreen"})})]},e.id)}var _=n(25),O=n(9),f=n(15);function m(e,t){return"SEND"===t.type?{data:null,loading:"pending",error:null}:"SUCCESS"===t.type?{data:t.data,loading:"completed",error:null}:"ERROR"===t.type?{data:null,loading:null,error:t.data}:void 0}var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(r.useReducer)(m,{data:null,loading:t?"pending":null,error:null}),c=Object(b.a)(n,2),a=c[0],s=c[1],o=Object(r.useCallback)(function(){var t=Object(f.a)(Object(O.a)().mark((function t(n){var c;return Object(O.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,s({type:"SUCCESS",data:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"ERROR",error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(_.a)(Object(_.a)({},a),{},{sendRequest:o})},v="https://wise-sayings-506f2-default-rtdb.firebaseio.com";function N(e){return g.apply(this,arguments)}function g(){return(g=Object(f.a)(Object(O.a)().mark((function e(t){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/quotes.json"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(Object(O.a)().mark((function e(){var t,n,c,a;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:for(a in n=e.sent,c=[],n)c.push({author:n[a].author,text:n[a].text,id:a});return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(f.a)(Object(O.a)().mark((function e(t){var n,c;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(Object(O.a)().mark((function e(t){var n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,fetch("".concat(v,"/comments/").concat(t.id,".json"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t.text})});case 3:n=e.sent,n.json();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return R.apply(this,arguments)}function R(){return(R=Object(f.a)(Object(O.a)().mark((function e(t){var n,c,a,s;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:for(s in c=e.sent,a=[],c)a.push({author:c[s].author,text:c[s].text,id:s});return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=n(18),E=n.n(A);n(49);function L(){return Object(l.jsx)("div",{className:"loader"})}function D(){var e=p(w,!0),t=e.sendRequest,n=e.data,c=e.loading,a=Object(s.g)(),o=Object(s.f)(),i="asc"===new URLSearchParams(o.search).get("sort");return n&&function(e,t){e.sort((function(e,n){return t?e.id>n.id?1:-1:e.id<n.id?1:-1}))}(n,i),Object(r.useEffect)((function(){t()}),[]),console.log(n),"pending"===c?Object(l.jsx)("div",{className:E.a.center,children:Object(l.jsx)(L,{})}):Object(l.jsxs)("div",{className:E.a.container,children:[Object(l.jsxs)("button",{className:E.a.btn,onClick:function(){a("".concat(o.pathname,"?sort=").concat(i?"dsc":"asc"))},children:["Sort ","".concat(i?"Ascending":"Decending")]}),Object(l.jsx)("div",{className:E.a.filler}),Object(l.jsx)("ul",{className:E.a.lists,children:n.map((function(e,t){return Object(l.jsx)(h,{text:e.text,author:e.author,id:e.id},t)}))})]})}var T=n(82),J=n(14),U=n.n(J);function W(){var e=p(N),t=e.sendRequest,n=e.loading,c=Object(r.useState)(""),a=Object(b.a)(c,2),o=a[0],i=a[1],u=Object(r.useRef)(),j=Object(s.g)();return"pending"===n?Object(l.jsx)("div",{className:U.a.center,children:Object(l.jsx)(L,{})}):("completed"===n&&j("/quotes"),Object(l.jsx)("div",{className:U.a.quotes,children:Object(l.jsxs)("form",{className:U.a.form,onSubmit:function(e){e.preventDefault(),t({author:o,text:u.current.value})},children:[Object(l.jsx)(T.a,{className:U.a.author,label:"Author",variant:"outlined",onChange:function(e){i(e.target.value)}}),Object(l.jsx)("label",{className:U.a.text_label,children:"Add your Quote"}),Object(l.jsx)("textarea",{className:U.a.text,id:"text",rows:"5",ref:u}),Object(l.jsx)("div",{className:U.a.btn_box,children:Object(l.jsx)("button",{className:U.a.btn,children:"Add Quote"})})]})}))}var P=n(27),F=n.n(P);function X(e){return Object(l.jsx)("ul",{className:F.a.lists,children:e.data.map((function(e,t){return Object(l.jsx)("li",{className:F.a.list,children:e.text})}))})}var Y=n(22),B=n.n(Y);function H(){var e=p(S),t=e.sendRequest,n=(e.data,e.loading),c=p(q,!0),a=c.sendRequest,o=c.data,i=c.loading,u=Object(r.useState)(!1),j=Object(b.a)(u,2),d=j[0],x=j[1],h=Object(r.useRef)(),_=Object(s.h)().id;return Object(r.useEffect)((function(){a(_)}),[]),Object(r.useEffect)((function(){"completed"===n&&a(_)}),[a,n]),Object(l.jsxs)("div",{className:B.a.comment,children:[Object(l.jsx)("h1",{children:"User Comments"}),Object(l.jsx)("p",{children:"Your Comment"}),"pending"===n&&Object(l.jsx)("div",{children:Object(l.jsx)(L,{})}),d&&Object(l.jsx)("textarea",{className:B.a.text,id:"text",rows:"5",ref:h}),Object(l.jsx)("div",{className:B.a.btn_box,children:Object(l.jsxs)("button",{onClick:d?function(){t({id:_,text:h.current.value})}:function(){x(!0)},children:["Add ","".concat(d?"":"a")," Comment"]})}),"pending"===i&&Object(l.jsx)(L,{}),"completed"===i&&Object(l.jsx)(X,{data:o})]})}var V=n(21),z=n.n(V);function G(e){var t=p(k,!0),n=t.sendRequest,c=t.data,a=t.loading,i=Object(r.useState)(!1),u=Object(b.a)(i,2),j=(u[0],u[1]),d=Object(s.h)().id;if(Object(r.useEffect)((function(){n(d)}),[d,n]),"pending"===a)return Object(l.jsx)("div",{className:z.a.center,children:Object(l.jsx)(L,{})});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:z.a.details,children:[Object(l.jsx)("p",{children:c.text}),Object(l.jsx)("div",{className:z.a.author,children:c.author})]}),Object(l.jsx)(s.d,{children:Object(l.jsx)(s.b,{path:"",element:Object(l.jsx)("div",{className:z.a.btn_box,onClick:function(){j(!0)},children:Object(l.jsx)(o.b,{to:"comments",children:"load comment"})})})}),Object(l.jsx)(s.a,{})]})}n(53);var I=function(){return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{path:"",element:Object(l.jsx)("p",{className:"home-text",children:"Hello, Welcome To Wise Sayings"})}),Object(l.jsx)(s.b,{path:"/quotes",element:Object(l.jsx)(D,{})}),Object(l.jsx)(s.b,{path:"/new-quote",element:Object(l.jsx)(W,{})}),Object(l.jsx)(s.b,{path:"/detail/:id",element:Object(l.jsx)(G,{}),children:Object(l.jsx)(s.b,{path:"comments",element:Object(l.jsx)(H,{})})})]})]})};a.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(o.a,{children:Object(l.jsx)(I,{})}))}},[[54,1,2]]]);
//# sourceMappingURL=main.41cc18da.chunk.js.map