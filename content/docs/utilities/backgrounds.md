---
title: Backgrounds
date: 2018-07-20T12:59:15-04:00
---

{{< heading heading="h2" id="background-colors">}}
Colors 
{{< /heading >}}
The background color classes are used to set, or change a `background-color` on a specific element. 

| Color | Class |
|-------|-------|
| <p class="background-white">White</p> | `.background-white` |
| <p class="background-lighter">Lighter</p> | `.background-lighter` |
| <p class="background-light-mid">Light Mid</p> | `.background-light-mid` |
| <p class="background-light">Light</p> | `.background-light` |
| <p class="background-base text-white">Base</p> | `.background-base` |
| <p class="background-dark text-white">Dark</p> | `.background-dark` |
| <p class="background-black text-white">Black</p> | `.background-black` |
| <p class="background-navy text-white">Navy</p> | `.background-navy` |
| <p class="background-skyblue text-white">Skyblue</p> | `.background-skyblue` |
| <p class="background-med-blue text-white">Med Blue</p> | `.background-med-blue` |
| <p class="background-beige text-white">Beige</p> | `.background-beige` |
| <p class="background-peach text-white">Peach</p> | `.background-peach` |
| <p class="background-salmon text-white">Salmon</p> | `.background-salmon` |
| <p class="background-brown text-white">Brown</p> | `.background-brown` |
| <p class="background-orange text-white">Orange</p> | `.background-orange` |

<div class="mb-4">
{{< highlight html >}}
<p class="background-white">White</p>
<p class="background-lighter">Lighter</p>
<p class="background-light-mid">Light Mid</p>
<p class="background-light">Light</p>
<p class="background-base">Base</p>
<p class="background-dark">Dark</p>
<p class="background-black">Black</p>
<p class="background-navy">Navy</p>
<p class="background-skyblue">Skyblue</p>
<p class="background-med-blue">Med Blue</p>
<p class="background-beige">Beige</p>
<p class="background-peach">Peach</p>
<p class="background-salmon">Salmon</p>
<p class="background-brown">Brown</p>
<p class="background-orange">Orange</p>
{{< /highlight >}}
</div>

{{< heading heading="h2" id="inverted">}}
Inverted
{{< /heading >}}

The `inverted` class changes the color of an element to white. It has a transition, so after the class is added, the color
will transition to white.

<div class="card background-black">
  <h1 class="inverted">Hello world</h1>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="card background-black">
  <h1 class="inverted">Hello world</h1>
</div>
{{< /highlight >}}
</div>


{{< heading heading="h2" id="transparent">}}
Transparent
{{< /heading >}}

If you want to remove the background color and border color on an element, add the class `transparent`.

<div class="block-container card background-lighter">
  <div class="block-6">
    <button class="button">Button</button>
  </div>
  <div class="block-6">
    <button class="button transparent">Transparent Button</button>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="block-container card background-lighter">
  <div class="block-6">
    <button class="button">Button</button>
  </div>
  <div class="block-6">
    <button class="button transparent">Transparent Button</button>
  </div>
</div>
{{< /highlight >}}
</div>


## Images
<div class="block-container blocks mb-4">
  <div class="block">
    <div class="pill text--size-xs text-dark">
      <i class="pi-bolt mr-1 text-negative"></i>
      Requires <span class="text--bold ml-1">JavaScript</span>
    </div> 
  </div>
</div>

You can use platform UI to add background images using data attributes and some javascript.

For starters, you'll need to add the class `background-image` onto the element where you want to use add an image. From there, use data attributes to change the look of the background image.

