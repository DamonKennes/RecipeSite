import{i as u,q as m,o as a,g as o,a as i,b as d,w as n,F as c,H as p,d as e,h as _,s as g,p as w,x,t as f,y as v}from"./app.b92da492.js";import{_ as y}from"./AuthenticatedLayout.7c5bca73.js";import"./ApplicationLogo.e6ec3263.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ResponsiveNavLink.c10a2f99.js";const b=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Dashboard",-1),k={class:"py-12"},D={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},B={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},S=e("div",{class:"p-6 text-gray-900"},"You're logged in!",-1),V={class:"max-w-md mx-auto"},j={class:"relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden"},q=e("div",{class:"grid place-items-center h-full w-12 text-gray-300"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),C={class:"flex h-20"},F=["src"],E={__name:"Dashboard",props:{results:{type:Object,default:()=>({})}},setup(h){let t=u("");return m(t,l=>{v.Inertia.get("/recipes",{query:l},{preserveState:!0})}),(l,r)=>(a(),o(c,null,[i(d(p),{title:"Dashboard"}),i(y,null,{header:n(()=>[b]),default:n(()=>[e("div",k,[e("div",D,[e("div",B,[S,e("div",V,[e("div",j,[q,_(e("input",{class:"peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-0",type:"text",id:"search",placeholder:"Search something..","onUpdate:modelValue":r[0]||(r[0]=s=>w(t)?t.value=s:t=s)},null,512),[[g,d(t)]])])]),(a(!0),o(c,null,x(h.results.data,s=>(a(),o("div",C,[e("img",{src:s.image_url,alt:"Recipe picture",class:"w-20"},null,8,F),e("h1",null,f(s.name),1)]))),256))])])])]),_:1})],64))}};export{E as default};
