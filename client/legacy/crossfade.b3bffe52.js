import{L as t,M as n,O as e,P as r,Q as a,q as o}from"./client.c4b25164.js";function c(t){return i.apply(this,arguments)}function i(){return(i=t(n.mark((function t(e){var r;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/config.json");case 2:return r=t.sent,t.next=5,r.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){var n=t-1;return n*n*n+1}function s(t){return--t*t*t*t*t+1}
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
***************************************************************************** */function f(t,n){var e=n.delay,r=void 0===e?0:e,o=n.duration,c=void 0===o?400:o,i=n.easing,u=void 0===i?a:i,s=+getComputedStyle(t).opacity;return{delay:r,duration:c,easing:u,css:function(t){return"opacity: ".concat(t*s)}}}var l=o(function(t){var n=t.fallback,a=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(e[r[a]]=t[r[a]])}return e}(t,["fallback"]),o=new Map,c=new Map;function i(t,o,c){return function(i,s){return t.set(s.key,{rect:i.getBoundingClientRect()}),function(){if(o.has(s.key)){var f=o.get(s.key).rect;return o.delete(s.key),function(t,n,o){var c=r(r({},a),o),i=c.delay,s=void 0===i?0:i,f=c.duration,l=void 0===f?function(t){return 30*Math.sqrt(t)}:f,p=c.easing,d=void 0===p?u:p,y=n.getBoundingClientRect(),g=t.left-y.left,v=t.top-y.top,m=t.width/y.width,h=t.height/y.height,b=Math.sqrt(g*g+v*v),O=getComputedStyle(n),k="none"===O.transform?"":O.transform,w=+O.opacity;return{delay:s,duration:e(l)?l(b):l,easing:d,css:function(t,n){return"\n\t\t\t\topacity: ".concat(t*w,";\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ").concat(k," translate(").concat(n*g,"px,").concat(n*v,"px) scale(").concat(t+(1-t)*m,", ").concat(t+(1-t)*h,");\n\t\t\t")}}}(f,i,s)}return t.delete(s.key),n&&n(i,s,c)}}}return[i(c,o,!1),i(o,c,!0)]}({duration:function(t){return 300},fallback:function(t,n){var e=getComputedStyle(t),r="none"===e.transform?"":e.transform;return{duration:300,easing:s,css:function(t){return"\n                transform: ".concat(r," scale(").concat(t,");\n                opacity: ").concat(t,"\n            ")}}}}),2),p=l[0],d=l[1];export{f,c as g,d as r,p as s};
