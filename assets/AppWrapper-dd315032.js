import{r as f,u as x,j as s,F,a as p,b as O,L as U,O as Y,Q as $}from"./index-78977cf4.js";import{o as q,d as W,c as M,a as G,s as P,b as Q,e as z}from"./dbMethods-1d284344.js";import{B as X,L as J}from"./index-912e971b.js";import{u as y}from"./index-eb753157.js";function C(n,e,c){var r,o,l,m,i;e==null&&(e=100);function t(){var a=Date.now()-m;a<e&&a>=0?r=setTimeout(t,e-a):(r=null,c||(i=n.apply(l,o),l=o=null))}var u=function(){l=this,o=arguments,m=Date.now();var a=c&&!r;return r||(r=setTimeout(t,e)),a&&(i=n.apply(l,o),l=o=null),i};return u.clear=function(){r&&(clearTimeout(r),r=null)},u.flush=function(){r&&(i=n.apply(l,o),l=o=null,clearTimeout(r),r=null)},u}C.debounce=C;var L=C;function K(n){let{debounce:e,scroll:c,polyfill:r,offsetSize:o}=n===void 0?{debounce:0,scroll:!1,offsetSize:!1}:n;const l=r||(typeof window>"u"?class{}:window.ResizeObserver);if(!l)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[m,i]=f.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),t=f.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:m}),u=e?typeof e=="number"?e:e.scroll:null,a=e?typeof e=="number"?e:e.resize:null,h=f.useRef(!1);f.useEffect(()=>(h.current=!0,()=>void(h.current=!1)));const[b,v,g]=f.useMemo(()=>{const d=()=>{if(!t.current.element)return;const{left:T,top:B,width:H,height:j,bottom:D,right:I,x:A,y:_}=t.current.element.getBoundingClientRect(),E={left:T,top:B,width:H,height:j,bottom:D,right:I,x:A,y:_};t.current.element instanceof HTMLElement&&o&&(E.height=t.current.element.offsetHeight,E.width=t.current.element.offsetWidth),Object.freeze(E),h.current&&!te(t.current.lastBounds,E)&&i(t.current.lastBounds=E)};return[d,a?L(d,a):d,u?L(d,u):d]},[i,o,u,a]);function w(){t.current.scrollContainers&&(t.current.scrollContainers.forEach(d=>d.removeEventListener("scroll",g,!0)),t.current.scrollContainers=null),t.current.resizeObserver&&(t.current.resizeObserver.disconnect(),t.current.resizeObserver=null)}function N(){t.current.element&&(t.current.resizeObserver=new l(g),t.current.resizeObserver.observe(t.current.element),c&&t.current.scrollContainers&&t.current.scrollContainers.forEach(d=>d.addEventListener("scroll",g,{capture:!0,passive:!0})))}const R=d=>{!d||d===t.current.element||(w(),t.current.element=d,t.current.scrollContainers=S(d),N())};return Z(g,!!c),V(v),f.useEffect(()=>{w(),N()},[c,g,v]),f.useEffect(()=>w,[]),[R,m,b]}function V(n){f.useEffect(()=>{const e=n;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[n])}function Z(n,e){f.useEffect(()=>{if(e){const c=n;return window.addEventListener("scroll",c,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",c,!0)}},[n,e])}function S(n){const e=[];if(!n||n===document.body)return e;const{overflow:c,overflowX:r,overflowY:o}=window.getComputedStyle(n);return[c,r,o].some(l=>l==="auto"||l==="scroll")&&e.push(n),[...e,...S(n.parentElement)]}const ee=["x","y","top","bottom","left","right","width","height"],te=(n,e)=>ee.every(c=>n[c]===e[c]),ne=[{label:"RU",code:"ru"}],re=({btnCn:n})=>{const{setLang:e,lang:c}=x();return s(F,{children:ne.map(({code:r,label:o})=>p("button",{onClick:()=>e(r),className:n,children:[s("img",{className:"w-5",src:`/assets/${r}.svg`}),o]},r))})},k=({navigate:n,isBurgerMenu:e})=>{const[c,r]=f.useState(!1),{t:o}=y(),{headerHeight:l}=x(),m=f.useRef(null),i=h=>{const b=document.getElementById("section_"+h);if(b&&l){const v=b.offsetTop;window.scrollTo({top:v-(l+120),behavior:"smooth"})}b||n("/")},t=h=>{var w;const b=(w=m.current)==null?void 0:w.contains(h.target),v=document.querySelector('[data-menu-trigger="true"]'),g=v==null?void 0:v.contains(h.target);g&&(r==null||r(!0)),!g&&!b&&(r==null||r(!1))};f.useEffect(()=>(e&&document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}),[e]);const u=e?{display:c?"flex":"none",padding:"1rem"}:{},a=e?"btn-secondary":"btn";return s("div",{ref:m,className:`vertical-nav-inner ${!e&&"bg-transparent"}`,style:{...u},children:p("div",{className:"flex gap-4 flex-col lg:flex-row lg:items-start",children:[s("button",{onClick:()=>i("about"),className:a,children:o("nav.menu_1")}),s("button",{onClick:()=>i("motopark"),className:a,children:o("nav.menu_2")}),s("button",{onClick:()=>i("terms"),className:a,children:o("nav.menu_3").split(" ")[0]}),s("button",{onClick:()=>i("contact"),className:a,children:o("nav.menu_4")}),s(re,{btnCn:a})]})})},se=()=>{const n=O(),{setHeaderHeight:e}=x(),[c,r]=K(),[o,l]=f.useState("static"),m=i=>{window.scrollY>=r.height?l("sm:fixed"):l("static")};return f.useEffect(()=>(e(r.height),window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}),[r.height]),y(),s("header",{ref:c,className:`${o} top-0 w-full shadow-lg z-50 border-b-2 border-back-darker`,style:{background:"url(../assets/back.jpg)"},children:s("div",{className:"max-w-screen-xl px-8 mx-auto",children:p("div",{className:"flex flex-col gap-6 flex-wrap items-center py-8 relative sm:flex-row sm:justify-between",children:[s("h2",{className:"text-3xl text-primary",children:s(U,{to:"/",children:s("img",{className:"w-28",src:"/assets/logo.png",alt:"BlackMoto.GE"})})}),s("div",{"data-menu-trigger":"true",className:"lg:hidden",children:s("button",{className:"btn",children:s(X,{})})}),s("div",{className:"hidden lg:block",children:s(k,{navigate:n})}),s("div",{className:"vertical-nav",style:{top:r.height+20},children:s(k,{isBurgerMenu:!0,navigate:n})})]})})})},oe=()=>{const{t:n}=y(),e=O();return s("footer",{className:"mt-auto py-8 container",children:p("div",{className:"footer text-lg md:text-xl",children:[p("p",{children:["© ",new Date().getFullYear(),", ",n("terms.copyright")]}),p("button",{onClick:()=>e("/admin"),className:"btn",children:[s(J,{width:20}),"Admin"]})]})})},ce="sergi.jajanidze@gmail.com,mixo.ushba@gmail.com".split(","),fe=()=>{const{setUser:n,setItems:e,lang:c,headerHeight:r}=x();f.useEffect(()=>{const l=q(z,t=>{const u=t==null?void 0:t.email;if(u&&!ce.includes(u)){P(z),$.error("You have no access");return}t?(n(t),Q(t)):n(void 0)}),m=W(M("motos")),i=G(m,t=>{const u=[];t.forEach(a=>u.push(a.data())),e(u)});return()=>{l(),i()}},[]);const o=c==="ge"?"font-ge":"font-ru";return y(),p("div",{className:`app-wrapper ${o}`,children:[s(se,{}),s("div",{className:"mt-8 container",children:s(Y,{})}),s(oe,{})]})};export{fe as default};
