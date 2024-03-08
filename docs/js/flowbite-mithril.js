var et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zo(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var dr, pn;
function je() {
  if (pn)
    return dr;
  pn = 1;
  function t(e, r, n, o, i, a) {
    return { tag: e, key: r, attrs: n, children: o, text: i, dom: a, domSize: void 0, state: void 0, events: void 0, instance: void 0 };
  }
  return t.normalize = function(e) {
    return Array.isArray(e) ? t("[", void 0, void 0, t.normalizeChildren(e), void 0, void 0) : e == null || typeof e == "boolean" ? null : typeof e == "object" ? e : t("#", void 0, void 0, String(e), void 0, void 0);
  }, t.normalizeChildren = function(e) {
    var r = [];
    if (e.length) {
      for (var n = e[0] != null && e[0].key != null, o = 1; o < e.length; o++)
        if ((e[o] != null && e[o].key != null) !== n)
          throw new TypeError(
            n && (e[o] != null || typeof e[o] == "boolean") ? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole." : "In fragments, vnodes must either all have keys or none have keys."
          );
      for (var o = 0; o < e.length; o++)
        r[o] = t.normalize(e[o]);
    }
    return r;
  }, dr = t, dr;
}
var Qo = je(), Fn = function() {
  var t = arguments[this], e = this + 1, r;
  if (t == null ? t = {} : (typeof t != "object" || t.tag != null || Array.isArray(t)) && (t = {}, e = this), arguments.length === e + 1)
    r = arguments[e], Array.isArray(r) || (r = [r]);
  else
    for (r = []; e < arguments.length; )
      r.push(arguments[e++]);
  return Qo("", t.key, t, r);
}, Yt = {}.hasOwnProperty, ei = je(), ti = Fn, tt = Yt, ri = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g, Un = {};
function gn(t) {
  for (var e in t)
    if (tt.call(t, e))
      return !1;
  return !0;
}
function ni(t) {
  for (var e, r = "div", n = [], o = {}; e = ri.exec(t); ) {
    var i = e[1], a = e[2];
    if (i === "" && a !== "")
      r = a;
    else if (i === "#")
      o.id = a;
    else if (i === ".")
      n.push(a);
    else if (e[3][0] === "[") {
      var s = e[6];
      s && (s = s.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")), e[4] === "class" ? n.push(s) : o[e[4]] = s === "" ? s : s || !0;
    }
  }
  return n.length > 0 && (o.className = n.join(" ")), Un[t] = { tag: r, attrs: o };
}
function oi(t, e) {
  var r = e.attrs, n = tt.call(r, "class"), o = n ? r.class : r.className;
  if (e.tag = t.tag, e.attrs = {}, !gn(t.attrs) && !gn(r)) {
    var i = {};
    for (var a in r)
      tt.call(r, a) && (i[a] = r[a]);
    r = i;
  }
  for (var a in t.attrs)
    tt.call(t.attrs, a) && a !== "className" && !tt.call(r, a) && (r[a] = t.attrs[a]);
  (o != null || t.attrs.className != null) && (r.className = o != null ? t.attrs.className != null ? String(t.attrs.className) + " " + String(o) : o : t.attrs.className != null ? t.attrs.className : null), n && (r.class = null);
  for (var a in r)
    if (tt.call(r, a) && a !== "key") {
      e.attrs = r;
      break;
    }
  return e;
}
function ii(t) {
  if (t == null || typeof t != "string" && typeof t != "function" && typeof t.view != "function")
    throw Error("The selector must be either a string or a component.");
  var e = ti.apply(1, arguments);
  return typeof t == "string" && (e.children = ei.normalizeChildren(e.children), t !== "[") ? oi(Un[t] || ni(t), e) : (e.tag = t, e);
}
var Kn = ii, ai = je(), si = function(t) {
  return t == null && (t = ""), ai("<", void 0, void 0, t, void 0, void 0);
}, li = je(), ci = Fn, di = function() {
  var t = ci.apply(0, arguments);
  return t.tag = "[", t.children = li.normalizeChildren(t.children), t;
}, zr = Kn;
zr.trust = si;
zr.fragment = di;
var ui = zr, Rt = { exports: {} }, ur, hn;
function Xn() {
  if (hn)
    return ur;
  hn = 1;
  var t = function(e) {
    if (!(this instanceof t))
      throw new Error("Promise must be called with 'new'.");
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    var r = this, n = [], o = [], i = f(n, !0), a = f(o, !1), s = r._instance = { resolvers: n, rejectors: o }, c = typeof setImmediate == "function" ? setImmediate : setTimeout;
    function f(h, v) {
      return function w(k) {
        var b;
        try {
          if (v && k != null && (typeof k == "object" || typeof k == "function") && typeof (b = k.then) == "function") {
            if (k === r)
              throw new TypeError("Promise can't be resolved with itself.");
            p(b.bind(k));
          } else
            c(function() {
              !v && h.length === 0 && console.error("Possible unhandled promise rejection:", k);
              for (var x = 0; x < h.length; x++)
                h[x](k);
              n.length = 0, o.length = 0, s.state = v, s.retry = function() {
                w(k);
              };
            });
        } catch (x) {
          a(x);
        }
      };
    }
    function p(h) {
      var v = 0;
      function w(b) {
        return function(x) {
          v++ > 0 || b(x);
        };
      }
      var k = w(a);
      try {
        h(w(i), k);
      } catch (b) {
        k(b);
      }
    }
    p(e);
  };
  return t.prototype.then = function(e, r) {
    var n = this, o = n._instance;
    function i(f, p, h, v) {
      p.push(function(w) {
        if (typeof f != "function")
          h(w);
        else
          try {
            a(f(w));
          } catch (k) {
            s && s(k);
          }
      }), typeof o.retry == "function" && v === o.state && o.retry();
    }
    var a, s, c = new t(function(f, p) {
      a = f, s = p;
    });
    return i(e, o.resolvers, a, !0), i(r, o.rejectors, s, !1), c;
  }, t.prototype.catch = function(e) {
    return this.then(null, e);
  }, t.prototype.finally = function(e) {
    return this.then(
      function(r) {
        return t.resolve(e()).then(function() {
          return r;
        });
      },
      function(r) {
        return t.resolve(e()).then(function() {
          return t.reject(r);
        });
      }
    );
  }, t.resolve = function(e) {
    return e instanceof t ? e : new t(function(r) {
      r(e);
    });
  }, t.reject = function(e) {
    return new t(function(r, n) {
      n(e);
    });
  }, t.all = function(e) {
    return new t(function(r, n) {
      var o = e.length, i = 0, a = [];
      if (e.length === 0)
        r([]);
      else
        for (var s = 0; s < e.length; s++)
          (function(c) {
            function f(p) {
              i++, a[c] = p, i === o && r(a);
            }
            e[c] != null && (typeof e[c] == "object" || typeof e[c] == "function") && typeof e[c].then == "function" ? e[c].then(f, n) : f(e[c]);
          })(s);
    });
  }, t.race = function(e) {
    return new t(function(r, n) {
      for (var o = 0; o < e.length; o++)
        e[o].then(r, n);
    });
  }, ur = t, ur;
}
var ft = Xn();
typeof window < "u" ? (typeof window.Promise > "u" ? window.Promise = ft : window.Promise.prototype.finally || (window.Promise.prototype.finally = ft.prototype.finally), Rt.exports = window.Promise) : typeof et < "u" ? (typeof et.Promise > "u" ? et.Promise = ft : et.Promise.prototype.finally || (et.Promise.prototype.finally = ft.prototype.finally), Rt.exports = et.Promise) : Rt.exports = ft;
var Yn = Rt.exports, fr, bn;
function fi() {
  if (bn)
    return fr;
  bn = 1;
  var t = je();
  return fr = function(e) {
    var r = e && e.document, n, o = {
      svg: "http://www.w3.org/2000/svg",
      math: "http://www.w3.org/1998/Math/MathML"
    };
    function i(d) {
      return d.attrs && d.attrs.xmlns || o[d.tag];
    }
    function a(d, l) {
      if (d.state !== l)
        throw new Error("'vnode.state' must not be modified.");
    }
    function s(d) {
      var l = d.state;
      try {
        return this.apply(l, arguments);
      } finally {
        a(d, l);
      }
    }
    function c() {
      try {
        return r.activeElement;
      } catch {
        return null;
      }
    }
    function f(d, l, u, m, y, I, M) {
      for (var W = u; W < m; W++) {
        var L = l[W];
        L != null && p(d, L, y, M, I);
      }
    }
    function p(d, l, u, m, y) {
      var I = l.tag;
      if (typeof I == "string")
        switch (l.state = {}, l.attrs != null && Je(l.attrs, l, u), I) {
          case "#":
            h(d, l, y);
            break;
          case "<":
            w(d, l, m, y);
            break;
          case "[":
            k(d, l, u, m, y);
            break;
          default:
            b(d, l, u, m, y);
        }
      else
        C(d, l, u, m, y);
    }
    function h(d, l, u) {
      l.dom = r.createTextNode(l.children), B(d, l.dom, u);
    }
    var v = { caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup" };
    function w(d, l, u, m) {
      var y = l.children.match(/^\s*?<(\w+)/im) || [], I = r.createElement(v[y[1]] || "div");
      u === "http://www.w3.org/2000/svg" ? (I.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + l.children + "</svg>", I = I.firstChild) : I.innerHTML = l.children, l.dom = I.firstChild, l.domSize = I.childNodes.length, l.instance = [];
      for (var M = r.createDocumentFragment(), W; W = I.firstChild; )
        l.instance.push(W), M.appendChild(W);
      B(d, M, m);
    }
    function k(d, l, u, m, y) {
      var I = r.createDocumentFragment();
      if (l.children != null) {
        var M = l.children;
        f(I, M, 0, M.length, u, null, m);
      }
      l.dom = I.firstChild, l.domSize = I.childNodes.length, B(d, I, y);
    }
    function b(d, l, u, m, y) {
      var I = l.tag, M = l.attrs, W = M && M.is;
      m = i(l) || m;
      var L = m ? W ? r.createElementNS(m, I, { is: W }) : r.createElementNS(m, I) : W ? r.createElement(I, { is: W }) : r.createElement(I);
      if (l.dom = L, M != null && ae(l, M, m), B(d, L, y), !S(l) && l.children != null) {
        var J = l.children;
        f(L, J, 0, J.length, u, null, m), l.tag === "select" && M != null && xe(l, M);
      }
    }
    function x(d, l) {
      var u;
      if (typeof d.tag.view == "function") {
        if (d.state = Object.create(d.tag), u = d.state.view, u.$$reentrantLock$$ != null)
          return;
        u.$$reentrantLock$$ = !0;
      } else {
        if (d.state = void 0, u = d.tag, u.$$reentrantLock$$ != null)
          return;
        u.$$reentrantLock$$ = !0, d.state = d.tag.prototype != null && typeof d.tag.prototype.view == "function" ? new d.tag(d) : d.tag(d);
      }
      if (Je(d.state, d, l), d.attrs != null && Je(d.attrs, d, l), d.instance = t.normalize(s.call(d.state.view, d)), d.instance === d)
        throw Error("A view cannot return the vnode it received as argument");
      u.$$reentrantLock$$ = null;
    }
    function C(d, l, u, m, y) {
      x(l, u), l.instance != null ? (p(d, l.instance, u, m, y), l.dom = l.instance.dom, l.domSize = l.dom != null ? l.instance.domSize : 0) : l.domSize = 0;
    }
    function E(d, l, u, m, y, I) {
      if (!(l === u || l == null && u == null))
        if (l == null || l.length === 0)
          f(d, u, 0, u.length, m, y, I);
        else if (u == null || u.length === 0)
          V(d, l, 0, l.length);
        else {
          var M = l[0] != null && l[0].key != null, W = u[0] != null && u[0].key != null, L = 0, J = 0;
          if (!M)
            for (; J < l.length && l[J] == null; )
              J++;
          if (!W)
            for (; L < u.length && u[L] == null; )
              L++;
          if (M !== W)
            V(d, l, J, l.length), f(d, u, L, u.length, m, y, I);
          else if (W) {
            for (var de = l.length - 1, se = u.length - 1, Tt, ue, ie, ce, re, ir; de >= J && se >= L && (ce = l[de], re = u[se], ce.key === re.key); )
              ce !== re && j(d, ce, re, m, y, I), re.dom != null && (y = re.dom), de--, se--;
            for (; de >= J && se >= L && (ue = l[J], ie = u[L], ue.key === ie.key); )
              J++, L++, ue !== ie && j(d, ue, ie, m, A(l, J, y), I);
            for (; de >= J && se >= L && !(L === se || ue.key !== re.key || ce.key !== ie.key); )
              ir = A(l, J, y), $(d, ce, ir), ce !== ie && j(d, ce, ie, m, ir, I), ++L <= --se && $(d, ue, y), ue !== re && j(d, ue, re, m, y, I), re.dom != null && (y = re.dom), J++, de--, ce = l[de], re = u[se], ue = l[J], ie = u[L];
            for (; de >= J && se >= L && ce.key === re.key; )
              ce !== re && j(d, ce, re, m, y, I), re.dom != null && (y = re.dom), de--, se--, ce = l[de], re = u[se];
            if (L > se)
              V(d, l, J, de + 1);
            else if (J > de)
              f(d, u, L, se + 1, m, y, I);
            else {
              var Jo = y, fn = se - L + 1, ut = new Array(fn), ar = 0, oe = 0, sr = 2147483647, lr = 0, Tt, cr;
              for (oe = 0; oe < fn; oe++)
                ut[oe] = -1;
              for (oe = se; oe >= L; oe--) {
                Tt == null && (Tt = Y(l, J, de + 1)), re = u[oe];
                var Qe = Tt[re.key];
                Qe != null && (sr = Qe < sr ? Qe : -1, ut[oe - L] = Qe, ce = l[Qe], l[Qe] = null, ce !== re && j(d, ce, re, m, y, I), re.dom != null && (y = re.dom), lr++);
              }
              if (y = Jo, lr !== de - J + 1 && V(d, l, J, de + 1), lr === 0)
                f(d, u, L, se + 1, m, y, I);
              else if (sr === -1)
                for (cr = F(ut), ar = cr.length - 1, oe = se; oe >= L; oe--)
                  ie = u[oe], ut[oe - L] === -1 ? p(d, ie, m, I, y) : cr[ar] === oe - L ? ar-- : $(d, ie, y), ie.dom != null && (y = u[oe].dom);
              else
                for (oe = se; oe >= L; oe--)
                  ie = u[oe], ut[oe - L] === -1 && p(d, ie, m, I, y), ie.dom != null && (y = u[oe].dom);
            }
          } else {
            var or = l.length < u.length ? l.length : u.length;
            for (L = L < J ? L : J; L < or; L++)
              ue = l[L], ie = u[L], !(ue === ie || ue == null && ie == null) && (ue == null ? p(d, ie, m, I, A(l, L + 1, y)) : ie == null ? K(d, ue) : j(d, ue, ie, m, A(l, L + 1, y), I));
            l.length > or && V(d, l, L, l.length), u.length > or && f(d, u, L, u.length, m, y, I);
          }
        }
    }
    function j(d, l, u, m, y, I) {
      var M = l.tag, W = u.tag;
      if (M === W) {
        if (u.state = l.state, u.events = l.events, nr(u, l))
          return;
        if (typeof M == "string")
          switch (u.attrs != null && Ze(u.attrs, u, m), M) {
            case "#":
              P(l, u);
              break;
            case "<":
              R(d, l, u, I, y);
              break;
            case "[":
              z(d, l, u, m, y, I);
              break;
            default:
              D(l, u, m, I);
          }
        else
          G(d, l, u, m, y, I);
      } else
        K(d, l), p(d, u, m, I, y);
    }
    function P(d, l) {
      d.children.toString() !== l.children.toString() && (d.dom.nodeValue = l.children), l.dom = d.dom;
    }
    function R(d, l, u, m, y) {
      l.children !== u.children ? (N(d, l), w(d, u, m, y)) : (u.dom = l.dom, u.domSize = l.domSize, u.instance = l.instance);
    }
    function z(d, l, u, m, y, I) {
      E(d, l.children, u.children, m, y, I);
      var M = 0, W = u.children;
      if (u.dom = null, W != null) {
        for (var L = 0; L < W.length; L++) {
          var J = W[L];
          J != null && J.dom != null && (u.dom == null && (u.dom = J.dom), M += J.domSize || 1);
        }
        M !== 1 && (u.domSize = M);
      }
    }
    function D(d, l, u, m) {
      var y = l.dom = d.dom;
      m = i(l) || m, l.tag === "textarea" && l.attrs == null && (l.attrs = {}), Me(l, d.attrs, l.attrs, m), S(l) || E(y, d.children, l.children, u, null, m);
    }
    function G(d, l, u, m, y, I) {
      if (u.instance = t.normalize(s.call(u.state.view, u)), u.instance === u)
        throw Error("A view cannot return the vnode it received as argument");
      Ze(u.state, u, m), u.attrs != null && Ze(u.attrs, u, m), u.instance != null ? (l.instance == null ? p(d, u.instance, m, I, y) : j(d, l.instance, u.instance, m, y, I), u.dom = u.instance.dom, u.domSize = u.instance.domSize) : l.instance != null ? (K(d, l.instance), u.dom = void 0, u.domSize = 0) : (u.dom = l.dom, u.domSize = l.domSize);
    }
    function Y(d, l, u) {
      for (var m = /* @__PURE__ */ Object.create(null); l < u; l++) {
        var y = d[l];
        if (y != null) {
          var I = y.key;
          I != null && (m[I] = l);
        }
      }
      return m;
    }
    var H = [];
    function F(d) {
      for (var l = [0], u = 0, m = 0, y = 0, I = H.length = d.length, y = 0; y < I; y++)
        H[y] = d[y];
      for (var y = 0; y < I; ++y)
        if (d[y] !== -1) {
          var M = l[l.length - 1];
          if (d[M] < d[y]) {
            H[y] = M, l.push(y);
            continue;
          }
          for (u = 0, m = l.length - 1; u < m; ) {
            var W = (u >>> 1) + (m >>> 1) + (u & m & 1);
            d[l[W]] < d[y] ? u = W + 1 : m = W;
          }
          d[y] < d[l[u]] && (u > 0 && (H[y] = l[u - 1]), l[u] = y);
        }
      for (u = l.length, m = l[u - 1]; u-- > 0; )
        l[u] = m, m = H[m];
      return H.length = 0, l;
    }
    function A(d, l, u) {
      for (; l < d.length; l++)
        if (d[l] != null && d[l].dom != null)
          return d[l].dom;
      return u;
    }
    function $(d, l, u) {
      var m = r.createDocumentFragment();
      O(d, m, l), B(d, m, u);
    }
    function O(d, l, u) {
      for (; u.dom != null && u.dom.parentNode === d; ) {
        if (typeof u.tag != "string") {
          if (u = u.instance, u != null)
            continue;
        } else if (u.tag === "<")
          for (var m = 0; m < u.instance.length; m++)
            l.appendChild(u.instance[m]);
        else if (u.tag !== "[")
          l.appendChild(u.dom);
        else if (u.children.length === 1) {
          if (u = u.children[0], u != null)
            continue;
        } else
          for (var m = 0; m < u.children.length; m++) {
            var y = u.children[m];
            y != null && O(d, l, y);
          }
        break;
      }
    }
    function B(d, l, u) {
      u != null ? d.insertBefore(l, u) : d.appendChild(l);
    }
    function S(d) {
      if (d.attrs == null || d.attrs.contenteditable == null && // attribute
      d.attrs.contentEditable == null)
        return !1;
      var l = d.children;
      if (l != null && l.length === 1 && l[0].tag === "<") {
        var u = l[0].children;
        d.dom.innerHTML !== u && (d.dom.innerHTML = u);
      } else if (l != null && l.length !== 0)
        throw new Error("Child node of a contenteditable must be trusted.");
      return !0;
    }
    function V(d, l, u, m) {
      for (var y = u; y < m; y++) {
        var I = l[y];
        I != null && K(d, I);
      }
    }
    function K(d, l) {
      var u = 0, m = l.state, y, I;
      if (typeof l.tag != "string" && typeof l.state.onbeforeremove == "function") {
        var M = s.call(l.state.onbeforeremove, l);
        M != null && typeof M.then == "function" && (u = 1, y = M);
      }
      if (l.attrs && typeof l.attrs.onbeforeremove == "function") {
        var M = s.call(l.attrs.onbeforeremove, l);
        M != null && typeof M.then == "function" && (u |= 2, I = M);
      }
      if (a(l, m), !u)
        ne(l), Q(d, l);
      else {
        if (y != null) {
          var W = function() {
            u & 1 && (u &= 2, u || L());
          };
          y.then(W, W);
        }
        if (I != null) {
          var W = function() {
            u & 2 && (u &= 1, u || L());
          };
          I.then(W, W);
        }
      }
      function L() {
        a(l, m), ne(l), Q(d, l);
      }
    }
    function N(d, l) {
      for (var u = 0; u < l.instance.length; u++)
        d.removeChild(l.instance[u]);
    }
    function Q(d, l) {
      for (; l.dom != null && l.dom.parentNode === d; ) {
        if (typeof l.tag != "string") {
          if (l = l.instance, l != null)
            continue;
        } else if (l.tag === "<")
          N(d, l);
        else {
          if (l.tag !== "[" && (d.removeChild(l.dom), !Array.isArray(l.children)))
            break;
          if (l.children.length === 1) {
            if (l = l.children[0], l != null)
              continue;
          } else
            for (var u = 0; u < l.children.length; u++) {
              var m = l.children[u];
              m != null && Q(d, m);
            }
        }
        break;
      }
    }
    function ne(d) {
      if (typeof d.tag != "string" && typeof d.state.onremove == "function" && s.call(d.state.onremove, d), d.attrs && typeof d.attrs.onremove == "function" && s.call(d.attrs.onremove, d), typeof d.tag != "string")
        d.instance != null && ne(d.instance);
      else {
        var l = d.children;
        if (Array.isArray(l))
          for (var u = 0; u < l.length; u++) {
            var m = l[u];
            m != null && ne(m);
          }
      }
    }
    function ae(d, l, u) {
      d.tag === "input" && l.type != null && d.dom.setAttribute("type", l.type);
      var m = l != null && d.tag === "input" && l.type === "file";
      for (var y in l)
        Z(d, y, null, l[y], u, m);
    }
    function Z(d, l, u, m, y, I) {
      if (!(l === "key" || l === "is" || m == null || ke(l) || u === m && !Xe(d, l) && typeof m != "object" || l === "type" && d.tag === "input")) {
        if (l[0] === "o" && l[1] === "n")
          return At(d, l, m);
        if (l.slice(0, 6) === "xlink:")
          d.dom.setAttributeNS("http://www.w3.org/1999/xlink", l.slice(6), m);
        else if (l === "style")
          ct(d.dom, u, m);
        else if (Ye(d, l, y)) {
          if (l === "value") {
            if ((d.tag === "input" || d.tag === "textarea") && d.dom.value === "" + m && (I || d.dom === c()) || d.tag === "select" && u !== null && d.dom.value === "" + m || d.tag === "option" && u !== null && d.dom.value === "" + m)
              return;
            if (I && "" + m != "") {
              console.error("`value` is read-only on file inputs!");
              return;
            }
          }
          d.dom[l] = m;
        } else
          typeof m == "boolean" ? m ? d.dom.setAttribute(l, "") : d.dom.removeAttribute(l) : d.dom.setAttribute(l === "className" ? "class" : l, m);
      }
    }
    function fe(d, l, u, m) {
      if (!(l === "key" || l === "is" || u == null || ke(l)))
        if (l[0] === "o" && l[1] === "n")
          At(d, l, void 0);
        else if (l === "style")
          ct(d.dom, u, null);
        else if (Ye(d, l, m) && l !== "className" && l !== "title" && !(l === "value" && (d.tag === "option" || d.tag === "select" && d.dom.selectedIndex === -1 && d.dom === c())) && !(d.tag === "input" && l === "type"))
          d.dom[l] = null;
        else {
          var y = l.indexOf(":");
          y !== -1 && (l = l.slice(y + 1)), u !== !1 && d.dom.removeAttribute(l === "className" ? "class" : l);
        }
    }
    function xe(d, l) {
      if ("value" in l)
        if (l.value === null)
          d.dom.selectedIndex !== -1 && (d.dom.value = null);
        else {
          var u = "" + l.value;
          (d.dom.value !== u || d.dom.selectedIndex === -1) && (d.dom.value = u);
        }
      "selectedIndex" in l && Z(d, "selectedIndex", null, l.selectedIndex, void 0);
    }
    function Me(d, l, u, m) {
      if (l && l === u && console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major"), u != null) {
        d.tag === "input" && u.type != null && d.dom.setAttribute("type", u.type);
        var y = d.tag === "input" && u.type === "file";
        for (var I in u)
          Z(d, I, l && l[I], u[I], m, y);
      }
      var M;
      if (l != null)
        for (var I in l)
          (M = l[I]) != null && (u == null || u[I] == null) && fe(d, I, M, m);
    }
    function Xe(d, l) {
      return l === "value" || l === "checked" || l === "selectedIndex" || l === "selected" && d.dom === c() || d.tag === "option" && d.dom.parentNode === r.activeElement;
    }
    function ke(d) {
      return d === "oninit" || d === "oncreate" || d === "onupdate" || d === "onremove" || d === "onbeforeremove" || d === "onbeforeupdate";
    }
    function Ye(d, l, u) {
      return u === void 0 && // If it's a custom element, just keep it.
      (d.tag.indexOf("-") > -1 || d.attrs != null && d.attrs.is || // If it's a normal element, let's try to avoid a few browser bugs.
      l !== "href" && l !== "list" && l !== "form" && l !== "width" && l !== "height") && l in d.dom;
    }
    var rr = /[A-Z]/g;
    function st(d) {
      return "-" + d.toLowerCase();
    }
    function lt(d) {
      return d[0] === "-" && d[1] === "-" ? d : d === "cssFloat" ? "float" : d.replace(rr, st);
    }
    function ct(d, l, u) {
      if (l !== u)
        if (u == null)
          d.style.cssText = "";
        else if (typeof u != "object")
          d.style.cssText = u;
        else if (l == null || typeof l != "object") {
          d.style.cssText = "";
          for (var m in u) {
            var y = u[m];
            y != null && d.style.setProperty(lt(m), String(y));
          }
        } else {
          for (var m in u) {
            var y = u[m];
            y != null && (y = String(y)) !== String(l[m]) && d.style.setProperty(lt(m), y);
          }
          for (var m in l)
            l[m] != null && u[m] == null && d.style.removeProperty(lt(m));
        }
    }
    function dt() {
      this._ = n;
    }
    dt.prototype = /* @__PURE__ */ Object.create(null), dt.prototype.handleEvent = function(d) {
      var l = this["on" + d.type], u;
      typeof l == "function" ? u = l.call(d.currentTarget, d) : typeof l.handleEvent == "function" && l.handleEvent(d), this._ && d.redraw !== !1 && (0, this._)(), u === !1 && (d.preventDefault(), d.stopPropagation());
    };
    function At(d, l, u) {
      if (d.events != null) {
        if (d.events._ = n, d.events[l] === u)
          return;
        u != null && (typeof u == "function" || typeof u == "object") ? (d.events[l] == null && d.dom.addEventListener(l.slice(2), d.events, !1), d.events[l] = u) : (d.events[l] != null && d.dom.removeEventListener(l.slice(2), d.events, !1), d.events[l] = void 0);
      } else
        u != null && (typeof u == "function" || typeof u == "object") && (d.events = new dt(), d.dom.addEventListener(l.slice(2), d.events, !1), d.events[l] = u);
    }
    function Je(d, l, u) {
      typeof d.oninit == "function" && s.call(d.oninit, l), typeof d.oncreate == "function" && u.push(s.bind(d.oncreate, l));
    }
    function Ze(d, l, u) {
      typeof d.onupdate == "function" && u.push(s.bind(d.onupdate, l));
    }
    function nr(d, l) {
      do {
        if (d.attrs != null && typeof d.attrs.onbeforeupdate == "function") {
          var u = s.call(d.attrs.onbeforeupdate, d, l);
          if (u !== void 0 && !u)
            break;
        }
        if (typeof d.tag != "string" && typeof d.state.onbeforeupdate == "function") {
          var u = s.call(d.state.onbeforeupdate, d, l);
          if (u !== void 0 && !u)
            break;
        }
        return !1;
      } while (!1);
      return d.dom = l.dom, d.domSize = l.domSize, d.instance = l.instance, d.attrs = l.attrs, d.children = l.children, d.text = l.text, !0;
    }
    var De;
    return function(d, l, u) {
      if (!d)
        throw new TypeError("DOM element being rendered to does not exist.");
      if (De != null && d.contains(De))
        throw new TypeError("Node is currently being rendered to and thus is locked.");
      var m = n, y = De, I = [], M = c(), W = d.namespaceURI;
      De = d, n = typeof u == "function" ? u : void 0;
      try {
        d.vnodes == null && (d.textContent = ""), l = t.normalizeChildren(Array.isArray(l) ? l : [l]), E(d, d.vnodes, l, I, null, W === "http://www.w3.org/1999/xhtml" ? void 0 : W), d.vnodes = l, M != null && c() !== M && typeof M.focus == "function" && M.focus();
        for (var L = 0; L < I.length; L++)
          I[L]();
      } finally {
        n = m, De = y;
      }
    };
  }, fr;
}
var Jn = fi()(typeof window < "u" ? window : null), pr, mn;
function pi() {
  if (mn)
    return pr;
  mn = 1;
  var t = je();
  return pr = function(e, r, n) {
    var o = [], i = !1, a = -1;
    function s() {
      for (a = 0; a < o.length; a += 2)
        try {
          e(o[a], t(o[a + 1]), c);
        } catch (p) {
          n.error(p);
        }
      a = -1;
    }
    function c() {
      i || (i = !0, r(function() {
        i = !1, s();
      }));
    }
    c.sync = s;
    function f(p, h) {
      if (h != null && h.view == null && typeof h != "function")
        throw new TypeError("m.mount expects a component, not a vnode.");
      var v = o.indexOf(p);
      v >= 0 && (o.splice(v, 2), v <= a && (a -= 2), e(p, [])), h != null && (o.push(p, h), e(p, t(h), c));
    }
    return { mount: f, redraw: c };
  }, pr;
}
var gi = Jn, Pr = pi()(gi, typeof requestAnimationFrame < "u" ? requestAnimationFrame : null, typeof console < "u" ? console : null), gr, vn;
function Zn() {
  return vn || (vn = 1, gr = function(t) {
    if (Object.prototype.toString.call(t) !== "[object Object]")
      return "";
    var e = [];
    for (var r in t)
      n(r, t[r]);
    return e.join("&");
    function n(o, i) {
      if (Array.isArray(i))
        for (var a = 0; a < i.length; a++)
          n(o + "[" + a + "]", i[a]);
      else if (Object.prototype.toString.call(i) === "[object Object]")
        for (var a in i)
          n(o + "[" + a + "]", i[a]);
      else
        e.push(encodeURIComponent(o) + (i != null && i !== "" ? "=" + encodeURIComponent(i) : ""));
    }
  }), gr;
}
var hr, yn;
function Qn() {
  if (yn)
    return hr;
  yn = 1;
  var t = Yt;
  return hr = Object.assign || function(e, r) {
    for (var n in r)
      t.call(r, n) && (e[n] = r[n]);
  }, hr;
}
var br, wn;
function Sr() {
  if (wn)
    return br;
  wn = 1;
  var t = Zn(), e = Qn();
  return br = function(r, n) {
    if (/:([^\/\.-]+)(\.{3})?:/.test(r))
      throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
    if (n == null)
      return r;
    var o = r.indexOf("?"), i = r.indexOf("#"), a = i < 0 ? r.length : i, s = o < 0 ? a : o, c = r.slice(0, s), f = {};
    e(f, n);
    var p = c.replace(/:([^\/\.-]+)(\.{3})?/g, function(C, E, j) {
      return delete f[E], n[E] == null ? C : j ? n[E] : encodeURIComponent(String(n[E]));
    }), h = p.indexOf("?"), v = p.indexOf("#"), w = v < 0 ? p.length : v, k = h < 0 ? w : h, b = p.slice(0, k);
    o >= 0 && (b += r.slice(o, a)), h >= 0 && (b += (o < 0 ? "?" : "&") + p.slice(h, w));
    var x = t(f);
    return x && (b += (o < 0 && h < 0 ? "?" : "&") + x), i >= 0 && (b += r.slice(i)), v >= 0 && (b += (i < 0 ? "" : "&") + p.slice(v)), b;
  }, br;
}
var hi = Sr(), xn = Yt, bi = function(t, e, r) {
  var n = 0;
  function o(s) {
    return new e(s);
  }
  o.prototype = e.prototype, o.__proto__ = e;
  function i(s) {
    return function(c, f) {
      typeof c != "string" ? (f = c, c = c.url) : f == null && (f = {});
      var p = new e(function(k, b) {
        s(hi(c, f.params), f, function(x) {
          if (typeof f.type == "function")
            if (Array.isArray(x))
              for (var C = 0; C < x.length; C++)
                x[C] = new f.type(x[C]);
            else
              x = new f.type(x);
          k(x);
        }, b);
      });
      if (f.background === !0)
        return p;
      var h = 0;
      function v() {
        --h === 0 && typeof r == "function" && r();
      }
      return w(p);
      function w(k) {
        var b = k.then;
        return k.constructor = o, k.then = function() {
          h++;
          var x = b.apply(k, arguments);
          return x.then(v, function(C) {
            if (v(), h === 0)
              throw C;
          }), w(x);
        }, k;
      }
    };
  }
  function a(s, c) {
    for (var f in s.headers)
      if (xn.call(s.headers, f) && f.toLowerCase() === c)
        return !0;
    return !1;
  }
  return {
    request: i(function(s, c, f, p) {
      var h = c.method != null ? c.method.toUpperCase() : "GET", v = c.body, w = (c.serialize == null || c.serialize === JSON.serialize) && !(v instanceof t.FormData || v instanceof t.URLSearchParams), k = c.responseType || (typeof c.extract == "function" ? "" : "json"), b = new t.XMLHttpRequest(), x = !1, C = !1, E = b, j, P = b.abort;
      b.abort = function() {
        x = !0, P.call(this);
      }, b.open(h, s, c.async !== !1, typeof c.user == "string" ? c.user : void 0, typeof c.password == "string" ? c.password : void 0), w && v != null && !a(c, "content-type") && b.setRequestHeader("Content-Type", "application/json; charset=utf-8"), typeof c.deserialize != "function" && !a(c, "accept") && b.setRequestHeader("Accept", "application/json, text/*"), c.withCredentials && (b.withCredentials = c.withCredentials), c.timeout && (b.timeout = c.timeout), b.responseType = k;
      for (var R in c.headers)
        xn.call(c.headers, R) && b.setRequestHeader(R, c.headers[R]);
      b.onreadystatechange = function(z) {
        if (!x && z.target.readyState === 4)
          try {
            var D = z.target.status >= 200 && z.target.status < 300 || z.target.status === 304 || /^file:\/\//i.test(s), G = z.target.response, Y;
            if (k === "json") {
              if (!z.target.responseType && typeof c.extract != "function")
                try {
                  G = JSON.parse(z.target.responseText);
                } catch {
                  G = null;
                }
            } else
              (!k || k === "text") && G == null && (G = z.target.responseText);
            if (typeof c.extract == "function" ? (G = c.extract(z.target, c), D = !0) : typeof c.deserialize == "function" && (G = c.deserialize(G)), D)
              f(G);
            else {
              var H = function() {
                try {
                  Y = z.target.responseText;
                } catch {
                  Y = G;
                }
                var F = new Error(Y);
                F.code = z.target.status, F.response = G, p(F);
              };
              b.status === 0 ? setTimeout(function() {
                C || H();
              }) : H();
            }
          } catch (F) {
            p(F);
          }
      }, b.ontimeout = function(z) {
        C = !0;
        var D = new Error("Request timed out");
        D.code = z.target.status, p(D);
      }, typeof c.config == "function" && (b = c.config(b, c, s) || b, b !== E && (j = b.abort, b.abort = function() {
        x = !0, j.call(this);
      })), v == null ? b.send() : typeof c.serialize == "function" ? b.send(c.serialize(v)) : v instanceof t.FormData || v instanceof t.URLSearchParams ? b.send(v) : b.send(JSON.stringify(v));
    }),
    jsonp: i(function(s, c, f, p) {
      var h = c.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + n++, v = t.document.createElement("script");
      t[h] = function(w) {
        delete t[h], v.parentNode.removeChild(v), f(w);
      }, v.onerror = function() {
        delete t[h], v.parentNode.removeChild(v), p(new Error("JSONP request failed"));
      }, v.src = s + (s.indexOf("?") < 0 ? "?" : "&") + encodeURIComponent(c.callbackKey || "callback") + "=" + encodeURIComponent(h), t.document.documentElement.appendChild(v);
    })
  };
}, mi = Yn, vi = Pr, yi = bi(typeof window < "u" ? window : null, mi, vi.redraw), mr, kn;
function eo() {
  if (kn)
    return mr;
  kn = 1;
  function t(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }
  return mr = function(e) {
    if (e === "" || e == null)
      return {};
    e.charAt(0) === "?" && (e = e.slice(1));
    for (var r = e.split("&"), n = {}, o = {}, i = 0; i < r.length; i++) {
      var a = r[i].split("="), s = t(a[0]), c = a.length === 2 ? t(a[1]) : "";
      c === "true" ? c = !0 : c === "false" && (c = !1);
      var f = s.split(/\]\[?|\[/), p = o;
      s.indexOf("[") > -1 && f.pop();
      for (var h = 0; h < f.length; h++) {
        var v = f[h], w = f[h + 1], k = w == "" || !isNaN(parseInt(w, 10));
        if (v === "") {
          var s = f.slice(0, h).join();
          n[s] == null && (n[s] = Array.isArray(p) ? p.length : 0), v = n[s]++;
        } else if (v === "__proto__")
          break;
        if (h === f.length - 1)
          p[v] = c;
        else {
          var b = Object.getOwnPropertyDescriptor(p, v);
          b != null && (b = b.value), b == null && (p[v] = b = k ? [] : {}), p = b;
        }
      }
    }
    return o;
  }, mr;
}
var vr, _n;
function jr() {
  if (_n)
    return vr;
  _n = 1;
  var t = eo();
  return vr = function(e) {
    var r = e.indexOf("?"), n = e.indexOf("#"), o = n < 0 ? e.length : n, i = r < 0 ? o : r, a = e.slice(0, i).replace(/\/{2,}/g, "/");
    return a ? (a[0] !== "/" && (a = "/" + a), a.length > 1 && a[a.length - 1] === "/" && (a = a.slice(0, -1))) : a = "/", {
      path: a,
      params: r < 0 ? {} : t(e.slice(r + 1, o))
    };
  }, vr;
}
var yr, En;
function wi() {
  if (En)
    return yr;
  En = 1;
  var t = jr();
  return yr = function(e) {
    var r = t(e), n = Object.keys(r.params), o = [], i = new RegExp("^" + r.path.replace(
      // I escape literal text so people can use things like `:file.:ext` or
      // `:lang-:locale` in routes. This is all merged into one pass so I
      // don't also accidentally escape `-` and make it harder to detect it to
      // ban it from template parameters.
      /:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
      function(a, s, c) {
        return s == null ? "\\" + a : (o.push({ k: s, r: c === "..." }), c === "..." ? "(.*)" : c === "." ? "([^/]+)\\." : "([^/]+)" + (c || ""));
      }
    ) + "$");
    return function(a) {
      for (var s = 0; s < n.length; s++)
        if (r.params[n[s]] !== a.params[n[s]])
          return !1;
      if (!o.length)
        return i.test(a.path);
      var c = i.exec(a.path);
      if (c == null)
        return !1;
      for (var s = 0; s < o.length; s++)
        a.params[o[s].k] = o[s].r ? c[s + 1] : decodeURIComponent(c[s + 1]);
      return !0;
    };
  }, yr;
}
var wr, In;
function to() {
  if (In)
    return wr;
  In = 1;
  var t = Yt, e = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");
  return wr = function(r, n) {
    var o = {};
    if (n != null)
      for (var i in r)
        t.call(r, i) && !e.test(i) && n.indexOf(i) < 0 && (o[i] = r[i]);
    else
      for (var i in r)
        t.call(r, i) && !e.test(i) && (o[i] = r[i]);
    return o;
  }, wr;
}
var xr, Cn;
function xi() {
  if (Cn)
    return xr;
  Cn = 1;
  var t = je(), e = Kn, r = Yn, n = Sr(), o = jr(), i = wi(), a = Qn(), s = to(), c = {};
  function f(p) {
    try {
      return decodeURIComponent(p);
    } catch {
      return p;
    }
  }
  return xr = function(p, h) {
    var v = p == null ? null : typeof p.setImmediate == "function" ? p.setImmediate : p.setTimeout, w = r.resolve(), k = !1, b = !1, x = 0, C, E, j = c, P, R, z, D, G = {
      onbeforeupdate: function() {
        return x = x ? 2 : 1, !(!x || c === j);
      },
      onremove: function() {
        p.removeEventListener("popstate", F, !1), p.removeEventListener("hashchange", H, !1);
      },
      view: function() {
        if (!(!x || c === j)) {
          var O = [t(P, R.key, R)];
          return j && (O = j.render(O[0])), O;
        }
      }
    }, Y = $.SKIP = {};
    function H() {
      k = !1;
      var O = p.location.hash;
      $.prefix[0] !== "#" && (O = p.location.search + O, $.prefix[0] !== "?" && (O = p.location.pathname + O, O[0] !== "/" && (O = "/" + O)));
      var B = O.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, f).slice($.prefix.length), S = o(B);
      a(S.params, p.history.state);
      function V(N) {
        console.error(N), A(E, null, { replace: !0 });
      }
      K(0);
      function K(N) {
        for (; N < C.length; N++)
          if (C[N].check(S)) {
            var Q = C[N].component, ne = C[N].route, ae = Q, Z = D = function(fe) {
              if (Z === D) {
                if (fe === Y)
                  return K(N + 1);
                P = fe != null && (typeof fe.view == "function" || typeof fe == "function") ? fe : "div", R = S.params, z = B, D = null, j = Q.render ? Q : null, x === 2 ? h.redraw() : (x = 2, h.redraw.sync());
              }
            };
            Q.view || typeof Q == "function" ? (Q = {}, Z(ae)) : Q.onmatch ? w.then(function() {
              return Q.onmatch(S.params, B, ne);
            }).then(Z, B === E ? null : V) : Z("div");
            return;
          }
        if (B === E)
          throw new Error("Could not resolve default route " + E + ".");
        A(E, null, { replace: !0 });
      }
    }
    function F() {
      k || (k = !0, v(H));
    }
    function A(O, B, S) {
      if (O = n(O, B), b) {
        F();
        var V = S ? S.state : null, K = S ? S.title : null;
        S && S.replace ? p.history.replaceState(V, K, $.prefix + O) : p.history.pushState(V, K, $.prefix + O);
      } else
        p.location.href = $.prefix + O;
    }
    function $(O, B, S) {
      if (!O)
        throw new TypeError("DOM element being rendered to does not exist.");
      if (C = Object.keys(S).map(function(K) {
        if (K[0] !== "/")
          throw new SyntaxError("Routes must start with a '/'.");
        if (/:([^\/\.-]+)(\.{3})?:/.test(K))
          throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");
        return {
          route: K,
          component: S[K],
          check: i(K)
        };
      }), E = B, B != null) {
        var V = o(B);
        if (!C.some(function(K) {
          return K.check(V);
        }))
          throw new ReferenceError("Default route doesn't match any known routes.");
      }
      typeof p.history.pushState == "function" ? p.addEventListener("popstate", F, !1) : $.prefix[0] === "#" && p.addEventListener("hashchange", H, !1), b = !0, h.mount(O, G), H();
    }
    return $.set = function(O, B, S) {
      D != null && (S = S || {}, S.replace = !0), D = null, A(O, B, S);
    }, $.get = function() {
      return z;
    }, $.prefix = "#!", $.Link = {
      view: function(O) {
        var B = e(
          O.attrs.selector || "a",
          s(O.attrs, ["options", "params", "selector", "onclick"]),
          O.children
        ), S, V, K;
        return (B.attrs.disabled = !!B.attrs.disabled) ? (B.attrs.href = null, B.attrs["aria-disabled"] = "true") : (S = O.attrs.options, V = O.attrs.onclick, K = n(B.attrs.href, O.attrs.params), B.attrs.href = $.prefix + K, B.attrs.onclick = function(N) {
          var Q;
          typeof V == "function" ? Q = V.call(N.currentTarget, N) : V == null || typeof V != "object" || typeof V.handleEvent == "function" && V.handleEvent(N), // Skip if `onclick` prevented default
          Q !== !1 && !N.defaultPrevented && // Ignore everything but left clicks
          (N.button === 0 || N.which === 0 || N.which === 1) && // Let the browser handle `target=_blank`, etc.
          (!N.currentTarget.target || N.currentTarget.target === "_self") && // No modifier keys
          !N.ctrlKey && !N.metaKey && !N.shiftKey && !N.altKey && (N.preventDefault(), N.redraw = !1, $.set(K, null, S));
        }), B;
      }
    }, $.param = function(O) {
      return R && O != null ? R[O] : R;
    }, $;
  }, xr;
}
var kr, An;
function ki() {
  if (An)
    return kr;
  An = 1;
  var t = Pr;
  return kr = xi()(typeof window < "u" ? window : null, t), kr;
}
var Jt = ui, ro = yi, no = Pr, le = function() {
  return Jt.apply(this, arguments);
};
le.m = Jt;
le.trust = Jt.trust;
le.fragment = Jt.fragment;
le.Fragment = "[";
le.mount = no.mount;
le.route = ki();
le.render = Jn;
le.redraw = no.redraw;
le.request = ro.request;
le.jsonp = ro.jsonp;
le.parseQueryString = eo();
le.buildQueryString = Zn();
le.parsePathname = jr();
le.buildPathname = Sr();
le.vnode = je();
le.PromisePolyfill = Xn();
le.censor = to();
var _i = le;
const g = /* @__PURE__ */ Zo(_i), Rr = "-";
function Ei(t) {
  const e = Ci(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = t;
  function o(a) {
    const s = a.split(Rr);
    return s[0] === "" && s.length !== 1 && s.shift(), oo(s, e) || Ii(a);
  }
  function i(a, s) {
    const c = r[a] || [];
    return s && n[a] ? [...c, ...n[a]] : c;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: i
  };
}
function oo(t, e) {
  var a;
  if (t.length === 0)
    return e.classGroupId;
  const r = t[0], n = e.nextPart.get(r), o = n ? oo(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length === 0)
    return;
  const i = t.join(Rr);
  return (a = e.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}
const Tn = /^\[(.+)\]$/;
function Ii(t) {
  if (Tn.test(t)) {
    const e = Tn.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Ci(t) {
  const {
    theme: e,
    prefix: r
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ti(Object.entries(t.classGroups), r).forEach(([i, a]) => {
    _r(a, n, i, e);
  }), n;
}
function _r(t, e, r, n) {
  t.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? e : Ln(e, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Ai(o)) {
        _r(o(n), e, r, n);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      _r(a, Ln(e, i), r, n);
    });
  });
}
function Ln(t, e) {
  let r = t;
  return e.split(Rr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function Ai(t) {
  return t.isThemeGetter;
}
function Ti(t, e) {
  return e ? t.map(([r, n]) => {
    const o = n.map((i) => typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [e + a, s])) : i);
    return [r, o];
  }) : t;
}
function Li(t) {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(i, a) {
    r.set(i, a), e++, e > t && (e = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let a = r.get(i);
      if (a !== void 0)
        return a;
      if ((a = n.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      r.has(i) ? r.set(i, a) : o(i, a);
    }
  };
}
const io = "!";
function Oi(t) {
  const e = t.separator, r = e.length === 1, n = e[0], o = e.length;
  return function(a) {
    const s = [];
    let c = 0, f = 0, p;
    for (let b = 0; b < a.length; b++) {
      let x = a[b];
      if (c === 0) {
        if (x === n && (r || a.slice(b, b + o) === e)) {
          s.push(a.slice(f, b)), f = b + o;
          continue;
        }
        if (x === "/") {
          p = b;
          continue;
        }
      }
      x === "[" ? c++ : x === "]" && c--;
    }
    const h = s.length === 0 ? a : a.substring(f), v = h.startsWith(io), w = v ? h.substring(1) : h, k = p && p > f ? p - f : void 0;
    return {
      modifiers: s,
      hasImportantModifier: v,
      baseClassName: w,
      maybePostfixModifierPosition: k
    };
  };
}
function zi(t) {
  if (t.length <= 1)
    return t;
  const e = [];
  let r = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...r.sort(), n), r = []) : r.push(n);
  }), e.push(...r.sort()), e;
}
function Pi(t) {
  return {
    cache: Li(t.cacheSize),
    splitModifiers: Oi(t),
    ...Ei(t)
  };
}
const Si = /\s+/;
function ji(t, e) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = e, i = /* @__PURE__ */ new Set();
  return t.trim().split(Si).map((a) => {
    const {
      modifiers: s,
      hasImportantModifier: c,
      baseClassName: f,
      maybePostfixModifierPosition: p
    } = r(a);
    let h = n(p ? f.substring(0, p) : f), v = !!p;
    if (!h) {
      if (!p)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (h = n(f), !h)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      v = !1;
    }
    const w = zi(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? w + io : w,
      classGroupId: h,
      originalClassName: a,
      hasPostfixModifier: v
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: s,
      classGroupId: c,
      hasPostfixModifier: f
    } = a, p = s + c;
    return i.has(p) ? !1 : (i.add(p), o(c, f).forEach((h) => i.add(s + h)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function Ri() {
  let t = 0, e, r, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = ao(e)) && (n && (n += " "), n += r);
  return n;
}
function ao(t) {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = ao(t[n])) && (r && (r += " "), r += e);
  return r;
}
function Ni(t, ...e) {
  let r, n, o, i = a;
  function a(c) {
    const f = e.reduce((p, h) => h(p), t());
    return r = Pi(f), n = r.cache.get, o = r.cache.set, i = s, s(c);
  }
  function s(c) {
    const f = n(c);
    if (f)
      return f;
    const p = ji(c, r);
    return o(c, p), p;
  }
  return function() {
    return i(Ri.apply(null, arguments));
  };
}
function ee(t) {
  const e = (r) => r[t] || [];
  return e.isThemeGetter = !0, e;
}
const so = /^\[(?:([a-z-]+):)?(.+)\]$/i, Mi = /^\d+\/\d+$/, Di = /* @__PURE__ */ new Set(["px", "full", "screen"]), Hi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $i = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Bi = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qi = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function ye(t) {
  return qe(t) || Di.has(t) || Mi.test(t);
}
function Ae(t) {
  return at(t, "length", Yi);
}
function qe(t) {
  return !!t && !Number.isNaN(Number(t));
}
function Lt(t) {
  return at(t, "number", qe);
}
function pt(t) {
  return !!t && Number.isInteger(Number(t));
}
function Gi(t) {
  return t.endsWith("%") && qe(t.slice(0, -1));
}
function q(t) {
  return so.test(t);
}
function Te(t) {
  return Hi.test(t);
}
const Vi = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Wi(t) {
  return at(t, Vi, lo);
}
function Fi(t) {
  return at(t, "position", lo);
}
const Ui = /* @__PURE__ */ new Set(["image", "url"]);
function Ki(t) {
  return at(t, Ui, Zi);
}
function Xi(t) {
  return at(t, "", Ji);
}
function gt() {
  return !0;
}
function at(t, e, r) {
  const n = so.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : !1;
}
function Yi(t) {
  return $i.test(t);
}
function lo() {
  return !1;
}
function Ji(t) {
  return Bi.test(t);
}
function Zi(t) {
  return qi.test(t);
}
function Qi() {
  const t = ee("colors"), e = ee("spacing"), r = ee("blur"), n = ee("brightness"), o = ee("borderColor"), i = ee("borderRadius"), a = ee("borderSpacing"), s = ee("borderWidth"), c = ee("contrast"), f = ee("grayscale"), p = ee("hueRotate"), h = ee("invert"), v = ee("gap"), w = ee("gradientColorStops"), k = ee("gradientColorStopPositions"), b = ee("inset"), x = ee("margin"), C = ee("opacity"), E = ee("padding"), j = ee("saturate"), P = ee("scale"), R = ee("sepia"), z = ee("skew"), D = ee("space"), G = ee("translate"), Y = () => ["auto", "contain", "none"], H = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", q, e], A = () => [q, e], $ = () => ["", ye, Ae], O = () => ["auto", qe, q], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], S = () => ["solid", "dashed", "dotted", "double", "none"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], N = () => ["", "0", q], Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ne = () => [qe, Lt], ae = () => [qe, q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [gt],
      spacing: [ye, Ae],
      blur: ["none", "", Te, q],
      brightness: ne(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Te, q],
      borderSpacing: A(),
      borderWidth: $(),
      contrast: ne(),
      grayscale: N(),
      hueRotate: ae(),
      invert: N(),
      gap: A(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Gi, Ae],
      inset: F(),
      margin: F(),
      opacity: ne(),
      padding: A(),
      saturate: ne(),
      scale: ne(),
      sepia: N(),
      skew: ae(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", q]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Te]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...B(), q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [b]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", pt, q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: F()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: N()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: N()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", pt, q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [gt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", pt, q]
        }, q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [gt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [pt, q]
        }, q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...K(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...K(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [E]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [E]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [E]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [E]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [E]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [E]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [E]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [E]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [E]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [D]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", q, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", q, ye]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Te]
        }, Te, q]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [q, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", ye, q]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [q, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Te, Ae]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Lt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [gt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", qe, Lt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ye, q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", q]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [C]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [C]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...S(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ye, Ae]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ye, q]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", q]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [C]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...B(), Fi]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Wi]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ki]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [k]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [w]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [w]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...S(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: S()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...S()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ye, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ye, Ae]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ye, Ae]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Te, Xi]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [gt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": V()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Te, q]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ae()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ae()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", q]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [P]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [P]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [P]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [pt, q]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [G]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [G]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [z]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [z]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", q]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ye, Ae, Lt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const _ = /* @__PURE__ */ Ni(Qi);
