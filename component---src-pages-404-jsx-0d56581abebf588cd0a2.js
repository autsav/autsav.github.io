(self.webpackChunkcara=self.webpackChunkcara||[]).push([[256],{8855:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return G}});var o=t(7294),n=t(5444),i=t(5577),c=t(6156),l=t(9756);var a=t(7329);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p="__default",g=function(e){return"object"==typeof e&&null!==e&&p in e};function b(e,r,t,o,n){var i=r&&"string"==typeof r?r.split("."):[r];for(o=0;o<i.length;o++)e=e?e[i[o]]:n;return e===n?t:g(e)?e.__default:e}var f=function e(r,t){if(r&&r.variant){var o={};for(var n in r){var i=r[n];if("variant"===n){var c=e(b(t,"function"==typeof i?i(t):i),t);o=s(s({},o),c)}else o[n]=i}return o}return r},m=[40,52,64].map((function(e){return e+"em"})),h={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},u={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},y={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],scrollMarginX:["scrollMarginLeft","scrollMarginRight"],scrollMarginY:["scrollMarginTop","scrollMarginBottom"],scrollPaddingX:["scrollPaddingLeft","scrollPaddingRight"],scrollPaddingY:["scrollPaddingTop","scrollPaddingBottom"],size:["width","height"]},k={color:"colors",backgroundColor:"colors",borderColor:"colors",caretColor:"colors",columnRuleColor:"colors",textDecorationColor:"colors",opacity:"opacities",transition:"transitions",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",marginBlock:"space",marginBlockEnd:"space",marginBlockStart:"space",marginInline:"space",marginInlineEnd:"space",marginInlineStart:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",paddingBlock:"space",paddingBlockEnd:"space",paddingBlockStart:"space",paddingInline:"space",paddingInlineEnd:"space",paddingInlineStart:"space",scrollMargin:"space",scrollMarginTop:"space",scrollMarginRight:"space",scrollMarginBottom:"space",scrollMarginLeft:"space",scrollMarginX:"space",scrollMarginY:"space",scrollPadding:"space",scrollPaddingTop:"space",scrollPaddingRight:"space",scrollPaddingBottom:"space",scrollPaddingLeft:"space",scrollPaddingX:"space",scrollPaddingY:"space",inset:"space",insetBlock:"space",insetBlockEnd:"space",insetBlockStart:"space",insetInline:"space",insetInlineEnd:"space",insetInlineStart:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",borderBlock:"borders",borderBlockColor:"colors",borderBlockEnd:"borders",borderBlockEndColor:"colors",borderBlockEndStyle:"borderStyles",borderBlockEndWidth:"borderWidths",borderBlockStart:"borders",borderBlockStartColor:"colors",borderBlockStartStyle:"borderStyles",borderBlockStartWidth:"borderWidths",borderBlockStyle:"borderStyles",borderBlockWidth:"borderWidths",borderEndEndRadius:"radii",borderEndStartRadius:"radii",borderInline:"borders",borderInlineColor:"colors",borderInlineEnd:"borders",borderInlineEndColor:"colors",borderInlineEndStyle:"borderStyles",borderInlineEndWidth:"borderWidths",borderInlineStart:"borders",borderInlineStartColor:"colors",borderInlineStartStyle:"borderStyles",borderInlineStartWidth:"borderWidths",borderInlineStyle:"borderStyles",borderInlineWidth:"borderWidths",borderStartEndRadius:"radii",borderStartStartRadius:"radii",columnRuleWidth:"borderWidths",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",blockSize:"sizes",inlineSize:"sizes",maxBlockSize:"sizes",maxInlineSize:"sizes",minBlockSize:"sizes",minInlineSize:"sizes",columnWidth:"sizes",fill:"colors",stroke:"colors"},E=function(e,r){if("number"!=typeof r||r>=0){if("string"==typeof r&&r.startsWith("-")){var t=r.substring(1),o=b(e,t,t);return"number"==typeof o?-1*o:"-".concat(o)}return b(e,r,r)}var n=Math.abs(r),i=b(e,n,n);return"string"==typeof i?"-"+i:-1*Number(i)},S=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginBlock","marginBlockEnd","marginBlockStart","marginInline","marginInlineEnd","marginInlineStart","top","bottom","left","right"].reduce((function(e,r){return s(s({},e),{},(0,c.Z)({},r,E))}),{}),w=function(e){return function(r){var t={},o=r&&r.breakpoints||m,n=[null].concat((0,a.Z)(o.map((function(e){return e.includes("@media")?e:"@media screen and (min-width: ".concat(e,")")}))));for(var i in e){var c=i,l=e[c];if("function"==typeof l&&(l=l(r||{})),!1!==l&&null!=l)if(Array.isArray(l))for(var d=0;d<l.slice(0,n.length).length;d++){var s=n[d];s?(t[s]=t[s]||{},null!=l[d]&&(t[s][c]=l[d])):t[c]=l[d]}else t[c]=l}return t}},v=function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=s(s({},h),"theme"in t?t.theme:t),n=f("function"==typeof r?r(o):r,o),i=w(n)(o),c={};for(var l in i){var a=i[l],d="function"==typeof a?a(o):a;if(d&&"object"==typeof d){if(g(d)){c[l]=d.__default;continue}c[l]=e(d)(o)}else{var p=l in u?u[l]:l,m=p in k?k[p]:void 0,E=m?null==o?void 0:o[m]:b(o,p,{}),v=b(S,p,b),B=v(E,d,d);if(p in y)for(var O=y[p],Z=0;Z<O.length;Z++)c[O[Z]]=B;else c[p]=B}}return c}},B=t(1053),O=(t(4983),["theme"]);function Z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Z(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var W={inlineCode:"code",thematicBreak:"hr",root:"div"},I=function(e){return e in W?W[e]:e},R={th:{align:"textAlign"},td:{align:"textAlign"}},j=function(e){return function(r){var t=r.theme,o=function(e,r){if(null==e)return{};var t,o,n=(0,l.Z)(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}(r,O),n=R[e],i=n?Object.keys(o).filter((function(e){return void 0!==n[e]})).reduce((function(e,r){return P(P({},e),{},(0,c.Z)({},n[r],o[r]))}),{}):void 0;return v(P(P({},b(t,"styles.".concat(e))),i))(t)}},z=(0,B.Z)("div")(j("div")),_=(0,B.Z)("div")(j("div")),x={};["p","b","i","a","h1","h2","h3","h4","h5","h6","img","pre","code","ol","ul","li","blockquote","hr","em","table","tr","th","td","em","strong","del","inlineCode","thematicBreak","div","root"].forEach((function(e){x[e]=(0,B.Z)(I(e))(j(e)),z[e]=x[e],_[e]=(0,B.Z)(function(e){return function(r){return(0,o.useEffect)((function(){}),[]),(0,o.createElement)(I(e),r)}}(e))(j(e))}));var C=t(9709),M=t(7686),L=t(6137),T=t(6722),D=t(4140),X=t(7971),Y=t(6466),G=function(){return o.createElement(C.Z,null,o.createElement(D.Z,{title:"404 - Not Found"}),o.createElement(i.V,{pages:1},o.createElement("div",null,o.createElement(M.Z,{speed:.2,offset:0,factor:1},o.createElement(L.w6,null,o.createElement(T.Z,{icon:"triangle",hiddenMobile:!0,width:48,stroke:!0,color:"icon_orange",left:"10%",top:"20%"}),o.createElement(T.Z,{icon:"hexa",width:48,stroke:!0,color:"icon_red",left:"60%",top:"70%"}),o.createElement(T.Z,{icon:"box",width:6,color:"icon_darker",left:"60%",top:"15%"})),o.createElement(L.sr,null,o.createElement(T.Z,{icon:"arrowUp",hiddenMobile:!0,width:16,color:"icon_blue",left:"80%",top:"10%"}),o.createElement(T.Z,{icon:"triangle",width:12,stroke:!0,color:"icon_brightest",left:"90%",top:"50%"}),o.createElement(T.Z,{icon:"circle",width:16,color:"icon_darker",left:"70%",top:"90%"}),o.createElement(T.Z,{icon:"triangle",width:16,stroke:!0,color:"icon_darkest",left:"30%",top:"65%"}),o.createElement(T.Z,{icon:"cross",width:16,stroke:!0,color:"icon_pink",left:"28%",top:"15%"}),o.createElement(T.Z,{icon:"circle",width:6,color:"icon_darkest",left:"75%",top:"10%"}),o.createElement(T.Z,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"45%",top:"10%"})),o.createElement(T.Z,{icon:"circle",hiddenMobile:!0,width:24,color:"icon_darker",left:"5%",top:"70%"}),o.createElement(T.Z,{icon:"circle",width:6,color:"icon_darkest",left:"4%",top:"20%"}),o.createElement(T.Z,{icon:"circle",width:12,color:"icon_darkest",left:"50%",top:"60%"}),o.createElement(T.Z,{icon:"upDown",width:8,color:"icon_darkest",left:"95%",top:"90%"}),o.createElement(T.Z,{icon:"upDown",hiddenMobile:!0,width:24,color:"icon_darker",left:"40%",top:"80%"}),o.createElement(T.Z,{icon:"triangle",width:8,stroke:!0,color:"icon_darker",left:"25%",top:"5%"}),o.createElement(T.Z,{icon:"circle",width:64,color:"icon_green",left:"95%",top:"5%"}),o.createElement(T.Z,{icon:"box",hiddenMobile:!0,width:64,color:"icon_purple",left:"5%",top:"90%"}),o.createElement(T.Z,{icon:"box",width:6,color:"icon_darkest",left:"10%",top:"10%"}),o.createElement(T.Z,{icon:"box",width:12,color:"icon_darkest",left:"40%",top:"30%"}),o.createElement(T.Z,{icon:"hexa",width:16,stroke:!0,color:"icon_darker",left:"10%",top:"50%"}),o.createElement(T.Z,{icon:"hexa",width:8,stroke:!0,color:"icon_darker",left:"80%",top:"70%"})),o.createElement(X.Z,{sx:{variant:"texts.bigger"},speed:.4,offset:0,factor:1},o.createElement(Y.Z,null,o.createElement(z.h1,null,"404 - Page not found"),o.createElement(z.p,null,"Go back to ",o.createElement(n.Link,{to:"/"},"homepage"),"."))))))}}}]);
//# sourceMappingURL=component---src-pages-404-jsx-0d56581abebf588cd0a2.js.map