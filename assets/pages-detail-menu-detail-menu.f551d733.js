import{r as a,o as s,c as t,w as e,a as l,b as n,t as i,g as u,F as o,h as m,i as r,s as c}from"./index-93c86729.js";import{_ as d}from"./menu-item.194a6744.js";import{_ as p,r as _,o as f,l as g,h as y}from"./home.3f015371.js";import"./load-image.3d8f839a.js";import"./u-icon.43455182.js";const h=p({__name:"song-menu-area",props:{menuList:{type:Array,default:[]},title:{type:String,default:""}},setup:c=>(p,f)=>{const g=r,y=_(a("menu-item"),d);return s(),t(g,{class:"song-menu-area"},{default:e((()=>[l(g,{class:"title"},{default:e((()=>[n(i(c.title),1)])),_:1}),l(g,{class:"list"},{default:e((()=>[(s(!0),u(o,null,m(c.menuList,(a=>(s(),t(g,{key:a.id,class:"item"},{default:e((()=>[l(y,{itemData:a},null,8,["itemData"])])),_:2},1024)))),128))])),_:1})])),_:1})}},[["__scopeId","data-v-d1f6eae3"]]),v=p({__name:"detail-menu",setup(n){const i=c([]),d=c(!0);f((()=>{p()}));const p=async()=>{const a=[],s=(await g()).tags;for(const e of s)a.push(y(e.name));const t=await Promise.all(a);i.value=t,i.value.length>0&&(d.value=!1)};return(n,c)=>{const d=_(a("song-menu-area"),h),p=r;return s(),t(p,{class:"inner"},{default:e((()=>[(s(!0),u(o,null,m(i.value,(a=>(s(),t(d,{key:a.cat,title:a.cat,menuList:a.playlists},null,8,["title","menuList"])))),128)),l(p,{class:"loading"})])),_:1})}}},[["__scopeId","data-v-d107207c"]]);export{v as default};
