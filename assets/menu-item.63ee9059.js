import{r as a,o as s,c as t,w as e,a as o,b as i,t as l,u as m,n as r,i as c}from"./index-45478141.js";import{_ as n}from"./load-image.908fbf8d.js";import{_ as u,r as d,a as p}from"./home.0b29f6a1.js";import{_}from"./u-icon.b5f0b7ed.js";const f=u({__name:"menu-item",props:{itemData:{type:Object,default:{}}},setup(u){const f=u,g=()=>{const a=f.itemData.id;r({url:`/pages/detail-song/detail-song?type=menu&id=${a}`})};return(r,f)=>{const y=d(a("load-image"),n),j=c,D=d(a("u-icon"),_);return s(),t(j,{class:"menu-item",onClick:g},{default:e((()=>[o(j,{class:"cover"},{default:e((()=>[o(j,{class:"image"},{default:e((()=>[o(y,{src:u.itemData.coverImgUrl},null,8,["src"])])),_:1}),o(j,{class:"play-count"},{default:e((()=>[o(D,{class:"play",color:"white",size:"20rpx",name:"play-right-fill"}),i(" "+l(m(p)(u.itemData.playCount)),1)])),_:1})])),_:1}),o(j,{class:"title"},{default:e((()=>[i(l(u.itemData.name),1)])),_:1})])),_:1})}}},[["__scopeId","data-v-ba7eded3"]]);export{f as _};
