import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, f as renderSlot, m as maybeRenderHead } from '../astro_9591e01e.mjs';
import 'clsx';
import { _ as _export_sfc, $ as $$BaseLayout, r as routeList, a as $$WorkspaceLayout } from './404_ffaf4cbb.mjs';
import { useSSRContext, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
/* empty css                            */import 'html-escaper';
/* empty css                            *//* empty css                            */import 'fzf';
/* empty css                         */
const _sfc_main$2 = {
		name: "TableOfContent",
		props: {
			tableOfContent: {
				type: Array,
				required: true
			}
		}
	};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "toc text-xs" }, _attrs))} data-v-62b8c66e><div class="cursor" data-v-62b8c66e></div><!--[-->`);
  ssrRenderList($props.tableOfContent, (tocItem) => {
    _push(`<li style="${
      ssrRenderStyle({ marginLeft: `${20 * (tocItem.depth - 1)}px` })
    }" class="toc-item" data-v-62b8c66e><a${
      ssrRenderAttr("href", `#${tocItem.slug}`)
    } class="toc-link" data-v-62b8c66e>${
      ssrInterpolate(tocItem.text.substring(1))
    }</a></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/TableOfContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const TableOfContent = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender$2],['__scopeId',"data-v-62b8c66e"]]);

const _sfc_main$1 = {
		name: "ContentWrapper",
		components: { TableOfContent },
		props: {
			name: {
				type: String,
				required: true
			},
			tableOfContent: {
				type: Array,
				required: true
			}
		},
		computed: {
			fileIndex() {
				return this.$context.fileList.findIndex((file) => file.uuid === this.name)
			},
			file() {
				return this.fileIndex > -1 ? this.$context.fileList[this.fileIndex] : null
			},
			fileSiblings() {
				return {
					prev: this.$context.fileList[this.fileIndex - 1] ?? null,
					next: this.$context.fileList[this.fileIndex + 1] ?? null
				}
			}
		}
	};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_table_of_content = resolveComponent("table-of-content");

  _push(`<div${ssrRenderAttrs(_attrs)} data-v-da403e55>`);
  _push(ssrRenderComponent(_component_table_of_content, {
    "table-of-content": $props.tableOfContent,
    class: "no-print"
  }, null, _parent));
  _push(`<div class="markdown-content" data-v-da403e55>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  if ($options.fileSiblings.prev || $options.fileSiblings.next) {
    _push(`<div class="siblings no-print" style="${ssrRenderStyle({
				justifyContent: !$options.fileSiblings.prev ? 'flex-end' : 'space-between'
			})}" data-v-da403e55>`);
    if ($options.fileSiblings.prev) {
      _push(`<a class="sibling-link"${
        ssrRenderAttr("href", $options.fileSiblings.prev.routePath)
      } data-v-da403e55><svg class="ph-icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256" data-v-da403e55><rect width="256" height="256" fill="none" data-v-da403e55></rect><line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-da403e55></line><polyline points="112 56 40 128 112 200" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-da403e55></polyline></svg> ${
        ssrInterpolate($options.fileSiblings.prev.title)
      }</a>`);
    } else {
      _push(`<!---->`);
    }
    if ($options.fileSiblings.next) {
      _push(`<a class="sibling-link sibling-link--next"${
        ssrRenderAttr("href", $options.fileSiblings.next.routePath)
      } data-v-da403e55>${
        ssrInterpolate($options.fileSiblings.next.title)
      } <svg class="ph-icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256" data-v-da403e55><rect width="256" height="256" fill="none" data-v-da403e55></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-da403e55></line><polyline points="144 56 216 128 144 200" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-da403e55></polyline></svg></a>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ContentWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const ContentWrapper = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1],['__scopeId',"data-v-da403e55"]]);

const _sfc_main = {
		name: "SlidesContent",
		data() {
			return {
				loaded: false
			}
		},
		async mounted() {
			const slidesContent = document.querySelector(".slides-content");
			slidesContent.innerHTML = `<div class="reveal deck"><div class="slides"><section>${slidesContent.innerHTML
				.split("<hr>")
				.join("</section><section>")}</section></div></div>`;

			this.loaded = true;

			const deck = document.querySelector(".deck");

			const Reveal = (await import('reveal.js')).default(deck, {
				embedded: true
			});

			await Reveal.initialize({
				slideNumber: "c/t"
			});

			Reveal.slide(new URLSearchParams(window.location.search).get("slide") || 0);

			Reveal.on("slidechanged", (event) => {
				history.replaceState({}, "", `?slide=${event.indexh}`);
			});
		}
	};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: ($data.loaded) ? null : { display: "none" }
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/SlidesContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const SlidesContent = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro$1 = createAstro();
const $$SlidesLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SlidesLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "isNotFoundPage": false }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SlidesContent", SlidesContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/components/SlidesContent.vue", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["default"])}` })}` })}`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/layouts/SlidesLayout.astro", void 0);

const $$Astro = createAstro();
const Astro = $$Astro;
async function getStaticPaths() {
  const markdownFiles = await Astro.glob(/* #__PURE__ */ Object.assign({"../../../../../../code/mds/MBA1FullStack-Docker/doc/course/README.md": () => import('../README_8b91374f.mjs')}), () => "@source/**/*.{md,mdx}");
  return routeList.map((route) => {
    const md = markdownFiles.find((post) => post.file === `${process.cwd()}/${route.fullPath}`);
    let routePath = route.path;
    if (routePath !== "/") {
      routePath = routePath.substring("/".length);
    }
    return {
      params: {
        path: routePath === "/" ? void 0 : routePath
      },
      props: {
        name: route.name,
        md,
        asSlides: !!route.meta.asSlides,
        uuid: route.name,
        title: route.meta.title,
        description: route.meta.description || ""
      }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  Astro2.params;
  const { name, title, description, asSlides } = Astro2.props;
  const { Content } = Astro2.props.md;
  const tableOfContent = Astro2.props.md.getHeadings();
  return renderTemplate`${asSlides ? renderTemplate`${renderComponent($$result, "SlidesLayout", $$SlidesLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="slides-content">${renderComponent($$result2, "Content", Content, {})}</div>` })}` : renderTemplate`${renderComponent($$result, "WorkspaceLayout", $$WorkspaceLayout, { "title": title, "description": description, "isNotFoundPage": false }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContentWrapper", ContentWrapper, { "name": name, "tableOfContent": tableOfContent }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Content", Content, {})}` })}` })}`}`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/pages/[...path].astro", void 0);

const $$file = "/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/pages/[...path].astro";
const $$url = "/[...path]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
