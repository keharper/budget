import*as e from"@dropins/elsie/event-bus.js";import*as t from"@dropins/elsie/fetch-graphql.js";import*as r from"@dropins/elsie/preact-compat.js";import*as n from"@dropins/elsie/preact-hooks.js";import*as o from"@dropins/elsie/preact-jsx-runtime.js";import*as s from"@dropins/elsie/preact.js";export const id=70;export const ids=[70];export const modules={4560:(e,t,r)=>{r.d(t,{s:()=>h});var n=r(3516),o=r(5437),s=r(9276),a=r(6765),u=r(4114),i=r(1857),l=r.n(i),c=r(7188);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,s,a,u=[],i=!0,l=!1;try{if(s=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=s.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}a.events.enableLogger(!0);var m={default:r(7770)},d=function(e){var t,r=e.children,n=f((0,o.useState)(),2),i=n[0],p=n[1],d=null===(t=u.v.getConfig())||void 0===t?void 0:t.langDefinitions;(0,o.useEffect)((function(){var e=a.events.on("locale",(function(e){e!==i&&p(e)}),{eager:!0});return function(){null==e||e.off()}}),[i]);var h=l()(m,null!=d?d:{});return(0,c.jsx)(s.J,{lang:i,langDefinitions:h,children:r})},h=new n.H((0,c.jsx)(d,{}))},6765:(t,r,n)=>{t.exports=(e=>{var t={};return n.d(t,e),t})({events:()=>e.events})},9699:(e,r,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({FetchGraphQL:()=>t.FetchGraphQL})},4853:(e,t,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({Children:()=>r.Children,createContext:()=>r.createContext,useContext:()=>r.useContext,useEffect:()=>r.useEffect,useMemo:()=>r.useMemo,useState:()=>r.useState})},5437:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({useCallback:()=>n.useCallback,useContext:()=>n.useContext,useDebugValue:()=>n.useDebugValue,useEffect:()=>n.useEffect,useId:()=>n.useId,useImperativeHandle:()=>n.useImperativeHandle,useLayoutEffect:()=>n.useLayoutEffect,useMemo:()=>n.useMemo,useReducer:()=>n.useReducer,useRef:()=>n.useRef,useState:()=>n.useState})},4142:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({Fragment:()=>o.Fragment,jsx:()=>o.jsx,jsxs:()=>o.jsxs})},3474:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({Component:()=>s.Component,Fragment:()=>s.Fragment,cloneElement:()=>s.cloneElement,createContext:()=>s.createContext,createElement:()=>s.createElement,createRef:()=>s.createRef,h:()=>s.h,hydrate:()=>s.hydrate,options:()=>s.options,render:()=>s.render,toChildArray:()=>s.toChildArray})},7770:e=>{e.exports=JSON.parse('{"Cart":{"Cart":{"heading":"Shopping Cart"},"EmptyCart":{"heading":"Your cart is empty","cta":"Continue Shopping"}}}')}};import a from"./runtime.js";import*as u from"./371.js";a.C(u);import*as i from"./161.js";a.C(i);import*as l from"./316.js";a.C(l);import*as c from"./render.js";a.C(c);var f,p=(f=4560,a(a.s=f)).s;export{p as render};