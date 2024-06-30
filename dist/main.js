(()=>{"use strict";var e,n,t={972:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),d=t(417),c=t.n(d),s=new URL(t(7),t.b),l=i()(r()),p=c()(s);l.push([e.id,`\nbody {\n    font-family: 'Playwrite AU TAS', Helvetica, sans-serif;\n    margin: 0;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80px;\n    box-shadow: 1px 2px 9px 0px rgba(0, 0, 0, 0.162);\n    z-index:0;\n    position: relative;\n}\n\nfooter {\n    display: flex;\n    font-weight: 800;\n    color: #000000;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    gap: 10px;\n    height: fit-content;\n    font-family: 'LXGW WenKai Mono TC', Times, serif;\n}\n\nfooter a i {\n    font-size: 20px; \n    margin-right: 1px; \n    color: #000000;\n}\n\nfooter a:visited {\n    color: #7b8088;\n}\n\nnav {\n    display: flex;\n    gap: 80px;\n    height: fit-content;\n}\n\nbutton {\n    padding: 2px;\n    font-size: 2rem;\n    font-weight: 200;\n    border: none;\n    background: transparent;\n    cursor: pointer;\n    color: #30975b;\n    transition: 0.1s;\n}\n\nbutton:hover {\n    color: #30975b;\n    font-weight: 300;\n    border-left: dotted #30975b;\n    border-right: dotted #30975b;\n    transform: scale(1.1);\n}\n\n.page-content {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.2fr 2fr 2fr;\n    background-image: url(${p});\n    background-position:center;\n    background-size: cover;\n}\n\n.home-title {\n    grid-row: 1 / 2;\n    justify-self: center;\n    font-size: 70px;\n    color: #30975b;\n    margin-top: 20px;\n    font-family: 'LXGW WenKai Mono TC', Times, serif;\n    user-select: none;\n}\n\n.home-title:hover {\n    color: #35a965;\n    transition: all .2s ease;\n    vertical-align: middle;\n    transform: scale(1.1);\n}\n\n.home-img {\n    grid-row: 3 / 4;\n    justify-self: center;\n    align-self: center;\n    overflow: hidden;\n    border-radius: 1em;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    user-select: none;\n    background-color: #ffffffdd;\n    padding-left: 100%;\n    padding-right: 100%;\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n.home-img:hover {\n    overflow: hidden;\n    transition: all .2s ease;\n    vertical-align: middle;\n    transform: scale(1.1);\n}\n\n.home-description {\n    user-select: none;\n    display: flex;\n    justify-self: center;\n    font-size: 40px;\n    color: #30975b;\n    justify-self: center;\n    align-self: center;\n    background-color: #ffffffdd;\n    padding-right: 100px;\n    padding-left: 100px;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    text-align: justify;\n    font-family: 'LXGW WenKai Mono TC', Times, serif;\n}\n\n.home-description:hover {\n    color: #35a965;\n    transition: all .2s ease;\n    vertical-align: middle;\n    transform: scale(1.1);\n}`,""]);const u=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},241:(e,n,t)=>{var o=t(72),r=t.n(o),a=t(825),i=t.n(a),d=t(659),c=t.n(d),s=t(56),l=t.n(s),p=t(540),u=t.n(p),h=t(113),f=t.n(h),m=t(972),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u();var g=r()(m.default,v);if(!m.default.locals||e.hot.invalidate){var C=!m.default.locals,y=C?m:m.default.locals;e.hot.accept(972,(n=>{m=t(972),function(e,n,t){if(!e&&n||e&&!n)return!1;var o;for(o in e)if((!t||"default"!==o)&&e[o]!==n[o])return!1;for(o in n)if(!(t&&"default"===o||e[o]))return!1;return!0}(y,C?m:m.default.locals,C)?(y=C?m:m.default.locals,g(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()})),m.default&&m.default.locals&&m.default.locals},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=o.base?c[0]+o.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=r(h,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var c=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},275:(e,n,t)=>{const o=function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("page-content");const t=document.createElement("h1");t.textContent="About Herbivore Delight",n.appendChild(t);const o=document.createElement("p");o.textContent="Welcome to Herbivore Delight, where plant-based cuisine meets culinary innovation in the heart of Paris. At Herbivore Delight, we are passionate about creating delicious vegan dishes that not only satisfy the palate but also promote health, sustainability, and compassion.",n.appendChild(o),e.appendChild(n);const r=document.createElement("h3");r.textContent="Our Philosophy",n.appendChild(r),e.appendChild(n);const a=document.createElement("p");a.textContent="At Herbivore Delight, we believe in the power of plants to nourish both body and soul. Our menu is inspired by the bounty of nature, featuring fresh, seasonal ingredients sourced locally whenever possible. We are committed to providing wholesome, flavorful meals that showcase the diversity and richness of vegan cuisine.",n.appendChild(a),e.appendChild(n);const i=document.createElement("h3");i.textContent="Our Chef",n.appendChild(i),e.appendChild(n);const d=document.createElement("p");d.textContent="Meet Chef John Schmutzler, our visionary culinary artist dedicated to crafting exceptional plant-based dishes. With a background in brazilian vegan cuisine, Chef John Schmutzler brings a creative flair and passion for sustainable cooking to every plate at Herbivore Delight. Each dish is thoughtfully prepared to elevate the dining experience and inspire a love for plant-based eating.",n.appendChild(d),e.appendChild(n);const c=document.createElement("h3");c.textContent="Our Menu",n.appendChild(c),e.appendChild(n);const s=document.createElement("p");s.textContent="From vibrant salads and hearty main courses to indulgent desserts and refreshing beverages, our menu at Herbivore Delight offers something for every palate. Whether you are a committed vegan, exploring plant-based options, or simply curious about delicious food, our diverse selection promises to delight and satisfy.",n.appendChild(s),e.appendChild(n);const l=document.createElement("h3");l.textContent="Our Commitment",n.appendChild(l),e.appendChild(n);const p=document.createElement("p");p.textContent="Beyond serving exceptional food, we are dedicated to creating a welcoming and inclusive atmosphere for our guests. At Herbivore Delight, we strive to foster a community where everyone feels valued and inspired by the benefits of a plant-based lifestyle.",n.appendChild(p),e.appendChild(n);const u=document.createElement("h3");u.textContent="Visit Us",n.appendChild(u),e.appendChild(n);const h=document.createElement("p");h.textContent="Located in Paris, Herbivore Delight invites you to experience a new standard of vegan dining. Join us for a meal that celebrates freshness, flavor, and sustainability. Whether you are dining in or taking out, we look forward to sharing our passion for plant-based cuisine with you.",n.appendChild(h),e.appendChild(n);const f=document.createElement("p");f.textContent="Thank you for choosing Herbivore Delight. We cannot wait to welcome you to our table and share the joy of plant-powered eating.",n.appendChild(f),e.appendChild(n)};t(241);const r=t.p+"images/8b97d4154eb9707e4d39.jpg",a=function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("page-content");const t=document.createElement("img");t.classList.add("home-img"),t.src=r,t.height="400",n.appendChild(t);const o=document.createElement("h1");o.classList.add("home-title"),o.textContent="Welcome to Herbivore Delight",n.appendChild(o);const a=document.createElement("p");a.classList.add("home-description"),a.textContent="At Herbivore Delight, we believe that dining should be an experience that tantalizes all your senses. Nestled in the heart of Paris, our restaurant offers an exquisite blend of traditional flavors and contemporary culinary innovation.",n.appendChild(a),e.appendChild(n)},i=function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("page-content");const t=document.createElement("h1");t.textContent="This is our Menu",n.appendChild(t);const o=document.createElement("h2");o.textContent="Starters",n.appendChild(o);const r=document.createElement("h3");r.textContent="Roasted Red Pepper Hummus - $8.00",n.appendChild(r),e.appendChild(n);const a=document.createElement("p");a.textContent="Creamy hummus topped with roasted red peppers, served with warm pita bread and fresh vegetables.",n.appendChild(a),e.appendChild(n);const i=document.createElement("h3");i.textContent="Stuffed Mushrooms - $9.50",n.appendChild(i),e.appendChild(n);const d=document.createElement("p");d.textContent="Juicy mushrooms stuffed with a blend of spinach, garlic, and vegan cheese, baked to perfection.",n.appendChild(d),e.appendChild(n);const c=document.createElement("h3");c.textContent="Avocado Bruschetta - $7.50",n.appendChild(c),e.appendChild(n);const s=document.createElement("p");s.textContent="Fresh avocado, cherry tomatoes, and basil on toasted baguette slices, drizzled with balsamic glaze.",n.appendChild(s),e.appendChild(n);const l=document.createElement("h2");l.textContent="Salads",n.appendChild(l);const p=document.createElement("h3");p.textContent="Quinoa and Kale Salad - $10.00",n.appendChild(p),e.appendChild(n);const u=document.createElement("p");u.textContent="A refreshing mix of quinoa, kale, cherry tomatoes, cucumbers, and red onions, tossed in a lemon-tahini dressing.",n.appendChild(u),e.appendChild(n);const h=document.createElement("h3");h.textContent="Mediterranean Chickpea Salad - $9.00",n.appendChild(h),e.appendChild(n);const f=document.createElement("p");f.textContent="Chickpeas, cucumbers, tomatoes, red onions, olives, and fresh parsley, served with a tangy red wine vinaigrette.",n.appendChild(f),e.appendChild(n);const m=document.createElement("h2");m.textContent="Main Courses",n.appendChild(m);const v=document.createElement("h3");v.textContent="Vegan Buddha Bowl - $13.00",n.appendChild(v),e.appendChild(n);const g=document.createElement("p");g.textContent="A colorful bowl of quinoa, roasted sweet potatoes, chickpeas, avocado, and mixed greens, topped with a creamy tahini dressing.",n.appendChild(g),e.appendChild(n);const C=document.createElement("h3");C.textContent="Lentil and Vegetable Stew - $12.00",n.appendChild(C),e.appendChild(n);const y=document.createElement("p");y.textContent="Hearty lentils and a medley of seasonal vegetables simmered in a rich tomato broth, served with crusty bread.",n.appendChild(y),e.appendChild(n);const b=document.createElement("h3");b.textContent="Stuffed Bell Peppers - $11.50",n.appendChild(b),e.appendChild(n);const x=document.createElement("p");x.textContent="Bell peppers filled with a savory mix of rice, black beans, corn, and spices, topped with avocado crema.",n.appendChild(x),e.appendChild(n);const E=document.createElement("h2");E.textContent="Pasta",n.appendChild(E);const w=document.createElement("h3");w.textContent="Vegan Pesto Pasta - $14.00",n.appendChild(w),e.appendChild(n);const k=document.createElement("p");k.textContent="Al dente pasta tossed with a vibrant basil pesto, cherry tomatoes, and spinach, garnished with pine nuts.",n.appendChild(k),e.appendChild(n);const _=document.createElement("h3");_.textContent="Mushroom Stroganoff - $13.50",n.appendChild(_),e.appendChild(n);const S=document.createElement("p");S.textContent="Creamy mushroom stroganoff served over wide noodles, finished with fresh parsley.",n.appendChild(S),e.appendChild(n);const D=document.createElement("h2");D.textContent="Desserts",n.appendChild(D);const H=document.createElement("h3");H.textContent="Vegan Chocolate Mousse - $7.00",n.appendChild(H),e.appendChild(n);const I=document.createElement("p");I.textContent="Rich and silky chocolate mousse made with avocado and dark chocolate, topped with fresh berries.",n.appendChild(I),e.appendChild(n);const j=document.createElement("h3");j.textContent="Coconut Milk Ice Cream - $6.50",n.appendChild(j),e.appendChild(n);const A=document.createElement("p");A.textContent="Creamy coconut milk ice cream available in a variety of flavors, including vanilla, chocolate, and mango.",n.appendChild(A),e.appendChild(n);const M=document.createElement("h3");M.textContent="Chia Seed Pudding - $5.50",n.appendChild(M),e.appendChild(n);const T=document.createElement("p");T.textContent="Chia seeds soaked in almond milk and vanilla, topped with mixed berries and a drizzle of agave syrup.",n.appendChild(T),e.appendChild(n);const O=document.createElement("h2");O.textContent="Beverages",n.appendChild(O);const P=document.createElement("h3");P.textContent="Freshly Squeezed Juice - $4.00",n.appendChild(P),e.appendChild(n);const q=document.createElement("p");q.textContent="Choose from a selection of freshly squeezed juices, including orange, apple, and carrot.",n.appendChild(q),e.appendChild(n);const L=document.createElement("h3");L.textContent="Herbal Teas - $3.50",n.appendChild(L),e.appendChild(n);const $=document.createElement("p");$.textContent="A variety of soothing herbal teas, including chamomile, peppermint, and rooibos.",n.appendChild($),e.appendChild(n);const z=document.createElement("h3");z.textContent="Smoothie of the Day - $6.00",n.appendChild(z),e.appendChild(n);const W=document.createElement("p");W.textContent="A daily special smoothie made with fresh, seasonal fruits and vegetables.",n.appendChild(W),e.appendChild(n)};a();const d=document.querySelector("#content"),c=document.querySelector(".home-btn"),s=document.querySelector(".menu-btn");function l(e){d.innerHTML="",e()}document.querySelector(".about-btn").addEventListener("click",(()=>l(o))),s.addEventListener("click",(()=>l(i))),c.addEventListener("click",(()=>l(a)))},7:(e,n,t)=>{e.exports=t.p+"images/388f638fcf546fb48685.jpg"}},o={};function r(e){var n=o[e];if(void 0!==n){if(void 0!==n.error)throw n.error;return n.exports}var a=o[e]={id:e,exports:{}};try{var i={id:e,module:a,factory:t[e],require:r};r.i.forEach((function(e){e(i)})),a=i.module,i.factory.call(a.exports,a,a.exports,i.require)}catch(e){throw a.error=e,e}return a.exports}r.m=t,r.c=o,r.i=[],r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.hu=e=>e+"."+r.h()+".hot-update.js",r.hmrF=()=>"main."+r.h()+".hot-update.json",r.h=()=>"efd396754342944ea511",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e={},n="restaurant-page:",r.l=(t,o,a,i)=>{if(e[t])e[t].push(o);else{var d,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var p=s[l];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==n+a){d=p;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.setAttribute("data-webpack",n+a),d.src=t),e[t]=[o];var u=(n,o)=>{d.onerror=d.onload=null,clearTimeout(h);var r=e[t];if(delete e[t],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(o))),n)return n(o)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),c&&document.head.appendChild(d)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,n,t,o={},a=r.c,i=[],d=[],c="idle",s=0,l=[];function p(e){c=e;for(var n=[],t=0;t<d.length;t++)n[t]=d[t].call(null,e);return Promise.all(n).then((function(){}))}function u(){0==--s&&p("ready").then((function(){if(0===s){var e=l;l=[];for(var n=0;n<e.length;n++)e[n]()}}))}function h(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return p("check").then(r.hmrM).then((function(t){return t?p("prepare").then((function(){var o=[];return n=[],Promise.all(Object.keys(r.hmrC).reduce((function(e,a){return r.hmrC[a](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return n=function(){return e?m(e):p("ready").then((function(){return o}))},0===s?n():new Promise((function(e){l.push((function(){e(n())}))}));var n}))})):p(v()?"ready":"idle").then((function(){return null}))}))}function f(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):m(e)}function m(e){e=e||{},v();var o=n.map((function(n){return n(e)}));n=void 0;var r=o.map((function(e){return e.error})).filter(Boolean);if(r.length>0)return p("abort").then((function(){throw r[0]}));var a=p("dispose");o.forEach((function(e){e.dispose&&e.dispose()}));var i,d=p("apply"),c=function(e){i||(i=e)},s=[];return o.forEach((function(e){if(e.apply){var n=e.apply(c);if(n)for(var t=0;t<n.length;t++)s.push(n[t])}})),Promise.all([a,d]).then((function(){return i?p("fail").then((function(){throw i})):t?m(e).then((function(e){return s.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e})):p("idle").then((function(){return s}))}))}function v(){if(t)return n||(n=[]),Object.keys(r.hmrI).forEach((function(e){t.forEach((function(t){r.hmrI[e](t,n)}))})),t=void 0,!0}r.hmrD=o,r.i.push((function(l){var m,v,g,C,y=l.module,b=function(n,t){var o=a[t];if(!o)return n;var r=function(r){if(o.hot.active){if(a[r]){var d=a[r].parents;-1===d.indexOf(t)&&d.push(t)}else i=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),i=[];return n(r)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(t){n[e]=t}}};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&"e"!==l&&Object.defineProperty(r,l,d(l));return r.e=function(e,t){return function(e){switch(c){case"ready":p("prepare");case"prepare":return s++,e.then(u,u),e;default:return e}}(n.e(e,t))},r}(l.require,l.id);y.hot=(m=l.id,v=y,C={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){i=v.parents.slice(),e=g?void 0:m,r(m)},active:!0,accept:function(e,n,t){if(void 0===e)C._selfAccepted=!0;else if("function"==typeof e)C._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var o=0;o<e.length;o++)C._acceptedDependencies[e[o]]=n||function(){},C._acceptedErrorHandlers[e[o]]=t;else C._acceptedDependencies[e]=n||function(){},C._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)C._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)C._declinedDependencies[e[n]]=!0;else C._declinedDependencies[e]=!0},dispose:function(e){C._disposeHandlers.push(e)},addDisposeHandler:function(e){C._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=C._disposeHandlers.indexOf(e);n>=0&&C._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":n=[],Object.keys(r.hmrI).forEach((function(e){r.hmrI[e](m,n)})),p("ready");break;case"ready":Object.keys(r.hmrI).forEach((function(e){r.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:h,apply:f,status:function(e){if(!e)return c;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:o[m]},e=void 0,C),y.parents=i,y.children=[],i=[],l.require=b})),r.hmrC={},r.hmrI={}})(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e,n,t,o,a,i=r.hmrS_jsonp=r.hmrS_jsonp||{792:0},d={};function c(n,t){return e=t,new Promise(((e,t)=>{d[n]=e;var o=r.p+r.hu(n),a=new Error;r.l(o,(e=>{if(d[n]){d[n]=void 0;var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;a.message="Loading hot update chunk "+n+" failed.\n("+o+": "+r+")",a.name="ChunkLoadError",a.type=o,a.request=r,t(a)}}))}))}function s(e){function d(e){for(var n=[e],t={},o=n.map((function(e){return{chain:[e],id:e}}));o.length>0;){var a=o.pop(),i=a.id,d=a.chain,s=r.c[i];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var l=0;l<s.parents.length;l++){var p=s.parents[l],u=r.c[p];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([p]),moduleId:i,parentId:p};-1===n.indexOf(p)&&(u.hot._acceptedDependencies[i]?(t[p]||(t[p]=[]),c(t[p],[i])):(delete t[p],n.push(p),o.push({chain:d.concat([p]),id:p})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function c(e,n){for(var t=0;t<n.length;t++){var o=n[t];-1===e.indexOf(o)&&e.push(o)}}r.f&&delete r.f.jsonpHmr,n=void 0;var s={},l=[],p={},u=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var h in t)if(r.o(t,h)){var f,m=t[h],v=!1,g=!1,C=!1,y="";switch((f=m?d(h):{type:"disposed",moduleId:h}).chain&&(y="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":e.onDeclined&&e.onDeclined(f),e.ignoreDeclined||(v=new Error("Aborted because of self decline: "+f.moduleId+y));break;case"declined":e.onDeclined&&e.onDeclined(f),e.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+y));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(f),e.ignoreUnaccepted||(v=new Error("Aborted because "+h+" is not accepted"+y));break;case"accepted":e.onAccepted&&e.onAccepted(f),g=!0;break;case"disposed":e.onDisposed&&e.onDisposed(f),C=!0;break;default:throw new Error("Unexception type "+f.type)}if(v)return{error:v};if(g)for(h in p[h]=m,c(l,f.outdatedModules),f.outdatedDependencies)r.o(f.outdatedDependencies,h)&&(s[h]||(s[h]=[]),c(s[h],f.outdatedDependencies[h]));C&&(c(l,[f.moduleId]),p[h]=u)}t=void 0;for(var b,x=[],E=0;E<l.length;E++){var w=l[E],k=r.c[w];k&&(k.hot._selfAccepted||k.hot._main)&&p[w]!==u&&!k.hot._selfInvalidated&&x.push({module:w,require:k.hot._requireSelf,errorHandler:k.hot._selfAccepted})}return{dispose:function(){var e;o.forEach((function(e){delete i[e]})),o=void 0;for(var n,t=l.slice();t.length>0;){var a=t.pop(),d=r.c[a];if(d){var c={},p=d.hot._disposeHandlers;for(E=0;E<p.length;E++)p[E].call(null,c);for(r.hmrD[a]=c,d.hot.active=!1,delete r.c[a],delete s[a],E=0;E<d.children.length;E++){var u=r.c[d.children[E]];u&&(e=u.parents.indexOf(a))>=0&&u.parents.splice(e,1)}}}for(var h in s)if(r.o(s,h)&&(d=r.c[h]))for(b=s[h],E=0;E<b.length;E++)n=b[E],(e=d.children.indexOf(n))>=0&&d.children.splice(e,1)},apply:function(n){for(var t in p)r.o(p,t)&&(r.m[t]=p[t]);for(var o=0;o<a.length;o++)a[o](r);for(var i in s)if(r.o(s,i)){var d=r.c[i];if(d){b=s[i];for(var c=[],u=[],h=[],f=0;f<b.length;f++){var m=b[f],v=d.hot._acceptedDependencies[m],g=d.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),u.push(g),h.push(m)}}for(var C=0;C<c.length;C++)try{c[C].call(null,b)}catch(t){if("function"==typeof u[C])try{u[C](t,{moduleId:i,dependencyId:h[C]})}catch(o){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:h[C],error:o,originalError:t}),e.ignoreErrored||(n(o),n(t))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:h[C],error:t}),e.ignoreErrored||n(t)}}}for(var y=0;y<x.length;y++){var E=x[y],w=E.module;try{E.require(w)}catch(t){if("function"==typeof E.errorHandler)try{E.errorHandler(t,{moduleId:w,module:r.c[w]})}catch(o){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:w,error:o,originalError:t}),e.ignoreErrored||(n(o),n(t))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:w,error:t}),e.ignoreErrored||n(t)}}return l}}}self.webpackHotUpdaterestaurant_page=(n,o,i)=>{for(var c in o)r.o(o,c)&&(t[c]=o[c],e&&e.push(c));i&&a.push(i),d[n]&&(d[n](),d[n]=void 0)},r.hmrI.jsonp=function(e,n){t||(t={},a=[],o=[],n.push(s)),r.o(t,e)||(t[e]=r.m[e])},r.hmrC.jsonp=function(e,d,l,p,u,h){u.push(s),n={},o=d,t=l.reduce((function(e,n){return e[n]=!1,e}),{}),a=[],e.forEach((function(e){r.o(i,e)&&void 0!==i[e]?(p.push(c(e,h)),n[e]=!0):n[e]=!1})),r.f&&(r.f.jsonpHmr=function(e,t){n&&r.o(n,e)&&!n[e]&&(t.push(c(e)),n[e]=!0)})},r.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(r.p+r.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),r.nc=void 0,r(275)})();