function He(t) {
  return t !== null && typeof t == "object" && t.constructor === Object;
}
function Er(t) {
  if (!He(t))
    return t;
  const e = {};
  for (const r in t)
    e[r] = Er(t[r]);
  return e;
}
function T(t, e) {
  if (He(e) && Object.keys(e).length === 0)
    return Er({ ...t, ...e });
  const r = { ...t, ...e };
  if (He(e) && He(t))
    for (const n in e)
      He(e[n]) && n in t && He(t[n]) ? r[n] = T(t[n], e[n]) : r[n] = He(e[n]) ? Er(e[n]) : e[n];
  return r;
}
const Nr = (t) => (e) => {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}, Zt = {
  root: {
    base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    flush: {
      off: "rounded-lg border",
      on: "border-b"
    }
  },
  content: {
    base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg"
  },
  title: {
    arrow: {
      base: "h-3 w-3 shrink-0",
      open: {
        off: "",
        on: "rotate-180"
      }
    },
    base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
    flush: {
      off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
      on: "bg-transparent dark:bg-transparent"
    },
    heading: "",
    open: {
      off: "",
      on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
    }
  }
}, ea = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(Zt.content, n);
    return g("div", { class: _(i.base, r), ...o }, e);
  }
}, ta = {
  isOpen: !1,
  view({ attrs: t, children: e, state: r }) {
    const { isOpen: n = !1, ...o } = t;
    return r.isOpen = n, g("div", { ...o }, e);
  }
};
function ra() {
  for (var t = 0, e, r, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = co(e)) && (n && (n += " "), n += r);
  return n;
}
function co(t) {
  if (typeof t == "string")
    return t;
  for (var e, r = "", n = 0; n < t.length; n++)
    t[n] && (e = co(t[n])) && (r && (r += " "), r += e);
  return r;
}
var Mr = "-";
function na(t) {
  var e = ia(t), r = t.conflictingClassGroups, n = t.conflictingClassGroupModifiers, o = n === void 0 ? {} : n;
  function i(s) {
    var c = s.split(Mr);
    return c[0] === "" && c.length !== 1 && c.shift(), uo(c, e) || oa(s);
  }
  function a(s, c) {
    var f = r[s] || [];
    return c && o[s] ? [].concat(f, o[s]) : f;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: a
  };
}
function uo(t, e) {
  var a;
  if (t.length === 0)
    return e.classGroupId;
  var r = t[0], n = e.nextPart.get(r), o = n ? uo(t.slice(1), n) : void 0;
  if (o)
    return o;
  if (e.validators.length !== 0) {
    var i = t.join(Mr);
    return (a = e.validators.find(function(s) {
      var c = s.validator;
      return c(i);
    })) == null ? void 0 : a.classGroupId;
  }
}
var On = /^\[(.+)\]$/;
function oa(t) {
  if (On.test(t)) {
    var e = On.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function ia(t) {
  var e = t.theme, r = t.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = sa(Object.entries(t.classGroups), r);
  return o.forEach(function(i) {
    var a = i[0], s = i[1];
    Ir(s, n, a, e);
  }), n;
}
function Ir(t, e, r, n) {
  t.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? e : zn(e, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (aa(o)) {
        Ir(o(n), e, r, n);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(function(a) {
      var s = a[0], c = a[1];
      Ir(c, zn(e, s), r, n);
    });
  });
}
function zn(t, e) {
  var r = t;
  return e.split(Mr).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function aa(t) {
  return t.isThemeGetter;
}
function sa(t, e) {
  return e ? t.map(function(r) {
    var n = r[0], o = r[1], i = o.map(function(a) {
      return typeof a == "string" ? e + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(function(s) {
        var c = s[0], f = s[1];
        return [e + c, f];
      })) : a;
    });
    return [n, i];
  }) : t;
}
function la(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(i, a) {
    r.set(i, a), e++, e > t && (e = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(a) {
      var s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return o(a, s), s;
    },
    set: function(a, s) {
      r.has(a) ? r.set(a, s) : o(a, s);
    }
  };
}
var fo = "!";
function ca(t) {
  var e = t.separator || ":", r = e.length === 1, n = e[0], o = e.length;
  return function(a) {
    for (var s = [], c = 0, f = 0, p, h = 0; h < a.length; h++) {
      var v = a[h];
      if (c === 0) {
        if (v === n && (r || a.slice(h, h + o) === e)) {
          s.push(a.slice(f, h)), f = h + o;
          continue;
        }
        if (v === "/") {
          p = h;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    var w = s.length === 0 ? a : a.substring(f), k = w.startsWith(fo), b = k ? w.substring(1) : w, x = p && p > f ? p - f : void 0;
    return {
      modifiers: s,
      hasImportantModifier: k,
      baseClassName: b,
      maybePostfixModifierPosition: x
    };
  };
}
function da(t) {
  if (t.length <= 1)
    return t;
  var e = [], r = [];
  return t.forEach(function(n) {
    var o = n[0] === "[";
    o ? (e.push.apply(e, r.sort().concat([n])), r = []) : r.push(n);
  }), e.push.apply(e, r.sort()), e;
}
function ua(t) {
  return {
    cache: la(t.cacheSize),
    splitModifiers: ca(t),
    ...na(t)
  };
}
var fa = /\s+/;
function pa(t, e) {
  var r = e.splitModifiers, n = e.getClassGroupId, o = e.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return t.trim().split(fa).map(function(a) {
    var s = r(a), c = s.modifiers, f = s.hasImportantModifier, p = s.baseClassName, h = s.maybePostfixModifierPosition, v = n(h ? p.substring(0, h) : p), w = !!h;
    if (!v) {
      if (!h)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (v = n(p), !v)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      w = !1;
    }
    var k = da(c).join(":"), b = f ? k + fo : k;
    return {
      isTailwindClass: !0,
      modifierId: b,
      classGroupId: v,
      originalClassName: a,
      hasPostfixModifier: w
    };
  }).reverse().filter(function(a) {
    if (!a.isTailwindClass)
      return !0;
    var s = a.modifierId, c = a.classGroupId, f = a.hasPostfixModifier, p = s + c;
    return i.has(p) ? !1 : (i.add(p), o(c, f).forEach(function(h) {
      return i.add(s + h);
    }), !0);
  }).reverse().map(function(a) {
    return a.originalClassName;
  }).join(" ");
}
function ga() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  var n, o, i, a = s;
  function s(f) {
    var p = e[0], h = e.slice(1), v = h.reduce(function(w, k) {
      return k(w);
    }, p());
    return n = ua(v), o = n.cache.get, i = n.cache.set, a = c, c(f);
  }
  function c(f) {
    var p = o(f);
    if (p)
      return p;
    var h = pa(f, n);
    return i(f, h), h;
  }
  return function() {
    return a(ra.apply(null, arguments));
  };
}
function te(t) {
  var e = function(n) {
    return n[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var po = /^\[(?:([a-z-]+):)?(.+)\]$/i, ha = /^\d+\/\d+$/, ba = /* @__PURE__ */ new Set(["px", "full", "screen"]), ma = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, va = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ya = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function we(t) {
  return Ge(t) || ba.has(t) || ha.test(t) || Cr(t);
}
function Cr(t) {
  return Fe(t, "length", Ia);
}
function wa(t) {
  return Fe(t, "size", go);
}
function xa(t) {
  return Fe(t, "position", go);
}
function ka(t) {
  return Fe(t, "url", Ca);
}
function Ot(t) {
  return Fe(t, "number", Ge);
}
function Ge(t) {
  return !Number.isNaN(Number(t));
}
function _a(t) {
  return t.endsWith("%") && Ge(t.slice(0, -1));
}
function ht(t) {
  return Pn(t) || Fe(t, "number", Pn);
}
function U(t) {
  return po.test(t);
}
function bt() {
  return !0;
}
function Le(t) {
  return ma.test(t);
}
function Ea(t) {
  return Fe(t, "", Aa);
}
function Fe(t, e, r) {
  var n = po.exec(t);
  return n ? n[1] ? n[1] === e : r(n[2]) : !1;
}
function Ia(t) {
  return va.test(t);
}
function go() {
  return !1;
}
function Ca(t) {
  return t.startsWith("url(");
}
function Pn(t) {
  return Number.isInteger(Number(t));
}
function Aa(t) {
  return ya.test(t);
}
function Ta() {
  var t = te("colors"), e = te("spacing"), r = te("blur"), n = te("brightness"), o = te("borderColor"), i = te("borderRadius"), a = te("borderSpacing"), s = te("borderWidth"), c = te("contrast"), f = te("grayscale"), p = te("hueRotate"), h = te("invert"), v = te("gap"), w = te("gradientColorStops"), k = te("gradientColorStopPositions"), b = te("inset"), x = te("margin"), C = te("opacity"), E = te("padding"), j = te("saturate"), P = te("scale"), R = te("sepia"), z = te("skew"), D = te("space"), G = te("translate"), Y = function() {
    return ["auto", "contain", "none"];
  }, H = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F = function() {
    return ["auto", U, e];
  }, A = function() {
    return [U, e];
  }, $ = function() {
    return ["", we];
  }, O = function() {
    return ["auto", Ge, U];
  }, B = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, S = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, V = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, K = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, N = function() {
    return ["", "0", U];
  }, Q = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ne = function() {
    return [Ge, Ot];
  }, ae = function() {
    return [Ge, U];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [bt],
      spacing: [we],
      blur: ["none", "", Le, U],
      brightness: ne(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Le, U],
      borderSpacing: A(),
      borderWidth: $(),
      contrast: ne(),
      grayscale: N(),
      hueRotate: ae(),
      invert: N(),
      gap: A(),
      gradientColorStops: [t],
      gradientColorStopPositions: [_a, Cr],
      inset: F(),
      margin: F(),
      opacity: ne(),
      padding: A(),
      saturate: ne(),
      scale: ne(),
      sepia: N(),
      skew: ae(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", U]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Le]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(B(), [U])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [b]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ht]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: F()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: N()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: N()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ht]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [bt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ht]
        }, U]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [bt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ht]
        }, U]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(K())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(K(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(K(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [E]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [E]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [E]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [E]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [E]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [E]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [E]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [E]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [E]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [D]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", U, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", U, we]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Le]
        }, Le, U]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", U, we]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Le, Cr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ot]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [bt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ge, Ot]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", U, we]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [C]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [C]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(S(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", we]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", U, we]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", U]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [C]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(B(), [xa])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", wa]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ka]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [k]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [w]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [w]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(S(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: S()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(S())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [U, we]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [we]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [we]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Le, Ea]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [bt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": V()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Le, U]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ae()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ae()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [P]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [P]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [P]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ht, U]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [G]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [G]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [z]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [z]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", U]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [we, Ot]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var _t = /* @__PURE__ */ ga(Ta);
const Dr = {
  view({ attrs: t }) {
    const e = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    }, { class: r, size: n = "sm", ...o } = t, i = _t(e[n], r);
    return g(
      "svg",
      { class: i, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 7", ...o },
      g("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m1 1.444 4 3.791 4-3.79"
      })
    );
  }
}, La = {
  view({ attrs: t }) {
    const e = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    }, { class: r, size: n = "sm", ...o } = t, i = _t(e[n], r);
    return g(
      "svg",
      { class: i, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 11", ...o },
      g("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m5 1.549-4 3.79 4 3.792"
      })
    );
  }
}, ho = {
  view({ attrs: t }) {
    const e = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    }, { class: r, size: n = "sm", ...o } = t, i = _t(e[n], r);
    return g(
      "svg",
      { class: i, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 11", ...o },
      g("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m1 9.13 4-3.79-4-3.791"
      })
    );
  }
}, Oa = {
  view({ attrs: t }) {
    const e = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    }, { class: r, size: n = "sm", ...o } = t, i = _t(e[n], r);
    return g(
      "svg",
      { class: i, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 7", ...o },
      g("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m9 5.235-4-3.79-4 3.79"
      })
    );
  }
}, za = {
  view({ attrs: t }) {
    const e = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    }, { class: r, size: n = "sm", ...o } = t, i = _t(e[n], r);
    return g(
      "svg",
      { class: i, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14", ...o },
      g("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      })
    );
  }
}, Pa = {
  isOpen: !1,
  flush: !1,
  view({ attrs: t, children: e, state: r }) {
    const {
      class: n,
      as: o = "h2",
      arrowIcon: i = Dr,
      theme: a = {},
      ...s
    } = t, c = T(Zt.title, a);
    return g(
      "button",
      {
        class: _(
          c.base,
          c.flush[r.flush ? "on" : "off"],
          c.open[r.isOpen ? "on" : "off"],
          n
        ),
        type: "button",
        onclick: () => {
          r.isOpen = !r.isOpen;
        },
        ...s
      },
      [
        g(o, { class: c.heading }, e),
        i && g(i, {
          "aria-hidden": "true",
          class: _(c.arrow.base, c.arrow.open[r.isOpen ? "on" : "off"])
        })
      ]
    );
  }
};
var Sa = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = []), this._eventType = e, this._eventFunctions = r;
    }
    return t.prototype.init = function() {
      var e = this;
      this._eventFunctions.forEach(function(r) {
        typeof window < "u" && window.addEventListener(e._eventType, r);
      });
    }, t;
  }()
), ja = (
  /** @class */
  function() {
    function t() {
      this._instances = {
        Accordion: {},
        Carousel: {},
        Collapse: {},
        Dial: {},
        Dismiss: {},
        Drawer: {},
        Dropdown: {},
        Modal: {},
        Popover: {},
        Tabs: {},
        Tooltip: {},
        InputCounter: {}
      };
    }
    return t.prototype.addInstance = function(e, r, n, o) {
      if (o === void 0 && (o = !1), !this._instances[e])
        return console.warn("Flowbite: Component ".concat(e, " does not exist.")), !1;
      if (this._instances[e][n] && !o) {
        console.warn("Flowbite: Instance with ID ".concat(n, " already exists."));
        return;
      }
      o && this._instances[e][n] && this._instances[e][n].destroyAndRemoveInstance(), this._instances[e][n || this._generateRandomId()] = r;
    }, t.prototype.getAllInstances = function() {
      return this._instances;
    }, t.prototype.getInstances = function(e) {
      return this._instances[e] ? this._instances[e] : (console.warn("Flowbite: Component ".concat(e, " does not exist.")), !1);
    }, t.prototype.getInstance = function(e, r) {
      if (this._componentAndInstanceCheck(e, r)) {
        if (!this._instances[e][r]) {
          console.warn("Flowbite: Instance with ID ".concat(r, " does not exist."));
          return;
        }
        return this._instances[e][r];
      }
    }, t.prototype.destroyAndRemoveInstance = function(e, r) {
      this._componentAndInstanceCheck(e, r) && (this.destroyInstanceObject(e, r), this.removeInstance(e, r));
    }, t.prototype.removeInstance = function(e, r) {
      this._componentAndInstanceCheck(e, r) && delete this._instances[e][r];
    }, t.prototype.destroyInstanceObject = function(e, r) {
      this._componentAndInstanceCheck(e, r) && this._instances[e][r].destroy();
    }, t.prototype.instanceExists = function(e, r) {
      return !(!this._instances[e] || !this._instances[e][r]);
    }, t.prototype._generateRandomId = function() {
      return Math.random().toString(36).substr(2, 9);
    }, t.prototype._componentAndInstanceCheck = function(e, r) {
      return this._instances[e] ? this._instances[e][r] ? !0 : (console.warn("Flowbite: Instance with ID ".concat(r, " does not exist.")), !1) : (console.warn("Flowbite: Component ".concat(e, " does not exist.")), !1);
    }, t;
  }()
), X = new ja();
typeof window < "u" && (window.FlowbiteInstances = X);
var Dt = function() {
  return Dt = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, Dt.apply(this, arguments);
}, Ht = {
  alwaysOpen: !1,
  activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
  inactiveClasses: "text-gray-500 dark:text-gray-400",
  onOpen: function() {
  },
  onClose: function() {
  },
  onToggle: function() {
  }
}, Ra = {
  id: null,
  override: !0
}, Hr = (
  /** @class */
  function() {
    function t(e, r, n, o) {
      e === void 0 && (e = null), r === void 0 && (r = []), n === void 0 && (n = Ht), o === void 0 && (o = Ra), this._instanceId = o.id ? o.id : e.id, this._accordionEl = e, this._items = r, this._options = Dt(Dt({}, Ht), n), this._initialized = !1, this.init(), X.addInstance("Accordion", this, this._instanceId, o.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._items.length && !this._initialized && (this._items.forEach(function(r) {
        r.active && e.open(r.id);
        var n = function() {
          e.toggle(r.id);
        };
        r.triggerEl.addEventListener("click", n), r.clickHandler = n;
      }), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._items.length && this._initialized && (this._items.forEach(function(e) {
        e.triggerEl.removeEventListener("click", e.clickHandler), delete e.clickHandler;
      }), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Accordion", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.getItem = function(e) {
      return this._items.filter(function(r) {
        return r.id === e;
      })[0];
    }, t.prototype.open = function(e) {
      var r, n, o = this, i = this.getItem(e);
      this._options.alwaysOpen || this._items.map(function(a) {
        var s, c;
        a !== i && ((s = a.triggerEl.classList).remove.apply(s, o._options.activeClasses.split(" ")), (c = a.triggerEl.classList).add.apply(c, o._options.inactiveClasses.split(" ")), a.targetEl.classList.add("hidden"), a.triggerEl.setAttribute("aria-expanded", "false"), a.active = !1, a.iconEl && a.iconEl.classList.remove("rotate-180"));
      }), (r = i.triggerEl.classList).add.apply(r, this._options.activeClasses.split(" ")), (n = i.triggerEl.classList).remove.apply(n, this._options.inactiveClasses.split(" ")), i.triggerEl.setAttribute("aria-expanded", "true"), i.targetEl.classList.remove("hidden"), i.active = !0, i.iconEl && i.iconEl.classList.add("rotate-180"), this._options.onOpen(this, i);
    }, t.prototype.toggle = function(e) {
      var r = this.getItem(e);
      r.active ? this.close(e) : this.open(e), this._options.onToggle(this, r);
    }, t.prototype.close = function(e) {
      var r, n, o = this.getItem(e);
      (r = o.triggerEl.classList).remove.apply(r, this._options.activeClasses.split(" ")), (n = o.triggerEl.classList).add.apply(n, this._options.inactiveClasses.split(" ")), o.targetEl.classList.add("hidden"), o.triggerEl.setAttribute("aria-expanded", "false"), o.active = !1, o.iconEl && o.iconEl.classList.remove("rotate-180"), this._options.onClose(this, o);
    }, t;
  }()
);
function $r() {
  document.querySelectorAll("[data-accordion]").forEach(function(t) {
    var e = t.getAttribute("data-accordion"), r = t.getAttribute("data-active-classes"), n = t.getAttribute("data-inactive-classes"), o = [];
    t.querySelectorAll("[data-accordion-target]").forEach(function(i) {
      if (i.closest("[data-accordion]") === t) {
        var a = {
          id: i.getAttribute("data-accordion-target"),
          triggerEl: i,
          targetEl: document.querySelector(i.getAttribute("data-accordion-target")),
          iconEl: i.querySelector("[data-accordion-icon]"),
          active: i.getAttribute("aria-expanded") === "true"
        };
        o.push(a);
      }
    }), new Hr(t, o, {
      alwaysOpen: e === "open",
      activeClasses: r || Ht.activeClasses,
      inactiveClasses: n || Ht.inactiveClasses
    });
  });
}
typeof window < "u" && (window.Accordion = Hr, window.initAccordions = $r);
var $t = function() {
  return $t = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, $t.apply(this, arguments);
}, Sn = {
  onCollapse: function() {
  },
  onExpand: function() {
  },
  onToggle: function() {
  }
}, Na = {
  id: null,
  override: !0
}, Ar = (
  /** @class */
  function() {
    function t(e, r, n, o) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = Sn), o === void 0 && (o = Na), this._instanceId = o.id ? o.id : e.id, this._targetEl = e, this._triggerEl = r, this._options = $t($t({}, Sn), n), this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Collapse", this, this._instanceId, o.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._triggerEl && this._targetEl && !this._initialized && (this._triggerEl.hasAttribute("aria-expanded") ? this._visible = this._triggerEl.getAttribute("aria-expanded") === "true" : this._visible = !this._targetEl.classList.contains("hidden"), this._clickHandler = function() {
        e.toggle();
      }, this._triggerEl.addEventListener("click", this._clickHandler), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._triggerEl && this._initialized && (this._triggerEl.removeEventListener("click", this._clickHandler), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Collapse", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.collapse = function() {
      this._targetEl.classList.add("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"), this._visible = !1, this._options.onCollapse(this);
    }, t.prototype.expand = function() {
      this._targetEl.classList.remove("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"), this._visible = !0, this._options.onExpand(this);
    }, t.prototype.toggle = function() {
      this._visible ? this.collapse() : this.expand(), this._options.onToggle(this);
    }, t;
  }()
);
function Br() {
  document.querySelectorAll("[data-collapse-toggle]").forEach(function(t) {
    var e = t.getAttribute("data-collapse-toggle"), r = document.getElementById(e);
    r ? X.instanceExists("Collapse", r.getAttribute("id")) ? new Ar(r, t, {}, {
      id: r.getAttribute("id") + "_" + X._generateRandomId()
    }) : new Ar(r, t) : console.error('The target element with id "'.concat(e, '" does not exist. Please check the data-collapse-toggle attribute.'));
  });
}
typeof window < "u" && (window.Collapse = Ar, window.initCollapses = Br);
var $e = function() {
  return $e = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, $e.apply(this, arguments);
}, Nt = {
  defaultPosition: 0,
  indicators: {
    items: [],
    activeClasses: "bg-white dark:bg-gray-800",
    inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
  },
  interval: 3e3,
  onNext: function() {
  },
  onPrev: function() {
  },
  onChange: function() {
  }
}, Ma = {
  id: null,
  override: !0
}, bo = (
  /** @class */
  function() {
    function t(e, r, n, o) {
      e === void 0 && (e = null), r === void 0 && (r = []), n === void 0 && (n = Nt), o === void 0 && (o = Ma), this._instanceId = o.id ? o.id : e.id, this._carouselEl = e, this._items = r, this._options = $e($e($e({}, Nt), n), { indicators: $e($e({}, Nt.indicators), n.indicators) }), this._activeItem = this.getItem(this._options.defaultPosition), this._indicators = this._options.indicators.items, this._intervalDuration = this._options.interval, this._intervalInstance = null, this._initialized = !1, this.init(), X.addInstance("Carousel", this, this._instanceId, o.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._items.length && !this._initialized && (this._items.map(function(r) {
        r.el.classList.add("absolute", "inset-0", "transition-transform", "transform");
      }), this._getActiveItem() ? this.slideTo(this._getActiveItem().position) : this.slideTo(0), this._indicators.map(function(r, n) {
        r.el.addEventListener("click", function() {
          e.slideTo(n);
        });
      }), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._initialized && (this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Carousel", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.getItem = function(e) {
      return this._items[e];
    }, t.prototype.slideTo = function(e) {
      var r = this._items[e], n = {
        left: r.position === 0 ? this._items[this._items.length - 1] : this._items[r.position - 1],
        middle: r,
        right: r.position === this._items.length - 1 ? this._items[0] : this._items[r.position + 1]
      };
      this._rotate(n), this._setActiveItem(r), this._intervalInstance && (this.pause(), this.cycle()), this._options.onChange(this);
    }, t.prototype.next = function() {
      var e = this._getActiveItem(), r = null;
      e.position === this._items.length - 1 ? r = this._items[0] : r = this._items[e.position + 1], this.slideTo(r.position), this._options.onNext(this);
    }, t.prototype.prev = function() {
      var e = this._getActiveItem(), r = null;
      e.position === 0 ? r = this._items[this._items.length - 1] : r = this._items[e.position - 1], this.slideTo(r.position), this._options.onPrev(this);
    }, t.prototype._rotate = function(e) {
      this._items.map(function(r) {
        r.el.classList.add("hidden");
      }), e.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"), e.left.el.classList.add("-translate-x-full", "z-10"), e.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10"), e.middle.el.classList.add("translate-x-0", "z-20"), e.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"), e.right.el.classList.add("translate-x-full", "z-10");
    }, t.prototype.cycle = function() {
      var e = this;
      typeof window < "u" && (this._intervalInstance = window.setInterval(function() {
        e.next();
      }, this._intervalDuration));
    }, t.prototype.pause = function() {
      clearInterval(this._intervalInstance);
    }, t.prototype._getActiveItem = function() {
      return this._activeItem;
    }, t.prototype._setActiveItem = function(e) {
      var r, n, o = this;
      this._activeItem = e;
      var i = e.position;
      this._indicators.length && (this._indicators.map(function(a) {
        var s, c;
        a.el.setAttribute("aria-current", "false"), (s = a.el.classList).remove.apply(s, o._options.indicators.activeClasses.split(" ")), (c = a.el.classList).add.apply(c, o._options.indicators.inactiveClasses.split(" "));
      }), (r = this._indicators[i].el.classList).add.apply(r, this._options.indicators.activeClasses.split(" ")), (n = this._indicators[i].el.classList).remove.apply(n, this._options.indicators.inactiveClasses.split(" ")), this._indicators[i].el.setAttribute("aria-current", "true"));
    }, t;
  }()
);
function qr() {
  document.querySelectorAll("[data-carousel]").forEach(function(t) {
    var e = t.getAttribute("data-carousel-interval"), r = t.getAttribute("data-carousel") === "slide", n = [], o = 0;
    t.querySelectorAll("[data-carousel-item]").length && Array.from(t.querySelectorAll("[data-carousel-item]")).map(function(f, p) {
      n.push({
        position: p,
        el: f
      }), f.getAttribute("data-carousel-item") === "active" && (o = p);
    });
    var i = [];
    t.querySelectorAll("[data-carousel-slide-to]").length && Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(function(f) {
      i.push({
        position: parseInt(f.getAttribute("data-carousel-slide-to")),
        el: f
      });
    });
    var a = new bo(t, n, {
      defaultPosition: o,
      indicators: {
        items: i
      },
      interval: e || Nt.interval
    });
    r && a.cycle();
    var s = t.querySelector("[data-carousel-next]"), c = t.querySelector("[data-carousel-prev]");
    s && s.addEventListener("click", function() {
      a.next();
    }), c && c.addEventListener("click", function() {
      a.prev();
    });
  });
}
typeof window < "u" && (window.Carousel = bo, window.initCarousels = qr);
var Bt = function() {
  return Bt = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, Bt.apply(this, arguments);
}, jn = {
  transition: "transition-opacity",
  duration: 300,
  timing: "ease-out",
  onHide: function() {
  }
}, Da = {
  id: null,
  override: !0
}, mo = (
  /** @class */
  function() {
    function t(e, r, n, o) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = jn), o === void 0 && (o = Da), this._instanceId = o.id ? o.id : e.id, this._targetEl = e, this._triggerEl = r, this._options = Bt(Bt({}, jn), n), this._initialized = !1, this.init(), X.addInstance("Dismiss", this, this._instanceId, o.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._triggerEl && this._targetEl && !this._initialized && (this._clickHandler = function() {
        e.hide();
      }, this._triggerEl.addEventListener("click", this._clickHandler), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._triggerEl && this._initialized && (this._triggerEl.removeEventListener("click", this._clickHandler), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Dismiss", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.hide = function() {
      var e = this;
      this._targetEl.classList.add(this._options.transition, "duration-".concat(this._options.duration), this._options.timing, "opacity-0"), setTimeout(function() {
        e._targetEl.classList.add("hidden");
      }, this._options.duration), this._options.onHide(this, this._targetEl);
    }, t;
  }()
);
function Gr() {
  document.querySelectorAll("[data-dismiss-target]").forEach(function(t) {
    var e = t.getAttribute("data-dismiss-target"), r = document.querySelector(e);
    r ? new mo(r, t) : console.error('The dismiss element with id "'.concat(e, '" does not exist. Please check the data-dismiss-target attribute.'));
  });
}
typeof window < "u" && (window.Dismiss = mo, window.initDismisses = Gr);
var pe = "top", me = "bottom", ve = "right", ge = "left", Vr = "auto", Et = [pe, me, ve, ge], rt = "start", xt = "end", Ha = "clippingParents", vo = "viewport", mt = "popper", $a = "reference", Rn = /* @__PURE__ */ Et.reduce(function(t, e) {
  return t.concat([e + "-" + rt, e + "-" + xt]);
}, []), yo = /* @__PURE__ */ [].concat(Et, [Vr]).reduce(function(t, e) {
  return t.concat([e, e + "-" + rt, e + "-" + xt]);
}, []), Ba = "beforeRead", qa = "read", Ga = "afterRead", Va = "beforeMain", Wa = "main", Fa = "afterMain", Ua = "beforeWrite", Ka = "write", Xa = "afterWrite", Ya = [Ba, qa, Ga, Va, Wa, Fa, Ua, Ka, Xa];
function Ee(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function he(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function We(t) {
  var e = he(t).Element;
  return t instanceof e || t instanceof Element;
}
function be(t) {
  var e = he(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Wr(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = he(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Ja(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, o = e.attributes[r] || {}, i = e.elements[r];
    !be(i) || !Ee(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Za(t) {
  var e = t.state, r = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow), function() {
    Object.keys(e.elements).forEach(function(n) {
      var o = e.elements[n], i = e.attributes[n] || {}, a = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), s = a.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !be(o) || !Ee(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const Qa = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ja,
  effect: Za,
  requires: ["computeStyles"]
};
function _e(t) {
  return t.split("-")[0];
}
var Ve = Math.max, qt = Math.min, nt = Math.round;
function Tr() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function wo() {
  return !/^((?!chrome|android).)*safari/i.test(Tr());
}
function ot(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = t.getBoundingClientRect(), o = 1, i = 1;
  e && be(t) && (o = t.offsetWidth > 0 && nt(n.width) / t.offsetWidth || 1, i = t.offsetHeight > 0 && nt(n.height) / t.offsetHeight || 1);
  var a = We(t) ? he(t) : window, s = a.visualViewport, c = !wo() && r, f = (n.left + (c && s ? s.offsetLeft : 0)) / o, p = (n.top + (c && s ? s.offsetTop : 0)) / i, h = n.width / o, v = n.height / i;
  return {
    width: h,
    height: v,
    top: p,
    right: f + h,
    bottom: p + v,
    left: f,
    x: f,
    y: p
  };
}
function Fr(t) {
  var e = ot(t), r = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: n
  };
}
function xo(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && Wr(r)) {
    var n = e;
    do {
      if (n && t.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ie(t) {
  return he(t).getComputedStyle(t);
}
function es(t) {
  return ["table", "td", "th"].indexOf(Ee(t)) >= 0;
}
function Re(t) {
  return ((We(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function Qt(t) {
  return Ee(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Wr(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Re(t)
  );
}
function Nn(t) {
  return !be(t) || // https://github.com/popperjs/popper-core/issues/837
  Ie(t).position === "fixed" ? null : t.offsetParent;
}
function ts(t) {
  var e = /firefox/i.test(Tr()), r = /Trident/i.test(Tr());
  if (r && be(t)) {
    var n = Ie(t);
    if (n.position === "fixed")
      return null;
  }
  var o = Qt(t);
  for (Wr(o) && (o = o.host); be(o) && ["html", "body"].indexOf(Ee(o)) < 0; ) {
    var i = Ie(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function It(t) {
  for (var e = he(t), r = Nn(t); r && es(r) && Ie(r).position === "static"; )
    r = Nn(r);
  return r && (Ee(r) === "html" || Ee(r) === "body" && Ie(r).position === "static") ? e : r || ts(t) || e;
}
function Ur(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function vt(t, e, r) {
  return Ve(t, qt(e, r));
}
function rs(t, e, r) {
  var n = vt(t, e, r);
  return n > r ? r : n;
}
function ko() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _o(t) {
  return Object.assign({}, ko(), t);
}
function Eo(t, e) {
  return e.reduce(function(r, n) {
    return r[n] = t, r;
  }, {});
}
var ns = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
    placement: r.placement
  })) : e, _o(typeof e != "number" ? e : Eo(e, Et));
};
function os(t) {
  var e, r = t.state, n = t.name, o = t.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, s = _e(r.placement), c = Ur(s), f = [ge, ve].indexOf(s) >= 0, p = f ? "height" : "width";
  if (!(!i || !a)) {
    var h = ns(o.padding, r), v = Fr(i), w = c === "y" ? pe : ge, k = c === "y" ? me : ve, b = r.rects.reference[p] + r.rects.reference[c] - a[c] - r.rects.popper[p], x = a[c] - r.rects.reference[c], C = It(i), E = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, j = b / 2 - x / 2, P = h[w], R = E - v[p] - h[k], z = E / 2 - v[p] / 2 + j, D = vt(P, z, R), G = c;
    r.modifiersData[n] = (e = {}, e[G] = D, e.centerOffset = D - z, e);
  }
}
function is(t) {
  var e = t.state, r = t.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || xo(e.elements.popper, o) && (e.elements.arrow = o));
}
const as = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: os,
  effect: is,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function it(t) {
  return t.split("-")[1];
}
var ss = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ls(t, e) {
  var r = t.x, n = t.y, o = e.devicePixelRatio || 1;
  return {
    x: nt(r * o) / o || 0,
    y: nt(n * o) / o || 0
  };
}
function Mn(t) {
  var e, r = t.popper, n = t.popperRect, o = t.placement, i = t.variation, a = t.offsets, s = t.position, c = t.gpuAcceleration, f = t.adaptive, p = t.roundOffsets, h = t.isFixed, v = a.x, w = v === void 0 ? 0 : v, k = a.y, b = k === void 0 ? 0 : k, x = typeof p == "function" ? p({
    x: w,
    y: b
  }) : {
    x: w,
    y: b
  };
  w = x.x, b = x.y;
  var C = a.hasOwnProperty("x"), E = a.hasOwnProperty("y"), j = ge, P = pe, R = window;
  if (f) {
    var z = It(r), D = "clientHeight", G = "clientWidth";
    if (z === he(r) && (z = Re(r), Ie(z).position !== "static" && s === "absolute" && (D = "scrollHeight", G = "scrollWidth")), z = z, o === pe || (o === ge || o === ve) && i === xt) {
      P = me;
      var Y = h && z === R && R.visualViewport ? R.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        z[D]
      );
      b -= Y - n.height, b *= c ? 1 : -1;
    }
    if (o === ge || (o === pe || o === me) && i === xt) {
      j = ve;
      var H = h && z === R && R.visualViewport ? R.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        z[G]
      );
      w -= H - n.width, w *= c ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: s
  }, f && ss), A = p === !0 ? ls({
    x: w,
    y: b
  }, he(r)) : {
    x: w,
    y: b
  };
  if (w = A.x, b = A.y, c) {
    var $;
    return Object.assign({}, F, ($ = {}, $[P] = E ? "0" : "", $[j] = C ? "0" : "", $.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + b + "px)" : "translate3d(" + w + "px, " + b + "px, 0)", $));
  }
  return Object.assign({}, F, (e = {}, e[P] = E ? b + "px" : "", e[j] = C ? w + "px" : "", e.transform = "", e));
}
function cs(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, s = r.roundOffsets, c = s === void 0 ? !0 : s, f = {
    placement: _e(e.placement),
    variation: it(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Mn(Object.assign({}, f, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Mn(Object.assign({}, f, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const ds = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: cs,
  data: {}
};
var zt = {
  passive: !0
};
function us(t) {
  var e = t.state, r = t.instance, n = t.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, s = a === void 0 ? !0 : a, c = he(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && f.forEach(function(p) {
    p.addEventListener("scroll", r.update, zt);
  }), s && c.addEventListener("resize", r.update, zt), function() {
    i && f.forEach(function(p) {
      p.removeEventListener("scroll", r.update, zt);
    }), s && c.removeEventListener("resize", r.update, zt);
  };
}
const fs = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: us,
  data: {}
};
var ps = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mt(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return ps[e];
  });
}
var gs = {
  start: "end",
  end: "start"
};
function Dn(t) {
  return t.replace(/start|end/g, function(e) {
    return gs[e];
  });
}
function Kr(t) {
  var e = he(t), r = e.pageXOffset, n = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Xr(t) {
  return ot(Re(t)).left + Kr(t).scrollLeft;
}
function hs(t, e) {
  var r = he(t), n = Re(t), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    var f = wo();
    (f || !f && e === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Xr(t),
    y: c
  };
}
function bs(t) {
  var e, r = Re(t), n = Kr(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, i = Ve(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Ve(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + Xr(t), c = -n.scrollTop;
  return Ie(o || r).direction === "rtl" && (s += Ve(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function Yr(t) {
  var e = Ie(t), r = e.overflow, n = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Io(t) {
  return ["html", "body", "#document"].indexOf(Ee(t)) >= 0 ? t.ownerDocument.body : be(t) && Yr(t) ? t : Io(Qt(t));
}
function yt(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = Io(t), o = n === ((r = t.ownerDocument) == null ? void 0 : r.body), i = he(n), a = o ? [i].concat(i.visualViewport || [], Yr(n) ? n : []) : n, s = e.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(yt(Qt(a)))
  );
}
function Lr(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function ms(t, e) {
  var r = ot(t, !1, e === "fixed");
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Hn(t, e, r) {
  return e === vo ? Lr(hs(t, r)) : We(e) ? ms(e, r) : Lr(bs(Re(t)));
}
function vs(t) {
  var e = yt(Qt(t)), r = ["absolute", "fixed"].indexOf(Ie(t).position) >= 0, n = r && be(t) ? It(t) : t;
  return We(n) ? e.filter(function(o) {
    return We(o) && xo(o, n) && Ee(o) !== "body";
  }) : [];
}
function ys(t, e, r, n) {
  var o = e === "clippingParents" ? vs(t) : [].concat(e), i = [].concat(o, [r]), a = i[0], s = i.reduce(function(c, f) {
    var p = Hn(t, f, n);
    return c.top = Ve(p.top, c.top), c.right = qt(p.right, c.right), c.bottom = qt(p.bottom, c.bottom), c.left = Ve(p.left, c.left), c;
  }, Hn(t, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Co(t) {
  var e = t.reference, r = t.element, n = t.placement, o = n ? _e(n) : null, i = n ? it(n) : null, a = e.x + e.width / 2 - r.width / 2, s = e.y + e.height / 2 - r.height / 2, c;
  switch (o) {
    case pe:
      c = {
        x: a,
        y: e.y - r.height
      };
      break;
    case me:
      c = {
        x: a,
        y: e.y + e.height
      };
      break;
    case ve:
      c = {
        x: e.x + e.width,
        y: s
      };
      break;
    case ge:
      c = {
        x: e.x - r.width,
        y: s
      };
      break;
    default:
      c = {
        x: e.x,
        y: e.y
      };
  }
  var f = o ? Ur(o) : null;
  if (f != null) {
    var p = f === "y" ? "height" : "width";
    switch (i) {
      case rt:
        c[f] = c[f] - (e[p] / 2 - r[p] / 2);
        break;
      case xt:
        c[f] = c[f] + (e[p] / 2 - r[p] / 2);
        break;
    }
  }
  return c;
}
function kt(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, o = n === void 0 ? t.placement : n, i = r.strategy, a = i === void 0 ? t.strategy : i, s = r.boundary, c = s === void 0 ? Ha : s, f = r.rootBoundary, p = f === void 0 ? vo : f, h = r.elementContext, v = h === void 0 ? mt : h, w = r.altBoundary, k = w === void 0 ? !1 : w, b = r.padding, x = b === void 0 ? 0 : b, C = _o(typeof x != "number" ? x : Eo(x, Et)), E = v === mt ? $a : mt, j = t.rects.popper, P = t.elements[k ? E : v], R = ys(We(P) ? P : P.contextElement || Re(t.elements.popper), c, p, a), z = ot(t.elements.reference), D = Co({
    reference: z,
    element: j,
    strategy: "absolute",
    placement: o
  }), G = Lr(Object.assign({}, j, D)), Y = v === mt ? G : z, H = {
    top: R.top - Y.top + C.top,
    bottom: Y.bottom - R.bottom + C.bottom,
    left: R.left - Y.left + C.left,
    right: Y.right - R.right + C.right
  }, F = t.modifiersData.offset;
  if (v === mt && F) {
    var A = F[o];
    Object.keys(H).forEach(function($) {
      var O = [ve, me].indexOf($) >= 0 ? 1 : -1, B = [pe, me].indexOf($) >= 0 ? "y" : "x";
      H[$] += A[B] * O;
    });
  }
  return H;
}
function ws(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, s = r.flipVariations, c = r.allowedAutoPlacements, f = c === void 0 ? yo : c, p = it(n), h = p ? s ? Rn : Rn.filter(function(k) {
    return it(k) === p;
  }) : Et, v = h.filter(function(k) {
    return f.indexOf(k) >= 0;
  });
  v.length === 0 && (v = h);
  var w = v.reduce(function(k, b) {
    return k[b] = kt(t, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[_e(b)], k;
  }, {});
  return Object.keys(w).sort(function(k, b) {
    return w[k] - w[b];
  });
}
function xs(t) {
  if (_e(t) === Vr)
    return [];
  var e = Mt(t);
  return [Dn(t), e, Dn(e)];
}
function ks(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !0 : a, c = r.fallbackPlacements, f = r.padding, p = r.boundary, h = r.rootBoundary, v = r.altBoundary, w = r.flipVariations, k = w === void 0 ? !0 : w, b = r.allowedAutoPlacements, x = e.options.placement, C = _e(x), E = C === x, j = c || (E || !k ? [Mt(x)] : xs(x)), P = [x].concat(j).reduce(function(fe, xe) {
      return fe.concat(_e(xe) === Vr ? ws(e, {
        placement: xe,
        boundary: p,
        rootBoundary: h,
        padding: f,
        flipVariations: k,
        allowedAutoPlacements: b
      }) : xe);
    }, []), R = e.rects.reference, z = e.rects.popper, D = /* @__PURE__ */ new Map(), G = !0, Y = P[0], H = 0; H < P.length; H++) {
      var F = P[H], A = _e(F), $ = it(F) === rt, O = [pe, me].indexOf(A) >= 0, B = O ? "width" : "height", S = kt(e, {
        placement: F,
        boundary: p,
        rootBoundary: h,
        altBoundary: v,
        padding: f
      }), V = O ? $ ? ve : ge : $ ? me : pe;
      R[B] > z[B] && (V = Mt(V));
      var K = Mt(V), N = [];
      if (i && N.push(S[A] <= 0), s && N.push(S[V] <= 0, S[K] <= 0), N.every(function(fe) {
        return fe;
      })) {
        Y = F, G = !1;
        break;
      }
      D.set(F, N);
    }
    if (G)
      for (var Q = k ? 3 : 1, ne = function(xe) {
        var Me = P.find(function(Xe) {
          var ke = D.get(Xe);
          if (ke)
            return ke.slice(0, xe).every(function(Ye) {
              return Ye;
            });
        });
        if (Me)
          return Y = Me, "break";
      }, ae = Q; ae > 0; ae--) {
        var Z = ne(ae);
        if (Z === "break")
          break;
      }
    e.placement !== Y && (e.modifiersData[n]._skip = !0, e.placement = Y, e.reset = !0);
  }
}
const _s = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ks,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function $n(t, e, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - r.y,
    right: t.right - e.width + r.x,
    bottom: t.bottom - e.height + r.y,
    left: t.left - e.width - r.x
  };
}
function Bn(t) {
  return [pe, ve, me, ge].some(function(e) {
    return t[e] >= 0;
  });
}
function Es(t) {
  var e = t.state, r = t.name, n = e.rects.reference, o = e.rects.popper, i = e.modifiersData.preventOverflow, a = kt(e, {
    elementContext: "reference"
  }), s = kt(e, {
    altBoundary: !0
  }), c = $n(a, n), f = $n(s, o, i), p = Bn(c), h = Bn(f);
  e.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: f,
    isReferenceHidden: p,
    hasPopperEscaped: h
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": h
  });
}
const Is = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Es
};
function Cs(t, e, r) {
  var n = _e(t), o = [ge, pe].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [ge, ve].indexOf(n) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function As(t) {
  var e = t.state, r = t.options, n = t.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = yo.reduce(function(p, h) {
    return p[h] = Cs(h, e.rects, i), p;
  }, {}), s = a[e.placement], c = s.x, f = s.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += f), e.modifiersData[n] = a;
}
const Ts = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: As
};
function Ls(t) {
  var e = t.state, r = t.name;
  e.modifiersData[r] = Co({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const Os = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ls,
  data: {}
};
function zs(t) {
  return t === "x" ? "y" : "x";
}
function Ps(t) {
  var e = t.state, r = t.options, n = t.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !1 : a, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, h = r.padding, v = r.tether, w = v === void 0 ? !0 : v, k = r.tetherOffset, b = k === void 0 ? 0 : k, x = kt(e, {
    boundary: c,
    rootBoundary: f,
    padding: h,
    altBoundary: p
  }), C = _e(e.placement), E = it(e.placement), j = !E, P = Ur(C), R = zs(P), z = e.modifiersData.popperOffsets, D = e.rects.reference, G = e.rects.popper, Y = typeof b == "function" ? b(Object.assign({}, e.rects, {
    placement: e.placement
  })) : b, H = typeof Y == "number" ? {
    mainAxis: Y,
    altAxis: Y
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Y), F = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (z) {
    if (i) {
      var $, O = P === "y" ? pe : ge, B = P === "y" ? me : ve, S = P === "y" ? "height" : "width", V = z[P], K = V + x[O], N = V - x[B], Q = w ? -G[S] / 2 : 0, ne = E === rt ? D[S] : G[S], ae = E === rt ? -G[S] : -D[S], Z = e.elements.arrow, fe = w && Z ? Fr(Z) : {
        width: 0,
        height: 0
      }, xe = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : ko(), Me = xe[O], Xe = xe[B], ke = vt(0, D[S], fe[S]), Ye = j ? D[S] / 2 - Q - ke - Me - H.mainAxis : ne - ke - Me - H.mainAxis, rr = j ? -D[S] / 2 + Q + ke + Xe + H.mainAxis : ae + ke + Xe + H.mainAxis, st = e.elements.arrow && It(e.elements.arrow), lt = st ? P === "y" ? st.clientTop || 0 : st.clientLeft || 0 : 0, ct = ($ = F == null ? void 0 : F[P]) != null ? $ : 0, dt = V + Ye - ct - lt, At = V + rr - ct, Je = vt(w ? qt(K, dt) : K, V, w ? Ve(N, At) : N);
      z[P] = Je, A[P] = Je - V;
    }
    if (s) {
      var Ze, nr = P === "x" ? pe : ge, De = P === "x" ? me : ve, d = z[R], l = R === "y" ? "height" : "width", u = d + x[nr], m = d - x[De], y = [pe, ge].indexOf(C) !== -1, I = (Ze = F == null ? void 0 : F[R]) != null ? Ze : 0, M = y ? u : d - D[l] - G[l] - I + H.altAxis, W = y ? d + D[l] + G[l] - I - H.altAxis : m, L = w && y ? rs(M, d, W) : vt(w ? M : u, d, w ? W : m);
      z[R] = L, A[R] = L - d;
    }
    e.modifiersData[n] = A;
  }
}
const Ss = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ps,
  requiresIfExists: ["offset"]
};
function js(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function Rs(t) {
  return t === he(t) || !be(t) ? Kr(t) : js(t);
}
function Ns(t) {
  var e = t.getBoundingClientRect(), r = nt(e.width) / t.offsetWidth || 1, n = nt(e.height) / t.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ms(t, e, r) {
  r === void 0 && (r = !1);
  var n = be(e), o = be(e) && Ns(e), i = Re(e), a = ot(t, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Ee(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Yr(i)) && (s = Rs(e)), be(e) ? (c = ot(e, !0), c.x += e.clientLeft, c.y += e.clientTop) : i && (c.x = Xr(i))), {
    x: a.left + s.scrollLeft - c.x,
    y: a.top + s.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function Ds(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!r.has(s)) {
        var c = e.get(s);
        c && o(c);
      }
    }), n.push(i);
  }
  return t.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function Hs(t) {
  var e = Ds(t);
  return Ya.reduce(function(r, n) {
    return r.concat(e.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function $s(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t());
      });
    })), e;
  };
}
function Bs(t) {
  var e = t.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}
var qn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Gn() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function qs(t) {
  t === void 0 && (t = {});
  var e = t, r = e.defaultModifiers, n = r === void 0 ? [] : r, o = e.defaultOptions, i = o === void 0 ? qn : o;
  return function(s, c, f) {
    f === void 0 && (f = i);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, qn, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: c
      },
      attributes: {},
      styles: {}
    }, h = [], v = !1, w = {
      state: p,
      setOptions: function(C) {
        var E = typeof C == "function" ? C(p.options) : C;
        b(), p.options = Object.assign({}, i, p.options, E), p.scrollParents = {
          reference: We(s) ? yt(s) : s.contextElement ? yt(s.contextElement) : [],
          popper: yt(c)
        };
        var j = Hs(Bs([].concat(n, p.options.modifiers)));
        return p.orderedModifiers = j.filter(function(P) {
          return P.enabled;
        }), k(), w.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var C = p.elements, E = C.reference, j = C.popper;
          if (Gn(E, j)) {
            p.rects = {
              reference: Ms(E, It(j), p.options.strategy === "fixed"),
              popper: Fr(j)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(H) {
              return p.modifiersData[H.name] = Object.assign({}, H.data);
            });
            for (var P = 0; P < p.orderedModifiers.length; P++) {
              if (p.reset === !0) {
                p.reset = !1, P = -1;
                continue;
              }
              var R = p.orderedModifiers[P], z = R.fn, D = R.options, G = D === void 0 ? {} : D, Y = R.name;
              typeof z == "function" && (p = z({
                state: p,
                options: G,
                name: Y,
                instance: w
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $s(function() {
        return new Promise(function(x) {
          w.forceUpdate(), x(p);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Gn(s, c))
      return w;
    w.setOptions(f).then(function(x) {
      !v && f.onFirstUpdate && f.onFirstUpdate(x);
    });
    function k() {
      p.orderedModifiers.forEach(function(x) {
        var C = x.name, E = x.options, j = E === void 0 ? {} : E, P = x.effect;
        if (typeof P == "function") {
          var R = P({
            state: p,
            name: C,
            instance: w,
            options: j
          }), z = function() {
          };
          h.push(R || z);
        }
      });
    }
    function b() {
      h.forEach(function(x) {
        return x();
      }), h = [];
    }
    return w;
  };
}
var Gs = [fs, Os, ds, Qa, Ts, _s, Ss, as, Is], Jr = /* @__PURE__ */ qs({
  defaultModifiers: Gs
}), Oe = function() {
  return Oe = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, Oe.apply(this, arguments);
}, Pt = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = e.length, i; n < o; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, ze = {
  placement: "bottom",
  triggerType: "click",
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300,
  ignoreClickOutsideClass: !1,
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
}, Vs = {
  id: null,
  override: !0
}, Zr = (
  /** @class */
  function() {
    function t(e, r, n, o) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = ze), o === void 0 && (o = Vs), this._instanceId = o.id ? o.id : e.id, this._targetEl = e, this._triggerEl = r, this._options = Oe(Oe({}, ze), n), this._popperInstance = null, this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Dropdown", this, this._instanceId, o.override);
    }
    return t.prototype.init = function() {
      this._triggerEl && this._targetEl && !this._initialized && (this._popperInstance = this._createPopperInstance(), this._setupEventListeners(), this._initialized = !0);
    }, t.prototype.destroy = function() {
      var e = this, r = this._getTriggerEvents();
      this._options.triggerType === "click" && r.showEvents.forEach(function(n) {
        e._triggerEl.removeEventListener(n, e._clickHandler);
      }), this._options.triggerType === "hover" && (r.showEvents.forEach(function(n) {
        e._triggerEl.removeEventListener(n, e._hoverShowTriggerElHandler), e._targetEl.removeEventListener(n, e._hoverShowTargetElHandler);
      }), r.hideEvents.forEach(function(n) {
        e._triggerEl.removeEventListener(n, e._hoverHideHandler), e._targetEl.removeEventListener(n, e._hoverHideHandler);
      })), this._popperInstance.destroy(), this._initialized = !1;
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Dropdown", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype._setupEventListeners = function() {
      var e = this, r = this._getTriggerEvents();
      this._clickHandler = function() {
        e.toggle();
      }, this._options.triggerType === "click" && r.showEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._clickHandler);
      }), this._hoverShowTriggerElHandler = function(n) {
        n.type === "click" ? e.toggle() : setTimeout(function() {
          e.show();
        }, e._options.delay);
      }, this._hoverShowTargetElHandler = function() {
        e.show();
      }, this._hoverHideHandler = function() {
        setTimeout(function() {
          e._targetEl.matches(":hover") || e.hide();
        }, e._options.delay);
      }, this._options.triggerType === "hover" && (r.showEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._hoverShowTriggerElHandler), e._targetEl.addEventListener(n, e._hoverShowTargetElHandler);
      }), r.hideEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._hoverHideHandler), e._targetEl.addEventListener(n, e._hoverHideHandler);
      }));
    }, t.prototype._createPopperInstance = function() {
      return Jr(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [
                this._options.offsetSkidding,
                this._options.offsetDistance
              ]
            }
          }
        ]
      });
    }, t.prototype._setupClickOutsideListener = function() {
      var e = this;
      this._clickOutsideEventListener = function(r) {
        e._handleClickOutside(r, e._targetEl);
      }, document.body.addEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._handleClickOutside = function(e, r) {
      var n = e.target, o = this._options.ignoreClickOutsideClass, i = !1;
      if (o) {
        var a = document.querySelectorAll(".".concat(o));
        a.forEach(function(s) {
          if (s.contains(n)) {
            i = !0;
            return;
          }
        });
      }
      n !== r && !r.contains(n) && !this._triggerEl.contains(n) && !i && this.isVisible() && this.hide();
    }, t.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "click"],
            hideEvents: ["mouseleave"]
          };
        case "click":
          return {
            showEvents: ["click"],
            hideEvents: []
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["click"],
            hideEvents: []
          };
      }
    }, t.prototype.toggle = function() {
      this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this);
    }, t.prototype.isVisible = function() {
      return this._visible;
    }, t.prototype.show = function() {
      this._targetEl.classList.remove("hidden"), this._targetEl.classList.add("block"), this._popperInstance.setOptions(function(e) {
        return Oe(Oe({}, e), { modifiers: Pt(Pt([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !0 }
        ], !1) });
      }), this._setupClickOutsideListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this);
    }, t.prototype.hide = function() {
      this._targetEl.classList.remove("block"), this._targetEl.classList.add("hidden"), this._popperInstance.setOptions(function(e) {
        return Oe(Oe({}, e), { modifiers: Pt(Pt([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !1 }
        ], !1) });
      }), this._visible = !1, this._removeClickOutsideListener(), this._options.onHide(this);
    }, t;
  }()
);
function Qr() {
  document.querySelectorAll("[data-dropdown-toggle]").forEach(function(t) {
    var e = t.getAttribute("data-dropdown-toggle"), r = document.getElementById(e);
    if (r) {
      var n = t.getAttribute("data-dropdown-placement"), o = t.getAttribute("data-dropdown-offset-skidding"), i = t.getAttribute("data-dropdown-offset-distance"), a = t.getAttribute("data-dropdown-trigger"), s = t.getAttribute("data-dropdown-delay"), c = t.getAttribute("data-dropdown-ignore-click-outside-class");
      new Zr(r, t, {
        placement: n || ze.placement,
        triggerType: a || ze.triggerType,
        offsetSkidding: o ? parseInt(o) : ze.offsetSkidding,
        offsetDistance: i ? parseInt(i) : ze.offsetDistance,
        delay: s ? parseInt(s) : ze.delay,
        ignoreClickOutsideClass: c || ze.ignoreClickOutsideClass
      });
    } else
      console.error('The dropdown element with id "'.concat(e, '" does not exist. Please check the data-dropdown-toggle attribute.'));
  });
}
typeof window < "u" && (window.Dropdown = Zr, window.initDropdowns = Qr);
var Gt = function() {
  return Gt = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, Gt.apply(this, arguments);
}, Vt = {
  placement: "center",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
  backdrop: "dynamic",
  closable: !0,
  onHide: function() {
  },
  onShow: function() {
  },
  onToggle: function() {
  }
}, Ws = {
  id: null,
  override: !0
}, Ao = (
  /** @class */
  function() {
    function t(e, r, n) {
      e === void 0 && (e = null), r === void 0 && (r = Vt), n === void 0 && (n = Ws), this._eventListenerInstances = [], this._instanceId = n.id ? n.id : e.id, this._targetEl = e, this._options = Gt(Gt({}, Vt), r), this._isHidden = !0, this._backdropEl = null, this._initialized = !1, this.init(), X.addInstance("Modal", this, this._instanceId, n.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._targetEl && !this._initialized && (this._getPlacementClasses().map(function(r) {
        e._targetEl.classList.add(r);
      }), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._initialized && (this.removeAllEventListenerInstances(), this._destroyBackdropEl(), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Modal", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype._createBackdrop = function() {
      var e;
      if (this._isHidden) {
        var r = document.createElement("div");
        r.setAttribute("modal-backdrop", ""), (e = r.classList).add.apply(e, this._options.backdropClasses.split(" ")), document.querySelector("body").append(r), this._backdropEl = r;
      }
    }, t.prototype._destroyBackdropEl = function() {
      this._isHidden || document.querySelector("[modal-backdrop]").remove();
    }, t.prototype._setupModalCloseEventListeners = function() {
      var e = this;
      this._options.backdrop === "dynamic" && (this._clickOutsideEventListener = function(r) {
        e._handleOutsideClick(r.target);
      }, this._targetEl.addEventListener("click", this._clickOutsideEventListener, !0)), this._keydownEventListener = function(r) {
        r.key === "Escape" && e.hide();
      }, document.body.addEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._removeModalCloseEventListeners = function() {
      this._options.backdrop === "dynamic" && this._targetEl.removeEventListener("click", this._clickOutsideEventListener, !0), document.body.removeEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._handleOutsideClick = function(e) {
      (e === this._targetEl || e === this._backdropEl && this.isVisible()) && this.hide();
    }, t.prototype._getPlacementClasses = function() {
      switch (this._options.placement) {
        case "top-left":
          return ["justify-start", "items-start"];
        case "top-center":
          return ["justify-center", "items-start"];
        case "top-right":
          return ["justify-end", "items-start"];
        case "center-left":
          return ["justify-start", "items-center"];
        case "center":
          return ["justify-center", "items-center"];
        case "center-right":
          return ["justify-end", "items-center"];
        case "bottom-left":
          return ["justify-start", "items-end"];
        case "bottom-center":
          return ["justify-center", "items-end"];
        case "bottom-right":
          return ["justify-end", "items-end"];
        default:
          return ["justify-center", "items-center"];
      }
    }, t.prototype.toggle = function() {
      this._isHidden ? this.show() : this.hide(), this._options.onToggle(this);
    }, t.prototype.show = function() {
      this.isHidden && (this._targetEl.classList.add("flex"), this._targetEl.classList.remove("hidden"), this._targetEl.setAttribute("aria-modal", "true"), this._targetEl.setAttribute("role", "dialog"), this._targetEl.removeAttribute("aria-hidden"), this._createBackdrop(), this._isHidden = !1, this._options.closable && this._setupModalCloseEventListeners(), document.body.classList.add("overflow-hidden"), this._options.onShow(this));
    }, t.prototype.hide = function() {
      this.isVisible && (this._targetEl.classList.add("hidden"), this._targetEl.classList.remove("flex"), this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.removeAttribute("aria-modal"), this._targetEl.removeAttribute("role"), this._destroyBackdropEl(), this._isHidden = !0, document.body.classList.remove("overflow-hidden"), this._options.closable && this._removeModalCloseEventListeners(), this._options.onHide(this));
    }, t.prototype.isVisible = function() {
      return !this._isHidden;
    }, t.prototype.isHidden = function() {
      return this._isHidden;
    }, t.prototype.addEventListenerInstance = function(e, r, n) {
      this._eventListenerInstances.push({
        element: e,
        type: r,
        handler: n
      });
    }, t.prototype.removeAllEventListenerInstances = function() {
      this._eventListenerInstances.map(function(e) {
        e.element.removeEventListener(e.type, e.handler);
      }), this._eventListenerInstances = [];
    }, t.prototype.getAllEventListenerInstances = function() {
      return this._eventListenerInstances;
    }, t;
  }()
);
function en() {
  document.querySelectorAll("[data-modal-target]").forEach(function(t) {
    var e = t.getAttribute("data-modal-target"), r = document.getElementById(e);
    if (r) {
      var n = r.getAttribute("data-modal-placement"), o = r.getAttribute("data-modal-backdrop");
      new Ao(r, {
        placement: n || Vt.placement,
        backdrop: o || Vt.backdrop
      });
    } else
      console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
  }), document.querySelectorAll("[data-modal-toggle]").forEach(function(t) {
    var e = t.getAttribute("data-modal-toggle"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Modal", e);
      if (n) {
        var o = function() {
          n.toggle();
        };
        t.addEventListener("click", o), n.addEventListenerInstance(t, "click", o);
      } else
        console.error("Modal with id ".concat(e, " has not been initialized. Please initialize it using the data-modal-target attribute."));
    } else
      console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"));
  }), document.querySelectorAll("[data-modal-show]").forEach(function(t) {
    var e = t.getAttribute("data-modal-show"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Modal", e);
      if (n) {
        var o = function() {
          n.show();
        };
        t.addEventListener("click", o), n.addEventListenerInstance(t, "click", o);
      } else
        console.error("Modal with id ".concat(e, " has not been initialized. Please initialize it using the data-modal-target attribute."));
    } else
      console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
  }), document.querySelectorAll("[data-modal-hide]").forEach(function(t) {
    var e = t.getAttribute("data-modal-hide"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Modal", e);
      if (n) {
        var o = function() {
          n.hide();
        };
        t.addEventListener("click", o), n.addEventListenerInstance(t, "click", o);
      } else
        console.error("Modal with id ".concat(e, " has not been initialized. Please initialize it using the data-modal-target attribute."));
    } else
      console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
  });
}
typeof window < "u" && (window.Modal = Ao, window.initModals = en);
var Wt = function() {
  return Wt = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, Wt.apply(this, arguments);
}, Be = {
  placement: "left",
  bodyScrolling: !1,
  backdrop: !0,
  edge: !1,
  edgeOffset: "bottom-[60px]",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
}, Fs = {
  id: null,
  override: !0
}, To = (
  /** @class */
  function() {
    function t(e, r, n) {
      e === void 0 && (e = null), r === void 0 && (r = Be), n === void 0 && (n = Fs), this._eventListenerInstances = [], this._instanceId = n.id ? n.id : e.id, this._targetEl = e, this._options = Wt(Wt({}, Be), r), this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Drawer", this, this._instanceId, n.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._targetEl && !this._initialized && (this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.classList.add("transition-transform"), this._getPlacementClasses(this._options.placement).base.map(function(r) {
        e._targetEl.classList.add(r);
      }), this._handleEscapeKey = function(r) {
        r.key === "Escape" && e.isVisible() && e.hide();
      }, document.addEventListener("keydown", this._handleEscapeKey), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._initialized && (this.removeAllEventListenerInstances(), this._destroyBackdropEl(), document.removeEventListener("keydown", this._handleEscapeKey), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Drawer", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.hide = function() {
      var e = this;
      this._options.edge ? (this._getPlacementClasses(this._options.placement + "-edge").active.map(function(r) {
        e._targetEl.classList.remove(r);
      }), this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(r) {
        e._targetEl.classList.add(r);
      })) : (this._getPlacementClasses(this._options.placement).active.map(function(r) {
        e._targetEl.classList.remove(r);
      }), this._getPlacementClasses(this._options.placement).inactive.map(function(r) {
        e._targetEl.classList.add(r);
      })), this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.removeAttribute("aria-modal"), this._targetEl.removeAttribute("role"), this._options.bodyScrolling || document.body.classList.remove("overflow-hidden"), this._options.backdrop && this._destroyBackdropEl(), this._visible = !1, this._options.onHide(this);
    }, t.prototype.show = function() {
      var e = this;
      this._options.edge ? (this._getPlacementClasses(this._options.placement + "-edge").active.map(function(r) {
        e._targetEl.classList.add(r);
      }), this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(r) {
        e._targetEl.classList.remove(r);
      })) : (this._getPlacementClasses(this._options.placement).active.map(function(r) {
        e._targetEl.classList.add(r);
      }), this._getPlacementClasses(this._options.placement).inactive.map(function(r) {
        e._targetEl.classList.remove(r);
      })), this._targetEl.setAttribute("aria-modal", "true"), this._targetEl.setAttribute("role", "dialog"), this._targetEl.removeAttribute("aria-hidden"), this._options.bodyScrolling || document.body.classList.add("overflow-hidden"), this._options.backdrop && this._createBackdrop(), this._visible = !0, this._options.onShow(this);
    }, t.prototype.toggle = function() {
      this.isVisible() ? this.hide() : this.show();
    }, t.prototype._createBackdrop = function() {
      var e, r = this;
      if (!this._visible) {
        var n = document.createElement("div");
        n.setAttribute("drawer-backdrop", ""), (e = n.classList).add.apply(e, this._options.backdropClasses.split(" ")), document.querySelector("body").append(n), n.addEventListener("click", function() {
          r.hide();
        });
      }
    }, t.prototype._destroyBackdropEl = function() {
      this._visible && document.querySelector("[drawer-backdrop]").remove();
    }, t.prototype._getPlacementClasses = function(e) {
      switch (e) {
        case "top":
          return {
            base: ["top-0", "left-0", "right-0"],
            active: ["transform-none"],
            inactive: ["-translate-y-full"]
          };
        case "right":
          return {
            base: ["right-0", "top-0"],
            active: ["transform-none"],
            inactive: ["translate-x-full"]
          };
        case "bottom":
          return {
            base: ["bottom-0", "left-0", "right-0"],
            active: ["transform-none"],
            inactive: ["translate-y-full"]
          };
        case "left":
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["-translate-x-full"]
          };
        case "bottom-edge":
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["translate-y-full", this._options.edgeOffset]
          };
        default:
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["-translate-x-full"]
          };
      }
    }, t.prototype.isHidden = function() {
      return !this._visible;
    }, t.prototype.isVisible = function() {
      return this._visible;
    }, t.prototype.addEventListenerInstance = function(e, r, n) {
      this._eventListenerInstances.push({
        element: e,
        type: r,
        handler: n
      });
    }, t.prototype.removeAllEventListenerInstances = function() {
      this._eventListenerInstances.map(function(e) {
        e.element.removeEventListener(e.type, e.handler);
      }), this._eventListenerInstances = [];
    }, t.prototype.getAllEventListenerInstances = function() {
      return this._eventListenerInstances;
    }, t;
  }()
);
function tn() {
  document.querySelectorAll("[data-drawer-target]").forEach(function(t) {
    var e = t.getAttribute("data-drawer-target"), r = document.getElementById(e);
    if (r) {
      var n = t.getAttribute("data-drawer-placement"), o = t.getAttribute("data-drawer-body-scrolling"), i = t.getAttribute("data-drawer-backdrop"), a = t.getAttribute("data-drawer-edge"), s = t.getAttribute("data-drawer-edge-offset");
      new To(r, {
        placement: n || Be.placement,
        bodyScrolling: o ? o === "true" : Be.bodyScrolling,
        backdrop: i ? i === "true" : Be.backdrop,
        edge: a ? a === "true" : Be.edge,
        edgeOffset: s || Be.edgeOffset
      });
    } else
      console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
  }), document.querySelectorAll("[data-drawer-toggle]").forEach(function(t) {
    var e = t.getAttribute("data-drawer-toggle"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Drawer", e);
      if (n) {
        var o = function() {
          n.toggle();
        };
        t.addEventListener("click", o), n.addEventListenerInstance(t, "click", o);
      } else
        console.error("Drawer with id ".concat(e, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
    } else
      console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
  }), document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(t) {
    var e = t.getAttribute("data-drawer-dismiss") ? t.getAttribute("data-drawer-dismiss") : t.getAttribute("data-drawer-hide"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Drawer", e);
      if (n) {
        var o = function() {
          n.hide();
        };
        t.addEventListener("click", o), n.addEventListenerInstance(t, "click", o);
      } else
        console.error("Drawer with id ".concat(e, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
    } else
      console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
  }), document.querySelectorAll("[data-drawer-show]").forEach(function(t) {
    var e = t.getAttribute("data-drawer-show"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Drawer", e);
      if (n) {
        var o = function() {
          n.show();
        };
        t.addEventListener("click", o), n.addEventListenerInstance(t, "click", o);
      } else
        console.error("Drawer with id ".concat(e, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
    } else
      console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
  });
}
typeof window < "u" && (window.Drawer = To, window.initDrawers = tn);
var Ft = function() {
  return Ft = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, Ft.apply(this, arguments);
}, Vn = {
  defaultTabId: null,
  activeClasses: "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
  inactiveClasses: "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
  onShow: function() {
  }
}, Us = {
  id: null,
  override: !0
}, Lo = (
  /** @class */
  function() {
    function t(e, r, n, o) {
      e === void 0 && (e = null), r === void 0 && (r = []), n === void 0 && (n = Vn), o === void 0 && (o = Us), this._instanceId = o.id ? o.id : e.id, this._tabsEl = e, this._items = r, this._activeTab = n ? this.getTab(n.defaultTabId) : null, this._options = Ft(Ft({}, Vn), n), this._initialized = !1, this.init(), X.addInstance("Tabs", this, this._tabsEl.id, !0), X.addInstance("Tabs", this, this._instanceId, o.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._items.length && !this._initialized && (this._activeTab || this.setActiveTab(this._items[0]), this.show(this._activeTab.id, !0), this._items.map(function(r) {
        r.triggerEl.addEventListener("click", function() {
          e.show(r.id);
        });
      }));
    }, t.prototype.destroy = function() {
      this._initialized && (this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      this.destroy(), X.removeInstance("Tabs", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.getActiveTab = function() {
      return this._activeTab;
    }, t.prototype.setActiveTab = function(e) {
      this._activeTab = e;
    }, t.prototype.getTab = function(e) {
      return this._items.filter(function(r) {
        return r.id === e;
      })[0];
    }, t.prototype.show = function(e, r) {
      var n, o, i = this;
      r === void 0 && (r = !1);
      var a = this.getTab(e);
      a === this._activeTab && !r || (this._items.map(function(s) {
        var c, f;
        s !== a && ((c = s.triggerEl.classList).remove.apply(c, i._options.activeClasses.split(" ")), (f = s.triggerEl.classList).add.apply(f, i._options.inactiveClasses.split(" ")), s.targetEl.classList.add("hidden"), s.triggerEl.setAttribute("aria-selected", "false"));
      }), (n = a.triggerEl.classList).add.apply(n, this._options.activeClasses.split(" ")), (o = a.triggerEl.classList).remove.apply(o, this._options.inactiveClasses.split(" ")), a.triggerEl.setAttribute("aria-selected", "true"), a.targetEl.classList.remove("hidden"), this.setActiveTab(a), this._options.onShow(this, a));
    }, t;
  }()
);
function rn() {
  document.querySelectorAll("[data-tabs-toggle]").forEach(function(t) {
    var e = [], r = null;
    t.querySelectorAll('[role="tab"]').forEach(function(n) {
      var o = n.getAttribute("aria-selected") === "true", i = {
        id: n.getAttribute("data-tabs-target"),
        triggerEl: n,
        targetEl: document.querySelector(n.getAttribute("data-tabs-target"))
      };
      e.push(i), o && (r = i.id);
    }), new Lo(t, e, {
      defaultTabId: r
    });
  });
}
typeof window < "u" && (window.Tabs = Lo, window.initTabs = rn);
var Pe = function() {
  return Pe = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, Pe.apply(this, arguments);
}, St = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = e.length, i; n < o; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, Ut = {
  placement: "top",
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
}, Ks = {
  id: null,
  override: !0
}, Oo = (
  /** @class */
  function() {
    function t(e, r, n, o) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = Ut), o === void 0 && (o = Ks), this._instanceId = o.id ? o.id : e.id, this._targetEl = e, this._triggerEl = r, this._options = Pe(Pe({}, Ut), n), this._popperInstance = null, this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Tooltip", this, this._instanceId, o.override);
    }
    return t.prototype.init = function() {
      this._triggerEl && this._targetEl && !this._initialized && (this._setupEventListeners(), this._popperInstance = this._createPopperInstance(), this._initialized = !0);
    }, t.prototype.destroy = function() {
      var e = this;
      if (this._initialized) {
        var r = this._getTriggerEvents();
        r.showEvents.forEach(function(n) {
          e._triggerEl.removeEventListener(n, e._showHandler);
        }), r.hideEvents.forEach(function(n) {
          e._triggerEl.removeEventListener(n, e._hideHandler);
        }), this._removeKeydownListener(), this._removeClickOutsideListener(), this._popperInstance && this._popperInstance.destroy(), this._initialized = !1;
      }
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Tooltip", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype._setupEventListeners = function() {
      var e = this, r = this._getTriggerEvents();
      this._showHandler = function() {
        e.show();
      }, this._hideHandler = function() {
        e.hide();
      }, r.showEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._showHandler);
      }), r.hideEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._hideHandler);
      });
    }, t.prototype._createPopperInstance = function() {
      return Jr(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8]
            }
          }
        ]
      });
    }, t.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    }, t.prototype._setupKeydownListener = function() {
      var e = this;
      this._keydownEventListener = function(r) {
        r.key === "Escape" && e.hide();
      }, document.body.addEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._removeKeydownListener = function() {
      document.body.removeEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._setupClickOutsideListener = function() {
      var e = this;
      this._clickOutsideEventListener = function(r) {
        e._handleClickOutside(r, e._targetEl);
      }, document.body.addEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._handleClickOutside = function(e, r) {
      var n = e.target;
      n !== r && !r.contains(n) && !this._triggerEl.contains(n) && this.isVisible() && this.hide();
    }, t.prototype.isVisible = function() {
      return this._visible;
    }, t.prototype.toggle = function() {
      this.isVisible() ? this.hide() : this.show();
    }, t.prototype.show = function() {
      this._targetEl.classList.remove("opacity-0", "invisible"), this._targetEl.classList.add("opacity-100", "visible"), this._popperInstance.setOptions(function(e) {
        return Pe(Pe({}, e), { modifiers: St(St([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !0 }
        ], !1) });
      }), this._setupClickOutsideListener(), this._setupKeydownListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this);
    }, t.prototype.hide = function() {
      this._targetEl.classList.remove("opacity-100", "visible"), this._targetEl.classList.add("opacity-0", "invisible"), this._popperInstance.setOptions(function(e) {
        return Pe(Pe({}, e), { modifiers: St(St([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !1 }
        ], !1) });
      }), this._removeClickOutsideListener(), this._removeKeydownListener(), this._visible = !1, this._options.onHide(this);
    }, t;
  }()
);
function nn() {
  document.querySelectorAll("[data-tooltip-target]").forEach(function(t) {
    var e = t.getAttribute("data-tooltip-target"), r = document.getElementById(e);
    if (r) {
      var n = t.getAttribute("data-tooltip-trigger"), o = t.getAttribute("data-tooltip-placement");
      new Oo(r, t, {
        placement: o || Ut.placement,
        triggerType: n || Ut.triggerType
      });
    } else
      console.error('The tooltip element with id "'.concat(e, '" does not exist. Please check the data-tooltip-target attribute.'));
  });
}
typeof window < "u" && (window.Tooltip = Oo, window.initTooltips = nn);
var Se = function() {
  return Se = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, Se.apply(this, arguments);
}, jt = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = e.length, i; n < o; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, wt = {
  placement: "top",
  offset: 10,
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
}, Xs = {
  id: null,
  override: !0
}, zo = (
  /** @class */
  function() {
    function t(e, r, n, o) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = wt), o === void 0 && (o = Xs), this._instanceId = o.id ? o.id : e.id, this._targetEl = e, this._triggerEl = r, this._options = Se(Se({}, wt), n), this._popperInstance = null, this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Popover", this, o.id ? o.id : this._targetEl.id, o.override);
    }
    return t.prototype.init = function() {
      this._triggerEl && this._targetEl && !this._initialized && (this._setupEventListeners(), this._popperInstance = this._createPopperInstance(), this._initialized = !0);
    }, t.prototype.destroy = function() {
      var e = this;
      if (this._initialized) {
        var r = this._getTriggerEvents();
        r.showEvents.forEach(function(n) {
          e._triggerEl.removeEventListener(n, e._showHandler), e._targetEl.removeEventListener(n, e._showHandler);
        }), r.hideEvents.forEach(function(n) {
          e._triggerEl.removeEventListener(n, e._hideHandler), e._targetEl.removeEventListener(n, e._hideHandler);
        }), this._removeKeydownListener(), this._removeClickOutsideListener(), this._popperInstance && this._popperInstance.destroy(), this._initialized = !1;
      }
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Popover", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype._setupEventListeners = function() {
      var e = this, r = this._getTriggerEvents();
      this._showHandler = function() {
        e.show();
      }, this._hideHandler = function() {
        setTimeout(function() {
          e._targetEl.matches(":hover") || e.hide();
        }, 100);
      }, r.showEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._showHandler), e._targetEl.addEventListener(n, e._showHandler);
      }), r.hideEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._hideHandler), e._targetEl.addEventListener(n, e._hideHandler);
      });
    }, t.prototype._createPopperInstance = function() {
      return Jr(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, this._options.offset]
            }
          }
        ]
      });
    }, t.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    }, t.prototype._setupKeydownListener = function() {
      var e = this;
      this._keydownEventListener = function(r) {
        r.key === "Escape" && e.hide();
      }, document.body.addEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._removeKeydownListener = function() {
      document.body.removeEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._setupClickOutsideListener = function() {
      var e = this;
      this._clickOutsideEventListener = function(r) {
        e._handleClickOutside(r, e._targetEl);
      }, document.body.addEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._handleClickOutside = function(e, r) {
      var n = e.target;
      n !== r && !r.contains(n) && !this._triggerEl.contains(n) && this.isVisible() && this.hide();
    }, t.prototype.isVisible = function() {
      return this._visible;
    }, t.prototype.toggle = function() {
      this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this);
    }, t.prototype.show = function() {
      this._targetEl.classList.remove("opacity-0", "invisible"), this._targetEl.classList.add("opacity-100", "visible"), this._popperInstance.setOptions(function(e) {
        return Se(Se({}, e), { modifiers: jt(jt([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !0 }
        ], !1) });
      }), this._setupClickOutsideListener(), this._setupKeydownListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this);
    }, t.prototype.hide = function() {
      this._targetEl.classList.remove("opacity-100", "visible"), this._targetEl.classList.add("opacity-0", "invisible"), this._popperInstance.setOptions(function(e) {
        return Se(Se({}, e), { modifiers: jt(jt([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !1 }
        ], !1) });
      }), this._removeClickOutsideListener(), this._removeKeydownListener(), this._visible = !1, this._options.onHide(this);
    }, t;
  }()
);
function on() {
  document.querySelectorAll("[data-popover-target]").forEach(function(t) {
    var e = t.getAttribute("data-popover-target"), r = document.getElementById(e);
    if (r) {
      var n = t.getAttribute("data-popover-trigger"), o = t.getAttribute("data-popover-placement"), i = t.getAttribute("data-popover-offset");
      new zo(r, t, {
        placement: o || wt.placement,
        offset: i ? parseInt(i) : wt.offset,
        triggerType: n || wt.triggerType
      });
    } else
      console.error('The popover element with id "'.concat(e, '" does not exist. Please check the data-popover-target attribute.'));
  });
}
typeof window < "u" && (window.Popover = zo, window.initPopovers = on);
var Kt = function() {
  return Kt = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, Kt.apply(this, arguments);
}, Or = {
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
}, Ys = {
  id: null,
  override: !0
}, Po = (
  /** @class */
  function() {
    function t(e, r, n, o, i) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = null), o === void 0 && (o = Or), i === void 0 && (i = Ys), this._instanceId = i.id ? i.id : n.id, this._parentEl = e, this._triggerEl = r, this._targetEl = n, this._options = Kt(Kt({}, Or), o), this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Dial", this, this._instanceId, i.override);
    }
    return t.prototype.init = function() {
      var e = this;
      if (this._triggerEl && this._targetEl && !this._initialized) {
        var r = this._getTriggerEventTypes(this._options.triggerType);
        this._showEventHandler = function() {
          e.show();
        }, r.showEvents.forEach(function(n) {
          e._triggerEl.addEventListener(n, e._showEventHandler), e._targetEl.addEventListener(n, e._showEventHandler);
        }), this._hideEventHandler = function() {
          e._parentEl.matches(":hover") || e.hide();
        }, r.hideEvents.forEach(function(n) {
          e._parentEl.addEventListener(n, e._hideEventHandler);
        }), this._initialized = !0;
      }
    }, t.prototype.destroy = function() {
      var e = this;
      if (this._initialized) {
        var r = this._getTriggerEventTypes(this._options.triggerType);
        r.showEvents.forEach(function(n) {
          e._triggerEl.removeEventListener(n, e._showEventHandler), e._targetEl.removeEventListener(n, e._showEventHandler);
        }), r.hideEvents.forEach(function(n) {
          e._parentEl.removeEventListener(n, e._hideEventHandler);
        }), this._initialized = !1;
      }
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Dial", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.hide = function() {
      this._targetEl.classList.add("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"), this._visible = !1, this._options.onHide(this);
    }, t.prototype.show = function() {
      this._targetEl.classList.remove("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"), this._visible = !0, this._options.onShow(this);
    }, t.prototype.toggle = function() {
      this._visible ? this.hide() : this.show();
    }, t.prototype.isHidden = function() {
      return !this._visible;
    }, t.prototype.isVisible = function() {
      return this._visible;
    }, t.prototype._getTriggerEventTypes = function(e) {
      switch (e) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    }, t;
  }()
);
function an() {
  document.querySelectorAll("[data-dial-init]").forEach(function(t) {
    var e = t.querySelector("[data-dial-toggle]");
    if (e) {
      var r = e.getAttribute("data-dial-toggle"), n = document.getElementById(r);
      if (n) {
        var o = e.getAttribute("data-dial-trigger");
        new Po(t, e, n, {
          triggerType: o || Or.triggerType
        });
      } else
        console.error("Dial with id ".concat(r, " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"));
    } else
      console.error("Dial with id ".concat(t.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
  });
}
typeof window < "u" && (window.Dial = Po, window.initDials = an);
var Xt = function() {
  return Xt = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, Xt.apply(this, arguments);
}, Wn = {
  minValue: null,
  maxValue: null,
  onIncrement: function() {
  },
  onDecrement: function() {
  }
}, Js = {
  id: null,
  override: !0
}, So = (
  /** @class */
  function() {
    function t(e, r, n, o, i) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = null), o === void 0 && (o = Wn), i === void 0 && (i = Js), this._instanceId = i.id ? i.id : e.id, this._targetEl = e, this._incrementEl = r, this._decrementEl = n, this._options = Xt(Xt({}, Wn), o), this._initialized = !1, this.init(), X.addInstance("InputCounter", this, this._instanceId, i.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._targetEl && !this._initialized && (this._inputHandler = function(r) {
        {
          var n = r.target;
          /^\d*$/.test(n.value) || (n.value = n.value.replace(/[^\d]/g, "")), e._options.maxValue !== null && parseInt(n.value) > e._options.maxValue && (n.value = e._options.maxValue.toString()), e._options.minValue !== null && parseInt(n.value) < e._options.minValue && (n.value = e._options.minValue.toString());
        }
      }, this._incrementClickHandler = function() {
        e.increment();
      }, this._decrementClickHandler = function() {
        e.decrement();
      }, this._targetEl.addEventListener("input", this._inputHandler), this._incrementEl && this._incrementEl.addEventListener("click", this._incrementClickHandler), this._decrementEl && this._decrementEl.addEventListener("click", this._decrementClickHandler), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._targetEl && this._initialized && (this._targetEl.removeEventListener("input", this._inputHandler), this._incrementEl && this._incrementEl.removeEventListener("click", this._incrementClickHandler), this._decrementEl && this._decrementEl.removeEventListener("click", this._decrementClickHandler), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("InputCounter", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.getCurrentValue = function() {
      return parseInt(this._targetEl.value) || 0;
    }, t.prototype.increment = function() {
      this._options.maxValue !== null && this.getCurrentValue() >= this._options.maxValue || (this._targetEl.value = (this.getCurrentValue() + 1).toString(), this._options.onIncrement(this));
    }, t.prototype.decrement = function() {
      this._options.minValue !== null && this.getCurrentValue() <= this._options.minValue || (this._targetEl.value = (this.getCurrentValue() - 1).toString(), this._options.onDecrement(this));
    }, t;
  }()
);
function sn() {
  document.querySelectorAll("[data-input-counter]").forEach(function(t) {
    var e = t.id, r = document.querySelector('[data-input-counter-increment="' + e + '"]'), n = document.querySelector('[data-input-counter-decrement="' + e + '"]'), o = t.getAttribute("data-input-counter-min"), i = t.getAttribute("data-input-counter-max");
    t ? X.instanceExists("InputCounter", t.getAttribute("id")) || new So(t, r || null, n || null, {
      minValue: o ? parseInt(o) : null,
      maxValue: i ? parseInt(i) : null
    }) : console.error('The target element with id "'.concat(e, '" does not exist. Please check the data-input-counter attribute.'));
  });
}
typeof window < "u" && (window.InputCounter = So, window.initInputCounters = sn);
function Zs() {
  $r(), Br(), qr(), Gr(), Qr(), en(), tn(), rn(), nn(), on(), an(), sn();
}
typeof window < "u" && (window.initFlowbite = Zs);
var Qs = new Sa("load", [
  $r,
  Br,
  qr,
  Gr,
  Qr,
  en,
  tn,
  rn,
  nn,
  on,
  an,
  sn
]);
Qs.init();
const el = {
  accordion: null,
  options: {
    alwaysOpen: !1,
    activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
    inactiveClasses: "text-gray-500 dark:text-gray-400"
  },
  oncreate({ state: t, attrs: e, children: r }) {
    const { id: n = "accordion", collapseAll: o = !1, flush: i = !1 } = e;
    e.alwaysOpen && (t.options.alwaysOpen = e.alwaysOpen);
    const a = [];
    r.map((s, c) => {
      const f = s.children[0], p = s.children[1];
      f.state.isOpen = s.state.isOpen, f.state.flush = i, f.dom.id = `${n}-heading-${c}`, p.dom.id = `${n}-body-${c}`, o ? p.dom.className = _(p.dom.className, "hidden") : s.state.isOpen || (p.dom.className = _(p.dom.className, "hidden")), a.push({
        id: `${n}-heading-${c}`,
        triggerEl: f.dom,
        targetEl: p.dom,
        active: o ? !1 : s.state.isOpen
      });
    }), g.redraw(), t.accordion = new Hr(n, a, t.options);
  },
  view({ attrs: t, children: e }) {
    const {
      class: r,
      id: n = "accordion",
      alwaysOpen: o = !1,
      flush: i = !1,
      theme: a = {},
      ...s
    } = t, c = T(Zt.root, a), f = tl(s);
    return g(
      "div",
      {
        id: n,
        class: _(c.base, c.flush[i ? "on" : "off"], r),
        "data-accordion": o ? "open" : "collapse",
        ...f
      },
      e
    );
  }
}, tl = Nr(["collapseAll"]), Fl = Object.assign(el, {
  Panel: ta,
  Title: Pa,
  Content: ea
}), jo = {
  base: "flex flex-col gap-2 p-4 text-sm",
  borderAccent: "border-t-4",
  closeButton: {
    base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
    icon: "w-4 h-4",
    color: {
      blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
      failure: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
      green: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      indigo: "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
      info: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      light: "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",
      lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
      pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
      purple: "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
      red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      success: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
      warning: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      yellow: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300"
    }
  },
  color: {
    blue: "text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800",
    cyan: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
    dark: "text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300",
    failure: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
    gray: "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
    green: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
    indigo: "text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800",
    info: "text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800",
    light: "text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200",
    lime: "text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800",
    pink: "text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800",
    purple: "text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800",
    red: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
    success: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
    teal: "text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800",
    warning: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
    yellow: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800"
  },
  icon: "mr-3 inline h-5 w-5 flex-shrink-0",
  rounded: "rounded-lg",
  wrapper: "flex items-center"
}, Ul = {
  view({ attrs: t, children: e }) {
    const {
      additionalContent: r,
      class: n,
      color: o = "info",
      // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      icon: i,
      onDismiss: a,
      rounded: s = !1,
      theme: c = {},
      withBorderAccent: f = !1,
      ...p
    } = t, h = T(jo, c);
    return g(
      "div",
      {
        class: _(
          h.base,
          h.color[o],
          s && h.rounded,
          f && h.borderAccent,
          n
        ),
        role: "alert",
        ...p
      },
      g("div", { class: h.wrapper }, [
        i && g(i, { class: h.icon }),
        g("div", e),
        typeof a == "function" && g(
          "button",
          {
            "aria-label": "Dismiss",
            class: _(h.closeButton.base, h.closeButton.color[o]),
            onclick: a,
            type: "button"
          },
          g(za, { "aria-hidden": !0, class: h.closeButton.icon })
        )
      ]),
      r && g("div", r)
    );
  }
}, er = {
  root: {
    base: "flex justify-center items-center space-x-4 rounded",
    bordered: "p-1 ring-2",
    rounded: "rounded-full",
    color: {
      dark: "ring-gray-800 dark:ring-gray-800",
      failure: "ring-red-500 dark:ring-red-700",
      gray: "ring-gray-500 dark:ring-gray-400",
      info: "ring-blue-400 dark:ring-blue-800",
      light: "ring-gray-300 dark:ring-gray-500",
      pink: "ring-pink-500 dark:ring-pink-500",
      purple: "ring-purple-500 dark:ring-purple-600",
      success: "ring-green-500 dark:ring-green-500",
      warning: "ring-yellow-300 dark:ring-yellow-500"
    },
    img: {
      base: "rounded",
      off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
      on: "",
      placeholder: "absolute w-auto h-auto text-gray-400 -bottom-1"
    },
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-36 h-36"
    },
    stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
    statusPosition: {
      "bottom-left": "-bottom-1 -left-1",
      "bottom-center": "-bottom-1 center",
      "bottom-right": "-bottom-1 -right-1",
      "top-left": "-top-1 -left-1",
      "top-center": "-top-1 center",
      "top-right": "-top-1 -right-1",
      "center-right": "center -right-1",
      center: "center center",
      "center-left": "center -left-1"
    },
    status: {
      away: "bg-yellow-400",
      base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
      busy: "bg-red-400",
      offline: "bg-gray-400",
      online: "bg-green-400"
    },
    initials: {
      text: "font-medium text-gray-600 dark:text-gray-300",
      base: "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600"
    }
  },
  group: {
    base: "flex -space-x-4"
  },
  groupCounter: {
    base: "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
  }
}, rl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(er.group, n);
    return g("div", { class: _(i.base, r), ...o }, e);
  }
}, nl = {
  view({ attrs: t }) {
    const { class: e, href: r, total: n, theme: o = {}, ...i } = t, a = T(er.groupCounter, o);
    return g(g.route.Link, { href: r, class: _(a.base, e), ...i }, `+${n}`);
  }
}, ol = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      alt: n = "",
      bordered: o = !1,
      color: i = "light",
      // "dark" | "failure" | "gray" | "info" | "light" | "pink" | "purple" | "success" | "warning"
      img: a,
      initials: s = "",
      rounded: c = !1,
      size: f = "md",
      // "xs" | "sm" | "md" | "lg" | "xl"
      stacked: p = !1,
      status: h,
      // "away" | "busy" | "offline" | "online"
      statusPosition: v = "top-left",
      // "bottom-left" | "bottom-center" | "bottom-right" | "top-left" | "top-center" | "top-right" | "top-left" | "center-right" | "center" | "center-left"
      theme: w = {},
      ...k
    } = t, b = T(er, w), x = _(
      b.root.img.base,
      o && b.root.bordered,
      o && b.root.color[i],
      c && b.root.rounded,
      p && b.root.stacked,
      b.root.img.on,
      b.root.size[f]
    ), C = {
      class: _(x, b.root.img.on)
    };
    return g(
      "div",
      { class: _(b.root.base, r), ...k },
      g("div", { class: "relative" }, [
        a ? typeof a == "string" ? g("img", { alt: n, src: a, ...C }) : g(a, { alt: n, ...C }) : s ? g(
          "div",
          {
            class: _(
              b.root.img.off,
              b.root.initials.base,
              p && b.root.stacked,
              o && b.root.bordered,
              o && b.root.color[i],
              b.root.size[f],
              c && b.root.rounded
            )
          },
          g("span", { class: _(b.root.initials.text) }, s)
        ) : g(
          "div",
          { class: _(x, b.root.img.off) },
          g(
            "svg",
            {
              class: b.root.img.placeholder,
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg"
            },
            g("path", {
              fillRule: "evenodd",
              d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
              clipRule: "evenodd"
            })
          )
        ),
        h && g("span", {
          class: _(
            b.root.status.base,
            b.root.status[h],
            b.root.statusPosition[v]
          )
        })
      ]),
      e.length > 0 && g("div", e)
    );
  }
}, Kl = Object.assign(ol, {
  Group: rl,
  Counter: nl
}), Ro = {
  root: {
    base: "flex h-fit items-center font-semibold",
    color: {
      blue: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
      cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
      dark: "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
      failure: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
      green: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
      info: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
      light: "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
      lime: "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
      pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
      red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      success: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      teal: "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
      warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
      yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300"
    },
    href: "group",
    size: {
      xs: "p-1 text-xs",
      sm: "p-1.5 text-sm"
    }
  },
  icon: {
    off: "rounded px-2 py-0.5",
    on: "rounded-full p-1.5",
    size: {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5"
    }
  }
}, il = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "info",
      // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      href: o,
      icon: i,
      size: a = "xs",
      // "xs" | "sm"
      theme: s = {},
      ...c
    } = t, f = T(Ro, s), p = {
      view: () => g(
        "span",
        {
          class: _(
            f.root.base,
            f.root.color[n],
            f.root.size[a],
            f.icon[i ? "on" : "off"],
            i && e.length > 0 ? "gap-1" : "",
            r
          ),
          ...c
        },
        [
          i && g(i, { "aria-hidden": !0, class: f.icon.size[a] }),
          e.length > 0 && g("span", e)
        ]
      )
    };
    return o ? g(g.route.Link, { class: f.root.href, href: o }, g(p)) : g(p);
  }
}, No = {
  root: {
    base: "text-xl italic font-semibold text-gray-900 dark:text-white"
  }
}, Xl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(No, n);
    return g("blockquote", { class: _(i.root.base, r), ...o }, e);
  }
}, ln = {
  root: {
    base: "",
    list: "flex items-center"
  },
  item: {
    base: "group flex items-center",
    chevron: "mx-1 h-3 w-3 text-gray-400 group-first:hidden md:mx-2",
    href: {
      off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
      on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    },
    icon: "mr-2 h-3 w-3"
  }
}, al = {
  view({ attrs: t, children: e }) {
    const { class: r, href: n, icon: o, theme: i = {}, ...a } = t, s = typeof n < "u", c = s ? "a" : "span", f = T(ln.item, i);
    return g("li", { class: _(f.base, r), ...a }, [
      g(ho, { "aria-hidden": !0, class: f.chevron }),
      g(c, { class: f.href[s ? "on" : "off"], href: n }, [
        o && g(o, { "aria-hidden": !0, class: f.icon }),
        e
      ])
    ]);
  }
}, sl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(ln.root, n);
    return g(
      "nav",
      { "aria-label": "Breadcrumb", class: _(i.base, r), ...o },
      g("ol", { class: i.list }, e)
    );
  }
}, Yl = Object.assign(sl, { Item: al }), Mo = {
  base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
  fullSized: "w-full",
  color: {
    blue: "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    cyan: "text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700",
    dark: "text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
    failure: "text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900",
    gray: "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 :ring-gray-700 focus:text-gray-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
    green: "text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700",
    indigo: "text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700",
    info: "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:enabled:hover:bg-blue-700 dark:focus:ring-blue-800",
    light: "text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",
    lime: "text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700",
    pink: "text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700",
    purple: "text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900",
    red: "text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700",
    success: "text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800",
    teal: "text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700",
    warning: "text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    yellow: "text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700"
  },
  disabled: "cursor-not-allowed opacity-50",
  isProcessing: "cursor-wait",
  spinnerSlot: "absolute h-full top-0 flex items-center animate-fade-in",
  spinnerLeftPosition: {
    xs: "left-2",
    sm: "left-3",
    md: "left-4",
    lg: "left-5",
    xl: "left-6"
  },
  gradient: {
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    failure: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
    info: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
    success: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
  },
  gradientDuoTone: {
    cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue: "text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
    pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
    purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
    redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
    tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
  },
  inner: {
    base: "flex items-stretch items-center transition-all duration-200",
    position: {
      none: "",
      start: "rounded-r-none",
      middle: "rounded-none",
      end: "rounded-l-none"
    },
    outline: "border border-transparent",
    isProcessingPadding: {
      xs: "pl-8",
      sm: "pl-10",
      md: "pl-12",
      lg: "pl-16",
      xl: "pl-20"
    }
  },
  label: "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
  outline: {
    color: {
      default: "border-0",
      gray: "border border-gray-900 dark:border-white",
      light: ""
    },
    off: "",
    on: "flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",
    pill: {
      off: "rounded-md",
      on: "rounded-full"
    }
  },
  pill: {
    off: "rounded-lg",
    on: "rounded-full"
  },
  size: {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
    xl: "text-base px-6 py-3"
  }
}, cn = {
  base: "inline-flex",
  position: {
    none: "focus:ring-2",
    start: "rounded-r-none",
    middle: "rounded-none border-l-0 pl-0",
    end: "rounded-l-none border-l-0 pl-0"
  }
}, ll = {
  view({ attrs: t, children: e }) {
    const { class: r, outline: n, pill: o, theme: i = {}, ...a } = t, s = T(cn, i);
    return g(
      "div",
      {
        class: _(s.base, r),
        role: "group",
        ...a
      },
      e.map((c, f) => (c.attrs.positionInGroup = f === 0 ? "start" : f === e.length - 1 ? "end" : "middle", c.attrs.outline = n, c.attrs.pill = o, c))
    );
  }
}, Do = {
  base: "inline animate-spin text-gray-200",
  color: {
    failure: "fill-red-600",
    gray: "fill-gray-600",
    info: "fill-blue-600",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    success: "fill-green-500",
    warning: "fill-yellow-400"
  },
  light: {
    off: {
      base: "dark:text-gray-600",
      color: {
        failure: "",
        gray: "dark:fill-gray-300",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    },
    on: {
      base: "",
      color: {
        failure: "",
        gray: "",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    }
  },
  size: {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10"
  }
}, cl = {
  view({ attrs: t }) {
    const {
      class: e,
      color: r = "info",
      // "failure" | "gray" | "info" | "pink" | "purple" | "success" | "warning"
      light: n,
      size: o = "md",
      // "xs" | "sm" | "md" | "lg" | "xl"
      theme: i = {},
      ...a
    } = t, s = T(Do, i);
    return g(
      "span",
      {
        role: "status",
        ...a
      },
      g(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 100 101",
          class: _(
            s.base,
            s.color[r],
            s.light[n ? "on" : "off"].base,
            s.light[n ? "on" : "off"].color[r],
            s.size[o],
            e
          )
        },
        [
          g("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          }),
          g("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          })
        ]
      )
    );
  }
}, dl = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "info",
      // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      disabled: o = !1,
      fullSized: i,
      isProcessing: a = !1,
      processingLabel: s = "Loading...",
      processingSpinner: c,
      gradientDuoTone: f,
      // "cyanToBlue" | "greenToBlue" | "pinkToOrange" | "purpleToBlue" | "purpleToPink" | "redToYellow" | "tealToLime"
      gradientMonochrome: p,
      // "cyan" | "failure" | "info" | "lime" | "pink" | "purple" | "success" | "teal"
      label: h,
      outline: v = !1,
      pill: w = !1,
      positionInGroup: k = "none",
      // "none" | "start" | "middle" | "end"
      size: b = "md",
      // "xs" | "sm" | "md" | "lg" | "xl"
      theme: x = {},
      ...C
    } = t, E = T(Mo, x);
    return g(
      "button",
      {
        type: "button",
        disabled: o,
        class: _(
          E.base,
          o && E.disabled,
          !f && !p && E.color[n],
          f && !p && E.gradientDuoTone[f],
          !f && p && E.gradient[p],
          v && (E.outline.color[n] ?? E.outline.color.default),
          E.pill[w ? "on" : "off"],
          i && E.fullSized,
          cn.position[k],
          r
        ),
        ...C
      },
      [
        g(
          "span",
          {
            class: _(
              E.inner.base,
              E.outline[v ? "on" : "off"],
              E.outline.pill[v && w ? "on" : "off"],
              E.size[b],
              v && !E.outline.color[n] && E.inner.outline,
              a && E.isProcessing,
              a && E.inner.isProcessingPadding[b],
              E.inner.position[k]
            )
          },
          a && g(
            "span",
            {
              class: _(E.spinnerSlot, E.spinnerLeftPosition[b])
            },
            c || g(cl, { size: b })
          ),
          e.length > 0 ? e : g(
            "span",
            {
              class: _(E.label)
            },
            a ? s : h
          )
        )
      ]
    );
  }
}, ul = Object.assign(dl, {
  Group: ll
}), dn = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row"
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700"
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    }
  }
}, Jl = {
  view({ attrs: t, children: e }) {
    const { class: r, horizontal: n, href: o, theme: i = {}, ...a } = t, s = typeof o > "u" ? "div" : "a", c = pl(a);
    n && (a.horizontal = n);
    const f = T(dn, i);
    return g(
      s,
      {
        href: o,
        class: _(
          f.root.base,
          f.root.horizontal[n ? "on" : "off"],
          o && f.root.href,
          r
        ),
        ...c
      },
      [g(fl, { ...a }), g("div", { class: f.root.children }, e)]
    );
  }
}, fl = {
  view({ attrs: t }) {
    const { horizontal: e, imgAlt: r, imgSrc: n, theme: o = {} } = t, i = T(dn, o);
    return n ? g("img", {
      alt: r ?? "",
      src: n,
      class: _(i.img.base, i.img.horizontal[e ? "on" : "off"])
    }) : null;
  }
}, pl = Nr(["class", "horizontal", "href", "imgSrc", "imgAlt", "theme"]), Ho = {
  root: {
    base: "h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
    color: {
      blue: "focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700 text-blue-700",
      cyan: "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
      dark: "focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800 text-gray-800",
      default: "focus:ring-blue-600 dark:ring-offset-blue-600 dark:focus:ring-blue-600 text-blue-600",
      failure: "focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900",
      gray: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
      green: "focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600 text-green-600",
      indigo: "focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700 text-indigo-700",
      info: "focus:ring-blue-800 dark:ring-offset-gray-800 dark:focus:ring-blue-800 text-blue-800",
      light: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
      lime: "focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700 text-lime-700",
      pink: "focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600 text-pink-600",
      purple: "focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600",
      red: "focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600 text-red-600",
      success: "focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800",
      teal: "focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600 text-teal-600",
      warning: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
      yellow: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400"
    }
  }
}, Zl = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "default",
      // "blue" | "cyan" | "dark" | "default" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      theme: o = {},
      ...i
    } = t, a = T(Ho, o);
    return g(
      "input",
      { type: "checkbox", class: _(a.root.base, a.root.color[n], r), ...i },
      e
    );
  }
}, Ct = {
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-2 text-sm text-gray-700 dark:text-gray-200",
  floating: {
    animation: "transition-opacity",
    base: "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
    item: {
      container: "",
      base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4"
    }
  },
  inlineWrapper: "flex items-center"
}, gl = {
  isActive: !1,
  view({ attrs: t, children: e, state: r }) {
    const { class: n, icon: o, theme: i = {}, ...a } = t, s = T(Ct.floating.item, i), c = () => r.isActive = !r.isActive;
    return g(
      "li",
      { class: s.container },
      g(
        "button",
        {
          class: _(s.base, n),
          tabIndex: r.isActive ? 0 : -1,
          onmouseover: () => {
            c();
          },
          onmouseout: () => {
            c();
          },
          ...a
        },
        [o && g(o, { class: s.icon }), e]
      )
    );
  }
}, $o = {
  view({ attrs: t }) {
    const { class: e, ...r } = t;
    return g("div", { class: _(Ct.floating.divider, e), ...r });
  }
}, hl = {
  view({ attrs: t, children: e }) {
    const { class: r, ...n } = t;
    return [
      g("div", { class: _(Ct.floating.header, r), ...n }, e),
      g($o)
    ];
  }
}, bl = {
  menuId: "dropdownMenu",
  buttonId: "dropdownButton",
  dropdown: null,
  options: {
    placement: "bottom",
    triggerType: "click",
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: !1
  },
  oninit({ attrs: t, state: e }) {
    t.id && (e.menuId = `${t.id}Menu`, e.buttonId = `${t.id}Button`), t.placement && (e.options.placement = t.placement), t.trigger && (e.options.triggerType = t.trigger), t.offsetSkidding && (e.options.offsetSkidding = t.offsetSkidding), t.offsetDistance && (e.options.offsetDistance = t.offsetDistance), t.delay && (e.options.delay = t.delay), t.ignoreClickOutsideClass && (e.options.ignoreClickOutsideClass = t.ignoreClickOutsideClass);
  },
  oncreate({ state: t }) {
    const e = document.getElementById(t.menuId), r = document.getElementById(t.buttonId);
    t.dropdown = new Zr(e, r, t.options);
  },
  view({ attrs: t, children: e, state: r }) {
    const {
      class: n,
      arrowIcon: o = !0,
      dismissOnClick: i = !0,
      inline: a,
      label: s,
      size: c = "md",
      // "sm" | "md" | "lg"
      theme: f = {},
      ...p
    } = t, h = ml(p), v = T(Ct, f);
    let w = Dr;
    return r.options.placement.startsWith("right") ? w = ho : r.options.placement.startsWith("left") ? w = La : r.options.placement.startsWith("top") && (w = Oa), [
      a ? g("button", { id: r.buttonId, type: "button", class: v.inlineWrapper }, s) : g(
        ul,
        {
          id: r.buttonId,
          type: "button",
          size: c,
          "data-dropdown-placement": r.options.placement,
          "data-dropdown-toggle": r.menuId,
          onclick: () => {
            r.dropdown.toggle();
          }
        },
        [s, o && g(w, { class: v.arrowIcon })]
      ),
      g(
        "div",
        {
          id: r.menuId,
          class: _(v.floating.base, v.floating.animation, "duration-100", n),
          ...h
        },
        g("ul", { class: v.content, tabIndex: -1 }, e)
      )
    ];
  }
}, ml = Nr([
  "id",
  "placement",
  "trigger",
  "offsetSkidding",
  "offsetDistance",
  "delay",
  "ignoreClickOutsideClass"
]), Ql = Object.assign(bl, {
  Item: gl,
  Header: hl,
  Divider: $o
}), Bo = {
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "sm:text-xs",
        md: "text-sm",
        lg: "sm:text-md"
      },
      colors: {
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
      }
    }
  }
}, qo = {
  root: {
    base: "mt-2 text-sm",
    colors: {
      failure: "text-red-600 dark:text-red-500",
      gray: "text-gray-500 dark:text-gray-400",
      info: "text-blue-700 dark:text-blue-800",
      success: "text-green-600 dark:text-green-500",
      warning: "text-yellow-500 dark:text-yellow-600"
    }
  }
}, tr = {
  view({ attrs: t, children: e }) {
    const { class: r, color: n = "default", theme: o = {}, value: i, ...a } = t, s = T(qo, o);
    return g(
      "p",
      { class: _(s.root.base, s.root.colors[n], r), ...a },
      i ?? e ?? ""
    );
  }
}, ec = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "gray",
      // "failure" | "gray" | "info" | "success" | "warning"
      helperText: o,
      size: i = "md",
      // "sm" | "md" | "lg"
      theme: a = {},
      ...s
    } = t, c = T(Bo, a);
    return [
      g(
        "div",
        { class: _(c.root.base, r) },
        g(
          "div",
          { class: c.field.base },
          g("input", {
            class: _(c.field.input.base, c.field.input.colors[n], c.field.input.sizes[i]),
            type: "file",
            ...s
          })
        )
      ),
      o && g(tr, { color: n }, o)
    ];
  }
}, Ce = {
  root: {
    base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800"
  },
  groupLink: {
    base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
    link: {
      base: "last:mr-0 md:mr-6",
      href: "hover:underline"
    },
    col: "flex-col space-y-4"
  },
  icon: {
    base: "text-gray-500 dark:hover:text-white",
    size: "h-5 w-5"
  },
  title: {
    base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
  },
  divider: {
    base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
  },
  copyright: {
    base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    href: "ml-1 hover:underline",
    span: "ml-1"
  },
  brand: {
    base: "mb-4 flex items-center sm:mb-0",
    img: "mr-3 h-8",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
  }
}, vl = {
  view({ attrs: t, children: e }) {
    const { alt: r, class: n, href: o, name: i, src: a, theme: s = {}, ...c } = t, f = T(Ce.brand, s);
    return g(
      "div",
      o ? g("a", { href: o, class: _(f.base, n), ...c }, [
        g("img", { alt: r, src: a, class: f.img }),
        g("span", { class: f.span }, i),
        e
      ]) : g("img", { alt: r, src: a, class: _(f.img, n), ...c })
    );
  }
}, yl = {
  view({ attrs: t }) {
    const { by: e, class: r, href: n, theme: o = {}, year: i, ...a } = t, s = T(Ce.copyright, o);
    return g("div", { class: _(s.base, r), ...a }, [
      `© ${i}`,
      n ? g("a", { href: n, class: s.href }, e) : g("span", { class: s.span }, e)
    ]);
  }
}, wl = {
  view({ attrs: t }) {
    const { class: e, theme: r = {}, ...n } = t, o = T(Ce.divider, r);
    return g("hr", { class: _(o.base, e), ...n });
  }
}, xl = {
  view({ attrs: t }) {
    const { ariaLabel: e, class: r, href: n, icon: o, theme: i = {}, ...a } = t, s = T(Ce.footer.icon, i);
    return g(
      "div",
      n ? g(
        "a",
        { "aria-label": e, href: n, class: _(s.base, r), ...a },
        g(o, { class: s.size })
      ) : g(o, { class: s.size, ...a })
    );
  }
}, kl = {
  view({ attrs: t, children: e }) {
    const { as: r = "a", class: n, href: o, theme: i = {}, ...a } = t, s = T(Ce.groupLink.link, i);
    return g(
      "li",
      { class: _(s.base, n) },
      g(r, { href: o, class: s.href, ...a }, e)
    );
  }
}, _l = {
  view({ attrs: t, children: e }) {
    const { class: r, col: n = !1, theme: o = {}, ...i } = t, a = T(Ce.groupLink, o);
    return g("ul", { class: _(a.base, n && a.col, r), ...i }, e);
  }
}, El = {
  view({ attrs: t }) {
    const { as: e = "h2", class: r, theme: n = {}, title: o, ...i } = t, a = T(Ce.title, n);
    return g(e, { class: _(a.base, r), ...i }, o);
  }
}, Il = {
  view({ attrs: t, children: e }) {
    const { bgDark: r = !1, class: n, container: o = !1, theme: i = {}, ...a } = t, s = T(Ce, i);
    return g(
      "footer",
      {
        class: _(s.root.base, r && s.root.bgDark, o && s.root.container, n),
        ...a
      },
      e
    );
  }
}, tc = Object.assign(Il, {
  Brand: vl,
  Copyright: yl,
  Divider: wl,
  Icon: xl,
  Link: kl,
  LinkGroup: _l,
  Title: El
}), Go = {
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    rightIcon: {
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    input: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "sm:text-md p-4"
      },
      colors: {
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
      },
      withRightIcon: {
        on: "pr-10",
        off: ""
      },
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      }
    }
  }
}, rc = {
  view({ attrs: t }) {
    const {
      addon: e,
      class: r,
      color: n = "gray",
      // "failure" | "gray" | "info" | "success" | "warning"
      helperText: o,
      icon: i,
      rightIcon: a,
      shadow: s,
      sizing: c = "md",
      // "sm" | "md" | "lg"
      theme: f = {},
      ...p
    } = t, h = T(Go, f);
    return [
      g("div", { class: _(h.base, r) }, [
        e && g("span", { class: h.addon }, e),
        g("div", { class: h.field.base }, [
          i && g("div", { class: h.field.icon.base }, g(i, { class: h.field.icon.svg })),
          a && g("div", { class: h.field.rightIcon.base }, g(a, { class: h.field.rightIcon.svg })),
          g("input", {
            class: _(
              h.field.input.base,
              h.field.input.colors[n],
              h.field.input.sizes[c],
              h.field.input.withIcon[i ? "on" : "off"],
              h.field.input.withRightIcon[a ? "on" : "off"],
              h.field.input.withAddon[e ? "on" : "off"],
              h.field.input.withShadow[s ? "on" : "off"]
            ),
            ...p
          })
        ])
      ]),
      o && g(tr, { color: n }, o)
    ];
  }
}, Vo = {
  root: {
    base: "px-2 py-1.5 mr-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
    icon: "inline-block"
  }
}, nc = {
  view({ attrs: t, children: e }) {
    const { class: r, icon: n, theme: o = {}, ...i } = t, a = T(Vo, o);
    return g("span", { class: _(a.root.base, r), ...i }, [
      n && g(n, { class: a.root.icon }),
      e
    ]);
  }
}, Wo = {
  root: {
    base: "text-sm font-medium",
    disabled: "opacity-50",
    colors: {
      default: "text-gray-900 dark:text-white",
      failure: "text-red-700 dark:text-red-500",
      info: "text-blue-500 dark:text-blue-600",
      success: "text-green-700 dark:text-green-500",
      warning: "text-yellow-500 dark:text-yellow-600"
    }
  }
}, oc = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "default",
      // "default" | "failure" | "info" | "success" | "warning
      disabled: o = !1,
      value: i,
      theme: a = {},
      ...s
    } = t, c = T(Wo, a);
    return g(
      "label",
      {
        class: _(c.root.base, c.root.colors[n], o && c.root.disabled, r),
        ...s
      },
      e ?? e ?? ""
    );
  }
}, un = {
  root: {
    base: "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left"
  },
  item: {
    base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
    link: {
      base: "flex items-center w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600",
      active: {
        off: "hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
        on: "bg-blue-700 text-white dark:bg-gray-800"
      },
      disabled: {
        off: "",
        on: "hover:bg-gray-100 text-gray-900 hover:text-gray-900 focus:text-gray-900 bg-gray-100 cursor-not-allowed"
      },
      href: {
        off: "",
        on: ""
      },
      icon: "mr-2 h-4 w-4"
    }
  }
}, Cl = {
  view({ attrs: t, children: e }) {
    const { active: r, class: n, href: o, icon: i, disabled: a, theme: s = {}, ...c } = t, f = T(un.item, s), p = typeof o < "u", h = p ? "a" : "button";
    return console.log("DISA", a), g("li", { class: _(f.base, n) }, [
      g(
        h,
        {
          href: o,
          type: p ? void 0 : "button",
          disabled: a,
          class: _(
            f.link.active[r ? "on" : "off"],
            f.link.disabled[a ? "on" : "off"],
            f.link.base,
            f.link.href[p ? "on" : "off"]
          ),
          ...c
        },
        [i && g(i, { "aria-hidden": !0, class: f.link.icon }), e]
      )
    ]);
  }
}, Al = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(un, n);
    return g("ul", { class: _(i.root.base, r), ...o }, e);
  }
}, ic = Object.assign(Al, { Item: Cl }), Ue = {
  root: {
    base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: ""
    },
    bordered: {
      on: "border",
      off: ""
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container"
      }
    }
  },
  brand: {
    base: "flex items-center"
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: ""
    }
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0",
    active: {
      on: "bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700",
      off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: ""
    }
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    icon: "h-6 w-6 shrink-0"
  }
}, Tl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(Ue.brand, n);
    return g(g.route.Link, { class: _(i.base, r), ...o }, e);
  }
}, Ll = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(Ue.collapse, n);
    return g("div", { class: _(i.base, r), ...o }, g("ul", { class: i.list }, e));
  }
};
Ue.link;
const Ol = {
  view({ attrs: t, children: e }) {
    const { class: r, active: n, disabled: o, theme: i = {}, ...a } = t, s = T(Ue.link, i);
    return g(
      "li",
      g(
        g.route.Link,
        {
          class: _(
            s.base,
            n && s.active.on,
            !n && !o && s.active.off,
            s.disabled[o ? "on" : "off"],
            r
          ),
          ...a
        },
        e
      )
    );
  }
}, zl = {
  view({ attrs: t }) {
    const { class: e, theme: r = {}, ...n } = t, o = T(Ue.toggle, r);
    return g(
      "button",
      { class: _(o.base, e), ...n },
      g("span", { class: "sr-only" }, "Open main menu")
    );
  }
}, Pl = {
  view({ attrs: t, children: e }) {
    const { class: r, bordered: n, rounded: o, fluid: i = !1, theme: a = {}, ...s } = t, c = T(Ue.root, a);
    return g(
      "nav",
      {
        class: _(
          c.base,
          c.bordered[n ? "on" : "off"],
          c.rounded[o ? "on" : "off"],
          r
        ),
        ...s
      },
      g(
        "div",
        {
          class: _(c.inner.base, c.inner.fluid[i ? "on" : "off"])
        },
        e
      )
    );
  }
}, ac = Object.assign(Pl, {
  Brand: Tl,
  Collapse: Ll,
  Link: Ol,
  Toggle: zl
}), Fo = {
  root: {
    base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600 text-blue-600"
  }
}, sc = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(Fo, n);
    return g("input", { type: "radio", class: _(i.root.base, r), ...o }, e);
  }
}, Uo = {
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
      sizes: {
        sm: "h-1 range-sm",
        md: "h-2",
        lg: "h-3 range-lg"
      }
    }
  }
}, lc = {
  view({ attrs: t }) {
    const {
      class: e,
      size: r = "md",
      // "sm" | "md" | "lg"
      theme: n = {},
      ...o
    } = t, i = T(Uo, n);
    return g(
      "div",
      { class: _(i.root.base, e) },
      g(
        "div",
        { class: i.field.base },
        g("input", { type: "range", class: _(i.field.input.base, i.field.input.sizes[r]), ...o })
      )
    );
  }
}, Ko = {
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    select: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      },
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "sm:text-md p-4"
      },
      colors: {
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
      }
    }
  }
}, cc = {
  view({ attrs: t, children: e }) {
    const {
      addon: r,
      class: n,
      color: o = "gray",
      // "failure" | "gray" | "info" | "success" | "warning"
      helperText: i,
      icon: a,
      shadow: s,
      size: c = "md",
      // "sm" | "md" | "lg"
      theme: f = {},
      ...p
    } = t, h = T(Ko, f);
    return g("div", { class: _(h.base, n) }, [
      r && g("span", { class: h.addon }, r),
      g("div", { class: h.field.base }, [
        a && g("div", { class: h.field.icon.base }, g(a, { class: h.field.icon.svg })),
        g(
          "select",
          {
            class: _(
              h.field.select.base,
              h.field.select.colors[o],
              h.field.select.sizes[c],
              h.field.select.withIcon[a ? "on" : "off"],
              h.field.select.withAddon[r ? "on" : "off"],
              h.field.select.withShadow[s ? "on" : "off"]
            ),
            ...p
          },
          e
        ),
        i && g(tr, { color: o }, i)
      ])
    ]);
  }
}, Ne = {
  root: {
    base: "h-full",
    collapsed: {
      on: "w-16",
      off: "w-64"
    },
    inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 py-4 px-3 dark:bg-gray-800"
  },
  collapse: {
    button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    icon: {
      base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      open: {
        off: "",
        on: "text-gray-900"
      }
    },
    label: {
      base: "ml-3 flex-1 whitespace-nowrap text-left",
      icon: {
        base: "h-6 w-6 transition ease-in-out delay-0",
        open: {
          on: "rotate-180",
          off: ""
        }
      }
    },
    list: "space-y-2 py-2"
  },
  cta: {
    base: "mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-700",
    color: {
      blue: "bg-cyan-50 dark:bg-cyan-900",
      dark: "bg-dark-50 dark:bg-dark-900",
      failure: "bg-red-50 dark:bg-red-900",
      gray: "bg-alternative-50 dark:bg-alternative-900",
      green: "bg-green-50 dark:bg-green-900",
      light: "bg-light-50 dark:bg-light-900",
      red: "bg-red-50 dark:bg-red-900",
      purple: "bg-purple-50 dark:bg-purple-900",
      success: "bg-green-50 dark:bg-green-900",
      yellow: "bg-yellow-50 dark:bg-yellow-900",
      warning: "bg-yellow-50 dark:bg-yellow-900"
    }
  },
  item: {
    base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    active: "bg-gray-100 dark:bg-gray-700",
    collapsed: {
      insideCollapse: "group w-full pl-8 transition duration-75",
      noIcon: "font-bold"
    },
    content: {
      base: "px-3 flex-1 whitespace-nowrap"
    },
    icon: {
      base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      active: "text-gray-700 dark:text-gray-100"
    },
    label: "",
    listItem: ""
  },
  items: {
    base: ""
  },
  itemGroup: {
    base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
  },
  logo: {
    base: "mb-5 flex items-center pl-2.5",
    collapsed: {
      on: "hidden",
      off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    },
    img: "mr-3 h-6 sm:h-7"
  }
}, Sl = {
  isOpen: !1,
  oninit({ attrs: t, children: e, state: r }) {
    const { open: n = !1 } = t;
    r.isOpen = n;
    for (const o of e)
      o.attrs.isInsideCollapse = !0;
    g.redraw();
  },
  view({ attrs: t, children: e, state: r }) {
    const {
      class: n,
      icon: o,
      label: i,
      ChevronIcon: a = Dr,
      collapsed: s = !1,
      theme: c = {},
      ...f
    } = t, p = T(Ne.collapse, c);
    return g(
      "li",
      g(
        "button",
        {
          title: i,
          type: "button",
          class: _(p.button, n),
          onclick: () => {
            r.isOpen = !r.isOpen;
          },
          ...f
        },
        o && g(o, {
          class: _(p.icon.base, p.icon.open[r.isOpen ? "on" : "off"])
        }),
        [
          s ? g("span", { class: "sr-only" }, i) : [
            g("span", { class: p.label.base }, i),
            g(a, {
              "aria-hidden": "true",
              class: _(p.label.icon.base, p.label.icon.open[r.isOpen ? "on" : "off"])
            })
          ]
        ]
      ),
      g(
        "ul",
        {
          hidden: !r.isOpen,
          class: p.list
        },
        e
      )
    );
  }
}, jl = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "info",
      collapsed: o = !1,
      theme: i = {},
      ...a
    } = t, s = T(Ne.cta, i);
    return g(
      "div",
      {
        hidden: o,
        class: _(s.base, s.color[n], r),
        ...a
      },
      e
    );
  }
}, Rl = {
  view({ attrs: t, children: e, state: r }) {
    var k, b, x, C;
    const {
      class: n,
      as: o = "a",
      collapsed: i = !1,
      isInsideCollapse: a = !1,
      active: s,
      icon: c,
      label: f,
      labelColor: p = "info",
      theme: h = {},
      ...v
    } = t, w = T(Ne.item, h);
    return g(
      "li",
      g(
        o,
        {
          class: _(
            w.base,
            s && w.active,
            i && a && ((k = w.collapsed) == null ? void 0 : k.insideCollapse),
            n
          ),
          ...v
        },
        c && g(c, {
          "aria-hidden": "true",
          class: _((b = w.icon) == null ? void 0 : b.base, s && ((x = w.icon) == null ? void 0 : x.active))
        }),
        i && !c && g("span", {
          class: (C = w.collapsed) == null ? void 0 : C.noIcon
        }),
        !i && g(
          "span",
          {
            class: _(w.content.base)
          },
          e
        ),
        !i && f && g(
          il,
          {
            class: w.label,
            hidden: i,
            color: p
          },
          f
        )
      )
    );
  }
}, Nl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(Ne.items, n);
    return g("div", { class: _(i.base, r), ...o }, e);
  }
}, Ml = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(Ne.itemGroup, n);
    return g("ul", { class: _(i.base, r), ...o }, e);
  }
}, Dl = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      href: n,
      img: o,
      imgAlt: i,
      collapsed: a = !1,
      theme: s = {},
      ...c
    } = t, f = T(Ne.logo, s);
    return g(
      "a",
      {
        href: n,
        class: _(f.base, r),
        ...c
      },
      g("img", { src: o, alt: i, class: f.img }),
      g(
        "span",
        {
          class: f.collapsed[a ? "on" : "off"]
        },
        e
      )
    );
  }
}, Hl = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      as: n = "nav",
      collapsed: o = !1,
      collapseBehavior: i = "collapse",
      theme: a = {},
      ...s
    } = t, c = T(Ne.root, a);
    return g(
      n,
      {
        class: _(c.base, c.collapsed[o ? "on" : "off"], r),
        hidden: o && i === "hide",
        "aria-label": "Sidebar",
        ...s
      },
      g(
        "div",
        {
          class: c.inner
        },
        e
      )
    );
  }
}, dc = Object.assign(Hl, {
  Collapse: Sl,
  CTA: jl,
  Item: Rl,
  Items: Nl,
  ItemGroup: Ml,
  Logo: Dl
}), Ke = {
  root: {
    base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
    shadow: "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
    wrapper: "relative"
  },
  body: {
    base: "group/body",
    cell: {
      base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4"
    }
  },
  head: {
    base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
    cell: {
      base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3"
    }
  },
  row: {
    base: "group/row",
    hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
    striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
  }
}, $l = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(Ke.head, n);
    return g("thead", { class: _(i.base, r), ...o }, g("tr", e));
  }
}, Bl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(Ke.body, n);
    return g("tbody", { class: _(i.base, r), ...o }, e);
  }
}, ql = {
  view({ attrs: t, children: e }) {
    const { class: r, hoverable: n, striped: o, theme: i = {}, ...a } = t, s = T(Ke.row, i);
    return g(
      "tr",
      { class: _(s.base, o && s.striped, n && s.hovered, r), ...a },
      e
    );
  }
}, Gl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(Ke.body.cell, n);
    return g("td", { class: _(i.base, r), ...o }, e);
  }
}, Vl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...o } = t, i = T(Ke.head, n);
    return g("th", { class: _(i.cell.base, r), ...o }, e);
  }
}, Wl = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      // TODO: implement these
      // hoverable,
      // striped,
      theme: n = {},
      ...o
    } = t, i = T(Ke.root, n);
    return g("div", { class: _(i.wrapper) }, [
      g("div", { class: _(i.shadow, r) }),
      g("table", { class: _(i.base, r), ...o }, e)
    ]);
  }
}, uc = Object.assign(Wl, {
  Head: $l,
  Body: Bl,
  Row: ql,
  Cell: Gl,
  HeadCell: Vl
}), Xo = {
  base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm",
  colors: {
    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
    gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
  },
  withShadow: {
    on: "shadow-sm dark:shadow-sm-light",
    off: ""
  }
}, fc = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "gray",
      // "failure" | "gray" | "info" | "success" | "warning"
      helperText: o,
      shadow: i,
      theme: a = {},
      ...s
    } = t, c = T(Xo, a);
    return [
      g(
        "textarea",
        {
          class: _(c.base, c.colors[n], c.withShadow[i ? "on" : "off"], r),
          ...s
        },
        e
      ),
      o && g(tr, { color: n }, o)
    ];
  }
}, Yo = {
  root: {
    base: "group relative flex items-center rounded-lg focus:outline-none",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50"
    },
    label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
  },
  toggle: {
    base: "toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-blue-500/25",
    checked: {
      on: "after:translate-x-full after:border-white",
      off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
      color: {
        blue: "bg-blue-700 border-blue-700",
        cyan: "bg-cyan-500 border-cyan-500",
        dark: "bg-dark-700 border-dark-900",
        failure: "bg-red-700 border-red-900",
        gray: "bg-gray-500 border-gray-600",
        green: "bg-green-600 border-green-700",
        indigo: "bg-indigo-400 border-indigo-400",
        info: "bg-blue-600 border-blue-600",
        light: "bg-light-700 border-light-900",
        lime: "bg-lime-400 border-lime-400",
        pink: "bg-pink-600 border-pink-600",
        purple: "bg-purple-700 border-purple-900",
        red: "bg-red-700 border-red-900",
        success: "bg-green-500 border-green-500",
        teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
        warning: "bg-yellow-600 border-yellow-600",
        yellow: "bg-yellow-400 border-yellow-400"
      }
    },
    sizes: {
      sm: "w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4",
      md: "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5",
      lg: "w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6"
    }
  }
}, pc = {
  toggled: !1,
  oninit({ attrs: t, state: e }) {
    e.toggled = t.checked;
  },
  view({ attrs: t, state: e }) {
    const {
      id: r,
      class: n,
      color: o = "blue",
      // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      size: i = "md",
      // "sm" | "md" | "lg"
      disabled: a,
      label: s,
      name: c,
      onclick: f,
      theme: p = {},
      ...h
    } = t, v = T(Yo, p), w = () => e.toggled = !e.toggled, k = () => {
      a || (w(), f && f());
    }, b = (x) => {
      x.code === "Enter" && x.preventDefault();
    };
    return [
      c && e.toggled ? g("input", {
        checked: e.toggled,
        hidden: !0,
        name: c,
        readOnly: !0,
        type: "checkbox",
        class: "sr-only"
      }) : null,
      g(
        "button",
        {
          "aria-checked": e.toggled,
          "aria-labelledby": `${r}-flowbite-toggleswitch-label`,
          id: `${r}-flowbite-toggleswitch`,
          onclick: k,
          onkeydown: b,
          role: "switch",
          tabIndex: 0,
          type: "button",
          class: _(v.root.base, v.root.active[a ? "off" : "on"], n),
          ...h
        },
        g("div", {
          class: _(
            v.toggle.base,
            v.toggle.checked[e.toggled ? "on" : "off"],
            e.toggled && v.toggle.checked.color[o],
            v.toggle.sizes[i]
          )
        }),
        s != null && s.length ? g(
          "span",
          {
            id: `${r}-flowbite-toggleswitch-label`,
            class: v.root.label
          },
          s
        ) : null
      )
    ];
  }
}, gc = {
  accordion: Zt,
  avatar: er,
  alert: jo,
  badge: Ro,
  blockquote: No,
  breadcrumb: ln,
  button: Mo,
  buttonGroup: cn,
  card: dn,
  checkbox: Ho,
  dropdown: Ct,
  fileInput: Bo,
  footer: Ce,
  helperText: qo,
  input: Go,
  kbd: Vo,
  label: Wo,
  listGroup: un,
  navbar: Ue,
  radio: Fo,
  range: Uo,
  select: Ko,
  sidebar: Ne,
  spinner: Do,
  table: Ke,
  textarea: Xo,
  toggle: Yo
};
export {
  Fl as Accordion,
  el as AccordionComponent,
  Ul as Alert,
  Kl as Avatar,
  ol as AvatarComponent,
  il as Badge,
  Xl as Blockquote,
  Yl as Breadcrumb,
  sl as BreadcrumbComponent,
  ul as Button,
  dl as ButtonComponent,
  Jl as Card,
  Zl as Checkbox,
  Ql as Dropdown,
  bl as DropdownComponent,
  ec as FileInput,
  tc as Footer,
  Il as FooterComponent,
  tr as HelperText,
  rc as Input,
  nc as Kbd,
  oc as Label,
  ic as ListGroup,
  Al as ListGroupComponent,
  ac as Navbar,
  Pl as NavbarComponent,
  sc as Radio,
  lc as Range,
  cc as Select,
  dc as Sidebar,
  Hl as SidebarComponent,
  cl as Spinner,
  uc as Table,
  fc as Textarea,
  pc as Toggle,
  gc as theme
};
