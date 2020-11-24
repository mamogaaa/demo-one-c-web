import{H as t,I as n,J as e}from"./client.ffa949d5.js";async function r(t){let n=await t("/config.json");return await n.json()}function o(t){const n=t-1;return n*n*n+1}function a(t){return--t*t*t*t*t+1}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function s(t,{delay:n=0,duration:r=400,easing:o=e}){const a=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>"opacity: "+t*a}}const[i,c]=function(e){var{fallback:r}=e,a=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}(e,["fallback"]);const s=new Map,i=new Map;function c(e,s,i){return(c,l)=>(e.set(l.key,{rect:c.getBoundingClientRect()}),()=>{if(s.has(l.key)){const{rect:e}=s.get(l.key);return s.delete(l.key),function(e,r,s){const{delay:i=0,duration:c=(t=>30*Math.sqrt(t)),easing:l=o}=n(n({},a),s),f=r.getBoundingClientRect(),u=e.left-f.left,p=e.top-f.top,y=e.width/f.width,d=e.height/f.height,g=Math.sqrt(u*u+p*p),m=getComputedStyle(r),h="none"===m.transform?"":m.transform,b=+m.opacity;return{delay:i,duration:t(c)?c(g):c,easing:l,css:(t,n)=>`\n\t\t\t\topacity: ${t*b};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${h} translate(${n*u}px,${n*p}px) scale(${t+(1-t)*y}, ${t+(1-t)*d});\n\t\t\t`}}(e,c,l)}return e.delete(l.key),r&&r(c,l,i)})}return[c(i,s,!1),c(s,i,!0)]}({duration:t=>300,fallback(t,n){const e=getComputedStyle(t),r="none"===e.transform?"":e.transform;return{duration:300,easing:a,css:t=>`\n                transform: ${r} scale(${t});\n                opacity: ${t}\n            `}}});export{s as f,r as g,c as r,i as s};
