!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={},o=[],i=[];function l(e,t){var n,l,a,p,u=i;for(p=arguments.length;p-- >2;)o.push(arguments[p]);for(t&&null!=t.children&&(o.length||o.push(t.children),delete t.children);o.length;)if((l=o.pop())&&void 0!==l.pop)for(p=l.length;p--;)o.push(l[p]);else"boolean"==typeof l&&(l=null),(a="function"!=typeof e)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(a=!1)),a&&n?u[u.length-1]+=l:u===i?u=[l]:u.push(l),n=a;var s=new function(){};return s.nodeName=e,s.children=u,s.attributes=null==t?void 0:t,s.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(s),s}function a(e,t){for(var n in t)e[n]=t[n];return e}var p="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var u=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,s=[];function c(e){!e._dirty&&(e._dirty=!0)&&1==s.push(e)&&(r.debounceRendering||p)(f)}function f(){var e,t=s;for(s=[];e=t.pop();)e._dirty&&L(e)}function d(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function v(e){var t=a({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===u.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,h,l):e.removeEventListener(t,h,l),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var a=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function h(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var y=[],b=0,g=!1,C=!1;function x(){for(var e;e=y.pop();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function N(e,t,n,r,o,i){b++||(g=null!=o&&void 0!==o.ownerSVGElement,C=null!=e&&!("__preactattr_"in e));var l=k(e,t,n,r,i);return o&&l.parentNode!==o&&o.appendChild(l),--b||(C=!1,i||x()),l}function k(e,t,n,r,o){var i=e,l=g;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),w(e,!0))),i.__preactattr_=!0,i;var a,p,u=t.nodeName;if("function"==typeof u)return function(e,t,n,r){var o=e&&e._component,i=o,l=e,a=o&&e._componentConstructor===t.nodeName,p=a,u=v(t);for(;o&&!p&&(o=o._parentComponent);)p=o.constructor===t.nodeName;o&&p&&(!r||o._component)?(T(o,u,3,n,r),e=o.base):(i&&!a&&(B(i),e=l=null),o=M(t.nodeName,u,n),e&&!o.nextBase&&(o.nextBase=e,l=null),T(o,u,1,n,r),e=o.base,l&&e!==l&&(l._component=null,w(l,!1)));return e}(e,t,n,r);if(g="svg"===u||"foreignObject"!==u&&g,u=String(u),(!e||!d(e,u))&&(a=u,(p=g?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,i=p,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),w(e,!0)}var s=i.firstChild,c=i.__preactattr_,f=t.children;if(null==c){c=i.__preactattr_={};for(var h=i.attributes,y=h.length;y--;)c[h[y].name]=h[y].value}return!C&&f&&1===f.length&&"string"==typeof f[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=f[0]&&(s.nodeValue=f[0]):(f&&f.length||null!=s)&&function(e,t,n,r,o){var i,l,a,p,u,s=e.childNodes,c=[],f={},v=0,m=0,h=s.length,y=0,b=t?t.length:0;if(0!==h)for(var g=0;g<h;g++){var C=s[g],x=C.__preactattr_,N=b&&x?C._component?C._component.__key:x.key:null;null!=N?(v++,f[N]=C):(x||(void 0!==C.splitText?!o||C.nodeValue.trim():o))&&(c[y++]=C)}if(0!==b)for(var g=0;g<b;g++){p=t[g],u=null;var N=p.key;if(null!=N)v&&void 0!==f[N]&&(u=f[N],f[N]=void 0,v--);else if(!u&&m<y)for(i=m;i<y;i++)if(void 0!==c[i]&&(S=l=c[i],M=o,"string"==typeof(P=p)||"number"==typeof P?void 0!==S.splitText:"string"==typeof P.nodeName?!S._componentConstructor&&d(S,P.nodeName):M||S._componentConstructor===P.nodeName)){u=l,c[i]=void 0,i===y-1&&y--,i===m&&m++;break}u=k(u,p,n,r),a=s[g],u&&u!==e&&u!==a&&(null==a?e.appendChild(u):u===a.nextSibling?_(a):e.insertBefore(u,a))}var S,P,M;if(v)for(var g in f)void 0!==f[g]&&w(f[g],!1);for(;m<=y;)void 0!==(u=c[y--])&&w(u,!1)}(i,f,n,r,C||null!=c.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||m(e,r,n[r],n[r]=void 0,g);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||m(e,r,n[r],n[r]=t[r],g)}(i,t.attributes,c),g=l,i}function w(e,t){var n=e._component;n?B(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||_(e),S(e))}function S(e){for(e=e.lastChild;e;){var t=e.previousSibling;w(e,!0),e=t}}var P={};function M(e,t,n){var r,o=P[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),j.call(r,t,n)):((r=new j(t,n)).constructor=e,r.render=U),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function U(e,t,n){return this.constructor(e,n)}function T(e,t,n,o,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?c(e):L(e,1,i)),e.__ref&&e.__ref(e))}function L(e,t,n,o){if(!e._disable){var i,l,p,u=e.props,s=e.state,c=e.context,f=e.prevProps||u,d=e.prevState||s,_=e.prevContext||c,m=e.base,h=e.nextBase,g=m||h,C=e._component,k=!1;if(m&&(e.props=f,e.state=d,e.context=_,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,s,c)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(u,s,c),e.props=u,e.state=s,e.context=c),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!k){i=e.render(u,s,c),e.getChildContext&&(c=a(a({},c),e.getChildContext()));var S,P,U=i&&i.nodeName;if("function"==typeof U){var j=v(i);(l=C)&&l.constructor===U&&j.key==l.__key?T(l,j,1,c,!1):(S=l,e._component=l=M(U,j,c),l.nextBase=l.nextBase||h,l._parentComponent=e,T(l,j,0,c,!1),L(l,1,n,!0)),P=l.base}else p=g,(S=C)&&(p=e._component=null),(g||1===t)&&(p&&(p._component=null),P=N(p,i,c,n||!m,g&&g.parentNode,!0));if(g&&P!==g&&l!==C){var O=g.parentNode;O&&P!==O&&(O.replaceChild(P,g),S||(g._component=null,w(g,!1)))}if(S&&B(S),e.base=P,P&&!o){for(var W=e,V=e;V=V._parentComponent;)(W=V).base=P;P._component=W,P._componentConstructor=W.constructor}}if(!m||n?y.unshift(e):k||(e.componentDidUpdate&&e.componentDidUpdate(f,d,_),r.afterUpdate&&r.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);b||o||x()}}function B(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?B(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,_(t),function(e){var t=e.constructor.name;(P[t]||(P[t]=[])).push(e)}(e),S(t)),e.__ref&&e.__ref(null)}function j(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function O(e,t,n){return N(n,e,{},!1,t,!1)}a(j.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=a({},n)),a(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),c(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),L(this,2)},render:function(){}});n(2);class W extends j{handleRoute(e){}render(){return l("div",{id:"app",className:"app-container"})}}let V;V=O(l(W,null),document.querySelector("#app"),V)},,function(e,t,n){}]);