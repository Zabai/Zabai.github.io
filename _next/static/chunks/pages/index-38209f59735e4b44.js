(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2473)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let s=i(4788),a=i(8754),l=i(1757),n=i(224),r=l._(i(7294)),c=a._(i(2636)),o=i(7757),d=i(3735),u=i(3341);i(4210);let m=a._(i(7746)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,i,a,l,n,r){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let c="decode"in e?e.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&n(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,l=!1;a.current(s._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}function x(e){let[t,i]=r.version.split("."),s=parseInt(t,10),a=parseInt(i,10);return s>18||18===s&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let b=(0,r.forwardRef)((e,t)=>{var{imgAttributes:i,heightInt:a,widthInt:l,qualityInt:c,className:o,imgStyle:d,blurStyle:u,isLazy:m,fetchPriority:f,fill:h,placeholder:p,loading:b,srcString:j,config:v,unoptimized:w,loader:y,onLoadRef:N,onLoadingCompleteRef:_,setBlurComplete:k,setShowAltText:S,onLoad:C,onError:E}=e,P=n._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return b=m?"lazy":b,r.default.createElement(r.default.Fragment,null,r.default.createElement("img",s._({},P,x(f),{loading:b,width:l,height:a,decoding:"async","data-nimg":h?"fill":"1",className:o,style:s._({},d,u)},i,{ref:(0,r.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&g(e,j,p,N,_,k,w))},[j,p,N,_,k,E,w,t]),onLoad:e=>{let t=e.currentTarget;g(t,j,p,N,_,k,w)},onError:e=>{S(!0),"blur"===p&&k(!0),E&&E(e)}})))}),j=(0,r.forwardRef)((e,t)=>{let i,a;var l,{src:g,sizes:j,unoptimized:v=!1,priority:w=!1,loading:y,className:N,quality:_,width:k,height:S,fill:C,style:E,onLoad:P,onLoadingComplete:R,placeholder:z="empty",blurDataURL:I,fetchPriority:O,layout:A,objectFit:G,objectPosition:M,lazyBoundary:D,lazyRoot:L}=e,T=n._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let U=(0,r.useContext)(u.ImageConfigContext),B=(0,r.useMemo)(()=>{let e=f||U||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return s._({},e,{allSizes:t,deviceSizes:i})},[U]),F=T,J=F.loader||m.default;delete F.loader;let W="__next_img_default"in J;if(W){if("custom"===B.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=J;J=t=>{let{config:i}=t,s=n._(t,["config"]);return e(s)}}if(A){"fill"===A&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(E=s._({},E,e));let t={responsive:"100vw",fill:"100vw"}[A];t&&!j&&(j=t)}let $="",q=p(k),H=p(S);if("object"==typeof(l=g)&&(h(l)||void 0!==l.src)){let e=h(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,a=e.blurHeight,I=I||e.blurDataURL,$=e.src,!C){if(q||H){if(q&&!H){let t=q/e.width;H=Math.round(e.height*t)}else if(!q&&H){let t=H/e.height;q=Math.round(e.width*t)}}else q=e.width,H=e.height}}let V=!w&&("lazy"===y||void 0===y);(!(g="string"==typeof g?g:$)||g.startsWith("data:")||g.startsWith("blob:"))&&(v=!0,V=!1),B.unoptimized&&(v=!0),W&&g.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(v=!0),w&&(O="high");let[Z,X]=(0,r.useState)(!1),[Y,K]=(0,r.useState)(!1),Q=p(_),ee=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:G,objectPosition:M}:{},Y?{}:{color:"transparent"},E),et="blur"===z&&I&&!Z?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,o.getImageBlurSvg)({widthInt:q,heightInt:H,blurWidth:i,blurHeight:a,blurDataURL:I,objectFit:ee.objectFit}),'")')}:{},ei=function(e){let{config:t,src:i,unoptimized:s,width:a,quality:l,sizes:n,loader:r}=e;if(s)return{src:i,srcSet:void 0,sizes:void 0};let{widths:c,kind:o}=function(e,t,i){let{deviceSizes:s,allSizes:a}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(i);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:s,kind:"w"};let l=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:l,kind:"x"}}(t,a,n),d=c.length-1;return{sizes:n||"w"!==o?n:"100vw",srcSet:c.map((e,s)=>"".concat(r({config:t,src:i,quality:l,width:e})," ").concat("w"===o?e:s+1).concat(o)).join(", "),src:r({config:t,src:i,quality:l,width:c[d]})}}({config:B,src:g,unoptimized:v,width:q,quality:Q,sizes:j,loader:J}),es=g,ea=(0,r.useRef)(P);(0,r.useEffect)(()=>{ea.current=P},[P]);let el=(0,r.useRef)(R);(0,r.useEffect)(()=>{el.current=R},[R]);let en=s._({isLazy:V,imgAttributes:ei,heightInt:H,widthInt:q,qualityInt:Q,className:N,imgStyle:ee,blurStyle:et,loading:y,config:B,fetchPriority:O,fill:C,unoptimized:v,placeholder:z,loader:J,srcString:es,onLoadRef:ea,onLoadingCompleteRef:el,setBlurComplete:X,setShowAltText:K},F);return r.default.createElement(r.default.Fragment,null,r.default.createElement(b,s._({},en,{ref:t})),w?r.default.createElement(c.default,null,r.default.createElement("link",s._({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src,imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:F.crossOrigin},x(O)))):null)}),v=j;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:s,blurHeight:a,blurDataURL:l,objectFit:n}=e,r=s||t,c=a||i,o=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return r&&c?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r," ").concat(c,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(s&&a?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:s,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(s,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),i.__next_img_default=!0;let s=i},2473:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return I}});var s=i(5893);function a(e){var t;let{children:i,label:a,styles:l}=e;return(0,s.jsxs)("div",{className:"field ".concat(null!==(t=null==l?void 0:l.container)&&void 0!==t?t:""),children:[a&&(0,s.jsx)("label",{className:"label",children:a}),(0,s.jsx)("div",{className:"control",children:i})]})}function l(e){let{children:t,id:i,subtitle:a,title:l}=e;return(0,s.jsxs)("section",{className:"section",id:i,children:[(0,s.jsxs)("div",{className:"has-text-centered mb-5",children:[(0,s.jsx)("h1",{className:"title is-2",children:l}),a&&(0,s.jsx)("h2",{className:"subtitle is-5",children:a})]}),(0,s.jsx)("div",{className:"container has-text-justified",children:t})]})}var n=i(7294),r=i(6125);function c(){let{t:e}=(0,r.$G)(void 0,{keyPrefix:"contact"}),t=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,s.jsx)(l,{id:"contact",subtitle:e("subtitle"),title:e("title"),children:(0,s.jsx)("form",{onSubmit:e=>{var s,a,l,n;e.preventDefault();let r=null!==(l=null===(s=t.current)||void 0===s?void 0:s.value)&&void 0!==l?l:"",c=null!==(n=null===(a=i.current)||void 0===a?void 0:a.value)&&void 0!==n?n:"",o=document.createElement("a");o.href="mailto:zarmasherrera@gmail.com?subject=".concat(r,"&body=").concat(c),o.click(),o.remove()},children:(0,s.jsx)("div",{className:"columns",children:(0,s.jsx)("div",{className:"column is-6 is-offset-3",children:(0,s.jsxs)("div",{className:"box",children:[(0,s.jsx)(a,{label:e("form.subject"),children:(0,s.jsx)("input",{className:"input",name:"subject",placeholder:e("form.subjectPlaceholder"),ref:t,type:"text"})}),(0,s.jsx)(a,{label:e("form.message"),children:(0,s.jsx)("textarea",{className:"textarea",name:"body",placeholder:e("form.messagePlaceholder"),ref:i})}),(0,s.jsx)(a,{styles:{container:"is-grouped is-justify-content-center"},children:(0,s.jsxs)("button",{className:"button is-link is-large",type:"submit",children:[(0,s.jsx)("span",{className:"icon",children:(0,s.jsx)("i",{className:"fas fa-envelope"})}),(0,s.jsx)("span",{children:e("form.submit")})]})})]})})})})})}function o(e){let{backgroundImage:t,subtitle:i,title:a}=e;return(0,s.jsxs)("section",{className:"hero is-link is-fullheight is-fullheight-with-navbar",children:[(0,s.jsx)("div",{className:t}),(0,s.jsx)("div",{className:"hero-body",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h1",{className:"title is-1",children:a}),(0,s.jsx)("h2",{className:"subtitle is-3",children:i})]})})]})}var d=i(9530),u=i.n(d);function m(){let{t:e}=(0,r.$G)(void 0,{keyPrefix:"header"});return(0,s.jsx)(o,{backgroundImage:u().cover,subtitle:e("subtitle"),title:"Zabai Armas Herrera"})}function f(e){let{children:t}=e;return(0,s.jsx)("footer",{className:"footer",children:(0,s.jsx)("div",{className:"has-text-centered",children:t})})}let h=[{title:"Animate.css",url:"https://animate.style"},{title:"Bulma CSS",url:"https://bulma.io/"},{title:"Font Awesome",url:"hhttps://fontawesome.com/"},{title:"i18next",url:"https://www.i18next.com/"},{title:"Next.js",url:"https://nextjs.org/"},{title:"React JS",url:"https://react.dev/"},{title:"Typescript",url:"https://www.typescriptlang.org/"}];function p(){let{t:e}=(0,r.$G)(void 0,{keyPrefix:"footer"});return(0,s.jsxs)(f,{children:[(0,s.jsxs)("p",{children:[e("made")," ",h.map((e,t)=>(0,s.jsxs)("span",{children:[(0,s.jsx)("a",{href:e.url,target:"_blank",children:e.title}),t<h.length-1?" - ":"."]},e.title))]}),(0,s.jsx)(r.cC,{components:{author:(0,s.jsx)("a",{href:"https://mubaidr.js.org",target:"_blank"}),template:(0,s.jsx)("a",{className:"has-text-weight-bold",href:"https://bulmatemplates.github.io/bulma-templates/templates/personal.html"})},i18nKey:"footer.credits"})]})}function g(e){let{children:t,image:i,subtitle:a,title:l}=e;return(0,s.jsxs)("article",{className:"media",children:[(0,s.jsx)("figure",{className:"media-left",children:(0,s.jsx)("p",{className:"image is-64x64",children:i})}),(0,s.jsxs)("div",{className:"media-content",children:[(0,s.jsxs)("div",{className:"content has-text-left",children:[(0,s.jsx)("p",{className:"title is-4",children:l}),(0,s.jsx)("p",{className:"subtitle",children:a})]}),t]})]})}var x=i(5675),b=i.n(x);let j={alt:"X",src:"/not-found.png"},v=[{image:{alt:"Plexus",src:"/plexus.jpg"},subtitle:"companies.subtitles.plexus",tags:["Gatsby","Next JS","React JS","Redux","Styled Components","Typescript"],title:"companies.titles.reactDeveloper",url:"https://www.linkedin.com/company/plexus-tech/"},{image:{alt:"Bitbox",src:"/bitbox.jpg"},subtitle:"companies.subtitles.bitbox",tags:["Javascript","Odoo 13","OpenERP","PostgreSQL","Python 2.7","React JS","React Native","Redux"],title:"companies.titles.fullstackDeveloper",url:"https://www.linkedin.com/company/bitbox-it/"},{image:j,subtitle:"companies.subtitles.loquatFullstack",tags:["Java 18","PHP","Server Socket","Symfony"],title:"companies.titles.fullstackDeveloper"},{image:j,subtitle:"companies.subtitles.loquatIntern",tags:["Java 18","Server Socket"],title:"companies.titles.intern"}];function w(){let{t:e}=(0,r.$G)(void 0,{keyPrefix:"experience"});return(0,s.jsx)(l,{id:"experience",subtitle:e("subtitle"),title:e("title"),children:(0,s.jsx)("div",{className:"columns is-centered is-multiline",children:v.map(t=>(0,s.jsx)("div",{className:"column is-6",children:(0,s.jsx)("a",{className:"box is-full-height",href:t.url,rel:"noreferrer",target:"_blank",children:(0,s.jsx)(g,{image:(0,s.jsx)(b(),{alt:t.image.alt,height:100,src:t.image.src,width:100}),subtitle:e(t.subtitle),title:e(t.title),children:(0,s.jsx)("div",{className:"tags",children:t.tags.map(e=>(0,s.jsx)("span",{className:"tag",children:e},"".concat(t.title,"-").concat(e)))})})})},t.subtitle))})})}function y(e){let{endElements:t}=e,[i,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=document.getElementsByTagName("html");for(let t of e)t.classList.add("has-navbar-fixed-top");return()=>{for(let t of e)t.classList.remove("has-navbar-fixed-top")}},[]),(0,s.jsxs)("nav",{className:"navbar is-link is-fixed-top",children:[(0,s.jsx)("div",{className:"navbar-brand",children:(0,s.jsxs)("a",{"aria-expanded":"false","aria-label":"menu",className:"navbar-burger burger ".concat(i?"is-active":""),onClick:()=>a(!i),role:"button",children:[(0,s.jsx)("span",{"aria-hidden":"true"}),(0,s.jsx)("span",{"aria-hidden":"true"}),(0,s.jsx)("span",{"aria-hidden":"true"})]})}),(0,s.jsx)("div",{className:"navbar-menu ".concat(i?"is-active":""),children:(0,s.jsx)("div",{className:"navbar-end",children:t})})]})}function N(e){let{className:t,icon:i,onClick:a,title:l}=e;return(0,s.jsx)("div",{className:"navbar-item",children:(0,s.jsxs)("button",{className:"button ".concat(null!=t?t:""),onClick:a,children:[i&&(0,s.jsx)("span",{className:"icon is-small",children:(0,s.jsx)("i",{className:"fas ".concat(i)})}),(0,s.jsx)("span",{children:l})]})})}function _(e){let{icon:t,title:i,to:a}=e;return(0,s.jsxs)("a",{className:"navbar-item",href:a,children:[t&&(0,s.jsx)("span",{className:"icon",children:(0,s.jsx)("i",{className:"fas ".concat(t)})}),(0,s.jsx)("span",{children:i})]})}function k(){let{i18n:e,t}=(0,r.$G)(void 0,{keyPrefix:"navigator"}),{changeLanguage:i,language:a}=e;return(0,s.jsx)(y,{endElements:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_,{icon:"fa-info",title:t("experience"),to:"#experience"}),(0,s.jsx)(_,{icon:"fa-graduation-cap",title:t("studies"),to:"#studies"}),(0,s.jsx)(_,{icon:"fa-file-alt",title:t("resume"),to:"#resume"}),(0,s.jsx)(_,{icon:"fa-envelope",title:t("contact"),to:"#contact"}),(0,s.jsx)(N,{icon:"fa-globe",onClick:()=>i("es"===a?"en":"es"),title:t("language.".concat(a))})]})})}function S(){let{t:e}=(0,r.$G)(void 0,{keyPrefix:"resume"});return(0,s.jsx)(l,{id:"resume",subtitle:e("subtitle"),title:e("title"),children:(0,s.jsx)("div",{className:"has-text-centered",children:(0,s.jsxs)("a",{className:"button is-link is-medium",href:"/Zabai Armas Herrera CV 2022.pdf",rel:"noreferrer",target:"_blank",children:[(0,s.jsx)("span",{className:"icon",children:(0,s.jsx)("i",{className:"fas fa-file-alt"})}),(0,s.jsx)("span",{children:e("button")})]})})})}let C={alt:"Udemy logo",src:"/udemy.png"},E=[{image:{alt:"ULPGC logo",src:"/ulpgc.jpg"},subtitle:"Universidad de las Palmas de Gran Canaria",title:"Graduado en Ingenier\xeda Inform\xe1tica",url:"https://www.linkedin.com/school/universidad-de-las-palmas-de-gran-canaria/"},{image:C,subtitle:"Udemy",title:"Modern React with Redux [2020 Update]",url:"https://www.udemy.com/certificate/UC-4dfeda84-9796-4585-8aea-2a9aec9b36f9/"},{image:C,subtitle:"Udemy",title:"Typescript: The Complete Developer's Guide",url:"https://www.udemy.com/course/typescript-the-complete-developers-guide/"},{image:C,subtitle:"Udemy",title:"Desarrollo Web con Spring Boot - De Cero a Ninja",url:"https://www.udemy.com/certificate/UC-3W1WM1CN/"}];function P(){let{t:e}=(0,r.$G)(void 0,{keyPrefix:"studies"});return(0,s.jsx)(l,{id:"studies",subtitle:e("subtitle"),title:e("title"),children:(0,s.jsx)("div",{className:"columns is-centered is-multiline",children:E.map(e=>(0,s.jsx)("div",{className:"column is-6",children:(0,s.jsx)("a",{className:"box is-full-height",href:e.url,rel:"noreferrer",target:"_blank",children:(0,s.jsx)(g,{image:(0,s.jsx)(b(),{alt:e.image.alt,height:100,src:e.image.src,width:100}),subtitle:e.subtitle,title:e.title})})},e.title))})})}var R=i(9008),z=i.n(R);function I(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(z(),{children:[(0,s.jsx)("title",{children:"Zabai Armas Herrera"}),(0,s.jsx)("meta",{name:"description",content:"Zabai Armas Herrera portfolio"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,s.jsxs)("main",{children:[(0,s.jsx)(k,{}),(0,s.jsx)(m,{}),(0,s.jsx)(w,{}),(0,s.jsx)(P,{}),(0,s.jsx)(S,{}),(0,s.jsx)(c,{}),(0,s.jsx)(p,{})]})]})}},9530:function(e){e.exports={cover:"Cover_cover__ns9fM"}},9008:function(e,t,i){e.exports=i(2636)},5675:function(e,t,i){e.exports=i(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);