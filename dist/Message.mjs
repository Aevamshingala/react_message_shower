import pe, { useState as we } from "react";
var k = { exports: {} }, w = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function Ce() {
  if (fe) return w;
  fe = 1;
  var u = Symbol.for("react.transitional.element"), _ = Symbol.for("react.fragment");
  function b(T, c, i) {
    var d = null;
    if (i !== void 0 && (d = "" + i), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      i = {};
      for (var j in c)
        j !== "key" && (i[j] = c[j]);
    } else i = c;
    return c = i.ref, {
      $$typeof: u,
      type: T,
      key: d,
      ref: c !== void 0 ? c : null,
      props: i
    };
  }
  return w.Fragment = _, w.jsx = b, w.jsxs = b, w;
}
var C = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function Ne() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === je ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Y:
          return "Fragment";
        case _e:
          return "Portal";
        case I:
          return "Profiler";
        case F:
          return "StrictMode";
        case $:
          return "Suspense";
        case W:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case M:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case U:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case q:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function _(e) {
      return "" + e;
    }
    function b(e) {
      try {
        _(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), _(e);
      }
    }
    function T() {
    }
    function c() {
      if (R === 0) {
        D = console.log, ee = console.info, re = console.warn, te = console.error, oe = console.group, ne = console.groupCollapsed, ae = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: T,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      R++;
    }
    function i() {
      if (R--, R === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: x({}, e, { value: D }),
          info: x({}, e, { value: ee }),
          warn: x({}, e, { value: re }),
          error: x({}, e, { value: te }),
          group: x({}, e, { value: oe }),
          groupCollapsed: x({}, e, { value: ne }),
          groupEnd: x({}, e, { value: ae })
        });
      }
      0 > R && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function d(e) {
      if (z === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          z = r && r[1] || "", se = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + z + e + se;
    }
    function j(e, r) {
      if (!e || V) return "";
      var t = G.get(e);
      if (t !== void 0) return t;
      V = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = g.H, g.H = null, c();
      try {
        var s = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var m = function() {
                  throw Error();
                };
                if (Object.defineProperty(m.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(m, []);
                  } catch (E) {
                    var N = E;
                  }
                  Reflect.construct(e, [], m);
                } else {
                  try {
                    m.call();
                  } catch (E) {
                    N = E;
                  }
                  e.call(m.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (E) {
                  N = E;
                }
                (m = e()) && typeof m.catch == "function" && m.catch(function() {
                });
              }
            } catch (E) {
              if (E && N && typeof E.stack == "string")
                return [E.stack, N.stack];
            }
            return [null, null];
          }
        };
        s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          s.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          s.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = s.DetermineComponentFrameRoot(), v = o[0], y = o[1];
        if (v && y) {
          var l = v.split(`
`), h = y.split(`
`);
          for (o = a = 0; a < l.length && !l[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < h.length && !h[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === l.length || o === h.length)
            for (a = l.length - 1, o = h.length - 1; 1 <= a && 0 <= o && l[a] !== h[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (l[a] !== h[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || l[a] !== h[o]) {
                    var p = `
` + l[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, p), p;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        V = !1, g.H = n, i(), Error.prepareStackTrace = t;
      }
      return l = (l = e ? e.displayName || e.name : "") ? d(l) : "", typeof e == "function" && G.set(e, l), l;
    }
    function S(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return j(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return d(e);
      switch (e) {
        case $:
          return d("Suspense");
        case W:
          return d("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            return e = j(e.render, !1), e;
          case U:
            return S(e.type);
          case q:
            r = e._payload, e = e._init;
            try {
              return S(e(r));
            } catch {
            }
        }
      return "";
    }
    function O() {
      var e = g.A;
      return e === null ? null : e.getOwner();
    }
    function Ee(e) {
      if (K.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function me(e, r) {
      function t() {
        le || (le = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function be() {
      var e = u(this.type);
      return ue[e] || (ue[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function ge(e, r, t, n, s, a) {
      return t = a.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: a,
        _owner: s
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: be
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function H(e, r, t, n, s, a) {
      if (typeof e == "string" || typeof e == "function" || e === Y || e === I || e === F || e === $ || e === W || e === Te || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === U || e.$$typeof === Z || e.$$typeof === L || e.$$typeof === M || e.$$typeof === ye || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (J(o)) {
              for (n = 0; n < o.length; n++)
                X(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else X(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : J(e) ? n = "array" : e !== void 0 && e.$$typeof === P ? (n = "<" + (u(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (K.call(r, "key")) {
        o = u(e);
        var v = Object.keys(r).filter(function(l) {
          return l !== "key";
        });
        n = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", ce[o + n] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          v,
          o
        ), ce[o + n] = !0);
      }
      if (o = null, t !== void 0 && (b(t), o = "" + t), Ee(r) && (b(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var y in r)
          y !== "key" && (t[y] = r[y]);
      } else t = r;
      return o && me(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), ge(e, o, a, s, O(), t);
    }
    function X(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Re) {
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            A(n) && B(n, r);
          }
        else if (A(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = Q && e[Q] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            A(e.value) && B(e.value, r);
      }
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    function B(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = xe(r), !ie[r])) {
        ie[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== O() && (t = null, typeof e._owner.tag == "number" ? t = u(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = g.getCurrentStack;
        g.getCurrentStack = function() {
          var s = S(e.type);
          return n && (s += n() || ""), s;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), g.getCurrentStack = n;
      }
    }
    function xe(e) {
      var r = "", t = O();
      return t && (t = u(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = u(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var he = pe, P = Symbol.for("react.transitional.element"), _e = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), Q = Symbol.iterator, je = Symbol.for("react.client.reference"), g = he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, x = Object.assign, ye = Symbol.for("react.client.reference"), J = Array.isArray, R = 0, D, ee, re, te, oe, ne, ae;
    T.__reactDisabledLog = !0;
    var z, se, V = !1, G = new (typeof WeakMap == "function" ? WeakMap : Map)(), Re = Symbol.for("react.client.reference"), le, ue = {}, ce = {}, ie = {};
    C.Fragment = Y, C.jsx = function(e, r, t, n, s) {
      return H(e, r, t, !1, n, s);
    }, C.jsxs = function(e, r, t, n, s) {
      return H(e, r, t, !0, n, s);
    };
  }()), C;
}
var ve;
function ke() {
  return ve || (ve = 1, process.env.NODE_ENV === "production" ? k.exports = Ce() : k.exports = Ne()), k.exports;
}
var f = ke();
function Oe({
  title: u = "hello",
  message: _ = "hi👋, I am from React Messenger",
  style: b = ""
}) {
  const [T, c] = we(!1), i = () => {
    c(!0);
    const d = setTimeout(() => {
      document.querySelector(".hide").style.display = "none", clearTimeout(d);
    }, 2e3);
  };
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsxs("div", { className: `frame ${b} ${T ? "hide" : ""}`, children: [
    /* @__PURE__ */ f.jsxs("div", { className: "header", children: [
      /* @__PURE__ */ f.jsx("div", { children: u && /* @__PURE__ */ f.jsx("h1", { className: "title", children: u }) }),
      /* @__PURE__ */ f.jsx("div", { className: "exit", children: /* @__PURE__ */ f.jsx("button", { className: "exitbutton", onClick: i, children: /* @__PURE__ */ f.jsx("span", { className: "cancel" }) }) })
    ] }),
    /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("p", { className: "message", children: _ }) })
  ] }) });
}
export {
  Oe as default
};
