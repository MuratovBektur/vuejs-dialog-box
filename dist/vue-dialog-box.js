import Rt from "vue";
var $ = /* @__PURE__ */ ((s) => (s.ALERT = "alert", s.PROMPT = "prompt", s.CONFIRM = "confirm", s))($ || {}), T = /* @__PURE__ */ ((s) => (s.MAIN = "main", s.CLOSE = "close", s.CONFIG = "config", s))(T || {}), et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, it = {}, kt = {
  get exports() {
    return it;
  },
  set exports(s) {
    it = s;
  }
};
(function(s) {
  var r = Object.prototype.hasOwnProperty, o = "~";
  function m() {
  }
  Object.create && (m.prototype = /* @__PURE__ */ Object.create(null), new m().__proto__ || (o = !1));
  function x(c, a, v) {
    this.fn = c, this.context = a, this.once = v || !1;
  }
  function k(c, a, v, h, d) {
    if (typeof v != "function")
      throw new TypeError("The listener must be a function");
    var b = new x(v, h || c, d), _ = o ? o + a : a;
    return c._events[_] ? c._events[_].fn ? c._events[_] = [c._events[_], b] : c._events[_].push(b) : (c._events[_] = b, c._eventsCount++), c;
  }
  function E(c, a) {
    --c._eventsCount === 0 ? c._events = new m() : delete c._events[a];
  }
  function p() {
    this._events = new m(), this._eventsCount = 0;
  }
  p.prototype.eventNames = function() {
    var a = [], v, h;
    if (this._eventsCount === 0)
      return a;
    for (h in v = this._events)
      r.call(v, h) && a.push(o ? h.slice(1) : h);
    return Object.getOwnPropertySymbols ? a.concat(Object.getOwnPropertySymbols(v)) : a;
  }, p.prototype.listeners = function(a) {
    var v = o ? o + a : a, h = this._events[v];
    if (!h)
      return [];
    if (h.fn)
      return [h.fn];
    for (var d = 0, b = h.length, _ = new Array(b); d < b; d++)
      _[d] = h[d].fn;
    return _;
  }, p.prototype.listenerCount = function(a) {
    var v = o ? o + a : a, h = this._events[v];
    return h ? h.fn ? 1 : h.length : 0;
  }, p.prototype.emit = function(a, v, h, d, b, _) {
    var O = o ? o + a : a;
    if (!this._events[O])
      return !1;
    var f = this._events[O], A = arguments.length, P, y;
    if (f.fn) {
      switch (f.once && this.removeListener(a, f.fn, void 0, !0), A) {
        case 1:
          return f.fn.call(f.context), !0;
        case 2:
          return f.fn.call(f.context, v), !0;
        case 3:
          return f.fn.call(f.context, v, h), !0;
        case 4:
          return f.fn.call(f.context, v, h, d), !0;
        case 5:
          return f.fn.call(f.context, v, h, d, b), !0;
        case 6:
          return f.fn.call(f.context, v, h, d, b, _), !0;
      }
      for (y = 1, P = new Array(A - 1); y < A; y++)
        P[y - 1] = arguments[y];
      f.fn.apply(f.context, P);
    } else {
      var V = f.length, S;
      for (y = 0; y < V; y++)
        switch (f[y].once && this.removeListener(a, f[y].fn, void 0, !0), A) {
          case 1:
            f[y].fn.call(f[y].context);
            break;
          case 2:
            f[y].fn.call(f[y].context, v);
            break;
          case 3:
            f[y].fn.call(f[y].context, v, h);
            break;
          case 4:
            f[y].fn.call(f[y].context, v, h, d);
            break;
          default:
            if (!P)
              for (S = 1, P = new Array(A - 1); S < A; S++)
                P[S - 1] = arguments[S];
            f[y].fn.apply(f[y].context, P);
        }
    }
    return !0;
  }, p.prototype.on = function(a, v, h) {
    return k(this, a, v, h, !1);
  }, p.prototype.once = function(a, v, h) {
    return k(this, a, v, h, !0);
  }, p.prototype.removeListener = function(a, v, h, d) {
    var b = o ? o + a : a;
    if (!this._events[b])
      return this;
    if (!v)
      return E(this, b), this;
    var _ = this._events[b];
    if (_.fn)
      _.fn === v && (!d || _.once) && (!h || _.context === h) && E(this, b);
    else {
      for (var O = 0, f = [], A = _.length; O < A; O++)
        (_[O].fn !== v || d && !_[O].once || h && _[O].context !== h) && f.push(_[O]);
      f.length ? this._events[b] = f.length === 1 ? f[0] : f : E(this, b);
    }
    return this;
  }, p.prototype.removeAllListeners = function(a) {
    var v;
    return a ? (v = o ? o + a : a, this._events[v] && E(this, v)) : (this._events = new m(), this._eventsCount = 0), this;
  }, p.prototype.off = p.prototype.removeListener, p.prototype.addListener = p.prototype.on, p.prefixed = o, p.EventEmitter = p, s.exports = p;
})(kt);
const K = it, Lt = new K(), Mt = new K(), Nt = new K(), Ft = new K(), vt = { mainEventEmitter: Lt, alertEmitter: Mt, promptEmitter: Nt, confirmEmitter: Ft }, { mainEventEmitter: z } = vt, It = Rt.extend({
  data() {
    return {
      type: null,
      eventEmitter: z,
      DialogType: $,
      form: {
        alert: {
          title: "This is alert",
          okText: "Ok"
        },
        prompt: {
          title: "Write something",
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
    this.disableScroll(), z.on(
      T.MAIN,
      ({
        eventEmitter: s,
        type: r
      }) => {
        if (z !== this.eventEmitter)
          throw "close another dialog box";
        this.eventEmitter = s, this.type = r, this.subscribeEvents();
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
      this.eventEmitter.on(T.CONFIG, (s) => {
        if (!(!s || !this.type))
          for (let r in s) {
            const o = s[r];
            o && (this.form[this.type][r] = o);
          }
      }), this.eventEmitter.on(T.CLOSE, () => {
        this.type = null, this.eventEmitter = z;
      });
    },
    disableScroll() {
      document.body.style.overflowY = "hidden";
    },
    enableScroll() {
      document.body.style.overflowY = "";
    },
    onConfirm() {
      let s;
      this.type === $.PROMPT && (s = this.form.prompt.text), this.eventEmitter.emit("confirm", s), this.onDestroy();
    },
    onCancel() {
      this.eventEmitter.emit("cancel"), this.onDestroy();
    }
  }
});
function jt(s, r, o, m, x, k, E, p) {
  var c = typeof s == "function" ? s.options : s;
  r && (c.render = r, c.staticRenderFns = o, c._compiled = !0), m && (c.functional = !0), k && (c._scopeId = "data-v-" + k);
  var a;
  if (E ? (a = function(d) {
    d = d || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !d && typeof __VUE_SSR_CONTEXT__ < "u" && (d = __VUE_SSR_CONTEXT__), x && x.call(this, d), d && d._registeredComponents && d._registeredComponents.add(E);
  }, c._ssrRegister = a) : x && (a = p ? function() {
    x.call(
      this,
      (c.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : x), a)
    if (c.functional) {
      c._injectStyles = a;
      var v = c.render;
      c.render = function(b, _) {
        return a.call(_), v(b, _);
      };
    } else {
      var h = c.beforeCreate;
      c.beforeCreate = h ? [].concat(h, a) : [a];
    }
  return {
    exports: s,
    options: c
  };
}
var Dt = function() {
  var r = this, o = r._self._c;
  return r._self._setupProxy, r.type ? o("div", { staticClass: "confirm-modal" }, [o("div", { staticClass: "confirm-modal__content" }, [r.type === r.DialogType.ALERT ? [o("div", { staticClass: "confirm-modal__title" }, [r._v(" " + r._s(r.form.alert.title) + " ")]), o("div", { staticClass: "confirm-modal__btn-container" }, [o("button", { staticClass: "confirm-modal__btn confirm-modal__btn_center confirm-modal__btn_active", on: { click: r.onConfirm } }, [r._v(" " + r._s(r.form.alert.okText) + " ")])])] : r.type === r.DialogType.PROMPT ? [o("div", { staticClass: "confirm-modal__title" }, [r._v(" " + r._s(r.form.prompt.title) + " ")]), o("div", [o("input", { directives: [{ name: "model", rawName: "v-model", value: r.form.prompt.text, expression: "form.prompt.text" }], staticClass: "confirm-modal__input", attrs: { type: "text", placeholder: r.form.prompt.placeholder }, domProps: { value: r.form.prompt.text }, on: { input: function(m) {
    m.target.composing || r.$set(r.form.prompt, "text", m.target.value);
  } } })]), o("div", { staticClass: "confirm-modal__btn-container" }, [o("button", { staticClass: "confirm-modal__btn", class: {
    "confirm-modal__btn_active": r.form.prompt.text
  }, on: { click: r.onConfirm } }, [r._v(" " + r._s(r.form.prompt.okText) + " ")]), o("button", { staticClass: "confirm-modal__btn confirm-modal__btn_error", on: { click: r.onCancel } }, [r._v(" " + r._s(r.form.prompt.cancelText) + " ")])])] : r.type === r.DialogType.CONFIRM ? [o("div", { staticClass: "confirm-modal__title" }, [r._v(" " + r._s(r.form.confirm.title) + " ")]), o("div", { staticClass: "confirm-modal__btn-container" }, [o("button", { staticClass: "confirm-modal__btn", on: { click: r.onConfirm } }, [r._v(" " + r._s(r.form.confirm.okText) + " ")]), o("button", { staticClass: "confirm-modal__btn confirm-modal__btn_active", on: { click: r.onCancel } }, [r._v(" " + r._s(r.form.confirm.cancelText) + " ")])])] : r._e()], 2)]) : r._e();
}, $t = [], qt = /* @__PURE__ */ jt(
  It,
  Dt,
  $t,
  !1,
  null,
  "4c97a5fd",
  null,
  null
);
const ut = qt.exports;
function Bt() {
  const s = document.createElement("div");
  return document.body.appendChild(s), s;
}
function Yt(s, r, o) {
  const m = Bt();
  new s({
    parent: r,
    render: (x) => x(o)
  }).$mount(m);
}
function Gt(s) {
  throw new Error('Could not dynamically require "' + s + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var st = {}, Wt = {
  get exports() {
    return st;
  },
  set exports(s) {
    st = s;
  }
};
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */
(function(s, r) {
  (function(o, m) {
    s.exports = m();
  })(et, function() {
    function o(t) {
      var e = typeof t;
      return t !== null && (e === "object" || e === "function");
    }
    function m(t) {
      return typeof t == "function";
    }
    var x = void 0;
    Array.isArray ? x = Array.isArray : x = function(t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
    var k = x, E = 0, p = void 0, c = void 0, a = function(e, n) {
      L[E] = e, L[E + 1] = n, E += 2, E === 2 && (c ? c(M) : N());
    };
    function v(t) {
      c = t;
    }
    function h(t) {
      a = t;
    }
    var d = typeof window < "u" ? window : void 0, b = d || {}, _ = b.MutationObserver || b.WebKitMutationObserver, O = typeof self > "u" && typeof process < "u" && {}.toString.call(process) === "[object process]", f = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
    function A() {
      return function() {
        return process.nextTick(M);
      };
    }
    function P() {
      return typeof p < "u" ? function() {
        p(M);
      } : S();
    }
    function y() {
      var t = 0, e = new _(M), n = document.createTextNode("");
      return e.observe(n, { characterData: !0 }), function() {
        n.data = t = ++t % 2;
      };
    }
    function V() {
      var t = new MessageChannel();
      return t.port1.onmessage = M, function() {
        return t.port2.postMessage(0);
      };
    }
    function S() {
      var t = setTimeout;
      return function() {
        return t(M, 1);
      };
    }
    var L = new Array(1e3);
    function M() {
      for (var t = 0; t < E; t += 2) {
        var e = L[t], n = L[t + 1];
        e(n), L[t] = void 0, L[t + 1] = void 0;
      }
      E = 0;
    }
    function ht() {
      try {
        var t = Function("return this")().require("vertx");
        return p = t.runOnLoop || t.runOnContext, P();
      } catch {
        return S();
      }
    }
    var N = void 0;
    O ? N = A() : _ ? N = y() : f ? N = V() : d === void 0 && typeof Gt == "function" ? N = ht() : N = S();
    function X(t, e) {
      var n = this, i = new this.constructor(F);
      i[W] === void 0 && ft(i);
      var l = n._state;
      if (l) {
        var u = arguments[l - 1];
        a(function() {
          return ct(l, i, u, n._result);
        });
      } else
        H(n, i, t, e);
      return i;
    }
    function J(t) {
      var e = this;
      if (t && typeof t == "object" && t.constructor === e)
        return t;
      var n = new e(F);
      return B(n, t), n;
    }
    var W = Math.random().toString(36).substring(2);
    function F() {
    }
    var I = void 0, q = 1, j = 2;
    function dt() {
      return new TypeError("You cannot resolve a promise with itself");
    }
    function _t() {
      return new TypeError("A promises callback cannot return that same promise.");
    }
    function mt(t, e, n, i) {
      try {
        t.call(e, n, i);
      } catch (l) {
        return l;
      }
    }
    function pt(t, e, n) {
      a(function(i) {
        var l = !1, u = mt(n, e, function(g) {
          l || (l = !0, e !== g ? B(i, g) : R(i, g));
        }, function(g) {
          l || (l = !0, w(i, g));
        }, "Settle: " + (i._label || " unknown promise"));
        !l && u && (l = !0, w(i, u));
      }, t);
    }
    function yt(t, e) {
      e._state === q ? R(t, e._result) : e._state === j ? w(t, e._result) : H(e, void 0, function(n) {
        return B(t, n);
      }, function(n) {
        return w(t, n);
      });
    }
    function at(t, e, n) {
      e.constructor === t.constructor && n === X && e.constructor.resolve === J ? yt(t, e) : n === void 0 ? R(t, e) : m(n) ? pt(t, e, n) : R(t, e);
    }
    function B(t, e) {
      if (t === e)
        w(t, dt());
      else if (o(e)) {
        var n = void 0;
        try {
          n = e.then;
        } catch (i) {
          w(t, i);
          return;
        }
        at(t, e, n);
      } else
        R(t, e);
    }
    function bt(t) {
      t._onerror && t._onerror(t._result), Q(t);
    }
    function R(t, e) {
      t._state === I && (t._result = e, t._state = q, t._subscribers.length !== 0 && a(Q, t));
    }
    function w(t, e) {
      t._state === I && (t._state = j, t._result = e, a(bt, t));
    }
    function H(t, e, n, i) {
      var l = t._subscribers, u = l.length;
      t._onerror = null, l[u] = e, l[u + q] = n, l[u + j] = i, u === 0 && t._state && a(Q, t);
    }
    function Q(t) {
      var e = t._subscribers, n = t._state;
      if (e.length !== 0) {
        for (var i = void 0, l = void 0, u = t._result, g = 0; g < e.length; g += 3)
          i = e[g], l = e[g + n], i ? ct(n, i, l, u) : l(u);
        t._subscribers.length = 0;
      }
    }
    function ct(t, e, n, i) {
      var l = m(n), u = void 0, g = void 0, D = !0;
      if (l) {
        try {
          u = n(i);
        } catch (U) {
          D = !1, g = U;
        }
        if (e === u) {
          w(e, _t());
          return;
        }
      } else
        u = i;
      e._state !== I || (l && D ? B(e, u) : D === !1 ? w(e, g) : t === q ? R(e, u) : t === j && w(e, u));
    }
    function gt(t, e) {
      try {
        e(function(i) {
          B(t, i);
        }, function(i) {
          w(t, i);
        });
      } catch (n) {
        w(t, n);
      }
    }
    var lt = 0;
    function wt() {
      return lt++;
    }
    function ft(t) {
      t[W] = lt++, t._state = void 0, t._result = void 0, t._subscribers = [];
    }
    function Et() {
      return new Error("Array Methods must be provided an Array");
    }
    var Ct = function() {
      function t(e, n) {
        this._instanceConstructor = e, this.promise = new e(F), this.promise[W] || ft(this.promise), k(n) ? (this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), this.length === 0 ? R(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(n), this._remaining === 0 && R(this.promise, this._result))) : w(this.promise, Et());
      }
      return t.prototype._enumerate = function(n) {
        for (var i = 0; this._state === I && i < n.length; i++)
          this._eachEntry(n[i], i);
      }, t.prototype._eachEntry = function(n, i) {
        var l = this._instanceConstructor, u = l.resolve;
        if (u === J) {
          var g = void 0, D = void 0, U = !1;
          try {
            g = n.then;
          } catch (tt) {
            U = !0, D = tt;
          }
          if (g === X && n._state !== I)
            this._settledAt(n._state, i, n._result);
          else if (typeof g != "function")
            this._remaining--, this._result[i] = n;
          else if (l === C) {
            var Z = new l(F);
            U ? w(Z, D) : at(Z, n, g), this._willSettleAt(Z, i);
          } else
            this._willSettleAt(new l(function(tt) {
              return tt(n);
            }), i);
        } else
          this._willSettleAt(u(n), i);
      }, t.prototype._settledAt = function(n, i, l) {
        var u = this.promise;
        u._state === I && (this._remaining--, n === j ? w(u, l) : this._result[i] = l), this._remaining === 0 && R(u, this._result);
      }, t.prototype._willSettleAt = function(n, i) {
        var l = this;
        H(n, void 0, function(u) {
          return l._settledAt(q, i, u);
        }, function(u) {
          return l._settledAt(j, i, u);
        });
      }, t;
    }();
    function xt(t) {
      return new Ct(this, t).promise;
    }
    function Ot(t) {
      var e = this;
      return k(t) ? new e(function(n, i) {
        for (var l = t.length, u = 0; u < l; u++)
          e.resolve(t[u]).then(n, i);
      }) : new e(function(n, i) {
        return i(new TypeError("You must pass an array to race."));
      });
    }
    function At(t) {
      var e = this, n = new e(F);
      return w(n, t), n;
    }
    function Tt() {
      throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
    }
    function Pt() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }
    var C = function() {
      function t(e) {
        this[W] = wt(), this._result = this._state = void 0, this._subscribers = [], F !== e && (typeof e != "function" && Tt(), this instanceof t ? gt(this, e) : Pt());
      }
      return t.prototype.catch = function(n) {
        return this.then(null, n);
      }, t.prototype.finally = function(n) {
        var i = this, l = i.constructor;
        return m(n) ? i.then(function(u) {
          return l.resolve(n()).then(function() {
            return u;
          });
        }, function(u) {
          return l.resolve(n()).then(function() {
            throw u;
          });
        }) : i.then(n, n);
      }, t;
    }();
    C.prototype.then = X, C.all = xt, C.race = Ot, C.resolve = J, C.reject = At, C._setScheduler = v, C._setAsap = h, C._asap = a;
    function St() {
      var t = void 0;
      if (typeof et < "u")
        t = et;
      else if (typeof self < "u")
        t = self;
      else
        try {
          t = Function("return this")();
        } catch {
          throw new Error("polyfill failed because global object is unavailable in this environment");
        }
      var e = t.Promise;
      if (e) {
        var n = null;
        try {
          n = Object.prototype.toString.call(e.resolve());
        } catch {
        }
        if (n === "[object Promise]" && !e.cast)
          return;
      }
      t.Promise = C;
    }
    return C.polyfill = St, C.Promise = C, C;
  });
})(Wt);
st.polyfill();
const { mainEventEmitter: nt, alertEmitter: rt, promptEmitter: Y, confirmEmitter: G } = vt;
function ot(s, r, o, m) {
  s.emit(T.MAIN, {
    eventEmitter: r,
    type: o
  }), r.emit("config", m);
}
const Ut = {
  alert: (s) => (ot(
    nt,
    rt,
    $.ALERT,
    s
  ), new Promise((r) => {
    try {
      rt.on("confirm", () => {
        rt.emit(T.CLOSE), r(!0);
      });
    } catch (o) {
      console.error(o);
    }
  })),
  prompt: (s) => (ot(
    nt,
    Y,
    $.PROMPT,
    s
  ), new Promise((r) => {
    try {
      Y.on("confirm", (o) => {
        Y.emit(T.CLOSE), r(o ?? "");
      }), Y.on("cancel", () => {
        Y.emit(T.CLOSE), r(!1);
      });
    } catch (o) {
      console.error(o);
    }
  })),
  confirm: (s) => (ot(
    nt,
    G,
    $.CONFIRM,
    s
  ), new Promise((r) => {
    try {
      G.on("confirm", () => {
        G.emit(T.CLOSE), r(!0);
      }), G.on("cancel", () => {
        G.emit(T.CLOSE), r(!1);
      });
    } catch (o) {
      console.error(o);
    }
  }))
}, Kt = {
  install(s) {
    let r = !1;
    Object.defineProperty(s.prototype, "$dialogBox", {
      get: function() {
        const o = this;
        if (o instanceof s) {
          const m = o.$root;
          r || (Yt(s, m, ut), r = !0);
        }
        return Ut;
      }
    }), s.component("vue-dialog-box", ut);
  }
};
export {
  Kt as default
};
