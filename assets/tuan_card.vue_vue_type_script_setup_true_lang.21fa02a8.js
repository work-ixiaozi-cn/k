import{d as l,ah as t,r as e,aa as a,o as s,c as o,w as u,a as d,b as f,t as n,O as x,y as r,i as p,h as i,U as c,g as _,e as m,f as v}from"./index.cf819d24.js";import{_ as w}from"./uni-card.36ed251a.js";import{_ as g}from"./logo.79283f64.js";import{g as y}from"./router.6937c411.js";import{d as b}from"./tools.1a322396.js";const h=l({__name:"tuan_card",emits:["click"],setup(l,{emit:h}){const k=t(),j=e({days:0,hours:0,minutes:0,seconds:0}),S=()=>{console.log("xxxxxxxxxxxxxx"),r({title:"xxxxxxxxxx https://wwww.baidu.com/pages/shopping/tuan_join?code="+k.share_code})};return setInterval((()=>{var l,t,e,a,s;k.found&&0===(null==(l=k.found)?void 0:l.status)&&(j.value=b(Date.now(),1e3*(null==(t=k.found)?void 0:t.found_end_time))),k.follow&&0===(null==(e=k.follow)?void 0:e.status)&&(console.log(k.follow&&0===(null==(a=k.follow)?void 0:a.status)),j.value=b(Date.now(),1e3*(null==(s=k.follow)?void 0:s.found.found_end_time)))}),1e3),(l,t)=>{const e=p,r=i,b=c,h=_,O=m(v("uni-card"),w);return a(k).follow&&a(k).found?x("",!0):(s(),o(e,{key:0},{default:u((()=>[d(O,{class:"!rounded-15px",border:!1,padding:"0",margin:"0",spacing:"0",title:a(k).found?"我要开团":"我要拼团","is-shadow":!1},{default:u((()=>[d(e,{class:"text-center"},{default:u((()=>[d(e,{class:"text-24px font-semibold"},{default:u((()=>[f(n(a(k).name),1)])),_:1}),d(e,{class:"text-20px my-20px"},{default:u((()=>{var l,t,p,i,c,_,m,v;return[2===(null==(l=a(k).follow)?void 0:l.status)||2===(null==(t=a(k).found)?void 0:t.status)?(s(),o(e,{key:0},{default:u((()=>[d(r,{class:"rounded-full bg-ffd400 px-10px py-8px text-12px"},{default:u((()=>[f("拼团成功")])),_:1})])),_:1})):x("",!0),3===(null==(p=a(k).follow)?void 0:p.status)||3===(null==(i=a(k).found)?void 0:i.status)?(s(),o(e,{key:1},{default:u((()=>[d(r,{class:"rounded-full bg-gray-300 px-10px py-8px text-12px"},{default:u((()=>[f("拼团失败，获取50%时长")])),_:1})])),_:1})):x("",!0),0===(null==(c=a(k).found)?void 0:c.status)||0===(null==(_=a(k).found)?void 0:_.status)||1===(null==(m=a(k).found)?void 0:m.status)||1===(null==(v=a(k).found)?void 0:v.status)?(s(),o(e,{key:2},{default:u((()=>[d(r,{class:"mx-5px"},{default:u((()=>[f("剩余")])),_:1}),d(r,{class:"mx-5px bg-red-300 font-bold p-5px"},{default:u((()=>[f(n(24*j.value.days+j.value.hours),1)])),_:1}),d(r,{class:"mx-5px font-bold"},{default:u((()=>[f(":")])),_:1}),d(r,{class:"mx-5px bg-red-300 font-bold p-5px"},{default:u((()=>[f(n(j.value.minutes.toString().padStart(2,"0")),1)])),_:1}),d(r,{class:"mx-5px font-bold"},{default:u((()=>[f(":")])),_:1}),d(r,{class:"mx-5px bg-red-300 font-bold p-5px"},{default:u((()=>[f(n(j.value.seconds.toString().padStart(2,"0")),1)])),_:1}),d(r,{class:"mx-5px"},{default:u((()=>[f("结束")])),_:1})])),_:1})):x("",!0)]})),_:1}),d(e,{class:"overflow-x-auto"},{default:u((()=>[d(e,{class:"text-center flex justify-center"},{default:u((()=>[d(e,{class:"m-5px"},{default:u((()=>[d(e,{class:"rounded-full border-1px w-80px h-80px flex flex-center"},{default:u((()=>[d(b,{class:"self-center w-full h-full rounded-full",src:g,fit:"cover",mode:"widthFix"})])),_:1}),a(k).found?(s(),o(e,{key:0},{default:u((()=>[f("我是团长")])),_:1})):(s(),o(e,{key:1},{default:u((()=>[f("团长")])),_:1}))])),_:1}),d(e,{class:"float-left m-5px"},{default:u((()=>[d(e,{class:"rounded-full border-1px w-80px h-80px flex flex-center"},{default:u((()=>[d(e,{class:"self-center text-center flex-auto text-40px"},{default:u((()=>[f("?")])),_:1})])),_:1}),d(e,null,{default:u((()=>[f("A")])),_:1})])),_:1})])),_:1})])),_:1}),d(e,{class:"my-10px"},{default:u((()=>{var l,e,d;return[0===(null==(l=a(k).found)?void 0:l.status)?(s(),o(h,{key:0,class:"inline bg-03a976 rounded-full px-15px py-10px text-fff",onClick:S},{default:u((()=>[f("邀请好友拼团")])),_:1})):x("",!0),[2,3].indexOf(null==(e=a(k).found)?void 0:e.status)>-1||[2,3].indexOf(null==(d=a(k).follow)?void 0:d.status)>-1?(s(),o(h,{key:1,class:"inline bg-03a976 rounded-full px-15px py-10px text-fff",onClick:t[0]||(t[0]=l=>a(y)("/pages/ucenter/order"))},{default:u((()=>[f("查看订单")])),_:1})):x("",!0)]})),_:1})])),_:1})])),_:1},8,["title"])])),_:1}))}}});export{h as _};
