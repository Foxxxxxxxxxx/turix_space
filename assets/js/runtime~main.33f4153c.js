!function(){"use strict";var e,t,f,n,r,c={},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var f=a[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,o),f.loaded=!0,f.exports}o.m=c,o.c=a,e=[],o.O=function(t,f,n,r){if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],n=e[i][1],r=e[i][2];for(var a=!0,d=0;d<f.length;d++)(!1&r||c>=r)&&Object.keys(o.O).every((function(e){return o.O[e](f[d])}))?f.splice(d--,1):(a=!1,r<c&&(c=r));if(a){e.splice(i--,1);var u=n();void 0!==u&&(t=u)}}return t}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,n,r]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var c={};t=t||[null,f({}),f([]),f(f)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=f(a))Object.getOwnPropertyNames(a).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},o.d(r,c),r},o.d=function(e,t){for(var f in t)o.o(t,f)&&!o.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:t[f]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,f){return o.f[f](e,t),t}),[]))},o.u=function(e){return"assets/js/"+({53:"935f2afb",306:"67a0b688",533:"b2b675dd",1104:"0a91ce83",1109:"9d20918b",1169:"f0ddeb49",1477:"b2f554cd",2108:"1e49efb2",2199:"d5f0d062",2324:"64c206b5",2469:"3e7c2fa8",2500:"68c9274d",2535:"814f3328",3085:"1f391b9e",3089:"a6aa9e1f",3336:"77c0745f",3470:"2ec0eb02",3608:"9e4087bc",3628:"743b434c",3776:"cbe485f2",3859:"69d9ce27",4156:"6af3fd1b",4195:"c4f5d8e4",4245:"329d6f8b",4798:"3c666179",5305:"7a6d5e51",5414:"c063c3d0",5461:"84c87839",5621:"826713ea",5795:"a77f5f87",5853:"84a4dd0f",5860:"e2baa81f",6103:"ccc49370",6263:"68eff6e5",6487:"23ee1287",6551:"542c3037",7414:"393be207",7574:"287b1d8b",7827:"34f8199c",7878:"435d6f53",7918:"17896441",7940:"5227b1f4",8416:"2b0598ea",8871:"8de65351",8940:"49f5f4e9",9127:"14f8620e",9514:"1be78505"}[e]||e)+"."+{53:"c279d937",306:"42599124",533:"05a8b9a9",1104:"a391632b",1109:"b5272b38",1169:"22a42704",1477:"076cbf52",1482:"7edc7e49",2108:"2222b5af",2199:"8b0d457d",2324:"27f14e9c",2469:"500a17e3",2500:"a2088c6a",2535:"bf4efbbc",3085:"53ba69b1",3089:"e322a621",3336:"00c4007f",3470:"93fbf399",3608:"2aaca9ff",3628:"390c0584",3776:"5a3151b6",3859:"7fa95868",4156:"716e6d6b",4195:"d1fa5b82",4245:"35abcd8f",4608:"5d37527d",4798:"ac90c52a",4814:"e4ec2b41",5305:"990d2db9",5414:"bde03ffa",5461:"e4654406",5621:"8a3465cb",5795:"82ded2dd",5853:"9ced9087",5860:"f747c5cb",6103:"b74e1745",6263:"12f08422",6487:"f96ec238",6551:"04496133",6667:"61f5f09f",7414:"4f3bbf6f",7574:"b83701a9",7827:"9ed419ed",7878:"d2f17e3f",7918:"fbbb7fb1",7940:"3b78a739",8416:"e7b4627e",8871:"69d3c44a",8940:"3e260e44",9127:"e1707dc1",9514:"ab44b6e6"}[e]+".js"},o.miniCssF=function(e){return"assets/css/styles.557ce517.css"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="turix-space-2:",o.l=function(e,t,f,c){if(n[e])n[e].push(t);else{var a,d;if(void 0!==f)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var b=u[i];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==r+f){a=b;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",r+f),a.src=e),n[e]=[t];var s=function(t,f){a.onerror=a.onload=null,clearTimeout(l);var r=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(f)})),t)return t(f)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),d&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",o.gca=function(e){return e={17896441:"7918","935f2afb":"53","67a0b688":"306",b2b675dd:"533","0a91ce83":"1104","9d20918b":"1109",f0ddeb49:"1169",b2f554cd:"1477","1e49efb2":"2108",d5f0d062:"2199","64c206b5":"2324","3e7c2fa8":"2469","68c9274d":"2500","814f3328":"2535","1f391b9e":"3085",a6aa9e1f:"3089","77c0745f":"3336","2ec0eb02":"3470","9e4087bc":"3608","743b434c":"3628",cbe485f2:"3776","69d9ce27":"3859","6af3fd1b":"4156",c4f5d8e4:"4195","329d6f8b":"4245","3c666179":"4798","7a6d5e51":"5305",c063c3d0:"5414","84c87839":"5461","826713ea":"5621",a77f5f87:"5795","84a4dd0f":"5853",e2baa81f:"5860",ccc49370:"6103","68eff6e5":"6263","23ee1287":"6487","542c3037":"6551","393be207":"7414","287b1d8b":"7574","34f8199c":"7827","435d6f53":"7878","5227b1f4":"7940","2b0598ea":"8416","8de65351":"8871","49f5f4e9":"8940","14f8620e":"9127","1be78505":"9514"}[e]||e,o.p+o.u(e)},function(){var e={1303:0,532:0};o.f.j=function(t,f){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)f.push(n[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var r=new Promise((function(f,r){n=e[t]=[f,r]}));f.push(n[2]=r);var c=o.p+o.u(t),a=new Error;o.l(c,(function(f){if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",a.name="ChunkLoadError",a.type=r,a.request=c,n[1](a)}}),"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,f){var n,r,c=f[0],a=f[1],d=f[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(d)var i=d(o)}for(t&&t(f);u<c.length;u++)r=c[u],o.o(e,r)&&e[r]&&e[r][0](),e[c[u]]=0;return o.O(i)},f=self.webpackChunkturix_space_2=self.webpackChunkturix_space_2||[];f.forEach(t.bind(null,0)),f.push=t.bind(null,f.push.bind(f))}()}();