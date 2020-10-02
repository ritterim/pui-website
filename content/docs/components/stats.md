---
title: Stats
date: 2018-07-20T12:59:15-04:00
---
Used to display statistics in different situations throughout the platform. There are three sizes, `pui-stat--lg`, `pui-stat--md`(default), and `pui-stat--sm`. `pui-stat` requires `data-stat-label` and `aria-label` attributes.

<div class="pui-card">
  <div class="pui-card__header">
    <div class="pui-card__group">
      <i class="pi-calendar pui-card__title-icon--large"></i>
      <h2 class="pui-card__title">Stats</h2>
    </div>
    <div class="pui-card__group button-group">
      <button class="button">Add <i class="pi-plus" aria-hidden="hidden"></i></button>
      <button class="button">View All <i class="pi-arrow-right" aria-hidden="hidden"></i></button>
    </div>
  </div>
  <div class="pui-card__content">
    <div class="block-container blocks p-2 tablet-up-3">
        <div class="block flex flex--align-center">
            <div class="text-light">Monthly Statistics</div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--lg text-salmon" data-stat-label="Total Stats" aria-label="Total Stats">
                <span class="pui-stat__number">4374</span>
            </div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--lg text-navy" data-stat-label="New Stats" aria-label="New Stats">
                <span class="pui-stat__number">46</span>
            </div>
        </div>
    </div>
    <hr class="background-lighter" />
    <div class="block-container blocks-py-2 blocks-px-2 tablet-up-3">
        <div class="block flex flex--align-center">
            <div class="text-light">Monthly Statistics</div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--md text-salmon" data-stat-label="New Stats" aria-label="New Stats">
                <span class="pui-stat__number">10</span>
            </div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--md text-salmon" data-stat-label="New Stats" aria-label="New Stats">
                <span class="pui-stat__number">56</span>
            </div>
        </div>
    </div>
    <hr class="background-lighter" />
    <div class="block-container blocks-py-2 blocks-px-2 tablet-up-3">
        <div class="block flex flex--align-center">
            <div class="text-light">New Stats</div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--sm text-salmon" data-stat-label="Submitted Stats" aria-label="Submitted Stats">
                <span class="pui-stat__number">474</span>
            </div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--sm text-salmon" data-stat-label="New Stats" aria-label="New Stats">
                <span class="pui-stat__number">4</span>
            </div>
        </div>
    </div>
  </div>
</div>

<div class="mt-3 mb-4">
{{< highlight html >}}
<div class="pui-card">
  <div class="pui-card__header">
    <div class="pui-card__group">
      <i class="pi-calendar pui-card__title-icon--large"></i>
      <h2 class="pui-card__title">Stats</h2>
    </div>
    <div class="pui-card__group button-group">
      <button class="button">Add <i class="pi-plus" aria-hidden="hidden"></i></button>
      <button class="button">View All <i class="pi-arrow-right" aria-hidden="hidden"></i></button>
    </div>
  </div>
  <div class="pui-card__content">
    <div class="block-container blocks p-2 tablet-up-3">
        <div class="block flex flex--align-center">
            <div class="text-light">Monthly Statistics</div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--lg text-salmon" data-stat-label="Total Stats" aria-label="Total Stats">
                <span class="pui-stat__number">4374</span>
            </div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--lg text-navy" data-stat-label="New Stats" aria-label="New Stats">
                <span class="pui-stat__number">46</span>
            </div>
        </div>
    </div>
    <hr class="background-lighter" />
    <div class="block-container blocks-py-2 blocks-px-2 tablet-up-3">
        <div class="block flex flex--align-center">
            <div class="text-light">Monthly Statistics</div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--md text-salmon" data-stat-label="New Stats" aria-label="New Stats">
                <span class="pui-stat__number">10</span>
            </div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--md text-salmon" data-stat-label="New Stats" aria-label="New Stats">
                <span class="pui-stat__number">56</span>
            </div>
        </div>
    </div>
    <hr class="background-lighter" />
    <div class="block-container blocks-py-2 blocks-px-2 tablet-up-3">
        <div class="block flex flex--align-center">
            <div class="text-light">New Stats</div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--sm text-salmon" data-stat-label="Submitted Stats" aria-label="Submitted Stats">
                <span class="pui-stat__number">474</span>
            </div>
        </div>
        <div class="block">
            <div class="pui-stat pui-stat--sm text-salmon" data-stat-label="New Stats" aria-label="New Stats">
                <span class="pui-stat__number">4</span>
            </div>
        </div>
    </div>
  </div>
</div>
{{< highlight html >}}
</div>