import bt from "vue";
var R = /* @__PURE__ */ ((t) => (t.ALERT = "alert", t.PROMPT = "prompt", t.CONFIRM = "confirm", t))(R || {}), w = /* @__PURE__ */ ((t) => (t.MAIN = "main", t.CLOSE = "close", t.CONFIG = "config", t))(w || {}), ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Et(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var X = {}, wt = {
  get exports() {
    return X;
  },
  set exports(t) {
    X = t;
  }
};
(function(t) {
  var e = Object.prototype.hasOwnProperty, n = "~";
  function o() {
  }
  Object.create && (o.prototype = /* @__PURE__ */ Object.create(null), new o().__proto__ || (n = !1));
  function f(r, i, a) {
    this.fn = r, this.context = i, this.once = a || !1;
  }
  function v(r, i, a, s, p) {
    if (typeof a != "function")
      throw new TypeError("The listener must be a function");
    var y = new f(a, s || r, p), h = n ? n + i : i;
    return r._events[h] ? r._events[h].fn ? r._events[h] = [r._events[h], y] : r._events[h].push(y) : (r._events[h] = y, r._eventsCount++), r;
  }
  function m(r, i) {
    --r._eventsCount === 0 ? r._events = new o() : delete r._events[i];
  }
  function u() {
    this._events = new o(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var i = [], a, s;
    if (this._eventsCount === 0)
      return i;
    for (s in a = this._events)
      e.call(a, s) && i.push(n ? s.slice(1) : s);
    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(a)) : i;
  }, u.prototype.listeners = function(i) {
    var a = n ? n + i : i, s = this._events[a];
    if (!s)
      return [];
    if (s.fn)
      return [s.fn];
    for (var p = 0, y = s.length, h = new Array(y); p < y; p++)
      h[p] = s[p].fn;
    return h;
  }, u.prototype.listenerCount = function(i) {
    var a = n ? n + i : i, s = this._events[a];
    return s ? s.fn ? 1 : s.length : 0;
  }, u.prototype.emit = function(i, a, s, p, y, h) {
    var C = n ? n + i : i;
    if (!this._events[C])
      return !1;
    var c = this._events[C], x = arguments.length, T, _;
    if (c.fn) {
      switch (c.once && this.removeListener(i, c.fn, void 0, !0), x) {
        case 1:
          return c.fn.call(c.context), !0;
        case 2:
          return c.fn.call(c.context, a), !0;
        case 3:
          return c.fn.call(c.context, a, s), !0;
        case 4:
          return c.fn.call(c.context, a, s, p), !0;
        case 5:
          return c.fn.call(c.context, a, s, p, y), !0;
        case 6:
          return c.fn.call(c.context, a, s, p, y, h), !0;
      }
      for (_ = 1, T = new Array(x - 1); _ < x; _++)
        T[_ - 1] = arguments[_];
      c.fn.apply(c.context, T);
    } else {
      var gt = c.length, F;
      for (_ = 0; _ < gt; _++)
        switch (c[_].once && this.removeListener(i, c[_].fn, void 0, !0), x) {
          case 1:
            c[_].fn.call(c[_].context);
            break;
          case 2:
            c[_].fn.call(c[_].context, a);
            break;
          case 3:
            c[_].fn.call(c[_].context, a, s);
            break;
          case 4:
            c[_].fn.call(c[_].context, a, s, p);
            break;
          default:
            if (!T)
              for (F = 1, T = new Array(x - 1); F < x; F++)
                T[F - 1] = arguments[F];
            c[_].fn.apply(c[_].context, T);
        }
    }
    return !0;
  }, u.prototype.on = function(i, a, s) {
    return v(this, i, a, s, !1);
  }, u.prototype.once = function(i, a, s) {
    return v(this, i, a, s, !0);
  }, u.prototype.removeListener = function(i, a, s, p) {
    var y = n ? n + i : i;
    if (!this._events[y])
      return this;
    if (!a)
      return m(this, y), this;
    var h = this._events[y];
    if (h.fn)
      h.fn === a && (!p || h.once) && (!s || h.context === s) && m(this, y);
    else {
      for (var C = 0, c = [], x = h.length; C < x; C++)
        (h[C].fn !== a || p && !h[C].once || s && h[C].context !== s) && c.push(h[C]);
      c.length ? this._events[y] = c.length === 1 ? c[0] : c : m(this, y);
    }
    return this;
  }, u.prototype.removeAllListeners = function(i) {
    var a;
    return i ? (a = n ? n + i : i, this._events[a] && m(this, a)) : (this._events = new o(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = n, u.EventEmitter = u, t.exports = u;
})(wt);
const q = X, Ct = new q(), xt = new q(), Tt = new q(), At = new q(), ut = { mainEventEmitter: Ct, alertEmitter: xt, promptEmitter: Tt, confirmEmitter: At }, { mainEventEmitter: z } = ut, Rt = bt.extend({
  data() {
    return {
      type: null,
      eventEmitter: z,
      DialogType: R,
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
      w.MAIN,
      ({
        eventEmitter: t,
        type: e
      }) => {
        if (z !== this.eventEmitter)
          throw "close another dialog box";
        this.eventEmitter = t, this.type = e, this.subscribeEvents();
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
      this.eventEmitter.on(w.CONFIG, (t) => {
        if (!(!t || !this.type))
          for (let e in t) {
            const n = t[e];
            n && (this.form[this.type][e] = n);
          }
      }), this.eventEmitter.on(w.CLOSE, () => {
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
      let t;
      this.type === R.PROMPT && (t = this.form.prompt.text), this.eventEmitter.emit("confirm", t), this.onDestroy();
    },
    onCancel() {
      this.eventEmitter.emit("cancel"), this.onDestroy();
    }
  }
});
function Ot(t, e, n, o, f, v, m, u) {
  var r = typeof t == "function" ? t.options : t;
  e && (r.render = e, r.staticRenderFns = n, r._compiled = !0), o && (r.functional = !0), v && (r._scopeId = "data-v-" + v);
  var i;
  if (m ? (i = function(p) {
    p = p || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !p && typeof __VUE_SSR_CONTEXT__ < "u" && (p = __VUE_SSR_CONTEXT__), f && f.call(this, p), p && p._registeredComponents && p._registeredComponents.add(m);
  }, r._ssrRegister = i) : f && (i = u ? function() {
    f.call(
      this,
      (r.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : f), i)
    if (r.functional) {
      r._injectStyles = i;
      var a = r.render;
      r.render = function(y, h) {
        return i.call(h), a(y, h);
      };
    } else {
      var s = r.beforeCreate;
      r.beforeCreate = s ? [].concat(s, i) : [i];
    }
  return {
    exports: t,
    options: r
  };
}
var Pt = function() {
  var e = this, n = e._self._c;
  return e._self._setupProxy, e.type ? n("div", { staticClass: "confirm-modal" }, [n("div", { staticClass: "confirm-modal__content" }, [e.type === e.DialogType.ALERT ? [n("div", { staticClass: "confirm-modal__title" }, [e._v(" " + e._s(e.form.alert.title) + " ")]), n("div", { staticClass: "confirm-modal__btn-container" }, [n("button", { staticClass: "confirm-modal__btn confirm-modal__btn_center confirm-modal__btn_active", on: { click: e.onConfirm } }, [e._v(" " + e._s(e.form.alert.okText) + " ")])])] : e.type === e.DialogType.PROMPT ? [n("div", { staticClass: "confirm-modal__title" }, [e._v(" " + e._s(e.form.prompt.title) + " ")]), n("div", [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.form.prompt.text, expression: "form.prompt.text" }], staticClass: "confirm-modal__input", attrs: { type: "text", placeholder: e.form.prompt.placeholder }, domProps: { value: e.form.prompt.text }, on: { input: function(o) {
    o.target.composing || e.$set(e.form.prompt, "text", o.target.value);
  } } })]), n("div", { staticClass: "confirm-modal__btn-container" }, [n("button", { staticClass: "confirm-modal__btn", class: {
    "confirm-modal__btn_active": e.form.prompt.text
  }, on: { click: e.onConfirm } }, [e._v(" " + e._s(e.form.prompt.okText) + " ")]), n("button", { staticClass: "confirm-modal__btn confirm-modal__btn_error", on: { click: e.onCancel } }, [e._v(" " + e._s(e.form.prompt.cancelText) + " ")])])] : e.type === e.DialogType.CONFIRM ? [n("div", { staticClass: "confirm-modal__title" }, [e._v(" " + e._s(e.form.confirm.title) + " ")]), n("div", { staticClass: "confirm-modal__btn-container" }, [n("button", { staticClass: "confirm-modal__btn", on: { click: e.onConfirm } }, [e._v(" " + e._s(e.form.confirm.okText) + " ")]), n("button", { staticClass: "confirm-modal__btn confirm-modal__btn_active", on: { click: e.onCancel } }, [e._v(" " + e._s(e.form.confirm.cancelText) + " ")])])] : e._e()], 2)]) : e._e();
}, jt = [], St = /* @__PURE__ */ Ot(
  Rt,
  Pt,
  jt,
  !1,
  null,
  "4c97a5fd",
  null,
  null
);
const it = St.exports;
function kt() {
  const t = document.createElement("div");
  return document.body.appendChild(t), t;
}
function Lt(t, e, n) {
  const o = kt();
  new t({
    parent: e,
    render: (f) => f(n)
  }).$mount(o);
}
var Z = {}, Ft = {
  get exports() {
    return Z;
  },
  set exports(t) {
    Z = t;
  }
}, J = {}, $t = {
  get exports() {
    return J;
  },
  set exports(t) {
    J = t;
  }
}, lt = rt;
function rt(t) {
  E.length || M(), E[E.length] = t;
}
var E = [], M, b = 0, Nt = 1024;
function st() {
  for (; b < E.length; ) {
    var t = b;
    if (b = b + 1, E[t].call(), b > Nt) {
      for (var e = 0, n = E.length - b; e < n; e++)
        E[e] = E[e + b];
      E.length -= b, b = 0;
    }
  }
  E.length = 0, b = 0;
}
var at = typeof ot < "u" ? ot : self, pt = at.MutationObserver || at.WebKitMutationObserver;
typeof pt == "function" ? M = zt(st) : M = ht(st);
rt.requestFlush = M;
function zt(t) {
  var e = 1, n = new pt(t), o = document.createTextNode("");
  return n.observe(o, { characterData: !0 }), function() {
    e = -e, o.data = e;
  };
}
function ht(t) {
  return function() {
    var n = setTimeout(f, 0), o = setInterval(f, 50);
    function f() {
      clearTimeout(n), clearInterval(o), t();
    }
  };
}
rt.makeRequestCallFromTimer = ht;
var Mt = lt;
function B() {
}
var S = null, k = {};
function It(t) {
  try {
    return t.then;
  } catch (e) {
    return S = e, k;
  }
}
function Dt(t, e) {
  try {
    return t(e);
  } catch (n) {
    return S = n, k;
  }
}
function qt(t, e, n) {
  try {
    t(e, n);
  } catch (o) {
    return S = o, k;
  }
}
var L = g;
function g(t) {
  if (typeof this != "object")
    throw new TypeError("Promises must be constructed via new");
  if (typeof t != "function")
    throw new TypeError("Promise constructor's argument is not a function");
  this._x = 0, this._y = 0, this._z = null, this._A = null, t !== B && _t(t, this);
}
g._B = null;
g._C = null;
g._D = B;
g.prototype.then = function(t, e) {
  if (this.constructor !== g)
    return Bt(this, t, e);
  var n = new g(B);
  return I(this, new mt(t, e, n)), n;
};
function Bt(t, e, n) {
  return new t.constructor(function(o, f) {
    var v = new g(B);
    v.then(o, f), I(t, new mt(e, n, v));
  });
}
function I(t, e) {
  for (; t._y === 3; )
    t = t._z;
  if (g._B && g._B(t), t._y === 0) {
    if (t._x === 0) {
      t._x = 1, t._A = e;
      return;
    }
    if (t._x === 1) {
      t._x = 2, t._A = [t._A, e];
      return;
    }
    t._A.push(e);
    return;
  }
  Ut(t, e);
}
function Ut(t, e) {
  Mt(function() {
    var n = t._y === 1 ? e.onFulfilled : e.onRejected;
    if (n === null) {
      t._y === 1 ? Q(e.promise, t._z) : O(e.promise, t._z);
      return;
    }
    var o = Dt(n, t._z);
    o === k ? O(e.promise, S) : Q(e.promise, o);
  });
}
function Q(t, e) {
  if (e === t)
    return O(
      t,
      new TypeError("A promise cannot be resolved with itself.")
    );
  if (e && (typeof e == "object" || typeof e == "function")) {
    var n = It(e);
    if (n === k)
      return O(t, S);
    if (n === t.then && e instanceof g) {
      t._y = 3, t._z = e, V(t);
      return;
    } else if (typeof n == "function") {
      _t(n.bind(e), t);
      return;
    }
  }
  t._y = 1, t._z = e, V(t);
}
function O(t, e) {
  t._y = 2, t._z = e, g._C && g._C(t, e), V(t);
}
function V(t) {
  if (t._x === 1 && (I(t, t._A), t._A = null), t._x === 2) {
    for (var e = 0; e < t._A.length; e++)
      I(t, t._A[e]);
    t._A = null;
  }
}
function mt(t, e, n) {
  this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof e == "function" ? e : null, this.promise = n;
}
function _t(t, e) {
  var n = !1, o = qt(t, function(f) {
    n || (n = !0, Q(e, f));
  }, function(f) {
    n || (n = !0, O(e, f));
  });
  !n && o === k && (n = !0, O(e, S));
}
var Wt = L;
Wt.prototype.done = function(t, e) {
  var n = arguments.length ? this.then.apply(this, arguments) : this;
  n.then(null, function(o) {
    setTimeout(function() {
      throw o;
    }, 0);
  });
};
var U = L;
U.prototype.finally = function(t) {
  return this.then(function(e) {
    return U.resolve(t()).then(function() {
      return e;
    });
  }, function(e) {
    return U.resolve(t()).then(function() {
      throw e;
    });
  });
};
var l = L, Yt = A(!0), Gt = A(!1), Ht = A(null), Kt = A(void 0), Xt = A(0), Zt = A("");
function A(t) {
  var e = new l(l._D);
  return e._y = 1, e._z = t, e;
}
l.resolve = function(t) {
  if (t instanceof l)
    return t;
  if (t === null)
    return Ht;
  if (t === void 0)
    return Kt;
  if (t === !0)
    return Yt;
  if (t === !1)
    return Gt;
  if (t === 0)
    return Xt;
  if (t === "")
    return Zt;
  if (typeof t == "object" || typeof t == "function")
    try {
      var e = t.then;
      if (typeof e == "function")
        return new l(e.bind(t));
    } catch (n) {
      return new l(function(o, f) {
        f(n);
      });
    }
  return A(t);
};
var P = function(t) {
  return typeof Array.from == "function" ? (P = Array.from, Array.from(t)) : (P = function(e) {
    return Array.prototype.slice.call(e);
  }, Array.prototype.slice.call(t));
};
l.all = function(t) {
  var e = P(t);
  return new l(function(n, o) {
    if (e.length === 0)
      return n([]);
    var f = e.length;
    function v(u, r) {
      if (r && (typeof r == "object" || typeof r == "function"))
        if (r instanceof l && r.then === l.prototype.then) {
          for (; r._y === 3; )
            r = r._z;
          if (r._y === 1)
            return v(u, r._z);
          r._y === 2 && o(r._z), r.then(function(s) {
            v(u, s);
          }, o);
          return;
        } else {
          var i = r.then;
          if (typeof i == "function") {
            var a = new l(i.bind(r));
            a.then(function(s) {
              v(u, s);
            }, o);
            return;
          }
        }
      e[u] = r, --f === 0 && n(e);
    }
    for (var m = 0; m < e.length; m++)
      v(m, e[m]);
  });
};
function W(t) {
  return { status: "fulfilled", value: t };
}
function ct(t) {
  return { status: "rejected", reason: t };
}
function Jt(t) {
  if (t && (typeof t == "object" || typeof t == "function")) {
    if (t instanceof l && t.then === l.prototype.then)
      return t.then(W, ct);
    var e = t.then;
    if (typeof e == "function")
      return new l(e.bind(t)).then(W, ct);
  }
  return W(t);
}
l.allSettled = function(t) {
  return l.all(P(t).map(Jt));
};
l.reject = function(t) {
  return new l(function(e, n) {
    n(t);
  });
};
l.race = function(t) {
  return new l(function(e, n) {
    P(t).forEach(function(o) {
      l.resolve(o).then(e, n);
    });
  });
};
l.prototype.catch = function(t) {
  return this.then(null, t);
};
function ft(t) {
  if (typeof AggregateError == "function")
    return new AggregateError(t, "All promises were rejected");
  var e = new Error("All promises were rejected");
  return e.name = "AggregateError", e.errors = t, e;
}
l.any = function(e) {
  return new l(function(n, o) {
    var f = P(e), v = !1, m = [];
    function u(i) {
      v || (v = !0, n(i));
    }
    function r(i) {
      m.push(i), m.length === f.length && o(ft(m));
    }
    f.length === 0 ? o(ft(m)) : f.forEach(function(i) {
      l.resolve(i).then(u, r);
    });
  });
};
var vt = lt, D = [], tt = [], Qt = vt.makeRequestCallFromTimer(Vt);
function Vt() {
  if (tt.length)
    throw tt.shift();
}
var te = et;
function et(t) {
  var e;
  D.length ? e = D.pop() : e = new yt(), e.task = t, vt(e);
}
function yt() {
  this.task = null;
}
yt.prototype.call = function() {
  try {
    this.task.call();
  } catch (t) {
    et.onerror ? et.onerror(t) : (tt.push(t), Qt());
  } finally {
    this.task = null, D[D.length] = this;
  }
};
var j = L, nt = te;
j.denodeify = function(t, e) {
  return typeof e == "number" && e !== 1 / 0 ? ee(t, e) : ne(t);
};
var dt = "function (err, res) {if (err) { rj(err); } else { rs(res); }}";
function ee(t, e) {
  for (var n = [], o = 0; o < e; o++)
    n.push("a" + o);
  var f = [
    "return function (" + n.join(",") + ") {",
    "var self = this;",
    "return new Promise(function (rs, rj) {",
    "var res = fn.call(",
    ["self"].concat(n).concat([dt]).join(","),
    ");",
    "if (res &&",
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ") {rs(res);}",
    "});",
    "};"
  ].join("");
  return Function(["Promise", "fn"], f)(j, t);
}
function ne(t) {
  for (var e = Math.max(t.length - 1, 3), n = [], o = 0; o < e; o++)
    n.push("a" + o);
  var f = [
    "return function (" + n.join(",") + ") {",
    "var self = this;",
    "var args;",
    "var argLength = arguments.length;",
    "if (arguments.length > " + e + ") {",
    "args = new Array(arguments.length + 1);",
    "for (var i = 0; i < arguments.length; i++) {",
    "args[i] = arguments[i];",
    "}",
    "}",
    "return new Promise(function (rs, rj) {",
    "var cb = " + dt + ";",
    "var res;",
    "switch (argLength) {",
    n.concat(["extra"]).map(function(v, m) {
      return "case " + m + ":res = fn.call(" + ["self"].concat(n.slice(0, m)).concat("cb").join(",") + ");break;";
    }).join(""),
    "default:",
    "args[argLength] = cb;",
    "res = fn.apply(self, args);",
    "}",
    "if (res &&",
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ") {rs(res);}",
    "});",
    "};"
  ].join("");
  return Function(
    ["Promise", "fn"],
    f
  )(j, t);
}
j.nodeify = function(t) {
  return function() {
    var e = Array.prototype.slice.call(arguments), n = typeof e[e.length - 1] == "function" ? e.pop() : null, o = this;
    try {
      return t.apply(this, arguments).nodeify(n, o);
    } catch (f) {
      if (n === null || typeof n > "u")
        return new j(function(v, m) {
          m(f);
        });
      nt(function() {
        n.call(o, f);
      });
    }
  };
};
j.prototype.nodeify = function(t, e) {
  if (typeof t != "function")
    return this;
  this.then(function(n) {
    nt(function() {
      t.call(e, null, n);
    });
  }, function(n) {
    nt(function() {
      t.call(e, n);
    });
  });
};
var d = L;
d.enableSynchronous = function() {
  d.prototype.isPending = function() {
    return this.getState() == 0;
  }, d.prototype.isFulfilled = function() {
    return this.getState() == 1;
  }, d.prototype.isRejected = function() {
    return this.getState() == 2;
  }, d.prototype.getValue = function() {
    if (this._y === 3)
      return this._z.getValue();
    if (!this.isFulfilled())
      throw new Error("Cannot get a value of an unfulfilled promise.");
    return this._z;
  }, d.prototype.getReason = function() {
    if (this._y === 3)
      return this._z.getReason();
    if (!this.isRejected())
      throw new Error("Cannot get a rejection reason of a non-rejected promise.");
    return this._z;
  }, d.prototype.getState = function() {
    return this._y === 3 ? this._z.getState() : this._y === -1 || this._y === -2 ? 0 : this._y;
  };
};
d.disableSynchronous = function() {
  d.prototype.isPending = void 0, d.prototype.isFulfilled = void 0, d.prototype.isRejected = void 0, d.prototype.getValue = void 0, d.prototype.getReason = void 0, d.prototype.getState = void 0;
};
(function(t) {
  t.exports = L;
})($t);
(function(t) {
  t.exports = J;
})(Ft);
const Y = /* @__PURE__ */ Et(Z), { mainEventEmitter: G, alertEmitter: H, promptEmitter: $, confirmEmitter: N } = ut;
function K(t, e, n, o) {
  t.emit(w.MAIN, {
    eventEmitter: e,
    type: n
  }), e.emit("config", o);
}
const re = {
  alert: (t) => (K(
    G,
    H,
    R.ALERT,
    t
  ), new Y((e) => {
    try {
      H.on("confirm", () => {
        H.emit(w.CLOSE), e(!0);
      });
    } catch (n) {
      console.error(n);
    }
  })),
  prompt: (t) => (K(
    G,
    $,
    R.PROMPT,
    t
  ), new Y((e) => {
    try {
      $.on("confirm", (n) => {
        $.emit(w.CLOSE), e(n ?? "");
      }), $.on("cancel", () => {
        $.emit(w.CLOSE), e(!1);
      });
    } catch (n) {
      console.error(n);
    }
  })),
  confirm: (t) => (K(
    G,
    N,
    R.CONFIRM,
    t
  ), new Y((e) => {
    try {
      N.on("confirm", () => {
        N.emit(w.CLOSE), e(!0);
      }), N.on("cancel", () => {
        N.emit(w.CLOSE), e(!1);
      });
    } catch (n) {
      console.error(n);
    }
  }))
}, ie = {
  install(t) {
    let e = !1;
    Object.defineProperty(t.prototype, "$dialogBox", {
      get: function() {
        const n = this;
        if (n instanceof t) {
          const o = n.$root;
          e || (Lt(t, o, it), e = !0);
        }
        return re;
      }
    }), t.component("vue-dialog-box", it);
  }
};
export {
  ie as default
};
