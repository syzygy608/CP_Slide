import{d as _,i as d,a as p,u as h,b as u,c as m,e as f,o as n,f as l,g as t,t as s,h as a,F as g,r as v,n as x,j as y,k as b,l as k,m as N,p as P,q as w,_ as S}from"./index-eb5dc9da.js";import{N as C}from"./NoteDisplay-90e0c16b.js";const V={class:"m-4"},j={class:"mb-10"},D={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=f(()=>y.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),l("div",{id:"page-root",style:x(a(w))},[t("div",V,[t("div",j,[t("h1",D,s(a(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(n(!0),l(g,null,v(a(i),(e,c)=>(n(),l("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(b)),1),k(" "+s(e==null?void 0:e.title)+" ",1),z])]),N(C,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(n(),l("hr",F)):P("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","C:/Users/hankw/Desktop/CP_Slide/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
