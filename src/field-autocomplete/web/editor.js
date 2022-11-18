(()=>{var oe=Object.create;var q=Object.defineProperty;var le=Object.getOwnPropertyDescriptor;var ae=Object.getOwnPropertyNames;var ce=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty;var de=d=>q(d,"__esModule",{value:!0});var fe=(d=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(d,{get:(i,a)=>(typeof require!="undefined"?require:i)[a]}):d)(function(d){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+d+'" is not supported')});var pe=(d,i)=>()=>(i||d((i={exports:{}}).exports,i),i.exports);var he=(d,i,a)=>{if(i&&typeof i=="object"||typeof i=="function")for(let b of ae(i))!ue.call(d,b)&&b!=="default"&&q(d,b,{get:()=>i[b],enumerable:!(a=le(i,b))||a.enumerable});return d},Z=d=>he(de(q(d!=null?oe(ce(d)):{},"default",d&&d.__esModule&&"default"in d?{get:()=>d.default,enumerable:!0}:{value:d,enumerable:!0})),d);var ee=pe(($,z)=>{var D,M;D=$,M=function(){"use strict";function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(r){b(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function a(e){return(a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return function(t){if(Array.isArray(t))return L(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||w(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function w(e,t){if(e){if(typeof e=="string")return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=function(e){return typeof e=="string"?document.querySelector(e):e()},A=function(e,t){var n=typeof e=="string"?document.createElement(e):e;for(var r in t){var s=t[r];if(r==="inside")s.append(n);else if(r==="dest")E(s[0]).insertAdjacentElement(s[1],n);else if(r==="around"){var o=s;o.parentNode.insertBefore(n,o),n.append(o),o.getAttribute("autofocus")!=null&&o.focus()}else r in n?n[r]=s:n.setAttribute(r,s)}return n},O=function(e,t){return e=e.toString().toLowerCase(),t?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").normalize("NFC"):e},I=function(e,t){return A("mark",i({innerHTML:e},typeof t=="string"&&{class:t})).outerHTML},h=function(e,t){t.input.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t.feedback,cancelable:!0}))},k=function(e,t,n){var r=n||{},s=r.mode,o=r.diacritics,c=r.highlight,m=O(t,o);if(t=t.toString(),e=O(e,o),s==="loose"){var p=(e=e.replace(/ /g,"")).length,l=0,f=Array.from(t).map(function(v,g){return l<p&&m[g]===e[l]&&(v=c?I(v,c):v,l++),v}).join("");if(l===p)return f}else{var u=m.indexOf(e);if(~u)return e=t.substring(u,u+e.length),u=c?t.replace(e,I(e,c)):t}},T=function(e,t){return new Promise(function(n,r){var s;return(s=e.data).cache&&s.store?n():new Promise(function(o,c){return typeof s.src=="function"?s.src(t).then(o,c):o(s.src)}).then(function(o){try{return e.feedback=s.store=o,h("response",e),n()}catch(c){return r(c)}},r)})},re=function(e,t){var n=t.data,r=t.searchEngine,s=[];n.store.forEach(function(c,m){var p=function(u){var v=u?c[u]:c,g=typeof r=="function"?r(e,v):k(e,v,{mode:r,diacritics:t.diacritics,highlight:t.resultItem.highlight});if(g){var F={match:g,value:c};u&&(F.key=u),s.push(F)}};if(n.keys){var l,f=function(u,v){var g=typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(!g){if(Array.isArray(u)||(g=w(u))||v&&u&&typeof u.length=="number"){g&&(u=g);var F=0,C=function(){};return{s:C,n:function(){return F>=u.length?{done:!0}:{done:!1,value:u[F++]}},e:function(x){throw x},f:C}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var B,_=!0,P=!1;return{s:function(){g=g.call(u)},n:function(){var x=g.next();return _=x.done,x},e:function(x){P=!0,B=x},f:function(){try{_||g.return==null||g.return()}finally{if(P)throw B}}}}(n.keys);try{for(f.s();!(l=f.n()).done;)p(l.value)}catch(u){f.e(u)}finally{f.f()}}else p()}),n.filter&&(s=n.filter(s));var o=s.slice(0,t.resultsList.maxResults);t.feedback={query:e,matches:s,results:o},h("results",t)},U="aria-expanded",J="aria-activedescendant",W="aria-selected",G=function(e,t){e.feedback.selection=i({index:t},e.feedback.results[t])},K=function(e){e.isOpen||((e.wrapper||e.input).setAttribute(U,!0),e.list.removeAttribute("hidden"),e.isOpen=!0,h("open",e))},S=function(e){e.isOpen&&((e.wrapper||e.input).setAttribute(U,!1),e.input.setAttribute(J,""),e.list.setAttribute("hidden",""),e.isOpen=!1,h("close",e))},H=function(e,t){var n=t.resultItem,r=t.list.getElementsByTagName(n.tag),s=!!n.selected&&n.selected.split(" ");if(t.isOpen&&r.length){var o,c,m=t.cursor;e>=r.length&&(e=0),e<0&&(e=r.length-1),t.cursor=e,m>-1&&(r[m].removeAttribute(W),s&&(c=r[m].classList).remove.apply(c,y(s))),r[e].setAttribute(W,!0),s&&(o=r[e].classList).add.apply(o,y(s)),t.input.setAttribute(J,r[t.cursor].id),t.list.scrollTop=r[e].offsetTop-t.list.clientHeight+r[e].clientHeight+5,t.feedback.cursor=t.cursor,G(t,e),h("navigate",t)}},Q=function(e){H(e.cursor+1,e)},V=function(e){H(e.cursor-1,e)},j=function(e,t,n){(n=n>=0?n:e.cursor)<0||(e.feedback.event=t,G(e,n),h("selection",e),S(e))};function X(e,t){var n=this;return new Promise(function(r,s){var o,c;return o=t||((c=e.input)instanceof HTMLInputElement||c instanceof HTMLTextAreaElement?c.value:c.innerHTML),function(p,l,f){return l?l(p):p.length>=f}(o=e.query?e.query(o):o,e.trigger,e.threshold)?T(e,o).then(function(p){try{return e.feedback instanceof Error?r():(re(o,e),e.resultsList&&function(l){var f=l.resultsList,u=l.list,v=l.resultItem,g=l.feedback,F=g.matches,C=g.results;if(l.cursor=-1,u.innerHTML="",F.length||f.noResults){var B=new DocumentFragment;C.forEach(function(_,P){var x=A(v.tag,i({id:"".concat(v.id,"_").concat(P),role:"option",innerHTML:_.match,inside:B},v.class&&{class:v.class}));v.element&&v.element(x,_)}),u.append(B),f.element&&f.element(u,g),K(l)}else S(l)}(e),m.call(n))}catch(l){return s(l)}},s):(S(e),m.call(n));function m(){return r()}})}var N=function(e,t){for(var n in e)for(var r in e[n])t(n,r)},ie=function(e){var t,n,r,s=e.events,o=(t=function(){return X(e)},n=e.debounce,function(){clearTimeout(r),r=setTimeout(function(){return t()},n)}),c=e.events=i({input:i({},s&&s.input)},e.resultsList&&{list:s?i({},s.list):{}}),m={input:{input:function(){o()},keydown:function(p){(function(l,f){switch(l.keyCode){case 40:case 38:l.preventDefault(),l.keyCode===40?Q(f):V(f);break;case 13:f.submit||l.preventDefault(),f.cursor>=0&&j(f,l);break;case 9:f.resultsList.tabSelect&&f.cursor>=0&&j(f,l);break;case 27:f.input.value="",S(f)}})(p,e)},blur:function(){S(e)}},list:{mousedown:function(p){p.preventDefault()},click:function(p){(function(l,f){var u=f.resultItem.tag.toUpperCase(),v=Array.from(f.list.querySelectorAll(u)),g=l.target.closest(u);g&&g.nodeName===u&&j(f,l,v.indexOf(g))})(p,e)}}};N(m,function(p,l){(e.resultsList||l==="input")&&(c[p][l]||(c[p][l]=m[p][l]))}),N(c,function(p,l){e[p].addEventListener(l,c[p][l])})};function Y(e){var t=this;return new Promise(function(n,r){var s,o,c;if(s=e.placeHolder,c={role:"combobox","aria-owns":(o=e.resultsList).id,"aria-haspopup":!0,"aria-expanded":!1},A(e.input,i(i({"aria-controls":o.id,"aria-autocomplete":"both"},s&&{placeholder:s}),!e.wrapper&&i({},c))),e.wrapper&&(e.wrapper=A("div",i({around:e.input,class:e.name+"_wrapper"},c))),o&&(e.list=A(o.tag,i({dest:[o.destination,o.position],id:o.id,role:"listbox",hidden:"hidden"},o.class&&{class:o.class}))),ie(e),e.data.cache)return T(e).then(function(p){try{return m.call(t)}catch(l){return r(l)}},r);function m(){return h("init",e),n()}return m.call(t)})}function se(e){var t=e.prototype;t.init=function(){Y(this)},t.start=function(n){X(this,n)},t.unInit=function(){if(this.wrapper){var n=this.wrapper.parentNode;n.insertBefore(this.input,this.wrapper),n.removeChild(this.wrapper)}var r;N((r=this).events,function(s,o){r[s].removeEventListener(o,r.events[s][o])})},t.open=function(){K(this)},t.close=function(){S(this)},t.goTo=function(n){H(n,this)},t.next=function(){Q(this)},t.previous=function(){V(this)},t.select=function(n){j(this,null,n)},t.search=function(n,r,s){return k(n,r,s)}}return function e(t){this.options=t,this.id=e.instances=(e.instances||0)+1,this.name="autoComplete",this.wrapper=1,this.threshold=1,this.debounce=0,this.resultsList={position:"afterend",tag:"ul",maxResults:5},this.resultItem={tag:"li"},function(n){var r=n.name,s=n.options,o=n.resultsList,c=n.resultItem;for(var m in s)if(a(s[m])==="object")for(var p in n[m]||(n[m]={}),s[m])n[m][p]=s[m][p];else n[m]=s[m];n.selector=n.selector||"#"+r,o.destination=o.destination||n.selector,o.id=o.id||r+"_list_"+n.id,c.id=c.id||r+"_result",n.input=E(n.selector)}(this),se.call(this,e),Y(this)}},typeof $=="object"&&typeof z!="undefined"?z.exports=M():typeof define=="function"&&define.amd?define(M):(D=typeof globalThis!="undefined"?globalThis:D||self).autoComplete=M()});var te=Z(ee()),R=class{constructor(i){this.acByField=new Map;this.optionsByField=new Map;this.enabledFields=[];this.icons=[];this.looseSearch=!1;this.fields=i,Object.assign(globalThis,{fieldAutocomplete:this})}setup(i){this.enabledFields=i.ords,this.looseSearch=i.looseSearch,setTimeout(()=>{this._setupAcs(this.enabledFields),this._setupIcons(this.enabledFields)})}update(i){let{ord:a,options:b}=i;this.optionsByField.set(a,b);let y=this.acByField.get(a);y.list.hasAttribute("hidden")||y.start()}toggleAc(i,a,b){this.enabledFields.includes(i)?(this.enabledFields.splice(this.enabledFields.indexOf(i),1),this.icons[i].classList.remove("enabled"),this._removeAc(i),globalThis.bridgeCommand(`update_ac_settings:{"ord" : ${i}, "val" : false}`)):(this.enabledFields.push(i),this.icons[i].classList.add("enabled"),this._addAc(i,a,b),globalThis.bridgeCommand(`update_ac_settings:{"ord" : ${i}, "val" : true}`))}_setupAcs(i){if(this.acByField!=null)for(let a of this.acByField.keys())this._removeAc(a);this.acByField=new Map,this.optionsByField=new Map;for(let[a,b]of this.fields.entries())!i.includes(a)||b.element.then(y=>{this._addAc(a,y,b)})}_addAc(i,a,b){var O,I;let y=a.getElementsByClassName("editing-area")[0],w=y.getElementsByClassName("rich-text-editable")[0].shadowRoot,L=w==null?void 0:w.querySelector("anki-editable"),E=y.querySelector("result-list-wrapper");if(!E){E=globalThis.document.createElement("span"),E.id="result-list-wrapper";let h;((I=(O=y.parentElement)==null?void 0:O.parentElement)==null?void 0:I.classList.contains("collapsible"))?(h=y.parentElement.parentElement,h.style.position="relative"):h=y,h.appendChild(E);let k=document.createElement("style");k.innerHTML=me,h.insertBefore(k,E)}let A=new te.default({selector:()=>L,data:{src:()=>new Promise((h,k)=>{h(this.optionsByField.get(i)||[])}),filter:h=>h.filter(T=>T.value.replace(" ","")!="")},wrapper:!1,resultsList:{destination:()=>E,tag:"ul",class:"result-list",tabSelect:!0,noResults:!0,element:(h,k)=>{if(!k.results.length){let T=document.createElement("div");T.setAttribute("class","no-result"),T.innerHTML="<span>no results</span>",h.appendChild(T)}},maxResults:10},searchEngine:this.looseSearch?"loose":"strict",resultItem:{highlight:{render:!0}},events:{input:{init:h=>{globalThis.bridgeCommand(`fieldAutocomplete:{ "ord": ${i}, "text" : "" }`)},focus:h=>{A.start()},selection:h=>{let k=h.detail.selection.value;setTimeout(()=>{b.editingArea.content.set(k),b.editingArea.refocus(),setTimeout(()=>A.close())})}}},threshold:0,query:h=>h.replace("<br>","").replace("&nbsp;"," ")});A.input.addEventListener("input",()=>{A.disabled||globalThis.bridgeCommand(`fieldAutocomplete:{ "ord": ${i}, "text" : ${JSON.stringify(L.textContent)} }`)}),this.acByField.set(i,A),this.optionsByField.set(i,[])}_removeAc(i){let a=this.acByField.get(i);a.unInit(),a.list.remove(),a.disabled=!0,this.acByField.delete(i),this.optionsByField.delete(i)}_setupIcons(i){for(let a of this.icons)a.remove();this.icons=[];for(let[a,b]of this.fields.entries())b.element.then(y=>{let w=this._addIconToField(a,y,b);this.icons.push(w),i.includes(a)?w.classList.add("enabled"):w.classList.add("disabled")})}_addIconToField(i,a,b){var L,E;let y=globalThis.document.createElement("span");y.classList.add("ac-icon"),y.addEventListener("click",()=>{this.toggleAc(i,a,b)});let w;return a.getElementsByClassName("field-state").length?w=a.getElementsByClassName("field-state")[0]:w=(E=(L=a.parentElement)==null?void 0:L.previousElementSibling)==null?void 0:E.getElementsByClassName("field-state")[0],w.insertBefore(y,w.querySelector("span")),y}},me=`
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

`;var ne=Z(fe("anki/NoteEditor"));ne.lifecycle.onMount(({fields:d})=>{new R(d)});})();
