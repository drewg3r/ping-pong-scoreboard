import{_ as a,s as c}from"./plugin-vue_export-helper.ccbf01d2.js";import{r as l,o as t,c as s,a as i,b as d,w as u,F as h,d as e,e as o}from"./index.a4eb2b7b.js";const p={data(){return{store:c}},mounted(){this.store.player1Name=null,this.store.player2Name=null,this.store.scoreToWin=null,this.store.firstServePlayer=null,this.store.player1Score=null,this.store.winner=null},unmounted(){this.store.showGameFinishedAlert=!1}},m={key:0,class:"alert alert-primary",role:"alert"},_=e("div",{class:"my-4"},[e("span",{class:"fs-5"},"Just another app to track ping-pong score during game.")],-1),f=o("Start new game"),g=e("hr",null,null,-1),w=e("div",{class:"text-end"},[e("a",{href:"https://github.com/drewg3r",class:"text-decoration-none"},"drewg3r"),o(" | "),e("a",{href:"https://github.com/drewg3r/ping-pong-scoreboard",class:"text-decoration-none"},"repo")],-1);function y(b,x,k,N,r,v){const n=l("RouterLink");return t(),s(h,null,[r.store.showGameFinishedAlert?(t(),s("div",m," You've finished your game. Now you can start a new one. ")):i("",!0),_,d(n,{to:"/setup",class:"btn btn-success d-block fs-5 fw-bold"},{default:u(()=>[f]),_:1}),g,w],64)}const B=a(p,[["render",y]]);export{B as default};