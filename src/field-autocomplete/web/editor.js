(()=>{var le=Object.create;var $=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var ce=Object.getOwnPropertyNames;var ue=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var fe=d=>$(d,"__esModule",{value:!0});var pe=(d=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(d,{get:(i,a)=>(typeof require!="undefined"?require:i)[a]}):d)(function(d){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+d+'" is not supported')});var he=(d,i)=>()=>(i||d((i={exports:{}}).exports,i),i.exports);var me=(d,i,a)=>{if(i&&typeof i=="object"||typeof i=="function")for(let p of ce(i))!de.call(d,p)&&p!=="default"&&$(d,p,{get:()=>i[p],enumerable:!(a=ae(i,p))||a.enumerable});return d},te=d=>me(fe($(d!=null?le(ue(d)):{},"default",d&&d.__esModule&&"default"in d?{get:()=>d.default,enumerable:!0}:{value:d,enumerable:!0})),d);var z=(d,i,a)=>new Promise((p,b)=>{var E=v=>{try{A(a.next(v))}catch(x){b(x)}},k=v=>{try{A(a.throw(v))}catch(x){b(x)}},A=v=>v.done?p(v.value):Promise.resolve(v.value).then(E,k);A((a=a.apply(d,i)).next())});var ne=he((U,J)=>{var R,H;R=U,H=function(){"use strict";function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(r){p(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function a(e){return(a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return function(t){if(Array.isArray(t))return k(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||E(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function E(e,t){if(e){if(typeof e=="string")return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=function(e){return typeof e=="string"?document.querySelector(e):e()},v=function(e,t){var n=typeof e=="string"?document.createElement(e):e;for(var r in t){var s=t[r];if(r==="inside")s.append(n);else if(r==="dest")A(s[0]).insertAdjacentElement(s[1],n);else if(r==="around"){var o=s;o.parentNode.insertBefore(n,o),n.append(o),o.getAttribute("autofocus")!=null&&o.focus()}else r in n?n[r]=s:n.setAttribute(r,s)}return n},x=function(e,t){return e=e.toString().toLowerCase(),t?e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").normalize("NFC"):e},B=function(e,t){return v("mark",i({innerHTML:e},typeof t=="string"&&{class:t})).outerHTML},L=function(e,t){t.input.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t.feedback,cancelable:!0}))},_=function(e,t,n){var r=n||{},s=r.mode,o=r.diacritics,c=r.highlight,m=x(t,o);if(t=t.toString(),e=x(e,o),s==="loose"){var h=(e=e.replace(/ /g,"")).length,l=0,f=Array.from(t).map(function(w,g){return l<h&&m[g]===e[l]&&(w=c?B(w,c):w,l++),w}).join("");if(l===h)return f}else{var u=m.indexOf(e);if(~u)return e=t.substring(u,u+e.length),u=c?t.replace(e,B(e,c)):t}},y=function(e,t){return new Promise(function(n,r){var s;return(s=e.data).cache&&s.store?n():new Promise(function(o,c){return typeof s.src=="function"?s.src(t).then(o,c):o(s.src)}).then(function(o){try{return e.feedback=s.store=o,L("response",e),n()}catch(c){return r(c)}},r)})},T=function(e,t){var n=t.data,r=t.searchEngine,s=[];n.store.forEach(function(c,m){var h=function(u){var w=u?c[u]:c,g=typeof r=="function"?r(e,w):_(e,w,{mode:r,diacritics:t.diacritics,highlight:t.resultItem.highlight});if(g){var O={match:g,value:c};u&&(O.key=u),s.push(O)}};if(n.keys){var l,f=function(u,w){var g=typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(!g){if(Array.isArray(u)||(g=E(u))||w&&u&&typeof u.length=="number"){g&&(u=g);var O=0,M=function(){};return{s:M,n:function(){return O>=u.length?{done:!0}:{done:!1,value:u[O++]}},e:function(S){throw S},f:M}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var j,C=!0,N=!1;return{s:function(){g=g.call(u)},n:function(){var S=g.next();return C=S.done,S},e:function(S){N=!0,j=S},f:function(){try{C||g.return==null||g.return()}finally{if(N)throw j}}}}(n.keys);try{for(f.s();!(l=f.n()).done;)h(l.value)}catch(u){f.e(u)}finally{f.f()}}else h()}),n.filter&&(s=n.filter(s));var o=s.slice(0,t.resultsList.maxResults);t.feedback={query:e,matches:s,results:o},L("results",t)},F="aria-expanded",G="aria-activedescendant",K="aria-selected",Q=function(e,t){e.feedback.selection=i({index:t},e.feedback.results[t])},V=function(e){e.isOpen||((e.wrapper||e.input).setAttribute(F,!0),e.list.removeAttribute("hidden"),e.isOpen=!0,L("open",e))},I=function(e){e.isOpen&&((e.wrapper||e.input).setAttribute(F,!1),e.input.setAttribute(G,""),e.list.setAttribute("hidden",""),e.isOpen=!1,L("close",e))},q=function(e,t){var n=t.resultItem,r=t.list.getElementsByTagName(n.tag),s=!!n.selected&&n.selected.split(" ");if(t.isOpen&&r.length){var o,c,m=t.cursor;e>=r.length&&(e=0),e<0&&(e=r.length-1),t.cursor=e,m>-1&&(r[m].removeAttribute(K),s&&(c=r[m].classList).remove.apply(c,b(s))),r[e].setAttribute(K,!0),s&&(o=r[e].classList).add.apply(o,b(s)),t.input.setAttribute(G,r[t.cursor].id),t.list.scrollTop=r[e].offsetTop-t.list.clientHeight+r[e].clientHeight+5,t.feedback.cursor=t.cursor,Q(t,e),L("navigate",t)}},X=function(e){q(e.cursor+1,e)},Y=function(e){q(e.cursor-1,e)},P=function(e,t,n){(n=n>=0?n:e.cursor)<0||(e.feedback.event=t,Q(e,n),L("selection",e),I(e))};function Z(e,t){var n=this;return new Promise(function(r,s){var o,c;return o=t||((c=e.input)instanceof HTMLInputElement||c instanceof HTMLTextAreaElement?c.value:c.innerHTML),function(h,l,f){return l?l(h):h.length>=f}(o=e.query?e.query(o):o,e.trigger,e.threshold)?y(e,o).then(function(h){try{return e.feedback instanceof Error?r():(T(o,e),e.resultsList&&function(l){var f=l.resultsList,u=l.list,w=l.resultItem,g=l.feedback,O=g.matches,M=g.results;if(l.cursor=-1,u.innerHTML="",O.length||f.noResults){var j=new DocumentFragment;M.forEach(function(C,N){var S=v(w.tag,i({id:"".concat(w.id,"_").concat(N),role:"option",innerHTML:C.match,inside:j},w.class&&{class:w.class}));w.element&&w.element(S,C)}),u.append(j),f.element&&f.element(u,g),V(l)}else I(l)}(e),m.call(n))}catch(l){return s(l)}},s):(I(e),m.call(n));function m(){return r()}})}var D=function(e,t){for(var n in e)for(var r in e[n])t(n,r)},se=function(e){var t,n,r,s=e.events,o=(t=function(){return Z(e)},n=e.debounce,function(){clearTimeout(r),r=setTimeout(function(){return t()},n)}),c=e.events=i({input:i({},s&&s.input)},e.resultsList&&{list:s?i({},s.list):{}}),m={input:{input:function(){o()},keydown:function(h){(function(l,f){switch(l.keyCode){case 40:case 38:l.preventDefault(),l.keyCode===40?X(f):Y(f);break;case 13:f.submit||l.preventDefault(),f.cursor>=0&&P(f,l);break;case 9:f.resultsList.tabSelect&&f.cursor>=0&&P(f,l);break;case 27:f.input.value="",I(f)}})(h,e)},blur:function(){I(e)}},list:{mousedown:function(h){h.preventDefault()},click:function(h){(function(l,f){var u=f.resultItem.tag.toUpperCase(),w=Array.from(f.list.querySelectorAll(u)),g=l.target.closest(u);g&&g.nodeName===u&&P(f,l,w.indexOf(g))})(h,e)}}};D(m,function(h,l){(e.resultsList||l==="input")&&(c[h][l]||(c[h][l]=m[h][l]))}),D(c,function(h,l){e[h].addEventListener(l,c[h][l])})};function ee(e){var t=this;return new Promise(function(n,r){var s,o,c;if(s=e.placeHolder,c={role:"combobox","aria-owns":(o=e.resultsList).id,"aria-haspopup":!0,"aria-expanded":!1},v(e.input,i(i({"aria-controls":o.id,"aria-autocomplete":"both"},s&&{placeholder:s}),!e.wrapper&&i({},c))),e.wrapper&&(e.wrapper=v("div",i({around:e.input,class:e.name+"_wrapper"},c))),o&&(e.list=v(o.tag,i({dest:[o.destination,o.position],id:o.id,role:"listbox",hidden:"hidden"},o.class&&{class:o.class}))),se(e),e.data.cache)return y(e).then(function(h){try{return m.call(t)}catch(l){return r(l)}},r);function m(){return L("init",e),n()}return m.call(t)})}function oe(e){var t=e.prototype;t.init=function(){ee(this)},t.start=function(n){Z(this,n)},t.unInit=function(){if(this.wrapper){var n=this.wrapper.parentNode;n.insertBefore(this.input,this.wrapper),n.removeChild(this.wrapper)}var r;D((r=this).events,function(s,o){r[s].removeEventListener(o,r.events[s][o])})},t.open=function(){V(this)},t.close=function(){I(this)},t.goTo=function(n){q(n,this)},t.next=function(){X(this)},t.previous=function(){Y(this)},t.select=function(n){P(this,null,n)},t.search=function(n,r,s){return _(n,r,s)}}return function e(t){this.options=t,this.id=e.instances=(e.instances||0)+1,this.name="autoComplete",this.wrapper=1,this.threshold=1,this.debounce=0,this.resultsList={position:"afterend",tag:"ul",maxResults:5},this.resultItem={tag:"li"},function(n){var r=n.name,s=n.options,o=n.resultsList,c=n.resultItem;for(var m in s)if(a(s[m])==="object")for(var h in n[m]||(n[m]={}),s[m])n[m][h]=s[m][h];else n[m]=s[m];n.selector=n.selector||"#"+r,o.destination=o.destination||n.selector,o.id=o.id||r+"_list_"+n.id,c.id=c.id||r+"_result",n.input=A(n.selector)}(this),oe.call(this,e),ee(this)}},typeof U=="object"&&typeof J!="undefined"?J.exports=H():typeof define=="function"&&define.amd?define(H):(R=typeof globalThis!="undefined"?globalThis:R||self).autoComplete=H()});var re=te(ne()),W=class{constructor(i){this.acByField=new Map;this.optionsByField=new Map;this.enabledFields=[];this.icons=[];this.looseSearch=!1;this.fields=i,Object.assign(globalThis,{fieldAutocomplete:this})}setup(i){this.enabledFields=i.ords,this.looseSearch=i.looseSearch,setTimeout(()=>{this._setupAcs(this.enabledFields),this._setupIcons(this.enabledFields)})}update(i){let{ord:a,options:p}=i;this.optionsByField.set(a,p);let b=this.acByField.get(a);b.list.hasAttribute("hidden")||b.start()}toggleAc(i){return z(this,null,function*(){let a=this.fields[i],p=yield a.element;this.enabledFields.includes(i)?(this.enabledFields.splice(this.enabledFields.indexOf(i),1),this.icons[i].classList.remove("enabled"),this._removeAc(i),globalThis.bridgeCommand(`update_ac_settings:{"ord" : ${i}, "val" : false}`)):(this.enabledFields.push(i),this.icons[i].classList.add("enabled"),yield this._addAc(i,p,a),globalThis.bridgeCommand(`update_ac_settings:{"ord" : ${i}, "val" : true}`))})}_setupAcs(i){if(this.acByField!=null)for(let a of this.acByField.keys())this._removeAc(a);this.acByField=new Map,this.optionsByField=new Map;for(let[a,p]of this.fields.entries())!i.includes(a)||p.element.then(b=>{this._addAc(a,b,p)})}_addAc(i,a,p){return z(this,null,function*(){var x,B,L,_;let b=a.getElementsByClassName("editing-area")[0],E=b.getElementsByClassName("rich-text-editable")[0].shadowRoot,k=E==null?void 0:E.querySelector("anki-editable"),A=b.querySelector("result-list-wrapper");if(!A){A=globalThis.document.createElement("span"),A.id="result-list-wrapper";let y;((B=(x=b.parentElement)==null?void 0:x.parentElement)==null?void 0:B.classList.contains("collapsible"))?(y=(_=(L=a.parentElement)==null?void 0:L.parentElement)==null?void 0:_.parentElement,y.style.display="block",y.style.position="relative"):y=b,y.appendChild(A);let T=document.createElement("style");T.innerHTML=be,y.insertBefore(T,A)}let v=new re.default({selector:()=>k,data:{src:()=>new Promise((y,T)=>{y(this.optionsByField.get(i)||[])}),filter:y=>y.filter(F=>F.value.replace(" ","")!="")},wrapper:!1,resultsList:{destination:()=>A,tag:"ul",class:"result-list",tabSelect:!0,noResults:!0,element:(y,T)=>{if(!T.results.length){let F=document.createElement("div");F.setAttribute("class","no-result"),F.innerHTML="<span>no results</span>",y.appendChild(F)}},maxResults:10},searchEngine:this.looseSearch?"loose":"strict",resultItem:{highlight:{render:!0}},events:{input:{init:y=>{globalThis.bridgeCommand(`fieldAutocomplete:{ "ord": ${i}, "text" : "" }`)},focus:y=>{v.start()},selection:y=>{let T=y.detail.selection.value;setTimeout(()=>{p.editingArea.content.set(T),p.editingArea.refocus(),setTimeout(()=>v.close())})}}},threshold:0,query:y=>y.replace("<br>","").replace("&nbsp;"," ")});v.input.addEventListener("input",()=>{v.disabled||globalThis.bridgeCommand(`fieldAutocomplete:{ "ord": ${i}, "text" : ${JSON.stringify(k.textContent)} }`)}),this.acByField.set(i,v),this.optionsByField.set(i,[])})}_removeAc(i){let a=this.acByField.get(i);a.unInit(),a.list.remove(),a.disabled=!0,this.acByField.delete(i),this.optionsByField.delete(i)}_setupIcons(i){for(let a of this.icons)a.remove();this.icons=[];for(let[a,p]of this.fields.entries())p.element.then(b=>{let E=this._addIconToField(a,b);this.icons.push(E),i.includes(a)?E.classList.add("enabled"):E.classList.add("disabled")})}_addIconToField(i,a){var E,k;let p=globalThis.document.createElement("span");p.classList.add("ac-icon"),p.addEventListener("click",()=>{this.toggleAc(i)});let b;return a.getElementsByClassName("field-state").length?b=a.getElementsByClassName("field-state")[0]:b=(k=(E=a.parentElement)==null?void 0:E.previousElementSibling)==null?void 0:k.getElementsByClassName("field-state")[0],b.insertBefore(p,b.querySelector("span")),p}},be=`
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

`;var ie=te(pe("anki/NoteEditor"));ie.lifecycle.onMount(({fields:d})=>{new W(d)});})();
