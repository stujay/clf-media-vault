import { h as fallback, c as attributes, d as bind_props, l as sanitize_props, r as rest_props, m as spread_props, j as head, a as attr, b as attr_class, g as escape_html, f as ensure_array_like, e as derived, o as stringify } from "../../chunks/root.js";
import { parse, icon } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faSun, faUpload, faFolderOpen, faPlay, faFile, faCopy, faCode, faPen } from "@fortawesome/free-solid-svg-icons";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function classList(props) {
  const {
    beat,
    fade,
    beatFade,
    bounce,
    shake,
    flash,
    spin,
    spinPulse,
    spinReverse,
    pulse,
    fixedWidth,
    inverse,
    border,
    listItem,
    flip,
    size,
    rotation,
    pull
  } = props;
  const classes = {
    "fa-beat": beat,
    "fa-fade": fade,
    "fa-beat-fade": beatFade,
    "fa-bounce": bounce,
    "fa-shake": shake,
    "fa-flash": flash,
    "fa-spin": spin,
    "fa-spin-reverse": spinReverse,
    "fa-spin-pulse": spinPulse,
    "fa-pulse": pulse,
    "fa-fw": fixedWidth,
    "fa-inverse": inverse,
    "fa-border": border,
    "fa-li": listItem,
    "fa-flip": flip === true,
    "fa-flip-horizontal": flip === "horizontal" || flip === "both",
    "fa-flip-vertical": flip === "vertical" || flip === "both",
    [`fa-${size}`]: typeof size !== "undefined" && size !== null,
    [`fa-rotate-${rotation}`]: typeof rotation !== "undefined" && rotation !== null && rotation !== 0,
    [`fa-pull-${pull}`]: typeof pull !== "undefined" && pull !== null,
    "fa-swap-opacity": props.swapOpacity
  };
  return Object.keys(classes).map((key) => classes[key] ? key : null).filter((key) => key);
}
function _isNumerical(obj) {
  obj = obj - 0;
  return obj === obj;
}
function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  }
  string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : "";
  });
  return string.substr(0, 1).toLowerCase() + string.substr(1);
}
function styleToString(style) {
  if (typeof style === "string") {
    return style;
  }
  return Object.keys(style).reduce((acc, key) => acc + key.split(/(?=[A-Z])/).join("-").toLowerCase() + ":" + style[key] + ";", "");
}
function convert(createElement, element, extraProps = {}) {
  if (typeof element === "string") {
    return element;
  }
  const children = (element.children || []).map((child) => {
    return convert(createElement, child);
  });
  const mixins = Object.keys(element.attributes || {}).reduce(
    (acc, key) => {
      const val = element.attributes[key];
      if (key === "style") {
        acc.attrs["style"] = styleToString(val);
      } else {
        if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }
      }
      return acc;
    },
    { attrs: {} }
  );
  return createElement(element.tag, { ...mixins.attrs }, children);
}
let PRODUCTION = false;
try {
  PRODUCTION = process.env.NODE_ENV === "production";
} catch (e) {
}
function log(...args) {
  if (!PRODUCTION && console && typeof console.error === "function") {
    console.error(...args);
  }
}
function normalizeIconArgs(icon2) {
  if (icon2 && typeof icon2 === "object" && icon2.prefix && icon2.iconName && icon2.icon) {
    return icon2;
  }
  if (parse.icon) {
    return parse.icon(icon2);
  }
  if (icon2 === null) {
    return null;
  }
  if (icon2 && typeof icon2 === "object" && icon2.prefix && icon2.iconName) {
    return icon2;
  }
  if (Array.isArray(icon2) && icon2.length === 2) {
    return { prefix: icon2[0], iconName: icon2[1] };
  }
  if (typeof icon2 === "string") {
    return { prefix: "fas", iconName: icon2 };
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? { [key]: value } : {};
}
function SvgElement($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let tag = $$props["tag"];
    let props = $$props["props"];
    let children = $$props["children"];
    let style = fallback($$props["style"], null);
    let ref = fallback($$props["ref"], null);
    if (tag !== "svg") {
      throw new Error('SvgElement requires a tag of "svg"');
    }
    function processChildren(children2) {
      return children2?.reduce(
        (acc, child) => {
          return acc + (child.tag ? generateMarkup(child) : child);
        },
        ""
      ) || "";
    }
    function generateMarkup({ tag: tag2, props: props2, children: children2 }) {
      const attributes2 = Object.keys(props2).map((key) => `${key}="${props2[key]}"`).join(" ");
      return `<${tag2} ${attributes2}>${processChildren(children2)}</${tag2}>`;
    }
    const markup = processChildren(children);
    const elementStyle = props?.style ? `${props.style}${style || ""}` : style;
    const elementProps = { ...props, style: elementStyle };
    $$renderer2.push(`<svg${attributes({ ...elementProps }, void 0, void 0, void 0, 3)}>${html(markup)}</svg>`);
    bind_props($$props, { tag, props, children, style, ref });
  });
}
function FontAwesomeIcon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "border",
    "mask",
    "maskId",
    "fixedWidth",
    "inverse",
    "flip",
    "icon",
    "listItem",
    "pull",
    "pulse",
    "rotation",
    "size",
    "spin",
    "spinPulse",
    "spinReverse",
    "beat",
    "fade",
    "beatFade",
    "bounce",
    "shake",
    "symbol",
    "title",
    "titleId",
    "transform",
    "swapOpacity",
    "ref",
    "style"
  ]);
  $$renderer.component(($$renderer2) => {
    let border = fallback($$props["border"], false);
    let mask = fallback($$props["mask"], null);
    let maskId = fallback($$props["maskId"], null);
    let fixedWidth = fallback($$props["fixedWidth"], false);
    let inverse = fallback($$props["inverse"], false);
    let flip = fallback($$props["flip"], false);
    let icon$1 = fallback($$props["icon"], null);
    let listItem = fallback($$props["listItem"], false);
    let pull = fallback($$props["pull"], null);
    let pulse = fallback($$props["pulse"], false);
    let rotation = fallback($$props["rotation"], null);
    let size = fallback($$props["size"], null);
    let spin = fallback($$props["spin"], false);
    let spinPulse = fallback($$props["spinPulse"], false);
    let spinReverse = fallback($$props["spinReverse"], false);
    let beat = fallback($$props["beat"], false);
    let fade = fallback($$props["fade"], false);
    let beatFade = fallback($$props["beatFade"], false);
    let bounce = fallback($$props["bounce"], false);
    let shake = fallback($$props["shake"], false);
    let symbol = fallback($$props["symbol"], false);
    let title = fallback($$props["title"], "");
    let titleId = fallback($$props["titleId"], null);
    let transform = fallback($$props["transform"], null);
    let swapOpacity = fallback($$props["swapOpacity"], false);
    let ref = fallback($$props["ref"], null);
    let style = fallback($$props["style"], null);
    const iconLookup = normalizeIconArgs(icon$1);
    const classes = objectWithKey("classes", [
      ...classList($$sanitized_props),
      ...($$sanitized_props.class || "").split(" ")
    ]);
    const transformObj = objectWithKey("transform", typeof transform === "string" ? parse.transform(transform) : transform);
    const maskObj = objectWithKey("mask", normalizeIconArgs(mask));
    const renderedIcon = icon(iconLookup, {
      ...classes,
      ...transformObj,
      ...maskObj,
      symbol,
      title,
      titleId,
      maskId
    });
    let result = null;
    if (!renderedIcon) {
      log("Could not find icon", iconLookup);
    } else {
      const { abstract } = renderedIcon;
      result = convert(
        (tag, props, children) => {
          return { tag, props, children };
        },
        abstract[0],
        $$restProps
      );
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (result) {
        $$renderer3.push("<!--[0-->");
        SvgElement($$renderer3, spread_props([
          result,
          {
            style,
            get ref() {
              return ref;
            },
            set ref($$value) {
              ref = $$value;
              $$settled = false;
            }
          }
        ]));
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, {
      border,
      mask,
      maskId,
      fixedWidth,
      inverse,
      flip,
      icon: icon$1,
      listItem,
      pull,
      pulse,
      rotation,
      size,
      spin,
      spinPulse,
      spinReverse,
      beat,
      fade,
      beatFade,
      bounce,
      shake,
      symbol,
      title,
      titleId,
      transform,
      swapOpacity,
      ref,
      style
    });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let searchQuery = "";
    let uploading = false;
    let activeCategory = "All";
    let activeExtension = null;
    const CATEGORY_MAP = {
      Images: ["jpg", "jpeg", "png", "gif", "webp", "svg"],
      Videos: ["mp4", "webm", "ogg", "mov", "ts", "m3u8", "avi", "mkv"],
      Documents: ["pdf", "doc", "docx", "xls", "xlsx", "txt", "csv", "md"]
    };
    function getCategoryForExt(ext) {
      const e = ext.toLowerCase();
      if (CATEGORY_MAP.Images.includes(e)) return "Images";
      if (CATEGORY_MAP.Videos.includes(e)) return "Videos";
      if (CATEGORY_MAP.Documents.includes(e)) return "Documents";
      return "Other";
    }
    function formatBytes(bytes, decimals = 1) {
      if (!+bytes) return "0 B";
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["B", "KB", "MB", "GB", "TB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    }
    function formatDate(dateString) {
      if (!dateString) return "Unknown";
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(date);
    }
    function parseAssetKey(key) {
      const parts = key.split("/");
      const filename = parts.pop() || key;
      const path = parts.length > 0 ? parts.join("/") + "/" : "/";
      const extension = filename.split(".").pop()?.toLowerCase() || "file";
      return { filename, path, extension };
    }
    const processedAssets = derived(() => data.assets.map((asset) => {
      const parsed = parseAssetKey(asset.key);
      return {
        ...asset,
        ...parsed,
        category: getCategoryForExt(parsed.extension),
        formattedSize: formatBytes(asset.size || 0),
        formattedDate: formatDate(asset.lastModified)
      };
    }));
    const categoryFilteredAssets = derived(() => processedAssets().filter((asset) => {
      const matchesSearch = asset.key.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All";
      return matchesSearch && matchesCategory;
    }));
    const availableExtensions = derived(() => [...new Set(categoryFilteredAssets().map((a) => a.extension))].sort());
    const finalAssets = derived(() => categoryFilteredAssets().filter((asset) => !activeExtension).sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()));
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Media Vault | Sovereign CDN</title>`);
      });
    });
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <main class="min-h-screen pb-24"><header class="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-40"><div class="max-w-[1600px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4"><div class="flex items-center gap-4"><div><h1 class="text-xl font-semibold tracking-tight">Media Vault</h1> <p class="text-muted-foreground text-[10px] uppercase tracking-wider font-medium">Sovereign CDN Manager</p></div></div> <div class="flex-1 w-full max-w-md mx-8 relative hidden md:block">`);
    FontAwesomeIcon($$renderer2, {
      icon: faSearch,
      class: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm"
    });
    $$renderer2.push(`<!----> <input type="text"${attr("value", searchQuery)} placeholder="Search by prefix or filename..." class="w-full bg-secondary/50 border border-border rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:bg-background transition-all"/></div> <div class="flex items-center gap-4"><div class="text-right hidden lg:block"><div class="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Edge Network</div> <div class="text-xs font-mono bg-secondary px-2 py-1 rounded text-foreground">media.crackinglanguage.com</div></div> <button class="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground" aria-label="Toggle Theme">`);
    FontAwesomeIcon($$renderer2, { icon: faSun });
    $$renderer2.push(`<!----></button></div></div></header> <div class="max-w-[1600px] mx-auto px-6 mt-8"><section class="mb-12"><form method="POST" action="?/upload" enctype="multipart/form-data"${attr_class(`group relative border-2 border-dashed rounded-xl transition-all duration-300 flex flex-col items-center justify-center p-10 bg-card overflow-hidden ${stringify("border-border hover:border-muted-foreground/50")}`)}><input id="file-upload" type="file" name="file" multiple="" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"${attr("disabled", uploading, true)}/> <div class="relative z-20 text-center space-y-4 pointer-events-none"><div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-muted-foreground group-hover:text-foreground group-hover:bg-accent transition-colors duration-300">`);
    FontAwesomeIcon($$renderer2, {
      icon: faUpload,
      spin: uploading,
      class: "text-2xl"
    });
    $$renderer2.push(`<!----></div> <div><h3 class="text-base font-medium">${escape_html("Drag & Drop Multiple Assets")}</h3> <p class="text-sm text-muted-foreground mt-1">or click to browse</p></div></div> <div class="relative z-30 mt-6"><div class="flex items-center gap-2 bg-background border border-border rounded-md px-3 py-1.5 focus-within:ring-2 focus-within:ring-ring transition-shadow">`);
    FontAwesomeIcon($$renderer2, { icon: faFolderOpen, class: "text-muted-foreground text-sm" });
    $$renderer2.push(`<!----> <input type="text" name="prefix" placeholder="Target Prefix (e.g. mailers/)" class="bg-transparent border-none outline-none text-sm w-48 font-mono"/></div></div></form></section> <div class="sticky top-[73px] z-30 bg-background/95 backdrop-blur pt-2 pb-4 mb-6 border-b border-border"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><nav class="flex space-x-1 bg-secondary/50 p-1 rounded-lg self-start"><!--[-->`);
    const each_array = ensure_array_like(["All", "Images", "Videos", "Documents", "Other"]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let category = each_array[$$index];
      $$renderer2.push(`<button${attr_class(`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${stringify(activeCategory === category ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-background/50")}`)}>${escape_html(category)}</button>`);
    }
    $$renderer2.push(`<!--]--></nav> `);
    if (availableExtensions().length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1"><span class="text-xs text-muted-foreground font-medium uppercase tracking-wider mr-2">Ext:</span> <button${attr_class(`px-2.5 py-1 text-xs rounded-full border transition-colors ${stringify(
        "bg-primary text-primary-foreground border-primary"
      )}`)}>All</button> <!--[-->`);
      const each_array_1 = ensure_array_like(availableExtensions());
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let ext = each_array_1[$$index_1];
        $$renderer2.push(`<button${attr_class(`px-2.5 py-1 text-xs uppercase rounded-full border transition-colors ${stringify(activeExtension === ext ? "bg-primary text-primary-foreground border-primary" : "bg-transparent border-border text-muted-foreground hover:border-foreground")}`)}>${escape_html(ext)}</button>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> <section><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"><!--[-->`);
    const each_array_2 = ensure_array_like(finalAssets());
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let asset = each_array_2[$$index_2];
      $$renderer2.push(`<article class="group flex flex-col bg-card border border-border rounded-lg hover:border-ring/50 hover:shadow-md transition-all duration-300 relative overflow-hidden"><div class="aspect-square bg-secondary/30 relative flex items-center justify-center border-b border-border overflow-hidden"><div class="absolute inset-0 opacity-[0.05] dark:opacity-[0.02]" style="background-image: linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%); background-size: 10px 10px; background-position: 0 0, 0 5px, 5px -5px, -5px 0px;"></div> `);
      if (asset.category === "Images") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<img${attr("src", asset.url)}${attr("alt", asset.filename)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10" loading="lazy"/>`);
      } else if (asset.category === "Videos") {
        $$renderer2.push("<!--[1-->");
        FontAwesomeIcon($$renderer2, {
          icon: faPlay,
          class: "text-3xl text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-300 relative z-10"
        });
      } else {
        $$renderer2.push("<!--[-1-->");
        FontAwesomeIcon($$renderer2, {
          icon: faFile,
          class: "text-3xl text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-300 relative z-10"
        });
      }
      $$renderer2.push(`<!--]--> <div class="absolute top-2 right-2 z-20 bg-background/80 backdrop-blur px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider text-foreground uppercase border border-border shadow-sm">${escape_html(asset.extension)}</div> <div class="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 flex flex-col items-center justify-center gap-2 p-4 backdrop-blur-sm"><button class="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-medium py-1.5 rounded transition-colors shadow-sm">`);
      FontAwesomeIcon($$renderer2, { icon: faCopy, class: "mr-1.5" });
      $$renderer2.push(`<!----> URL</button> `);
      if (asset.category === "Images") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<button class="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-medium py-1.5 rounded transition-colors shadow-sm">`);
        FontAwesomeIcon($$renderer2, { icon: faCode, class: "mr-1.5" });
        $$renderer2.push(`<!----> HTML</button>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <button class="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-medium py-1.5 rounded transition-colors shadow-sm mt-1">`);
      FontAwesomeIcon($$renderer2, { icon: faPen, class: "mr-1.5" });
      $$renderer2.push(`<!----> Move</button></div></div> <div class="p-3 flex flex-col flex-grow justify-between gap-3"><div><div class="text-[10px] text-muted-foreground font-mono truncate mb-0.5"${attr("title", asset.path)}>${escape_html(asset.path)}</div> <h3 class="text-sm font-medium text-foreground line-clamp-1"${attr("title", asset.filename)}>${escape_html(asset.filename)}</h3></div> <div class="flex items-center justify-between text-[10px] text-muted-foreground font-medium pt-2 border-t border-border/50"><span title="Size">${escape_html(asset.formattedSize)}</span> <span title="Date">${escape_html(asset.formattedDate)}</span></div></div></article>`);
    }
    $$renderer2.push(`<!--]--> `);
    if (finalAssets().length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="col-span-full py-20 text-center">`);
      FontAwesomeIcon($$renderer2, {
        icon: faSearch,
        class: "text-4xl text-muted-foreground/30 mb-3"
      });
      $$renderer2.push(`<!----> <p class="text-muted-foreground text-sm font-medium">No assets found.</p></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></section></div></main> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
