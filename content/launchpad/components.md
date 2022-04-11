---
title: Components
---

## Accordion

### Nested

You can nest one accordion inside another.

{{< code-demo >}}
<div class="accordion">
  <div href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center background--white">
    <div class="flex flex--align-center">
      <p>This is an accordion header.</p>
    </div>
    <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
  </div>
  <div class="accordion__content background--lighter">
    <div class="px-3 py-3">
      <p>This is the accordion content.</p>
    </div>
    <div class="accordion">
      <a href="#" class="accordion__header px-3 py-3 flex flex--justify-between flex--align-center">
        <div class="flex flex--align-center">
          <p>This is a nested accordion header.</p>
        </div>
        <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
      </a>
      <div class="accordion__content background--lighter">
        <div class="px-3 py-3">
          <p>This is the nested accordion content.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /code-demo >}}

{{< code-markup >}}
{{< highlight html >}}
<div class="accordion">
  <div href="#" class="accordion__header px-3 py-3 flex--justify-between flex--align-center background--white">
    <div class="flex flex--align-center">
      <p>This is an accordion header.</p>
    </div>
    <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
  </div>
  <div class="accordion__content background--lighter">
    <div class="px-3 py-3">
      <p>This is the accordion content.</p>
    </div>
    <div class="accordion">
      <a href="#" class="accordion__header px-3 py-3 flex flex--justify-between flex--align-center">
        <div class="flex flex--align-center">
          <p>This is a nested accordion header.</p>
        </div>
        <i class="pi-angle-down pui-accordion__icon text-med-blue"></i>
      </a>
      <div class="accordion__content background--lighter">
        <div class="px-3 py-3">
          <p>This is the nested accordion content.</p>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /highlight >}} 
{{< /code-markup >}}

## Blockquote

## Buttons

## Cards

## Drawer

## Figure Hover

## Image Round

## Info Box

## Lists

## Loader

## Messages

## Modal

## Pill

## Tables

## Tabs

## Tooltip