import{R as t,l as e,m as s,p as a,j as i,q as l,r as n,o,c as u,w as c,a as r,O as d,x as m,u as g,g as p,F as h,h as v,v as x,k as y,i as f,S as _}from"./index-45478141.js";import{u as S,_ as k}from"./music-list-item.26939711.js";import{_ as C,r as j}from"./home.0b29f6a1.js";function L(e){return new Promise((s=>{const a=t();a.select(e).boundingClientRect(),a.exec((t=>{s(t)}))}))}const N=C({__name:"music-list",props:{playSongList:{type:Array,default:[]},height:{type:String,default:"auto"},isNavigate:{type:Boolean,default:!1}},emits:["itemClick"],setup(t,{emit:C}){const N=t,D=S(),{currentSong:I}=e(D);s().proxy;const b=a((()=>{let t="";return t="auto"!==N.height?N.height:A.value-44-w.value+"",t.includes("px")||(t+="px"),t})),q=i(0),w=i(0),R=a((()=>q.value*$.value-1)),$=i(0),A=a((()=>y().globalData.contentHeight)),B=()=>{D.playSongList=N.playSongList,C("itemClick")},F=t=>{$.value=t};return l((()=>{setTimeout((()=>{L(".music-list .item.listening").then((t=>{t[0]&&(q.value=t[0].height,$.value=t[0].dataset.cindex)})),L(".music-list .list-title").then((t=>{t[0]&&(w.value=t[0].height)}))}),10)})),(e,s)=>{const a=f,i=j(n("music-list-item"),k),l=_;return o(),u(a,{class:"music-list"},{default:c((()=>[r(a,{class:"list-title"},{default:c((()=>[d(e.$slots,"title",{},void 0,!0)])),_:3}),r(l,{"scroll-y":"",style:m(`height:${g(b)}`),"scroll-top":g(R),class:"content"},{default:c((()=>[(o(!0),p(h,null,v(t.playSongList,((e,s)=>(o(),u(a,{key:e.id,class:x("item "+(g(I).id===e.id?"listening":"")),"data-cindex":g(I).id===e.id?s:""},{default:c((()=>[r(i,{index:s,itemData:e,isNavigate:t.isNavigate,onItemClick:B,onCurrentIndex:F},null,8,["index","itemData","isNavigate"])])),_:2},1032,["class","data-cindex"])))),128))])),_:1},8,["style","scroll-top"])])),_:3})}}},[["__scopeId","data-v-a13ed756"]]);export{N as _,L as q};
