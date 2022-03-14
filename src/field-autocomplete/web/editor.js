(()=>{var oe=Object.create;var H=Object.defineProperty;var le=Object.getOwnPropertyDescriptor;var ae=Object.getOwnPropertyNames;var ce=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty;var de=d=>H(d,"__esModule",{value:!0});var fe=(d=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(d,{get:(i,c)=>(typeof require!="undefined"?require:i)[c]}):d)(function(d){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+d+'" is not supported')});var pe=(d,i)=>()=>(i||d((i={exports:{}}).exports,i),i.exports);var he=(d,i,c)=>{if(i&&typeof i=="object"||typeof i=="function")for(let m of ae(i))!ue.call(d,m)&&m!=="default"&&H(d,m,{get:()=>i[m],enumerable:!(c=le(i,m))||c.enumerable});return d},Z=d=>he(de(H(d!=null?oe(ce(d)):{},"default",d&&d.__esModule&&"default"in d?{get:()=>d.default,enumerable:!0}:{value:d,enumerable:!0})),d);var ee=pe((q,D)=>{var N,C;N=q,C=function(){"use strict";function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(r){m(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function c(e){return(c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return function(t){if(Array.isArray(t))return A(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||w(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function w(e,t){if(e){if(typeof e=="string")return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function A(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=function(e){return typeof e=="string"?document.querySelector(e):e()},g=function(e,t){var n=typeof e=="string"?document.createElement(e):e;for(var r in t){var s=t[r];if(r==="inside")s.append(n);else if(r==="dest")x(s[0]).insertAdjacentElement(s[1],n);else if(r==="around"){var o=s;o.parentNode.insertBefore(n,o),n.append(o),o.getAttribute("autofocus")!=null&&o.focus()}else r in n?n[r]=s:n.setAttribute(r,s)}return n},E=function(e,t){return e=e.toString().toLowerCase(),t?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").normalize("NFC"):e},k=function(e,t){return g("mark",i({innerHTML:e},typeof t=="string"&&{class:t})).outerHTML},T=function(e,t){t.input.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t.feedback,cancelable:!0}))},z=function(e,t,n){var r=n||{},s=r.mode,o=r.diacritics,a=r.highlight,h=E(t,o);if(t=t.toString(),e=E(e,o),s==="loose"){var p=(e=e.replace(/ /g,"")).length,l=0,f=Array.from(t).map(function(y,b){return l<p&&h[b]===e[l]&&(y=a?k(y,a):y,l++),y}).join("");if(l===p)return f}else{var u=h.indexOf(e);if(~u)return e=t.substring(u,u+e.length),u=a?t.replace(e,k(e,a)):t}},R=function(e,t){return new Promise(function(n,r){var s;return(s=e.data).cache&&s.store?n():new Promise(function(o,a){return typeof s.src=="function"?s.src(t).then(o,a):o(s.src)}).then(function(o){try{return e.feedback=s.store=o,T("response",e),n()}catch(a){return r(a)}},r)})},re=function(e,t){var n=t.data,r=t.searchEngine,s=[];n.store.forEach(function(a,h){var p=function(u){var y=u?a[u]:a,b=typeof r=="function"?r(e,y):z(e,y,{mode:r,diacritics:t.diacritics,highlight:t.resultItem.highlight});if(b){var F={match:b,value:a};u&&(F.key=u),s.push(F)}};if(n.keys){var l,f=function(u,y){var b=typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(!b){if(Array.isArray(u)||(b=w(u))||y&&u&&typeof u.length=="number"){b&&(u=b);var F=0,j=function(){};return{s:j,n:function(){return F>=u.length?{done:!0}:{done:!1,value:u[F++]}},e:function(L){throw L},f:j}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var S,I=!0,B=!1;return{s:function(){b=b.call(u)},n:function(){var L=b.next();return I=L.done,L},e:function(L){B=!0,S=L},f:function(){try{I||b.return==null||b.return()}finally{if(B)throw S}}}}(n.keys);try{for(f.s();!(l=f.n()).done;)p(l.value)}catch(u){f.e(u)}finally{f.f()}}else p()}),n.filter&&(s=n.filter(s));var o=s.slice(0,t.resultsList.maxResults);t.feedback={query:e,matches:s,results:o},T("results",t)},U="aria-expanded",J="aria-activedescendant",W="aria-selected",G=function(e,t){e.feedback.selection=i({index:t},e.feedback.results[t])},K=function(e){e.isOpen||((e.wrapper||e.input).setAttribute(U,!0),e.list.removeAttribute("hidden"),e.isOpen=!0,T("open",e))},O=function(e){e.isOpen&&((e.wrapper||e.input).setAttribute(U,!1),e.input.setAttribute(J,""),e.list.setAttribute("hidden",""),e.isOpen=!1,T("close",e))},M=function(e,t){var n=t.resultItem,r=t.list.getElementsByTagName(n.tag),s=!!n.selected&&n.selected.split(" ");if(t.isOpen&&r.length){var o,a,h=t.cursor;e>=r.length&&(e=0),e<0&&(e=r.length-1),t.cursor=e,h>-1&&(r[h].removeAttribute(W),s&&(a=r[h].classList).remove.apply(a,v(s))),r[e].setAttribute(W,!0),s&&(o=r[e].classList).add.apply(o,v(s)),t.input.setAttribute(J,r[t.cursor].id),t.list.scrollTop=r[e].offsetTop-t.list.clientHeight+r[e].clientHeight+5,t.feedback.cursor=t.cursor,G(t,e),T("navigate",t)}},Q=function(e){M(e.cursor+1,e)},V=function(e){M(e.cursor-1,e)},_=function(e,t,n){(n=n>=0?n:e.cursor)<0||(e.feedback.event=t,G(e,n),T("selection",e),O(e))};function X(e,t){var n=this;return new Promise(function(r,s){var o,a;return o=t||((a=e.input)instanceof HTMLInputElement||a instanceof HTMLTextAreaElement?a.value:a.innerHTML),function(p,l,f){return l?l(p):p.length>=f}(o=e.query?e.query(o):o,e.trigger,e.threshold)?R(e,o).then(function(p){try{return e.feedback instanceof Error?r():(re(o,e),e.resultsList&&function(l){var f=l.resultsList,u=l.list,y=l.resultItem,b=l.feedback,F=b.matches,j=b.results;if(l.cursor=-1,u.innerHTML="",F.length||f.noResults){var S=new DocumentFragment;j.forEach(function(I,B){var L=g(y.tag,i({id:"".concat(y.id,"_").concat(B),role:"option",innerHTML:I.match,inside:S},y.class&&{class:y.class}));y.element&&y.element(L,I)}),u.append(S),f.element&&f.element(u,b),K(l)}else O(l)}(e),h.call(n))}catch(l){return s(l)}},s):(O(e),h.call(n));function h(){return r()}})}var P=function(e,t){for(var n in e)for(var r in e[n])t(n,r)},ie=function(e){var t,n,r,s=e.events,o=(t=function(){return X(e)},n=e.debounce,function(){clearTimeout(r),r=setTimeout(function(){return t()},n)}),a=e.events=i({input:i({},s&&s.input)},e.resultsList&&{list:s?i({},s.list):{}}),h={input:{input:function(){o()},keydown:function(p){(function(l,f){switch(l.keyCode){case 40:case 38:l.preventDefault(),l.keyCode===40?Q(f):V(f);break;case 13:f.submit||l.preventDefault(),f.cursor>=0&&_(f,l);break;case 9:f.resultsList.tabSelect&&f.cursor>=0&&_(f,l);break;case 27:f.input.value="",O(f)}})(p,e)},blur:function(){O(e)}},list:{mousedown:function(p){p.preventDefault()},click:function(p){(function(l,f){var u=f.resultItem.tag.toUpperCase(),y=Array.from(f.list.querySelectorAll(u)),b=l.target.closest(u);b&&b.nodeName===u&&_(f,l,y.indexOf(b))})(p,e)}}};P(h,function(p,l){(e.resultsList||l==="input")&&(a[p][l]||(a[p][l]=h[p][l]))}),P(a,function(p,l){e[p].addEventListener(l,a[p][l])})};function Y(e){var t=this;return new Promise(function(n,r){var s,o,a;if(s=e.placeHolder,a={role:"combobox","aria-owns":(o=e.resultsList).id,"aria-haspopup":!0,"aria-expanded":!1},g(e.input,i(i({"aria-controls":o.id,"aria-autocomplete":"both"},s&&{placeholder:s}),!e.wrapper&&i({},a))),e.wrapper&&(e.wrapper=g("div",i({around:e.input,class:e.name+"_wrapper"},a))),o&&(e.list=g(o.tag,i({dest:[o.destination,o.position],id:o.id,role:"listbox",hidden:"hidden"},o.class&&{class:o.class}))),ie(e),e.data.cache)return R(e).then(function(p){try{return h.call(t)}catch(l){return r(l)}},r);function h(){return T("init",e),n()}return h.call(t)})}function se(e){var t=e.prototype;t.init=function(){Y(this)},t.start=function(n){X(this,n)},t.unInit=function(){if(this.wrapper){var n=this.wrapper.parentNode;n.insertBefore(this.input,this.wrapper),n.removeChild(this.wrapper)}var r;P((r=this).events,function(s,o){r[s].removeEventListener(o,r.events[s][o])})},t.open=function(){K(this)},t.close=function(){O(this)},t.goTo=function(n){M(n,this)},t.next=function(){Q(this)},t.previous=function(){V(this)},t.select=function(n){_(this,null,n)},t.search=function(n,r,s){return z(n,r,s)}}return function e(t){this.options=t,this.id=e.instances=(e.instances||0)+1,this.name="autoComplete",this.wrapper=1,this.threshold=1,this.debounce=0,this.resultsList={position:"afterend",tag:"ul",maxResults:5},this.resultItem={tag:"li"},function(n){var r=n.name,s=n.options,o=n.resultsList,a=n.resultItem;for(var h in s)if(c(s[h])==="object")for(var p in n[h]||(n[h]={}),s[h])n[h][p]=s[h][p];else n[h]=s[h];n.selector=n.selector||"#"+r,o.destination=o.destination||n.selector,o.id=o.id||r+"_list_"+n.id,a.id=a.id||r+"_result",n.input=x(n.selector)}(this),se.call(this,e),Y(this)}},typeof q=="object"&&typeof D!="undefined"?D.exports=C():typeof define=="function"&&define.amd?define(C):(N=typeof globalThis!="undefined"?globalThis:N||self).autoComplete=C()});var te=Z(ee()),$=class{constructor(i){this.acByField=new Map;this.optionsByField=new Map;this.enabledFields=[];this.icons=[];this.looseSearch=!1;this.fields=i,Object.assign(globalThis,{fieldAutocomplete:this})}setup(i){this.enabledFields=i.ords,this.looseSearch=i.looseSearch,setTimeout(()=>{this._setupAcs(this.enabledFields),this._setupIcons(this.enabledFields)})}update(i){let{ord:c,options:m}=i;this.optionsByField.set(c,m);let v=this.acByField.get(c);v.list.hasAttribute("hidden")||v.start()}toggleAc(i,c){this.enabledFields.includes(i)?(this.enabledFields.splice(this.enabledFields.indexOf(i),1),this.icons[i].classList.remove("enabled"),this._removeAc(i),globalThis.bridgeCommand(`update_ac_settings:{"ord" : ${i}, "val" : false}`)):(this.enabledFields.push(i),this.icons[i].classList.add("enabled"),this._addAc(i,c),globalThis.bridgeCommand(`update_ac_settings:{"ord" : ${i}, "val" : true}`))}_setupAcs(i){if(this.acByField!=null)for(let c of this.acByField.keys())this._removeAc(c);this.acByField=new Map,this.optionsByField=new Map;for(let[c,m]of this.fields.entries()){if(!i.includes(c))return;m.element.then(v=>{this._addAc(c,v)})}}_addAc(i,c){let m=c.getElementsByClassName("editing-area")[0],v=m.getElementsByClassName("rich-text-editable")[0].shadowRoot,w=v==null?void 0:v.querySelector("anki-editable"),A=m.querySelector("result-list-wrapper");if(!A){A=globalThis.document.createElement("span"),A.id="result-list-wrapper",m.appendChild(A);let g=document.createElement("style");g.innerHTML=me,m.insertBefore(g,A)}let x=new te.default({selector:()=>w,data:{src:()=>new Promise((g,E)=>{g(this.optionsByField.get(i)||[])}),filter:g=>g.filter(k=>k.value.replace(" ","")!="")},wrapper:!1,resultsList:{destination:()=>A,tag:"ul",class:"result-list",tabSelect:!0,noResults:!0,element:(g,E)=>{if(!E.results.length){let k=document.createElement("div");k.setAttribute("class","no-result"),k.innerHTML="<span>no results</span>",g.appendChild(k)}},maxResults:10},searchEngine:this.looseSearch?"loose":"strict",resultItem:{highlight:{render:!0}},events:{input:{init:g=>{globalThis.bridgeCommand(`fieldAutocomplete:{ "ord": ${i}, "text" : "" }`)},focus:g=>{x.start()},selection:g=>{let E=g.detail.selection.value;w.textContent=E}}},threshold:0,query:g=>g.replace("<br>","").replace("&nbsp;"," ")});x.input.addEventListener("input",()=>{x.disabled||globalThis.bridgeCommand(`fieldAutocomplete:{ "ord": ${i}, "text" : ${JSON.stringify(w.textContent)} }`)}),this.acByField.set(i,x),this.optionsByField.set(i,[])}_removeAc(i){let c=this.acByField.get(i);c.unInit(),c.list.remove(),c.disabled=!0,this.acByField.delete(i),this.optionsByField.delete(i)}_setupIcons(i){for(let c of this.icons)c.remove();this.icons=[];for(let[c,m]of this.fields.entries())m.element.then(v=>{let w=this._addIconToField(c,v);this.icons.push(w),i.includes(c)?w.classList.add("enabled"):w.classList.add("disabled")})}_addIconToField(i,c){let m=globalThis.document.createElement("span");m.classList.add("ac-icon"),m.addEventListener("click",()=>{this.toggleAc(i,c)});let v=c.getElementsByClassName("field-state")[0];return v.insertBefore(m,v.querySelector("span")),m}},me=`
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

`;var ne=Z(fe("anki/NoteEditor"));ne.lifecycle.onMount(({fields:d})=>{new $(d)});})();
