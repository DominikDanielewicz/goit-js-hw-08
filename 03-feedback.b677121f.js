function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={};o=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var i,a={},u={};i="object"==typeof n&&n&&n.Object===Object&&n;var c="object"==typeof self&&self&&self.Object===Object&&self,l=i||c||Function("return this")();a=function(){return u.Date.now()};var f={},s={},v={},d=/\s/;v=function(e){for(var t=e.length;t--&&d.test(e.charAt(t)););return t};var g=/^\s+/;s=function(e){return e?e.slice(0,v(e)+1).replace(g,""):e};var m,p={},y={};m=(u=l).Symbol;var b={},S=Object.prototype,h=S.hasOwnProperty,j=S.toString,O=m?m.toStringTag:void 0;b=function(e){var t=h.call(e,O),n=e[O];try{e[O]=void 0;var r=!0}catch(e){}var o=j.call(e);return r&&(t?e[O]=n:delete e[O]),o};var T={},w=Object.prototype.toString;T=function(e){return w.call(e)};var x=m?m.toStringTag:void 0;y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?b(e):T(e)};var N={};N=function(e){return null!=e&&"object"==typeof e};p=function(e){return"symbol"==typeof e||N(e)&&"[object Symbol]"==y(e)};var E=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,I=/^0o[0-7]+$/i,M=parseInt;f=function(e){if("number"==typeof e)return e;if(p(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=s(e);var n=$.test(e);return n||I.test(e)?M(e.slice(2),n?2:8):E.test(e)?NaN:+e};var q=Math.max,J=Math.min;r=function(e,t,n){var r,i,u,c,l,s,v=0,d=!1,g=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,v=t,c=e.apply(o,n)}function y(e){return v=e,l=setTimeout(S,t),d?p(e):c}function b(e){var n=e-s;return void 0===s||n>=t||n<0||g&&e-v>=u}function S(){var e=a();if(b(e))return h(e);l=setTimeout(S,function(e){var n=t-(e-s);return g?J(n,u-(e-v)):n}(e))}function h(e){return l=void 0,m&&r?p(e):(r=i=void 0,c)}function j(){var e=a(),n=b(e);if(r=arguments,i=this,s=e,n){if(void 0===l)return y(s);if(g)return clearTimeout(l),l=setTimeout(S,t),p(s)}return void 0===l&&(l=setTimeout(S,t)),c}return t=f(t)||0,o(n)&&(d=!!n.leading,u=(g="maxWait"in n)?q(f(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==l&&clearTimeout(l),v=0,r=s=i=l=void 0},j.flush=function(){return void 0===l?c:h(a())},j};t=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:i,maxWait:t,trailing:a})};const W=document.querySelector("form"),D=document.querySelector("input"),G=document.querySelector("textarea"),L="feedback-form-state";W.addEventListener("input",e(t)((()=>{const e={email:D.value,message:G.value};localStorage.setItem(L,JSON.stringify(e))}),500)),W.addEventListener("submit",(e=>{try{e.preventDefault();const t=localStorage.getItem(L);if(null===t)return;{const e=JSON.parse(t);console.log(`Object: ${localStorage.getItem(L)}, Email: ${e.email}, Message: ${e.message}`),W.reset(),localStorage.clear()}}catch(e){console.error("Get state error: ",e.message)}})),function(){try{const e=localStorage.getItem(L);if(null===e)return;{const t=JSON.parse(e);D.value=t.email,G.value=t.message}}catch(e){console.error("Get state error: ",e.message)}}();
//# sourceMappingURL=03-feedback.b677121f.js.map