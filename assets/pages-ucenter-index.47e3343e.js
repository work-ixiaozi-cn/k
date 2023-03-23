import{d as e,o as t,c as s,w as a,a0 as l,a as n,t as i,aa as u,b as r,U as c,h as o,i as p,u as d,ac as x,g as m,e as g,f,r as _,a9 as h,ab as b,$ as v,n as w,j as y}from"./index.cf819d24.js";import{_ as k}from"./page.vue_vue_type_script_setup_true_lang.e73b259d.js";import{_ as j}from"./status_bar.vue_vue_type_script_setup_true_lang.c9c059a2.js";import{_ as $}from"./logo.79283f64.js";import{h as z}from"./moment.9709ab41.js";import{_ as C,a as S,b as T}from"./uni-list.721998e1.js";import{_ as F}from"./uni-card.36ed251a.js";import{g as Y}from"./router.6937c411.js";import"./uni-icons.ba5e75da.js";const O=e({__name:"index_head",setup:e=>(e,m)=>{const g=c,f=o,_=p;return t(),s(_,{class:"border-0 overflow-visible !rounded-b-24px",margin:"0",border:!1,"is-shadow":!1},{default:a((()=>[l("div",{class:"flex flex-row justify-center pb-15px pt-20px px-18px"},[n(g,{class:"w-54px h-54px rounded-full",src:$,fit:"cover",mode:"widthFix"}),l("div",{class:"flex-auto text-fff flex flex-col justify-evenly px-5px"},[l("div",{class:"text-14px"},[l("span",{class:"text-16px"},i(u(d)().nick_name.length?u(d)().nick_name:u(d)().name),1),l("span",{class:"text-12px rounded-full py-2px px-5px ml-5px bg-gray-400"},"分销商")]),l("div",{class:"text-12px"},[l("span",null,i(e.$t("ucenter['有效期至']"))+": ",1),l("span",null,i(u(z)(u(x)().expire_time).format("YYYY-MM-DD hh:mm:ss")),1)])]),n(f,{class:"self-center text-14px rounded-full py-8px px-10px ml-5px bg-yellow-100"},{default:a((()=>[r(i(u(x)().name),1)])),_:1})])])),_:1})}}),U=e({__name:"index_common",setup:e=>(e,l)=>{const o=c,d=p,x=m,_=g(f("uni-badge"),C),h=g(f("uni-card"),F);return t(),s(d,null,{default:a((()=>[n(h,{class:"!rounded-10px",title:e.$t("ucenter['常用功能']"),margin:"0","is-shadow":!1},{default:a((()=>[n(d,{class:"flex text-center justify-around"},{default:a((()=>[n(_,{class:"",text:0,absolute:"rightTop",size:"small"},{default:a((()=>[n(x,{class:"!border-0 p-0",onClick:l[0]||(l[0]=e=>u(Y)("/pages/ucenter/order")),plain:""},{default:a((()=>[n(o,{class:"w-24px h-24px",src:"./static/icons/order.png",fit:"cover",mode:"heightFix"}),n(d,{class:"text-12px"},{default:a((()=>[r(i(e.$t("ucenter['订单']")),1)])),_:1})])),_:1})])),_:1}),n(_,{class:"",text:9,absolute:"rightTop",size:"small"},{default:a((()=>[n(x,{class:"!border-0 p-0",onClick:l[1]||(l[1]=e=>u(Y)("/pages/ucenter/coupon")),plain:""},{default:a((()=>[n(o,{class:"w-24px h-24px",src:"./static/icons/coupon.png",fit:"cover",mode:"heightFix"}),n(d,{class:"text-12px"},{default:a((()=>[r(i(e.$t("ucenter['优惠券']")),1)])),_:1})])),_:1})])),_:1}),n(_,{class:"",text:0,absolute:"rightTop",size:"small"},{default:a((()=>[n(x,{class:"!border-0 p-0",onClick:l[2]||(l[2]=e=>u(Y)("/pages/ucenter/distribute")),plain:""},{default:a((()=>[n(o,{class:"w-24px h-24px",src:"./static/icons/distribute.png",fit:"cover",mode:"heightFix"}),n(d,{class:"text-12px"},{default:a((()=>[r(i(e.$t("ucenter['分销中心']")),1)])),_:1})])),_:1})])),_:1}),n(_,{class:"",text:0,absolute:"rightTop",size:"small"},{default:a((()=>[n(x,{class:"!border-0 p-0",onClick:l[3]||(l[3]=e=>u(Y)("/pages/chart/index")),plain:""},{default:a((()=>[n(o,{class:"w-24px h-24px",src:"./static/icons/customer_service.png",fit:"cover",mode:"heightFix"}),n(d,{class:"text-12px"},{default:a((()=>[r(i(e.$t("ucenter['客服']")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["title"])])),_:1})}}),D=e({__name:"index_main",setup(e){const l={"zh-CN":"简体中文","en-US":"English"},c=_({current:h().getLang(),data:Object.values(l),keys:Object.keys(l),list:{"zh-CN":"简体中文","en-US":"English"},change:e=>{c.value.current=c.value.keys[e.detail.value],h().setLang(c.value.current)}});return _({visible:!1,top:0,bottom:0}),(e,d)=>{const x=g(f("uni-list-item"),S),m=b,_=g(f("uni-list"),T),h=o,w=p,y=g(f("uni-card"),F);return t(),s(y,{class:"!rounded-10px",title:e.$t("ucenter['其它功能']"),margin:"0","is-shadow":!1},{default:a((()=>[n(_,{border:!1},{default:a((()=>[n(x,{title:e.$t("ucenter['消息中心']"),thumb:"/static/icons/message.png",thumbSize:"sm",to:"/pages/ucenter/message",link:""},null,8,["title"]),n(x,{title:e.$t("ucenter['修改密码']"),thumb:"/static/icons/password.png",thumbSize:"sm",to:"/pages/ucenter/password",link:""},null,8,["title"]),n(x,{title:e.$t("ucenter['用户服务']"),thumb:"/static/icons/service.png",thumbSize:"sm",to:"/pages/ucenter/service",link:""},null,8,["title"]),n(m,{onChange:c.value.change,value:c.value.keys.indexOf(c.value.current),range:c.value.data},{default:a((()=>[n(x,{title:e.$t("ucenter['语言切换']"),thumb:"/static/icons/language.png",thumbSize:"sm",rightText:l[c.value.current],link:""},null,8,["title","rightText"])])),_:1},8,["onChange","value","range"]),n(x,{title:"在线调试",rightText:"(仅测试账号可见)",thumb:"https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",thumbSize:"sm",to:"/pages/ucenter/debugging",link:""}),n(x,{title:e.$t("ucenter['退出登录']"),thumb:"/static/icons/logout.png",thumbSize:"sm",to:"/pages/auth/login",link:""},null,8,["title"])])),_:1}),n(w,null,{default:a((()=>[n(h,{class:"text-14px"},{default:a((()=>[r(i(e.$t("ucenter['版本号']"))+": ",1)])),_:1}),n(h,{class:"text-14px"},{default:a((()=>[r(i(u(v)().appVersion),1)])),_:1})])),_:1})])),_:1},8,["title"])}}}),E=e({__name:"index",setup:e=>(console.log(w()[0].route),(e,l)=>{const i=p,u=c,r=y;return t(),s(k,{class:"h-tab-page"},{default:a((()=>[n(i,{class:"from-00d393 to-05c0b1 bg-gradient-to-br rounded-b-20px -mb-50px pb-50px"},{default:a((()=>[n(j),n(O)])),_:1}),n(i,{class:"mt-15px mx-15px"},{default:a((()=>[n(U,{class:"my-5px"}),n(r,{class:"text-red-300 inline",url:"/pages/auth/login"},{default:a((()=>[n(u,{class:"w-full my-5px",src:"./static/images/banner.png",fit:"cover",mode:"widthFix"})])),_:1}),n(D,{class:"my-5px"})])),_:1})])),_:1})})});export{E as default};
