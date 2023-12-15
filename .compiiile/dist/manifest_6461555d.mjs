import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_9591e01e.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".not-found[data-astro-cid-zetdm5md]{font-weight:700;font-family:var(--monospace);font-size:4rem;margin-top:60px}\n"},{"type":"external","src":"/_astro/_path_.8e257cde.css"},{"type":"external","src":"/_astro/_path_.3a6c7ce0.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_path_.9accade4.css"},{"type":"external","src":"/_astro/_path_.3a6c7ce0.css"},{"type":"external","src":"/_astro/_path_.8e257cde.css"}],"routeData":{"route":"/[...path]","type":"page","pattern":"^(?:\\/(.*?))?$","segments":[[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"src/pages/[...path].astro","prerender":false,"_meta":{"trailingSlash":"never"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/pages/[...path].astro",{"propagation":"none","containsHead":true}],["/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/[...path]@_@astro":"pages/_---path_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/[...path].astro":"chunks/pages/__faa3d04e.mjs","\u0000@astrojs-manifest":"manifest_6461555d.mjs","/Users/williamburillon/code/mds/MBA1FullStack-Docker/doc/course/README.md":"chunks/README_8b91374f.mjs","/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/components/ClientScript.vue":"_astro/ClientScript.90a89413.js","/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/components/SlidesContent.vue":"_astro/SlidesContent.96b50696.js","@astrojs/vue/client.js":"_astro/client.f6d2ab06.js","/Users/williamburillon/.config/yarn/global/node_modules/compiiile/.compiiile/src/components/layout/TopBar.vue":"_astro/TopBar.aa650a2b.js","/Users/williamburillon/.config/yarn/global/node_modules/reveal.js/dist/reveal.esm.js":"_astro/reveal.esm.1a4c3ae7.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
