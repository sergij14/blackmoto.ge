import{d as n,r as o,b as d,a as f,j as i}from"./index-9a99e228.js";import{I as l}from"./ItemForm-02bf1a11.js";import{g as p}from"./dbMethods-b576826f.js";import"./ItemCmp-54cdc19b.js";import"./index-4ffaf993.js";const h=()=>{const{id:t}=n(),[s,a]=o.useState(),m=d(),r=async c=>{const e=await p({col:"motos",key:c});e?a(e):m("/")};return o.useEffect(()=>{t&&r(t)},[t]),f("div",{children:[i("h4",{className:"section-title",children:"Edit Moto"}),s&&i(l,{itemToEdit:s})]})};export{h as default};
