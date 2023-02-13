import $ from "vue";
var E = /* @__PURE__ */ ((n) => (n.ALERT = "alert", n.PROMPT = "prompt", n.CONFIRM = "confirm", n))(E || {}), _ = /* @__PURE__ */ ((n) => (n.MAIN = "main", n.CLOSE = "close", n.CONFIG = "config", n))(_ || {}), A = {}, I = {
  get exports() {
    return A;
  },
  set exports(n) {
    A = n;
  }
};
(function(n) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function p() {
  }
  Object.create && (p.prototype = /* @__PURE__ */ Object.create(null), new p().__proto__ || (e = !1));
  function v(o, r, s) {
    this.fn = o, this.context = r, this.once = s || !1;
  }
  function b(o, r, s, c, l) {
    if (typeof s != "function")
      throw new TypeError("The listener must be a function");
    var u = new v(s, c || o, l), a = e ? e + r : r;
    return o._events[a] ? o._events[a].fn ? o._events[a] = [o._events[a], u] : o._events[a].push(u) : (o._events[a] = u, o._eventsCount++), o;
  }
  function y(o, r) {
    --o._eventsCount === 0 ? o._events = new p() : delete o._events[r];
  }
  function m() {
    this._events = new p(), this._eventsCount = 0;
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
    for (var l = 0, u = c.length, a = new Array(u); l < u; l++)
      a[l] = c[l].fn;
    return a;
  }, m.prototype.listenerCount = function(r) {
    var s = e ? e + r : r, c = this._events[s];
    return c ? c.fn ? 1 : c.length : 0;
  }, m.prototype.emit = function(r, s, c, l, u, a) {
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
          return i.fn.call(i.context, s, c, l), !0;
        case 5:
          return i.fn.call(i.context, s, c, l, u), !0;
        case 6:
          return i.fn.call(i.context, s, c, l, u, a), !0;
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
            i[f].fn.call(i[f].context, s, c, l);
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
  }, m.prototype.removeListener = function(r, s, c, l) {
    var u = e ? e + r : r;
    if (!this._events[u])
      return this;
    if (!s)
      return y(this, u), this;
    var a = this._events[u];
    if (a.fn)
      a.fn === s && (!l || a.once) && (!c || a.context === c) && y(this, u);
    else {
      for (var d = 0, i = [], h = a.length; d < h; d++)
        (a[d].fn !== s || l && !a[d].once || c && a[d].context !== c) && i.push(a[d]);
      i.length ? this._events[u] = i.length === 1 ? i[0] : i : y(this, u);
    }
    return this;
  }, m.prototype.removeAllListeners = function(r) {
    var s;
    return r ? (s = e ? e + r : r, this._events[s] && y(this, s)) : (this._events = new p(), this._eventsCount = 0), this;
  }, m.prototype.off = m.prototype.removeListener, m.prototype.addListener = m.prototype.on, m.prefixed = e, m.EventEmitter = m, n.exports = m;
})(I);
const T = A, M = new T(), D = new T(), F = new T(), B = new T(), N = { mainEventEmitter: M, alertEmitter: D, promptEmitter: F, confirmEmitter: B }, { mainEventEmitter: O } = N, Y = $.extend({
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
      _.MAIN,
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
    this.onDestroy();
  },
  methods: {
    onDestroy() {
      this.enableScroll(), this.form.prompt.text = "";
    },
    subscribeEvents() {
      this.eventEmitter.on(_.CONFIG, (n) => {
        if (!(!n || !this.type))
          for (let t in n) {
            const e = n[t];
            e && (this.form[this.type][t] = e);
          }
      }), this.eventEmitter.on(_.CLOSE, () => {
        this.type = null, this.eventEmitter = O;
      });
    },
    disableScroll() {
      document.body.style.overflowY = "hidden";
    },
    enableScroll() {
      document.body.style.overflowY = "";
    },
    onConfirm() {
      let n;
      this.type === E.PROMPT && (n = this.form.prompt.text), this.eventEmitter.emit("confirm", n), this.onDestroy();
    },
    onCancel() {
      this.eventEmitter.emit("cancel"), this.onDestroy();
    }
  }
});
function G(n, t, e, p, v, b, y, m) {
  var o = typeof n == "function" ? n.options : n;
  t && (o.render = t, o.staticRenderFns = e, o._compiled = !0), p && (o.functional = !0), b && (o._scopeId = "data-v-" + b);
  var r;
  if (y ? (r = function(l) {
    l = l || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !l && typeof __VUE_SSR_CONTEXT__ < "u" && (l = __VUE_SSR_CONTEXT__), v && v.call(this, l), l && l._registeredComponents && l._registeredComponents.add(y);
  }, o._ssrRegister = r) : v && (r = m ? function() {
    v.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : v), r)
    if (o.functional) {
      o._injectStyles = r;
      var s = o.render;
      o.render = function(u, a) {
        return r.call(a), s(u, a);
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
  return t._self._setupProxy, t.type ? e("div", { staticClass: "confirm-modal" }, [e("div", { staticClass: "confirm-modal__content" }, [t.type === t.DialogType.ALERT ? [e("div", { staticClass: "confirm-modal__title" }, [t._v(" " + t._s(t.form.alert.title) + " ")]), e("div", { staticClass: "confirm-modal__btn-container" }, [e("button", { staticClass: "confirm-modal__btn confirm-modal__btn_center confirm-modal__btn_active", on: { click: t.onConfirm } }, [t._v(" " + t._s(t.form.alert.okText) + " ")])])] : t.type === t.DialogType.PROMPT ? [e("div", { staticClass: "confirm-modal__title" }, [t._v(" " + t._s(t.form.prompt.title) + " ")]), e("div", [e("input", { directives: [{ name: "model", rawName: "v-model", value: t.form.prompt.text, expression: "form.prompt.text" }], staticClass: "confirm-modal__input", attrs: { type: "text", placeholder: t.form.prompt.placeholder }, domProps: { value: t.form.prompt.text }, on: { input: function(p) {
    p.target.composing || t.$set(t.form.prompt, "text", p.target.value);
  } } })]), e("div", { staticClass: "confirm-modal__btn-container" }, [e("button", { staticClass: "confirm-modal__btn", on: { click: t.onConfirm } }, [t._v(" " + t._s(t.form.prompt.okText) + " ")]), e("button", { staticClass: "confirm-modal__btn confirm-modal__btn_active", on: { click: t.onCancel } }, [t._v(" " + t._s(t.form.prompt.cancelText) + " ")])])] : t.type === t.DialogType.CONFIRM ? [e("div", { staticClass: "confirm-modal__title" }, [t._v(" " + t._s(t.form.confirm.title) + " ")]), e("div", { staticClass: "confirm-modal__btn-container" }, [e("button", { staticClass: "confirm-modal__btn", on: { click: t.onConfirm } }, [t._v(" " + t._s(t.form.confirm.okText) + " ")]), e("button", { staticClass: "confirm-modal__btn confirm-modal__btn_active", on: { click: t.onCancel } }, [t._v(" " + t._s(t.form.confirm.cancelText) + " ")])])] : t._e()], 2)]) : t._e();
}, X = [], z = /* @__PURE__ */ G(
  Y,
  U,
  X,
  !1,
  null,
  "1908b5d8",
  null,
  null
);
const R = z.exports;
function K() {
  const n = document.createElement("div");
  return document.body.appendChild(n), n;
}
function W(n, t, e) {
  const p = K();
  new n({
    parent: t,
    render: (v) => v(e)
  }).$mount(p);
}
const { mainEventEmitter: L, alertEmitter: P, promptEmitter: g, confirmEmitter: w } = N;
function k(n, t, e, p) {
  n.emit(_.MAIN, {
    eventEmitter: t,
    type: e
  }), t.emit("config", p);
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
        P.emit(_.CLOSE), t(!0);
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
        g.emit(_.CLOSE), t(e ?? "");
      }), g.on("cancel", () => {
        g.emit(_.CLOSE), t(!1);
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
        w.emit(_.CLOSE), t(!0);
      }), w.on("cancel", () => {
        w.emit(_.CLOSE), t(!1);
      });
    } catch (e) {
      console.error(e);
    }
  }))
}, H = {
  install(n) {
    let t = !1;
    Object.defineProperty(n.prototype, "$dialogBox", {
      get: function() {
        const e = this;
        if (e instanceof n) {
          const p = e.$root;
          t || (W(n, p, R), t = !0);
        }
        return j;
      }
    }), n.component("vue-dialog-box", R);
  }
};
export {
  H as default
};
