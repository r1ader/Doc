var oe=Object.defineProperty;var D=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var Y=(t,e,r)=>e in t?oe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))ae.call(e,r)&&Y(t,r,e[r]);if(D)for(var r of D(e))ce.call(e,r)&&Y(t,r,e[r]);return t};import{o as h,c as E,a as d,n as le,b as ue,t as pe,l as L,r as x,F as C,d as M,u as _,e as fe,p as ee,f as te,g as R,h as re,i as A,j as de,k as he,m as ge}from"./vendor.118eb75c.js";const _e=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};_e();function be(t){return typeof t=="object"&&t!==null}const me=Object.prototype.toString;function Z(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":me.call(t)}function ye(t){return typeof t=="number"||be(t)&&Z(t)=="[object Number]"}const ve=Array.isArray;function Se(t){const e=typeof t;return e==="string"||e==="object"&&t!=null&&!Array.isArray(t)&&Z(t)=="[object String]"}const q=0/0,we=/^\s+|\s+$/g,xe=/^[-+]0x[0-9a-f]+$/i,Ee=/^0b[01]+$/i,$e=/^0o[0-7]+$/i,Oe=parseInt;function K(t){const e=typeof t;return t!=null&&(e==="object"||e==="function")}function ke(t){const e=typeof t;return e=="symbol"||e==="object"&&t!=null&&Z(t)=="[object Symbol]"}function Ae(t){if(typeof t=="number")return t;if(ke(t))return q;if(K(t)){const r=typeof t.valueOf=="function"?t.valueOf():t;t=K(r)?`${r}`:r}if(typeof t!="string")return t===0?t:+t;t=t.replace(we,"");const e=Ee.test(t);return e||$e.test(t)?Oe(t.slice(2),e?2:8):xe.test(t)?q:+t}function Ce(t){return typeof t=="function"}function Re(t){let e=0;const r=[];if(t==null)return r;for(const n of t)n&&(r[e++]=n);return r}var g={isNumber:ye,isArray:ve,isString:Se,toNumber:Ae,isFunction:Ce,compact:Re};function W(t,e){e=e||"";const n=new RegExp(`^(-|\\d+|\\.)+[${e}]*$`,"gi").exec(t);if(!!n)return parseFloat(n[0].replace("px",""))}function j(t){console.warn(`ract.js warning: ${t}`)}function Ie(t){t=t||"",t=t.toString().replace(/(\[(?:-?(?:\d+\.*)*\d+?)?~-?(?:\d+\.*)*\d+?])/g,"0");let e=/^-?(?:\d+\.*)*\d+?(?:px|deg|%|turn)?$/g;return e.test(t)||(e=/^rgba*\((?:\d+\.*)*\d+?(?:,\s?(?:\d+\.*)*\d+?){2,3}\)$/g,e.test(t))?!0:(e=/^(?:(?:blur|scale|translate|rotate|perspective|skew|matrix)[XYZ]?\(-?(?:\d+\.*)*\d+?(?:px|deg|%|turn)?(?:,\s?-?(?:\d+\.*)*\d+?(?:px|deg|%|turn)?){0,2}\)\s*)+$/g,e.test(t))}function Le(t,e){if((t+e).indexOf("a")===-1){const[r,n,s]=t.replace("rgb(","").replace(")","").replace(/\s/g,"").split(","),[i,c,o]=e.replace("rgb(","").replace(")","").replace(/\s/g,"").split(",");return`rgb([${r}~${i}],[${n}~${c}],[${s}~${o}])`}}function Me(t){return Object.keys(t).filter(e=>t[e]).map(e=>`${e} : ${t[e].toString()}`).join(`
`)}function Ne(){return Math.floor(Math.random()*1e8).toString()}const ze=(()=>{function r(a,l){return 1-3*l+3*a}function n(a,l){return 3*l-6*a}function s(a){return 3*a}function i(a,l,p){return((r(l,p)*a+n(l,p))*a+s(l))*a}function c(a,l,p){return 3*r(l,p)*a*a+2*n(l,p)*a+s(l)}function o(a,l,p,S,b){let w,f,O=0;do f=l+(p-l)/2,w=i(f,S,b)-a,w>0?p=f:l=f;while(Math.abs(w)>1e-7&&++O<10);return f}function v(a,l,p,S){for(let b=0;b<4;++b){const w=c(l,p,S);if(w===0)return l;l-=(i(l,p,S)-a)/w}return l}function u(a,l,p,S){if(!(0<=a&&a<=1&&0<=p&&p<=1))return;let b=new Float32Array(11);if(a!==l||p!==S)for(let f=0;f<11;++f)b[f]=i(f*.1,a,p);function w(f){let O=0,$=1;const se=11-1;for(;$!==se&&b[$]<=f;++$)O+=.1;--$;const ie=(f-b[$])/(b[$+1]-b[$]),T=O+ie*.1,V=c(T,a,p);return V>=.001?v(f,T,a,p):V===0?T:o(f,O,O+.1,a,p)}return f=>a===l&&p===S||f===0||f===1?f:i(w(f),l,S)}return u})();function Q(t,e,r){return Math.min(Math.max(t,e),r)}const J=(()=>{const t={linear:()=>n=>n},e={Sine:()=>n=>1-Math.cos(n*Math.PI/2),Circ:()=>n=>1-Math.sqrt(1-n*n),Back:()=>n=>n*n*(3*n-2),Bounce:()=>n=>{let s,i=4;for(;n<((s=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((s*3-2)/22-n,2)},Elastic:(n=1,s=.5)=>{const i=Q(n,1,10),c=Q(s,.1,2);return o=>o===0||o===1?o:-i*Math.pow(2,10*(o-1))*Math.sin((o-1-c/(Math.PI*2)*Math.asin(1/i))*(Math.PI*2)/c)}};return["Quad","Cubic","Quart","Quint","Expo"].forEach((n,s)=>{e[n]=()=>i=>Math.pow(i,s+2)}),Object.keys(e).forEach(n=>{const s=e[n];t["easeIn"+n]=s,t["easeOut"+n]=(i,c)=>o=>1-s(i,c)(1-o),t["easeInOut"+n]=(i,c)=>o=>o<.5?s(i,c)(o*2)/2:1-s(i,c)(o*-2+2)/2,t["easeOutIn"+n]=(i,c)=>o=>o<.5?(1-s(i,c)(1-o*2))/2:(s(i,c)(o*2-1)+1)/2}),t})(),G={fnc:t=>typeof t=="function"};function je(t){const e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map(r=>parseFloat(r)):[]}function F(t,e){return t.apply(null,e)}function Pe(t,e){if(G.fnc(t))return t;const r=t.split("(")[0],n=J[r],s=je(t);switch(r){case"cubic-bezier":return F(ze,s);default:return G.fnc(n)?F(n,s):(j(`"${r}" is unsupported, using Linear`),F(J.linear,s))}}function N(t,e,r){return r=r||"Z",{transform:`rotate${r}([0~${t?"":"-"}${e}]deg)`}}function Te(){let t=[30,45,60,90,180,360];const e={};return t.map(r=>{e[`ROTATE_${r}`]=N(!0,r),e[`ROTATE_${r}_REVERSE`]=N(!1,r)}),t=[90,180],t.map(r=>{e[`ROTATE_X_${r}`]=N(!0,r,"X"),e[`ROTATE_Y_${r}`]=N(!0,r,"Y")}),e}const m={OUT:{OPACITY:{opacity:"[1~0]"},BLUR:{filter:"blur([0~30]px)",opacity:"[1~1]",ease:"linear",callback:[{opacity:"[1~0]",ease:"linear",duration:300}],duration:300},SCROLL_UP:{transform:"translate(0, [0~-200]px) perspective(500px) rotateX([0~90]deg)",opacity:"[1~0]",ease:"cubic-bezier(.69,.05,.2,.94)"},SCROLL_DOWN:{transform:"translate(0, [0~200]px) perspective(500px) rotateX([0~-90]deg)",opacity:"[1~0]",ease:"cubic-bezier(.69,.05,.2,.94)"}},IN:{OPACITY:{opacity:"[0~1]",ease:"linear"},BLUR:{opacity:"[1~0]",filter:"blur([30~30]px)",ease:"linear",reverse:!0,callback:[{filter:"blur([0~30]px)",reverse:!0,ease:"linear",duration:300}],duration:300},SCROLL_DOWN:{transform:"translate(0, [-200~0]px) perspective(500px) rotateX([90~0]deg)",opacity:"[0~1]",ease:"cubic-bezier(.69,.05,.2,.94)"},SCROLL_UP:{transform:"translate(0, [200~0]px) perspective(500px) rotateX([-90~0]deg)",opacity:"[0~1]",ease:"cubic-bezier(.69,.05,.2,.94)"}},EMPHASIZE:{SHAKE_X:{duration:0,callback:[{transform:"translateX([0~5]%)",ease:"cubic-bezier(.69,.05,.98,.34)",duration:25},{transform:"translateX([5~-5]%)",duration:50,ease:"cubic-bezier(.69,.05,.98,.34)",loop:"4 alternate"},{transform:"translateX([-5~0]%)",ease:"cubic-bezier(.69,.05,.98,.34)",duration:25}]},SHAKE_Y:{duration:0,callback:[{transform:"translateY([0~5]%)",ease:"cubic-bezier(.69,.05,.98,.34)",duration:25},{transform:"translateY([5~-5]%)",duration:50,ease:"cubic-bezier(.69,.05,.98,.34)",loop:"4 alternate"},{transform:"translateY([-5~0]%)",ease:"cubic-bezier(.69,.05,.98,.34)",duration:25}]},SHAKE_ROTATE:{duration:0,callback:[{transform:"rotateZ([0~10]deg)",ease:"cubic-bezier(.69,.05,.98,.34)",duration:25},{transform:"rotateZ([10~-10]deg)",duration:50,ease:"cubic-bezier(.69,.05,.98,.34)",loop:"4 alternate"},{transform:"rotateZ([-10~0]deg)",ease:"cubic-bezier(.69,.05,.98,.34)",duration:25}]},RADAR:{padding:"[0~30]px",opacity:"[1~0]",duration:2e3,target:"copy"},BORDER_RADAR:{border:"[2~2]px solid",backgroundColor:"rgba(0, 255, 255 , [0~0])",padding:"[0~30]px",opacity:"[1~0]",duration:2e3,target:"copy"},LARGER:{transform:"scale([1~1.2])",loop:"1 alternate",target:"wrap"},SMALLER:{transform:"scale([1~0.8])",loop:"1 alternate",target:"wrap"},BORDER_STROKE:{backgroundImage:`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' rx='10' ry='10' fill='none' stroke='white' stroke-width='4' stroke-dasharray='1000%2c 1000' stroke-dashoffset='[-1000~0]' /%3e%3c/svg%3e")`,duration:2e3,ease:"easeInOutExpo",callback:[{backgroundImage:`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' rx='10' ry='10' fill='none' stroke='rgba(255,255,255,[1~0])' stroke-width='4' stroke-dasharray='1000%2c 1000' stroke-dashoffset='0' /%3e%3c/svg%3e")`,ease:"linear",duration:500}]}},NORMAL:k({LARGER:{transform:"scale([1~1.2])"},SMALLER:{transform:"scale([1~0.8])"}},Te()),PHYSICS:{},EFFECTS:{}},ne=(t,e)=>{t.name=e,Object.keys(t).forEach(r=>{typeof t[r]=="object"&&ne(t[r],e+"."+r)})};ne(m,"acts");const X={px_props:["width","height","top","left","right","right","bottom","padding","margin","borderRadius"],number_props:["zIndex","opacity"],color_props:["borderColor","backgroundColor"]},Fe=["name","callback","reverse","duration","delay","ease","parallel","loop","loop_mode","target"];class z{constructor(e){Object.keys(e).forEach(r=>{this[r]=e[r]}),this.callback=e.callback,this.duration=g.isNumber(e.duration)?e.duration:1e3,this.ease=e.ease||"easeOutExpo",this.delay=e.delay||0,this.loop=e.loop,this.loop_mode=e.loop_mode,this.name=e.name,this.parallel=e.parallel,this.reverse=e.reverse||!1,this.target=e.target||"self"}update(e){if(Object.keys(this).filter(r=>Fe.indexOf(r)===-1).forEach(r=>{if(!Ie(this[r]))return j(`syntax error ${r} : ${this[r]}`);Object.keys(X).forEach(n=>{if(X[n].indexOf(r)>-1){if(!e)return;const s=getComputedStyle(e);if(n==="color_props"){this[r]=Le(s[r],this[r]);return}const i={px_props:"px",number_props:""}[n]||"",c=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=e.style[r]||s.getPropertyValue(c)||"0",v=W(o,i);if(/\[(-|\d|\.)*?~(-|\d|\.)+?\]/.test(this[r])){this[r]=this[r].replace(/([\[])(\~)/g,`[${v}~`);return}const u=W(this[r],i);if(!g.isNumber(u))return j(`Unrecognized Style Value "${this[r]}"`);this[r]=`[${v}~${u}]${i}`}})}),g.isString(this.loop)){const{loop:r}=this;if(r.split(" ").length===2){const[n,s]=r.split(" ");this.loop=parseInt(n),this.loop_mode=s}}}get plan_duration(){let e=0;return g.isNumber(this.delay)&&(e+=this.delay),g.isNumber(this.duration)&&(e+=this.duration),e}toString(){return Me(this)}}class Be{constructor(e,r){this.r_id=e,this.ref=r,this.orignal_ref=r,this.busy=!1,this.busy_with=null,this.schedule=[],this.ease_func=n=>n,this.default={},this.render_process=null}run(){if(!this.beforeRender())return;const e=this.busy_with;e.delay>0?setTimeout(()=>{this.render_process=requestAnimationFrame(()=>this.render(0))},e.delay):this.render_process=requestAnimationFrame(()=>this.render(0))}beforeRender(){if(this.busy)return!1;const e=this.schedule.shift();return e?(e.target==="wrap"&&this.ref===this.orignal_ref&&this.createWrap(),e.target==="copy"&&this.createCopy(),e.update(this.ref),this.busy_with=e,this.busy=!0,this.ease_func=Pe(e.ease),!0):!1}render(e){const r=this.busy_with;if(!r)return;const n=this.ease_func(Math.min(e*16/r.duration,1));Object.keys(r).forEach(s=>{const i=/\[(-|\d|\.)+?~(-|\d||\.)+?\]/g;if(!g.isString(r[s]))return;const c=r[s].match(i);if(!g.isArray(c)||!c.length)return;let o=r[s].replace(i,"{}");c.map(u=>{let[a,l]=u.replace("[","").replace("]","").split("~").map(p=>g.toNumber(p));return r.reverse&&([a,l]=[l,a]),a+(l-a)*n}).forEach(u=>{o=o.replace("{}",Math.round(u*1e3)/1e3)}),this.ref.style[s]=o}),g.isFunction(r.parallel)&&r.parallel(n),e*16<r.duration?requestAnimationFrame(()=>this.render(e+1)):this.rendered()}rendered(){const e=this.busy_with;e.callback&&this.createCallback(),e.loop&&this.createLoop(),e.target==="wrap"&&!e.loop&&this.cleanWrap(),e.copy&&this.cleanCopy(),this.busy=!1,this.busy_with=null,this.schedule.length&&this.run()}createCallback(){const e=this.busy_with;g.isFunction(e.callback)&&e.callback(this),g.isArray(e.callback)&&e.callback.length&&(this.schedule=e.callback.map(r=>new z(r)).concat(this.schedule))}createLoop(){const e=new z(k({},this.busy_with));g.isNumber(e.loop)&&(e.loop=e.loop-1),(e.loop==="alternate"||e.loop_mode==="alternate")&&(e.reverse=!e.reverse),e.delay=0,this.schedule.unshift(e)}createWrap(){const e=this.ref.parentElement;e.removeChild(this.ref);const r=document.createElement("div");r.appendChild(this.ref),e.appendChild(r),this.ref=r}createCopy(){const e=this.ref.parentElement,r=this.ref.cloneNode(!0);r.style.position="absolute",e.appendChild(r),this.ref=r}cleanWrap(){const e=this.ref.parentElement;e.removeChild(this.ref),e.appendChild(this.orignal_ref),this.ref=this.orignal_ref}cleanCopy(){const e=this.ref.parentElement;e.removeChild(this.ref),e.appendChild(this.orignal_ref),this.ref=this.orignal_ref}cancel(){return this.render_process&&(cancelAnimationFrame(this.render_process),this.render_process=void 0),this.busy=!1,this.busy_with=null,this.schedule=[],this}act(e){return this.schedule.push(new z(Object.assign(k({},this.default),e))),this.busy||setTimeout(()=>{this.run()},16),this}then(e){return this.schedule.push(new z({duration:0,callback:e})),this}}const B=new Map,Ue=function(t){if(t.r_id)return j(`"${t.tagName}.${t.className}" is already registered`),t;if(B.has(t))return B.get(t);const e=new Proxy(new Be(Ne(),t),{get(r,n){return n in r?r[n]:r.ref[n]},set(r,n,s){return n in r?Reflect.set(r,n,s):Reflect.set(r.ref,n,s)}});return B.set(t,e),e},I=function(){let t=[];for(let e in arguments)t.push(Ue(arguments[e]));return t.length===1?t[0]:new Proxy(t,{get:function(e,r){return e.every(n=>g.isFunction(n[r]))?function(){const n=arguments;return e.forEach(function(s){s[r](...n)}),this}:new Map(e.map(n=>[n,n[r]]))}})};var H=(t,e)=>{const r=t.__vccOpts||t;for(const[n,s]of e)r[n]=s;return r};const Ze={data:function(){return{active:!1,queue:[]}},props:{config:null,shape:{default:"rectangle",type:String},init:null},methods:{begin(){if(this.config){const t=k(k({},this.$refs.target.style),this.init);I(this.$refs.playing).cancel().act({transform:"scale([0~1])"}),I(this.$refs.target).cancel().act(this.config).then(()=>{this.$refs.target.style=t,I(this.$refs.playing).cancel().act({transform:"scale([1~0])"})})}}},watch:{active:function(t){t&&!I(this.$refs.target).busy&&this.begin()}},mounted(){const t=this;this.$refs.court.addEventListener("mouseenter",function(){t.active=!0}),this.$refs.court.addEventListener("touchstart",function(){t.active=!0}),this.$refs.court.addEventListener("mouseleave",function(){t.active=!1}),this.$refs.court.addEventListener("touchend",function(){t.active=!1})}},He={ref:"court",class:"court"},Ve={class:"name"},De={class:"playing",ref:"playing"};function Ye(t,e,r,n,s,i){return h(),E("div",He,[d("div",{style:le(r.init),class:ue(r.shape),ref:"target"},null,6),d("div",Ve,pe(r.config.name.split(".").reverse()[0]),1),d("div",De,null,512)],512)}var y=H(Ze,[["render",Ye],["__scopeId","data-v-dc2c0652"]]);const P=t=>(ee("data-v-285e73d0"),t=t(),te(),t),qe=fe('<div class="header" data-v-285e73d0><span style="color:#6752FF;" data-v-285e73d0><span style="font-size:30px;" data-v-285e73d0>r</span>acts.js</span><span class="page_title" data-v-285e73d0>acts: Pre-define Animations <span style="color:#8d8d8d;" data-v-285e73d0>( Updating )</span></span><span data-v-285e73d0></span></div>',1),Ke={class:"playground"},We=P(()=>d("div",{class:"title"}," acts.IN ",-1)),Qe=P(()=>d("div",{class:"title"}," acts.OUT ",-1)),Je=P(()=>d("div",{class:"title"}," acts.EMPHASIZE ",-1)),Ge=P(()=>d("div",{class:"title"}," acts.NORMAL ",-1)),Xe={setup(t){const e=Object.keys(m.IN).map(o=>m.IN[o]).filter(o=>L.exports.isObject(o)),r=Object.keys(m.OUT).map(o=>m.OUT[o]).filter(o=>L.exports.isObject(o)),n=Object.keys(m.EMPHASIZE).map(o=>m.EMPHASIZE[o]).filter(o=>L.exports.isObject(o)),s=Object.keys(m.NORMAL).map(o=>m.NORMAL[o]).filter(o=>L.exports.isObject(o)),i=x(),c=function(o,v){const{pageX:u,pageY:a}=v;navigator.clipboard.writeText(o),I(i.value).cancel().act({top:`[${a-50}~${a-50}]px`,left:`[${u-50}~${u-50}]px`,opacity:"[0~1]",transform:"translateY([0~-30]px)"}).act({opacity:"[1~0]"})};return(o,v)=>(h(),E(C,null,[qe,d("div",Ke,[We,(h(!0),E(C,null,M(_(e),u=>(h(),R(y,{init:{opacity:"1"},config:u,onClick:a=>c(u.name,a)},null,8,["config","onClick"]))),256)),Qe,(h(!0),E(C,null,M(_(r),u=>(h(),R(y,{init:{opacity:"1"},config:u,onClick:a=>c(u.name,a)},null,8,["config","onClick"]))),256)),Je,(h(!0),E(C,null,M(_(n),u=>(h(),R(y,{init:{opacity:"1"},config:u,onClick:a=>c(u.name,a)},null,8,["config","onClick"]))),256)),Ge,(h(!0),E(C,null,M(_(s),u=>(h(),R(y,{init:{opacity:"1"},config:u,onClick:a=>c(u.name,a)},null,8,["config","onClick"]))),256))]),d("div",{ref_key:"copy",ref:i,class:"copy"}," Copied! ",512)],64))}};var U=H(Xe,[["__scopeId","data-v-285e73d0"]]);const et=t=>(ee("data-v-9437f50a"),t=t(),te(),t),tt=et(()=>d("div",{class:"header"},[d("span",{style:{color:"#6752FF"}},"ract.js"),d("span",null,"Playground"),d("span",{style:{opacity:"0"}},"ract.js")],-1)),rt={class:"playground"},nt={ref:"copy",class:"copy"},st={setup(t){const e=m.EMPHASIZE.BORDER_STROKE,r=x(),n=x(),s=x(),i=x(),c=x(),o=x();return re(()=>{r.value.begin(),n.value.begin(),s.value.begin(),i.value.begin(),c.value.begin(),o.value.begin()}),(v,u)=>(h(),E(C,null,[tt,d("div",rt,[A(y,{ref_key:"el",ref:r,config:_(e)},null,8,["config"]),A(y,{init:{width:"200px"},ref_key:"el2",ref:n,config:_(e)},null,8,["config"]),A(y,{init:{height:"200px"},ref_key:"el3",ref:s,config:_(e)},null,8,["config"]),d("div",null,[A(y,{init:{width:"200px",height:"200px"},ref_key:"el4",ref:i,config:_(e)},null,8,["config"]),A(y,{ref_key:"el5",ref:c,init:{borderRadius:"50%"},config:_(e)},null,8,["config"]),A(y,{ref_key:"el6",ref:o,init:{width:"200px",height:"200px",borderRadius:"50%"},config:_(e)},null,8,["config"])])]),d("div",nt," Copied! ",512)],64))}};var it=H(st,[["__scopeId","data-v-9437f50a"]]);const ot={setup(t){const e={"/":U,playground:it,animations:U},r=x(window.location.hash),n=de(()=>e[r.value.slice(1)||"/"]||U);return re(()=>{window.addEventListener("hashchange",()=>{r.value=window.location.hash})}),(s,i)=>(h(),E("div",null,[(h(),R(he(_(n))))]))}},at=ge(ot);at.mount("#app");