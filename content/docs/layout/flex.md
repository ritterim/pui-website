---
title: Flex
date: 2018-07-20T12:59:15-04:00
---
Building layouts with flexbox is super simple with Platform UI using our flex utility classes.
## Display
Set an element's display property to flex or inline-flex.

| Class Name                  | CSS Attribute                                                  |
| --------------------------- | -------------------------------------------------------------- |
| `flex`                      | `display: flex;`                                               |
| `flex-inline`               | `display: inline-flex`                                         |

## Align
Sets the flex container to align all contained elements to either the start, center, end, or baseline points of the container.

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
  <i class="pi-rocket mr-1"></i>
  <strong class="mr-1">Try it!</strong> 
  Click the buttons below to toggle the flex align utility classes!
</div>

<div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
  <div class="actions block h-10">
    <ul class="list">
      <li>
        <button class="button button--purple button--purple-focus" data-class="flex--align-start">
          <pre>.flex--align-start</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus" data-class="flex--align-center">
          <pre>.flex--align-center</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus" data-class="flex--align-end">
          <pre>.flex--align-end</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus" data-childclass="flex--align-baseline">
          <pre>.flex--align-baseline</pre>
        </button>
      </li>
    </ul>
  </div>
  <div class="results block background-dark p-2">
    <div class="example" data-defaults="flex vh-25">
      <div class="example-element border border--color-white background-light-purple"></div>
    </div>
  </div>
</div>

| Class Name             | CSS Attribute              |
| ---------------------- | -------------------------- |
| `flex--align-center`   | `align-items: center;`     |
| `flex--align-start`    | `align-items: flex-start;` |
| `flex--align-end`      | `align-items: flex-end;`   |
| `flex--align-baseline` | `align-items: baseline;`   |
## Align-self
Sets individual elements to align to either the start, center, end, or baseline points of a flex container.

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
  <i class="pi-rocket mr-1"></i>
  <strong class="mr-1">Try it!</strong> 
  Click the buttons below to toggle the flex align-self utility classes!
</div>

<div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
  <div class="actions block h-10">
    <ul class="list">
      <li class="mr-2 mb-2">
        <button class="button button--purple button--purple-focus" data-childclass="flex--align-self-start">
          <pre>.flex--align-self-start</pre>
        </button>
      </li>
      <li class="mr-2 mb-2">
        <button class="button button--purple button--purple-focus" data-childclass="flex--align-self-center">
          <pre>.flex--align-self-center</pre>
        </button>
      </li>
      <li class="mr-2 mb-2">
        <button class="button button--purple button--purple-focus" data-childclass="flex--align-self-end">
          <pre>.flex--align-self-end</pre>
        </button>
      </li>
      <li class="mr-2 mb-2">
        <button class="button button--purple button--purple-focus" data-childclass="flex--align-self-baseline">
          <pre>.flex--align-self-baseline</pre>
        </button>
      </li>
    </ul>
  </div>
  <div class="results block background-dark p-2">
    <div class="example" data-defaults="flex vh-25">
      <div class="example-element border border--color-white background-light-purple"></div>
    </div>
  </div>
</div>

| Class Name                  | CSS Attribute             |
| --------------------------- | ------------------------- |
| `flex--align-self-center`   | `align-self: center;`     |
| `flex--align-self-start`    | `align-self: flex-start;` |
| `flex--align-self-end`      | `align-self: flex-end;`   |
| `flex--align-self-baseline` | `align-self: baseline;`   |
## Justify
Sets individual elements to align to either the start, center, end, or baseline points of a flex container.

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
  <i class="pi-rocket mr-1"></i>
  <strong class="mr-1">Try it!</strong> 
  Click the buttons below to toggle the flex justify utility classes!
</div>

