(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{146:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(146)),l={id:"internals",title:"Internal Getters"},c={unversionedId:"tools/internals",id:"tools/internals",isDocsHomePage:!1,title:"Internal Getters",description:"\u5bf9\u8868\u683c\u8fdb\u884c\u5c01\u88c5\u65f6\uff0c\u53ef\u80fd\u9700\u8981\u7528\u5230\u4e00\u4e9b\u8868\u683c\u5185\u90e8\u7684\u6570\u636e\u5904\u7406\u65b9\u6cd5\uff0c\u4f7f\u5f97\u4e0a\u5c42\u5c01\u88c5\u7684\u529f\u80fd\u548c\u8868\u683c\u5185\u90e8\u4fdd\u6301\u4e00\u81f4\u3002",source:"@site/docs/tools/internals.mdx",slug:"/tools/internals",permalink:"/docs/tools/internals",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/tools/internals.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u5df2\u8fc7\u65f6",permalink:"/docs/transforms/"},next:{title:"proto",permalink:"/docs/tools/proto"}},i=[],s={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5bf9\u8868\u683c\u8fdb\u884c\u5c01\u88c5\u65f6\uff0c\u53ef\u80fd\u9700\u8981\u7528\u5230\u4e00\u4e9b\u8868\u683c\u5185\u90e8\u7684\u6570\u636e\u5904\u7406\u65b9\u6cd5\uff0c\u4f7f\u5f97\u4e0a\u5c42\u5c01\u88c5\u7684\u529f\u80fd\u548c\u8868\u683c\u5185\u90e8\u4fdd\u6301\u4e00\u81f4\u3002"),Object(o.b)("p",null,"ali-react-table \u5bfc\u51fa\u7684\u5185\u90e8\u65b9\u6cd5\u5982\u4e0b\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeRenderHeader(column)")," \u83b7\u53d6\u8868\u5934\u7684\u6e32\u67d3\u5185\u5bb9"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeGetValue(column, row, rowIndex)")," \u83b7\u53d6\u5355\u5143\u683c\u7684\u503c"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeGetRowKey(primaryKey, row, rowIndex)")," \u83b7\u53d6\u67d0\u4e00\u884c\u7684 key"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeGetCellProps(column, row, rowIndex)")," \u83b7\u53d6\u5355\u5143\u683c\u7684 props"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeRender(column, row, rowIndex)")," \u83b7\u53d6\u5355\u5143\u683c\u7684\u6e32\u67d3\u5185\u5bb9")),Object(o.b)("p",null,"\u4f7f\u7528\u793a\u4f8b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { internals } from 'ali-react-table'\n\nconst column = { code: 'hello', name: 'world' }\nconst rowIndex = 3\nconst row = dataSource[rowIndex]\n\nconst cellProps = internals.safeGetCellProps(column, row, rowIndex)\n")),Object(o.b)("p",null,"\u6bcf\u4e2a\u5185\u90e8\u7684\u6570\u636e\u65b9\u6cd5\u7684\u5b9e\u73b0\u5176\u5b9e\u90fd\u5f88\u7b80\u5355\uff0c\u8be6\u89c1 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/alibaba/ali-react-table/blob/master/packages/ali-react-table/src/internals.ts"}),"\u6e90\u7801"),"."),Object(o.b)("p",null,"\u6ce8\u610f\u5728\u8868\u683c\u7684\u5185\u90e8\u5b9e\u73b0\u4e2d\uff0c\u53ef\u80fd\u5e76\u6ca1\u6709\u5b9e\u9645\u8c03\u7528\u8fd9\u4e9b\u5185\u90e8\u65b9\u6cd5\uff08\u5728\u8868\u683c\u5185\u90e8\u8c03\u7528\u8fd9\u4e9b\u65b9\u6cd5\u4f1a\u4ea7\u751f\u5f88\u591a\u7684\u5197\u4f59\u8ba1\u7b97\uff09\uff0c\u4f46\u8868\u683c\u5185\u90e8\u7684\u6570\u636e\u5904\u7406\u548c\u8fd9\u4e9b\u65b9\u6cd5\u662f\u4fdd\u6301\u4e00\u81f4\u7684\u3002"))}p.isMDXComponent=!0}}]);