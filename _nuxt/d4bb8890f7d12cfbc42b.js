(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{412:function(t,e,r){var content=r(443);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("2a70cf93",content,!0,{sourceMap:!1})},442:function(t,e,r){"use strict";var c=r(412);r.n(c).a},443:function(t,e,r){(t.exports=r(21)(!1)).push([t.i,".drag-cursor{cursor:move}",""])},520:function(t,e,r){"use strict";r.r(e);r(381);var c=r(0).a.extend({data:function(){return{listSubject:[{name:"a",description:"a",id:2,color:"red"},{name:"b",description:"b",id:1,color:"purple"},{name:"c",description:"c",id:3,color:"teal"}],secondSubject:[{name:"d",description:"d",id:4,color:"red"},{name:"e",description:"e",id:5,color:"purple"},{name:"f",description:"f",id:6,color:"teal"}]}},methods:{deleteItem:function(t){var e=this.listSubject.findIndex((function(e){return e.id===t}));e>-1&&this.listSubject.splice(e,1)}}}),o=(r(442),r(32)),n=r(36),l=r.n(n),d=r(356),v=r(375),m=r(370),f=r(402),h=r(364),_=r(406),w=r(403),j=r(405),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{"justify-center":"","align-content-center":""}},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-list",{staticStyle:{height:"100%"}},[r("h3",{staticClass:"title text-center"},[t._v("To do")]),t._v(" "),r("draggable",{attrs:{list:t.listSubject,group:"subject"}},t._l(t.listSubject,(function(e){return r("v-list-item",{key:e.id,staticClass:"drag-cursor mb-5"},[r("v-card",{staticStyle:{width:"100%"},attrs:{"max-width":"300",color:e.color}},[r("v-card-title",{staticClass:"title white--text"},[t._v(t._s(e.name))]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",rounded:"",tile:"",depressed:""},on:{click:function(r){return t.deleteItem(e.id)}}},[t._v("DELETE")])],1)],1)],1)})),1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-list",[r("h3",{staticClass:"title text-center"},[t._v("Done")]),t._v(" "),r("draggable",{attrs:{list:t.secondSubject,group:"subject"}},t._l(t.secondSubject,(function(e){return r("v-list-item",{key:e.id,staticClass:"drag-cursor mb-5"},[r("v-card",{staticStyle:{width:"100%"},attrs:{"max-width":"300",color:e.color}},[r("v-card-title",[t._v(t._s(e.name))])],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardTitle:m.d,VCol:f.a,VLayout:h.a,VList:_.a,VListItem:w.a,VRow:j.a})}}]);