import{r as a,o as e,c as t,w as s,a as l,b as i,t as n,d as r,i as o,e as c,u,n as m,f as d,g as p,F as f,h as _,S as g,j as y,k,l as h,m as x,p as v,q as D,s as w,v as b,x as L}from"./index-442b9388.js";import{_ as C}from"./u-input.71f5c01d.js";import{_ as S,r as j,f as I,a as M,b as R,o as $}from"./home.f5708a13.js";import{_ as F}from"./u-icon.95be83d1.js";import{_ as A}from"./menu-item.4518b285.js";import{_ as U}from"./music-list.16f6d15b.js";import{_ as z,a as B}from"./play_music.42b0c54c.js";import{u as H}from"./music-list-item.52a5d62c.js";import{u as O}from"./home.4ed06cb7.js";import"./load-image.b249b96f.js";const q=S({__name:"area-header",props:{title:{type:String,default:"标题"},hasMore:{type:Boolean,default:!0}},emits:["moreClick"],setup(u,{emit:m}){const d=()=>{m("moreClick")};return(m,p)=>{const f=o,_=c,g=j(a("u-icon"),F);return e(),t(f,{class:"header"},{default:s((()=>[l(f,{class:"title"},{default:s((()=>[i(n(u.title),1)])),_:1}),u.hasMore?(e(),t(f,{key:0,class:"more",onClick:d},{default:s((()=>[l(_,{class:"text"},{default:s((()=>[i("更多")])),_:1}),l(g,{name:"arrow-right"})])),_:1})):r("",!0)])),_:1})}}},[["__scopeId","data-v-ac069faa"]]),N=S({__name:"song-item-v1",props:{itemData:{type:Object,default:{}},index:{type:Number,default:0}},emits:["loadSongList"],setup(r,{emit:c}){const p=r,f=()=>{m({url:`/pages/music-player/music-player?id=${p.itemData.id}`}),c("loadSongList",p.index)};return(c,m)=>{const p=d,_=o,g=j(a("u-icon"),F);return e(),t(_,{class:"song-item",onClick:f},{default:s((()=>[l(p,{class:"cover",src:u(I)(r.itemData.al.picUrl,"70y70"),mode:"widthFix"},null,8,["src"]),l(_,{class:"info"},{default:s((()=>[l(_,{class:"name"},{default:s((()=>[i(n(r.itemData.name),1)])),_:1}),l(_,{class:"singer"},{default:s((()=>[i(n(r.itemData.ar[0].name)+" · "+n(r.itemData.al.name),1)])),_:1})])),_:1}),l(g,{class:"arrow",name:"arrow-right"})])),_:1})}}},[["__scopeId","data-v-fb97d104"]]),P=S({__name:"menu-area",props:{title:{type:String,default:"默认标题"},menuList:{type:Array,default:[]}},setup(i){const n=()=>{m({url:"/pages/detail-menu/detail-menu"})};return(r,c)=>{const u=j(a("area-header"),q),m=j(a("menu-item"),A),d=o,y=g;return e(),t(d,{class:"menu"},{default:s((()=>[l(u,{title:i.title,onMoreClick:n},null,8,["title"]),l(y,{class:"list","enable-flex":"","scroll-x":""},{default:s((()=>[(e(!0),p(f,null,_(i.menuList,(a=>(e(),t(d,{key:a.id,class:"item"},{default:s((()=>[l(m,{itemData:a},null,8,["itemData"])])),_:2},1024)))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-768d2821"]]),W=S({__name:"ranking-item",props:{itemData:{type:Object,default:{}},keyword:{type:String}},setup(g){const y=g,k=()=>{m({url:`/pages/detail-song/detail-song?type=ranking&keyword=${y.keyword}`})};return(m,y)=>{const h=o,x=c,v=d,D=j(a("u-icon"),F);return g.itemData.id?(e(),t(h,{key:0,class:"ranking-item",onClick:k},{default:s((()=>[l(h,{class:"content"},{default:s((()=>[l(h,{class:"title"},{default:s((()=>[i(n(g.itemData.name),1)])),_:1}),(e(),p(f,null,_(3,((a,e)=>l(h,{key:a,class:"song-item"},{default:s((()=>[l(x,{class:"name"},{default:s((()=>[i(n(e+1)+". "+n(g.itemData.tracks[e].name),1)])),_:2},1024),l(x,{class:"singer"},{default:s((()=>[i("- "+n(g.itemData.tracks[e].ar[0].name),1)])),_:2},1024)])),_:2},1024))),64))])),_:1}),l(h,{class:"cover"},{default:s((()=>[l(v,{src:g.itemData.coverImgUrl,mode:"widthFix"},null,8,["src"]),l(h,{class:"play-count"},{default:s((()=>[l(D,{color:"white",size:"20rpx",name:"play-right-fill"}),i(" "+n(u(M)(g.itemData.playCount)),1)])),_:1})])),_:1})])),_:1})):r("",!0)}}},[["__scopeId","data-v-5493d749"]]),E=S({__name:"levitated-player",setup(_){const g=H(),{currentSong:w,isPlaying:b,playSongList:L}=y(g),C=D(),S=k().proxy,M=C.globalData.audioContext,$=h((()=>C.globalData.deviceWidth)),F=h((()=>D().globalData.contentHeight)),A=a=>{const{isbtn:e}=a.target.dataset;e||m({url:`/pages/music-player/music-player?id=${w.value.id}`})},O=()=>{M.paused?(M.play(),b.value=!0):(M.pause(),b.value=!1)},q=()=>{S.$refs.popup.open()},N=()=>{S.$refs.popup.close()};return(m,_)=>{const g=d,y=o,k=c,h=j(a("music-list"),U),D=j(a("uni-popup"),z);return e(),p(f,null,[u(w).id?(e(),t(y,{key:0,class:"music-control",style:v(`width:${u($)}px`),onClickCapture:A},{default:s((()=>[l(g,{class:x(`cover ${u(b)&&"animation-rotate"}`),src:u(I)(u(w).al.picUrl,"70y70"),mode:"widthFix"},null,8,["class","src"]),l(y,{class:"song-info"},{default:s((()=>[i(n(u(w).name)+" - "+n(u(R)(u(w).ar)),1)])),_:1}),l(y,{class:"control"},{default:s((()=>[l(g,{class:"play",src:`/static/images/player/play_${u(b)?"pause":"resume"}.png`,mode:"widthFix","data-isbtn":!0,onClick:O},null,8,["src"]),l(g,{class:"menu",src:B,mode:"widthFix","data-isbtn":!0,onClick:q})])),_:1})])),_:1},8,["style"])):r("",!0),l(D,{ref:"popup","data-isbtn":!0,"background-color":"white",type:"bottom"},{default:s((()=>[l(h,{playSongList:u(L),height:u(F)/2+"px",onItemClick:N},{title:s((()=>[i(" 当前播放列表 "),l(k,{class:"count"},{default:s((()=>[i("( "+n(u(L).length)+" )",1)])),_:1})])),_:1},8,["playSongList","height"])])),_:1},512)],64)}}},[["__scopeId","data-v-91085d6e"]]);const G=S({__name:"index",setup(i){const n=w(!1),r=()=>{n.value=!1,m({url:"/pages/search/search"})},c=O(),g=H(),{bannerList:k,recommendList:x,hotMenus:v,chineseMenus:D}=y(c);$((()=>{c.fetchHomeBanner(),c.fetchRecommendList(),c.fetchSongMenuList(),c.fetchRankingDataAction()}));const S=h((()=>(x.value.tracks||[]).slice(0,6))),I=h((()=>({newRanking:c.newRanking,originRanking:c.originRanking,upRanking:c.upRanking}))),M=()=>{m({url:"/pages/detail-song/detail-song?type=recommend"})},R=a=>{!function(a){const e=H(),t=Array.isArray(a)?a:[];e.playSongList=t}(S.value||[]),g.currentIndex=a};return(i,c)=>{const m=j(a("up-input"),C),g=o,y=d,h=L,x=b,w=j(a("area-header"),q),$=j(a("song-item-v1"),N),F=j(a("menu-area"),P),A=j(a("ranking-item"),W),U=j(a("levitated-player"),E);return e(),p(f,null,[l(g,{class:"search"},{default:s((()=>[l(m,{placeholder:"搜索你喜欢的歌曲",prefixIcon:"search",prefixIconStyle:"font-size: 22px;color: #909399",onClick:r,focus:n.value,shape:"circle"},null,8,["focus"])])),_:1}),l(g,{class:"inner"},{default:s((()=>[l(x,{class:"banner","indicator-active-color":"#fff",circular:"","indicator-dots":"",autoplay:""},{default:s((()=>[(e(!0),p(f,null,_(u(k),(a=>(e(),t(h,{key:a.url,class:"item"},{default:s((()=>[l(y,{class:"image",src:a.imageUrl,mode:"widthFix"},null,8,["src"])])),_:2},1024)))),128))])),_:1})])),_:1}),l(g,{class:"recommend"},{default:s((()=>[l(w,{title:"推荐歌曲",onMoreClick:M}),l(g,{class:"list inner"},{default:s((()=>[(e(!0),p(f,null,_(u(S),((a,s)=>(e(),t($,{key:a.id,class:"item",itemData:a,onLoadSongList:R,index:s},null,8,["itemData","index"])))),128))])),_:1})])),_:1}),l(F,{title:"热门歌单",menuList:u(v)},null,8,["menuList"]),l(F,{title:"华语歌单",menuList:u(D)},null,8,["menuList"]),l(g,{class:"ranking"},{default:s((()=>[l(w,{title:"巅峰榜",hasMore:!1}),l(g,{class:"ranking-list"},{default:s((()=>[(e(!0),p(f,null,_(u(I),((a,i)=>(e(),t(g,{key:a.id,class:"item"},{default:s((()=>[l(A,{keyword:i,itemData:a},null,8,["keyword","itemData"])])),_:2},1024)))),128))])),_:1})])),_:1}),l(U)],64)}}},[["__scopeId","data-v-2518c572"]]);export{G as default};
