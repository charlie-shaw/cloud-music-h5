import{A as n}from"./index-45478141.js";import{e as s,d as t,h as e}from"./home.0b29f6a1.js";const i={newRanking:3779629,originRanking:2884035,upRanking:19723756},a=n("homeStore",{state:()=>({bannerList:[],recommendList:[],hotMenus:[],chineseMenus:[],newRanking:{},originRanking:{},upRanking:{}}),actions:{async fetchHomeBanner(){const n=await s();this.bannerList=n.banners},async fetchRecommendList(){const n=await t(3778678);this.recommendList=n.playlist},fetchSongMenuList(){e().then((n=>{this.hotMenus=n.playlists})),e("华语").then((n=>{this.chineseMenus=n.playlists}))},fetchRankingDataAction(){for(const n in i){t(i[n]).then((s=>{this[n]=s.playlist}))}}}});export{a as u};
