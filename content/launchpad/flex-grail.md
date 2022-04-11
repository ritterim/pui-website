---
title: Flex Grail
layout: example
summary: Full page layout example using flex and flex utilities.
---

<div class="flex flex--column">
  <section class="p-3 background--navy flex--center-content">
    <h1 class="">Header</h1>
  </section>
  <main class="block-container flex--grow">
    <aside class="block lg-tablet-up-2 background--med-blue flex--center-content">
      <h1 class="">Aside</h1>
    </aside>
    <section class="block lg-tablet-up-8 flex--center-content py-5 px-3">
      <h1 class="text-base">Main Content</h1>
    </section>
    <aside class="block lg-tablet-up-2 background--med-blue flex--center-content">
      <h1 class="">Aside</h1>
    </aside>
  </main>
  <footer class="p-3 background--light flex--center-content">
    <h1 class="">Footer</h1>
  </footer>
</div>