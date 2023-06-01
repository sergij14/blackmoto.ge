import{r as u,j as h,a as r,u as C,b as _,L as I,O as U,Q as Y}from"./index-edeeb753.js";import{o as $,d as W,c as q,a as F,s as Q,b as X,e as N}from"./dbMethods-96880e7f.js";import{B as G}from"./index-62b55843.js";import{u as L}from"./index-6b3c5810.js";function w(s,e,n){var o,a,c,f,l;e==null&&(e=100);function t(){var m=Date.now()-f;m<e&&m>=0?o=setTimeout(t,e-m):(o=null,n||(l=s.apply(c,a),c=a=null))}var d=function(){c=this,a=arguments,f=Date.now();var m=n&&!o;return o||(o=setTimeout(t,e)),m&&(l=s.apply(c,a),c=a=null),l};return d.clear=function(){o&&(clearTimeout(o),o=null)},d.flush=function(){o&&(l=s.apply(c,a),c=a=null,clearTimeout(o),o=null)},d}w.debounce=w;var y=w;function J(s){let{debounce:e,scroll:n,polyfill:o,offsetSize:a}=s===void 0?{debounce:0,scroll:!1,offsetSize:!1}:s;const c=o||(typeof window>"u"?class{}:window.ResizeObserver);if(!c)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[f,l]=u.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),t=u.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:f}),d=e?typeof e=="number"?e:e.scroll:null,m=e?typeof e=="number"?e:e.resize:null,p=u.useRef(!1);u.useEffect(()=>(p.current=!0,()=>void(p.current=!1)));const[S,x,v]=u.useMemo(()=>{const i=()=>{if(!t.current.element)return;const{left:B,top:T,width:k,height:M,bottom:j,right:D,x:A,y:H}=t.current.element.getBoundingClientRect(),b={left:B,top:T,width:k,height:M,bottom:j,right:D,x:A,y:H};t.current.element instanceof HTMLElement&&a&&(b.height=t.current.element.offsetHeight,b.width=t.current.element.offsetWidth),Object.freeze(b),p.current&&!Z(t.current.lastBounds,b)&&l(t.current.lastBounds=b)};return[i,m?y(i,m):i,d?y(i,d):i]},[l,a,d,m]);function g(){t.current.scrollContainers&&(t.current.scrollContainers.forEach(i=>i.removeEventListener("scroll",v,!0)),t.current.scrollContainers=null),t.current.resizeObserver&&(t.current.resizeObserver.disconnect(),t.current.resizeObserver=null)}function E(){t.current.element&&(t.current.resizeObserver=new c(v),t.current.resizeObserver.observe(t.current.element),n&&t.current.scrollContainers&&t.current.scrollContainers.forEach(i=>i.addEventListener("scroll",v,{capture:!0,passive:!0})))}const R=i=>{!i||i===t.current.element||(g(),t.current.element=i,t.current.scrollContainers=O(i),E())};return P(v,!!n),K(x),u.useEffect(()=>{g(),E()},[n,v,x]),u.useEffect(()=>g,[]),[R,f,S]}function K(s){u.useEffect(()=>{const e=s;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[s])}function P(s,e){u.useEffect(()=>{if(e){const n=s;return window.addEventListener("scroll",n,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",n,!0)}},[s,e])}function O(s){const e=[];if(!s||s===document.body)return e;const{overflow:n,overflowX:o,overflowY:a}=window.getComputedStyle(s);return[n,o,a].some(c=>c==="auto"||c==="scroll")&&e.push(s),[...e,...O(s.parentElement)]}const V=["x","y","top","bottom","left","right","width","height"],Z=(s,e)=>V.every(n=>s[n]===e[n]),z=({navigate:s})=>{const{t:e}=L();return h("div",{className:"flex gap-2 flex-col md:flex-row md:items-start",children:[r("button",{className:"nav-btn",children:e("nav.menu_1")}),r("button",{className:"nav-btn",children:e("nav.menu_2")}),r("button",{className:"nav-btn",children:e("nav.menu_3").split(" ")[0]}),r("button",{className:"nav-btn",children:e("nav.menu_4")})]})},ee=[{label:"RU",code:"ru"}],te=()=>{const{setLang:s,lang:e}=C();return r("div",{className:"fixed bottom-0 m-8 left-0",children:r("div",{className:"flex gap-2 items-center",children:ee.map(({code:n,label:o})=>h("button",{onClick:()=>s(n),className:`nav-btn px-3 py-2 gap-2 bg-opacity-100 ${n===e?"opacity-100":"opacity-70"}`,children:[r("img",{className:"w-5",src:`/assets/${n}.svg`}),o]},n))})})},se=()=>{const s=_(),[e,n]=u.useState(!1),[o,a]=J(),[c,f]=u.useState("static"),l=t=>{window.scrollY>=a.height?f("fixed"):f("static")};return u.useEffect(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}),[a.height]),L(),h("header",{ref:o,className:`${c} top-0 w-full bg-black bg-opacity-90 z-50`,children:[r(te,{}),r("div",{className:"max-w-screen-xl px-8 mx-auto",children:h("div",{className:"flex flex-col gap-4 items-center py-8 sm:flex-row sm:justify-between relative",children:[r("h2",{className:"text-3xl",children:r(I,{to:"/",children:"#Moto Rent"})}),r("div",{className:"md:hidden",children:r("button",{className:"nav-btn",onClick:()=>n(!e),children:r(G,{})})}),r("div",{className:"hidden md:block",children:r(z,{navigate:s})}),e&&r("div",{className:"absolute bg-black left-1/2 sm:left-[initial] sm:right-0 sm:transform-none transform -translate-x-1/2 p-4 md:hidden",style:{top:a.height},children:r(z,{navigate:s})})]})})]})},ne="sergi.jajanidze@gmail.com,mixo.ushba@gmail.com".split(","),ie=()=>{const{setUser:s,setItems:e,lang:n}=C();return u.useEffect(()=>{const a=$(N,l=>{const t=l==null?void 0:l.email;if(t&&!ne.includes(t)){Q(N),Y.error("You have no access");return}l?(s(l),X(l)):s(void 0)}),c=W(q("motos")),f=F(c,l=>{const t=[];l.forEach(d=>t.push(d.data())),e(t)});return()=>{a(),f()}},[]),h("div",{className:`app-wrapper ${n==="ge"?"font-ge":"font-ru"}`,children:[r(se,{}),h("div",{className:"container",children:[r("img",{className:"app-bg",alt:"",src:"/assets/hero.svg"}),r("div",{className:"mt-8",children:r(U,{})}),r("footer",{className:"mt-auto pb-8",children:h("div",{className:"footer",children:["© ",new Date().getFullYear(),", All rights reserved"]})})]})]})};export{ie as default};
