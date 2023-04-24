(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function vm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ji={},y1={get exports(){return Ji},set exports(t){Ji=t}},Qa={},b={},v1={get exports(){return b},set exports(t){b=t}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Os=Symbol.for("react.element"),w1=Symbol.for("react.portal"),E1=Symbol.for("react.fragment"),_1=Symbol.for("react.strict_mode"),S1=Symbol.for("react.profiler"),T1=Symbol.for("react.provider"),I1=Symbol.for("react.context"),k1=Symbol.for("react.forward_ref"),C1=Symbol.for("react.suspense"),N1=Symbol.for("react.memo"),A1=Symbol.for("react.lazy"),Qd=Symbol.iterator;function R1(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Em=Object.assign,_m={};function hi(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||wm}hi.prototype.isReactComponent={};hi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sm(){}Sm.prototype=hi.prototype;function sh(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||wm}var oh=sh.prototype=new Sm;oh.constructor=sh;Em(oh,hi.prototype);oh.isPureReactComponent=!0;var Xd=Array.isArray,Tm=Object.prototype.hasOwnProperty,ah={current:null},Im={key:!0,ref:!0,__self:!0,__source:!0};function km(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tm.call(e,r)&&!Im.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Os,type:t,key:s,ref:o,props:i,_owner:ah.current}}function D1(t,e){return{$$typeof:Os,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Os}function P1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yd=/\/+/g;function Bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?P1(""+t.key):e.toString(36)}function Lo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Os:case w1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bl(o,0):r,Xd(i)?(n="",t!=null&&(n=t.replace(Yd,"$&/")+"/"),Lo(i,e,n,"",function(u){return u})):i!=null&&(lh(i)&&(i=D1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Xd(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Bl(s,a);o+=Lo(s,e,n,l,i)}else if(l=R1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Bl(s,a++),o+=Lo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function so(t,e,n){if(t==null)return t;var r=[],i=0;return Lo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function O1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},$o={transition:null},x1={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:$o,ReactCurrentOwner:ah};V.Children={map:so,forEach:function(t,e,n){so(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return so(t,function(){e++}),e},toArray:function(t){return so(t,function(e){return e})||[]},only:function(t){if(!lh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=hi;V.Fragment=E1;V.Profiler=S1;V.PureComponent=sh;V.StrictMode=_1;V.Suspense=C1;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x1;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Em({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ah.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tm.call(e,l)&&!Im.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Os,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:I1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:T1,_context:t},t.Consumer=t};V.createElement=km;V.createFactory=function(t){var e=km.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:k1,render:t}};V.isValidElement=lh;V.lazy=function(t){return{$$typeof:A1,_payload:{_status:-1,_result:t},_init:O1}};V.memo=function(t,e){return{$$typeof:N1,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=$o.transition;$o.transition={};try{t()}finally{$o.transition=e}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(t,e){return Xe.current.useCallback(t,e)};V.useContext=function(t){return Xe.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};V.useEffect=function(t,e){return Xe.current.useEffect(t,e)};V.useId=function(){return Xe.current.useId()};V.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Xe.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};V.useRef=function(t){return Xe.current.useRef(t)};V.useState=function(t){return Xe.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Xe.current.useTransition()};V.version="18.2.0";(function(t){t.exports=V})(v1);const Q=vm(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1=b,$1=Symbol.for("react.element"),M1=Symbol.for("react.fragment"),F1=Object.prototype.hasOwnProperty,U1=L1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b1={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)F1.call(e,r)&&!b1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$1,type:t,key:s,ref:o,props:i,_owner:U1.current}}Qa.Fragment=M1;Qa.jsx=Cm;Qa.jsxs=Cm;(function(t){t.exports=Qa})(y1);const V1=Ji.Fragment,hn=Ji.jsx,$u=Ji.jsxs;var Mu={},Fu={},B1={get exports(){return Fu},set exports(t){Fu=t}},ht={},Uu={},z1={get exports(){return Uu},set exports(t){Uu=t}},Nm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var U=N.length;N.push(O);e:for(;0<U;){var le=U-1>>>1,ye=N[le];if(0<i(ye,O))N[le]=O,N[U]=ye,U=le;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var O=N[0],U=N.pop();if(U!==O){N[0]=U;e:for(var le=0,ye=N.length,ro=ye>>>1;le<ro;){var jn=2*(le+1)-1,Vl=N[jn],Hn=jn+1,io=N[Hn];if(0>i(Vl,U))Hn<ye&&0>i(io,Vl)?(N[le]=io,N[Hn]=U,le=Hn):(N[le]=Vl,N[jn]=U,le=jn);else if(Hn<ye&&0>i(io,U))N[le]=io,N[Hn]=U,le=Hn;else break e}}return O}function i(N,O){var U=N.sortIndex-O.sortIndex;return U!==0?U:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,p=3,g=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=N)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function w(N){if(v=!1,m(N),!y)if(n(l)!==null)y=!0,ke(E);else{var O=n(u);O!==null&&st(w,O.startTime-N)}}function E(N,O){y=!1,v&&(v=!1,f(k),k=-1),g=!0;var U=p;try{for(m(O),h=n(l);h!==null&&(!(h.expirationTime>O)||N&&!fe());){var le=h.callback;if(typeof le=="function"){h.callback=null,p=h.priorityLevel;var ye=le(h.expirationTime<=O);O=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&r(l),m(O)}else r(l);h=n(l)}if(h!==null)var ro=!0;else{var jn=n(u);jn!==null&&st(w,jn.startTime-O),ro=!1}return ro}finally{h=null,p=U,g=!1}}var C=!1,A=null,k=-1,j=5,$=-1;function fe(){return!(t.unstable_now()-$<j)}function ge(){if(A!==null){var N=t.unstable_now();$=N;var O=!0;try{O=A(!0,N)}finally{O?We():(C=!1,A=null)}}else C=!1}var We;if(typeof d=="function")We=function(){d(ge)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Bt=xe.port2;xe.port1.onmessage=ge,We=function(){Bt.postMessage(null)}}else We=function(){S(ge,0)};function ke(N){A=N,C||(C=!0,We())}function st(N,O){k=S(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,ke(E))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var U=p;p=O;try{return N()}finally{p=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var U=p;p=N;try{return O()}finally{p=U}},t.unstable_scheduleCallback=function(N,O,U){var le=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?le+U:le):U=le,N){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=U+ye,N={id:c++,callback:O,priorityLevel:N,startTime:U,expirationTime:ye,sortIndex:-1},U>le?(N.sortIndex=U,e(u,N),n(l)===null&&N===n(u)&&(v?(f(k),k=-1):v=!0,st(w,U-le))):(N.sortIndex=ye,e(l,N),y||g||(y=!0,ke(E))),N},t.unstable_shouldYield=fe,t.unstable_wrapCallback=function(N){var O=p;return function(){var U=p;p=O;try{return N.apply(this,arguments)}finally{p=U}}}})(Nm);(function(t){t.exports=Nm})(z1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am=b,ut=Uu;function _(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rm=new Set,Zi={};function wr(t,e){qr(t,e),qr(t+"Capture",e)}function qr(t,e){for(Zi[t]=e,t=0;t<e.length;t++)Rm.add(e[t])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=Object.prototype.hasOwnProperty,j1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jd={},Zd={};function H1(t){return bu.call(Zd,t)?!0:bu.call(Jd,t)?!1:j1.test(t)?Zd[t]=!0:(Jd[t]=!0,!1)}function W1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K1(t,e,n,r){if(e===null||typeof e>"u"||W1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ye(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var uh=/[\-:]([a-z])/g;function ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uh,ch);Pe[e]=new Ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uh,ch);Pe[e]=new Ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uh,ch);Pe[e]=new Ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function hh(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K1(e,n,i,r)&&(n=null),r||i===null?H1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var an=Am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),dh=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Pm=Symbol.for("react.context"),fh=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),ph=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),Om=Symbol.for("react.offscreen"),ef=Symbol.iterator;function wi(t){return t===null||typeof t!="object"?null:(t=ef&&t[ef]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,zl;function Ai(t){if(zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zl=e&&e[1]||""}return`
`+zl+t}var jl=!1;function Hl(t,e){if(!t||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ai(t):""}function G1(t){switch(t.tag){case 5:return Ai(t.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 2:case 15:return t=Hl(t.type,!1),t;case 11:return t=Hl(t.type.render,!1),t;case 1:return t=Hl(t.type,!0),t;default:return""}}function ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cr:return"Fragment";case kr:return"Portal";case Vu:return"Profiler";case dh:return"StrictMode";case Bu:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pm:return(t.displayName||"Context")+".Consumer";case Dm:return(t._context.displayName||"Context")+".Provider";case fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ph:return e=t.displayName||null,e!==null?e:ju(t.type)||"Memo";case dn:e=t._payload,t=t._init;try{return ju(t(e))}catch{}}return null}function q1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q1(t){var e=xm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ao(t){t._valueTracker||(t._valueTracker=Q1(t))}function Lm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $m(t,e){e=e.checked,e!=null&&hh(t,"checked",e,!1)}function Wu(t,e){$m(t,e);var n=xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ku(t,e.type,xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ku(t,e,n){(e!=="number"||Zo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ri=Array.isArray;function Ur(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_(92));if(Ri(n)){if(1<n.length)throw Error(_(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xn(n)}}function Mm(t,e){var n=xn(e.value),r=xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,Um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function es(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X1=["Webkit","ms","Moz","O"];Object.keys($i).forEach(function(t){X1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$i[e]=$i[t]})});function bm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$i.hasOwnProperty(t)&&$i[t]?(""+e).trim():e+"px"}function Vm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Y1=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qu(t,e){if(e){if(Y1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=null;function mh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ju=null,br=null,Vr=null;function of(t){if(t=$s(t)){if(typeof Ju!="function")throw Error(_(280));var e=t.stateNode;e&&(e=el(e),Ju(t.stateNode,t.type,e))}}function Bm(t){br?Vr?Vr.push(t):Vr=[t]:br=t}function zm(){if(br){var t=br,e=Vr;if(Vr=br=null,of(t),e)for(t=0;t<e.length;t++)of(e[t])}}function jm(t,e){return t(e)}function Hm(){}var Wl=!1;function Wm(t,e,n){if(Wl)return t(e,n);Wl=!0;try{return jm(t,e,n)}finally{Wl=!1,(br!==null||Vr!==null)&&(Hm(),zm())}}function ts(t,e){var n=t.stateNode;if(n===null)return null;var r=el(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_(231,e,typeof n));return n}var Zu=!1;if(Zt)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Zu=!1}function J1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Mi=!1,ea=null,ta=!1,ec=null,Z1={onError:function(t){Mi=!0,ea=t}};function ew(t,e,n,r,i,s,o,a,l){Mi=!1,ea=null,J1.apply(Z1,arguments)}function tw(t,e,n,r,i,s,o,a,l){if(ew.apply(this,arguments),Mi){if(Mi){var u=ea;Mi=!1,ea=null}else throw Error(_(198));ta||(ta=!0,ec=u)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function af(t){if(Er(t)!==t)throw Error(_(188))}function nw(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(_(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return af(i),t;if(s===r)return af(i),e;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?t:e}function Gm(t){return t=nw(t),t!==null?qm(t):null}function qm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qm(t);if(e!==null)return e;t=t.sibling}return null}var Qm=ut.unstable_scheduleCallback,lf=ut.unstable_cancelCallback,rw=ut.unstable_shouldYield,iw=ut.unstable_requestPaint,ue=ut.unstable_now,sw=ut.unstable_getCurrentPriorityLevel,gh=ut.unstable_ImmediatePriority,Xm=ut.unstable_UserBlockingPriority,na=ut.unstable_NormalPriority,ow=ut.unstable_LowPriority,Ym=ut.unstable_IdlePriority,Xa=null,$t=null;function aw(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Xa,t,void 0,(t.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:cw,lw=Math.log,uw=Math.LN2;function cw(t){return t>>>=0,t===0?32:31-(lw(t)/uw|0)|0}var uo=64,co=4194304;function Di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ra(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Di(a):(s&=o,s!==0&&(r=Di(s)))}else o=n&~i,o!==0?r=Di(o):s!==0&&(r=Di(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-At(e),i=1<<n,r|=t[n],e&=~i;return r}function hw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-At(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jm(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function Kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-At(e),t[e]=n}function fw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-At(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function yh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-At(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var K=0;function Zm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var eg,vh,tg,ng,rg,nc=!1,ho=[],Sn=null,Tn=null,In=null,ns=new Map,rs=new Map,pn=[],pw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uf(t,e){switch(t){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":ns.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(e.pointerId)}}function _i(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=$s(e),e!==null&&vh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mw(t,e,n,r,i){switch(e){case"focusin":return Sn=_i(Sn,t,e,n,r,i),!0;case"dragenter":return Tn=_i(Tn,t,e,n,r,i),!0;case"mouseover":return In=_i(In,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ns.set(s,_i(ns.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,rs.set(s,_i(rs.get(s)||null,t,e,n,r,i)),!0}return!1}function ig(t){var e=Qn(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=Km(n),e!==null){t.blockedOn=e,rg(t.priority,function(){tg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yu=r,n.target.dispatchEvent(r),Yu=null}else return e=$s(n),e!==null&&vh(e),t.blockedOn=n,!1;e.shift()}return!0}function cf(t,e,n){Mo(t)&&n.delete(e)}function gw(){nc=!1,Sn!==null&&Mo(Sn)&&(Sn=null),Tn!==null&&Mo(Tn)&&(Tn=null),In!==null&&Mo(In)&&(In=null),ns.forEach(cf),rs.forEach(cf)}function Si(t,e){t.blockedOn===e&&(t.blockedOn=null,nc||(nc=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,gw)))}function is(t){function e(i){return Si(i,t)}if(0<ho.length){Si(ho[0],t);for(var n=1;n<ho.length;n++){var r=ho[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sn!==null&&Si(Sn,t),Tn!==null&&Si(Tn,t),In!==null&&Si(In,t),ns.forEach(e),rs.forEach(e),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)ig(n),n.blockedOn===null&&pn.shift()}var Br=an.ReactCurrentBatchConfig,ia=!0;function yw(t,e,n,r){var i=K,s=Br.transition;Br.transition=null;try{K=1,wh(t,e,n,r)}finally{K=i,Br.transition=s}}function vw(t,e,n,r){var i=K,s=Br.transition;Br.transition=null;try{K=4,wh(t,e,n,r)}finally{K=i,Br.transition=s}}function wh(t,e,n,r){if(ia){var i=rc(t,e,n,r);if(i===null)nu(t,e,r,sa,n),uf(t,r);else if(mw(i,t,e,n,r))r.stopPropagation();else if(uf(t,r),e&4&&-1<pw.indexOf(t)){for(;i!==null;){var s=$s(i);if(s!==null&&eg(s),s=rc(t,e,n,r),s===null&&nu(t,e,r,sa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else nu(t,e,r,null,n)}}var sa=null;function rc(t,e,n,r){if(sa=null,t=mh(r),t=Qn(t),t!==null)if(e=Er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sa=t,null}function sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sw()){case gh:return 1;case Xm:return 4;case na:case ow:return 16;case Ym:return 536870912;default:return 16}default:return 16}}var wn=null,Eh=null,Fo=null;function og(){if(Fo)return Fo;var t,e=Eh,n=e.length,r,i="value"in wn?wn.value:wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Fo=i.slice(t,1<r?1-r:void 0)}function Uo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function hf(){return!1}function dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fo:hf,this.isPropagationStopped=hf,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),e}var di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=dt(di),Ls=se({},di,{view:0,detail:0}),ww=dt(Ls),Gl,ql,Ti,Ya=se({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(Gl=t.screenX-Ti.screenX,ql=t.screenY-Ti.screenY):ql=Gl=0,Ti=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),df=dt(Ya),Ew=se({},Ya,{dataTransfer:0}),_w=dt(Ew),Sw=se({},Ls,{relatedTarget:0}),Ql=dt(Sw),Tw=se({},di,{animationName:0,elapsedTime:0,pseudoElement:0}),Iw=dt(Tw),kw=se({},di,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cw=dt(kw),Nw=se({},di,{data:0}),ff=dt(Nw),Aw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dw[t])?!!e[t]:!1}function Sh(){return Pw}var Ow=se({},Ls,{key:function(t){if(t.key){var e=Aw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sh,charCode:function(t){return t.type==="keypress"?Uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xw=dt(Ow),Lw=se({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=dt(Lw),$w=se({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sh}),Mw=dt($w),Fw=se({},di,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uw=dt(Fw),bw=se({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vw=dt(bw),Bw=[9,13,27,32],Th=Zt&&"CompositionEvent"in window,Fi=null;Zt&&"documentMode"in document&&(Fi=document.documentMode);var zw=Zt&&"TextEvent"in window&&!Fi,ag=Zt&&(!Th||Fi&&8<Fi&&11>=Fi),mf=String.fromCharCode(32),gf=!1;function lg(t,e){switch(t){case"keyup":return Bw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function jw(t,e){switch(t){case"compositionend":return ug(e);case"keypress":return e.which!==32?null:(gf=!0,mf);case"textInput":return t=e.data,t===mf&&gf?null:t;default:return null}}function Hw(t,e){if(Nr)return t==="compositionend"||!Th&&lg(t,e)?(t=og(),Fo=Eh=wn=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ag&&e.locale!=="ko"?null:e.data;default:return null}}var Ww={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ww[t.type]:e==="textarea"}function cg(t,e,n,r){Bm(r),e=oa(e,"onChange"),0<e.length&&(n=new _h("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ui=null,ss=null;function Kw(t){_g(t,0)}function Ja(t){var e=Dr(t);if(Lm(e))return t}function Gw(t,e){if(t==="change")return e}var hg=!1;if(Zt){var Xl;if(Zt){var Yl="oninput"in document;if(!Yl){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),Yl=typeof vf.oninput=="function"}Xl=Yl}else Xl=!1;hg=Xl&&(!document.documentMode||9<document.documentMode)}function wf(){Ui&&(Ui.detachEvent("onpropertychange",dg),ss=Ui=null)}function dg(t){if(t.propertyName==="value"&&Ja(ss)){var e=[];cg(e,ss,t,mh(t)),Wm(Kw,e)}}function qw(t,e,n){t==="focusin"?(wf(),Ui=e,ss=n,Ui.attachEvent("onpropertychange",dg)):t==="focusout"&&wf()}function Qw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ja(ss)}function Xw(t,e){if(t==="click")return Ja(e)}function Yw(t,e){if(t==="input"||t==="change")return Ja(e)}function Jw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dt=typeof Object.is=="function"?Object.is:Jw;function os(t,e){if(Dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bu.call(e,i)||!Dt(t[i],e[i]))return!1}return!0}function Ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _f(t,e){var n=Ef(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ef(n)}}function fg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pg(){for(var t=window,e=Zo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zo(t.document)}return e}function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zw(t){var e=pg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fg(n.ownerDocument.documentElement,n)){if(r!==null&&Ih(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_f(n,s);var o=_f(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eE=Zt&&"documentMode"in document&&11>=document.documentMode,Ar=null,ic=null,bi=null,sc=!1;function Sf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sc||Ar==null||Ar!==Zo(r)||(r=Ar,"selectionStart"in r&&Ih(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&os(bi,r)||(bi=r,r=oa(ic,"onSelect"),0<r.length&&(e=new _h("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ar)))}function po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rr={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Jl={},mg={};Zt&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Za(t){if(Jl[t])return Jl[t];if(!Rr[t])return t;var e=Rr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mg)return Jl[t]=e[n];return t}var gg=Za("animationend"),yg=Za("animationiteration"),vg=Za("animationstart"),wg=Za("transitionend"),Eg=new Map,Tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(t,e){Eg.set(t,e),wr(e,[t])}for(var Zl=0;Zl<Tf.length;Zl++){var eu=Tf[Zl],tE=eu.toLowerCase(),nE=eu[0].toUpperCase()+eu.slice(1);Un(tE,"on"+nE)}Un(gg,"onAnimationEnd");Un(yg,"onAnimationIteration");Un(vg,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(wg,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));function If(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tw(r,e,void 0,t),t.currentTarget=null}function _g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;If(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;If(i,a,u),s=l}}}if(ta)throw t=ec,ta=!1,ec=null,t}function Y(t,e){var n=e[cc];n===void 0&&(n=e[cc]=new Set);var r=t+"__bubble";n.has(r)||(Sg(e,t,2,!1),n.add(r))}function tu(t,e,n){var r=0;e&&(r|=4),Sg(n,t,r,e)}var mo="_reactListening"+Math.random().toString(36).slice(2);function as(t){if(!t[mo]){t[mo]=!0,Rm.forEach(function(n){n!=="selectionchange"&&(rE.has(n)||tu(n,!1,t),tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mo]||(e[mo]=!0,tu("selectionchange",!1,e))}}function Sg(t,e,n,r){switch(sg(e)){case 1:var i=yw;break;case 4:i=vw;break;default:i=wh}n=i.bind(null,e,n,t),i=void 0,!Zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function nu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Qn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Wm(function(){var u=s,c=mh(n),h=[];e:{var p=Eg.get(t);if(p!==void 0){var g=_h,y=t;switch(t){case"keypress":if(Uo(n)===0)break e;case"keydown":case"keyup":g=xw;break;case"focusin":y="focus",g=Ql;break;case"focusout":y="blur",g=Ql;break;case"beforeblur":case"afterblur":g=Ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Mw;break;case gg:case yg:case vg:g=Iw;break;case wg:g=Uw;break;case"scroll":g=ww;break;case"wheel":g=Vw;break;case"copy":case"cut":case"paste":g=Cw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=pf}var v=(e&4)!==0,S=!v&&t==="scroll",f=v?p!==null?p+"Capture":null:p;v=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,f!==null&&(w=ts(d,f),w!=null&&v.push(ls(d,w,m)))),S)break;d=d.return}0<v.length&&(p=new g(p,y,null,n,c),h.push({event:p,listeners:v}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Yu&&(y=n.relatedTarget||n.fromElement)&&(Qn(y)||y[en]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Qn(y):null,y!==null&&(S=Er(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=df,w="onMouseLeave",f="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=pf,w="onPointerLeave",f="onPointerEnter",d="pointer"),S=g==null?p:Dr(g),m=y==null?p:Dr(y),p=new v(w,d+"leave",g,n,c),p.target=S,p.relatedTarget=m,w=null,Qn(c)===u&&(v=new v(f,d+"enter",y,n,c),v.target=m,v.relatedTarget=S,w=v),S=w,g&&y)t:{for(v=g,f=y,d=0,m=v;m;m=Tr(m))d++;for(m=0,w=f;w;w=Tr(w))m++;for(;0<d-m;)v=Tr(v),d--;for(;0<m-d;)f=Tr(f),m--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=Tr(v),f=Tr(f)}v=null}else v=null;g!==null&&kf(h,p,g,v,!1),y!==null&&S!==null&&kf(h,S,y,v,!0)}}e:{if(p=u?Dr(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var E=Gw;else if(yf(p))if(hg)E=Yw;else{E=Qw;var C=qw}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Xw);if(E&&(E=E(t,u))){cg(h,E,n,c);break e}C&&C(t,p,u),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Ku(p,"number",p.value)}switch(C=u?Dr(u):window,t){case"focusin":(yf(C)||C.contentEditable==="true")&&(Ar=C,ic=u,bi=null);break;case"focusout":bi=ic=Ar=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,Sf(h,n,c);break;case"selectionchange":if(eE)break;case"keydown":case"keyup":Sf(h,n,c)}var A;if(Th)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Nr?lg(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(ag&&n.locale!=="ko"&&(Nr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Nr&&(A=og()):(wn=c,Eh="value"in wn?wn.value:wn.textContent,Nr=!0)),C=oa(u,k),0<C.length&&(k=new ff(k,t,null,n,c),h.push({event:k,listeners:C}),A?k.data=A:(A=ug(n),A!==null&&(k.data=A)))),(A=zw?jw(t,n):Hw(t,n))&&(u=oa(u,"onBeforeInput"),0<u.length&&(c=new ff("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}_g(h,e)})}function ls(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ts(t,n),s!=null&&r.unshift(ls(t,s,i)),s=ts(t,e),s!=null&&r.push(ls(t,s,i))),t=t.return}return r}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ts(n,s),l!=null&&o.unshift(ls(n,l,a))):i||(l=ts(n,s),l!=null&&o.push(ls(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iE=/\r\n?/g,sE=/\u0000|\uFFFD/g;function Cf(t){return(typeof t=="string"?t:""+t).replace(iE,`
`).replace(sE,"")}function go(t,e,n){if(e=Cf(e),Cf(t)!==e&&n)throw Error(_(425))}function aa(){}var oc=null,ac=null;function lc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,oE=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,aE=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(t){return Nf.resolve(null).then(t).catch(lE)}:uc;function lE(t){setTimeout(function(){throw t})}function ru(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),is(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);is(e)}function kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Af(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fi=Math.random().toString(36).slice(2),xt="__reactFiber$"+fi,us="__reactProps$"+fi,en="__reactContainer$"+fi,cc="__reactEvents$"+fi,uE="__reactListeners$"+fi,cE="__reactHandles$"+fi;function Qn(t){var e=t[xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[en]||n[xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Af(t);t!==null;){if(n=t[xt])return n;t=Af(t)}return e}t=n,n=t.parentNode}return null}function $s(t){return t=t[xt]||t[en],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Dr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function el(t){return t[us]||null}var hc=[],Pr=-1;function bn(t){return{current:t}}function J(t){0>Pr||(t.current=hc[Pr],hc[Pr]=null,Pr--)}function X(t,e){Pr++,hc[Pr]=t.current,t.current=e}var Ln={},je=bn(Ln),tt=bn(!1),ar=Ln;function Qr(t,e){var n=t.type.contextTypes;if(!n)return Ln;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function la(){J(tt),J(je)}function Rf(t,e,n){if(je.current!==Ln)throw Error(_(168));X(je,e),X(tt,n)}function Tg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,q1(t)||"Unknown",i));return se({},n,r)}function ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ln,ar=je.current,X(je,t),X(tt,tt.current),!0}function Df(t,e,n){var r=t.stateNode;if(!r)throw Error(_(169));n?(t=Tg(t,e,ar),r.__reactInternalMemoizedMergedChildContext=t,J(tt),J(je),X(je,t)):J(tt),X(tt,n)}var jt=null,tl=!1,iu=!1;function Ig(t){jt===null?jt=[t]:jt.push(t)}function hE(t){tl=!0,Ig(t)}function Vn(){if(!iu&&jt!==null){iu=!0;var t=0,e=K;try{var n=jt;for(K=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jt=null,tl=!1}catch(i){throw jt!==null&&(jt=jt.slice(t+1)),Qm(gh,Vn),i}finally{K=e,iu=!1}}return null}var Or=[],xr=0,ca=null,ha=0,pt=[],mt=0,lr=null,Wt=1,Kt="";function Wn(t,e){Or[xr++]=ha,Or[xr++]=ca,ca=t,ha=e}function kg(t,e,n){pt[mt++]=Wt,pt[mt++]=Kt,pt[mt++]=lr,lr=t;var r=Wt;t=Kt;var i=32-At(r)-1;r&=~(1<<i),n+=1;var s=32-At(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wt=1<<32-At(e)+i|n<<i|r,Kt=s+t}else Wt=1<<s|n<<i|r,Kt=t}function kh(t){t.return!==null&&(Wn(t,1),kg(t,1,0))}function Ch(t){for(;t===ca;)ca=Or[--xr],Or[xr]=null,ha=Or[--xr],Or[xr]=null;for(;t===lr;)lr=pt[--mt],pt[mt]=null,Kt=pt[--mt],pt[mt]=null,Wt=pt[--mt],pt[mt]=null}var lt=null,at=null,ee=!1,It=null;function Cg(t,e){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,lt=t,at=kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,lt=t,at=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=lr!==null?{id:Wt,overflow:Kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,lt=t,at=null,!0):!1;default:return!1}}function dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fc(t){if(ee){var e=at;if(e){var n=e;if(!Pf(t,e)){if(dc(t))throw Error(_(418));e=kn(n.nextSibling);var r=lt;e&&Pf(t,e)?Cg(r,n):(t.flags=t.flags&-4097|2,ee=!1,lt=t)}}else{if(dc(t))throw Error(_(418));t.flags=t.flags&-4097|2,ee=!1,lt=t}}}function Of(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;lt=t}function yo(t){if(t!==lt)return!1;if(!ee)return Of(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lc(t.type,t.memoizedProps)),e&&(e=at)){if(dc(t))throw Ng(),Error(_(418));for(;e;)Cg(t,e),e=kn(e.nextSibling)}if(Of(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){at=kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}at=null}}else at=lt?kn(t.stateNode.nextSibling):null;return!0}function Ng(){for(var t=at;t;)t=kn(t.nextSibling)}function Xr(){at=lt=null,ee=!1}function Nh(t){It===null?It=[t]:It.push(t)}var dE=an.ReactCurrentBatchConfig;function St(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var da=bn(null),fa=null,Lr=null,Ah=null;function Rh(){Ah=Lr=fa=null}function Dh(t){var e=da.current;J(da),t._currentValue=e}function pc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zr(t,e){fa=t,Ah=Lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ze=!0),t.firstContext=null)}function vt(t){var e=t._currentValue;if(Ah!==t)if(t={context:t,memoizedValue:e,next:null},Lr===null){if(fa===null)throw Error(_(308));Lr=t,fa.dependencies={lanes:0,firstContext:t}}else Lr=Lr.next=t;return e}var Xn=null;function Ph(t){Xn===null?Xn=[t]:Xn.push(t)}function Ag(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ph(e)):(n.next=i.next,i.next=n),e.interleaved=n,tn(t,r)}function tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fn=!1;function Oh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ph(r)):(e.next=i.next,i.next=e),r.interleaved=e,tn(t,n)}function bo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yh(t,n)}}function xf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pa(t,e,n,r){var i=t.updateQueue;fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var p=a.lane,g=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(p=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,p=typeof y=="function"?y.call(g,h,p):y,p==null)break e;h=se({},h,p);break e;case 2:fn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);cr|=o,t.lanes=o,t.memoizedState=h}}function Lf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Dg=new Am.Component().refs;function mc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nl={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=An(t),s=Xt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(Rt(e,t,i,r),bo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=An(t),s=Xt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(Rt(e,t,i,r),bo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=An(t),i=Xt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cn(t,i,r),e!==null&&(Rt(e,t,r,n),bo(e,t,r))}};function $f(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!os(n,r)||!os(i,s):!0}function Pg(t,e,n){var r=!1,i=Ln,s=e.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=nt(e)?ar:je.current,r=e.contextTypes,s=(r=r!=null)?Qr(t,i):Ln),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nl.enqueueReplaceState(e,e.state,null)}function gc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Dg,Oh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=nt(e)?ar:je.current,i.context=Qr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nl.enqueueReplaceState(i,i.state,null),pa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ii(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Dg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,t))}return t}function vo(t,e){throw t=Object.prototype.toString.call(e),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ff(t){var e=t._init;return e(t._payload)}function Og(t){function e(f,d){if(t){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!t)return null;for(;d!==null;)e(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Rn(f,d),f.index=0,f.sibling=null,f}function s(f,d,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,d,m,w){return d===null||d.tag!==6?(d=hu(m,f.mode,w),d.return=f,d):(d=i(d,m),d.return=f,d)}function l(f,d,m,w){var E=m.type;return E===Cr?c(f,d,m.props.children,w,m.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===dn&&Ff(E)===d.type)?(w=i(d,m.props),w.ref=Ii(f,d,m),w.return=f,w):(w=Wo(m.type,m.key,m.props,null,f.mode,w),w.ref=Ii(f,d,m),w.return=f,w)}function u(f,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=du(m,f.mode,w),d.return=f,d):(d=i(d,m.children||[]),d.return=f,d)}function c(f,d,m,w,E){return d===null||d.tag!==7?(d=rr(m,f.mode,w,E),d.return=f,d):(d=i(d,m),d.return=f,d)}function h(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=hu(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case oo:return m=Wo(d.type,d.key,d.props,null,f.mode,m),m.ref=Ii(f,null,d),m.return=f,m;case kr:return d=du(d,f.mode,m),d.return=f,d;case dn:var w=d._init;return h(f,w(d._payload),m)}if(Ri(d)||wi(d))return d=rr(d,f.mode,m,null),d.return=f,d;vo(f,d)}return null}function p(f,d,m,w){var E=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(f,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oo:return m.key===E?l(f,d,m,w):null;case kr:return m.key===E?u(f,d,m,w):null;case dn:return E=m._init,p(f,d,E(m._payload),w)}if(Ri(m)||wi(m))return E!==null?null:c(f,d,m,w,null);vo(f,m)}return null}function g(f,d,m,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(m)||null,a(d,f,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oo:return f=f.get(w.key===null?m:w.key)||null,l(d,f,w,E);case kr:return f=f.get(w.key===null?m:w.key)||null,u(d,f,w,E);case dn:var C=w._init;return g(f,d,m,C(w._payload),E)}if(Ri(w)||wi(w))return f=f.get(m)||null,c(d,f,w,E,null);vo(d,w)}return null}function y(f,d,m,w){for(var E=null,C=null,A=d,k=d=0,j=null;A!==null&&k<m.length;k++){A.index>k?(j=A,A=null):j=A.sibling;var $=p(f,A,m[k],w);if($===null){A===null&&(A=j);break}t&&A&&$.alternate===null&&e(f,A),d=s($,d,k),C===null?E=$:C.sibling=$,C=$,A=j}if(k===m.length)return n(f,A),ee&&Wn(f,k),E;if(A===null){for(;k<m.length;k++)A=h(f,m[k],w),A!==null&&(d=s(A,d,k),C===null?E=A:C.sibling=A,C=A);return ee&&Wn(f,k),E}for(A=r(f,A);k<m.length;k++)j=g(A,f,k,m[k],w),j!==null&&(t&&j.alternate!==null&&A.delete(j.key===null?k:j.key),d=s(j,d,k),C===null?E=j:C.sibling=j,C=j);return t&&A.forEach(function(fe){return e(f,fe)}),ee&&Wn(f,k),E}function v(f,d,m,w){var E=wi(m);if(typeof E!="function")throw Error(_(150));if(m=E.call(m),m==null)throw Error(_(151));for(var C=E=null,A=d,k=d=0,j=null,$=m.next();A!==null&&!$.done;k++,$=m.next()){A.index>k?(j=A,A=null):j=A.sibling;var fe=p(f,A,$.value,w);if(fe===null){A===null&&(A=j);break}t&&A&&fe.alternate===null&&e(f,A),d=s(fe,d,k),C===null?E=fe:C.sibling=fe,C=fe,A=j}if($.done)return n(f,A),ee&&Wn(f,k),E;if(A===null){for(;!$.done;k++,$=m.next())$=h(f,$.value,w),$!==null&&(d=s($,d,k),C===null?E=$:C.sibling=$,C=$);return ee&&Wn(f,k),E}for(A=r(f,A);!$.done;k++,$=m.next())$=g(A,f,k,$.value,w),$!==null&&(t&&$.alternate!==null&&A.delete($.key===null?k:$.key),d=s($,d,k),C===null?E=$:C.sibling=$,C=$);return t&&A.forEach(function(ge){return e(f,ge)}),ee&&Wn(f,k),E}function S(f,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Cr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case oo:e:{for(var E=m.key,C=d;C!==null;){if(C.key===E){if(E=m.type,E===Cr){if(C.tag===7){n(f,C.sibling),d=i(C,m.props.children),d.return=f,f=d;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===dn&&Ff(E)===C.type){n(f,C.sibling),d=i(C,m.props),d.ref=Ii(f,C,m),d.return=f,f=d;break e}n(f,C);break}else e(f,C);C=C.sibling}m.type===Cr?(d=rr(m.props.children,f.mode,w,m.key),d.return=f,f=d):(w=Wo(m.type,m.key,m.props,null,f.mode,w),w.ref=Ii(f,d,m),w.return=f,f=w)}return o(f);case kr:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=i(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else e(f,d);d=d.sibling}d=du(m,f.mode,w),d.return=f,f=d}return o(f);case dn:return C=m._init,S(f,d,C(m._payload),w)}if(Ri(m))return y(f,d,m,w);if(wi(m))return v(f,d,m,w);vo(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,m),d.return=f,f=d):(n(f,d),d=hu(m,f.mode,w),d.return=f,f=d),o(f)):n(f,d)}return S}var Yr=Og(!0),xg=Og(!1),Ms={},Mt=bn(Ms),cs=bn(Ms),hs=bn(Ms);function Yn(t){if(t===Ms)throw Error(_(174));return t}function xh(t,e){switch(X(hs,e),X(cs,t),X(Mt,Ms),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}J(Mt),X(Mt,e)}function Jr(){J(Mt),J(cs),J(hs)}function Lg(t){Yn(hs.current);var e=Yn(Mt.current),n=qu(e,t.type);e!==n&&(X(cs,t),X(Mt,n))}function Lh(t){cs.current===t&&(J(Mt),J(cs))}var re=bn(0);function ma(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var su=[];function $h(){for(var t=0;t<su.length;t++)su[t]._workInProgressVersionPrimary=null;su.length=0}var Vo=an.ReactCurrentDispatcher,ou=an.ReactCurrentBatchConfig,ur=0,ie=null,pe=null,we=null,ga=!1,Vi=!1,ds=0,fE=0;function Le(){throw Error(_(321))}function Mh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dt(t[n],e[n]))return!1;return!0}function Fh(t,e,n,r,i,s){if(ur=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vo.current=t===null||t.memoizedState===null?yE:vE,t=n(r,i),Vi){s=0;do{if(Vi=!1,ds=0,25<=s)throw Error(_(301));s+=1,we=pe=null,e.updateQueue=null,Vo.current=wE,t=n(r,i)}while(Vi)}if(Vo.current=ya,e=pe!==null&&pe.next!==null,ur=0,we=pe=ie=null,ga=!1,e)throw Error(_(300));return t}function Uh(){var t=ds!==0;return ds=0,t}function Ot(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ie.memoizedState=we=t:we=we.next=t,we}function wt(){if(pe===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=pe.next;var e=we===null?ie.memoizedState:we.next;if(e!==null)we=e,pe=t;else{if(t===null)throw Error(_(310));pe=t,t={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},we===null?ie.memoizedState=we=t:we=we.next=t}return we}function fs(t,e){return typeof e=="function"?e(t):e}function au(t){var e=wt(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ur&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ie.lanes|=c,cr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Dt(r,e.memoizedState)||(Ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,cr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lu(t){var e=wt(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $g(){}function Mg(t,e){var n=ie,r=wt(),i=e(),s=!Dt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,bh(bg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,ps(9,Ug.bind(null,n,r,i,e),void 0,null),_e===null)throw Error(_(349));ur&30||Fg(n,e,i)}return i}function Fg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ug(t,e,n,r){e.value=n,e.getSnapshot=r,Vg(e)&&Bg(t)}function bg(t,e,n){return n(function(){Vg(e)&&Bg(t)})}function Vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dt(t,n)}catch{return!0}}function Bg(t){var e=tn(t,1);e!==null&&Rt(e,t,1,-1)}function Uf(t){var e=Ot();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:t},e.queue=t,t=t.dispatch=gE.bind(null,ie,t),[e.memoizedState,t]}function ps(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zg(){return wt().memoizedState}function Bo(t,e,n,r){var i=Ot();ie.flags|=t,i.memoizedState=ps(1|e,n,void 0,r===void 0?null:r)}function rl(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&Mh(r,o.deps)){i.memoizedState=ps(e,n,s,r);return}}ie.flags|=t,i.memoizedState=ps(1|e,n,s,r)}function bf(t,e){return Bo(8390656,8,t,e)}function bh(t,e){return rl(2048,8,t,e)}function jg(t,e){return rl(4,2,t,e)}function Hg(t,e){return rl(4,4,t,e)}function Wg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Kg(t,e,n){return n=n!=null?n.concat([t]):null,rl(4,4,Wg.bind(null,e,t),n)}function Vh(){}function Gg(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function qg(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Qg(t,e,n){return ur&21?(Dt(n,e)||(n=Jm(),ie.lanes|=n,cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=n)}function pE(t,e){var n=K;K=n!==0&&4>n?n:4,t(!0);var r=ou.transition;ou.transition={};try{t(!1),e()}finally{K=n,ou.transition=r}}function Xg(){return wt().memoizedState}function mE(t,e,n){var r=An(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yg(t))Jg(e,n);else if(n=Ag(t,e,n,r),n!==null){var i=qe();Rt(n,t,r,i),Zg(n,e,r)}}function gE(t,e,n){var r=An(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yg(t))Jg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Dt(a,o)){var l=e.interleaved;l===null?(i.next=i,Ph(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Ag(t,e,i,r),n!==null&&(i=qe(),Rt(n,t,r,i),Zg(n,e,r))}}function Yg(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function Jg(t,e){Vi=ga=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Zg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yh(t,n)}}var ya={readContext:vt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},yE={readContext:vt,useCallback:function(t,e){return Ot().memoizedState=[t,e===void 0?null:e],t},useContext:vt,useEffect:bf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bo(4194308,4,Wg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bo(4,2,t,e)},useMemo:function(t,e){var n=Ot();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ot();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mE.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=Ot();return t={current:t},e.memoizedState=t},useState:Uf,useDebugValue:Vh,useDeferredValue:function(t){return Ot().memoizedState=t},useTransition:function(){var t=Uf(!1),e=t[0];return t=pE.bind(null,t[1]),Ot().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=Ot();if(ee){if(n===void 0)throw Error(_(407));n=n()}else{if(n=e(),_e===null)throw Error(_(349));ur&30||Fg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,bf(bg.bind(null,r,s,t),[t]),r.flags|=2048,ps(9,Ug.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ot(),e=_e.identifierPrefix;if(ee){var n=Kt,r=Wt;n=(r&~(1<<32-At(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ds++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vE={readContext:vt,useCallback:Gg,useContext:vt,useEffect:bh,useImperativeHandle:Kg,useInsertionEffect:jg,useLayoutEffect:Hg,useMemo:qg,useReducer:au,useRef:zg,useState:function(){return au(fs)},useDebugValue:Vh,useDeferredValue:function(t){var e=wt();return Qg(e,pe.memoizedState,t)},useTransition:function(){var t=au(fs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Mg,useId:Xg,unstable_isNewReconciler:!1},wE={readContext:vt,useCallback:Gg,useContext:vt,useEffect:bh,useImperativeHandle:Kg,useInsertionEffect:jg,useLayoutEffect:Hg,useMemo:qg,useReducer:lu,useRef:zg,useState:function(){return lu(fs)},useDebugValue:Vh,useDeferredValue:function(t){var e=wt();return pe===null?e.memoizedState=t:Qg(e,pe.memoizedState,t)},useTransition:function(){var t=lu(fs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Mg,useId:Xg,unstable_isNewReconciler:!1};function Zr(t,e){try{var n="",r=e;do n+=G1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EE=typeof WeakMap=="function"?WeakMap:Map;function ey(t,e,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wa||(wa=!0,Nc=r),yc(t,e)},n}function ty(t,e,n){n=Xt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yc(t,e),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new EE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=LE.bind(null,t,e,n),e.then(t,t))}function Bf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xt(-1,1),e.tag=2,Cn(n,e,1))),n.lanes|=1),t)}var _E=an.ReactCurrentOwner,Ze=!1;function Ke(t,e,n,r){e.child=t===null?xg(e,null,n,r):Yr(e,t.child,n,r)}function jf(t,e,n,r,i){n=n.render;var s=e.ref;return zr(e,i),r=Fh(t,e,n,r,s,i),n=Uh(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nn(t,e,i)):(ee&&n&&kh(e),e.flags|=1,Ke(t,e,r,i),e.child)}function Hf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!qh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ny(t,e,s,r,i)):(t=Wo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:os,n(o,r)&&t.ref===e.ref)return nn(t,e,i)}return e.flags|=1,t=Rn(s,r),t.ref=e.ref,t.return=e,e.child=t}function ny(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(os(s,r)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ze=!0);else return e.lanes=t.lanes,nn(t,e,i)}return vc(t,e,n,r,i)}function ry(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Mr,ot),ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Mr,ot),ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Mr,ot),ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Mr,ot),ot|=r;return Ke(t,e,i,n),e.child}function iy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vc(t,e,n,r,i){var s=nt(n)?ar:je.current;return s=Qr(e,s),zr(e,i),n=Fh(t,e,n,r,s,i),r=Uh(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nn(t,e,i)):(ee&&r&&kh(e),e.flags|=1,Ke(t,e,n,i),e.child)}function Wf(t,e,n,r,i){if(nt(n)){var s=!0;ua(e)}else s=!1;if(zr(e,i),e.stateNode===null)zo(t,e),Pg(e,n,r),gc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=nt(n)?ar:je.current,u=Qr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Mf(e,o,r,u),fn=!1;var p=e.memoizedState;o.state=p,pa(e,r,o,i),l=e.memoizedState,a!==r||p!==l||tt.current||fn?(typeof c=="function"&&(mc(e,n,c,r),l=e.memoizedState),(a=fn||$f(e,n,a,r,p,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Rg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:St(e.type,a),o.props=u,h=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=nt(n)?ar:je.current,l=Qr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==l)&&Mf(e,o,r,l),fn=!1,p=e.memoizedState,o.state=p,pa(e,r,o,i);var y=e.memoizedState;a!==h||p!==y||tt.current||fn?(typeof g=="function"&&(mc(e,n,g,r),y=e.memoizedState),(u=fn||$f(e,n,u,r,p,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return wc(t,e,n,r,s,i)}function wc(t,e,n,r,i,s){iy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Df(e,n,!1),nn(t,e,s);r=e.stateNode,_E.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yr(e,t.child,null,s),e.child=Yr(e,null,a,s)):Ke(t,e,a,s),e.memoizedState=r.state,i&&Df(e,n,!0),e.child}function sy(t){var e=t.stateNode;e.pendingContext?Rf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rf(t,e.context,!1),xh(t,e.containerInfo)}function Kf(t,e,n,r,i){return Xr(),Nh(i),e.flags|=256,Ke(t,e,n,r),e.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function _c(t){return{baseLanes:t,cachePool:null,transitions:null}}function oy(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(re,i&1),t===null)return fc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ol(o,r,0,null),t=rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_c(n),e.memoizedState=Ec,t):Bh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return SE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Rn(a,s):(s=rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_c(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ec,r}return s=t.child,t=s.sibling,r=Rn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bh(t,e){return e=ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wo(t,e,n,r){return r!==null&&Nh(r),Yr(e,t.child,null,n),t=Bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=uu(Error(_(422))),wo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ol({mode:"visible",children:r.children},i,0,null),s=rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yr(e,t.child,null,o),e.child.memoizedState=_c(o),e.memoizedState=Ec,s);if(!(e.mode&1))return wo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=uu(s,r,void 0),wo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ze||a){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tn(t,i),Rt(r,t,i,-1))}return Gh(),r=uu(Error(_(421))),wo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$E.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,at=kn(i.nextSibling),lt=e,ee=!0,It=null,t!==null&&(pt[mt++]=Wt,pt[mt++]=Kt,pt[mt++]=lr,Wt=t.id,Kt=t.overflow,lr=e),e=Bh(e,r.children),e.flags|=4096,e)}function Gf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pc(t.return,e,n)}function cu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ay(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ke(t,e,r.children,n),r=re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gf(t,n,e);else if(t.tag===19)Gf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ma(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),cu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ma(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}cu(e,!0,n,null,s);break;case"together":cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_(153));if(e.child!==null){for(t=e.child,n=Rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TE(t,e,n){switch(e.tag){case 3:sy(e),Xr();break;case 5:Lg(e);break;case 1:nt(e.type)&&ua(e);break;case 4:xh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(da,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),e.flags|=128,null):n&e.child.childLanes?oy(t,e,n):(X(re,re.current&1),t=nn(t,e,n),t!==null?t.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ay(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,ry(t,e,n)}return nn(t,e,n)}var ly,Sc,uy,cy;ly=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sc=function(){};uy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yn(Mt.current);var s=null;switch(n){case"input":i=Hu(t,i),r=Hu(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=Gu(t,i),r=Gu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=aa)}Qu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};cy=function(t,e,n,r){n!==r&&(e.flags|=4)};function ki(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function IE(t,e,n){var r=e.pendingProps;switch(Ch(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return nt(e.type)&&la(),$e(e),null;case 3:return r=e.stateNode,Jr(),J(tt),J(je),$h(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,It!==null&&(Dc(It),It=null))),Sc(t,e),$e(e),null;case 5:Lh(e);var i=Yn(hs.current);if(n=e.type,t!==null&&e.stateNode!=null)uy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(_(166));return $e(e),null}if(t=Yn(Mt.current),yo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xt]=e,r[us]=s,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<Pi.length;i++)Y(Pi[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":tf(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":rf(r,s),Y("invalid",r)}Qu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&go(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&go(r.textContent,a,t),i=["children",""+a]):Zi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":ao(r),nf(r,s,!0);break;case"textarea":ao(r),sf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=aa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xt]=e,t[us]=r,ly(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xu(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<Pi.length;i++)Y(Pi[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":tf(t,r),i=Hu(t,r),Y("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Y("invalid",t);break;case"textarea":rf(t,r),i=Gu(t,r),Y("invalid",t);break;default:i=r}Qu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Vm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Um(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&es(t,l):typeof l=="number"&&es(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Y("scroll",t):l!=null&&hh(t,s,l,o))}switch(n){case"input":ao(t),nf(t,r,!1);break;case"textarea":ao(t),sf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ur(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ur(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=aa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)cy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(_(166));if(n=Yn(hs.current),Yn(Mt.current),yo(e)){if(r=e.stateNode,n=e.memoizedProps,r[xt]=e,(s=r.nodeValue!==n)&&(t=lt,t!==null))switch(t.tag){case 3:go(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=e,e.stateNode=r}return $e(e),null;case 13:if(J(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&at!==null&&e.mode&1&&!(e.flags&128))Ng(),Xr(),e.flags|=98560,s=!1;else if(s=yo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(_(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[xt]=e}else Xr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else It!==null&&(Dc(It),It=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?me===0&&(me=3):Gh())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return Jr(),Sc(t,e),t===null&&as(e.stateNode.containerInfo),$e(e),null;case 10:return Dh(e.type._context),$e(e),null;case 17:return nt(e.type)&&la(),$e(e),null;case 19:if(J(re),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ki(s,!1);else{if(me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ma(t),o!==null){for(e.flags|=128,ki(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&ue()>ei&&(e.flags|=128,r=!0,ki(s,!1),e.lanes=4194304)}else{if(!r)if(t=ma(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ki(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return $e(e),null}else 2*ue()-s.renderingStartTime>ei&&n!==1073741824&&(e.flags|=128,r=!0,ki(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ue(),e.sibling=null,n=re.current,X(re,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return Kh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ot&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(_(156,e.tag))}function kE(t,e){switch(Ch(e),e.tag){case 1:return nt(e.type)&&la(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jr(),J(tt),J(je),$h(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(J(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_(340));Xr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(re),null;case 4:return Jr(),null;case 10:return Dh(e.type._context),null;case 22:case 23:return Kh(),null;case 24:return null;default:return null}}var Eo=!1,Ue=!1,CE=typeof WeakSet=="function"?WeakSet:Set,R=null;function $r(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function Tc(t,e,n){try{n()}catch(r){oe(t,e,r)}}var qf=!1;function NE(t,e){if(oc=ia,t=pg(),Ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,p=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===t)break t;if(p===n&&++u===i&&(a=o),p===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ac={focusedElem:t,selectionRange:n},ia=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,f=e.stateNode,d=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:St(e.type,v),S);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){oe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return y=qf,qf=!1,y}function Bi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tc(e,n,s)}i=i.next}while(i!==r)}}function il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ic(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hy(t){var e=t.alternate;e!==null&&(t.alternate=null,hy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xt],delete e[us],delete e[cc],delete e[uE],delete e[cE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dy(t){return t.tag===5||t.tag===3||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=aa));else if(r!==4&&(t=t.child,t!==null))for(kc(t,e,n),t=t.sibling;t!==null;)kc(t,e,n),t=t.sibling}function Cc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cc(t,e,n),t=t.sibling;t!==null;)Cc(t,e,n),t=t.sibling}var Ce=null,Tt=!1;function un(t,e,n){for(n=n.child;n!==null;)fy(t,e,n),n=n.sibling}function fy(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Xa,n)}catch{}switch(n.tag){case 5:Ue||$r(n,e);case 6:var r=Ce,i=Tt;Ce=null,un(t,e,n),Ce=r,Tt=i,Ce!==null&&(Tt?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(Tt?(t=Ce,n=n.stateNode,t.nodeType===8?ru(t.parentNode,n):t.nodeType===1&&ru(t,n),is(t)):ru(Ce,n.stateNode));break;case 4:r=Ce,i=Tt,Ce=n.stateNode.containerInfo,Tt=!0,un(t,e,n),Ce=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tc(n,e,o),i=i.next}while(i!==r)}un(t,e,n);break;case 1:if(!Ue&&($r(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,e,a)}un(t,e,n);break;case 21:un(t,e,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,un(t,e,n),Ue=r):un(t,e,n);break;default:un(t,e,n)}}function Xf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CE),e.forEach(function(r){var i=ME.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,Tt=!1;break e;case 3:Ce=a.stateNode.containerInfo,Tt=!0;break e;case 4:Ce=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(Ce===null)throw Error(_(160));fy(s,o,i),Ce=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)py(e,t),e=e.sibling}function py(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_t(e,t),Pt(t),r&4){try{Bi(3,t,t.return),il(3,t)}catch(v){oe(t,t.return,v)}try{Bi(5,t,t.return)}catch(v){oe(t,t.return,v)}}break;case 1:_t(e,t),Pt(t),r&512&&n!==null&&$r(n,n.return);break;case 5:if(_t(e,t),Pt(t),r&512&&n!==null&&$r(n,n.return),t.flags&32){var i=t.stateNode;try{es(i,"")}catch(v){oe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$m(i,s),Xu(a,o);var u=Xu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Vm(i,h):c==="dangerouslySetInnerHTML"?Um(i,h):c==="children"?es(i,h):hh(i,c,h,u)}switch(a){case"input":Wu(i,s);break;case"textarea":Mm(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ur(i,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ur(i,!!s.multiple,s.defaultValue,!0):Ur(i,!!s.multiple,s.multiple?[]:"",!1))}i[us]=s}catch(v){oe(t,t.return,v)}}break;case 6:if(_t(e,t),Pt(t),r&4){if(t.stateNode===null)throw Error(_(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){oe(t,t.return,v)}}break;case 3:if(_t(e,t),Pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{is(e.containerInfo)}catch(v){oe(t,t.return,v)}break;case 4:_t(e,t),Pt(t);break;case 13:_t(e,t),Pt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Hh=ue())),r&4&&Xf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ue=(u=Ue)||c,_t(e,t),Ue=u):_t(e,t),Pt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(h=R=c;R!==null;){switch(p=R,g=p.child,p.tag){case 0:case 11:case 14:case 15:Bi(4,p,p.return);break;case 1:$r(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){oe(r,n,v)}}break;case 5:$r(p,p.return);break;case 22:if(p.memoizedState!==null){Jf(h);continue}}g!==null?(g.return=p,R=g):Jf(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bm("display",o))}catch(v){oe(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){oe(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_t(e,t),Pt(t),r&4&&Xf(t);break;case 21:break;default:_t(e,t),Pt(t)}}function Pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dy(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(es(i,""),r.flags&=-33);var s=Qf(t);Cc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Qf(t);kc(t,a,o);break;default:throw Error(_(161))}}catch(l){oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AE(t,e,n){R=t,my(t)}function my(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Eo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ue;a=Eo;var u=Ue;if(Eo=o,(Ue=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?Zf(i):l!==null?(l.return=o,R=l):Zf(i);for(;s!==null;)R=s,my(s),s=s.sibling;R=i,Eo=a,Ue=u}Yf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Yf(t)}}function Yf(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ue||il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:St(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&is(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ue||e.flags&512&&Ic(e)}catch(p){oe(e,e.return,p)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Jf(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Zf(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{il(4,e)}catch(l){oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){oe(e,i,l)}}var s=e.return;try{Ic(e)}catch(l){oe(e,s,l)}break;case 5:var o=e.return;try{Ic(e)}catch(l){oe(e,o,l)}}}catch(l){oe(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var RE=Math.ceil,va=an.ReactCurrentDispatcher,zh=an.ReactCurrentOwner,yt=an.ReactCurrentBatchConfig,H=0,_e=null,de=null,Re=0,ot=0,Mr=bn(0),me=0,ms=null,cr=0,sl=0,jh=0,zi=null,Je=null,Hh=0,ei=1/0,zt=null,wa=!1,Nc=null,Nn=null,_o=!1,En=null,Ea=0,ji=0,Ac=null,jo=-1,Ho=0;function qe(){return H&6?ue():jo!==-1?jo:jo=ue()}function An(t){return t.mode&1?H&2&&Re!==0?Re&-Re:dE.transition!==null?(Ho===0&&(Ho=Jm()),Ho):(t=K,t!==0||(t=window.event,t=t===void 0?16:sg(t.type)),t):1}function Rt(t,e,n,r){if(50<ji)throw ji=0,Ac=null,Error(_(185));xs(t,n,r),(!(H&2)||t!==_e)&&(t===_e&&(!(H&2)&&(sl|=n),me===4&&mn(t,Re)),rt(t,r),n===1&&H===0&&!(e.mode&1)&&(ei=ue()+500,tl&&Vn()))}function rt(t,e){var n=t.callbackNode;dw(t,e);var r=ra(t,t===_e?Re:0);if(r===0)n!==null&&lf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lf(n),e===1)t.tag===0?hE(ep.bind(null,t)):Ig(ep.bind(null,t)),aE(function(){!(H&6)&&Vn()}),n=null;else{switch(Zm(r)){case 1:n=gh;break;case 4:n=Xm;break;case 16:n=na;break;case 536870912:n=Ym;break;default:n=na}n=Ty(n,gy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gy(t,e){if(jo=-1,Ho=0,H&6)throw Error(_(327));var n=t.callbackNode;if(jr()&&t.callbackNode!==n)return null;var r=ra(t,t===_e?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_a(t,r);else{e=r;var i=H;H|=2;var s=vy();(_e!==t||Re!==e)&&(zt=null,ei=ue()+500,nr(t,e));do try{OE();break}catch(a){yy(t,a)}while(1);Rh(),va.current=s,H=i,de!==null?e=0:(_e=null,Re=0,e=me)}if(e!==0){if(e===2&&(i=tc(t),i!==0&&(r=i,e=Rc(t,i))),e===1)throw n=ms,nr(t,0),mn(t,r),rt(t,ue()),n;if(e===6)mn(t,r);else{if(i=t.current.alternate,!(r&30)&&!DE(i)&&(e=_a(t,r),e===2&&(s=tc(t),s!==0&&(r=s,e=Rc(t,s))),e===1))throw n=ms,nr(t,0),mn(t,r),rt(t,ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(_(345));case 2:Kn(t,Je,zt);break;case 3:if(mn(t,r),(r&130023424)===r&&(e=Hh+500-ue(),10<e)){if(ra(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uc(Kn.bind(null,t,Je,zt),e);break}Kn(t,Je,zt);break;case 4:if(mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-At(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RE(r/1960))-r,10<r){t.timeoutHandle=uc(Kn.bind(null,t,Je,zt),r);break}Kn(t,Je,zt);break;case 5:Kn(t,Je,zt);break;default:throw Error(_(329))}}}return rt(t,ue()),t.callbackNode===n?gy.bind(null,t):null}function Rc(t,e){var n=zi;return t.current.memoizedState.isDehydrated&&(nr(t,e).flags|=256),t=_a(t,e),t!==2&&(e=Je,Je=n,e!==null&&Dc(e)),t}function Dc(t){Je===null?Je=t:Je.push.apply(Je,t)}function DE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mn(t,e){for(e&=~jh,e&=~sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-At(e),r=1<<n;t[n]=-1,e&=~r}}function ep(t){if(H&6)throw Error(_(327));jr();var e=ra(t,0);if(!(e&1))return rt(t,ue()),null;var n=_a(t,e);if(t.tag!==0&&n===2){var r=tc(t);r!==0&&(e=r,n=Rc(t,r))}if(n===1)throw n=ms,nr(t,0),mn(t,e),rt(t,ue()),n;if(n===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kn(t,Je,zt),rt(t,ue()),null}function Wh(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(ei=ue()+500,tl&&Vn())}}function hr(t){En!==null&&En.tag===0&&!(H&6)&&jr();var e=H;H|=1;var n=yt.transition,r=K;try{if(yt.transition=null,K=1,t)return t()}finally{K=r,yt.transition=n,H=e,!(H&6)&&Vn()}}function Kh(){ot=Mr.current,J(Mr)}function nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oE(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Ch(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&la();break;case 3:Jr(),J(tt),J(je),$h();break;case 5:Lh(r);break;case 4:Jr();break;case 13:J(re);break;case 19:J(re);break;case 10:Dh(r.type._context);break;case 22:case 23:Kh()}n=n.return}if(_e=t,de=t=Rn(t.current,null),Re=ot=e,me=0,ms=null,jh=sl=cr=0,Je=zi=null,Xn!==null){for(e=0;e<Xn.length;e++)if(n=Xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xn=null}return t}function yy(t,e){do{var n=de;try{if(Rh(),Vo.current=ya,ga){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ga=!1}if(ur=0,we=pe=ie=null,Vi=!1,ds=0,zh.current=null,n===null||n.return===null){me=1,ms=e,de=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Bf(o);if(g!==null){g.flags&=-257,zf(g,o,a,s,e),g.mode&1&&Vf(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Vf(s,u,e),Gh();break e}l=Error(_(426))}}else if(ee&&a.mode&1){var S=Bf(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),zf(S,o,a,s,e),Nh(Zr(l,a));break e}}s=l=Zr(l,a),me!==4&&(me=2),zi===null?zi=[s]:zi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=ey(s,l,e);xf(s,f);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Nn===null||!Nn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=ty(s,a,e);xf(s,w);break e}}s=s.return}while(s!==null)}Ey(n)}catch(E){e=E,de===n&&n!==null&&(de=n=n.return);continue}break}while(1)}function vy(){var t=va.current;return va.current=ya,t===null?ya:t}function Gh(){(me===0||me===3||me===2)&&(me=4),_e===null||!(cr&268435455)&&!(sl&268435455)||mn(_e,Re)}function _a(t,e){var n=H;H|=2;var r=vy();(_e!==t||Re!==e)&&(zt=null,nr(t,e));do try{PE();break}catch(i){yy(t,i)}while(1);if(Rh(),H=n,va.current=r,de!==null)throw Error(_(261));return _e=null,Re=0,me}function PE(){for(;de!==null;)wy(de)}function OE(){for(;de!==null&&!rw();)wy(de)}function wy(t){var e=Sy(t.alternate,t,ot);t.memoizedProps=t.pendingProps,e===null?Ey(t):de=e,zh.current=null}function Ey(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kE(n,e),n!==null){n.flags&=32767,de=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{me=6,de=null;return}}else if(n=IE(n,e,ot),n!==null){de=n;return}if(e=e.sibling,e!==null){de=e;return}de=e=t}while(e!==null);me===0&&(me=5)}function Kn(t,e,n){var r=K,i=yt.transition;try{yt.transition=null,K=1,xE(t,e,n,r)}finally{yt.transition=i,K=r}return null}function xE(t,e,n,r){do jr();while(En!==null);if(H&6)throw Error(_(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fw(t,s),t===_e&&(de=_e=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_o||(_o=!0,Ty(na,function(){return jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=K;K=1;var a=H;H|=4,zh.current=null,NE(t,n),py(n,t),Zw(ac),ia=!!oc,ac=oc=null,t.current=n,AE(n),iw(),H=a,K=o,yt.transition=s}else t.current=n;if(_o&&(_o=!1,En=t,Ea=i),s=t.pendingLanes,s===0&&(Nn=null),aw(n.stateNode),rt(t,ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wa)throw wa=!1,t=Nc,Nc=null,t;return Ea&1&&t.tag!==0&&jr(),s=t.pendingLanes,s&1?t===Ac?ji++:(ji=0,Ac=t):ji=0,Vn(),null}function jr(){if(En!==null){var t=Zm(Ea),e=yt.transition,n=K;try{if(yt.transition=null,K=16>t?16:t,En===null)var r=!1;else{if(t=En,En=null,Ea=0,H&6)throw Error(_(331));var i=H;for(H|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Bi(8,c,s)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var p=c.sibling,g=c.return;if(hy(c),c===u){R=null;break}if(p!==null){p.return=g,R=p;break}R=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bi(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,R=f;break e}R=s.return}}var d=t.current;for(R=d;R!==null;){o=R;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,R=m;else e:for(o=d;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:il(9,a)}}catch(E){oe(a,a.return,E)}if(a===o){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(H=i,Vn(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Xa,t)}catch{}r=!0}return r}finally{K=n,yt.transition=e}}return!1}function tp(t,e,n){e=Zr(n,e),e=ey(t,e,1),t=Cn(t,e,1),e=qe(),t!==null&&(xs(t,1,e),rt(t,e))}function oe(t,e,n){if(t.tag===3)tp(t,t,n);else for(;e!==null;){if(e.tag===3){tp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){t=Zr(n,t),t=ty(e,t,1),e=Cn(e,t,1),t=qe(),e!==null&&(xs(e,1,t),rt(e,t));break}}e=e.return}}function LE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,_e===t&&(Re&n)===n&&(me===4||me===3&&(Re&130023424)===Re&&500>ue()-Hh?nr(t,0):jh|=n),rt(t,e)}function _y(t,e){e===0&&(t.mode&1?(e=co,co<<=1,!(co&130023424)&&(co=4194304)):e=1);var n=qe();t=tn(t,e),t!==null&&(xs(t,e,n),rt(t,n))}function $E(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_y(t,n)}function ME(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(e),_y(t,n)}var Sy;Sy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)Ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ze=!1,TE(t,e,n);Ze=!!(t.flags&131072)}else Ze=!1,ee&&e.flags&1048576&&kg(e,ha,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zo(t,e),t=e.pendingProps;var i=Qr(e,je.current);zr(e,n),i=Fh(null,e,r,t,i,n);var s=Uh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,ua(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Oh(e),i.updater=nl,e.stateNode=i,i._reactInternals=e,gc(e,r,t,n),e=wc(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&kh(e),Ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=UE(r),t=St(r,t),i){case 0:e=vc(null,e,r,t,n);break e;case 1:e=Wf(null,e,r,t,n);break e;case 11:e=jf(null,e,r,t,n);break e;case 14:e=Hf(null,e,r,St(r.type,t),n);break e}throw Error(_(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),vc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Wf(t,e,r,i,n);case 3:e:{if(sy(e),t===null)throw Error(_(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Rg(t,e),pa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zr(Error(_(423)),e),e=Kf(t,e,r,n,i);break e}else if(r!==i){i=Zr(Error(_(424)),e),e=Kf(t,e,r,n,i);break e}else for(at=kn(e.stateNode.containerInfo.firstChild),lt=e,ee=!0,It=null,n=xg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),r===i){e=nn(t,e,n);break e}Ke(t,e,r,n)}e=e.child}return e;case 5:return Lg(e),t===null&&fc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lc(r,i)?o=null:s!==null&&lc(r,s)&&(e.flags|=32),iy(t,e),Ke(t,e,o,n),e.child;case 6:return t===null&&fc(e),null;case 13:return oy(t,e,n);case 4:return xh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yr(e,null,r,n):Ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),jf(t,e,r,i,n);case 7:return Ke(t,e,e.pendingProps,n),e.child;case 8:return Ke(t,e,e.pendingProps.children,n),e.child;case 12:return Ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(da,r._currentValue),r._currentValue=o,s!==null)if(Dt(s.value,o)){if(s.children===i.children&&!tt.current){e=nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Xt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zr(e,n),i=vt(i),r=r(i),e.flags|=1,Ke(t,e,r,n),e.child;case 14:return r=e.type,i=St(r,e.pendingProps),i=St(r.type,i),Hf(t,e,r,i,n);case 15:return ny(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),zo(t,e),e.tag=1,nt(r)?(t=!0,ua(e)):t=!1,zr(e,n),Pg(e,r,i),gc(e,r,i,n),wc(null,e,r,!0,t,n);case 19:return ay(t,e,n);case 22:return ry(t,e,n)}throw Error(_(156,e.tag))};function Ty(t,e){return Qm(t,e)}function FE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(t,e,n,r){return new FE(t,e,n,r)}function qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function UE(t){if(typeof t=="function")return qh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fh)return 11;if(t===ph)return 14}return 2}function Rn(t,e){var n=t.alternate;return n===null?(n=gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")qh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cr:return rr(n.children,i,s,e);case dh:o=8,i|=8;break;case Vu:return t=gt(12,n,e,i|2),t.elementType=Vu,t.lanes=s,t;case Bu:return t=gt(13,n,e,i),t.elementType=Bu,t.lanes=s,t;case zu:return t=gt(19,n,e,i),t.elementType=zu,t.lanes=s,t;case Om:return ol(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dm:o=10;break e;case Pm:o=9;break e;case fh:o=11;break e;case ph:o=14;break e;case dn:o=16,r=null;break e}throw Error(_(130,t==null?t:typeof t,""))}return e=gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function rr(t,e,n,r){return t=gt(7,t,r,e),t.lanes=n,t}function ol(t,e,n,r){return t=gt(22,t,r,e),t.elementType=Om,t.lanes=n,t.stateNode={isHidden:!1},t}function hu(t,e,n){return t=gt(6,t,null,e),t.lanes=n,t}function du(t,e,n){return e=gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qh(t,e,n,r,i,s,o,a,l){return t=new bE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oh(s),t}function VE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Iy(t){if(!t)return Ln;t=t._reactInternals;e:{if(Er(t)!==t||t.tag!==1)throw Error(_(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_(171))}if(t.tag===1){var n=t.type;if(nt(n))return Tg(t,n,e)}return e}function ky(t,e,n,r,i,s,o,a,l){return t=Qh(n,r,!0,t,i,s,o,a,l),t.context=Iy(null),n=t.current,r=qe(),i=An(n),s=Xt(r,i),s.callback=e??null,Cn(n,s,i),t.current.lanes=i,xs(t,i,r),rt(t,r),t}function al(t,e,n,r){var i=e.current,s=qe(),o=An(i);return n=Iy(n),e.context===null?e.context=n:e.pendingContext=n,e=Xt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cn(i,e,o),t!==null&&(Rt(t,i,o,s),bo(t,i,o)),o}function Sa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xh(t,e){np(t,e),(t=t.alternate)&&np(t,e)}function BE(){return null}var Cy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yh(t){this._internalRoot=t}ll.prototype.render=Yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_(409));al(t,e,null,null)};ll.prototype.unmount=Yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hr(function(){al(null,t,null,null)}),e[en]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var e=ng();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pn.length&&e!==0&&e<pn[n].priority;n++);pn.splice(n,0,t),n===0&&ig(t)}};function Jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rp(){}function zE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Sa(o);s.call(u)}}var o=ky(e,r,t,0,null,!1,!1,"",rp);return t._reactRootContainer=o,t[en]=o.current,as(t.nodeType===8?t.parentNode:t),hr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Sa(l);a.call(u)}}var l=Qh(t,0,!1,null,null,!1,!1,"",rp);return t._reactRootContainer=l,t[en]=l.current,as(t.nodeType===8?t.parentNode:t),hr(function(){al(e,l,n,r)}),l}function cl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Sa(o);a.call(l)}}al(e,o,t,i)}else o=zE(n,e,t,i,r);return Sa(o)}eg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Di(e.pendingLanes);n!==0&&(yh(e,n|1),rt(e,ue()),!(H&6)&&(ei=ue()+500,Vn()))}break;case 13:hr(function(){var r=tn(t,1);if(r!==null){var i=qe();Rt(r,t,1,i)}}),Xh(t,1)}};vh=function(t){if(t.tag===13){var e=tn(t,134217728);if(e!==null){var n=qe();Rt(e,t,134217728,n)}Xh(t,134217728)}};tg=function(t){if(t.tag===13){var e=An(t),n=tn(t,e);if(n!==null){var r=qe();Rt(n,t,e,r)}Xh(t,e)}};ng=function(){return K};rg=function(t,e){var n=K;try{return K=t,e()}finally{K=n}};Ju=function(t,e,n){switch(e){case"input":if(Wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=el(r);if(!i)throw Error(_(90));Lm(r),Wu(r,i)}}}break;case"textarea":Mm(t,n);break;case"select":e=n.value,e!=null&&Ur(t,!!n.multiple,e,!1)}};jm=Wh;Hm=hr;var jE={usingClientEntryPoint:!1,Events:[$s,Dr,el,Bm,zm,Wh]},Ci={findFiberByHostInstance:Qn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},HE={bundleType:Ci.bundleType,version:Ci.version,rendererPackageName:Ci.rendererPackageName,rendererConfig:Ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ci.findFiberByHostInstance||BE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Xa=So.inject(HE),$t=So}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jE;ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(e))throw Error(_(200));return VE(t,e,null,n)};ht.createRoot=function(t,e){if(!Jh(t))throw Error(_(299));var n=!1,r="",i=Cy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Qh(t,1,!1,null,null,n,!1,r,i),t[en]=e.current,as(t.nodeType===8?t.parentNode:t),new Yh(e)};ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=Gm(e),t=t===null?null:t.stateNode,t};ht.flushSync=function(t){return hr(t)};ht.hydrate=function(t,e,n){if(!ul(e))throw Error(_(200));return cl(null,t,e,!0,n)};ht.hydrateRoot=function(t,e,n){if(!Jh(t))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Cy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ky(e,null,t,1,n??null,i,!1,s,o),t[en]=e.current,as(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ll(e)};ht.render=function(t,e,n){if(!ul(e))throw Error(_(200));return cl(null,t,e,!1,n)};ht.unmountComponentAtNode=function(t){if(!ul(t))throw Error(_(40));return t._reactRootContainer?(hr(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[en]=null})}),!0):!1};ht.unstable_batchedUpdates=Wh;ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ul(n))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return cl(t,e,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ht})(B1);var ip=Fu;Mu.createRoot=ip.createRoot,Mu.hydrateRoot=ip.hydrateRoot;function Ny(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Ny(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function _n(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Ny(t))&&(r&&(r+=" "),r+=e);return r}const Hi=t=>typeof t=="number"&&!isNaN(t),dr=t=>typeof t=="string",et=t=>typeof t=="function",Ko=t=>dr(t)||et(t)?t:null,fu=t=>b.isValidElement(t)||dr(t)||et(t)||Hi(t);function WE(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function hl(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:p}=o;const g=r?`${e}--${l}`:e,y=r?`${n}--${l}`:n,v=b.useRef(0);return b.useLayoutEffect(()=>{const S=h.current,f=g.split(" "),d=m=>{m.target===h.current&&(S.dispatchEvent(new Event("d")),S.removeEventListener("animationend",d),S.removeEventListener("animationcancel",d),v.current===0&&m.type!=="animationcancel"&&S.classList.remove(...f))};S.classList.add(...f),S.addEventListener("animationend",d),S.addEventListener("animationcancel",d)},[]),b.useEffect(()=>{const S=h.current,f=()=>{S.removeEventListener("animationend",f),i?WE(S,c,s):c()};p||(u?f():(v.current=1,S.className+=` ${y}`,S.addEventListener("animationend",f)))},[p]),Q.createElement(Q.Fragment,null,a)}}function sp(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}const ft={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},To=t=>{let{theme:e,type:n,...r}=t;return Q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},pu={info:function(t){return Q.createElement(To,{...t},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return Q.createElement(To,{...t},Q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return Q.createElement(To,{...t},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return Q.createElement(To,{...t},Q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Q.createElement("div",{className:"Toastify__spinner"})}};function KE(t){const[,e]=b.useReducer(g=>g+1,0),[n,r]=b.useState([]),i=b.useRef(null),s=b.useRef(new Map).current,o=g=>n.indexOf(g)!==-1,a=b.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:g=>s.get(g)}).current;function l(g){let{containerId:y}=g;const{limit:v}=a.props;!v||y&&a.containerId!==y||(a.count-=a.queue.length,a.queue=[])}function u(g){r(y=>g==null?[]:y.filter(v=>v!==g))}function c(){const{toastContent:g,toastProps:y,staleId:v}=a.queue.shift();p(g,y,v)}function h(g,y){let{delay:v,staleId:S,...f}=y;if(!fu(g)||function(ge){return!i.current||a.props.enableMultiContainer&&ge.containerId!==a.props.containerId||s.has(ge.toastId)&&ge.updateId==null}(f))return;const{toastId:d,updateId:m,data:w}=f,{props:E}=a,C=()=>u(d),A=m==null;A&&a.count++;const k={...E,style:E.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(f).filter(ge=>{let[We,xe]=ge;return xe!=null})),toastId:d,updateId:m,data:w,closeToast:C,isIn:!1,className:Ko(f.className||E.toastClassName),bodyClassName:Ko(f.bodyClassName||E.bodyClassName),progressClassName:Ko(f.progressClassName||E.progressClassName),autoClose:!f.isLoading&&(j=f.autoClose,$=E.autoClose,j===!1||Hi(j)&&j>0?j:$),deleteToast(){const ge=sp(s.get(d),"removed");s.delete(d),ft.emit(4,ge);const We=a.queue.length;if(a.count=d==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),We>0){const xe=d==null?a.props.limit:1;if(We===1||xe===1)a.displayedToast++,c();else{const Bt=xe>We?We:xe;a.displayedToast=Bt;for(let ke=0;ke<Bt;ke++)c()}}else e()}};var j,$;k.iconOut=function(ge){let{theme:We,type:xe,isLoading:Bt,icon:ke}=ge,st=null;const N={theme:We,type:xe};return ke===!1||(et(ke)?st=ke(N):b.isValidElement(ke)?st=b.cloneElement(ke,N):dr(ke)||Hi(ke)?st=ke:Bt?st=pu.spinner():(O=>O in pu)(xe)&&(st=pu[xe](N))),st}(k),et(f.onOpen)&&(k.onOpen=f.onOpen),et(f.onClose)&&(k.onClose=f.onClose),k.closeButton=E.closeButton,f.closeButton===!1||fu(f.closeButton)?k.closeButton=f.closeButton:f.closeButton===!0&&(k.closeButton=!fu(E.closeButton)||E.closeButton);let fe=g;b.isValidElement(g)&&!dr(g.type)?fe=b.cloneElement(g,{closeToast:C,toastProps:k,data:w}):et(g)&&(fe=g({closeToast:C,toastProps:k,data:w})),E.limit&&E.limit>0&&a.count>E.limit&&A?a.queue.push({toastContent:fe,toastProps:k,staleId:S}):Hi(v)?setTimeout(()=>{p(fe,k,S)},v):p(fe,k,S)}function p(g,y,v){const{toastId:S}=y;v&&s.delete(v);const f={content:g,props:y};s.set(S,f),r(d=>[...d,S].filter(m=>m!==v)),ft.emit(4,sp(f,f.props.updateId==null?"added":"updated"))}return b.useEffect(()=>(a.containerId=t.containerId,ft.cancelEmit(3).on(0,h).on(1,g=>i.current&&u(g)).on(5,l).emit(2,a),()=>{s.clear(),ft.emit(3,a)}),[]),b.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(g){const y=new Map,v=Array.from(s.values());return t.newestOnTop&&v.reverse(),v.forEach(S=>{const{position:f}=S.props;y.has(f)||y.set(f,[]),y.get(f).push(S)}),Array.from(y,S=>g(S[0],S[1]))},containerRef:i,isToastActive:o}}function op(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function ap(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function GE(t){const[e,n]=b.useState(!1),[r,i]=b.useState(!1),s=b.useRef(null),o=b.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=b.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:h,closeOnClick:p}=t;function g(w){if(t.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",f),document.addEventListener("mouseup",d),document.addEventListener("touchmove",f),document.addEventListener("touchend",d);const E=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=E.getBoundingClientRect(),E.style.transition="",o.x=op(w.nativeEvent),o.y=ap(w.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=E.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=E.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function y(w){if(o.boundingRect){const{top:E,bottom:C,left:A,right:k}=o.boundingRect;w.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=A&&o.x<=k&&o.y>=E&&o.y<=C?S():v()}}function v(){n(!0)}function S(){n(!1)}function f(w){const E=s.current;o.canDrag&&E&&(o.didMove=!0,e&&S(),o.x=op(w),o.y=ap(w),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),E.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,E.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function d(){document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",d);const w=s.current;if(o.canDrag&&o.didMove&&w){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${t.draggableDirection}(0)`,w.style.opacity="1"}}b.useEffect(()=>{a.current=t}),b.useEffect(()=>(s.current&&s.current.addEventListener("d",v,{once:!0}),et(t.onOpen)&&t.onOpen(b.isValidElement(t.children)&&t.children.props),()=>{const w=a.current;et(w.onClose)&&w.onClose(b.isValidElement(w.children)&&w.children.props)}),[]),b.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",v),window.addEventListener("blur",S)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",v),window.removeEventListener("blur",S))}),[t.pauseOnFocusLoss]);const m={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return l&&u&&(m.onMouseEnter=S,m.onMouseLeave=v),p&&(m.onClick=w=>{h&&h(w),o.canCloseOnClick&&c()}),{playToast:v,pauseToast:S,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:m}}function Ay(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return Q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},Q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function qE(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:h,theme:p}=t;const g=s||l&&u===0,y={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};l&&(y.transform=`scaleX(${u})`);const v=_n("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),S=et(o)?o({rtl:c,type:i,defaultClassName:v}):_n(v,o);return Q.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:S,style:y,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const QE=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=GE(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:h,transition:p,position:g,className:y,style:v,bodyClassName:S,bodyStyle:f,progressClassName:d,progressStyle:m,updateId:w,role:E,progress:C,rtl:A,toastId:k,deleteToast:j,isIn:$,isLoading:fe,iconOut:ge,closeOnClick:We,theme:xe}=t,Bt=_n("Toastify__toast",`Toastify__toast-theme--${xe}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":A},{"Toastify__toast--close-on-click":We}),ke=et(y)?y({rtl:A,position:g,type:u,defaultClassName:Bt}):_n(Bt,y),st=!!C||!a,N={closeToast:h,type:u,theme:xe};let O=null;return s===!1||(O=et(s)?s(N):b.isValidElement(s)?b.cloneElement(s,N):Ay(N)),Q.createElement(p,{isIn:$,done:j,position:g,preventExitTransition:n,nodeRef:r},Q.createElement("div",{id:k,onClick:l,className:ke,...i,style:v,ref:r},Q.createElement("div",{...$&&{role:E},className:et(S)?S({type:u}):_n("Toastify__toast-body",S),style:f},ge!=null&&Q.createElement("div",{className:_n("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!fe})},ge),Q.createElement("div",null,o)),O,Q.createElement(qE,{...w&&!st?{key:`pb-${w}`}:{},rtl:A,theme:xe,delay:a,isRunning:e,isIn:$,closeToast:h,hide:c,type:u,style:m,className:d,controlledProgress:st,progress:C||0})))},dl=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},XE=hl(dl("bounce",!0));hl(dl("slide",!0));hl(dl("zoom"));hl(dl("flip"));const Pc=b.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=KE(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(c){const h=_n("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return et(s)?s({position:c,rtl:a,defaultClassName:h}):_n(h,Ko(s))}return b.useEffect(()=>{e&&(e.current=r.current)},[]),Q.createElement("div",{ref:r,className:"Toastify",id:l},n((c,h)=>{const p=h.length?{...o}:{...o,pointerEvents:"none"};return Q.createElement("div",{className:u(c),style:p,key:`container-${c}`},h.map((g,y)=>{let{content:v,props:S}=g;return Q.createElement(QE,{...S,isIn:i(S.toastId),style:{...S.style,"--nth":y+1,"--len":h.length},key:`toast-${S.key}`},v)}))}))});Pc.displayName="ToastContainer",Pc.defaultProps={position:"top-right",transition:XE,autoClose:5e3,closeButton:Ay,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let mu,Gn=new Map,Oi=[],YE=1;function Ry(){return""+YE++}function JE(t){return t&&(dr(t.toastId)||Hi(t.toastId))?t.toastId:Ry()}function Wi(t,e){return Gn.size>0?ft.emit(0,t,e):Oi.push({content:t,options:e}),e.toastId}function Ta(t,e){return{...e,type:e&&e.type||t,toastId:JE(e)}}function Io(t){return(e,n)=>Wi(e,Ta(t,n))}function G(t,e){return Wi(t,Ta("default",e))}G.loading=(t,e)=>Wi(t,Ta("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),G.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=dr(i)?G.loading(i,n):G.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,h,p)=>{if(h==null)return void G.dismiss(r);const g={type:c,...a,...n,data:p},y=dr(h)?{render:h}:h;return r?G.update(r,{...g,...y}):G(y.render,{...g,...y}),p},u=et(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},G.success=Io("success"),G.info=Io("info"),G.error=Io("error"),G.warning=Io("warning"),G.warn=G.warning,G.dark=(t,e)=>Wi(t,Ta("default",{theme:"dark",...e})),G.dismiss=t=>{Gn.size>0?ft.emit(1,t):Oi=Oi.filter(e=>t!=null&&e.options.toastId!==t)},G.clearWaitingQueue=function(t){return t===void 0&&(t={}),ft.emit(5,t)},G.isActive=t=>{let e=!1;return Gn.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},G.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Gn.get(s||mu);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:Ry()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Wi(o,s)}},0)},G.done=t=>{G.update(t,{progress:1})},G.onChange=t=>(ft.on(4,t),()=>{ft.off(4,t)}),G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},ft.on(2,t=>{mu=t.containerId||t,Gn.set(mu,t),Oi.forEach(e=>{ft.emit(0,e.content,e.options)}),Oi=[]}).on(3,t=>{Gn.delete(t.containerId||t),Gn.size===0&&ft.off(0).off(1).off(5)});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ZE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Py={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[c],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new e_;const p=s<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class e_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const t_=function(t){const e=Dy(t);return Py.encodeByteArray(e,!0)},Ia=function(t){return t_(t).replace(/\./g,"")},Oy=function(t){try{return Py.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=()=>n_().__FIREBASE_DEFAULTS__,i_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},s_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oy(t[1]);return e&&JSON.parse(e)},Zh=()=>{try{return r_()||i_()||s_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xy=t=>{var e,n;return(n=(e=Zh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},o_=t=>{const e=xy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},a_=()=>{var t;return(t=Zh())===null||t===void 0?void 0:t.config},Ly=t=>{var e;return(e=Zh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ia(JSON.stringify(n)),Ia(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function h_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function d_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f_(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function p_(){try{return typeof indexedDB=="object"}catch{return!1}}function m_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=g_,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?y_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,r)}}function y_(t,e){return t.replace(v_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const v_=/\{\$([^}]+)}/g;function w_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ka(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(lp(s)&&lp(o)){if(!ka(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function lp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function E_(t,e){const n=new __(t,e);return n.subscribe.bind(n)}class __{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");S_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gu),i.error===void 0&&(i.error=gu),i.complete===void 0&&(i.complete=gu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new l_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(k_(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I_(t){return t===qn?void 0:t}function k_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new T_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const N_={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},A_=W.INFO,R_={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},D_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=R_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ed{constructor(e){this.name=e,this._logLevel=A_,this._logHandler=D_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const P_=(t,e)=>e.some(n=>t instanceof n);let up,cp;function O_(){return up||(up=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function x_(){return cp||(cp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $y=new WeakMap,Oc=new WeakMap,My=new WeakMap,yu=new WeakMap,td=new WeakMap;function L_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$y.set(n,t)}).catch(()=>{}),td.set(e,t),e}function $_(t){if(Oc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Oc.set(t,e)}let xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||My.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function M_(t){xc=t(xc)}function F_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vu(this),e,...n);return My.set(r,e.sort?e.sort():[e]),Dn(r)}:x_().includes(t)?function(...e){return t.apply(vu(this),e),Dn($y.get(this))}:function(...e){return Dn(t.apply(vu(this),e))}}function U_(t){return typeof t=="function"?F_(t):(t instanceof IDBTransaction&&$_(t),P_(t,O_())?new Proxy(t,xc):t)}function Dn(t){if(t instanceof IDBRequest)return L_(t);if(yu.has(t))return yu.get(t);const e=U_(t);return e!==t&&(yu.set(t,e),td.set(e,t)),e}const vu=t=>td.get(t);function b_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Dn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Dn(o.result),l.oldVersion,l.newVersion,Dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const V_=["get","getKey","getAll","getAllKeys","count"],B_=["put","add","delete","clear"],wu=new Map;function hp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wu.get(e))return wu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=B_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||V_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return wu.set(e,s),s}M_(t=>({...t,get:(e,n,r)=>hp(e,n)||t.get(e,n,r),has:(e,n)=>!!hp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function j_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lc="@firebase/app",dp="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new ed("@firebase/app"),H_="@firebase/app-compat",W_="@firebase/analytics-compat",K_="@firebase/analytics",G_="@firebase/app-check-compat",q_="@firebase/app-check",Q_="@firebase/auth",X_="@firebase/auth-compat",Y_="@firebase/database",J_="@firebase/database-compat",Z_="@firebase/functions",eS="@firebase/functions-compat",tS="@firebase/installations",nS="@firebase/installations-compat",rS="@firebase/messaging",iS="@firebase/messaging-compat",sS="@firebase/performance",oS="@firebase/performance-compat",aS="@firebase/remote-config",lS="@firebase/remote-config-compat",uS="@firebase/storage",cS="@firebase/storage-compat",hS="@firebase/firestore",dS="@firebase/firestore-compat",fS="firebase",pS="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="[DEFAULT]",mS={[Lc]:"fire-core",[H_]:"fire-core-compat",[K_]:"fire-analytics",[W_]:"fire-analytics-compat",[q_]:"fire-app-check",[G_]:"fire-app-check-compat",[Q_]:"fire-auth",[X_]:"fire-auth-compat",[Y_]:"fire-rtdb",[J_]:"fire-rtdb-compat",[Z_]:"fire-fn",[eS]:"fire-fn-compat",[tS]:"fire-iid",[nS]:"fire-iid-compat",[rS]:"fire-fcm",[iS]:"fire-fcm-compat",[sS]:"fire-perf",[oS]:"fire-perf-compat",[aS]:"fire-rc",[lS]:"fire-rc-compat",[uS]:"fire-gcs",[cS]:"fire-gcs-compat",[hS]:"fire-fst",[dS]:"fire-fst-compat","fire-js":"fire-js",[fS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Map,Mc=new Map;function gS(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(Mc.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;Mc.set(e,t);for(const n of gs.values())gS(n,t);return!0}function nd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new Fs("app","Firebase",yS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=pS;function Fy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$c,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=a_()),!n)throw Pn.create("no-options");const s=gs.get(i);if(s){if(ka(n,s.options)&&ka(r,s.config))return s;throw Pn.create("duplicate-app",{appName:i})}const o=new C_(i);for(const l of Mc.values())o.addComponent(l);const a=new vS(n,r,o);return gs.set(i,a),a}function rd(t=$c){const e=gs.get(t);if(!e&&t===$c)return Fy();if(!e)throw Pn.create("no-app",{appName:t});return e}function wS(){return Array.from(gs.values())}function On(t,e,n){var r;let i=(r=mS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}ti(new fr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="firebase-heartbeat-database",_S=1,ys="firebase-heartbeat-store";let Eu=null;function Uy(){return Eu||(Eu=b_(ES,_S,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ys)}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),Eu}async function SS(t){try{return(await Uy()).transaction(ys).objectStore(ys).get(by(t))}catch(e){if(e instanceof ln)pr.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function fp(t,e){try{const r=(await Uy()).transaction(ys,"readwrite");return await r.objectStore(ys).put(e,by(t)),r.done}catch(n){if(n instanceof ln)pr.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function by(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=1024,IS=30*24*60*60*1e3;class kS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=pp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=IS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pp(),{heartbeatsToSend:n,unsentEntries:r}=CS(this._heartbeatsCache.heartbeats),i=Ia(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pp(){return new Date().toISOString().substring(0,10)}function CS(t,e=TS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return p_()?m_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await SS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mp(t){return Ia(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t){ti(new fr("platform-logger",e=>new z_(e),"PRIVATE")),ti(new fr("heartbeat",e=>new kS(e),"PRIVATE")),On(Lc,dp,t),On(Lc,dp,"esm2017"),On("fire-js","")}AS("");function id(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Vy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RS=Vy,By=new Fs("auth","Firebase",Vy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new ed("@firebase/auth");function DS(t,...e){Ca.logLevel<=W.WARN&&Ca.warn(`Auth (${pi}): ${t}`,...e)}function Go(t,...e){Ca.logLevel<=W.ERROR&&Ca.error(`Auth (${pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw sd(t,...e)}function Ft(t,...e){return sd(t,...e)}function zy(t,e,n){const r=Object.assign(Object.assign({},RS()),{[e]:n});return new Fs("auth","Firebase",r).create(e,{appName:t.name})}function PS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),zy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return By.create(t,...e)}function x(t,e,...n){if(!t)throw sd(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Go(e),new Error(e)}function rn(t,e){t||Gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OS(){return gp()==="http:"||gp()==="https:"}function gp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OS()||h_()||"connection"in navigator)?navigator.onLine:!0}function LS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=c_()||d_()}get(){return xS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=new bs(3e4,6e4);function Hy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vs(t,e,n,r,i={}){return Wy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Us(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),jy.fetch()(Ky(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Wy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$S),e);try{const i=new US(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ko(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ko(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ko(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zy(t,c,u);bt(t,c)}}catch(i){if(i instanceof ln)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function FS(t,e,n,r,i={}){const s=await Vs(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ky(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?od(t.config,i):`${t.config.apiScheme}://${i}`}class US{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),MS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ft(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(t,e){return Vs(t,"POST","/v1/accounts:delete",e)}async function VS(t,e){return Vs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BS(t,e=!1){const n=Et(t),r=await n.getIdToken(e),i=ad(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ki(_u(i.auth_time)),issuedAtTime:Ki(_u(i.iat)),expirationTime:Ki(_u(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _u(t){return Number(t)*1e3}function ad(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Go("JWT malformed, contained fewer than 3 sections"),null;try{const i=Oy(n);return i?JSON.parse(i):(Go("Failed to decode base64 JWT payload"),null)}catch(i){return Go("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zS(t){const e=ad(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&jS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vs(t,VS(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?GS(s.providerUserInfo):[],a=KS(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Gy(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function WS(t){const e=Et(t);await Na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function GS(t){return t.map(e=>{var{providerId:n}=e,r=id(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(t,e){const n=await Wy(t,{},async()=>{const r=Us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ky(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ws;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ir{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Gy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vs(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BS(this,e)}reload(){return WS(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vs(this,bS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:E,providerData:C,stsTokenManager:A}=n;x(m&&A,e,"internal-error");const k=ws.fromJSON(this.name,A);x(typeof m=="string",e,"internal-error"),cn(h,e.name),cn(p,e.name),x(typeof w=="boolean",e,"internal-error"),x(typeof E=="boolean",e,"internal-error"),cn(g,e.name),cn(y,e.name),cn(v,e.name),cn(S,e.name),cn(f,e.name),cn(d,e.name);const j=new ir({uid:m,auth:e,email:p,emailVerified:w,displayName:h,isAnonymous:E,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:k,createdAt:f,lastLoginAt:d});return C&&Array.isArray(C)&&(j.providerData=C.map($=>Object.assign({},$))),S&&(j._redirectEventId=S),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new ws;i.updateFromServerResponse(n);const s=new ir({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Na(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=new Map;function qt(t){rn(t instanceof Function,"Expected a class definition");let e=yp.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qy.type="NONE";const vp=qy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t,e,n){return`firebase:${t}:${e}:${n}`}class Hr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qo(this.userKey,i.apiKey,s),this.fullPersistenceKey=qo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hr(qt(vp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qt(vp);const o=qo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ir._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Hr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Hr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zy(e))return"Blackberry";if(ev(e))return"Webos";if(ld(e))return"Safari";if((e.includes("chrome/")||Xy(e))&&!e.includes("edge/"))return"Chrome";if(Jy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qy(t=He()){return/firefox\//i.test(t)}function ld(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xy(t=He()){return/crios\//i.test(t)}function Yy(t=He()){return/iemobile/i.test(t)}function Jy(t=He()){return/android/i.test(t)}function Zy(t=He()){return/blackberry/i.test(t)}function ev(t=He()){return/webos/i.test(t)}function fl(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QS(t=He()){var e;return fl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XS(){return f_()&&document.documentMode===10}function tv(t=He()){return fl(t)||Jy(t)||ev(t)||Zy(t)||/windows phone/i.test(t)||Yy(t)}function YS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t,e=[]){let n;switch(t){case"Browser":n=wp(He());break;case"Worker":n=`${wp(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pi}/${r}`}async function rv(t,e){return Vs(t,"GET","/v2/recaptchaConfig",Hy(t,e))}function Ep(t){return t!==void 0&&t.enterprise!==void 0}class iv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",JS().appendChild(r)})}function ZS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eT="https://www.google.com/recaptcha/enterprise.js?render=",tT="recaptcha-enterprise";class nT{constructor(e){this.type=tT,this.auth=Bs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{rv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new iv(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ep(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ep(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}sv(eT+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _p(this),this.idTokenSubscription=new _p(this),this.beforeStateQueue=new rT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Et(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}async initializeRecaptchaConfig(){const e=await rv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new iv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new nT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Bs(t){return Et(t)}class _p{constructor(e){this.auth=e,this.observer=null,this.addObserver=E_(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t,e){const n=nd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ka(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function oT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aT(t,e,n){const r=Bs(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ov(e),{host:o,port:a}=lT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uT()}function ov(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lT(t){const e=ov(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sp(o)}}}function Sp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t,e){return FS(t,"POST","/v1/accounts:signInWithIdp",Hy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="http://localhost";class mr extends av{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=id(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wr(e,n)}buildRequest(){const e={requestUri:cT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Us(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends zs{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends zs{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends zs{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ir._fromIdTokenResponse(e,r,i),o=Tp(r);return new ni({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Tp(r);return new ni({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Tp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Aa(e,n,r,i)}}function lv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(t,s,e,r):s})}async function hT(t,e,n=!1){const r=await vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ni._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await vs(t,lv(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=ad(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),ni._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(t,e,n=!1){const r="signIn",i=await lv(t,r,e),s=await ni._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function pT(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function mT(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function gT(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}function yT(t){return Et(t).signOut()}const Ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(){const t=He();return ld(t)||fl(t)}const wT=1e3,ET=10;class cv extends uv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vT()&&YS(),this.fallbackToPolling=tv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);XS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ET):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cv.type="LOCAL";const _T=cv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv extends uv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hv.type="SESSION";const dv=hv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ST(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=cd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function IT(t){Ut().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function kT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NT(){return fv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="firebaseLocalStorageDb",AT=1,Da="firebaseLocalStorage",mv="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ml(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function RT(){const t=indexedDB.deleteDatabase(pv);return new js(t).toPromise()}function Uc(){const t=indexedDB.open(pv,AT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Da,{keyPath:mv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Da)?e(r):(r.close(),await RT(),e(await Uc()))})})}async function Ip(t,e,n){const r=ml(t,!0).put({[mv]:e,value:n});return new js(r).toPromise()}async function DT(t,e){const n=ml(t,!1).get(e),r=await new js(n).toPromise();return r===void 0?null:r.value}function kp(t,e){const n=ml(t,!0).delete(e);return new js(n).toPromise()}const PT=800,OT=3;class gv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pl._getInstance(NT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kT(),!this.activeServiceWorker)return;this.sender=new TT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uc();return await Ip(e,Ra,"1"),await kp(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ip(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ml(i,!1).getAll();return new js(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gv.type="LOCAL";const xT=gv;new bs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t,e){return e?qt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends av{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LT(t){return fT(t.auth,new hd(t),t.bypassAuthState)}function $T(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),dT(n,new hd(t),t.bypassAuthState)}async function MT(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),hT(n,new hd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LT;case"linkViaPopup":case"linkViaRedirect":return MT;case"reauthViaPopup":case"reauthViaRedirect":return $T;default:bt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=new bs(2e3,1e4);async function UT(t,e,n){const r=Bs(t);PS(t,e,ud);const i=yv(r,n);return new Jn(r,"signInViaPopup",e,i).executeNotNull()}class Jn extends vv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,FT.get())};e()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="pendingRedirect",Qo=new Map;class VT extends vv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qo.get(this.auth._key());if(!e){try{const r=await BT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qo.set(this.auth._key(),e)}return this.bypassAuthState||Qo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BT(t,e){const n=HT(e),r=jT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zT(t,e){Qo.set(t._key(),e)}function jT(t){return qt(t._redirectPersistence)}function HT(t){return qo(bT,t.config.apiKey,t.name)}async function WT(t,e,n=!1){const r=Bs(t),i=yv(r,e),o=await new VT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=10*60*1e3;class GT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cp(e))}saveEventToCache(e){this.cachedEventUids.add(Cp(e)),this.lastProcessedEventTime=Date.now()}}function Cp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e={}){return Vs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YT=/^https?/;async function JT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QT(t);for(const n of e)try{if(ZT(n))return}catch{}bt(t,"unauthorized-domain")}function ZT(t){const e=Fc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YT.test(n))return!1;if(XT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=new bs(3e4,6e4);function Np(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tI(t){return new Promise((e,n)=>{var r,i,s;function o(){Np(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Np(),n(Ft(t,"network-request-failed"))},timeout:eI.get()})}if(!((i=(r=Ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ut().gapi)===null||s===void 0)&&s.load)o();else{const a=ZS("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},sv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function nI(t){return Xo=Xo||tI(t),Xo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=new bs(5e3,15e3),iI="__/auth/iframe",sI="emulator/auth/iframe",oI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lI(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?od(e,sI):`https://${t.config.authDomain}/${iI}`,r={apiKey:e.apiKey,appName:t.name,v:pi},i=aI.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Us(r).slice(1)}`}async function uI(t){const e=await nI(t),n=Ut().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:lI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Ut().setTimeout(()=>{s(o)},rI.get());function l(){Ut().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hI=500,dI=600,fI="_blank",pI="http://localhost";class Ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mI(t,e,n,r=hI,i=dI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cI),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();n&&(a=Xy(u)?fI:n),Qy(u)&&(e=e||pI,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[g,y])=>`${p}${g}=${y},`,"");if(QS(u)&&a!=="_self")return gI(e||"",a),new Ap(null);const h=window.open(e||"",a,c);x(h,t,"popup-blocked");try{h.focus()}catch{}return new Ap(h)}function gI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="__/auth/handler",vI="emulator/auth/handler",wI=encodeURIComponent("fac");async function Rp(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pi,eventId:i};if(e instanceof ud){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",w_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof zs){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${wI}=${encodeURIComponent(l)}`:"";return`${EI(t)}?${Us(a).slice(1)}${u}`}function EI({config:t}){return t.emulator?od(t,vI):`https://${t.authDomain}/${yI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="webStorageSupport";class _I{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dv,this._completeRedirectFn=WT,this._overrideRedirectResult=zT}async _openPopup(e,n,r,i){var s;rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Rp(e,n,r,Fc(),i);return mI(e,o,cd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Rp(e,n,r,Fc(),i);return IT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uI(e),r=new GT(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Su,{type:Su},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Su];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tv()||ld()||fl()}}const SI=_I;var Dp="@firebase/auth",Pp="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kI(t){ti(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),x(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nv(t)},u=new iT(r,i,s,l);return oT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new fr("auth-internal",e=>{const n=Bs(e.getProvider("auth").getImmediate());return(r=>new TI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(Dp,Pp,II(t)),On(Dp,Pp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=5*60,NI=Ly("authIdTokenMaxAge")||CI;let Op=null;const AI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NI)return;const i=n==null?void 0:n.token;Op!==i&&(Op=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function RI(t=rd()){const e=nd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sT(t,{popupRedirectResolver:SI,persistence:[xT,_T,dv]}),r=Ly("authTokenSyncURL");if(r){const s=AI(r);mT(n,s,()=>s(n.currentUser)),pT(n,o=>s(o))}const i=xy("auth");return i&&aT(n,`http://${i}`),n}kI("Browser");var DI="firebase",PI="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(DI,PI,"app");var OI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,dd=dd||{},L=OI||self;function Pa(){}function gl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Hs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function xI(t){return Object.prototype.hasOwnProperty.call(t,Tu)&&t[Tu]||(t[Tu]=++LI)}var Tu="closure_uid_"+(1e9*Math.random()>>>0),LI=0;function $I(t,e,n){return t.call.apply(t.bind,arguments)}function MI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=$I:Be=MI,Be.apply(null,arguments)}function Co(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Bn(){this.s=this.s,this.o=this.o}var FI=0;Bn.prototype.s=!1;Bn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),FI!=0)&&xI(this)};Bn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ev=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function xp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(gl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var UI=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",Pa,e),L.removeEventListener("test",Pa,e)}catch{}return t}();function Oa(t){return/^[\s\xa0]*$/.test(t)}var Lp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Iu(t,e){return t<e?-1:t>e?1:0}function yl(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function Lt(t){return yl().indexOf(t)!=-1}function pd(t){return pd[" "](t),t}pd[" "]=Pa;function bI(t){var e=zI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var VI=Lt("Opera"),ri=Lt("Trident")||Lt("MSIE"),_v=Lt("Edge"),bc=_v||ri,Sv=Lt("Gecko")&&!(yl().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),BI=yl().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function Tv(){var t=L.document;return t?t.documentMode:void 0}var xa;e:{var ku="",Cu=function(){var t=yl();if(Sv)return/rv:([^\);]+)(\)|;)/.exec(t);if(_v)return/Edge\/([\d\.]+)/.exec(t);if(ri)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(BI)return/WebKit\/(\S+)/.exec(t);if(VI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cu&&(ku=Cu?Cu[1]:""),ri){var Nu=Tv();if(Nu!=null&&Nu>parseFloat(ku)){xa=String(Nu);break e}}xa=ku}var zI={};function jI(){return bI(function(){let t=0;const e=Lp(String(xa)).split("."),n=Lp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Iu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Iu(i[2].length==0,s[2].length==0)||Iu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Vc;if(L.document&&ri){var $p=Tv();Vc=$p||parseInt(xa,10)||void 0}else Vc=void 0;var HI=Vc;function Es(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sv){e:{try{pd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:WI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Es.X.h.call(this)}}Oe(Es,ze);var WI={2:"touch",3:"pen",4:"mouse"};Es.prototype.h=function(){Es.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ws="closure_listenable_"+(1e6*Math.random()|0),KI=0;function GI(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++KI,this.ba=this.ea=!1}function vl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function md(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Iv(t){const e={};for(const n in t)e[n]=t[n];return e}const Mp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Mp.length;s++)n=Mp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wl(t){this.src=t,this.g={},this.h=0}wl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=zc(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new GI(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Bc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ev(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(vl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var gd="closure_lm_"+(1e6*Math.random()|0),Au={};function Cv(t,e,n,r,i){if(r&&r.once)return Av(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Cv(t,e[s],n,r,i);return null}return n=wd(n),t&&t[Ws]?t.N(e,n,Hs(r)?!!r.capture:!!r,i):Nv(t,e,n,!1,r,i)}function Nv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Hs(i)?!!i.capture:!!i,a=vd(t);if(a||(t[gd]=a=new wl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=qI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)UI||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Dv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qI(){function t(n){return e.call(t.src,t.listener,n)}const e=QI;return t}function Av(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Av(t,e[s],n,r,i);return null}return n=wd(n),t&&t[Ws]?t.O(e,n,Hs(r)?!!r.capture:!!r,i):Nv(t,e,n,!0,r,i)}function Rv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Rv(t,e[s],n,r,i);else r=Hs(r)?!!r.capture:!!r,n=wd(n),t&&t[Ws]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=zc(s,n,r,i),-1<n&&(vl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=vd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zc(e,n,r,i)),(n=-1<t?e[t]:null)&&yd(n))}function yd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ws])Bc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Dv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vd(e))?(Bc(n,t),n.h==0&&(n.src=null,e[gd]=null)):vl(t)}}}function Dv(t){return t in Au?Au[t]:Au[t]="on"+t}function QI(t,e){if(t.ba)t=!0;else{e=new Es(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&yd(t),t=n.call(r,e)}return t}function vd(t){return t=t[gd],t instanceof wl?t:null}var Ru="__closure_events_fn_"+(1e9*Math.random()>>>0);function wd(t){return typeof t=="function"?t:(t[Ru]||(t[Ru]=function(e){return t.handleEvent(e)}),t[Ru])}function Te(){Bn.call(this),this.i=new wl(this),this.P=this,this.I=null}Oe(Te,Bn);Te.prototype[Ws]=!0;Te.prototype.removeEventListener=function(t,e,n,r){Rv(this,t,e,n,r)};function De(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),kv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=No(o,r,!0,e)&&i}if(o=e.g=t,i=No(o,r,!0,e)&&i,i=No(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=No(o,r,!1,e)&&i}Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vl(n[r]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Te.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function No(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Bc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ed=L.JSON.stringify;function XI(){var t=xv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class YI{constructor(){this.h=this.g=null}add(e,n){const r=Pv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Pv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new JI,t=>t.reset());class JI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ZI(t){L.setTimeout(()=>{throw t},0)}function Ov(t,e){jc||ek(),Hc||(jc(),Hc=!0),xv.add(t,e)}var jc;function ek(){var t=L.Promise.resolve(void 0);jc=function(){t.then(tk)}}var Hc=!1,xv=new YI;function tk(){for(var t;t=XI();){try{t.h.call(t.g)}catch(n){ZI(n)}var e=Pv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hc=!1}function El(t,e){Te.call(this),this.h=t||1,this.g=e||L,this.j=Be(this.lb,this),this.l=Date.now()}Oe(El,Te);D=El.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),De(this,"tick"),this.ca&&(_d(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _d(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){El.X.M.call(this),_d(this),delete this.g};function Sd(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function Lv(t){t.g=Sd(()=>{t.g=null,t.i&&(t.i=!1,Lv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class nk extends Bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lv(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _s(t){Bn.call(this),this.h=t,this.g={}}Oe(_s,Bn);var Fp=[];function $v(t,e,n,r){Array.isArray(n)||(n&&(Fp[0]=n.toString()),n=Fp);for(var i=0;i<n.length;i++){var s=Cv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Mv(t){md(t.g,function(e,n){this.g.hasOwnProperty(n)&&yd(e)},t),t.g={}}_s.prototype.M=function(){_s.X.M.call(this),Mv(this)};_s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _l(){this.g=!0}_l.prototype.Aa=function(){this.g=!1};function rk(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ik(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Fr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ok(t,n)+(r?" "+r:"")})}function sk(t,e){t.info(function(){return"TIMEOUT: "+e})}_l.prototype.info=function(){};function ok(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ed(n)}catch{return e}}var _r={},Up=null;function Sl(){return Up=Up||new Te}_r.Pa="serverreachability";function Fv(t){ze.call(this,_r.Pa,t)}Oe(Fv,ze);function Ss(t){const e=Sl();De(e,new Fv(e))}_r.STAT_EVENT="statevent";function Uv(t,e){ze.call(this,_r.STAT_EVENT,t),this.stat=e}Oe(Uv,ze);function Ge(t){const e=Sl();De(e,new Uv(e,t))}_r.Qa="timingevent";function bv(t,e){ze.call(this,_r.Qa,t),this.size=e}Oe(bv,ze);function Ks(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Tl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Vv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Td(){}Td.prototype.h=null;function bp(t){return t.h||(t.h=t.i())}function Bv(){}var Gs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Id(){ze.call(this,"d")}Oe(Id,ze);function kd(){ze.call(this,"c")}Oe(kd,ze);var Wc;function Il(){}Oe(Il,Td);Il.prototype.g=function(){return new XMLHttpRequest};Il.prototype.i=function(){return{}};Wc=new Il;function qs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new _s(this),this.O=ak,t=bc?125:void 0,this.T=new El(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new zv}function zv(){this.i=null,this.g="",this.h=!1}var ak=45e3,Kc={},La={};D=qs.prototype;D.setTimeout=function(t){this.O=t};function Gc(t,e,n){t.K=1,t.v=Cl(sn(e)),t.s=n,t.P=!0,jv(t,null)}function jv(t,e){t.F=Date.now(),Qs(t),t.A=sn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Yv(n.i,"t",r),t.C=0,n=t.l.H,t.h=new zv,t.g=v0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new nk(Be(t.La,t,t.g),t.N)),$v(t.S,t.g,"readystatechange",t.ib),e=t.H?Iv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ss(),rk(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&Qt(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const c=Qt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||bc||this.g&&(this.h.h||this.g.fa()||jp(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ss(3):Ss(2)),kl(this);var n=this.g.aa();this.Y=n;t:if(Hv(this)){var r=jp(this.g);t="";var i=r.length,s=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),Gi(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ik(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oa(a)){var u=a;break t}}u=null}if(n=u)Fr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,qc(this,n);else{this.i=!1,this.o=3,Ge(12),Zn(this),Gi(this);break e}}this.P?(Wv(this,c,o),bc&&this.i&&c==3&&($v(this.S,this.T,"tick",this.hb),this.T.start())):(Fr(this.j,this.m,o,null),qc(this,o)),c==4&&Zn(this),this.i&&!this.I&&(c==4?p0(this.l,this):(this.i=!1,Qs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),Zn(this),Gi(this)}}}catch{}finally{}};function Hv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Wv(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=lk(t,n),i==La){e==4&&(t.o=4,Ge(14),r=!1),Fr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Kc){t.o=4,Ge(15),Fr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Fr(t.j,t.m,i,null),qc(t,i);Hv(t)&&i!=La&&i!=Kc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ge(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Od(e),e.K=!0,Ge(11))):(Fr(t.j,t.m,n,"[Invalid Chunked Response]"),Zn(t),Gi(t))}D.hb=function(){if(this.g){var t=Qt(this.g),e=this.g.fa();this.C<e.length&&(kl(this),Wv(this,t,e),this.i&&t!=4&&Qs(this))}};function lk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?La:(n=Number(e.substring(n,r)),isNaN(n)?Kc:(r+=1,r+n>e.length?La:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,Zn(this)};function Qs(t){t.V=Date.now()+t.O,Kv(t,t.O)}function Kv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ks(Be(t.gb,t),e)}function kl(t){t.B&&(L.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(sk(this.j,this.A),this.K!=2&&(Ss(),Ge(17)),Zn(this),this.o=2,Gi(this)):Kv(this,this.V-t)};function Gi(t){t.l.G==0||t.I||p0(t.l,t)}function Zn(t){kl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_d(t.T),Mv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function qc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qc(n.h,t))){if(!t.J&&Qc(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fa(n),Rl(n);else break e;Pd(n),Ge(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ks(Be(n.cb,n),6e3));if(1>=e0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else er(n,11)}else if((t.J||n.g==t)&&Fa(n),!Oa(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Cd(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,te(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=y0(r,r.H?r.ka:null,r.V),o.J){t0(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(kl(a),Qs(a)),r.g=o}else d0(r);0<n.i.length&&Dl(n)}else u[0]!="stop"&&u[0]!="close"||er(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?er(n,7):Dd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ss(4)}catch{}}function uk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(gl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ck(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(gl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Gv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(gl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ck(t),r=uk(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var qv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function sr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof sr){this.h=e!==void 0?e:t.h,$a(this,t.j),this.s=t.s,this.g=t.g,Ma(this,t.m),this.l=t.l,e=t.i;var n=new Ts;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Vp(this,n),this.o=t.o}else t&&(n=String(t).match(qv))?(this.h=!!e,$a(this,n[1]||"",!0),this.s=xi(n[2]||""),this.g=xi(n[3]||"",!0),Ma(this,n[4]),this.l=xi(n[5]||"",!0),Vp(this,n[6]||"",!0),this.o=xi(n[7]||"")):(this.h=!!e,this.i=new Ts(null,this.h))}sr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Li(e,Bp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Li(e,Bp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Li(n,n.charAt(0)=="/"?pk:fk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Li(n,gk)),t.join("")};function sn(t){return new sr(t)}function $a(t,e,n){t.j=n?xi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ma(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vp(t,e,n){e instanceof Ts?(t.i=e,yk(t.i,t.h)):(n||(e=Li(e,mk)),t.i=new Ts(e,t.h))}function te(t,e,n){t.i.set(e,n)}function Cl(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Li(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Bp=/[#\/\?@]/g,fk=/[#\?:]/g,pk=/[#\?]/g,mk=/[#\?@]/g,gk=/#/g;function Ts(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zn(t){t.g||(t.g=new Map,t.h=0,t.i&&hk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Ts.prototype;D.add=function(t,e){zn(this),this.i=null,t=mi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Qv(t,e){zn(t),e=mi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Xv(t,e){return zn(t),e=mi(t,e),t.g.has(e)}D.forEach=function(t,e){zn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.oa=function(){zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.W=function(t){zn(this);let e=[];if(typeof t=="string")Xv(this,t)&&(e=e.concat(this.g.get(mi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return zn(this),this.i=null,t=mi(this,t),Xv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Yv(t,e,n){Qv(t,e),0<n.length&&(t.i=null,t.g.set(mi(t,e),fd(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function mi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yk(t,e){e&&!t.j&&(zn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Qv(this,r),Yv(this,i,n))},t)),t.j=e}var vk=class{constructor(t,e){this.h=t,this.g=e}};function Jv(t){this.l=t||wk,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ga&&L.g.Ga()&&L.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wk=10;function Zv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function e0(t){return t.h?1:t.g?t.g.size:0}function Qc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Cd(t,e){t.g?t.g.add(e):t.h=e}function t0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Jv.prototype.cancel=function(){if(this.i=n0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function n0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return fd(t.i)}function Nd(){}Nd.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};Nd.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function Ek(){this.g=new Nd}function _k(t,e,n){const r=n||"";try{Gv(t,function(i,s){let o=i;Hs(i)&&(o=Ed(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Sk(t,e){const n=new _l;if(L.Image){const r=new Image;r.onload=Co(Ao,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Co(Ao,n,r,"TestLoadImage: error",!1,e),r.onabort=Co(Ao,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Co(Ao,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ao(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Xs(t){this.l=t.ac||null,this.j=t.jb||!1}Oe(Xs,Td);Xs.prototype.g=function(){return new Nl(this.l,this.j)};Xs.prototype.i=function(t){return function(){return t}}({});function Nl(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ad,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(Nl,Te);var Ad=0;D=Nl.prototype;D.open=function(t,e){if(this.readyState!=Ad)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Is(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=Ad};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Is(this)),this.g&&(this.readyState=3,Is(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;r0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function r0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ys(this):Is(this),this.readyState==3&&r0(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,Ys(this))};D.Ua=function(t){this.g&&(this.response=t,Ys(this))};D.ga=function(){this.g&&Ys(this)};function Ys(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Is(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Is(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Nl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Tk=L.JSON.parse;function ae(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=i0,this.K=this.L=!1}Oe(ae,Te);var i0="",Ik=/^https?$/i,kk=["POST","PUT"];D=ae.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wc.g(),this.C=this.u?bp(this.u):bp(Wc),this.g.onreadystatechange=Be(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){zp(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&t instanceof L.FormData,!(0<=Ev(kk,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{a0(this),0<this.B&&((this.K=Ck(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.qa,this)):this.A=Sd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){zp(this,s)}};function Ck(t){return ri&&jI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof dd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function zp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,s0(t),Al(t)}function s0(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),Al(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Al(this,!0)),ae.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?o0(this):this.fb())};D.fb=function(){o0(this)};function o0(t){if(t.h&&typeof dd<"u"&&(!t.C[1]||Qt(t)!=4||t.aa()!=2)){if(t.v&&Qt(t)==4)Sd(t.Ha,0,t);else if(De(t,"readystatechange"),Qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(qv)[1]||null;if(!i&&L.self&&L.self.location){var s=L.self.location.protocol;i=s.substr(0,s.length-1)}r=!Ik.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<Qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",s0(t)}}finally{Al(t)}}}}function Al(t,e){if(t.g){a0(t);const n=t.g,r=t.C[0]?Pa:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function a0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function Qt(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Tk(e)}};function jp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case i0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function l0(t){let e="";return md(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Rd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=l0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function Ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function u0(t){this.Ca=0,this.i=[],this.j=new _l,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ni("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ni("baseRetryDelayMs",5e3,t),this.bb=Ni("retryDelaySeedMs",1e4,t),this.$a=Ni("forwardChannelMaxRetries",2,t),this.ta=Ni("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Jv(t&&t.concurrentRequestLimit),this.Fa=new Ek,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=u0.prototype;D.ma=8;D.G=1;function Dd(t){if(c0(t),t.G==3){var e=t.U++,n=sn(t.F);te(n,"SID",t.I),te(n,"RID",e),te(n,"TYPE","terminate"),Js(t,n),e=new qs(t,t.j,e,void 0),e.K=2,e.v=Cl(sn(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=v0(e.l,null),e.g.da(e.v)),e.F=Date.now(),Qs(e)}g0(t)}function Rl(t){t.g&&(Od(t),t.g.cancel(),t.g=null)}function c0(t){Rl(t),t.u&&(L.clearTimeout(t.u),t.u=null),Fa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function Dl(t){Zv(t.h)||t.m||(t.m=!0,Ov(t.Ja,t),t.C=0)}function Nk(t,e){return e0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ks(Be(t.Ja,t,e),m0(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new qs(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Iv(s),kv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=h0(this,i,e),n=sn(this.F),te(n,"RID",t),te(n,"CVER",22),this.D&&te(n,"X-HTTP-Session-Id",this.D),Js(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(l0(s)))+"&"+e:this.o&&Rd(n,this.o,s)),Cd(this.h,i),this.Ya&&te(n,"TYPE","init"),this.O?(te(n,"$req",e),te(n,"SID","null"),i.Z=!0,Gc(i,n,null)):Gc(i,n,e),this.G=2}}else this.G==3&&(t?Hp(this,t):this.i.length==0||Zv(this.h)||Hp(this))};function Hp(t,e){var n;e?n=e.m:n=t.U++;const r=sn(t.F);te(r,"SID",t.I),te(r,"RID",n),te(r,"AID",t.T),Js(t,r),t.o&&t.s&&Rd(r,t.o,t.s),n=new qs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=h0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Cd(t.h,n),Gc(n,r,e)}function Js(t,e){t.ia&&md(t.ia,function(n,r){te(e,r,n)}),t.l&&Gv({},function(n,r){te(e,r,n)})}function h0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Be(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{_k(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function d0(t){t.g||t.u||(t.Z=1,Ov(t.Ia,t),t.A=0)}function Pd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ks(Be(t.Ia,t),m0(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,f0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ks(Be(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ge(10),Rl(this),f0(this))};function Od(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function f0(t){t.g=new qs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=sn(t.sa);te(e,"RID","rpc"),te(e,"SID",t.I),te(e,"CI",t.L?"0":"1"),te(e,"AID",t.T),te(e,"TYPE","xmlhttp"),Js(t,e),t.o&&t.s&&Rd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Cl(sn(e)),n.s=null,n.P=!0,jv(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Rl(this),Pd(this),Ge(19))};function Fa(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function p0(t,e){var n=null;if(t.g==e){Fa(t),Od(t),t.g=null;var r=2}else if(Qc(t.h,e))n=e.D,t0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Sl(),De(r,new bv(r,n)),Dl(t)}else d0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&Nk(t,e)||r==2&&Pd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:er(t,5);break;case 4:er(t,10);break;case 3:er(t,6);break;default:er(t,2)}}}function m0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function er(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Be(t.kb,t);n||(n=new sr("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||$a(n,"https"),Cl(n)),Sk(n.toString(),r)}else Ge(2);t.G=0,t.l&&t.l.va(e),g0(t),c0(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function g0(t){if(t.G=0,t.la=[],t.l){const e=n0(t.h);(e.length!=0||t.i.length!=0)&&(xp(t.la,e),xp(t.la,t.i),t.h.i.length=0,fd(t.i),t.i.length=0),t.l.ua()}}function y0(t,e,n){var r=n instanceof sr?sn(n):new sr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ma(r,r.m);else{var i=L.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new sr(null,void 0);r&&$a(s,r),e&&(s.g=e),i&&Ma(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&te(r,n,e),te(r,"VER",t.ma),Js(t,r),r}function v0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ae(new Xs({jb:!0})):new ae(t.ra),e.Ka(t.H),e}function w0(){}D=w0.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Ua(){if(ri&&!(10<=Number(HI)))throw Error("Environmental error: no available transport.")}Ua.prototype.g=function(t,e){return new ct(t,e)};function ct(t,e){Te.call(this),this.g=new u0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Oa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gi(this)}Oe(ct,Te);ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ge(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=y0(t,null,t.V),Dl(t)};ct.prototype.close=function(){Dd(this.g)};ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ed(t),t=n);e.i.push(new vk(e.ab++,t)),e.G==3&&Dl(e)};ct.prototype.M=function(){this.g.l=null,delete this.j,Dd(this.g),delete this.g,ct.X.M.call(this)};function E0(t){Id.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(E0,Id);function _0(){kd.call(this),this.status=1}Oe(_0,kd);function gi(t){this.g=t}Oe(gi,w0);gi.prototype.xa=function(){De(this.g,"a")};gi.prototype.wa=function(t){De(this.g,new E0(t))};gi.prototype.va=function(t){De(this.g,new _0)};gi.prototype.ua=function(){De(this.g,"b")};Ua.prototype.createWebChannel=Ua.prototype.g;ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;Tl.NO_ERROR=0;Tl.TIMEOUT=8;Tl.HTTP_ERROR=6;Vv.COMPLETE="complete";Bv.EventType=Gs;Gs.OPEN="a";Gs.CLOSE="b";Gs.ERROR="c";Gs.MESSAGE="d";Te.prototype.listen=Te.prototype.N;ae.prototype.listenOnce=ae.prototype.O;ae.prototype.getLastError=ae.prototype.Oa;ae.prototype.getLastErrorCode=ae.prototype.Ea;ae.prototype.getStatus=ae.prototype.aa;ae.prototype.getResponseJson=ae.prototype.Sa;ae.prototype.getResponseText=ae.prototype.fa;ae.prototype.send=ae.prototype.da;ae.prototype.setWithCredentials=ae.prototype.Ka;var Ak=function(){return new Ua},Rk=function(){return Sl()},Du=Tl,Dk=Vv,Pk=_r,Wp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ok=Xs,Ro=Bv,xk=ae;const Kp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new ed("@firebase/firestore");function Gp(){return gr.logLevel}function P(t,...e){if(gr.logLevel<=W.DEBUG){const n=e.map(xd);gr.debug(`Firestore (${yi}): ${t}`,...n)}}function yr(t,...e){if(gr.logLevel<=W.ERROR){const n=e.map(xd);gr.error(`Firestore (${yi}): ${t}`,...n)}}function ba(t,...e){if(gr.logLevel<=W.WARN){const n=e.map(xd);gr.warn(`Firestore (${yi}): ${t}`,...n)}}function xd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t="Unexpected state"){const e=`FIRESTORE (${yi}) INTERNAL ASSERTION FAILED: `+t;throw yr(e),new Error(e)}function Ie(t,e){t||B()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class $k{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mk{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new S0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new Fe(e)}}class Fk{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Uk{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Fk(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vk{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.T=n.token,new bk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Bk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function q(t,e){return t<e?-1:t>e?1:0}function ii(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Se(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Se(0,0))}static max(){return new ne(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ks.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ks?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends ks{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const zk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends ks{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return zk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(he.fromString(e))}static fromName(e){return new F(he.fromString(e).popFirst(5))}static empty(){return new F(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new he(e.slice()))}}function jk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new $n(i,F.empty(),e)}function Hk(t){return new $n(t.readTime,t.key,-1)}class $n{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $n(ne.min(),F.empty(),-1)}static max(){return new $n(ne.max(),F.empty(),-1)}}function Wk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Kk)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Pl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}k0.ct=-1;function Ld(t){return t==null}function Va(t){return t===0&&1/t==-1/0}function qk(t){return typeof t=="number"&&Number.isInteger(t)&&!Va(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function C0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Do(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Do(this.root,e,this.comparator,!1)}getReverseIterator(){return new Do(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Do(this.root,e,this.comparator,!0)}}class Do{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ne.RED,this.left=i??Ne.EMPTY,this.right=s??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ne(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qp(this.data.getIterator())}getIteratorFrom(e){return new Qp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Qp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Qe(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ii(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qk("Invalid base64 string: "+i):i}}(e);return new on(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new on(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const Xk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=Xk.exec(t);if(Ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cs(t){return typeof t=="string"?on.fromBase64String(t):on.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ba(t){const e=vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class za{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof za&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yk(t)?4:Zk(t)?9007199254740991:10:B()}function Vt(t,e){if(t===e)return!0;const n=si(t);if(n!==si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ba(t).isEqual(Ba(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=vr(r.timestampValue),o=vr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Cs(r.bytesValue).isEqual(Cs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ae(r.geoPointValue.latitude)===Ae(i.geoPointValue.latitude)&&Ae(r.geoPointValue.longitude)===Ae(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ae(r.integerValue)===Ae(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ae(r.doubleValue),o=Ae(i.doubleValue);return s===o?Va(s)===Va(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ii(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(qp(s)!==qp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Vt(s[a],o[a])))return!1;return!0}(t,e);default:return B()}}function Ns(t,e){return(t.values||[]).find(n=>Vt(n,e))!==void 0}function oi(t,e){if(t===e)return 0;const n=si(t),r=si(e);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ae(i.integerValue||i.doubleValue),a=Ae(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xp(t.timestampValue,e.timestampValue);case 4:return Xp(Ba(t),Ba(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Cs(i),a=Cs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=q(o[l],a[l]);if(u!==0)return u}return q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=q(Ae(i.latitude),Ae(s.latitude));return o!==0?o:q(Ae(i.longitude),Ae(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=oi(o[l],a[l]);if(u)return u}return q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Po.mapValue&&s===Po.mapValue)return 0;if(i===Po.mapValue)return 1;if(s===Po.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=q(a[c],u[c]);if(h!==0)return h;const p=oi(o[a[c]],l[u[c]]);if(p!==0)return p}return q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function Xp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return q(t,e);const n=vr(t),r=vr(e),i=q(n.seconds,r.seconds);return i!==0?i:q(n.nanos,r.nanos)}function ai(t){return Xc(t)}function Xc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=vr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Xc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Xc(r.fields[a])}`;return s+"}"}(t.mapValue):B();var e,n}function Yc(t){return!!t&&"integerValue"in t}function $d(t){return!!t&&"arrayValue"in t}function Yo(t){return!!t&&"mapValue"in t}function qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Zk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qi(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=qi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(qi(this.value))}}function N0(t){const e=[];return Zs(t.fields,(n,r)=>{const i=new Ve([n]);if(Yo(r)){const s=N0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,ne.min(),ne.min(),ne.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new kt(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new kt(e,2,n,ne.min(),ne.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,ne.min(),ne.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.position=e,this.inclusive=n}}function Yp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=oi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n="asc"){this.field=e,this.dir=n}}function eC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{}class Ee extends A0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new nC(e,n,r):n==="array-contains"?new sC(e,r):n==="in"?new oC(e,r):n==="not-in"?new aC(e,r):n==="array-contains-any"?new lC(e,r):new Ee(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new rC(e,r):new iC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(oi(n,this.value)):n!==null&&si(this.value)===si(n)&&this.matchesComparison(oi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mn extends A0{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Mn(e,n)}matches(e){return R0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function R0(t){return t.op==="and"}function D0(t){return tC(t)&&R0(t)}function tC(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function Jc(t){if(t instanceof Ee)return t.field.canonicalString()+t.op.toString()+ai(t.value);if(D0(t))return t.filters.map(e=>Jc(e)).join(",");{const e=t.filters.map(n=>Jc(n)).join(",");return`${t.op}(${e})`}}function P0(t,e){return t instanceof Ee?function(n,r){return r instanceof Ee&&n.op===r.op&&n.field.isEqual(r.field)&&Vt(n.value,r.value)}(t,e):t instanceof Mn?function(n,r){return r instanceof Mn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&P0(s,r.filters[o]),!0):!1}(t,e):void B()}function O0(t){return t instanceof Ee?function(e){return`${e.field.canonicalString()} ${e.op} ${ai(e.value)}`}(t):t instanceof Mn?function(e){return e.op.toString()+" {"+e.getFilters().map(O0).join(" ,")+"}"}(t):"Filter"}class nC extends Ee{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class rC extends Ee{constructor(e,n){super(e,"in",n),this.keys=x0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iC extends Ee{constructor(e,n){super(e,"not-in",n),this.keys=x0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function x0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class sC extends Ee{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $d(n)&&Ns(n.arrayValue,this.value)}}class oC extends Ee{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ns(this.value.arrayValue,n)}}class aC extends Ee{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ns(this.value.arrayValue,n)}}class lC extends Ee{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$d(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ns(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Zp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uC(t,e,n,r,i,s,o)}function Md(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Jc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ld(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ai(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ai(r)).join(",")),e.ft=n}return e.ft}function Fd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!eC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!P0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jp(t.startAt,e.startAt)&&Jp(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function cC(t,e,n,r,i,s,o,a){return new Ol(t,e,n,r,i,s,o,a)}function hC(t){return new Ol(t)}function em(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fC(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function pC(t){return t.collectionGroup!==null}function Kr(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=fC(e),r=dC(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Qi(n)),e.dt.push(new Qi(Ve.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Qi(Ve.keyField(),s))}}}return e.dt}function li(t){const e=Z(t);if(!e.wt)if(e.limitType==="F")e.wt=Zp(e.path,e.collectionGroup,Kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Kr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Qi(s.field,o))}const r=e.endAt?new ja(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ja(e.startAt.position,e.startAt.inclusive):null;e.wt=Zp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Zc(t,e,n){return new Ol(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function L0(t,e){return Fd(li(t),li(e))&&t.limitType===e.limitType}function $0(t){return`${Md(li(t))}|lt:${t.limitType}`}function tm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>O0(r)).join(", ")}]`),Ld(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ai(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ai(r)).join(",")),`Target(${n})`}(li(t))}; limitType=${t.limitType})`}function Ud(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Kr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Yp(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Kr(n),r)||n.endAt&&!function(i,s,o){const a=Yp(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Kr(n),r))}(t,e)}function mC(t){return(e,n)=>{let r=!1;for(const i of Kr(t)){const s=gC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gC(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?oi(a,l):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return C0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=new it(F.comparator);function Ha(){return yC}const M0=new it(F.comparator);function Oo(...t){let e=M0;for(const n of t)e=e.insert(n.key,n);return e}function F0(t){let e=M0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function tr(){return Xi()}function U0(){return Xi()}function Xi(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const vC=new it(F.comparator),wC=new Qe(F.comparator);function be(...t){let e=wC;for(const n of t)e=e.add(n);return e}const EC=new Qe(q);function _C(){return EC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Va(e)?"-0":e}}function V0(t){return{integerValue:""+t}}function SC(t,e){return qk(e)?V0(e):b0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this._=void 0}}function TC(t,e,n){return t instanceof Wa?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof As?z0(t,e):t instanceof Rs?j0(t,e):function(r,i){const s=B0(r,i),o=nm(s)+nm(r._t);return Yc(s)&&Yc(r._t)?V0(o):b0(r.serializer,o)}(t,e)}function IC(t,e,n){return t instanceof As?z0(t,e):t instanceof Rs?j0(t,e):n}function B0(t,e){return t instanceof Ka?Yc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Wa extends xl{}class As extends xl{constructor(e){super(),this.elements=e}}function z0(t,e){const n=H0(e);for(const r of t.elements)n.some(i=>Vt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Rs extends xl{constructor(e){super(),this.elements=e}}function j0(t,e){let n=H0(e);for(const r of t.elements)n=n.filter(i=>!Vt(i,r));return{arrayValue:{values:n}}}class Ka extends xl{constructor(e,n){super(),this.serializer=e,this._t=n}}function nm(t){return Ae(t.integerValue||t.doubleValue)}function H0(t){return $d(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof As&&r instanceof As||n instanceof Rs&&r instanceof Rs?ii(n.elements,r.elements,Vt):n instanceof Ka&&r instanceof Ka?Vt(n._t,r._t):n instanceof Wa&&r instanceof Wa}(t.transform,e.transform)}class CC{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ll{}function W0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new G0(t.key,Yt.none()):new eo(t.key,t.data,Yt.none());{const n=t.data,r=Ct.empty();let i=new Qe(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Sr(t.key,r,new Nt(i.toArray()),Yt.none())}}function NC(t,e,n){t instanceof eo?function(r,i,s){const o=r.value.clone(),a=im(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(r,i,s){if(!Jo(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=im(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(K0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Yi(t,e,n,r){return t instanceof eo?function(i,s,o,a){if(!Jo(i.precondition,s))return o;const l=i.value.clone(),u=sm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,s,o,a){if(!Jo(i.precondition,s))return o;const l=sm(i.fieldTransforms,a,s),u=s.data;return u.setAll(K0(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Jo(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function AC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=B0(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function rm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ii(n,r,(i,s)=>kC(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class eo extends Ll{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Sr extends Ll{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function K0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function im(t,e,n){const r=new Map;Ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,IC(o,a,n[i]))}return r}function sm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,TC(s,o,e))}return r}class G0 extends Ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RC extends Ll{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=U0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=W0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&ii(this.mutations,e.mutations,(n,r)=>rm(n,r))&&ii(this.baseMutations,e.baseMutations,(n,r)=>rm(n,r))}}class bd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ie(e.mutations.length===r.length);let i=vC;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new bd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,z;function OC(t){switch(t){default:return B();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function xC(t){if(t===void 0)return yr("GRPC error has no .code"),I.UNKNOWN;switch(t){case ce.OK:return I.OK;case ce.CANCELLED:return I.CANCELLED;case ce.UNKNOWN:return I.UNKNOWN;case ce.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ce.INTERNAL:return I.INTERNAL;case ce.UNAVAILABLE:return I.UNAVAILABLE;case ce.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ce.NOT_FOUND:return I.NOT_FOUND;case ce.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ce.ABORTED:return I.ABORTED;case ce.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ce.DATA_LOSS:return I.DATA_LOSS;default:return B()}}(z=ce||(ce={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";class LC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function eh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $C(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MC(t,e){return eh(t,e.toTimestamp())}function Gr(t){return Ie(!!t),ne.fromTimestamp(function(e){const n=vr(e);return new Se(n.seconds,n.nanos)}(t))}function q0(t,e){return function(n){return new he(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function FC(t){const e=he.fromString(t);return Ie(WC(e)),e}function th(t,e){return q0(t.databaseId,e.path)}function UC(t){const e=FC(t);return e.length===4?he.emptyPath():VC(e)}function bC(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function VC(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function om(t,e,n){return{name:th(t,e),fields:n.value.mapValue.fields}}function BC(t,e){let n;if(e instanceof eo)n={update:om(t,e.key,e.value)};else if(e instanceof G0)n={delete:th(t,e.key)};else if(e instanceof Sr)n={update:om(t,e.key,e.data),updateMask:HC(e.fieldMask)};else{if(!(e instanceof RC))return B();n={verify:th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Wa)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof As)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Rs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ka)return{fieldPath:s.field.canonicalString(),increment:o._t};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:MC(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B()}(t,e.precondition)),n}function zC(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Gr(r.updateTime):Gr(i);return s.isEqual(ne.min())&&(s=Gr(i)),new CC(s,r.transformResults||[])}(n,e))):[]}function jC(t){let e=UC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=Q0(c);return h instanceof Mn&&D0(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Qi(Ir(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ld(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,p=c.values||[];return new ja(p,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,p=c.values||[];return new ja(p,h)}(n.endAt)),cC(e,i,o,s,a,"F",l,u)}function Q0(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ir(e.unaryFilter.field);return Ee.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ir(e.unaryFilter.field);return Ee.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ir(e.unaryFilter.field);return Ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ir(e.unaryFilter.field);return Ee.create(s,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(e){return Ee.create(Ir(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Mn.create(e.compositeFilter.filters.map(n=>Q0(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(t):B()}function Ir(t){return Ve.fromServerFormat(t.fieldPath)}function HC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function WC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.se=e}}function GC(t){const e=jC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.He=new QC}addToCollectionParentIndex(e,n){return this.He.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve($n.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve($n.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class QC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qe(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new ui(0)}static bn(){return new ui(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Yi(r.mutation,i,Nt.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const i=tr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Oo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ha();const o=Xi(),a=Xi();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Sr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Yi(c.mutation,u,c.mutation.getFieldMask(),Se.now())):o.set(u.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new YC(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Xi();let i=new it((o,a)=>o-a),s=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Nt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||be()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=U0();c.forEach(p=>{if(!s.has(p)){const g=W0(n.get(p),r.get(p));g!==null&&h.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(tr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(p=>{l=l.insert(c,p)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,be())).next(c=>({batchId:a,changes:F0(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let i=Oo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Oo();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new Ol(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,kt.newInvalidDocument(u)))});let o=Oo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Yi(u.mutation,l,Nt.empty(),Se.now()),Ud(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Gr(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:GC(r.bundledQuery),readTime:Gr(r.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.overlays=new it(F.comparator),this.ts=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=tr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=tr(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new it((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=tr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=tr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PC(n,r));let s=this.ts.get(n);s===void 0&&(s=be(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.es=new Qe(ve.ns),this.ss=new Qe(ve.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new ve(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new ve(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new F(new he([])),r=new ve(n,e),i=new ve(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new F(new he([])),r=new ve(n,e),i=new ve(n,e+1);let s=be();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ve(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return F.comparator(e.key,n.key)||q(e.ds,n.ds)}static rs(e,n){return q(e.ds,n.ds)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Qe(ve.ns)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DC(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new ve(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ve(n,0),i=new ve(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(q);return n.forEach(i=>{const s=new ve(i,0),o=new ve(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),T.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new ve(new F(s),0);let a=new Qe(q);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),T.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ie(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return T.forEach(n.mutations,i=>{const s=new ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new ve(n,0),i=this._s.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.Ts=e,this.docs=new it(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=Ha();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():kt.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ha();const o=n.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Wk(Hk(c),r)<=0||(i.has(c.key)||Ud(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,i){B()}Es(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rN(this)}getSize(e){return T.resolve(this.size)}}class rN extends XC{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.persistence=e,this.As=new vi(n=>Md(n),Fd),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Vd,this.targetCount=0,this.bs=ui.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),T.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ui(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Sn(n),T.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new k0(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new iN(this),this.indexManager=new qC,this.remoteDocumentCache=function(r){return new nN(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new KC(n),this.xs=new ZC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new tN(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new oN(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return T.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class oN extends Gk{constructor(e){super(),this.currentSequenceNumber=e}}class Bd{constructor(e){this.persistence=e,this.$s=new Vd,this.Ms=null}static Fs(e){return new Bd(e)}get Bs(){if(this.Ms)return this.Ms;throw B()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),T.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Bs,r=>{const i=F.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,ne.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return T.or([()=>T.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=be(),i=be();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(em(n))return T.resolve(null);let r=li(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zc(n,null,"F"),r=li(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=be(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,Zc(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return em(n)||i.isEqual(ne.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(Gp()<=W.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),tm(n)),this.Fi(e,o,n,jk(i,-1)))})}$i(e,n){let r=new Qe(mC(e));return n.forEach((i,s)=>{Ud(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Gp()<=W.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",tm(n)),this.xi.getDocumentsMatchingQuery(e,n,$n.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new it(q),this.qi=new vi(s=>Md(s),Fd),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JC(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function uN(t,e,n,r){return new lN(t,e,n,r)}async function X0(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=be();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function cN(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let p=T.resolve();return h.forEach(g=>{p=p.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);Ie(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=be();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hN(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function dN(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class am{constructor(){this.activeTargetIds=_C()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fN{constructor(){this.Br=new am,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new am,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo=null;function Pu(){return xo===null?xo=268435456+Math.round(2147483648*Math.random()):xo++,"0x"+xo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class yN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=Pu(),a=this.ao(e,n);P("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>(P("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw ba("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+yi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=mN[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=Pu();return new Promise((o,a)=>{const l=new xk;l.setWithCredentials(!0),l.listenOnce(Dk.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Du.NO_ERROR:const c=l.getResponseJson();P(Me,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Du.TIMEOUT:P(Me,`RPC '${e}' ${s} timed out`),a(new M(I.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const h=l.getStatus();if(P(Me,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const y=function(v){const S=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(S)>=0?S:I.UNKNOWN}(g.status);a(new M(y,g.message))}else a(new M(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(I.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{P(Me,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P(Me,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Pu(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ak(),a=Rk(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new Ok({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");P(Me,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,p=!1;const g=new gN({Wr:v=>{p?P(Me,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(P(Me,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),P(Me,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},Hr:()=>c.close()}),y=(v,S,f)=>{v.listen(S,d=>{try{f(d)}catch(m){setTimeout(()=>{throw m},0)}})};return y(c,Ro.EventType.OPEN,()=>{p||P(Me,`RPC '${e}' stream ${i} transport opened.`)}),y(c,Ro.EventType.CLOSE,()=>{p||(p=!0,P(Me,`RPC '${e}' stream ${i} transport closed`),g.so())}),y(c,Ro.EventType.ERROR,v=>{p||(p=!0,ba(Me,`RPC '${e}' stream ${i} transport errored:`,v),g.so(new M(I.UNAVAILABLE,"The operation could not be completed")))}),y(c,Ro.EventType.MESSAGE,v=>{var S;if(!p){const f=v.data[0];Ie(!!f);const d=f,m=d.error||((S=d[0])===null||S===void 0?void 0:S.error);if(m){P(Me,`RPC '${e}' stream ${i} received error:`,m);const w=m.status;let E=function(A){const k=ce[A];if(k!==void 0)return xC(k)}(w),C=m.message;E===void 0&&(E=I.INTERNAL,C="Unknown error status: "+w+" with message "+m.message),p=!0,g.so(new M(E,C)),c.close()}else P(Me,`RPC '${e}' stream ${i} received:`,f),g.io(f)}}),y(a,Pk.STAT_EVENT,v=>{v.stat===Wp.PROXY?P(Me,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Wp.NOPROXY&&P(Me,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function Ou(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t){return new LC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Y0(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(yr(n.toString()),yr("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new M(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wN extends vN{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=zC(e.writeResults,e.commitTime),r=Gr(e.commitTime);return this.listener.Zo(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=bC(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>BC(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new M(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(I.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(I.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class _N{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(yr(n),this.ru=!1):P("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{no(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Z(a);l.du.add(4),await to(l),l.mu.set("Unknown"),l.du.delete(4),await Ml(l)}(this))})}),this.mu=new _N(r,i)}}async function Ml(t){if(no(t))for(const e of t.wu)await e(!0)}async function to(t){for(const e of t.wu)await e(!1)}function no(t){return Z(t).du.size===0}async function J0(t,e,n){if(!Pl(e))throw e;t.du.add(1),await to(t),t.mu.set("Offline"),n||(n=()=>hN(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Ml(t)})}function Z0(t,e){return e().catch(n=>J0(t,n,e))}async function Fl(t){const e=Z(t),n=Fn(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;TN(e);)try{const i=await dN(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,IN(e,i)}catch(i){await J0(e,i)}e1(e)&&t1(e)}function TN(t){return no(t)&&t.lu.length<10}function IN(t,e){t.lu.push(e);const n=Fn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function e1(t){return no(t)&&!Fn(t).xo()&&t.lu.length>0}function t1(t){Fn(t).start()}async function kN(t){Fn(t).tu()}async function CN(t){const e=Fn(t);for(const n of t.lu)e.Yo(n.mutations)}async function NN(t,e,n){const r=t.lu.shift(),i=bd.from(r,e,n);await Z0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fl(t)}async function AN(t,e){e&&Fn(t).Jo&&await async function(n,r){if(i=r.code,OC(i)&&i!==I.ABORTED){const s=n.lu.shift();Fn(n).Oo(),await Z0(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Fl(n)}var i}(t,e),e1(t)&&t1(t)}async function um(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=no(n);n.du.add(3),await to(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Ml(n)}async function RN(t,e){const n=Z(t);e?(n.du.delete(2),await Ml(n)):e||(n.du.add(2),await to(n),n.mu.set("Unknown"))}function Fn(t){return t.pu||(t.pu=function(e,n,r){const i=Z(e);return i.nu(),new wN(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:kN.bind(null,t),Zr:AN.bind(null,t),Xo:CN.bind(null,t),Zo:NN.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Fl(t)):(await t.pu.stop(),t.lu.length>0&&(P("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new jd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function n1(t,e){if(yr("AsyncQueue",`${e}: ${t}`),Pl(t))return new M(I.UNAVAILABLE,`${e}: ${t}`);throw t}class DN{constructor(){this.queries=new vi(e=>$0(e),L0),this.onlineState="Unknown",this.Au=new Set}}function PN(t){t.Au.forEach(e=>{e.next()})}class ON{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new vi(a=>$0(a),L0),this.ic=new Map,this.rc=new Set,this.oc=new it(F.comparator),this.uc=new Map,this.cc=new Vd,this.ac={},this.hc=new Map,this.lc=ui.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function xN(t,e,n){const r=FN(t);try{const i=await function(s,o){const a=Z(s),l=Se.now(),u=o.reduce((p,g)=>p.add(g.key),be());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Ha(),y=be();return a.Ki.getEntries(p,u).next(v=>{g=v,g.forEach((S,f)=>{f.isValidDocument()||(y=y.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,g)).next(v=>{c=v;const S=[];for(const f of o){const d=AC(f,c.get(f.key).overlayedDocument);d!=null&&S.push(new Sr(f.key,d,N0(d.value.mapValue),Yt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,l,S,o)}).next(v=>{h=v;const S=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(p,v.batchId,S)})}).then(()=>({batchId:h.batchId,changes:F0(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new it(q)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ul(r,i.changes),await Fl(r.remoteStore)}catch(i){const s=n1(i,"Failed to persist write");n.reject(s)}}function cm(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&PN(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LN(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await cN(n.localStore,e);i1(n,r,null),r1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ul(n,i)}catch(i){await I0(i)}}async function $N(t,e,n){const r=Z(t);try{const i=await function(s,o){const a=Z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Ie(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);i1(r,e,n),r1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ul(r,i)}catch(i){await I0(i)}}function r1(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function i1(t,e,n){const r=Z(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}async function Ul(t,e,n){const r=Z(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=zd.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=Z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,h=>T.forEach(h.Vi,p=>u.persistence.referenceDelegate.addReference(c,h.targetId,p)).next(()=>T.forEach(h.Si,p=>u.persistence.referenceDelegate.removeReference(c,h.targetId,p)))))}catch(c){if(!Pl(c))throw c;P("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const p=u.Li.get(h),g=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(g);u.Li=u.Li.insert(h,y)}}}(r.localStore,s))}async function MN(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await X0(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new M(I.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ul(n,r.Qi)}}function FN(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$N.bind(null,e),e}class hm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$l(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return uN(this.persistence,new aN,e.initialUser,this.serializer)}createPersistence(e){return new sN(Bd.Fs,this.serializer)}createSharedClientState(e){return new fN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MN.bind(null,this.syncEngine),await RN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new DN}createDatastore(e){const n=$l(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new yN(i));var i;return function(s,o,a,l){return new EN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>cm(this.syncEngine,a,0),o=lm.D()?new lm:new pN,new SN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new ON(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);P("RemoteStore","RemoteStore shutting down."),n.du.add(5),await to(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=T0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=n1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xu(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await X0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function dm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BN(t);P("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>um(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>um(e.remoteStore,s)),t._onlineComponents=e}function VN(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function BN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await xu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!VN(n))throw n;ba("Error using user provided cache. Falling back to memory cache: "+n),await xu(t,new hm)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await xu(t,new hm);return t._offlineComponents}async function zN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await dm(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await dm(t,new UN))),t._onlineComponents}function jN(t){return zN(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t,e,n){if(!n)throw new M(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WN(t,e,n,r){if(e===!0&&r===!0)throw new M(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pm(t){if(!F.isDocumentKey(t))throw new M(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function nh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hd(t);throw new M(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,WN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Lk;switch(n.type){case"firstParty":return new Uk(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=fm.get(e);n&&(P("ComponentProvider","Removing Datastore"),fm.delete(e),n.terminate())}(this),Promise.resolve()}}function KN(t,e,n,r={}){var i;const s=(t=nh(t,Wd))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ba("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Fe.MOCK_USER;else{o=u_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Fe(l)}t._authCredentials=new $k(new S0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jt(this.firestore,e,this._key)}}class Kd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kd(this.firestore,e,this._query)}}class Ds extends Kd{constructor(e,n,r){super(e,n,hC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jt(this.firestore,null,new F(e))}withConverter(e){return new Ds(this.firestore,e,this._path)}}function GN(t,e,...n){if(t=Et(t),arguments.length===1&&(e=T0.A()),HN("doc","path",e),t instanceof Wd){const r=he.fromString(e,...n);return pm(r),new Jt(t,null,new F(r))}{if(!(t instanceof Jt||t instanceof Ds))throw new M(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return pm(r),new Jt(t.firestore,t instanceof Ds?t.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Y0(this,"async_queue_retry"),this.qc=()=>{const n=Ou();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Ou();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Ou();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new or;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Pl(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw yr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=jd.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&B()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class s1 extends Wd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new qN,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||o1(this),this._firestoreClient.terminate()}}function QN(t,e){const n=typeof t=="object"?t:rd(),r=typeof t=="string"?t:e||"(default)",i=nd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=o_("firestore");s&&KN(i,...s)}return i}function XN(t){return t._firestoreClient||o1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function o1(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new Jk(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new bN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ps(on.fromBase64String(e))}catch(n){throw new M(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ps(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=/^__.*__$/;class JN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new eo(e,this.data,n,this.fieldTransforms)}}function c1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Gd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Gd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Ga(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(c1(this.Yc)&&YN.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class ZN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$l(e)}ua(e,n,r,i=!1){return new Gd({Yc:e,methodName:n,oa:r,path:Ve.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eA(t){const e=t._freezeSettings(),n=$l(t._databaseId);return new ZN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tA(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);p1("Data must be an object, but it was:",o,r);const a=d1(r,o);let l,u;if(s.merge)l=new Nt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const p=nA(e,h,n);if(!o.contains(p))throw new M(I.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);sA(c,p)||c.push(p)}l=new Nt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new JN(new Ct(a),l,u)}function h1(t,e){if(f1(t=Et(t)))return p1("Unsupported field value:",e,t),d1(t,e);if(t instanceof l1)return function(n,r){if(!c1(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=h1(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return SC(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Se.fromDate(n);return{timestampValue:eh(r.serializer,i)}}if(n instanceof Se){const i=new Se(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:eh(r.serializer,i)}}if(n instanceof u1)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ps)return{bytesValue:$C(r.serializer,n._byteString)};if(n instanceof Jt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:q0(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Hd(n)}`)}(t,e)}function d1(t,e){const n={};return C0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zs(t,(r,i)=>{const s=h1(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function f1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof u1||t instanceof Ps||t instanceof Jt||t instanceof l1)}function p1(t,e,n){if(!f1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Hd(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function nA(t,e,n){if((e=Et(e))instanceof a1)return e._internalPath;if(typeof e=="string")return iA(t,e);throw Ga("Field path arguments must be of type string or ",t,!1,void 0,n)}const rA=new RegExp("[~\\*/\\[\\]]");function iA(t,e,n){if(e.search(rA)>=0)throw Ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new a1(...e.split("."))._internalPath}catch{throw Ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ga(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(I.INVALID_ARGUMENT,a+t+l)}function sA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function aA(t,e,n){t=nh(t,Jt);const r=nh(t.firestore,s1),i=oA(t.converter,e,n);return lA(r,[tA(eA(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Yt.none())])}function lA(t,e){return function(n,r){const i=new or;return n.asyncQueue.enqueueAndForget(async()=>xN(await jN(n),r,i)),i.promise}(XN(t),e)}(function(t,e=!0){(function(n){yi=n})(pi),ti(new fr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new s1(new Mk(n.getProvider("auth-internal")),new Vk(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),On(Kp,"3.10.1",t),On(Kp,"3.10.1","esm2017")})();const uA={apiKey:"AIzaSyDz8xNgf18f7ELoZ8pOdbioDmUL55ptQqk",appId:{}.VITE_FIREBASE_ID,authDomain:"moto-rent-c20f3.firebaseapp.com",messagingSenderId:"699483084590",projectId:"moto-rent-c20f3",storageBucket:"moto-rent-c20f3.appspot.com"};let qa;wS().length?qa=rd():qa=Fy(uA);const cA=QN(qa),qd=RI(qa),hA=new Ht,dA=async()=>{try{UT(qd,hA)}catch(t){G.error(t.message)}},fA=async()=>{try{yT(qd)}catch(t){G.error(t.message)}},pA=async t=>{const{uid:e,displayName:n,photoURL:r,email:i}=t;try{await aA(GN(cA,"users",e),{uid:e,displayName:n,photoURL:r,email:i})}catch(s){G.error(s.mesage)}},gm=t=>{let e;const n=new Set,r=(l,u)=>{const c=typeof l=="function"?l(e):l;if(!Object.is(c,e)){const h=e;e=u??typeof c!="object"?c:Object.assign({},e,c),n.forEach(p=>p(e,h))}},i=()=>e,a={setState:r,getState:i,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{({VITE_FIREBASE_API_KEY:"AIzaSyDz8xNgf18f7ELoZ8pOdbioDmUL55ptQqk",VITE_FIREBASE_PROJECT_ID:"moto-rent-c20f3",VITE_FIREBASE_AUTH_DOMAIN:"moto-rent-c20f3.firebaseapp.com",VITE_FIREBASE_APP_ID:"1:699483084590:web:fa539debea1ff55e710cbf",VITE_FIREBASE_MESSAGING_SENDER_ID:"699483084590",VITE_FIREBASE_STORAGE_BUCKET:"moto-rent-c20f3.appspot.com",BASE_URL:"/rent-moto/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return e=t(r,i,a),a},mA=t=>t?gm(t):gm;var rh={},gA={get exports(){return rh},set exports(t){rh=t}},m1={},ih={},yA={get exports(){return ih},set exports(t){ih=t}},g1={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=b;function vA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wA=typeof Object.is=="function"?Object.is:vA,EA=ci.useState,_A=ci.useEffect,SA=ci.useLayoutEffect,TA=ci.useDebugValue;function IA(t,e){var n=e(),r=EA({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return SA(function(){i.value=n,i.getSnapshot=e,Lu(i)&&s({inst:i})},[t,n,e]),_A(function(){return Lu(i)&&s({inst:i}),t(function(){Lu(i)&&s({inst:i})})},[t]),TA(n),n}function Lu(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wA(t,n)}catch{return!0}}function kA(t,e){return e()}var CA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?kA:IA;g1.useSyncExternalStore=ci.useSyncExternalStore!==void 0?ci.useSyncExternalStore:CA;(function(t){t.exports=g1})(yA);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bl=b,NA=ih;function AA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var RA=typeof Object.is=="function"?Object.is:AA,DA=NA.useSyncExternalStore,PA=bl.useRef,OA=bl.useEffect,xA=bl.useMemo,LA=bl.useDebugValue;m1.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=PA(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=xA(function(){function l(g){if(!u){if(u=!0,c=g,g=r(g),i!==void 0&&o.hasValue){var y=o.value;if(i(y,g))return h=y}return h=g}if(y=h,RA(c,g))return y;var v=r(g);return i!==void 0&&i(y,v)?y:(c=g,h=v)}var u=!1,c,h,p=n===void 0?null:n;return[function(){return l(e())},p===null?void 0:function(){return l(p())}]},[e,n,r,i]);var a=DA(t,s[0],s[1]);return OA(function(){o.hasValue=!0,o.value=a},[a]),LA(a),a};(function(t){t.exports=m1})(gA);const $A=vm(rh),{useSyncExternalStoreWithSelector:MA}=$A;function FA(t,e=t.getState,n){const r=MA(t.subscribe,t.getState,t.getServerState||t.getState,e,n);return b.useDebugValue(r),r}const ym=t=>{({VITE_FIREBASE_API_KEY:"AIzaSyDz8xNgf18f7ELoZ8pOdbioDmUL55ptQqk",VITE_FIREBASE_PROJECT_ID:"moto-rent-c20f3",VITE_FIREBASE_AUTH_DOMAIN:"moto-rent-c20f3.firebaseapp.com",VITE_FIREBASE_APP_ID:"1:699483084590:web:fa539debea1ff55e710cbf",VITE_FIREBASE_MESSAGING_SENDER_ID:"699483084590",VITE_FIREBASE_STORAGE_BUCKET:"moto-rent-c20f3.appspot.com",BASE_URL:"/rent-moto/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?mA(t):t,n=(r,i)=>FA(e,r,i);return Object.assign(n,e),n},UA=t=>t?ym(t):ym,bA=UA()(t=>({user:void 0,setUser(e){t(()=>({user:e}))}}));const VA=()=>{const{user:t,setUser:e}=bA();return b.useEffect(()=>gT(qd,r=>{r?(e(r),pA(r)):e(void 0)}),[]),hn("div",{className:"px-4 max-w-screen-xl mx-auto",children:$u("div",{className:"flex flex-col items-center gap-2 justify-center py-12",children:[hn("h2",{className:"text-3xl md:text-4xl xl:text-5xl font-black",children:hn("a",{href:"/",children:"#Moto Rent"})}),hn("img",{className:"max-w-5xl",alt:"",src:"/rent-moto/assets/hero.svg"}),t?$u(V1,{children:[t==null?void 0:t.email,hn("button",{onClick:fA,children:"sign out"})]}):hn("button",{onClick:dA,children:"sign in"})]})})};Mu.createRoot(document.getElementById("root")).render($u(Q.StrictMode,{children:[hn(VA,{}),hn(Pc,{})]}));
