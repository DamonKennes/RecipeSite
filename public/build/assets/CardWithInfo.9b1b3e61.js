import{o as a,g as d,d as i,h as x,s as k,J as R,B as M,K as u,k as B,y as v,E as f,t as p,a as _,n as I,w as z,F as N,x as L,c as b,G as w,I as $,v as y}from"./app.9a780185.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import{S as C}from"./Stars.260f126d.js";const T={name:"SearchBar",props:{value:String},data:function(){return{query:this.value}}},W={class:"max-w-md mx-auto"},G={class:"relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden"},P=i("div",{class:"grid place-items-center h-full w-12 text-gray-300"},[i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1);function j(t,o,e,s,n,l){return a(),d("div",W,[i("div",G,[P,x(i("input",{class:"peer h-full w-full outline-none text-sm text-gray-700 pr-2 border-0",type:"text",id:"search",placeholder:"Search something..","onUpdate:modelValue":o[0]||(o[0]=r=>t.query=r),onInput:o[1]||(o[1]=r=>t.$emit("updated-value",t.query))},null,544),[[k,t.query]])])])}const ke=h(T,[["render",j]]);var g=Object.assign,D=R({name:"VueHorizontal",data:()=>({left:0,width:0,scrollWidth:0,hasPrev:!1,hasNext:!1,debounceId:void 0}),props:{button:{type:Boolean,default:()=>!0},buttonBetween:{type:Boolean,default:()=>!0},scroll:{type:Boolean,default:()=>!1},displacement:{type:Number,default:()=>1},snap:{type:String,default:()=>"start"}},mounted(){this.onScrollDebounce()},beforeDestroy(){clearTimeout(this.debounceId)},methods:{children(){return this.$refs.container.children},findPrevSlot(t){const o=this.children();for(let e=0;e<o.length;e++){const s=o[e].getBoundingClientRect();if(s.left<=t&&t<=s.right||t<=s.left)return o[e]}},findNextSlot(t){const o=this.children();for(let e=0;e<o.length;e++){const s=o[e].getBoundingClientRect();if(!(s.right<=t)&&(s.left<=t||t<=s.left))return o[e]}},prev(t){t.stopPropagation(),this.$emit("prev");const o=this.$refs.container,e=o.getBoundingClientRect().left,s=e+o.clientWidth*-this.displacement-2.5,n=this.findPrevSlot(s);if(n){const r=n.getBoundingClientRect().left-e;return void this.scrollToLeft(o.scrollLeft+r)}const l=o.clientWidth*this.displacement;this.scrollToLeft(o.scrollLeft-l)},next(t){t.stopPropagation(),this.$emit("next");const o=this.$refs.container,e=o.getBoundingClientRect().left,s=e+o.clientWidth*this.displacement+2.5,n=this.findNextSlot(s);if(n){const r=n.getBoundingClientRect().left-e;if(r>2.5)return void this.scrollToLeft(o.scrollLeft+r)}const l=o.clientWidth*this.displacement;this.scrollToLeft(o.scrollLeft+l)},scrollToIndex(t){const o=this.children();if(o[t]){const e=this.$refs.container,s=o[t].getBoundingClientRect().left-e.getBoundingClientRect().left;this.scrollToLeft(e.scrollLeft+s)}},scrollToLeft(t,o="smooth"){this.$refs.container.scrollTo({left:t,behavior:o})},onScroll(){const t=this.$refs.container;t&&(this.$emit("scroll",{left:t.scrollLeft}),clearTimeout(this.debounceId),this.debounceId=setTimeout(this.onScrollDebounce,100))},onScrollDebounce(){return this.refresh(t=>{this.$emit("scroll-debounce",t)})},refresh(t){return M(()=>{const o=this.calculate();this.left=o.left,this.width=o.width,this.scrollWidth=o.scrollWidth,this.hasNext=o.hasNext,this.hasPrev=o.hasPrev,t==null||t(o)})},calculate(){const t=this.$refs.container,o=this.children()[0];return{left:t.scrollLeft,width:t.clientWidth,scrollWidth:t.scrollWidth,hasNext:t.scrollWidth>t.scrollLeft+t.clientWidth+2.5,hasPrev:function(){var e,s;if(t.scrollLeft===0)return!1;const n=t.getBoundingClientRect().left,l=(s=(e=o==null?void 0:o.getBoundingClientRect())==null?void 0:e.left)!=null?s:0;return Math.abs(n-l)>=2.5}()}}},render(){const t=e=>{const s=u("path",{d:"m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"}),n=u("path",{d:"m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"});return u("svg",{class:"v-hl-svg",viewBox:"0 0 24 24","aria-label":`horizontal scroll area button for navigation to ${e==="prev"?"previous":"next"} section`,style:{width:"40px",height:"40px",margin:"6px",padding:"6px","border-radius":"20px","box-sizing":"border-box",background:"white",color:"black",fill:"currentColor","box-shadow":"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"}},[e==="prev"?s:n])},o=e=>this.button&&(e!=="prev"||this.hasPrev)&&(e!=="next"||this.hasNext)?u("div",{key:e==="prev"?0:1,class:`v-hl-btn v-hl-btn-${e}`,onClick:e==="prev"?this.prev:this.next,role:"button",style:g(g(g({},e==="prev"?{left:0,transform:this.buttonBetween?"translateX(-50%)":"none"}:{right:0,transform:this.buttonBetween?"translateX(50%)":"none"}),{cursor:"pointer",position:"absolute",top:0,bottom:0,display:"flex","align-self":"center","z-index":1,"align-items":"center"}),this.scroll?{}:{"overflow-x":"scroll","scrollbar-width":"none","-ms-overflow-style":"none","padding-bottom":"30px","margin-bottom":"-30px","clip-path":"inset(0 0 30px 0)"})},[e==="prev"?this.$slots["btn-prev"]?this.$slots["btn-prev"]():t("prev"):this.$slots["btn-next"]?this.$slots["btn-next"]():t("next")]):B("",!0);return u("div",{class:"vue-horizontal",style:{position:"relative",display:"flex"}},[o("prev"),o("next"),u("div",{class:"v-hl-container",ref:"container",onScrollPassive:this.onScroll,style:g({display:"flex",width:"100%",margin:0,padding:0,border:"none","box-sizing":"content-box","overflow-x":"scroll","overflow-y":"hidden","scroll-snap-type":"x mandatory","-webkit-overflow-scrolling":"touch"},this.scroll?{}:{"scrollbar-width":"none","-ms-overflow-style":"none","padding-bottom":"30px","margin-bottom":"-30px","clip-path":"inset(0 0 30px 0)"})},(()=>{if(!this.$slots.default)return[];const e=n=>{n.props=n.props||{},n.props.style=n.props.style||{},n.props.style={"flex-shrink":0,"box-sizing":"border-box","min-height":"1px","scroll-snap-align":this.snap}},s=this.$slots.default();return s.forEach(n=>{if(n.el)return e(n);n.children&&Array.isArray(n.children)&&n.children.forEach(l=>{e(l)})}),s})())])}});const F={name:"Card",components:{Stars:C},props:{name:String,score:Number,image:String,id:Number,fwidth:{type:Boolean,default:!1}},methods:{onClick(){this.$emit("open-recipe")},updateRating(t){v.Inertia.patch("/recipes/"+this.id,{rating:t})}}},O={class:"p-4"},V=["src"],q={class:"font-bold text-md px-6 pt-4"};function E(t,o,e,s,n,l){const r=f("Stars");return a(),d("div",O,[i("div",{onClick:o[0]||(o[0]=c=>l.onClick()),class:I([e.fwidth?["w-full"]:["w-48"],"rounded overflow-hidden shadow-lg h-full cursor-pointer flex flex-col justify-between"])},[i("div",null,[i("img",{class:"w-full",src:e.image,alt:"Image"},null,8,V),i("div",q,p(e.name),1)]),_(r,{class:"mt-auto px-6 pb-4","initial-rating":e.score,onChangeRating:l.updateRating},null,8,["initial-rating","onChangeRating"])],2)])}const H=h(F,[["render",E]]),A={name:"HorizonSlider",components:{VueHorizontal:D,Card:H},props:{data:{type:Object,default:()=>({})},text:String},methods:{openRecipe(t){v.Inertia.get("/recipes/"+t.id)}},watch:{search(t){v.Inertia.get("/recipes",{query:t},{preserveState:!0})}}},X={class:"text-xl text-grey m-4 font-bold"};function J(t,o,e,s,n,l){const r=f("Card"),c=f("vue-horizontal");return a(),d("div",null,[i("h1",X,p(e.text),1),_(c,{class:"mx-6"},{default:z(()=>[(a(!0),d(N,null,L(e.data,m=>(a(),b(r,{name:m.name,score:m.pivot.rating,id:m.id,image:m.image_url,onOpenRecipe:$e=>l.openRecipe(m)},null,8,["name","score","id","image","onOpenRecipe"]))),256))]),_:1})])}const Re=h(A,[["render",J]]);const K={name:"GrafModal",props:{imageModal:String}},U=t=>(w("data-v-7c4a5b23"),t=t(),$(),t),Y={class:"modal z-50 py-4"},Q=["src"],Z=U(()=>i("h1",{class:"text-white mx-4 max-w-3xl"},"This plot shows all of the recipes you have rated. The ones you have rated four or more are in green and the others are in red. Your recommendation is in black. Recipes that are rated similarly by similar users are closer to each other on the plot.",-1));function ee(t,o,e,s,n,l){return a(),d("div",{class:"modal-overlay z-40 cursor-zoom-out",onClick:o[0]||(o[0]=r=>t.$emit("close-modal"))},[i("div",Y,[i("img",{class:"modal object-contain center py-4",src:e.imageModal,alt:""},null,8,Q),Z])])}const S=h(K,[["render",ee],["__scopeId","data-v-7c4a5b23"]]);const te={name:"Card",components:{GrafModal:S,Stars:C},props:{name:String,score:Number,image:String,imageModal:String,id:Number,percent:Number},methods:{onClick(){this.$emit("open-recipe")},updateRating(t){v.Inertia.patch("/recipes/"+this.id,{rating:t})}},data(){return{showModal:!1}}},oe=t=>(w("data-v-0bcd0861"),t=t(),$(),t),ne={class:"p-4"},se={class:"flex flex-row justify-between w-full rounded overflow-hidden shadow-lg h-full"},ie=["src"],le={class:"font-bold text-md px-6 pt-4"},re=oe(()=>i("hr",null,null,-1)),ae=["src"],ce={class:"font-semibold text-md text-center mb-4"};function de(t,o,e,s,n,l){const r=f("GrafModal");return a(),d("div",ne,[i("div",se,[i("div",{onClick:o[0]||(o[0]=c=>l.onClick()),class:"cursor-pointer flex flex-col justify-between mb-4 w-1/2"},[i("div",null,[i("img",{class:"w-full",src:e.image,alt:"Image"},null,8,ie),i("div",le,p(e.name),1)])]),re,i("div",{onClick:o[1]||(o[1]=c=>n.showModal=!0),class:"cursor-zoom-in w-1/2"},[i("img",{class:"w-full",src:e.imageModal,alt:"Recommendation"},null,8,ae),i("div",ce,p(e.percent)+"% confidence",1)]),x(_(r,{imageModal:e.imageModal,onCloseModal:o[2]||(o[2]=c=>n.showModal=!1)},null,8,["imageModal"]),[[y,n.showModal]])])])}const he=h(te,[["render",de],["__scopeId","data-v-0bcd0861"]]),ue={name:"GrafiekCard",components:{GrafModal:S},props:{image:String,percent:Number},methods:{onClick(){console.log("click grafiek")}},data(){return{showModal:!1}}},fe={class:"p-4 h-full"},me=["src"],pe={class:"px-6 py-4"},ge=i("div",{class:"font-bold text-xl"},"Confidence:",-1),ve={class:"font-bold text-xl"};function _e(t,o,e,s,n,l){const r=f("GrafModal");return a(),d("div",fe,[i("div",{onClick:o[0]||(o[0]=c=>n.showModal=!0),class:"w-40 rounded overflow-hidden shadow-lg h-full cursor-zoom-in"},[i("img",{class:"w-full",src:e.image,alt:"Recommendation"},null,8,me),i("div",pe,[ge,i("div",ve,p(e.percent)+"%",1)])]),x(_(r,{imageModal:e.image,onCloseModal:o[1]||(o[1]=c=>n.showModal=!1)},null,8,["imageModal"]),[[y,n.showModal]])])}const xe=h(ue,[["render",_e]]),be={name:"CardWithInfo",components:{CardForRec:he,GrafiekCard:xe},props:{score:Number,name:String,imageGraf:String,imageRecipe:String,id:Number,perc:Number},methods:{onClick(){this.$emit("open-recipe")}}};function we(t,o,e,s,n,l){const r=f("CardForRec");return a(),b(r,{image:e.imageRecipe,name:e.name,score:e.score,id:e.id,"image-modal":e.imageGraf,onOpenRecipe:l.onClick,percent:e.perc},null,8,["image","name","score","id","image-modal","onOpenRecipe","percent"])}const Me=h(be,[["render",we]]);export{Me as C,ke as S,H as a,Re as b,D as i};