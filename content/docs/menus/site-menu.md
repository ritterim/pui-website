---
title: Site Menu
weight: 1
---

Our site-menu was built to be used in the header as a main site navigation. It contains the standard look and structure of a site-menu. If you have a logo that links to your home page, wrap that in an `a` tag with the class `site-logo`.

You can customize a site-menu in a few ways:
 - Add a [background-color](/docs/menus/menu/#background-color)
 - Add [borders](/docs/menus/menu/#bordered) separating menu items
 - Add an [underline on hover](/docs/menus/menu/#hover-underline) to menu items
 - Use a [dropdown](/docs/menus/menu/#dropdown) in your menu

You can also make it [responsive!](/docs/menus/menu/#responsive)

<nav class="site-menu">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>

<div class="mt-3 mb-4">
{{< highlight html >}}
<nav class="site-menu">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>
{{< /highlight >}}
</div>

## Dropdown

<div class="mb-4">
{{% requires-js %}}
</div>

You can add a dropdown submenu to your site-menu. The markup for this component is pretty specific. Be sure to include the following classes.
You will need a `dropdown` class wrapping two sibling elements, a `dropdown__trigger` and your `dropdown__content`. View the example below to 
see how this structure works. 

By default, the dropdowns will open positioned to the left of their parent, all except for the last dropdown in the menu. 
This will help prevent any dropdowns from opening off the page. 

The dropdowns inherit the hover states of the site-menu.

Also note that the `dropdown__trigger` can be on a `button` as well as an `a`. If you use a button, be sure to add the class
`button--plain` to disable the default Platform UI button styles.

Like we mentioned above, by default, the dropdowns will open positioned to the left of their parent.
 
<div class="message message--warning mb-3" data-header="">
  <p>By default, the dropdowns will open positioned to the left of their parent, but you can change the alignment.</p>
  <p>Dropdowns can be changed to open centered or open from the right. This can be changed by adding the modifier class
     of <code>dropdown--centered</code> or <code>dropdown--right</code> to the <code>dropdown</code> class.
  </p>
</div>

**Note:** `background--white` was added to the `div` wrapping the site-menu in order to improve the visibility of the example.

<div class="background--white">
  <nav class="site-menu">
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 1
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 2
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 3
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 4
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 5
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
  </nav>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="background--white">
  <nav class="site-menu">
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 1
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 2
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 3
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 4
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
    <div class="dropdown">
      <div class="site-menu__item dropdown__trigger">
        Item 5
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </div>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Item 1</a>
        <a href="#" class="dropdown__content-item">Item 2</a>
        <a href="#" class="dropdown__content-item">Item 3</a>
        <a href="#" class="dropdown__content-item">Item 4</a>
        <a href="#" class="dropdown__content-item">Item 5</a>
      </div>
    </div>
  </nav>
</div>
{{< /highlight >}}
</div>


<p class="mt-4">The dropdowns with a background utility applied. <i class="pi-arrow-down"></i></p>
<nav class="site-menu background--navy">
  <div class="dropdown">
    <div class="site-menu__item dropdown__trigger">
      Item 1
      <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
    </div>
    <div class="dropdown__content">
      <a href="#" class="dropdown__content-item">Item 1</a>
      <a href="#" class="dropdown__content-item">Item 2</a>
      <a href="#" class="dropdown__content-item">Item 3</a>
      <a href="#" class="dropdown__content-item">Item 4</a>
      <a href="#" class="dropdown__content-item">Item 5</a>
    </div>
  </div>
  <div class="dropdown">
    <div class="site-menu__item dropdown__trigger">
      Item 2
      <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
    </div>
    <div class="dropdown__content">
      <a href="#" class="dropdown__content-item">Item 1</a>
      <a href="#" class="dropdown__content-item">Item 2</a>
      <a href="#" class="dropdown__content-item">Item 3</a>
      <a href="#" class="dropdown__content-item">Item 4</a>
      <a href="#" class="dropdown__content-item">Item 5</a>
    </div>
  </div>
  <div class="dropdown">
    <div class="site-menu__item dropdown__trigger">
      Item 3
      <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
    </div>
    <div class="dropdown__content">
      <a href="#" class="dropdown__content-item">Item 1</a>
      <a href="#" class="dropdown__content-item">Item 2</a>
      <a href="#" class="dropdown__content-item">Item 3</a>
      <a href="#" class="dropdown__content-item">Item 4</a>
      <a href="#" class="dropdown__content-item">Item 5</a>
    </div>
  </div>
  <div class="dropdown">
    <div class="site-menu__item dropdown__trigger">
      Item 4
      <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
    </div>
    <div class="dropdown__content">
      <a href="#" class="dropdown__content-item">Item 1</a>
      <a href="#" class="dropdown__content-item">Item 2</a>
      <a href="#" class="dropdown__content-item">Item 3</a>
      <a href="#" class="dropdown__content-item">Item 4</a>
      <a href="#" class="dropdown__content-item">Item 5</a>
    </div>
  </div>
  <div class="dropdown">
    <div class="site-menu__item dropdown__trigger">
      Item 5
      <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
    </div>
    <div class="dropdown__content">
      <a href="#" class="dropdown__content-item">Item 1</a>
      <a href="#" class="dropdown__content-item">Item 2</a>
      <a href="#" class="dropdown__content-item">Item 3</a>
      <a href="#" class="dropdown__content-item">Item 4</a>
      <a href="#" class="dropdown__content-item">Item 5</a>
    </div>
  </div>
</nav>

<div class="mt-3 mb-4">
{{< highlight html >}}
<nav class="site-menu background--navy">
  <div class="dropdown">
    <div class="site-menu__item dropdown__trigger">
      Item 1
      <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
    </div>
    <div class="dropdown__content">
      <a href="#" class="dropdown__content-item">Item 1</a>
      <a href="#" class="dropdown__content-item">Item 2</a>
      <a href="#" class="dropdown__content-item">Item 3</a>
      <a href="#" class="dropdown__content-item">Item 4</a>
      <a href="#" class="dropdown__content-item">Item 5</a>
    </div>
  </div>
  <div class="dropdown">
    <div class="site-menu__item dropdown__trigger">
      Item 2
      <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
    </div>
    <div class="dropdown__content">
      <a href="#" class="dropdown__content-item">Item 1</a>
      <a href="#" class="dropdown__content-item">Item 2</a>
      <a href="#" class="dropdown__content-item">Item 3</a>
      <a href="#" class="dropdown__content-item">Item 4</a>
      <a href="#" class="dropdown__content-item">Item 5</a>
    </div>
  </div>
  <div class="dropdown">
    <div class="site-menu__item dropdown__trigger">
      Item 3
      <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
    </div>
    <div class="dropdown__content">
      <a href="#" class="dropdown__content-item">Item 1</a>
      <a href="#" class="dropdown__content-item">Item 2</a>
      <a href="#" class="dropdown__content-item">Item 3</a>
      <a href="#" class="dropdown__content-item">Item 4</a>
      <a href="#" class="dropdown__content-item">Item 5</a>
    </div>
  </div>
  <div class="dropdown">
    <div class="site-menu__item dropdown__trigger">
      Item 4
      <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
    </div>
    <div class="dropdown__content">
      <a href="#" class="dropdown__content-item">Item 1</a>
      <a href="#" class="dropdown__content-item">Item 2</a>
      <a href="#" class="dropdown__content-item">Item 3</a>
      <a href="#" class="dropdown__content-item">Item 4</a>
      <a href="#" class="dropdown__content-item">Item 5</a>
    </div>
  </div>
  <div class="dropdown">
    <div class="site-menu__item dropdown__trigger">
      Item 5
      <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
    </div>
    <div class="dropdown__content">
      <a href="#" class="dropdown__content-item">Item 1</a>
      <a href="#" class="dropdown__content-item">Item 2</a>
      <a href="#" class="dropdown__content-item">Item 3</a>
      <a href="#" class="dropdown__content-item">Item 4</a>
      <a href="#" class="dropdown__content-item">Item 5</a>
    </div>
  </div>
</nav>
{{< /highlight >}}
</div>


## Responsive

<div class="mb-4">
{{% requires-js %}}
</div>

To make the site-menu work on smaller (mobile) devices, you need to make a few additions. First, be sure to wrap the menu using
`site-menu-wrapper`. This is essentially a relative positioned container that the menu can be attached to. From here, all you need is 
to add the button to open the menu. Use the class `site-menu-mobile-action` to toggle the menu. **Note:** It's best practice to use 
a `<button>` in this case. See the example below. 

The button simply toggles the menu, so you'll want to add an icon inside. You can use our `pi-menu` here to take advantage of the standard "hamburger menu." 
Since this button is outside of the `site-menu`, be sure to add the approriate color to it. For example, if you have a navy background you would 
probably want to add `text--white` to the button.

Add the button before the `site-menu` as a sibling. Both the `site-menu-mobile-action` and `site-menu` need to be children of the 
`site-menu-wrapper` for things to work properly. 

**Note:** `background--white` was added to the `site-menu-wrapper` in order to improve the visibility of the example.

<div class="site-menu-wrapper background--white">
  <button class="site-menu-mobile-action">
    <span class="sr-only">Toggle Navigation</span>
    <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
  </button>
  <nav class="site-menu">
    <a href="#" class="site-menu__item">Item 1</a>
    <a href="#" class="site-menu__item">Item 2</a>
    <a href="#" class="site-menu__item">Item 3</a>
    <a href="#" class="site-menu__item">Item 4</a>
    <div class="dropdown">
      <a href="#" class="site-menu__item dropdown__trigger">
        Item 1 <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </a>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Link 1</a>
        <a href="#" class="dropdown__content-item">Link 2</a>
        <a href="#" class="dropdown__content-item">Link 3</a>
        <a href="#" class="dropdown__content-item">Link 4</a>
      </div>
    </div>
  </nav>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="site-menu-wrapper background--white">
  <button class="site-menu-mobile-action">
    <span class="sr-only">Toggle Navigation</span>
    <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
  </button>
  <nav class="site-menu">
    <a href="#" class="site-menu__item">Item 1</a>
    <a href="#" class="site-menu__item">Item 2</a>
    <a href="#" class="site-menu__item">Item 3</a>
    <a href="#" class="site-menu__item">Item 4</a>
    <div class="dropdown">
      <a href="#" class="site-menu__item dropdown__trigger">
        Item 1 <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </a>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Link 1</a>
        <a href="#" class="dropdown__content-item">Link 2</a>
        <a href="#" class="dropdown__content-item">Link 3</a>
        <a href="#" class="dropdown__content-item">Link 4</a>
      </div>
    </div>
  </nav>
</div>
{{< /highlight >}}
</div>


## Site Menu Header Example 

Below is an example of a site header that uses a `site-menu` as the main navigation. The navigation is responsive. 
You can see if you scale your screen down. 
We wrapped the site-menu in `site-menu-wrapper`. This ensures the proper position is applied to the wrapper and allows 
the responsive menu to function properly. 



Notice that this header has a navy background. You can add a background color to the site-menu and it will handle all of the text colors
and hovers. The dropdown menu will also work with this color. But this is separate from the rest of the header. So in this case we add 
`background--navy` to the `header` as well. We also added some padding too. These changes can all be handled by using more of our
[utility classes](/docs/utilities/backgrounds/).

Another thing to notice is the use of `dropdown--right` on the dropdown in the menu. Since it's on the far right of the header, we don't 
want it breaking and "hanging off" the menu. Using the `dropdown--right` modifier positions the `dropdown__content` to the right of its parent. 

<header class="site-menu-wrapper background--navy p-2">
  <a href="/" class="site-logo">
      <img src="https://via.placeholder.com/150x50.png?text=Site+Logo" alt="Site Logo" />
  </a>
  <button class="site-menu-mobile-action text--white">
    <span class="sr-only">Toggle Navigation</span>
    <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
  </button>
  <nav class="site-menu background--navy">
    <a href="#" class="site-menu__item">Item 1</a>
    <a href="#" class="site-menu__item">Item 2</a>
    <a href="#" class="site-menu__item">Item 3</a>
    <a href="#" class="site-menu__item">Item 4</a>
    <div class="dropdown dropdown--right">
      <a href="#" class="site-menu__item dropdown__trigger">
        Item 1 <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </a>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Link 1</a>
        <a href="#" class="dropdown__content-item">Link 2</a>
        <a href="#" class="dropdown__content-item">Link 3</a>
        <a href="#" class="dropdown__content-item">Link 4</a>
      </div>
    </div>
  </nav>
</header>

<div class="mt-3 mb-4">
{{< highlight html >}}
<header class="site-menu-wrapper background--navy p-2">
  <a href="/" class="site-logo">
      <img src="https://via.placeholder.com/150x50.png?text=Site+Logo" alt="Site Logo" />
  </a>
  <button class="site-menu-mobile-action text--white">
    <span class="sr-only">Toggle Navigation</span>
    <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
  </button>
  <nav class="site-menu background--navy">
    <a href="#" class="site-menu__item">Item 1</a>
    <a href="#" class="site-menu__item">Item 2</a>
    <a href="#" class="site-menu__item">Item 3</a>
    <a href="#" class="site-menu__item">Item 4</a>
    <div class="dropdown dropdown--right">
      <a href="#" class="site-menu__item dropdown__trigger">
        Item 1 <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </a>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Link 1</a>
        <a href="#" class="dropdown__content-item">Link 2</a>
        <a href="#" class="dropdown__content-item">Link 3</a>
        <a href="#" class="dropdown__content-item">Link 4</a>
      </div>
    </div>
  </nav>
</header>
{{< /highlight >}}
</div>

## Fixed 

To get a fixed header, you can set the desired height in the config file. The `site-header` needs the modifier, `site-header--fixed`. This is what gives the header the `position: fixed` style.
In order to ensure that you have proper space between your header and main content, add the class `header-fixed` to the direct sibling of your `site-header`.

