import{Q as Es}from"./index-60b4174a.js";/**
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
 */const Da=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Hl=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ra={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(t[l],t[h],t[d],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Da(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Hl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new Kl;const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const E=u<<6&192|h;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gl=function(n){const e=Da(n);return Ra.encodeByteArray(e,!0)},Yn=function(n){return Gl(n).replace(/\./g,"")},Na=function(n){try{return Ra.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ql=()=>Wl().__FIREBASE_DEFAULTS__,Yl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Na(n[1]);return e&&JSON.parse(e)},Ji=()=>{try{return Ql()||Yl()||Xl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Oa=n=>{var e,t;return(t=(e=Ji())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Jl=n=>{const e=Oa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Zl=()=>{var n;return(n=Ji())===null||n===void 0?void 0:n.config},Pa=n=>{var e;return(e=Ji())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class eh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function th(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Yn(JSON.stringify(t)),Yn(JSON.stringify(o)),a].join(".")}/**
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
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function sh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ih(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rh(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function oh(){try{return typeof indexedDB=="object"}catch{return!1}}function ah(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const ch="FirebaseError";class ke extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ch,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?uh(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ke(i,a,s)}}function uh(n,e){return n.replace(lh,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const lh=/\{\$([^}]+)}/g;function hh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Xn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(co(r)&&co(o)){if(!Xn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function co(n){return n!==null&&typeof n=="object"}/**
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
 */function cn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function dh(n,e){const t=new fh(n,e);return t.subscribe.bind(t)}class fh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ph(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=ti),i.error===void 0&&(i.error=ti),i.complete===void 0&&(i.complete=ti);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ph(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ti(){}/**
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
 */const gh=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)})};/**
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
 */function z(n){return n&&n._delegate?n._delegate:n}class et{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ke="[DEFAULT]";/**
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
 */class mh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new eh;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vh(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ke){return this.instances.has(e)}getOptions(e=Ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ke){return this.component?this.component.multipleInstances?e:Ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yh(n){return n===Ke?void 0:n}function vh(n){return n.instantiationMode==="EAGER"}/**
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
 */class wh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var R;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(R||(R={}));const Eh={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Ih=R.INFO,_h={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Th=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=_h[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zi{constructor(e){this.name=e,this._logLevel=Ih,this._logHandler=Th,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Eh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const Sh=(n,e)=>e.some(t=>n instanceof t);let uo,lo;function bh(){return uo||(uo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ch(){return lo||(lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const La=new WeakMap,Ei=new WeakMap,Ma=new WeakMap,ni=new WeakMap,er=new WeakMap;function Ah(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Me(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&La.set(t,n)}).catch(()=>{}),er.set(e,n),e}function kh(n){if(Ei.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ei.set(n,e)}let Ii={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ei.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ma.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Me(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Dh(n){Ii=n(Ii)}function Rh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(si(this),e,...t);return Ma.set(s,e.sort?e.sort():[e]),Me(s)}:Ch().includes(n)?function(...e){return n.apply(si(this),e),Me(La.get(this))}:function(...e){return Me(n.apply(si(this),e))}}function Nh(n){return typeof n=="function"?Rh(n):(n instanceof IDBTransaction&&kh(n),Sh(n,bh())?new Proxy(n,Ii):n)}function Me(n){if(n instanceof IDBRequest)return Ah(n);if(ni.has(n))return ni.get(n);const e=Nh(n);return e!==n&&(ni.set(n,e),er.set(e,n)),e}const si=n=>er.get(n);function Oh(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Me(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Me(o.result),c.oldVersion,c.newVersion,Me(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ph=["get","getKey","getAll","getAllKeys","count"],Lh=["put","add","delete","clear"],ii=new Map;function ho(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ii.get(e))return ii.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Lh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ph.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return ii.set(e,r),r}Dh(n=>({...n,get:(e,t,s)=>ho(e,t)||n.get(e,t,s),has:(e,t)=>!!ho(e,t)||n.has(e,t)}));/**
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
 */class Mh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function xh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _i="@firebase/app",fo="0.9.8";/**
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
 */const tt=new Zi("@firebase/app"),Uh="@firebase/app-compat",Fh="@firebase/analytics-compat",Vh="@firebase/analytics",$h="@firebase/app-check-compat",Bh="@firebase/app-check",qh="@firebase/auth",jh="@firebase/auth-compat",zh="@firebase/database",Hh="@firebase/database-compat",Kh="@firebase/functions",Gh="@firebase/functions-compat",Wh="@firebase/installations",Qh="@firebase/installations-compat",Yh="@firebase/messaging",Xh="@firebase/messaging-compat",Jh="@firebase/performance",Zh="@firebase/performance-compat",ed="@firebase/remote-config",td="@firebase/remote-config-compat",nd="@firebase/storage",sd="@firebase/storage-compat",id="@firebase/firestore",rd="@firebase/firestore-compat",od="firebase",ad="9.20.0";/**
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
 */const Ti="[DEFAULT]",cd={[_i]:"fire-core",[Uh]:"fire-core-compat",[Vh]:"fire-analytics",[Fh]:"fire-analytics-compat",[Bh]:"fire-app-check",[$h]:"fire-app-check-compat",[qh]:"fire-auth",[jh]:"fire-auth-compat",[zh]:"fire-rtdb",[Hh]:"fire-rtdb-compat",[Kh]:"fire-fn",[Gh]:"fire-fn-compat",[Wh]:"fire-iid",[Qh]:"fire-iid-compat",[Yh]:"fire-fcm",[Xh]:"fire-fcm-compat",[Jh]:"fire-perf",[Zh]:"fire-perf-compat",[ed]:"fire-rc",[td]:"fire-rc-compat",[nd]:"fire-gcs",[sd]:"fire-gcs-compat",[id]:"fire-fst",[rd]:"fire-fst-compat","fire-js":"fire-js",[od]:"fire-js-all"};/**
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
 */const Ht=new Map,Si=new Map;function ud(n,e){try{n.container.addComponent(e)}catch(t){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mt(n){const e=n.name;if(Si.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;Si.set(e,n);for(const t of Ht.values())ud(t,n);return!0}function tr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ld={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xe=new an("app","Firebase",ld);/**
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
 */class hd{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}}/**
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
 */const At=ad;function xa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ti,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw xe.create("bad-app-name",{appName:String(i)});if(t||(t=Zl()),!t)throw xe.create("no-options");const r=Ht.get(i);if(r){if(Xn(t,r.options)&&Xn(s,r.config))return r;throw xe.create("duplicate-app",{appName:i})}const o=new wh(i);for(const c of Si.values())o.addComponent(c);const a=new hd(t,s,o);return Ht.set(i,a),a}function nr(n=Ti){const e=Ht.get(n);if(!e&&n===Ti)return xa();if(!e)throw xe.create("no-app",{appName:n});return e}function dd(){return Array.from(Ht.values())}function Ue(n,e,t){var s;let i=(s=cd[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(a.join(" "));return}mt(new et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const fd="firebase-heartbeat-database",pd=1,Kt="firebase-heartbeat-store";let ri=null;function Ua(){return ri||(ri=Oh(fd,pd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Kt)}}}).catch(n=>{throw xe.create("idb-open",{originalErrorMessage:n.message})})),ri}async function gd(n){try{return(await Ua()).transaction(Kt).objectStore(Kt).get(Fa(n))}catch(e){if(e instanceof ke)tt.warn(e.message);else{const t=xe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(t.message)}}}async function po(n,e){try{const s=(await Ua()).transaction(Kt,"readwrite");return await s.objectStore(Kt).put(e,Fa(n)),s.done}catch(t){if(t instanceof ke)tt.warn(t.message);else{const s=xe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tt.warn(s.message)}}}function Fa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const md=1024,yd=30*24*60*60*1e3;class vd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ed(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=go();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=yd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=go(),{heartbeatsToSend:t,unsentEntries:s}=wd(this._heartbeatsCache.heartbeats),i=Yn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function go(){return new Date().toISOString().substring(0,10)}function wd(n,e=md){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),mo(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),mo(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ed{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oh()?ah().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return po(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return po(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mo(n){return Yn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Id(n){mt(new et("platform-logger",e=>new Mh(e),"PRIVATE")),mt(new et("heartbeat",e=>new vd(e),"PRIVATE")),Ue(_i,fo,n),Ue(_i,fo,"esm2017"),Ue("fire-js","")}Id("");function sr(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Va(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _d=Va,$a=new an("auth","Firebase",Va());/**
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
 */const Jn=new Zi("@firebase/auth");function Td(n,...e){Jn.logLevel<=R.WARN&&Jn.warn(`Auth (${At}): ${n}`,...e)}function qn(n,...e){Jn.logLevel<=R.ERROR&&Jn.error(`Auth (${At}): ${n}`,...e)}/**
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
 */function ye(n,...e){throw ir(n,...e)}function de(n,...e){return ir(n,...e)}function Ba(n,e,t){const s=Object.assign(Object.assign({},_d()),{[e]:t});return new an("auth","Firebase",s).create(e,{appName:n.name})}function Sd(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ye(n,"argument-error"),Ba(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ir(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return $a.create(n,...e)}function T(n,e,...t){if(!n)throw ir(e,...t)}function Ee(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qn(e),new Error(e)}function Te(n,e){n||Ee(e)}/**
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
 */function bi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function bd(){return yo()==="http:"||yo()==="https:"}function yo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Cd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bd()||sh()||"connection"in navigator)?navigator.onLine:!0}function Ad(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class un{constructor(e,t){this.shortDelay=e,this.longDelay=t,Te(t>e,"Short delay should be less than long delay!"),this.isMobile=nh()||ih()}get(){return Cd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rr(n,e){Te(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class qa{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dd=new un(3e4,6e4);function ja(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ln(n,e,t,s,i={}){return za(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=cn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),qa.fetch()(Ha(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function za(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},kd),e);try{const i=new Nd(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Pn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pn(n,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ba(n,l,u);ye(n,l)}}catch(i){if(i instanceof ke)throw i;ye(n,"network-request-failed",{message:String(i)})}}async function Rd(n,e,t,s,i={}){const r=await ln(n,e,t,s,i);return"mfaPendingCredential"in r&&ye(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Ha(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?rr(n.config,i):`${n.config.apiScheme}://${i}`}class Nd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(de(this.auth,"network-request-failed")),Dd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=de(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function Od(n,e){return ln(n,"POST","/v1/accounts:delete",e)}async function Pd(n,e){return ln(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ld(n,e=!1){const t=z(n),s=await t.getIdToken(e),i=or(s);T(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Vt(oi(i.auth_time)),issuedAtTime:Vt(oi(i.iat)),expirationTime:Vt(oi(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function oi(n){return Number(n)*1e3}function or(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return qn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Na(t);return i?JSON.parse(i):(qn("Failed to decode base64 JWT payload"),null)}catch(i){return qn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Md(n){const e=or(n);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gt(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ke&&xd(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function xd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ud{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ka{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vt(this.lastLoginAt),this.creationTime=Vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zn(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Gt(n,Pd(t,{idToken:s}));T(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?$d(r.providerUserInfo):[],a=Vd(n.providerData,o),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ka(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function Fd(n){const e=z(n);await Zn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vd(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function $d(n){return n.map(e=>{var{providerId:t}=e,s=sr(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Bd(n,e){const t=await za(n,{},async()=>{const s=cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Ha(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qa.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Wt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Md(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Bd(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Wt;return s&&(T(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(T(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(T(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wt,this.toJSON())}_performRefresh(){return Ee("not implemented")}}/**
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
 */function Ne(n,e){T(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xe{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=sr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ud(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ka(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Gt(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ld(this,e)}reload(){return Fd(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Zn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gt(this,Od(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,u,l;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,g=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,E=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,A=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,q=(u=t.createdAt)!==null&&u!==void 0?u:void 0,Q=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:ae,emailVerified:De,isAnonymous:Re,providerData:ct,stsTokenManager:Nn}=t;T(ae&&Nn,e,"internal-error");const On=Wt.fromJSON(this.name,Nn);T(typeof ae=="string",e,"internal-error"),Ne(h,e.name),Ne(d,e.name),T(typeof De=="boolean",e,"internal-error"),T(typeof Re=="boolean",e,"internal-error"),Ne(g,e.name),Ne(E,e.name),Ne(I,e.name),Ne(A,e.name),Ne(q,e.name),Ne(Q,e.name);const ei=new Xe({uid:ae,auth:e,email:d,emailVerified:De,displayName:h,isAnonymous:Re,photoURL:E,phoneNumber:g,tenantId:I,stsTokenManager:On,createdAt:q,lastLoginAt:Q});return ct&&Array.isArray(ct)&&(ei.providerData=ct.map(zl=>Object.assign({},zl))),A&&(ei._redirectEventId=A),ei}static async _fromIdTokenResponse(e,t,s=!1){const i=new Wt;i.updateFromServerResponse(t);const r=new Xe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Zn(r),r}}/**
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
 */const vo=new Map;function Ie(n){Te(n instanceof Function,"Expected a class definition");let e=vo.get(n);return e?(Te(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vo.set(n,e),e)}/**
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
 */class Ga{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ga.type="NONE";const wo=Ga;/**
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
 */function jn(n,e,t){return`firebase:${n}:${e}:${t}`}class dt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=jn(this.userKey,i.apiKey,r),this.fullPersistenceKey=jn("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new dt(Ie(wo),e,s);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Ie(wo);const o=jn(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=Xe._fromJSON(e,l);u!==r&&(a=h),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new dt(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new dt(r,e,s))}}/**
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
 */function Eo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ya(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ja(e))return"Blackberry";if(Za(e))return"Webos";if(ar(e))return"Safari";if((e.includes("chrome/")||Qa(e))&&!e.includes("edge/"))return"Chrome";if(Xa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wa(n=se()){return/firefox\//i.test(n)}function ar(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qa(n=se()){return/crios\//i.test(n)}function Ya(n=se()){return/iemobile/i.test(n)}function Xa(n=se()){return/android/i.test(n)}function Ja(n=se()){return/blackberry/i.test(n)}function Za(n=se()){return/webos/i.test(n)}function Is(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qd(n=se()){var e;return Is(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jd(){return rh()&&document.documentMode===10}function ec(n=se()){return Is(n)||Xa(n)||Za(n)||Ja(n)||/windows phone/i.test(n)||Ya(n)}function zd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function tc(n,e=[]){let t;switch(n){case"Browser":t=Eo(se());break;case"Worker":t=`${Eo(se())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${At}/${s}`}async function nc(n,e){return ln(n,"GET","/v2/recaptchaConfig",ja(n,e))}function Io(n){return n!==void 0&&n.enterprise!==void 0}class sc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Hd(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ic(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=de("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Hd().appendChild(s)})}function Kd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Gd="https://www.google.com/recaptcha/enterprise.js?render=",Wd="recaptcha-enterprise";class Qd{constructor(e){this.type=Wd,this.auth=hn(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{nc(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new sc(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Io(c)?c.enterprise.ready(()=>{try{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!t&&Io(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ic(Gd+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class Yd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class Xd{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _o(this),this.idTokenSubscription=new _o(this),this.beforeStateQueue=new Yd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$a,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ie(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ad()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?z(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ie(e))})}async initializeRecaptchaConfig(){const e=await nc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new sc(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Qd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new an("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ie(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[Ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Td(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hn(n){return z(n)}class _o{constructor(e){this.auth=e,this.observer=null,this.addObserver=dh(t=>this.observer=t)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Jd(n,e){const t=tr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Xn(r,e??{}))return i;ye(i,"already-initialized")}return t.initialize({options:e})}function Zd(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ie);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ef(n,e,t){const s=hn(n);T(s._canInitEmulator,s,"emulator-config-failed"),T(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=rc(e),{host:o,port:a}=tf(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nf()}function rc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function tf(n){const e=rc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:To(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:To(o)}}}function To(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function nf(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class oc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ee("not implemented")}_getIdTokenResponse(e){return Ee("not implemented")}_linkToIdToken(e,t){return Ee("not implemented")}_getReauthenticationResolver(e){return Ee("not implemented")}}/**
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
 */async function ft(n,e){return Rd(n,"POST","/v1/accounts:signInWithIdp",ja(n,e))}/**
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
 */const sf="http://localhost";class nt extends oc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=sr(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new nt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ft(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:sf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cn(t)}return e}}/**
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
 */class cr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dn extends cr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Oe extends dn{constructor(){super("facebook.com")}static credential(e){return nt._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Oe.PROVIDER_ID="facebook.com";/**
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
 */class we extends dn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nt._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return we.credential(t,s)}catch{return null}}}we.GOOGLE_SIGN_IN_METHOD="google.com";we.PROVIDER_ID="google.com";/**
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
 */class Pe extends dn{constructor(){super("github.com")}static credential(e){return nt._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com";Pe.PROVIDER_ID="github.com";/**
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
 */class Le extends dn{constructor(){super("twitter.com")}static credential(e,t){return nt._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Le.credential(t,s)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
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
 */class yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Xe._fromIdTokenResponse(e,s,i),o=So(s);return new yt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=So(s);return new yt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function So(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class es extends ke{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,es.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new es(e,t,s,i)}}function ac(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?es._fromErrorAndOperation(n,r,e,s):r})}async function rf(n,e,t=!1){const s=await Gt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yt._forOperation(n,"link",s)}/**
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
 */async function of(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await Gt(n,ac(s,i,e,n),t);T(r.idToken,s,"internal-error");const o=or(r.idToken);T(o,s,"internal-error");const{sub:a}=o;return T(n.uid===a,s,"user-mismatch"),yt._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ye(s,"user-mismatch"),r}}/**
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
 */async function af(n,e,t=!1){const s="signIn",i=await ac(n,s,e),r=await yt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function cf(n,e,t,s){return z(n).onIdTokenChanged(e,t,s)}function uf(n,e,t){return z(n).beforeAuthStateChanged(e,t)}function Tv(n,e,t,s){return z(n).onAuthStateChanged(e,t,s)}function Sv(n){return z(n).signOut()}const ts="__sak";/**
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
 */class cc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ts,"1"),this.storage.removeItem(ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lf(){const n=se();return ar(n)||Is(n)}const hf=1e3,df=10;class uc extends cc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lf()&&zd(),this.fallbackToPolling=ec(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);jd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,df):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},hf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}uc.type="LOCAL";const ff=uc;/**
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
 */class lc extends cc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lc.type="SESSION";const hc=lc;/**
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
 */function pf(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _s{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new _s(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,r)),c=await pf(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_s.receivers=[];/**
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
 */function ur(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class gf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=ur("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(l),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function fe(){return window}function mf(n){fe().location.href=n}/**
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
 */function dc(){return typeof fe().WorkerGlobalScope<"u"&&typeof fe().importScripts=="function"}async function yf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wf(){return dc()?self:null}/**
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
 */const fc="firebaseLocalStorageDb",Ef=1,ns="firebaseLocalStorage",pc="fbase_key";class fn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ts(n,e){return n.transaction([ns],e?"readwrite":"readonly").objectStore(ns)}function If(){const n=indexedDB.deleteDatabase(fc);return new fn(n).toPromise()}function Ci(){const n=indexedDB.open(fc,Ef);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ns,{keyPath:pc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ns)?e(s):(s.close(),await If(),e(await Ci()))})})}async function bo(n,e,t){const s=Ts(n,!0).put({[pc]:e,value:t});return new fn(s).toPromise()}async function _f(n,e){const t=Ts(n,!1).get(e),s=await new fn(t).toPromise();return s===void 0?null:s.value}function Co(n,e){const t=Ts(n,!0).delete(e);return new fn(t).toPromise()}const Tf=800,Sf=3;class gc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ci(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Sf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_s._getInstance(wf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yf(),!this.activeServiceWorker)return;this.sender=new gf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ci();return await bo(e,ts,"1"),await Co(e,ts),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>bo(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>_f(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Co(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ts(i,!1).getAll();return new fn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gc.type="LOCAL";const bf=gc;new un(3e4,6e4);/**
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
 */function mc(n,e){return e?Ie(e):(T(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class lr extends oc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cf(n){return af(n.auth,new lr(n),n.bypassAuthState)}function Af(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),of(t,new lr(n),n.bypassAuthState)}async function kf(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),rf(t,new lr(n),n.bypassAuthState)}/**
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
 */class yc{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cf;case"linkViaPopup":case"linkViaRedirect":return kf;case"reauthViaPopup":case"reauthViaRedirect":return Af;default:ye(this.auth,"internal-error")}}resolve(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Df=new un(2e3,1e4);async function bv(n,e,t){const s=hn(n);Sd(n,e,cr);const i=mc(s,t);return new Ge(s,"signInViaPopup",e,i).executeNotNull()}class Ge extends yc{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ge.currentPopupAction&&Ge.currentPopupAction.cancel(),Ge.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){Te(this.filter.length===1,"Popup operations only handle one event");const e=ur();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(de(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(de(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ge.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(de(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Df.get())};e()}}Ge.currentPopupAction=null;/**
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
 */const Rf="pendingRedirect",zn=new Map;class Nf extends yc{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=zn.get(this.auth._key());if(!e){try{const s=await Of(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}zn.set(this.auth._key(),e)}return this.bypassAuthState||zn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Of(n,e){const t=Mf(e),s=Lf(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Pf(n,e){zn.set(n._key(),e)}function Lf(n){return Ie(n._redirectPersistence)}function Mf(n){return jn(Rf,n.config.apiKey,n.name)}async function xf(n,e,t=!1){const s=hn(n),i=mc(s,e),o=await new Nf(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Uf=10*60*1e3;class Ff{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!vc(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(de(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ao(e))}saveEventToCache(e){this.cachedEventUids.add(Ao(e)),this.lastProcessedEventTime=Date.now()}}function Ao(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function vc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vc(n);default:return!1}}/**
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
 */async function $f(n,e={}){return ln(n,"GET","/v1/projects",e)}/**
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
 */const Bf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qf=/^https?/;async function jf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $f(n);for(const t of e)try{if(zf(t))return}catch{}ye(n,"unauthorized-domain")}function zf(n){const e=bi(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!qf.test(t))return!1;if(Bf.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Hf=new un(3e4,6e4);function ko(){const n=fe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kf(n){return new Promise((e,t)=>{var s,i,r;function o(){ko(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ko(),t(de(n,"network-request-failed"))},timeout:Hf.get()})}if(!((i=(s=fe().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=fe().gapi)===null||r===void 0)&&r.load)o();else{const a=Kd("iframefcb");return fe()[a]=()=>{gapi.load?o():t(de(n,"network-request-failed"))},ic(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Hn=null,e})}let Hn=null;function Gf(n){return Hn=Hn||Kf(n),Hn}/**
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
 */const Wf=new un(5e3,15e3),Qf="__/auth/iframe",Yf="emulator/auth/iframe",Xf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zf(n){const e=n.config;T(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?rr(e,Yf):`https://${n.config.authDomain}/${Qf}`,s={apiKey:e.apiKey,appName:n.name,v:At},i=Jf.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${cn(s).slice(1)}`}async function ep(n){const e=await Gf(n),t=fe().gapi;return T(t,n,"internal-error"),e.open({where:document.body,url:Zf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xf,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=de(n,"network-request-failed"),a=fe().setTimeout(()=>{r(o)},Wf.get());function c(){fe().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const tp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},np=500,sp=600,ip="_blank",rp="http://localhost";class Do{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function op(n,e,t,s=np,i=sp){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tp),{width:s.toString(),height:i.toString(),top:r,left:o}),u=se().toLowerCase();t&&(a=Qa(u)?ip:t),Wa(u)&&(e=e||rp,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,E])=>`${d}${g}=${E},`,"");if(qd(u)&&a!=="_self")return ap(e||"",a),new Do(null);const h=window.open(e||"",a,l);T(h,n,"popup-blocked");try{h.focus()}catch{}return new Do(h)}function ap(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const cp="__/auth/handler",up="emulator/auth/handler",lp=encodeURIComponent("fac");async function Ro(n,e,t,s,i,r){T(n.config.authDomain,n,"auth-domain-config-required"),T(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:At,eventId:i};if(e instanceof cr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",hh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(r||{}))o[l]=h}if(e instanceof dn){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${lp}=${encodeURIComponent(c)}`:"";return`${hp(n)}?${cn(a).slice(1)}${u}`}function hp({config:n}){return n.emulator?rr(n,up):`https://${n.authDomain}/${cp}`}/**
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
 */const ai="webStorageSupport";class dp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hc,this._completeRedirectFn=xf,this._overrideRedirectResult=Pf}async _openPopup(e,t,s,i){var r;Te((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ro(e,t,s,bi(),i);return op(e,o,ur())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Ro(e,t,s,bi(),i);return mf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Te(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ep(e),s=new Ff(e);return t.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ai,{type:ai},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ai];o!==void 0&&t(!!o),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ec()||ar()||Is()}}const fp=dp;var No="@firebase/auth",Oo="0.23.0";/**
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
 */class pp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mp(n){mt(new et("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),T(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tc(n)},u=new Xd(s,i,r,c);return Zd(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),mt(new et("auth-internal",e=>{const t=hn(e.getProvider("auth").getImmediate());return(s=>new pp(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(No,Oo,gp(n)),Ue(No,Oo,"esm2017")}/**
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
 */const yp=5*60,vp=Pa("authIdTokenMaxAge")||yp;let Po=null;const wp=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>vp)return;const i=t==null?void 0:t.token;Po!==i&&(Po=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ep(n=nr()){const e=tr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Jd(n,{popupRedirectResolver:fp,persistence:[bf,ff,hc]}),s=Pa("authTokenSyncURL");if(s){const r=wp(s);uf(t,r,()=>r(t.currentUser)),cf(t,o=>r(o))}const i=Oa("auth");return i&&ef(t,`http://${i}`),t}mp("Browser");var Ip="firebase",_p="9.20.0";/**
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
 */Ue(Ip,_p,"app");var Tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,hr=hr||{},S=Tp||self;function ss(){}function Ss(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function pn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Sp(n){return Object.prototype.hasOwnProperty.call(n,ci)&&n[ci]||(n[ci]=++bp)}var ci="closure_uid_"+(1e9*Math.random()>>>0),bp=0;function Cp(n,e,t){return n.call.apply(n.bind,arguments)}function Ap(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function ee(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ee=Cp:ee=Ap,ee.apply(null,arguments)}function Ln(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function W(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function je(){this.s=this.s,this.o=this.o}var kp=0;je.prototype.s=!1;je.prototype.na=function(){!this.s&&(this.s=!0,this.M(),kp!=0)&&Sp(this)};je.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wc=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function dr(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function Lo(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(Ss(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function te(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var Dp=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{S.addEventListener("test",ss,e),S.removeEventListener("test",ss,e)}catch{}return n}();function is(n){return/^[\s\xa0]*$/.test(n)}var Mo=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function ui(n,e){return n<e?-1:n>e?1:0}function bs(){var n=S.navigator;return n&&(n=n.userAgent)?n:""}function he(n){return bs().indexOf(n)!=-1}function fr(n){return fr[" "](n),n}fr[" "]=ss;function Rp(n){var e=Pp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Np=he("Opera"),vt=he("Trident")||he("MSIE"),Ec=he("Edge"),Ai=Ec||vt,Ic=he("Gecko")&&!(bs().toLowerCase().indexOf("webkit")!=-1&&!he("Edge"))&&!(he("Trident")||he("MSIE"))&&!he("Edge"),Op=bs().toLowerCase().indexOf("webkit")!=-1&&!he("Edge");function _c(){var n=S.document;return n?n.documentMode:void 0}var rs;e:{var li="",hi=function(){var n=bs();if(Ic)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ec)return/Edge\/([\d\.]+)/.exec(n);if(vt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Op)return/WebKit\/(\S+)/.exec(n);if(Np)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(hi&&(li=hi?hi[1]:""),vt){var di=_c();if(di!=null&&di>parseFloat(li)){rs=String(di);break e}}rs=li}var Pp={};function Lp(){return Rp(function(){let n=0;const e=Mo(String(rs)).split("."),t=Mo("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var i=e[o]||"",r=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;n=ui(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||ui(i[2].length==0,r[2].length==0)||ui(i[2],r[2]),i=i[3],r=r[3]}while(n==0)}return 0<=n})}var ki;if(S.document&&vt){var xo=_c();ki=xo||parseInt(rs,10)||void 0}else ki=void 0;var Mp=ki;function Qt(n,e){if(te.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Ic){e:{try{fr(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:xp[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Qt.X.h.call(this)}}W(Qt,te);var xp={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),Up=0;function Fp(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=i,this.key=++Up,this.ba=this.ea=!1}function Cs(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function pr(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function Tc(n){const e={};for(const t in n)e[t]=n[t];return e}const Uo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sc(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<Uo.length;r++)t=Uo[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function As(n){this.src=n,this.g={},this.h=0}As.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Ri(n,e,s,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new Fp(e,this.src,r,!!s,i),e.ea=t,n.push(e)),e};function Di(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=wc(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Cs(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ri(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.ba&&r.listener==e&&r.capture==!!t&&r.ha==s)return i}return-1}var gr="closure_lm_"+(1e6*Math.random()|0),fi={};function bc(n,e,t,s,i){if(s&&s.once)return Ac(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)bc(n,e[r],t,s,i);return null}return t=vr(t),n&&n[gn]?n.N(e,t,pn(s)?!!s.capture:!!s,i):Cc(n,e,t,!1,s,i)}function Cc(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=pn(i)?!!i.capture:!!i,a=yr(n);if(a||(n[gr]=a=new As(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=Vp(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)Dp||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(Dc(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Vp(){function n(t){return e.call(n.src,n.listener,t)}const e=$p;return n}function Ac(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ac(n,e[r],t,s,i);return null}return t=vr(t),n&&n[gn]?n.O(e,t,pn(s)?!!s.capture:!!s,i):Cc(n,e,t,!0,s,i)}function kc(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)kc(n,e[r],t,s,i);else s=pn(s)?!!s.capture:!!s,t=vr(t),n&&n[gn]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Ri(r,t,s,i),-1<t&&(Cs(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=yr(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ri(e,t,s,i)),(t=-1<n?e[n]:null)&&mr(t))}function mr(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[gn])Di(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Dc(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=yr(e))?(Di(t,n),t.h==0&&(t.src=null,e[gr]=null)):Cs(n)}}}function Dc(n){return n in fi?fi[n]:fi[n]="on"+n}function $p(n,e){if(n.ba)n=!0;else{e=new Qt(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&mr(n),n=t.call(s,e)}return n}function yr(n){return n=n[gr],n instanceof As?n:null}var pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function vr(n){return typeof n=="function"?n:(n[pi]||(n[pi]=function(e){return n.handleEvent(e)}),n[pi])}function H(){je.call(this),this.i=new As(this),this.P=this,this.I=null}W(H,je);H.prototype[gn]=!0;H.prototype.removeEventListener=function(n,e,t,s){kc(this,n,e,t,s)};function G(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new te(e,n);else if(e instanceof te)e.target=e.target||n;else{var i=e;e=new te(s,n),Sc(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=Mn(o,s,!0,e)&&i}if(o=e.g=n,i=Mn(o,s,!0,e)&&i,i=Mn(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=Mn(o,s,!1,e)&&i}H.prototype.M=function(){if(H.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)Cs(t[s]);delete n.g[e],n.h--}}this.I=null};H.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};H.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Mn(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Di(n.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var wr=S.JSON.stringify;function Bp(){var n=Oc;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class qp{constructor(){this.h=this.g=null}add(e,t){const s=Rc.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var Rc=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new jp,n=>n.reset());class jp{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function zp(n){S.setTimeout(()=>{throw n},0)}function Nc(n,e){Ni||Hp(),Oi||(Ni(),Oi=!0),Oc.add(n,e)}var Ni;function Hp(){var n=S.Promise.resolve(void 0);Ni=function(){n.then(Kp)}}var Oi=!1,Oc=new qp;function Kp(){for(var n;n=Bp();){try{n.h.call(n.g)}catch(t){zp(t)}var e=Rc;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Oi=!1}function ks(n,e){H.call(this),this.h=n||1,this.g=e||S,this.j=ee(this.lb,this),this.l=Date.now()}W(ks,H);y=ks.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),G(this,"tick"),this.ca&&(Er(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Er(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}y.M=function(){ks.X.M.call(this),Er(this),delete this.g};function Ir(n,e,t){if(typeof n=="function")t&&(n=ee(n,t));else if(n&&typeof n.handleEvent=="function")n=ee(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:S.setTimeout(n,e||0)}function Pc(n){n.g=Ir(()=>{n.g=null,n.i&&(n.i=!1,Pc(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Gp extends je{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Pc(this)}M(){super.M(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(n){je.call(this),this.h=n,this.g={}}W(Yt,je);var Fo=[];function Lc(n,e,t,s){Array.isArray(t)||(t&&(Fo[0]=t.toString()),t=Fo);for(var i=0;i<t.length;i++){var r=bc(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function Mc(n){pr(n.g,function(e,t){this.g.hasOwnProperty(t)&&mr(e)},n),n.g={}}Yt.prototype.M=function(){Yt.X.M.call(this),Mc(this)};Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ds(){this.g=!0}Ds.prototype.Aa=function(){this.g=!1};function Wp(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function Qp(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function ht(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Xp(n,t)+(s?" "+s:"")})}function Yp(n,e){n.info(function(){return"TIMEOUT: "+e})}Ds.prototype.info=function(){};function Xp(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wr(t)}catch{return e}}var rt={},Vo=null;function Rs(){return Vo=Vo||new H}rt.Pa="serverreachability";function xc(n){te.call(this,rt.Pa,n)}W(xc,te);function Xt(n){const e=Rs();G(e,new xc(e))}rt.STAT_EVENT="statevent";function Uc(n,e){te.call(this,rt.STAT_EVENT,n),this.stat=e}W(Uc,te);function re(n){const e=Rs();G(e,new Uc(e,n))}rt.Qa="timingevent";function Fc(n,e){te.call(this,rt.Qa,n),this.size=e}W(Fc,te);function mn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){n()},e)}var Ns={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Vc={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function _r(){}_r.prototype.h=null;function $o(n){return n.h||(n.h=n.i())}function $c(){}var yn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Tr(){te.call(this,"d")}W(Tr,te);function Sr(){te.call(this,"c")}W(Sr,te);var Pi;function Os(){}W(Os,_r);Os.prototype.g=function(){return new XMLHttpRequest};Os.prototype.i=function(){return{}};Pi=new Os;function vn(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new Yt(this),this.O=Jp,n=Ai?125:void 0,this.T=new ks(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Bc}function Bc(){this.i=null,this.g="",this.h=!1}var Jp=45e3,Li={},os={};y=vn.prototype;y.setTimeout=function(n){this.O=n};function Mi(n,e,t){n.K=1,n.v=Ls(Se(e)),n.s=t,n.P=!0,qc(n,null)}function qc(n,e){n.F=Date.now(),wn(n),n.A=Se(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),Yc(t.i,"t",s),n.C=0,t=n.l.H,n.h=new Bc,n.g=yu(n.l,t?e:null,!n.s),0<n.N&&(n.L=new Gp(ee(n.La,n,n.g),n.N)),Lc(n.S,n.g,"readystatechange",n.ib),e=n.H?Tc(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Xt(),Wp(n.j,n.u,n.A,n.m,n.U,n.s)}y.ib=function(n){n=n.target;const e=this.L;e&&_e(n)==3?e.l():this.La(n)};y.La=function(n){try{if(n==this.g)e:{const l=_e(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Ai||this.g&&(this.h.h||this.g.fa()||zo(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Xt(3):Xt(2)),Ps(this);var t=this.g.aa();this.Y=t;t:if(jc(this)){var s=zo(this.g);n="";var i=s.length,r=_e(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){We(this),$t(this);var o="";break t}this.h.i=new S.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,Qp(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!is(a)){var u=a;break t}}u=null}if(t=u)ht(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xi(this,t);else{this.i=!1,this.o=3,re(12),We(this),$t(this);break e}}this.P?(zc(this,l,o),Ai&&this.i&&l==3&&(Lc(this.S,this.T,"tick",this.hb),this.T.start())):(ht(this.j,this.m,o,null),xi(this,o)),l==4&&We(this),this.i&&!this.I&&(l==4?fu(this.l,this):(this.i=!1,wn(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,re(12)):(this.o=0,re(13)),We(this),$t(this)}}}catch{}finally{}};function jc(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function zc(n,e,t){let s=!0,i;for(;!n.I&&n.C<t.length;)if(i=Zp(n,t),i==os){e==4&&(n.o=4,re(14),s=!1),ht(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Li){n.o=4,re(15),ht(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else ht(n.j,n.m,i,null),xi(n,i);jc(n)&&i!=os&&i!=Li&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,re(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Nr(e),e.K=!0,re(11))):(ht(n.j,n.m,t,"[Invalid Chunked Response]"),We(n),$t(n))}y.hb=function(){if(this.g){var n=_e(this.g),e=this.g.fa();this.C<e.length&&(Ps(this),zc(this,n,e),this.i&&n!=4&&wn(this))}};function Zp(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?os:(t=Number(e.substring(t,s)),isNaN(t)?Li:(s+=1,s+t>e.length?os:(e=e.substr(s,t),n.C=s+t,e)))}y.cancel=function(){this.I=!0,We(this)};function wn(n){n.V=Date.now()+n.O,Hc(n,n.O)}function Hc(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=mn(ee(n.gb,n),e)}function Ps(n){n.B&&(S.clearTimeout(n.B),n.B=null)}y.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(Yp(this.j,this.A),this.K!=2&&(Xt(),re(17)),We(this),this.o=2,$t(this)):Hc(this,this.V-n)};function $t(n){n.l.G==0||n.I||fu(n.l,n)}function We(n){Ps(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Er(n.T),Mc(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function xi(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Ui(t.h,n))){if(!n.J&&Ui(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)us(t),Us(t);else break e;Rr(t),re(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=mn(ee(t.cb,t),6e3));if(1>=Zc(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else Qe(t,11)}else if((n.J||t.g==n)&&us(t),!is(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const g=n.g;if(g){const E=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var r=s.h;r.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(br(r,r.h),r.h=null))}if(s.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.za=I,L(s.F,s.D,I))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=mu(s,s.H?s.ka:null,s.V),o.J){eu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ps(a),wn(a)),s.g=o}else hu(s);0<t.i.length&&Fs(t)}else u[0]!="stop"&&u[0]!="close"||Qe(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Qe(t,7):Dr(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}Xt(4)}catch{}}function eg(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Ss(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function tg(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Ss(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function Kc(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Ss(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=tg(n),s=eg(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var Gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ng(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Je(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Je){this.h=e!==void 0?e:n.h,as(this,n.j),this.s=n.s,this.g=n.g,cs(this,n.m),this.l=n.l,e=n.i;var t=new Jt;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Bo(this,t),this.o=n.o}else n&&(t=String(n).match(Gc))?(this.h=!!e,as(this,t[1]||"",!0),this.s=Mt(t[2]||""),this.g=Mt(t[3]||"",!0),cs(this,t[4]),this.l=Mt(t[5]||"",!0),Bo(this,t[6]||"",!0),this.o=Mt(t[7]||"")):(this.h=!!e,this.i=new Jt(null,this.h))}Je.prototype.toString=function(){var n=[],e=this.j;e&&n.push(xt(e,qo,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(xt(e,qo,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(xt(t,t.charAt(0)=="/"?rg:ig,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",xt(t,ag)),n.join("")};function Se(n){return new Je(n)}function as(n,e,t){n.j=t?Mt(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function cs(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Bo(n,e,t){e instanceof Jt?(n.i=e,cg(n.i,n.h)):(t||(e=xt(e,og)),n.i=new Jt(e,n.h))}function L(n,e,t){n.i.set(e,t)}function Ls(n){return L(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Mt(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function xt(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,sg),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function sg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var qo=/[#\/\?@]/g,ig=/[#\?:]/g,rg=/[#\?]/g,og=/[#\?@]/g,ag=/#/g;function Jt(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function ze(n){n.g||(n.g=new Map,n.h=0,n.i&&ng(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}y=Jt.prototype;y.add=function(n,e){ze(this),this.i=null,n=kt(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Wc(n,e){ze(n),e=kt(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Qc(n,e){return ze(n),e=kt(n,e),n.g.has(e)}y.forEach=function(n,e){ze(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};y.oa=function(){ze(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};y.W=function(n){ze(this);let e=[];if(typeof n=="string")Qc(this,n)&&(e=e.concat(this.g.get(kt(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};y.set=function(n,e){return ze(this),this.i=null,n=kt(this,n),Qc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};y.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Yc(n,e,t){Wc(n,e),0<t.length&&(n.i=null,n.g.set(kt(n,e),dr(t)),n.h+=t.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function kt(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function cg(n,e){e&&!n.j&&(ze(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(Wc(this,s),Yc(this,i,t))},n)),n.j=e}var ug=class{constructor(e,t){this.h=e,this.g=t}};function Xc(n){this.l=n||lg,S.PerformanceNavigationTiming?(n=S.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(S.g&&S.g.Ga&&S.g.Ga()&&S.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lg=10;function Jc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Zc(n){return n.h?1:n.g?n.g.size:0}function Ui(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function br(n,e){n.g?n.g.add(e):n.h=e}function eu(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Xc.prototype.cancel=function(){if(this.i=tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function tu(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return dr(n.i)}function Cr(){}Cr.prototype.stringify=function(n){return S.JSON.stringify(n,void 0)};Cr.prototype.parse=function(n){return S.JSON.parse(n,void 0)};function hg(){this.g=new Cr}function dg(n,e,t){const s=t||"";try{Kc(n,function(i,r){let o=i;pn(i)&&(o=wr(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function fg(n,e){const t=new Ds;if(S.Image){const s=new Image;s.onload=Ln(xn,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Ln(xn,t,s,"TestLoadImage: error",!1,e),s.onabort=Ln(xn,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ln(xn,t,s,"TestLoadImage: timeout",!1,e),S.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function xn(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function En(n){this.l=n.ac||null,this.j=n.jb||!1}W(En,_r);En.prototype.g=function(){return new Ms(this.l,this.j)};En.prototype.i=function(n){return function(){return n}}({});function Ms(n,e){H.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Ar,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}W(Ms,H);var Ar=0;y=Ms.prototype;y.open=function(n,e){if(this.readyState!=Ar)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Zt(this)};y.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||S).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=Ar};y.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Zt(this)),this.g&&(this.readyState=3,Zt(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nu(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function nu(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}y.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?In(this):Zt(this),this.readyState==3&&nu(this)}};y.Va=function(n){this.g&&(this.response=this.responseText=n,In(this))};y.Ua=function(n){this.g&&(this.response=n,In(this))};y.ga=function(){this.g&&In(this)};function In(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Zt(n)}y.setRequestHeader=function(n,e){this.v.append(n,e)};y.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Zt(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ms.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var pg=S.JSON.parse;function M(n){H.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=su,this.K=this.L=!1}W(M,H);var su="",gg=/^https?$/i,mg=["POST","PUT"];y=M.prototype;y.Ka=function(n){this.L=n};y.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Pi.g(),this.C=this.u?$o(this.u):$o(Pi),this.g.onreadystatechange=ee(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){jo(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=S.FormData&&n instanceof S.FormData,!(0<=wc(mg,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ou(this),0<this.B&&((this.K=yg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ee(this.qa,this)):this.A=Ir(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){jo(this,r)}};function yg(n){return vt&&Lp()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}y.qa=function(){typeof hr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,G(this,"timeout"),this.abort(8))};function jo(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,iu(n),xs(n)}function iu(n){n.D||(n.D=!0,G(n,"complete"),G(n,"error"))}y.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,G(this,"complete"),G(this,"abort"),xs(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xs(this,!0)),M.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?ru(this):this.fb())};y.fb=function(){ru(this)};function ru(n){if(n.h&&typeof hr<"u"&&(!n.C[1]||_e(n)!=4||n.aa()!=2)){if(n.v&&_e(n)==4)Ir(n.Ha,0,n);else if(G(n,"readystatechange"),_e(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var i=String(n.H).match(Gc)[1]||null;if(!i&&S.self&&S.self.location){var r=S.self.location.protocol;i=r.substr(0,r.length-1)}s=!gg.test(i?i.toLowerCase():"")}t=s}if(t)G(n,"complete"),G(n,"success");else{n.m=6;try{var o=2<_e(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",iu(n)}}finally{xs(n)}}}}function xs(n,e){if(n.g){ou(n);const t=n.g,s=n.C[0]?ss:null;n.g=null,n.C=null,e||G(n,"ready");try{t.onreadystatechange=s}catch{}}}function ou(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(S.clearTimeout(n.A),n.A=null)}function _e(n){return n.g?n.g.readyState:0}y.aa=function(){try{return 2<_e(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),pg(e)}};function zo(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case su:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function au(n){let e="";return pr(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function kr(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=au(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):L(n,e,t))}function Lt(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function cu(n){this.Ca=0,this.i=[],this.j=new Ds,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Lt("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Lt("baseRetryDelayMs",5e3,n),this.bb=Lt("retryDelaySeedMs",1e4,n),this.$a=Lt("forwardChannelMaxRetries",2,n),this.ta=Lt("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Xc(n&&n.concurrentRequestLimit),this.Fa=new hg,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=cu.prototype;y.ma=8;y.G=1;function Dr(n){if(uu(n),n.G==3){var e=n.U++,t=Se(n.F);L(t,"SID",n.I),L(t,"RID",e),L(t,"TYPE","terminate"),_n(n,t),e=new vn(n,n.j,e,void 0),e.K=2,e.v=Ls(Se(t)),t=!1,S.navigator&&S.navigator.sendBeacon&&(t=S.navigator.sendBeacon(e.v.toString(),"")),!t&&S.Image&&(new Image().src=e.v,t=!0),t||(e.g=yu(e.l,null),e.g.da(e.v)),e.F=Date.now(),wn(e)}gu(n)}function Us(n){n.g&&(Nr(n),n.g.cancel(),n.g=null)}function uu(n){Us(n),n.u&&(S.clearTimeout(n.u),n.u=null),us(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&S.clearTimeout(n.m),n.m=null)}function Fs(n){Jc(n.h)||n.m||(n.m=!0,Nc(n.Ja,n),n.C=0)}function vg(n,e){return Zc(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=mn(ee(n.Ja,n,e),pu(n,n.C)),n.C++,!0)}y.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new vn(this,this.j,n,void 0);let r=this.s;if(this.S&&(r?(r=Tc(r),Sc(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=lu(this,i,e),t=Se(this.F),L(t,"RID",n),L(t,"CVER",22),this.D&&L(t,"X-HTTP-Session-Id",this.D),_n(this,t),r&&(this.N?e="headers="+encodeURIComponent(String(au(r)))+"&"+e:this.o&&kr(t,this.o,r)),br(this.h,i),this.Ya&&L(t,"TYPE","init"),this.O?(L(t,"$req",e),L(t,"SID","null"),i.Z=!0,Mi(i,t,null)):Mi(i,t,e),this.G=2}}else this.G==3&&(n?Ho(this,n):this.i.length==0||Jc(this.h)||Ho(this))};function Ho(n,e){var t;e?t=e.m:t=n.U++;const s=Se(n.F);L(s,"SID",n.I),L(s,"RID",t),L(s,"AID",n.T),_n(n,s),n.o&&n.s&&kr(s,n.o,n.s),t=new vn(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=lu(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),br(n.h,t),Mi(t,s,e)}function _n(n,e){n.ia&&pr(n.ia,function(t,s){L(e,s,t)}),n.l&&Kc({},function(t,s){L(e,s,t)})}function lu(n,e,t){t=Math.min(n.i.length,t);var s=n.l?ee(n.l.Ra,n.l,n):null;e:{var i=n.i;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let u=i[c].h;const l=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{dg(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function hu(n){n.g||n.u||(n.Z=1,Nc(n.Ia,n),n.A=0)}function Rr(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=mn(ee(n.Ia,n),pu(n,n.A)),n.A++,!0)}y.Ia=function(){if(this.u=null,du(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=mn(ee(this.eb,this),n)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,re(10),Us(this),du(this))};function Nr(n){n.B!=null&&(S.clearTimeout(n.B),n.B=null)}function du(n){n.g=new vn(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Se(n.sa);L(e,"RID","rpc"),L(e,"SID",n.I),L(e,"CI",n.L?"0":"1"),L(e,"AID",n.T),L(e,"TYPE","xmlhttp"),_n(n,e),n.o&&n.s&&kr(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Ls(Se(e)),t.s=null,t.P=!0,qc(t,n)}y.cb=function(){this.v!=null&&(this.v=null,Us(this),Rr(this),re(19))};function us(n){n.v!=null&&(S.clearTimeout(n.v),n.v=null)}function fu(n,e){var t=null;if(n.g==e){us(n),Nr(n),n.g=null;var s=2}else if(Ui(n.h,e))t=e.D,eu(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;s=Rs(),G(s,new Fc(s,t)),Fs(n)}else hu(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(s==1&&vg(n,e)||s==2&&Rr(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:Qe(n,5);break;case 4:Qe(n,10);break;case 3:Qe(n,6);break;default:Qe(n,2)}}}function pu(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function Qe(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=ee(n.kb,n);t||(t=new Je("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||as(t,"https"),Ls(t)),fg(t.toString(),s)}else re(2);n.G=0,n.l&&n.l.va(e),gu(n),uu(n)}y.kb=function(n){n?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function gu(n){if(n.G=0,n.la=[],n.l){const e=tu(n.h);(e.length!=0||n.i.length!=0)&&(Lo(n.la,e),Lo(n.la,n.i),n.h.i.length=0,dr(n.i),n.i.length=0),n.l.ua()}}function mu(n,e,t){var s=t instanceof Je?Se(t):new Je(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),cs(s,s.m);else{var i=S.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Je(null,void 0);s&&as(r,s),e&&(r.g=e),i&&cs(r,i),t&&(r.l=t),s=r}return t=n.D,e=n.za,t&&e&&L(s,t,e),L(s,"VER",n.ma),_n(n,s),s}function yu(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new M(new En({jb:!0})):new M(n.ra),e.Ka(n.H),e}function vu(){}y=vu.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function ls(){if(vt&&!(10<=Number(Mp)))throw Error("Environmental error: no available transport.")}ls.prototype.g=function(n,e){return new ue(n,e)};function ue(n,e){H.call(this),this.g=new cu(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!is(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!is(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Dt(this)}W(ue,H);ue.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;re(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=mu(n,null,n.V),Fs(n)};ue.prototype.close=function(){Dr(this.g)};ue.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=wr(n),n=t);e.i.push(new ug(e.ab++,n)),e.G==3&&Fs(e)};ue.prototype.M=function(){this.g.l=null,delete this.j,Dr(this.g),delete this.g,ue.X.M.call(this)};function wu(n){Tr.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}W(wu,Tr);function Eu(){Sr.call(this),this.status=1}W(Eu,Sr);function Dt(n){this.g=n}W(Dt,vu);Dt.prototype.xa=function(){G(this.g,"a")};Dt.prototype.wa=function(n){G(this.g,new wu(n))};Dt.prototype.va=function(n){G(this.g,new Eu)};Dt.prototype.ua=function(){G(this.g,"b")};ls.prototype.createWebChannel=ls.prototype.g;ue.prototype.send=ue.prototype.u;ue.prototype.open=ue.prototype.m;ue.prototype.close=ue.prototype.close;Ns.NO_ERROR=0;Ns.TIMEOUT=8;Ns.HTTP_ERROR=6;Vc.COMPLETE="complete";$c.EventType=yn;yn.OPEN="a";yn.CLOSE="b";yn.ERROR="c";yn.MESSAGE="d";H.prototype.listen=H.prototype.N;M.prototype.listenOnce=M.prototype.O;M.prototype.getLastError=M.prototype.Oa;M.prototype.getLastErrorCode=M.prototype.Ea;M.prototype.getStatus=M.prototype.aa;M.prototype.getResponseJson=M.prototype.Sa;M.prototype.getResponseText=M.prototype.fa;M.prototype.send=M.prototype.da;M.prototype.setWithCredentials=M.prototype.Ka;var wg=function(){return new ls},Eg=function(){return Rs()},gi=Ns,Ig=Vc,_g=rt,Ko={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Tg=En,Un=$c,Sg=M;const Go="@firebase/firestore";/**
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
 */class X{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
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
 */let Rt="9.20.0";/**
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
 */const st=new Zi("@firebase/firestore");function Wo(){return st.logLevel}function v(n,...e){if(st.logLevel<=R.DEBUG){const t=e.map(Or);st.debug(`Firestore (${Rt}): ${n}`,...t)}}function be(n,...e){if(st.logLevel<=R.ERROR){const t=e.map(Or);st.error(`Firestore (${Rt}): ${n}`,...t)}}function hs(n,...e){if(st.logLevel<=R.WARN){const t=e.map(Or);st.warn(`Firestore (${Rt}): ${n}`,...t)}}function Or(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function _(n="Unexpected state"){const e=`FIRESTORE (${Rt}) INTERNAL ASSERTION FAILED: `+n;throw be(e),new Error(e)}function P(n,e){n||_()}function C(n,e){return n}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends ke{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Iu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(X.UNAUTHENTICATED))}shutdown(){}}class Cg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ag{constructor(e){this.t=e,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new Fe;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Fe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Fe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(P(typeof s.accessToken=="string"),new Iu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return P(e===null||typeof e=="string"),new X(e)}}class kg{constructor(e,t,s){this.h=e,this.l=t,this.m=s,this.type="FirstParty",this.user=X.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Dg{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new kg(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ng{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(P(typeof t.token=="string"),this.T=t.token,new Rg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Og(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class _u{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Og(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function N(n,e){return n<e?-1:n>e?1:0}function wt(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
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
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new m(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new m(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new m(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new m(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new V(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new V(0,0))}static max(){return new b(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class en{constructor(e,t,s){t===void 0?t=0:t>e.length&&_(),s===void 0?s=e.length-t:s>e.length-t&&_(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return en.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof en?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends en{construct(e,t,s){return new O(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new m(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new O(t)}static emptyPath(){return new O([])}}const Pg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends en{construct(e,t,s){return new Z(e,t,s)}static isValidIdentifier(e){return Pg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new m(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new m(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new m(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new m(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Z(t)}static emptyPath(){return new Z([])}}/**
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
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(O.fromString(e))}static fromName(e){return new w(O.fromString(e).popFirst(5))}static empty(){return new w(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&O.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new O(e.slice()))}}function Lg(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=b.fromTimestamp(s===1e9?new V(t+1,0):new V(t,s));return new $e(i,w.empty(),e)}function Mg(n){return new $e(n.readTime,n.key,-1)}class $e{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new $e(b.min(),w.empty(),-1)}static max(){return new $e(b.max(),w.empty(),-1)}}function xg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=w.comparator(n.documentKey,e.documentKey),t!==0?t:N(n.largestBatchId,e.largestBatchId))}/**
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
 */const Ug="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Tn(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==Ug)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,s)=>{t(e)})}static reject(e){return new p((t,s)=>{s(e)})}static waitFor(e){return new p((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=p.resolve(!1);for(const s of e)t=t.next(i=>i?p.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new p((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(e,t){return new p((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function Sn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Pr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>t.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Pr.ct=-1;function Vs(n){return n==null}function ds(n){return n===0&&1/n==-1/0}function Vg(n){return typeof n=="number"&&Number.isInteger(n)&&!ds(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qo(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ot(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Tu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class B{constructor(e,t){this.comparator=e,this.root=t||K.EMPTY}insert(e,t){return new B(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,K.BLACK,null,null))}remove(e){return new B(this.comparator,this.root.remove(e,this.comparator).copy(null,null,K.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fn(this.root,e,this.comparator,!0)}}class Fn{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class K{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??K.RED,this.left=i??K.EMPTY,this.right=r??K.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new K(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return K.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const e=this.left.check();if(e!==this.right.check())throw _();return e+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(n,e,t,s,i){return this}insert(n,e,t){return new K(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ${constructor(e){this.comparator=e,this.data=new B(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yo(this.data.getIterator())}getIteratorFrom(e){return new Yo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof $)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $(this.comparator);return t.data=e,t}}class Yo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ce{constructor(e){this.fields=e,e.sort(Z.comparator)}static empty(){return new ce([])}unionWith(e){let t=new $(Z.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ce(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wt(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class $g extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $g("Invalid base64 string: "+i):i}}(e);return new ie(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const Bg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Be(n){if(P(!!n),typeof n=="string"){let e=0;const t=Bg.exec(n);if(P(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:U(n.seconds),nanos:U(n.nanos)}}function U(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Et(n){return typeof n=="string"?ie.fromBase64String(n):ie.fromUint8Array(n)}/**
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
 */function Su(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function bu(n){const e=n.mapValue.fields.__previous_value__;return Su(e)?bu(e):e}function tn(n){const e=Be(n.mapValue.fields.__local_write_time__.timestampValue);return new V(e.seconds,e.nanos)}/**
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
 */class qg{constructor(e,t,s,i,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class nn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function it(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Su(n)?4:jg(n)?9007199254740991:10:_()}function ve(n,e){if(n===e)return!0;const t=it(n);if(t!==it(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return tn(n).isEqual(tn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Be(s.timestampValue),o=Be(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Et(s.bytesValue).isEqual(Et(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return U(s.geoPointValue.latitude)===U(i.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return U(s.integerValue)===U(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=U(s.doubleValue),o=U(i.doubleValue);return r===o?ds(r)===ds(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return wt(n.arrayValue.values||[],e.arrayValue.values||[],ve);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Qo(r)!==Qo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ve(r[a],o[a])))return!1;return!0}(n,e);default:return _()}}function sn(n,e){return(n.values||[]).find(t=>ve(t,e))!==void 0}function It(n,e){if(n===e)return 0;const t=it(n),s=it(e);if(t!==s)return N(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return N(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=U(i.integerValue||i.doubleValue),a=U(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Xo(n.timestampValue,e.timestampValue);case 4:return Xo(tn(n),tn(e));case 5:return N(n.stringValue,e.stringValue);case 6:return function(i,r){const o=Et(i),a=Et(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=N(U(i.latitude),U(r.latitude));return o!==0?o:N(U(i.longitude),U(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=It(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Vn.mapValue&&r===Vn.mapValue)return 0;if(i===Vn.mapValue)return 1;if(r===Vn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=N(a[l],u[l]);if(h!==0)return h;const d=It(o[a[l]],c[u[l]]);if(d!==0)return d}return N(a.length,u.length)}(n.mapValue,e.mapValue);default:throw _()}}function Xo(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return N(n,e);const t=Be(n),s=Be(e),i=N(t.seconds,s.seconds);return i!==0?i:N(t.nanos,s.nanos)}function _t(n){return Fi(n)}function Fi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=Be(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Et(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,w.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Fi(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Fi(s.fields[a])}`;return r+"}"}(n.mapValue):_();var e,t}function Jo(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Vi(n){return!!n&&"integerValue"in n}function Lr(n){return!!n&&"arrayValue"in n}function Zo(n){return!!n&&"nullValue"in n}function ea(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kn(n){return!!n&&"mapValue"in n}function Bt(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ot(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Bt(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Bt(n.arrayValue.values[t]);return e}return Object.assign({},n)}function jg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class oe{constructor(e){this.value=e}static empty(){return new oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Kn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bt(t)}setAll(e){let t=Z.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=Bt(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Kn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ve(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Kn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){ot(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new oe(Bt(this.value))}}function Cu(n){const e=[];return ot(n.fields,(t,s)=>{const i=new Z([t]);if(Kn(s)){const r=Cu(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new ce(e)}/**
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
 */class J{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new J(e,0,b.min(),b.min(),b.min(),oe.empty(),0)}static newFoundDocument(e,t,s,i){return new J(e,1,t,b.min(),s,i,0)}static newNoDocument(e,t){return new J(e,2,t,b.min(),b.min(),oe.empty(),0)}static newUnknownDocument(e,t){return new J(e,3,t,b.min(),b.min(),oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof J&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new J(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fs{constructor(e,t){this.position=e,this.inclusive=t}}function ta(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=w.comparator(w.fromName(o.referenceValue),t.key):s=It(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function na(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ve(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class qt{constructor(e,t="asc"){this.field=e,this.dir=t}}function zg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Au{}class F extends Au{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Kg(e,t,s):t==="array-contains"?new Qg(e,s):t==="in"?new Yg(e,s):t==="not-in"?new Xg(e,s):t==="array-contains-any"?new Jg(e,s):new F(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Gg(e,s):new Wg(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(It(t,this.value)):t!==null&&it(this.value)===it(t)&&this.matchesComparison(It(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class le extends Au{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new le(e,t)}matches(e){return ku(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ku(n){return n.op==="and"}function Du(n){return Hg(n)&&ku(n)}function Hg(n){for(const e of n.filters)if(e instanceof le)return!1;return!0}function $i(n){if(n instanceof F)return n.field.canonicalString()+n.op.toString()+_t(n.value);if(Du(n))return n.filters.map(e=>$i(e)).join(",");{const e=n.filters.map(t=>$i(t)).join(",");return`${n.op}(${e})`}}function Ru(n,e){return n instanceof F?function(t,s){return s instanceof F&&t.op===s.op&&t.field.isEqual(s.field)&&ve(t.value,s.value)}(n,e):n instanceof le?function(t,s){return s instanceof le&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((i,r,o)=>i&&Ru(r,s.filters[o]),!0):!1}(n,e):void _()}function Nu(n){return n instanceof F?function(e){return`${e.field.canonicalString()} ${e.op} ${_t(e.value)}`}(n):n instanceof le?function(e){return e.op.toString()+" {"+e.getFilters().map(Nu).join(" ,")+"}"}(n):"Filter"}class Kg extends F{constructor(e,t,s){super(e,t,s),this.key=w.fromName(s.referenceValue)}matches(e){const t=w.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gg extends F{constructor(e,t){super(e,"in",t),this.keys=Ou("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Wg extends F{constructor(e,t){super(e,"not-in",t),this.keys=Ou("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ou(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>w.fromName(s.referenceValue))}class Qg extends F{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Lr(t)&&sn(t.arrayValue,this.value)}}class Yg extends F{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&sn(this.value.arrayValue,t)}}class Xg extends F{constructor(e,t){super(e,"not-in",t)}matches(e){if(sn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!sn(this.value.arrayValue,t)}}class Jg extends F{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Lr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>sn(this.value.arrayValue,s))}}/**
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
 */class Zg{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function sa(n,e=null,t=[],s=[],i=null,r=null,o=null){return new Zg(n,e,t,s,i,r,o)}function Mr(n){const e=C(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>$i(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Vs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>_t(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>_t(s)).join(",")),e.ft=t}return e.ft}function xr(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!zg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ru(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!na(n.startAt,e.startAt)&&na(n.endAt,e.endAt)}function Bi(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class bn{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function em(n,e,t,s,i,r,o,a){return new bn(n,e,t,s,i,r,o,a)}function $s(n){return new bn(n)}function ia(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pu(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Ur(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Lu(n){return n.collectionGroup!==null}function pt(n){const e=C(n);if(e.dt===null){e.dt=[];const t=Ur(e),s=Pu(e);if(t!==null&&s===null)t.isKeyField()||e.dt.push(new qt(t)),e.dt.push(new qt(Z.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new qt(Z.keyField(),r))}}}return e.dt}function Ce(n){const e=C(n);if(!e.wt)if(e.limitType==="F")e.wt=sa(e.path,e.collectionGroup,pt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of pt(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new qt(r.field,o))}const s=e.endAt?new fs(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new fs(e.startAt.position,e.startAt.inclusive):null;e.wt=sa(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e.wt}function qi(n,e){e.getFirstInequalityField(),Ur(n);const t=n.filters.concat([e]);return new bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ji(n,e,t){return new bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bs(n,e){return xr(Ce(n),Ce(e))&&n.limitType===e.limitType}function Mu(n){return`${Mr(Ce(n))}|lt:${n.limitType}`}function zi(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>Nu(s)).join(", ")}]`),Vs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>_t(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>_t(s)).join(",")),`Target(${t})`}(Ce(n))}; limitType=${n.limitType})`}function qs(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):w.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of pt(t))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=ta(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,pt(t),s)||t.endAt&&!function(i,r,o){const a=ta(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,pt(t),s))}(n,e)}function tm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xu(n){return(e,t)=>{let s=!1;for(const i of pt(n)){const r=nm(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function nm(n,e,t){const s=n.field.isKeyField()?w.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?It(a,c):_()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return _()}}/**
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
 */class Nt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ot(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Tu(this.inner)}size(){return this.innerSize}}/**
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
 */const sm=new B(w.comparator);function Ae(){return sm}const Uu=new B(w.comparator);function Ut(...n){let e=Uu;for(const t of n)e=e.insert(t.key,t);return e}function Fu(n){let e=Uu;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ye(){return jt()}function Vu(){return jt()}function jt(){return new Nt(n=>n.toString(),(n,e)=>n.isEqual(e))}const im=new B(w.comparator),rm=new $(w.comparator);function k(...n){let e=rm;for(const t of n)e=e.add(t);return e}const om=new $(N);function $u(){return om}/**
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
 */function Bu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ds(e)?"-0":e}}function qu(n){return{integerValue:""+n}}function am(n,e){return Vg(e)?qu(e):Bu(n,e)}/**
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
 */class js{constructor(){this._=void 0}}function cm(n,e,t){return n instanceof ps?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof rn?zu(n,e):n instanceof on?Hu(n,e):function(s,i){const r=ju(s,i),o=ra(r)+ra(s._t);return Vi(r)&&Vi(s._t)?qu(o):Bu(s.serializer,o)}(n,e)}function um(n,e,t){return n instanceof rn?zu(n,e):n instanceof on?Hu(n,e):t}function ju(n,e){return n instanceof gs?Vi(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class ps extends js{}class rn extends js{constructor(e){super(),this.elements=e}}function zu(n,e){const t=Ku(e);for(const s of n.elements)t.some(i=>ve(i,s))||t.push(s);return{arrayValue:{values:t}}}class on extends js{constructor(e){super(),this.elements=e}}function Hu(n,e){let t=Ku(e);for(const s of n.elements)t=t.filter(i=>!ve(i,s));return{arrayValue:{values:t}}}class gs extends js{constructor(e,t){super(),this.serializer=e,this._t=t}}function ra(n){return U(n.integerValue||n.doubleValue)}function Ku(n){return Lr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function lm(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof rn&&s instanceof rn||t instanceof on&&s instanceof on?wt(t.elements,s.elements,ve):t instanceof gs&&s instanceof gs?ve(t._t,s._t):t instanceof ps&&s instanceof ps}(n.transform,e.transform)}class hm{constructor(e,t){this.version=e,this.transformResults=t}}class pe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pe}static exists(e){return new pe(void 0,e)}static updateTime(e){return new pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gn(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zs{}function Gu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qu(n.key,pe.none()):new Cn(n.key,n.data,pe.none());{const t=n.data,s=oe.empty();let i=new $(Z.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new He(n.key,s,new ce(i.toArray()),pe.none())}}function dm(n,e,t){n instanceof Cn?function(s,i,r){const o=s.value.clone(),a=aa(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof He?function(s,i,r){if(!Gn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=aa(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Wu(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function zt(n,e,t,s){return n instanceof Cn?function(i,r,o,a){if(!Gn(i.precondition,r))return o;const c=i.value.clone(),u=ca(i.fieldTransforms,a,r);return c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof He?function(i,r,o,a){if(!Gn(i.precondition,r))return o;const c=ca(i.fieldTransforms,a,r),u=r.data;return u.setAll(Wu(i)),u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,s):function(i,r,o){return Gn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function fm(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=ju(s.transform,i||null);r!=null&&(t===null&&(t=oe.empty()),t.set(s.field,r))}return t||null}function oa(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&wt(t,s,(i,r)=>lm(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Cn extends zs{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class He extends zs{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Wu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function aa(n,e,t){const s=new Map;P(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,um(o,a,t[i]))}return s}function ca(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,cm(r,o,e))}return s}class Qu extends zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pm extends zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gm{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&dm(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=zt(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=zt(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Vu();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=Gu(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(b.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),k())}isEqual(e){return this.batchId===e.batchId&&wt(this.mutations,e.mutations,(t,s)=>oa(t,s))&&wt(this.baseMutations,e.baseMutations,(t,s)=>oa(t,s))}}class Fr{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){P(e.mutations.length===s.length);let i=im;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Fr(e,t,s,i)}}/**
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
 */class mm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ym{constructor(e){this.count=e}}/**
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
 */var x,D;function vm(n){switch(n){default:return _();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Yu(n){if(n===void 0)return be("GRPC error has no .code"),f.UNKNOWN;switch(n){case x.OK:return f.OK;case x.CANCELLED:return f.CANCELLED;case x.UNKNOWN:return f.UNKNOWN;case x.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case x.INTERNAL:return f.INTERNAL;case x.UNAVAILABLE:return f.UNAVAILABLE;case x.UNAUTHENTICATED:return f.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case x.NOT_FOUND:return f.NOT_FOUND;case x.ALREADY_EXISTS:return f.ALREADY_EXISTS;case x.PERMISSION_DENIED:return f.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case x.ABORTED:return f.ABORTED;case x.OUT_OF_RANGE:return f.OUT_OF_RANGE;case x.UNIMPLEMENTED:return f.UNIMPLEMENTED;case x.DATA_LOSS:return f.DATA_LOSS;default:return _()}}(D=x||(x={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Vr{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return $n}static getOrCreateInstance(){return $n===null&&($n=new Vr),$n}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let $n=null;/**
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
 */class Hs{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,An.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Hs(b.min(),i,$u(),Ae(),k())}}class An{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new An(s,t,k(),k(),k())}}/**
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
 */class Wn{constructor(e,t,s,i){this.It=e,this.removedTargetIds=t,this.key=s,this.Tt=i}}class Xu{constructor(e,t){this.targetId=e,this.Et=t}}class Ju{constructor(e,t,s=ie.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class ua{constructor(){this.At=0,this.Rt=ha(),this.vt=ie.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=k(),t=k(),s=k();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:_()}}),new An(this.vt,this.bt,e,t,s)}xt(){this.Pt=!1,this.Rt=ha()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class wm{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Ae(),this.qt=la(),this.Ut=new $(N)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{const s=this.jt(t);switch(e.state){case 0:this.Wt(t)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),s.Dt(e.resumeToken));break;default:_()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((s,i)=>{this.Wt(i)&&t(i)})}Jt(e){var t;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(Bi(o))if(i===0){const a=new w(o.path);this.Qt(s,a,J.newNoDocument(a,b.min()))}else P(i===1);else{const a=this.Zt(s);a!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(t=Vr.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Bi(a.target)){const c=new w(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,J.newNoDocument(c,e))}r.St&&(t.set(o,r.Ct()),r.xt())}});let s=k();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Hs(e,t,this.Ut,this.Lt,s);return this.Lt=Ae(),this.qt=la(),this.Ut=new $(N),i}Gt(e,t){if(!this.Wt(e))return;const s=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,s),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),s&&(this.Lt=this.Lt.insert(t,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new ua,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new $(N),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=this.Yt(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new ua),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function la(){return new B(w.comparator)}function ha(){return new B(w.comparator)}/**
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
 */const Em=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Im=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_m=(()=>({and:"AND",or:"OR"}))();class Tm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ms(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sm(n,e){return ms(n,e.toTimestamp())}function ge(n){return P(!!n),b.fromTimestamp(function(e){const t=Be(e);return new V(t.seconds,t.nanos)}(n))}function $r(n,e){return function(t){return new O(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function el(n){const e=O.fromString(n);return P(il(e)),e}function Hi(n,e){return $r(n.databaseId,e.path)}function mi(n,e){const t=el(e);if(t.get(1)!==n.databaseId.projectId)throw new m(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new m(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new w(tl(t))}function Ki(n,e){return $r(n.databaseId,e)}function bm(n){const e=el(n);return e.length===4?O.emptyPath():tl(e)}function Gi(n){return new O(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function tl(n){return P(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function da(n,e,t){return{name:Hi(n,e),fields:t.value.mapValue.fields}}function Cm(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:_()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(P(u===void 0||typeof u=="string"),ie.fromBase64String(u||"")):(P(u===void 0||u instanceof Uint8Array),ie.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Yu(c.code);return new m(u,c.message||"")}(o);t=new Ju(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=mi(n,s.document.name),r=ge(s.document.updateTime),o=s.document.createTime?ge(s.document.createTime):b.min(),a=new oe({mapValue:{fields:s.document.fields}}),c=J.newFoundDocument(i,r,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];t=new Wn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=mi(n,s.document),r=s.readTime?ge(s.readTime):b.min(),o=J.newNoDocument(i,r),a=s.removedTargetIds||[];t=new Wn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=mi(n,s.document),r=s.removedTargetIds||[];t=new Wn([],r,i,null)}else{if(!("filter"in e))return _();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new ym(i),o=s.targetId;t=new Xu(o,r)}}return t}function Am(n,e){let t;if(e instanceof Cn)t={update:da(n,e.key,e.value)};else if(e instanceof Qu)t={delete:Hi(n,e.key)};else if(e instanceof He)t={update:da(n,e.key,e.data),updateMask:xm(e.fieldMask)};else{if(!(e instanceof pm))return _();t={verify:Hi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ps)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof rn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof on)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gs)return{fieldPath:r.field.canonicalString(),increment:o._t};throw _()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_()}(n,e.precondition)),t}function km(n,e){return n&&n.length>0?(P(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?ge(s.updateTime):ge(i);return r.isEqual(b.min())&&(r=ge(i)),new hm(r,s.transformResults||[])}(t,e))):[]}function Dm(n,e){return{documents:[Ki(n,e.path)]}}function Rm(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Ki(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ki(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return sl(le.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ut(l.field),direction:Pm(l.dir)}}(u))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(c,u){return c.useProto3Json||Vs(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Nm(n){let e=bm(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){P(s===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];t.where&&(r=function(l){const h=nl(l);return h instanceof le&&Du(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new qt(lt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Vs(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new fs(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new fs(d,h)}(t.endAt)),em(e,i,o,r,a,"F",c,u)}function Om(n,e){const t=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return _()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function nl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=lt(e.unaryFilter.field);return F.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=lt(e.unaryFilter.field);return F.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=lt(e.unaryFilter.field);return F.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=lt(e.unaryFilter.field);return F.create(r,"!=",{nullValue:"NULL_VALUE"});default:return _()}}(n):n.fieldFilter!==void 0?function(e){return F.create(lt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return le.create(e.compositeFilter.filters.map(t=>nl(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return _()}}(e.compositeFilter.op))}(n):_()}function Pm(n){return Em[n]}function Lm(n){return Im[n]}function Mm(n){return _m[n]}function ut(n){return{fieldPath:n.canonicalString()}}function lt(n){return Z.fromServerFormat(n.fieldPath)}function sl(n){return n instanceof F?function(e){if(e.op==="=="){if(ea(e.value))return{unaryFilter:{field:ut(e.field),op:"IS_NAN"}};if(Zo(e.value))return{unaryFilter:{field:ut(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ea(e.value))return{unaryFilter:{field:ut(e.field),op:"IS_NOT_NAN"}};if(Zo(e.value))return{unaryFilter:{field:ut(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ut(e.field),op:Lm(e.op),value:e.value}}}(n):n instanceof le?function(e){const t=e.getFilters().map(s=>sl(s));return t.length===1?t[0]:{compositeFilter:{op:Mm(e.op),filters:t}}}(n):_()}function xm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function il(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ze{constructor(e,t,s,i,r=b.min(),o=b.min(),a=ie.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ze(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ze(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ze(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Um{constructor(e){this.se=e}}function Fm(n){const e=Nm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ji(e,e.limit,"L"):e}/**
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
 */class Vm{constructor(){this.He=new $m}addToCollectionParentIndex(e,t){return this.He.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve($e.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve($e.min())}updateCollectionGroup(e,t,s){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class $m{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new $(O.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new $(O.comparator)).toArray()}}/**
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
 */class Tt{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Tt(0)}static bn(){return new Tt(-1)}}/**
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
 */class Bm{constructor(){this.changes=new Nt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,J.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?p.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class qm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class jm{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&zt(s.mutation,i,ce.empty(),V.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,k()).next(()=>s))}getLocalViewOfDocuments(e,t,s=k()){const i=Ye();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=Ut();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=Ye();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,k()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=Ae();const o=jt(),a=jt();return t.forEach((c,u)=>{const l=s.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof He)?r=r.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),zt(l.mutation,u,l.mutation.getFieldMask(),V.now())):o.set(u.key,ce.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new qm(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=jt();let i=new B((o,a)=>o-a),r=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=s.get(c)||ce.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(i.get(a.batchId)||k()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Vu();l.forEach(d=>{if(!r.has(d)){const g=Gu(t.get(d),s.get(d));g!==null&&h.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return w.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):p.resolve(Ye());let a=-1,c=r;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,k())).next(l=>({batchId:a,changes:Fu(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new w(t)).next(s=>{let i=Ut();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=Ut();return this.indexManager.getCollectionParents(e,i).next(o=>p.forEach(o,a=>{const c=function(u,l){return new bn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i))).next(r=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,J.newInvalidDocument(u)))});let o=Ut();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&zt(u.mutation,c,ce.empty(),V.now()),qs(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class zm{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return p.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:ge(s.createTime)}),p.resolve()}getNamedQuery(e,t){return p.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(s){return{name:s.name,query:Fm(s.bundledQuery),readTime:ge(s.readTime)}}(t)),p.resolve()}}/**
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
 */class Hm{constructor(){this.overlays=new B(w.comparator),this.ts=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ye();return p.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.re(e,t,r)}),p.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),p.resolve()}getOverlaysForCollection(e,t,s){const i=Ye(),r=t.length+1,o=new w(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new B((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let l=r.get(u.largestBatchId);l===null&&(l=Ye(),r=r.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ye(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return p.resolve(a)}re(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new mm(t,s));let r=this.ts.get(t);r===void 0&&(r=k(),this.ts.set(t,r)),this.ts.set(t,r.add(s.key))}}/**
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
 */class Br{constructor(){this.es=new $(j.ns),this.ss=new $(j.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const s=new j(e,t);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.us(new j(e,t))}cs(e,t){e.forEach(s=>this.removeReference(s,t))}hs(e){const t=new w(new O([])),s=new j(t,e),i=new j(t,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new w(new O([])),s=new j(t,e),i=new j(t,e+1);let r=k();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new j(e,0),s=this.es.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class j{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return w.comparator(e.key,t.key)||N(e.ds,t.ds)}static rs(e,t){return N(e.ds,t.ds)||w.comparator(e.key,t.key)}}/**
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
 */class Km{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new $(j.ns)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gm(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new j(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ys(s),r=i<0?0:i;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new j(t,0),i=new j(t,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const a=this.gs(o.ds);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new $(N);return t.forEach(i=>{const r=new j(i,0),o=new j(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],a=>{s=s.add(a.ds)})}),p.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;w.isDocumentKey(r)||(r=r.child(""));const o=new j(new w(r),0);let a=new $(N);return this._s.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ds)),!0)},o),p.resolve(this.ps(a))}ps(e){const t=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){P(this.Is(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return p.forEach(t.mutations,i=>{const r=new j(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,t){const s=new j(t,0),i=this._s.firstAfterOrEqual(s);return p.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Is(e,t){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Gm{constructor(e){this.Ts=e,this.docs=new B(w.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return p.resolve(s?s.document.mutableCopy():J.newInvalidDocument(t))}getEntries(e,t){let s=Ae();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():J.newInvalidDocument(i))}),p.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Ae();const o=t.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xg(Mg(l),s)<=0||(i.has(l.key)||qs(t,l))&&(r=r.insert(l.key,l.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(e,t,s,i){_()}Es(e,t){return p.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Wm(this)}getSize(e){return p.resolve(this.size)}}class Wm extends Bm{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),p.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
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
 */class Qm{constructor(e){this.persistence=e,this.As=new Nt(t=>Mr(t),xr),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Br,this.targetCount=0,this.bs=Tt.vn()}forEachTarget(e,t){return this.As.forEach((s,i)=>t(i)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Rs&&(this.Rs=t),p.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Tt(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.Sn(t),p.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const s=this.As.get(t)||null;return p.resolve(s)}addMatchingKeys(e,t,s){return this.vs.os(t,s),p.resolve()}removeMatchingKeys(e,t,s){this.vs.cs(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),p.resolve()}getMatchingKeysForTargetId(e,t){const s=this.vs.fs(t);return p.resolve(s)}containsKey(e,t){return p.resolve(this.vs.containsKey(t))}}/**
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
 */class Ym{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Pr(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Qm(this),this.indexManager=new Vm,this.remoteDocumentCache=function(s){return new Gm(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new Um(t),this.xs=new zm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Hm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Ps[e.toKey()];return s||(s=new Km(t,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,s){v("MemoryPersistence","Starting transaction:",e);const i=new Xm(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,t){return p.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,t)))}}class Xm extends Fg{constructor(e){super(),this.currentSequenceNumber=e}}class qr{constructor(e){this.persistence=e,this.$s=new Br,this.Ms=null}static Fs(e){return new qr(e)}get Bs(){if(this.Ms)return this.Ms;throw _()}addReference(e,t,s){return this.$s.addReference(s,t),this.Bs.delete(s.toString()),p.resolve()}removeReference(e,t,s){return this.$s.removeReference(s,t),this.Bs.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),p.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Bs,s=>{const i=w.fromPath(s);return this.Ls(e,i).next(r=>{r||t.removeEntry(i,b.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(s=>{s?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return p.or([()=>p.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
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
 */class jr{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Vi=s,this.Si=i}static Di(e,t){let s=k(),i=k();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new jr(e,t.fromCache,s,i)}}/**
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
 */class Jm{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,s,i){return this.Ni(e,t).next(r=>r||this.ki(e,t,i,s)).next(r=>r||this.Oi(e,t))}Ni(e,t){if(ia(t))return p.resolve(null);let s=Ce(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ji(t,null,"F"),s=Ce(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=k(...r);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.$i(t,a);return this.Mi(t,u,o,c.readTime)?this.Ni(e,ji(t,null,"F")):this.Fi(e,u,t,c)}))})))}ki(e,t,s,i){return ia(t)||i.isEqual(b.min())?this.Oi(e,t):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(t,r);return this.Mi(t,o,s,i)?this.Oi(e,t):(Wo()<=R.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zi(t)),this.Fi(e,o,t,Lg(i,-1)))})}$i(e,t){let s=new $(xu(e));return t.forEach((i,r)=>{qs(e,r)&&(s=s.add(r))}),s}Mi(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,t){return Wo()<=R.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",zi(t)),this.xi.getDocumentsMatchingQuery(e,t,$e.min())}Fi(e,t,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class Zm{constructor(e,t,s,i){this.persistence=e,this.Bi=t,this.serializer=i,this.Li=new B(N),this.qi=new Nt(r=>Mr(r),xr),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jm(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}function ey(n,e,t,s){return new Zm(n,e,t,s)}async function rl(n,e){const t=C(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.Gi(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=k();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of r){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(s,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function ty(n,e){const t=C(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(E=>{const I=c.docVersions.get(g);P(I!==null),E.version.compareTo(I)<0&&(l.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=k();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function ol(n){const e=C(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function ny(n,e){const t=C(n),s=e.snapshotVersion;let i=t.Li;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Ki.newChangeBuffer({trackRemovals:!0});i=t.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.Ds.removeMatchingKeys(r,l.removedDocuments,h).next(()=>t.Ds.addMatchingKeys(r,l.addedDocuments,h)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(ie.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),i=i.insert(h,g),function(E,I,A){return E.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,g,l)&&a.push(t.Ds.updateTargetData(r,g))});let c=Ae(),u=k();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(sy(r,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!s.isEqual(b.min())){const l=t.Ds.getLastRemoteSnapshotVersion(r).next(h=>t.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(t.Li=i,r))}function sy(n,e,t){let s=k(),i=k();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=Ae();return t.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(b.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:i}})}function iy(n,e){const t=C(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ry(n,e){const t=C(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Ds.getTargetData(s,e).next(r=>r?(i=r,p.resolve(i)):t.Ds.allocateTargetId(s).next(o=>(i=new Ze(e,o,0,s.currentSequenceNumber),t.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Li=t.Li.insert(s.targetId,s),t.qi.set(e,s.targetId)),s})}async function Wi(n,e,t){const s=C(n),i=s.Li.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function fa(n,e,t){const s=C(n);let i=b.min(),r=k();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=C(a),h=l.qi.get(u);return h!==void 0?p.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(s,o,Ce(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,t?i:b.min(),t?r:k())).next(a=>(oy(s,tm(e),a),{documents:a,Wi:r})))}function oy(n,e,t){let s=n.Ui.get(e)||b.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Ui.set(e,s)}class pa{constructor(){this.activeTargetIds=$u()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ay{constructor(){this.Br=new pa,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,s){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new pa,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cy{qr(e){}shutdown(){}}/**
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
 */class ga{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bn=null;function yi(){return Bn===null?Bn=268435456+Math.round(2147483648*Math.random()):Bn++,"0x"+Bn.toString(16)}/**
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
 */const uy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ly{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Y="WebChannelConnection";class hy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,s,i,r){const o=yi(),a=this.ao(e,t);v("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,i,r),this.lo(e,a,c,s).then(u=>(v("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw hs("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}fo(e,t,s,i,r,o){return this.co(e,t,s,i,r)}ho(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,t){const s=uy[e];return`${this.ro}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,s,i){const r=yi();return new Promise((o,a)=>{const c=new Sg;c.setWithCredentials(!0),c.listenOnce(Ig.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case gi.NO_ERROR:const l=c.getResponseJson();v(Y,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(l)),o(l);break;case gi.TIMEOUT:v(Y,`RPC '${e}' ${r} timed out`),a(new m(f.DEADLINE_EXCEEDED,"Request time out"));break;case gi.HTTP_ERROR:const h=c.getStatus();if(v(Y,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const E=function(I){const A=I.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(A)>=0?A:f.UNKNOWN}(g.status);a(new m(E,g.message))}else a(new m(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new m(f.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{v(Y,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);v(Y,`RPC '${e}' ${r} sending request:`,i),c.send(t,"POST",u,s,15)})}wo(e,t,s){const i=yi(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wg(),a=Eg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Tg({})),this.ho(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const u=r.join("");v(Y,`Creating RPC '${e}' stream ${i}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const g=new ly({Wr:I=>{d?v(Y,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(h||(v(Y,`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),v(Y,`RPC '${e}' stream ${i} sending:`,I),l.send(I))},Hr:()=>l.close()}),E=(I,A,q)=>{I.listen(A,Q=>{try{q(Q)}catch(ae){setTimeout(()=>{throw ae},0)}})};return E(l,Un.EventType.OPEN,()=>{d||v(Y,`RPC '${e}' stream ${i} transport opened.`)}),E(l,Un.EventType.CLOSE,()=>{d||(d=!0,v(Y,`RPC '${e}' stream ${i} transport closed`),g.so())}),E(l,Un.EventType.ERROR,I=>{d||(d=!0,hs(Y,`RPC '${e}' stream ${i} transport errored:`,I),g.so(new m(f.UNAVAILABLE,"The operation could not be completed")))}),E(l,Un.EventType.MESSAGE,I=>{var A;if(!d){const q=I.data[0];P(!!q);const Q=q,ae=Q.error||((A=Q[0])===null||A===void 0?void 0:A.error);if(ae){v(Y,`RPC '${e}' stream ${i} received error:`,ae);const De=ae.status;let Re=function(Nn){const On=x[Nn];if(On!==void 0)return Yu(On)}(De),ct=ae.message;Re===void 0&&(Re=f.INTERNAL,ct="Unknown error status: "+De+" with message "+ae.message),d=!0,g.so(new m(Re,ct)),l.close()}else v(Y,`RPC '${e}' stream ${i} received:`,q),g.io(q)}}),E(a,_g.STAT_EVENT,I=>{I.stat===Ko.PROXY?v(Y,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===Ko.NOPROXY&&v(Y,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function vi(){return typeof document<"u"?document:null}/**
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
 */function Ks(n){return new Tm(n,!0)}/**
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
 */class al{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=t,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,t-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class cl{constructor(e,t,s,i,r,o,a,c){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new al(e,t)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(be(t.toString()),be("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===t&&this.Ko(s,i)},s=>{e(()=>{const i=new m(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,t){const s=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dy extends cl{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=Cm(this.serializer,e),s=function(i){if(!("targetChange"in i))return b.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?b.min():r.readTime?ge(r.readTime):b.min()}(e);return this.listener.zo(t,s)}jo(e){const t={};t.database=Gi(this.serializer),t.addTarget=function(i,r){let o;const a=r.target;return o=Bi(a)?{documents:Dm(i,a)}:{query:Rm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Zu(i,r.resumeToken):r.snapshotVersion.compareTo(b.min())>0&&(o.readTime=ms(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=Om(this.serializer,e);s&&(t.labels=s),this.Fo(t)}Wo(e){const t={};t.database=Gi(this.serializer),t.removeTarget=e,this.Fo(t)}}class fy extends cl{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(P(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=km(e.writeResults,e.commitTime),s=ge(e.commitTime);return this.listener.Zo(s,t)}return P(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Gi(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Am(this.serializer,s))};this.Fo(t)}}/**
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
 */class py extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new m(f.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new m(f.UNKNOWN,i.toString())})}fo(e,t,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new m(f.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class gy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(be(t),this.ru=!1):v("OnlineStateTracker",t)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class my{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{at(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=C(a);c.du.add(4),await kn(c),c.mu.set("Unknown"),c.du.delete(4),await Gs(c)}(this))})}),this.mu=new gy(s,i)}}async function Gs(n){if(at(n))for(const e of n.wu)await e(!0)}async function kn(n){for(const e of n.wu)await e(!1)}function ul(n,e){const t=C(n);t.fu.has(e.targetId)||(t.fu.set(e.targetId,e),Kr(t)?Hr(t):Ot(t).No()&&zr(t,e))}function ll(n,e){const t=C(n),s=Ot(t);t.fu.delete(e),s.No()&&hl(t,e),t.fu.size===0&&(s.No()?s.$o():at(t)&&t.mu.set("Unknown"))}function zr(n,e){n.gu.Ot(e.targetId),Ot(n).jo(e)}function hl(n,e){n.gu.Ot(e),Ot(n).Wo(e)}function Hr(n){n.gu=new wm({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.fu.get(e)||null}),Ot(n).start(),n.mu.ou()}function Kr(n){return at(n)&&!Ot(n).xo()&&n.fu.size>0}function at(n){return C(n).du.size===0}function dl(n){n.gu=void 0}async function yy(n){n.fu.forEach((e,t)=>{zr(n,e)})}async function vy(n,e){dl(n),Kr(n)?(n.mu.au(e),Hr(n)):n.mu.set("Unknown")}async function wy(n,e,t){if(n.mu.set("Online"),e instanceof Ju&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(n,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ys(n,s)}else if(e instanceof Wn?n.gu.Kt(e):e instanceof Xu?n.gu.Jt(e):n.gu.zt(e),!t.isEqual(b.min()))try{const s=await ol(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(c);u&&i.fu.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(ie.EMPTY_BYTE_STRING,c.snapshotVersion)),hl(i,a);const u=new Ze(c.target,a,1,c.sequenceNumber);zr(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await ys(n,s)}}async function ys(n,e,t){if(!Sn(e))throw e;n.du.add(1),await kn(n),n.mu.set("Offline"),t||(t=()=>ol(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.du.delete(1),await Gs(n)})}function fl(n,e){return e().catch(t=>ys(n,t,e))}async function Ws(n){const e=C(n),t=qe(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;Ey(e);)try{const i=await iy(e.localStore,s);if(i===null){e.lu.length===0&&t.$o();break}s=i.batchId,Iy(e,i)}catch(i){await ys(e,i)}pl(e)&&gl(e)}function Ey(n){return at(n)&&n.lu.length<10}function Iy(n,e){n.lu.push(e);const t=qe(n);t.No()&&t.Jo&&t.Yo(e.mutations)}function pl(n){return at(n)&&!qe(n).xo()&&n.lu.length>0}function gl(n){qe(n).start()}async function _y(n){qe(n).tu()}async function Ty(n){const e=qe(n);for(const t of n.lu)e.Yo(t.mutations)}async function Sy(n,e,t){const s=n.lu.shift(),i=Fr.from(s,e,t);await fl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ws(n)}async function by(n,e){e&&qe(n).Jo&&await async function(t,s){if(i=s.code,vm(i)&&i!==f.ABORTED){const r=t.lu.shift();qe(t).Oo(),await fl(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ws(t)}var i}(n,e),pl(n)&&gl(n)}async function ma(n,e){const t=C(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=at(t);t.du.add(3),await kn(t),s&&t.mu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.du.delete(3),await Gs(t)}async function Cy(n,e){const t=C(n);e?(t.du.delete(2),await Gs(t)):e||(t.du.add(2),await kn(t),t.mu.set("Unknown"))}function Ot(n){return n.yu||(n.yu=function(e,t,s){const i=C(e);return i.nu(),new dy(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Jr:yy.bind(null,n),Zr:vy.bind(null,n),zo:wy.bind(null,n)}),n.wu.push(async e=>{e?(n.yu.Oo(),Kr(n)?Hr(n):n.mu.set("Unknown")):(await n.yu.stop(),dl(n))})),n.yu}function qe(n){return n.pu||(n.pu=function(e,t,s){const i=C(e);return i.nu(),new fy(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Jr:_y.bind(null,n),Zr:by.bind(null,n),Xo:Ty.bind(null,n),Zo:Sy.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Oo(),await Ws(n)):(await n.pu.stop(),n.lu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.lu.length} pending writes`),n.lu=[]))})),n.pu}/**
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
 */class Gr{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new Gr(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new m(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wr(n,e){if(be("AsyncQueue",`${e}: ${n}`),Sn(n))return new m(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class gt{constructor(e){this.comparator=e?(t,s)=>e(t,s)||w.comparator(t.key,s.key):(t,s)=>w.comparator(t.key,s.key),this.keyedMap=Ut(),this.sortedSet=new B(this.comparator)}static emptySet(e){return new gt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new gt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class ya{constructor(){this.Iu=new B(w.comparator)}track(e){const t=e.doc.key,s=this.Iu.get(t);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(t,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(t):e.type===1&&s.type===2?this.Iu=this.Iu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):_():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal((t,s)=>{e.push(s)}),e}}class St{constructor(e,t,s,i,r,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new St(e,t,gt.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Ay{constructor(){this.Eu=void 0,this.listeners=[]}}class ky{constructor(){this.queries=new Nt(e=>Mu(e),Bs),this.onlineState="Unknown",this.Au=new Set}}async function ml(n,e){const t=C(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new Ay),i)try{r.Eu=await t.onListen(s)}catch(o){const a=Wr(o,`Initialization of query '${zi(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.Ru(t.onlineState),r.Eu&&e.vu(r.Eu)&&Qr(t)}async function yl(n,e){const t=C(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function Dy(n,e){const t=C(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.vu(i)&&(s=!0);o.Eu=i}}s&&Qr(t)}function Ry(n,e,t){const s=C(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function Qr(n){n.Au.forEach(e=>{e.next()})}class vl{constructor(e,t,s){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new St(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Cu(e){e=St.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class wl{constructor(e){this.key=e}}class El{constructor(e){this.key=e}}class Ny{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=k(),this.mutatedKeys=k(),this.Ku=xu(e),this.Gu=new gt(this.Ku)}get Qu(){return this.Lu}zu(e,t){const s=t?t.ju:new ya,i=t?t.Gu:this.Gu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),g=qs(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;d&&g?d.data.isEqual(g.data)?E!==I&&(s.track({type:3,doc:g}),A=!0):this.Wu(d,g)||(s.track({type:2,doc:g}),A=!0,(c&&this.Ku(g,c)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),A=!0):d&&!g&&(s.track({type:1,doc:d}),A=!0,(c||u)&&(a=!0)),A&&(g?(o=o.add(g),r=I?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:r}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((u,l)=>function(h,d){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _()}};return g(h)-g(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=t?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new St(this.query,e.Gu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new ya,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(t=>this.Lu=this.Lu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Lu=this.Lu.delete(t)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=k(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const t=[];return e.forEach(s=>{this.Uu.has(s)||t.push(new El(s))}),this.Uu.forEach(s=>{e.has(s)||t.push(new wl(s))}),t}Xu(e){this.Lu=e.Wi,this.Uu=k();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return St.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Oy{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Py{constructor(e){this.key=e,this.ec=!1}}class Ly{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Nt(a=>Mu(a),Bs),this.ic=new Map,this.rc=new Set,this.oc=new B(w.comparator),this.uc=new Map,this.cc=new Br,this.ac={},this.hc=new Map,this.lc=Tt.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function My(n,e){const t=Hy(n);let s,i;const r=t.sc.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await ry(t.localStore,Ce(e));t.isPrimaryClient&&ul(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await xy(t,e,s,a==="current",o.resumeToken)}return i}async function xy(n,e,t,s,i){n.dc=(h,d,g)=>async function(E,I,A,q){let Q=I.view.zu(A);Q.Mi&&(Q=await fa(E.localStore,I.query,!1).then(({documents:Re})=>I.view.zu(Re,Q)));const ae=q&&q.targetChanges.get(I.targetId),De=I.view.applyChanges(Q,E.isPrimaryClient,ae);return wa(E,I.targetId,De.Yu),De.snapshot}(n,h,d,g);const r=await fa(n.localStore,e,!0),o=new Ny(e,r.Wi),a=o.zu(r.documents),c=An.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);wa(n,t,u.Yu);const l=new Oy(e,t,o);return n.sc.set(e,l),n.ic.has(t)?n.ic.get(t).push(e):n.ic.set(t,[e]),u.snapshot}async function Uy(n,e){const t=C(n),s=t.sc.get(e),i=t.ic.get(s.targetId);if(i.length>1)return t.ic.set(s.targetId,i.filter(r=>!Bs(r,e))),void t.sc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Wi(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),ll(t.remoteStore,s.targetId),Qi(t,s.targetId)}).catch(Tn)):(Qi(t,s.targetId),await Wi(t.localStore,s.targetId,!0))}async function Fy(n,e,t){const s=Ky(n);try{const i=await function(r,o){const a=C(r),c=V.now(),u=o.reduce((d,g)=>d.add(g.key),k());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Ae(),E=k();return a.Ki.getEntries(d,u).next(I=>{g=I,g.forEach((A,q)=>{q.isValidDocument()||(E=E.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(I=>{l=I;const A=[];for(const q of o){const Q=fm(q,l.get(q.key).overlayedDocument);Q!=null&&A.push(new He(q.key,Q,Cu(Q.value.mapValue),pe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,A,o)}).next(I=>{h=I;const A=I.applyToLocalDocumentSet(l,E);return a.documentOverlayCache.saveOverlays(d,I.batchId,A)})}).then(()=>({batchId:h.batchId,changes:Fu(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.ac[r.currentUser.toKey()];c||(c=new B(N)),c=c.insert(o,a),r.ac[r.currentUser.toKey()]=c}(s,i.batchId,t),await Dn(s,i.changes),await Ws(s.remoteStore)}catch(i){const r=Wr(i,"Failed to persist write");t.reject(r)}}async function Il(n,e){const t=C(n);try{const s=await ny(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.uc.get(r);o&&(P(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?P(o.ec):i.removedDocuments.size>0&&(P(o.ec),o.ec=!1))}),await Dn(t,s,e)}catch(s){await Tn(s)}}function va(n,e,t){const s=C(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=C(r);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&Qr(a)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Vy(n,e,t){const s=C(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new B(w.comparator);o=o.insert(r,J.newNoDocument(r,b.min()));const a=k().add(r),c=new Hs(b.min(),new Map,new $(N),o,a);await Il(s,c),s.oc=s.oc.remove(r),s.uc.delete(e),Yr(s)}else await Wi(s.localStore,e,!1).then(()=>Qi(s,e,t)).catch(Tn)}async function $y(n,e){const t=C(n),s=e.batch.batchId;try{const i=await ty(t.localStore,e);Tl(t,s,null),_l(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Dn(t,i)}catch(i){await Tn(i)}}async function By(n,e,t){const s=C(n);try{const i=await function(r,o){const a=C(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(P(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Tl(s,e,t),_l(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Dn(s,i)}catch(i){await Tn(i)}}function _l(n,e){(n.hc.get(e)||[]).forEach(t=>{t.resolve()}),n.hc.delete(e)}function Tl(n,e,t){const s=C(n);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function Qi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.ic.get(e))n.sc.delete(s),t&&n.nc.wc(s,t);n.ic.delete(e),n.isPrimaryClient&&n.cc.hs(e).forEach(s=>{n.cc.containsKey(s)||Sl(n,s)})}function Sl(n,e){n.rc.delete(e.path.canonicalString());const t=n.oc.get(e);t!==null&&(ll(n.remoteStore,t),n.oc=n.oc.remove(e),n.uc.delete(t),Yr(n))}function wa(n,e,t){for(const s of t)s instanceof wl?(n.cc.addReference(s.key,e),qy(n,s)):s instanceof El?(v("SyncEngine","Document no longer in limbo: "+s.key),n.cc.removeReference(s.key,e),n.cc.containsKey(s.key)||Sl(n,s.key)):_()}function qy(n,e){const t=e.key,s=t.path.canonicalString();n.oc.get(t)||n.rc.has(s)||(v("SyncEngine","New document in limbo: "+t),n.rc.add(s),Yr(n))}function Yr(n){for(;n.rc.size>0&&n.oc.size<n.maxConcurrentLimboResolutions;){const e=n.rc.values().next().value;n.rc.delete(e);const t=new w(O.fromString(e)),s=n.lc.next();n.uc.set(s,new Py(t)),n.oc=n.oc.insert(t,s),ul(n.remoteStore,new Ze(Ce($s(t.path)),s,2,Pr.ct))}}async function Dn(n,e,t){const s=C(n),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,t).then(u=>{if((u||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=jr.Di(c.targetId,u);r.push(l)}}))}),await Promise.all(o),s.nc.zo(i),await async function(a,c){const u=C(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Sn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),g=d.snapshotVersion,E=d.withLastLimboFreeSnapshotVersion(g);u.Li=u.Li.insert(h,E)}}}(s.localStore,r))}async function jy(n,e){const t=C(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await rl(t.localStore,e);t.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new m(f.CANCELLED,r))})}),i.hc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Dn(t,s.Qi)}}function zy(n,e){const t=C(n),s=t.uc.get(e);if(s&&s.ec)return k().add(s.key);{let i=k();const r=t.ic.get(e);if(!r)return i;for(const o of r){const a=t.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function Hy(n){const e=C(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Il.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vy.bind(null,e),e.nc.zo=Dy.bind(null,e.eventManager),e.nc.wc=Ry.bind(null,e.eventManager),e}function Ky(n){const e=C(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$y.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=By.bind(null,e),e}class Ea{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ks(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return ey(this.persistence,new Jm,e.initialUser,this.serializer)}createPersistence(e){return new Ym(qr.Fs,this.serializer)}createSharedClientState(e){return new ay}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gy{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>va(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jy.bind(null,this.syncEngine),await Cy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ky}createDatastore(e){const t=Ks(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new hy(i));var i;return function(r,o,a,c){return new py(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>va(this.syncEngine,a,0),o=ga.D()?new ga:new cy,new my(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,c,u){const l=new Ly(s,i,r,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=C(e);v("RemoteStore","RemoteStore shutting down."),t.du.add(5),await kn(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class bl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):be("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Wy{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=X.UNAUTHENTICATED,this.clientId=_u.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new m(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Wr(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function wi(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await rl(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ia(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Yy(n);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>ma(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>ma(e.remoteStore,r)),n._onlineComponents=e}function Qy(n){return n.name==="FirebaseError"?n.code===f.FAILED_PRECONDITION||n.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Yy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await wi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Qy(t))throw t;hs("Error using user provided cache. Falling back to memory cache: "+t),await wi(n,new Ea)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await wi(n,new Ea);return n._offlineComponents}async function Cl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await Ia(n,n._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await Ia(n,new Gy))),n._onlineComponents}function Xy(n){return Cl(n).then(e=>e.syncEngine)}async function Yi(n){const e=await Cl(n),t=e.eventManager;return t.onListen=My.bind(null,e.syncEngine),t.onUnlisten=Uy.bind(null,e.syncEngine),t}function Jy(n,e,t={}){const s=new Fe;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new bl({next:h=>{r.enqueueAndForget(()=>yl(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new m(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new m(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new vl($s(o.path),u,{includeMetadataChanges:!0,xu:!0});return ml(i,l)}(await Yi(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */const _a=new Map;/**
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
 */function Al(n,e,t){if(!t)throw new m(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Zy(n,e,t,s){if(e===!0&&s===!0)throw new m(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ta(n){if(!w.isDocumentKey(n))throw new m(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sa(n){if(w.isDocumentKey(n))throw new m(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_()}function me(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new m(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qs(n);throw new m(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class ba{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new m(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new m(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Zy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ys{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ba({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new m(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new m(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ba(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new bg;switch(t.type){case"firstParty":return new Dg(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new m(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=_a.get(e);t&&(v("ComponentProvider","Removing Datastore"),_a.delete(e),t.terminate())}(this),Promise.resolve()}}function ev(n,e,t,s={}){var i;const r=(n=me(n,Ys))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&hs("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=X.MOCK_USER;else{o=th(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new m(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new X(c)}n._authCredentials=new Cg(new Iu(o,a))}}/**
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
 */class ne{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ve(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ne(this.firestore,e,this._key)}}class Pt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Pt(this.firestore,e,this._query)}}class Ve extends Pt{constructor(e,t,s){super(e,t,$s(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ne(this.firestore,null,new w(e))}withConverter(e){return new Ve(this.firestore,e,this._path)}}function tv(n,e,...t){if(n=z(n),Al("collection","path",e),n instanceof Ys){const s=O.fromString(e,...t);return Sa(s),new Ve(n,null,s)}{if(!(n instanceof ne||n instanceof Ve))throw new m(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(O.fromString(e,...t));return Sa(s),new Ve(n.firestore,null,s)}}function Xs(n,e,...t){if(n=z(n),arguments.length===1&&(e=_u.A()),Al("doc","path",e),n instanceof Ys){const s=O.fromString(e,...t);return Ta(s),new ne(n,null,new w(s))}{if(!(n instanceof ne||n instanceof Ve))throw new m(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(O.fromString(e,...t));return Ta(s),new ne(n.firestore,n instanceof Ve?n.converter:null,new w(s))}}/**
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
 */class nv{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new al(this,"async_queue_retry"),this.qc=()=>{const t=vi();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const e=vi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=vi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const t=new Fe;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Sn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const t=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw be("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=t,t}enqueueAfterDelay(e,t,s){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const i=Gr.createAndSchedule(this,e,t,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&_()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function Ca(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class bt extends Ys{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new nv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kl(this),this._firestoreClient.terminate()}}function sv(n,e){const t=typeof n=="object"?n:nr(),s=typeof n=="string"?n:e||"(default)",i=tr(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Jl("firestore");r&&ev(i,...r)}return i}function Xr(n){return n._firestoreClient||kl(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function kl(n){var e,t,s;const i=n._freezeSettings(),r=function(o,a,c,u){return new qg(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Wy(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ct(ie.fromBase64String(e))}catch(t){throw new m(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ct(ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Js{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new m(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Jr{constructor(e){this._methodName=e}}/**
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
 */class Zr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new m(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new m(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
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
 */const iv=/^__.*__$/;class rv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new He(e,this.data,this.fieldMask,t,this.fieldTransforms):new Cn(e,this.data,t,this.fieldTransforms)}}class Dl{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new He(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Rl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class eo{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new eo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return vs(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Rl(this.Yc)&&iv.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class ov{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ks(e)}ua(e,t,s,i=!1){return new eo({Yc:e,methodName:t,oa:s,path:Z.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function to(n){const e=n._freezeSettings(),t=Ks(n._databaseId);return new ov(n._databaseId,!!e.ignoreUndefinedProperties,t)}function av(n,e,t,s,i,r={}){const o=n.ua(r.merge||r.mergeFields?2:0,e,t,i);no("Data must be an object, but it was:",o,s);const a=Nl(s,o);let c,u;if(r.merge)c=new ce(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const d=Xi(e,h,t);if(!o.contains(d))throw new m(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Pl(l,d)||l.push(d)}c=new ce(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new rv(new oe(a),c,u)}class Zs extends Jr{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zs}}function cv(n,e,t,s){const i=n.ua(1,e,t);no("Data must be an object, but it was:",i,s);const r=[],o=oe.empty();ot(s,(c,u)=>{const l=so(e,c,t);u=z(u);const h=i.na(l);if(u instanceof Zs)r.push(l);else{const d=Rn(u,h);d!=null&&(r.push(l),o.set(l,d))}});const a=new ce(r);return new Dl(o,a,i.fieldTransforms)}function uv(n,e,t,s,i,r){const o=n.ua(1,e,t),a=[Xi(e,s,t)],c=[i];if(r.length%2!=0)throw new m(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Xi(e,r[d])),c.push(r[d+1]);const u=[],l=oe.empty();for(let d=a.length-1;d>=0;--d)if(!Pl(u,a[d])){const g=a[d];let E=c[d];E=z(E);const I=o.na(g);if(E instanceof Zs)u.push(g);else{const A=Rn(E,I);A!=null&&(u.push(g),l.set(g,A))}}const h=new ce(u);return new Dl(l,h,o.fieldTransforms)}function lv(n,e,t,s=!1){return Rn(t,n.ua(s?4:3,e))}function Rn(n,e){if(Ol(n=z(n)))return no("Unsupported field value:",e,n),Nl(n,e);if(n instanceof Jr)return function(t,s){if(!Rl(s.Yc))throw s.ia(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=Rn(o,s.sa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=z(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return am(s.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=V.fromDate(t);return{timestampValue:ms(s.serializer,i)}}if(t instanceof V){const i=new V(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ms(s.serializer,i)}}if(t instanceof Zr)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ct)return{bytesValue:Zu(s.serializer,t._byteString)};if(t instanceof ne){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$r(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ia(`Unsupported field value: ${Qs(t)}`)}(n,e)}function Nl(n,e){const t={};return Tu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ot(n,(s,i)=>{const r=Rn(i,e.Xc(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function Ol(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof V||n instanceof Zr||n instanceof Ct||n instanceof ne||n instanceof Jr)}function no(n,e,t){if(!Ol(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Qs(t);throw s==="an object"?e.ia(n+" a custom object"):e.ia(n+" "+s)}}function Xi(n,e,t){if((e=z(e))instanceof Js)return e._internalPath;if(typeof e=="string")return so(n,e);throw vs("Field path arguments must be of type string or ",n,!1,void 0,t)}const hv=new RegExp("[~\\*/\\[\\]]");function so(n,e,t){if(e.search(hv)>=0)throw vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Js(...e.split("."))._internalPath}catch{throw vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vs(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new m(f.INVALID_ARGUMENT,a+n+c)}function Pl(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Ll{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ml("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dv extends Ll{data(){return super.data()}}function Ml(n,e){return typeof e=="string"?so(n,e):e instanceof Js?e._internalPath:e._delegate._internalPath}/**
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
 */function fv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new m(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class io{}class pv extends io{}function Av(n,e,...t){let s=[];e instanceof io&&s.push(e),s=s.concat(t),function(i){const r=i.filter(a=>a instanceof oo).length,o=i.filter(a=>a instanceof ro).length;if(r>1||r>0&&o>0)throw new m(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class ro extends pv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ro(e,t,s)}_apply(e){const t=this._parse(e);return xl(e._query,t),new Pt(e.firestore,e.converter,qi(e._query,t))}_parse(e){const t=to(e.firestore);return function(i,r,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new m(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ka(l,u);const d=[];for(const g of l)d.push(Aa(a,i,g));h={arrayValue:{values:d}}}else h=Aa(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ka(l,u),h=lv(o,r,l,u==="in"||u==="not-in");return F.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class oo extends io{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new oo(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:le.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)xl(r,a),r=qi(r,a)}(e._query,t),new Pt(e.firestore,e.converter,qi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Aa(n,e,t){if(typeof(t=z(t))=="string"){if(t==="")throw new m(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lu(e)&&t.indexOf("/")!==-1)throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(O.fromString(t));if(!w.isDocumentKey(s))throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Jo(n,new w(s))}if(t instanceof ne)return Jo(n,t._key);throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qs(t)}.`)}function ka(n,e){if(!Array.isArray(n)||n.length===0)throw new m(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xl(n,e){if(e.isInequality()){const s=Ur(n),i=e.field;if(s!==null&&!s.isEqual(i))throw new m(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Pu(n);r!==null&&gv(n,i,r)}const t=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new m(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new m(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function gv(n,e,t){if(!t.isEqual(e))throw new m(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class mv{convertValue(e,t="none"){switch(it(e)){case 0:return null;case 1:return e.booleanValue;case 2:return U(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Et(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw _()}}convertObject(e,t){const s={};return ot(e.fields,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new Zr(U(e.latitude),U(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=bu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(tn(e));default:return null}}convertTimestamp(e){const t=Be(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=O.fromString(e);P(il(s));const i=new nn(s.get(1),s.get(3)),r=new w(s.popFirst(5));return i.isEqual(t)||be(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function yv(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
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
 */class Ft{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ul extends Ll{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ml("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Qn extends Ul{data(e={}){return super.data(e)}}class vv{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ft(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Qn(this._firestore,this._userDataWriter,s.key,s,new Ft(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new m(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Qn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ft(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Qn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ft(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:wv(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function wv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _()}}/**
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
 */function Fl(n){n=me(n,ne);const e=me(n.firestore,bt);return Jy(Xr(e),n._key).then(t=>ql(e,n,t))}class Vl extends mv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ne(this.firestore,null,t)}}function $l(n,e,t){n=me(n,ne);const s=me(n.firestore,bt),i=yv(n.converter,e,t);return Bl(s,[av(to(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,pe.none())])}function Ev(n,e,t,...s){n=me(n,ne);const i=me(n.firestore,bt),r=to(i);let o;return o=typeof(e=z(e))=="string"||e instanceof Js?uv(r,"updateDoc",n._key,e,t,s):cv(r,"updateDoc",n._key,e),Bl(i,[o.toMutation(n._key,pe.exists(!0))])}function kv(n,...e){var t,s,i;n=z(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ca(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Ca(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof ne)u=me(n.firestore,bt),l=$s(n._key.path),c={next:h=>{e[o]&&e[o](ql(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=me(n,Pt);u=me(h.firestore,bt),l=h._query;const d=new Vl(u);c={next:g=>{e[o]&&e[o](new vv(u,d,h,g))},error:e[o+1],complete:e[o+2]},fv(n._query)}return function(h,d,g,E){const I=new bl(E),A=new vl(d,I,g);return h.asyncQueue.enqueueAndForget(async()=>ml(await Yi(h),A)),()=>{I.yc(),h.asyncQueue.enqueueAndForget(async()=>yl(await Yi(h),A))}}(Xr(u),l,a,c)}function Bl(n,e){return function(t,s){const i=new Fe;return t.asyncQueue.enqueueAndForget(async()=>Fy(await Xy(t),s,i)),i.promise}(Xr(n),e)}function ql(n,e,t){const s=t.docs.get(e._key),i=new Vl(n);return new Ul(n,i,e._key,s,new Ft(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){Rt=t})(At),mt(new et("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new bt(new Ag(t.getProvider("auth-internal")),new Ng(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new m(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nn(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ue(Go,"3.10.1",n),Ue(Go,"3.10.1","esm2017")})();const Iv={apiKey:"AIzaSyDz8xNgf18f7ELoZ8pOdbioDmUL55ptQqk",appId:{}.VITE_FIREBASE_ID,authDomain:"moto-rent-c20f3.firebaseapp.com",messagingSenderId:"699483084590",projectId:"moto-rent-c20f3",storageBucket:"moto-rent-c20f3.appspot.com"};let ws;dd().length?ws=nr():ws=xa(Iv);const jl=sv(ws),Dv=Ep(ws),Rv=new we,ao=n=>tv(jl,n),Nv=async n=>{const{uid:e,displayName:t,photoURL:s,email:i}=n,r=Xs(jl,"users",e);if(!(await Fl(r)).exists())try{await $l(r,{uid:e,displayName:t,photoURL:s,email:i})}catch(a){Es.error(a.mesage)}},Ov=async({col:n,data:e})=>{const t=gh(),s={...e,id:t},i=ao(n),r=Xs(i,t);try{await $l(r,s)}catch(o){Es.error(o.mesage)}},Pv=async({col:n,key:e,data:t})=>{const s=ao(n),i=Xs(s,e);try{await Ev(i,t)}catch(r){Es.error(r.mesage)}},Lv=async({col:n,key:e})=>{try{const t=ao(n),s=Xs(t,e),i=await Fl(s);if(i.exists())return i.data()}catch(t){Es.error(t.mesage)}};export{Dv as a,Sv as b,ao as c,Av as d,kv as e,Nv as f,Lv as g,Ov as h,Tv as o,Rv as p,bv as s,Pv as u};
