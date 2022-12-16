import{D as y,u as h,o as n,g as r,d as a,a as s,b as e,e as m,w as u,h as x,v as V,k as f,T as k,f as b,L as w}from"./app.6b2e26f9.js";import{a as p,b as _,_ as v}from"./TextInput.21a1407b.js";import{_ as S}from"./PrimaryButton.81e2ee3a.js";const N=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),a("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),$={key:0},B={class:"text-sm mt-2 text-gray-800"},E={class:"mt-2 font-medium text-sm text-green-600"},U={class:"flex items-center gap-4"},C={key:0,class:"text-sm text-gray-600"},D={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(g){const d=g,l=y().props.value.auth.user,t=h({name:l.name,email:l.email});return(c,o)=>(n(),r("section",null,[N,a("form",{onSubmit:o[2]||(o[2]=b(i=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[a("div",null,[s(v,{for:"name",value:"Name"}),s(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(_,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),a("div",null,[s(v,{for:"email",value:"Email"}),s(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).email=i),required:"",autocomplete:"email"},null,8,["modelValue"]),s(_,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),d.mustVerifyEmail&&e(l).email_verified_at===null?(n(),r("div",$,[a("p",B,[m(" Your email address is unverified. "),s(e(w),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:u(()=>[m(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),x(a("div",E," A new verification link has been sent to your email address. ",512),[[V,d.status==="verification-link-sent"]])])):f("",!0),a("div",U,[s(S,{disabled:e(t).processing},{default:u(()=>[m("Save")]),_:1},8,["disabled"]),s(k,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:u(()=>[e(t).recentlySuccessful?(n(),r("p",C,"Saved.")):f("",!0)]),_:1})])],32)]))}};export{D as default};
