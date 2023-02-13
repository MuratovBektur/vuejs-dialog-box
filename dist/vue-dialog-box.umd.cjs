(function(b,_){typeof exports=="object"&&typeof module<"u"?module.exports=_(require("vue")):typeof define=="function"&&define.amd?define(["vue"],_):(b=typeof globalThis<"u"?globalThis:b||self,b.VueDialogBox=_(b.Vue))})(this,function(b){"use strict";var _=(n=>(n.ALERT="alert",n.PROMPT="prompt",n.CONFIRM="confirm",n))(_||{}),v=(n=>(n.MAIN="main",n.CLOSE="close",n.CONFIG="config",n))(v||{}),P={},$={get exports(){return P},set exports(n){P=n}};(function(n){var t=Object.prototype.hasOwnProperty,e="~";function p(){}Object.create&&(p.prototype=Object.create(null),new p().__proto__||(e=!1));function d(o,r,s){this.fn=o,this.context=r,this.once=s||!1}function w(o,r,s,c,l){if(typeof s!="function")throw new TypeError("The listener must be a function");var u=new d(s,c||o,l),a=e?e+r:r;return o._events[a]?o._events[a].fn?o._events[a]=[o._events[a],u]:o._events[a].push(u):(o._events[a]=u,o._eventsCount++),o}function C(o,r){--o._eventsCount===0?o._events=new p:delete o._events[r]}function m(){this._events=new p,this._eventsCount=0}m.prototype.eventNames=function(){var r=[],s,c;if(this._eventsCount===0)return r;for(c in s=this._events)t.call(s,c)&&r.push(e?c.slice(1):c);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(s)):r},m.prototype.listeners=function(r){var s=e?e+r:r,c=this._events[s];if(!c)return[];if(c.fn)return[c.fn];for(var l=0,u=c.length,a=new Array(u);l<u;l++)a[l]=c[l].fn;return a},m.prototype.listenerCount=function(r){var s=e?e+r:r,c=this._events[s];return c?c.fn?1:c.length:0},m.prototype.emit=function(r,s,c,l,u,a){var h=e?e+r:r;if(!this._events[h])return!1;var i=this._events[h],y=arguments.length,E,f;if(i.fn){switch(i.once&&this.removeListener(r,i.fn,void 0,!0),y){case 1:return i.fn.call(i.context),!0;case 2:return i.fn.call(i.context,s),!0;case 3:return i.fn.call(i.context,s,c),!0;case 4:return i.fn.call(i.context,s,c,l),!0;case 5:return i.fn.call(i.context,s,c,l,u),!0;case 6:return i.fn.call(i.context,s,c,l,u,a),!0}for(f=1,E=new Array(y-1);f<y;f++)E[f-1]=arguments[f];i.fn.apply(i.context,E)}else{var K=i.length,O;for(f=0;f<K;f++)switch(i[f].once&&this.removeListener(r,i[f].fn,void 0,!0),y){case 1:i[f].fn.call(i[f].context);break;case 2:i[f].fn.call(i[f].context,s);break;case 3:i[f].fn.call(i[f].context,s,c);break;case 4:i[f].fn.call(i[f].context,s,c,l);break;default:if(!E)for(O=1,E=new Array(y-1);O<y;O++)E[O-1]=arguments[O];i[f].fn.apply(i[f].context,E)}}return!0},m.prototype.on=function(r,s,c){return w(this,r,s,c,!1)},m.prototype.once=function(r,s,c){return w(this,r,s,c,!0)},m.prototype.removeListener=function(r,s,c,l){var u=e?e+r:r;if(!this._events[u])return this;if(!s)return C(this,u),this;var a=this._events[u];if(a.fn)a.fn===s&&(!l||a.once)&&(!c||a.context===c)&&C(this,u);else{for(var h=0,i=[],y=a.length;h<y;h++)(a[h].fn!==s||l&&!a[h].once||c&&a[h].context!==c)&&i.push(a[h]);i.length?this._events[u]=i.length===1?i[0]:i:C(this,u)}return this},m.prototype.removeAllListeners=function(r){var s;return r?(s=e?e+r:r,this._events[s]&&C(this,s)):(this._events=new p,this._eventsCount=0),this},m.prototype.off=m.prototype.removeListener,m.prototype.addListener=m.prototype.on,m.prefixed=e,m.EventEmitter=m,n.exports=m})($);const T=P,I=new T,M=new T,D=new T,B=new T,N={mainEventEmitter:I,alertEmitter:M,promptEmitter:D,confirmEmitter:B},{mainEventEmitter:L}=N,F=b.extend({data(){return{type:null,eventEmitter:L,DialogType:_,form:{alert:{title:"Are you sure?",okText:"Yes"},prompt:{title:"Are you sure?",okText:"Yes",cancelText:"No",text:"",placeholder:""},confirm:{title:"Are you sure?",okText:"Yes",cancelText:"No"}}}},mounted(){this.disableScroll(),L.on(v.MAIN,({eventEmitter:n,type:t})=>{if(L!==this.eventEmitter)throw"close another dialog box";this.eventEmitter=n,this.type=t,this.subscribeEvents()})},beforeDestroy(){this.onDestroy()},methods:{onDestroy(){this.enableScroll(),this.form.prompt.text=""},subscribeEvents(){this.eventEmitter.on(v.CONFIG,n=>{if(!(!n||!this.type))for(let t in n){const e=n[t];e&&(this.form[this.type][t]=e)}}),this.eventEmitter.on(v.CLOSE,()=>{this.type=null,this.eventEmitter=L})},disableScroll(){document.body.style.overflowY="hidden"},enableScroll(){document.body.style.overflowY=""},onConfirm(){let n;this.type===_.PROMPT&&(n=this.form.prompt.text),this.eventEmitter.emit("confirm",n),this.onDestroy()},onCancel(){this.eventEmitter.emit("cancel"),this.onDestroy()}}}),V="";function Y(n,t,e,p,d,w,C,m){var o=typeof n=="function"?n.options:n;t&&(o.render=t,o.staticRenderFns=e,o._compiled=!0),p&&(o.functional=!0),w&&(o._scopeId="data-v-"+w);var r;if(C?(r=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!l&&typeof __VUE_SSR_CONTEXT__<"u"&&(l=__VUE_SSR_CONTEXT__),d&&d.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(C)},o._ssrRegister=r):d&&(r=m?function(){d.call(this,(o.functional?this.parent:this).$root.$options.shadowRoot)}:d),r)if(o.functional){o._injectStyles=r;var s=o.render;o.render=function(u,a){return r.call(a),s(u,a)}}else{var c=o.beforeCreate;o.beforeCreate=c?[].concat(c,r):[r]}return{exports:n,options:o}}var G=function(){var t=this,e=t._self._c;return t._self._setupProxy,t.type?e("div",{staticClass:"confirm-modal"},[e("div",{staticClass:"confirm-modal__content"},[t.type===t.DialogType.ALERT?[e("div",{staticClass:"confirm-modal__title"},[t._v(" "+t._s(t.form.alert.title)+" ")]),e("div",{staticClass:"confirm-modal__btn-container"},[e("button",{staticClass:"confirm-modal__btn confirm-modal__btn_center confirm-modal__btn_active",on:{click:t.onConfirm}},[t._v(" "+t._s(t.form.alert.okText)+" ")])])]:t.type===t.DialogType.PROMPT?[e("div",{staticClass:"confirm-modal__title"},[t._v(" "+t._s(t.form.prompt.title)+" ")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.prompt.text,expression:"form.prompt.text"}],staticClass:"confirm-modal__input",attrs:{type:"text",placeholder:t.form.prompt.placeholder},domProps:{value:t.form.prompt.text},on:{input:function(p){p.target.composing||t.$set(t.form.prompt,"text",p.target.value)}}})]),e("div",{staticClass:"confirm-modal__btn-container"},[e("button",{staticClass:"confirm-modal__btn",on:{click:t.onConfirm}},[t._v(" "+t._s(t.form.prompt.okText)+" ")]),e("button",{staticClass:"confirm-modal__btn confirm-modal__btn_active",on:{click:t.onCancel}},[t._v(" "+t._s(t.form.prompt.cancelText)+" ")])])]:t.type===t.DialogType.CONFIRM?[e("div",{staticClass:"confirm-modal__title"},[t._v(" "+t._s(t.form.confirm.title)+" ")]),e("div",{staticClass:"confirm-modal__btn-container"},[e("button",{staticClass:"confirm-modal__btn",on:{click:t.onConfirm}},[t._v(" "+t._s(t.form.confirm.okText)+" ")]),e("button",{staticClass:"confirm-modal__btn confirm-modal__btn_active",on:{click:t.onCancel}},[t._v(" "+t._s(t.form.confirm.cancelText)+" ")])])]:t._e()],2)]):t._e()},U=[],X=Y(F,G,U,!1,null,"1908b5d8",null,null);const S=X.exports;function j(){const n=document.createElement("div");return document.body.appendChild(n),n}function q(n,t,e){const p=j();new n({parent:t,render:d=>d(e)}).$mount(p)}const{mainEventEmitter:k,alertEmitter:A,promptEmitter:x,confirmEmitter:g}=N;function R(n,t,e,p){n.emit(v.MAIN,{eventEmitter:t,type:e}),t.emit("config",p)}const z={alert:n=>(R(k,A,_.ALERT,n),new Promise(t=>{try{A.on("confirm",()=>{A.emit(v.CLOSE),t(!0)})}catch(e){console.error(e)}})),prompt:n=>(R(k,x,_.PROMPT,n),new Promise(t=>{try{x.on("confirm",e=>{x.emit(v.CLOSE),t(e??"")}),x.on("cancel",()=>{x.emit(v.CLOSE),t(!1)})}catch(e){console.error(e)}})),confirm:n=>(R(k,g,_.CONFIRM,n),new Promise(t=>{try{g.on("confirm",()=>{g.emit(v.CLOSE),t(!0)}),g.on("cancel",()=>{g.emit(v.CLOSE),t(!1)})}catch(e){console.error(e)}}))};return{install(n){let t=!1;Object.defineProperty(n.prototype,"$dialogBox",{get:function(){const e=this;if(e instanceof n){const p=e.$root;t||(q(n,p,S),t=!0)}return z}}),n.component("vue-dialog-box",S)}}});
