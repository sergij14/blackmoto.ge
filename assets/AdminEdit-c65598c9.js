import{d as n,r as o,b as d,a as f,j as i}from"./index-d7ed42ad.js";import{I as l}from"./ItemForm-ef91541e.js";import{g as p}from"./dbMethods-ae916eca.js";import"./ItemCmp-d9211cb9.js";import"./index-e087825f.js";const h=()=>{const{id:t}=n(),[s,a]=o.useState(),m=d(),r=async c=>{const e=await p({col:"motos",key:c});e?a(e):m("/")};return o.useEffect(()=>{t&&r(t)},[t]),f("div",{children:[i("h4",{className:"section-title",children:"Edit Moto"}),s&&i(l,{itemToEdit:s})]})};export{h as default};
