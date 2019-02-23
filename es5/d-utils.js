!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Dutils=t():e.Dutils=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=window.navigator.userAgent,r={isMobile:function(){return/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(o)},isIOS:function(){return/(iPhone|iPad|iPod|iOS)/i.test(o)},isAndroid:function(){return o.indexOf("Android")>-1||o.indexOf("Adr")>-1},checkLayoutOrientation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"请旋转屏幕，以达到更好的浏览效果";if(window.hasOwnProperty("orientation")){var t=null;n(),window.addEventListener("orientationchange",function(){n()})}function n(){var n=window.orientation;0===n||360===n?t&&(document.body.removeChild(t),t=null):((t=document.createElement("div")).style.cssText="position: fixed;\n                           top: 0;\n                           left: 0;\n                           right:0;\n                           bottom:0;\n                           display:flex;\n                           align-items:center;\n                           justify-content:center;\n                           font-size: 20px;\n                           background:#fff;\n                           z-index: 19940320;\n                           padding: 40px;",t.innerText=e,document.body.appendChild(t))}}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={isPhoneNum:function(e){var t=String(e);return/^1[3-9]\d{9}$/.test(t)},isEmail:function(e){var t=String(e);return/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(t)},isWeiXin:function(){return"micromessenger"===window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},isChinese:function(e){return/^[\u3220-\uFA29]+$/.test(String(e))},initEsDataType:function(){this.dataType={};["Null","Undefined","Object","Array","String","Number","Boolean","Function","RegExp"].forEach(function(e){o["is"+e]=function(t){return function(e){return Object.prototype.toString.call(e).match(/\[object (.*?)\]/)[1].toLowerCase()}(t)===e.toLowerCase()}})},isEmptyObject:function(e){if(!o.isObject(e))throw TypeError("参数不是真正的object对象");return"{}"===JSON.stringify(e)}};o.initEsDataType(),t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r={setCookie:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:72e5,o=new Date;o.setTime(o.getTime()+n),document.cookie=e+"="+escape(t)+";expires="+o.toGMTString()},getCookie:function(e){if(e){var t=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),n=document.cookie.match(t);return n&&n[2]?n[2]:null}var o=[];if(""!==document.cookie){var r=document.cookie.split("; ");for(var i in r)o.push({name:""+unescape(r[i].split("=")[0]),value:""+unescape(r[i].split("=")[1])});return o}return null},rmCookie:function(e){var t=new Date;if(t.setTime(t.getTime()-1),e){var n=r.getCookie(e);null!==n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}else{var o=r.getCookie();for(var i in o)document.cookie=o[i].name+"="+o[i].value+";expires="+t.toGMTString()}},fileToFormData:function(e){if("object"!==(void 0===e?"undefined":o(e)))throw new TypeError("参数必须为对象格式且包含file文件");var t=new FormData;for(var n in e)e.hasOwnProperty(n)&&t.append(n,e[n])},getRandomDataFromArr:function(e,t){var n=Number(t),o=Array.from(new Set(e)),r=o.length,i=new Array;if(!(n>0))throw new Error("数量必须大于0");if(o){for(var u=0;u<(n>r?r:n);u++){var c=Math.floor(Math.random()*o.length);i.push(o[c]),o.splice(c,1)}return i}},deepClone:function(e){var t={},n=Object.keys(e),o=!0,i=!1,u=void 0;try{for(var c,a=n[Symbol.iterator]();!(o=(c=a.next()).done);o=!0){var l=c.value;switch(r.checkType(e[l])){case"object":t[l]=r.deepClone(e[l]);break;case"array":t[l]=[].concat(e[l]);break;default:t[l]=e[l]}}}catch(e){i=!0,u=e}finally{try{!o&&a.return&&a.return()}finally{if(i)throw u}}return t},extend:function(){return r.deepClone(Object.assign.apply(Object,arguments))},checkType:function(e){var t=Object.prototype.toString.call(e);return t.substring(1,t.length-1).split(" ")[1].toLowerCase()},uniqueArray:function(e){return Array.from(new Set(e))},objectToString:function(e){return Object.keys(e).reduce(function(t,n,o){return(o>1?t:t+"="+e[t])+"&"+(n+"="+e[n])})}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r={console:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"未曾遗忘的青春",t=arguments[1];if(t&&"object"!==(void 0===t?"undefined":o(t)))throw new TypeError("options is an object, but found "+(void 0===t?"undefined":o(t)));var n=Object.assign({},{isMax:!0,colors:["#a18cd1","#fbc2eb","#8ec5fc"]},t);n.isMax?console.log("%c"+e,"background-size: 100%;background-image: -moz-linear-gradient(left, "+n.colors.toString()+");background-image: -webkit-linear-gradient(left, "+n.colors.toString()+");background-image: linear-gradient(to right, "+n.colors.toString()+");padding:20px 40px;color:#fff;font-size:18px;"):console.log("%c"+e,"background-size: 100%;background-image: -moz-linear-gradient(left, "+n.colors.toString()+");background-image: -webkit-linear-gradient(left, "+n.colors.toString()+");background-image: linear-gradient(to right, "+n.colors.toString()+");padding:2px 5px;color:#fff;font-size:12px;")}),notification:function(e){var t=Object.assign({},{title:"未曾遗忘的青春",body:"Hello World !!!",icon:"http://www.daiwei.org/index/images/logo/dw1.png",show:function(){},click:function(){}},e);return new Promise(function(e,n){window.Notification&&"denied"!==Notification.permission?(Notification.requestPermission(function(){var e=new Notification(t.title,{body:t.body,icon:t.icon});e.onshow=function(){t.show()},e.onclick=function(){t.click()}}),e(t)):n(t)})},randomColor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"rgba("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+e+")"},showLayoutFramework:function(){[].forEach.call(document.querySelectorAll("*"),function(e){e.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})},parseUrl:function(e){if(e){var t={};return e.slice(e.indexOf("?")).slice(1).split("&").forEach(function(e){e.split("=")[0]&&(t[e.split("=")[0]]=e.split("=")[1])}),t}},calcStringLength:function(e,t){if("string"!=typeof e)throw new TypeError("str must be string but found "+(void 0===e?"undefined":o(e)));if(!t)return e.length;for(var n=0,r=0;r<e.length;r++){n+=e.charCodeAt(r)>255?2:1}return n},strTrim:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("string"!=typeof e)throw new TypeError("str must be string but found "+(void 0===e?"undefined":o(e)));switch(t){case 0:return e.replace(/(^\s*)|(\s*$)/g,"");case 1:return e.replace(/\s/g,"");case 2:return e.replace(/(^\s*)/g,"");case 3:return e.replace(/(\s*$)/g,"");default:return e.replace(/(^\s*)|(\s*$)/g,"")}},throttle:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if("function"!=typeof e)throw new Error("第一个参数必须是方法");var n=e,o=null,r=!0;return function(){var e=arguments,i=this;if(r)return n.apply(i,e),void(r=!1);o||(o=setTimeout(function(){setTimeout(o),o=null,n.apply(i,e)},t))}},debounce:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("function"!=typeof e)throw new Error("第一个参数必须是方法");var o=void 0;return n?function(){clearTimeout(o),o||e.apply(this,arguments),o=setTimeout(function(){setTimeout(o),o=null},t)}:function(){clearTimeout(o),o=setTimeout(function(){setTimeout(o),e.apply(this,arguments),o=null},t)}},formatDate:function(e,t){var n=new Date(t),o={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var r in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),o)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?o[r]:("00"+o[r]).substr((""+o[r]).length)));return e},copyCode:function(e){var t=document.createElement("textarea");t.style.cssText="position: absolute; top: -1000px; right: -1000px; z-index: -1000;",document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)},openFullScreen:function(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullScreen()},exitFullScreen:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExiFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},performance:function(){var e=window.performance.timing;return{timing:e,dnsT:e.domainLookupEnd-e.domainLookupStart,loadT:e.domLoading-e.navigationStart,requestT:e.responseEnd-e.responseStart,tcpT:e.connectEnd-e.connectStart,renderDomT:e.domComplete-e.domInteractive,readyDomT:e.domContentLoadedEventEnd-e.navigationStart,onLoadT:e.loadEventEnd-e.navigationStart}},initRem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:750,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:320,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:414,o={},r=t/e,i=n/e;o.Html=document.getElementsByTagName("html")[0],o.intiFontSize=function(){var t=parseFloat((window.innerWidth/e).toFixed(4));return(t=t>i?i:t)<r?r:t},o.updateFontSize=function(){o.Html.setAttribute("style","font-size:"+100*o.intiFontSize()+"px")},document.addEventListener&&(window.addEventListener("resize",o.updateFontSize,!1),document.addEventListener("DOMContentLoaded",o.updateFontSize,!1))}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r={hasClass:function(e,t){return e.classList.contains(t)},addClass:function(e,t){Array.isArray(t)?t.forEach(function(t){r.hasClass(e,t)||e.classList.add(t)}):r.hasClass(e,t)||e.classList.add(t)},rmClass:function(e,t){Array.isArray(t)?t.forEach(function(t){r.hasClass(e,t)&&e.classList.remove(t)}):r.hasClass(e,t)&&e.classList.remove(t)},getComputedStyle:function(e,t){if(!e)throw new Error("dom元素不存在");if(!t)throw new Error("请输入需要查询的css属性名称");return document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,!1)[t]:e.currentStyle[t]},cssFilter:function(e,t,n){if("object"===(void 0===t?"undefined":o(t))&&!n){var r="";for(var i in t)t.hasOwnProperty(i)&&(r+=i+"("+t[i]+")");return e.style.filter=r,void(e.style.webkitFilter=r)}e.style.filter=t+"("+n+")",e.style.webkitFilter=t+"("+n+")"}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(4)),r=a(n(3)),i=a(n(2)),u=a(n(1)),c=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}var l={store:i.default,dom:o.default,utils:r.default,exp:u.default,device:c.default};t.default=l}]).default});