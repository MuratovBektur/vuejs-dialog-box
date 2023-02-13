import $ from "vue";
var E = /* @__PURE__ */ ((n) => (n.ALERT = "alert", n.PROMPT = "prompt", n.CONFIRM = "confirm", n))(E || {}), p = /* @__PURE__ */ ((n) => (n.MAIN = "main", n.CLOSE = "close", n.CONFIG = "config", n))(p || {}), R = {}, M = {
  get exports() {
    return R;
  },
  set exports(n) {
    R = n;
  }
};
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function _() {
  }
  Object.create && (_.prototype = /* @__PURE__ */ Object.create(null), new _().__proto__ || (e = !1));
  function v(o, r, s) {
    this.fn = o, this.context = r, this.once = s || !1;
  }
  function b(o, r, s, c, a) {
    if (typeof s != "function")
      throw new TypeError("The listener must be a function");
    var u = new v(s, c || o, a), l = e ? e + r : r;
    return o._events[l] ? o._events[l].fn ? o._events[l] = [o._events[l], u] : o._events[l].push(u) : (o._events[l] = u, o._eventsCount++), o;
  }
  function y(o, r) {
    --o._eventsCount === 0 ? o._events = new _() : delete o._events[r];
  }
  function m() {
    this._events = new _(), this._eventsCount = 0;
  }
  m.prototype.eventNames = function() {
    var r = [], s, c;
    if (this._eventsCount === 0)
      return r;
    for (c in s = this._events)
      t.call(s, c) && r.push(e ? c.slice(1) : c);
    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(s)) : r;
  }, m.prototype.listeners = function(r) {
    var s = e ? e + r : r, c = this._events[s];
    if (!c)
      return [];
    if (c.fn)
      return [c.fn];
    for (var a = 0, u = c.length, l = new Array(u); a < u; a++)
      l[a] = c[a].fn;
    return l;
  }, m.prototype.listenerCount = function(r) {
    var s = e ? e + r : r, c = this._events[s];
    return c ? c.fn ? 1 : c.length : 0;
  }, m.prototype.emit = function(r, s, c, a, u, l) {
    var d = e ? e + r : r;
    if (!this._events[d])
      return !1;
    var i = this._events[d], h = arguments.length, C, f;
    if (i.fn) {
      switch (i.once && this.removeListener(r, i.fn, void 0, !0), h) {
        case 1:
          return i.fn.call(i.context), !0;
        case 2:
          return i.fn.call(i.context, s), !0;
        case 3:
          return i.fn.call(i.context, s, c), !0;
        case 4:
          return i.fn.call(i.context, s, c, a), !0;
        case 5:
          return i.fn.call(i.context, s, c, a, u), !0;
        case 6:
          return i.fn.call(i.context, s, c, a, u, l), !0;
      }
      for (f = 1, C = new Array(h - 1); f < h; f++)
        C[f - 1] = arguments[f];
      i.fn.apply(i.context, C);
    } else {
      var S = i.length, x;
      for (f = 0; f < S; f++)
        switch (i[f].once && this.removeListener(r, i[f].fn, void 0, !0), h) {
          case 1:
            i[f].fn.call(i[f].context);
            break;
          case 2:
            i[f].fn.call(i[f].context, s);
            break;
          case 3:
            i[f].fn.call(i[f].context, s, c);
            break;
          case 4:
            i[f].fn.call(i[f].context, s, c, a);
            break;
          default:
            if (!C)
              for (x = 1, C = new Array(h - 1); x < h; x++)
                C[x - 1] = arguments[x];
            i[f].fn.apply(i[f].context, C);
        }
    }
    return !0;
  }, m.prototype.on = function(r, s, c) {
    return b(this, r, s, c, !1);
  }, m.prototype.once = function(r, s, c) {
    return b(this, r, s, c, !0);
  }, m.prototype.removeListener = function(r, s, c, a) {
    var u = e ? e + r : r;
    if (!this._events[u])
      return this;
    if (!s)
      return y(this, u), this;
    var l = this._events[u];
    if (l.fn)
      l.fn === s && (!a || l.once) && (!c || l.context === c) && y(this, u);
    else {
      for (var d = 0, i = [], h = l.length; d < h; d++)
        (l[d].fn !== s || a && !l[d].once || c && l[d].context !== c) && i.push(l[d]);
      i.length ? this._events[u] = i.length === 1 ? i[0] : i : y(this, u);
    }
    return this;
  }, m.prototype.removeAllListeners = function(r) {
    var s;
    return r ? (s = e ? e + r : r, this._events[s] && y(this, s)) : (this._events = new _(), this._eventsCount = 0), this;
  }, m.prototype.off = m.prototype.removeListener, m.prototype.addListener = m.prototype.on, m.prefixed = e, m.EventEmitter = m, n.exports = m;
})(M);
const T = R, I = new T(), F = new T(), B = new T(), Y = new T(), N = { mainEventEmitter: I, alertEmitter: F, promptEmitter: B, confirmEmitter: Y }, { mainEventEmitter: O } = N, D = $.extend({
  data() {
    return {
      type: null,
      eventEmitter: O,
      DialogType: E,
      form: {
        alert: {
          title: "Are you sure?",
          okText: "Yes"
        },
        prompt: {
          title: "Are you sure?",
          okText: "Yes",
          cancelText: "No",
          text: "",
          placeholder: ""
        },
        confirm: {
          title: "Are you sure?",
          okText: "Yes",
          cancelText: "No"
        }
      }
    };
  },
  mounted() {
    this.disableScroll(), O.on(
      p.MAIN,
      ({
        eventEmitter: n,
        type: t
      }) => {
        if (O !== this.eventEmitter)
          throw "close another dialog box";
        this.eventEmitter = n, this.type = t, this.subscribeEvents();
      }
    );
  },
  beforeDestroy() {
    this.enableScroll();
  },
  methods: {
    subscribeEvents() {
      this.eventEmitter.on(p.CONFIG, (n) => {
        if (!(!n || !this.type))
          for (let t in n) {
            const e = n[t];
            e && (this.form[this.type][t] = e);
          }
      }), this.eventEmitter.on(p.CLOSE, () => {
        this.type = null, this.eventEmitter = O;
      });
    },
    disableScroll() {
      document.body.style.overflowY = "hidden";
    },
    enableScroll() {
      document.body.style.overflowY = "auto";
    },
    onConfirm() {
      let n;
      this.type === E.PROMPT && (n = this.form.prompt.text), this.eventEmitter.emit("confirm", n);
    },
    onCancel() {
      this.eventEmitter.emit("cancel");
    }
  }
});
function G(n, t, e, _, v, b, y, m) {
  var o = typeof n == "function" ? n.options : n;
  t && (o.render = t, o.staticRenderFns = e, o._compiled = !0), _ && (o.functional = !0), b && (o._scopeId = "data-v-" + b);
  var r;
  if (y ? (r = function(a) {
    a = a || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !a && typeof __VUE_SSR_CONTEXT__ < "u" && (a = __VUE_SSR_CONTEXT__), v && v.call(this, a), a && a._registeredComponents && a._registeredComponents.add(y);
  }, o._ssrRegister = r) : v && (r = m ? function() {
    v.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : v), r)
    if (o.functional) {
      o._injectStyles = r;
      var s = o.render;
      o.render = function(u, l) {
        return r.call(l), s(u, l);
      };
    } else {
      var c = o.beforeCreate;
      o.beforeCreate = c ? [].concat(c, r) : [r];
    }
  return {
    exports: n,
    options: o
  };
}
var U = function() {
  var t = this, e = t._self._c;
  return t._self._setupProxy, t.type ? e("div", { staticClass: "confirm-modal" }, [e("div", { staticClass: "confirm-modal__content" }, [t.type === t.DialogType.ALERT ? [e("div", { staticClass: "confirm-modal__title" }, [t._v(" " + t._s(t.form.alert.title) + " ")]), e("div", { staticClass: "confirm-modal__btn-container" }, [e("button", { staticClass: "confirm-modal__btn confirm-modal__btn_center confirm-modal__btn_active", on: { click: t.onConfirm } }, [t._v(" " + t._s(t.form.alert.okText) + " ")])])] : t.type === t.DialogType.PROMPT ? [e("div", { staticClass: "confirm-modal__title" }, [t._v(" " + t._s(t.form.prompt.title) + " ")]), e("div", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.form.prompt.text, expression: "form.prompt.text" }], staticClass: "confirm-modal__input", attrs: { type: "text", placeholder: t.form.prompt.placeholder }, domProps: { value: t.form.prompt.text }, on: { input: function(_) {
    _.target.composing || t.$set(t.form.prompt, "text", _.target.value);
  } } })]), e("div", { staticClass: "confirm-modal__btn-container" }, [e("button", { staticClass: "confirm-modal__btn", on: { click: t.onConfirm } }, [t._v(" " + t._s(t.form.prompt.okText) + " ")]), e("button", { staticClass: "confirm-modal__btn confirm-modal__btn_active", on: { click: t.onCancel } }, [t._v(" " + t._s(t.form.prompt.cancelText) + " ")])])] : t.type === t.DialogType.CONFIRM ? [e("div", { staticClass: "confirm-modal__title" }, [t._v(" " + t._s(t.form.confirm.title) + " ")]), e("div", { staticClass: "confirm-modal__btn-container" }, [e("button", { staticClass: "confirm-modal__btn", on: { click: t.onConfirm } }, [t._v(" " + t._s(t.form.confirm.okText) + " ")]), e("button", { staticClass: "confirm-modal__btn confirm-modal__btn_active", on: { click: t.onCancel } }, [t._v(" " + t._s(t.form.confirm.cancelText) + " ")])])] : t._e()], 2)]) : t._e();
}, X = [], z = /* @__PURE__ */ G(
  D,
  U,
  X,
  !1,
  null,
  "13eab234",
  null,
  null
);
const A = z.exports;
function K() {
  const n = document.createElement("div");
  return document.body.appendChild(n), n;
}
function W(n, t, e) {
  const _ = K();
  new n({
    parent: t,
    render: (v) => v(e)
  }).$mount(_);
}
const { mainEventEmitter: L, alertEmitter: P, promptEmitter: g, confirmEmitter: w } = N;
function k(n, t, e, _) {
  n.emit(p.MAIN, {
    eventEmitter: t,
    type: e
  }), t.emit("config", _);
}
const j = {
  alert: (n) => (k(
    L,
    P,
    E.ALERT,
    n
  ), new Promise((t) => {
    try {
      P.on("confirm", () => {
        P.emit(p.CLOSE), t(!0);
      });
    } catch (e) {
      console.error(e);
    }
  })),
  prompt: (n) => (k(
    L,
    g,
    E.PROMPT,
    n
  ), new Promise((t) => {
    try {
      g.on("confirm", (e) => {
        g.emit(p.CLOSE), t(e ?? "");
      }), g.on("cancel", () => {
        g.emit(p.CLOSE), t(!1);
      });
    } catch (e) {
      console.error(e);
    }
  })),
  confirm: (n) => (k(
    L,
    w,
    E.CONFIRM,
    n
  ), new Promise((t) => {
    try {
      w.on("confirm", () => {
        w.emit(p.CLOSE), t(!0);
      }), w.on("cancel", () => {
        w.emit(p.CLOSE), t(!1);
      });
    } catch (e) {
      console.error(e);
    }
  }))
}, H = {
  install(n) {
    Object.defineProperty(n.prototype, "$dialogBox", {
      get: function() {
        const t = this;
        if (t instanceof n) {
          const e = t.$root;
          W(n, e, A);
        }
        return j;
      }
    }), n.component("vue-dialog-box", A);
  }
};
export {
  H as default
};
