import{d as n,r as o,b as d,j as f,a as i}from"./index-b768fadc.js";import{I as l}from"./ItemForm-ecf0e5b5.js";import{g as p}from"./dbMethods-16776419.js";import"./ItemCmp-acf7080f.js";import"./index-8966a840.js";const h=()=>{const{id:t}=n(),[s,a]=o.useState(),m=d(),r=async c=>{const e=await p({col:"motos",key:c});e?a(e):m("/")};return o.useEffect(()=>{t&&r(t)},[t]),f("div",{children:[i("h4",{className:"section-title",children:"Edit Moto"}),s&&i(l,{itemToEdit:s})]})};export{h as default};
