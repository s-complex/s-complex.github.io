import { ViteSSG } from "vite-ssg/single-page";
import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { VApp } from "vuetify/lib/components/VApp/index.mjs";
import { createVuetify } from "vuetify";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(ssrRenderComponent(VApp, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-h4 mb-3"${_scopeId}><strong${_scopeId}>You&#39;re currently visit: <a href="https://github.com/s-complex/s-complex.github.io"${_scopeId}>s-complex/s-complex.github.io</a></strong></div><br${_scopeId}><h2 class="text-h5 mb-3"${_scopeId}>关于 Sliver Complex</h2><p class="text-body-1 mb-3"${_scopeId}>Sliver Complex 是一个 <a href="https://github.com/gxres042"${_scopeId}>Restent Ou</a> 和 <a href="https://github.com/slivermoe"${_scopeId}>SliverRiver</a> 共有的小型试验场。</p><p class="text-body-1 mb-3"${_scopeId}>如果前者有动力去 commit 的话，试验场内估计会有很多新奇的小玩意。</p><h2 class="text-h5 mb-3"${_scopeId}>关于本页</h2><p class="text-body-1 mb-3"${_scopeId}>本页是一个 Sliver Complex 的简短介绍页，但介绍并非其重点，其重点是关联的 <a href="https://slirv.vip"${_scopeId}>slirv.vip</a> 域名能否正常连通。</p><p class="text-body-1 mb-3"${_scopeId}>若你访问 <a href="https://slirv.vip"${_scopeId}>slirv.vip</a> 能够正常显示此页面，证明你与此域名的连通性正常。</p>`);
      } else {
        return [
          createVNode("div", { class: "text-h4 mb-3" }, [
            createVNode("strong", null, [
              createTextVNode("You're currently visit: "),
              createVNode("a", { href: "https://github.com/s-complex/s-complex.github.io" }, "s-complex/s-complex.github.io")
            ])
          ]),
          createVNode("br"),
          createVNode("h2", { class: "text-h5 mb-3" }, "关于 Sliver Complex"),
          createVNode("p", { class: "text-body-1 mb-3" }, [
            createTextVNode("Sliver Complex 是一个 "),
            createVNode("a", { href: "https://github.com/gxres042" }, "Restent Ou"),
            createTextVNode(" 和 "),
            createVNode("a", { href: "https://github.com/slivermoe" }, "SliverRiver"),
            createTextVNode(" 共有的小型试验场。")
          ]),
          createVNode("p", { class: "text-body-1 mb-3" }, "如果前者有动力去 commit 的话，试验场内估计会有很多新奇的小玩意。"),
          createVNode("h2", { class: "text-h5 mb-3" }, "关于本页"),
          createVNode("p", { class: "text-body-1 mb-3" }, [
            createTextVNode("本页是一个 Sliver Complex 的简短介绍页，但介绍并非其重点，其重点是关联的 "),
            createVNode("a", { href: "https://slirv.vip" }, "slirv.vip"),
            createTextVNode(" 域名能否正常连通。")
          ]),
          createVNode("p", { class: "text-body-1 mb-3" }, [
            createTextVNode("若你访问 "),
            createVNode("a", { href: "https://slirv.vip" }, "slirv.vip"),
            createTextVNode(" 能够正常显示此页面，证明你与此域名的连通性正常。")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: "#ECEFF1",
          surface: "#FFFFFF",
          primary: "#2196F3",
          secondary: "#03A9F4",
          blockquote: "#ECEFF1",
          blockquoteBorder: "#039BE5"
        }
      },
      dark: {
        colors: {
          background: "#263238",
          surface: "#37474F",
          primary: "#2196F3",
          secondary: "#03A9F4",
          blockquote: "#455A64",
          blockquoteBorder: "#0277BD"
        }
      }
    }
  }
});
const createApp = ViteSSG(App, ({ app }) => {
  app.use(vuetify);
});
export {
  createApp
};
