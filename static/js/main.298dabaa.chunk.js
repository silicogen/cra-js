(this["webpackJsonpcra-js"]=this["webpackJsonpcra-js"]||[]).push([[0],{28:function(e,t,a){},34:function(e,t,a){e.exports=a(50)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),o=a.n(l),c=a(21),i=a(10),s=a(9);function u(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"\u0422\u0443\u0442 \u043c\u043e\u044f \u0434\u0435\u0440\u0435\u0432\u043d\u044f, \u0442\u0443\u0442 \u043c\u043e\u0439 \u0434\u043e\u043c \u0440\u043e\u0434\u043d\u043e\u0439."))}function m(){return r.a.createElement("h2",null,"\u041e \u043d\u0430\u0441")}function d(){return r.a.createElement("h2",null,"\u041f\u043e\u043c\u043e\u0449\u044c")}var f=a(22),h=a(12),p=a(18),b=a(14),v=a(13),E=a(6),g=a(15),k=a(19),j=new k.a("exportSample");j.version(1).stores({foos:"++id",bars:"ID1"}),j.on("versionchange",(function(e){return j.close(),!1})),j.on("blocked",(function(e){}));var y=j,F=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(v.a)(t).call(this))).state={value:""},e.addFoo=e.addFoo.bind(Object(E.a)(e)),e.handleChange=e.handleChange.bind(Object(E.a)(e)),e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"addFoo",value:function(){this.props.handleAddFoo(this.state.value)}},{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{className:"text text-primary ",type:"text",value:this.state.value,onChange:function(t){return e.handleChange(t.target.value)}}),r.a.createElement("button",{className:"btn btn-sm btn-primary",type:"button",onClick:this.addFoo},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c Foo"))}}]),t}(n.Component),N=function(e){var t=e.title,a=e.id,n=e.done,l=e.handleToggleFoo,o=e.handleDeleteFoo,c=e.handleChangeTitle;return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:n,onChange:function(e){return l(a,e.target.checked)}})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",size:5,defaultValue:t,onChange:function(e){return c(a,e.target.value)}})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-sm btn-primary",type:"button",onClick:function(){return o(a)}},"Delete")))},O=function(e){var t=e.foos,a=e.handleToggleFoo,n=e.handleDeleteFoo,l=e.handleChangeTitle;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"id"),r.a.createElement("th",null,"Done"),r.a.createElement("th",null,"Title"))),r.a.createElement("tbody",null,t.sort((function(e,t){return e.id-t.id})).map((function(e){return r.a.createElement(N,Object.assign({key:e.id},e,{handleChangeTitle:l,handleToggleFoo:a,handleDeleteFoo:n}))}))))},w=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(v.a)(t).call(this))).state={foos:[]},e.handleAddFoo=e.handleAddFoo.bind(Object(E.a)(e)),e.handleDeleteFoo=e.handleDeleteFoo.bind(Object(E.a)(e)),e.handleToggleFoo=e.handleToggleFoo.bind(Object(E.a)(e)),e.handleChangeTitle=e.handleChangeTitle.bind(Object(E.a)(e)),e}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.table("foos").toArray().then((function(t){e.setState({foos:t})}))}},{key:"handleAddFoo",value:function(e){var t=this,a={title:e,done:!1};y.table("foos").add(a).then((function(e){var n=[].concat(Object(f.a)(t.state.foos),[Object.assign({},a,{id:e})]);t.setState({foos:n})}))}},{key:"handleToggleFoo",value:function(e,t){var a=this;y.table("foos").update(e,{done:t}).then((function(){var n=a.state.foos.find((function(t){return t.id===e})),r=[].concat(Object(f.a)(a.state.foos.filter((function(t){return t.id!==e}))),[Object.assign({},n,{done:t})]);a.setState({foos:r})}))}},{key:"handleChangeTitle",value:function(e,t){var a=this;y.table("foos").update(e,{title:t}).then((function(){var n=a.state.foos.find((function(t){return t.id===e})),r=[].concat(Object(f.a)(a.state.foos.filter((function(t){return t.id!==e}))),[Object.assign({},n,{title:t})]);a.setState({foos:r})}))}},{key:"handleDeleteFoo",value:function(e){var t=this;y.table("foos").delete(e).then((function(){var a=t.state.foos.filter((function(t){return t.id!==e}));t.setState({foos:a})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{handleAddFoo:this.handleAddFoo}),r.a.createElement(O,{foos:this.state.foos,handleChangeTitle:this.handleChangeTitle,handleToggleFoo:this.handleToggleFoo,handleDeleteFoo:this.handleDeleteFoo}))}}]),t}(n.Component);function x(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Foos"),r.a.createElement(w,null),r.a.createElement("h2",null,"Bars"))}a(28);var C=a(3),T=a.n(C),A=a(8),D=a(20);function S(e){var t=e.onFileUpload,a=e.getFileUploadButtonLabel,l=Object(n.useState)(null),o=Object(c.a)(l,2),i=o[0],s=o[1],u=function(){var e=Object(A.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),t.preventDefault(),a=t.dataTransfer.files[0]){e.next=5;break}throw new Error("Only files can be dropped here");case 5:s(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"files",type:"file",style:{display:"none"},accept:".json",onChange:function(e){var t;return s(null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:t.files[0])}}),r.a.createElement("label",{className:"btn btn-primary",onDragOver:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},onDrop:u,htmlFor:"files"},i?r.a.createElement(r.a.Fragment,null,"\u0412\u044b\u0431\u0440\u0430\u043d \u0444\u0430\u0439\u043b: ",i.name,". \u0414\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"):r.a.createElement(r.a.Fragment,null,"\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d. \u0414\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0444\u0430\u0439\u043b\u0430 "),"\u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044e\u0434\u0430 \u0444\u0430\u0439\u043b"),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",style:null!==i&&void 0!==i?i:{display:"none"},onClick:function(){return null===t||void 0===t?void 0:t(i)}},null===a||void 0===a?void 0:a(i)))}var B=function(){};function W(e){var t=e.onAfterImport,a=function(){var e=Object(A.a)(T.a.mark((function e(a){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.delete("exportSample");case 3:return e.next=5,y.open();case 5:return e.next=7,Object(D.b)(y,a,{progressCallback:B});case 7:return e.next=9,t(a);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(""+e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{onFileUpload:a,getFileUploadButtonLabel:function(e){return"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b ".concat(null===e||void 0===e?void 0:e.name," ")}}))}var U=a(31),I=a.n(U);function P(){var e=function(){var e=Object(A.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(D.a)(y,{prettyJson:!0,progressCallback:B});case 3:t=e.sent,I()(t,"dexie-export.json","application/json"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(""+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("button",{className:"btn btn-primary",onClick:e},"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 json \u0444\u0430\u0439\u043b.")}var R=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).updateTablesAsync=Object(A.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,Promise.all(y.tables.map(function(){var e=Object(A.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r.a,e.t1={key:t.name},e.t2=r.a.createElement("th",null,"Table: ",t.name),e.t3=r.a.createElement("td",null,"Primary Key:",t.schema.primKey.src),e.t4=r.a,e.next=7,t.count();case 7:return e.t5=e.sent,e.t6=e.t4.createElement.call(e.t4,"td",null,"Row count: ",e.t5),e.abrupt("return",e.t0.createElement.call(e.t0,"tr",e.t1,e.t2,e.t3,e.t6));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return e.t1=e.sent,e.t2={tables:e.t1},e.abrupt("return",e.t0.setState.call(e.t0,e.t2));case 6:case"end":return e.stop()}}),e)}))),a.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Database Name"),r.a.createElement("td",{colSpan:"2"},y.name)),a.state.tables)))},a.state={tables:[]},a.updateTablesAsync(),a}return Object(g.a)(t,e),t}(r.a.Component);function L(){var e=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"column"},r.a.createElement("h3",null,"Export"),r.a.createElement(P,null)),r.a.createElement("div",{className:"column"},r.a.createElement("h3",null,"Import"),r.a.createElement(W,{onAfterImport:function(){return e.current.updateTablesAsync()}})),r.a.createElement("div",{className:"column"},r.a.createElement("h3",null,"Database Info"),r.a.createElement(R,{ref:e})))}function J(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null))}a(42),a(43),a(44),a(45);var K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement((function(e){var t=Object(n.useState)(!0),a=Object(c.a)(t,2),l=a[0],o=a[1];return r.a.createElement("div",{className:"app"},r.a.createElement(i.a,{basename:"/cra-js/"},r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"top-row pl-4 navbar navbar-dark"},r.a.createElement("button",{"aria-label":"\u041c\u0435\u043d\u044e",className:"navbar-toggler hamburger--collapse  ".concat(l?"":"is-active"," "),onClick:function(){return o(!l)}},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement(i.b,{to:"/about",className:"navbar-brand"}," \u041e \u043d\u0430\u0441")),r.a.createElement("nav",{className:l?"collapse":null},r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item px-3"},r.a.createElement(i.c,{to:"/",className:"nav-link",onClick:function(){return o(!0)},exact:!0},r.a.createElement("span",{className:"oi oi-home","aria-hidden":"true"}),"\u0414\u043e\u043c\u043e\u0439")),r.a.createElement("li",{className:"nav-item px-3"},r.a.createElement(i.c,{to:"/about",className:"nav-link",onClick:function(){return o(!0)}},r.a.createElement("span",{className:"oi oi-sun","aria-hidden":"true"}),"\u041e \u043d\u0430\u0441")),r.a.createElement("li",{className:"nav-item px-3"},r.a.createElement(i.c,{to:"/help",className:"nav-link",onClick:function(){return o(!0)}},r.a.createElement("span",{className:"oi oi-question-mark","aria-hidden":"true"}),"\u041f\u043e\u043c\u043e\u0449\u044c")),r.a.createElement("li",{className:"nav-item px-3"},r.a.createElement(i.c,{to:"/foosBars",className:"nav-link",onClick:function(){return o(!0)}},r.a.createElement("span",{className:"oi"},"FB"),"Foos Bars")),r.a.createElement(s.a,{path:"/foosBars"}),r.a.createElement("li",{className:"nav-item px-3"},r.a.createElement(i.c,{to:"/settings",className:"nav-link",onClick:function(){return o(!0)}},r.a.createElement("span",{className:"oi oi-cog","aria-hidden":"true"}),"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"))))),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"top-row px-4"},r.a.createElement("a",{href:"https://ru.reactjs.org/",target:"_blank",className:"ml-md-auto",rel:"noopener noreferrer"},"About")),r.a.createElement("div",{className:"content px-4"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0},r.a.createElement(u,null)),r.a.createElement(s.a,{path:"/about"},r.a.createElement(m,null)),r.a.createElement(s.a,{path:"/help"},r.a.createElement(d,null)),r.a.createElement(s.a,{path:"/foosBars"},r.a.createElement(x,null)),r.a.createElement(s.a,{path:"/settings"},r.a.createElement(J,null)))))))}),{brand:"React App"}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cra-js",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/cra-js","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.298dabaa.chunk.js.map