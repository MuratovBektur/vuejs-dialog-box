(function(g,y){typeof exports=="object"&&typeof module<"u"?module.exports=y(require("vue")):typeof define=="function"&&define.amd?define(["vue"],y):(g=typeof globalThis<"u"?globalThis:g||self,g.VueDialogBox=y(g.Vue))})(this,function(g){"use strict";var y={},T={get exports(){return y},set exports(f){y=f}};(function(f){var i=Object.prototype.hasOwnProperty,s="~";function v(){}Object.create&&(v.prototype=Object.create(null),new v().__proto__||(s=!1));function d(t,e,o){this.fn=t,this.context=e,this.once=o||!1}function w(t,e,o,r,c){if(typeof o!="function")throw new TypeError("The listener must be a function");var _=new d(o,r||t,c),l=s?s+e:e;return t._events[l]?t._events[l].fn?t._events[l]=[t._events[l],_]:t._events[l].push(_):(t._events[l]=_,t._eventsCount++),t}function b(t,e){--t._eventsCount===0?t._events=new v:delete t._events[e]}function u(){this._events=new v,this._eventsCount=0}u.prototype.eventNames=function(){var e=[],o,r;if(this._eventsCount===0)return e;for(r in o=this._events)i.call(o,r)&&e.push(s?r.slice(1):r);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(o)):e},u.prototype.listeners=function(e){var o=s?s+e:e,r=this._events[o];if(!r)return[];if(r.fn)return[r.fn];for(var c=0,_=r.length,l=new Array(_);c<_;c++)l[c]=r[c].fn;return l},u.prototype.listenerCount=function(e){var o=s?s+e:e,r=this._events[o];return r?r.fn?1:r.length:0},u.prototype.emit=function(e,o,r,c,_,l){var h=s?s+e:e;if(!this._events[h])return!1;var n=this._events[h],m=arguments.length,C,a;if(n.fn){switch(n.once&&this.removeListener(e,n.fn,void 0,!0),m){case 1:return n.fn.call(n.context),!0;case 2:return n.fn.call(n.context,o),!0;case 3:return n.fn.call(n.context,o,r),!0;case 4:return n.fn.call(n.context,o,r,c),!0;case 5:return n.fn.call(n.context,o,r,c,_),!0;case 6:return n.fn.call(n.context,o,r,c,_,l),!0}for(a=1,C=new Array(m-1);a<m;a++)C[a-1]=arguments[a];n.fn.apply(n.context,C)}else{var N=n.length,x;for(a=0;a<N;a++)switch(n[a].once&&this.removeListener(e,n[a].fn,void 0,!0),m){case 1:n[a].fn.call(n[a].context);break;case 2:n[a].fn.call(n[a].context,o);break;case 3:n[a].fn.call(n[a].context,o,r);break;case 4:n[a].fn.call(n[a].context,o,r,c);break;default:if(!C)for(x=1,C=new Array(m-1);x<m;x++)C[x-1]=arguments[x];n[a].fn.apply(n[a].context,C)}}return!0},u.prototype.on=function(e,o,r){return w(this,e,o,r,!1)},u.prototype.once=function(e,o,r){return w(this,e,o,r,!0)},u.prototype.removeListener=function(e,o,r,c){var _=s?s+e:e;if(!this._events[_])return this;if(!o)return b(this,_),this;var l=this._events[_];if(l.fn)l.fn===o&&(!c||l.once)&&(!r||l.context===r)&&b(this,_);else{for(var h=0,n=[],m=l.length;h<m;h++)(l[h].fn!==o||c&&!l[h].once||r&&l[h].context!==r)&&n.push(l[h]);n.length?this._events[_]=n.length===1?n[0]:n:b(this,_)}return this},u.prototype.removeAllListeners=function(e){var o;return e?(o=s?s+e:e,this._events[o]&&b(this,o)):(this._events=new v,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=s,u.EventEmitter=u,f.exports=u})(T);const S=y,p=new S,O=g.extend({data(){return{canShow:!1,form:{title:"Are you sure?",okText:"Yes",cancelText:"No"}}},mounted(){this.disableScroll(),p.on("config",f=>{if(f)for(let i in f){const s=f[i];s&&(this.form[i]=s)}}),p.on("open",()=>{this.canShow=!0}),p.on("close",()=>{this.canShow=!1})},beforeDestroy(){this.enableScroll()},methods:{disableScroll(){document.body.style.overflowY="hidden"},enableScroll(){document.body.style.overflowY="auto"},onConfirm(){p.emit("confirm")},onCancel(){p.emit("cancel")}}}),D="";function k(f,i,s,v,d,w,b,u){var t=typeof f=="function"?f.options:f;i&&(t.render=i,t.staticRenderFns=s,t._compiled=!0),v&&(t.functional=!0),w&&(t._scopeId="data-v-"+w);var e;if(b?(e=function(c){c=c||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!c&&typeof __VUE_SSR_CONTEXT__<"u"&&(c=__VUE_SSR_CONTEXT__),d&&d.call(this,c),c&&c._registeredComponents&&c._registeredComponents.add(b)},t._ssrRegister=e):d&&(e=u?function(){d.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:d),e)if(t.functional){t._injectStyles=e;var o=t.render;t.render=function(_,l){return e.call(l),o(_,l)}}else{var r=t.beforeCreate;t.beforeCreate=r?[].concat(r,e):[e]}return{exports:f,options:t}}var L=function(){var i=this,s=i._self._c;return i._self._setupProxy,i.canShow?s("div",{staticClass:"confirm-modal"},[s("div",{staticClass:"confirm-modal__content"},[s("div",{staticClass:"confirm-modal__title"},[i._v(" "+i._s(i.form.title)+" ")]),s("div",{staticClass:"confirm-modal__btn-container"},[s("button",{staticClass:"confirm-modal__btn",on:{click:i.onConfirm}},[i._v(" "+i._s(i.form.okText)+" ")]),s("button",{staticClass:"confirm-modal__btn confirm-modal__btn_active",on:{click:i.onCancel}},[i._v(" "+i._s(i.form.cancelText)+" ")])])])]):i._e()},$=[],A=k(O,L,$,!1,null,"fb2ab269",null,null);const E=A.exports;function B(){const f=document.createElement("div");return document.body.appendChild(f),f}function P(f,i,s){const v=B();new f({parent:i,render:d=>d(s)}).$mount(v)}const R={confirm:f=>(p.emit("config",f),p.emit("open"),new Promise(i=>{try{p.on("confirm",()=>{i(!0),p.emit("close")}),p.on("cancel",()=>{i(!1),p.emit("close")})}catch(s){console.error(s)}}))};return{install(f){Object.defineProperty(f.prototype,"$dialogBox",{get:function(){const i=this;if(i instanceof f){const s=i.$root;P(f,s,E)}return R}}),f.component("vue-dialog-box",E)}}});
