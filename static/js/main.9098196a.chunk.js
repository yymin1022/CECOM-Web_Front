(this["webpackJsonpcecom-web"]=this["webpackJsonpcecom-web"]||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){},151:function(e,t,c){"use strict";c.r(t);var s=c(2),i=c(75),n=c.n(i),a=c(20),r=c(9),j=c(12),d=c(84),o=c(1),l=["layout","component"],b=function(e){var t=e.layout,c=e.component,s=Object(d.a)(e,l);return Object(o.jsx)(r.a,Object(j.a)(Object(j.a)({},s),{},{render:function(e){return Object(o.jsx)(t,{children:Object(o.jsx)(c,Object(j.a)({},e))})}}))},h=(c(101),function(){return Object(o.jsxs)("div",{className:"Header",children:[Object(o.jsx)(a.b,{to:"/",children:Object(o.jsx)("div",{className:"headerTitle",children:Object(o.jsx)("div",{className:"headerTitleText",children:Object(o.jsx)("p",{children:"CECOM"})})})}),Object(o.jsxs)("div",{className:"headerNav",children:[Object(o.jsx)(a.b,{to:"/board",children:Object(o.jsx)("div",{className:"headerNavItem",children:Object(o.jsx)("div",{className:"headerNavItemTitle",children:Object(o.jsx)("p",{children:"\uac8c\uc2dc\ud310"})})})}),Object(o.jsx)(a.b,{to:"/introduction",children:Object(o.jsx)("div",{className:"headerNavItem",children:Object(o.jsx)("div",{className:"headerNavItemTitle",children:Object(o.jsx)("p",{children:"\uc18c\uac1c"})})})}),Object(o.jsx)(a.b,{to:"/member",children:Object(o.jsx)("div",{className:"headerNavItem",children:Object(o.jsx)("div",{className:"headerNavItemTitle",children:Object(o.jsx)("p",{children:"\uba64\ubc84"})})})}),Object(o.jsx)(a.b,{to:"/project",children:Object(o.jsx)("div",{className:"headerNavItem",children:Object(o.jsx)("div",{className:"headerNavItemTitle",children:Object(o.jsx)("p",{children:"\ud504\ub85c\uc81d\ud2b8"})})})})]})]})}),O=(c(102),function(e){var t=e.className,c=e.children;return Object(o.jsx)("div",{id:"SectionContainer",className:t,children:Object(o.jsx)("div",{id:"SectionWrapper",children:c})})}),x=(c(103),function(e){var t=e.className,c=e.children;return Object(o.jsxs)("div",{id:"Container",className:t,children:[Object(o.jsx)(h,{}),Object(o.jsx)(O,{children:c})]})}),u=(c(104),function(){return Object(o.jsx)("div",{id:"divHome",children:"Home Page"})}),m=c(54),p=c(48),v=c.n(p),f=(c(123),function(e){var t=e.author,c=e.date,s=e.date,i=e.title,n=new Date;return c=""+(n.getFullYear()-2e3)+(n.getMonth()+1)+n.getDate()==c.split("-")[0]?(c=c.split("-")[1]).substr(0,2)+":"+c.substr(2,2):(c=c.split("-")[0]).substr(2,2)+"-"+c.substr(4,2),""!=s?Object(o.jsxs)(a.b,{to:"/postview/".concat(s),children:[Object(o.jsxs)("div",{className:"divBoardItem",children:[Object(o.jsx)("p",{class:"pBoardItemTitle",children:i}),Object(o.jsx)("p",{class:"pBoardItemAuthor",children:t}),Object(o.jsx)("p",{class:"pBoardItemDate",children:c})]}),Object(o.jsx)("div",{className:"divBoardItemDivider"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"divBoardItem",children:[Object(o.jsx)("p",{class:"pBoardItemTitle",children:i}),Object(o.jsx)("p",{class:"pBoardItemAuthor",children:t}),Object(o.jsx)("p",{class:"pBoardItemDate",children:c})]}),Object(o.jsx)("div",{className:"divBoardItemDivider"})]})}),N=(c(124),function(){var e=Object(s.useState)({RESULT:{RESULT_CODE:100,RESULT_MSG:"NOT LOADED"},DATA:{"":{author:"",content:"",title:"\uac8c\uc2dc\uae00 \ubaa9\ub85d\uc744 \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4..."}}}),t=Object(m.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){v.a.post("https://api.cecom.dev/getPostList").then((function(e){i(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsx)("div",{id:"divBoard",children:Object(o.jsxs)("div",{id:"divBoardContainer",children:[Object(o.jsxs)("div",{id:"divBoardTitle",children:[Object(o.jsxs)("div",{id:"divBoardTitleText",children:[Object(o.jsx)("p",{class:"pBoardPostTitle",children:"\uc81c\ubaa9"}),Object(o.jsx)("p",{class:"pBoardPostAuthor",children:"\uc791\uc131\uc790"}),Object(o.jsx)("p",{class:"pBoardPostDate",children:"\ub0a0\uc9dc"})]}),Object(o.jsx)("div",{id:"divBoardTitleDivider"})]}),Object(o.jsx)("div",{id:"divBoardItemContainer",children:Object.entries(c.DATA).reverse().map((function(e){return Object(o.jsx)(f,{author:e[1].author,date:e[0],title:e[1].title})}))})]})})}),T=(c(125),function(){return Object(o.jsx)("div",{id:"divIntroduction",children:"Introduction Page"})}),D=(c(126),function(){return Object(o.jsx)("div",{id:"divMember",children:"Member Page"})}),I=c(165),B=c(82),P=c(83),A=function(e){var t=e.match.params.postID,c=Object(s.useState)({RESULT:{RESULT_CODE:100,RESULT_MSG:"NOT LOADED"},DATA:{author:"",content:"",title:"\uac8c\uc2dc\uae00\uc744 \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4..."}}),i=Object(m.a)(c,2),n=i[0],a=i[1];return Object(s.useEffect)((function(){v.a.post("https://api.cecom.dev/getPost",{postID:t}).then((function(e){a(e)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsx)(o.Fragment,{children:Object.entries(n).map((function(e){var c="",s="",i=t,n="";if("data"==e[0]&&0==e[1].RESULT.RESULT_CODE)return c=e[1].DATA.author,s=e[1].DATA.content,n=e[1].DATA.title,Object(o.jsxs)("div",{align:"center",className:"PostContainer",children:[Object(o.jsxs)("div",{className:"PostTitle",children:[Object(o.jsx)("h2",{children:n}),Object(o.jsxs)("div",{className:"PostAuthorDate",children:[Object(o.jsxs)("p",{children:["written by ",c]}),Object(o.jsx)("p",{children:"|"}),Object(o.jsx)("p",{children:i})]})]}),Object(o.jsx)("hr",{className:"PostSeperator"}),Object(o.jsx)("div",{className:"PostViewContent",children:Object(o.jsx)("div",{className:"markdown-body",children:Object(o.jsx)(I.a,{children:s,rehypePlugins:[B.a],remarkPlugins:[P.a]})})})]})}))})},g=function(e){var t=e.match.params.postType;return Object(o.jsxs)("div",{children:["PostWrite ",t]})},E=(c(149),function(){return Object(o.jsx)("div",{id:"divProject",children:"Project Page"})}),S=function(){return Object(o.jsx)(a.a,{basename:"",children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(b,{exact:!0,path:"/",layout:x,component:Object(r.f)(u)}),Object(o.jsx)(b,{exact:!0,path:"/board",layout:x,component:Object(r.f)(N)}),Object(o.jsx)(b,{exact:!0,path:"/introduction",layout:x,component:Object(r.f)(T)}),Object(o.jsx)(b,{exact:!0,path:"/member",layout:x,component:Object(r.f)(D)}),Object(o.jsx)(b,{exact:!0,path:"/postview/:postID",layout:x,component:Object(r.f)(A)}),Object(o.jsx)(b,{exact:!0,path:"/postwrite/:postID",layout:x,component:Object(r.f)(g)}),Object(o.jsx)(b,{exact:!0,path:"/project",layout:x,component:Object(r.f)(E)})]})})};c(150);n.a.render(Object(o.jsx)(S,{}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.9098196a.chunk.js.map