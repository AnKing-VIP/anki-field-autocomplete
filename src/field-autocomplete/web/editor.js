(()=>{var le=Object.create;var q=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var ce=Object.getOwnPropertyNames;var ue=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var fe=d=>q(d,"__esModule",{value:!0});var pe=(d=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(d,{get:(i,a)=>(typeof require!="undefined"?require:i)[a]}):d)(function(d){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+d+'" is not supported')});var he=(d,i)=>()=>(i||d((i={exports:{}}).exports,i),i.exports);var me=(d,i,a)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of ce(i))!de.call(d,f)&&f!=="default"&&q(d,f,{get:()=>i[f],enumerable:!(a=ae(i,f))||a.enumerable});return d},ee=d=>me(fe(q(d!=null?le(ue(d)):{},"default",d&&d.__esModule&&"default"in d?{get:()=>d.default,enumerable:!0}:{value:d,enumerable:!0})),d);var D=(d,i,a)=>new Promise((f,g)=>{var E=v=>{try{A(a.next(v))}catch(T){g(T)}},k=v=>{try{A(a.throw(v))}catch(T){g(T)}},A=v=>v.done?f(v.value):Promise.resolve(v.value).then(E,k);A((a=a.apply(d,i)).next())});var te=he((z,R)=>{var $,M;$=z,M=function(){"use strict";function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(r){f(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function a(e){return(a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return function(t){if(Array.isArray(t))return k(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||E(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function E(e,t){if(e){if(typeof e=="string")return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=function(e){return typeof e=="string"?document.querySelector(e):e()},v=function(e,t){var n=typeof e=="string"?document.createElement(e):e;for(var r in t){var s=t[r];if(r==="inside")s.append(n);else if(r==="dest")A(s[0]).insertAdjacentElement(s[1],n);else if(r==="around"){var o=s;o.parentNode.insertBefore(n,o),n.append(o),o.getAttribute("autofocus")!=null&&o.focus()}else r in n?n[r]=s:n.setAttribute(r,s)}return n},T=function(e,t){return e=e.toString().toLowerCase(),t?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").normalize("NFC"):e},I=function(e,t){return v("mark",i({innerHTML:e},typeof t=="string"&&{class:t})).outerHTML},m=function(e,t){t.input.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t.feedback,cancelable:!0}))},L=function(e,t,n){var r=n||{},s=r.mode,o=r.diacritics,c=r.highlight,b=T(t,o);if(t=t.toString(),e=T(e,o),s==="loose"){var h=(e=e.replace(/ /g,"")).length,l=0,p=Array.from(t).map(function(w,y){return l<h&&b[y]===e[l]&&(w=c?I(w,c):w,l++),w}).join("");if(l===h)return p}else{var u=b.indexOf(e);if(~u)return e=t.substring(u,u+e.length),u=c?t.replace(e,I(e,c)):t}},x=function(e,t){return new Promise(function(n,r){var s;return(s=e.data).cache&&s.store?n():new Promise(function(o,c){return typeof s.src=="function"?s.src(t).then(o,c):o(s.src)}).then(function(o){try{return e.feedback=s.store=o,m("response",e),n()}catch(c){return r(c)}},r)})},ie=function(e,t){var n=t.data,r=t.searchEngine,s=[];n.store.forEach(function(c,b){var h=function(u){var w=u?c[u]:c,y=typeof r=="function"?r(e,w):L(e,w,{mode:r,diacritics:t.diacritics,highlight:t.resultItem.highlight});if(y){var S={match:y,value:c};u&&(S.key=u),s.push(S)}};if(n.keys){var l,p=function(u,w){var y=typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(!y){if(Array.isArray(u)||(y=E(u))||w&&u&&typeof u.length=="number"){y&&(u=y);var S=0,C=function(){};return{s:C,n:function(){return S>=u.length?{done:!0}:{done:!1,value:u[S++]}},e:function(F){throw F},f:C}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var B,_=!0,P=!1;return{s:function(){y=y.call(u)},n:function(){var F=y.next();return _=F.done,F},e:function(F){P=!0,B=F},f:function(){try{_||y.return==null||y.return()}finally{if(P)throw B}}}}(n.keys);try{for(p.s();!(l=p.n()).done;)h(l.value)}catch(u){p.e(u)}finally{p.f()}}else h()}),n.filter&&(s=n.filter(s));var o=s.slice(0,t.resultsList.maxResults);t.feedback={query:e,matches:s,results:o},m("results",t)},J="aria-expanded",W="aria-activedescendant",G="aria-selected",K=function(e,t){e.feedback.selection=i({index:t},e.feedback.results[t])},Q=function(e){e.isOpen||((e.wrapper||e.input).setAttribute(J,!0),e.list.removeAttribute("hidden"),e.isOpen=!0,m("open",e))},O=function(e){e.isOpen&&((e.wrapper||e.input).setAttribute(J,!1),e.input.setAttribute(W,""),e.list.setAttribute("hidden",""),e.isOpen=!1,m("close",e))},N=function(e,t){var n=t.resultItem,r=t.list.getElementsByTagName(n.tag),s=!!n.selected&&n.selected.split(" ");if(t.isOpen&&r.length){var o,c,b=t.cursor;e>=r.length&&(e=0),e<0&&(e=r.length-1),t.cursor=e,b>-1&&(r[b].removeAttribute(G),s&&(c=r[b].classList).remove.apply(c,g(s))),r[e].setAttribute(G,!0),s&&(o=r[e].classList).add.apply(o,g(s)),t.input.setAttribute(W,r[t.cursor].id),t.list.scrollTop=r[e].offsetTop-t.list.clientHeight+r[e].clientHeight+5,t.feedback.cursor=t.cursor,K(t,e),m("navigate",t)}},V=function(e){N(e.cursor+1,e)},X=function(e){N(e.cursor-1,e)},j=function(e,t,n){(n=n>=0?n:e.cursor)<0||(e.feedback.event=t,K(e,n),m("selection",e),O(e))};function Y(e,t){var n=this;return new Promise(function(r,s){var o,c;return o=t||((c=e.input)instanceof HTMLInputElement||c instanceof HTMLTextAreaElement?c.value:c.innerHTML),function(h,l,p){return l?l(h):h.length>=p}(o=e.query?e.query(o):o,e.trigger,e.threshold)?x(e,o).then(function(h){try{return e.feedback instanceof Error?r():(ie(o,e),e.resultsList&&function(l){var p=l.resultsList,u=l.list,w=l.resultItem,y=l.feedback,S=y.matches,C=y.results;if(l.cursor=-1,u.innerHTML="",S.length||p.noResults){var B=new DocumentFragment;C.forEach(function(_,P){var F=v(w.tag,i({id:"".concat(w.id,"_").concat(P),role:"option",innerHTML:_.match,inside:B},w.class&&{class:w.class}));w.element&&w.element(F,_)}),u.append(B),p.element&&p.element(u,y),Q(l)}else O(l)}(e),b.call(n))}catch(l){return s(l)}},s):(O(e),b.call(n));function b(){return r()}})}var H=function(e,t){for(var n in e)for(var r in e[n])t(n,r)},se=function(e){var t,n,r,s=e.events,o=(t=function(){return Y(e)},n=e.debounce,function(){clearTimeout(r),r=setTimeout(function(){return t()},n)}),c=e.events=i({input:i({},s&&s.input)},e.resultsList&&{list:s?i({},s.list):{}}),b={input:{input:function(){o()},keydown:function(h){(function(l,p){switch(l.keyCode){case 40:case 38:l.preventDefault(),l.keyCode===40?V(p):X(p);break;case 13:p.submit||l.preventDefault(),p.cursor>=0&&j(p,l);break;case 9:p.resultsList.tabSelect&&p.cursor>=0&&j(p,l);break;case 27:p.input.value="",O(p)}})(h,e)},blur:function(){O(e)}},list:{mousedown:function(h){h.preventDefault()},click:function(h){(function(l,p){var u=p.resultItem.tag.toUpperCase(),w=Array.from(p.list.querySelectorAll(u)),y=l.target.closest(u);y&&y.nodeName===u&&j(p,l,w.indexOf(y))})(h,e)}}};H(b,function(h,l){(e.resultsList||l==="input")&&(c[h][l]||(c[h][l]=b[h][l]))}),H(c,function(h,l){e[h].addEventListener(l,c[h][l])})};function Z(e){var t=this;return new Promise(function(n,r){var s,o,c;if(s=e.placeHolder,c={role:"combobox","aria-owns":(o=e.resultsList).id,"aria-haspopup":!0,"aria-expanded":!1},v(e.input,i(i({"aria-controls":o.id,"aria-autocomplete":"both"},s&&{placeholder:s}),!e.wrapper&&i({},c))),e.wrapper&&(e.wrapper=v("div",i({around:e.input,class:e.name+"_wrapper"},c))),o&&(e.list=v(o.tag,i({dest:[o.destination,o.position],id:o.id,role:"listbox",hidden:"hidden"},o.class&&{class:o.class}))),se(e),e.data.cache)return x(e).then(function(h){try{return b.call(t)}catch(l){return r(l)}},r);function b(){return m("init",e),n()}return b.call(t)})}function oe(e){var t=e.prototype;t.init=function(){Z(this)},t.start=function(n){Y(this,n)},t.unInit=function(){if(this.wrapper){var n=this.wrapper.parentNode;n.insertBefore(this.input,this.wrapper),n.removeChild(this.wrapper)}var r;H((r=this).events,function(s,o){r[s].removeEventListener(o,r.events[s][o])})},t.open=function(){Q(this)},t.close=function(){O(this)},t.goTo=function(n){N(n,this)},t.next=function(){V(this)},t.previous=function(){X(this)},t.select=function(n){j(this,null,n)},t.search=function(n,r,s){return L(n,r,s)}}return function e(t){this.options=t,this.id=e.instances=(e.instances||0)+1,this.name="autoComplete",this.wrapper=1,this.threshold=1,this.debounce=0,this.resultsList={position:"afterend",tag:"ul",maxResults:5},this.resultItem={tag:"li"},function(n){var r=n.name,s=n.options,o=n.resultsList,c=n.resultItem;for(var b in s)if(a(s[b])==="object")for(var h in n[b]||(n[b]={}),s[b])n[b][h]=s[b][h];else n[b]=s[b];n.selector=n.selector||"#"+r,o.destination=o.destination||n.selector,o.id=o.id||r+"_list_"+n.id,c.id=c.id||r+"_result",n.input=A(n.selector)}(this),oe.call(this,e),Z(this)}},typeof z=="object"&&typeof R!="undefined"?R.exports=M():typeof define=="function"&&define.amd?define(M):($=typeof globalThis!="undefined"?globalThis:$||self).autoComplete=M()});var ne=ee(te()),U=class{constructor(i){this.acByField=new Map;this.optionsByField=new Map;this.enabledFields=[];this.icons=[];this.looseSearch=!1;this.fields=i,Object.assign(globalThis,{fieldAutocomplete:this})}setup(i){this.enabledFields=i.ords,this.looseSearch=i.looseSearch,setTimeout(()=>{this._setupAcs(this.enabledFields),this._setupIcons(this.enabledFields)})}update(i){let{ord:a,options:f}=i;this.optionsByField.set(a,f);let g=this.acByField.get(a);g.list.hasAttribute("hidden")||g.start()}toggleAc(i){return D(this,null,function*(){let a=this.fields[i],f=yield a.element;""+i+f+a,this.enabledFields.includes(i)?(this.enabledFields.splice(this.enabledFields.indexOf(i),1),this.icons[i].classList.remove("enabled"),this._removeAc(i),globalThis.bridgeCommand(`update_ac_settings:{"ord" : ${i}, "val" : false}`)):(this.enabledFields.push(i),this.icons[i].classList.add("enabled"),yield this._addAc(i,f,a),globalThis.bridgeCommand(`update_ac_settings:{"ord" : ${i}, "val" : true}`))})}_setupAcs(i){if(this.acByField!=null)for(let a of this.acByField.keys())this._removeAc(a);this.acByField=new Map,this.optionsByField=new Map;for(let[a,f]of this.fields.entries())!i.includes(a)||f.element.then(g=>{this._addAc(a,g,f)})}_addAc(i,a,f){return D(this,null,function*(){var T,I;let g=a.getElementsByClassName("editing-area")[0],E=g.getElementsByClassName("rich-text-editable")[0].shadowRoot,k=E==null?void 0:E.querySelector("anki-editable"),A=g.querySelector("result-list-wrapper");if(!A){A=globalThis.document.createElement("span"),A.id="result-list-wrapper";let m;((I=(T=g.parentElement)==null?void 0:T.parentElement)==null?void 0:I.classList.contains("collapsible"))?(m=g.parentElement.parentElement,m.style.position="relative"):m=g,m.appendChild(A);let L=document.createElement("style");L.innerHTML=be,m.insertBefore(L,A)}let v=new ne.default({selector:()=>k,data:{src:()=>new Promise((m,L)=>{m(this.optionsByField.get(i)||[])}),filter:m=>m.filter(x=>x.value.replace(" ","")!="")},wrapper:!1,resultsList:{destination:()=>A,tag:"ul",class:"result-list",tabSelect:!0,noResults:!0,element:(m,L)=>{if(!L.results.length){let x=document.createElement("div");x.setAttribute("class","no-result"),x.innerHTML="<span>no results</span>",m.appendChild(x)}},maxResults:10},searchEngine:this.looseSearch?"loose":"strict",resultItem:{highlight:{render:!0}},events:{input:{init:m=>{globalThis.bridgeCommand(`fieldAutocomplete:{ "ord": ${i}, "text" : "" }`)},focus:m=>{v.start()},selection:m=>{let L=m.detail.selection.value;setTimeout(()=>{f.editingArea.content.set(L),f.editingArea.refocus(),setTimeout(()=>v.close())})}}},threshold:0,query:m=>m.replace("<br>","").replace("&nbsp;"," ")});v.input.addEventListener("input",()=>{v.disabled||globalThis.bridgeCommand(`fieldAutocomplete:{ "ord": ${i}, "text" : ${JSON.stringify(k.textContent)} }`)}),this.acByField.set(i,v),this.optionsByField.set(i,[])})}_removeAc(i){let a=this.acByField.get(i);a.unInit(),a.list.remove(),a.disabled=!0,this.acByField.delete(i),this.optionsByField.delete(i)}_setupIcons(i){for(let a of this.icons)a.remove();this.icons=[];for(let[a,f]of this.fields.entries())f.element.then(g=>{let E=this._addIconToField(a,g);this.icons.push(E),i.includes(a)?E.classList.add("enabled"):E.classList.add("disabled")})}_addIconToField(i,a){var E,k;let f=globalThis.document.createElement("span");f.classList.add("ac-icon"),f.addEventListener("click",()=>{this.toggleAc(i)});let g;return a.getElementsByClassName("field-state").length?g=a.getElementsByClassName("field-state")[0]:g=(k=(E=a.parentElement)==null?void 0:E.previousElementSibling)==null?void 0:k.getElementsByClassName("field-state")[0],g.insertBefore(f,g.querySelector("span")),f}},be=`
.no-result {
    padding: 10px 20px;
    list-style: none;
    text-align: left;
    font-size: 13px;
    font-style: italic;
    color: #747474;
    transition: all .1s ease-in-out;
    border-radius: 3px;
    background-color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all .2s ease
}

#result-list-wrapper {
    position: relative;
    display: block;
}

.result-list {
    position: absolute;
    max-height: 226px;
    overflow-y: scroll;
    top: 100%;
    left: 0;
    right: 0;
    padding: 0;
    margin: .15rem 0 0 0;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid rgba(33, 33, 33, .1);
    z-index: 1000;
    outline: 0
}

.result-list>li {
    padding: 10px 20px;
    list-style: none;
    text-align: left;
    font-size: 13px;
    color: #212121;
    transition: all .1s ease-in-out;
    border-radius: 3px;
    background-color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all .2s ease
}

.result-list>li::selection {
    color: rgba(#fff, 0);
    background-color: rgba(#fff, 0)
}

.result-list>li:hover {
    cursor: pointer;
    background-color: rgba(49, 49, 49, 0.2)
}

.result-list>li mark {
    background-color: transparent;
    color: #ff7a7a;
    font-weight: 700
}

.result-list>li mark::selection {
    color: rgba(#fff, 0);
    background-color: rgba(#fff, 0)
}

.result-list>li[aria-selected=true] {
    background-color: rgba(123, 123, 123, .4)
}

`;var re=ee(pe("anki/NoteEditor"));re.lifecycle.onMount(({fields:d})=>{new U(d)});})();
