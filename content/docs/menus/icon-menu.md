---
title: Icon Menu
weight:
---


When you need a horizontal list of icons, look no further than "Icon Menu". Use the mark up below
to get the list you want. Be sure to use the specific `icon-menu` classes. With this strcuture you have
the freedom to use any icon you want and make that icon change to whatever color you want on hover.
Simpy change the `<icon>` class to the desired font-awesome icon you want. Then, add the `text-hover--{color}`
class to the `icon-menu__action`. To see a list of available hover colors [click here](/docs/typography/typography/#color).

depending on exactly what you need. If you're going to use a button, be sure to add the class `button--plain`. This will remove the browser defaults and allow the icon to display on its own. If you use a less semantic element like `<div>`, we would recommend adding `role="button"`.

Adding `icon-menu icon-menu--vertical` creates a vertical icon menu.

| <i class="fpi-warning text--orange"></i> Be sure to always wrap the font icon in another element. We don't want to have the click event be on the icon itself.|
| ---

You can add as many icons as you'd like.

<div class="icon-menu">
  <div class="icon-menu__item">
    <button class="icon-menu__action text-hover--negative button--plain">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-hover-positive">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </a>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-hover--red">
      <i class="pi-clock" aria-hidden="hidden"></i>
    </a>
  </div>
</div>
<div class="icon-menu icon-menu--vertical">
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-hover--negative">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </a>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text--positive">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </a>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Horizontal Icon Menu -->
<div class="icon-menu">
  <div class="icon-menu__item">
    <button class="icon-menu__action text-hover--negative button--plain">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-hover--positive">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </a>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-hover--red">
      <i class="pi-clock" aria-hidden="hidden"></i>
    </a>
  </div>
</div>

 <!-- Vertical Icon Menu -->
<div class="icon-menu icon-menu--vertical">
  <div class="icon-menu__item">
    <button class="icon-menu__action text-hover--negative button--plain">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-hover--positive">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </a>
  </div>
</div>
{{< /highlight >}}
</div>
