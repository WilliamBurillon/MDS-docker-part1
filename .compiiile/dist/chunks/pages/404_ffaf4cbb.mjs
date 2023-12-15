/* empty css                            */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, s as spreadAttributes, u as unescapeHTML, d as renderComponent, e as renderHead, f as renderSlot, m as maybeRenderHead } from '../astro_9591e01e.mjs';
import 'clsx';
import { useSSRContext, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
/* empty css                            */import { Fzf } from 'fzf';
/* empty css                         */
const fileList = [{"uuid":"d176839f-cf00-4310-bd52-e9542913fd40","textContent":"Contenu du cours\nLa conteneurisation, c’est quoi ?\nDocker, l’outil incontournable de la conteneurisation\nEcrivez votre propre image docker\nEt si on parlait de clusterisation\n","title":"README","fullPath":"README.md","meta":{"title":"README"},"routePath":"/"}];


            const filesTree = [{"uuid":"d176839f-cf00-4310-bd52-e9542913fd40","name":"README","isDirectory":false,"children":[]}];


            const routeList = [{"path":"/","name":"d176839f-cf00-4310-bd52-e9542913fd40","title":"README","fullPath":"README.md","meta":{"title":"README"}}];


            const site = {"base":"/"};

const context = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
            __proto__: null,
            fileList,
            filesTree,
            routeList,
            site
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$9 = createAstro();
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$8 = createAstro();
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$7 = createAstro();
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$6 = createAstro();
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$5 = createAstro();
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$4 = createAstro();
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$3 = createAstro();
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, isNotFoundPage } = Astro2.props;
  const titleTemplate = site.title ? `%s | ${site.title}` : "";
  const siteUrl = site.siteUrl || Astro2.url.origin;
  let siteBase = site.base;
  if (!siteBase.endsWith("/")) {
    siteBase += "/";
  }
  const faviconBaseUrl = `${siteBase}favicon.png`;
  const faviconAbsoluteUrl = `${siteUrl}/${faviconBaseUrl}`;
  return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/png"${addAttribute(faviconBaseUrl, "href")}>${isNotFoundPage ? "" : renderTemplate`${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "titleTemplate": titleTemplate, "openGraph": {
    basic: {
      title,
      type: "website",
      description,
      image: faviconAbsoluteUrl
    }
  } })}`}${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/layouts/BaseLayout.astro", void 0);

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$7 = {
		name: "SearchResult",
		props: {
			searchResult: {
				type: Object,
				required: true
			}
		}
	};

function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${
    ssrRenderAttrs(mergeProps({
      href: _ctx.$context.routeList.find((route) => route.name === $props.searchResult.uuid).path,
      class: "search-result search-result-link"
    }, _attrs))
  } data-v-0a9e0353><li data-v-0a9e0353><div class="search-result-header" data-v-0a9e0353><h4 class="search-result-title" data-v-0a9e0353>${
    $props.searchResult.title
  }</h4><p class="search-result-file-path text-sm" data-v-0a9e0353>${
    ssrInterpolate($props.searchResult.fullPath)
  }</p></div><!--[-->`);
  ssrRenderList($props.searchResult.contentMatches, (contentMatch) => {
    _push(`<p class="text-xs search-result-match-preview" data-v-0a9e0353>${contentMatch}</p>`);
  });
  _push(`<!--]--></li></a>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/searchBar/SearchResult.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined
};
const SearchResult = /*#__PURE__*/_export_sfc(_sfc_main$7, [['ssrRender',_sfc_ssrRender$7],['__scopeId',"data-v-0a9e0353"]]);

const fileParagraphs = fileList
	.reduce((accumulator, currentValue) => {
		const splitter = "\n";
		const paragraphs = currentValue.textContent.split(splitter);

		let currentIndex = 0;

		for (const paragraph of paragraphs) {
			accumulator.push({
				uuid: currentValue.uuid,
				paragraph,
				startIndex: currentIndex,
				endIndex: currentIndex + paragraph.length
			});

			currentIndex += paragraph.length + splitter.length;
		}
		return accumulator
	}, [])
	.filter((paragraph) => paragraph.paragraph);

const searchIndex = new Fzf(fileParagraphs, {
	selector: (item) => item.paragraph,
	fuzzy: false
});

const RESULT_PREVIEW_CHARACTER_OFFSET = 120;

	const _sfc_main$6 = {
		name: "SearchBar",
		components: { SearchResult },
		data() {
			return {
				searchValue: "",
				searchResults: [],
				searchModalOpened: false
			}
		},
		mounted() {
			document.onkeydown = (e) => {
				const key = e.which || e.keyCode;

				if ((e.ctrlKey || e.metaKey) && key === 75) {
					this.openSearchModal();
				}
			};
		},
		methods: {
			search() {
				if (this.searchValue.trim().length > 1) {
					const results = searchIndex.find(this.searchValue.trim());

					const formattedResults = {};

					for (const result of results) {
						const uuid = result.item.uuid;

						if (!formattedResults[uuid]) {
							const file = this.$context.fileList.find((file) => file.uuid === uuid);
							formattedResults[uuid] = {
								...file,
								contentMatches: []
							};
						}

						let { textContent } = formattedResults[uuid];

						const matchEndIndex = result.item.startIndex + result.end;

						let contentSlice = textContent.slice(
							Math.max(result.item.startIndex + result.start - RESULT_PREVIEW_CHARACTER_OFFSET, 0),
							result.item.startIndex + result.start
						);

						contentSlice += `<mark>`;

						contentSlice += textContent.slice(result.item.startIndex + result.start, matchEndIndex);

						contentSlice += `</mark>`;

						contentSlice += textContent.slice(
							matchEndIndex,
							Math.min(textContent.length, matchEndIndex + RESULT_PREVIEW_CHARACTER_OFFSET)
						);

						formattedResults[uuid].contentMatches.push(contentSlice);
					}

					this.searchResults = Object.values(formattedResults);
				} else {
					this.searchResults = [];
				}
			},
			async openSearchModal() {
				this.searchValue = "";
				this.searchResults = [];

				this.searchModalOpened = true;

				await this.$nextTick();

				const searchInput = document.querySelector("#search-input");
				searchInput.focus();
			},
			focusFirstSearchResult() {
				const firstSearchResult = document.querySelector(".search-results .search-result");
				firstSearchResult.focus();
			},
			focusLastSearchResult() {
				const lastSearchResult = document.querySelector(".search-results .search-result:last-child");
				lastSearchResult.focus();
			},
			onSearchResultDownKeyPress(e) {
				let nextSearchResult = e.target.nextElementSibling;
				if (nextSearchResult) {
					nextSearchResult.focus();
				} else {
					this.focusFirstSearchResult();
				}
			},
			onSearchResultUpKeyPress(e) {
				let nextSearchResult = e.target.previousElementSibling;
				if (nextSearchResult) {
					nextSearchResult.focus();
				} else {
					this.focusLastSearchResult();
				}
			}
		}
	};

function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_search_result = resolveComponent("search-result");

  _push(`<!--[--><button class="fake-input" data-v-e656ab5f><svg class="ph-icon search-icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256" data-v-e656ab5f><rect width="256" height="256" fill="none" data-v-e656ab5f></rect><circle cx="116" cy="116" r="84" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-e656ab5f></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-e656ab5f></line></svg><span class="search-shortcut" data-v-e656ab5f><svg class="command-icon ph-icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256" data-v-e656ab5f><rect width="256" height="256" fill="none" data-v-e656ab5f></rect><path d="M180,48h0a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28H152a0,0,0,0,1,0,0V76a28,28,0,0,1,28-28Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-e656ab5f></path><path d="M48,48H76a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28h0A28,28,0,0,1,48,76V48A0,0,0,0,1,48,48Z" transform="translate(152 152) rotate(180)" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-e656ab5f></path><path d="M152,152h28a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28h0a28,28,0,0,1-28-28V152A0,0,0,0,1,152,152Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-e656ab5f></path><path d="M76,152h0a28,28,0,0,1,28,28v0a28,28,0,0,1-28,28H48a0,0,0,0,1,0,0V180A28,28,0,0,1,76,152Z" transform="translate(152 360) rotate(-180)" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-e656ab5f></path><rect x="104" y="104" width="48" height="48" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-e656ab5f></rect></svg>k </span></button>`);
  if ($data.searchModalOpened) {
    _push(`<div class="search-bar-wrapper" data-v-e656ab5f><div class="search-overlay" data-v-e656ab5f></div><div class="search-bar" data-v-e656ab5f><div class="search-input-wrapper" data-v-e656ab5f><label for="search-input" class="search-label" data-v-e656ab5f><svg class="ph-icon search-icon" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256" data-v-e656ab5f><rect width="256" height="256" fill="none" data-v-e656ab5f></rect><circle cx="116" cy="116" r="84" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-e656ab5f></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-e656ab5f></line></svg></label><input id="search-input"${ssrRenderAttr("value", $data.searchValue)} class="search-input" data-v-e656ab5f></div><ul class="search-results" data-v-e656ab5f><!--[-->`);
    ssrRenderList($data.searchResults, (searchResult) => {
      _push(ssrRenderComponent(_component_search_result, {
        key: searchResult.fullPath,
        "search-result": searchResult,
        onKeyup: [$options.onSearchResultDownKeyPress, $options.onSearchResultUpKeyPress]
      }, null, _parent));
    });
    _push(`<!--]--></ul></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/searchBar/SearchBar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : undefined
};
const SearchBar = /*#__PURE__*/_export_sfc(_sfc_main$6, [['ssrRender',_sfc_ssrRender$6],['__scopeId',"data-v-e656ab5f"]]);

const _sfc_main$5 = {
		name: "HamburgerButton",
		data() {
			return {
				isOpened: false
			}
		},
		methods: {
			toggleNavBar() {
				const navBar = document.querySelector("nav");
				const hamburger = document.querySelector(".hamburger");

				navBar.classList.toggle("navbar--opened");
				hamburger.classList.toggle("hamburger--opened");
			}
		}
	};

function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hamburger" }, _attrs))} data-v-4b33c0e8><span class="hamburger-line" data-v-4b33c0e8></span><span class="hamburger-line" data-v-4b33c0e8></span><span class="hamburger-line" data-v-4b33c0e8></span></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/layout/HamburgerButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined
};
const HamburgerButton = /*#__PURE__*/_export_sfc(_sfc_main$5, [['ssrRender',_sfc_ssrRender$5],['__scopeId',"data-v-4b33c0e8"]]);

const _sfc_main$4 = {
		name: "TopBar",
		components: { HamburgerButton, SearchBar },
		computed: {
			title() {
				return site.title
			},
			isLogoDefined() {
				return site.logo !== undefined
			},
			base() {
				let base = "/";

				if (!base.endsWith("/")) {
					base += "/";
				}

				return base
			}
		}
	};

function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hamburger_button = resolveComponent("hamburger-button");
  const _component_search_bar = resolveComponent("search-bar");

  _push(`<div${ssrRenderAttrs(mergeProps({ class: "top-bar no-print" }, _attrs))} data-v-fb2d7c43><div class="centered-layout" data-v-fb2d7c43><div class="top-bar-content" data-v-fb2d7c43>`);
  _push(ssrRenderComponent(_component_hamburger_button, null, null, _parent));
  _push(`<a${ssrRenderAttr("href", $options.base)} class="home-link" data-v-fb2d7c43>`);
  if ($options.isLogoDefined) {
    _push(`<img${
      ssrRenderAttr("src", `${$options.base}favicon.png`)
    }${
      ssrRenderAttr("width", 30)
    }${
      ssrRenderAttr("height", 30)
    } class="logo" alt="logo" data-v-fb2d7c43>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h1 class="title" data-v-fb2d7c43>${ssrInterpolate($options.title)}</h1></a>`);
  _push(ssrRenderComponent(_component_search_bar, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/layout/TopBar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined
};
const TopBar = /*#__PURE__*/_export_sfc(_sfc_main$4, [['ssrRender',_sfc_ssrRender$4],['__scopeId',"data-v-fb2d7c43"]]);

const _sfc_main$3 = {
		name: "NavListItem",
		props: {
			item: {
				type: Object,
				required: true
			},
			currentPath: {
				type: String,
				required: true
			}
		},
		computed: {
			route() {
				return this.$context.routeList.find((route) => route.name === this.item.uuid)
			}
		}
	};

function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_list_item = resolveComponent("nav-list-item", true);

  _push(`<li${ssrRenderAttrs(mergeProps({ class: "nav-list-item no-wrap" }, _attrs))} data-v-f23291a4>`);
  if ($props.item.isDirectory) {
    _push(`<!--[--><svg class="directory-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 256 256" data-v-f23291a4><path d="M216.9,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8V200.9A7.1,7.1,0,0,1,216.9,208Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-f23291a4></path><path d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-f23291a4></path></svg><span class="directory-name" data-v-f23291a4>${ssrInterpolate($props.item.name)}</span>`);
    if ($props.item.children.length > 0) {
      _push(`<ul class="nav-list-item-children" data-v-f23291a4><!--[-->`);
      ssrRenderList($props.item.children, (child) => {
        _push(ssrRenderComponent(_component_nav_list_item, {
          key: child.uuid,
          item: child,
          "current-path": $props.currentPath
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  } else {
    _push(`<a${
      ssrRenderAttr("href", $options.route.path)
    } class="${
      ssrRenderClass([[{ 'link-active': $options.route.path === $props.currentPath }], "link"])
    }" data-v-f23291a4>`);
    if (!$options.route.meta.asSlides) {
      _push(`<svg class="file-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 256 256" data-v-f23291a4><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-f23291a4></path><polyline points="152 32 152 88 208 88" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-f23291a4></polyline></svg>`);
    } else {
      _push(`<svg class="file-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 256 256" data-v-f23291a4><rect width="256" height="256" fill="none" data-v-f23291a4></rect><line x1="48" y1="184" x2="48" y2="72" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-f23291a4></line><line x1="208" y1="72" x2="208" y2="184" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-f23291a4></line><rect x="32" y="40" width="192" height="32" rx="8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-f23291a4></rect><line x1="128" y1="184" x2="128" y2="216" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-f23291a4></line><circle cx="128" cy="232" r="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-f23291a4></circle><line x1="32" y1="184" x2="224" y2="184" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" data-v-f23291a4></line></svg>`);
    }
    _push(`<span class="link-name" data-v-f23291a4>${ssrInterpolate($options.route.meta?.title || $props.item.name)}</span></a>`);
  }
  _push(`</li>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/layout/navBar/NavListItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined
};
const NavListItem = /*#__PURE__*/_export_sfc(_sfc_main$3, [['ssrRender',_sfc_ssrRender$3],['__scopeId',"data-v-f23291a4"]]);

const _sfc_main$2 = {
		name: "FilesTree",
		components: { NavListItem },
		props: {
			currentPath: {
				type: String,
				required: true
			}
		}
	};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nav_list_item = resolveComponent("nav-list-item");

  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "files-tree text-xs" }, _attrs))} data-v-1060c63c><!--[-->`);
  ssrRenderList(_ctx.$context.filesTree, (navItem) => {
    _push(ssrRenderComponent(_component_nav_list_item, {
      key: navItem.uuid,
      item: navItem,
      "current-path": $props.currentPath
    }, null, _parent));
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/layout/navBar/FilesTree.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const FilesTree = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender$2],['__scopeId',"data-v-1060c63c"]]);

const _sfc_main$1 = {
		name: "NavBar",
		components: { FilesTree },
		props: {
			currentPath: {
				type: String,
				required: true
			}
		}
	};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_files_tree = resolveComponent("files-tree");

  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "no-print" }, _attrs))} data-v-277420f3>`);
  _push(ssrRenderComponent(_component_files_tree, { "current-path": $props.currentPath }, null, _parent));
  _push(`</nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/layout/navBar/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const NavBar = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1],['__scopeId',"data-v-277420f3"]]);

const _sfc_main = {
		name: "ClientScript",
		beforeRouteUpdate() {
			window.removeEventListener("scroll", this.onScroll);
		},
		mounted() {
			window.addEventListener("scroll", this.onScroll);
		},
		methods: {
			async onScroll() {
				const tocItems = [...document.querySelectorAll(".toc a")];
				const anchors = [...document.querySelectorAll(".header-anchor")];

				const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				const cursor = document.querySelector(".cursor");

				// Iterate backwards, on the first match highlight it and break
				for (let i = tocItems.length - 1; i >= 0; i--) {
					if (scrollTop > anchors[i].offsetTop) {
						for (let j = 0; j < tocItems.length; j++) {
							tocItems[j].classList.remove("active");
						}

						const activeTocItem = tocItems[i];
						activeTocItem.classList.add("active");
						if (activeTocItem && cursor) {
							const activeTocItemBounds = activeTocItem.getBoundingClientRect();

							const tocWrapperTop = document.querySelector(".toc")?.getBoundingClientRect()?.top;
							cursor.style.height = `${activeTocItemBounds.height}px`;
							cursor.style.transform = `translateY(${activeTocItemBounds.top - tocWrapperTop}px)`;
						}
						break
					}
				}
			}
		}
	};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ClientScript.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const ClientScript = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro$1 = createAstro();
const $$WorkspaceLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WorkspaceLayout;
  const { title, description } = Astro2.props;
  let currentPath = Astro2.url.pathname;
  if (currentPath.length > 1 && currentPath.endsWith("/")) {
    currentPath = currentPath.slice(0, -1);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "isNotFoundPage": true, "data-astro-cid-gpqiybiv": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="page" data-astro-cid-gpqiybiv>${renderComponent($$result2, "TopBar", TopBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/components/layout/TopBar.vue", "client:component-export": "default", "data-astro-cid-gpqiybiv": true })}${renderComponent($$result2, "NavBar", NavBar, { "currentPath": currentPath, "data-astro-cid-gpqiybiv": true })}<div class="centered-layout" data-astro-cid-gpqiybiv><div class="content-wrapper" data-astro-cid-gpqiybiv>${renderSlot($$result2, $$slots["default"])}</div></div>${renderComponent($$result2, "ClientScript", ClientScript, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/components/ClientScript.vue", "client:component-export": "default", "data-astro-cid-gpqiybiv": true })}</div>` })}`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/layouts/WorkspaceLayout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "WorkspaceLayout", $$WorkspaceLayout, { "isNotFoundPage": true, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p class="text-center not-found" data-astro-cid-zetdm5md>404</p>` })}`;
}, "/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/pages/404.astro", void 0);

const $$file = "/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
            __proto__: null,
            default: $$404,
            file: $$file,
            url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, _export_sfc as _, $$WorkspaceLayout as a, _404 as b, context as c, routeList as r };
