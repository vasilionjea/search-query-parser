(()=>{"use strict";const t=new Map([["[object Undefined]","undefined"],["[object Null]","null"],["[object Boolean]","boolean"],["[object String]","string"],["[object Number]","number"],["[object Array]","array"],["[object Set]","set"],["[object Object]","object"],["[object Map]","map"],["[object Function]","function"],["[object RegExp]","regexp"],["[object Error]","error"]]);function e(e){const s=Object.prototype.toString.call(e);return t.get(s)||""}function s(t){return null==t}function n(t){return"string"===e(t)}function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function o(t,e){const s={};for(const n of Object.keys(t))r(e,n)&&(s[n]=t[n]);return s}function i(t){return"function"==typeof structuredClone?structuredClone(t):JSON.parse(JSON.stringify(t))}function a(t,e){return!s(t)&&!s(e)&&function(t,e){let s=0,n=t.length-1;for(;s<=n;){const r=Math.floor((s+n)/2);if(e===t[r])return r;e>t[r]?s=r+1:n=r-1}return-1}(t,e)>-1}const c={a:!0,able:!0,about:!0,above:!0,across:!0,after:!0,again:!0,against:!0,ain:!0,all:!0,am:!0,an:!0,and:!0,any:!0,are:!0,aren:!0,"aren't":!0,as:!0,at:!0,be:!0,because:!0,been:!0,before:!0,being:!0,below:!0,between:!0,both:!0,but:!0,by:!0,can:!0,cannot:!0,couldn:!0,"couldn't":!0,d:!0,did:!0,didn:!0,"didn't":!0,do:!0,does:!0,doesn:!0,"doesn't":!0,doing:!0,don:!0,"don't":!0,down:!0,during:!0,each:!0,few:!0,for:!0,from:!0,further:!0,had:!0,hadn:!0,"hadn't":!0,has:!0,hasn:!0,"hasn't":!0,have:!0,haven:!0,"haven't":!0,having:!0,he:!0,her:!0,here:!0,hers:!0,herself:!0,him:!0,himself:!0,his:!0,how:!0,i:!0,if:!0,in:!0,into:!0,is:!0,isn:!0,"isn't":!0,it:!0,"it's":!0,its:!0,itself:!0,just:!0,ll:!0,m:!0,ma:!0,me:!0,mightn:!0,"mightn't":!0,more:!0,most:!0,mustn:!0,"mustn't":!0,my:!0,myself:!0,needn:!0,"needn't":!0,no:!0,nor:!0,not:!0,now:!0,o:!0,of:!0,off:!0,on:!0,once:!0,only:!0,or:!0,other:!0,our:!0,ours:!0,ourselves:!0,out:!0,over:!0,own:!0,re:!0,s:!0,same:!0,shan:!0,"shan't":!0,she:!0,"she's":!0,should:!0,"should've":!0,shouldn:!0,"shouldn't":!0,so:!0,some:!0,such:!0,t:!0,than:!0,that:!0,"that'll":!0,the:!0,their:!0,theirs:!0,them:!0,themselves:!0,then:!0,there:!0,these:!0,they:!0,this:!0,those:!0,through:!0,to:!0,too:!0,under:!0,until:!0,up:!0,ve:!0,very:!0,was:!0,wasn:!0,"wasn't":!0,we:!0,were:!0,weren:!0,"weren't":!0,what:!0,when:!0,where:!0,which:!0,while:!0,who:!0,whom:!0,why:!0,will:!0,with:!0,won:!0,"won't":!0,wouldn:!0,"wouldn't":!0,y:!0,you:!0,"you'd":!0,"you'll":!0,"you're":!0,"you've":!0,your:!0,yours:!0,yourself:!0,yourselves:!0};function l(t){return function(t){return Boolean(c[t])}(t)||!t.match(/(\w+)/g)}function h(t){const e=[];for(const s of t.split(/\s+/g))l(s)||e.push(s);return e.join(" ")}var u;!function(t){t.Invalid="Invalid",t.PresenceTerm="PresenceTerm",t.ExactTerm="ExactTerm",t.Term="Term"}(u||(u={}));const d={[u.PresenceTerm]:/(?<PresenceTerm>(?:(\s+)?([-+]))((\w{2,})|"(?:[^"]+)"))/,[u.ExactTerm]:/(?<ExactTerm>("(?:[^"]+)"))/,[u.Term]:/(?<Term>[^ ]+)/},m=new RegExp(`${d[u.PresenceTerm].source}|${d[u.ExactTerm].source}|${d[u.Term].source}`,"g"),p=/(?:[\^*()_}\]\\[{>\\<|\\/…`~}^]+)/gi;class f{constructor(t,e){this.type=t,this.text=e}}function g(t){return!t||!/\S+/g.test(t)}function b(t=""){return t.replace(/\s+/g," ").trim()}function v(t=""){return t.replace(/["]/g,"")}const y=/s$/i,S=/(ss|i?es)$/i;function w(t){const e=[];for(const s of t.split(/\s+/g))y.test(s)&&!S.test(s)?e.push(s.replace(y,"")):e.push(s);return e.join(" ")}var T;!function(t){t[t.Simple=0]="Simple",t[t.Negated=1]="Negated",t[t.Required=2]="Required"}(T||(T={}));class x{constructor(){this.parts=[]}add(t){this.parts.push(t)}}const E=new class{getTokenType(t={}){let e=u.Invalid;return t.PresenceTerm?e=u.PresenceTerm:t.ExactTerm?e=u.ExactTerm:t.Term&&(e=u.Term),e}tokenize(t){const e=t.replace(p,""),s=[];for(const t of e.matchAll(m))if(t&&t.groups){const e=this.getTokenType(t.groups),n=(t[0]||"").trim();n&&!l(n)&&s.push(new f(e,n))}return s}},C=new class{parsePresence(t){let e=b(t.text.toLocaleLowerCase()).trim(),s=T.Simple,n=!1;return e.startsWith("-")?s=T.Negated:e.startsWith("+")&&(s=T.Required),e=function(t=""){return t.replace(/^([-+]+)/,"")}(e),e.startsWith('"')&&(e=v(e).trim(),n=!0),e=h(e),e=w(e),{term:e,type:s,isPhrase:n}}parseExact(t){let e=v(t.text.toLocaleLowerCase());return e=b(e).trim(),e=h(e),e=w(e),{term:e,type:T.Simple,isPhrase:!0}}parseSimple(t){return{term:w(t.text.toLocaleLowerCase().trim()),type:T.Simple,isPhrase:!1}}parse(t){const e=new x;if(!t||!t.length)return e;for(const s of t){let t;switch(s.type){case u.PresenceTerm:t=this.parsePresence(s);break;case u.ExactTerm:t=this.parseExact(s);break;default:t=this.parseSimple(s)}t.term&&e.add(t)}return e}};function j(t){const e=t.concat(),s=[];if(!e.length)return s;let n=Number.parseInt(e.shift(),36);s.push(n);for(const t of e){const e=n+Number.parseInt(t,36);s.push(e),n=e}return s}function k(t){return`${function(t){const e=[];if(!t.length)return e;for(let s=0;s<t.length;s++){const n=t[s-1],r=t[s];if(0===s)e.push(r.toString(36));else{const t=r-n;e.push(t.toString(36))}}return e}(t.positions).join(",")}`}const I=/\s+/g;class L{constructor(t){this.docTable={},this.indexTable={},this.docTermCounts={},this.totalDocs=0,this.uidKey=t.uidKey||"id",this.fields=new Set(t.fields||[]),this.docSplitter=t.splitter||I}tokenizeText(t){return b(t).toLocaleLowerCase().split(this.docSplitter)}tokensWithPositions(t){const e=[];let s=0;for(const n of t)if(!l(n)){const t=w(n),r={term:t,position:s};s+=t.length+1,e.push(r)}return e}normalizeUid(t){let s=t;var r;return r=s,Number.isNaN(r)||"number"!==e(r)||(s=s.toString()),n(s)&&(s=s.trim()),s}index(t){if(s(t)||g(t))return this;this.fields.add(t);for(const e of Object.values(this.docTable))this.indexDocument(t,e);return this}indexDocument(t,e){var s;const o=this.normalizeUid(e[this.uidKey]);if(!n(o)||g(o))return;const i=e[t];if(!n(i)||g(i))return;const a=this.tokensWithPositions(this.tokenizeText(i));this.docTermCounts[o]+=a.length;for(const t of a){r(this.indexTable,t.term)||(this.indexTable[t.term]={});const e=this.getDocumentEntry(t.term,o);null===(s=e.positions)||void 0===s||s.push(t.position),this.indexTable[t.term][o]=k(e)}}addDocuments(t){if(!Array.isArray(t)||!t.length)return this;for(const e of t){const t=this.normalizeUid(e[this.uidKey]);n(t)&&!g(t)&&(r(this.docTable,t)||(this.totalDocs+=1),this.docTable[t]=e,this.docTermCounts[t]=0,this.fields.forEach((t=>this.indexDocument(t,e))))}return this}loadFromStorage({fields:t,documents:e,index:s}){const[n,r,o]=e;this.fields=new Set(t),this.totalDocs=n,this.docTable=r,this.docTermCounts=o,this.indexTable=s}toJSON(){return{fields:[...this.fields],documents:[this.totalDocs,i(this.docTable),i(this.docTermCounts)],index:i(this.indexTable)}}getDocument(t){return this.docTable[t]}getDocumentCount(){return this.totalDocs}getDocumentTermCount(t){return this.docTermCounts[t]||0}getTermEntry(t){return this.indexTable[t]||{}}hasTermEntry(t){return r(this.indexTable,t)}getDocumentEntry(t,e,s=!0){const n=this.getTermEntry(t);return s?(r=n[e])?{positions:j(r.split(","))}:{positions:[]}:n[e];var r}forEach(t){Object.keys(this.indexTable).forEach(t)}}function D({frequency:t,totalTerms:e},{totalDocs:s,totalTermDocs:n}){const r=function(t,e){return t/e}(t,e),o=function(t,e){return Math.log(t/e)}(s,n);return r*o}const P={prefixMatch:!1};class M{constructor(t,e={}){this.invertedIndex=t,this.config=Object.assign(Object.assign({},P),e)}matchesWithScores(t){const e={},s=Object.entries(t),n=this.invertedIndex.getDocumentCount(),r=s.length;for(const[t,o]of s){const s=this.invertedIndex.getDocumentTermCount(t),i=o.split(",").length;e[t]=D({frequency:i,totalTerms:s},{totalDocs:n,totalTermDocs:r})}return e}sumScores(...t){return t.reduce(((t=0,e=0)=>Number((t+e).toFixed(6))))}assignScores(t,e,s=!1){for(const[n,o]of Object.entries(e))s?r(t,n)&&(t[n]=this.sumScores(t[n],o)):t[n]=this.sumScores(t[n],o)}getSimpleMatches(t,e=!1){if(e){const e={};return this.invertedIndex.forEach((s=>{if(s.startsWith(t.term)){const t=this.matchesWithScores(this.invertedIndex.getTermEntry(s));this.assignScores(e,t)}})),e}return this.matchesWithScores(this.invertedIndex.getTermEntry(t.term))}getRequiredMatches(t){let e={};for(let s=0;s<t.length;s++){const n=t[s],r=n.isPhrase?this.getPhraseMatches(n):this.getSimpleMatches(n);if(!r){e={};break}if(0===s)e=r;else{const t=o(e,r);this.assignScores(t,r,!0),e=t}}return e}searchPhrase({candidates:t,terms:e}){const s={},n=e.length,r={},i=Object.keys(t);if(!i.length)return s;for(const t of i){for(const s of e){const e=this.invertedIndex.getDocumentEntry(s,t);r[s]=e.positions}const o=[];for(const i of r[e[0]]){o.push(i),s[t]=1;for(let i=1;i<n;i++){const n=e[i],c=o[o.length-1]+e[i-1].length+1;if(!a(r[n],c)){o.length=0;break}o.push(c),s[t]+=1}if(s[t]===n)break}s[t]!==n&&delete s[t]}return o(t,s)}getPhraseMatches(t){const e=t.term.split(/\s+/);if(1===e.length)return this.getSimpleMatches(t);const s=this.getRequiredMatches(e.map((t=>({term:t,isPhrase:!1}))));return this.searchPhrase({terms:e,candidates:s})}getMatches(t){const e={};for(const s of t){const t=s.type===T.Simple&&this.config.prefixMatch,n=s.isPhrase?this.getPhraseMatches(s):this.getSimpleMatches(s,t);s.type===T.Negated?Object.assign(e,n):this.assignScores(e,n)}return e}result(t,e){const s=function(t,e){const s={};for(const n of Object.keys(t))r(e,n)||(s[n]=t[n]);return s}(t,e);return Object.keys(s).sort(((t,e)=>s[e]-s[t])).map((t=>this.invertedIndex.getDocument(t)))}search(t){const e=function(t){const e={required:[],negated:[],simple:[]};for(const s of t)switch(s.type){case T.Required:e.required.push(s);break;case T.Negated:e.negated.push(s);break;case T.Simple:e.simple.push(s)}return e}(function(t=""){if(!t)return new x;const e=E.tokenize(t);return C.parse(e)}(t).parts),s=this.getMatches(e.negated);return e.required.length?this.result(this.getRequiredMatches(e.required),s):this.result(this.getMatches(e.simple),s)}}const O=new class{constructor(){const t=this.docsIndex=new L({uidKey:"id",fields:["body"],splitter:/\W+|\d+/g});this.docsSearch=function(t,e){return new M(t,{prefixMatch:!0})}(t),this.docsStorage=function(t,e={}){const n=e.storageKey||"lofi-dx:index";return{isSaved:function(){return Boolean(localStorage.getItem(n))},getKey:function(){return n},save:function({ttl:e=0}={}){return new Promise(((s,r)=>{try{const r={expiry:Date.now()+e,value:t.toJSON()};localStorage.setItem(n,JSON.stringify(r)),s(!0)}catch(t){console.error(t),r(t)}}))},load:function(){return new Promise(((e,r)=>{const o=localStorage.getItem(n);if(o)try{const r=JSON.parse(o);t.loadFromStorage(r.value||r),(s(r.expiry)||Date.now()>r.expiry)&&localStorage.removeItem(n),e(!0)}catch(t){console.error(t),r(t)}else e(!1)}))},clear:function(){return new Promise((t=>{localStorage.removeItem(n),t()}))}}}(t)}async fetch(){const t=performance.now(),e=await fetch("./data.json"),{data:s}=await e.json();this.docsIndex.addDocuments(s);const n=performance.now();console.log(`Loaded (init): ${n-t}ms`)}async loadStored(){const t=performance.now();await this.docsStorage.load();const e=performance.now();console.log(`Loaded (cache): ${e-t}ms`)}async loadDocuments(){this.docsStorage.isSaved()?await this.loadStored():(await this.fetch(),this.docsStorage.save({ttl:864e5}))}search(t=""){if(t.length<=1)return;const e=performance.now(),s=this.docsSearch.search(t),n=performance.now();return console.log(`Search took ${n-e}ms`),s}};class N extends Event{constructor(t){super("statechange"),this.state=t}}class q extends EventTarget{constructor(t={}){super(),this.state=t}setState(t){t!==this.state&&(this.state=t,this.dispatchEvent(new N(t)))}getState(){return Object.assign({},this.state)}}const $=t=>document.querySelector(t);class R extends q{constructor(t,e={}){var s;super(),this.element=t,this.props=e,null===(s=this.init)||void 0===s||s.call(this),this.render()}template(){return""}render(){var t;this.element.innerHTML=this.template(),null===(t=this.didMount)||void 0===t||t.call(this)}destroy(){var t;this.element.innerHTML="",null===(t=this.didUnmount)||void 0===t||t.call(this),this.props={}}}class z extends R{init(){this.handleInput=this.onInputChange.bind(this),this.handleReset=this.reset.bind(this)}didMount(){this.input=this.element.querySelector("input"),this.clearButton=this.element.querySelector(".btn-clear"),this.input.addEventListener("input",this.handleInput),this.clearButton.addEventListener("click",this.handleReset)}onInputChange(){const{value:t}=this.input,{onInputValue:e,onInputClear:s}=this.props;t?null==e||e(t):null==s||s()}setValue(t){this.input.value=t,this.onInputChange()}reset(){var t;this.setValue(""),null===(t=this.input)||void 0===t||t.focus()}template(){const t="prompt",e="searchInput";return`\n      <label id="${t}" for="${e}" class="visuallyhidden">Search national parks</label>\n      <input type="search" id="${e}" placeholder="Search for something..." aria-labelledby="${t}" autocorrect="off" spellcheck="false" autocapitalize="off">\n      <button class="btn btn-icon btn-clear" aria-label="Clear search">${this.clearIcon()}</button>\n    `}clearIcon(){return'\n      <svg\n        aria-hidden="true"\n        viewBox="0 0 24 24"\n        focusable="false"\n        style="pointer-events:none; display:block; width:inherit; height:inherit">\n        <g>\n          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>\n        </g>\n      </svg>\n    '}destroy(){var t,e;null===(t=this.input)||void 0===t||t.removeEventListener("input",this.handleInput),null===(e=this.clearButton)||void 0===e||e.removeEventListener("click",this.handleReset),this.input=this.clearButton=null,super.destroy()}}const W="expanded";class B extends R{init(){this.handleClick=this.onClick.bind(this)}didMount(){this.element.addEventListener("click",this.handleClick)}onClick(t){const e=t.target;if(e.classList.contains("see-more"))this.toggleArticle(e,e.parentElement);else if(e.classList.contains("suggestion")){const t=e.textContent;t&&this.props.onSuggestionClick(t)}}toggleArticle(t,e){var s;e.classList.contains(W)?(e.classList.remove(W),t.textContent="read more",null===(s=e.firstElementChild)||void 0===s||s.scrollIntoView()):(e.classList.add(W),t.textContent="read less")}template(){const{resultList:t}=this.props;return t?t.length?this.resultsHtml():this.noResultsHtml():""}resultsHtml(){var t;return null===(t=this.props.resultList)||void 0===t?void 0:t.reduce(((t,e)=>t+`<article>${e.title}${e.body}</article>`),"")}noResultsHtml(){return'\n      <div class="no-results">\n        <p>No results found.</p>\n        <div class="query-suggestions">\n          <p>Suggestions</p>\n          <button class="btn pill pill--outlined suggestion">camping waterfalls -Teton</button>\n          <button class="btn pill pill--outlined suggestion">"sierra nevada" +mojave</button>\n          <button class="btn pill pill--outlined suggestion">southwestern Utah</button>\n        </div>\n      </div>\n    '}destroy(){this.element.removeEventListener("click",this.handleClick),super.destroy()}}new class extends q{constructor(t){super(),this.appService=t,this.inputElement=$(".search-input"),this.resultsElement=$(".search-results"),this.statsElement=$(".search-stats"),this.debouncedSearch=function(t,e=0,s){let n=null;return(...r)=>{n&&window.clearTimeout(n),n=window.setTimeout((()=>t.apply(s,r)),e)}}(this.search,150,this),this.inputComponent=new z(this.inputElement,{onInputValue:t=>this.debouncedSearch(t),onInputClear:()=>this.setState({resultList:null})}),this.addEventListener("statechange",(()=>{this.renderResults(),this.renderStats()}))}async start(){try{await this.appService.loadDocuments(),this.inputComponent.setValue('"sierra nevada" california')}catch(t){console.error(t)}}search(t){const e=this.appService.search(t);this.setState({resultList:e})}renderResults(){var t,e;const{resultList:s}=this.getState();null===(e=null===(t=this.resultsComponent)||void 0===t?void 0:t.destroy)||void 0===e||e.call(t),s&&(this.resultsComponent=new B(this.resultsElement,{resultList:s,onSuggestionClick:t=>this.inputComponent.setValue(t)}))}renderStats(){const{resultList:t}=this.getState();let e="";if(!t)return void(this.statsElement.textContent=e);const s=t.length;0===s?e="no results found":1===s?e="1 result found":s>1&&(e=`${s} results found`),this.statsElement.textContent=e}}(O).start()})();