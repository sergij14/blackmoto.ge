import{c as n,r as o,b as d,j as f,a}from"./index-f0d3ecd2.js";import{I as l}from"./ItemForm-f337592c.js";import{g as E}from"./dbMethods-6dcdb9e2.js";import"./ItemCmp-46975a7e.js";const x=()=>{const{id:t}=n(),[s,i]=o.useState(),m=d(),r=async c=>{const e=await E({col:"motos",key:c});e?i(e):m("/")};return o.useEffect(()=>{t&&r(t)},[t]),f("div",{children:[a("h4",{className:"section-title",children:"Edit Moto"}),s&&a(l,{itemToEdit:s})]})};export{x as default};