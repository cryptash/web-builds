(this["webpackJsonpcryptash-client"]=this["webpackJsonpcryptash-client"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},122:function(e,t){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(52),s=a.n(r),i=(a(77),a(78),a(5)),o=a(1),u=n.a.createContext(void 0),d=function(e,t){if("CHANGE"===t.type)return{height:window.innerHeight,width:window.innerWidth};throw new Error("Unhandled action type: ".concat(t))},l={width:window.innerWidth,height:window.innerHeight},h=function(e){var t=e.children,a=n.a.useReducer(d,l),c=Object(i.a)(a,2),r={state:c[0],dispatch:c[1]};return Object(o.jsx)(u.Provider,{value:r,children:t})},j=function(){var e=n.a.useContext(u);if(void 0===e)throw new Error("useCount must be used within a CountProvider");return e},m=function(e){var t=e.children,a=j().dispatch;return Object(c.useEffect)((function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),window.addEventListener("resize",(function(e){a({type:"CHANGE"});var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}))}),[a]),Object(o.jsx)(o.Fragment,{children:t})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,140)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},b=a(29),g=a(10),p=a(32),f=a(4),O=(a(80),{server_url:"https://chat.ciphen.net/",socket_url:"wss://chat.ciphen.net"}),v=a(44),y=a(71),x=a(138),w=a(136),N=a(135),S={user_id:"",username:"",pub_key:"",picture:"",chats:[]},k=a(53),E=a(67),I=a.n(E),C=a(18),A={username:"",user_id:"",picture:"",pub_key:"",chat_id:"",messages:[],read_messages:[],status:"OFFLINE"},F=I()(),M=F("chat/change"),R=F("chat/set_id"),H=F("chat/messages/get"),T=F("chat/message/read"),D=F("users/search"),L=F("chat/create"),G=F("chat/messages/send"),P=Object(k.a)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/done":return localStorage.setItem("token",t.payload.token),Object(f.a)({},e);case"chat/message/create":var a=e.chats.filter((function(e){return e.chat_id===t.payload.chat_id}));if(a[0]){var c=e.chats.indexOf(a[0]);a[0].messages[0]={content:t.payload.content,read:t.payload.read,date:t.payload.date,message_id:t.payload.message_id,fromMe:t.payload.from===localStorage.getItem("user_id")},a[0].messageAt=t.payload.date,0!==c&&(e.chats=e.chats.filter((function(e){return e!==a[0]})),e.chats.unshift(a[0]))}return Object(f.a)({},e);case"user/get_info/done":return t.payload;default:return e}},chatReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case"chat/load_messages/done":return e.messages=[].concat(Object(C.a)(a.messages),Object(C.a)(e.messages)),e.pub_key=a.pub_key,e.picture=a.picture,e.username=a.username,e.status=a.status,Object(f.a)({},e);case"chat/change":return{username:"",user_id:"",picture:"",pub_key:"",chat_id:t.payload.id,messages:[],read_messages:[],status:"OFFLINE"};case"chat/messages/send":return e.messages.push({content:t.payload.content,read:!1,date:new Date,message_id:"",fromMe:!0}),Object(f.a)({},e);case"chat/message/setId":return e.chat_id===t.payload.chat_id&&(e.messages[e.messages.length-1].message_id=t.payload.id,e.read_messages.includes(t.payload.id)&&(e.messages[e.messages.length-1].read=!0)),Object(f.a)({},e);case"chat/message/create":return e.chat_id===t.payload.chat_id&&(e.messages.filter((function(e){return t.payload.message_id===e.message_id}))[0]||e.messages.push({content:t.payload.content,read:t.payload.read,date:t.payload.date,message_id:t.payload.message_id,fromMe:t.payload.from===localStorage.getItem("user_id")})),Object(f.a)({},e);case"chat/change_key":return e.pub_key=t.payload,Object(f.a)({},e);case"chat/set_id":return e.chat_id=t.payload.id,Object(f.a)({},e);case"chat/message/read":if(t.payload.chat_id===e.chat_id){var c=e.messages.filter((function(e){return e.message_id===t.payload.message_id}))[0];c?e.messages.filter((function(e){return e.message_id===t.payload.message_id}))[0].read=!0:e.read_messages.push(t.payload.message_id)}return e;case"chat/data/set":return Object(f.a)(Object(f.a)({},e),a);default:return e}}}),U=P,z=localStorage.getItem("user_id")||"anonymous",B=localStorage.getItem("token")||"",Z=new x.a({subprotocol:"1.0.0",server:O.socket_url,userId:z,token:B}),W=Object(N.a)(Z)(U);Object(w.a)(W.client);var Y=W;var J=function(){var e=Object(c.useState)({username:"",password:"",key:""}),t=Object(i.a)(e,2),a=t[0],n=t[1],r=function(e){n(Object(f.a)(Object(f.a)({},a),{},Object(p.a)({},e.target.name,e.target.value)))};Object(c.useEffect)((function(){localStorage.getItem("user_id")&&localStorage.getItem("token")&&s.push("/")}),[]);var s=Object(g.f)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"login_main",children:[Object(o.jsxs)("div",{className:"login_main__header",children:[Object(o.jsx)("h1",{className:"login_main__header___title",children:"Sign in into your account"}),Object(o.jsx)("h2",{className:"login_main__header___undertitle",children:"If you don't have account, sign up using button below"})]}),Object(o.jsx)("div",{className:"login_main__block",children:Object(o.jsx)("form",{className:"login_main__form",onSubmit:function(e){e.preventDefault(),function(e,t,a){var c=new y.a({subprotocol:"1.0.0",server:O.socket_url,userId:"anonymous"});c.on("add",(function(e){"login/done"===e.type?(localStorage.setItem("user_id",e.user_id),localStorage.setItem("token",e.token),localStorage.setItem("key",v.AES.decrypt(e.private_key,t).toString(v.enc.Utf8)),Y.client.changeUser(e.user_id,e.token),a("/")):"logux/undo"===e.type&&alert(e.reason)})),c.start(),c.log.add({type:"login",username:e,password:t},{sync:!0})}(a.username,a.password,(function(e){return s.push(e)}))},children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Cryptash"}),Object(o.jsx)("input",{name:"username",placeholder:"Username",className:"login_main__form___username",onChange:function(e){return r(e)}}),Object(o.jsx)("input",{name:"password",type:"password",placeholder:"Password",className:"login_main__form___password",onChange:function(e){return r(e)}}),Object(o.jsx)("button",{type:"submit",className:"login_main__form___submit",children:"Login"}),Object(o.jsx)(b.b,{to:"/register",children:"Create new account"})]})})})]})})},K=(a(114),function(){return Object(o.jsxs)("div",{className:"lds-roller",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})}),$=(a(115),function(e){return e.username?e.picture.includes("http")?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"profile_picture",children:Object(o.jsx)("img",{src:e.picture,alt:"".concat(e.username,"'s profile pic"),className:"profile_picture__img"})})}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"profile_picture",style:{background:e.picture},children:Object(o.jsx)("span",{className:"profile_picture__text",children:e.username[0].toUpperCase()})})}):Object(o.jsx)(o.Fragment,{})}),q=(a(116),function(e){var t=Object(g.f)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"chat_sidebar__header",onClick:function(t){window.innerWidth<900&&e.setOpen()},children:[Object(o.jsx)($,{username:e.user.username,picture:e.user.picture}),Object(o.jsx)("span",{className:"chat_sidebar__header___username",children:e.user.username}),Object(o.jsx)("span",{className:"material-icons outlined chat_sidebar__header___signout",onClick:function(){localStorage.removeItem("key"),localStorage.removeItem("token"),localStorage.removeItem("user_id"),t.push("/login"),document.location.reload()},children:"logout"})]})})}),V=(a(117),a(55)),Q=a(31),X=a(28),ee=a.n(X),te=function(e){return"Uint8Array"===typeof e?e:Object(Q.decodeBase64)(e)},ae=function(e,t,a){var c=te(e),n=te(a),r=Object(Q.decodeBase64)(t),s=r.slice(0,X.box.nonceLength),i=r.slice(X.box.nonceLength,t.length),o=a?X.box.open(i,s,n,c):X.box.open.after(i,s,c);if(o||(console.error("Couldn't decrypt:"),console.error({messageWithNonce:t,key:a,secretOrSharedKey:e})),o){var u=Object(Q.encodeUTF8)(o);return JSON.parse(u)}return{text:""}},ce=function(e){var t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()},ne=function(e){var t=new Date(e),a=new Intl.RelativeTimeFormat(["en"],{style:"narrow"}),c=new Date,n=c.getTime()-t.getTime();return ce(t)?c.getHours()-t.getHours()<2?0===Math.floor(n/1e3/60)?a.format(-Math.round(n/1e3),"seconds"):a.format(-Math.round(n/1e3/60),"minutes"):t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):function(e){var t=new Date;return e.getDate()===t.getDate()-1&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(t)?"yesterday":t.toLocaleDateString([],{day:"2-digit",month:"numeric",year:"2-digit"})},re=function(e){var t=new Date(e),a=new Date;return ce(t)?!(a.getHours()-t.getHours()<2)&&"today, ".concat(t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})):"".concat(ne(t),", ").concat(t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))},se=a(19),ie=function(e){var t=e.chat,a=Object(g.f)(),n=Object(se.d)(),r=Object(g.g)();Object(c.useEffect)((function(){Y.client.log.type("chat/create/done",(function(e,t){a.push("/".concat(e.payload.chat_id))}))}),[a]);var s=Object(c.useMemo)((function(){if(t.messages[0])try{return ae(localStorage.getItem("key"),t.messages[0].content,t.user.pub_key).text}catch(e){return""}return""}),[t.messages[0],t.user.pub_key]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"chat_list__card ".concat(r.id===e.chat.chat_id?"active":""),onClick:function(e){t.chat_id?a.push("/".concat(t.chat_id)):n.sync(L({user_id:t.user.user_id}))},children:[Object(o.jsx)($,{username:t.user.username,picture:t.user.picture}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsxs)("div",{className:"chat_list__card___top",children:[Object(o.jsx)("span",{className:"chat_list__card___top____username",children:t.user.username}),Object(o.jsx)("span",{className:"chat_list__card___top____date",children:t.messages[0]&&t.messageAt?re(t.messageAt)?re(t.messageAt):Object(o.jsx)(V.a,{datetime:t.messageAt,opts:{minInterval:5}}):""})]}),Object(o.jsx)("div",{className:"chat_list__card___bottom",children:Object(o.jsx)("span",{className:"chat_list__card___bottom____content",children:s})})]})]})})},oe=a(47),ue=(a(124),n.a.createContext(void 0)),de=function(e,t){switch(t.type){case"CHANGE_FILTER":return"users"===t.payload.type&&""===t.payload.filter?Object(f.a)(Object(f.a)({},e),{},Object(p.a)({chats:[]},t.payload.type,t.payload.filter)):Object(f.a)(Object(f.a)({},e),{},Object(p.a)({},t.payload.type,t.payload.filter));case"CHANGE_CHATS":return Object(f.a)(Object(f.a)({},e),{},{chats:t.payload.chats});default:throw new Error("Unhandled action type: ".concat(t))}},le={users:"",messages:"",chats:[]},he=function(e){var t=e.children,a=n.a.useReducer(de,le),c=Object(i.a)(a,2),r={state:c[0],dispatch:c[1]};return Object(o.jsx)(ue.Provider,{value:r,children:t})},je=function(){var e=n.a.useContext(ue);if(void 0===e)throw new Error("useCount must be used within a CountProvider");return e},me=Object(se.c)((function(e,t){return{chats:Object(C.a)(e.userReducer.chats)}}),(function(e){return{}}))((function(e){var t=je();return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"chat_list",children:function(){var a=[];return t.state.chats[0]&&t.state.chats.forEach((function(e){a.push(Object(o.jsx)(ie,{chat:{chat_id:"",user:e,messages:[]}},Object(oe.a)(5)))})),e.chats.forEach((function(e){t.state.users?e.user.username.toLowerCase().includes(t.state.users.toLowerCase())&&a.push(Object(o.jsx)(ie,{chat:e},e.chat_id)):a.push(Object(o.jsx)(ie,{chat:e},e.chat_id))})),a}()})})})),_e=(a(125),function(e){var t=je(),a=Object(c.useRef)(null),n=Object(se.d)();Object(c.useEffect)((function(){Y.client.log.type("users/search/done",(function(e,a){t.dispatch({type:"CHANGE_CHATS",payload:{chats:e.payload.users}})}))}),[t]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"chat_sidebar__search",children:Object(o.jsxs)("div",{className:"chat_sidebar__search___bar",onClick:function(t){e.isOpened||null!==a.current&&setTimeout((function(){e.setOpened(!0),null!==a.current&&a.current.focus()}),100)},children:[Object(o.jsx)("span",{className:"material-icons outlined",children:"search"}),Object(o.jsx)("input",{type:"text",className:"chat_sidebar__search___bar-input",placeholder:"Search users",ref:a,onChange:function(e){return function(e){t.dispatch({type:"CHANGE_FILTER",payload:{type:"users",filter:e.target.value}}),e.target.value.length<3?t.dispatch({type:"CHANGE_CHATS",payload:{chats:[]}}):n.sync(D({query:e.target.value}))}(e)}})]})})})}),be=function(){var e=j(),t=Object(se.e)((function(e){return e.userReducer})),a=Object(c.useState)(e.state.width>900),n=Object(i.a)(a,2),r=n[0],s=n[1],u=Object(c.useState)(!1),d=Object(i.a)(u,2),l=d[0],h=d[1];return Object(c.useEffect)((function(){l||s(window.innerWidth>900)}),[e.state.width]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(he,{children:Object(o.jsxs)("div",{className:"chat_sidebar ".concat(r?"opened":"closed"),children:[Object(o.jsx)(q,{user:{username:t.username,picture:t.picture},setOpen:function(){s(!r),h(!l)}}),Object(o.jsx)(_e,{isOpened:r,setOpened:function(e){return s(e)}}),Object(o.jsx)(me,{})]})})})},ge=(a(126),a(127),a(128),a(70)),pe=function(e){var t=Object(c.useState)(""),a=Object(i.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!1),u=Object(i.a)(s,2),d=u[0],l=u[1],h=Object(se.e)((function(e){return e.chatReducer})),j=Object(se.d)(),m=Object(c.useRef)(null),_=function(t){var a;t.preventDefault();var c=function(e,t,a){var c=te(e),n=te(a),r=ee.a.randomBytes(X.box.nonceLength),s=Object(Q.decodeUTF8)(JSON.stringify(t)),i=n?Object(X.box)(s,r,n,c):X.box.after(s,r,c),o=new Uint8Array(r.length+i.length);return o.set(r),o.set(i,r.length),Object(Q.encodeBase64)(o)}(localStorage.getItem("key"),{text:n},h.pub_key);j.sync(G({chat_id:h.chat_id,content:c,from:localStorage.getItem("user_id")})),m.current&&(m.current.value=""),r(""),e.scrollDown(),null===(a=m.current)||void 0===a||a.focus(),l(!1)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"chat_dialog__input",children:Object(o.jsx)("div",{className:"chat_dialog__input-wrap",children:Object(o.jsxs)("form",{className:"chat_dialog__input-wrap--form",action:"",onSubmit:function(e){return _(e)},children:[d?Object(o.jsx)(ge.a,{emojiSize:24,perLine:8,onSelect:function(e){return function(e){m.current&&"native"in e&&(m.current.value+=e.native,r(m.current.value))}(e)}}):null,Object(o.jsx)("span",{className:"material-icons outlined",onClick:function(){return l(!d)},children:"mood"}),Object(o.jsx)("input",{className:"chat_dialog__input-wrap--message",type:"text",placeholder:"Write a message...",onInput:function(e){return function(e){r(e.target.value)}(e)},ref:m}),Object(o.jsx)("button",{type:"submit",className:"material-icons",children:"send"})]})})})})},fe=(a(130),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"chat_dialog__header",children:[Object(o.jsx)("section",{className:"chat_dialog__header___picture",children:Object(o.jsx)($,{picture:e.picture,username:e.username})}),Object(o.jsxs)("section",{className:"chat_dialog__header___info",children:[Object(o.jsx)("span",{className:"chat_dialog__header___info-username",children:e.username}),Object(o.jsx)("div",{className:"chat_dialog__header___info-status",children:function(){switch(e.status){case"OFFLINE":return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"oval grey"}),Object(o.jsx)("span",{children:"Offline"})]});case"ONLINE":return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"oval green"}),Object(o.jsx)("span",{children:"Online"})]})}}()})]})]})})}),Oe=a(137),ve=function(e){var t=Object(c.useMemo)((function(){try{return ae(localStorage.getItem("key"),e.content,e.pub_key).text}catch(t){return""}}),[e.content,e.pub_key]),a=Object(c.useState)(e.isRead),n=Object(i.a)(a,2),r=n[0],s=n[1],u=Object(c.useRef)(null),d=Object(c.useRef)(!1),l=Object(se.e)((function(e){return e.chatReducer})),h=Object(se.d)();Object(c.useEffect)((function(){r||Y.subscribe((function(){var t=Y.getState().chatReducer.messages.filter((function(t){return t.message_id===e.id}))[0];t&&t.read&&!r&&s(!0)}))}),[r,e.id]),Object(c.useEffect)((function(){!function(){var t;if(!(r||e.fromMe||d.current)){var a=null===(t=u.current)||void 0===t?void 0:t.getBoundingClientRect();a&&a.top>0&&(d.current=!0,h.sync(T({chat_id:l.chat_id,message_id:e.id})).then((function(){return d.current=!1})),s(!0))}}()}),[l.chat_id,h,r,e.fromMe,e.id]);var j=new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+","g");if(!t)return null;var m=t.match(j);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"chat_dialog__messages-message ".concat(e.fromMe?"fromMe":"toMe"),ref:u,children:[Object(o.jsxs)("div",{className:"chat_dialog__messages-message_top ".concat(e.fromMe?"fromMe":"toMe"),children:[Object(o.jsx)("div",{className:"chat_dialog__messages-message_top-bubble ".concat(e.fromMe?"fromMe":"toMe"),children:function(){var e=t,a=[];return m?(m.forEach((function(t){var c=e.split(t);""!==c[0]&&a.push(Object(o.jsx)("span",{children:c[0]})),a.push(Object(o.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:t.includes("http")?t:"https://"+t,children:Object(o.jsx)("span",{className:"chat_dialog__messages-message_top-bubble--link",children:t})})),e=c[1]})),a):t}()}),Object(o.jsx)("div",{className:"chat_dialog__messages-message_top-context",children:Object(o.jsx)("span",{className:"material-icons",children:"more_horiz"})}),e.fromMe?Object(o.jsx)("div",{className:"chat_dialog__messages-message_top-status",children:Object(o.jsx)("span",{className:"material-icons",children:r?"done_all":"done"})}):""]}),Object(o.jsx)("div",{className:"chat_dialog__messages-message_bottom ".concat(e.fromMe?"fromMe":"toMe"),children:re(e.date)?re(e.date):Object(o.jsx)(V.a,{datetime:e.date,opts:{minInterval:10}})})]})})},ye=Object(se.c)((function(e,t){return{chat_id:e.chatReducer.chat_id,messages:Object(C.a)(e.chatReducer.messages),pub_key:e.chatReducer.pub_key,status:e.chatReducer.status,username:e.chatReducer.username,picture:e.chatReducer.picture}}),(function(e){return{}}))((function(e){var t,a=Object(g.g)(),n=Object(se.d)(),r=Object(c.useRef)(0),s=Object(c.useRef)(0),u=Object(c.useState)(!1),d=Object(i.a)(u,2),l=d[0],h=d[1],j=Object(Oe.a)(e.chat_id?["chat/".concat(e.chat_id)]:[]),m=(Object(se.e)((function(e){return e.chatReducer})),Object(c.useRef)(null)),_=Object(c.useRef)([]);Object(c.useEffect)((function(){n(R({id:a.id}))}),[n,a.id]),Object(c.useEffect)((function(){n(M({id:a.id}))}),[n,a.id]);var b=Object(c.useMemo)((function(){var t=[];return e.messages.forEach((function(a){return t.push(Object(o.jsx)(ve,{id:a.message_id,subscribeToScroll:function(e){return t=e,_.current.push(t),function(){return _.current.filter((function(e){return e!==t}))};var t},isRead:a.read,content:a.content,pub_key:e.pub_key,fromMe:a.fromMe,date:a.date},a.message_id))})),t}),[e.messages,e.pub_key]);return Object(c.useEffect)((function(){m.current&&0===r.current?m.current.scrollTop<m.current.scrollHeight-300-window.innerHeight&&m.current.scrollTo(0,m.current.scrollHeight):m.current&&m.current.scrollTop<m.current.scrollHeight-300-window.innerHeight&&m.current.scrollTo(0,m.current.scrollHeight-s.current)}),[j,null===(t=m.current)||void 0===t?void 0:t.scrollHeight]),a.id?j?Object(o.jsx)("div",{className:"preloader",children:Object(o.jsx)(K,{})}):Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"chat_dialog",children:[Object(o.jsx)(fe,{username:e.username,picture:e.picture,status:e.status}),Object(o.jsx)("div",{className:"chat_dialog__messages",onScroll:function(e){return function(e){_.current.forEach((function(t){t(e)})),0===e.target.scrollTop&&(l||(r.current=r.current+1,s.current=m.current?m.current.scrollHeight:0,h(!0),n.sync(H({pg:r.current,chat_id:a.id})).then((function(){return h(!1)}))))}(e)},ref:m,children:b}),Object(o.jsx)(pe,{scrollDown:function(){return function(){var e,t;m.current&&m.current.scrollTop<m.current.scrollHeight-300-window.innerHeight&&(null===(e=m.current)||void 0===e||e.scrollTo(0,null===(t=m.current)||void 0===t?void 0:t.scrollHeight)),s.current=0}()}})]})}):Object(o.jsx)("div",{children:"No chat!"})})),xe=n.a.createContext(void 0),we=function(e,t){var a=t.payload;switch(t.type){case"ADD_MESSAGE":var c;return console.log("NEW MESSAGE"),(c=e.messages).push.apply(c,Object(C.a)(a)),Object(f.a)({},e);case"ADD_MORE_MESSAGES":return e.messages=[].concat(Object(C.a)(a),Object(C.a)(e.messages)),Object(f.a)({},e);case"CHANGE_DIALOG":return{username:"",user_id:"",picture:"",pub_key:"",messages:[]};case"CHANGE_KEY":return e.pub_key=t.payload,e;case"SET_MESSAGE_READ_STATUS":return e.messages.filter((function(e){return e.message_id===a.id}))[0].read=!0,console.log(e),e;case"SET_DIALOG_DATA":return Object(f.a)(Object(f.a)({},e),a);default:throw new Error("Unhandled action type: ".concat(t.type))}},Ne={username:"",user_id:"",picture:"",pub_key:"",messages:[]},Se=function(e){var t=e.children,a=n.a.useReducer(we,Ne),c=Object(i.a)(a,2),r={state:c[0],dispatch:c[1]};return Object(o.jsx)(xe.Provider,{value:r,children:t})},ke=a(139),Ee=a(72),Ie=function(){var e=Object(g.g)(),t=Object(Oe.a)(["user/".concat(localStorage.getItem("user_id"))]);return Object(c.useEffect)((function(){t||Object(ke.a)(Y.client,{messages:{synchronized:"Everything is up to date",disconnected:"No connection to server.",wait:"Sending...",sending:"Sending...",error:"Error occurred. Please, try again!",protocolError:"Error occurred. Please, contact admins!",syncError:"Error while syncing...",denied:"Access denied"},styles:Ee.a})}),[t]),void 0===e.id?(console.log("No chat"),Object(o.jsx)(se.a,{store:Y,children:Object(o.jsx)("div",{className:"chat",children:Object(o.jsx)(be,{})})})):t?Object(o.jsx)(K,{}):Object(o.jsx)(se.a,{store:Y,children:Object(o.jsxs)("div",{className:"chat",children:[Object(o.jsx)(be,{}),Object(o.jsx)(Se,{children:Object(o.jsx)(ye,{})})]})})},Ce=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],n=t[1],r=localStorage.getItem("token"),s=Object(g.f)(),u=function(){s.push("/login"),n(1),localStorage.removeItem("key"),localStorage.removeItem("token"),localStorage.removeItem("user_id")};return Object(c.useEffect)((function(){if(localStorage.getItem("token")){var e=new y.a({subprotocol:"1.0.0",server:O.socket_url,userId:"anonymous"});e.on("add",(function(e){"user/check/done"===e.type?(Y.client.start(),n(2)):"logux/undo"===e.type&&u()})),e.start(),e.log.add({type:"user/check",token:localStorage.getItem("token")},{sync:!0})}else u()}),[r]),0===a?Object(o.jsx)(K,{}):1===a?Object(o.jsx)(g.a,{to:"/login"}):Object(o.jsx)(se.a,{store:Y,children:Object(o.jsx)(Ie,{})})},Ae=(a(131),function(){var e=Object(c.useState)(function(){var e=X.box.keyPair(),t=e.publicKey,a=e.secretKey;return{public_key:Object(Q.encodeBase64)(t),private_key:Object(Q.encodeBase64)(a)}}()),t=Object(i.a)(e,1)[0],a=Object(c.useState)({username:"",password:""}),n=Object(i.a)(a,2),r=n[0],s=n[1],u=Object(c.useState)(!1),d=Object(i.a)(u,2),l=d[0],h=d[1],j=Object(c.useState)(!1),m=Object(i.a)(j,2),_=m[0],x=m[1],w=Object(g.f)(),N=function(e){if("verify_password"===e.target.name)e.target.value===r.password?x(!0):x(!1);else if(s(Object(f.a)(Object(f.a)({},r),{},Object(p.a)({},e.target.name,e.target.value))),"password"===e.target.name){e.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,31}$/)?h(!0):h(!1)}};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"register_main",children:[Object(o.jsxs)("div",{className:"register_main__header",children:[Object(o.jsx)("h1",{className:"register_main__header___title",children:"Create your account"}),Object(o.jsx)("h2",{className:"register_main__header___undertitle",children:"If you already have an account, login using button below"})]}),Object(o.jsx)("div",{className:"register_main__block",children:Object(o.jsx)("form",{className:"register_main__form",onSubmit:function(e){e.preventDefault(),function(e,t,a){if(t&&e&&_)if(l||alert("8 to 31 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"),e.length<3)alert("Username must be at least 3 symbols");else if(t.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,31}$/)){var c=new y.a({subprotocol:"1.0.0",server:O.socket_url,userId:"anonymous"});c.on("add",(function(e){"register/done"===e.type?(localStorage.setItem("user_id",e.user_id),localStorage.setItem("token",e.token),localStorage.setItem("key",a.private_key),Y.client.changeUser(e.user_id,e.token),w.push("/")):"logux/undo"===e.type&&alert(e.reason)})),c.start(),c.log.add({type:"register",username:e,password:t,private_key:v.AES.encrypt(a.private_key,t).toString(),pub_key:a.public_key},{sync:!0})}else h(!1)}(r.username,r.password,t)},children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Cryptash"}),Object(o.jsx)("input",{name:"username",placeholder:"Username",className:"register_main__form___username",onChange:function(e){return N(e)}}),Object(o.jsx)("input",{name:"password",type:"password",placeholder:"Password",autoComplete:"new-password",className:"register_main__form___password ".concat(l?"":"red-outline"),onChange:function(e){return N(e)}}),Object(o.jsx)("input",{name:"verify_password",type:"password",autoComplete:"new-password",placeholder:"Verify Password",className:"register_main__form___password ".concat(_?"":"red-outline"),onChange:function(e){return N(e)}}),Object(o.jsx)("button",{type:"submit",className:"register_main__form___submit",disabled:!_,children:"Create account"}),Object(o.jsx)(b.b,{to:"/login",children:"Back to login"})]})})})]})})});s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{children:Object(o.jsx)(b.a,{children:Object(o.jsxs)(m,{children:[Object(o.jsx)(g.b,{exact:!0,path:"/login",component:J}),Object(o.jsx)(g.b,{exact:!0,path:"/register",component:Ae}),Object(o.jsx)(g.b,{path:["/:id","/"],exact:!0,component:Ce})]})})})}),document.getElementById("root")),_()},77:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},81:function(e,t){}},[[132,1,2]]]);
//# sourceMappingURL=main.abceed9a.chunk.js.map