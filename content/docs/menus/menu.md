---
title: Menu
date: 2018-07-20T12:59:15-04:00
---

Below you will find documentation and examples for our [site-menu](/docs/menus/menu/#site-menu) and [icon-menu](/docs/menus/menu/#icon-menu). The site-menu works well as the main navigation for your site. 
The icon-menu can be used to group clickable icons together.

## Site Menu

Our site-menu was built to be used in the header as a main site navigation. It contains the standard look and structure of a site-menu. 
You can customize a site-menu in a few ways:
 - Add a background color. This will accomplish two things. First, the background color of your
   menu will change. Second, the hover effect on the links in the menu will reflect a darker version of the background color 
   you set. The color of the links will also change based on the color of the site-menu. If the color is dark, the link color 
   will be white. If the background color is a lighter color, the link color will be `var(--dark)`. Which is currently set to
   the body color. If you want your site-menu to have a background-color without the inherit hover effects, just wrap the <code>site-menu</code> in an element with a <code>background-{color}</code> class. The site-menu and dropdowns will inherit background colors from their parents.
 - Add borders. The modifier class of `site-menu--bordered` will add borders separating each menu item.
 - Adding the class `hover-underline` to your `site-menu` will give the `<button>`s in the menu a bottom border on hover. You can change the color of your border hovers by adding the modifier of <code>hover-underline--{color}</code>.
 - Use a dropdown in your menu. The markup for this component is pretty specific. Be sure to include the following classes.
You will need a `dropdown` class wrapping two sibling elements, a `dropdown__trigger` and your `dropdown__content`.
 - You can also make it responsive! To make the site-menu work on smaller (mobile) devices, you need to make a few additions. First, be sure to wrap the menu using
`site-menu-wrapper`. This is essentially a relative positioned container that the menu can be attached to. From here, all you need is 
to add the button to open the menu. Use the class `site-menu-mobile-action` to toggle the menu. The button simply toggles the menu, so you'll want to add an icon inside. You can use our `pi-menu` here to take advantage of the standard "hamburger menu." 
Since this button is outside of the `site-menu`, be sure to add the approriate color to it. For example, if you have a navy background you would 
probably want to add `text-white` to the button. Add the button before the `site-menu` as a sibling. Both the `site-menu-mobile-action` and `site-menu` need to be children of the 
`site-menu-wrapper` for things to work properly. 

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
  <i class="pi-rocket mr-1"></i>
  <strong class="mr-1">Try it!</strong> 
  Click the buttons below to see the different ways you can customize a site menu!
</div>

<div class="menu-visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
  <div class="actions block h-10">
    <ul class="list">
      <li>
        <button class="button button--purple" data-class="background-navy">
          <pre>Background color</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-class="site-menu--bordered">
          <pre>Bordered menu</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-class="hover-underline">
          <pre>Underline on hover</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-childclass="flex--align-baseline">
          <pre>Dropdowns</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple" data-childclass="flex--align-baseline">
          <pre>Responsive</pre>
        </button>
      </li>
    </ul>
  </div>
  <div class="block results p-2 border border--width-3">
    <div class="flex flex--justify-center">
      <nav class="site-menu transition">
        <a href="#" class="site-menu__item">Item 1</a>
        <a href="#" class="site-menu__item">Item 2</a>
        <a href="#" class="site-menu__item">Item 3</a>
        <a href="#" class="site-menu__item">Item 4</a>
        <a href="#" class="site-menu__item">Item 5</a>
      </nav>
    </div>
  </div>
</div>

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


## Background Color

You can add a background color to your `site-menu`. This will accomplish two things. First, the background color of your
menu will change. Second, the hover effect on the links in the menu will reflect a darker version of the background color 
you set. The color of the links will also change based on the color of the site-menu. If the color is dark, the link color 
will be white. If the background color is a lighter color, the link color will be `var(--dark)`. Which is currently set to
the body color.

We built the site-menu to be light and to adapt to your needs. It does not come with a background color set. However, the site-menu will inherit 
its parent background-colors. You can read more about this below in the documentation.

<div class="message message--warning mb-3" data-header="">
  <p>If you want your site-menu to have a background-color without the inherit hover effects, just wrap the <code>site-menu</code> in an element with a <code>background-{color}</code> class. The site-menu and dropdowns will inherit background colors from their parents.</p>
</div>

<nav class="site-menu background-navy">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>
<nav class="mt-4 site-menu background-lighter">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>

<div class="mt-3 mb-4">
{{< highlight html >}}
<nav class="site-menu background-navy">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>
<nav class="mt-4 site-menu background-lighter">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>
{{< /highlight >}}
</div>


## Bordered

Adding the modifier class of `site-menu--bordered` will add borders separating each menu item.

<nav class="site-menu site-menu--bordered">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>


<div class="mt-3 mb-4">
{{< highlight html >}}
<nav class="site-menu site-menu--bordered">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>
{{< /highlight >}}
</div>


## Hover Underline

Adding the class `hover-underline` to your `site-menu` will give the `<button>`s in the menu a bottom border on hover.

<div class="message message--warning mb-3" data-header="">
  <p class="mt-0">You can change the color of your border hovers by adding the modifier of <code>hover-underline--{color}</code>.</p>
</div>

<nav class="site-menu hover-underline">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>
<div class="my-3"></div>
<nav class="site-menu hover-underline hover-underline--med-blue">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>

<div class="mt-3 mb-4">
{{< highlight html >}}
<nav class="site-menu hover-underline">
  <a href="#" class="site-menu__item">Item 1</a>
  <a href="#" class="site-menu__item">Item 2</a>
  <a href="#" class="site-menu__item">Item 3</a>
  <a href="#" class="site-menu__item">Item 4</a>
  <a href="#" class="site-menu__item">Item 5</a>
</nav>
<nav class="site-menu hover-underline hover-underline--med-blue">
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

**Note:** `background-white` was added to the `div` wrapping the site-menu in order to improve the visibility of the example.

<div class="background-white">
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
<div class="background-white">
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
<nav class="site-menu background-navy">
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
<nav class="site-menu background-navy">
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
probably want to add `text-white` to the button.

Add the button before the `site-menu` as a sibling. Both the `site-menu-mobile-action` and `site-menu` need to be children of the 
`site-menu-wrapper` for things to work properly. 

**Note:** `background-white` was added to the `site-menu-wrapper` in order to improve the visibility of the example.

<div class="site-menu-wrapper background-white">
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
<div class="site-menu-wrapper background-white">
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

If you have a logo that links to your home page, wrap that in an `a` tag with the class `site-logo`.

Notice that this header has a navy background. You can add a background color to the site-menu and it will handle all of the text colors
and hovers. The dropdown menu will also work with this color. But this is separate from the rest of the header. So in this case we add 
`background-navy` to the `header` as well. We also added some padding too. These changes can all be handled by using more of our
[utility classes](/docs/utilities/backgrounds/).

Another thing to notice is the use of `dropdown--right` on the dropdown in the menu. Since it's on the far right of the header, we don't 
want it breaking and "hanging off" the menu. Using the `dropdown--right` modifier positions the `dropdown__content` to the right of its parent. 

<header class="site-menu-wrapper background-navy p-2">
  <a href="/" class="site-logo">
      <img src="https://via.placeholder.com/150x50.png?text=Site+Logo" alt="Site Logo" />
  </a>
  <button class="site-menu-mobile-action text-white">
    <span class="sr-only">Toggle Navigation</span>
    <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
  </button>
  <nav class="site-menu background-navy">
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
<header class="site-menu-wrapper background-navy p-2">
  <a href="/" class="site-logo">
      <img src="https://via.placeholder.com/150x50.png?text=Site+Logo" alt="Site Logo" />
  </a>
  <button class="site-menu-mobile-action text-white">
    <span class="sr-only">Toggle Navigation</span>
    <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
  </button>
  <nav class="site-menu background-navy">
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

 
## Icon Menu

When you need a horizontal list of icons, look no further than "Icon Menu". Use the mark up below
to get the list you want. Be sure to use the specific `icon-menu` classes. With this strcuture you have
the freedom to use any icon you want and make that icon change to whatever color you want on hover.
Simpy change the `<icon>` class to the desired font-awesome icon you want. Then, add the `text-{color}--hover`
class to the `icon-menu__action`. To see a list of available hover colors [click here](/docs/typography/typography/#color).

In the example below, we're using `<a>`s on the `icon-menu__action` to build the menus. You could use a `<button>` to improve accessibility
depending on exactly what you need. If you're going to use a button, be sure to add the class `button--plain`. This will remove the browser defaults and allow the icon to display on its own. If you use a less semantic element like `<div>`, we would recommend adding `role="button"`.

Adding `icon-menu icon-menu--vertical` creates a vertical icon menu.

| <i class="fpi-warning text-orange"></i> Be sure to always wrap the font icon in another element. We don't want to have the click event be on the icon itself.|
| ---

You can add as many icons as you'd like.

<div class="icon-menu">
  <div class="icon-menu__item">
    <button class="icon-menu__action text-negative--hover button--plain">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-positive--hover">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </a>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-red--hover">
      <i class="pi-clock" aria-hidden="hidden"></i>
    </a>
  </div>
</div>
<div class="icon-menu icon-menu--vertical">
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-negative--hover">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </a>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-positive--hover">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </a>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<!-- Horizontal Icon Menu -->
<div class="icon-menu">
  <div class="icon-menu__item">
    <button class="icon-menu__action text-negative--hover button--plain">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-positive--hover">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </a>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-red--hover">
      <i class="pi-clock" aria-hidden="hidden"></i>
    </a>
  </div>
</div>

 <!-- Vertical Icon Menu -->
<div class="icon-menu icon-menu--vertical">
  <div class="icon-menu__item">
    <button class="icon-menu__action text-negative--hover button--plain">
      <i class="pi-trash" aria-hidden="hidden"></i>
    </button>
  </div>
  <div class="icon-menu__item">
    <a href="#" class="icon-menu__action text-positive--hover">
      <i class="pi-edit" aria-hidden="hidden"></i>
    </a>
  </div>
</div>
{{< /highlight >}}
</div>


## Fixed Header

To get a fixed header, you can set the desired height in the config file. The `site-header` needs the modifier, `site-header--fixed`. This is what gives the header the `position: fixed` style.
In order to ensure that you have proper space between your header and main content, add the class `header-fixed` to the direct sibling of your `site-header`.
We use this in this styleguide.

Your code could look something like this:

<div class="mt-3 mb-4">
{{< highlight html >}}
<header class="site-header site-header--fixed">
  Header Content Here
</header>
<main class="header-fixed">
  Main content here
</main>
{{< /highlight >}}
</div>
