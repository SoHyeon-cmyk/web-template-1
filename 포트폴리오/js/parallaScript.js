!function() {
  "use strict";
  function e(e) {
      return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
  }
  function t(s, i) {
      void 0 === s && (s = {}),
      void 0 === i && (i = {}),
      Object.keys(i).forEach((a => {
          void 0 === s[a] ? s[a] = i[a] : e(i[a]) && e(s[a]) && Object.keys(i[a]).length > 0 && t(s[a], i[a])
      }
      ))
  }
  const s = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: {
          blur() {},
          nodeName: ""
      },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({
          initEvent() {}
      }),
      createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
      }
  };
  function i() {
      const e = "undefined" != typeof document ? document : {};
      return t(e, s),
      e
  }
  const a = {
      document: s,
      navigator: {
          userAgent: ""
      },
      location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
      },
      history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
      },
      CustomEvent: function() {
          return this
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({
          getPropertyValue: () => ""
      }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(),
      null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
      }
  };
  function r() {
      const e = "undefined" != typeof window ? window : {};
      return t(e, a),
      e
  }
  function n(e) {
      return void 0 === e && (e = ""),
      e.trim().split(" ").filter((e => !!e.trim()))
  }
  function l(e, t) {
      return void 0 === t && (t = 0),
      setTimeout(e, t)
  }
  function o() {
      return Date.now()
  }
  function d(e, t) {
      void 0 === t && (t = "x");
      const s = r();
      let i, a, n;
      const l = function(e) {
          const t = r();
          let s;
          return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
      }(e);

    }

function () {
  let {swiper: t, extendParams: s, on: i} = e;
  s({
      parallax: {
          enabled: !1
      }
  });
  const a = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
    , r = (e, s) => {
      const {rtl: i} = t
        , a = i ? -1 : 1
        , r = e.getAttribute("data-swiper-parallax") || "0";
      let n = e.getAttribute("data-swiper-parallax-x")
        , l = e.getAttribute("data-swiper-parallax-y");
      const o = e.getAttribute("data-swiper-parallax-scale")
        , d = e.getAttribute("data-swiper-parallax-opacity")
        , p = e.getAttribute("data-swiper-parallax-rotate");
      if (n || l ? (n = n || "0",
      l = l || "0") : t.isHorizontal() ? (n = r,
      l = "0") : (l = r,
      n = "0"),
      n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * a + "%" : n * s * a + "px",
      l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px",
      null != d) {
          const t = d - (d - 1) * (1 - Math.abs(s));
          e.style.opacity = t
      }
      let c = `translate3d(${n}, ${l}, 0px)`;
      if (null != o) {
          c += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`
      }
      if (p && null != p) {
          c += ` rotate(${p * s * -1}deg)`
      }
      e.style.transform = c
  }
    , n = () => {
      const {el: e, slides: s, progress: i, snapGrid: n, isElement: l} = t
        , o = f(e, a);
      t.isElement && o.push(...f(t.hostEl, a)),
      o.forEach((e => {
          r(e, i)
      }
      )),
      s.forEach(( (e, s) => {
          let l = e.progress;
          t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - i * (n.length - 1)),
          l = Math.min(Math.max(l, -1), 1),
          e.querySelectorAll(`${a}, [data-swiper-parallax-rotate]`).forEach((e => {
              r(e, l)
          }
          ))
      }
      ))
  }
  ;
  i("beforeInit", ( () => {
      t.params.parallax.enabled && (t.params.watchSlidesProgress = !0,
      t.originalParams.watchSlidesProgress = !0)
  }
  )),
  i("init", ( () => {
      t.params.parallax.enabled && n()
  }
  )),
  i("setTranslate", ( () => {
      t.params.parallax.enabled && n()
  }
  )),
  i("setTransition", ( (e, s) => {
      t.params.parallax.enabled && function(e) {
          void 0 === e && (e = t.params.speed);
          const {el: s, hostEl: i} = t
            , r = [...s.querySelectorAll(a)];
          t.isElement && r.push(...i.querySelectorAll(a)),
          r.forEach((t => {
              let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
              0 === e && (s = 0),
              t.style.transitionDuration = `${s}ms`
          }
          ))
      }(s)
  }
  ))
}
}
