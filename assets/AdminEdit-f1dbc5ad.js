import{d as n,r as o,b as d,a as f,j as i}from"./index-c72ca1d2.js";import{I as l}from"./ItemForm-70ceb4a2.js";import{g as p}from"./dbMethods-abd3c688.js";import"./ItemCmp-81f17a74.js";import"./index-b37c192a.js";const h=()=>{const{id:t}=n(),[s,a]=o.useState(),m=d(),r=async c=>{const e=await p({col:"motos",key:c});e?a(e):m("/")};return o.useEffect(()=>{t&&r(t)},[t]),f("div",{children:[i("h4",{className:"section-title",children:"Edit Moto"}),s&&i(l,{itemToEdit:s})]})};export{h as default};
