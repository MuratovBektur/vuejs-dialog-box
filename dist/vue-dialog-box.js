import _ from "vue";
var l = /* @__PURE__ */ ((e) => (e.ALERT = "alert", e.PROMPT = "prompt", e.CONFIRM = "confirm", e))(l || {}), n = /* @__PURE__ */ ((e) => (e.OPEN = "open", e.CLOSE = "close", e.CONFIRM = "confirm", e.CANCEL = "cancel", e))(n || {});
const R = new _(), g = new _(), N = new _(), P = new _(), $ = { mainEventEmitter: R, alertEmitter: g, promptEmitter: N, confirmEmitter: P }, { mainEventEmitter: p } = $, w = _.extend({
  data() {
    return {
      type: null,
      eventEmitter: p,
      DialogType: l,
      form: {
        alert: {
          title: "This is alert",
          okText: "Ok"
        },
        prompt: {
          title: "Write something",
          okText: "Yes",
          cancelText: "No",
          allowConfirmEmptyString: !1,
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
    this.disableScroll(), p.$on(
      n.OPEN,
      ({
        eventEmitter: e,
        type: t,
        options: o
      }) => {
        if (p !== this.eventEmitter)
          throw "close another dialog box";
        if (this.eventEmitter = e, this.type = t, !(!o || !this.type)) {
          for (let i in o) {
            const s = o[i];
            s && (this.form[this.type][i] = s);
          }
          this.subscribeEvents();
        }
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
      this.eventEmitter.$on(n.CLOSE, () => {
        this.type = null, this.eventEmitter = p;
      });
    },
    disableScroll() {
      document.body.style.overflowY = "hidden";
    },
    enableScroll() {
      document.body.style.overflowY = "";
    },
    onConfirm() {
      let e;
      this.type === l.PROMPT && (e = this.form.prompt.text), this.eventEmitter.$emit(n.CONFIRM, e), this.onDestroy();
    },
    onCancel() {
      this.eventEmitter.$emit(n.CANCEL), this.onDestroy();
    }
  }
});
function S(e, t, o, i, s, C, E, O) {
  var r = typeof e == "function" ? e.options : e;
  t && (r.render = t, r.staticRenderFns = o, r._compiled = !0), i && (r.functional = !0), C && (r._scopeId = "data-v-" + C);
  var m;
  if (E ? (m = function(a) {
    a = a || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !a && typeof __VUE_SSR_CONTEXT__ < "u" && (a = __VUE_SSR_CONTEXT__), s && s.call(this, a), a && a._registeredComponents && a._registeredComponents.add(E);
  }, r._ssrRegister = m) : s && (m = O ? function() {
    s.call(
      this,
      (r.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), m)
    if (r.functional) {
      r._injectStyles = m;
      var x = r.render;
      r.render = function(T, b) {
        return m.call(b), x(T, b);
      };
    } else {
      var h = r.beforeCreate;
      r.beforeCreate = h ? [].concat(h, m) : [m];
    }
  return {
    exports: e,
    options: r
  };
}
var L = function() {
  var t = this, o = t._self._c;
  return t._self._setupProxy, t.type ? o("div", { staticClass: "confirm-modal" }, [o("div", { staticClass: "confirm-modal__content" }, [t.type === t.DialogType.ALERT ? [o("div", { staticClass: "confirm-modal__title" }, [t._v(" " + t._s(t.form.alert.title) + " ")]), o("div", { staticClass: "confirm-modal__btn-container" }, [o("button", { staticClass: "confirm-modal__btn confirm-modal__btn_center confirm-modal__btn_active", on: { click: t.onConfirm } }, [t._v(" " + t._s(t.form.alert.okText) + " ")])])] : t.type === t.DialogType.PROMPT ? [o("div", { staticClass: "confirm-modal__title" }, [t._v(" " + t._s(t.form.prompt.title) + " ")]), o("div", [o("input", { directives: [{ name: "model", rawName: "v-model", value: t.form.prompt.text, expression: "form.prompt.text" }], staticClass: "confirm-modal__input", attrs: { type: "text", placeholder: t.form.prompt.placeholder }, domProps: { value: t.form.prompt.text }, on: { input: function(i) {
    i.target.composing || t.$set(t.form.prompt, "text", i.target.value);
  } } })]), o("div", { staticClass: "confirm-modal__btn-container" }, [o("button", { staticClass: "confirm-modal__btn", class: {
    "confirm-modal__btn_active": t.form.prompt.text
  }, attrs: { disabled: !t.form.prompt.allowConfirmEmptyString && !t.form.prompt.text }, on: { click: t.onConfirm } }, [t._v(" " + t._s(t.form.prompt.okText) + " ")]), o("button", { staticClass: "confirm-modal__btn confirm-modal__btn_error", on: { click: t.onCancel } }, [t._v(" " + t._s(t.form.prompt.cancelText) + " ")])])] : t.type === t.DialogType.CONFIRM ? [o("div", { staticClass: "confirm-modal__title" }, [t._v(" " + t._s(t.form.confirm.title) + " ")]), o("div", { staticClass: "confirm-modal__btn-container" }, [o("button", { staticClass: "confirm-modal__btn", on: { click: t.onConfirm } }, [t._v(" " + t._s(t.form.confirm.okText) + " ")]), o("button", { staticClass: "confirm-modal__btn confirm-modal__btn_active", on: { click: t.onCancel } }, [t._v(" " + t._s(t.form.confirm.cancelText) + " ")])])] : t._e()], 2)]) : t._e();
}, k = [], M = /* @__PURE__ */ S(
  w,
  L,
  k,
  !1,
  null,
  "c2ab8a27",
  null,
  null
);
const y = M.exports;
function A() {
  const e = document.createElement("div");
  return document.body.appendChild(e), e;
}
function F(e, t, o) {
  const i = A();
  new e({
    parent: t,
    render: (s) => s(o)
  }).$mount(i);
}
const { mainEventEmitter: d, alertEmitter: u, promptEmitter: c, confirmEmitter: f } = $;
function v(e, t, o, i) {
  e.$emit(n.OPEN, {
    options: i,
    eventEmitter: t,
    type: o
  });
}
const I = {
  alert: (e) => (v(
    d,
    u,
    l.ALERT,
    e
  ), new Promise((t) => {
    try {
      u.$on(n.CONFIRM, () => {
        u.$emit(n.CLOSE), t(!0);
      });
    } catch (o) {
      console.error(o);
    }
  })),
  prompt: (e) => (v(
    d,
    c,
    l.PROMPT,
    e
  ), new Promise((t) => {
    try {
      c.$on(n.CONFIRM, (o) => {
        c.$emit(n.CLOSE), t(o ?? "");
      }), c.$on(n.CANCEL, () => {
        c.$emit(n.CLOSE), t(!1);
      });
    } catch (o) {
      console.error(o);
    }
  })),
  confirm: (e) => (v(
    d,
    f,
    l.CONFIRM,
    e
  ), new Promise((t) => {
    try {
      f.$on(n.CONFIRM, () => {
        f.$emit(n.CLOSE), t(!0);
      }), f.$on(n.CANCEL, () => {
        f.$emit(n.CLOSE), t(!1);
      });
    } catch (o) {
      console.error(o);
    }
  }))
}, B = {
  install(e) {
    let t = !1;
    Object.defineProperty(e.prototype, "$dialogBox", {
      get: function() {
        const o = this;
        if (o instanceof e) {
          const i = o.$root;
          t || (F(e, i, y), t = !0);
        }
        return I;
      }
    }), e.component("vue-dialog-box", y);
  }
};
export {
  B as default
};
