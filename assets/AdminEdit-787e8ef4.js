import{d as n,r as o,b as d,a as f,j as i}from"./index-1a4242b0.js";import{I as l}from"./ItemForm-c4534b26.js";import{g as p}from"./dbMethods-0082b0e3.js";import"./ItemCmp-45e9771b.js";import"./index-e27d04c8.js";const h=()=>{const{id:t}=n(),[s,a]=o.useState(),m=d(),r=async c=>{const e=await p({col:"motos",key:c});e?a(e):m("/")};return o.useEffect(()=>{t&&r(t)},[t]),f("div",{children:[i("h4",{className:"section-title",children:"Edit Moto"}),s&&i(l,{itemToEdit:s})]})};export{h as default};
