import{A as e,p as s,j as a,l as t,o as l,g as u,a as o,w as r,F as i,i as n,u as c,c as d,b as h,t as g,d as f,h as m,x as v,k as y,r as p,S as _,e as k}from"./index-45478141.js";import{_ as x}from"./u-input.5062eae0.js";import{R as w,p as S,_ as L,o as j,n as C,r as b}from"./home.0b29f6a1.js";import{_ as K}from"./u-icon.b5f0b7ed.js";import{u as I,_ as D}from"./music-list-item.26939711.js";import{d as H}from"./index-default.45a26e56.js";const V=e("searchStore",{state:()=>({hotKeywords:[],suggestList:[]}),actions:{async fetchHotKeywords(){var e;const s=await w.get({url:"/search/hot"});this.hotKeywords=null==(e=null==s?void 0:s.result)?void 0:e.hots},async fetchSearchSuggest(e){const s=await function(e){return w.get({url:"/search/suggest",data:{keywords:e,type:"mobile"}})}(e);this.suggestList=S(s.result.allMatch,e)}}}),F=L({__name:"search",setup(e){const S=V(),L=I(),F=s((()=>y().globalData.contentHeight/1.2)),M=a(""),T=a(!1),{hotKeywords:$,suggestList:z}=t(S);j((()=>{S.fetchHotKeywords()}));const A=a([]),B=async()=>{if(!M.value)return;A.value=[];const e=await function(e,s=1){return w.get({url:"/cloudsearch",data:{type:s,keywords:e}})}(M.value);e.result.songs&&(A.value=e.result.songs),T.value=!1},R=H((()=>{const e=M.value;e?S.fetchSearchSuggest(e):S.suggestList=[]}),300),U=()=>{M.value,T.value=!0},q=()=>{z.value.length||(T.value=!1)},E=e=>{const s=e.target.dataset.value;s&&(M.value=s,B())},G=()=>{L.playSongList=A.value};return C((()=>{S.suggestList=[],M.value=""})),(e,s)=>{const a=b(p("up-input"),x),t=n,y=b(p("u-icon"),K),w=k,S=b(p("music-list-item"),D),j=_;return l(),u(i,null,[o(t,{class:"search"},{default:r((()=>[o(a,{ref:"input",placeholder:"搜索你喜欢的歌曲",prefixIcon:"search",prefixIconStyle:"font-size: 22px;color: #909399",shape:"circle",modelValue:M.value,"onUpdate:modelValue":s[0]||(s[0]=e=>M.value=e),modelModifiers:{trim:!0},onFocus:U,onConfirm:B,clearable:"",onChange:c(R),onBlur:q},null,8,["modelValue","onChange"]),T.value?(l(),d(t,{key:0,class:"suggest-list",style:v(`height:${c(F)}px`)},{default:r((()=>[M.value.length?(l(),d(t,{key:0,class:"suggest-title"},{default:r((()=>[h('搜索"'+g(M.value)+'"',1)])),_:1})):f("",!0),(l(!0),u(i,null,m(c(z),(e=>(l(),d(t,{key:e.keyword,class:"item",onClick:s=>{return a=e.keyword,M.value=a,T.value=!1,void B();var a}},{default:r((()=>[o(y,{name:"search"}),o(w,{class:"match"},{default:r((()=>[h(g(e.matchText),1)])),_:2},1024),o(w,{class:"normal"},{default:r((()=>[h(g(e.normalText),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1},8,["style"])):f("",!0),A.value.length?(l(),d(j,{key:1,class:"scroll-box","scroll-y":"",style:v(`height: ${c(F)}px;`)},{default:r((()=>[o(t,{class:"search-list"},{default:r((()=>[(l(!0),u(i,null,m(A.value,((e,s)=>(l(),d(t,{key:e.id,class:"item"},{default:r((()=>[o(S,{onItemClick:G,itemData:e,index:s,isListening:e.id==c(L).currentSong.id},null,8,["itemData","index","isListening"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["style"])):f("",!0)])),_:1}),o(t,{class:"search-hot"},{default:r((()=>[o(t,{class:"hot-header"},{default:r((()=>[h(" 热门搜索 ")])),_:1}),o(t,{class:"hot-list",onClick:E},{default:r((()=>[(l(!0),u(i,null,m(c($),(e=>(l(),d(t,{key:e.first,class:"item","data-value":e.first},{default:r((()=>[h(g(e.first),1)])),_:2},1032,["data-value"])))),128))])),_:1})])),_:1})],64)}}},[["__scopeId","data-v-65a48ec2"]]);export{F as default};
