!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";(function(e){var r=n(2),i=setTimeout;function o(){}function c(e){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,c._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void u(t.promise,e)}a(t.promise,r)}else(1===e._state?a:u)(t.promise,e._value)})):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof c)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void d((r=n,i=t,function(){r.apply(i,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){u(e,t)}var r,i}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&c._immediateFn(function(){e._handled||c._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,u(t,e))})}catch(e){if(n)return;n=!0,u(t,e)}}c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){var n=new this.constructor(o);return s(this,new f(e,t,n)),n},c.prototype.finally=r.a,c.all=function(e){return new c(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var i=r.length;function o(e,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var s=c.then;if("function"==typeof s)return void s.call(c,function(t){o(e,t)},n)}r[e]=c,0==--i&&t(r)}catch(e){n(e)}}for(var c=0;c<r.length;c++)o(c,r[c])})},c.resolve=function(e){return e&&"object"==typeof e&&e.constructor===c?e:new c(function(t){t(e)})},c.reject=function(e){return new c(function(t,n){n(e)})},c.race=function(e){return new c(function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)})},c._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){i(e,0)},c._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=c}).call(this,n(3).setImmediate)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(4),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,o,c,s,a=1,u={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){m(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){o.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(c="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(c)&&m(+t.data.slice(c.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(c+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return u[a]=i,r(a),a++},d.clearImmediate=p}function p(e){delete u[e]}function m(e){if(l)setTimeout(m,0,e);else{var t=u[e];if(t){l=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{p(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(1),n(5))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var a,u=[],l=!1,f=-1;function d(){l&&a&&(l=!1,a.length?u=a.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(a=u,u=[];++f<t;)a&&a[f].run();f=-1,t=u.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||l||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=n(0);const i=function(e){return new r.a(function(t,n){try{return t(JSON.stringify(e))}catch(e){return n(e)}})},o=function(e){return i({label:e}).catch(function(e){return console.error({msg:"failed to parse detail",error:e}),r.a.resolve()})},c=function(e,t){if("function"==typeof window.CustomEvent)return new window.CustomEvent(e,{detail:t});return new(function(){function e(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles||!1,t.cancelable||!1,t.detail||null),n}return e.prototype=window.Event.prototype,e}())(e,{detail:t})},s=function(e,t,n){const r=function(e){return/^linximpulse./.test(e)?e:"linximpulse."+e}(t),i=void 0!==n?c(r,n):function(e){if("function"==typeof window.Event)return new window.Event(e);const t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}(r);return e.dispatchEvent(i)};class a extends Error{constructor(e,t="unknown"){super(e),this.name="LinxImpulseError",this.tag=t,this.message=e}}const u=function(e){const t=function(e){return{stg:"Staging",hml:"Homologation",dev:"Development"}[e]}(e);if(!t)return;const n=document.body,r=document.createElement("a");r.innerHTML=["<span> Warning: You are evaluating Impulse Suite on ",t," environment. Click here to go back to Production!</span>"].join(""),r.style=["position: fixed;","bottom: 0;","padding: 5px 0;","width: 100%;","background-color: purple;","color: white;","text-align: center;","font-size: 18px;","cursor: pointer;","z-index: 999999999;"].join(""),r.addEventListener("click",function(e){e.preventDefault(),function(){try{window.sessionStorage.removeItem("impulseSuiteEnv"),window.location.search=window.location.search.replace(/(impulseSuiteEnv=[A-z]{3})/,"")}catch(e){console.warn("Unable to access localStorage!")}}()});const i="Warning: You are evaluating Impulse Suite on "+t+" environment";if(m())return console.warn(i);try{n.insertBefore(r,n.firstChild)}catch(e){console.warn(i)}},l=function(e){return{prd:"suite.linximpulse.net",stg:"suite.staging.linximpulse.net",hml:"suite.homolog.linximpulse.net",dev:"suite.development.linximpulse.net:8080"}[e.toLowerCase()]},f=function(){try{return window.sessionStorage.getItem("impulseSuiteEnv")||"prd"}catch(e){return console.warn("Unable to access localStorage!"),"prd"}},d=function(){try{const e=function(){const e=RegExp(/impulseSuiteEnv=([A-z]{3})/),t=window.location.search.match(e);return t&&t[1]}();e&&window.sessionStorage.setItem("impulseSuiteEnv",e)}catch(e){console.warn("Unable to access localStorage!")}},p=function(e){if(e)return u(e),l(e);const t=f();return u(t),l(t)},m=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};function h(e){window.linxImpulse.config.customEventSource=e}const w=function(e,t,n){const r="//"+p(e)+"/impulse";return t?r+"/"+t+"/"+n:r+"/"+n},g=function(e,t){return new r.a(function(n,r){const i=function(e,t){return"//"+p(e)+"/impulse/"+t+"/flags.json"}(t,e),o=new window.XMLHttpRequest,c=function(){return r(Error("Failed to retrieve integration flags: "+o.statusText))};o.addEventListener("load",function(){try{return n(JSON.parse(o.responseText))}catch(e){return r(e)}}),o.addEventListener("error",c),o.addEventListener("abort",c),o.open("GET",i),o.send()}).catch(function(t){return"dev"===f()?g(e,"prd"):r.a.reject(t)})},v=function(e,t,n){return new r.a(function(r,i){const o=document.createElement("script");if(o.type="text/javascript",o.src=e,t)for(let e in t)o.setAttribute(e,t[e]);o.onload=function(){return r()},o.onerror=function(){return i(Error("Failed to load script from: "+e))},n&&n.parentElement?n.parentElement.insertBefore(o,n):document.head.appendChild(o)})},y=function(e){const t=w(e.env,e.apiKey,e.scriptName);return v(t,e.attrs).catch(function(t){if("dev"===f()){const t=w("prd",e.apiKey,e.scriptName);return v(t,e.attrs,e.ref)}return r.a.reject(t)})};const b=function(e,t){if(!e||!e.enabled)return;if(!e.stAccount)throw Error("The flag shopback.stAccount is required");const n=parseInt(e.stAccount);window._st_account=Number.isNaN(n)?e.stAccount:n;const i=[],o={async:!0,defer:!0,"data-client":String(window._st_account)+"79e8ae63ac10bad9b6c6b8290ffd3ae5".substr(0,24-String(window._st_account).length)},c=[],s=function(e){if(c.indexOf(e.src)>-1)return;i.push(v(e.src,e.attrs||{async:!0,defer:!0},t)),c.push(e.src)},a=function(){window.cv_data=window._cv_data,s({src:"https://static.shopback.net/shopconvert/js/conversion/v1.js"})};return e.shopConvertEnabled&&(window._acc=e.shopConvertId,s({src:"https://app.shoptarget.com.br/js/collect_sbk.js"}),s({src:"https://static.shopback.net/tags/init.js",attrs:o}),s({src:"https://static.shopback.net/shopconvert/js/impression/v1.js"}),"object"==typeof window._cv_data?a():window.linxImpulse.impulseTag.addEventListener("shopconvert.beforeconversion",a,{once:!0})),e.shopAdsEnabled&&s({src:"https://poscompra.shopconvert.com.br/js/cm.js"}),e.shopPushEnabled&&(s({src:"https://app.shoptarget.com.br/js/collect_sbk.js"}),s({src:"https://static.shopback.net/tags/init.js",attrs:o})),e.shopTargetEnabled&&s({src:"https://app.shoptarget.com.br/js/collect_sbk.js"}),c.length>0?r.a.all(i):v("https://app.shoptarget.com.br/js/reengage_legacy.js",{async:!0,defer:!0,stAccount:e.stAccount},t)},j=function(e,t){if(!e||!e.enabled||!e.publisherId)return;const n="https://static.ads.linximpulse.net/"+e.publisherId,r=n+"/g.js",i=n+"/c.js";e.spa&&window.linxImpulse.impulseTag.addEventListener("linximpulse.onmeta",function(){"transaction"===window.linxImpulse.meta.page&&v(i,{async:!0,defer:!0},t)});const o=window.linxImpulse.meta.page;return v("transaction"===o?i:r,{async:!0,defer:!0},t)},_=function(e,t,n,r){if(!e||!e.enabled)return;const i={async:!0,defer:!0,"data-apikey":e.apiKey||n};return v("https://static.chaordicsystems.com/static/loader.js",i,r)},E=function(e,t,n){if(!("object"==typeof e?e.enabled:e))return;const r="//"+p()+"/impulse/"+t+"/autocomplete/linx-impulse-autocomplete.min.js";return v(r,{async:!0,defer:!0,charset:"UTF-8"},n)},x=function(e,t,n){const r=window.location.href.replace(window.location.protocol,"");if(!e||!e.enabled||!r.match(new RegExp(e.url)))return;window.linxImpulse.config.lazyEvents=!0;const i="//"+p()+"/impulse/"+t+"/search/linx-impulse-search.min.js";return v(i,{async:!0,charset:"UTF-8"},n)},I=function(e,t){if(!e||!e.enabled)return;window.NREUM={loader_config:{accountID:"3550723",trustKey:"1326272",licenseKey:"NRJS-8e7063c434fa2a4337e",applicationID:e.id,agentID:e.id},info:{beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-8e7063c434fa2a4337e",applicationID:e.id,sa:1}};return v("//js-agent.newrelic.com/nr-loader-full-current.min.js",{async:!0,charset:"UTF-8"},t).then(function(){!function(){if(window.linxImpulse.newrelic.length)for(let e of window.linxImpulse.newrelic)newrelic.noticeError(new a(e.message,e.tag),Object.assign(window.linxImpulse.config,window.linxImpulse.meta));newrelic.setErrorHandler(function(e){return"LinxImpulseError"!==e.name||(e.name=e.name+"-"+e.tag,!1)})}(),window.linxImpulse.config.newRelicInitialized=!0})},T=function(e,t){var n,r;if("object"==typeof e?e.enabled:e)return v((n=f(),r=!window.customElements,"//static-banner.chaordicsystems.com/banner"+("stg"===(n||"prd")?"/stg/":"/")+(r?"banner-legacy.js":"banner.js")),{async:!0,defer:!0,charset:"UTF-8"},t)},S=function(e,t,n){if(!e||!e.enabled||["lite","vue"].indexOf(e.plan)<=-1)return;const r="lite"===e.plan?"//suite.linximpulse.net/impulse/engage/onsite/onsite.js":"//"+p()+"/impulse/"+t+"/onsite/linx-impulse-onsite.min.js";return v(r,{async:!0,defer:!0},n)},k=function(e,t,n){if(!e)return;return v("//scripts.neemu.com/"+t+"/neemu_plugin.js",{async:!0,defer:!0},n)},L=function(e,t,n){if(!("object"==typeof e?e.enabled:e))return;const r="//"+p()+"/impulse/"+t+"/wishlist/js/wishlist.js";return v(r,{async:!0,charset:"UTF-8"},n)},A=function(e){const t=e.map(function(e){return e.script.then(function(){return{status:"resolved"}}).catch(function(t){return{status:"rejected",id:e.id,message:t.message}})});return r.a.all(t)},O=function(){const e=window._st_account;return e?function(e){return new r.a(function(t,n){const r="https://app.shoptarget.com.br/impulse_api/is_impulse/"+e,i=new window.XMLHttpRequest,o=function(){return n(Error("Failed to retrieve apiKey: "+i.statusText))};i.addEventListener("load",function(){try{return t(JSON.parse(i.responseText))}catch(e){return n(e)}}),i.addEventListener("error",o),i.addEventListener("abort",o),i.open("GET",r),i.send()}).catch(function(e){return r.a.reject(e)})}(e).then(function(e){const t=e.apikey,n=e.is_impulse;if(t&&n)return t}):r.a.resolve()},F=function(e){return O().then(function(t){return t||function(e){return v("https://app.shoptarget.com.br/js/reengage_legacy.js",{async:!0,defer:!0},e)}(e)})},M=function(e){const t={apiKey:window.linxImpulse.config.apiKey,timers:{}};e.integration.finishedAt=Date.now();for(let n in e){const r=e[n];r.took=r.finishedAt-r.startedAt,t.timers[n]=r.took||null}window.linxImpulse.loadingTimes=e,"stg"===f()&&function(e){try{if(window.sessionStorage.getItem("impulseSuiteEnv"))return console.info(e),r.a.resolve()}catch(e){}i(e).catch(function(e){return console.error({msg:"failed to parse detail",error:e}),r.a.resolve()})}(t)},P=f(),C=function(e,t,n){return window.linxImpulse.config.newRelicInitialized?window.newrelic.noticeError(new a(n,e),Object.assign(window.linxImpulse.config,window.linxImpulse.meta)):(window.linxImpulse.newrelic.push({tag:e,message:n}),"stg"===P?function(e){try{if(window.sessionStorage.getItem("impulseSuiteEnv"))return console.error(e),r.a.resolve()}catch(e){}return i(e).catch(function(e){return console.error({msg:"failed to parse detail",error:e}),r.a.resolve()})}({tag:e,apiKey:t,href:window.location.href,message:n}):void 0)},R=function(e,t){return e.then(function(e){return e.filter(function(e){return"rejected"===e}).map(function(e){return C(e.id,t,e.message)})})},N=function(e,t,n){const r=function(e,t,n){const r=[{id:"script-autocomplete",script:E(t.autocomplete,e,n)},{id:"script-search",script:x(t.search,e,n)},{id:"script-new-relic-agent",script:I(t.newRelic,n)}].filter(function(e){return void 0!==e.script});return A(r)}(e,t,n);return R(r,e)},D=function(e,t,n){const r=function(e,t,n){const r=[{id:"script-shopback",script:b(t.shopback,n)},{id:"script-percycle",script:j(t.percycle,n)},{id:"script-chaordic",script:_(t.chaordic,t.platformProvider,e,n)},{id:"script-legacy-autocomplete",script:k(t.legacyAutocomplete,e,n)},{id:"script-banner",script:T(t.banner,n)},{id:"script-onsite",script:S(t.onsite,e,n)},{id:"script-wishlist",script:L(t.wishlist,e,n)}].filter(function(e){return void 0!==e.script});return A(r)}(e,t,n);return R(r,e)},K=function(e,t,n){const r=function(e,t){const n=[{id:"script-shopback",script:b(e.shopback,t)}].filter(function(e){return void 0!==e.script});return A(n)}(t,n);return R(r,e)},z=function(e,t,n){e.addEventListener("linximpulse.onmeta",function(){return D(t,n,e)},{once:!0}),e.addEventListener("linximpulse.onsession",function(){return function(e,t){return y({scriptName:"metadata.js",apiKey:e,ref:t}).catch(function(t){return C("script-scrapping",e,t.message)})}(t,e)}),e.addEventListener("linximpulse.error",function(r){r.detail&&"scrapper"===r.detail.tag&&K(t,n,e),C(r.detail.tag,t,r.detail.message)}),e.addEventListener("linximpulse.onmetadata",function(){return D(t,n,e)},{once:!0}),e.addEventListener("error",function(e){return C(e.detail.tag,t,e.detail.message)})},U=function(e,t){if(!window.linxImpulseInitialized)return window.linxImpulseInitialized=!0,g(t).then(function(n){n.enabled&&(!function(e,t,n){const r=e.dataset.onDemandEvents&&"true"===e.dataset.onDemandEvents;window.linxImpulse={impulseTag:e,createEvent:function(t,n){return s(e,t,n)},meta:{},config:{apiKey:n,integrationFlags:t,lazyEvents:r},isMobile:m,setCustomEventSource:h,newrelic:[]},"stg"===P&&(window.linxImpulse={...window.linxImpulse,sendCounter:o})}(e,n,t),z(e,t,n),function(e,t){y({scriptName:"session.js",ref:t}).catch(function(t){return C("script-session",e,t.message)})}(t,e),function(e,t){y({scriptName:"collection.js",ref:t}).catch(function(t){return C("script-collection",e,t.message)})}(t,e),N(t,n,e))}).catch(function(e){return C("loader",t,e.message)})};!function(){if(o("experiment_impulsejs_tp"),document.querySelectorAll('script[src*="impulse.js"][data-apikey]').length>1)return;const e=function(){const e=['script[src*="app.shoptarget.com.br/js/tracking.js"]','script[src*="static.sback.tech/shoptarget/js/tracking.js"]'].join(","),t=document.querySelector('script[src*="impulse.js"][data-apikey]'),n=document.querySelector(e);if(t||n)return t||n;console.warn("Linx Impulse Suite: misconfigured script tag!")}();if(!e)return;const t=e.getAttribute("data-apikey");if(d(),!t&&!function(){const e=document.querySelector('script[src*="impulse.js"][data-apikey]'),t=document.querySelector('script[src*="app.shoptarget.com.br/js/tracking.js"]');return e&&!t}())return function(e){return F(e)}(e).then(function(t){t&&U(e,t)}).catch(function(){o("experiment_failed_load_metamorph")});!function(e){const t=["session","collection","scraping"];let n=t.length;const r={integration:{startedAt:Date.now()}};t.forEach(function(t){const i=r[t]={};e.addEventListener("linximpulse.onstart.module."+t,function(){i.startedAt=Date.now()},{once:!0}),e.addEventListener("linximpulse.onfinish.module."+t,function(){i.finishedAt=Date.now(),"collection"!==t||r.scraping.startedAt||(n=0,M(r)),0==--n&&M(r)},{once:!0})})}(e),o("experiment_native_impulsejs_tp"),U(e,t)}()}]);