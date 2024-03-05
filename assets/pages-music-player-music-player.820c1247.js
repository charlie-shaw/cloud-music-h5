import{J as e,l as a,j as l,p as s,k as t,m as o,q as n,o as c,c as u,w as i,i as r,a as d,v,b as p,u as m,x as g,t as h,g as f,h as y,F as _,f as b,K as x,z as k,S as w,y as C,e as $,r as L}from"./index-45478141.js";import{q as T,_ as F}from"./music-list.5b0221eb.js";import{_ as M,o as j,m as I,n as P,f as E,b as S,c as D,r as U}from"./home.0b29f6a1.js";import{a as q,_ as z}from"./play_music.9b84a4a2.js";import{t as H}from"./index-default.45a26e56.js";import{u as X,a as Y}from"./music-list-item.26939711.js";const J=M({__name:"music-player",setup(M){const J=X(),{playModeName:K,playSongList:N,currentIndex:V,playModelIndex:A,sliderValue:B,lyricInfos:G,scrollTop:O,itemHeight:Q,currentLyricIndex:R,isPlaying:W,currentTime:Z,durationTime:ee,currentLyric:ae,currentSong:le}=a(J),se=l(!1),te=s((()=>t().globalData.contentHeight));let oe=null;const ne=t().globalData.audioContext,ce=l(0);var ue,ie,re,de;j((e=>{oe=o().proxy;const{id:a,currentIndex:l}=e;ge(+a,l)}));const ve=function(e){ue=e.touches[0].pageX,re=e.touches[0].pageY},pe=function(e){ie=e.touches[0].pageX,de=e.touches[0].pageY,Math.abs(ue-ie)>Math.abs(re-de)&&e.preventDefault()};n((()=>{document.addEventListener("touchstart",ve,!1),document.addEventListener("touchmove",pe,{passive:!1})}));const me=()=>{ke.value||se.value||ye(),_e()},ge=async(a,l)=>{if(le.value.id!==a){const s=await I(a);Y(null==s?void 0:s.songs[0],l),ne.src||(console.log("listener"),ne.onCanplay(he),ne.onTimeUpdate(me),ne.onEnded(fe),ne.onPause((()=>{J.$patch({isPlaying:!1})})),ne.onPlay((()=>{J.$patch({isPlaying:!0})})),ne.onError((a=>{console.log("加载失败"),e({title:"歌曲加载失败",icon:"error"}),N.value.length<=1?ne.pause():setTimeout((()=>{$e()}),1e3)})))}},he=()=>{ne.play(),console.log("play"),J.durationTime=1e3*ne.duration,W.value=!0},fe=()=>{1!==A&&Ce(!0,!0)},ye=H((()=>{const e=1e3*ne.currentTime/ee.value*100;B.value=e,Z.value=1e3*ne.currentTime}),800,{leading:!1}),_e=H((()=>{var e;if(!G.value.length)return;let a=G.value.length-1;for(let t=0;t<G.value.length;t++){if(G.value[t].time-100>1e3*ne.currentTime){a=t-1;break}}if(a===R.value)return;Q.value||T(".height").then((e=>{var a;Q.value=null==(a=e[0])?void 0:a.height}));const l=te.value/2,s=Q.value*a-l+Q.value/2;ae.value=null==(e=G.value[a])?void 0:e.lyric,R.value=a,O.value=s}),500,{leading:!1}),be=()=>{ne.paused?(ne.play(),J.$patch({isPlaying:!0})):(ne.pause(),J.$patch({isPlaying:!1}))},xe=e=>{se.value=!0,setTimeout((()=>{se.value=!1}),1e3);const a=e.detail.value;ne.seek(ee.value*a/100/1e3),ke.value=!1},ke=l(!1),we=e=>{ke.value=!0;const a=e.detail.value;Z.value=ee.value*a/100},Ce=(e,a)=>{const l=J.playSongList.length;let s=V.value;switch(A.value){case 1:case 0:e?(s+=1,s=s>=l?0:s):(s-=1,s=s<0?l-1:s);break;case 2:for(s=Math.floor(Math.random()*l);s===V.value;)s=Math.floor(Math.random()*l)}if(a&&1===A.value)return;V.value=s,console.log(A.value,s);const t=[...N.value];t[s]&&Y(t[s],s)},$e=()=>{Ce(!0)},Le=()=>{Ce()},Te=e=>{ce.value=e.detail.current},Fe=()=>{const a=["order","repeat","random"];switch(A.value+=1,A.value>=a.length&&(A.value=0),1===A.value?ne.loop=!0:ne.loop=!1,K.value=a[A.value],A.value){case 0:e({title:"顺序播放",icon:"success"});break;case 1:e({title:"单曲循环",icon:"success"});break;case 2:e({title:"随机播放",icon:"success"})}},Me=()=>{oe.$refs.popup.open()},je=()=>{oe.$refs.popup.close()};return P((()=>{document.removeEventListener("touchstart",ve),document.removeEventListener("touchmove",pe)})),(e,a)=>{const l=r,s=b,t=x,o=k,n=w,T=C,M=$,j=U(L("music-list"),F),I=U(L("uni-popup"),z);return c(),u(l,{class:"container"},{default:i((()=>{var e,r;return[d(l,{class:"tabs"},{default:i((()=>[d(l,{class:v(0===ce.value?"active":""),onClick:a[0]||(a[0]=e=>ce.value=0)},{default:i((()=>[p(" 歌曲 ")])),_:1},8,["class"]),d(l,{class:"divider"},{default:i((()=>[p("|")])),_:1}),d(l,{class:v(1===ce.value?"active":""),onClick:a[1]||(a[1]=e=>ce.value=1)},{default:i((()=>[p(" 歌词 ")])),_:1},8,["class"])])),_:1}),d(s,{class:"bg-img",src:m(E)(null==(r=null==(e=m(le))?void 0:e.al)?void 0:r.picUrl),mode:"aspectFill"},null,8,["src"]),d(l,{class:"bg-cover"}),d(T,{current:ce.value,onChange:Te,class:"swiper",style:g(`height:${m(te)}px`)},{default:i((()=>[d(o,null,{default:i((()=>[d(l,{class:"song-box",style:g(`height:${m(te)}px`)},{default:i((()=>[d(l,{class:"song-cover"},{default:i((()=>{var e,a;return[d(s,{class:"cover",src:m(E)(null==(a=null==(e=m(le))?void 0:e.al)?void 0:a.picUrl),mode:"widthFix"},null,8,["src"])]})),_:1}),d(l,{class:"title"},{default:i((()=>[p(h(m(le).name),1)])),_:1}),d(l,{class:"ar"},{default:i((()=>[p(h(m(S)(m(le).ar)),1)])),_:1}),d(l,{class:"lyric"},{default:i((()=>[p(h(m(ae)),1)])),_:1}),d(l,{class:"progress"},{default:i((()=>[d(t,{"active-color":"#1FD963","block-size":"12",onChange:xe,onChanging:we,value:m(B)},null,8,["value"]),d(l,{class:"time"},{default:i((()=>[d(l,{class:"current-tiem"},{default:i((()=>[p(h(m(D)(m(Z))),1)])),_:1}),d(l,{class:"duration-tiem"},{default:i((()=>[p(h(m(D)(m(ee))),1)])),_:1})])),_:1})])),_:1}),d(l,{class:"controls"},{default:i((()=>[d(s,{class:"btn mode",src:`/static/images/player/play_${m(K)}.png`,mode:"widthFix",onClick:Fe},null,8,["src"]),d(s,{class:"btn prev",src:"/assets/play_prev-e5d9edb2.png",mode:"widthFix",onClick:Le}),d(s,{class:"btn play",src:`/static/images/player/play_${m(W)?"pause":"resume"}.png`,mode:"widthFix",onClick:be},null,8,["src"]),d(s,{class:"btn next",src:"/assets/play_next-6044e02c.png",mode:"widthFix",onClick:$e}),d(s,{class:"btn music",src:q,mode:"widthFix",onClick:Me})])),_:1})])),_:1},8,["style"])])),_:1}),d(o,null,{default:i((()=>[d(n,{class:"lyric-list","scroll-y":"","scroll-top":`${m(O)}`,"scroll-with-animation":""},{default:i((()=>[(c(!0),f(_,null,y(m(G),((e,a)=>(c(),u(l,{key:e.time,class:v(`item ${m(R)===a?"active":""} ${0===a?"height":""}`)},{default:i((()=>[p(h(e.lyric),1)])),_:2},1032,["class"])))),128))])),_:1},8,["scroll-top"])])),_:1})])),_:1},8,["current","style"]),d(I,{ref:"popup","background-color":"white",type:"bottom"},{default:i((()=>[d(j,{playSongList:m(N),height:m(te)/2+"px",onItemClick:je},{title:i((()=>[p(" 当前播放列表 "),d(M,{class:"count"},{default:i((()=>[p("( "+h(m(N).length)+" )",1)])),_:1})])),_:1},8,["playSongList","height"])])),_:1},512)]})),_:1})}}},[["__scopeId","data-v-5e7e3815"]]);export{J as default};
