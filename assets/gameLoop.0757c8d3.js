import{_ as T,s as d,p as e,a as l,l as c,D as m,b as s,g as u}from"./index.22025e01.js";import"./vue.92681fcb.js";import{b1 as v}from"./@vue.4ce677c2.js";/* empty css                    */import"./nanoevents.1080beb7.js";import"./lz-string.731cedc5.js";import"./is-plain-object.906d88e8.js";import"./vue-next-select.a2bfab1d.js";import"./vue-toastification.6f567382.js";import"./vuedraggable.7949458c.js";import"./sortablejs.29100d8a.js";import"./vue-textarea-autosize.35804eaf.js";import"./workbox-window.8d14e8b7.js";let n=null,f=null;function r(){const t=Date.now();let i=(t-e.time)/1e3;e.time=t;const o=i;if(l.lastTenTicks.push(o),l.lastTenTicks.length>10&&(l.lastTenTicks=l.lastTenTicks.slice(1)),(f==null?void 0:f.value)&&!e.keepGoing||l.hasNaN||(i=Math.max(i,0),e.devSpeed===0))return;if(c.value=!1,e.offlineTime!=null){if(m.gt(e.offlineTime,s.offlineLimit*3600)&&(e.offlineTime=s.offlineLimit*3600),m.gt(e.offlineTime,0)&&e.devSpeed!==0){const p=Math.max(e.offlineTime/10,i);e.offlineTime=e.offlineTime-p,i+=p}else e.devSpeed===0&&(e.offlineTime+=i);(!e.offlineProd||m.lt(e.offlineTime,0))&&(e.offlineTime=null)}if(i=Math.min(i,s.maxTickLength),e.devSpeed!=null&&(i*=e.devSpeed),Number.isFinite(i)||(i=1e308),m.eq(i,0))return;e.timePlayed+=i,Number.isFinite(e.timePlayed)||(e.timePlayed=1e308);let a=o;for(;a>1;)u.emit("update",i/o,1),a--;u.emit("update",i*a/o,a),d.unthrottled?(requestAnimationFrame(r),n!=null&&(clearInterval(n),n=null)):n==null&&(n=setInterval(r,50))}async function F(){f=(await T(()=>import("./index.22025e01.js").then(function(t){return t.c}),["assets/index.22025e01.js","assets/index.0076d5e7.css","assets/@fontsource.c175eac8.css","assets/vue.92681fcb.js","assets/lz-string.731cedc5.js","assets/@vue.4ce677c2.js","assets/nanoevents.1080beb7.js","assets/is-plain-object.906d88e8.js","assets/vue-next-select.a2bfab1d.js","assets/vue-next-select.9e6f4164.css","assets/vue-toastification.6f567382.js","assets/vue-toastification.4b5f8ac8.css","assets/vuedraggable.7949458c.js","assets/sortablejs.29100d8a.js","assets/vue-textarea-autosize.35804eaf.js","assets/workbox-window.8d14e8b7.js"])).hasWon,v(f,t=>{t&&u.emit("gameWon")}),d.unthrottled?requestAnimationFrame(r):n=setInterval(r,50)}export{F as startGameLoop};
