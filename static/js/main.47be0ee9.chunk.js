(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{148:function(t,e,n){},150:function(t,e,n){},154:function(t,e,n){},157:function(t,e,n){},158:function(t,e,n){},159:function(t,e,n){},178:function(t,e,n){},278:function(t,e,n){},279:function(t,e,n){},280:function(t,e,n){},281:function(t,e,n){},282:function(t,e,n){},283:function(t,e,n){},284:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(56),s=n.n(r),i=(n(148),n(6)),u=n.n(i),o=n(12),l=(n.p,n(150),n(27)),j=n(8),b=n(13),d=(n(154),n.p,n(1)),f=Object(b.b)((function(t){return{login:t.auth.login}}))((function(t){Object(j.e)();return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("div",{className:"header__logo",children:"TODO-LIST"})})})),O=(n(157),function(t){return Object(d.jsx)("div",{className:"footer"})}),p=n(14),m=(n(158),n(32)),h=n(5),x=n(117),v=(n(159),["input","meta"]),k=function(t){var e=t.input,n=t.meta,a=Object(x.a)(t,v),c=n.touched&&n.error;return Object(d.jsx)(a.name,Object(h.a)(Object(h.a)(Object(h.a)({},a),e),{},{className:"formControl"+(c?" error":"")}))},g=function(t){return Object(d.jsx)(k,Object(h.a)({name:"input"},t))},_=n(111),T=n(112),C=n(57),w=n(114).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.1/",headers:{"API-KEY":"8aab515b-a7ff-412f-94c0-660df0312e47"}}),N=function(){return w.get("auth/me")},S=function(t){return w.post("auth/login",t)},y=function(){return w.delete("auth/login")},I=n(24),E=n(285),D="SET_LIST",L="SET_NEW_LIST",A="RENAME_LIST",F="DELETE_LIST",K="CLEAN_LISTS",P="SET_TASKS",z="SET_NEW_TASK",M="DELETE_TASK",B="SET_TASK_AFTER_CHANGE",R=function(t,e){return{type:A,listID:t,title:e}},J=function(t){return{type:z,listID:t}},U=function(t,e){return{type:M,listID:t,taskID:e}},G=function(t){return{type:B,task:t}},H=function(t){return{type:L,title:t}},W=function(t){return function(){var e=Object(o.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(H(t=t||"\u0417\u0430\u0434\u0430\u0447\u0438")),e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(){return function(){var t=Object(o.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("data")),t.next=3,e({type:D,lists:n});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Q={lists:[],listsIds:[]},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0,n=E.a(),a=E.a();switch(e.type){case D:return{lists:e.lists};case L:return Object(h.a)(Object(h.a)({},t),{},{lists:[].concat(Object(I.a)(t.lists),[{id:n,title:e.title,tasks:[{id:a,listID:n,title:"",completed:!1}]}])});case A:return Object(h.a)(Object(h.a)({},t),{},{lists:t.lists.map((function(t){return t.id==e.listID?Object(h.a)(Object(h.a)({},t),{},{title:e.title}):t}))});case K:return Object(h.a)(Object(h.a)({},t),{},{lists:[]});case F:return Object(h.a)(Object(h.a)({},t),{},{lists:Object(I.a)(t.lists.filter((function(t){return t.id!=e.listID})))});case P:return Object(h.a)(Object(h.a)({},t),{},{lists:Object(I.a)(t.lists.map((function(t,n){return Object(h.a)(Object(h.a)({},t),{},{tasks:Object(I.a)(e.tasks[n].data.items)})})))});case z:return Object(h.a)(Object(h.a)({},t),{},{lists:Object(I.a)(t.lists.map((function(t){return t.id==e.listID?Object(h.a)(Object(h.a)({},t),{},{tasks:[].concat(Object(I.a)(t.tasks),[{id:a,listID:t.id,title:"",completed:!1}])}):t})))});case M:return Object(h.a)(Object(h.a)({},t),{},{lists:Object(I.a)(t.lists.map((function(t){return t.id==e.listID?Object(h.a)(Object(h.a)({},t),{},{tasks:t.tasks.filter((function(t){return t.id!=e.taskID}))}):t})))});case B:return Object(h.a)(Object(h.a)({},t),{},{lists:Object(I.a)(t.lists.map((function(t){return t.id==e.task.listID?Object(h.a)(Object(h.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id==e.task.taskID?{id:e.task.taskID,listID:e.task.listID,completed:e.task.completed,title:e.task.title}:t}))}):t})))});default:return t}},X="AUTH_ME",Y="LOGOUT_USER",Z=function(t){var e=t.login,n=t.email,a=t.id;return{type:X,login:e,email:n,id:a}},$={isAuth:!1,login:null,email:null,id:null},tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case X:return Object(h.a)(Object(h.a)({},t),{},{isAuth:!0,login:e.login,email:e.email,id:e.id});case Y:return Object(h.a)(Object(h.a)({},t),{},{isAuth:!1,login:null,email:null,id:null});default:return t}},et=n(11),nt=(n(178),n.p+"static/media/arrow-exit.a244d6b7.svg"),at=function(t){return{}},ct=function(t){return Object(b.b)(at)((function(e){var n=Object(a.useState)(!1),c=Object(p.a)(n,2),r=c[0],s=c[1],i=Object(j.e)();Object(a.useEffect)((function(){setTimeout((function(){return s(!0)}),50)}),[]);var u=function(){s(!1),setTimeout((function(){i.push("")}),500)};return Object(d.jsx)("div",{className:m("modal",{active:r}),onClick:function(){return u()},children:Object(d.jsxs)("div",{className:m("modal__content",{active:r}),onClick:function(t){return t.stopPropagation()},children:[Object(d.jsx)("div",{className:"modal_exit",onClick:function(){return u()},children:Object(d.jsx)("img",{src:nt,alt:"X"})}),Object(d.jsx)(t,Object(h.a)(Object(h.a)({},e),{},{unmount:u}))]})})}))},rt=function(t){if(!t)return"Field is required"},st=Object(T.a)({form:"login"})((function(t){var e=Object(a.useState)(null),n=Object(p.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){t.error&&r(t.error)}),[t.error]),"Incorrect anti-bot symbols"==c&&alert("\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u043a\u0430\u043f\u0447\u0443 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 https://social-network.samuraijs.com/"),Object(d.jsxs)("form",{onSubmit:t.handleSubmit,className:"form",children:[Object(d.jsx)("div",{className:"form__input_email input",children:Object(d.jsx)(_.a,{type:"text",placeholder:"Email",component:g,name:"email",validate:[rt]})}),Object(d.jsx)("div",{className:"form__input_password input",children:Object(d.jsx)(_.a,{type:"text",placeholder:"Password",component:g,name:"password",validate:[rt]})}),Object(d.jsx)("div",{className:"form__checkbox_rememberme",children:Object(d.jsx)(_.a,{type:"checkbox",component:g,name:"rememberMe",id:"rememberMe"})}),Object(d.jsx)("label",{htmlFor:"rememberMe",className:"form__input_text",children:"Remember me"}),Object(d.jsx)("div",{className:"error",children:t.error&&Object(d.jsx)("div",{className:"error__message",children:Object(d.jsx)("div",{children:t.error})})}),Object(d.jsx)("button",{className:"form__btnlogin btn",children:"Login"})]})})),it=Object(et.d)(ct,Object(b.b)((function(t){return{isAuth:t.auth.isAuth}}),{loginingTC:function(t){return function(){var e=Object(o.a)(u.a.mark((function e(n){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:if((a=e.sent).data.resultCode){e.next=9;break}return n(function(){var t=Object(o.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:return(n=t.sent).data.resultCode||e(Z(n.data.data)),t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n(q()),e.abrupt("return",!0);case 9:1==a.data.resultCode&&(c=a.data.messages.length>0?a.data.messages[0]:"Some error",n(Object(C.a)("login",{_error:c})));case 10:case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},logoutTC:function(){return function(){var t=Object(o.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:t.sent.data.resultCode||(e({type:Y}),e({type:K}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(t){return Object(d.jsxs)("div",{className:"login",children:[t.isAuth?Object(d.jsx)("h3",{className:"modal_title",children:"Quit"}):Object(d.jsx)("h3",{className:"modal_title",children:"Sing In"}),t.isAuth?Object(d.jsx)("button",{onClick:function(){t.logoutTC(),t.unmount()},className:"login__logout-btn btn",children:"Logout"}):Object(d.jsx)(st,{onSubmit:function(e){t.loginingTC(e)},initialValues:{email:"free@samuraijs.com",password:"free"}})]})})),ut=(n(278),n(279),n(280),Object(et.d)(ct,j.g,Object(b.b)(null,{deleteListTC:function(t){return function(){var e=Object(o.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({type:F,listID:t});case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))((function(t){var e=Object(j.f)().id,n=(Object(j.e)(),function(){var n=Object(o.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.deleteListTC(e);case 2:n.sent&&t.unmount();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}());return Object(d.jsxs)("div",{onKeyPress:function(t){"Enter"==t.code&&n()},className:"delwar",children:[Object(d.jsx)("h3",{className:"modal_title delwar__title",children:"Delete List"}),Object(d.jsx)("div",{className:"delwar__text",children:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447?"}),Object(d.jsx)("button",{className:"delwar__btn btn btn-yes",onClick:n,children:"\u0414\u0430"}),Object(d.jsx)("button",{className:"delwar__btn btn btn-no",onClick:t.unmount,children:"\u041d\u0435\u0442"})]})}))),ot=(n(281),n(282),n.p+"static/media/dry-clean.a137131d.svg"),lt=n.p+"static/media/check1.d644c682.svg",jt=n.p+"static/media/check0.06efe408.svg",bt=n.p+"static/media/delete.ec5dc9a8.svg",dt=function(t){var e=Object(a.useState)(!1),n=Object(p.a)(e,2),c=n[0],r=n[1],s=Object(a.useState)(!1),i=Object(p.a)(s,2),l=i[0],j=i[1],b=Object(a.useState)(),f=Object(p.a)(b,2),O=f[0],h=f[1],x=Object(a.useState)(!1),v=Object(p.a)(x,2),k=v[0],g=v[1];Object(a.useEffect)((function(){t.title&&h(t.title)}),[t.title]),Object(a.useEffect)((function(){g(!1),j(Boolean(t.completed))}),[t.completed]);var _=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!0),t.changeComplitedStatusTC(t.listID,t.id,!l,O);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){c&&O!=t.title&&t.changeTaskTextTC(t.listID,t.id,O,t.completed),r(!c)};return Object(d.jsxs)("div",{className:"task",children:[Object(d.jsx)("div",{className:"task__check-block",children:k?Object(d.jsx)("img",{src:jt,className:"task__check-block_loading",alt:""}):l?Object(d.jsx)("img",{onClick:_,src:lt,alt:""}):Object(d.jsx)("img",{onClick:_,src:ot,alt:""})}),Object(d.jsxs)("div",{onClick:T,className:"task__text",children:[c?Object(d.jsx)("input",{className:"task__text_input input",type:"text",placeholder:"Enter task...",onKeyPress:function(t){"Enter"==t.code&&T()},value:O,onChange:function(t){h(t.target.value)},onBlur:T,autoFocus:!0,maxLength:"100"}):Object(d.jsx)("span",{className:m("task__text_span",{done:l}),children:t.title}),Object(d.jsx)("div",{className:"help-buttons",children:Object(d.jsx)("span",{className:"help-buttons__item delete",children:Object(d.jsx)("img",{onClick:function(){t.deleteTaskTC(t.listID,t.id)},src:bt,alt:""})})})]})]})},ft=n.p+"static/media/info.e67af643.svg",Ot=n.p+"static/media/add.e353df1d.svg",pt=Object(b.b)(null,{renameListTC:function(t,e){return function(){var n=Object(o.a)(u.a.mark((function n(a){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a(R(t,e));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},createNewTaskTC:function(t){return function(){var e=Object(o.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(J(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},changeTaskTextTC:function(t,e,n,a){return function(){var c=Object(o.a)(u.a.mark((function c(r){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n){c.next=5;break}return c.next=3,r(U(t,e));case 3:c.next=7;break;case 5:return c.next=7,r(G({listID:t,taskID:e,title:n,completed:a}));case 7:case"end":return c.stop()}}),c)})));return function(t){return c.apply(this,arguments)}}()},changeComplitedStatusTC:function(t,e,n,a){return function(){var c=Object(o.a)(u.a.mark((function c(r,s){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,r(G({listID:t,taskID:e,completed:n,title:a}));case 2:case"end":return c.stop()}}),c)})));return function(t,e){return c.apply(this,arguments)}}()},deleteTaskTC:function(t,e){return function(){var n=Object(o.a)(u.a.mark((function n(a){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a(U(t,e));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}})((function(t){var e=t.infoAboutList,n=t.tasks,c=t.renameListTC,r=t.createNewTaskTC,s=t.changeTaskTextTC,i=t.changeComplitedStatusTC,u=t.deleteTaskTC,o=Object(a.useState)(!1),l=Object(p.a)(o,2),b=l[0],f=l[1],O=Object(a.useState)(e.title),m=Object(p.a)(O,2),x=m[0],v=m[1],k=Object(j.e)();Object(a.useEffect)((function(){v(e.title)}),[e.title]);var g=function(){b&&x!=e.title&&c(e.id,x),f(!b)};return Object(d.jsxs)("div",{className:"list",children:[Object(d.jsxs)("div",{className:"list__title",onDoubleClick:g,children:[b?Object(d.jsx)("input",{className:"list__title_input input",type:"text",value:x,onKeyPress:function(t){"Enter"==t.code&&g()},onChange:function(t){v(t.target.value)},onBlur:g,autoFocus:!0}):Object(d.jsx)("span",{className:"list__title_span",children:x}),Object(d.jsxs)("div",{className:"help-buttons",children:[Object(d.jsx)("span",{className:"help-buttons__item info",children:Object(d.jsx)("img",{onClick:g,src:ft,alt:""})}),Object(d.jsx)("span",{className:"help-buttons__item delete",children:Object(d.jsx)("img",{onClick:function(){return k.push("/delete-warning/".concat(e.id))},src:bt,alt:""})})]})]}),Object(d.jsx)("div",{className:"list__tasks",children:n.map((function(t,e){return Object(d.jsx)(dt,Object(h.a)({changeTaskTextTC:s,createNewTaskTC:r,changeComplitedStatusTC:i,deleteTaskTC:u},t),e)}))}),Object(d.jsx)("div",{className:"add-task",children:Object(d.jsx)("img",{onClick:function(){return r(e.id)},src:Ot,alt:"",title:"Add task"})})]})})),mt=Object(b.b)((function(t){return{lists:t.todo.lists,isAuth:t.auth.isAuth}}),{createNewListTC:W})((function(t){var e=Object(a.useState)(),n=Object(p.a)(e,2);n[0],n[1],Object(j.e)();return Object(d.jsxs)("div",{className:"main",children:[t.lists.map((function(t,e){return Object(d.jsx)(pt,{infoAboutList:t,tasks:t.tasks},e)})),Object(d.jsx)("div",{className:"addList",children:Object(d.jsx)(l.b,{to:"/add-list",children:Object(d.jsx)("img",{src:Ot,alt:"",title:"Add TODO list"})})})]})})),ht="SET_INIT",xt={initialized:!1},vt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ht:return Object(h.a)(Object(h.a)({},t),{},{initialized:!0});default:return t}},kt=(n(283),Object(et.d)(ct,Object(b.b)(null,{createNewListTC:W}))((function(t){var e=Object(a.useState)(),n=Object(p.a)(e,2),c=n[0],r=n[1],s=(Object(j.e)(),function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.createNewListTC(c);case 4:e.sent&&t.unmount();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(d.jsxs)("div",{className:"add-list",children:[Object(d.jsx)("h3",{className:"modal_title",children:"Create List"}),Object(d.jsx)("input",{autoFocus:!0,onKeyPress:function(t){"Enter"==t.code&&s()},onChange:function(t){r(t.target.value)},value:c,className:"add-list_input input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(d.jsx)("button",{onClick:s,className:"add-list_btn btn",children:"Create"})]})})));var gt=Object(b.b)((function(t){return{initialized:t.init.initialized,lists:t.todo.lists}}),{initializeAppTC:function(){return function(){var t=Object(o.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.getItem("data")||localStorage.setItem("data",'[{"id":"fea4a820-5b5e-11ec-b52d-650f3b77cf7b","title":"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447","tasks":[{"id":"fe4c00d0-5b5e-11ec-b52d-650f3b77cf7b","listID":"fea4a820-5b5e-11ec-b52d-650f3b77cf7b","title":"\u0437\u0430\u0434\u0430\u0447\u0430","completed":true}]}]'),t.next=3,e(q());case 3:return t.next=5,e({type:ht});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveChangesToLocalStorage:function(){return function(t,e){localStorage.setItem("data",JSON.stringify(e().todo.lists))}}})((function(t){return Object(a.useEffect)(Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initializeAppTC();case 2:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)(Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("save changes"),e.next=3,t.saveChangesToLocalStorage();case 3:case"end":return e.stop()}}),e)}))),[t.lists]),Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(f,{}),Object(d.jsx)(j.a,{path:"/login",render:function(){return Object(d.jsx)(it,{})}}),Object(d.jsx)(j.a,{path:"/add-list",render:function(){return Object(d.jsx)(kt,{})}}),Object(d.jsx)(j.a,{path:"/delete-warning/:id",render:function(){return Object(d.jsx)(ut,{})}}),Object(d.jsx)(mt,{}),Object(d.jsx)(O,{})]})})})),_t=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,286)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))},Tt=n(113),Ct=n(116),wt=Object(et.c)({auth:tt,todo:V,form:Tt.a,init:vt}),Nt=Object(et.e)(wt,Object(et.a)(Ct.a));window.store=Nt;var St=Nt;s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b.a,{store:St,children:Object(d.jsx)(gt,{})})}),document.getElementById("root")),_t()}},[[284,1,2]]]);
//# sourceMappingURL=main.47be0ee9.chunk.js.map