See the example below to see it all come together. You may notice a `ratio-` class on the image container. We talk more about that [here](https://style.rimdev.io/section-utilities.html#utilities-backgroundratio).

| Class | Data-Attribute | Scenarios |
|---|---|---|
| `.background-image` | `data-background-image` | image path; `no-repeat`, position `center`, and size `cover` all default |
|  | `data-background-position` | overrides default |
|  | `data-background-size` | overrides default |
|  | `data-background-repeat` | overrides default |

<div
    class="block-container background-image p-4 mb-4"
    data-background-image="https://picsum.photos/id/1012/1000/400"
    data-background-position="center center"
    data-background-size="cover"
    data-background-repeat="no-repeat">
      <div class="block tablet-up-6 background-black-a90 rounded-2 p-4">
        <h1 class="mb-3 mt-0 text-white">Hero Heading</h1>
        <p class="text-white mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit elit, efficitur a purus eget, porttitor aliquam turpis.</p>
       </div>
  </div>
  <div
    class="background-image block-container flex--justify-around p-4 mb-4"
    data-background-image="https://picsum.photos/id/120/1400/600"
    data-background-position="center bottom"
    data-background-size="cover"
    data-background-repeat="no-repeat">
      <div class="block tablet-up-5 py-4">
        <h1 class="mb-3 mt-0 text-white">Signup Today!</h1>
        <p class="text-white mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in blandit urna. Phasellus tristique tortor non quam maximus mattis. Sed ullamcorper et dui et pretium. In condimentum magna a vehicula aliquam. Suspendisse potenti. Integer posuere, lectus at viverra vestibulum, urna leo rhoncus massa, quis congue lorem metus et quam.</p>
      </div>
      <div class="block tablet-up-4 background-white-a70 border-t border--color-orange border--width-5 p-4">
        <p class="text-black">Signup for a newsletter! We promise we won't spam you.</p>
        <form action="" class="form form--rounded">
           <div class="block form__field mb-3">
           <label class="sr-only" for="first-name">First Name</label>
           <input id="first-name" class="background-white-a70" type="text" placeholder="First Name" />
         </div>
         <div class="block form__field mb-3">
           <label class="sr-only" for="last-name">Last Name</label>
           <input id="last-name" class="background-white-a70" type="text" placeholder="Last Name" />
         </div>
         <div class="block form__field mb-3">
           <label class="sr-only" for="email">Email Address</label>
           <input id="email" class="background-white-a70" type="email" placeholder="name@example.com" />
         </div>
         <div class="block flex flex--justify-center">
           <button class="button button--lg button--orange">Submit</button>
         </div>
       </form>
      </div>
  </div>
  <div
    class="background-image mb-4"
    data-background-image="https://picsum.photos/id/214/1000/400"
    data-background-position="center center"
    data-background-size="cover"
    data-background-repeat="no-repeat">
      <div class="background-black-a80 text--size-xl text--center p-6">
        <i class="pi-bolt text--size-lg text-white"></i>
        <h1 class="text-white mt-4 mb-6 pb-6 text--size-xxxl text-white">Power Your World.</h1>
        <p class="text-white text--size-sm mb-0">Learn More</p>
        <i class="pi-angle-down text-white"></i>
       </div>
  </div>

  <div class="mb-4">
  {{< highlight html >}}
  <div
    class="block-container background-image p-4 mb-4"
    data-background-image="https://picsum.photos/id/1012/1000/400"
    data-background-position="center center"
    data-background-size="cover"
    data-background-repeat="no-repeat">
      <div class="block tablet-up-6 background-black-a90 rounded-2 p-4">
        <h1 class="mb-3 mt-0 text-white">Hero Heading</h1>
        <p class="text-white mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit elit, efficitur a purus eget, porttitor aliquam turpis.</p>
       </div>
  </div>
  <div
    class="background-image block-container flex--justify-around p-4 mb-4"
    data-background-image="https://picsum.photos/id/120/1400/600"
    data-background-position="center bottom"
    data-background-size="cover"
    data-background-repeat="no-repeat">
      <div class="block tablet-up-5 py-4">
        <h1 class="mb-3 mt-0 text-white">Signup Today!</h1>
        <p class="text-white mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in blandit urna. Phasellus tristique tortor non quam maximus mattis. Sed ullamcorper et dui et pretium. In condimentum magna a vehicula aliquam. Suspendisse potenti. Integer posuere, lectus at viverra vestibulum, urna leo rhoncus massa, quis congue lorem metus et quam.</p>
      </div>
      <div class="block tablet-up-4 background-white-a70 border-t border--color-orange border--width-5 p-4">
        <p class="text-black">Signup for a newsletter! We promise we won't spam you.</p>
        <form action="" class="form form--rounded">
           <div class="block form__field mb-3">
           <label class="sr-only" for="first-name">First Name</label>
           <input id="first-name" class="background-white-a70" type="text" placeholder="First Name" />
         </div>
         <div class="block form__field mb-3">
           <label class="sr-only" for="last-name">Last Name</label>
           <input id="last-name" class="background-white-a70" type="text" placeholder="Last Name" />
         </div>
         <div class="block form__field mb-3">
           <label class="sr-only" for="email">Email Address</label>
           <input id="email" class="background-white-a70" type="email" placeholder="name@example.com" />
         </div>
         <div class="block flex flex--justify-center">
           <button class="button button--lg button--orange">Submit</button>
         </div>
       </form>
      </div>
  </div>
  <div
    class="background-image mb-4"
    data-background-image="https://picsum.photos/id/214/1000/400"
    data-background-position="center center"
    data-background-size="cover"
    data-background-repeat="no-repeat">
      <div class="background-black-a80 text--size-xl text--center p-6">
        <i class="pi-bolt text--size-lg text-white"></i>
        <h1 class="text-white mt-4 mb-6 pb-6 text--size-xxxl text-white">Power Your World.</h1>
        <p class="text-white text--size-sm mb-0">Learn More</p>
        <i class="pi-angle-down text-white"></i>
       </div>
  </div>
  {{< /highlight >}}
  </div>

## Gradient
<div class="block-container blocks mb-4">
  <div class="block">
    <div class="pill text--size-xs text-dark">
      <i class="pi-bolt mr-1 text-negative"></i>
      Requires <span class="text--bold ml-1">JavaScript</span>
    </div> 
  </div>
</div>

You can create your own custom linear gradient. Start by adding the linear-gradient class. From there, enter the values you like for your direction and color using the appropriate data attributes. See the example and table below.

| Class | Data-Attribute | Scenarios |
|---|---|---|
| `.linear-gradient` | `data-gradient-direction` | `background-image: linear-gradient(0deg, rgb(2, 0, 36), rgb(0, 212, 255))` |
|  | `data-gradient-start` | `	linear-gradient(0deg, rgb(2, 0, 36), rgb(0, 212, 255))` |
|  | `data-gradient-stop` | `linear-gradient(0deg, rgb(2, 0, 36), rgb(0, 212, 255))` |
|  | `data-gradient-fallback` | Add a fallback `background-color` |

Keep in mind you can use platform UI [color variables](/section-color.html) as well. Something like `data-gradient-start="var(--navy)"` will work just fine.
You can also change the distance of your colors by adding a perceentage in the data attribute value for data-gradient-start and or data-gradient-start. Something like data-gradient-start="var(--navy) 20%" would render just fine. See the first example.

<div class="block-container tablet-up-2 laptop-up-4 blocks my-3 px-2">
  <div class="block">
<!-- Add data attributes to create your gradient -->
    <div
         class="linear-gradient ratio-16_9"
         data-gradient-direction="0deg"
         data-gradient-start="#020024 20%"
         data-gradient-stop="#00d4ff"
         data-gradient-fallback="#020024">
    </div>
  </div>
  <div class="block">
    <div
         class="linear-gradient ratio-16_9"
         data-gradient-direction="90deg"
         data-gradient-start="var(--navy)"
         data-gradient-stop="var(--blue)"
         data-gradient-fallback="var(--navy)">
    </div>
  </div>
  <div class="block">
    <div
         class="linear-gradient ratio-16_9"
         data-gradient-direction="to left top"
         data-gradient-start="var(--violet)"
         data-gradient-stop="var(--purple)"
         data-gradient-fallback="var(--purple)">
    </div>
  </div>
  <div class="block">
    <div
         class="linear-gradient background-image ratio-16_9"
         data-gradient-direction="to right"
         data-gradient-start="var(--green)"
         data-gradient-stop="transparent"
         data-gradient-fallback="var(--green)"
         data-background-image="http://placeimg.com/640/360/nature" >
    </div>
  </div>
</div>

<div>
{{< highlight html >}}
<div class="block-container tablet-up-2 laptop-up-4 blocks my-3 px-2">
  <div class="block">
  <!-- Add data attributes to create your gradient -->
    <div
          class="linear-gradient ratio-16_9"
          data-gradient-direction="0deg"
          data-gradient-start="#020024 20%"
          data-gradient-stop="#00d4ff"
          data-gradient-fallback="#020024">
    </div>
  </div>
  <div class="block">
    <div
          class="linear-gradient ratio-16_9"
          data-gradient-direction="90deg"
          data-gradient-start="var(--navy)"
          data-gradient-stop="var(--blue)"
          data-gradient-fallback="var(--navy)">
    </div>
  </div>
  <div class="block">
    <div
          class="linear-gradient ratio-16_9"
          data-gradient-direction="to left top"
          data-gradient-start="var(--violet)"
          data-gradient-stop="var(--purple)"
          data-gradient-fallback="var(--purple)">
    </div>
  </div>
  <div class="block">
    <div
          class="linear-gradient background-image ratio-16_9"
          data-gradient-direction="to right"
          data-gradient-start="var(--green)"
          data-gradient-stop="transparent"
          data-gradient-fallback="var(--green)"
          data-background-image="http://placeimg.com/640/360/nature" >
    </div>
  </div>
</div>
{{< /highlight >}}
</div>
<div class="message message--warning mb-4">
  <p>This feature will not work in IE.</p>
</div>

## Image and Gradient
You can get really fancy with your backgrounds by adding a gradient over a background image. To do this, you will need both classes `linear-gradient` `background-image`. From there, add the appropriate data attributes to get your desired image and gradient.

<div class="block-container tablet-up-2 laptop-up-4 blocks my-3 px-2">
  <div class="block">
<!-- Add data attributes to create your gradient and image -->
    <div
         class="linear-gradient background-image ratio-16_9"
         data-gradient-direction="to right"
         data-gradient-start="var(--green)"
         data-gradient-stop="transparent"
         data-gradient-fallback="var(--green)"
         data-background-image="http://placeimg.com/640/360/nature" >
    </div>
  </div>
</div>

<div class="mb-4">
{{< highlight html >}}
<div class="block-container tablet-up-2 laptop-up-4 blocks my-3 px-2">
  <div class="block">
<!-- Add data attributes to create your gradient and image -->
    <div
         class="linear-gradient background-image ratio-16_9"
         data-gradient-direction="to right"
         data-gradient-start="var(--green)"
         data-gradient-stop="transparent"
         data-gradient-fallback="var(--green)"
         data-background-image="http://placeimg.com/640/360/nature" >
    </div>
  </div>
</div>
{{< /highlight >}}
</div>

## Ratio
Set the size of an element equal to a common ratio with the ratio-{val} class.
| Ratio | Class |
|--|--|
| 1:1 | `.ratio-1_1` |
| 2:1 | `.ratio-2_1` |
| 4:3 | `.ratio-4_3` |
| 16:9 | `.ratio-16_9` |

<div class="block-container tablet-up-2 laptop-up-4 blocks my-3 px-2">
  <div class="block">
    <div class="background-navy ratio-1_1 flex--center-content">
<strong class="text-white text--size-lg">1:1</strong>
    </div>
  </div>
  <div class="block">
    <div class="background-skyblue ratio-2_1 flex--center-content">
<strong class="text--size-lg">2:1</strong>
    </div>
  </div>
  <div class="block">
    <div class="background-med-blue ratio-4_3 flex--center-content">
<strong class="text-white text--size-lg">4:3</strong>
    </div>
  </div>
  <div class="block">
    <div class="background-lightblue ratio-16_9 flex--center-content">
<strong class="text--size-lg">16:9</strong>
    </div>
  </div>
</div>

<div class="mb-4">
{{< highlight html >}}
<div class="block-container tablet-up-2 laptop-up-4 blocks my-3 px-2">
  <div class="block">
    <div class="background-navy ratio-1_1 flex--center-content">
      <strong class="text-white text--size-lg">1:1</strong>
    </div>
  </div>
  <div class="block">
    <div class="background-skyblue ratio-2_1 flex--center-content">
      <strong class="text--size-lg">2:1</strong>
    </div>
  </div>
  <div class="block">
    <div class="background-med-blue ratio-4_3 flex--center-content">
      <strong class="text-white text--size-lg">4:3</strong>
    </div>
  </div>
  <div class="block">
    <div class="background-lightblue ratio-16_9 flex--center-content">
      <strong class="text--size-lg">16:9</strong>
    </div>
  </div>
</div>
{{< /highlight >}}
</div>