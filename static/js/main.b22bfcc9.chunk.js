(this["webpackJsonpcra-js"]=this["webpackJsonpcra-js"]||[]).push([[0],{21:function(e,t,n){},27:function(e,t,n){e.exports=n(43)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),l=n(10),s=n(11),i=n(8),u=n(2),m=n.n(u),p=n(7),f=(n(21),n(17)),d=n.n(f),v=n(13),b=n(15),h=function(){console.log("Init exportSample");var e=new v.a("exportSample");return e.version(1).stores({foos:"id",bars:"ID1"}),e.on("populate",(function(){e.foos.bulkAdd([{id:1,foo:"foo1",date:new Date},{id:2,foo:"foo2"}]),e.bars.bulkAdd([{ID1:1,foo:"bar1",date:new Date},{ID1:2,foo:"bar2"}])})),e};function E(e){var t=e.onFileUpload,n=Object(a.useState)(null),o=Object(l.a)(n,2),c=o[0],s=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"files",type:"file",style:{display:"none"},accept:".json",onChange:function(e){var t;return s(null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:t.files[0])}}),r.a.createElement("label",{htmlFor:"files"},c&&"\u0412\u044b\u0431\u0440\u0430\u043d \u0444\u0430\u0439\u043b: ".concat(null===c||void 0===c?void 0:c.name)||"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b"),r.a.createElement("button",{style:null!==c&&void 0!==c?c:{display:"none"},onClick:function(){return null===t||void 0===t?void 0:t.call(null,c)}},"Upload"))}var g=function(e){var t=e.totalRows,n=e.completedRows;return console.log("Progress: ".concat(n," of ").concat(t," rows completed"))};function w(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,v.a.delete("exportSample");case 4:return console.log("Importing "+t.name),e.next=7,Object(b.b)(t,{progressCallback:g});case 7:n=e.sent,console.log("Import complete"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(""+e.t0);case 14:return e.prev=14,n&&n.close(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{onFileUpload:e}))}function k(e){var t=e.totalRows,n=e.completedRows;console.log("Progress: ".concat(n," of ").concat(t," rows completed"))}function x(){var e=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,t=h(),e.next=5,Object(b.a)(t,{prettyJson:!0,progressCallback:k});case 5:n=e.sent,d()(n,"dexie-export.json","application/json"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(""+e.t0);case 12:return e.prev=12,t.close(),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),t.preventDefault(),a=t.dataTransfer.files[0]){e.next=5;break}throw new Error("Only files can be dropped here");case 5:return e.next=7,n(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,n=h(),console.log("Importing "+t.name),e.next=6,n.delete();case 6:return e.next=8,Object(b.b)(t,{progressCallback:k});case 8:n=e.sent,console.log("Import complete"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(""+e.t0);case 15:return e.prev=15,n.close(),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h(),e.next=3,Promise.all(t.tables.map(function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.name,e.next=3,t.count();case 3:return e.t1=e.sent,e.t2=t.schema.primKey.src,e.abrupt("return",{name:e.t0,count:e.t1,primKey:e.t2});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return n=e.sent,t.close(),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=Object(a.useState)([]),s=Object(l.a)(c,2),i=s[0],u=s[1],f=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,o();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=h();f(),e.close()})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"column"},r.a.createElement("h3",null,"Export"),r.a.createElement("button",{onClick:e},"Export the database")),r.a.createElement("div",{className:"column"},r.a.createElement("h3",null,"Import"),r.a.createElement(w,null),r.a.createElement("div",{className:"dropzone",onDragOver:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},onDrop:t},"Drop dexie export JSON file here")),r.a.createElement("div",{className:"column"},r.a.createElement("h3",null,"Database Info"),r.a.createElement("button",{onClick:f},"Update report"),r.a.createElement("table",{border:"1"},r.a.createElement("thead",null),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Database Name"),r.a.createElement("td",{colSpan:"2"},"$",h().name)),i.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("th",null,"Table: ",e.name),r.a.createElement("td",null,"Primary Key:",e.primKey),r.a.createElement("td",null,"Row count: ",e.count))}))))))}function N(){return r.a.createElement(a.Fragment,null,r.a.createElement(x,null))}function y(){return r.a.createElement("h2",null,"\u041e \u043d\u0430\u0441")}function j(){return r.a.createElement("h2",null,"\u041f\u043e\u043c\u043e\u0449\u044c")}n(35),n(36),n(37),n(38);var O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement((function(e){var t=Object(a.useState)(!0),n=Object(l.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",{className:"app"},r.a.createElement(s.a,{basename:"/cra-js/"},r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"top-row pl-4 navbar navbar-dark"},r.a.createElement("button",{"aria-label":"\u041c\u0435\u043d\u044e",className:"navbar-toggler hamburger--collapse  ".concat(o?"":"is-active"," "),onClick:function(){return c(!o)}},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement(s.b,{to:"/about",className:"navbar-brand"}," \u041e \u043d\u0430\u0441")),r.a.createElement("nav",{className:o?"collapse":null},r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item px-3"},r.a.createElement(s.c,{to:"/",className:"nav-link",onClick:function(){return c(!0)},exact:!0},r.a.createElement("span",{className:"oi oi-home","aria-hidden":"true"}),"\u0414\u043e\u043c\u043e\u0439")),r.a.createElement("li",{className:"nav-item px-3"},r.a.createElement(s.c,{to:"/about",className:"nav-link",onClick:function(){return c(!0)}},r.a.createElement("span",{className:"oi oi-sun","aria-hidden":"true"}),"\u041e \u043d\u0430\u0441")),r.a.createElement("li",{className:"nav-item px-3"},r.a.createElement(s.c,{to:"/help",className:"nav-link",onClick:function(){return c(!0)}},r.a.createElement("span",{className:"oi oi-question-mark","aria-hidden":"true"}),"\u041f\u043e\u043c\u043e\u0449\u044c"))))),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"top-row px-4"},r.a.createElement("a",{href:"https://ru.reactjs.org/",target:"_blank",className:"ml-md-auto",rel:"noopener noreferrer"},"About")),r.a.createElement("div",{className:"content px-4"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement(N,null)),r.a.createElement(i.a,{path:"/about"},r.a.createElement(y,null)),r.a.createElement(i.a,{path:"/help"},r.a.createElement(j,null)))))))}),{brand:"React App"}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cra-js",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/cra-js","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.b22bfcc9.chunk.js.map