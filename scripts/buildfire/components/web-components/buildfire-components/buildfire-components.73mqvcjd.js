/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='buildfire-components']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,e,n,o){"use strict";function i(t,e){return"sc-"+t.t+(e&&e!==W?"-"+e:"")}function c(t,e){return t+(e?"-h":"-s")}function r(t,e,n,o){const c=2===n.e||1===n.e&&!t.o.n;let r=n.t+o.mode,f=n[r];if(c&&(o["s-sc"]=i(n,o.mode)),f||(f=n[r=n.t+W],c&&(o["s-sc"]=i(n))),f){let i=e.i.head;if(e.n)if(1===n.e)i=o.shadowRoot;else{let t=o;for(;t=e.c(t);)if(t.host&&t.host.shadowRoot){i=t.host.shadowRoot;break}}let c=t.r.get(i);if(c||t.r.set(i,c={}),!c[r]){let t;{t=f.content.cloneNode(!0),c[r]=!0;const n=i.querySelectorAll("[data-styles]");e.f(i,t,n.length&&n[n.length-1].nextSibling||i.firstChild)}}}}function f(t,e,n,o,i,c,r){if("class"!==n||c)if("style"===n){for(const t in o)i&&null!=i[t]||(/-/.test(t)?e.style.s(t):e.style[t]="");for(const t in i)o&&i[t]===o[t]||(/-/.test(t)?e.style.setProperty(t,i[t]):e.style[t]=i[t])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!c&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.l(e);o&&o.u&&o.u[n]?l(e,n,i):"ref"!==n&&(l(e,n,null==i?"":i),null!=i&&!1!==i||t.o.a(e,n))}else null!=i&&"key"!==n?function f(t,e,n,o="boolean"==typeof n){const i=e!==(e=e.replace(/^xlink\:?/,""));null==n||o&&(!n||"false"===n)?i?t.removeAttributeNS(T,A(e)):t.removeAttribute(e):"function"!=typeof n&&(n=o?"":n.toString(),i?t.setAttributeNS(T,A(e),n):t.setAttribute(e,n))}(e,n,i):(c||t.o.p(e,n)&&(null==i||!1===i))&&t.o.a(e,n);else n=A(n)in e?A(n.substring(2)):A(n[2])+n.substring(3),i?i!==o&&t.o.d(e,n,i):t.o.v(e,n);else if(o!==i){const t=s(o),n=s(i),c=t.filter(t=>!n.includes(t)),r=s(e.className).filter(t=>!c.includes(t)),f=n.filter(e=>!t.includes(e)&&!r.includes(e));r.push(...f),e.className=r.join(" ")}}function s(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function l(t,e,n){try{t[e]=n}catch(t){}}function u(t,e,n,o,i){const c=11===n.m.nodeType&&n.m.host?n.m.host:n.m,r=e&&e.vattrs||E,s=n.vattrs||E;for(i in r)s&&null!=s[i]||null==r[i]||f(t,c,i,r[i],void 0,o,n.b);for(i in s)i in r&&s[i]===("value"===i||"checked"===i?c[i]:r[i])||f(t,c,i,r[i],s[i],o,n.b)}function a(t,e){function n(i,c,r,f,s,p,y,h,w){if(h=c.vchildren[r],l||(d=!0,"slot"===h.vtag&&(a&&e.y(f,a+"-s"),h.vchildren?h.w=!0:h.g=!0)),S(h.vtext))h.m=e.M(h.vtext);else if(h.g)h.m=e.M("");else{if(p=h.m=L||"svg"===h.vtag?e.k("http://www.w3.org/2000/svg",h.vtag):e.C(h.w?"slot-fb":h.vtag),t.j(p)&&t.x.delete(b),L="svg"===h.vtag||"foreignObject"!==h.vtag&&L,u(t,null,h,L),S(a)&&p["s-si"]!==a&&e.y(p,p["s-si"]=a),h.vchildren)for(s=0;s<h.vchildren.length;++s)(y=n(i,h,s,p))&&e.O(p,y);"svg"===h.vtag&&(L=!1)}return h.m["s-hn"]=m,(h.w||h.g)&&(h.m["s-sr"]=!0,h.m["s-cr"]=v,h.m["s-sn"]=h.vname||"",(w=i&&i.vchildren&&i.vchildren[r])&&w.vtag===h.vtag&&i.m&&o(i.m)),h.m}function o(n,i,c,r){t.W=!0;const l=e.N(n);for(c=l.length-1;c>=0;c--)(r=l[c])["s-hn"]!==m&&r["s-ol"]&&(e.S(r),e.f(s(r),r,f(r)),e.S(r["s-ol"]),r["s-ol"]=null,d=!0),i&&o(r,i);t.W=!1}function i(t,o,i,c,r,s,l,u){const a=t["s-cr"];for((l=a&&e.c(a)||t).shadowRoot&&e.A(l)===m&&(l=l.shadowRoot);r<=s;++r)c[r]&&(u=S(c[r].vtext)?e.M(c[r].vtext):n(null,i,r,t))&&(c[r].m=u,e.f(l,u,f(o)))}function c(t,n,i,c){for(;n<=i;++n)S(t[n])&&(c=t[n].m,p=!0,c["s-ol"]?e.S(c["s-ol"]):o(c,!0),e.S(c))}function r(t,e){return t.vtag===e.vtag&&t.vkey===e.vkey&&("slot"!==t.vtag||t.vname===e.vname)}function f(t){return t&&t["s-ol"]?t["s-ol"]:t}function s(t){return e.c(t["s-ol"]?t["s-ol"]:t)}let l,a,p,d,v,m,b;const y=[];return function h(w,g,$,M,k,C,j,x,O,W,E,N){if(b=w,m=e.A(b),v=b["s-cr"],l=M,a=b["s-sc"],d=p=!1,function l(a,p,d){const v=p.m=a.m,m=a.vchildren,b=p.vchildren;L=p.m&&S(e.R(p.m))&&void 0!==p.m.ownerSVGElement,L="svg"===p.vtag||"foreignObject"!==p.vtag&&L,S(p.vtext)?(d=v["s-cr"])?e.T(e.c(d),p.vtext):a.vtext!==p.vtext&&e.T(v,p.vtext):("slot"!==p.vtag&&u(t,a,p,L),S(m)&&S(b)?function y(t,u,a,p,d,v,m,b){let y=0,h=0,w=u.length-1,g=u[0],$=u[w],M=p.length-1,k=p[0],C=p[M];for(;y<=w&&h<=M;)if(null==g)g=u[++y];else if(null==$)$=u[--w];else if(null==k)k=p[++h];else if(null==C)C=p[--M];else if(r(g,k))l(g,k),g=u[++y],k=p[++h];else if(r($,C))l($,C),$=u[--w],C=p[--M];else if(r(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.c(g.m)),l(g,C),e.f(t,g.m,e.L($.m)),g=u[++y],C=p[--M];else if(r($,k))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.c($.m)),l($,k),e.f(t,$.m,g.m),$=u[--w],k=p[++h];else{for(d=null,v=y;v<=w;++v)if(u[v]&&S(u[v].vkey)&&u[v].vkey===k.vkey){d=v;break}S(d)?((b=u[d]).vtag!==k.vtag?m=n(u&&u[h],a,d,t):(l(b,k),u[d]=void 0,m=b.m),k=p[++h]):(m=n(u&&u[h],a,h,t),k=p[++h]),m&&e.f(s(g.m),m,f(g.m))}y>w?i(t,null==p[M+1]?null:p[M+1].m,a,p,h,M):h>M&&c(u,y,w)}(v,m,p,b):S(b)?(S(a.vtext)&&e.T(v,""),i(v,null,p,b,0,b.length-1)):S(m)&&c(m,0,m.length-1)),L&&"svg"===p.vtag&&(L=!1)}(g,$),d){for(function t(n,o,i,c,r,f,s,l,u,a){for(r=0,f=(o=e.N(n)).length;r<f;r++){if((i=o[r])["s-sr"]&&(c=i["s-cr"]))for(l=e.N(e.c(c)),u=i["s-sn"],s=l.length-1;s>=0;s--)(c=l[s])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(a=e.D(c))||8===a)&&""===u||1===a&&null===e.P(c,"slot")&&""===u||1===a&&e.P(c,"slot")===u)&&(y.some(t=>t.q===c)||(p=!0,c["s-sn"]=u,y.push({B:i,q:c})));1===e.D(i)&&t(i)}}($.m),j=0;j<y.length;j++)(x=y[j]).q["s-ol"]||((O=e.M(""))["s-nr"]=x.q,e.f(e.c(x.q),x.q["s-ol"]=O,x.q));for(t.W=!0,j=0;j<y.length;j++){for(x=y[j],E=e.c(x.B),N=e.L(x.B),O=x.q["s-ol"];O=e.I(O);)if((W=O["s-nr"])&&W&&W["s-sn"]===x.q["s-sn"]&&E===e.c(W)&&(W=e.L(W))&&W&&!W["s-nr"]){N=W;break}(!N&&E!==e.c(x.q)||e.L(x.q)!==N)&&x.q!==N&&(e.S(x.q),e.f(E,x.q,N))}t.W=!1}return p&&function t(n,o,i,c,r,f,s,l){for(c=0,r=(i=e.N(n)).length;c<r;c++)if(o=i[c],1===e.D(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,f=0;f<r;f++)if(i[f]["s-hn"]!==o["s-hn"])if(l=e.D(i[f]),""!==s){if(1===l&&s===e.P(i[f],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==e.F(i[f]).trim()){o.hidden=!0;break}t(o)}}($.m),y.length=0,$}}function p(t,e){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(e?null:t.m),t.vchildren&&t.vchildren.forEach(t=>{p(t,e)}))}function d(t,e,n,o,i){const c=t.D(e);let r,f,s,l;if(i&&1===c){(f=t.P(e,O))&&(s=f.split("."))[0]===o&&((l={}).vtag=t.A(l.m=e),n.vchildren||(n.vchildren=[]),n.vchildren[s[1]]=l,n=l,i=""!==s[2]);for(let c=0;c<e.childNodes.length;c++)d(t,e.childNodes[c],n,o,i)}else 3===c&&(r=e.previousSibling)&&8===t.D(r)&&"s"===(s=t.F(r).split("."))[0]&&s[1]===o&&((l={vtext:t.F(e)}).m=e,n.vchildren||(n.vchildren=[]),n.vchildren[s[2]]=l)}function v(t,e){let n,o,i=null,c=!1,r=!1;for(var f=arguments.length;f-- >2;)D.push(arguments[f]);for(;D.length>0;){let e=D.pop();if(e&&void 0!==e.pop)for(f=e.length;f--;)D.push(e[f]);else"boolean"==typeof e&&(e=null),(r="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(r=!1)),r&&c?i[i.length-1].vtext+=e:null===i?i=[r?{vtext:e}:e]:i.push(r?{vtext:e}:e),c=r}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(f in e.class)e.class[f]&&D.push(f);e.class=D.join(" "),D.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,i||[],P):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:o,m:void 0,b:!1}}function m(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function b(t){const[e,n,,o,i,c]=t,r={color:{H:"color"}};if(o)for(let t=0;t<o.length;t++){const e=o[t];r[e[0]]={U:e[1],Q:!!e[2],H:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,Z:e[4]}}return{t:e,z:n,u:Object.assign({},r),e:i,G:c?c.map(y):void 0}}function y(t){return{J:t[0],K:t[1],V:!!t[2],X:!!t[3],Y:!!t[4]}}function h(t,e){if(S(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||4===t)return"false"!==e&&(""===e||!!e);if(t===Number||8===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function w(t,e){t._.add(e),t.tt.has(e)||(t.tt.set(e,!0),t.et?t.queue.write(()=>g(t,e)):t.queue.tick(()=>g(t,e)))}async function g(t,e,n,o,i){if(t.tt.delete(e),!t.nt.has(e)){if(o=t.ot.get(e)){if(o)try{o.componentWillUpdate&&await o.componentWillUpdate()}catch(n){t.it(n,5,e)}}else{if((i=t.ct.get(e))&&!i["s-rn"])return void(i["s-rc"]=i["s-rc"]||[]).push(()=>{g(t,e)});if(o=function r(t,e,n,o,i,c,f){try{o=new(i=t.l(e).rt),function s(t,e,n,o,i){t.ft.set(o,n),t.st.has(n)||t.st.set(n,{}),Object.entries(Object.assign({color:{type:String}},e.properties,{mode:{type:String}})).forEach(([e,c])=>{(function r(t,e,n,o,i,c,f,s){if(e.type||e.state){const r=t.st.get(n);e.state||(!e.attr||void 0!==r[i]&&""!==r[i]||(f=c&&c.lt)&&S(s=f[e.attr])&&(r[i]=h(e.type,s)),n.hasOwnProperty(i)&&(void 0===r[i]&&(r[i]=h(e.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===r[i]&&(r[i]=o[i]),e.watchCallbacks&&(r[q+i]=e.watchCallbacks.slice()),M(o,i,function l(e){return(e=t.st.get(t.ft.get(this)))&&e[i]},function u(n,o){(o=t.ft.get(this))&&(e.state||e.mutable)&&$(t,o,i,n)})}})(t,c,n,o,e,i)})}(t,i,e,o,n),function l(t,e,n){if(e){const o=t.ft.get(n);e.forEach(e=>{n[e.method]={emit:n=>{t.ut(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}}})}}(t,i.events,o);try{if(c=t.at.get(e)){for(f=0;f<c.length;f+=2)o[c[f]](c[f+1]);t.at.delete(e)}}catch(n){t.it(n,2,e)}}catch(n){o={},t.it(n,7,e,!0)}return t.ot.set(e,o),o}(t,e,t.pt.get(e)))try{o.componentWillLoad&&await o.componentWillLoad()}catch(n){t.it(n,3,e)}}(function f(t,e,n,o){try{const i=e.rt.host,r=e.rt.encapsulation,f="shadow"===r&&t.o.n;let s,l=n;if(f&&(l=n.shadowRoot),!n["s-rn"]){t.dt(t,t.o,e,n);const i=n["s-sc"];i&&(t.o.y(n,c(i,!0)),o.render||t.o.y(n,c(i)))}if(o.render||o.hostData||i||s){t.vt=!0;const e=o.render&&o.render();let i;t.vt=!1;const c=t.mt.get(n)||{};c.m=l;const s=v(null,i,e);t.mt.set(n,t.render(n,c,s,f,r))}n["s-rn"]=!0,n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.vt=!1,t.it(e,8,n,!0)}})(t,t.l(e),e,o),e["s-init"]()}}function $(t,e,n,o,i){let c=t.st.get(e);c||t.st.set(e,c={});const r=c[n];if(o!==r&&(c[n]=o,i=t.ot.get(e))){{const t=c[q+n];if(t)for(let e=0;e<t.length;e++)try{i[t[e]].call(i,o,r,n)}catch(t){}}!t.vt&&e["s-rn"]&&w(t,e)}}function M(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function k(t,e,n,o,i,c){if(t._.delete(e),(i=t.ct.get(e))&&((o=i["s-ld"])&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),t.ct.delete(e)),t.bt.length&&!t._.size)for(;c=t.bt.shift();)c()}function C(t,e,n,o){if(n.connectedCallback=function(){(function n(t,e,o){t.yt.has(o)||(t.yt.set(o,!0),function i(t,e){const n=t.l(e);n.G&&n.G.forEach(n=>{n.V||t.o.d(e,n.J,function o(t,e,n,i){return o=>{(i=t.ot.get(e))?i[n](o):((i=t.at.get(e)||[]).push(n,o),t.at.set(e,i))}}(t,e,n.K),n.Y,n.X)})}(t,o)),t.nt.delete(o),t.ht.has(o)||(t._.add(o),t.ht.set(o,!0),o["s-id"]||(o["s-id"]=t.wt()),function c(t,e,n){for(n=e;n=t.o.R(n);)if(t.j(n)){t.x.has(e)||(t.ct.set(e,n),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.pt.set(o,function n(t,e,o,i,c){return o.mode||(o.mode=t.gt(o)),o["s-cr"]||t.P(o,x)||t.n&&1===e.e||(o["s-cr"]=t.M(""),o["s-cr"]["s-cn"]=!0,t.f(o,o["s-cr"],t.N(o)[0])),t.n||1!==e.e||(o.shadowRoot=o),1===e.e&&t.n&&!o.shadowRoot&&t.$t(o,{mode:"open"}),i={Mt:o["s-id"],lt:{}},e.u&&Object.keys(e.u).forEach(n=>{(c=e.u[n].H)&&(i.lt[c]=t.P(o,c))}),i}(t.o,e,o)),t.kt(e,o)}))})(t,e,this)},n.disconnectedCallback=function(){(function e(t,n){!t.W&&function o(t,e){for(;e;){if(!t.c(e))return 9!==t.D(e);e=t.c(e)}}(t.o,n)&&(t.nt.set(n,!0),k(t,n),p(t.mt.get(n),!0),t.o.v(n),t.yt.delete(n),[t.ct,t.Ct,t.pt].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c,r){if((i=t.ot.get(n))&&!t.nt.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){t.x.set(n,!0),(r=t.jt.has(n))||(t.jt.set(n,!0),n["s-ld"]=void 0,t.o.y(n,o));try{p(t.mt.get(n)),(c=t.Ct.get(n))&&(c.forEach(t=>t(n)),t.Ct.delete(n)),!r&&i.componentDidLoad&&i.componentDidLoad()}catch(e){t.it(e,4,n)}k(t,n)}})(t,this,o)},n.forceUpdate=function(){w(t,this)},e.u){const o=Object.entries(e.u);{let t={};o.forEach(([e,{H:n}])=>{n&&(t[n]=e)}),t=Object.assign({},t),n.attributeChangedCallback=function(e,n,o){(function i(t,e,n,o){const i=t[A(n)];i&&(e[i]=o)})(t,this,e,o)}}(function i(t,e,n){e.forEach(([e,o])=>{const i=o.U;3&i?M(n,e,function n(){return(t.st.get(this)||{})[e]},function n(i){$(t,this,e,h(o.Z,i))}):32===i&&function c(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}(n,e,R)})})(t,o,n)}}function j(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){let o=e[n];const i=t.i.body;return i?(o||(o=i.querySelector(n)),o||(o=e[n]=t.C(n),t.O(i,o)),o.componentOnReady()):Promise.resolve()}(t,e,n).then(t=>t[o].apply(t,i))}}const x="ssrv",O="ssrc",W="$",E={},N={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},S=t=>null!=t,A=t=>t.toLowerCase(),R=()=>{},T="http://www.w3.org/1999/xlink";let L=!1;const D=[],P={forEach:(t,e)=>{t.forEach((t,n,o)=>e(m(t),n,o))},map:(t,e)=>{return t.map((t,n,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(e(m(t),n,o)))}},q="wc-";(function B(t,e,n,o,i,c){function f(t,e){const o=t.t;n.customElements.get(o)||(C(g,s[o]=t,e.prototype,c),e.observedAttributes=Object.values(t.u).map(t=>t.H).filter(t=>!!t),n.customElements.define(t.t,e))}const s={html:{}},l={},u=n[t]=n[t]||{},p=function m(t,e,n){t.ael||(t.ael=((t,e,n,o)=>t.addEventListener(e,n,o)),t.rel=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={i:n,n:!!n.documentElement.attachShadow,xt:!1,D:t=>t.nodeType,C:t=>n.createElement(t),k:(t,e)=>n.createElementNS(t,e),M:t=>n.createTextNode(t),Ot:t=>n.createComment(t),f:(t,e,n)=>t.insertBefore(e,n),S:t=>t.remove(),O:(t,e)=>t.appendChild(e),y:(t,e)=>{t.classList.add(e)},N:t=>t.childNodes,c:t=>t.parentNode,L:t=>t.nextSibling,I:t=>t.previousSibling,A:t=>A(t.nodeName),F:t=>t.textContent,T:(t,e)=>t.textContent=e,P:(t,e)=>t.getAttribute(e),Wt:(t,e,n)=>t.setAttribute(e,n),Et:(t,e,n,o)=>t.setAttributeNS(e,n,o),a:(t,e)=>t.removeAttribute(e),p:(t,e)=>t.hasAttribute(e),gt:e=>e.getAttribute("mode")||(t.Context||{}).mode,Nt:(t,o)=>{return"child"===o?t.firstElementChild:"parent"===o?i.R(t):"body"===o?n.body:"document"===o?n:"window"===o?e:t},d:(e,n,c,r,f,s,l,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.Nt(e,s):"object"==typeof s?p=s:(u=n.split(":")).length>1&&(p=i.Nt(e,u[0]),n=u[1]),!p)return;let v=c;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===N[u[1]]&&c(t)})),l=i.xt?{capture:!!r,passive:!!f}:!!r,t.ael(p,n,v,l),d||o.set(e,d={}),d[a]=(()=>{p&&t.rel(p,n,v,l),d[a]=null})},v:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},St:(t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o)),R:(t,e)=>(e=i.c(t))&&11===i.D(e)?e.host:e,$t:(t,e)=>t.attachShadow(e)};try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.xt=!0}))}catch(t){}return i}(u,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=i,e.enableListener=((t,e,n,o,i)=>(function c(t,e,n,o,i,r){if(e){const c=t.ft.get(e),f=t.l(c);if(f&&f.G)if(o){const o=f.G.find(t=>t.J===n);o&&t.o.d(c,n,t=>e[o.K](t),o.Y,void 0===r?o.X:!!r,i)}else t.o.v(c,n)}})(g,t,e,n,o,i)),e.emit=((t,n,o)=>p.St(t,e.eventNameFn?e.eventNameFn(n):n,o)),u.h=v,u.Context=e;const y=n["s-defined"]=n["s-defined"]||{};let h=0;const g={o:p,At:f,ut:e.emit,l:t=>s[p.A(t)],Rt:t=>e[t],isClient:!0,j:t=>!(!y[p.A(t)]&&!g.l(t)),wt:()=>t+h++,it:(t,e,n)=>void 0,Tt:t=>(function e(t,n,o){return{create:j(t,n,o,"create"),componentOnReady:j(t,n,o,"componentOnReady")}})(p,l,t),queue:e.queue=function $(t,e){function n(e){return n=>{e.push(n),d||(d=!0,t.raf(c))}}function o(t){for(let e=0;e<t.length;e++)try{t[e](r())}catch(t){}t.length=0}function i(t,e){let n,o=0;for(;o<t.length&&(n=r())<e;)try{t[o++](n)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function c(){p++,o(l);const e=r()+7*Math.ceil(p*(1/22));i(u,e),i(a,e),u.length>0&&(a.push(...u),u.length=0),(d=l.length+u.length+a.length>0)?t.raf(c):p=0}const r=()=>e.performance.now(),f=Promise.resolve(),s=[],l=[],u=[],a=[];let p=0,d=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){s.push(t),1===s.length&&f.then(()=>o(s))},read:n(l),write:n(u)}}(u,n),kt:function M(t,e,n){if(t.rt)w(g,e);else{const n="string"==typeof t.z?t.z:t.z[e.mode],o=!p.n;import(i+n+(o?".sc":"")+".entry.js").then(n=>{try{t.rt=n[(t=>A(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n,i,c){if(i){const n=e.t+(c||W);if(!e[n]){const o=t.C("template");e[n]=o,o.innerHTML=`<style>${i}</style>`,t.O(t.i.head,o)}}}(p,t,t.e,t.rt.style,t.rt.styleMode),w(g,e)}catch(e){t.rt=class{}}},t=>void 0)}},vt:!1,et:!1,W:!1,dt:r,ct:new WeakMap,r:new WeakMap,ht:new WeakMap,yt:new WeakMap,jt:new WeakMap,x:new WeakMap,ft:new WeakMap,pt:new WeakMap,ot:new WeakMap,nt:new WeakMap,tt:new WeakMap,Ct:new WeakMap,at:new WeakMap,mt:new WeakMap,st:new WeakMap,_:new Set,bt:[]};u.onReady=(()=>new Promise(t=>g.queue.write(()=>g._.size?g.bt.push(t):t()))),g.render=a(g,p);const k=p.i.documentElement;k["s-ld"]=[],k["s-rn"]=!0,k["s-init"]=(()=>{g.x.set(k,u.loaded=g.et=!0),p.St(n,"appload",{detail:{namespace:t}})}),function O(t,e,n){const o=n.querySelectorAll(`[${x}]`),i=o.length;let c,r,f,s,l,u;if(i>0)for(t.x.set(n,!0),s=0;s<i;s++)for(c=o[s],r=e.P(c,x),(f={}).vtag=e.A(f.m=c),t.mt.set(c,f),l=0,u=c.childNodes.length;l<u;l++)d(e,c.childNodes[l],f,r,!0)}(g,p,k),(u.components||[]).map(b).forEach(t=>f(t,class extends HTMLElement{})),function E(t,e,n,o,i,c){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.l(e);if(o)if(t.x.has(e))n(e);else{const o=t.Ct.get(e)||[];o.push(n),t.Ct.set(e,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)e.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!n[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(g,u,n,n["s-apps"],n["s-cr"]),u.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"BuildfireComponents","hydrated");