<div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
  <div class="actions block h-10">
    <ul class="list">
      <li>
        <button class="button button--purple button--purple-focus " data-class="flex--justify-start">
          <pre>.flex--justify-start</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus " data-class="flex--justify-center">
          <pre>.flex--justify-center</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus " data-class="flex--justify-end">
          <pre>.flex--justify-end</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus " data-children="3" data-class="flex--justify-around">
          <pre>.flex--justify-around</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus " data-children="3" data-class="flex--justify-between">
          <pre>.flex--justify-between</pre>
        </button>
      </li>
    </ul>
  </div>
  <div class="results block background-dark p-2">
    <div class="example" data-defaults="flex">
      <div class="example-element border border--color-white background-light-purple"></div>
    </div>
  </div>
</div>

| Class Name              | CSS Attribute                     |
| ----------------------- | --------------------------------- |
| `flex--justify-start`   | `justify-content: flex-start;`    |
| `flex--justify-center`  | `justify-content: center;`        |
| `flex--justify-end`     | `justify-content: flex-end;`      |
| `flex--justify-between` | `justify-content: space-between;` |
| `flex--justify-around`  | `justify-content: space-around;`  |

## Direction
Utility classes to handle the direction of elements within a flex container.

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
    <i class="pi-rocket mr-1"></i>
    <strong class="mr-1">Try it!</strong> 
    Click the buttons below to toggle the direction utility classes!
</div>
<div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
  <div class="actions block h-10">
    <ul class="list">
      <li>
        <button class="button button--purple button--purple-focus" data-children="3">
          <pre>Default</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus" data-children="3" data-class="flex--row-reverse">
          <pre>.flex--row-reverse</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus" data-children="3" data-class="flex--column">
          <pre>.flex--column</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus" data-children="3" data-class="flex--column-reverse">
          <pre>.flex--column-reverse</pre>
        </button>
      </li>
    </ul>
  </div>
  <div class="results block background-dark p-2">
    <div class="example" data-defaults="flex vh-25">
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
    </div>
  </div>
</div>

| Class Name             | CSS Attribute                     |
| ---------------------- | --------------------------------- |
| `flex--row-reverse`    | `flex-direction: row-reverse;`    |
| `flex--column`         | `flex-direction: column;`         |
| `flex--column-reverse` | `flex-direction: column-reverse;` |


## Content
Utility classes to handle wrapping, spacing, and centering of content within a flex container.

<div class="linear-gradient inverted px-4 py-3 mt-4 block-container" 
      data-callout-header="tables tip" 
      data-callout-radius="0 3rem 0 3rem"
      data-gradient-direction="30deg"
      data-gradient-start="midnightblue 20%, purple 40%"
      data-gradient-stop="indigo"
      data-gradient-fallback="indigo">
    <i class="pi-rocket mr-1"></i>
    <strong class="mr-1">Try it!</strong> 
    Click the buttons below to toggle the content utility classes!
</div>
<div class="visualizer block-container p-3 py-4 border border--color-lighter border--width-5 tablet-up-2 mb-4">
  <div class="actions block h-10">
    <ul class="list">
      <li>
        <button class="button button--purple button--purple-focus " data-children="20" data-class="flex--nowrap">
          <pre>.flex--no-wrap</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus " data-children="20" data-class="flex--wrap">
          <pre>.flex--wrap</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus " data-children="3" data-childclass="flex--grow">
          <pre>.flex--grow</pre>
        </button>
      </li>
      <li>
        <button class="button button--purple button--purple-focus " data-children="1" data-class="flex--center-content">
          <pre>.flex--center-content</pre>
        </button>
      </li>
    </ul>
  </div>
  <div class="results block background-dark p-2">
    <div class="example" data-defaults="flex h-100">
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
      <div class="example-element border border--color-white background-light-purple"></div>
    </div>
  </div>
</div>

| Class Name             | CSS Attribute                                                  |
| ---------------------- | -------------------------------------------------------------- |
| `flex--grow`           | `flex-grow: 1;`                                                |
| `flex--wrap`           | `flex-wrap: wrap;`                                             |
| `flex--nowrap`         | `flex-wrap: nowrap;`                                           |
| `flex--center-content` | `display: flex; align-items: center; justify-content: center;` |