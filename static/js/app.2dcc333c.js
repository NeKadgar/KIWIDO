(function(t){function e(e){for(var i,s,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)s=r[u],o[s]&&d.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);h&&h(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(i=!1)}i&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},s={app:0},o={app:0},a=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"60dcc14d"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"f34e11a2"}[t]+".css",o=l.p+i,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var c=a[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===i||u===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var i=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete s[t],h.parentNode.removeChild(h),n(a)},h.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(h)}).then(function(){s[t]=0}));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise(function(e,n){i=o[t]=[e,n]});e.push(i[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+i+": "+s+")");a.type=i,a.request=s,n[1](a)}o[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var h=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21eb":function(t,e,n){"use strict";var i=n("9407"),s=n.n(i);s.a},2264:function(t,e,n){},"4a5b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("5c0b"),n("2877")),r={},l=Object(a["a"])(r,s,o,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.login?t._e():n("Auth"),n("Navbar"),n("MiniNotes")],1)},h=[],v=n("ecf1"),p=n("d178"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container marMiniNotes MiniNotes"},[n("h1",{staticClass:"logo"},[t._v("Mini Notes")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote,expression:"newNote"}],staticClass:"todo-input",attrs:{type:"text",placeholder:"What needs to be done..."},domProps:{value:t.newNote},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNote(e)},input:function(e){e.target.composing||(t.newNote=e.target.value)}}}),n("draggable",{staticClass:"dragArea list-group",attrs:{list:t.Fnotes,"ghost-class":"ghost",clone:t.clone,group:{name:"people",pull:t.pullFunction}},on:{start:t.start,end:t.onEnd}},t._l(t.Fnotes,function(e){return n("div",{staticClass:"todo-item container"},[n("div",{staticClass:"todo-item-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.done,expression:"note.done"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.done)?t._i(e.done,null)>-1:e.done},on:{change:[function(n){var i=e.done,s=n.target,o=!!s.checked;if(Array.isArray(i)){var a=null,r=t._i(i,a);s.checked?r<0&&t.$set(e,"done",i.concat([a])):r>-1&&t.$set(e,"done",i.slice(0,r).concat(i.slice(r+1)))}else t.$set(e,"done",o)},function(n){return t.doneNote(e)}]}}),e.editing?t._e():n("div",{staticClass:"item",class:{completed:e.done},on:{dblclick:function(n){return t.editNote(e)}}},[t._v(t._s(t.ucFirst(e.note)))]),e.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.note,expression:"note.note"},{name:"focus",rawName:"v-focus"}],staticClass:"item-edit",attrs:{type:"text"},domProps:{value:e.note},on:{blur:function(n){return t.doneEdit(e)},keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.doneEdit(e)},input:function(n){n.target.composing||t.$set(e,"note",n.target.value)}}}):t._e(),e.editing?t._e():n("img",{staticClass:"imgEdit",attrs:{src:"https://img.icons8.com/pastel-glyph/64/000000/edit.png",height:"20px"},on:{click:function(n){return t.editNote(e)}}})]),n("div",{staticClass:"remove-item",on:{click:function(n){return t.deleteNote(e)}}},[t._v("\n          ×\n        ")])])}),0),n("div",{staticClass:"menu"},[n("div",{staticClass:"check"},[n("button",{class:{active:"all"==t.filter},on:{click:function(e){t.filter="all"}}},[t._v("All")]),n("button",{class:{active:"active"==t.filter},on:{click:function(e){t.filter="active"}}},[t._v("Active")]),n("button",{class:{active:"completed"==t.filter},on:{click:function(e){t.filter="completed"}}},[t._v("Completed")])]),n("div",{staticClass:"check"},[t._v("\n        "+t._s(t.iLeft)+" Items left\n      ")])])],1)},f=[],g=(n("ac6a"),n("7f7f"),n("b54a"),n("310e")),k=n.n(g),_={data:function(){return{notes:null,link:"",newNote:"",addlink:"",list:"",filter:"all"}},components:{draggable:k.a},created:function(){var t=this;this.link="http://127.0.0.1:8000/api/mnote/get/",this.link=this.link+localStorage.token+"/",this.axios.get(this.link).then(function(e){t.notes=e.data,t.list=t.notes.filter(function(t){return!t.done})})},directives:{focus:{inserted:function(t){t.focus()}}},computed:{iLeft:function(){return this.notes.filter(function(t){return!t.done}).length},Fnotes:function(){return"all"==this.filter?this.notes:"active"==this.filter?this.notes.filter(function(t){return!t.done}):"completed"==this.filter?this.notes.filter(function(t){return t.done}):this.notes}},methods:{onEnd:function(t){var e=this;for(var n in this.Fnotes)this.link="http://127.0.0.1:8000/api/mnote/edit/",this.Fnotes[n].done?(this.link=this.link+localStorage.token+"/"+this.Fnotes[n].id+"/"+this.Fnotes[n].note+"/1/"+n+"/",this.axios.get(this.link).then(function(t){e.add=!1})):(this.link=this.link+localStorage.token+"/"+this.Fnotes[n].id+"/"+this.Fnotes[n].note+"/0/"+n+"/",this.axios.get(this.link).then(function(t){e.add=!1}));this.link="http://127.0.0.1:8000/api/mnote/get/",this.link=this.link+localStorage.token+"/",this.axios.get(this.link).then(function(t){e.notes=t.data,e.list=e.notes.filter(function(t){return!t.done})})},ucFirst:function(t){return t?t[0].toUpperCase()+t.slice(1):t},addNote:function(){this.addlink="http://127.0.0.1:8000/api/mnote/post/",this.addlink=this.addlink+localStorage.token+"/"+this.newNote+"/",this.axios.get(this.addlink).then(function(t){document.location.reload(!0)})},clone:function(t){var e=t.name;return{name:e,id:idGlobal++}},pullFunction:function(){return!this.controlOnStart||"clone"},start:function(t){var e=t.originalEvent;this.controlOnStart=e.ctrlKey},editNote:function(t){t.editing=!0},doneEdit:function(t){t.done?(this.addlink="http://127.0.0.1:8000/api/mnote/edit/",this.addlink=this.addlink+localStorage.token+"/"+t.id+"/"+t.note+"/1/"+t.number+"/",this.axios.get(this.addlink).then(function(e){t.editing=!1})):(this.addlink="http://127.0.0.1:8000/api/mnote/edit/",this.addlink=this.addlink+localStorage.token+"/"+t.id+"/"+t.note+"/0/"+t.number+"/",this.axios.get(this.addlink).then(function(e){t.editing=!1}))},deleteNote:function(t){this.addlink="http://127.0.0.1:8000/api/mnote/delete/",this.addlink=this.addlink+localStorage.token+"/"+t.id+"/",this.axios.get(this.addlink).then(function(e){t.editing=!1,document.location.reload(!0)})},doneNote:function(t){t.done?(this.addlink="http://127.0.0.1:8000/api/mnote/edit/",this.addlink=this.addlink+localStorage.token+"/"+t.id+"/"+t.note+"/1/"+t.number+"/",this.axios.get(this.addlink).then(function(e){t.editing=!1})):(this.addlink="http://127.0.0.1:8000/api/mnote/edit/",this.addlink=this.addlink+localStorage.token+"/"+t.id+"/"+t.note+"/0/"+t.number+"/",this.axios.get(this.addlink).then(function(e){t.editing=!1}))},checkAll:function(){this.list.forEach(function(t){return t.done=event.target.checked,console.log(t.id)},console.log("fs"))}}},b=_,C=(n("21eb"),Object(a["a"])(b,m,f,!1,null,null,null)),y=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Calendar")]),t._m(0),t._m(1),n("div",{staticClass:"row mar"},[n("div",{staticClass:"col overflow-auto"},[n("div",{staticClass:"text"},[t._v("1")]),n("button",[t._v("+")]),n("draggable",{staticClass:"dragArea list-group",attrs:{list:t.list1,"ghost-class":"ghost",group:{name:"people"}},on:{start:t.start}},[n("transition-group",{attrs:{type:"transition",name:"flip-list"}},t._l(t.list1,function(e){return n("div",{key:e.id},[n("button",{staticClass:"fill"},[n("p",{staticClass:"note"},[t._v(t._s(e.name))])])])}),0)],1)],1),n("div",{staticClass:"col  overflow-auto"},[t._v("2"),n("button",[t._v("+")]),n("draggable",{staticClass:"dragArea list-group",attrs:{list:t.list2,group:{name:"people"}},on:{start:t.start}},t._l(t.list2,function(e){return n("div",{key:e.id},[n("button",{staticClass:"fill"},[n("p",{staticClass:"note"},[t._v(t._s(e.name))])])])}),0)],1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)]),t._m(7),t._m(8),t._m(9)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Month/Week/Today")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"month"},[n("div",{staticClass:"button"},[t._v("<==")]),n("h3",[t._v("July")]),n("div",{staticClass:"button"},[t._v("==>")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[t._v("3"),n("button",[t._v("+")]),n("button",[t._v("Запись чего либо")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[t._v("4"),n("button",[t._v("+")]),n("button",[t._v("Запись чего либо")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[t._v("5"),n("button",[t._v("+")]),n("button",[t._v("Запись чего либо")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[t._v("6"),n("button",[t._v("+")]),n("button",[t._v("Запись чего либо")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[t._v("7"),n("button",[t._v("+")]),n("button",[t._v("Запись чего либо")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[t._v("8"),n("button",[t._v("+")])]),n("div",{staticClass:"col"},[t._v("9"),n("button",[t._v("+")])]),n("div",{staticClass:"col"},[t._v("10"),n("button",[t._v("+")])]),n("div",{staticClass:"col"},[t._v("11"),n("button",[t._v("+")])]),n("div",{staticClass:"col"},[t._v("12")]),n("div",{staticClass:"col"},[t._v("13")]),n("div",{staticClass:"col"},[t._v("14")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[t._v("15")]),n("div",{staticClass:"col"},[t._v("16")]),n("div",{staticClass:"col"},[t._v("17")]),n("div",{staticClass:"col"},[t._v("18")]),n("div",{staticClass:"col"},[t._v("19")]),n("div",{staticClass:"col"},[t._v("20")]),n("div",{staticClass:"col"},[t._v("21")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[t._v("22")]),n("div",{staticClass:"col"},[t._v("23")]),n("div",{staticClass:"col"},[t._v("24")]),n("div",{staticClass:"col"},[t._v("25")]),n("div",{staticClass:"col"},[t._v("26")]),n("div",{staticClass:"col"},[t._v("27")]),n("div",{staticClass:"col"},[t._v("28")])])}],N={data:function(){return{list1:[{name:"Jesus",id:1},{name:"Paul",id:2},{name:"Peter",id:3}],list2:[{name:"Luc",id:5},{name:"Thomas",id:6},{name:"John",id:7}],controlOnStart:!0}},components:{draggable:k.a},methods:{start:function(t){var e=t.originalEvent;this.controlOnStart=e.ctrlKey,console.log(this.list1)}}},S=N,E=(n("56e2"),Object(a["a"])(S,w,x,!1,null,"683ca056",null)),O=E.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-3"},[n("h3",[t._v("Draggable 1")]),n("draggable",{staticClass:"dragArea list-group",attrs:{list:t.list1,clone:t.clone,group:{name:"people",pull:t.pullFunction}},on:{start:t.start,end:t.onEnd}},t._l(t.list1,function(e){return n("div",{key:e.id,staticClass:"list-group-item"},[t._v("\n        "+t._s(e.id)+t._s(e.name)+"\n      ")])}),0)],1),n("div",{staticClass:"col-3"},[n("h3",[t._v("Draggable 2")]),n("draggable",{staticClass:"dragArea list-group",attrs:{list:t.list2,group:"people"},on:{end:t.onEnd}},t._l(t.list2,function(e){return n("div",{key:e.id,staticClass:"list-group-item"},[t._v("\n        "+t._s(e.name)+"\n      ")])}),0)],1),n("rawDisplayer",{staticClass:"col-3",attrs:{value:t.list1,title:"List 1"}}),n("rawDisplayer",{staticClass:"col-3",attrs:{value:t.list2,title:"List 2"}})],1)},P=[],D=8,L={name:"clone-on-control",display:"Clone on Control",instruction:"Press Ctrl to clone element from list 1",order:4,components:{draggable:k.a},data:function(){return{list1:[{name:"Jesus",id:1},{name:"Paul",id:2},{name:"Peter",id:3}],Blist1:[{name:"Jesus",id:1},{name:"Paul",id:2},{name:"Peter",id:3}],list2:[{name:"Luc",id:5},{name:"Thomas",id:6},{name:"John",id:7}],controlOnStart:!0}},methods:{clone:function(t){var e=t.name;return{name:e,id:D++}},pullFunction:function(){return!this.controlOnStart||"clone"},start:function(t){var e=t.originalEvent;this.controlOnStart=e.ctrlKey,console.log("start")},onEnd:function(t){this.list1!=this.Blist1&&console.log(this.list1)}}},A=L,$=Object(a["a"])(A,F,P,!1,null,"09917755",null),T=$.exports,j=n("c4a3"),I={name:"home",components:{Auth:v["a"],Navbar:p["a"],MiniNotes:y,Calendar:O,Test:T,Desk:j["a"]},metaInfo:{title:"KIWIDO | My Notes",meta:[{property:"og:type",content:"website"},{property:"og:site_name",content:"KIWIDO.site"},{property:"og:title",content:"KIWIDO - We like Google Keep, but better."},{property:"og:description",content:"Remeber everything! KIWIDO - full free TODO service, without subscriptions and ads. Create your first note here and remember everything."},{vmid:"description",name:"description",content:"Remeber everything! KIWIDO - full free TODO service, without subscriptions and ads. Create your first note here and remember everything. We like google keep, but better."},{vmid:"keywords",name:"keywords",content:"KIWIDO, ToDo, Boards, Notes"},{vmid:"apple-mobile-web-app-capable",name:"apple-mobile-web-app-capable",content:"yes"},{vmid:"apple-mobile-web-app-status-bar-style",name:"apple-mobile-web-app-status-bar-style",content:"white"}]},computed:{login:function(){return localStorage.token}}},B=I,K=Object(a["a"])(B,d,h,!1,null,null,null),M=K.exports;i["a"].use(u["a"]);var R=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Notes",props:!0,component:M},{path:"/boards",name:"Boards",component:function(){return n.e("about").then(n.bind(null,"a519"))}},{path:"/boards/:id",name:"Board",props:!0,component:function(){return n.e("about").then(n.bind(null,"5d6d"))}}]}),W=n("bc3a"),J=n.n(W),q=n("a7fe"),z=n.n(q),G=n("58ca");i["a"].use(G["a"]),i["a"].config.productionTip=!1,i["a"].use(z.a,J.a),new i["a"]({router:R,render:function(t){return t(c)}}).$mount("#app")},"56e2":function(t,e,n){"use strict";var i=n("5958"),s=n.n(i);s.a},5958:function(t,e,n){},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),s=n.n(i);s.a},"5e27":function(t,e,n){},"69c4":function(t,e,n){"use strict";var i=n("4a5b"),s=n.n(i);s.a},"79bc":function(t,e,n){"use strict";var i=n("2264"),s=n.n(i);s.a},9407:function(t,e,n){},9816:function(t,e,n){"use strict";var i=n("ad1d"),s=n.n(i);s.a},ad1d:function(t,e,n){},c4a3:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DeskP"},[t.show?t._e():n("div",{staticClass:"container mar"},[n("div",{staticClass:"mar2"},[n("h1",[t._v("Your Desks"),n("button",{on:{click:function(e){t.add=!0}}},[t._v("+")])])]),n("draggable",{staticClass:"dragArea list-group ",attrs:{list:t.desks,clone:t.clone,group:{name:"people",pull:t.pullFunction}},on:{start:t.start,end:t.onEnd}},t._l(t.desks,function(e){return n("div",{key:e.id,staticClass:"row"},[n("div",{staticClass:"col-4"},[n("router-link",{attrs:{to:{name:"Board",params:{id:e.id}}}},[n("div",{staticClass:"desk todo-item",style:{background:"#"+e.color},on:{click:function(n){t.show=e.name}}},[n("h4",[t._v(t._s(e.name))]),n("div",[n("div",{staticClass:"remove-item",on:{click:function(n){return t.deleteDesk(e)}}},[n("h1",[t._v("×")])])])])])],1)])}),0)],1),t.trashShow?n("div",{staticClass:"container trash"},[n("h4",[t._v("TRASH")]),n("draggable",{staticClass:"dragArea list-group",attrs:{list:t.trash,clone:t.clone,group:{name:"people",pull:t.pullFunction}},on:{start:t.start,end:t.onEndTrash}},t._l(t.trash,function(e){return n("div",{key:e.id,staticClass:"row"},[n("div",{staticClass:"col-4"},[n("div",{staticClass:"desk",style:{background:"#"+e.color},on:{click:function(n){t.show=e.name}}},[n("h4",{staticClass:"trashText"},[t._v("move here to delete")])])])])}),0)],1):t._e(),t.add?n("div",{staticClass:"newDesk container",on:{blur:function(e){t.add=!1}}},[n("div",[n("h1",{staticClass:"cansel",on:{click:function(e){t.add=!1}}},[t._v("×")])]),n("h1",[t._v("Create new desk")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newDeskName,expression:"newDeskName"}],attrs:{placeholder:"Name of new desk"},domProps:{value:t.newDeskName},on:{input:function(e){e.target.composing||(t.newDeskName=e.target.value)}}}),n("h4",[t._v("Color:")]),n("div",{staticClass:"line"},[n("div",{staticClass:"color",class:{active:"76e57f"==t.colorF},staticStyle:{"background-color":"#76e57f"},on:{click:function(e){t.colorF="76e57f"}}}),n("div",{staticClass:"color",class:{active:"e576d2"==t.colorF},staticStyle:{"background-color":"#e576d2"},on:{click:function(e){t.colorF="e576d2"}}}),n("div",{staticClass:"color",class:{active:"e5ae76"==t.colorF},staticStyle:{"background-color":"#e5ae76"},on:{click:function(e){t.colorF="e5ae76"}}}),n("div",{staticClass:"color",class:{active:"7679e5"==t.colorF},staticStyle:{"background-color":"#7679e5"},on:{click:function(e){t.colorF="7679e5"}}})]),n("div",{staticClass:"line"},[n("div",{staticClass:"color",class:{active:"e57676"==t.colorF},staticStyle:{"background-color":"#e57676"},on:{click:function(e){t.colorF="e57676"}}}),n("div",{staticClass:"color",class:{active:"e5e276"==t.colorF},staticStyle:{"background-color":"#e5e276"},on:{click:function(e){t.colorF="e5e276"}}}),n("div",{staticClass:"color",class:{active:"76e0e5"==t.colorF},staticStyle:{"background-color":"#76e0e5"},on:{click:function(e){t.colorF="76e0e5"}}}),n("div",{staticClass:"color",class:{active:"828189"==t.colorF},staticStyle:{"background-color":"#828189"},on:{click:function(e){t.colorF="828189"}}})]),n("button",{staticClass:"buttonLogin",on:{click:t.postDesk}},[t._v("Create")])]):t._e()])},s=[],o=(n("7f7f"),n("b54a"),n("310e")),a=n.n(o),r={components:{draggable:a.a},data:function(){return{trashShow:"",colorF:"",trash:[{name:"перетащите сюда",color:"e57676",id:1}],add:!1,newDeskName:"",link:"",desks:null,show:"",controlOnStart:!0}},created:function(){var t=this;this.link="http://127.0.0.1:8000/api/desk/get/",this.link=this.link+localStorage.token+"/",this.axios.get(this.link).then(function(e){t.desks=e.data})},methods:{postDesk:function(){var t=this;this.link="http://127.0.0.1:8000/api/desk/post/",this.link=this.link+localStorage.token+"/"+this.newDeskName+"/"+this.colorF+"/0/",this.axios.get(this.link).then(function(e){t.add=!1,document.location.reload(!0)}),document.location.reload(!0)},deleteDesk:function(t){this.link="http://127.0.0.1:8000/api/desk/delete/",this.link=this.link+localStorage.token+"/"+t.id+"/",this.axios.get(this.link).then(function(t){document.location.reload(!0)}),document.location.reload(!0)},editDesk:function(t){alert("sad")},onEndTrash:function(){},clone:function(t){var e=t.name,n=t.id;return{name:e,id:n}},pullFunction:function(){return!this.controlOnStart||"clone"},start:function(t){var e=t.originalEvent;this.controlOnStart=e.ctrlKey,this.trashShow=!0},onEnd:function(){var t=this;for(var e in this.trashShow=!1,this.desks)this.link="http://127.0.0.1:8000/api/desk/edit/",this.link=this.link+localStorage.token+"/"+this.desks[e].name+"/"+this.desks[e].color+"/"+e+"/"+this.desks[e].id+"/",this.axios.get(this.link).then(function(e){t.add=!1});for(var e in this.trash)"перетащите сюда"!=this.trash[e]["name"]&&(this.link="http://127.0.0.1:8000/api/desk/delete/",this.link=this.link+localStorage.token+"/"+this.trash[e]["id"]+"/",this.axios.get(this.link).then(function(t){}));this.trash=[{name:"перетащите сюда",color:"e57676",id:1}]}}},l=r,c=(n("69c4"),n("2877")),u=Object(c["a"])(l,i,s,!1,null,null,null);e["a"]=u.exports},d178:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navP"},[n("div",{staticClass:"container"},[n("ul",[n("router-link",{attrs:{to:{name:"Notes",params:{act:"Notes"}}}},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Kiwido")])])]),n("router-link",{attrs:{to:{name:"Notes",params:{act:"Notes"}}}},[n("li",{staticClass:"nav-item over",class:{active:"Notes"==t.act},on:{click:function(e){t.act="Notes"}}},[n("a",{staticClass:"nav-link"},[t._v("Notes")])])]),n("router-link",{attrs:{to:{name:"Boards",params:{act:"Notes"}}}},[n("li",{staticClass:"nav-item over",class:{active:"Boards"==t.act},on:{click:function(e){t.act="Boards"}}},[n("a",{staticClass:"nav-link"},[t._v("Boards")])])]),n("li",{staticClass:"nav-item",staticStyle:{float:"right"}},[n("form",{staticClass:"form-inline my-2 my-lg-0"},[n("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"},on:{click:t.logout}},[t._v("Log out")])])])],1)])])},s=[],o={name:"Auth",data:function(){return{username:"",act:"Notes"}},props:["act"],created:function(){var t=this;this.axios.get("http://127.0.0.1:8000/auth/me/",{headers:{Authorization:"Token "+localStorage.token}}).then(function(e){t.username=e.data.username})},methods:{logout:function(){localStorage.token="",document.location.reload(!0)}}},a=o,r=(n("79bc"),n("2877")),l=Object(r["a"])(a,i,s,!1,null,"5b3c4db5",null);e["a"]=l.exports},ecf1:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth"},[t.showReg?t._e():n("div",{staticClass:"boxLogin",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}}},[n("h1",[t._v("Login")]),t.errorLogin?n("p",{staticClass:"error"},[t._v(t._s(t.errorLogin))]):t._e(),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"inputLogin",attrs:{type:"login",placeholder:"login"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"inputLogin",attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("button",{staticClass:"buttonLogin",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},click:t.login}},[t._v("Login")]),n("p",{staticClass:"linkRegister",on:{click:t.show}},[t._v("Sing up?")])]),t.showReg?n("div",{staticClass:"boxLogin",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.singup(e)}}},[n("h1",[t._v("Register")]),t.errorPass?n("p",{staticClass:"error"},[t._v(t._s(t.errorPass))]):t._e(),t._l(t.er,function(e){return n("div",[n("p",{staticClass:"error"},[t._v(t._s(e))])])}),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"inputLogin",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"inputLogin",attrs:{type:"text",size:"150",placeholder:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"inputLogin",attrs:{type:"password",placeholder:"password",minlength:"6",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cpassword,expression:"cpassword"}],staticClass:"inputLogin",attrs:{type:"password",placeholder:"confirm password",minlength:"6",required:""},domProps:{value:t.cpassword},on:{input:function(e){e.target.composing||(t.cpassword=e.target.value)}}})]),n("button",{staticClass:"buttonLogin",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.singup(e)},click:t.singup}},[t._v("Sing up")]),n("p",{staticClass:"linkRegister",on:{click:t.unshow}},[t._v("Log in?")])],2):t._e()])},s=[],o={name:"Auth",data:function(){return{username:"",password:"",cpassword:"",email:"",showReg:!1,error:null,array:[],mes:"",errorLogin:"",errorPass:""}},computed:{er:function(){for(var t in this.array=[],this.mes="",this.error)this.mes=t+": "+this.error[t],this.array.push(this.mes);return this.array}},methods:{login:function(){var t=this;this.$http.post("http://127.0.0.1:8000/auth/token/create/",{username:this.username,password:this.password}).then(function(t){localStorage.token=t.data.auth_token,document.location.reload(!0)}).catch(function(e){t.errorLogin="check entered login and password"})},show:function(){this.showReg=!0},unshow:function(){this.showReg=!1},singup:function(){var t=this;this.password===this.cpassword?this.axios.post("http://127.0.0.1:8000/auth/users/create/",{username:this.username,password:this.cpassword,email:this.email}).then(function(e){t.$http.post("http://127.0.0.1:8000/auth/token/create/",{username:t.username,password:t.cpassword}).then(function(t){localStorage.token=t.data.auth_token,document.location.reload(!0)})}).catch(function(e){t.error=e.response.data}):this.errorPass="password: Please confirm password"}}},a=o,r=(n("9816"),n("2877")),l=Object(r["a"])(a,i,s,!1,null,"ca1eb3b4",null);e["a"]=l.exports}});
//# sourceMappingURL=app.2dcc333c.js.map