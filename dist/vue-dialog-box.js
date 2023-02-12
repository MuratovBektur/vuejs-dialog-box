import S from "vue";
var w = {}, O = {
  get exports() {
    return w;
  },
  set exports(c) {
    w = c;
  }
};
(function(c) {
  var i = Object.prototype.hasOwnProperty, s = "~";
  function p() {
  }
  Object.create && (p.prototype = /* @__PURE__ */ Object.create(null), new p().__proto__ || (s = !1));
  function h(t, e, o) {
    this.fn = t, this.context = e, this.once = o || !1;
  }
  function C(t, e, o, r, f) {
    if (typeof o != "function")
      throw new TypeError("The listener must be a function");
    var _ = new h(o, r || t, f), l = s ? s + e : e;
    return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], _] : t._events[l].push(_) : (t._events[l] = _, t._eventsCount++), t;
  }
  function y(t, e) {
    --t._eventsCount === 0 ? t._events = new p() : delete t._events[e];
  }
  function u() {
    this._events = new p(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var e = [], o, r;
    if (this._eventsCount === 0)
      return e;
    for (r in o = this._events)
      i.call(o, r) && e.push(s ? r.slice(1) : r);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(o)) : e;
  }, u.prototype.listeners = function(e) {
    var o = s ? s + e : e, r = this._events[o];
    if (!r)
      return [];
    if (r.fn)
      return [r.fn];
    for (var f = 0, _ = r.length, l = new Array(_); f < _; f++)
      l[f] = r[f].fn;
    return l;
  }, u.prototype.listenerCount = function(e) {
    var o = s ? s + e : e, r = this._events[o];
    return r ? r.fn ? 1 : r.length : 0;
  }, u.prototype.emit = function(e, o, r, f, _, l) {
    var d = s ? s + e : e;
    if (!this._events[d])
      return !1;
    var n = this._events[d], m = arguments.length, b, a;
    if (n.fn) {
      switch (n.once && this.removeListener(e, n.fn, void 0, !0), m) {
        case 1:
          return n.fn.call(n.context), !0;
        case 2:
          return n.fn.call(n.context, o), !0;
        case 3:
          return n.fn.call(n.context, o, r), !0;
        case 4:
          return n.fn.call(n.context, o, r, f), !0;
        case 5:
          return n.fn.call(n.context, o, r, f, _), !0;
        case 6:
          return n.fn.call(n.context, o, r, f, _, l), !0;
      }
      for (a = 1, b = new Array(m - 1); a < m; a++)
        b[a - 1] = arguments[a];
      n.fn.apply(n.context, b);
    } else {
      var E = n.length, g;
      for (a = 0; a < E; a++)
        switch (n[a].once && this.removeListener(e, n[a].fn, void 0, !0), m) {
          case 1:
            n[a].fn.call(n[a].context);
            break;
          case 2:
            n[a].fn.call(n[a].context, o);
            break;
          case 3:
            n[a].fn.call(n[a].context, o, r);
            break;
          case 4:
            n[a].fn.call(n[a].context, o, r, f);
            break;
          default:
            if (!b)
              for (g = 1, b = new Array(m - 1); g < m; g++)
                b[g - 1] = arguments[g];
            n[a].fn.apply(n[a].context, b);
        }
    }
    return !0;
  }, u.prototype.on = function(e, o, r) {
    return C(this, e, o, r, !1);
  }, u.prototype.once = function(e, o, r) {
    return C(this, e, o, r, !0);
  }, u.prototype.removeListener = function(e, o, r, f) {
    var _ = s ? s + e : e;
    if (!this._events[_])
      return this;
    if (!o)
      return y(this, _), this;
    var l = this._events[_];
    if (l.fn)
      l.fn === o && (!f || l.once) && (!r || l.context === r) && y(this, _);
    else {
      for (var d = 0, n = [], m = l.length; d < m; d++)
        (l[d].fn !== o || f && !l[d].once || r && l[d].context !== r) && n.push(l[d]);
      n.length ? this._events[_] = n.length === 1 ? n[0] : n : y(this, _);
    }
    return this;
  }, u.prototype.removeAllListeners = function(e) {
    var o;
    return e ? (o = s ? s + e : e, this._events[o] && y(this, o)) : (this._events = new p(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = s, u.EventEmitter = u, c.exports = u;
})(O);
const T = w, v = new T(), k = S.extend({
  data() {
    return {
      canShow: !1,
      form: {
        title: "Are you sure?",
        okText: "Yes",
        cancelText: "No"
      }
    };
  },
  mounted() {
    this.disableScroll(), v.on("config", (c) => {
      if (c)
        for (let i in c) {
          const s = c[i];
          s && (this.form[i] = s);
        }
    }), v.on("open", () => {
      this.canShow = !0;
    }), v.on("close", () => {
      this.canShow = !1;
    });
  },
  beforeDestroy() {
    this.enableScroll();
  },
  methods: {
    disableScroll() {
      document.body.style.overflowY = "hidden";
    },
    enableScroll() {
      document.body.style.overflowY = "auto";
    },
    onConfirm() {
      v.emit("confirm");
    },
    onCancel() {
      v.emit("cancel");
    }
  }
});
function L(c, i, s, p, h, C, y, u) {
  var t = typeof c == "function" ? c.options : c;
  i && (t.render = i, t.staticRenderFns = s, t._compiled = !0), p && (t.functional = !0), C && (t._scopeId = "data-v-" + C);
  var e;
  if (y ? (e = function(f) {
    f = f || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !f && typeof __VUE_SSR_CONTEXT__ < "u" && (f = __VUE_SSR_CONTEXT__), h && h.call(this, f), f && f._registeredComponents && f._registeredComponents.add(y);
  }, t._ssrRegister = e) : h && (e = u ? function() {
    h.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : h), e)
    if (t.functional) {
      t._injectStyles = e;
      var o = t.render;
      t.render = function(_, l) {
        return e.call(l), o(_, l);
      };
    } else {
      var r = t.beforeCreate;
      t.beforeCreate = r ? [].concat(r, e) : [e];
    }
  return {
    exports: c,
    options: t
  };
}
var $ = function() {
  var i = this, s = i._self._c;
  return i._self._setupProxy, i.canShow ? s("div", { staticClass: "confirm-modal" }, [s("div", { staticClass: "confirm-modal__content" }, [s("div", { staticClass: "confirm-modal__title" }, [i._v(" " + i._s(i.form.title) + " ")]), s("div", { staticClass: "confirm-modal__btn-container" }, [s("button", { staticClass: "confirm-modal__btn", on: { click: i.onConfirm } }, [i._v(" " + i._s(i.form.okText) + " ")]), s("button", { staticClass: "confirm-modal__btn confirm-modal__btn_active", on: { click: i.onCancel } }, [i._v(" " + i._s(i.form.cancelText) + " ")])])])]) : i._e();
}, A = [], P = /* @__PURE__ */ L(
  k,
  $,
  A,
  !1,
  null,
  "d036c0e3",
  null,
  null
);
const x = P.exports;
function R() {
  const c = document.createElement("div");
  return document.body.appendChild(c), c;
}
function B(c, i, s) {
  const p = R();
  new c({
    parent: i,
    render: (h) => h(s)
  }).$mount(p);
}
const N = {
  confirm: (c) => (v.emit("config", c), v.emit("open"), new Promise((i) => {
    try {
      v.on("confirm", () => {
        i(!0), v.emit("close");
      }), v.on("cancel", () => {
        i(!1), v.emit("close");
      });
    } catch (s) {
      console.error(s);
    }
  }))
}, Y = {
  install(c) {
    Object.defineProperty(c.prototype, "$dialogBox", {
      get: function() {
        const i = this;
        if (i instanceof c) {
          const s = i.$root;
          B(c, s, x);
        }
        return N;
      }
    }), c.component("vue-dialog-box", x);
  }
};
export {
  Y as default
};
