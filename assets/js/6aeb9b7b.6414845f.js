"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5680],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(r),f=a,m=h["".concat(c,".").concat(f)]||h[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},50028:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={slug:"2022-03-16-enarx-0-3-0",title:"Enarx 0.3.0 (Chittorgarh Fort)",authors:["mike"],tags:["Mike's Blog","Release"]},c=void 0,l={permalink:"/resources/2022-03-16-enarx-0-3-0",source:"@site/resources/2022-03-16-enarx-0-3-0.md",title:"Enarx 0.3.0 (Chittorgarh Fort)",description:"A fair amount of the development for this release has been in functionality which won\u2019t be visible to most users, including a major rewrite of the TEE/host interface component that we call sallyport. You will, however, notice that TLS support has been added to network connections from applications within the Keep. This is transparent to the application, so \u201cWhere does the certificate come from?\u201d I hear you ask. The answer to that is from the attestation service that\u2019s also part of this release. We\u2019ll be talking more about that in further releases and articles, but key to the approach we\u2019re taking is that interactions with the service (we call it the \u201cSteward\u201d) is pretty much transparent to users and applications.",date:"2022-03-16T00:00:00.000Z",formattedDate:"March 16, 2022",tags:[{label:"Mike's Blog",permalink:"/resources/tags/mikes-blog"},{label:"Release",permalink:"/resources/tags/release"}],truncated:!1,authors:[{name:"Mike Bursell",title:"Co-founder of Enarx",url:"https://github.com/MikeCamel",imageURL:"https://github.com/MikeCamel.png",key:"mike"}],frontMatter:{slug:"2022-03-16-enarx-0-3-0",title:"Enarx 0.3.0 (Chittorgarh Fort)",authors:["mike"],tags:["Mike's Blog","Release"]},nextItem:{title:"Profian and the WebAssembly ecosystem",permalink:"/resources/2022-03-16-profian-wasm"}},u={authorsImageUrls:[void 0]},p=[],h={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A fair amount of the development for this release has been in functionality which won\u2019t be visible to most users, including a major rewrite of the TEE/host interface component that we call sallyport. You will, however, notice that TLS support has been added to network connections from applications within the Keep. This is transparent to the application, so \u201cWhere does the certificate come from?\u201d I hear you ask. The answer to that is from the attestation service that\u2019s also part of this release. We\u2019ll be talking more about that in further releases and articles, but key to the approach we\u2019re taking is that interactions with the service (we call it the \u201cSteward\u201d) is pretty much transparent to users and applications."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source"),": Alice, Eve and Bob \u2013 a security blog"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Link"),": ",(0,o.kt)("a",{parentName:"p",href:"https://aliceevebob.com/2022/03/16/enarx-0-3-0-chittorgarh-fort/"},"https://aliceevebob.com/2022/03/16/enarx-0-3-0-chittorgarh-fort/")))}f.isMDXComponent=!0}}]);