(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"5d6d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[t.login?t._e():i("Auth"),i("Navbar"),i("SBoard")],1)},o=[],a=i("ecf1"),s=i("d178"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"SBoard",style:{background:"#"+t.info.color}},[i("div",{staticClass:"mar2 container"},[i("h1",{staticStyle:{"text-align":"center","margin-bottom":"30px",color:"white"}},[t._v(t._s(t.info.name))]),i("div",{staticClass:"row"},[t._l(t.tables,function(e){return i("div",{staticClass:"col-3"},[i("div",[e.editing?t._e():i("div",{staticClass:"table"},[i("h6",[t._v(t._s(e.name))]),i("draggable",{staticClass:"dragArea list-group ",attrs:{list:e.list,clone:t.clone,group:{name:"people",pull:t.pullFunction}},on:{start:t.start,end:t.onEnd}},t._l(e.list,function(e){return i("div",{staticClass:"tableNote"},[t._v("\n\n              "+t._s(e.note)+"\n\n              "),e.view?i("div",[t._v("\n                "+t._s(e.description)+"\n              ")]):t._e()])}),0),i("div",{staticClass:"addTNote",on:{click:function(t){e.editing=1}}},[t._v("+ add one more")])],1),e.editing?i("div",{staticClass:"addNote1"},[i("div",{staticStyle:{float:"right",cursor:"pointer"},on:{click:function(t){e.editing=0}}},[t._v("×")]),i("h5",{staticStyle:{"text-align":"center"}},[t._v("Create")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newNote,expression:"table.newNote"}],staticClass:"input",attrs:{placeholder:"name"},domProps:{value:e.newNote},on:{input:function(i){i.target.composing||t.$set(e,"newNote",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"table.description"}],staticClass:"inputD",attrs:{placeholder:"description"},domProps:{value:e.description},on:{input:function(i){i.target.composing||t.$set(e,"description",i.target.value)}}}),i("button",{on:{click:function(i){return t.postTableNote(e)}}},[t._v("Submit")])]):t._e()])])}),i("div",{staticClass:"col-3"},[i("div",{staticClass:"table",staticStyle:{"background-color":""}},[i("h6",[t._v("Create one more")]),t.add?t._e():i("div",{staticClass:"tableNote",staticStyle:{"text-align":"center"},on:{click:function(e){t.add=!0}}},[t._v("+")]),t.add?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{placeholder:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),i("button",{on:{click:t.postTable}},[t._v("Submit")])]):t._e()])])],2)])])},r=[],c=(i("7f7f"),i("b54a"),i("310e")),d=i.n(c),p={components:{draggable:d.a},data:function(){return{trash:[{name:"move here to delete",color:"e57676",id:1}],info:null,add:0,name:"",link:"",id:null,tables:null,colorF:"",controlOnStart:!0}},created:function(){var t=this;this.id=this.$route.params.id,this.link="http://127.0.0.1:8000/api/table/get/",this.link=this.link+localStorage.token+"/"+this.id+"/",this.axios.get(this.link).then(function(e){t.tables=e.data,t.add=!1}),this.link="http://127.0.0.1:8000/api/desk/info/",this.link=this.link+localStorage.token+"/"+this.id+"/",this.axios.get(this.link).then(function(e){t.info=e.data,t.add=!1})},methods:{postTableNote:function(t){var e=this;t.editing=0,this.link="http://127.0.0.1:8000/api/tableNote/post/",this.link=this.link+localStorage.token+"/"+this.id+"/"+t.newNote+"/"+t.description+"/0/0/"+t.id+"/",this.axios.get(this.link).then(function(t){e.add=!1,document.location.reload(!0)}),document.location.reload(!0)},postTable:function(){var t=this;this.link="http://127.0.0.1:8000/api/table/post/",this.link=this.link+localStorage.token+"/"+this.id+"/"+this.name+"/0/",this.axios.get(this.link).then(function(e){t.add=!1,document.location.reload(!0)}),document.location.reload(!0)},pullFunction:function(){return!this.controlOnStart||"clone"},start:function(t){var e=t.originalEvent;this.controlOnStart=e.ctrlKey,this.trashShow=!0},onEnd:function(){var t=this;for(var e in this.tables)for(var i in this.tables[e]["list"])this.link="http://127.0.0.1:8000/api/tableNote/edit/",this.link=this.link+localStorage.token+"/"+this.id+"/"+this.tables[e]["list"][i]["note"]+"/"+this.tables[e]["list"][i]["description"]+"/"+this.tables[e]["list"][i]["color"]+"/"+i+"/"+this.tables[e]["id"]+"/"+this.tables[e]["list"][i]["id"]+"/",this.axios.get(this.link).then(function(e){t.link=""})}}},u=p,h=(i("930d"),i("2877")),m=Object(h["a"])(u,l,r,!1,null,null,null),b=m.exports,v={name:"home",components:{Auth:a["a"],Navbar:s["a"],SBoard:b},metaInfo:{title:"KIWIDO | My Personal Board",meta:[{property:"og:type",content:"website"},{property:"og:site_name",content:"KIWIDO.site"},{property:"og:title",content:"KIWIDO - We like Google Keep, but better."},{property:"og:description",content:"Remeber everything! KIWIDO - full free TODO service, without subscriptions and ads. Create your first note here and remember everything."},{vmid:"description",name:"description",content:"Remeber everything! KIWIDO - full free TODO service, without subscriptions and ads. Create your first note here and remember everything. We like google keep, but better."},{vmid:"keywords",name:"keywords",content:"KIWIDO, ToDo, Boards, Notes"},{vmid:"apple-mobile-web-app-capable",name:"apple-mobile-web-app-capable",content:"yes"},{vmid:"apple-mobile-web-app-status-bar-style",name:"apple-mobile-web-app-status-bar-style",content:"white"}]},computed:{login:function(){return localStorage.token}}},g=v,f=Object(h["a"])(g,n,o,!1,null,null,null);e["default"]=f.exports},"930d":function(t,e,i){"use strict";var n=i("a332"),o=i.n(n);o.a},a332:function(t,e,i){},a519:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[t.login?t._e():i("Auth"),i("Navbar"),i("Desk")],1)},o=[],a=i("ecf1"),s=i("d178"),l=i("c4a3"),r={name:"home",components:{Auth:a["a"],Navbar:s["a"],Desk:l["a"]},metaInfo:{title:"KIWIDO | My Personal Boards",meta:[{property:"og:type",content:"website"},{property:"og:site_name",content:"KIWIDO.site"},{property:"og:title",content:"KIWIDO - We like Google Keep, but better."},{property:"og:description",content:"Remeber everything! KIWIDO - full free TODO service, without subscriptions and ads. Create your first note here and remember everything."},{vmid:"description",name:"description",content:"Remeber everything! KIWIDO - full free TODO service, without subscriptions and ads. Create your first note here and remember everything. We like google keep, but better."},{vmid:"keywords",name:"keywords",content:"KIWIDO, ToDo, Boards, Notes"},{vmid:"apple-mobile-web-app-capable",name:"apple-mobile-web-app-capable",content:"yes"},{vmid:"apple-mobile-web-app-status-bar-style",name:"apple-mobile-web-app-status-bar-style",content:"white"}]},computed:{login:function(){return localStorage.token}}},c=r,d=i("2877"),p=Object(d["a"])(c,n,o,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=about.60dcc14d.js.map