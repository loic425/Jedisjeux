/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

 /*
 * # Semantic UI - 2.2.12
 * https://github.com/Semantic-Org/Semantic-UI
 * http://www.semantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){e.site=e.fn.site=function(i){var o,a,r=(new Date).getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1),d=e.isPlainObject(i)?e.extend(!0,{},e.site.settings,i):e.extend({},e.site.settings),f=d.namespace,m=d.error,g="module-"+f,v=e(n),p=v,h=this,b=p.data(g);return o={initialize:function(){o.instantiate()},instantiate:function(){o.verbose("Storing instance of site",o),b=o,p.data(g,o)},normalize:function(){o.fix.console(),o.fix.requestAnimationFrame()},fix:{console:function(){o.debug("Normalizing window.console"),void 0!==console&&void 0!==console.log||(o.verbose("Console not available, normalizing events"),o.disable.console()),void 0!==console.group&&void 0!==console.groupEnd&&void 0!==console.groupCollapsed||(o.verbose("Console group not available, normalizing events"),t.console.group=function(){},t.console.groupEnd=function(){},t.console.groupCollapsed=function(){}),void 0===console.markTimeline&&(o.verbose("Mark timeline not available, normalizing events"),t.console.markTimeline=function(){})},consoleClear:function(){o.debug("Disabling programmatic console clearing"),t.console.clear=function(){}},requestAnimationFrame:function(){o.debug("Normalizing requestAnimationFrame"),void 0===t.requestAnimationFrame&&(o.debug("RequestAnimationFrame not available, normalizing event"),t.requestAnimationFrame=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)})}},moduleExists:function(t){return void 0!==e.fn[t]&&void 0!==e.fn[t].settings},enabled:{modules:function(t){var n=[];return t=t||d.modules,e.each(t,function(e,t){o.moduleExists(t)&&n.push(t)}),n}},disabled:{modules:function(t){var n=[];return t=t||d.modules,e.each(t,function(e,t){o.moduleExists(t)||n.push(t)}),n}},change:{setting:function(t,n,i,a){i="string"==typeof i?"all"===i?d.modules:[i]:i||d.modules,a=void 0===a||a,e.each(i,function(i,r){var s,l=!o.moduleExists(r)||(e.fn[r].settings.namespace||!1);o.moduleExists(r)&&(o.verbose("Changing default setting",t,n,r),e.fn[r].settings[t]=n,a&&l&&(s=e(":data(module-"+l+")"),s.length>0&&(o.verbose("Modifying existing settings",s),s[r]("setting",t,n))))})},settings:function(t,n,i){n="string"==typeof n?[n]:n||d.modules,i=void 0===i||i,e.each(n,function(n,a){var r;o.moduleExists(a)&&(o.verbose("Changing default setting",t,a),e.extend(!0,e.fn[a].settings,t),i&&f&&(r=e(":data(module-"+f+")"),r.length>0&&(o.verbose("Modifying existing settings",r),r[a]("setting",t))))})}},enable:{console:function(){o.console(!0)},debug:function(e,t){e=e||d.modules,o.debug("Enabling debug for modules",e),o.change.setting("debug",!0,e,t)},verbose:function(e,t){e=e||d.modules,o.debug("Enabling verbose debug for modules",e),o.change.setting("verbose",!0,e,t)}},disable:{console:function(){o.console(!1)},debug:function(e,t){e=e||d.modules,o.debug("Disabling debug for modules",e),o.change.setting("debug",!1,e,t)},verbose:function(e,t){e=e||d.modules,o.debug("Disabling verbose debug for modules",e),o.change.setting("verbose",!1,e,t)}},console:function(e){if(e){if(void 0===b.cache.console)return void o.error(m.console);o.debug("Restoring console function"),t.console=b.cache.console}else o.debug("Disabling console function"),b.cache.console=t.console,t.console={clear:function(){},error:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},info:function(){},log:function(){},markTimeline:function(){},warn:function(){}}},destroy:function(){o.verbose("Destroying previous site for",p),p.removeData(g)},cache:{},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,d,t);else{if(void 0===n)return d[t];d[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,o,t);else{if(void 0===n)return o[t];o[t]=n}},debug:function(){d.debug&&(d.performance?o.performance.log(arguments):(o.debug=Function.prototype.bind.call(console.info,console,d.name+":"),o.debug.apply(console,arguments)))},verbose:function(){d.verbose&&d.debug&&(d.performance?o.performance.log(arguments):(o.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),o.verbose.apply(console,arguments)))},error:function(){o.error=Function.prototype.bind.call(console.error,console,d.name+":"),o.error.apply(console,arguments)},performance:{log:function(e){var t,n,i;d.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Element:h,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(o.performance.timer),o.performance.timer=setTimeout(o.performance.display,500)},display:function(){var t=d.name+":",n=0;r=!1,clearTimeout(o.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,i){var r,s,l,c=b;return n=n||u,i=h||i,"string"==typeof t&&void 0!==c&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,i){var a=n!=r?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(void 0!==c[a])return s=c[a],!1;if(!e.isPlainObject(c[i])||n==r)return void 0!==c[i]?(s=c[i],!1):(o.error(m.method,t),!1);c=c[i]}})),e.isFunction(s)?l=s.apply(i,n):void 0!==s&&(l=s),e.isArray(a)?a.push(l):void 0!==a?a=[a,l]:void 0!==l&&(a=l),s}},c?(void 0===b&&o.initialize(),o.invoke(l)):(void 0!==b&&o.destroy(),o.initialize()),void 0!==a?a:this},e.site.settings={name:"Site",namespace:"site",error:{console:"Console cannot be restored, most likely it was overwritten outside of module",method:"The method you called is not defined."},debug:!1,verbose:!1,performance:!0,modules:["accordion","api","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","rating","shape","sidebar","state","sticky","tab","transition","visit","visibility"],siteNamespace:"site",namespaceStub:{cache:{},config:{},sections:{},section:{},utilities:{}}},e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,i){return!!e.data(t,i[3])}})}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.form=function(t){var i,o=e(this),a=o.selector||"",r=(new Date).getTime(),s=[],l=arguments[0],c=arguments[1],u="string"==typeof l,d=[].slice.call(arguments,1);return o.each(function(){var f,m,g,v,p,h,b,y,x,C,w,k,S,T,A,R,P,E,F,O=e(this),D=this,q=[],j=!1;F={initialize:function(){F.get.settings(),u?(void 0===E&&F.instantiate(),F.invoke(l)):(void 0!==E&&E.invoke("destroy"),F.verbose("Initializing form validation",O,y),F.bindEvents(),F.set.defaults(),F.instantiate())},instantiate:function(){F.verbose("Storing instance of module",F),E=F,O.data(R,F)},destroy:function(){F.verbose("Destroying previous module",E),F.removeEvents(),O.removeData(R)},refresh:function(){F.verbose("Refreshing selector cache"),f=O.find(w.field),m=O.find(w.group),g=O.find(w.message),v=O.find(w.prompt),p=O.find(w.submit),h=O.find(w.clear),b=O.find(w.reset)},submit:function(){F.verbose("Submitting form",O),O.submit()},attachEvents:function(t,n){n=n||"submit",e(t).on("click"+P,function(e){F[n](),e.preventDefault()})},bindEvents:function(){F.verbose("Attaching form events"),O.on("submit"+P,F.validate.form).on("blur"+P,w.field,F.event.field.blur).on("click"+P,w.submit,F.submit).on("click"+P,w.reset,F.reset).on("click"+P,w.clear,F.clear),y.keyboardShortcuts&&O.on("keydown"+P,w.field,F.event.field.keydown),f.each(function(){var t=e(this),n=t.prop("type"),i=F.get.changeEvent(n,t);e(this).on(i+P,F.event.field.change)})},clear:function(){f.each(function(){var t=e(this),n=t.parent(),i=t.closest(m),o=i.find(w.prompt),a=t.data(C.defaultValue)||"",r=n.is(w.uiCheckbox),s=n.is(w.uiDropdown);i.hasClass(k.error)&&(F.verbose("Resetting error on field",i),i.removeClass(k.error),o.remove()),s?(F.verbose("Resetting dropdown value",n,a),n.dropdown("clear")):r?t.prop("checked",!1):(F.verbose("Resetting field value",t,a),t.val(""))})},reset:function(){f.each(function(){var t=e(this),n=t.parent(),i=t.closest(m),o=i.find(w.prompt),a=t.data(C.defaultValue),r=n.is(w.uiCheckbox),s=n.is(w.uiDropdown),l=i.hasClass(k.error);void 0!==a&&(l&&(F.verbose("Resetting error on field",i),i.removeClass(k.error),o.remove()),s?(F.verbose("Resetting dropdown value",n,a),n.dropdown("restore defaults")):r?(F.verbose("Resetting checkbox value",n,a),t.prop("checked",a)):(F.verbose("Resetting field value",t,a),t.val(a)))})},determine:{isValid:function(){var t=!0;return e.each(x,function(e,n){F.validate.field(n,e,!0)||(t=!1)}),t}},is:{bracketedRule:function(e){return e.type&&e.type.match(y.regExp.bracket)},shorthandFields:function(e){var t=Object.keys(e),n=e[t[0]];return F.is.shorthandRules(n)},shorthandRules:function(t){return"string"==typeof t||e.isArray(t)},empty:function(e){return!e||0===e.length||(e.is('input[type="checkbox"]')?!e.is(":checked"):F.is.blank(e))},blank:function(t){return""===e.trim(t.val())},valid:function(t){var n=!0;return t?(F.verbose("Checking if field is valid",t),F.validate.field(x[t],t,!1)):(F.verbose("Checking if form is valid"),e.each(x,function(e,t){F.is.valid(e)||(n=!1)}),n)}},removeEvents:function(){O.off(P),f.off(P),p.off(P),f.off(P)},event:{field:{keydown:function(t){var n=e(this),i=t.which,o=n.is(w.input),a=n.is(w.checkbox),r=n.closest(w.uiDropdown).length>0,s={enter:13,escape:27};i==s.escape&&(F.verbose("Escape key pressed blurring field"),n.blur()),t.ctrlKey||i!=s.enter||!o||r||a||(j||(n.one("keyup"+P,F.event.field.keyup),F.submit(),F.debug("Enter pressed on input submitting form")),j=!0)},keyup:function(){j=!1},blur:function(t){var n=e(this),i=n.closest(m),o=F.get.validation(n);i.hasClass(k.error)?(F.debug("Revalidating field",n,o),o&&F.validate.field(o)):"blur"!=y.on&&"change"!=y.on||o&&F.validate.field(o)},change:function(t){var n=e(this),i=n.closest(m),o=F.get.validation(n);o&&("change"==y.on||i.hasClass(k.error)&&y.revalidate)&&(clearTimeout(F.timer),F.timer=setTimeout(function(){F.debug("Revalidating field",n,F.get.validation(n)),F.validate.field(o)},y.delay))}}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!F.is.bracketedRule(e))&&(void 0!==e.value?e.value:e.type.match(y.regExp.bracket)[1]+"")},ruleName:function(e){return F.is.bracketedRule(e)?e.type.replace(e.type.match(y.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":F.get.inputEvent()},inputEvent:function(){return void 0!==n.createElement("input").oninput?"input":void 0!==n.createElement("input").onpropertychange?"propertychange":"keyup"},fieldsFromShorthand:function(t){var n={};return e.each(t,function(t,i){"string"==typeof i&&(i=[i]),n[t]={rules:[]},e.each(i,function(e,i){n[t].rules.push({type:i})})}),n},prompt:function(e,t){var n,i,o,a=F.get.ruleName(e),r=F.get.ancillaryValue(e),s=e.prompt||y.prompt[a]||y.text.unspecifiedRule,l=-1!==s.search("{value}"),c=-1!==s.search("{name}");return(c||l)&&(i=F.get.field(t.identifier)),l&&(s=s.replace("{value}",i.val())),c&&(n=i.closest(w.group).find("label").eq(0),o=1==n.length?n.text():i.prop("placeholder")||y.text.unspecifiedField,s=s.replace("{name}",o)),s=s.replace("{identifier}",t.identifier),s=s.replace("{ruleValue}",r),e.prompt||F.verbose("Using default validation prompt for type",s,a),s},settings:function(){if(e.isPlainObject(t)){var n=Object.keys(t),i=n.length>0&&(void 0!==t[n[0]].identifier&&void 0!==t[n[0]].rules);i?(y=e.extend(!0,{},e.fn.form.settings,c),x=e.extend({},e.fn.form.settings.defaults,t),F.error(y.error.oldSyntax,D),F.verbose("Extending settings from legacy parameters",x,y)):(t.fields&&F.is.shorthandFields(t.fields)&&(t.fields=F.get.fieldsFromShorthand(t.fields)),y=e.extend(!0,{},e.fn.form.settings,t),x=e.extend({},e.fn.form.settings.defaults,y.fields),F.verbose("Extending settings",x,y))}else y=e.fn.form.settings,x=e.fn.form.settings.defaults,F.verbose("Using default form validation",x,y);A=y.namespace,C=y.metadata,w=y.selector,k=y.className,S=y.regExp,T=y.error,R="module-"+A,P="."+A,E=O.data(R),F.refresh()},field:function(t){return F.verbose("Finding field with identifier",t),t=F.escape.string(t),f.filter("#"+t).length>0?f.filter("#"+t):f.filter('[name="'+t+'"]').length>0?f.filter('[name="'+t+'"]'):f.filter('[name="'+t+'[]"]').length>0?f.filter('[name="'+t+'[]"]'):f.filter("[data-"+C.validate+'="'+t+'"]').length>0?f.filter("[data-"+C.validate+'="'+t+'"]'):e("<input/>")},fields:function(t){var n=e();return e.each(t,function(e,t){n=n.add(F.get.field(t))}),n},validation:function(t){var n,i;return!!x&&(e.each(x,function(e,o){i=o.identifier||e,F.get.field(i)[0]==t[0]&&(o.identifier=i,n=o)}),n||!1)},value:function(e){var t,n=[];return n.push(e),t=F.get.values.call(D,n),t[e]},values:function(t){var n=e.isArray(t)?F.get.fields(t):f,i={};return n.each(function(t,n){var o=e(n),a=(o.prop("type"),o.prop("name")),r=o.val(),s=o.is(w.checkbox),l=o.is(w.radio),c=-1!==a.indexOf("[]"),u=!!s&&o.is(":checked");a&&(c?(a=a.replace("[]",""),i[a]||(i[a]=[]),s?u?i[a].push(r||!0):i[a].push(!1):i[a].push(r)):l?void 0===i[a]&&(i[a]=!!u):i[a]=s?!!u&&(r||!0):r)}),i}},has:{field:function(e){return F.verbose("Checking for existence of a field with identifier",e),e=F.escape.string(e),"string"!=typeof e&&F.error(T.identifier,e),f.filter("#"+e).length>0||(f.filter('[name="'+e+'"]').length>0||f.filter("[data-"+C.validate+'="'+e+'"]').length>0)}},escape:{string:function(e){return e=String(e),e.replace(S.escape,"\\$&")}},add:{rule:function(e,t){F.add.field(e,t)},field:function(t,n){var i={};F.is.shorthandRules(n)?(n=e.isArray(n)?n:[n],i[t]={rules:[]},e.each(n,function(e,n){i[t].rules.push({type:n})})):i[t]=n,x=e.extend({},x,i),F.debug("Adding rules",i,x)},fields:function(t){var n;n=t&&F.is.shorthandFields(t)?F.get.fieldsFromShorthand(t):t,x=e.extend({},x,n)},prompt:function(t,n){var i=F.get.field(t),o=i.closest(m),a=o.children(w.prompt),r=0!==a.length;n="string"==typeof n?[n]:n,F.verbose("Adding field error state",t),o.addClass(k.error),y.inline&&(r||(a=y.templates.prompt(n),a.appendTo(o)),a.html(n[0]),r?F.verbose("Inline errors are disabled, no inline error added",t):y.transition&&void 0!==e.fn.transition&&O.transition("is supported")?(F.verbose("Displaying error with css transition",y.transition),a.transition(y.transition+" in",y.duration)):(F.verbose("Displaying error with fallback javascript animation"),a.fadeIn(y.duration)))},errors:function(e){F.debug("Adding form error messages",e),F.set.error(),g.html(y.templates.error(e))}},remove:{rule:function(t,n){var i=e.isArray(n)?n:[n];if(void 0==n)return F.debug("Removed all rules"),void(x[t].rules=[]);void 0!=x[t]&&e.isArray(x[t].rules)&&e.each(x[t].rules,function(e,n){-1!==i.indexOf(n.type)&&(F.debug("Removed rule",n.type),x[t].rules.splice(e,1))})},field:function(t){var n=e.isArray(t)?t:[t];e.each(n,function(e,t){F.remove.rule(t)})},rules:function(t,n){e.isArray(t)?e.each(fields,function(e,t){F.remove.rule(t,n)}):F.remove.rule(t,n)},fields:function(e){F.remove.field(e)},prompt:function(t){var n=F.get.field(t),i=n.closest(m),o=i.children(w.prompt);i.removeClass(k.error),y.inline&&o.is(":visible")&&(F.verbose("Removing prompt for field",t),y.transition&&void 0!==e.fn.transition&&O.transition("is supported")?o.transition(y.transition+" out",y.duration,function(){o.remove()}):o.fadeOut(y.duration,function(){o.remove()}))}},set:{success:function(){O.removeClass(k.error).addClass(k.success)},defaults:function(){f.each(function(){var t=e(this),n=t.filter(w.checkbox).length>0,i=n?t.is(":checked"):t.val();t.data(C.defaultValue,i)})},error:function(){O.removeClass(k.success).addClass(k.error)},value:function(e,t){var n={};return n[e]=t,F.set.values.call(D,n)},values:function(t){e.isEmptyObject(t)||e.each(t,function(t,n){var i,o=F.get.field(t),a=o.parent(),r=e.isArray(n),s=a.is(w.uiCheckbox),l=a.is(w.uiDropdown),c=o.is(w.radio)&&s,u=o.length>0;u&&(r&&s?(F.verbose("Selecting multiple",n,o),a.checkbox("uncheck"),e.each(n,function(e,t){i=o.filter('[value="'+t+'"]'),a=i.parent(),i.length>0&&a.checkbox("check")})):c?(F.verbose("Selecting radio value",n,o),o.filter('[value="'+n+'"]').parent(w.uiCheckbox).checkbox("check")):s?(F.verbose("Setting checkbox value",n,a),!0===n?a.checkbox("check"):a.checkbox("uncheck")):l?(F.verbose("Setting dropdown value",n,a),a.dropdown("set selected",n)):(F.verbose("Setting field value",n,o),o.val(n)))})}},validate:{form:function(e,t){var n=F.get.values();if(j)return!1;if(q=[],F.determine.isValid()){if(F.debug("Form has no validation errors, submitting"),F.set.success(),!0!==t)return y.onSuccess.call(D,e,n)}else if(F.debug("Form has errors"),F.set.error(),y.inline||F.add.errors(q),void 0!==O.data("moduleApi")&&e.stopImmediatePropagation(),!0!==t)return y.onFailure.call(D,q,n)},field:function(t,n,i){i=void 0===i||i,"string"==typeof t&&(F.verbose("Validating field",t),n=t,t=x[t]);var o=t.identifier||n,a=F.get.field(o),r=!!t.depends&&F.get.field(t.depends),s=!0,l=[];return t.identifier||(F.debug("Using field name as identifier",o),t.identifier=o),a.prop("disabled")?(F.debug("Field is disabled. Skipping",o),s=!0):t.optional&&F.is.blank(a)?(F.debug("Field is optional and blank. Skipping",o),s=!0):t.depends&&F.is.empty(r)?(F.debug("Field depends on another value that is not present or empty. Skipping",r),s=!0):void 0!==t.rules&&e.each(t.rules,function(e,n){F.has.field(o)&&!F.validate.rule(t,n)&&(F.debug("Field is invalid",o,n.type),l.push(F.get.prompt(n,t)),s=!1)}),s?(i&&(F.remove.prompt(o,l),y.onValid.call(a)),!0):(i&&(q=q.concat(l),F.add.prompt(o,l),y.onInvalid.call(a,l)),!1)},rule:function(t,n){var i=F.get.field(t.identifier),o=(n.type,i.val()),a=F.get.ancillaryValue(n),r=F.get.ruleName(n),s=y.rules[r];return e.isFunction(s)?(o=void 0===o||""===o||null===o?"":e.trim(o+""),s.call(i,o,a)):void F.error(T.noRule,r)}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,y,t);else{if(void 0===n)return y[t];y[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,F,t);else{if(void 0===n)return F[t];F[t]=n}},debug:function(){!y.silent&&y.debug&&(y.performance?F.performance.log(arguments):(F.debug=Function.prototype.bind.call(console.info,console,y.name+":"),F.debug.apply(console,arguments)))},verbose:function(){!y.silent&&y.verbose&&y.debug&&(y.performance?F.performance.log(arguments):(F.verbose=Function.prototype.bind.call(console.info,console,y.name+":"),F.verbose.apply(console,arguments)))},error:function(){y.silent||(F.error=Function.prototype.bind.call(console.error,console,y.name+":"),F.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;y.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:D,"Execution Time":n})),clearTimeout(F.performance.timer),F.performance.timer=setTimeout(F.performance.display,500)},display:function(){var t=y.name+":",n=0;r=!1,clearTimeout(F.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),o.length>1&&(t+=" ("+o.length+")"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,o){var a,r,s,l=E;return n=n||d,o=D||o,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]&&(r=l[i],!1);l=l[i]}})),e.isFunction(r)?s=r.apply(o,n):void 0!==r&&(s=r),e.isArray(i)?i.push(s):void 0!==i?i=[i,s]:void 0!==s&&(i=s),r}},F.initialize()}),void 0!==i?i:this},e.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,transition:"scale",duration:200,onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},metadata:{defaultValue:"default",validate:"validate"},regExp:{htmlID:/^[a-zA-Z][\w:.-]*$/g,bracket:/\[(.*)\]/i,decimal:/^\d+\.?\d*$/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field"},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} cannot contain "{ruleValue}"',containExactly:'{name} cannot contain exactly "{ruleValue}"',doesntContain:'{name} must contain  "{ruleValue}"',doesntContainExactly:'{name} must contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown"},className:{error:"error",label:"ui prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."},templates:{error:function(t){var n='<ul class="list">';return e.each(t,function(e,t){n+="<li>"+t+"</li>"}),n+="</ul>",e(n)},prompt:function(t){return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0])}},rules:{empty:function(t){return!(void 0===t||""===t||e.isArray(t)&&0===t.length)},checked:function(){return e(this).filter(":checked").length>0},email:function(t){return e.fn.form.settings.regExp.email.test(t)},url:function(t){return e.fn.form.settings.regExp.url.test(t)},regExp:function(t,n){if(n instanceof RegExp)return t.match(n);var i,o=n.match(e.fn.form.settings.regExp.flags);return o&&(n=o.length>=2?o[1]:n,i=o.length>=3?o[2]:""),t.match(new RegExp(n,i))},integer:function(t,n){var i,o,a,r=e.fn.form.settings.regExp.integer;return n&&-1===["",".."].indexOf(n)&&(-1==n.indexOf("..")?r.test(n)&&(i=o=n-0):(a=n.split("..",2),r.test(a[0])&&(i=a[0]-0),r.test(a[1])&&(o=a[1]-0))),r.test(t)&&(void 0===i||t>=i)&&(void 0===o||t<=o)},decimal:function(t){return e.fn.form.settings.regExp.decimal.test(t)},number:function(t){return e.fn.form.settings.regExp.number.test(t)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,(e="string"==typeof e?e.toLowerCase():e)==t},isExactly:function(e,t){return e==t},not:function(e,t){return e="string"==typeof e?e.toLowerCase():e,t="string"==typeof t?t.toLowerCase():t,e!=t},notExactly:function(e,t){return e!=t},contains:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n,"i"))},containsExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n))},doesntContain:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n,"i"))},doesntContainExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n))},minLength:function(e,t){return void 0!==e&&e.length>=t},length:function(e,t){return void 0!==e&&e.length>=t},exactLength:function(e,t){return void 0!==e&&e.length==t},maxLength:function(e,t){return void 0!==e&&e.length<=t},match:function(t,n){var i;e(this);return e('[data-validate="'+n+'"]').length>0?i=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?i=e("#"+n).val():e('[name="'+n+'"]').length>0?i=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(i=e('[name="'+n+'[]"]')),void 0!==i&&t.toString()==i.toString()},different:function(t,n){var i;e(this);return e('[data-validate="'+n+'"]').length>0?i=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?i=e("#"+n).val():e('[name="'+n+'"]').length>0?i=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(i=e('[name="'+n+'[]"]')),void 0!==i&&t.toString()!==i.toString()},creditCard:function(t,n){var i,o,a={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},r={},s=!1,l="string"==typeof n&&n.split(",");if("string"==typeof t&&0!==t.length){if(t=t.replace(/[\-]/g,""),l&&(e.each(l,function(n,i){(o=a[i])&&(r={length:-1!==e.inArray(t.length,o.length),pattern:-1!==t.search(o.pattern)},r.length&&r.pattern&&(s=!0))}),!s))return!1;if(i={number:-1!==e.inArray(t.length,a.unionPay.length),pattern:-1!==t.search(a.unionPay.pattern)},i.number&&i.pattern)return!0;for(var c=t.length,u=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],f=0;c--;)f+=d[u][parseInt(t.charAt(c),10)],u^=1;return f%10==0&&f>0}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?-1===e.search(","):e.split(",").length<=t)}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.accordion=function(n){var i,o=e(this),a=(new Date).getTime(),r=[],s=arguments[0],l="string"==typeof s,c=[].slice.call(arguments,1);t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame;return o.each(function(){var u,d,f=e.isPlainObject(n)?e.extend(!0,{},e.fn.accordion.settings,n):e.extend({},e.fn.accordion.settings),m=f.className,g=f.namespace,v=f.selector,p=f.error,h="."+g,b="module-"+g,y=o.selector||"",x=e(this),C=x.find(v.title),w=x.find(v.content),k=this,S=x.data(b);d={initialize:function(){d.debug("Initializing",x),d.bind.events(),f.observeChanges&&d.observeChanges(),d.instantiate()},instantiate:function(){S=d,x.data(b,d)},destroy:function(){d.debug("Destroying previous instance",x),x.off(h).removeData(b)},refresh:function(){C=x.find(v.title),w=x.find(v.content)},observeChanges:function(){"MutationObserver"in t&&(u=new MutationObserver(function(e){d.debug("DOM tree modified, updating selector cache"),d.refresh()}),u.observe(k,{childList:!0,subtree:!0}),d.debug("Setting up mutation observer",u))},bind:{events:function(){d.debug("Binding delegated events"),x.on(f.on+h,v.trigger,d.event.click)}},event:{click:function(){d.toggle.call(this)}},toggle:function(t){var n=void 0!==t?"number"==typeof t?C.eq(t):e(t).closest(v.title):e(this).closest(v.title),i=n.next(w),o=i.hasClass(m.animating),a=i.hasClass(m.active),r=a&&!o,s=!a&&o;d.debug("Toggling visibility of content",n),r||s?f.collapsible?d.close.call(n):d.debug("Cannot close accordion content collapsing is disabled"):d.open.call(n)},open:function(t){var n=void 0!==t?"number"==typeof t?C.eq(t):e(t).closest(v.title):e(this).closest(v.title),i=n.next(w),o=i.hasClass(m.animating);if(i.hasClass(m.active)||o)return void d.debug("Accordion already open, skipping",i);d.debug("Opening accordion content",n),f.onOpening.call(i),f.exclusive&&d.closeOthers.call(n),n.addClass(m.active),i.stop(!0,!0).addClass(m.animating),f.animateChildren&&(void 0!==e.fn.transition&&x.transition("is supported")?i.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:f.debug,verbose:f.verbose,duration:f.duration}):i.children().stop(!0,!0).animate({opacity:1},f.duration,d.resetOpacity)),i.slideDown(f.duration,f.easing,function(){i.removeClass(m.animating).addClass(m.active),d.reset.display.call(this),f.onOpen.call(this),f.onChange.call(this)})},close:function(t){var n=void 0!==t?"number"==typeof t?C.eq(t):e(t).closest(v.title):e(this).closest(v.title),i=n.next(w),o=i.hasClass(m.animating),a=i.hasClass(m.active),r=!a&&o,s=a&&o;!a&&!r||s||(d.debug("Closing accordion content",i),f.onClosing.call(i),n.removeClass(m.active),i.stop(!0,!0).addClass(m.animating),f.animateChildren&&(void 0!==e.fn.transition&&x.transition("is supported")?i.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:f.debug,verbose:f.verbose,duration:f.duration}):i.children().stop(!0,!0).animate({opacity:0},f.duration,d.resetOpacity)),i.slideUp(f.duration,f.easing,function(){i.removeClass(m.animating).removeClass(m.active),d.reset.display.call(this),f.onClose.call(this),f.onChange.call(this)}))},closeOthers:function(t){var n,i,o,a=void 0!==t?C.eq(t):e(this).closest(v.title),r=a.parents(v.content).prev(v.title),s=a.closest(v.accordion),l=v.title+"."+m.active+":visible",c=v.content+"."+m.active+":visible";f.closeNested?(n=s.find(l).not(r),o=n.next(w)):(n=s.find(l).not(r),i=s.find(c).find(l).not(r),n=n.not(i),o=n.next(w)),n.length>0&&(d.debug("Exclusive enabled, closing other content",n),n.removeClass(m.active),o.removeClass(m.animating).stop(!0,!0),f.animateChildren&&(void 0!==e.fn.transition&&x.transition("is supported")?o.children().transition({animation:"fade out",useFailSafe:!0,debug:f.debug,verbose:f.verbose,duration:f.duration}):o.children().stop(!0,!0).animate({opacity:0},f.duration,d.resetOpacity)),o.slideUp(f.duration,f.easing,function(){e(this).removeClass(m.active),d.reset.display.call(this)}))},reset:{display:function(){d.verbose("Removing inline display from element",this),e(this).css("display",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")},opacity:function(){d.verbose("Removing inline opacity from element",this),e(this).css("opacity",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")}},setting:function(t,n){if(d.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,f,t);else{if(void 0===n)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],n):f[t]=n}},internal:function(t,n){if(d.debug("Changing internal",t,n),void 0===n)return d[t];e.isPlainObject(t)?e.extend(!0,d,t):d[t]=n},debug:function(){!f.silent&&f.debug&&(f.performance?d.performance.log(arguments):(d.debug=Function.prototype.bind.call(console.info,console,f.name+":"),d.debug.apply(console,arguments)))},verbose:function(){
!f.silent&&f.verbose&&f.debug&&(f.performance?d.performance.log(arguments):(d.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),d.verbose.apply(console,arguments)))},error:function(){f.silent||(d.error=Function.prototype.bind.call(console.error,console,f.name+":"),d.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;f.performance&&(t=(new Date).getTime(),i=a||t,n=t-i,a=t,r.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:k,"Execution Time":n})),clearTimeout(d.performance.timer),d.performance.timer=setTimeout(d.performance.display,500)},display:function(){var t=f.name+":",n=0;a=!1,clearTimeout(d.performance.timer),e.each(r,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",y&&(t+=" '"+y+"'"),(void 0!==console.group||void 0!==console.table)&&r.length>0&&(console.groupCollapsed(t),console.table?console.table(r):e.each(r,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),r=[]}},invoke:function(t,n,o){var a,r,s,l=S;return n=n||c,o=k||o,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(r=l[i],!1):(d.error(p.method,t),!1);l=l[i]}})),e.isFunction(r)?s=r.apply(o,n):void 0!==r&&(s=r),e.isArray(i)?i.push(s):void 0!==i?i=[i,s]:void 0!==s&&(i=s),r}},l?(void 0===S&&d.initialize(),d.invoke(s)):(void 0!==S&&S.invoke("destroy"),d.initialize())}),void 0!==i?i:this},e.fn.accordion.settings={name:"Accordion",namespace:"accordion",silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",observeChanges:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpening:function(){},onOpen:function(){},onClosing:function(){},onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},e.extend(e.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.checkbox=function(i){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var a,f,m=e.extend(!0,{},e.fn.checkbox.settings,i),g=m.className,v=m.namespace,p=m.selector,h=m.error,b="."+v,y="module-"+v,x=e(this),C=e(this).children(p.label),w=e(this).children(p.input),k=w[0],S=!1,T=!1,A=x.data(y),R=this;f={initialize:function(){f.verbose("Initializing checkbox",m),f.create.label(),f.bind.events(),f.set.tabbable(),f.hide.input(),f.observeChanges(),f.instantiate(),f.setup()},instantiate:function(){f.verbose("Storing instance of module",f),A=f,x.data(y,f)},destroy:function(){f.verbose("Destroying module"),f.unbind.events(),f.show.input(),x.removeData(y)},fix:{reference:function(){x.is(p.input)&&(f.debug("Behavior called on <input> adjusting invoked element"),x=x.closest(p.checkbox),f.refresh())}},setup:function(){f.set.initialLoad(),f.is.indeterminate()?(f.debug("Initial value is indeterminate"),f.indeterminate()):f.is.checked()?(f.debug("Initial value is checked"),f.check()):(f.debug("Initial value is unchecked"),f.uncheck()),f.remove.initialLoad()},refresh:function(){C=x.children(p.label),w=x.children(p.input),k=w[0]},hide:{input:function(){f.verbose("Modifying <input> z-index to be unselectable"),w.addClass(g.hidden)}},show:{input:function(){f.verbose("Modifying <input> z-index to be selectable"),w.removeClass(g.hidden)}},observeChanges:function(){"MutationObserver"in t&&(a=new MutationObserver(function(e){f.debug("DOM tree modified, updating selector cache"),f.refresh()}),a.observe(R,{childList:!0,subtree:!0}),f.debug("Setting up mutation observer",a))},attachEvents:function(t,n){var i=e(t);n=e.isFunction(f[n])?f[n]:f.toggle,i.length>0?(f.debug("Attaching checkbox events to element",t,n),i.on("click"+b,n)):f.error(h.notFound)},event:{click:function(t){var n=e(t.target);return n.is(p.input)?void f.verbose("Using default check action on initialized checkbox"):n.is(p.link)?void f.debug("Clicking link inside checkbox, skipping toggle"):(f.toggle(),w.focus(),void t.preventDefault())},keydown:function(e){var t=e.which,n={enter:13,space:32,escape:27};t==n.escape?(f.verbose("Escape key pressed blurring field"),w.blur(),T=!0):e.ctrlKey||t!=n.space&&t!=n.enter?T=!1:(f.verbose("Enter/space key pressed, toggling checkbox"),f.toggle(),T=!0)},keyup:function(e){T&&e.preventDefault()}},check:function(){f.should.allowCheck()&&(f.debug("Checking checkbox",w),f.set.checked(),f.should.ignoreCallbacks()||(m.onChecked.call(k),m.onChange.call(k)))},uncheck:function(){f.should.allowUncheck()&&(f.debug("Unchecking checkbox"),f.set.unchecked(),f.should.ignoreCallbacks()||(m.onUnchecked.call(k),m.onChange.call(k)))},indeterminate:function(){if(f.should.allowIndeterminate())return void f.debug("Checkbox is already indeterminate");f.debug("Making checkbox indeterminate"),f.set.indeterminate(),f.should.ignoreCallbacks()||(m.onIndeterminate.call(k),m.onChange.call(k))},determinate:function(){if(f.should.allowDeterminate())return void f.debug("Checkbox is already determinate");f.debug("Making checkbox determinate"),f.set.determinate(),f.should.ignoreCallbacks()||(m.onDeterminate.call(k),m.onChange.call(k))},enable:function(){if(f.is.enabled())return void f.debug("Checkbox is already enabled");f.debug("Enabling checkbox"),f.set.enabled(),m.onEnable.call(k),m.onEnabled.call(k)},disable:function(){if(f.is.disabled())return void f.debug("Checkbox is already disabled");f.debug("Disabling checkbox"),f.set.disabled(),m.onDisable.call(k),m.onDisabled.call(k)},get:{radios:function(){var t=f.get.name();return e('input[name="'+t+'"]').closest(p.checkbox)},otherRadios:function(){return f.get.radios().not(x)},name:function(){return w.attr("name")}},is:{initialLoad:function(){return S},radio:function(){return w.hasClass(g.radio)||"radio"==w.attr("type")},indeterminate:function(){return void 0!==w.prop("indeterminate")&&w.prop("indeterminate")},checked:function(){return void 0!==w.prop("checked")&&w.prop("checked")},disabled:function(){return void 0!==w.prop("disabled")&&w.prop("disabled")},enabled:function(){return!f.is.disabled()},determinate:function(){return!f.is.indeterminate()},unchecked:function(){return!f.is.checked()}},should:{allowCheck:function(){return f.is.determinate()&&f.is.checked()&&!f.should.forceCallbacks()?(f.debug("Should not allow check, checkbox is already checked"),!1):!1!==m.beforeChecked.apply(k)||(f.debug("Should not allow check, beforeChecked cancelled"),!1)},allowUncheck:function(){return f.is.determinate()&&f.is.unchecked()&&!f.should.forceCallbacks()?(f.debug("Should not allow uncheck, checkbox is already unchecked"),!1):!1!==m.beforeUnchecked.apply(k)||(f.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1)},allowIndeterminate:function(){return f.is.indeterminate()&&!f.should.forceCallbacks()?(f.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):!1!==m.beforeIndeterminate.apply(k)||(f.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1)},allowDeterminate:function(){return f.is.determinate()&&!f.should.forceCallbacks()?(f.debug("Should not allow determinate, checkbox is already determinate"),!1):!1!==m.beforeDeterminate.apply(k)||(f.debug("Should not allow determinate, beforeDeterminate cancelled"),!1)},forceCallbacks:function(){return f.is.initialLoad()&&m.fireOnInit},ignoreCallbacks:function(){return S&&!m.fireOnInit}},can:{change:function(){return!(x.hasClass(g.disabled)||x.hasClass(g.readOnly)||w.prop("disabled")||w.prop("readonly"))},uncheck:function(){return"boolean"==typeof m.uncheckable?m.uncheckable:!f.is.radio()}},set:{initialLoad:function(){S=!0},checked:function(){if(f.verbose("Setting class to checked"),x.removeClass(g.indeterminate).addClass(g.checked),f.is.radio()&&f.uncheckOthers(),!f.is.indeterminate()&&f.is.checked())return void f.debug("Input is already checked, skipping input property change");f.verbose("Setting state to checked",k),w.prop("indeterminate",!1).prop("checked",!0),f.trigger.change()},unchecked:function(){if(f.verbose("Removing checked class"),x.removeClass(g.indeterminate).removeClass(g.checked),!f.is.indeterminate()&&f.is.unchecked())return void f.debug("Input is already unchecked");f.debug("Setting state to unchecked"),w.prop("indeterminate",!1).prop("checked",!1),f.trigger.change()},indeterminate:function(){if(f.verbose("Setting class to indeterminate"),x.addClass(g.indeterminate),f.is.indeterminate())return void f.debug("Input is already indeterminate, skipping input property change");f.debug("Setting state to indeterminate"),w.prop("indeterminate",!0),f.trigger.change()},determinate:function(){if(f.verbose("Removing indeterminate class"),x.removeClass(g.indeterminate),f.is.determinate())return void f.debug("Input is already determinate, skipping input property change");f.debug("Setting state to determinate"),w.prop("indeterminate",!1)},disabled:function(){if(f.verbose("Setting class to disabled"),x.addClass(g.disabled),f.is.disabled())return void f.debug("Input is already disabled, skipping input property change");f.debug("Setting state to disabled"),w.prop("disabled","disabled"),f.trigger.change()},enabled:function(){if(f.verbose("Removing disabled class"),x.removeClass(g.disabled),f.is.enabled())return void f.debug("Input is already enabled, skipping input property change");f.debug("Setting state to enabled"),w.prop("disabled",!1),f.trigger.change()},tabbable:function(){f.verbose("Adding tabindex to checkbox"),void 0===w.attr("tabindex")&&w.attr("tabindex",0)}},remove:{initialLoad:function(){S=!1}},trigger:{change:function(){var e=n.createEvent("HTMLEvents"),t=w[0];t&&(f.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},create:{label:function(){w.prevAll(p.label).length>0?(w.prev(p.label).detach().insertAfter(w),f.debug("Moving existing label",C)):f.has.label()||(C=e("<label>").insertAfter(w),f.debug("Creating label",C))}},has:{label:function(){return C.length>0}},bind:{events:function(){f.verbose("Attaching checkbox events"),x.on("click"+b,f.event.click).on("keydown"+b,p.input,f.event.keydown).on("keyup"+b,p.input,f.event.keyup)}},unbind:{events:function(){f.debug("Removing events"),x.off(b)}},uncheckOthers:function(){var e=f.get.otherRadios();f.debug("Unchecking other radios",e),e.removeClass(g.checked)},toggle:function(){if(!f.can.change())return void(f.is.radio()||f.debug("Checkbox is read-only or disabled, ignoring toggle"));f.is.indeterminate()||f.is.unchecked()?(f.debug("Currently unchecked"),f.check()):f.is.checked()&&f.can.uncheck()&&(f.debug("Currently checked"),f.uncheck())},setting:function(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(void 0===n)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(void 0===n)return f[t];f[t]=n}},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:R,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=m.name+":",n=0;s=!1,clearTimeout(f.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(void 0!==console.group||void 0!==console.table)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,i){var a,r,s,l=A;return n=n||d,i=R||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(r=l[i],!1):(f.error(h.method,t),!1);l=l[i]}})),e.isFunction(r)?s=r.apply(i,n):void 0!==r&&(s=r),e.isArray(o)?o.push(s):void 0!==o?o=[o,s]:void 0!==s&&(o=s),r}},u?(void 0===A&&f.initialize(),f.invoke(c)):(void 0!==A&&A.invoke("destroy"),f.initialize())}),void 0!==o?o:this},e.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",silent:!1,debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,onChange:function(){},beforeChecked:function(){},beforeUnchecked:function(){},beforeDeterminate:function(){},beforeIndeterminate:function(){},onChecked:function(){},onUnchecked:function(){},onDeterminate:function(){},onIndeterminate:function(){},onEnable:function(){},onDisable:function(){},onEnabled:function(){},onDisabled:function(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dimmer=function(t){var i,o=e(this),a=(new Date).getTime(),r=[],s=arguments[0],l="string"==typeof s,c=[].slice.call(arguments,1);return o.each(function(){var u,d,f,m=e.isPlainObject(t)?e.extend(!0,{},e.fn.dimmer.settings,t):e.extend({},e.fn.dimmer.settings),g=m.selector,v=m.namespace,p=m.className,h=m.error,b="."+v,y="module-"+v,x=o.selector||"",C="ontouchstart"in n.documentElement?"touchstart":"click",w=e(this),k=this,S=w.data(y);f={preinitialize:function(){f.is.dimmer()?(d=w.parent(),u=w):(d=w,u=f.has.dimmer()?m.dimmerName?d.find(g.dimmer).filter("."+m.dimmerName):d.find(g.dimmer):f.create(),f.set.variation())},initialize:function(){f.debug("Initializing dimmer",m),f.bind.events(),f.set.dimmable(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),S=f,w.data(y,S)},destroy:function(){f.verbose("Destroying previous module",u),f.unbind.events(),f.remove.variation(),d.off(b)},bind:{events:function(){"hover"==m.on?d.on("mouseenter"+b,f.show).on("mouseleave"+b,f.hide):"click"==m.on&&d.on(C+b,f.toggle),f.is.page()&&(f.debug("Setting as a page dimmer",d),f.set.pageDimmer()),f.is.closable()&&(f.verbose("Adding dimmer close event",u),d.on(C+b,g.dimmer,f.event.click))}},unbind:{events:function(){w.removeData(y),d.off(b)}},event:{click:function(t){f.verbose("Determining if event occured on dimmer",t),(0===u.find(t.target).length||e(t.target).is(g.content))&&(f.hide(),t.stopImmediatePropagation())}},addContent:function(t){var n=e(t);f.debug("Add content to dimmer",n),n.parent()[0]!==u[0]&&n.detach().appendTo(u)},create:function(){var t=e(m.template.dimmer());return m.dimmerName&&(f.debug("Creating named dimmer",m.dimmerName),t.addClass(m.dimmerName)),t.appendTo(d),t},show:function(t){t=e.isFunction(t)?t:function(){},f.debug("Showing dimmer",u,m),f.is.dimmed()&&!f.is.animating()||!f.is.enabled()?f.debug("Dimmer is already shown or disabled"):(f.animate.show(t),m.onShow.call(k),m.onChange.call(k))},hide:function(t){t=e.isFunction(t)?t:function(){},f.is.dimmed()||f.is.animating()?(f.debug("Hiding dimmer",u),f.animate.hide(t),m.onHide.call(k),m.onChange.call(k)):f.debug("Dimmer is not visible")},toggle:function(){f.verbose("Toggling dimmer visibility",u),f.is.dimmed()?f.hide():f.show()},animate:{show:function(t){t=e.isFunction(t)?t:function(){},m.useCSS&&void 0!==e.fn.transition&&u.transition("is supported")?("auto"!==m.opacity&&f.set.opacity(),u.transition({animation:m.transition+" in",queue:!1,duration:f.get.duration(),useFailSafe:!0,onStart:function(){f.set.dimmed()},onComplete:function(){f.set.active(),t()}})):(f.verbose("Showing dimmer animation with javascript"),f.set.dimmed(),"auto"==m.opacity&&(m.opacity=.8),u.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(f.get.duration(),m.opacity,function(){u.removeAttr("style"),f.set.active(),t()}))},hide:function(t){t=e.isFunction(t)?t:function(){},m.useCSS&&void 0!==e.fn.transition&&u.transition("is supported")?(f.verbose("Hiding dimmer with css"),u.transition({animation:m.transition+" out",queue:!1,duration:f.get.duration(),useFailSafe:!0,onStart:function(){f.remove.dimmed()},onComplete:function(){f.remove.active(),t()}})):(f.verbose("Hiding dimmer with javascript"),f.remove.dimmed(),u.stop().fadeOut(f.get.duration(),function(){f.remove.active(),u.removeAttr("style"),t()}))}},get:{dimmer:function(){return u},duration:function(){return"object"==typeof m.duration?f.is.active()?m.duration.hide:m.duration.show:m.duration}},has:{dimmer:function(){return m.dimmerName?w.find(g.dimmer).filter("."+m.dimmerName).length>0:w.find(g.dimmer).length>0}},is:{active:function(){return u.hasClass(p.active)},animating:function(){return u.is(":animated")||u.hasClass(p.animating)},closable:function(){return"auto"==m.closable?"hover"!=m.on:m.closable},dimmer:function(){return w.hasClass(p.dimmer)},dimmable:function(){return w.hasClass(p.dimmable)},dimmed:function(){return d.hasClass(p.dimmed)},disabled:function(){return d.hasClass(p.disabled)},enabled:function(){return!f.is.disabled()},page:function(){return d.is("body")},pageDimmer:function(){return u.hasClass(p.pageDimmer)}},can:{show:function(){return!u.hasClass(p.disabled)}},set:{opacity:function(e){var t=u.css("background-color"),n=t.split(","),i=n&&3==n.length,o=n&&4==n.length;e=0===m.opacity?0:m.opacity||e,i||o?(n[3]=e+")",t=n.join(",")):t="rgba(0, 0, 0, "+e+")",f.debug("Setting opacity to",e),u.css("background-color",t)},active:function(){u.addClass(p.active)},dimmable:function(){d.addClass(p.dimmable)},dimmed:function(){d.addClass(p.dimmed)},pageDimmer:function(){u.addClass(p.pageDimmer)},disabled:function(){u.addClass(p.disabled)},variation:function(e){(e=e||m.variation)&&u.addClass(e)}},remove:{active:function(){u.removeClass(p.active)},dimmed:function(){d.removeClass(p.dimmed)},disabled:function(){u.removeClass(p.disabled)},variation:function(e){(e=e||m.variation)&&u.removeClass(e)}},setting:function(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(void 0===n)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(void 0===n)return f[t];f[t]=n}},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=a||t,n=t-i,a=t,r.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:k,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=m.name+":",n=0;a=!1,clearTimeout(f.performance.timer),e.each(r,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",x&&(t+=" '"+x+"'"),o.length>1&&(t+=" ("+o.length+")"),(void 0!==console.group||void 0!==console.table)&&r.length>0&&(console.groupCollapsed(t),console.table?console.table(r):e.each(r,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),r=[]}},invoke:function(t,n,o){var a,r,s,l=S;return n=n||c,o=k||o,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(r=l[i],!1):(f.error(h.method,t),!1);l=l[i]}})),e.isFunction(r)?s=r.apply(o,n):void 0!==r&&(s=r),e.isArray(i)?i.push(s):void 0!==i?i=[i,s]:void 0!==s&&(i=s),r}},f.preinitialize(),l?(void 0===S&&f.initialize(),f.invoke(s)):(void 0!==S&&S.invoke("destroy"),f.initialize())}),void 0!==i?i:this},e.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",silent:!1,debug:!1,verbose:!1,performance:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},onChange:function(){},onShow:function(){},onHide:function(){},error:{method:"The method you called is not defined."},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",dimmer:"dimmer",disabled:"disabled",hide:"hide",pageDimmer:"page",show:"show"},selector:{dimmer:"> .ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function(){return e("<div />").attr("class","ui dimmer")}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dropdown=function(i){var o,a=e(this),r=e(n),s=a.selector||"",l="ontouchstart"in n.documentElement,c=(new Date).getTime(),u=[],d=arguments[0],f="string"==typeof d,m=[].slice.call(arguments,1);return a.each(function(g){var v,p,h,b,y,x,C,w,k=e.isPlainObject(i)?e.extend(!0,{},e.fn.dropdown.settings,i):e.extend({},e.fn.dropdown.settings),S=k.className,T=k.message,A=k.fields,R=k.keys,P=k.metadata,E=k.namespace,F=k.regExp,O=k.selector,D=k.error,q=k.templates,j="."+E,z="module-"+E,I=e(this),M=e(k.context),L=I.find(O.text),V=I.find(O.search),N=I.find(O.sizer),H=I.find(O.input),U=I.find(O.icon),W=I.prev().find(O.text).length>0?I.prev().find(O.text):I.prev(),B=I.children(O.menu),Q=B.find(O.item),X=!1,$=!1,Y=!1,Z=this,K=I.data(z);w={initialize:function(){w.debug("Initializing dropdown",k),w.is.alreadySetup()?w.setup.reference():(w.setup.layout(),k.values&&w.change.values(k.values),w.refreshData(),w.save.defaults(),w.restore.selected(),w.create.id(),w.bind.events(),w.observeChanges(),w.instantiate())},instantiate:function(){w.verbose("Storing instance of dropdown",w),K=w,I.data(z,w)},destroy:function(){w.verbose("Destroying previous dropdown",I),w.remove.tabbable(),I.off(j).removeData(z),B.off(j),r.off(b),w.disconnect.menuObserver(),w.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in t&&(x=new MutationObserver(w.event.select.mutation),C=new MutationObserver(w.event.menu.mutation),w.debug("Setting up mutation observer",x,C),w.observe.select(),w.observe.menu())},disconnect:{menuObserver:function(){C&&C.disconnect()},selectObserver:function(){x&&x.disconnect()}},observe:{select:function(){w.has.input()&&x.observe(I[0],{childList:!0,subtree:!0})},menu:function(){w.has.menu()&&C.observe(B[0],{childList:!0,subtree:!0})}},create:{id:function(){y=(Math.random().toString(16)+"000000000").substr(2,8),b="."+y,w.verbose("Creating unique id for element",y)},userChoice:function(t){var n,i,o;return!!(t=t||w.get.userValues())&&(t=e.isArray(t)?t:[t],e.each(t,function(t,a){!1===w.get.item(a)&&(o=k.templates.addition(w.add.variables(T.addResult,a)),i=e("<div />").html(o).attr("data-"+P.value,a).attr("data-"+P.text,a).addClass(S.addition).addClass(S.item),k.hideAdditions&&i.addClass(S.hidden),n=void 0===n?i:n.add(i),w.verbose("Creating user choices for value",a,i))}),n)},userLabels:function(t){var n=w.get.userValues();n&&(w.debug("Adding user labels",n),e.each(n,function(e,t){w.verbose("Adding custom user value"),w.add.label(t,t)}))},menu:function(){B=e("<div />").addClass(S.menu).appendTo(I)},sizer:function(){N=e("<span />").addClass(S.sizer).insertAfter(V)}},search:function(e){e=void 0!==e?e:w.get.query(),w.verbose("Searching for query",e),w.has.minCharacters(e)?w.filter(e):w.hide()},select:{firstUnfiltered:function(){w.verbose("Selecting first non-filtered element"),w.remove.selectedItem(),Q.not(O.unselectable).not(O.addition+O.hidden).eq(0).addClass(S.selected)},nextAvailable:function(e){e=e.eq(0);var t=e.nextAll(O.item).not(O.unselectable).eq(0),n=e.prevAll(O.item).not(O.unselectable).eq(0);t.length>0?(w.verbose("Moving selection to",t),t.addClass(S.selected)):(w.verbose("Moving selection to",n),n.addClass(S.selected))}},setup:{api:function(){var e={debug:k.debug,urlData:{value:w.get.value(),query:w.get.query()},on:!1};w.verbose("First request, initializing API"),I.api(e)},layout:function(){I.is("select")&&(w.setup.select(),w.setup.returnedObject()),w.has.menu()||w.create.menu(),w.is.search()&&!w.has.search()&&(w.verbose("Adding search input"),V=e("<input />").addClass(S.search).prop("autocomplete","off").insertBefore(L)),w.is.multiple()&&w.is.searchSelection()&&!w.has.sizer()&&w.create.sizer(),k.allowTab&&w.set.tabbable()},select:function(){var t=w.get.selectValues();w.debug("Dropdown initialized on a select",t),I.is("select")&&(H=I),H.parent(O.dropdown).length>0?(w.debug("UI dropdown already exists. Creating dropdown menu only"),I=H.closest(O.dropdown),w.has.menu()||w.create.menu(),B=I.children(O.menu),w.setup.menu(t)):(w.debug("Creating entire dropdown from select"),I=e("<div />").attr("class",H.attr("class")).addClass(S.selection).addClass(S.dropdown).html(q.dropdown(t)).insertBefore(H),H.hasClass(S.multiple)&&!1===H.prop("multiple")&&(w.error(D.missingMultiple),H.prop("multiple",!0)),H.is("[multiple]")&&w.set.multiple(),H.prop("disabled")&&(w.debug("Disabling dropdown"),I.addClass(S.disabled)),H.removeAttr("class").detach().prependTo(I)),w.refresh()},menu:function(e){B.html(q.menu(e,A)),Q=B.find(O.item)},reference:function(){w.debug("Dropdown behavior was called on select, replacing with closest dropdown"),I=I.parent(O.dropdown),K=I.data(z),Z=I.get(0),w.refresh(),w.setup.returnedObject()},returnedObject:function(){var e=a.slice(0,g),t=a.slice(g+1);a=e.add(I).add(t)}},refresh:function(){w.refreshSelectors(),w.refreshData()},refreshItems:function(){Q=B.find(O.item)},refreshSelectors:function(){w.verbose("Refreshing selector cache"),L=I.find(O.text),V=I.find(O.search),H=I.find(O.input),U=I.find(O.icon),W=I.prev().find(O.text).length>0?I.prev().find(O.text):I.prev(),B=I.children(O.menu),Q=B.find(O.item)},refreshData:function(){w.verbose("Refreshing cached metadata"),Q.removeData(P.text).removeData(P.value)},clearData:function(){w.verbose("Clearing metadata"),Q.removeData(P.text).removeData(P.value),I.removeData(P.defaultText).removeData(P.defaultValue).removeData(P.placeholderText)},toggle:function(){w.verbose("Toggling menu visibility"),w.is.active()?w.hide():w.show()},show:function(t){if(t=e.isFunction(t)?t:function(){},!w.can.show()&&w.is.remote()&&(w.debug("No API results retrieved, searching before show"),w.queryRemote(w.get.query(),w.show)),w.can.show()&&!w.is.active()){if(w.debug("Showing dropdown"),!w.has.message()||w.has.maxSelections()||w.has.allResultsFiltered()||w.remove.message(),w.is.allFiltered())return!0;!1!==k.onShow.call(Z)&&w.animate.show(function(){w.can.click()&&w.bind.intent(),w.has.menuSearch()&&w.focusSearch(),w.set.visible(),t.call(Z)})}},hide:function(t){t=e.isFunction(t)?t:function(){},w.is.active()&&(w.debug("Hiding dropdown"),!1!==k.onHide.call(Z)&&w.animate.hide(function(){w.remove.visible(),t.call(Z)}))},hideOthers:function(){w.verbose("Finding other dropdowns to hide"),a.not(I).has(O.menu+"."+S.visible).dropdown("hide")},hideMenu:function(){w.verbose("Hiding menu  instantaneously"),w.remove.active(),w.remove.visible(),B.transition("hide")},hideSubMenus:function(){var e=B.children(O.item).find(O.menu);w.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){l&&w.bind.touchEvents(),w.bind.keyboardEvents(),w.bind.inputEvents(),w.bind.mouseEvents()},touchEvents:function(){w.debug("Touch device detected binding additional touch events"),w.is.searchSelection()||w.is.single()&&I.on("touchstart"+j,w.event.test.toggle),B.on("touchstart"+j,O.item,w.event.item.mouseenter)},keyboardEvents:function(){w.verbose("Binding keyboard events"),I.on("keydown"+j,w.event.keydown),w.has.search()&&I.on(w.get.inputEvent()+j,O.search,w.event.input),w.is.multiple()&&r.on("keydown"+b,w.event.document.keydown)},inputEvents:function(){w.verbose("Binding input change events"),I.on("change"+j,O.input,w.event.change)},mouseEvents:function(){w.verbose("Binding mouse events"),w.is.multiple()&&I.on("click"+j,O.label,w.event.label.click).on("click"+j,O.remove,w.event.remove.click),w.is.searchSelection()?(I.on("mousedown"+j,w.event.mousedown).on("mouseup"+j,w.event.mouseup).on("mousedown"+j,O.menu,w.event.menu.mousedown).on("mouseup"+j,O.menu,w.event.menu.mouseup).on("click"+j,O.icon,w.event.icon.click).on("focus"+j,O.search,w.event.search.focus).on("click"+j,O.search,w.event.search.focus).on("blur"+j,O.search,w.event.search.blur).on("click"+j,O.text,w.event.text.focus),w.is.multiple()&&I.on("click"+j,w.event.click)):("click"==k.on?I.on("click"+j,O.icon,w.event.icon.click).on("click"+j,w.event.test.toggle):"hover"==k.on?I.on("mouseenter"+j,w.delay.show).on("mouseleave"+j,w.delay.hide):I.on(k.on+j,w.toggle),I.on("mousedown"+j,w.event.mousedown).on("mouseup"+j,w.event.mouseup).on("focus"+j,w.event.focus),w.has.menuSearch()?I.on("blur"+j,O.search,w.event.search.blur):I.on("blur"+j,w.event.blur)),B.on("mouseenter"+j,O.item,w.event.item.mouseenter).on("mouseleave"+j,O.item,w.event.item.mouseleave).on("click"+j,O.item,w.event.item.click)},intent:function(){w.verbose("Binding hide intent event to document"),l&&r.on("touchstart"+b,w.event.test.touch).on("touchmove"+b,w.event.test.touch),r.on("click"+b,w.event.test.hide)}},unbind:{intent:function(){w.verbose("Removing hide intent event from document"),l&&r.off("touchstart"+b).off("touchmove"+b),r.off("click"+b)}},filter:function(e){var t=void 0!==e?e:w.get.query(),n=function(){w.is.multiple()&&w.filterActive(),(e||!e&&0==w.get.activeItem().length)&&w.select.firstUnfiltered(),w.has.allResultsFiltered()?k.onNoResults.call(Z,t)?k.allowAdditions?k.hideAdditions&&(w.verbose("User addition with no menu, setting empty style"),w.set.empty(),w.hideMenu()):(w.verbose("All items filtered, showing message",t),w.add.message(T.noResults)):(w.verbose("All items filtered, hiding dropdown",t),w.hideMenu()):(w.remove.empty(),w.remove.message()),k.allowAdditions&&w.add.userSuggestion(e),w.is.searchSelection()&&w.can.show()&&w.is.focusedOnSearch()&&w.show()};k.useLabels&&w.has.maxSelections()||(k.apiSettings?w.can.useAPI()?w.queryRemote(t,function(){k.filterRemoteData&&w.filterItems(t),n()}):w.error(D.noAPI):(w.filterItems(t),n()))},queryRemote:function(t,n){var i={errorDuration:!1,cache:"local",throttle:k.throttle,urlData:{query:t},onError:function(){w.add.message(T.serverError),n()},onFailure:function(){w.add.message(T.serverError),n()},onSuccess:function(e){w.remove.message(),w.setup.menu({values:e[A.remoteValues]}),n()}};I.api("get request")||w.setup.api(),i=e.extend(!0,{},i,k.apiSettings),I.api("setting",i).api("query")},filterItems:function(t){var n=void 0!==t?t:w.get.query(),i=null,o=w.escape.string(n),a=new RegExp("^"+o,"igm");w.has.query()&&(i=[],w.verbose("Searching for matching values",n),Q.each(function(){var t,o,r=e(this);if("both"==k.match||"text"==k.match){
if(t=String(w.get.choiceText(r,!1)),-1!==t.search(a))return i.push(this),!0;if("exact"===k.fullTextSearch&&w.exactSearch(n,t))return i.push(this),!0;if(!0===k.fullTextSearch&&w.fuzzySearch(n,t))return i.push(this),!0}if("both"==k.match||"value"==k.match){if(o=String(w.get.choiceValue(r,t)),-1!==o.search(a))return i.push(this),!0;if("exact"===k.fullTextSearch&&w.exactSearch(n,o))return i.push(this),!0;if(!0===k.fullTextSearch&&w.fuzzySearch(n,o))return i.push(this),!0}})),w.debug("Showing only matched items",n),w.remove.filteredItem(),i&&Q.not(i).addClass(S.filtered)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},exactSearch:function(e,t){return e=e.toLowerCase(),t=t.toLowerCase(),t.indexOf(e)>-1},filterActive:function(){k.useLabels&&Q.filter("."+S.active).addClass(S.filtered)},focusSearch:function(e){w.has.search()&&!w.is.focusedOnSearch()&&(e?(I.off("focus"+j,O.search),V.focus(),I.on("focus"+j,O.search,w.event.search.focus)):V.focus())},forceSelection:function(){var e=Q.not(S.filtered).filter("."+S.selected).eq(0),t=Q.not(S.filtered).filter("."+S.active).eq(0),n=e.length>0?e:t;if(n.length>0&&!w.is.multiple())return w.debug("Forcing partial selection to selected item",n),void w.event.item.click.call(n,{},!0);k.allowAdditions?(w.set.selected(w.get.query()),w.remove.searchTerm()):w.remove.searchTerm()},change:{values:function(t){k.allowAdditions||w.clear(),w.debug("Creating dropdown with specified values",t),w.setup.menu({values:t}),e.each(t,function(e,t){if(1==t.selected)return w.debug("Setting initial selection to",t.value),w.set.selected(t.value),!0})}},event:{change:function(){Y||(w.debug("Input changed, updating selection"),w.set.selected())},focus:function(){k.showOnFocus&&!X&&w.is.hidden()&&!p&&w.show()},blur:function(e){p=n.activeElement===this,X||p||(w.remove.activeLabel(),w.hide())},mousedown:function(){w.is.searchSelection()?h=!0:X=!0},mouseup:function(){w.is.searchSelection()?h=!1:X=!1},click:function(t){e(t.target).is(I)&&(w.is.focusedOnSearch()?w.show():w.focusSearch())},search:{focus:function(){X=!0,w.is.multiple()&&w.remove.activeLabel(),k.showOnFocus&&w.search()},blur:function(e){p=n.activeElement===this,w.is.searchSelection()&&!h&&($||p||(k.forceSelection&&w.forceSelection(),w.hide())),h=!1}},icon:{click:function(e){w.toggle()}},text:{focus:function(e){X=!0,w.focusSearch()}},input:function(e){(w.is.multiple()||w.is.searchSelection())&&w.set.filtered(),clearTimeout(w.timer),w.timer=setTimeout(w.search,k.delay.search)},label:{click:function(t){var n=e(this),i=I.find(O.label),o=i.filter("."+S.active),a=n.nextAll("."+S.active),r=n.prevAll("."+S.active),s=a.length>0?n.nextUntil(a).add(o).add(n):n.prevUntil(r).add(o).add(n);t.shiftKey?(o.removeClass(S.active),s.addClass(S.active)):t.ctrlKey?n.toggleClass(S.active):(o.removeClass(S.active),n.addClass(S.active)),k.onLabelSelect.apply(this,i.filter("."+S.active))}},remove:{click:function(){var t=e(this).parent();t.hasClass(S.active)?w.remove.activeLabels():w.remove.activeLabels(t)}},test:{toggle:function(e){var t=w.is.multiple()?w.show:w.toggle;w.is.bubbledLabelClick(e)||w.is.bubbledIconClick(e)||w.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){w.determine.eventOnElement(e,function(){"touchstart"==e.type?w.timer=setTimeout(function(){w.hide()},k.delay.touch):"touchmove"==e.type&&clearTimeout(w.timer)}),e.stopPropagation()},hide:function(e){w.determine.eventInModule(e,w.hide)}},select:{mutation:function(t){w.debug("<select> modified, recreating menu");var n=!1;e.each(t,function(t,i){if(e(i.target).is("select")||e(i.addedNodes).is("select"))return n=!0,!0}),n&&(w.disconnect.selectObserver(),w.refresh(),w.setup.select(),w.set.selected(),w.observe.select())}},menu:{mutation:function(t){var n=t[0],i=e(n.addedNodes?n.addedNodes[0]:!1),o=e(n.removedNodes?n.removedNodes[0]:!1),a=i.add(o),r=a.is(O.addition)||a.closest(O.addition).length>0,s=a.is(O.message)||a.closest(O.message).length>0;r||s?(w.debug("Updating item selector cache"),w.refreshItems()):(w.debug("Menu modified, updating selector cache"),w.refresh())},mousedown:function(){$=!0},mouseup:function(){$=!1}},item:{mouseenter:function(t){var n=e(t.target),i=e(this),o=i.children(O.menu),a=i.siblings(O.item).children(O.menu),r=o.length>0;!(o.find(n).length>0)&&r&&(clearTimeout(w.itemTimer),w.itemTimer=setTimeout(function(){w.verbose("Showing sub-menu",o),e.each(a,function(){w.animate.hide(!1,e(this))}),w.animate.show(!1,o)},k.delay.show),t.preventDefault())},mouseleave:function(t){var n=e(this).children(O.menu);n.length>0&&(clearTimeout(w.itemTimer),w.itemTimer=setTimeout(function(){w.verbose("Hiding sub-menu",n),w.animate.hide(!1,n)},k.delay.hide))},click:function(t,i){var o=e(this),a=e(t?t.target:""),r=o.find(O.menu),s=w.get.choiceText(o),l=w.get.choiceValue(o,s),c=r.length>0,u=r.find(a).length>0;w.has.menuSearch()&&e(n.activeElement).blur(),u||c&&!k.allowCategorySelection||(w.is.searchSelection()&&(k.allowAdditions&&w.remove.userAddition(),w.remove.searchTerm(),w.is.focusedOnSearch()||1==i||w.focusSearch(!0)),k.useLabels||(w.remove.filteredItem(),w.set.scrollPosition(o)),w.determine.selectAction.call(this,s,l))}},document:{keydown:function(e){var t=e.which;if(w.is.inObject(t,R)){var n=I.find(O.label),i=n.filter("."+S.active),o=(i.data(P.value),n.index(i)),a=n.length,r=i.length>0,s=i.length>1,l=0===o,c=o+1==a,u=w.is.searchSelection(),d=w.is.focusedOnSearch(),f=w.is.focused(),m=d&&0===w.get.caretPosition();if(u&&!r&&!d)return;t==R.leftArrow?!f&&!m||r?r&&(e.shiftKey?w.verbose("Adding previous label to selection"):(w.verbose("Selecting previous label"),n.removeClass(S.active)),l&&!s?i.addClass(S.active):i.prev(O.siblingLabel).addClass(S.active).end(),e.preventDefault()):(w.verbose("Selecting previous label"),n.last().addClass(S.active)):t==R.rightArrow?(f&&!r&&n.first().addClass(S.active),r&&(e.shiftKey?w.verbose("Adding next label to selection"):(w.verbose("Selecting next label"),n.removeClass(S.active)),c?u?d?n.removeClass(S.active):w.focusSearch():s?i.next(O.siblingLabel).addClass(S.active):i.addClass(S.active):i.next(O.siblingLabel).addClass(S.active),e.preventDefault())):t==R.deleteKey||t==R.backspace?r?(w.verbose("Removing active labels"),c&&u&&!d&&w.focusSearch(),i.last().next(O.siblingLabel).addClass(S.active),w.remove.activeLabels(i),e.preventDefault()):m&&!r&&t==R.backspace&&(w.verbose("Removing last label on input backspace"),i=n.last().addClass(S.active),w.remove.activeLabels(i)):i.removeClass(S.active)}}},keydown:function(e){var t=e.which;if(w.is.inObject(t,R)){var n,i=Q.not(O.unselectable).filter("."+S.selected).eq(0),o=B.children("."+S.active).eq(0),a=i.length>0?i:o,r=a.length>0?a.siblings(":not(."+S.filtered+")").addBack():B.children(":not(."+S.filtered+")"),s=a.children(O.menu),l=a.closest(O.menu),c=l.hasClass(S.visible)||l.hasClass(S.animating)||l.parent(O.menu).length>0,u=s.length>0,d=a.length>0,f=a.not(O.unselectable).length>0,m=t==R.delimiter&&k.allowAdditions&&w.is.multiple(),g=k.allowAdditions&&k.hideAdditions&&(t==R.enter||m)&&f;if(g&&(w.verbose("Selecting item from keyboard shortcut",a),w.event.item.click.call(a,e),w.is.searchSelection()&&w.remove.searchTerm()),w.is.visible()){if((t==R.enter||m)&&(t==R.enter&&d&&u&&!k.allowCategorySelection?(w.verbose("Pressed enter on unselectable category, opening sub menu"),t=R.rightArrow):f&&(w.verbose("Selecting item from keyboard shortcut",a),w.event.item.click.call(a,e),w.is.searchSelection()&&w.remove.searchTerm()),e.preventDefault()),d&&(t==R.leftArrow&&l[0]!==B[0]&&(w.verbose("Left key pressed, closing sub-menu"),w.animate.hide(!1,l),a.removeClass(S.selected),l.closest(O.item).addClass(S.selected),e.preventDefault()),t==R.rightArrow&&u&&(w.verbose("Right key pressed, opening sub-menu"),w.animate.show(!1,s),a.removeClass(S.selected),s.find(O.item).eq(0).addClass(S.selected),e.preventDefault())),t==R.upArrow){if(n=d&&c?a.prevAll(O.item+":not("+O.unselectable+")").eq(0):Q.eq(0),r.index(n)<0)return w.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();w.verbose("Up key pressed, changing active item"),a.removeClass(S.selected),n.addClass(S.selected),w.set.scrollPosition(n),k.selectOnKeydown&&w.is.single()&&w.set.selectedItem(n),e.preventDefault()}if(t==R.downArrow){if(n=d&&c?n=a.nextAll(O.item+":not("+O.unselectable+")").eq(0):Q.eq(0),0===n.length)return w.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();w.verbose("Down key pressed, changing active item"),Q.removeClass(S.selected),n.addClass(S.selected),w.set.scrollPosition(n),k.selectOnKeydown&&w.is.single()&&w.set.selectedItem(n),e.preventDefault()}t==R.pageUp&&(w.scrollPage("up"),e.preventDefault()),t==R.pageDown&&(w.scrollPage("down"),e.preventDefault()),t==R.escape&&(w.verbose("Escape key pressed, closing dropdown"),w.hide())}else m&&e.preventDefault(),t!=R.downArrow||w.is.visible()||(w.verbose("Down key pressed, showing dropdown"),w.show(),e.preventDefault())}else w.has.search()||w.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=n.createEvent("HTMLEvents"),t=H[0];t&&(w.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(t,n){w.verbose("Determining action",k.action),e.isFunction(w.action[k.action])?(w.verbose("Triggering preset action",k.action,t,n),w.action[k.action].call(Z,t,n,this)):e.isFunction(k.action)?(w.verbose("Triggering user action",k.action,t,n),k.action.call(Z,t,n,this)):w.error(D.action,k.action)},eventInModule:function(t,i){var o=e(t.target),a=o.closest(n.documentElement).length>0,r=o.closest(I).length>0;return i=e.isFunction(i)?i:function(){},a&&!r?(w.verbose("Triggering event",i),i(),!0):(w.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(t,i){var o=e(t.target),a=o.closest(O.siblingLabel),r=n.body.contains(t.target),s=0===I.find(a).length,l=0===o.closest(B).length;return i=e.isFunction(i)?i:function(){},r&&s&&l?(w.verbose("Triggering event",i),i(),!0):(w.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(t,n,i){if(n=void 0!==n?n:t,w.can.activate(e(i))){if(w.set.selected(n,e(i)),w.is.multiple()&&!w.is.allFiltered())return;w.hideAndClear()}},select:function(t,n,i){if(n=void 0!==n?n:t,w.can.activate(e(i))){if(w.set.value(n,e(i)),w.is.multiple()&&!w.is.allFiltered())return;w.hideAndClear()}},combo:function(t,n,i){n=void 0!==n?n:t,w.set.selected(n,e(i)),w.hideAndClear()},hide:function(e,t,n){w.set.value(t,e),w.hideAndClear()}},get:{id:function(){return y},defaultText:function(){return I.data(P.defaultText)},defaultValue:function(){return I.data(P.defaultValue)},placeholderText:function(){return"auto"!=k.placeholder&&"string"==typeof k.placeholder?k.placeholder:I.data(P.placeholderText)||""},text:function(){return L.text()},query:function(){return e.trim(V.val())},searchWidth:function(e){return e=void 0!==e?e:V.val(),N.text(e),Math.ceil(N.width()+1)},selectionCount:function(){var t=w.get.values();return w.is.multiple()?e.isArray(t)?t.length:0:""!==w.get.value()?1:0},transition:function(e){return"auto"==k.transition?w.is.upward(e)?"slide up":"slide down":k.transition},userValues:function(){var t=w.get.values();return!!t&&(t=e.isArray(t)?t:[t],e.grep(t,function(e){return!1===w.get.item(e)}))},uniqueArray:function(t){return e.grep(t,function(n,i){return e.inArray(n,t)===i})},caretPosition:function(){var e,t,i=V.get(0);return"selectionStart"in i?i.selectionStart:n.selection?(i.focus(),e=n.selection.createRange(),t=e.text.length,e.moveStart("character",-i.value.length),e.text.length-t):void 0},value:function(){var t=H.length>0?H.val():I.data(P.value),n=e.isArray(t)&&1===t.length&&""===t[0];return void 0===t||n?"":t},values:function(){var e=w.get.value();return""===e?"":!w.has.selectInput()&&w.is.multiple()?"string"==typeof e?e.split(k.delimiter):"":e},remoteValues:function(){var t=w.get.values(),n=!1;return t&&("string"==typeof t&&(t=[t]),e.each(t,function(e,t){var i=w.read.remoteData(t);w.verbose("Restoring value from session data",i,t),i&&(n||(n={}),n[t]=i)})),n},choiceText:function(t,n){if(n=void 0!==n?n:k.preserveHTML,t)return t.find(O.menu).length>0&&(w.verbose("Retrieving text of element with sub-menu"),t=t.clone(),t.find(O.menu).remove(),t.find(O.menuIcon).remove()),void 0!==t.data(P.text)?t.data(P.text):n?e.trim(t.html()):e.trim(t.text())},choiceValue:function(t,n){return n=n||w.get.choiceText(t),!!t&&(void 0!==t.data(P.value)?String(t.data(P.value)):"string"==typeof n?e.trim(n.toLowerCase()):String(n))},inputEvent:function(){var e=V[0];return!!e&&(void 0!==e.oninput?"input":void 0!==e.onpropertychange?"propertychange":"keyup")},selectValues:function(){var t={};return t.values=[],I.find("option").each(function(){var n=e(this),i=n.html(),o=n.attr("disabled"),a=void 0!==n.attr("value")?n.attr("value"):i;"auto"===k.placeholder&&""===a?t.placeholder=i:t.values.push({name:i,value:a,disabled:o})}),k.placeholder&&"auto"!==k.placeholder&&(w.debug("Setting placeholder value to",k.placeholder),t.placeholder=k.placeholder),k.sortSelect?(t.values.sort(function(e,t){return e.name>t.name?1:-1}),w.debug("Retrieved and sorted values from select",t)):w.debug("Retrieved values from select",t),t},activeItem:function(){return Q.filter("."+S.active)},selectedItem:function(){var e=Q.not(O.unselectable).filter("."+S.selected);return e.length>0?e:Q.eq(0)},itemWithAdditions:function(e){var t=w.get.item(e),n=w.create.userChoice(e);return n&&n.length>0&&(t=t.length>0?t.add(n):n),t},item:function(t,n){var i,o,a=!1;return t=void 0!==t?t:void 0!==w.get.values()?w.get.values():w.get.text(),i=o?t.length>0:void 0!==t&&null!==t,o=w.is.multiple()&&e.isArray(t),n=""===t||0===t||(n||!1),i&&Q.each(function(){var i=e(this),r=w.get.choiceText(i),s=w.get.choiceValue(i,r);if(null!==s&&void 0!==s)if(o)-1===e.inArray(String(s),t)&&-1===e.inArray(r,t)||(a=a?a.add(i):i);else if(n){if(w.verbose("Ambiguous dropdown value using strict type check",i,t),s===t||r===t)return a=i,!0}else if(String(s)==String(t)||r==t)return w.verbose("Found select item by value",s,t),a=i,!0}),a}},check:{maxSelections:function(e){return!k.maxSelections||(e=void 0!==e?e:w.get.selectionCount(),e>=k.maxSelections?(w.debug("Maximum selection count reached"),k.useLabels&&(Q.addClass(S.filtered),w.add.message(T.maxSelections)),!0):(w.verbose("No longer at maximum selection count"),w.remove.message(),w.remove.filteredItem(),w.is.searchSelection()&&w.filterItems(),!1))}},restore:{defaults:function(){w.clear(),w.restore.defaultText(),w.restore.defaultValue()},defaultText:function(){var e=w.get.defaultText();e===w.get.placeholderText?(w.debug("Restoring default placeholder text",e),w.set.placeholderText(e)):(w.debug("Restoring default text",e),w.set.text(e))},placeholderText:function(){w.set.placeholderText()},defaultValue:function(){var e=w.get.defaultValue();void 0!==e&&(w.debug("Restoring default value",e),""!==e?(w.set.value(e),w.set.selected()):(w.remove.activeItem(),w.remove.selectedItem()))},labels:function(){k.allowAdditions&&(k.useLabels||(w.error(D.labels),k.useLabels=!0),w.debug("Restoring selected values"),w.create.userLabels()),w.check.maxSelections()},selected:function(){w.restore.values(),w.is.multiple()?(w.debug("Restoring previously selected values and labels"),w.restore.labels()):w.debug("Restoring previously selected values")},values:function(){w.set.initialLoad(),k.apiSettings&&k.saveRemoteData&&w.get.remoteValues()?w.restore.remoteValues():w.set.selected(),w.remove.initialLoad()},remoteValues:function(){var t=w.get.remoteValues();w.debug("Recreating selected from session data",t),t&&(w.is.single()?e.each(t,function(e,t){w.set.text(t)}):e.each(t,function(e,t){w.add.label(e,t)}))}},read:{remoteData:function(e){var n;return void 0===t.Storage?void w.error(D.noStorage):void 0!==(n=sessionStorage.getItem(e))&&n}},save:{defaults:function(){w.save.defaultText(),w.save.placeholderText(),w.save.defaultValue()},defaultValue:function(){var e=w.get.value();w.verbose("Saving default value as",e),I.data(P.defaultValue,e)},defaultText:function(){var e=w.get.text();w.verbose("Saving default text as",e),I.data(P.defaultText,e)},placeholderText:function(){var e;!1!==k.placeholder&&L.hasClass(S.placeholder)&&(e=w.get.text(),w.verbose("Saving placeholder text as",e),I.data(P.placeholderText,e))},remoteData:function(e,n){if(void 0===t.Storage)return void w.error(D.noStorage);w.verbose("Saving remote data to session storage",n,e),sessionStorage.setItem(n,e)}},clear:function(){w.is.multiple()&&k.useLabels?w.remove.labels():(w.remove.activeItem(),w.remove.selectedItem()),w.set.placeholderText(),w.clearValue()},clearValue:function(){w.set.value("")},scrollPage:function(e,t){var n,i,o,a=t||w.get.selectedItem(),r=a.closest(O.menu),s=r.outerHeight(),l=r.scrollTop(),c=Q.eq(0).outerHeight(),u=Math.floor(s/c),d=(r.prop("scrollHeight"),"up"==e?l-c*u:l+c*u),f=Q.not(O.unselectable);o="up"==e?f.index(a)-u:f.index(a)+u,n="up"==e?o>=0:o<f.length,i=n?f.eq(o):"up"==e?f.first():f.last(),i.length>0&&(w.debug("Scrolling page",e,i),a.removeClass(S.selected),i.addClass(S.selected),k.selectOnKeydown&&w.is.single()&&w.set.selectedItem(i),r.scrollTop(d))},set:{filtered:function(){var e=w.is.multiple(),t=w.is.searchSelection(),n=e&&t,i=t?w.get.query():"",o="string"==typeof i&&i.length>0,a=w.get.searchWidth(),r=""!==i;e&&o&&(w.verbose("Adjusting input width",a,k.glyphWidth),V.css("width",a)),o||n&&r?(w.verbose("Hiding placeholder text"),L.addClass(S.filtered)):(!e||n&&!r)&&(w.verbose("Showing placeholder text"),L.removeClass(S.filtered))},empty:function(){I.addClass(S.empty)},loading:function(){I.addClass(S.loading)},placeholderText:function(e){e=e||w.get.placeholderText(),w.debug("Setting placeholder text",e),w.set.text(e),L.addClass(S.placeholder)},tabbable:function(){w.is.searchSelection()?(w.debug("Added tabindex to searchable dropdown"),V.val("").attr("tabindex",0),B.attr("tabindex",-1)):(w.debug("Added tabindex to dropdown"),void 0===I.attr("tabindex")&&(I.attr("tabindex",0),B.attr("tabindex",-1)))},initialLoad:function(){w.verbose("Setting initial load"),v=!0},activeItem:function(e){k.allowAdditions&&e.filter(O.addition).length>0?e.addClass(S.filtered):e.addClass(S.active)},partialSearch:function(e){var t=w.get.query().length;V.val(e.substr(0,t))},scrollPosition:function(e,t){var n,i,o,a,r,s,l,c,u;e=e||w.get.selectedItem(),n=e.closest(O.menu),i=e&&e.length>0,t=void 0!==t&&t,e&&n.length>0&&i&&(a=e.position().top,n.addClass(S.loading),s=n.scrollTop(),r=n.offset().top,a=e.offset().top,o=s-r+a,t||(l=n.height(),u=s+l<o+5,c=o-5<s),w.debug("Scrolling to active item",o),(t||c||u)&&n.scrollTop(o),n.removeClass(S.loading))},text:function(e){"select"!==k.action&&("combo"==k.action?(w.debug("Changing combo button text",e,W),k.preserveHTML?W.html(e):W.text(e)):(e!==w.get.placeholderText()&&L.removeClass(S.placeholder),w.debug("Changing text",e,L),L.removeClass(S.filtered),k.preserveHTML?L.html(e):L.text(e)))},selectedItem:function(e){var t=w.get.choiceValue(e),n=w.get.choiceText(e,!1),i=w.get.choiceText(e,!0);w.debug("Setting user selection to item",e),w.remove.activeItem(),w.set.partialSearch(n),w.set.activeItem(e),w.set.selected(t,e),w.set.text(i)},selectedLetter:function(t){var n,i=Q.filter("."+S.selected),o=i.length>0&&w.has.firstLetter(i,t),a=!1;o&&(n=i.nextAll(Q).eq(0),w.has.firstLetter(n,t)&&(a=n)),a||Q.each(function(){if(w.has.firstLetter(e(this),t))return a=e(this),!1}),a&&(w.verbose("Scrolling to next value with letter",t),w.set.scrollPosition(a),i.removeClass(S.selected),a.addClass(S.selected),k.selectOnKeydown&&w.is.single()&&w.set.selectedItem(a))},direction:function(e){"auto"==k.direction?(w.remove.upward(),w.can.openDownward(e)?w.remove.upward(e):w.set.upward(e),w.is.leftward(e)||w.can.openRightward(e)||w.set.leftward(e)):"upward"==k.direction&&w.set.upward(e)},upward:function(e){(e||I).addClass(S.upward)},leftward:function(e){(e||B).addClass(S.leftward)},value:function(e,t,n){var i=w.escape.value(e),o=H.length>0,a=(w.has.value(e),w.get.values()),r=void 0!==e?String(e):e;if(o){if(!k.allowReselection&&r==a&&(w.verbose("Skipping value update already same value",e,a),!w.is.initialLoad()))return;w.is.single()&&w.has.selectInput()&&w.can.extendSelect()&&(w.debug("Adding user option",e),w.add.optionValue(e)),w.debug("Updating input value",i,a),Y=!0,H.val(i),!1===k.fireOnInit&&w.is.initialLoad()?w.debug("Input native change event ignored on initial load"):w.trigger.change(),Y=!1}else w.verbose("Storing value in metadata",i,H),i!==a&&I.data(P.value,r);!1===k.fireOnInit&&w.is.initialLoad()?w.verbose("No callback on initial load",k.onChange):k.onChange.call(Z,e,t,n)},active:function(){I.addClass(S.active)},multiple:function(){I.addClass(S.multiple)},visible:function(){I.addClass(S.visible)},exactly:function(e,t){w.debug("Setting selected to exact values"),w.clear(),w.set.selected(e,t)},selected:function(t,n){var i=w.is.multiple();(n=k.allowAdditions?n||w.get.itemWithAdditions(t):n||w.get.item(t))&&(w.debug("Setting selected menu item to",n),w.is.multiple()&&w.remove.searchWidth(),w.is.single()?(w.remove.activeItem(),w.remove.selectedItem()):k.useLabels&&w.remove.selectedItem(),n.each(function(){var t=e(this),o=w.get.choiceText(t),a=w.get.choiceValue(t,o),r=t.hasClass(S.filtered),s=t.hasClass(S.active),l=t.hasClass(S.addition),c=i&&1==n.length;i?!s||l?(k.apiSettings&&k.saveRemoteData&&w.save.remoteData(o,a),k.useLabels?(w.add.value(a,o,t),w.add.label(a,o,c),w.set.activeItem(t),w.filterActive(),w.select.nextAvailable(n)):(w.add.value(a,o,t),w.set.text(w.add.variables(T.count)),w.set.activeItem(t))):r||(w.debug("Selected active value, removing label"),w.remove.selected(a)):(k.apiSettings&&k.saveRemoteData&&w.save.remoteData(o,a),w.set.text(o),w.set.value(a,o,t),t.addClass(S.active).addClass(S.selected))}))}},add:{label:function(t,n,i){var o,a=w.is.searchSelection()?V:L,r=w.escape.value(t);if(o=e("<a />").addClass(S.label).attr("data-"+P.value,r).html(q.label(r,n)),o=k.onLabelCreate.call(o,r,n),w.has.label(t))return void w.debug("Label already exists, skipping",r);k.label.variation&&o.addClass(k.label.variation),!0===i?(w.debug("Animating in label",o),o.addClass(S.hidden).insertBefore(a).transition(k.label.transition,k.label.duration)):(w.debug("Adding selection label",o),o.insertBefore(a))},message:function(t){var n=B.children(O.message),i=k.templates.message(w.add.variables(t));n.length>0?n.html(i):n=e("<div/>").html(i).addClass(S.message).appendTo(B)},optionValue:function(t){var n=w.escape.value(t);H.find('option[value="'+w.escape.string(n)+'"]').length>0||(w.disconnect.selectObserver(),w.is.single()&&(w.verbose("Removing previous user addition"),H.find("option."+S.addition).remove()),e("<option/>").prop("value",n).addClass(S.addition).html(t).appendTo(H),w.verbose("Adding user addition as an <option>",t),w.observe.select())},userSuggestion:function(e){var t,n=B.children(O.addition),i=w.get.item(e),o=i&&i.not(O.addition).length,a=n.length>0;if(!k.useLabels||!w.has.maxSelections()){if(""===e||o)return void n.remove();a?(n.data(P.value,e).data(P.text,e).attr("data-"+P.value,e).attr("data-"+P.text,e).removeClass(S.filtered),k.hideAdditions||(t=k.templates.addition(w.add.variables(T.addResult,e)),n.html(t)),w.verbose("Replacing user suggestion with new value",n)):(n=w.create.userChoice(e),n.prependTo(B),w.verbose("Adding item choice to menu corresponding with user choice addition",n)),k.hideAdditions&&!w.is.allFiltered()||n.addClass(S.selected).siblings().removeClass(S.selected),w.refreshItems()}},variables:function(e,t){var n,i,o=-1!==e.search("{count}"),a=-1!==e.search("{maxCount}"),r=-1!==e.search("{term}");return w.verbose("Adding templated variables to message",e),o&&(n=w.get.selectionCount(),e=e.replace("{count}",n)),a&&(n=w.get.selectionCount(),e=e.replace("{maxCount}",k.maxSelections)),r&&(i=t||w.get.query(),e=e.replace("{term}",i)),e},value:function(t,n,i){var o,a=w.get.values();if(""===t)return void w.debug("Cannot select blank values from multiselect");e.isArray(a)?(o=a.concat([t]),o=w.get.uniqueArray(o)):o=[t],w.has.selectInput()?w.can.extendSelect()&&(w.debug("Adding value to select",t,o,H),w.add.optionValue(t)):(o=o.join(k.delimiter),w.debug("Setting hidden input to delimited value",o,H)),!1===k.fireOnInit&&w.is.initialLoad()?w.verbose("Skipping onadd callback on initial load",k.onAdd):k.onAdd.call(Z,t,n,i),w.set.value(o,t,n,i),w.check.maxSelections()}},remove:{active:function(){I.removeClass(S.active)},activeLabel:function(){I.find(O.label).removeClass(S.active)},empty:function(){I.removeClass(S.empty)},loading:function(){I.removeClass(S.loading)},initialLoad:function(){v=!1},upward:function(e){(e||I).removeClass(S.upward)},leftward:function(e){(e||B).removeClass(S.leftward)},visible:function(){I.removeClass(S.visible)},activeItem:function(){Q.removeClass(S.active)},filteredItem:function(){k.useLabels&&w.has.maxSelections()||(k.useLabels&&w.is.multiple()?Q.not("."+S.active).removeClass(S.filtered):Q.removeClass(S.filtered),w.remove.empty())},optionValue:function(e){var t=w.escape.value(e),n=H.find('option[value="'+w.escape.string(t)+'"]');n.length>0&&n.hasClass(S.addition)&&(x&&(x.disconnect(),w.verbose("Temporarily disconnecting mutation observer")),n.remove(),w.verbose("Removing user addition as an <option>",t),x&&x.observe(H[0],{childList:!0,subtree:!0}))},message:function(){B.children(O.message).remove()},searchWidth:function(){V.css("width","")},searchTerm:function(){w.verbose("Cleared search term"),V.val(""),w.set.filtered()},userAddition:function(){Q.filter(O.addition).remove()},selected:function(t,n){if(!(n=k.allowAdditions?n||w.get.itemWithAdditions(t):n||w.get.item(t)))return!1;n.each(function(){var t=e(this),n=w.get.choiceText(t),i=w.get.choiceValue(t,n);w.is.multiple()?k.useLabels?(w.remove.value(i,n,t),w.remove.label(i)):(w.remove.value(i,n,t),0===w.get.selectionCount()?w.set.placeholderText():w.set.text(w.add.variables(T.count))):w.remove.value(i,n,t),t.removeClass(S.filtered).removeClass(S.active),k.useLabels&&t.removeClass(S.selected)})},selectedItem:function(){Q.removeClass(S.selected)},value:function(e,t,n){var i,o=w.get.values();w.has.selectInput()?(w.verbose("Input is <select> removing selected option",e),i=w.remove.arrayValue(e,o),w.remove.optionValue(e)):(w.verbose("Removing from delimited values",e),i=w.remove.arrayValue(e,o),i=i.join(k.delimiter)),!1===k.fireOnInit&&w.is.initialLoad()?w.verbose("No callback on initial load",k.onRemove):k.onRemove.call(Z,e,t,n),w.set.value(i,t,n),w.check.maxSelections()},arrayValue:function(t,n){return e.isArray(n)||(n=[n]),n=e.grep(n,function(e){return t!=e}),w.verbose("Removed value from delimited string",t,n),n},label:function(e,t){var n=I.find(O.label),i=n.filter("[data-"+P.value+'="'+w.escape.string(e)+'"]');w.verbose("Removing label",i),i.remove()},activeLabels:function(e){e=e||I.find(O.label).filter("."+S.active),w.verbose("Removing active label selections",e),w.remove.labels(e)},labels:function(t){t=t||I.find(O.label),w.verbose("Removing labels",t),t.each(function(){var t=e(this),n=t.data(P.value),i=void 0!==n?String(n):n,o=w.is.userValue(i);if(!1===k.onLabelRemove.call(t,n))return void w.debug("Label remove callback cancelled removal");w.remove.message(),o?(w.remove.value(i),w.remove.label(i)):w.remove.selected(i)})},tabbable:function(){w.is.searchSelection()?(w.debug("Searchable dropdown initialized"),V.removeAttr("tabindex"),B.removeAttr("tabindex")):(w.debug("Simple selection dropdown initialized"),I.removeAttr("tabindex"),B.removeAttr("tabindex"))}},has:{menuSearch:function(){return w.has.search()&&V.closest(B).length>0},search:function(){return V.length>0},sizer:function(){return N.length>0},selectInput:function(){return H.is("select")},minCharacters:function(e){return!k.minCharacters||(e=void 0!==e?String(e):String(w.get.query()),e.length>=k.minCharacters)},firstLetter:function(e,t){var n,i;return!(!e||0===e.length||"string"!=typeof t)&&(n=w.get.choiceText(e,!1),t=t.toLowerCase(),i=String(n).charAt(0).toLowerCase(),t==i)},input:function(){return H.length>0},items:function(){return Q.length>0},menu:function(){return B.length>0},message:function(){return 0!==B.children(O.message).length},label:function(e){var t=w.escape.value(e);return I.find(O.label).filter("[data-"+P.value+'="'+w.escape.string(t)+'"]').length>0},maxSelections:function(){return k.maxSelections&&w.get.selectionCount()>=k.maxSelections},allResultsFiltered:function(){var e=Q.not(O.addition);return e.filter(O.unselectable).length===e.length},userSuggestion:function(){return B.children(O.addition).length>0},query:function(){return""!==w.get.query()},value:function(t){var n=w.get.values();return!!(e.isArray(n)?n&&-1!==e.inArray(t,n):n==t)}},is:{active:function(){return I.hasClass(S.active)},bubbledLabelClick:function(t){return e(t.target).is("select, input")&&I.closest("label").length>0},bubbledIconClick:function(t){return e(t.target).closest(U).length>0},alreadySetup:function(){return I.is("select")&&void 0!==I.parent(O.dropdown).data(z)&&0===I.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):B.transition&&B.transition("is animating")},leftward:function(e){return(e||B).hasClass(S.leftward)},disabled:function(){return I.hasClass(S.disabled)},focused:function(){return n.activeElement===I[0]},focusedOnSearch:function(){return n.activeElement===V[0]},allFiltered:function(){return(w.is.multiple()||w.has.search())&&!(0==k.hideAdditions&&w.has.userSuggestion())&&!w.has.message()&&w.has.allResultsFiltered()},hidden:function(e){return!w.is.visible(e)},initialLoad:function(){return v},inObject:function(t,n){var i=!1;return e.each(n,function(e,n){if(n==t)return i=!0,!0}),i},multiple:function(){return I.hasClass(S.multiple)},remote:function(){return k.apiSettings&&w.can.useAPI()},single:function(){return!w.is.multiple()},selectMutation:function(t){var n=!1;return e.each(t,function(t,i){if(i.target&&e(i.target).is("select"))return n=!0,!0}),n},search:function(){return I.hasClass(S.search)},searchSelection:function(){return w.has.search()&&1===V.parent(O.dropdown).length},selection:function(){return I.hasClass(S.selection)},userValue:function(t){return-1!==e.inArray(t,w.get.userValues())},upward:function(e){return(e||I).hasClass(S.upward)},visible:function(e){return e?e.hasClass(S.visible):B.hasClass(S.visible)},verticallyScrollableContext:function(){var e=M.get(0)!==t&&M.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=M.get(0)!==t&&M.css("overflow-X");return"auto"==e||"scroll"==e}},can:{activate:function(e){return!!k.useLabels||(!w.has.maxSelections()||!(!w.has.maxSelections()||!e.hasClass(S.active)))},openDownward:function(e){var t,n=e||B,i=!0,o={};return n.addClass(S.loading),t={context:{scrollTop:M.scrollTop(),height:M.outerHeight()},menu:{offset:n.offset(),height:n.outerHeight()}},w.is.verticallyScrollableContext()&&(t.menu.offset.top+=t.context.scrollTop),o={above:t.context.scrollTop<=t.menu.offset.top-t.menu.height,below:t.context.scrollTop+t.context.height>=t.menu.offset.top+t.menu.height},o.below?(w.verbose("Dropdown can fit in context downward",o),i=!0):o.below||o.above?(w.verbose("Dropdown cannot fit below, opening upward",o),i=!1):(w.verbose("Dropdown cannot fit in either direction, favoring downward",o),i=!0),n.removeClass(S.loading),i},openRightward:function(e){var t,n=e||B,i=!0,o=!1;return n.addClass(S.loading),t={context:{scrollLeft:M.scrollLeft(),width:M.outerWidth()},menu:{offset:n.offset(),width:n.outerWidth()}},w.is.horizontallyScrollableContext()&&(t.menu.offset.left+=t.context.scrollLeft),o=t.menu.offset.left+t.menu.width>=t.context.scrollLeft+t.context.width,o&&(w.verbose("Dropdown cannot fit in context rightward",o),i=!1),
n.removeClass(S.loading),i},click:function(){return l||"click"==k.on},extendSelect:function(){return k.allowAdditions||k.apiSettings},show:function(){return!w.is.disabled()&&(w.has.items()||w.has.message())},useAPI:function(){return void 0!==e.fn.api}},animate:{show:function(t,n){var i,o=n||B,a=n?function(){}:function(){w.hideSubMenus(),w.hideOthers(),w.set.active()};t=e.isFunction(t)?t:function(){},w.verbose("Doing menu show animation",o),w.set.direction(n),i=w.get.transition(n),w.is.selection()&&w.set.scrollPosition(w.get.selectedItem(),!0),(w.is.hidden(o)||w.is.animating(o))&&("none"==i?(a(),o.transition("show"),t.call(Z)):void 0!==e.fn.transition&&I.transition("is supported")?o.transition({animation:i+" in",debug:k.debug,verbose:k.verbose,duration:k.duration,queue:!0,onStart:a,onComplete:function(){t.call(Z)}}):w.error(D.noTransition,i))},hide:function(t,n){var i=n||B,o=(n?k.duration:k.duration,n?function(){}:function(){w.can.click()&&w.unbind.intent(),w.remove.active()}),a=w.get.transition(n);t=e.isFunction(t)?t:function(){},(w.is.visible(i)||w.is.animating(i))&&(w.verbose("Doing menu hide animation",i),"none"==a?(o(),i.transition("hide"),t.call(Z)):void 0!==e.fn.transition&&I.transition("is supported")?i.transition({animation:a+" out",duration:k.duration,debug:k.debug,verbose:k.verbose,queue:!0,onStart:o,onComplete:function(){t.call(Z)}}):w.error(D.transition))}},hideAndClear:function(){w.remove.searchTerm(),w.has.maxSelections()||(w.has.search()?w.hide(function(){w.remove.filteredItem()}):w.hide())},delay:{show:function(){w.verbose("Delaying show event to ensure user intent"),clearTimeout(w.timer),w.timer=setTimeout(w.show,k.delay.show)},hide:function(){w.verbose("Delaying hide event to ensure user intent"),clearTimeout(w.timer),w.timer=setTimeout(w.hide,k.delay.hide)}},escape:{value:function(t){var n=e.isArray(t),i="string"==typeof t,o=!i&&!n,a=i&&-1!==t.search(F.quote),r=[];return o||!a?t:(w.debug("Encoding quote values for use in select",t),n?(e.each(t,function(e,t){r.push(t.replace(F.quote,"&quot;"))}),r):t.replace(F.quote,"&quot;"))},string:function(e){return e=String(e),e.replace(F.escape,"\\$&")}},setting:function(t,n){if(w.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,k,t);else{if(void 0===n)return k[t];e.isPlainObject(k[t])?e.extend(!0,k[t],n):k[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,w,t);else{if(void 0===n)return w[t];w[t]=n}},debug:function(){!k.silent&&k.debug&&(k.performance?w.performance.log(arguments):(w.debug=Function.prototype.bind.call(console.info,console,k.name+":"),w.debug.apply(console,arguments)))},verbose:function(){!k.silent&&k.verbose&&k.debug&&(k.performance?w.performance.log(arguments):(w.verbose=Function.prototype.bind.call(console.info,console,k.name+":"),w.verbose.apply(console,arguments)))},error:function(){k.silent||(w.error=Function.prototype.bind.call(console.error,console,k.name+":"),w.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;k.performance&&(t=(new Date).getTime(),i=c||t,n=t-i,c=t,u.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:Z,"Execution Time":n})),clearTimeout(w.performance.timer),w.performance.timer=setTimeout(w.performance.display,500)},display:function(){var t=k.name+":",n=0;c=!1,clearTimeout(w.performance.timer),e.each(u,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(void 0!==console.group||void 0!==console.table)&&u.length>0&&(console.groupCollapsed(t),console.table?console.table(u):e.each(u,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),u=[]}},invoke:function(t,n,i){var a,r,s,l=K;return n=n||m,i=Z||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(r=l[i],!1):(w.error(D.method,t),!1);l=l[i]}})),e.isFunction(r)?s=r.apply(i,n):void 0!==r&&(s=r),e.isArray(o)?o.push(s):void 0!==o?o=[o,s]:void 0!==s&&(o=s),r}},f?(void 0===K&&w.initialize(),w.invoke(d)):(void 0!==K&&K.invoke("destroy"),w.initialize())}),void 0!==o?o:a},e.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",values:!1,apiSettings:!1,selectOnKeydown:!0,minCharacters:0,filterRemoteData:!1,saveRemoteData:!0,throttle:200,context:t,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(t,n){return e(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",leftward:"left",visible:"visible"}},e.fn.dropdown.settings.templates={dropdown:function(t){var n=t.placeholder||!1,i=(t.values,"");return i+='<i class="dropdown icon"></i>',t.placeholder?i+='<div class="default text">'+n+"</div>":i+='<div class="text"></div>',i+='<div class="menu">',e.each(t.values,function(e,t){i+=t.disabled?'<div class="disabled item" data-value="'+t.value+'">'+t.name+"</div>":'<div class="item" data-value="'+t.value+'">'+t.name+"</div>"}),i+="</div>"},menu:function(t,n){var i=t[n.values]||{},o="";return e.each(i,function(e,t){var i=t[n.text]?'data-text="'+t[n.text]+'"':"",a=t[n.disabled]?"disabled ":"";o+='<div class="'+a+'item" data-value="'+t[n.value]+'"'+i+">",o+=t[n.name],o+="</div>"}),o},label:function(e,t){return t+'<i class="delete icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.embed=function(n){var i,o=e(this),a=o.selector||"",r=(new Date).getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);return o.each(function(){var d,f=e.isPlainObject(n)?e.extend(!0,{},e.fn.embed.settings,n):e.extend({},e.fn.embed.settings),m=f.selector,g=f.className,v=f.sources,p=f.error,h=f.metadata,b=f.namespace,y=f.templates,x="."+b,C="module-"+b,w=(e(t),e(this)),k=w.find(m.placeholder),S=w.find(m.icon),T=w.find(m.embed),A=this,R=w.data(C);d={initialize:function(){d.debug("Initializing embed"),d.determine.autoplay(),d.create(),d.bind.events(),d.instantiate()},instantiate:function(){d.verbose("Storing instance of module",d),R=d,w.data(C,d)},destroy:function(){d.verbose("Destroying previous instance of embed"),d.reset(),w.removeData(C).off(x)},refresh:function(){d.verbose("Refreshing selector cache"),k=w.find(m.placeholder),S=w.find(m.icon),T=w.find(m.embed)},bind:{events:function(){d.has.placeholder()&&(d.debug("Adding placeholder events"),w.on("click"+x,m.placeholder,d.createAndShow).on("click"+x,m.icon,d.createAndShow))}},create:function(){d.get.placeholder()?d.createPlaceholder():d.createAndShow()},createPlaceholder:function(e){var t=d.get.icon(),n=d.get.url();d.generate.embed(n);e=e||d.get.placeholder(),w.html(y.placeholder(e,t)),d.debug("Creating placeholder for embed",e,t)},createEmbed:function(t){d.refresh(),t=t||d.get.url(),T=e("<div/>").addClass(g.embed).html(d.generate.embed(t)).appendTo(w),f.onCreate.call(A,t),d.debug("Creating embed object",T)},changeEmbed:function(e){T.html(d.generate.embed(e))},createAndShow:function(){d.createEmbed(),d.show()},change:function(e,t,n){d.debug("Changing video to ",e,t,n),w.data(h.source,e).data(h.id,t),n?w.data(h.url,n):w.removeData(h.url),d.has.embed()?d.changeEmbed():d.create()},reset:function(){d.debug("Clearing embed and showing placeholder"),d.remove.active(),d.remove.embed(),d.showPlaceholder(),f.onReset.call(A)},show:function(){d.debug("Showing embed"),d.set.active(),f.onDisplay.call(A)},hide:function(){d.debug("Hiding embed"),d.showPlaceholder()},showPlaceholder:function(){d.debug("Showing placeholder image"),d.remove.active(),f.onPlaceholderDisplay.call(A)},get:{id:function(){return f.id||w.data(h.id)},placeholder:function(){return f.placeholder||w.data(h.placeholder)},icon:function(){return f.icon?f.icon:void 0!==w.data(h.icon)?w.data(h.icon):d.determine.icon()},source:function(e){return f.source?f.source:void 0!==w.data(h.source)?w.data(h.source):d.determine.source()},type:function(){var e=d.get.source();return void 0!==v[e]&&v[e].type},url:function(){return f.url?f.url:void 0!==w.data(h.url)?w.data(h.url):d.determine.url()}},determine:{autoplay:function(){d.should.autoplay()&&(f.autoplay=!0)},source:function(t){var n=!1;return t=t||d.get.url(),t&&e.each(v,function(e,i){if(-1!==t.search(i.domain))return n=e,!1}),n},icon:function(){var e=d.get.source();return void 0!==v[e]&&v[e].icon},url:function(){var e,t=f.id||w.data(h.id),n=f.source||w.data(h.source);return e=void 0!==v[n]&&v[n].url.replace("{id}",t),e&&w.data(h.url,e),e}},set:{active:function(){w.addClass(g.active)}},remove:{active:function(){w.removeClass(g.active)},embed:function(){T.empty()}},encode:{parameters:function(e){var t,n=[];for(t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&amp;")}},generate:{embed:function(e){d.debug("Generating embed html");var t,n,i=d.get.source();return e=d.get.url(e),e?(n=d.generate.parameters(i),t=y.iframe(e,n)):d.error(p.noURL,w),t},parameters:function(t,n){var i=v[t]&&void 0!==v[t].parameters?v[t].parameters(f):{};return n=n||f.parameters,n&&(i=e.extend({},i,n)),i=f.onEmbed(i),d.encode.parameters(i)}},has:{embed:function(){return T.length>0},placeholder:function(){return f.placeholder||w.data(h.placeholder)}},should:{autoplay:function(){return"auto"===f.autoplay?f.placeholder||void 0!==w.data(h.placeholder):f.autoplay}},is:{video:function(){return"video"==d.get.type()}},setting:function(t,n){if(d.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,f,t);else{if(void 0===n)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],n):f[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,d,t);else{if(void 0===n)return d[t];d[t]=n}},debug:function(){!f.silent&&f.debug&&(f.performance?d.performance.log(arguments):(d.debug=Function.prototype.bind.call(console.info,console,f.name+":"),d.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?d.performance.log(arguments):(d.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),d.verbose.apply(console,arguments)))},error:function(){f.silent||(d.error=Function.prototype.bind.call(console.error,console,f.name+":"),d.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;f.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:A,"Execution Time":n})),clearTimeout(d.performance.timer),d.performance.timer=setTimeout(d.performance.display,500)},display:function(){var t=f.name+":",n=0;r=!1,clearTimeout(d.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),o.length>1&&(t+=" ("+o.length+")"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,o){var a,r,s,l=R;return n=n||u,o=A||o,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(r=l[i],!1):(d.error(p.method,t),!1);l=l[i]}})),e.isFunction(r)?s=r.apply(o,n):void 0!==r&&(s=r),e.isArray(i)?i.push(s):void 0!==i?i=[i,s]:void 0!==s&&(i=s),r}},c?(void 0===R&&d.initialize(),d.invoke(l)):(void 0!==R&&R.invoke("destroy"),d.initialize())}),void 0!==i?i:this},e.fn.embed.settings={name:"Embed",namespace:"embed",silent:!1,debug:!1,verbose:!1,performance:!0,icon:!1,source:!1,url:!1,id:!1,autoplay:"auto",color:"#444444",hd:!0,brandedUI:!1,parameters:!1,onDisplay:function(){},onPlaceholderDisplay:function(){},onReset:function(){},onCreate:function(e){},onEmbed:function(e){return e},metadata:{id:"id",icon:"icon",placeholder:"placeholder",source:"source",url:"url"},error:{noURL:"No URL specified",method:"The method you called is not defined"},className:{active:"active",embed:"embed"},selector:{embed:".embed",placeholder:".placeholder",icon:".icon"},sources:{youtube:{name:"youtube",type:"video",icon:"video play",domain:"youtube.com",url:"//www.youtube.com/embed/{id}",parameters:function(e){return{autohide:!e.brandedUI,autoplay:e.autoplay,color:e.color||void 0,hq:e.hd,jsapi:e.api,modestbranding:!e.brandedUI}}},vimeo:{name:"vimeo",type:"video",icon:"video play",domain:"vimeo.com",url:"//player.vimeo.com/video/{id}",parameters:function(e){return{api:e.api,autoplay:e.autoplay,byline:e.brandedUI,color:e.color||void 0,portrait:e.brandedUI,title:e.brandedUI}}}},templates:{iframe:function(e,t){var n=e;return t&&(n+="?"+t),'<iframe src="'+n+'" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'},placeholder:function(e,t){var n="";return t&&(n+='<i class="'+t+' icon"></i>'),e&&(n+='<img class="placeholder" src="'+e+'">'),n}},api:!1,onPause:function(){},onPlay:function(){},onStop:function(){}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.modal=function(i){var o,a=e(this),r=e(t),s=e(n),l=e("body"),c=a.selector||"",u=(new Date).getTime(),d=[],f=arguments[0],m="string"==typeof f,g=[].slice.call(arguments,1),v=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return a.each(function(){var a,p,h,b,y,x,C,w,k,S=e.isPlainObject(i)?e.extend(!0,{},e.fn.modal.settings,i):e.extend({},e.fn.modal.settings),T=S.selector,A=S.className,R=S.namespace,P=S.error,E="."+R,F="module-"+R,O=e(this),D=e(S.context),q=O.find(T.close),j=this,z=O.data(F),I=!1;k={initialize:function(){k.verbose("Initializing dimmer",D),k.create.id(),k.create.dimmer(),k.refreshModals(),k.bind.events(),S.observeChanges&&k.observeChanges(),k.instantiate()},instantiate:function(){k.verbose("Storing instance of modal"),z=k,O.data(F,z)},create:{dimmer:function(){var t={debug:S.debug,dimmerName:"modals"},n=e.extend(!0,t,S.dimmerSettings);if(void 0===e.fn.dimmer)return void k.error(P.dimmer);k.debug("Creating dimmer"),b=D.dimmer(n),S.detachable?(k.verbose("Modal is detachable, moving content into dimmer"),b.dimmer("add content",O)):k.set.undetached(),y=b.dimmer("get dimmer")},id:function(){C=(Math.random().toString(16)+"000000000").substr(2,8),x="."+C,k.verbose("Creating unique id for element",C)}},destroy:function(){k.verbose("Destroying previous modal"),O.removeData(F).off(E),r.off(x),y.off(x),q.off(E),D.dimmer("destroy")},observeChanges:function(){"MutationObserver"in t&&(w=new MutationObserver(function(e){k.debug("DOM tree modified, refreshing"),k.refresh()}),w.observe(j,{childList:!0,subtree:!0}),k.debug("Setting up mutation observer",w))},refresh:function(){k.remove.scrolling(),k.cacheSizes(),k.set.screenHeight(),k.set.type(),k.set.position()},refreshModals:function(){p=O.siblings(T.modal),a=p.add(O)},attachEvents:function(t,n){var i=e(t);n=e.isFunction(k[n])?k[n]:k.toggle,i.length>0?(k.debug("Attaching modal events to element",t,n),i.off(E).on("click"+E,n)):k.error(P.notFound,t)},bind:{events:function(){k.verbose("Attaching events"),O.on("click"+E,T.close,k.event.close).on("click"+E,T.approve,k.event.approve).on("click"+E,T.deny,k.event.deny),r.on("resize"+x,k.event.resize)}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{approve:function(){if(I||!1===S.onApprove.call(j,e(this)))return void k.verbose("Approve callback returned false cancelling hide");I=!0,k.hide(function(){I=!1})},deny:function(){if(I||!1===S.onDeny.call(j,e(this)))return void k.verbose("Deny callback returned false cancelling hide");I=!0,k.hide(function(){I=!1})},close:function(){k.hide()},click:function(t){var i=e(t.target),o=i.closest(T.modal).length>0,a=e.contains(n.documentElement,t.target);!o&&a&&(k.debug("Dimmer clicked, hiding all modals"),k.is.active()&&(k.remove.clickaway(),S.allowMultiple?k.hide():k.hideAll()))},debounce:function(e,t){clearTimeout(k.timer),k.timer=setTimeout(e,t)},keyboard:function(e){27==e.which&&(S.closable?(k.debug("Escape key pressed hiding modal"),k.hide()):k.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){b.dimmer("is active")&&(k.is.animating()||k.is.active())&&v(k.refresh)}},toggle:function(){k.is.active()||k.is.animating()?k.hide():k.show()},show:function(t){t=e.isFunction(t)?t:function(){},k.refreshModals(),k.set.dimmerSettings(),k.showModal(t)},hide:function(t){t=e.isFunction(t)?t:function(){},k.refreshModals(),k.hideModal(t)},showModal:function(t){t=e.isFunction(t)?t:function(){},k.is.animating()||!k.is.active()?(k.showDimmer(),k.cacheSizes(),k.set.position(),k.set.screenHeight(),k.set.type(),k.set.clickaway(),!S.allowMultiple&&k.others.active()?k.hideOthers(k.showModal):(S.allowMultiple&&S.detachable&&O.detach().appendTo(y),S.onShow.call(j),S.transition&&void 0!==e.fn.transition&&O.transition("is supported")?(k.debug("Showing modal with css animations"),O.transition({debug:S.debug,animation:S.transition+" in",queue:S.queue,duration:S.duration,useFailSafe:!0,onComplete:function(){S.onVisible.apply(j),S.keyboardShortcuts&&k.add.keyboardShortcuts(),k.save.focus(),k.set.active(),S.autofocus&&k.set.autofocus(),t()}})):k.error(P.noTransition))):k.debug("Modal is already visible")},hideModal:function(t,n){if(t=e.isFunction(t)?t:function(){},k.debug("Hiding modal"),!1===S.onHide.call(j,e(this)))return void k.verbose("Hide callback returned false cancelling hide");(k.is.animating()||k.is.active())&&(S.transition&&void 0!==e.fn.transition&&O.transition("is supported")?(k.remove.active(),O.transition({debug:S.debug,animation:S.transition+" out",queue:S.queue,duration:S.duration,useFailSafe:!0,onStart:function(){k.others.active()||n||k.hideDimmer(),S.keyboardShortcuts&&k.remove.keyboardShortcuts()},onComplete:function(){S.onHidden.call(j),k.restore.focus(),t()}})):k.error(P.noTransition))},showDimmer:function(){b.dimmer("is animating")||!b.dimmer("is active")?(k.debug("Showing dimmer"),b.dimmer("show")):k.debug("Dimmer already visible")},hideDimmer:function(){if(!b.dimmer("is animating")&&!b.dimmer("is active"))return void k.debug("Dimmer is not visible cannot hide");b.dimmer("hide",function(){k.remove.clickaway(),k.remove.screenHeight()})},hideAll:function(t){var n=a.filter("."+A.active+", ."+A.animating);t=e.isFunction(t)?t:function(){},n.length>0&&(k.debug("Hiding all visible modals"),k.hideDimmer(),n.modal("hide modal",t))},hideOthers:function(t){var n=p.filter("."+A.active+", ."+A.animating);t=e.isFunction(t)?t:function(){},n.length>0&&(k.debug("Hiding other modals",p),n.modal("hide modal",t,!0))},others:{active:function(){return p.filter("."+A.active).length>0},animating:function(){return p.filter("."+A.animating).length>0}},add:{keyboardShortcuts:function(){k.verbose("Adding keyboard shortcuts"),s.on("keyup"+E,k.event.keyboard)}},save:{focus:function(){h=e(n.activeElement).blur()}},restore:{focus:function(){h&&h.length>0&&h.focus()}},remove:{active:function(){O.removeClass(A.active)},clickaway:function(){S.closable&&y.off("click"+x)},bodyStyle:function(){""===l.attr("style")&&(k.verbose("Removing style attribute"),l.removeAttr("style"))},screenHeight:function(){k.debug("Removing page height"),l.css("height","")},keyboardShortcuts:function(){k.verbose("Removing keyboard shortcuts"),s.off("keyup"+E)},scrolling:function(){b.removeClass(A.scrolling),O.removeClass(A.scrolling)}},cacheSizes:function(){O.addClass(A.loading);var i=O.prop("scrollHeight"),o=O.outerHeight();void 0!==k.cache&&0===o||(k.cache={pageHeight:e(n).outerHeight(),height:o+S.offset,scrollHeight:i+S.offset,contextHeight:"body"==S.context?e(t).height():b.height()},k.cache.topOffset=-k.cache.height/2),O.removeClass(A.loading),k.debug("Caching modal and container sizes",k.cache)},can:{fit:function(){var e=k.cache.contextHeight,t=k.cache.contextHeight/2,n=k.cache.topOffset,i=k.cache.scrollHeight,o=k.cache.height,a=S.padding,r=t+n;return i>o?r+i+a<e:o+2*a<e}},is:{active:function(){return O.hasClass(A.active)},animating:function(){return O.transition("is supported")?O.transition("is animating"):O.is(":visible")},scrolling:function(){return b.hasClass(A.scrolling)},modernBrowser:function(){return!(t.ActiveXObject||"ActiveXObject"in t)}},set:{autofocus:function(){var e=O.find("[tabindex], :input").filter(":visible"),t=e.filter("[autofocus]"),n=t.length>0?t.first():e.first();n.length>0&&n.focus()},clickaway:function(){S.closable&&y.on("click"+x,k.event.click)},dimmerSettings:function(){if(void 0===e.fn.dimmer)return void k.error(P.dimmer);var t={debug:S.debug,dimmerName:"modals",variation:!1,closable:"auto",duration:{show:S.duration,hide:S.duration}},n=e.extend(!0,t,S.dimmerSettings);S.inverted?(n.variation=void 0!==n.variation?n.variation+" inverted":"inverted",y.addClass(A.inverted)):y.removeClass(A.inverted),S.blurring?b.addClass(A.blurring):b.removeClass(A.blurring),D.dimmer("setting",n)},screenHeight:function(){k.can.fit()?l.css("height",""):(k.debug("Modal is taller than page content, resizing page height"),l.css("height",k.cache.height+2*S.padding))},active:function(){O.addClass(A.active)},scrolling:function(){b.addClass(A.scrolling),O.addClass(A.scrolling)},type:function(){k.can.fit()?(k.verbose("Modal fits on screen"),k.others.active()||k.others.animating()||k.remove.scrolling()):(k.verbose("Modal cannot fit on screen setting to scrolling"),k.set.scrolling())},position:function(){k.verbose("Centering modal on page",k.cache),k.can.fit()?O.css({top:"",marginTop:k.cache.topOffset}):O.css({marginTop:"",top:s.scrollTop()})},undetached:function(){b.addClass(A.undetached)}},setting:function(t,n){if(k.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,S,t);else{if(void 0===n)return S[t];e.isPlainObject(S[t])?e.extend(!0,S[t],n):S[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,k,t);else{if(void 0===n)return k[t];k[t]=n}},debug:function(){!S.silent&&S.debug&&(S.performance?k.performance.log(arguments):(k.debug=Function.prototype.bind.call(console.info,console,S.name+":"),k.debug.apply(console,arguments)))},verbose:function(){!S.silent&&S.verbose&&S.debug&&(S.performance?k.performance.log(arguments):(k.verbose=Function.prototype.bind.call(console.info,console,S.name+":"),k.verbose.apply(console,arguments)))},error:function(){S.silent||(k.error=Function.prototype.bind.call(console.error,console,S.name+":"),k.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;S.performance&&(t=(new Date).getTime(),i=u||t,n=t-i,u=t,d.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:j,"Execution Time":n})),clearTimeout(k.performance.timer),k.performance.timer=setTimeout(k.performance.display,500)},display:function(){var t=S.name+":",n=0;u=!1,clearTimeout(k.performance.timer),e.each(d,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",c&&(t+=" '"+c+"'"),(void 0!==console.group||void 0!==console.table)&&d.length>0&&(console.groupCollapsed(t),console.table?console.table(d):e.each(d,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),d=[]}},invoke:function(t,n,i){var a,r,s,l=z;return n=n||g,i=j||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]&&(r=l[i],!1);l=l[i]}})),e.isFunction(r)?s=r.apply(i,n):void 0!==r&&(s=r),e.isArray(o)?o.push(s):void 0!==o?o=[o,s]:void 0!==s&&(o=s),r}},m?(void 0===z&&k.initialize(),k.invoke(f)):(void 0!==z&&z.invoke("destroy"),k.initialize())}),void 0!==o?o:this},e.fn.modal.settings={name:"Modal",namespace:"modal",silent:!1,debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,inverted:!1,blurring:!1,dimmerSettings:{closable:!1,useCSS:!0},keyboardShortcuts:!0,context:"body",queue:!1,duration:500,offset:0,transition:"scale",padding:50,onShow:function(){},onVisible:function(){},onHide:function(){return!0},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",inverted:"inverted",loading:"loading",scrolling:"scrolling",undetached:"undetached"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.nag=function(n){var i,o=e(this),a=o.selector||"",r=(new Date).getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);return o.each(function(){var o,d=e.isPlainObject(n)?e.extend(!0,{},e.fn.nag.settings,n):e.extend({},e.fn.nag.settings),f=(d.className,d.selector),m=d.error,g=d.namespace,v="."+g,p=g+"-module",h=e(this),b=(h.find(f.close),e(d.context?d.context:"body")),y=this,x=h.data(p);t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame;o={initialize:function(){o.verbose("Initializing element"),h.on("click"+v,f.close,o.dismiss).data(p,o),d.detachable&&h.parent()[0]!==b[0]&&h.detach().prependTo(b),d.displayTime>0&&setTimeout(o.hide,d.displayTime),o.show()},destroy:function(){o.verbose("Destroying instance"),h.removeData(p).off(v)},show:function(){o.should.show()&&!h.is(":visible")&&(o.debug("Showing nag",d.animation.show),"fade"==d.animation.show?h.fadeIn(d.duration,d.easing):h.slideDown(d.duration,d.easing))},hide:function(){o.debug("Showing nag",d.animation.hide),"fade"==d.animation.show?h.fadeIn(d.duration,d.easing):h.slideUp(d.duration,d.easing)},onHide:function(){o.debug("Removing nag",d.animation.hide),h.remove(),d.onHide&&d.onHide()},dismiss:function(e){d.storageMethod&&o.storage.set(d.key,d.value),o.hide(),e.stopImmediatePropagation(),e.preventDefault()},should:{show:function(){return d.persist?(o.debug("Persistent nag is set, can show nag"),!0):o.storage.get(d.key)!=d.value.toString()?(o.debug("Stored value is not set, can show nag",o.storage.get(d.key)),!0):(o.debug("Stored value is set, cannot show nag",o.storage.get(d.key)),!1)}},get:{storageOptions:function(){var e={};return d.expires&&(e.expires=d.expires),d.domain&&(e.domain=d.domain),d.path&&(e.path=d.path),e}},clear:function(){o.storage.remove(d.key)},storage:{set:function(n,i){var a=o.get.storageOptions();if("localstorage"==d.storageMethod&&void 0!==t.localStorage)t.localStorage.setItem(n,i),o.debug("Value stored using local storage",n,i);else if("sessionstorage"==d.storageMethod&&void 0!==t.sessionStorage)t.sessionStorage.setItem(n,i),o.debug("Value stored using session storage",n,i);else{if(void 0===e.cookie)return void o.error(m.noCookieStorage);e.cookie(n,i,a),o.debug("Value stored using cookie",n,i,a)}},get:function(n,i){var a;return"localstorage"==d.storageMethod&&void 0!==t.localStorage?a=t.localStorage.getItem(n):"sessionstorage"==d.storageMethod&&void 0!==t.sessionStorage?a=t.sessionStorage.getItem(n):void 0!==e.cookie?a=e.cookie(n):o.error(m.noCookieStorage),"undefined"!=a&&"null"!=a&&void 0!==a&&null!==a||(a=void 0),a},remove:function(n){var i=o.get.storageOptions();"localstorage"==d.storageMethod&&void 0!==t.localStorage?t.localStorage.removeItem(n):"sessionstorage"==d.storageMethod&&void 0!==t.sessionStorage?t.sessionStorage.removeItem(n):void 0!==e.cookie?e.removeCookie(n,i):o.error(m.noStorage)}},setting:function(t,n){if(o.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,d,t);else{if(void 0===n)return d[t];e.isPlainObject(d[t])?e.extend(!0,d[t],n):d[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,o,t);else{if(void 0===n)return o[t];o[t]=n}},debug:function(){!d.silent&&d.debug&&(d.performance?o.performance.log(arguments):(o.debug=Function.prototype.bind.call(console.info,console,d.name+":"),o.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?o.performance.log(arguments):(o.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),o.verbose.apply(console,arguments)))},error:function(){d.silent||(o.error=Function.prototype.bind.call(console.error,console,d.name+":"),o.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;d.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:y,"Execution Time":n})),clearTimeout(o.performance.timer),o.performance.timer=setTimeout(o.performance.display,500)},display:function(){var t=d.name+":",n=0;r=!1,clearTimeout(o.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),
console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,a){var r,s,l,c=x;return n=n||u,a=y||a,"string"==typeof t&&void 0!==c&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,i){var a=n!=r?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(void 0!==c[a])return s=c[a],!1;if(!e.isPlainObject(c[i])||n==r)return void 0!==c[i]?(s=c[i],!1):(o.error(m.method,t),!1);c=c[i]}})),e.isFunction(s)?l=s.apply(a,n):void 0!==s&&(l=s),e.isArray(i)?i.push(l):void 0!==i?i=[i,l]:void 0!==l&&(i=l),s}},c?(void 0===x&&o.initialize(),o.invoke(l)):(void 0!==x&&x.invoke("destroy"),o.initialize())}),void 0!==i?i:this},e.fn.nag.settings={name:"Nag",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"Nag",persist:!1,displayTime:0,animation:{show:"slide",hide:"slide"},context:!1,detachable:!1,expires:30,domain:!1,path:"/",storageMethod:"cookie",key:"nag",value:"dismiss",error:{noCookieStorage:"$.cookie is not included. A storage solution is required.",noStorage:"Neither $.cookie or store is defined. A storage solution is required for storing state",method:"The method you called is not defined."},className:{bottom:"bottom",fixed:"fixed"},selector:{close:".close.icon"},speed:500,easing:"easeOutQuad",onHide:function(){}},e.extend(e.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.popup=function(i){var o,a=e(this),r=e(n),s=e(t),l=e("body"),c=a.selector||"",u=(new Date).getTime(),d=[],f=arguments[0],m="string"==typeof f,g=[].slice.call(arguments,1);return a.each(function(){var a,v,p,h,b,y,x=e.isPlainObject(i)?e.extend(!0,{},e.fn.popup.settings,i):e.extend({},e.fn.popup.settings),C=x.selector,w=x.className,k=x.error,S=x.metadata,T=x.namespace,A="."+x.namespace,R="module-"+T,P=e(this),E=e(x.context),F=e(x.scrollContext),O=e(x.boundary),D=x.target?e(x.target):P,q=0,j=!1,z=!1,I=this,M=P.data(R);y={initialize:function(){y.debug("Initializing",P),y.createID(),y.bind.events(),!y.exists()&&x.preserve&&y.create(),x.observeChanges&&y.observeChanges(),y.instantiate()},instantiate:function(){y.verbose("Storing instance",y),M=y,P.data(R,M)},observeChanges:function(){"MutationObserver"in t&&(p=new MutationObserver(y.event.documentChanged),p.observe(n,{childList:!0,subtree:!0}),y.debug("Setting up mutation observer",p))},refresh:function(){x.popup?a=e(x.popup).eq(0):x.inline&&(a=D.nextAll(C.popup).eq(0),x.popup=a),x.popup?(a.addClass(w.loading),v=y.get.offsetParent(),a.removeClass(w.loading),x.movePopup&&y.has.popup()&&y.get.offsetParent(a)[0]!==v[0]&&(y.debug("Moving popup to the same offset parent as target"),a.detach().appendTo(v))):v=x.inline?y.get.offsetParent(D):y.has.popup()?y.get.offsetParent(a):l,v.is("html")&&v[0]!==l[0]&&(y.debug("Setting page as offset parent"),v=l),y.get.variation()&&y.set.variation()},reposition:function(){y.refresh(),y.set.position()},destroy:function(){y.debug("Destroying previous module"),p&&p.disconnect(),a&&!x.preserve&&y.removePopup(),clearTimeout(y.hideTimer),clearTimeout(y.showTimer),y.unbind.close(),y.unbind.events(),P.removeData(R)},event:{start:function(t){var n=e.isPlainObject(x.delay)?x.delay.show:x.delay;clearTimeout(y.hideTimer),z||(y.showTimer=setTimeout(y.show,n))},end:function(){var t=e.isPlainObject(x.delay)?x.delay.hide:x.delay;clearTimeout(y.showTimer),y.hideTimer=setTimeout(y.hide,t)},touchstart:function(e){z=!0,y.show()},resize:function(){y.is.visible()&&y.set.position()},documentChanged:function(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==I||e(t).find(I).length>0)&&(y.debug("Element removed from DOM, tearing down events"),y.destroy())})})},hideGracefully:function(t){var i=e(t.target),o=e.contains(n.documentElement,t.target),a=i.closest(C.popup).length>0;t&&!a&&o?(y.debug("Click occurred outside popup hiding popup"),y.hide()):y.debug("Click was inside popup, keeping popup open")}},create:function(){var t=y.get.html(),n=y.get.title(),i=y.get.content();t||i||n?(y.debug("Creating pop-up html"),t||(t=x.templates.popup({title:n,content:i})),a=e("<div/>").addClass(w.popup).data(S.activator,P).html(t),x.inline?(y.verbose("Inserting popup element inline",a),a.insertAfter(P)):(y.verbose("Appending popup element to body",a),a.appendTo(E)),y.refresh(),y.set.variation(),x.hoverable&&y.bind.popup(),x.onCreate.call(a,I)):0!==D.next(C.popup).length?(y.verbose("Pre-existing popup found"),x.inline=!0,x.popup=D.next(C.popup).data(S.activator,P),y.refresh(),x.hoverable&&y.bind.popup()):x.popup?(e(x.popup).data(S.activator,P),y.verbose("Used popup specified in settings"),y.refresh(),x.hoverable&&y.bind.popup()):y.debug("No content specified skipping display",I)},createID:function(){b=(Math.random().toString(16)+"000000000").substr(2,8),h="."+b,y.verbose("Creating unique id for element",b)},toggle:function(){y.debug("Toggling pop-up"),y.is.hidden()?(y.debug("Popup is hidden, showing pop-up"),y.unbind.close(),y.show()):(y.debug("Popup is visible, hiding pop-up"),y.hide())},show:function(e){if(e=e||function(){},y.debug("Showing pop-up",x.transition),y.is.hidden()&&(!y.is.active()||!y.is.dropdown())){if(y.exists()||y.create(),!1===x.onShow.call(a,I))return void y.debug("onShow callback returned false, cancelling popup animation");x.preserve||x.popup||y.refresh(),a&&y.set.position()&&(y.save.conditions(),x.exclusive&&y.hideAll(),y.animate.show(e))}},hide:function(e){if(e=e||function(){},y.is.visible()||y.is.animating()){if(!1===x.onHide.call(a,I))return void y.debug("onHide callback returned false, cancelling popup animation");y.remove.visible(),y.unbind.close(),y.restore.conditions(),y.animate.hide(e)}},hideAll:function(){e(C.popup).filter("."+w.popupVisible).each(function(){e(this).data(S.activator).popup("hide")})},exists:function(){return!!a&&(x.inline||x.popup?y.has.popup():a.closest(E).length>=1)},removePopup:function(){y.has.popup()&&!x.popup&&(y.debug("Removing popup",a),a.remove(),a=void 0,x.onRemove.call(a,I))},save:{conditions:function(){y.cache={title:P.attr("title")},y.cache.title&&P.removeAttr("title"),y.verbose("Saving original attributes",y.cache.title)}},restore:{conditions:function(){return y.cache&&y.cache.title&&(P.attr("title",y.cache.title),y.verbose("Restoring original attributes",y.cache.title)),!0}},supports:{svg:function(){return"undefined"==typeof SVGGraphicsElement}},animate:{show:function(t){t=e.isFunction(t)?t:function(){},x.transition&&void 0!==e.fn.transition&&P.transition("is supported")?(y.set.visible(),a.transition({animation:x.transition+" in",queue:!1,debug:x.debug,verbose:x.verbose,duration:x.duration,onComplete:function(){y.bind.close(),t.call(a,I),x.onVisible.call(a,I)}})):y.error(k.noTransition)},hide:function(t){if(t=e.isFunction(t)?t:function(){},y.debug("Hiding pop-up"),!1===x.onHide.call(a,I))return void y.debug("onHide callback returned false, cancelling popup animation");x.transition&&void 0!==e.fn.transition&&P.transition("is supported")?a.transition({animation:x.transition+" out",queue:!1,duration:x.duration,debug:x.debug,verbose:x.verbose,onComplete:function(){y.reset(),t.call(a,I),x.onHidden.call(a,I)}}):y.error(k.noTransition)}},change:{content:function(e){a.html(e)}},get:{html:function(){return P.removeData(S.html),P.data(S.html)||x.html},title:function(){return P.removeData(S.title),P.data(S.title)||x.title},content:function(){return P.removeData(S.content),P.data(S.content)||P.attr("title")||x.content},variation:function(){return P.removeData(S.variation),P.data(S.variation)||x.variation},popup:function(){return a},popupOffset:function(){return a.offset()},calculations:function(){var e,n=D[0],i=O[0]==t,o=x.inline||x.popup&&x.movePopup?D.position():D.offset(),r=i?{top:0,left:0}:O.offset(),l={},c=i?{top:s.scrollTop(),left:s.scrollLeft()}:{top:0,left:0};return l={target:{element:D[0],width:D.outerWidth(),height:D.outerHeight(),top:o.top,left:o.left,margin:{}},popup:{width:a.outerWidth(),height:a.outerHeight()},parent:{width:v.outerWidth(),height:v.outerHeight()},screen:{top:r.top,left:r.left,scroll:{top:c.top,left:c.left},width:O.width(),height:O.height()}},x.setFluidWidth&&y.is.fluid()&&(l.container={width:a.parent().outerWidth()},l.popup.width=l.container.width),l.target.margin.top=x.inline?parseInt(t.getComputedStyle(n).getPropertyValue("margin-top"),10):0,l.target.margin.left=x.inline?y.is.rtl()?parseInt(t.getComputedStyle(n).getPropertyValue("margin-right"),10):parseInt(t.getComputedStyle(n).getPropertyValue("margin-left"),10):0,e=l.screen,l.boundary={top:e.top+e.scroll.top,bottom:e.top+e.scroll.top+e.height,left:e.left+e.scroll.left,right:e.left+e.scroll.left+e.width},l},id:function(){return b},startEvent:function(){return"hover"==x.on?"mouseenter":"focus"==x.on&&"focus"},scrollEvent:function(){return"scroll"},endEvent:function(){return"hover"==x.on?"mouseleave":"focus"==x.on&&"blur"},distanceFromBoundary:function(e,t){var n,i,o={};return t=t||y.get.calculations(),n=t.popup,i=t.boundary,e&&(o={top:e.top-i.top,left:e.left-i.left,right:i.right-(e.left+n.width),bottom:i.bottom-(e.top+n.height)},y.verbose("Distance from boundaries determined",e,o)),o},offsetParent:function(t){var n=void 0!==t?t[0]:P[0],i=n.parentNode,o=e(i);if(i)for(var a="none"===o.css("transform"),r="static"===o.css("position"),s=o.is("html");i&&!s&&r&&a;)i=i.parentNode,o=e(i),a="none"===o.css("transform"),r="static"===o.css("position"),s=o.is("html");return o&&o.length>0?o:e()},positions:function(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1}},nextPosition:function(e){var t=e.split(" "),n=t[0],i=t[1],o={top:"bottom",bottom:"top",left:"right",right:"left"},a={left:"center",center:"right",right:"left"},r={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"},s="top"==n||"bottom"==n,l=!1,c=!1,u=!1;return j||(y.verbose("All available positions available"),j=y.get.positions()),y.debug("Recording last position tried",e),j[e]=!0,"opposite"===x.prefer&&(u=[o[n],i],u=u.join(" "),l=!0===j[u],y.debug("Trying opposite strategy",u)),"adjacent"===x.prefer&&s&&(u=[n,a[i]],u=u.join(" "),c=!0===j[u],y.debug("Trying adjacent strategy",u)),(c||l)&&(y.debug("Using backup position",u),u=r[e]),u}},set:{position:function(e,t){if(0===D.length||0===a.length)return void y.error(k.notFound);var n,i,o,r,s,l,c,u;if(t=t||y.get.calculations(),e=e||P.data(S.position)||x.position,n=P.data(S.offset)||x.offset,i=x.distanceAway,o=t.target,r=t.popup,s=t.parent,0===o.width&&0===o.height&&!y.is.svg(o.element))return y.debug("Popup target is hidden, no action taken"),!1;switch(x.inline&&(y.debug("Adding margin to calculation",o.margin),"left center"==e||"right center"==e?(n+=o.margin.top,i+=-o.margin.left):"top left"==e||"top center"==e||"top right"==e?(n+=o.margin.left,i-=o.margin.top):(n+=o.margin.left,i+=o.margin.top)),y.debug("Determining popup position from calculations",e,t),y.is.rtl()&&(e=e.replace(/left|right/g,function(e){return"left"==e?"right":"left"}),y.debug("RTL: Popup position updated",e)),q==x.maxSearchDepth&&"string"==typeof x.lastResort&&(e=x.lastResort),e){case"top left":l={top:"auto",bottom:s.height-o.top+i,left:o.left+n,right:"auto"};break;case"top center":l={bottom:s.height-o.top+i,left:o.left+o.width/2-r.width/2+n,top:"auto",right:"auto"};break;case"top right":l={bottom:s.height-o.top+i,right:s.width-o.left-o.width-n,top:"auto",left:"auto"};break;case"left center":l={top:o.top+o.height/2-r.height/2+n,right:s.width-o.left+i,left:"auto",bottom:"auto"};break;case"right center":l={top:o.top+o.height/2-r.height/2+n,left:o.left+o.width+i,bottom:"auto",right:"auto"};break;case"bottom left":l={top:o.top+o.height+i,left:o.left+n,bottom:"auto",right:"auto"};break;case"bottom center":l={top:o.top+o.height+i,left:o.left+o.width/2-r.width/2+n,bottom:"auto",right:"auto"};break;case"bottom right":l={top:o.top+o.height+i,right:s.width-o.left-o.width-n,left:"auto",bottom:"auto"}}if(void 0===l&&y.error(k.invalidPosition,e),y.debug("Calculated popup positioning values",l),a.css(l).removeClass(w.position).addClass(e).addClass(w.loading),c=y.get.popupOffset(),u=y.get.distanceFromBoundary(c,t),y.is.offstage(u,e)){if(y.debug("Position is outside viewport",e),q<x.maxSearchDepth)return q++,e=y.get.nextPosition(e),y.debug("Trying new position",e),!!a&&y.set.position(e,t);if(!x.lastResort)return y.debug("Popup could not find a position to display",a),y.error(k.cannotPlace,I),y.remove.attempts(),y.remove.loading(),y.reset(),x.onUnplaceable.call(a,I),!1;y.debug("No position found, showing with last position")}return y.debug("Position is on stage",e),y.remove.attempts(),y.remove.loading(),x.setFluidWidth&&y.is.fluid()&&y.set.fluidWidth(t),!0},fluidWidth:function(e){e=e||y.get.calculations(),y.debug("Automatically setting element width to parent width",e.parent.width),a.css("width",e.container.width)},variation:function(e){(e=e||y.get.variation())&&y.has.popup()&&(y.verbose("Adding variation to popup",e),a.addClass(e))},visible:function(){P.addClass(w.visible)}},remove:{loading:function(){a.removeClass(w.loading)},variation:function(e){(e=e||y.get.variation())&&(y.verbose("Removing variation",e),a.removeClass(e))},visible:function(){P.removeClass(w.visible)},attempts:function(){y.verbose("Resetting all searched positions"),q=0,j=!1}},bind:{events:function(){y.debug("Binding popup events to module"),"click"==x.on&&P.on("click"+A,y.toggle),"hover"==x.on&&P.on("touchstart"+A,y.event.touchstart),y.get.startEvent()&&P.on(y.get.startEvent()+A,y.event.start).on(y.get.endEvent()+A,y.event.end),x.target&&y.debug("Target set to element",D),s.on("resize"+h,y.event.resize)},popup:function(){y.verbose("Allowing hover events on popup to prevent closing"),a&&y.has.popup()&&a.on("mouseenter"+A,y.event.start).on("mouseleave"+A,y.event.end)},close:function(){(!0===x.hideOnScroll||"auto"==x.hideOnScroll&&"click"!=x.on)&&y.bind.closeOnScroll(),"hover"==x.on&&z&&y.bind.touchClose(),"click"==x.on&&x.closable&&y.bind.clickaway()},closeOnScroll:function(){y.verbose("Binding scroll close event to document"),F.one(y.get.scrollEvent()+h,y.event.hideGracefully)},touchClose:function(){y.verbose("Binding popup touchclose event to document"),r.on("touchstart"+h,function(e){y.verbose("Touched away from popup"),y.event.hideGracefully.call(I,e)})},clickaway:function(){y.verbose("Binding popup close event to document"),r.on("click"+h,function(e){y.verbose("Clicked away from popup"),y.event.hideGracefully.call(I,e)})}},unbind:{events:function(){s.off(h),P.off(A)},close:function(){r.off(h),F.off(h)}},has:{popup:function(){return a&&a.length>0}},is:{offstage:function(t,n){var i=[];return e.each(t,function(e,t){t<-x.jitter&&(y.debug("Position exceeds allowable distance from edge",e,t,n),i.push(e))}),i.length>0},svg:function(e){return y.supports.svg()&&e instanceof SVGGraphicsElement},active:function(){return P.hasClass(w.active)},animating:function(){return void 0!==a&&a.hasClass(w.animating)},fluid:function(){return void 0!==a&&a.hasClass(w.fluid)},visible:function(){return void 0!==a&&a.hasClass(w.popupVisible)},dropdown:function(){return P.hasClass(w.dropdown)},hidden:function(){return!y.is.visible()},rtl:function(){return"rtl"==P.css("direction")}},reset:function(){y.remove.visible(),x.preserve?void 0!==e.fn.transition&&a.transition("remove transition"):y.removePopup()},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,x,t);else{if(void 0===n)return x[t];x[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,y,t);else{if(void 0===n)return y[t];y[t]=n}},debug:function(){!x.silent&&x.debug&&(x.performance?y.performance.log(arguments):(y.debug=Function.prototype.bind.call(console.info,console,x.name+":"),y.debug.apply(console,arguments)))},verbose:function(){!x.silent&&x.verbose&&x.debug&&(x.performance?y.performance.log(arguments):(y.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),y.verbose.apply(console,arguments)))},error:function(){x.silent||(y.error=Function.prototype.bind.call(console.error,console,x.name+":"),y.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;x.performance&&(t=(new Date).getTime(),i=u||t,n=t-i,u=t,d.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:I,"Execution Time":n})),clearTimeout(y.performance.timer),y.performance.timer=setTimeout(y.performance.display,500)},display:function(){var t=x.name+":",n=0;u=!1,clearTimeout(y.performance.timer),e.each(d,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",c&&(t+=" '"+c+"'"),(void 0!==console.group||void 0!==console.table)&&d.length>0&&(console.groupCollapsed(t),console.table?console.table(d):e.each(d,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),d=[]}},invoke:function(t,n,i){var a,r,s,l=M;return n=n||g,i=I||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]&&(r=l[i],!1);l=l[i]}})),e.isFunction(r)?s=r.apply(i,n):void 0!==r&&(s=r),e.isArray(o)?o.push(s):void 0!==o?o=[o,s]:void 0!==s&&(o=s),r}},m?(void 0===M&&y.initialize(),y.invoke(f)):(void 0!==M&&M.invoke("destroy"),y.initialize())}),void 0!==o?o:this},e.fn.popup.settings={name:"Popup",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"popup",observeChanges:!0,onCreate:function(){},onRemove:function(){},onShow:function(){},onVisible:function(){},onHide:function(){},onUnplaceable:function(){},onHidden:function(){},on:"hover",boundary:t,addTouchEvents:!0,position:"top left",variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",scrollContext:t,prefer:"opposite",lastResort:!1,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible",popupVisible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function(e){var t=/[&<>"'`]/g,n=/[&<>"'`]/,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},o=function(e){return i[e]};return n.test(e)?e.replace(t,o):e},popup:function(t){var n="",i=e.fn.popup.settings.templates.escape;return void 0!==typeof t&&(void 0!==typeof t.title&&t.title&&(t.title=i(t.title),n+='<div class="header">'+t.title+"</div>"),void 0!==typeof t.content&&t.content&&(t.content=i(t.content),n+='<div class="content">'+t.content+"</div>")),n}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();void 0!==t&&t.Math==Math||("undefined"!=typeof self&&self.Math==Math?self:Function("return this")());e.fn.progress=function(t){var i,o=e(this),a=o.selector||"",r=(new Date).getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);return o.each(function(){var o,d,f=e.isPlainObject(t)?e.extend(!0,{},e.fn.progress.settings,t):e.extend({},e.fn.progress.settings),m=f.className,g=f.metadata,v=f.namespace,p=f.selector,h=f.error,b="."+v,y="module-"+v,x=e(this),C=e(this).find(p.bar),w=e(this).find(p.progress),k=e(this).find(p.label),S=this,T=x.data(y),A=!1;d={initialize:function(){d.debug("Initializing progress bar",f),d.set.duration(),d.set.transitionEvent(),d.read.metadata(),d.read.settings(),d.instantiate()},instantiate:function(){d.verbose("Storing instance of progress",d),T=d,x.data(y,d)},destroy:function(){d.verbose("Destroying previous progress for",x),clearInterval(T.interval),d.remove.state(),x.removeData(y),T=void 0},reset:function(){d.remove.nextValue(),d.update.progress(0)},complete:function(){(void 0===d.percent||d.percent<100)&&(d.remove.progressPoll(),d.set.percent(100))},read:{metadata:function(){var e={percent:x.data(g.percent),total:x.data(g.total),value:x.data(g.value)};e.percent&&(d.debug("Current percent value set from metadata",e.percent),d.set.percent(e.percent)),e.total&&(d.debug("Total value set from metadata",e.total),d.set.total(e.total)),e.value&&(d.debug("Current value set from metadata",e.value),d.set.value(e.value),d.set.progress(e.value))},settings:function(){!1!==f.total&&(d.debug("Current total set in settings",f.total),d.set.total(f.total)),!1!==f.value&&(d.debug("Current value set in settings",f.value),d.set.value(f.value),d.set.progress(d.value)),!1!==f.percent&&(d.debug("Current percent set in settings",f.percent),d.set.percent(f.percent))}},bind:{transitionEnd:function(e){var t=d.get.transitionEnd();C.one(t+b,function(t){clearTimeout(d.failSafeTimer),e.call(this,t)}),d.failSafeTimer=setTimeout(function(){C.triggerHandler(t)},f.duration+f.failSafeDelay),d.verbose("Adding fail safe timer",d.timer)}},increment:function(e){var t,n;d.has.total()?(t=d.get.value(),e=e||1,n=t+e):(t=d.get.percent(),e=e||d.get.randomValue(),n=t+e,100,d.debug("Incrementing percentage by",t,n)),n=d.get.normalizedValue(n),d.set.progress(n)},decrement:function(e){var t,n,i=d.get.total();i?(t=d.get.value(),e=e||1,n=t-e,d.debug("Decrementing value by",e,t)):(t=d.get.percent(),e=e||d.get.randomValue(),n=t-e,d.debug("Decrementing percentage by",e,t)),n=d.get.normalizedValue(n),d.set.progress(n)},has:{progressPoll:function(){return d.progressPoll},total:function(){return!1!==d.get.total()}},get:{text:function(e){var t=d.value||0,n=d.total||0,i=A?d.get.displayPercent():d.percent||0,o=d.total>0?n-t:100-i;return e=e||"",e=e.replace("{value}",t).replace("{total}",n).replace("{left}",o).replace("{percent}",i),d.verbose("Adding variables to progress bar text",e),e},normalizedValue:function(e){if(e<0)return d.debug("Value cannot decrement below 0"),0;if(d.has.total()){if(e>d.total)return d.debug("Value cannot increment above total",d.total),d.total}else if(e>100)return d.debug("Value cannot increment above 100 percent"),100;return e},updateInterval:function(){return"auto"==f.updateInterval?f.duration:f.updateInterval},randomValue:function(){return d.debug("Generating random increment percentage"),Math.floor(Math.random()*f.random.max+f.random.min)},numericValue:function(e){return"string"==typeof e?""!==e.replace(/[^\d.]/g,"")&&+e.replace(/[^\d.]/g,""):e},transitionEnd:function(){var e,t=n.createElement("element"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]},displayPercent:function(){var e=C.width(),t=x.width(),n=parseInt(C.css("min-width"),10),i=e>n?e/t*100:d.percent;return f.precision>0?Math.round(i*(10*f.precision))/(10*f.precision):Math.round(i)},percent:function(){return d.percent||0},value:function(){return d.nextValue||d.value||0},total:function(){return d.total||!1}},create:{progressPoll:function(){d.progressPoll=setTimeout(function(){d.update.toNextValue(),d.remove.progressPoll()},d.get.updateInterval())}},is:{complete:function(){return d.is.success()||d.is.warning()||d.is.error()},success:function(){return x.hasClass(m.success)},warning:function(){return x.hasClass(m.warning)},error:function(){return x.hasClass(m.error)},active:function(){return x.hasClass(m.active)},visible:function(){return x.is(":visible")}},remove:{progressPoll:function(){d.verbose("Removing progress poll timer"),d.progressPoll&&(clearTimeout(d.progressPoll),delete d.progressPoll)},nextValue:function(){d.verbose("Removing progress value stored for next update"),delete d.nextValue},state:function(){d.verbose("Removing stored state"),delete d.total,delete d.percent,delete d.value},active:function(){d.verbose("Removing active state"),x.removeClass(m.active)},success:function(){d.verbose("Removing success state"),x.removeClass(m.success)},warning:function(){d.verbose("Removing warning state"),x.removeClass(m.warning)},error:function(){d.verbose("Removing error state"),x.removeClass(m.error)}},set:{barWidth:function(e){e>100?d.error(h.tooHigh,e):e<0?d.error(h.tooLow,e):(C.css("width",e+"%"),x.attr("data-percent",parseInt(e,10)))},duration:function(e){e=e||f.duration,e="number"==typeof e?e+"ms":e,d.verbose("Setting progress bar transition duration",e),C.css({"transition-duration":e})},percent:function(e){e="string"==typeof e?+e.replace("%",""):e,e=f.precision>0?Math.round(e*(10*f.precision))/(10*f.precision):Math.round(e),d.percent=e,d.has.total()||(d.value=f.precision>0?Math.round(e/100*d.total*(10*f.precision))/(10*f.precision):Math.round(e/100*d.total*10)/10,f.limitValues&&(d.value=d.value>100?100:d.value<0?0:d.value)),d.set.barWidth(e),d.set.labelInterval(),d.set.labels(),f.onChange.call(S,e,d.value,d.total)},labelInterval:function(){var t=function(){d.verbose("Bar finished animating, removing continuous label updates"),clearInterval(d.interval),A=!1,d.set.labels()};clearInterval(d.interval),d.bind.transitionEnd(t),A=!0,d.interval=setInterval(function(){e.contains(n.documentElement,S)||(clearInterval(d.interval),A=!1),d.set.labels()},f.framerate)},labels:function(){d.verbose("Setting both bar progress and outer label text"),d.set.barLabel(),d.set.state()},label:function(e){(e=e||"")&&(e=d.get.text(e),d.verbose("Setting label to text",e),k.text(e))},state:function(e){e=void 0!==e?e:d.percent,100===e?f.autoSuccess&&!(d.is.warning()||d.is.error()||d.is.success())?(d.set.success(),d.debug("Automatically triggering success at 100%")):(d.verbose("Reached 100% removing active state"),d.remove.active(),d.remove.progressPoll()):e>0?(d.verbose("Adjusting active progress bar label",e),d.set.active()):(d.remove.active(),d.set.label(f.text.active))},barLabel:function(e){void 0!==e?w.text(d.get.text(e)):"ratio"==f.label&&d.total?(d.verbose("Adding ratio to bar label"),w.text(d.get.text(f.text.ratio))):"percent"==f.label&&(d.verbose("Adding percentage to bar label"),w.text(d.get.text(f.text.percent)))},active:function(e){e=e||f.text.active,d.debug("Setting active state"),f.showActivity&&!d.is.active()&&x.addClass(m.active),d.remove.warning(),d.remove.error(),d.remove.success(),e=f.onLabelUpdate("active",e,d.value,d.total),e&&d.set.label(e),d.bind.transitionEnd(function(){f.onActive.call(S,d.value,d.total)})},success:function(e){e=e||f.text.success||f.text.active,d.debug("Setting success state"),x.addClass(m.success),d.remove.active(),d.remove.warning(),d.remove.error(),d.complete(),f.text.success?(e=f.onLabelUpdate("success",e,d.value,d.total),d.set.label(e)):(e=f.onLabelUpdate("active",e,d.value,d.total),d.set.label(e)),d.bind.transitionEnd(function(){f.onSuccess.call(S,d.total)})},warning:function(e){e=e||f.text.warning,d.debug("Setting warning state"),x.addClass(m.warning),d.remove.active(),d.remove.success(),d.remove.error(),d.complete(),e=f.onLabelUpdate("warning",e,d.value,d.total),e&&d.set.label(e),d.bind.transitionEnd(function(){f.onWarning.call(S,d.value,d.total)})},error:function(e){e=e||f.text.error,d.debug("Setting error state"),x.addClass(m.error),d.remove.active(),d.remove.success(),d.remove.warning(),d.complete(),e=f.onLabelUpdate("error",e,d.value,d.total),e&&d.set.label(e),d.bind.transitionEnd(function(){f.onError.call(S,d.value,d.total)})},transitionEvent:function(){o=d.get.transitionEnd()},total:function(e){d.total=e},value:function(e){d.value=e},progress:function(e){d.has.progressPoll()?(d.debug("Updated within interval, setting next update to use new value",e),d.set.nextValue(e)):(d.debug("First update in progress update interval, immediately updating",e),d.update.progress(e),d.create.progressPoll())},nextValue:function(e){d.nextValue=e}},update:{toNextValue:function(){var e=d.nextValue;e&&(d.debug("Update interval complete using last updated value",e),d.update.progress(e),d.remove.nextValue())},progress:function(e){var t;e=d.get.numericValue(e),!1===e&&d.error(h.nonNumeric,e),e=d.get.normalizedValue(e),d.has.total()?(d.set.value(e),t=e/d.total*100,d.debug("Calculating percent complete from total",t),d.set.percent(t)):(t=e,d.debug("Setting value to exact percentage value",t),d.set.percent(t))}},setting:function(t,n){if(d.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,f,t);else{if(void 0===n)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],n):f[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,d,t);else{if(void 0===n)return d[t];d[t]=n}},debug:function(){!f.silent&&f.debug&&(f.performance?d.performance.log(arguments):(d.debug=Function.prototype.bind.call(console.info,console,f.name+":"),d.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?d.performance.log(arguments):(d.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),d.verbose.apply(console,arguments)))},error:function(){f.silent||(d.error=Function.prototype.bind.call(console.error,console,f.name+":"),d.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;f.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:S,"Execution Time":n})),clearTimeout(d.performance.timer),d.performance.timer=setTimeout(d.performance.display,500)},display:function(){var t=f.name+":",n=0;r=!1,clearTimeout(d.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,o){var a,r,s,l=T;return n=n||u,o=S||o,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(r=l[i],!1):(d.error(h.method,t),!1);l=l[i]}})),e.isFunction(r)?s=r.apply(o,n):void 0!==r&&(s=r),e.isArray(i)?i.push(s):void 0!==i?i=[i,s]:void 0!==s&&(i=s),r}},c?(void 0===T&&d.initialize(),d.invoke(l)):(void 0!==T&&T.invoke("destroy"),d.initialize())}),void 0!==i?i:this},e.fn.progress.settings={name:"Progress",namespace:"progress",silent:!1,debug:!1,verbose:!1,performance:!0,random:{min:2,max:5},duration:300,updateInterval:"auto",autoSuccess:!0,showActivity:!0,limitValues:!0,label:"percent",precision:0,framerate:1e3/30,percent:!1,total:!1,value:!1,failSafeDelay:100,onLabelUpdate:function(e,t,n,i){return t},onChange:function(e,t,n){},onSuccess:function(e){},onActive:function(e,t){},onError:function(e,t){},onWarning:function(e,t){},error:{method:"The method you called is not defined.",nonNumeric:"Progress value is non numeric",tooHigh:"Value specified is above 100%",tooLow:"Value specified is below 0%"},regExp:{variable:/\{\$*[A-z0-9]+\}/g},metadata:{percent:"percent",total:"total",value:"value"},selector:{bar:"> .bar",label:"> .label",progress:".bar > .progress"},text:{active:!1,error:!1,success:!1,warning:!1,
percent:"{percent}%",ratio:"{value} of {total}"},className:{active:"active",error:"error",success:"success",warning:"warning"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.rating=function(t){var n,i=e(this),o=i.selector||"",a=(new Date).getTime(),r=[],s=arguments[0],l="string"==typeof s,c=[].slice.call(arguments,1);return i.each(function(){var u,d,f=e.isPlainObject(t)?e.extend(!0,{},e.fn.rating.settings,t):e.extend({},e.fn.rating.settings),m=f.namespace,g=f.className,v=f.metadata,p=f.selector,h=(f.error,"."+m),b="module-"+m,y=this,x=e(this).data(b),C=e(this),w=C.find(p.icon);d={initialize:function(){d.verbose("Initializing rating module",f),0===w.length&&d.setup.layout(),f.interactive?d.enable():d.disable(),d.set.initialLoad(),d.set.rating(d.get.initialRating()),d.remove.initialLoad(),d.instantiate()},instantiate:function(){d.verbose("Instantiating module",f),x=d,C.data(b,d)},destroy:function(){d.verbose("Destroying previous instance",x),d.remove.events(),C.removeData(b)},refresh:function(){w=C.find(p.icon)},setup:{layout:function(){var t=d.get.maxRating(),n=e.fn.rating.settings.templates.icon(t);d.debug("Generating icon html dynamically"),C.html(n),d.refresh()}},event:{mouseenter:function(){var t=e(this);t.nextAll().removeClass(g.selected),C.addClass(g.selected),t.addClass(g.selected).prevAll().addClass(g.selected)},mouseleave:function(){C.removeClass(g.selected),w.removeClass(g.selected)},click:function(){var t=e(this),n=d.get.rating(),i=w.index(t)+1;("auto"==f.clearable?1===w.length:f.clearable)&&n==i?d.clearRating():d.set.rating(i)}},clearRating:function(){d.debug("Clearing current rating"),d.set.rating(0)},bind:{events:function(){d.verbose("Binding events"),C.on("mouseenter"+h,p.icon,d.event.mouseenter).on("mouseleave"+h,p.icon,d.event.mouseleave).on("click"+h,p.icon,d.event.click)}},remove:{events:function(){d.verbose("Removing events"),C.off(h)},initialLoad:function(){u=!1}},enable:function(){d.debug("Setting rating to interactive mode"),d.bind.events(),C.removeClass(g.disabled)},disable:function(){d.debug("Setting rating to read-only mode"),d.remove.events(),C.addClass(g.disabled)},is:{initialLoad:function(){return u}},get:{initialRating:function(){return void 0!==C.data(v.rating)?(C.removeData(v.rating),C.data(v.rating)):f.initialRating},maxRating:function(){return void 0!==C.data(v.maxRating)?(C.removeData(v.maxRating),C.data(v.maxRating)):f.maxRating},rating:function(){var e=w.filter("."+g.active).length;return d.verbose("Current rating retrieved",e),e}},set:{rating:function(e){var t=e-1>=0?e-1:0,n=w.eq(t);C.removeClass(g.selected),w.removeClass(g.selected).removeClass(g.active),e>0&&(d.verbose("Setting current rating to",e),n.prevAll().addBack().addClass(g.active)),d.is.initialLoad()||f.onRate.call(y,e)},initialLoad:function(){u=!0}},setting:function(t,n){if(d.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,f,t);else{if(void 0===n)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],n):f[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,d,t);else{if(void 0===n)return d[t];d[t]=n}},debug:function(){!f.silent&&f.debug&&(f.performance?d.performance.log(arguments):(d.debug=Function.prototype.bind.call(console.info,console,f.name+":"),d.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?d.performance.log(arguments):(d.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),d.verbose.apply(console,arguments)))},error:function(){f.silent||(d.error=Function.prototype.bind.call(console.error,console,f.name+":"),d.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;f.performance&&(t=(new Date).getTime(),i=a||t,n=t-i,a=t,r.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:y,"Execution Time":n})),clearTimeout(d.performance.timer),d.performance.timer=setTimeout(d.performance.display,500)},display:function(){var t=f.name+":",n=0;a=!1,clearTimeout(d.performance.timer),e.each(r,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",o&&(t+=" '"+o+"'"),i.length>1&&(t+=" ("+i.length+")"),(void 0!==console.group||void 0!==console.table)&&r.length>0&&(console.groupCollapsed(t),console.table?console.table(r):e.each(r,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),r=[]}},invoke:function(t,i,o){var a,r,s,l=x;return i=i||c,o=y||o,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]&&(r=l[i],!1);l=l[i]}})),e.isFunction(r)?s=r.apply(o,i):void 0!==r&&(s=r),e.isArray(n)?n.push(s):void 0!==n?n=[n,s]:void 0!==s&&(n=s),r}},l?(void 0===x&&d.initialize(),d.invoke(s)):(void 0!==x&&x.invoke("destroy"),d.initialize())}),void 0!==n?n:this},e.fn.rating.settings={name:"Rating",namespace:"rating",slent:!1,debug:!1,verbose:!1,performance:!0,initialRating:0,interactive:!0,maxRating:4,clearable:"auto",fireOnInit:!1,onRate:function(e){},error:{method:"The method you called is not defined",noMaximum:"No maximum rating specified. Cannot generate HTML automatically"},metadata:{rating:"rating",maxRating:"maxRating"},className:{active:"active",disabled:"disabled",selected:"selected",loading:"loading"},selector:{icon:".icon"},templates:{icon:function(e){for(var t=1,n="";t<=e;)n+='<i class="icon"></i>',t++;return n}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.search=function(i){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return e(this).each(function(){var f,m=e.isPlainObject(i)?e.extend(!0,{},e.fn.search.settings,i):e.extend({},e.fn.search.settings),g=m.className,v=m.metadata,p=m.regExp,h=m.fields,b=m.selector,y=m.error,x=m.namespace,C="."+x,w=x+"-module",k=e(this),S=k.find(b.prompt),T=k.find(b.searchButton),A=k.find(b.results),R=k.find(b.result),P=k.find(b.category),E=this,F=k.data(w),O=!1,D=!1;f={initialize:function(){f.verbose("Initializing module"),f.determine.searchFields(),f.bind.events(),f.set.type(),f.create.results(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),F=f,k.data(w,f)},destroy:function(){f.verbose("Destroying instance"),k.off(C).removeData(w)},refresh:function(){f.debug("Refreshing selector cache"),S=k.find(b.prompt),T=k.find(b.searchButton),P=k.find(b.category),A=k.find(b.results),R=k.find(b.result)},refreshResults:function(){A=k.find(b.results),R=k.find(b.result)},bind:{events:function(){f.verbose("Binding events to search"),m.automatic&&(k.on(f.get.inputEvent()+C,b.prompt,f.event.input),S.attr("autocomplete","off")),k.on("focus"+C,b.prompt,f.event.focus).on("blur"+C,b.prompt,f.event.blur).on("keydown"+C,b.prompt,f.handleKeyboard).on("click"+C,b.searchButton,f.query).on("mousedown"+C,b.results,f.event.result.mousedown).on("mouseup"+C,b.results,f.event.result.mouseup).on("click"+C,b.result,f.event.result.click)}},determine:{searchFields:function(){i&&void 0!==i.searchFields&&(m.searchFields=i.searchFields)}},event:{input:function(){m.searchDelay?(clearTimeout(f.timer),f.timer=setTimeout(function(){f.is.focused()&&f.query()},m.searchDelay)):f.query()},focus:function(){f.set.focus(),m.searchOnFocus&&f.has.minimumCharacters()&&f.query(function(){f.can.show()&&f.showResults()})},blur:function(e){var t=n.activeElement===this,i=function(){f.cancel.query(),f.remove.focus(),f.timer=setTimeout(f.hideResults,m.hideDelay)};t||(D=!1,f.resultsClicked?(f.debug("Determining if user action caused search to close"),k.one("click.close"+C,b.results,function(e){if(f.is.inMessage(e)||O)return void S.focus();O=!1,f.is.animating()||f.is.hidden()||i()})):(f.debug("Input blurred without user action, closing results"),i()))},result:{mousedown:function(){f.resultsClicked=!0},mouseup:function(){f.resultsClicked=!1},click:function(n){f.debug("Search result selected");var i=e(this),o=i.find(b.title).eq(0),a=i.is("a[href]")?i:i.find("a[href]").eq(0),r=a.attr("href")||!1,s=a.attr("target")||!1,l=(o.html(),o.length>0&&o.text()),c=f.get.results(),u=i.data(v.result)||f.get.result(l,c);if(e.isFunction(m.onSelect)&&!1===m.onSelect.call(E,u,c))return f.debug("Custom onSelect callback cancelled default select action"),void(O=!0);f.hideResults(),l&&f.set.value(l),r&&(f.verbose("Opening search link found in result",a),"_blank"==s||n.ctrlKey?t.open(r):t.location.href=r)}}},handleKeyboard:function(e){var t,n=k.find(b.result),i=k.find(b.category),o=n.filter("."+g.active),a=n.index(o),r=n.length,s=o.length>0,l=e.which,c={backspace:8,enter:13,escape:27,upArrow:38,downArrow:40};if(l==c.escape&&(f.verbose("Escape key pressed, blurring search field"),f.hideResults(),D=!0),f.is.visible())if(l==c.enter){if(f.verbose("Enter key pressed, selecting active result"),n.filter("."+g.active).length>0)return f.event.result.click.call(n.filter("."+g.active),e),e.preventDefault(),!1}else l==c.upArrow&&s?(f.verbose("Up key pressed, changing active result"),t=a-1<0?a:a-1,i.removeClass(g.active),n.removeClass(g.active).eq(t).addClass(g.active).closest(i).addClass(g.active),e.preventDefault()):l==c.downArrow&&(f.verbose("Down key pressed, changing active result"),t=a+1>=r?a:a+1,i.removeClass(g.active),n.removeClass(g.active).eq(t).addClass(g.active).closest(i).addClass(g.active),e.preventDefault());else l==c.enter&&(f.verbose("Enter key pressed, executing query"),f.query(),f.set.buttonPressed(),S.one("keyup",f.remove.buttonFocus))},setup:{api:function(t,n){var i={debug:m.debug,on:!1,cache:!0,action:"search",urlData:{query:t},onSuccess:function(e){f.parse.response.call(E,e,t),n()},onFailure:function(){f.displayMessage(y.serverError),n()},onAbort:function(e){},onError:f.error};e.extend(!0,i,m.apiSettings),f.verbose("Setting up API request",i),k.api(i)}},can:{useAPI:function(){return void 0!==e.fn.api},show:function(){return f.is.focused()&&!f.is.visible()&&!f.is.empty()},transition:function(){return m.transition&&void 0!==e.fn.transition&&k.transition("is supported")}},is:{animating:function(){return A.hasClass(g.animating)},hidden:function(){return A.hasClass(g.hidden)},inMessage:function(t){if(t.target){var i=e(t.target);return e.contains(n.documentElement,t.target)&&i.closest(b.message).length>0}},empty:function(){return""===A.html()},visible:function(){return A.filter(":visible").length>0},focused:function(){return S.filter(":focus").length>0}},get:{inputEvent:function(){var e=S[0];return void 0!==e&&void 0!==e.oninput?"input":void 0!==e&&void 0!==e.onpropertychange?"propertychange":"keyup"},value:function(){return S.val()},results:function(){return k.data(v.results)},result:function(t,n){var i=["title","id"],o=!1;return t=void 0!==t?t:f.get.value(),n=void 0!==n?n:f.get.results(),"category"===m.type?(f.debug("Finding result that matches",t),e.each(n,function(n,a){if(e.isArray(a.results)&&(o=f.search.object(t,a.results,i)[0]))return!1})):(f.debug("Finding result in results object",t),o=f.search.object(t,n,i)[0]),o||!1}},select:{firstResult:function(){f.verbose("Selecting first result"),R.first().addClass(g.active)}},set:{focus:function(){k.addClass(g.focus)},loading:function(){k.addClass(g.loading)},value:function(e){f.verbose("Setting search input value",e),S.val(e)},type:function(e){e=e||m.type,"category"==m.type&&k.addClass(m.type)},buttonPressed:function(){T.addClass(g.pressed)}},remove:{loading:function(){k.removeClass(g.loading)},focus:function(){k.removeClass(g.focus)},buttonPressed:function(){T.removeClass(g.pressed)}},query:function(t){t=e.isFunction(t)?t:function(){};var n=f.get.value(),i=f.read.cache(n);t=t||function(){},f.has.minimumCharacters()?(i?(f.debug("Reading result from cache",n),f.save.results(i.results),f.addResults(i.html),f.inject.id(i.results),t()):(f.debug("Querying for",n),e.isPlainObject(m.source)||e.isArray(m.source)?(f.search.local(n),t()):f.can.useAPI()?f.search.remote(n,t):(f.error(y.source),t())),m.onSearchQuery.call(E,n)):f.hideResults()},search:{local:function(e){var t,n=f.search.object(e,m.content);f.set.loading(),f.save.results(n),f.debug("Returned local search results",n),t=f.generateResults({results:n}),f.remove.loading(),f.addResults(t),f.inject.id(n),f.write.cache(e,{html:t,results:n})},remote:function(t,n){n=e.isFunction(n)?n:function(){},k.api("is loading")&&k.api("abort"),f.setup.api(t,n),k.api("query")},object:function(t,n,i){var o=[],a=[],r=t.toString().replace(p.escape,"\\$&"),s=new RegExp(p.beginsWith+r,"i"),l=function(t,n){var i=-1==e.inArray(n,o),r=-1==e.inArray(n,a);i&&r&&t.push(n)};return n=n||m.source,i=void 0!==i?i:m.searchFields,e.isArray(i)||(i=[i]),void 0===n||!1===n?(f.error(y.source),[]):(e.each(i,function(i,r){e.each(n,function(e,n){"string"==typeof n[r]&&(-1!==n[r].search(s)?l(o,n):m.searchFullText&&f.fuzzySearch(t,n[r])&&l(a,n))})}),e.merge(o,a))}},fuzzySearch:function(e,t){var n=t.length,i=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},parse:{response:function(e,t){var n=f.generateResults(e);f.verbose("Parsing server response",e),void 0!==e&&void 0!==t&&void 0!==e[h.results]&&(f.addResults(n),f.inject.id(e[h.results]),f.write.cache(t,{html:n,results:e[h.results]}),f.save.results(e[h.results]))}},cancel:{query:function(){f.can.useAPI()&&k.api("abort")}},has:{minimumCharacters:function(){return f.get.value().length>=m.minCharacters},results:function(){return 0!==A.length&&""!=A.html()}},clear:{cache:function(e){var t=k.data(v.cache);e?e&&t&&t[e]&&(f.debug("Removing value from cache",e),delete t[e],k.data(v.cache,t)):(f.debug("Clearing cache",e),k.removeData(v.cache))}},read:{cache:function(e){var t=k.data(v.cache);return!!m.cache&&(f.verbose("Checking cache for generated html for query",e),"object"==typeof t&&void 0!==t[e]&&t[e])}},create:{id:function(e,t){var n,i,o=e+1;return void 0!==t?(n=String.fromCharCode(97+t),i=n+o,f.verbose("Creating category result id",i)):(i=o,f.verbose("Creating result id",i)),i},results:function(){0===A.length&&(A=e("<div />").addClass(g.results).appendTo(k))}},inject:{result:function(e,t,n){f.verbose("Injecting result into results");var i=void 0!==n?A.children().eq(n).children(b.result).eq(t):A.children(b.result).eq(t);f.verbose("Injecting results metadata",i),i.data(v.result,e)},id:function(t){f.debug("Injecting unique ids into results");var n=0,i=0;return"category"===m.type?e.each(t,function(t,o){i=0,e.each(o.results,function(e,t){var a=o.results[e];void 0===a.id&&(a.id=f.create.id(i,n)),f.inject.result(a,i,n),i++}),n++}):e.each(t,function(e,n){var o=t[e];void 0===o.id&&(o.id=f.create.id(i)),f.inject.result(o,i),i++}),t}},save:{results:function(e){f.verbose("Saving current search results to metadata",e),k.data(v.results,e)}},write:{cache:function(e,t){var n=void 0!==k.data(v.cache)?k.data(v.cache):{};m.cache&&(f.verbose("Writing generated html to cache",e,t),n[e]=t,k.data(v.cache,n))}},addResults:function(t){if(e.isFunction(m.onResultsAdd)&&!1===m.onResultsAdd.call(A,t))return f.debug("onResultsAdd callback cancelled default action"),!1;t?(A.html(t),f.refreshResults(),m.selectFirstResult&&f.select.firstResult(),f.showResults()):f.hideResults(function(){A.empty()})},showResults:function(t){t=e.isFunction(t)?t:function(){},D||!f.is.visible()&&f.has.results()&&(f.can.transition()?(f.debug("Showing results with css animations"),A.transition({animation:m.transition+" in",debug:m.debug,verbose:m.verbose,duration:m.duration,onComplete:function(){t()},queue:!0})):(f.debug("Showing results with javascript"),A.stop().fadeIn(m.duration,m.easing)),m.onResultsOpen.call(A))},hideResults:function(t){t=e.isFunction(t)?t:function(){},f.is.visible()&&(f.can.transition()?(f.debug("Hiding results with css animations"),A.transition({animation:m.transition+" out",debug:m.debug,verbose:m.verbose,duration:m.duration,onComplete:function(){t()},queue:!0})):(f.debug("Hiding results with javascript"),A.stop().fadeOut(m.duration,m.easing)),m.onResultsClose.call(A))},generateResults:function(t){f.debug("Generating html from response",t);var n=m.templates[m.type],i=e.isPlainObject(t[h.results])&&!e.isEmptyObject(t[h.results]),o=e.isArray(t[h.results])&&t[h.results].length>0,a="";return i||o?(m.maxResults>0&&(i?"standard"==m.type&&f.error(y.maxResults):t[h.results]=t[h.results].slice(0,m.maxResults)),e.isFunction(n)?a=n(t,h):f.error(y.noTemplate,!1)):m.showNoResults&&(a=f.displayMessage(y.noResults,"empty")),m.onResults.call(E,t),a},displayMessage:function(e,t){return t=t||"standard",f.debug("Displaying message",e,t),f.addResults(m.templates.message(e,t)),m.templates.message(e,t)},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(void 0===n)return m[t];m[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(void 0===n)return f[t];f[t]=n}},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:E,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=m.name+":",n=0;s=!1,clearTimeout(f.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),a.length>1&&(t+=" ("+a.length+")"),(void 0!==console.group||void 0!==console.table)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,i){var a,r,s,l=F;return n=n||d,i=E||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]&&(r=l[i],!1);l=l[i]}})),e.isFunction(r)?s=r.apply(i,n):void 0!==r&&(s=r),e.isArray(o)?o.push(s):void 0!==o?o=[o,s]:void 0!==s&&(o=s),r}},u?(void 0===F&&f.initialize(),f.invoke(c)):(void 0!==F&&F.invoke("destroy"),f.initialize())}),void 0!==o?o:this},e.fn.search.settings={name:"Search",namespace:"search",silent:!1,debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,selectFirstResult:!1,apiSettings:!1,source:!1,searchOnFocus:!0,searchFields:["title","description"],displayField:"",searchFullText:!0,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,showNoResults:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(e){},onResults:function(e){},onResultsOpen:function(){},onResultsClose:function(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined."},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",message:".results > .message",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e){var t=/[&<>"'`]/g,n=/[&<>"'`]/,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},o=function(e){return i[e]};return n.test(e)?e.replace(t,o):e},message:function(e,t){var n="";return void 0!==e&&void 0!==t&&(n+='<div class="message '+t+'">',n+="empty"==t?'<div class="header">No Results</div class="header"><div class="description">'+e+'</div class="description">':' <div class="description">'+e+"</div>",n+="</div>"),n},category:function(t,n){var i="";e.fn.search.settings.templates.escape;return void 0!==t[n.categoryResults]&&(e.each(t[n.categoryResults],function(t,o){void 0!==o[n.results]&&o.results.length>0&&(i+='<div class="category">',void 0!==o[n.categoryName]&&(i+='<div class="name">'+o[n.categoryName]+"</div>"),e.each(o.results,function(e,t){t[n.url]?i+='<a class="result" href="'+t[n.url]+'">':i+='<a class="result">',void 0!==t[n.image]&&(i+='<div class="image"> <img src="'+t[n.image]+'"></div>'),i+='<div class="content">',void 0!==t[n.price]&&(i+='<div class="price">'+t[n.price]+"</div>"),void 0!==t[n.title]&&(i+='<div class="title">'+t[n.title]+"</div>"),void 0!==t[n.description]&&(i+='<div class="description">'+t[n.description]+"</div>"),i+="</div>",i+="</a>"}),i+="</div>")}),t[n.action]&&(i+='<a href="'+t[n.action][n.actionURL]+'" class="action">'+t[n.action][n.actionText]+"</a>"),i)},standard:function(t,n){var i="";return void 0!==t[n.results]&&(e.each(t[n.results],function(e,t){t[n.url]?i+='<a class="result" href="'+t[n.url]+'">':i+='<a class="result">',void 0!==t[n.image]&&(i+='<div class="image"> <img src="'+t[n.image]+'"></div>'),i+='<div class="content">',void 0!==t[n.price]&&(i+='<div class="price">'+t[n.price]+"</div>"),void 0!==t[n.title]&&(i+='<div class="title">'+t[n.title]+"</div>"),void 0!==t[n.description]&&(i+='<div class="description">'+t[n.description]+"</div>"),i+="</div>",i+="</a>"}),t[n.action]&&(i+='<a href="'+t[n.action][n.actionURL]+'" class="action">'+t[n.action][n.actionText]+"</a>"),i)}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.shape=function(i){var o,a=e(this),r=(e("body"),(new Date).getTime()),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1),d=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return a.each(function(){var t,f,m,g=a.selector||"",v=e.isPlainObject(i)?e.extend(!0,{},e.fn.shape.settings,i):e.extend({},e.fn.shape.settings),p=v.namespace,h=v.selector,b=v.error,y=v.className,x="."+p,C="module-"+p,w=e(this),k=w.find(h.sides),S=w.find(h.side),T=!1,A=this,R=w.data(C);m={initialize:function(){m.verbose("Initializing module for",A),m.set.defaultSide(),m.instantiate()},instantiate:function(){m.verbose("Storing instance of module",m),R=m,w.data(C,R)},destroy:function(){m.verbose("Destroying previous module for",A),w.removeData(C).off(x)},refresh:function(){m.verbose("Refreshing selector cache for",A),w=e(A),k=e(this).find(h.shape),S=e(this).find(h.side)},repaint:function(){m.verbose("Forcing repaint event");var e=k[0]||n.createElement("div");e.offsetWidth},animate:function(e,n){m.verbose("Animating box with properties",e),n=n||function(e){m.verbose("Executing animation callback"),void 0!==e&&e.stopPropagation(),m.reset(),m.set.active()},v.beforeChange.call(f[0]),m.get.transitionEvent()?(m.verbose("Starting CSS animation"),w.addClass(y.animating),k.css(e).one(m.get.transitionEvent(),n),m.set.duration(v.duration),d(function(){w.addClass(y.animating),t.addClass(y.hidden)})):n()},queue:function(e){m.debug("Queueing animation of",e),k.one(m.get.transitionEvent(),function(){m.debug("Executing queued animation"),setTimeout(function(){w.shape(e)},0)})},reset:function(){m.verbose("Animating states reset"),w.removeClass(y.animating).attr("style","").removeAttr("style"),k.attr("style","").removeAttr("style"),S.attr("style","").removeAttr("style").removeClass(y.hidden),f.removeClass(y.animating).attr("style","").removeAttr("style")},is:{complete:function(){return S.filter("."+y.active)[0]==f[0]},animating:function(){return w.hasClass(y.animating)}},set:{defaultSide:function(){t=w.find("."+v.className.active),f=t.next(h.side).length>0?t.next(h.side):w.find(h.side).first(),T=!1,m.verbose("Active side set to",t),m.verbose("Next side set to",f)},duration:function(e){e=e||v.duration,e="number"==typeof e?e+"ms":e,m.verbose("Setting animation duration",e),(v.duration||0===v.duration)&&k.add(S).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e})},currentStageSize:function(){var e=w.find("."+v.className.active),t=e.outerWidth(!0),n=e.outerHeight(!0);w.css({width:t,height:n})},stageSize:function(){var e=w.clone().addClass(y.loading),t=e.find("."+v.className.active),n=T?e.find(h.side).eq(T):t.next(h.side).length>0?t.next(h.side):e.find(h.side).first(),i="next"==v.width?n.outerWidth(!0):"initial"==v.width?w.width():v.width,o="next"==v.height?n.outerHeight(!0):"initial"==v.height?w.height():v.height;t.removeClass(y.active),n.addClass(y.active),e.insertAfter(w),e.remove(),"auto"!=v.width&&(w.css("width",i+v.jitter),m.verbose("Specifying width during animation",i)),"auto"!=v.height&&(w.css("height",o+v.jitter),m.verbose("Specifying height during animation",o))},nextSide:function(e){T=e,f=S.filter(e),T=S.index(f),0===f.length&&(m.set.defaultSide(),m.error(b.side)),m.verbose("Next side manually set to",f)},active:function(){m.verbose("Setting new side to active",f),S.removeClass(y.active),f.addClass(y.active),v.onChange.call(f[0]),m.set.defaultSide()}},flip:{up:function(){if(m.is.complete()&&!m.is.animating()&&!v.allowRepeats)return void m.debug("Side already visible",f);if(m.is.animating())m.queue("flip up");else{m.debug("Flipping up",f);var e=m.get.transform.up();m.set.stageSize(),m.stage.above(),m.animate(e)}},down:function(){if(m.is.complete()&&!m.is.animating()&&!v.allowRepeats)return void m.debug("Side already visible",f);if(m.is.animating())m.queue("flip down");else{m.debug("Flipping down",f);var e=m.get.transform.down();m.set.stageSize(),m.stage.below(),m.animate(e)}},left:function(){if(m.is.complete()&&!m.is.animating()&&!v.allowRepeats)return void m.debug("Side already visible",f);if(m.is.animating())m.queue("flip left");else{m.debug("Flipping left",f);var e=m.get.transform.left();m.set.stageSize(),m.stage.left(),m.animate(e)}},right:function(){if(m.is.complete()&&!m.is.animating()&&!v.allowRepeats)return void m.debug("Side already visible",f);if(m.is.animating())m.queue("flip right");else{m.debug("Flipping right",f);var e=m.get.transform.right();m.set.stageSize(),m.stage.right(),m.animate(e)}},over:function(){if(m.is.complete()&&!m.is.animating()&&!v.allowRepeats)return void m.debug("Side already visible",f);m.is.animating()?m.queue("flip over"):(m.debug("Flipping over",f),m.set.stageSize(),m.stage.behind(),m.animate(m.get.transform.over()))},back:function(){if(m.is.complete()&&!m.is.animating()&&!v.allowRepeats)return void m.debug("Side already visible",f);m.is.animating()?m.queue("flip back"):(m.debug("Flipping back",f),m.set.stageSize(),m.stage.behind(),m.animate(m.get.transform.back()))}},get:{transform:{up:function(){var e={y:-(t.outerHeight(!0)-f.outerHeight(!0))/2,z:-t.outerHeight(!0)/2};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(-90deg)"}},down:function(){var e={y:-(t.outerHeight(!0)-f.outerHeight(!0))/2,z:-t.outerHeight(!0)/2};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(90deg)"}},left:function(){var e={x:-(t.outerWidth(!0)-f.outerWidth(!0))/2,z:-t.outerWidth(!0)/2};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(90deg)"}},right:function(){var e={x:-(t.outerWidth(!0)-f.outerWidth(!0))/2,z:-t.outerWidth(!0)/2};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(-90deg)"}},over:function(){return{transform:"translateX("+{x:-(t.outerWidth(!0)-f.outerWidth(!0))/2}.x+"px) rotateY(180deg)"}},back:function(){return{transform:"translateX("+{x:-(t.outerWidth(!0)-f.outerWidth(!0))/2}.x+"px) rotateY(-180deg)"}}},transitionEvent:function(){var e,t=n.createElement("element"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]},nextSide:function(){return t.next(h.side).length>0?t.next(h.side):w.find(h.side).first()}},stage:{above:function(){var e={origin:(t.outerHeight(!0)-f.outerHeight(!0))/2,depth:{active:f.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};m.verbose("Setting the initial animation position as above",f,e),k.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),f.addClass(y.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px)"})},below:function(){var e={origin:(t.outerHeight(!0)-f.outerHeight(!0))/2,depth:{active:f.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};m.verbose("Setting the initial animation position as below",f,e),k.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),f.addClass(y.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px)"})},left:function(){var e={active:t.outerWidth(!0),next:f.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};m.verbose("Setting the initial animation position as left",f,n),k.css({transform:"translateZ(-"+n.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),f.addClass(y.animating).css({left:n.origin+"px",transform:"rotateY(-90deg) translateZ("+n.depth.next+"px)"})},right:function(){var e={active:t.outerWidth(!0),next:f.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};m.verbose("Setting the initial animation position as left",f,n),k.css({transform:"translateZ(-"+n.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),f.addClass(y.animating).css({left:n.origin+"px",transform:"rotateY(90deg) translateZ("+n.depth.next+"px)"})},behind:function(){var e={active:t.outerWidth(!0),next:f.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};m.verbose("Setting the initial animation position as behind",f,n),t.css({transform:"rotateY(0deg)"}),f.addClass(y.animating).css({left:n.origin+"px",transform:"rotateY(-180deg)"})}},setting:function(t,n){if(m.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,v,t);else{if(void 0===n)return v[t];e.isPlainObject(v[t])?e.extend(!0,v[t],n):v[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(void 0===n)return m[t];m[t]=n}},debug:function(){!v.silent&&v.debug&&(v.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,v.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!v.silent&&v.verbose&&v.debug&&(v.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,v.name+":"),m.verbose.apply(console,arguments)))},error:function(){
v.silent||(m.error=Function.prototype.bind.call(console.error,console,v.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;v.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:A,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var t=v.name+":",n=0;r=!1,clearTimeout(m.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",g&&(t+=" '"+g+"'"),a.length>1&&(t+=" ("+a.length+")"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,i){var a,r,s,l=R;return n=n||u,i=A||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]&&(r=l[i],!1);l=l[i]}})),e.isFunction(r)?s=r.apply(i,n):void 0!==r&&(s=r),e.isArray(o)?o.push(s):void 0!==o?o=[o,s]:void 0!==s&&(o=s),r}},c?(void 0===R&&m.initialize(),m.invoke(l)):(void 0!==R&&R.invoke("destroy"),m.initialize())}),void 0!==o?o:this},e.fn.shape.settings={name:"Shape",silent:!1,debug:!1,verbose:!1,jitter:0,performance:!0,namespace:"shape",width:"initial",height:"initial",beforeChange:function(){},onChange:function(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.sidebar=function(i){var o,a=e(this),r=e(t),s=e(n),l=e("html"),c=e("head"),u=a.selector||"",d=(new Date).getTime(),f=[],m=arguments[0],g="string"==typeof m,v=[].slice.call(arguments,1),p=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return a.each(function(){var a,h,b,y,x,C,w=e.isPlainObject(i)?e.extend(!0,{},e.fn.sidebar.settings,i):e.extend({},e.fn.sidebar.settings),k=w.selector,S=w.className,T=w.namespace,A=w.regExp,R=w.error,P="."+T,E="module-"+T,F=e(this),O=e(w.context),D=F.children(k.sidebar),q=O.children(k.fixed),j=O.children(k.pusher),z=this,I=F.data(E);C={initialize:function(){C.debug("Initializing sidebar",i),C.create.id(),x=C.get.transitionEvent(),w.delaySetup?p(C.setup.layout):C.setup.layout(),p(function(){C.setup.cache()}),C.instantiate()},instantiate:function(){C.verbose("Storing instance of module",C),I=C,F.data(E,C)},create:{id:function(){b=(Math.random().toString(16)+"000000000").substr(2,8),h="."+b,C.verbose("Creating unique id for element",b)}},destroy:function(){C.verbose("Destroying previous module for",F),F.off(P).removeData(E),C.is.ios()&&C.remove.ios(),O.off(h),r.off(h),s.off(h)},event:{clickaway:function(e){var t=j.find(e.target).length>0||j.is(e.target),n=O.is(e.target);t&&(C.verbose("User clicked on dimmed page"),C.hide()),n&&(C.verbose("User clicked on dimmable context (scaled out page)"),C.hide())},touch:function(e){},containScroll:function(e){z.scrollTop<=0&&(z.scrollTop=1),z.scrollTop+z.offsetHeight>=z.scrollHeight&&(z.scrollTop=z.scrollHeight-z.offsetHeight-1)},scroll:function(t){0===e(t.target).closest(k.sidebar).length&&t.preventDefault()}},bind:{clickaway:function(){C.verbose("Adding clickaway events to context",O),w.closable&&O.on("click"+h,C.event.clickaway).on("touchend"+h,C.event.clickaway)},scrollLock:function(){w.scrollLock&&(C.debug("Disabling page scroll"),r.on("DOMMouseScroll"+h,C.event.scroll)),C.verbose("Adding events to contain sidebar scroll"),s.on("touchmove"+h,C.event.touch),F.on("scroll"+P,C.event.containScroll)}},unbind:{clickaway:function(){C.verbose("Removing clickaway events from context",O),O.off(h)},scrollLock:function(){C.verbose("Removing scroll lock from page"),s.off(h),r.off(h),F.off("scroll"+P)}},add:{inlineCSS:function(){var t,n=C.cache.width||F.outerWidth(),i=C.cache.height||F.outerHeight(),o=C.is.rtl(),r=C.get.direction(),s={left:n,right:-n,top:i,bottom:-i};o&&(C.verbose("RTL detected, flipping widths"),s.left=-n,s.right=n),t="<style>","left"===r||"right"===r?(C.debug("Adding CSS rules for animation distance",n),t+=" .ui.visible."+r+".sidebar ~ .fixed, .ui.visible."+r+".sidebar ~ .pusher {   -webkit-transform: translate3d("+s[r]+"px, 0, 0);           transform: translate3d("+s[r]+"px, 0, 0); }"):"top"!==r&&"bottom"!=r||(t+=" .ui.visible."+r+".sidebar ~ .fixed, .ui.visible."+r+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+s[r]+"px, 0);           transform: translate3d(0, "+s[r]+"px, 0); }"),C.is.ie()&&("left"===r||"right"===r?(C.debug("Adding CSS rules for animation distance",n),t+=" body.pushable > .ui.visible."+r+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+s[r]+"px, 0, 0);           transform: translate3d("+s[r]+"px, 0, 0); }"):"top"!==r&&"bottom"!=r||(t+=" body.pushable > .ui.visible."+r+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+s[r]+"px, 0);           transform: translate3d(0, "+s[r]+"px, 0); }"),t+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"),t+="</style>",a=e(t).appendTo(c),C.debug("Adding sizing css to head",a)}},refresh:function(){C.verbose("Refreshing selector cache"),O=e(w.context),D=O.children(k.sidebar),j=O.children(k.pusher),q=O.children(k.fixed),C.clear.cache()},refreshSidebars:function(){C.verbose("Refreshing other sidebars"),D=O.children(k.sidebar)},repaint:function(){C.verbose("Forcing repaint event"),z.style.display="none";z.offsetHeight;z.scrollTop=z.scrollTop,z.style.display=""},setup:{cache:function(){C.cache={width:F.outerWidth(),height:F.outerHeight(),rtl:"rtl"==F.css("direction")}},layout:function(){0===O.children(k.pusher).length&&(C.debug("Adding wrapper element for sidebar"),C.error(R.pusher),j=e('<div class="pusher" />'),O.children().not(k.omitted).not(D).wrapAll(j),C.refresh()),0!==F.nextAll(k.pusher).length&&F.nextAll(k.pusher)[0]===j[0]||(C.debug("Moved sidebar to correct parent element"),C.error(R.movedSidebar,z),F.detach().prependTo(O),C.refresh()),C.clear.cache(),C.set.pushable(),C.set.direction()}},attachEvents:function(t,n){var i=e(t);n=e.isFunction(C[n])?C[n]:C.toggle,i.length>0?(C.debug("Attaching sidebar events to element",t,n),i.on("click"+P,n)):C.error(R.notFound,t)},show:function(t){if(t=e.isFunction(t)?t:function(){},C.is.hidden()){if(C.refreshSidebars(),w.overlay&&(C.error(R.overlay),w.transition="overlay"),C.refresh(),C.othersActive())if(C.debug("Other sidebars currently visible"),w.exclusive){if("overlay"!=w.transition)return void C.hideOthers(C.show);C.hideOthers()}else w.transition="overlay";C.pushPage(function(){t.call(z),w.onShow.call(z)}),w.onChange.call(z),w.onVisible.call(z)}else C.debug("Sidebar is already visible")},hide:function(t){t=e.isFunction(t)?t:function(){},(C.is.visible()||C.is.animating())&&(C.debug("Hiding sidebar",t),C.refreshSidebars(),C.pullPage(function(){t.call(z),w.onHidden.call(z)}),w.onChange.call(z),w.onHide.call(z))},othersAnimating:function(){return D.not(F).filter("."+S.animating).length>0},othersVisible:function(){return D.not(F).filter("."+S.visible).length>0},othersActive:function(){return C.othersVisible()||C.othersAnimating()},hideOthers:function(e){var t=D.not(F).filter("."+S.visible),n=t.length,i=0;e=e||function(){},t.sidebar("hide",function(){++i==n&&e()})},toggle:function(){C.verbose("Determining toggled direction"),C.is.hidden()?C.show():C.hide()},pushPage:function(t){var n,i,o,a=C.get.transition(),r="overlay"===a||C.othersActive()?F:j;t=e.isFunction(t)?t:function(){},"scale down"==w.transition&&C.scrollToTop(),C.set.transition(a),C.repaint(),n=function(){C.bind.clickaway(),C.add.inlineCSS(),C.set.animating(),C.set.visible()},i=function(){C.set.dimmed()},o=function(e){e.target==r[0]&&(r.off(x+h,o),C.remove.animating(),C.bind.scrollLock(),t.call(z))},r.off(x+h),r.on(x+h,o),p(n),w.dimPage&&!C.othersVisible()&&p(i)},pullPage:function(t){var n,i,o=C.get.transition(),a="overlay"==o||C.othersActive()?F:j;t=e.isFunction(t)?t:function(){},C.verbose("Removing context push state",C.get.direction()),C.unbind.clickaway(),C.unbind.scrollLock(),n=function(){C.set.transition(o),C.set.animating(),C.remove.visible(),w.dimPage&&!C.othersVisible()&&j.removeClass(S.dimmed)},i=function(e){e.target==a[0]&&(a.off(x+h,i),C.remove.animating(),C.remove.transition(),C.remove.inlineCSS(),("scale down"==o||w.returnScroll&&C.is.mobile())&&C.scrollBack(),t.call(z))},a.off(x+h),a.on(x+h,i),p(n)},scrollToTop:function(){C.verbose("Scrolling to top of page to avoid animation issues"),y=e(t).scrollTop(),F.scrollTop(0),t.scrollTo(0,0)},scrollBack:function(){C.verbose("Scrolling back to original page position"),t.scrollTo(0,y)},clear:{cache:function(){C.verbose("Clearing cached dimensions"),C.cache={}}},set:{ios:function(){l.addClass(S.ios)},pushed:function(){O.addClass(S.pushed)},pushable:function(){O.addClass(S.pushable)},dimmed:function(){j.addClass(S.dimmed)},active:function(){F.addClass(S.active)},animating:function(){F.addClass(S.animating)},transition:function(e){e=e||C.get.transition(),F.addClass(e)},direction:function(e){e=e||C.get.direction(),F.addClass(S[e])},visible:function(){F.addClass(S.visible)},overlay:function(){F.addClass(S.overlay)}},remove:{inlineCSS:function(){C.debug("Removing inline css styles",a),a&&a.length>0&&a.remove()},ios:function(){l.removeClass(S.ios)},pushed:function(){O.removeClass(S.pushed)},pushable:function(){O.removeClass(S.pushable)},active:function(){F.removeClass(S.active)},animating:function(){F.removeClass(S.animating)},transition:function(e){e=e||C.get.transition(),F.removeClass(e)},direction:function(e){e=e||C.get.direction(),F.removeClass(S[e])},visible:function(){F.removeClass(S.visible)},overlay:function(){F.removeClass(S.overlay)}},get:{direction:function(){return F.hasClass(S.top)?S.top:F.hasClass(S.right)?S.right:F.hasClass(S.bottom)?S.bottom:S.left},transition:function(){var e,t=C.get.direction();return e=C.is.mobile()?"auto"==w.mobileTransition?w.defaultTransition.mobile[t]:w.mobileTransition:"auto"==w.transition?w.defaultTransition.computer[t]:w.transition,C.verbose("Determined transition",e),e},transitionEvent:function(){var e,t=n.createElement("element"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}},is:{ie:function(){var e=!t.ActiveXObject&&"ActiveXObject"in t,n="ActiveXObject"in t;return e||n},ios:function(){var e=navigator.userAgent,t=e.match(A.ios),n=e.match(A.mobileChrome);return!(!t||n)&&(C.verbose("Browser was found to be iOS",e),!0)},mobile:function(){var e=navigator.userAgent;return e.match(A.mobile)?(C.verbose("Browser was found to be mobile",e),!0):(C.verbose("Browser is not mobile, using regular transition",e),!1)},hidden:function(){return!C.is.visible()},visible:function(){return F.hasClass(S.visible)},open:function(){return C.is.visible()},closed:function(){return C.is.hidden()},vertical:function(){return F.hasClass(S.top)},animating:function(){return O.hasClass(S.animating)},rtl:function(){return void 0===C.cache.rtl&&(C.cache.rtl="rtl"==F.css("direction")),C.cache.rtl}},setting:function(t,n){if(C.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,w,t);else{if(void 0===n)return w[t];e.isPlainObject(w[t])?e.extend(!0,w[t],n):w[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,C,t);else{if(void 0===n)return C[t];C[t]=n}},debug:function(){!w.silent&&w.debug&&(w.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,w.name+":"),C.debug.apply(console,arguments)))},verbose:function(){!w.silent&&w.verbose&&w.debug&&(w.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,w.name+":"),C.verbose.apply(console,arguments)))},error:function(){w.silent||(C.error=Function.prototype.bind.call(console.error,console,w.name+":"),C.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;w.performance&&(t=(new Date).getTime(),i=d||t,n=t-i,d=t,f.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:z,"Execution Time":n})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var t=w.name+":",n=0;d=!1,clearTimeout(C.performance.timer),e.each(f,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",u&&(t+=" '"+u+"'"),(void 0!==console.group||void 0!==console.table)&&f.length>0&&(console.groupCollapsed(t),console.table?console.table(f):e.each(f,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),f=[]}},invoke:function(t,n,i){var a,r,s,l=I;return n=n||v,i=z||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(r=l[i],!1):(C.error(R.method,t),!1);l=l[i]}})),e.isFunction(r)?s=r.apply(i,n):void 0!==r&&(s=r),e.isArray(o)?o.push(s):void 0!==o?o=[o,s]:void 0!==s&&(o=s),r}},g?(void 0===I&&C.initialize(),C.invoke(m)):(void 0!==I&&C.invoke("destroy"),C.initialize())}),void 0!==o?o:this},e.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",silent:!1,debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function(){},onShow:function(){},onHide:function(){},onHidden:function(){},onVisible:function(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.sticky=function(i){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var a,f,m,g,v,p=e.isPlainObject(i)?e.extend(!0,{},e.fn.sticky.settings,i):e.extend({},e.fn.sticky.settings),h=p.className,b=p.namespace,y=p.error,x="."+b,C="module-"+b,w=e(this),k=e(t),S=e(p.scrollContext),T=(w.selector,w.data(C)),A=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)},R=this;v={initialize:function(){v.determineContainer(),v.determineContext(),v.verbose("Initializing sticky",p,a),v.save.positions(),v.checkErrors(),v.bind.events(),p.observeChanges&&v.observeChanges(),v.instantiate()},instantiate:function(){v.verbose("Storing instance of module",v),T=v,w.data(C,v)},destroy:function(){v.verbose("Destroying previous instance"),v.reset(),m&&m.disconnect(),g&&g.disconnect(),k.off("load"+x,v.event.load).off("resize"+x,v.event.resize),S.off("scrollchange"+x,v.event.scrollchange),w.removeData(C)},observeChanges:function(){"MutationObserver"in t&&(m=new MutationObserver(v.event.documentChanged),g=new MutationObserver(v.event.changed),m.observe(n,{childList:!0,subtree:!0}),g.observe(R,{childList:!0,subtree:!0}),g.observe(f[0],{childList:!0,subtree:!0}),v.debug("Setting up mutation observer",g))},determineContainer:function(){a=p.container?e(p.container):w.offsetParent()},determineContext:function(){if(f=p.context?e(p.context):a,0===f.length)return void v.error(y.invalidContext,p.context,w)},checkErrors:function(){if(v.is.hidden()&&v.error(y.visible,w),v.cache.element.height>v.cache.context.height)return v.reset(),void v.error(y.elementSize,w)},bind:{events:function(){k.on("load"+x,v.event.load).on("resize"+x,v.event.resize),S.off("scroll"+x).on("scroll"+x,v.event.scroll).on("scrollchange"+x,v.event.scrollchange)}},event:{changed:function(e){clearTimeout(v.timer),v.timer=setTimeout(function(){v.verbose("DOM tree modified, updating sticky menu",e),v.refresh()},100)},documentChanged:function(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==R||e(t).find(R).length>0)&&(v.debug("Element removed from DOM, tearing down events"),v.destroy())})})},load:function(){v.verbose("Page contents finished loading"),A(v.refresh)},resize:function(){v.verbose("Window resized"),A(v.refresh)},scroll:function(){A(function(){S.triggerHandler("scrollchange"+x,S.scrollTop())})},scrollchange:function(e,t){v.stick(t),p.onScroll.call(R)}},refresh:function(e){v.reset(),p.context||v.determineContext(),e&&v.determineContainer(),v.save.positions(),v.stick(),p.onReposition.call(R)},supports:{sticky:function(){var t=e("<div/>");t[0];return t.addClass(h.supported),t.css("position").match("sticky")}},save:{lastScroll:function(e){v.lastScroll=e},elementScroll:function(e){v.elementScroll=e},positions:function(){var e={height:S.height()},t={margin:{top:parseInt(w.css("margin-top"),10),bottom:parseInt(w.css("margin-bottom"),10)},offset:w.offset(),width:w.outerWidth(),height:w.outerHeight()},n={offset:f.offset(),height:f.outerHeight()};a.outerHeight();v.is.standardScroll()||(v.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=S.scrollTop(),e.left=S.scrollLeft(),t.offset.top+=e.top,n.offset.top+=e.top,t.offset.left+=e.left,n.offset.left+=e.left),v.cache={fits:t.height+p.offset<=e.height,sameHeight:t.height==n.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:n.offset.top,height:n.height,bottom:n.offset.top+n.height}},v.set.containerSize(),v.stick(),v.debug("Caching element positions",v.cache)}},get:{direction:function(e){var t="down";return e=e||S.scrollTop(),void 0!==v.lastScroll&&(v.lastScroll<e?t="down":v.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||S.scrollTop(),v.lastScroll?e-v.lastScroll:0},currentElementScroll:function(){return v.elementScroll?v.elementScroll:v.is.top()?Math.abs(parseInt(w.css("top"),10))||0:Math.abs(parseInt(w.css("bottom"),10))||0},elementScroll:function(e){e=e||S.scrollTop();var t=v.cache.element,n=v.cache.scrollContext,i=v.get.scrollChange(e),o=t.height-n.height+p.offset,a=v.get.currentElementScroll(),r=a+i;return a=v.cache.fits||r<0?0:r>o?o:r}},remove:{lastScroll:function(){delete v.lastScroll},elementScroll:function(e){delete v.elementScroll},minimumSize:function(){a.css("min-height","")},offset:function(){w.css("margin-top","")}},set:{offset:function(){v.verbose("Setting offset on element",p.offset),w.css("margin-top",p.offset)},containerSize:function(){var e=a.get(0).tagName;"HTML"===e||"body"==e?v.determineContainer():Math.abs(a.outerHeight()-v.cache.context.height)>p.jitter&&(v.debug("Context has padding, specifying exact height for container",v.cache.context.height),a.css({height:v.cache.context.height}))},minimumSize:function(){var e=v.cache.element;a.css("min-height",e.height)},scroll:function(e){v.debug("Setting scroll on element",e),v.elementScroll!=e&&(v.is.top()&&w.css("bottom","").css("top",-e),v.is.bottom()&&w.css("top","").css("bottom",e))},size:function(){0!==v.cache.element.height&&0!==v.cache.element.width&&(R.style.setProperty("width",v.cache.element.width+"px","important"),R.style.setProperty("height",v.cache.element.height+"px","important"))}},is:{standardScroll:function(){return S[0]==t},top:function(){return w.hasClass(h.top)},bottom:function(){return w.hasClass(h.bottom)},initialPosition:function(){return!v.is.fixed()&&!v.is.bound()},hidden:function(){return!w.is(":visible")},bound:function(){return w.hasClass(h.bound)},fixed:function(){return w.hasClass(h.fixed)}},stick:function(e){var t=e||S.scrollTop(),n=v.cache,i=n.fits,o=n.sameHeight,a=n.element,r=n.scrollContext,s=n.context,l=v.is.bottom()&&p.pushing?p.bottomOffset:p.offset,e={top:t+l,bottom:t+l+r.height},c=(v.get.direction(e.top),i?0:v.get.elementScroll(e.top)),u=!i;0!==a.height&&!o&&(v.is.initialPosition()?e.top>=s.bottom?(v.debug("Initial element position is bottom of container"),v.bindBottom()):e.top>a.top&&(a.height+e.top-c>=s.bottom?(v.debug("Initial element position is bottom of container"),v.bindBottom()):(v.debug("Initial element position is fixed"),v.fixTop())):v.is.fixed()?v.is.top()?e.top<=a.top?(v.debug("Fixed element reached top of container"),v.setInitialPosition()):a.height+e.top-c>=s.bottom?(v.debug("Fixed element reached bottom of container"),v.bindBottom()):u&&(v.set.scroll(c),v.save.lastScroll(e.top),v.save.elementScroll(c)):v.is.bottom()&&(e.bottom-a.height<=a.top?(v.debug("Bottom fixed rail has reached top of container"),v.setInitialPosition()):e.bottom>=s.bottom?(v.debug("Bottom fixed rail has reached bottom of container"),v.bindBottom()):u&&(v.set.scroll(c),v.save.lastScroll(e.top),v.save.elementScroll(c))):v.is.bottom()&&(e.top<=a.top?(v.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),v.setInitialPosition()):p.pushing?v.is.bound()&&e.bottom<=s.bottom&&(v.debug("Fixing bottom attached element to bottom of browser."),v.fixBottom()):v.is.bound()&&e.top<=s.bottom-a.height&&(v.debug("Fixing bottom attached element to top of browser."),v.fixTop())))},bindTop:function(){v.debug("Binding element to top of parent container"),v.remove.offset(),w.css({left:"",top:"",marginBottom:""}).removeClass(h.fixed).removeClass(h.bottom).addClass(h.bound).addClass(h.top),p.onTop.call(R),p.onUnstick.call(R)},bindBottom:function(){v.debug("Binding element to bottom of parent container"),v.remove.offset(),w.css({left:"",top:""}).removeClass(h.fixed).removeClass(h.top).addClass(h.bound).addClass(h.bottom),p.onBottom.call(R),p.onUnstick.call(R)},setInitialPosition:function(){v.debug("Returning to initial position"),v.unfix(),v.unbind()},fixTop:function(){v.debug("Fixing element to top of page"),p.setSize&&v.set.size(),v.set.minimumSize(),v.set.offset(),w.css({left:v.cache.element.left,bottom:"",marginBottom:""}).removeClass(h.bound).removeClass(h.bottom).addClass(h.fixed).addClass(h.top),p.onStick.call(R)},fixBottom:function(){v.debug("Sticking element to bottom of page"),p.setSize&&v.set.size(),v.set.minimumSize(),v.set.offset(),w.css({left:v.cache.element.left,bottom:"",marginBottom:""}).removeClass(h.bound).removeClass(h.top).addClass(h.fixed).addClass(h.bottom),p.onStick.call(R)},unbind:function(){v.is.bound()&&(v.debug("Removing container bound position on element"),v.remove.offset(),w.removeClass(h.bound).removeClass(h.top).removeClass(h.bottom))},unfix:function(){v.is.fixed()&&(v.debug("Removing fixed position on element"),v.remove.minimumSize(),v.remove.offset(),w.removeClass(h.fixed).removeClass(h.top).removeClass(h.bottom),p.onUnstick.call(R))},reset:function(){v.debug("Resetting elements position"),v.unbind(),v.unfix(),v.resetCSS(),v.remove.offset(),v.remove.lastScroll()},resetCSS:function(){w.css({width:"",height:""}),a.css({height:""})},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,p,t);else{if(void 0===n)return p[t];p[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,v,t);else{if(void 0===n)return v[t];v[t]=n}},debug:function(){!p.silent&&p.debug&&(p.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,p.name+":"),v.debug.apply(console,arguments)))},verbose:function(){!p.silent&&p.verbose&&p.debug&&(p.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,p.name+":"),v.verbose.apply(console,arguments)))},error:function(){p.silent||(v.error=Function.prototype.bind.call(console.error,console,p.name+":"),v.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;p.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:R,"Execution Time":n})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,0)},display:function(){var t=p.name+":",n=0;s=!1,clearTimeout(v.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(void 0!==console.group||void 0!==console.table)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,i){var a,r,s,l=T;return n=n||d,i=R||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]&&(r=l[i],!1);l=l[i]}})),e.isFunction(r)?s=r.apply(i,n):void 0!==r&&(s=r),e.isArray(o)?o.push(s):void 0!==o?o=[o,s]:void 0!==s&&(o=s),r}},u?(void 0===T&&v.initialize(),v.invoke(c)):(void 0!==T&&T.invoke("destroy"),v.initialize())}),void 0!==o?o:this},e.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,container:!1,scrollContext:t,offset:0,bottomOffset:0,jitter:5,setSize:!0,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.tab=function(i){var o,a=e(e.isFunction(this)?t:this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1),f=!1;return a.each(function(){var m,g,v,p,h,b,y=e.isPlainObject(i)?e.extend(!0,{},e.fn.tab.settings,i):e.extend({},e.fn.tab.settings),x=y.className,C=y.metadata,w=y.selector,k=y.error,S="."+y.namespace,T="module-"+y.namespace,A=e(this),R={},P=!0,E=0,F=this,O=A.data(T);h={initialize:function(){h.debug("Initializing tab menu item",A),h.fix.callbacks(),h.determineTabs(),h.debug("Determining tabs",y.context,g),y.auto&&h.set.auto(),h.bind.events(),y.history&&!f&&(h.initializeHistory(),f=!0),h.instantiate()},instantiate:function(){h.verbose("Storing instance of module",h),O=h,A.data(T,h)},destroy:function(){h.debug("Destroying tabs",A),A.removeData(T).off(S)},bind:{events:function(){e.isWindow(F)||(h.debug("Attaching tab activation events to element",A),A.on("click"+S,h.event.click))}},determineTabs:function(){var t;"parent"===y.context?(A.closest(w.ui).length>0?(t=A.closest(w.ui),h.verbose("Using closest UI element as parent",t)):t=A,m=t.parent(),h.verbose("Determined parent element for creating context",m)):y.context?(m=e(y.context),h.verbose("Using selector for tab context",y.context,m)):m=e("body"),y.childrenOnly?(g=m.children(w.tabs),h.debug("Searching tab context children for tabs",m,g)):(g=m.find(w.tabs),h.debug("Searching tab context for tabs",m,g))},fix:{callbacks:function(){e.isPlainObject(i)&&(i.onTabLoad||i.onTabInit)&&(i.onTabLoad&&(i.onLoad=i.onTabLoad,delete i.onTabLoad,h.error(k.legacyLoad,i.onLoad)),i.onTabInit&&(i.onFirstLoad=i.onTabInit,delete i.onTabInit,h.error(k.legacyInit,i.onFirstLoad)),y=e.extend(!0,{},e.fn.tab.settings,i))}},initializeHistory:function(){if(h.debug("Initializing page state"),void 0===e.address)return h.error(k.state),!1;if("state"==y.historyType){if(h.debug("Using HTML5 to manage state"),!1===y.path)return h.error(k.path),!1;e.address.history(!0).state(y.path)}e.address.bind("change",h.event.history.change)},event:{click:function(t){var n=e(this).data(C.tab);void 0!==n?(y.history?(h.verbose("Updating page state",t),e.address.value(n)):(h.verbose("Changing tab",t),h.changeTab(n)),t.preventDefault()):h.debug("No tab specified")},history:{change:function(t){var n=t.pathNames.join("/")||h.get.initialPath(),i=y.templates.determineTitle(n)||!1;h.performance.display(),h.debug("History change event",n,t),b=t,void 0!==n&&h.changeTab(n),i&&e.address.title(i)}}},refresh:function(){v&&(h.debug("Refreshing tab",v),h.changeTab(v))},cache:{read:function(e){return void 0!==e&&R[e]},add:function(e,t){e=e||v,h.debug("Adding cached content for",e),R[e]=t},remove:function(e){e=e||v,h.debug("Removing cached content for",e),delete R[e]}},set:{auto:function(){var t="string"==typeof y.path?y.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";h.verbose("Setting up automatic tab retrieval from server",t),e.isPlainObject(y.apiSettings)?y.apiSettings.url=t:y.apiSettings={url:t}},loading:function(e){var t=h.get.tabElement(e);t.hasClass(x.loading)||(h.verbose("Setting loading state for",t),t.addClass(x.loading).siblings(g).removeClass(x.active+" "+x.loading),t.length>0&&y.onRequest.call(t[0],e))},state:function(t){e.address.value(t)}},changeTab:function(n){var i=t.history&&t.history.pushState,o=i&&y.ignoreFirstLoad&&P,a=y.auto||e.isPlainObject(y.apiSettings),r=a&&!o?h.utilities.pathToArray(n):h.get.defaultPathArray(n);n=h.utilities.arrayToPath(r),e.each(r,function(t,i){var s,l,c,u,d=r.slice(0,t+1),f=h.utilities.arrayToPath(d),g=h.is.tab(f),w=t+1==r.length,S=h.get.tabElement(f);if(h.verbose("Looking for tab",i),g){if(h.verbose("Tab was found",i),v=f,p=h.utilities.filterArray(r,d),w?u=!0:(l=r.slice(0,t+2),c=h.utilities.arrayToPath(l),(u=!h.is.tab(c))&&h.verbose("Tab parameters found",l)),u&&a)return o?(h.debug("Ignoring remote content on first tab load",f),P=!1,h.cache.add(n,S.html()),h.activate.all(f),y.onFirstLoad.call(S[0],f,p,b),y.onLoad.call(S[0],f,p,b)):(h.activate.navigation(f),h.fetch.content(f,n)),!1;h.debug("Opened local tab",f),h.activate.all(f),h.cache.read(f)||(h.cache.add(f,!0),h.debug("First time tab loaded calling tab init"),y.onFirstLoad.call(S[0],f,p,b)),y.onLoad.call(S[0],f,p,b)}else{if(-1!=n.search("/")||""===n)return h.error(k.missingTab,A,m,f),!1;if(s=e("#"+n+', a[name="'+n+'"]'),f=s.closest("[data-tab]").data(C.tab),S=h.get.tabElement(f),
s&&s.length>0&&f)return h.debug("Anchor link used, opening parent tab",S,s),S.hasClass(x.active)||setTimeout(function(){h.scrollTo(s)},0),h.activate.all(f),h.cache.read(f)||(h.cache.add(f,!0),h.debug("First time tab loaded calling tab init"),y.onFirstLoad.call(S[0],f,p,b)),y.onLoad.call(S[0],f,p,b),!1}})},scrollTo:function(t){var i=!!(t&&t.length>0)&&t.offset().top;!1!==i&&(h.debug("Forcing scroll to an in-page link in a hidden tab",i,t),e(n).scrollTop(i))},update:{content:function(t,n,i){var o=h.get.tabElement(t),a=o[0];i=void 0!==i?i:y.evaluateScripts,"string"==typeof y.cacheType&&"dom"==y.cacheType.toLowerCase()&&"string"!=typeof n?o.empty().append(e(n).clone(!0)):i?(h.debug("Updating HTML and evaluating inline scripts",t,n),o.html(n)):(h.debug("Updating HTML",t,n),a.innerHTML=n)}},fetch:{content:function(t,n){var i,o,a=h.get.tabElement(t),r={dataType:"html",encodeParameters:!1,on:"now",cache:y.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function(e){"response"==y.cacheType&&h.cache.add(n,e),h.update.content(t,e),t==v?(h.debug("Content loaded",t),h.activate.tab(t)):h.debug("Content loaded in background",t),y.onFirstLoad.call(a[0],t,p,b),y.onLoad.call(a[0],t,p,b),y.loadOnce?h.cache.add(n,!0):"string"==typeof y.cacheType&&"dom"==y.cacheType.toLowerCase()&&a.children().length>0?setTimeout(function(){var e=a.children().clone(!0);e=e.not("script"),h.cache.add(n,e)},0):h.cache.add(n,a.html())},urlData:{tab:n}},s=a.api("get request")||!1,l=s&&"pending"===s.state();n=n||t,o=h.cache.read(n),y.cache&&o?(h.activate.tab(t),h.debug("Adding cached content",n),y.loadOnce||("once"==y.evaluateScripts?h.update.content(t,o,!1):h.update.content(t,o)),y.onLoad.call(a[0],t,p,b)):l?(h.set.loading(t),h.debug("Content is already loading",n)):void 0!==e.api?(i=e.extend(!0,{},y.apiSettings,r),h.debug("Retrieving remote content",n,i),h.set.loading(t),a.api(i)):h.error(k.api)}},activate:{all:function(e){h.activate.tab(e),h.activate.navigation(e)},tab:function(e){var t=h.get.tabElement(e),n="siblings"==y.deactivate?t.siblings(g):g.not(t),i=t.hasClass(x.active);h.verbose("Showing tab content for",t),i||(t.addClass(x.active),n.removeClass(x.active+" "+x.loading),t.length>0&&y.onVisible.call(t[0],e))},navigation:function(e){var t=h.get.navElement(e),n="siblings"==y.deactivate?t.siblings(a):a.not(t),i=t.hasClass(x.active);h.verbose("Activating tab navigation for",t,e),i||(t.addClass(x.active),n.removeClass(x.active+" "+x.loading))}},deactivate:{all:function(){h.deactivate.navigation(),h.deactivate.tabs()},navigation:function(){a.removeClass(x.active)},tabs:function(){g.removeClass(x.active+" "+x.loading)}},is:{tab:function(e){return void 0!==e&&h.get.tabElement(e).length>0}},get:{initialPath:function(){return a.eq(0).data(C.tab)||g.eq(0).data(C.tab)},path:function(){return e.address.value()},defaultPathArray:function(e){return h.utilities.pathToArray(h.get.defaultPath(e))},defaultPath:function(e){var t=a.filter("[data-"+C.tab+'^="'+e+'/"]').eq(0),n=t.data(C.tab)||!1;if(n){if(h.debug("Found default tab",n),E<y.maxDepth)return E++,h.get.defaultPath(n);h.error(k.recursion)}else h.debug("No default tabs found for",e,g);return E=0,e},navElement:function(e){return e=e||v,a.filter("[data-"+C.tab+'="'+e+'"]')},tabElement:function(e){var t,n,i,o;return e=e||v,i=h.utilities.pathToArray(e),o=h.utilities.last(i),t=g.filter("[data-"+C.tab+'="'+e+'"]'),n=g.filter("[data-"+C.tab+'="'+o+'"]'),t.length>0?t:n},tab:function(){return v}},utilities:{filterArray:function(t,n){return e.grep(t,function(t){return-1==e.inArray(t,n)})},last:function(t){return!!e.isArray(t)&&t[t.length-1]},pathToArray:function(e){return void 0===e&&(e=v),"string"==typeof e?e.split("/"):[e]},arrayToPath:function(t){return!!e.isArray(t)&&t.join("/")}},setting:function(t,n){if(h.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,y,t);else{if(void 0===n)return y[t];e.isPlainObject(y[t])?e.extend(!0,y[t],n):y[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(void 0===n)return h[t];h[t]=n}},debug:function(){!y.silent&&y.debug&&(y.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,y.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!y.silent&&y.verbose&&y.debug&&(y.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,y.name+":"),h.verbose.apply(console,arguments)))},error:function(){y.silent||(h.error=Function.prototype.bind.call(console.error,console,y.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;y.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:F,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500)},display:function(){var t=y.name+":",n=0;s=!1,clearTimeout(h.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(void 0!==console.group||void 0!==console.table)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,i){var a,r,s,l=O;return n=n||d,i=F||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(r=l[i],!1):(h.error(k.method,t),!1);l=l[i]}})),e.isFunction(r)?s=r.apply(i,n):void 0!==r&&(s=r),e.isArray(o)?o.push(s):void 0!==o?o=[o,s]:void 0!==s&&(o=s),r}},u?(void 0===O&&h.initialize(),h.invoke(c)):(void 0!==O&&O.invoke("destroy"),h.initialize())}),void 0!==o?o:this},e.tab=function(){e(t).tab.apply(this,arguments)},e.fn.tab.settings={name:"Tab",namespace:"tab",silent:!1,debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,deactivate:"siblings",alwaysRefresh:!1,cache:!0,loadOnce:!1,cacheType:"response",ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",onFirstLoad:function(e,t,n){},onLoad:function(e,t,n){},onVisible:function(e,t,n){},onRequest:function(e,t,n){},templates:{determineTitle:function(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.transition=function(){var i,o=e(this),a=o.selector||"",r=(new Date).getTime(),s=[],l=arguments,c=l[0],u=[].slice.call(arguments,1),d="string"==typeof c;t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame;return o.each(function(t){var f,m,g,v,p,h,b,y,x,C=e(this),w=this;x={initialize:function(){f=x.get.settings.apply(w,l),v=f.className,g=f.error,p=f.metadata,y="."+f.namespace,b="module-"+f.namespace,m=C.data(b)||x,h=x.get.animationEndEvent(),d&&(d=x.invoke(c)),!1===d&&(x.verbose("Converted arguments into settings object",f),f.interval?x.delay(f.animate):x.animate(),x.instantiate())},instantiate:function(){x.verbose("Storing instance of module",x),m=x,C.data(b,m)},destroy:function(){x.verbose("Destroying previous module for",w),C.removeData(b)},refresh:function(){x.verbose("Refreshing display type on next animation"),delete x.displayType},forceRepaint:function(){x.verbose("Forcing element repaint");var e=C.parent(),t=C.next();0===t.length?C.detach().appendTo(e):C.detach().insertBefore(t)},repaint:function(){x.verbose("Repainting element");w.offsetWidth},delay:function(e){var n,i,a=x.get.animationDirection();a||(a=x.can.transition()?x.get.direction():"static"),e=void 0!==e?e:f.interval,n="auto"==f.reverse&&a==v.outward,i=n||1==f.reverse?(o.length-t)*f.interval:t*f.interval,x.debug("Delaying animation by",i),setTimeout(x.animate,i)},animate:function(e){if(f=e||f,!x.is.supported())return x.error(g.support),!1;if(x.debug("Preparing animation",f.animation),x.is.animating()){if(f.queue)return!f.allowRepeats&&x.has.direction()&&x.is.occurring()&&!0!==x.queuing?x.debug("Animation is currently occurring, preventing queueing same animation",f.animation):x.queue(f.animation),!1;if(!f.allowRepeats&&x.is.occurring())return x.debug("Animation is already occurring, will not execute repeated animation",f.animation),!1;x.debug("New animation started, completing previous early",f.animation),m.complete()}x.can.animate()?x.set.animating(f.animation):x.error(g.noAnimation,f.animation,w)},reset:function(){x.debug("Resetting animation to beginning conditions"),x.remove.animationCallbacks(),x.restore.conditions(),x.remove.animating()},queue:function(e){x.debug("Queueing animation of",e),x.queuing=!0,C.one(h+".queue"+y,function(){x.queuing=!1,x.repaint(),x.animate.apply(this,f)})},complete:function(e){x.debug("Animation complete",f.animation),x.remove.completeCallback(),x.remove.failSafe(),x.is.looping()||(x.is.outward()?(x.verbose("Animation is outward, hiding element"),x.restore.conditions(),x.hide()):x.is.inward()?(x.verbose("Animation is outward, showing element"),x.restore.conditions(),x.show()):(x.verbose("Static animation completed"),x.restore.conditions(),f.onComplete.call(w)))},force:{visible:function(){var e=C.attr("style"),t=x.get.userStyle(),n=x.get.displayType(),i=t+"display: "+n+" !important;",o=C.css("display"),a=void 0===e||""===e;o!==n?(x.verbose("Overriding default display to show element",n),C.attr("style",i)):a&&C.removeAttr("style")},hidden:function(){var e=C.attr("style"),t=C.css("display"),n=void 0===e||""===e;"none"===t||x.is.hidden()?n&&C.removeAttr("style"):(x.verbose("Overriding default display to hide element"),C.css("display","none"))}},has:{direction:function(t){var n=!1;return t=t||f.animation,"string"==typeof t&&(t=t.split(" "),e.each(t,function(e,t){t!==v.inward&&t!==v.outward||(n=!0)})),n},inlineDisplay:function(){var t=C.attr("style")||"";return e.isArray(t.match(/display.*?;/,""))}},set:{animating:function(e){var t;x.remove.completeCallback(),e=e||f.animation,t=x.get.animationClass(e),x.save.animation(t),x.force.visible(),x.remove.hidden(),x.remove.direction(),x.start.animation(t)},duration:function(e,t){t=t||f.duration,((t="number"==typeof t?t+"ms":t)||0===t)&&(x.verbose("Setting animation duration",t),C.css({"animation-duration":t}))},direction:function(e){e=e||x.get.direction(),e==v.inward?x.set.inward():x.set.outward()},looping:function(){x.debug("Transition set to loop"),C.addClass(v.looping)},hidden:function(){C.addClass(v.transition).addClass(v.hidden)},inward:function(){x.debug("Setting direction to inward"),C.removeClass(v.outward).addClass(v.inward)},outward:function(){x.debug("Setting direction to outward"),C.removeClass(v.inward).addClass(v.outward)},visible:function(){C.addClass(v.transition).addClass(v.visible)}},start:{animation:function(e){e=e||x.get.animationClass(),x.debug("Starting tween",e),C.addClass(e).one(h+".complete"+y,x.complete),f.useFailSafe&&x.add.failSafe(),x.set.duration(f.duration),f.onStart.call(w)}},save:{animation:function(e){x.cache||(x.cache={}),x.cache.animation=e},displayType:function(e){"none"!==e&&C.data(p.displayType,e)},transitionExists:function(t,n){e.fn.transition.exists[t]=n,x.verbose("Saving existence of transition",t,n)}},restore:{conditions:function(){var e=x.get.currentAnimation();e&&(C.removeClass(e),x.verbose("Removing animation class",x.cache)),x.remove.duration()}},add:{failSafe:function(){var e=x.get.duration();x.timer=setTimeout(function(){C.triggerHandler(h)},e+f.failSafeDelay),x.verbose("Adding fail safe timer",x.timer)}},remove:{animating:function(){C.removeClass(v.animating)},animationCallbacks:function(){x.remove.queueCallback(),x.remove.completeCallback()},queueCallback:function(){C.off(".queue"+y)},completeCallback:function(){C.off(".complete"+y)},display:function(){C.css("display","")},direction:function(){C.removeClass(v.inward).removeClass(v.outward)},duration:function(){C.css("animation-duration","")},failSafe:function(){x.verbose("Removing fail safe timer",x.timer),x.timer&&clearTimeout(x.timer)},hidden:function(){C.removeClass(v.hidden)},visible:function(){C.removeClass(v.visible)},looping:function(){x.debug("Transitions are no longer looping"),x.is.looping()&&(x.reset(),C.removeClass(v.looping))},transition:function(){C.removeClass(v.visible).removeClass(v.hidden)}},get:{settings:function(t,n,i){return"object"==typeof t?e.extend(!0,{},e.fn.transition.settings,t):"function"==typeof i?e.extend({},e.fn.transition.settings,{animation:t,onComplete:i,duration:n}):"string"==typeof n||"number"==typeof n?e.extend({},e.fn.transition.settings,{animation:t,duration:n}):"object"==typeof n?e.extend({},e.fn.transition.settings,n,{animation:t}):"function"==typeof n?e.extend({},e.fn.transition.settings,{animation:t,onComplete:n}):e.extend({},e.fn.transition.settings,{animation:t})},animationClass:function(e){var t=e||f.animation,n=x.can.transition()&&!x.has.direction()?x.get.direction()+" ":"";return v.animating+" "+v.transition+" "+n+t},currentAnimation:function(){return!(!x.cache||void 0===x.cache.animation)&&x.cache.animation},currentDirection:function(){return x.is.inward()?v.inward:v.outward},direction:function(){return x.is.hidden()||!x.is.visible()?v.inward:v.outward},animationDirection:function(t){var n;return t=t||f.animation,"string"==typeof t&&(t=t.split(" "),e.each(t,function(e,t){t===v.inward?n=v.inward:t===v.outward&&(n=v.outward)})),n||!1},duration:function(e){return e=e||f.duration,!1===e&&(e=C.css("animation-duration")||0),"string"==typeof e?e.indexOf("ms")>-1?parseFloat(e):1e3*parseFloat(e):e},displayType:function(e){return e=void 0===e||e,f.displayType?f.displayType:(e&&void 0===C.data(p.displayType)&&x.can.transition(!0),C.data(p.displayType))},userStyle:function(e){return e=e||C.attr("style")||"",e.replace(/display.*?;/,"")},transitionExists:function(t){return e.fn.transition.exists[t]},animationStartEvent:function(){var e,t=n.createElement("div"),i={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(e in i)if(void 0!==t.style[e])return i[e];return!1},animationEndEvent:function(){var e,t=n.createElement("div"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e];return!1}},can:{transition:function(t){var n,i,o,a,r,s,l=f.animation,c=x.get.transitionExists(l),u=x.get.displayType(!1);if(void 0===c||t){if(x.verbose("Determining whether animation exists"),n=C.attr("class"),i=C.prop("tagName"),o=e("<"+i+" />").addClass(n).insertAfter(C),a=o.addClass(l).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css("animationName"),r=o.addClass(v.inward).css("animationName"),u||(u=o.attr("class",n).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"),x.verbose("Determining final display state",u),x.save.displayType(u)),o.remove(),a!=r)x.debug("Direction exists for animation",l),s=!0;else{if("none"==a||!a)return void x.debug("No animation defined in css",l);x.debug("Static animation found",l,u),s=!1}x.save.transitionExists(l,s)}return void 0!==c?c:s},animate:function(){return void 0!==x.can.transition()}},is:{animating:function(){return C.hasClass(v.animating)},inward:function(){return C.hasClass(v.inward)},outward:function(){return C.hasClass(v.outward)},looping:function(){return C.hasClass(v.looping)},occurring:function(e){return e=e||f.animation,e="."+e.replace(" ","."),C.filter(e).length>0},visible:function(){return C.is(":visible")},hidden:function(){return"hidden"===C.css("visibility")},supported:function(){return!1!==h}},hide:function(){x.verbose("Hiding element"),x.is.animating()&&x.reset(),w.blur(),x.remove.display(),x.remove.visible(),x.set.hidden(),x.force.hidden(),f.onHide.call(w),f.onComplete.call(w)},show:function(e){x.verbose("Showing element",e),x.remove.hidden(),x.set.visible(),x.force.visible(),f.onShow.call(w),f.onComplete.call(w)},toggle:function(){x.is.visible()?x.hide():x.show()},stop:function(){x.debug("Stopping current animation"),C.triggerHandler(h)},stopAll:function(){x.debug("Stopping all animation"),x.remove.queueCallback(),C.triggerHandler(h)},clear:{queue:function(){x.debug("Clearing animation queue"),x.remove.queueCallback()}},enable:function(){x.verbose("Starting animation"),C.removeClass(v.disabled)},disable:function(){x.debug("Stopping animation"),C.addClass(v.disabled)},setting:function(t,n){if(x.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,f,t);else{if(void 0===n)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],n):f[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,x,t);else{if(void 0===n)return x[t];x[t]=n}},debug:function(){!f.silent&&f.debug&&(f.performance?x.performance.log(arguments):(x.debug=Function.prototype.bind.call(console.info,console,f.name+":"),x.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?x.performance.log(arguments):(x.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),x.verbose.apply(console,arguments)))},error:function(){f.silent||(x.error=Function.prototype.bind.call(console.error,console,f.name+":"),x.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;f.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:w,"Execution Time":n})),clearTimeout(x.performance.timer),x.performance.timer=setTimeout(x.performance.display,500)},display:function(){var t=f.name+":",n=0;r=!1,clearTimeout(x.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),o.length>1&&(t+=" ("+o.length+")"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,o){var a,r,s,l=m;return n=n||u,o=w||o,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]&&(r=l[i],!1);l=l[i]}})),e.isFunction(r)?s=r.apply(o,n):void 0!==r&&(s=r),e.isArray(i)?i.push(s):void 0!==i?i=[i,s]:void 0!==s&&(i=s),void 0!==r&&r}},x.initialize()}),void 0!==i?i:this},e.fn.transition.exists={},e.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document),function(e,t,n,i){"use strict";var t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();e.api=e.fn.api=function(n){var i,o=e(e.isFunction(this)?t:this),a=o.selector||"",r=(new Date).getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);return o.each(function(){var o,d,f,m,g,v=e.isPlainObject(n)?e.extend(!0,{},e.fn.api.settings,n):e.extend({},e.fn.api.settings),p=v.namespace,h=v.metadata,b=v.selector,y=v.error,x=v.className,C="."+p,w="module-"+p,k=e(this),S=k.closest(b.form),T=v.stateContext?e(v.stateContext):k,A=this,R=T[0],P=k.data(w);g={initialize:function(){c||g.bind.events(),g.instantiate()},instantiate:function(){g.verbose("Storing instance of module",g),P=g,k.data(w,P)},destroy:function(){g.verbose("Destroying previous module for",A),k.removeData(w).off(C)},bind:{events:function(){var e=g.get.event();e?(g.verbose("Attaching API events to element",e),k.on(e+C,g.event.trigger)):"now"==v.on&&(g.debug("Querying API endpoint immediately"),g.query())}},decode:{json:function(e){if(void 0!==e&&"string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}},read:{cachedResponse:function(e){var n;return void 0===t.Storage?void g.error(y.noStorage):(n=sessionStorage.getItem(e),g.debug("Using cached response",e,n),n=g.decode.json(n))}},write:{cachedResponse:function(n,i){return i&&""===i?void g.debug("Response empty, not caching",i):void 0===t.Storage?void g.error(y.noStorage):(e.isPlainObject(i)&&(i=JSON.stringify(i)),sessionStorage.setItem(n,i),void g.verbose("Storing cached response for url",n,i))}},query:function(){if(g.is.disabled())return void g.debug("Element is disabled API request aborted");if(g.is.loading()){if(!v.interruptRequests)return void g.debug("Cancelling request, previous request is still pending");g.debug("Interrupting previous request"),g.abort()}if(v.defaultData&&e.extend(!0,v.urlData,g.get.defaultData()),v.serializeForm&&(v.data=g.add.formData(v.data)),!1===(d=g.get.settings()))return g.cancelled=!0,void g.error(y.beforeSend);if(g.cancelled=!1,!(f=g.get.templatedURL())&&!g.is.mocked())return void g.error(y.missingURL);if((f=g.add.urlData(f))||g.is.mocked()){if(d.url=v.base+f,o=e.extend(!0,{},v,{type:v.method||v.type,data:void 0,url:v.base+f,beforeSend:v.beforeXHR,success:function(){},failure:function(){},complete:function(){}}),g.debug("Querying URL",o.url),g.verbose("Using AJAX settings",o),"local"===v.cache&&g.read.cachedResponse(f))return g.debug("Response returned from local cache"),g.request=g.create.request(),void g.request.resolveWith(R,[g.read.cachedResponse(f)]);v.throttle?v.throttleFirstRequest||g.timer?(g.debug("Throttling request",v.throttle),clearTimeout(g.timer),g.timer=setTimeout(function(){g.timer&&delete g.timer,g.debug("Sending throttled request",void 0,o.method),g.send.request()},v.throttle)):(g.debug("Sending request",void 0,o.method),g.send.request(),g.timer=setTimeout(function(){},v.throttle)):(g.debug("Sending request",void 0,o.method),g.send.request())}},should:{removeError:function(){return!0===v.hideError||"auto"===v.hideError&&!g.is.form()}},is:{disabled:function(){return k.filter(b.disabled).length>0},expectingJSON:function(){return"json"===v.dataType||"jsonp"===v.dataType},form:function(){return k.is("form")||T.is("form")},mocked:function(){return v.mockResponse||v.mockResponseAsync||v.response||v.responseAsync},input:function(){return k.is("input")},loading:function(){return!!g.request&&"pending"==g.request.state()},abortedRequest:function(e){return e&&void 0!==e.readyState&&0===e.readyState?(g.verbose("XHR request determined to be aborted"),!0):(g.verbose("XHR request was not aborted"),!1)},validResponse:function(t){return g.is.expectingJSON()&&e.isFunction(v.successTest)?(g.debug("Checking JSON returned success",v.successTest,t),v.successTest(t)?(g.debug("Response passed success test",t),!0):(g.debug("Response failed success test",t),!1)):(g.verbose("Response is not JSON, skipping validation",v.successTest,t),!0)}},was:{cancelled:function(){return g.cancelled||!1},succesful:function(){return g.request&&"resolved"==g.request.state()},failure:function(){return g.request&&"rejected"==g.request.state()},complete:function(){return g.request&&("resolved"==g.request.state()||"rejected"==g.request.state())}},add:{urlData:function(t,n){var i,o;return t&&(i=t.match(v.regExp.required),o=t.match(v.regExp.optional),n=n||v.urlData,i&&(g.debug("Looking for required URL variables",i),e.each(i,function(i,o){var a=-1!==o.indexOf("$")?o.substr(2,o.length-3):o.substr(1,o.length-2),r=e.isPlainObject(n)&&void 0!==n[a]?n[a]:void 0!==k.data(a)?k.data(a):void 0!==T.data(a)?T.data(a):n[a];if(void 0===r)return g.error(y.requiredParameter,a,t),t=!1,!1;g.verbose("Found required variable",a,r),r=v.encodeParameters?g.get.urlEncodedValue(r):r,t=t.replace(o,r)})),o&&(g.debug("Looking for optional URL variables",i),e.each(o,function(i,o){var a=-1!==o.indexOf("$")?o.substr(3,o.length-4):o.substr(2,o.length-3),r=e.isPlainObject(n)&&void 0!==n[a]?n[a]:void 0!==k.data(a)?k.data(a):void 0!==T.data(a)?T.data(a):n[a];void 0!==r?(g.verbose("Optional variable Found",a,r),t=t.replace(o,r)):(g.verbose("Optional variable not found",a),t=-1!==t.indexOf("/"+o)?t.replace("/"+o,""):t.replace(o,""))}))),t},formData:function(t){var n,i=void 0!==e.fn.serializeObject,o=i?S.serializeObject():S.serialize();return t=t||v.data,n=e.isPlainObject(t),n?i?(g.debug("Extending existing data with form data",t,o),t=e.extend(!0,{},t,o)):(g.error(y.missingSerialize),g.debug("Cant extend data. Replacing data with form data",t,o),t=o):(g.debug("Adding form data",o),t=o),t}},send:{request:function(){g.set.loading(),g.request=g.create.request(),g.is.mocked()?g.mockedXHR=g.create.mockedXHR():g.xhr=g.create.xhr(),v.onRequest.call(R,g.request,g.xhr)}},event:{trigger:function(e){g.query(),"submit"!=e.type&&"click"!=e.type||e.preventDefault()},xhr:{always:function(){},done:function(t,n,i){var o=this,a=(new Date).getTime()-m,r=v.loadingDuration-a,s=!!e.isFunction(v.onResponse)&&(g.is.expectingJSON()?v.onResponse.call(o,e.extend(!0,{},t)):v.onResponse.call(o,t));r=r>0?r:0,s&&(g.debug("Modified API response in onResponse callback",v.onResponse,s,t),t=s),r>0&&g.debug("Response completed early delaying state change by",r),setTimeout(function(){g.is.validResponse(t)?g.request.resolveWith(o,[t,i]):g.request.rejectWith(o,[i,"invalid"])},r)},fail:function(e,t,n){var i=this,o=(new Date).getTime()-m,a=v.loadingDuration-o;a=a>0?a:0,a>0&&g.debug("Response completed early delaying state change by",a),setTimeout(function(){g.is.abortedRequest(e)?g.request.rejectWith(i,[e,"aborted",n]):g.request.rejectWith(i,[e,"error",t,n])},a)}},request:{done:function(e,t){g.debug("Successful API Response",e),"local"===v.cache&&f&&(g.write.cachedResponse(f,e),g.debug("Saving server response locally",g.cache)),v.onSuccess.call(R,e,k,t)},complete:function(e,t){var n,i;g.was.succesful()?(i=e,n=t):(n=e,i=g.get.responseFromXHR(n)),g.remove.loading(),v.onComplete.call(R,i,k,n)},fail:function(e,t,n){var i=g.get.responseFromXHR(e),a=g.get.errorFromRequest(i,t,n);if("aborted"==t)return g.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)",t,n),v.onAbort.call(R,t,k,e),!0;"invalid"==t?g.debug("JSON did not pass success test. A server-side error has most likely occurred",i):"error"==t&&void 0!==e&&(g.debug("XHR produced a server error",t,n),200!=e.status&&void 0!==n&&""!==n&&g.error(y.statusMessage+n,o.url),v.onError.call(R,a,k,e)),v.errorDuration&&"aborted"!==t&&(g.debug("Adding error state"),g.set.error(),g.should.removeError()&&setTimeout(g.remove.error,v.errorDuration)),g.debug("API Request failed",a,e),v.onFailure.call(R,i,k,e)}}},create:{request:function(){return e.Deferred().always(g.event.request.complete).done(g.event.request.done).fail(g.event.request.fail)},mockedXHR:function(){var t,n,i,o=v.mockResponse||v.response,a=v.mockResponseAsync||v.responseAsync;return i=e.Deferred().always(g.event.xhr.complete).done(g.event.xhr.done).fail(g.event.xhr.fail),o?(e.isFunction(o)?(g.debug("Using specified synchronous callback",o),n=o.call(R,d)):(g.debug("Using settings specified response",o),n=o),i.resolveWith(R,[n,!1,{responseText:n}])):e.isFunction(a)&&(t=function(e){g.debug("Async callback returned response",e),e?i.resolveWith(R,[e,!1,{responseText:e}]):i.rejectWith(R,[{responseText:e},!1,!1])},g.debug("Using specified async response callback",a),a.call(R,d,t)),i},xhr:function(){var t;return t=e.ajax(o).always(g.event.xhr.always).done(g.event.xhr.done).fail(g.event.xhr.fail),g.verbose("Created server request",t,o),t}},set:{error:function(){g.verbose("Adding error state to element",T),T.addClass(x.error)},loading:function(){g.verbose("Adding loading state to element",T),T.addClass(x.loading),m=(new Date).getTime()}},remove:{error:function(){g.verbose("Removing error state from element",T),T.removeClass(x.error)},loading:function(){g.verbose("Removing loading state from element",T),T.removeClass(x.loading)}},get:{responseFromXHR:function(t){return!!e.isPlainObject(t)&&(g.is.expectingJSON()?g.decode.json(t.responseText):t.responseText)},errorFromRequest:function(t,n,i){return e.isPlainObject(t)&&void 0!==t.error?t.error:void 0!==v.error[n]?v.error[n]:i},request:function(){return g.request||!1},xhr:function(){return g.xhr||!1},settings:function(){var t;return t=v.beforeSend.call(R,v),t&&(void 0!==t.success&&(g.debug("Legacy success callback detected",t),g.error(y.legacyParameters,t.success),t.onSuccess=t.success),void 0!==t.failure&&(g.debug("Legacy failure callback detected",t),g.error(y.legacyParameters,t.failure),t.onFailure=t.failure),void 0!==t.complete&&(g.debug("Legacy complete callback detected",t),g.error(y.legacyParameters,t.complete),t.onComplete=t.complete)),void 0===t&&g.error(y.noReturnedValue),!1===t?t:void 0!==t?e.extend(!0,{},t):e.extend(!0,{},v)},urlEncodedValue:function(e){var n=t.decodeURIComponent(e),i=t.encodeURIComponent(e);return n!==e?(g.debug("URL value is already encoded, avoiding double encoding",e),e):(g.verbose("Encoding value using encodeURIComponent",e,i),i)},defaultData:function(){var t={};return e.isWindow(A)||(g.is.input()?t.value=k.val():g.is.form()||(t.text=k.text())),t},event:function(){return e.isWindow(A)||"now"==v.on?(g.debug("API called without element, no events attached"),!1):"auto"==v.on?k.is("input")?void 0!==A.oninput?"input":void 0!==A.onpropertychange?"propertychange":"keyup":k.is("form")?"submit":"click":v.on},templatedURL:function(e){if(e=e||k.data(h.action)||v.action||!1,f=k.data(h.url)||v.url||!1)return g.debug("Using specified url",f),f;if(e){if(g.debug("Looking up url for action",e,v.api),void 0===v.api[e]&&!g.is.mocked())return void g.error(y.missingAction,v.action,v.api);f=v.api[e]}else g.is.form()&&(f=k.attr("action")||T.attr("action")||!1,g.debug("No url or action specified, defaulting to form action",f));return f}},abort:function(){var e=g.get.xhr();e&&"resolved"!==e.state()&&(g.debug("Cancelling API request"),e.abort())},reset:function(){g.remove.error(),g.remove.loading()},setting:function(t,n){if(g.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,v,t);else{if(void 0===n)return v[t];e.isPlainObject(v[t])?e.extend(!0,v[t],n):v[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(void 0===n)return g[t];g[t]=n}},debug:function(){!v.silent&&v.debug&&(v.performance?g.performance.log(arguments):(g.debug=Function.prototype.bind.call(console.info,console,v.name+":"),g.debug.apply(console,arguments)))},verbose:function(){!v.silent&&v.verbose&&v.debug&&(v.performance?g.performance.log(arguments):(g.verbose=Function.prototype.bind.call(console.info,console,v.name+":"),g.verbose.apply(console,arguments)))},error:function(){
v.silent||(g.error=Function.prototype.bind.call(console.error,console,v.name+":"),g.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;v.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(g.performance.timer),g.performance.timer=setTimeout(g.performance.display,500)},display:function(){var t=v.name+":",n=0;r=!1,clearTimeout(g.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,o){var a,r,s,l=P;return n=n||u,o=A||o,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(r=l[i],!1):(g.error(y.method,t),!1);l=l[i]}})),e.isFunction(r)?s=r.apply(o,n):void 0!==r&&(s=r),e.isArray(i)?i.push(s):void 0!==i?i=[i,s]:void 0!==s&&(i=s),r}},c?(void 0===P&&g.initialize(),g.invoke(l)):(void 0!==P&&P.invoke("destroy"),g.initialize())}),void 0!==i?i:this},e.api.settings={name:"API",namespace:"api",debug:!1,verbose:!1,performance:!0,api:{},cache:!0,interruptRequests:!0,on:"auto",stateContext:!1,loadingDuration:0,hideError:"auto",errorDuration:2e3,encodeParameters:!0,action:!1,url:!1,base:"",urlData:{},defaultData:!0,serializeForm:!1,throttle:0,throttleFirstRequest:!0,method:"get",data:{},dataType:"json",mockResponse:!1,mockResponseAsync:!1,response:!1,responseAsync:!1,beforeSend:function(e){return e},beforeXHR:function(e){},onRequest:function(e,t){},onResponse:!1,onSuccess:function(e,t){},onComplete:function(e,t){},onFailure:function(e,t){},onError:function(e,t){},onAbort:function(e,t){},successTest:!1,error:{beforeSend:"The before send function has aborted the request",error:"There was an error with your request",exitConditions:"API Request Aborted. Exit conditions met",JSONParse:"JSON could not be parsed during error handling",legacyParameters:"You are using legacy API success callback names",method:"The method you called is not defined",missingAction:"API action used but no url was defined",missingSerialize:"jquery-serialize-object is required to add form data to an existing data object",missingURL:"No URL specified for api event",noReturnedValue:"The beforeSend callback must return a settings object, beforeSend ignored.",noStorage:"Caching responses locally requires session storage",parseError:"There was an error parsing your request",requiredParameter:"Missing a required URL parameter: ",statusMessage:"Server gave an error: ",timeout:"Your request timed out"},regExp:{required:/\{\$*[A-z0-9]+\}/g,optional:/\{\/\$*[A-z0-9]+\}/g},className:{loading:"loading",error:"error"},selector:{disabled:".disabled",form:"form"},metadata:{action:"action",url:"url"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.state=function(t){var i,o=e(this),a=o.selector||"",r=(n.documentElement,(new Date).getTime()),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);return o.each(function(){var n,d=e.isPlainObject(t)?e.extend(!0,{},e.fn.state.settings,t):e.extend({},e.fn.state.settings),f=d.error,m=d.metadata,g=d.className,v=d.namespace,p=d.states,h=d.text,b="."+v,y=v+"-module",x=e(this),C=this,w=x.data(y);n={initialize:function(){n.verbose("Initializing module"),d.automatic&&n.add.defaults(),d.context&&""!==a?e(d.context).on(a,"mouseenter"+b,n.change.text).on(a,"mouseleave"+b,n.reset.text).on(a,"click"+b,n.toggle.state):x.on("mouseenter"+b,n.change.text).on("mouseleave"+b,n.reset.text).on("click"+b,n.toggle.state),n.instantiate()},instantiate:function(){n.verbose("Storing instance of module",n),w=n,x.data(y,n)},destroy:function(){n.verbose("Destroying previous module",w),x.off(b).removeData(y)},refresh:function(){n.verbose("Refreshing selector cache"),x=e(C)},add:{defaults:function(){var i=t&&e.isPlainObject(t.states)?t.states:{};e.each(d.defaults,function(t,o){void 0!==n.is[t]&&n.is[t]()&&(n.verbose("Adding default states",t,C),e.extend(d.states,o,i))})}},is:{active:function(){return x.hasClass(g.active)},loading:function(){return x.hasClass(g.loading)},inactive:function(){return!x.hasClass(g.active)},state:function(e){return void 0!==g[e]&&x.hasClass(g[e])},enabled:function(){return!x.is(d.filter.active)},disabled:function(){return x.is(d.filter.active)},textEnabled:function(){return!x.is(d.filter.text)},button:function(){return x.is(".button:not(a, .submit)")},input:function(){return x.is("input")},progress:function(){return x.is(".ui.progress")}},allow:function(e){n.debug("Now allowing state",e),p[e]=!0},disallow:function(e){n.debug("No longer allowing",e),p[e]=!1},allows:function(e){return p[e]||!1},enable:function(){x.removeClass(g.disabled)},disable:function(){x.addClass(g.disabled)},setState:function(e){n.allows(e)&&x.addClass(g[e])},removeState:function(e){n.allows(e)&&x.removeClass(g[e])},toggle:{state:function(){var t;if(n.allows("active")&&n.is.enabled()){if(n.refresh(),void 0!==e.fn.api)if(t=x.api("get request"),x.api("was cancelled"))n.debug("API Request cancelled by beforesend"),d.activateTest=function(){return!1},d.deactivateTest=function(){return!1};else if(t)return void n.listenTo(t);n.change.state()}}},listenTo:function(t){n.debug("API request detected, waiting for state signal",t),t&&(h.loading&&n.update.text(h.loading),e.when(t).then(function(){"resolved"==t.state()?(n.debug("API request succeeded"),d.activateTest=function(){return!0},d.deactivateTest=function(){return!0}):(n.debug("API request failed"),d.activateTest=function(){return!1},d.deactivateTest=function(){return!1}),n.change.state()}))},change:{state:function(){n.debug("Determining state change direction"),n.is.inactive()?n.activate():n.deactivate(),d.sync&&n.sync(),d.onChange.call(C)},text:function(){n.is.textEnabled()&&(n.is.disabled()?(n.verbose("Changing text to disabled text",h.hover),n.update.text(h.disabled)):n.is.active()?h.hover?(n.verbose("Changing text to hover text",h.hover),n.update.text(h.hover)):h.deactivate&&(n.verbose("Changing text to deactivating text",h.deactivate),n.update.text(h.deactivate)):h.hover?(n.verbose("Changing text to hover text",h.hover),n.update.text(h.hover)):h.activate&&(n.verbose("Changing text to activating text",h.activate),n.update.text(h.activate)))}},activate:function(){d.activateTest.call(C)&&(n.debug("Setting state to active"),x.addClass(g.active),n.update.text(h.active),d.onActivate.call(C))},deactivate:function(){d.deactivateTest.call(C)&&(n.debug("Setting state to inactive"),x.removeClass(g.active),n.update.text(h.inactive),d.onDeactivate.call(C))},sync:function(){n.verbose("Syncing other buttons to current state"),n.is.active()?o.not(x).state("activate"):o.not(x).state("deactivate")},get:{text:function(){return d.selector.text?x.find(d.selector.text).text():x.html()},textFor:function(e){return h[e]||!1}},flash:{text:function(e,t,i){var o=n.get.text();n.debug("Flashing text message",e,t),e=e||d.text.flash,t=t||d.flashDuration,i=i||function(){},n.update.text(e),setTimeout(function(){n.update.text(o),i.call(C)},t)}},reset:{text:function(){var e=h.active||x.data(m.storedText),t=h.inactive||x.data(m.storedText);n.is.textEnabled()&&(n.is.active()&&e?(n.verbose("Resetting active text",e),n.update.text(e)):t&&(n.verbose("Resetting inactive text",e),n.update.text(t)))}},update:{text:function(e){var t=n.get.text();e&&e!==t?(n.debug("Updating text",e),d.selector.text?x.data(m.storedText,e).find(d.selector.text).text(e):x.data(m.storedText,e).html(e)):n.debug("Text is already set, ignoring update",e)}},setting:function(t,i){if(n.debug("Changing setting",t,i),e.isPlainObject(t))e.extend(!0,d,t);else{if(void 0===i)return d[t];e.isPlainObject(d[t])?e.extend(!0,d[t],i):d[t]=i}},internal:function(t,i){if(e.isPlainObject(t))e.extend(!0,n,t);else{if(void 0===i)return n[t];n[t]=i}},debug:function(){!d.silent&&d.debug&&(d.performance?n.performance.log(arguments):(n.debug=Function.prototype.bind.call(console.info,console,d.name+":"),n.debug.apply(console,arguments)))},verbose:function(){!d.silent&&d.verbose&&d.debug&&(d.performance?n.performance.log(arguments):(n.verbose=Function.prototype.bind.call(console.info,console,d.name+":"),n.verbose.apply(console,arguments)))},error:function(){d.silent||(n.error=Function.prototype.bind.call(console.error,console,d.name+":"),n.error.apply(console,arguments))},performance:{log:function(e){var t,i,o;d.performance&&(t=(new Date).getTime(),o=r||t,i=t-o,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:C,"Execution Time":i})),clearTimeout(n.performance.timer),n.performance.timer=setTimeout(n.performance.display,500)},display:function(){var t=d.name+":",i=0;r=!1,clearTimeout(n.performance.timer),e.each(s,function(e,t){i+=t["Execution Time"]}),t+=" "+i+"ms",a&&(t+=" '"+a+"'"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,o,a){var r,s,l,c=w;return o=o||u,a=C||a,"string"==typeof t&&void 0!==c&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(i,o){var a=i!=r?o+t[i+1].charAt(0).toUpperCase()+t[i+1].slice(1):t;if(e.isPlainObject(c[a])&&i!=r)c=c[a];else{if(void 0!==c[a])return s=c[a],!1;if(!e.isPlainObject(c[o])||i==r)return void 0!==c[o]?(s=c[o],!1):(n.error(f.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,o):void 0!==s&&(l=s),e.isArray(i)?i.push(l):void 0!==i?i=[i,l]:void 0!==l&&(i=l),s}},c?(void 0===w&&n.initialize(),n.invoke(l)):(void 0!==w&&w.invoke("destroy"),n.initialize())}),void 0!==i?i:this},e.fn.state.settings={name:"State",debug:!1,verbose:!1,namespace:"state",performance:!0,onActivate:function(){},onDeactivate:function(){},onChange:function(){},activateTest:function(){return!0},deactivateTest:function(){return!0},automatic:!0,sync:!1,flashDuration:1e3,filter:{text:".loading, .disabled",active:".disabled"},context:!1,error:{beforeSend:"The before send function has cancelled state change",method:"The method you called is not defined."},metadata:{promise:"promise",storedText:"stored-text"},className:{active:"active",disabled:"disabled",error:"error",loading:"loading",success:"success",warning:"warning"},selector:{text:!1},defaults:{input:{disabled:!0,loading:!0,active:!0},button:{disabled:!0,loading:!0,active:!0},progress:{active:!0,success:!0,warning:!0,error:!0}},states:{active:!0,disabled:!0,error:!0,loading:!0,success:!0,warning:!0},text:{disabled:!1,flash:!1,hover:!1,active:!1,inactive:!1,activate:!1,deactivate:!1}}}(jQuery,window,document),function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.visibility=function(i){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1),f=a.length,m=0;return a.each(function(){var a,g,v,p,h=e.isPlainObject(i)?e.extend(!0,{},e.fn.visibility.settings,i):e.extend({},e.fn.visibility.settings),b=h.className,y=h.namespace,x=h.error,C=h.metadata,w="."+y,k="module-"+y,S=e(t),T=e(this),A=e(h.context),R=(T.selector,T.data(k)),P=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)},E=this,F=!1;p={initialize:function(){p.debug("Initializing",h),p.setup.cache(),p.should.trackChanges()&&("image"==h.type&&p.setup.image(),"fixed"==h.type&&p.setup.fixed(),h.observeChanges&&p.observeChanges(),p.bind.events()),p.save.position(),p.is.visible()||p.error(x.visible,T),h.initialCheck&&p.checkVisibility(),p.instantiate()},instantiate:function(){p.debug("Storing instance",p),T.data(k,p),R=p},destroy:function(){p.verbose("Destroying previous module"),v&&v.disconnect(),g&&g.disconnect(),S.off("load"+w,p.event.load).off("resize"+w,p.event.resize),A.off("scroll"+w,p.event.scroll).off("scrollchange"+w,p.event.scrollchange),"fixed"==h.type&&(p.resetFixed(),p.remove.placeholder()),T.off(w).removeData(k)},observeChanges:function(){"MutationObserver"in t&&(g=new MutationObserver(p.event.contextChanged),v=new MutationObserver(p.event.changed),g.observe(n,{childList:!0,subtree:!0}),v.observe(E,{childList:!0,subtree:!0}),p.debug("Setting up mutation observer",v))},bind:{events:function(){p.verbose("Binding visibility events to scroll and resize"),h.refreshOnLoad&&S.on("load"+w,p.event.load),S.on("resize"+w,p.event.resize),A.off("scroll"+w).on("scroll"+w,p.event.scroll).on("scrollchange"+w,p.event.scrollchange)}},event:{changed:function(e){p.verbose("DOM tree modified, updating visibility calculations"),p.timer=setTimeout(function(){p.verbose("DOM tree modified, updating sticky menu"),p.refresh()},100)},contextChanged:function(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==E||e(t).find(E).length>0)&&(p.debug("Element removed from DOM, tearing down events"),p.destroy())})})},resize:function(){p.debug("Window resized"),h.refreshOnResize&&P(p.refresh)},load:function(){p.debug("Page finished loading"),P(p.refresh)},scroll:function(){h.throttle?(clearTimeout(p.timer),p.timer=setTimeout(function(){A.triggerHandler("scrollchange"+w,[A.scrollTop()])},h.throttle)):P(function(){A.triggerHandler("scrollchange"+w,[A.scrollTop()])})},scrollchange:function(e,t){p.checkVisibility(t)}},precache:function(t,i){t instanceof Array||(t=[t]);for(var o=t.length,a=0,r=[],s=n.createElement("img"),l=function(){++a>=t.length&&e.isFunction(i)&&i()};o--;)s=n.createElement("img"),s.onload=l,s.onerror=l,s.src=t[o],r.push(s)},enableCallbacks:function(){p.debug("Allowing callbacks to occur"),F=!1},disableCallbacks:function(){p.debug("Disabling all callbacks temporarily"),F=!0},should:{trackChanges:function(){return u?(p.debug("One time query, no need to bind events"),!1):(p.debug("Callbacks being attached"),!0)}},setup:{cache:function(){p.cache={occurred:{},screen:{},element:{}}},image:function(){var e=T.data(C.src);e&&(p.verbose("Lazy loading image",e),h.once=!0,h.observeChanges=!1,h.onOnScreen=function(){p.debug("Image on screen",E),p.precache(e,function(){p.set.image(e,function(){m++,m==f&&h.onAllLoaded.call(this),h.onLoad.call(this)})})})},fixed:function(){p.debug("Setting up fixed"),h.once=!1,h.observeChanges=!1,h.initialCheck=!0,h.refreshOnLoad=!0,i.transition||(h.transition=!1),p.create.placeholder(),p.debug("Added placeholder",a),h.onTopPassed=function(){p.debug("Element passed, adding fixed position",T),p.show.placeholder(),p.set.fixed(),h.transition&&void 0!==e.fn.transition&&T.transition(h.transition,h.duration)},h.onTopPassedReverse=function(){p.debug("Element returned to position, removing fixed",T),p.hide.placeholder(),p.remove.fixed()}}},create:{placeholder:function(){p.verbose("Creating fixed position placeholder"),a=T.clone(!1).css("display","none").addClass(b.placeholder).insertAfter(T)}},show:{placeholder:function(){p.verbose("Showing placeholder"),a.css("display","block").css("visibility","hidden")}},hide:{placeholder:function(){p.verbose("Hiding placeholder"),a.css("display","none").css("visibility","")}},set:{fixed:function(){p.verbose("Setting element to fixed position"),T.addClass(b.fixed).css({position:"fixed",top:h.offset+"px",left:"auto",zIndex:h.zIndex}),h.onFixed.call(E)},image:function(t,n){if(T.attr("src",t),h.transition)if(void 0!==e.fn.transition){if(T.hasClass(b.visible))return void p.debug("Transition already occurred on this image, skipping animation");T.transition(h.transition,h.duration,n)}else T.fadeIn(h.duration,n);else T.show()}},is:{onScreen:function(){return p.get.elementCalculations().onScreen},offScreen:function(){return p.get.elementCalculations().offScreen},visible:function(){return!(!p.cache||!p.cache.element)&&!(0===p.cache.element.width&&0===p.cache.element.offset.top)},verticallyScrollableContext:function(){var e=A.get(0)!==t&&A.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=A.get(0)!==t&&A.css("overflow-x");return"auto"==e||"scroll"==e}},refresh:function(){p.debug("Refreshing constants (width/height)"),"fixed"==h.type&&p.resetFixed(),p.reset(),p.save.position(),h.checkOnRefresh&&p.checkVisibility(),h.onRefresh.call(E)},resetFixed:function(){p.remove.fixed(),p.remove.occurred()},reset:function(){p.verbose("Resetting all cached values"),e.isPlainObject(p.cache)&&(p.cache.screen={},p.cache.element={})},checkVisibility:function(e){p.verbose("Checking visibility of element",p.cache.element),!F&&p.is.visible()&&(p.save.scroll(e),p.save.calculations(),p.passed(),p.passingReverse(),p.topVisibleReverse(),p.bottomVisibleReverse(),p.topPassedReverse(),p.bottomPassedReverse(),p.onScreen(),p.offScreen(),p.passing(),p.topVisible(),p.bottomVisible(),p.topPassed(),p.bottomPassed(),h.onUpdate&&h.onUpdate.call(E,p.get.elementCalculations()))},passed:function(t,n){var i=p.get.elementCalculations();if(t&&n)h.onPassed[t]=n;else{if(void 0!==t)return p.get.pixelsPassed(t)>i.pixelsPassed;i.passing&&e.each(h.onPassed,function(e,t){i.bottomVisible||i.pixelsPassed>p.get.pixelsPassed(e)?p.execute(t,e):h.once||p.remove.occurred(t)})}},onScreen:function(e){var t=p.get.elementCalculations(),n=e||h.onOnScreen;if(e&&(p.debug("Adding callback for onScreen",e),h.onOnScreen=e),t.onScreen?p.execute(n,"onScreen"):h.once||p.remove.occurred("onScreen"),void 0!==e)return t.onOnScreen},offScreen:function(e){var t=p.get.elementCalculations(),n=e||h.onOffScreen;if(e&&(p.debug("Adding callback for offScreen",e),h.onOffScreen=e),t.offScreen?p.execute(n,"offScreen"):h.once||p.remove.occurred("offScreen"),void 0!==e)return t.onOffScreen},passing:function(e){var t=p.get.elementCalculations(),n=e||h.onPassing;if(e&&(p.debug("Adding callback for passing",e),h.onPassing=e),t.passing?p.execute(n,"passing"):h.once||p.remove.occurred("passing"),void 0!==e)return t.passing},topVisible:function(e){var t=p.get.elementCalculations(),n=e||h.onTopVisible;if(e&&(p.debug("Adding callback for top visible",e),h.onTopVisible=e),t.topVisible?p.execute(n,"topVisible"):h.once||p.remove.occurred("topVisible"),void 0===e)return t.topVisible},bottomVisible:function(e){var t=p.get.elementCalculations(),n=e||h.onBottomVisible;if(e&&(p.debug("Adding callback for bottom visible",e),h.onBottomVisible=e),t.bottomVisible?p.execute(n,"bottomVisible"):h.once||p.remove.occurred("bottomVisible"),void 0===e)return t.bottomVisible},topPassed:function(e){var t=p.get.elementCalculations(),n=e||h.onTopPassed;if(e&&(p.debug("Adding callback for top passed",e),h.onTopPassed=e),t.topPassed?p.execute(n,"topPassed"):h.once||p.remove.occurred("topPassed"),void 0===e)return t.topPassed},bottomPassed:function(e){var t=p.get.elementCalculations(),n=e||h.onBottomPassed;if(e&&(p.debug("Adding callback for bottom passed",e),h.onBottomPassed=e),t.bottomPassed?p.execute(n,"bottomPassed"):h.once||p.remove.occurred("bottomPassed"),void 0===e)return t.bottomPassed},passingReverse:function(e){var t=p.get.elementCalculations(),n=e||h.onPassingReverse;if(e&&(p.debug("Adding callback for passing reverse",e),h.onPassingReverse=e),t.passing?h.once||p.remove.occurred("passingReverse"):p.get.occurred("passing")&&p.execute(n,"passingReverse"),void 0!==e)return!t.passing},topVisibleReverse:function(e){var t=p.get.elementCalculations(),n=e||h.onTopVisibleReverse;if(e&&(p.debug("Adding callback for top visible reverse",e),h.onTopVisibleReverse=e),t.topVisible?h.once||p.remove.occurred("topVisibleReverse"):p.get.occurred("topVisible")&&p.execute(n,"topVisibleReverse"),void 0===e)return!t.topVisible},bottomVisibleReverse:function(e){var t=p.get.elementCalculations(),n=e||h.onBottomVisibleReverse;if(e&&(p.debug("Adding callback for bottom visible reverse",e),h.onBottomVisibleReverse=e),t.bottomVisible?h.once||p.remove.occurred("bottomVisibleReverse"):p.get.occurred("bottomVisible")&&p.execute(n,"bottomVisibleReverse"),void 0===e)return!t.bottomVisible},topPassedReverse:function(e){var t=p.get.elementCalculations(),n=e||h.onTopPassedReverse;if(e&&(p.debug("Adding callback for top passed reverse",e),h.onTopPassedReverse=e),t.topPassed?h.once||p.remove.occurred("topPassedReverse"):p.get.occurred("topPassed")&&p.execute(n,"topPassedReverse"),void 0===e)return!t.onTopPassed},bottomPassedReverse:function(e){var t=p.get.elementCalculations(),n=e||h.onBottomPassedReverse;if(e&&(p.debug("Adding callback for bottom passed reverse",e),h.onBottomPassedReverse=e),t.bottomPassed?h.once||p.remove.occurred("bottomPassedReverse"):p.get.occurred("bottomPassed")&&p.execute(n,"bottomPassedReverse"),void 0===e)return!t.bottomPassed},execute:function(e,t){var n=p.get.elementCalculations(),i=p.get.screenCalculations();e=e||!1,e&&(h.continuous?(p.debug("Callback being called continuously",t,n),e.call(E,n,i)):p.get.occurred(t)||(p.debug("Conditions met",t,n),e.call(E,n,i))),p.save.occurred(t)},remove:{fixed:function(){p.debug("Removing fixed position"),T.removeClass(b.fixed).css({position:"",top:"",left:"",zIndex:""}),h.onUnfixed.call(E)},placeholder:function(){p.debug("Removing placeholder content"),a&&a.remove()},occurred:function(e){if(e){var t=p.cache.occurred;void 0!==t[e]&&!0===t[e]&&(p.debug("Callback can now be called again",e),p.cache.occurred[e]=!1)}else p.cache.occurred={}}},save:{calculations:function(){p.verbose("Saving all calculations necessary to determine positioning"),p.save.direction(),p.save.screenCalculations(),p.save.elementCalculations()},occurred:function(e){e&&(void 0!==p.cache.occurred[e]&&!0===p.cache.occurred[e]||(p.verbose("Saving callback occurred",e),p.cache.occurred[e]=!0))},scroll:function(e){e=e+h.offset||A.scrollTop()+h.offset,p.cache.scroll=e},direction:function(){var e,t=p.get.scroll(),n=p.get.lastScroll();return e=t>n&&n?"down":t<n&&n?"up":"static",p.cache.direction=e,p.cache.direction},elementPosition:function(){var e=p.cache.element,t=p.get.screenSize();return p.verbose("Saving element position"),e.fits=e.height<t.height,e.offset=T.offset(),e.width=T.outerWidth(),e.height=T.outerHeight(),p.is.verticallyScrollableContext()&&(e.offset.top+=A.scrollTop()-A.offset().top),p.is.horizontallyScrollableContext()&&(e.offset.left+=A.scrollLeft-A.offset().left),p.cache.element=e,e},elementCalculations:function(){var e=p.get.screenCalculations(),t=p.get.elementPosition();return h.includeMargin?(t.margin={},t.margin.top=parseInt(T.css("margin-top"),10),t.margin.bottom=parseInt(T.css("margin-bottom"),10),t.top=t.offset.top-t.margin.top,t.bottom=t.offset.top+t.height+t.margin.bottom):(t.top=t.offset.top,t.bottom=t.offset.top+t.height),t.topPassed=e.top>=t.top,t.bottomPassed=e.top>=t.bottom,t.topVisible=e.bottom>=t.top&&!t.bottomPassed,t.bottomVisible=e.bottom>=t.bottom&&!t.topPassed,t.pixelsPassed=0,t.percentagePassed=0,t.onScreen=t.topVisible&&!t.bottomPassed,t.passing=t.topPassed&&!t.bottomPassed,t.offScreen=!t.onScreen,t.passing&&(t.pixelsPassed=e.top-t.top,t.percentagePassed=(e.top-t.top)/t.height),p.cache.element=t,p.verbose("Updated element calculations",t),t},screenCalculations:function(){var e=p.get.scroll();return p.save.direction(),p.cache.screen.top=e,p.cache.screen.bottom=e+p.cache.screen.height,p.cache.screen},screenSize:function(){p.verbose("Saving window position"),p.cache.screen={height:A.height()}},position:function(){p.save.screenSize(),p.save.elementPosition()}},get:{pixelsPassed:function(e){var t=p.get.elementCalculations();return e.search("%")>-1?t.height*(parseInt(e,10)/100):parseInt(e,10)},occurred:function(e){return void 0!==p.cache.occurred&&(p.cache.occurred[e]||!1)},direction:function(){return void 0===p.cache.direction&&p.save.direction(),p.cache.direction},elementPosition:function(){return void 0===p.cache.element&&p.save.elementPosition(),p.cache.element},elementCalculations:function(){return void 0===p.cache.element&&p.save.elementCalculations(),p.cache.element},screenCalculations:function(){return void 0===p.cache.screen&&p.save.screenCalculations(),p.cache.screen},screenSize:function(){return void 0===p.cache.screen&&p.save.screenSize(),p.cache.screen},scroll:function(){return void 0===p.cache.scroll&&p.save.scroll(),p.cache.scroll},lastScroll:function(){return void 0===p.cache.screen?(p.debug("First scroll event, no last scroll could be found"),!1):p.cache.screen.top}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(void 0===n)return h[t];h[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,p,t);else{if(void 0===n)return p[t];p[t]=n}},debug:function(){!h.silent&&h.debug&&(h.performance?p.performance.log(arguments):(p.debug=Function.prototype.bind.call(console.info,console,h.name+":"),p.debug.apply(console,arguments)))},verbose:function(){!h.silent&&h.verbose&&h.debug&&(h.performance?p.performance.log(arguments):(p.verbose=Function.prototype.bind.call(console.info,console,h.name+":"),p.verbose.apply(console,arguments)))},error:function(){h.silent||(p.error=Function.prototype.bind.call(console.error,console,h.name+":"),p.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;h.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:E,"Execution Time":n})),clearTimeout(p.performance.timer),p.performance.timer=setTimeout(p.performance.display,500)},display:function(){var t=h.name+":",n=0;s=!1,clearTimeout(p.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(void 0!==console.group||void 0!==console.table)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,i){var a,r,s,l=R;return n=n||d,i=E||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return r=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(r=l[i],!1):(p.error(x.method,t),!1);l=l[i]}})),e.isFunction(r)?s=r.apply(i,n):void 0!==r&&(s=r),e.isArray(o)?o.push(s):void 0!==o?o=[o,s]:void 0!==s&&(o=s),r}},u?(void 0===R&&p.initialize(),R.save.scroll(),R.save.calculations(),p.invoke(c)):(void 0!==R&&R.invoke("destroy"),p.initialize())}),void 0!==o?o:this},e.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:t,throttle:!1,type:!1,zIndex:"10",transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onLoad:function(){},onAllLoaded:function(){},onFixed:function(){},onUnfixed:function(){},onUpdate:!1,onRefresh:function(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"placeholder",visible:"visible"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}}}(jQuery,window,document);
/*
 * # Semantic UI 0.0.8 - Calendar
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */

;
(function ($, window, document, undefined) {

  "use strict";

  window = (typeof window != 'undefined' && window.Math == Math)
    ? window
    : (typeof self != 'undefined' && self.Math == Math)
    ? self
    : Function('return this')()
  ;

  $.fn.calendar = function (parameters) {

    var
      $allModules = $(this),

      moduleSelector = $allModules.selector || '',

      time = new Date().getTime(),
      performance = [],

      query = arguments[0],
      methodInvoked = (typeof query == 'string'),
      queryArguments = [].slice.call(arguments, 1),
      returnedValue
      ;

    $allModules
      .each(function () {
        var
          settings = ( $.isPlainObject(parameters) )
            ? $.extend(true, {}, $.fn.calendar.settings, parameters)
            : $.extend({}, $.fn.calendar.settings),

          className = settings.className,
          namespace = settings.namespace,
          selector = settings.selector,
          formatter = settings.formatter,
          parser = settings.parser,
          metadata = settings.metadata,
          error = settings.error,

          eventNamespace = '.' + namespace,
          moduleNamespace = 'module-' + namespace,

          $module = $(this),
          $input = $module.find(selector.input),
          $container = $module.find(selector.popup),
          $activator = $module.find(selector.activator),

          element = this,
          instance = $module.data(moduleNamespace),

          isTouch,
          isTouchDown = false,
          focusDateUsedForRange = false,
          module
          ;

        module = {

          initialize: function () {
            module.debug('Initializing calendar for', element);

            isTouch = module.get.isTouch();
            module.setup.popup();
            module.setup.inline();
            module.setup.input();
            module.setup.date();
            module.create.calendar();

            module.bind.events();
            module.instantiate();
          },

          instantiate: function () {
            module.verbose('Storing instance of calendar');
            instance = module;
            $module.data(moduleNamespace, instance);
          },

          destroy: function () {
            module.verbose('Destroying previous calendar for', element);
            $module.removeData(moduleNamespace);
            module.unbind.events();
          },

          setup: {
            popup: function () {
              if (settings.inline) {
                return;
              }
              if (!$activator.length) {
                $activator = $module.children().first();
                if (!$activator.length) {
                  return;
                }
              }
              if ($.fn.popup === undefined) {
                module.error(error.popup);
                return;
              }
              if (!$container.length) {
                //prepend the popup element to the activator's parent so that it has less chance of messing with
                //the styling (eg input action button needs to be the last child to have correct border radius)
                $container = $('<div/>').addClass(className.popup).prependTo($activator.parent());
              }
              $container.addClass(className.calendar);
              var onVisible = settings.onVisible;
              var onHidden = settings.onHidden;
              if (!$input.length) {
                //no input, $container has to handle focus/blur
                $container.attr('tabindex', '0');
                onVisible = function () {
                  module.focus();
                  return settings.onVisible.apply($container, arguments);
                };
                onHidden = function () {
                  module.blur();
                  return settings.onHidden.apply($container, arguments);
                };
              }
              var onShow = function () {
                //reset the focus date onShow
                module.set.focusDate(module.get.date());
                module.set.mode(settings.startMode);
                return settings.onShow.apply($container, arguments);
              };
              var on = settings.on || ($input.length ? 'focus' : 'click');
              var options = $.extend({}, settings.popupOptions, {
                popup: $container,
                on: on,
                hoverable: on === 'hover',
                onShow: onShow,
                onVisible: onVisible,
                onHide: settings.onHide,
                onHidden: onHidden
              });
              module.popup(options);
            },
            inline: function () {
              if ($activator.length && !settings.inline) {
                return;
              }
              $container = $('<div/>').addClass(className.calendar).appendTo($module);
              if (!$input.length) {
                $container.attr('tabindex', '0');
              }
            },
            input: function () {
              if (settings.touchReadonly && $input.length && isTouch) {
                $input.prop('readonly', true);
              }
            },
            date: function () {
              if ($input.length) {
                var val = $input.val();
                var date = parser.date(val, settings);
                module.set.date(date, settings.formatInput, false);
              }
            }
          },

          create: {
            calendar: function () {
              var i, r, c, p, row, cell, pageGrid;

              var mode = module.get.mode();
              var today = new Date();
              var date = module.get.date();
              var focusDate = module.get.focusDate();
              var display = focusDate || date || settings.initialDate || today;
              display = module.helper.dateInRange(display);

              if (!focusDate) {
                focusDate = display;
                module.set.focusDate(focusDate, false, false);
              }

              var isYear = mode === 'year';
              var isMonth = mode === 'month';
              var isDay = mode === 'day';
              var isHour = mode === 'hour';
              var isMinute = mode === 'minute';
              var isTimeOnly = settings.type === 'time';

              var multiMonth = Math.max(settings.multiMonth, 1);
              var monthOffset = !isDay ? 0 : module.get.monthOffset();

              var minute = display.getMinutes();
              var hour = display.getHours();
              var day = display.getDate();
              var startMonth = display.getMonth() + monthOffset;
              var year = display.getFullYear();

              var columns = isDay ? 7 : isHour ? 4 : 3;
              var columnsString = columns === 7 ? 'seven' : columns === 4 ? 'four' : 'three';
              var rows = isDay || isHour ? 6 : 4;
              var pages = isDay ? multiMonth : 1;

              var container = $container;
              container.empty();
              if (pages > 1) {
                pageGrid = $('<div/>').addClass(className.grid).appendTo(container);
              }

              for (p = 0; p < pages; p++) {
                if (pages > 1) {
                  var pageColumn = $('<div/>').addClass(className.column).appendTo(pageGrid);
                  container = pageColumn;
                }

                var month = startMonth + p;
                var firstMonthDayColumn = (new Date(year, month, 1).getDay() - settings.firstDayOfWeek % 7 + 7) % 7;
                if (!settings.constantHeight && isDay) {
                  var requiredCells = new Date(year, month + 1, 0).getDate() + firstMonthDayColumn;
                  rows = Math.ceil(requiredCells / 7);
                }

                var yearChange = isYear ? 10 : isMonth ? 1 : 0;
                var monthChange = isDay ? 1 : 0;
                var dayChange = isHour || isMinute ? 1 : 0;
                var prevNextDay = isHour || isMinute ? day : 1;
                var prevDate = new Date(year - yearChange, month - monthChange, prevNextDay - dayChange, hour);
                var nextDate = new Date(year + yearChange, month + monthChange, prevNextDay + dayChange, hour);

                var prevLast = isYear ? new Date(Math.ceil(year / 10) * 10 - 9, 0, 0) :
                  isMonth ? new Date(year, 0, 0) : isDay ? new Date(year, month, 0) : new Date(year, month, day, -1);
                var nextFirst = isYear ? new Date(Math.ceil(year / 10) * 10 + 1, 0, 1) :
                  isMonth ? new Date(year + 1, 0, 1) : isDay ? new Date(year, month + 1, 1) : new Date(year, month, day + 1);

                var table = $('<table/>').addClass(className.table).addClass(columnsString + ' column').addClass(mode).appendTo(container);

                //no header for time-only mode
                if (!isTimeOnly) {
                  var thead = $('<thead/>').appendTo(table);

                  row = $('<tr/>').appendTo(thead);
                  cell = $('<th/>').attr('colspan', '' + columns).appendTo(row);

                  var headerDate = isYear || isMonth ? new Date(year, 0, 1) :
                    isDay ? new Date(year, month, 1) : new Date(year, month, day, hour, minute);
                  var headerText = $('<span/>').addClass(className.link).appendTo(cell);
                  headerText.text(formatter.header(headerDate, mode, settings));
                  var newMode = isMonth ? (settings.disableYear ? 'day' : 'year') :
                    isDay ? (settings.disableMonth ? 'year' : 'month') : 'day';
                  headerText.data(metadata.mode, newMode);

                  if (p === 0) {
                    var prev = $('<span/>').addClass(className.prev).appendTo(cell);
                    prev.data(metadata.focusDate, prevDate);
                    prev.toggleClass(className.disabledCell, !module.helper.isDateInRange(prevLast, mode));
                    $('<i/>').addClass(className.prevIcon).appendTo(prev);
                  }

                  if (p === pages - 1) {
                    var next = $('<span/>').addClass(className.next).appendTo(cell);
                    next.data(metadata.focusDate, nextDate);
                    next.toggleClass(className.disabledCell, !module.helper.isDateInRange(nextFirst, mode));
                    $('<i/>').addClass(className.nextIcon).appendTo(next);
                  }

                  if (isDay) {
                    row = $('<tr/>').appendTo(thead);
                    for (i = 0; i < columns; i++) {
                      cell = $('<th/>').appendTo(row);
                      cell.text(formatter.dayColumnHeader((i + settings.firstDayOfWeek) % 7, settings));
                    }
                  }
                }

                var tbody = $('<tbody/>').appendTo(table);
                i = isYear ? Math.ceil(year / 10) * 10 - 9 : isDay ? 1 - firstMonthDayColumn : 0;
                for (r = 0; r < rows; r++) {
                  row = $('<tr/>').appendTo(tbody);
                  for (c = 0; c < columns; c++, i++) {
                    var cellDate = isYear ? new Date(i, month, 1, hour, minute) :
                      isMonth ? new Date(year, i, 1, hour, minute) : isDay ? new Date(year, month, i, hour, minute) :
                        isHour ? new Date(year, month, day, i) : new Date(year, month, day, hour, i * 5);
                    var cellText = isYear ? i :
                      isMonth ? settings.text.monthsShort[i] : isDay ? cellDate.getDate() :
                        formatter.time(cellDate, settings, true);
                    cell = $('<td/>').addClass(className.cell).appendTo(row);
                    cell.text(cellText);
                    cell.data(metadata.date, cellDate);
                    var adjacent = isDay && cellDate.getMonth() !== ((month + 12) % 12);
                    var disabled = adjacent || !module.helper.isDateInRange(cellDate, mode) || settings.isDisabled(cellDate, mode);
                    var active = module.helper.dateEqual(cellDate, date, mode);
                    var isToday = module.helper.dateEqual(cellDate, today, mode);
                    cell.toggleClass(className.adjacentCell, adjacent);
                    cell.toggleClass(className.disabledCell, disabled);
                    cell.toggleClass(className.activeCell, active && !adjacent);
                    if (!isHour && !isMinute) {
                      cell.toggleClass(className.todayCell, !adjacent && isToday);
                    }

                    // Allow for external modifications of each cell
                    var cellOptions = {
                      mode: mode,
                      adjacent: adjacent,
                      disabled: disabled,
                      active: active,
                      today: isToday
                    };
                    formatter.cell(cell, cellDate, cellOptions);

                    if (module.helper.dateEqual(cellDate, focusDate, mode)) {
                      //ensure that the focus date is exactly equal to the cell date
                      //so that, if selected, the correct value is set
                      module.set.focusDate(cellDate, false, false);
                    }
                  }
                }

                if (settings.today) {
                  var todayRow = $('<tr/>').appendTo(tbody);
                  var todayButton = $('<td/>').attr('colspan', '' + columns).addClass(className.today).appendTo(todayRow);
                  todayButton.text(formatter.today(settings));
                  todayButton.data(metadata.date, today);
                }

                module.update.focus(false, table);
              }
            }
          },

          update: {
            focus: function (updateRange, container) {
              container = container || $container;
              var mode = module.get.mode();
              var date = module.get.date();
              var focusDate = module.get.focusDate();
              var startDate = module.get.startDate();
              var endDate = module.get.endDate();
              var rangeDate = (updateRange ? focusDate : null) || date || (!isTouch ? focusDate : null);

              container.find('td').each(function () {
                var cell = $(this);
                var cellDate = cell.data(metadata.date);
                if (!cellDate) {
                  return;
                }
                var disabled = cell.hasClass(className.disabledCell);
                var active = cell.hasClass(className.activeCell);
                var adjacent = cell.hasClass(className.adjacentCell);
                var focused = module.helper.dateEqual(cellDate, focusDate, mode);
                var inRange = !rangeDate ? false :
                  ((!!startDate && module.helper.isDateInRange(cellDate, mode, startDate, rangeDate)) ||
                  (!!endDate && module.helper.isDateInRange(cellDate, mode, rangeDate, endDate)));
                cell.toggleClass(className.focusCell, focused && (!isTouch || isTouchDown) && !adjacent);
                cell.toggleClass(className.rangeCell, inRange && !active && !disabled);
              });
            }
          },

          refresh: function () {
            module.create.calendar();
          },

          bind: {
            events: function () {
              $container.on('mousedown' + eventNamespace, module.event.mousedown);
              $container.on('touchstart' + eventNamespace, module.event.mousedown);
              $container.on('mouseup' + eventNamespace, module.event.mouseup);
              $container.on('touchend' + eventNamespace, module.event.mouseup);
              $container.on('mouseover' + eventNamespace, module.event.mouseover);
              if ($input.length) {
                $input.on('input' + eventNamespace, module.event.inputChange);
                $input.on('focus' + eventNamespace, module.event.inputFocus);
                $input.on('blur' + eventNamespace, module.event.inputBlur);
                $input.on('click' + eventNamespace, module.event.inputClick);
                $input.on('keydown' + eventNamespace, module.event.keydown);
              } else {
                $container.on('keydown' + eventNamespace, module.event.keydown);
              }
            }
          },

          unbind: {
            events: function () {
              $container.off(eventNamespace);
              if ($input.length) {
                $input.off(eventNamespace);
              }
            }
          },

          event: {
            mouseover: function (event) {
              var target = $(event.target);
              var date = target.data(metadata.date);
              var mousedown = event.buttons === 1;
              if (date) {
                module.set.focusDate(date, false, true, mousedown);
              }
            },
            mousedown: function (event) {
              if ($input.length) {
                //prevent the mousedown on the calendar causing the input to lose focus
                event.preventDefault();
              }
              isTouchDown = event.type.indexOf('touch') >= 0;
              var target = $(event.target);
              var date = target.data(metadata.date);
              if (date) {
                module.set.focusDate(date, false, true, true);
              }
            },
            mouseup: function (event) {
              //ensure input has focus so that it receives keydown events for calendar navigation
              module.focus();
              event.preventDefault();
              event.stopPropagation();
              isTouchDown = false;
              var target = $(event.target);
              var parent = target.parent();
              if (parent.data(metadata.date) || parent.data(metadata.focusDate) || parent.data(metadata.mode)) {
                //clicked on a child element, switch to parent (used when clicking directly on prev/next <i> icon element)
                target = parent;
              }
              var date = target.data(metadata.date);
              var focusDate = target.data(metadata.focusDate);
              var mode = target.data(metadata.mode);
              if (date) {
                var forceSet = target.hasClass(className.today);
                module.selectDate(date, forceSet);
              }
              else if (focusDate) {
                module.set.focusDate(focusDate);
              }
              else if (mode) {
                module.set.mode(mode);
              }
            },
            keydown: function (event) {
              if (event.keyCode === 27 || event.keyCode === 9) {
                //esc || tab
                module.popup('hide');
              }

              if (module.popup('is visible')) {
                if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
                  //arrow keys
                  var mode = module.get.mode();
                  var bigIncrement = mode === 'day' ? 7 : mode === 'hour' ? 4 : 3;
                  var increment = event.keyCode === 37 ? -1 : event.keyCode === 38 ? -bigIncrement : event.keyCode == 39 ? 1 : bigIncrement;
                  increment *= mode === 'minute' ? 5 : 1;
                  var focusDate = module.get.focusDate() || module.get.date() || new Date();
                  var year = focusDate.getFullYear() + (mode === 'year' ? increment : 0);
                  var month = focusDate.getMonth() + (mode === 'month' ? increment : 0);
                  var day = focusDate.getDate() + (mode === 'day' ? increment : 0);
                  var hour = focusDate.getHours() + (mode === 'hour' ? increment : 0);
                  var minute = focusDate.getMinutes() + (mode === 'minute' ? increment : 0);
                  var newFocusDate = new Date(year, month, day, hour, minute);
                  if (settings.type === 'time') {
                    newFocusDate = module.helper.mergeDateTime(focusDate, newFocusDate);
                  }
                  if (module.helper.isDateInRange(newFocusDate, mode)) {
                    module.set.focusDate(newFocusDate);
                  }
                } else if (event.keyCode === 13) {
                  //enter
                  var mode = module.get.mode();
                  var date = module.get.focusDate();
                  if (date && !settings.isDisabled(date, mode)) {
                    module.selectDate(date);
                  }
                  //disable form submission:
                  event.preventDefault();
                  event.stopPropagation();
                }
              }

              if (event.keyCode === 38 || event.keyCode === 40) {
                //arrow-up || arrow-down
                event.preventDefault(); //don't scroll
                module.popup('show');
              }
            },
            inputChange: function () {
              var val = $input.val();
              var date = parser.date(val, settings);
              module.set.date(date, false);
            },
            inputFocus: function () {
              $container.addClass(className.active);
            },
            inputBlur: function () {
              $container.removeClass(className.active);
              if (settings.formatInput) {
                var date = module.get.date();
                var text = formatter.datetime(date, settings);
                $input.val(text);
              }
            },
            inputClick: function () {
              module.popup('show');
            }
          },

          get: {
            date: function () {
              return $module.data(metadata.date) || null;
            },
            focusDate: function () {
              return $module.data(metadata.focusDate) || null;
            },
            startDate: function () {
              var startModule = module.get.calendarModule(settings.startCalendar);
              return (startModule ? startModule.get.date() : $module.data(metadata.startDate)) || null;
            },
            endDate: function () {
              var endModule = module.get.calendarModule(settings.endCalendar);
              return (endModule ? endModule.get.date() : $module.data(metadata.endDate)) || null;
            },
            monthOffset: function () {
              return $module.data(metadata.monthOffset) || 0;
            },
            mode: function () {
              //only returns valid modes for the current settings
              var mode = $module.data(metadata.mode) || settings.startMode;
              var validModes = module.get.validModes();
              if ($.inArray(mode, validModes) >= 0) {
                return mode;
              }
              return settings.type === 'time' ? 'hour' :
                settings.type === 'month' ? 'month' :
                  settings.type === 'year' ? 'year' : 'day';
            },
            validModes: function () {
              var validModes = [];
              if (settings.type !== 'time') {
                if (!settings.disableYear || settings.type === 'year') {
                  validModes.push('year');
                }
                if (!(settings.disableMonth || settings.type === 'year') || settings.type === 'month') {
                  validModes.push('month');
                }
                if (settings.type.indexOf('date') >= 0) {
                  validModes.push('day');
                }
              }
              if (settings.type.indexOf('time') >= 0) {
                validModes.push('hour');
                if (!settings.disableMinute) {
                  validModes.push('minute');
                }
              }
              return validModes;
            },
            isTouch: function () {
              try {
                document.createEvent('TouchEvent');
                return true;
              }
              catch (e) {
                return false;
              }
            },
            calendarModule: function (selector) {
              if (!selector) {
                return null;
              }
              if (!(selector instanceof $)) {
                selector = $module.parent().children(selector).first();
              }
              //assume range related calendars are using the same namespace
              return selector.data(moduleNamespace);
            }
          },

          set: {
            date: function (date, updateInput, fireChange) {
              updateInput = updateInput !== false;
              fireChange = fireChange !== false;
              date = module.helper.sanitiseDate(date);
              date = module.helper.dateInRange(date);

              var mode = module.get.mode();
              var text = formatter.datetime(date, settings);
              if (fireChange && settings.onChange.call(element, date, text, mode) === false) {
                return false;
              }

              module.set.focusDate(date);

              if (settings.isDisabled(date, mode)) {
                return false;
              }

              var endDate = module.get.endDate();
              if (!!endDate && !!date && date > endDate) {
                //selected date is greater than end date in range, so clear end date
                module.set.endDate(undefined);
              }
              module.set.dataKeyValue(metadata.date, date);

              if (updateInput && $input.length) {
                $input.val(text);
              }
            },
            startDate: function (date, refreshCalendar) {
              date = module.helper.sanitiseDate(date);
              var startModule = module.get.calendarModule(settings.startCalendar);
              if (startModule) {
                startModule.set.date(date);
              }
              module.set.dataKeyValue(metadata.startDate, date, refreshCalendar);
            },
            endDate: function (date, refreshCalendar) {
              date = module.helper.sanitiseDate(date);
              var endModule = module.get.calendarModule(settings.endCalendar);
              if (endModule) {
                endModule.set.date(date);
              }
              module.set.dataKeyValue(metadata.endDate, date, refreshCalendar);
            },
            focusDate: function (date, refreshCalendar, updateFocus, updateRange) {
              date = module.helper.sanitiseDate(date);
              date = module.helper.dateInRange(date);
              var isDay = module.get.mode() === 'day';
              var oldFocusDate = module.get.focusDate();
              if (isDay && date && oldFocusDate) {
                var yearDelta = date.getFullYear() - oldFocusDate.getFullYear();
                var monthDelta = yearDelta * 12 + date.getMonth() - oldFocusDate.getMonth();
                if (monthDelta) {
                  var monthOffset = module.get.monthOffset() - monthDelta;
                  module.set.monthOffset(monthOffset, false);
                }
              }
              var changed = module.set.dataKeyValue(metadata.focusDate, date, refreshCalendar);
              updateFocus = (updateFocus !== false && changed && refreshCalendar === false) || focusDateUsedForRange != updateRange;
              focusDateUsedForRange = updateRange;
              if (updateFocus) {
                module.update.focus(updateRange);
              }
            },
            monthOffset: function (monthOffset, refreshCalendar) {
              var multiMonth = Math.max(settings.multiMonth, 1);
              monthOffset = Math.max(1 - multiMonth, Math.min(0, monthOffset));
              module.set.dataKeyValue(metadata.monthOffset, monthOffset, refreshCalendar);
            },
            mode: function (mode, refreshCalendar) {
              module.set.dataKeyValue(metadata.mode, mode, refreshCalendar);
            },
            dataKeyValue: function (key, value, refreshCalendar) {
              var oldValue = $module.data(key);
              var equal = oldValue === value || (oldValue <= value && oldValue >= value); //equality test for dates and string objects
              if (value) {
                $module.data(key, value);
              } else {
                $module.removeData(key);
              }
              refreshCalendar = refreshCalendar !== false && !equal;
              if (refreshCalendar) {
                module.create.calendar();
              }
              return !equal;
            }
          },

          selectDate: function (date, forceSet) {
            var mode = module.get.mode();
            var complete = forceSet || mode === 'minute' ||
              (settings.disableMinute && mode === 'hour') ||
              (settings.type === 'date' && mode === 'day') ||
              (settings.type === 'month' && mode === 'month') ||
              (settings.type === 'year' && mode === 'year');
            if (complete) {
              var canceled = module.set.date(date) === false;
              if (!canceled && settings.closable) {
                module.popup('hide');
                //if this is a range calendar, show the end date calendar popup and focus the input
                var endModule = module.get.calendarModule(settings.endCalendar);
                if (endModule) {
                  endModule.popup('show');
                  endModule.focus();
                }
              }
            } else {
              var newMode = mode === 'year' ? (!settings.disableMonth ? 'month' : 'day') :
                mode === 'month' ? 'day' : mode === 'day' ? 'hour' : 'minute';
              module.set.mode(newMode);
              if (mode === 'hour' || (mode === 'day' && module.get.date())) {
                //the user has chosen enough to consider a valid date/time has been chosen
                module.set.date(date);
              } else {
                module.set.focusDate(date);
              }
            }
          },

          changeDate: function (date) {
            module.set.date(date);
          },

          clear: function () {
            module.set.date(undefined);
          },

          popup: function () {
            return $activator.popup.apply($activator, arguments);
          },

          focus: function () {
            if ($input.length) {
              $input.focus();
            } else {
              $container.focus();
            }
          },
          blur: function () {
            if ($input.length) {
              $input.blur();
            } else {
              $container.blur();
            }
          },

          helper: {
            sanitiseDate: function (date) {
              if (!date) {
                return undefined;
              }
              if (!(date instanceof Date)) {
                date = parser.date('' + date, settings);
              }
              if (isNaN(date.getTime())) {
                return undefined;
              }
              return date;
            },
            dateDiff: function (date1, date2, mode) {
              mode = mode || 'day';
              var isTimeOnly = settings.type === 'time';
              var isYear = mode === 'year';
              var isYearOrMonth = isYear || mode === 'month';
              var isMinute = mode === 'minute';
              var isHourOrMinute = isMinute || mode === 'hour';
              //only care about a minute accuracy of 5
              date1 = new Date(
                isTimeOnly ? 2000 : date1.getFullYear(),
                isTimeOnly ? 0 : isYear ? 0 : date1.getMonth(),
                isTimeOnly ? 1 : isYearOrMonth ? 1 : date1.getDate(),
                !isHourOrMinute ? 0 : date1.getHours(),
                !isMinute ? 0 : 5 * Math.floor(date1.getMinutes() / 5));
              date2 = new Date(
                isTimeOnly ? 2000 : date2.getFullYear(),
                isTimeOnly ? 0 : isYear ? 0 : date2.getMonth(),
                isTimeOnly ? 1 : isYearOrMonth ? 1 : date2.getDate(),
                !isHourOrMinute ? 0 : date2.getHours(),
                !isMinute ? 0 : 5 * Math.floor(date2.getMinutes() / 5));
              return date2.getTime() - date1.getTime();
            },
            dateEqual: function (date1, date2, mode) {
              return !!date1 && !!date2 && module.helper.dateDiff(date1, date2, mode) === 0;
            },
            isDateInRange: function (date, mode, minDate, maxDate) {
              if (!minDate && !maxDate) {
                var startDate = module.get.startDate();
                minDate = startDate && settings.minDate ? new Date(Math.max(startDate, settings.minDate)) : startDate || settings.minDate;
                maxDate = settings.maxDate;
              }
              minDate = minDate && new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate(), minDate.getHours(), 5 * Math.ceil(minDate.getMinutes() / 5));
              return !(!date ||
              (minDate && module.helper.dateDiff(date, minDate, mode) > 0) ||
              (maxDate && module.helper.dateDiff(maxDate, date, mode) > 0));
            },
            dateInRange: function (date, minDate, maxDate) {
              if (!minDate && !maxDate) {
                var startDate = module.get.startDate();
                minDate = startDate && settings.minDate ? new Date(Math.max(startDate, settings.minDate)) : startDate || settings.minDate;
                maxDate = settings.maxDate;
              }
              minDate = minDate && new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate(), minDate.getHours(), 5 * Math.ceil(minDate.getMinutes() / 5));
              var isTimeOnly = settings.type === 'time';
              return !date ? date :
                (minDate && module.helper.dateDiff(date, minDate, 'minute') > 0) ?
                  (isTimeOnly ? module.helper.mergeDateTime(date, minDate) : minDate) :
                  (maxDate && module.helper.dateDiff(maxDate, date, 'minute') > 0) ?
                    (isTimeOnly ? module.helper.mergeDateTime(date, maxDate) : maxDate) :
                    date;
            },
            mergeDateTime: function (date, time) {
              return (!date || !time) ? time :
                new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());
            }
          },

          setting: function (name, value) {
            module.debug('Changing setting', name, value);
            if ($.isPlainObject(name)) {
              $.extend(true, settings, name);
            }
            else if (value !== undefined) {
              if ($.isPlainObject(settings[name])) {
                $.extend(true, settings[name], value);
              }
              else {
                settings[name] = value;
              }
            }
            else {
              return settings[name];
            }
          },
          internal: function (name, value) {
            module.debug('Changing internal', name, value);
            if (value !== undefined) {
              if ($.isPlainObject(name)) {
                $.extend(true, module, name);
              }
              else {
                module[name] = value;
              }
            }
            else {
              return module[name];
            }
          },
          debug: function () {
            if (!settings.silent && settings.debug) {
              if (settings.performance) {
                module.performance.log(arguments);
              }
              else {
                module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
                module.debug.apply(console, arguments);
              }
            }
          },
          verbose: function () {
            if (!settings.silent && settings.verbose && settings.debug) {
              if (settings.performance) {
                module.performance.log(arguments);
              }
              else {
                module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
                module.verbose.apply(console, arguments);
              }
            }
          },
          error: function () {
            if (!settings.silent) {
              module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
              module.error.apply(console, arguments);
            }
          },
          performance: {
            log: function (message) {
              var
                currentTime,
                executionTime,
                previousTime
                ;
              if (settings.performance) {
                currentTime = new Date().getTime();
                previousTime = time || currentTime;
                executionTime = currentTime - previousTime;
                time = currentTime;
                performance.push({
                  'Name': message[0],
                  'Arguments': [].slice.call(message, 1) || '',
                  'Element': element,
                  'Execution Time': executionTime
                });
              }
              clearTimeout(module.performance.timer);
              module.performance.timer = setTimeout(module.performance.display, 500);
            },
            display: function () {
              var
                title = settings.name + ':',
                totalTime = 0
                ;
              time = false;
              clearTimeout(module.performance.timer);
              $.each(performance, function (index, data) {
                totalTime += data['Execution Time'];
              });
              title += ' ' + totalTime + 'ms';
              if (moduleSelector) {
                title += ' \'' + moduleSelector + '\'';
              }
              if ((console.group !== undefined || console.table !== undefined) && performance.length > 0) {
                console.groupCollapsed(title);
                if (console.table) {
                  console.table(performance);
                }
                else {
                  $.each(performance, function (index, data) {
                    console.log(data['Name'] + ': ' + data['Execution Time'] + 'ms');
                  });
                }
                console.groupEnd();
              }
              performance = [];
            }
          },
          invoke: function (query, passedArguments, context) {
            var
              object = instance,
              maxDepth,
              found,
              response
              ;
            passedArguments = passedArguments || queryArguments;
            context = element || context;
            if (typeof query == 'string' && object !== undefined) {
              query = query.split(/[\. ]/);
              maxDepth = query.length - 1;
              $.each(query, function (depth, value) {
                var camelCaseValue = (depth != maxDepth)
                    ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
                    : query
                  ;
                if ($.isPlainObject(object[camelCaseValue]) && (depth != maxDepth)) {
                  object = object[camelCaseValue];
                }
                else if (object[camelCaseValue] !== undefined) {
                  found = object[camelCaseValue];
                  return false;
                }
                else if ($.isPlainObject(object[value]) && (depth != maxDepth)) {
                  object = object[value];
                }
                else if (object[value] !== undefined) {
                  found = object[value];
                  return false;
                }
                else {
                  module.error(error.method, query);
                  return false;
                }
              });
            }
            if ($.isFunction(found)) {
              response = found.apply(context, passedArguments);
            }
            else if (found !== undefined) {
              response = found;
            }
            if ($.isArray(returnedValue)) {
              returnedValue.push(response);
            }
            else if (returnedValue !== undefined) {
              returnedValue = [returnedValue, response];
            }
            else if (response !== undefined) {
              returnedValue = response;
            }
            return found;
          }
        };

        if (methodInvoked) {
          if (instance === undefined) {
            module.initialize();
          }
          module.invoke(query);
        }
        else {
          if (instance !== undefined) {
            instance.invoke('destroy');
          }
          module.initialize();
        }
      })
    ;
    return (returnedValue !== undefined)
      ? returnedValue
      : this
      ;
  };

  $.fn.calendar.settings = {

    name: 'Calendar',
    namespace: 'calendar',

    silent: false,
    debug: false,
    verbose: false,
    performance: false,

    type: 'datetime',     // picker type, can be 'datetime', 'date', 'time', 'month', or 'year'
    firstDayOfWeek: 0,    // day for first day column (0 = Sunday)
    constantHeight: true, // add rows to shorter months to keep day calendar height consistent (6 rows)
    today: false,         // show a 'today/now' button at the bottom of the calendar
    closable: true,       // close the popup after selecting a date/time
    monthFirst: true,     // month before day when parsing/converting date from/to text
    touchReadonly: true,  // set input to readonly on touch devices
    inline: false,        // create the calendar inline instead of inside a popup
    on: null,             // when to show the popup (defaults to 'focus' for input, 'click' for others)
    initialDate: null,    // date to display initially when no date is selected (null = now)
    startMode: false,     // display mode to start in, can be 'year', 'month', 'day', 'hour', 'minute' (false = 'day')
    minDate: null,        // minimum date/time that can be selected, dates/times before are disabled
    maxDate: null,        // maximum date/time that can be selected, dates/times after are disabled
    ampm: true,           // show am/pm in time mode
    disableYear: false,   // disable year selection mode
    disableMonth: false,  // disable month selection mode
    disableMinute: false, // disable minute selection mode
    formatInput: true,    // format the input text upon input blur and module creation
    startCalendar: null,  // jquery object or selector for another calendar that represents the start date of a date range
    endCalendar: null,    // jquery object or selector for another calendar that represents the end date of a date range
    multiMonth: 1,        // show multiple months when in 'day' mode

    // popup options ('popup', 'on', 'hoverable', and show/hide callbacks are overridden)
    popupOptions: {
      position: 'bottom left',
      lastResort: 'bottom left',
      prefer: 'opposite',
      hideOnScroll: false
    },

    text: {
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      today: 'Today',
      now: 'Now',
      am: 'AM',
      pm: 'PM'
    },

    formatter: {
      header: function (date, mode, settings) {
        return mode === 'year' ? settings.formatter.yearHeader(date, settings) :
          mode === 'month' ? settings.formatter.monthHeader(date, settings) :
            mode === 'day' ? settings.formatter.dayHeader(date, settings) :
              mode === 'hour' ? settings.formatter.hourHeader(date, settings) :
                settings.formatter.minuteHeader(date, settings);
      },
      yearHeader: function (date, settings) {
        var decadeYear = Math.ceil(date.getFullYear() / 10) * 10;
        return (decadeYear - 9) + ' - ' + (decadeYear + 2);
      },
      monthHeader: function (date, settings) {
        return date.getFullYear();
      },
      dayHeader: function (date, settings) {
        var month = settings.text.months[date.getMonth()];
        var year = date.getFullYear();
        return month + ' ' + year;
      },
      hourHeader: function (date, settings) {
        return settings.formatter.date(date, settings);
      },
      minuteHeader: function (date, settings) {
        return settings.formatter.date(date, settings);
      },
      dayColumnHeader: function (day, settings) {
        return settings.text.days[day];
      },
      datetime: function (date, settings) {
        if (!date) {
          return '';
        }
        var day = settings.type === 'time' ? '' : settings.formatter.date(date, settings);
        var time = settings.type.indexOf('time') < 0 ? '' : settings.formatter.time(date, settings, false);
        var separator = settings.type === 'datetime' ? ' ' : '';
        return day + separator + time;
      },
      date: function (date, settings) {
        if (!date) {
          return '';
        }
        var day = date.getDate();
        var month = settings.text.months[date.getMonth()];
        var year = date.getFullYear();
        return settings.type === 'year' ? year :
          settings.type === 'month' ? month + ' ' + year :
          (settings.monthFirst ? month + ' ' + day : day + ' ' + month) + ', ' + year;
      },
      time: function (date, settings, forCalendar) {
        if (!date) {
          return '';
        }
        var hour = date.getHours();
        var minute = date.getMinutes();
        var ampm = '';
        if (settings.ampm) {
          ampm = ' ' + (hour < 12 ? settings.text.am : settings.text.pm);
          hour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        }
        return hour + ':' + (minute < 10 ? '0' : '') + minute + ampm;
      },
      today: function (settings) {
        return settings.type === 'date' ? settings.text.today : settings.text.now;
      },
      cell: function (cell, date, cellOptions) {
      }
    },

    parser: {
      date: function (text, settings) {
        if (!text) {
          return null;
        }
        text = ('' + text).trim().toLowerCase();
        if (text.length === 0) {
          return null;
        }

        var i, j, k;
        var minute = -1, hour = -1, day = -1, month = -1, year = -1;
        var isAm = undefined;

        var isTimeOnly = settings.type === 'time';
        var isDateOnly = settings.type.indexOf('time') < 0;

        var words = text.split(settings.regExp.dateWords);
        var numbers = text.split(settings.regExp.dateNumbers);

        if (!isDateOnly) {
          //am/pm
          isAm = $.inArray(settings.text.am.toLowerCase(), words) >= 0 ? true :
            $.inArray(settings.text.pm.toLowerCase(), words) >= 0 ? false : undefined;

          //time with ':'
          for (i = 0; i < numbers.length; i++) {
            var number = numbers[i];
            if (number.indexOf(':') >= 0) {
              if (hour < 0 || minute < 0) {
                var parts = number.split(':');
                for (k = 0; k < Math.min(2, parts.length); k++) {
                  j = parseInt(parts[k]);
                  if (isNaN(j)) {
                    j = 0;
                  }
                  if (k === 0) {
                    hour = j % 24;
                  } else {
                    minute = j % 60;
                  }
                }
              }
              numbers.splice(i, 1);
            }
          }
        }

        if (!isTimeOnly) {
          //textual month
          for (i = 0; i < words.length; i++) {
            var word = words[i];
            if (word.length <= 0) {
              continue;
            }
            word = word.substring(0, Math.min(word.length, 3));
            for (j = 0; j < settings.text.months.length; j++) {
              var monthString = settings.text.months[j];
              monthString = monthString.substring(0, Math.min(word.length, Math.min(monthString.length, 3))).toLowerCase();
              if (monthString === word) {
                month = j + 1;
                break;
              }
            }
            if (month >= 0) {
              break;
            }
          }

          //year > 59
          for (i = 0; i < numbers.length; i++) {
            j = parseInt(numbers[i]);
            if (isNaN(j)) {
              continue;
            }
            if (j > 59) {
              year = j;
              numbers.splice(i, 1);
              break;
            }
          }

          //numeric month
          if (month < 0) {
            for (i = 0; i < numbers.length; i++) {
              k = i > 1 || settings.monthFirst ? i : i === 1 ? 0 : 1;
              j = parseInt(numbers[k]);
              if (isNaN(j)) {
                continue;
              }
              if (1 <= j && j <= 12) {
                month = j;
                numbers.splice(k, 1);
                break;
              }
            }
          }

          //day
          for (i = 0; i < numbers.length; i++) {
            j = parseInt(numbers[i]);
            if (isNaN(j)) {
              continue;
            }
            if (1 <= j && j <= 31) {
              day = j;
              numbers.splice(i, 1);
              break;
            }
          }

          //year <= 59
          if (year < 0) {
            for (i = numbers.length - 1; i >= 0; i--) {
              j = parseInt(numbers[i]);
              if (isNaN(j)) {
                continue;
              }
              if (j < 99) {
                j += 2000;
              }
              year = j;
              numbers.splice(i, 1);
              break;
            }
          }
        }

        if (!isDateOnly) {
          //hour
          if (hour < 0) {
            for (i = 0; i < numbers.length; i++) {
              j = parseInt(numbers[i]);
              if (isNaN(j)) {
                continue;
              }
              if (0 <= j && j <= 23) {
                hour = j;
                numbers.splice(i, 1);
                break;
              }
            }
          }

          //minute
          if (minute < 0) {
            for (i = 0; i < numbers.length; i++) {
              j = parseInt(numbers[i]);
              if (isNaN(j)) {
                continue;
              }
              if (0 <= j && j <= 59) {
                minute = j;
                numbers.splice(i, 1);
                break;
              }
            }
          }
        }

        if (minute < 0 && hour < 0 && day < 0 && month < 0 && year < 0) {
          return null;
        }

        if (minute < 0) {
          minute = 0;
        }
        if (hour < 0) {
          hour = 0;
        }
        if (day < 0) {
          day = 1;
        }
        if (month < 0) {
          month = 1;
        }
        if (year < 0) {
          year = new Date().getFullYear();
        }

        if (isAm !== undefined) {
          if (isAm) {
            if (hour === 12) {
              hour = 0;
            }
          } else if (hour < 12) {
            hour += 12;
          }
        }

        var date = new Date(year, month - 1, day, hour, minute);
        if (date.getMonth() !== month - 1 || date.getFullYear() !== year) {
          //month or year don't match up, switch to last day of the month
          date = new Date(year, month, 0, hour, minute);
        }
        return isNaN(date.getTime()) ? null : date;
      }
    },

    // callback when date changes, return false to cancel the change
    onChange: function (date, text, mode) {
      return true;
    },

    // callback before show animation, return false to prevent show
    onShow: function () {
    },

    // callback after show animation
    onVisible: function () {
    },

    // callback before hide animation, return false to prevent hide
    onHide: function () {
    },

    // callback after hide animation
    onHidden: function () {
    },

    // is the given date disabled?
    isDisabled: function (date, mode) {
      return false;
    },

    selector: {
      popup: '.ui.popup',
      input: 'input',
      activator: 'input'
    },

    regExp: {
      dateWords: /[^A-Za-z\u00C0-\u024F]+/g,
      dateNumbers: /[^\d:]+/g
    },

    error: {
      popup: 'UI Popup, a required component is not included in this page',
      method: 'The method you called is not defined.'
    },

    className: {
      calendar: 'calendar',
      active: 'active',
      popup: 'ui popup',
      grid: 'ui equal width grid',
      column: 'column',
      table: 'ui celled center aligned unstackable table',
      prev: 'prev link',
      next: 'next link',
      prevIcon: 'chevron left icon',
      nextIcon: 'chevron right icon',
      link: 'link',
      cell: 'link',
      disabledCell: 'disabled',
      adjacentCell: 'adjacent',
      activeCell: 'active',
      rangeCell: 'range',
      focusCell: 'focus',
      todayCell: 'today',
      today: 'today link'
    },

    metadata: {
      date: 'date',
      focusDate: 'focusDate',
      startDate: 'startDate',
      endDate: 'endDate',
      mode: 'mode',
      monthOffset: 'monthOffset'
    }
  };

})(jQuery, window, document);

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function($) {
  $(document).ready(function() {
    $('#sidebar').addClass('visible');
    $('#sidebar').sidebar('attach events', '#sidebar-toggle', 'toggle');
    $('#sidebar').sidebar('setting', {
      dimPage: false,
      closable: false
    });

    $('.ui.checkbox').checkbox();
    $('.ui.accordion').accordion();
    $('.ui.menu .dropdown').dropdown({action: 'hide'});
    $('.ui.inline.dropdown').dropdown();
    $('.link.ui.dropdown').dropdown({action: 'hide'});
    $('.button.ui.dropdown').dropdown({action: 'hide'});
    $('.ui.fluid.search.selection.ui.dropdown').dropdown();
    $('.menu .item').tab();
    $('.card .image').dimmer({on: 'hover'});
    $('.ui.rating').rating('disable');

    $('form.loadable button').on('click', function() {
      return $(this).closest('form').addClass('loading');
    });
    $('.loadable.button').on('click', function() {
      return $(this).addClass('loading');
    });
    $('.message .close').on('click', function() {
      return $(this).closest('.message').transition('fade');
    });

    $('[data-requires-confirmation]').requireConfirmation();
    $('[data-toggles]').toggleElement();

    $('.special.cards .image').dimmer({
      on: 'hover'
    });

    $('[data-form-type="collection"]').CollectionForm();

  });
})(jQuery);

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ( $ ) {
    'use strict';

    $.fn.extend({
        apiLogin: function (apiSettings) {
            var element = $(this);
            var apiSettings = apiSettings;
            var passwordField = element.find('input[type=\'password\']');
            var emailField = element.find('input[type=\'email\']');
            var csrfTokenField = element.find('input[type=\'hidden\']');
            var signInButton = element.find('.button');
            var validationField = element.find('.red.label');

            signInButton.api({
                method: apiSettings.method,
                dataType: apiSettings.dataType || 'json',
                throttle: apiSettings.throttle || 0,
                debug: apiSettings.debug || false,

                beforeSend: function (settings) {
                    settings.data = {
                        _username: emailField.val(),
                        _password: passwordField.val()
                    };
                    settings.data[csrfTokenField.attr('name')] = csrfTokenField.val();

                    return settings;
                },

                successTest: function (response) {
                    return response.success;
                },

                onSuccess: function (response) {
                    element.remove();
                    location.reload();
                },

                onFailure: function (response) {
                    validationField.removeClass('hidden');
                    validationField.html(response.message);
                }
            });

        }
    });
})( jQuery );

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ( $ ) {
    'use strict';

    $.fn.extend({
        apiToggle: function (apiSettings, toggleableElement, isHidden) {
            var element = $(this);
            var apiSettings = apiSettings;
            var toggleableElement = toggleableElement;
            var isHidden = isHidden || true;

            if (isHidden) {
                toggleableElement.hide();
            }

            element.api({
                method: apiSettings.method,
                dataType: apiSettings.dataType || 'json',
                throttle: apiSettings.throttle || 0,
                debug: apiSettings.debug || false,

                beforeSend: apiSettings.beforeSend,
                successTest: apiSettings.successTest,

                onSuccess: function (response) {
                    toggleableElement.show();
                },

                onFailure: function (response) {
                    toggleableElement.hide();
                }
            });

        }
    });
})( jQuery );

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ( $ ) {
    'use strict';

    $.fn.extend({
        autoComplete: function () {
                $(this).each(function () {
                    var element = $(this);
                    var criteriaName = $(this).data('criteria-name');
                    var choiceName = $(this).data('choice-name');
                    var choiceValue = $(this).data('choice-value');
                    var autocompleteValue = $(this).find('input.autocomplete').val();
                    var loadForEditUrl = $(this).data('load-edit-url');

                    element.dropdown({
                        delay: {
                            search: 250
                        },
                        forceSelection: false,
                        apiSettings: {
                            dataType: 'JSON',
                            cache: false,
                            beforeSend: function(settings) {
                                settings.data[criteriaName] = settings.urlData.query;

                                return settings;
                            },
                            onResponse: function (response) {
                                var choiceName = element.data('choice-name');
                                var choiceValue = element.data('choice-value');
                                var myResults = [];
                                $.each(response, function (index, item) {
                                    myResults.push({
                                        name: item[choiceName],
                                        value: item[choiceValue]
                                    });
                                });

                                return {
                                    success: true,
                                    results: myResults
                                };
                            }
                        }
                    });

                    if (0 < autocompleteValue.split(',').length) {
                        var menuElement = element.find('div.menu');

                        menuElement.api({
                            on: 'now',
                            method: 'GET',
                            url: loadForEditUrl,
                            beforeSend: function (settings) {
                                settings.data[choiceValue] = autocompleteValue.split(',');

                                return settings;
                            },
                            onSuccess: function (response) {
                                $.each(response, function (index, item) {
                                    menuElement.append(
                                        $('<div class="item" data-value="'+item[choiceValue]+'">'+item[choiceName]+'</div>')
                                    );
                                });
                            }
                        });
                    }

                    window.setTimeout(function () {
                        element.dropdown('set selected', element.find('input.autocomplete').val().split(','));
                    }, 5000);
                });
            }
        });
})( jQuery );

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

!function($){

    "use strict";

    /**
     * Collection Form plugin
     *
     * @param element
     * @constructor
     */
    var CollectionForm = function (element) {
        this.$element = $(element);
        this.$list = this.$element.find('[data-form-collection="list"]:first');
        this.count = this.$list.children().length;
        this.lastChoice = null;

        this.$element.on(
            'click',
            '[data-form-collection="add"]:first',
            $.proxy(this.addItem, this)
        );

        this.$element.on(
            'click',
            '[data-form-collection="delete"]',
            $.proxy(this.deleteItem, this)
        );

        this.$element.on(
            'change',
            '[data-form-collection="update"]',
            $.proxy(this.updateItem, this)
        );

        $(document).on(
            'change',
            '[data-form-prototype="update"]',
            $.proxy(this.updatePrototype, this)
        );

        $(document).on('collection-form-add', function(e, addedElement) {
            $(addedElement).find('[data-form-type="collection"]').CollectionForm();
            $(document).trigger('dom-node-inserted', [$(addedElement)]);
        });
    }
    CollectionForm.prototype = {
        constructor : CollectionForm,

        /**
         * Add a item to the collection.
         * @param event
         */
        addItem: function (event) {
            event.preventDefault();

            var prototype = this.$element.data('prototype');

            prototype = prototype.replace(
                /__name__/g,
                this.count
            );

            this.$list.append(prototype);
            this.count = this.count + 1;

            $(document).trigger('collection-form-add', [this.$list.children().last()]);
        },

        /**
         * Update item from the collection
         */
        updateItem: function (event) {
            event.preventDefault();
            var $element = $(event.currentTarget),
                url = $element.data('form-url'),
                value = $element.val(),
                $container = $element.closest('[data-form-collection="item"]'),
                index = $container.data('form-collection-index'),
                position = $container.data('form-collection-index');
            if (url) {
                $container.load(url, {'id' : value, 'position' : position});
            } else {
                var prototype = this.$element.find('[data-form-prototype="'+ value +'"]').val();

                prototype = prototype.replace(
                    /__name__/g,
                    index
                );

                $container.replaceWith(prototype);
            }
            $(document).trigger('collection-form-update', [$(event.currentTarget)]);
        },

        /**
         * Delete item from the collection
         * @param event
         */
        deleteItem: function (event) {
            event.preventDefault();

            $(event.currentTarget)
                .closest('[data-form-collection="item"]')
                .remove();

            $(document).trigger('collection-form-delete', [$(event.currentTarget)]);
        },

        /**
         * Update the prototype
         * @param event
         */
        updatePrototype: function (event) {
            var $target = $(event.currentTarget);
            var prototypeName = $target.val();

            if (undefined !== $target.data('form-prototype-prefix')) {
                prototypeName = $target.data('form-prototype-prefix') + prototypeName;
            }

            if (null !== this.lastChoice && this.lastChoice !== prototypeName) {
                this.$list.html('');
            }

            this.lastChoice = prototypeName;

            this.$element.data(
                'prototype',
                this.$element.find('[data-form-prototype="'+ prototypeName +'"]').val()
            );
        }
    };

    /*
     * Plugin definition
     */

    $.fn.CollectionForm = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('collectionForm');
            var options = typeof option == 'object' && option;

            if (!data) {
                $this.data(
                    'collectionForm',
                    (data = new CollectionForm(this, options))
                )
            }
        })
    };

    $.fn.CollectionForm.Constructor = CollectionForm;

}(jQuery);

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ($) {
    'use strict';

    $.fn.extend({
        productAttributes: function () {
            setAttributeChoiceListener();

            $(this).dropdown({
                onRemove: function(removedValue, removedText, $removedChoice) {
                    modifyAttributesListOnSelectorElementDelete(removedValue);
                },
                forceSelection: false
            });

            controlAttributesList();
            modifySelectorOnAttributesListElementDelete();
        }
    });

    function addAttributesNumber(number) {
        var currentIndex = parseInt(getNextIndex());
        $('#attributesContainer').attr('data-count', currentIndex+number);
    }

    function getNextIndex() {
        return $('#attributesContainer').attr('data-count');
    }

    function controlAttributesList() {
        $('#attributesContainer .attribute').each(function() {
            var value = $(this).attr('data-id');
            $('#sylius_product_attribute_choice').dropdown('set selected', value);
        });
    }

    function modifyAttributesListOnSelectorElementDelete(removedValue) {
        $('#attributesContainer .attribute[data-id="'+removedValue+'"]').remove();
    }

    function modifySelectorOnAttributesListElementDelete() {
        $('.attribute button').off('click').on('click', function() {
            var attributeId = $(this).parents('.attribute').attr('data-id');

            $('div#attributeChoice > .ui.dropdown.search').dropdown('remove selected', attributeId);
            modifyAttributesListOnSelectorElementDelete(attributeId)
        });
    }

    function modifyAttributeForms(data) {
        $.each($(data).find('input,select,textarea'), function() {
            if ($(this).attr('data-name') != null) {
                $(this).attr('name', $(this).attr('data-name'));
            }
        });

        return data;
    }

    function setAttributeChoiceListener() {
        var $attributeChoice = $('#attributeChoice');
        $attributeChoice.find('button').on('click', function(event) {
            event.preventDefault();

            var $attributeChoiceSelect = $attributeChoice.find('select');
            var data = '';
            var $newAttributes = $attributeChoiceSelect.val();

            if (null != $newAttributes) {
                $attributeChoiceSelect.val().forEach(function(item) {
                    if (!isInTheAttributesContainer(item)) {
                        data += $attributeChoiceSelect.prop('name') + '=' + item + "&";
                    }
                });
            }
            data += "count=" + getNextIndex();

            $.ajax({
                type: 'GET',
                url: $(this).parent().attr('data-action'),
                data: data,
                dataType: 'html',
                error: function() {
                    $('form').removeClass('loading');
                },
                success: function(data) {
                    var finalData = modifyAttributeForms($(data));

                    $(finalData).each(function() {
                        var localeCode = $(this).find('input[type="hidden"]').last().val();
                        $('#attributesContainer > div[data-tab="'+localeCode+'"]').append(this);
                    });

                    $('#sylius_product_attribute_choice').val('');

                    addAttributesNumber($.grep($(finalData), function (a) { return $(a).hasClass('attribute'); }).length);
                    modifySelectorOnAttributesListElementDelete();

                    $('form').removeClass('loading');
                }
            });
        });
    }

    function isInTheAttributesContainer(attributeId) {
        var result = false;
        $('#attributesContainer .attribute').each(function() {
            var dataId = $(this).attr('data-id');
            if (dataId === attributeId) {
                result = true;
            }
        });

        return result;
    }
})( jQuery );

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ( $ ) {
    'use strict';

    $.fn.extend({
        productAutoComplete: function () {
            $(this).each(function() {
                $(this).dropdown('set selected', $(this).find('input[name*="[associations]"]').val().split(','));
            });

            $(this).dropdown({
                delay: {
                    search: 250,
                },
                forceSelection: false,
                apiSettings: {
                    dataType: 'JSON',
                    cache: false,
                    data: {
                        criteria: { search: { type: 'contains', value: '' } }
                    },
                    beforeSend: function(settings) {
                        settings.data.criteria.search.value = settings.urlData.query;

                        return settings;
                    },
                    onResponse: function (response) {
                        var myResults = [];
                        $.each(response._embedded.items, function (index, item) {
                            myResults.push({
                                name: item.name,
                                value: item.code
                            });
                        });

                        return {
                            success: true,
                            results: myResults
                        };
                    }
                },
                onAdd: function(addedValue, addedText, $addedChoice) {
                    var inputAssociation = $addedChoice.parents('.product-select').find('input[name*="[associations]"]');
                    var associatedProductCodes = 0 < inputAssociation.val().length ? inputAssociation.val().split(',') : [];

                    associatedProductCodes.push(addedValue);
                    $.unique(associatedProductCodes.sort());

                    inputAssociation.attr('value', associatedProductCodes.join());
                },
                onRemove: function(removedValue, removedText, $removedChoice) {
                    var inputAssociation = $removedChoice.parents('.product-select').find('input[name*="[associations]"]');
                    var associatedProductCodes = 0 < inputAssociation.val().length ? inputAssociation.val().split(',') : [];

                    associatedProductCodes.splice($.inArray(removedValue, associatedProductCodes), 1);

                    inputAssociation.attr('value', associatedProductCodes.join());
                }
            });
        }
    });

})( jQuery );

(function ($) {
    'use strict';

    var methods = {
        init: function(options) {
            var settings = $.extend({
              'prototypePrefix': false,
              'containerSelector': false
            }, options);

            return this.each(function() {
                show($(this), false);
                $(this).change(function() {
                    show($(this), true);
                });

                function show(element, replace) {
                    var selectedValue = element.val();
                    var prototypePrefix = element.attr('id');
                    if (false != settings.prototypePrefix) {
                        prototypePrefix = settings.prototypePrefix;
                    }

                    var prototypeElement = $('#' + prototypePrefix + '_' + selectedValue);
                    var container;

                    if (settings.containerSelector) {
                        container = $(settings.containerSelector);
                    } else {
                        container = $(prototypeElement.data('container'));
                    }

                    if (!container.length) {
                        return;
                    }

                    if (!prototypeElement.length) {
                        container.empty();
                        return;
                    }

                    if (replace || !container.html().trim()) {
                        container.html(prototypeElement.data('prototype'));
                    }
                }
            });
        }
    };

    $.fn.handlePrototypes = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.handlePrototypes' );
        }
    };
})(jQuery);

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ( $ ) {
    'use strict';

    $.fn.extend({
        requireConfirmation: function() {
            return this.each(function() {
                return $(this).on('click', function(event) {
                    event.preventDefault();

                    var actionButton = $(this);

                    if (actionButton.is('a')) {
                        $('#confirmation-button').attr('href', actionButton.attr('href'));
                    }
                    if (actionButton.is('button')) {
                        $('#confirmation-button').on('click', function(event) {
                            event.preventDefault();

                            return actionButton.closest('form').submit();
                        });
                    }

                    return $('#confirmation-modal').modal('show');
                });
            });
        }
    });
})( jQuery );

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ( $ ) {
    'use strict';

    $.fn.extend({
        toggleElement: function() {
            return this.each(function() {
                $(this).on('change', function(event) {
                    event.preventDefault();

                    var toggleElement = $(this);
                    var targetElement = $('#' + toggleElement.data('toggles'));

                    if (toggleElement.is(':checked')) {
                        targetElement.show();
                    } else {
                        targetElement.hide();
                    }
                });

                return $(this).trigger('change');
            });
        }
    });
})( jQuery );

(function ($) {
    'use strict';

    var calendarTextFr = {
        days: ['S', 'L', 'M', 'M', 'J', 'V', 'S'],
        months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthsShort: ['Janv', 'Févr', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
        today: 'Aujourd\'hui',
        now: 'Maintenant',
        am: 'AM',
        pm: 'PM'
    };

    $.fn.extend({
        datePicker: function () {
            $(this).each(function () {
                var $element = $(this);

                $element.calendar({
                    type: 'date',
                    firstDayOfWeek: 1,
                    text: calendarTextFr,
                    formatter: {
                        date: function (date, settings) {
                            if (!date) return '';
                            var day = date.getDate();
                            var month = date.getMonth() + 1;
                            var year = date.getFullYear();

                            if (month < 10) {
                                month = "0" + month;
                            }
                            if (day < 10) {
                                day = "0" + day;
                            }

                            return day + '/' + month + '/' + year;
                        }
                    },
                    parser: {
                        date: function (text, settings) {
                            var dateAsArray = text.split('/');
                            return new Date(dateAsArray[2], dateAsArray[1] - 1, dateAsArray[0]);
                        }
                    },
                });
            });
        }
    });

    $.fn.extend({
        dateTimePicker: function () {
            $(this).each(function () {
                var $element = $(this);

                $element.calendar({
                    type: 'datetime',
                    firstDayOfWeek: 1,
                    text: calendarTextFr,
                    disableMinute: true,
                    ampm: false,
                    formatter: {
                        date: function (date, settings) {
                            if (!date) return '';
                            var day = date.getDate();
                            var month = date.getMonth() + 1;
                            var year = date.getFullYear();

                            if (month < 10) {
                                month = "0" + month;
                            }

                            if (day < 10) {
                                day = "0" + day;
                            }

                            return day + '/' + month + '/' + year;
                        },
                        time: function (date, settings, forCalendar) {
                            var hours = date.getHours();
                            var minutes = date.getMinutes();

                            if (minutes < 10) {
                                minutes = "0" + minutes;
                            }

                            return hours + ':' + minutes;
                        }
                    }
                });
            });
        }
    });
})(jQuery);
(function ($) {
    'use strict';

    $.fn.extend({
        moveBlocks: function () {
            var $element = $(this);

            $element.on('click', '.app-move-up', function (event) {
                event.preventDefault();
                var $block = $(this).closest('[data-form-collection=item]');
                moveUp($block);
            });

            $element.on('click', '.app-move-down', function (event) {
                event.preventDefault();
                var $block = $(this).closest('[data-form-collection=item]');
                moveDown($block);
            });
        }
    });

    /**
     * @param {jQuery} $block
     */
    function moveUp($block) {
        var $previousBlock = $block.prev();

        if ($previousBlock.length === 0) {
            return;
        }

        $block.hide('slow', function () {
            $previousBlock.insertAfter($block);
            $('html, body').animate({
                scrollTop: $previousBlock.offset().top
            }, 1000);
            $block.show('slow');
            recalculatePositions($block.closest('[data-form-collection=list]'));
        });
    }

    /**
     * @param {jQuery} $block
     */
    function moveDown($block) {
        var $nextBlock = $block.next();

        if ($nextBlock.length === 0) {
            return;
        }

        $block.hide('slow', function () {
            $block.insertAfter($nextBlock);
            $('html, body').animate({
                scrollTop: $nextBlock.offset().top
            }, 1000);
            $block.show('slow');
            recalculatePositions($block.closest('[data-form-collection=list]'));
        });
    }

    /**
     * @param {jQuery} $list
     */
    function recalculatePositions($list) {
        $('[data-form-collection=item]', $list).each(function (key) {
            var $item = $(this);

            $('.position', $item).val(key);
        });
    }

})(jQuery);

(function ($) {
    'use strict';

    $.fn.extend({
        personAutoComplete: function () {
            $(this).each(function () {
                var $element = $(this);
                var createUrl = $element.data('create-url');

                $element.dropdown('setting', 'allowAdditions', true);
                $element.dropdown('setting', 'hideAdditions', false);

                $element.dropdown('setting', 'onAdd', function (addedValue, addedText, $addedChoice) {
                    if ($addedChoice.hasClass('addition')) {
                        var lastName = getLastNameByConcatenatedNames(addedText);
                        var firstName = getFirstNameByConcatenatedNames(addedText);

                        postPerson($element, addedText, createUrl, lastName, firstName);
                    }
                });
            });
        }
    });

    /**
     * @param {jQuery} $element
     * @param {string} addedText
     * @param {string} url
     * @param {string} lastName
     * @param {string} firstName
     */
    function postPerson($element, addedText, url, lastName, firstName) {

        var $autoCompleteInput = $element.find('input.autocomplete');
        var values = $autoCompleteInput.val().split(',');

        $.ajax({
            type: "POST",
            url: url,
            data: {
                lastName: lastName,
                firstName: firstName
            },
            dataType: "json",
            accept: "application/json",
            success: function (data) {
                values.push(data.id);
                $autoCompleteInput.val(values.join(','));
            }
        });
    }

    /**
     * @param {string} names
     *
     * @return {string}
     */
    function getLastNameByConcatenatedNames(names) {
        var nameParts = names.split(' ');

        if (nameParts.length === 1) {
            return nameParts[0];
        }

        nameParts.reverse();
        nameParts.pop();

        return nameParts.join(' ');
    }

    /**
     * @param {string} names
     *
     * @return {string|null}
     */
    function getFirstNameByConcatenatedNames(names) {
        var lastName = getLastNameByConcatenatedNames(names);
        var firstName = names.replace(lastName, '').trim();

        return firstName !== "" ? firstName : null;
    }

})(jQuery);

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function($) {
    $(document).ready(function () {
        $('.sylius-autocomplete').autoComplete();
        $('.sylius-tabular-form').addTabErrors();
        $('.ui.accordion').addAccordionErrors();
        $('.product-select.ui.fluid.multiple.search.selection.dropdown').productAutoComplete();
        $('.sylius-update-product-variants').moveProductVariant($('.sylius-product-variant-position'));
        $(document).productSlugGenerator();
        $(document).taxonSlugGenerator();

        $(document).moveBlocks();

        $(document).on('dom-node-inserted', function(addedElement) {
          $('.ui.checkbox').checkbox();
        });

        $('.person-autocomplete').personAutoComplete();
        $('.app-date-picker').datePicker();
        $('.app-date-time-picker').dateTimePicker();
    });
})(jQuery);

$(function () {
  "use strict";

  $('div[data-form-polycollection=item]').each(function() {
    var index = $(this).attr('data-form-polycollection-index');

    $('input, textarea', $(this)).each(function() {
      var name = $(this).attr('name');
      name = name.replace(/block_\w+/i, index);
      $(this).attr('name', name);
    });
  });

});
/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * @author Arnaud Langlade <arn0d.dev@gmail.com>
 */
!function($){

  "use strict";

  /**
   * Collection Form plugin
   *
   * @param element
   * @constructor
   */
  var PolycollectionForm = function (element) {
    this.$element = $(element);
    this.$list = this.$element.find('[data-form-polycollection="list"]:first');
    this.count = this.$list.children().length;
    this.lastChoice = null;

    this.$element.on(
      'click',
      '[data-form-polycollection="add"]',
      $.proxy(this.addItem, this)
    );

    this.$element.on(
      'click',
      '[data-form-polycollection="delete"]',
      $.proxy(this.deleteItem, this)
    );

    this.$element.on(
      'change',
      '[data-form-polycollection="update"]',
      $.proxy(this.updateItem, this)
    );

    $(document).on(
      'change',
      '[data-form-prototype="update"]',
      $.proxy(this.updatePrototype, this)
    );
  }
  PolycollectionForm.prototype = {
    constructor : PolycollectionForm,

    /**
     * Add a item to the collection.
     * @param event
     */
    addItem: function (event) {
      event.preventDefault();

      //var prototype = this.$element.data('prototype');
      var prototype = $(event.currentTarget).data('prototype');

      prototype = prototype.replace(
        /__name__/g,
        this.count
      );

      this.$list.append(prototype);
      this.count = this.count + 1;

      $(document).trigger('polycollection-form-add', [this.$list.children().last()]);
    },

    /**
     * Update item from the collection
     */
    updateItem: function (event) {
      event.preventDefault();
      var $element = $(event.currentTarget),
        url = $element.data('form-url'),
        value = $element.val(),
        $container = $element.closest('[data-form-polycollection="item"]'),
        index = $container.data('form-polycollection-index'),
        position = $container.data('form-polycollection-index');
      if (url) {
        $container.load(url, {'id' : value, 'position' : position});
      } else {
        var prototype = this.$element.find('[data-form-prototype="'+ value +'"]').val();

        prototype = prototype.replace(
          /__name__/g,
          index
        );

        $container.replaceWith(prototype);
      }
      $(document).trigger('polycollection-form-update', [$(event.currentTarget)]);
    },

    /**
     * Delete item from the collection
     * @param event
     */
    deleteItem: function (event) {
      event.preventDefault();

      $(event.currentTarget)
        .closest('[data-form-polycollection="item"]')
        .remove();

      $(document).trigger('polycollection-form-delete', [$(event.currentTarget)]);
    },

    /**
     * Update the prototype
     * @param event
     */
    updatePrototype: function (event) {
      var $target = $(event.currentTarget);
      var prototypeName = $target.val();

      if (undefined !== $target.data('form-prototype-prefix')) {
        prototypeName = $target.data('form-prototype-prefix') + prototypeName;
      }

      if (null !== this.lastChoice && this.lastChoice !== prototypeName) {
        this.$list.html('');
      }

      this.lastChoice = prototypeName;

      this.$element.data(
        'prototype',
        this.$element.find('[data-form-prototype="'+ prototypeName +'"]').val()
      );
    }
  };

  /*
   * Plugin definition
   */

  $.fn.PolycollectionForm = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('PolycollectionForm');
      var options = typeof option == 'object' && option;

      if (!data) {
        $this.data(
          'PolycollectionForm',
          (data = new PolycollectionForm(this, options))
        )
      }
    })
  };

  $.fn.PolycollectionForm.Constructor = PolycollectionForm;

  /*
   * Apply to standard PolycollectionForm elements
   */

  $(document).on('polycollection-form-add', function(e, addedElement) {
    $(addedElement).find('[data-form-type="polycollection"]').PolycollectionForm();
    $(document).trigger('dom-node-inserted', [$(addedElement)]);
  });

  $(document).ready(function () {
    $('[data-form-type="polycollection"]').PolycollectionForm();
  });
}(jQuery);

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ($) {
    'use strict';

    $.fn.extend({
        addTabErrors: function () {
            var element = $(this);

            $('.ui.segment > .ui.tab').each(function () {
                var errors = $(this).find('.sylius-validation-error');

                if(0 !== errors.length) {
                    var tabName = $(this).attr('data-tab');
                    var tabWithErrors = $(element).find('a.item[data-tab="' + tabName + '"]');

                    var label = tabWithErrors.html();
                    var newLabel = label + '<span class="ui small horizontal circular label" style="background-color: #DB2828">' + errors.length + '</span>';

                    tabWithErrors.html(newLabel);
                }
            });
        },
        addAccordionErrors: function () {
            var element = $(this);
            var accordionElements = element.find('.ui.content');

            $(accordionElements).each(function () {
                var errors = $(this).find('.sylius-validation-error');

                if(0 !== errors.length) {
                    var ribWithErrors = $(this).closest('[data-locale]').find('.title');

                    ribWithErrors.css('color', '#DB2828');
                }
            });
        }
    })
})( jQuery );

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ( $ ) {
    'use strict';

    $.fn.extend({
        moveProductVariant: function (positionInput) {
            var productVariantIds = [];
            var element = $(this);

            element.api({
                method: 'PUT',
                beforeSend: function (settings) {
                    settings.data = {
                        productVariants: productVariantIds,
                        _csrf_token: element.data('csrf-token')
                    };

                    return settings;
                },
                onSuccess: function (response) {
                    location.reload();
                }
            });

            positionInput.on('input', function () {
                var id = $(this).data('id');
                var rowToEdit = productVariantIds.filter(function (productVariant){
                    return productVariant.id == id;
                });

                if(rowToEdit.length == 0) {
                    productVariantIds.push({
                        id: $(this).data('id'),
                        position: $(this).val()
                    });
                } else {
                    rowToEdit[0].position = $(this).val();
                }
            });
        }
    });
})(jQuery);

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ($) {
    'use strict';

    $.fn.extend({
        productSlugGenerator: function () {
            var timeout;

            $('[name*="sylius_product[translations]"][name*="[name]"]').on('input', function() {
                clearTimeout(timeout);
                var element = $(this);

                timeout = setTimeout(function() {
                    updateSlug(element);
                }, 1000);
            });

            $('.toggle-product-slug-modification').on('click', function(e) {
                e.preventDefault();
                toggleSlugModification($(this), $(this).siblings('input'));
            });

            function updateSlug(element) {
                var slugInput = element.parents('.content').find('[name*="[slug]"]');
                var loadableParent = slugInput.parents('.field.loadable');

                if ('readonly' == slugInput.attr('readonly')) {
                    return;
                }

                loadableParent.addClass('loading');

                $.ajax({
                    type: "GET",
                    url: slugInput.attr('data-url'),
                    data: { name: element.val() },
                    dataType: "json",
                    accept: "application/json",
                    success: function(data) {
                        slugInput.val(data.slug);
                        if (slugInput.parents('.field').hasClass('error')) {
                            slugInput.parents('.field').removeClass('error');
                            slugInput.parents('.field').find('.sylius-validation-error').remove();
                        }
                        loadableParent.removeClass('loading');
                    }
                });
            }

            function toggleSlugModification(button, slugInput) {
                if (slugInput.attr('readonly')) {
                    slugInput.removeAttr('readonly');
                    button.html('<i class="unlock icon"></i>');
                } else {
                    slugInput.attr('readonly', 'readonly');
                    button.html('<i class="lock icon"></i>');
                }
            }
        }
    });
})(jQuery);

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function ($) {
    'use strict';

    $.fn.extend({
        taxonSlugGenerator: function () {
            var timeout;

            $('[name*="sylius_taxon[translations]"][name*="[name]"]').on('input', function() {
                clearTimeout(timeout);
                var element = $(this);

                timeout = setTimeout(function() {
                    updateSlug(element);
                }, 1000);
            });

            $('.toggle-taxon-slug-modification').on('click', function(e) {
                e.preventDefault();
                toggleSlugModification($(this), $(this).siblings('input'));
            });

            function updateSlug(element) {
                var slugInput = element.parents('.content').find('[name*="[slug]"]');
                var loadableParent = slugInput.parents('.field.loadable');

                if ('readonly' == slugInput.attr('readonly')) {
                    return;
                }

                loadableParent.addClass('loading');

                var data;
                if ('' != slugInput.attr('data-parent') && undefined != slugInput.attr('data-parent')) {
                    data = { name: element.val(), locale: element.closest('[data-locale]').data('locale'), parentId: slugInput.attr('data-parent') };
                } else if ($('#sylius_taxon_parent').length > 0 && $('#sylius_taxon_parent').is(':visible') && '' != $('#sylius_taxon_parent').val()) {
                    data = { name: element.val(), locale: element.closest('[data-locale]').data('locale'), parentId: $('#sylius_taxon_parent').val() };
                } else {
                    data = { name: element.val(), locale: element.closest('[data-locale]').data('locale') };
                }

                $.ajax({
                    type: "GET",
                    url: slugInput.attr('data-url'),
                    data: data,
                    dataType: "json",
                    accept: "application/json",
                    success: function(data) {
                        slugInput.val(data.slug);
                        if (slugInput.parents('.field').hasClass('error')) {
                            slugInput.parents('.field').removeClass('error');
                            slugInput.parents('.field').find('.sylius-validation-error').remove();
                        }
                        loadableParent.removeClass('loading');
                    }
                });
            }

            function toggleSlugModification(button, slugInput) {
                if (slugInput.attr('readonly')) {
                    slugInput.removeAttr('readonly');
                    button.html('<i class="unlock icon"></i>');
                } else {
                    slugInput.attr('readonly', 'readonly');
                    button.html('<i class="lock icon"></i>');
                }
            }
        }
    });

})(jQuery);
