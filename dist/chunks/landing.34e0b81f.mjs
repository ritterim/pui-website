import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, $ as $$BaseLayout } from '../entry.mjs';
import 'html-escaper';
/* empty css                          */import 'shiki';

const $$Astro = createAstro("/Library/WebServer/Documents/sites/pui-website/src/layouts/landing.astro", "", "file:///Library/WebServer/Documents/sites/pui-website/");
const $$Landing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing;
  const { frontmatter, headings } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="block-container">
  <div id="frame" class="block-container w-100 flex--justify-center">  
    <main id="frame-content" class="block-container w-100 lg-tablet-up-10">
      <article id="content" class="w-100 lg-tablet-up-9 laptop-up-10 px-4 pb-4">
        <h1 class="text--purple my-5">${frontmatter.title}</h1>
        <aside class="content-nav hide:lg-tablet background--lighter p-3 mb-4">
          <nav id="sidebar-right">
            <h2 class="text--size-md">On This Page</h2>
            <ul class="list">
              ${headings.filter((heading) => heading.depth <= 3 && heading.depth >= 2).map((heading) => renderTemplate`<li>
                    <a${addAttribute(`#${heading.slug}`, "href")}>${heading.text}</a>
                  </li>`)}
            </ul>
          </nav>
        </aside>
        ${renderSlot($$result, $$slots["default"])}
      </article>
      <aside class="content-nav hide show:lg-tablet tablet-up-4 lg-tablet-up-3 laptop-up-2 pr-4">
        <nav id="sidebar-right">
          <h2 class="text--size-md">On This Page</h2>
          <ul class="list">
            ${headings.filter((heading) => heading.depth <= 3 && heading.depth >= 2).map((heading) => renderTemplate`<li>
                  <a${addAttribute(`#${heading.slug}`, "href")}>${heading.text}</a>
                </li>`)}
          </ul>
        </nav>
      </aside>
    </main>
  </div>
</div>` })}`;
}, "/Library/WebServer/Documents/sites/pui-website/src/layouts/landing.astro");

const $$file = "/Library/WebServer/Documents/sites/pui-website/src/layouts/landing.astro";
const $$url = undefined;

export { $$Landing as default, $$file as file, $$url as url };
