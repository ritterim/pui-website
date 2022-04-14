---
title: Dashboard
layout: example
summary: Full page example of a dashboard for a web application.
skellyCSS: true
chartist: true
---
<style>
body {
  background-color: rgba(51,51,51,.5);
}
</style>


<div class="px-4 py-4">
  <h1 class="text--center text--black mb-3">
    Dashboard
  </h1>
  <div class="block-container cards blocks px-2 pb-3">
    <div class="block tablet-up-6 laptop-up-3 desktop-up-2">
      <div class="card rounded-3 no-border">
        <div class="card__content">
          <p class="skeleton" data-lines="18"></p>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-6 desktop-up-8">
      <div class="card p-0 rounded-3 no-border">
        <div class="card__content">
          <div class="ct-chart">
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-3 desktop-up-2">
      <div class="card rounded-3 no-border">
        <img class="card__image" src="/images/sun-flare.jpg" alt="sun"/>
        <div class="card__content">
          <div class="flex flex--align-center mb-3">
            <span>Temperature: 10,340 <span>&#176;</span> F</span>
          </div>
          <div class="flex flex--align-center my-3">
            <span>Distance from: 91,406,842 mi</span>
          </div>
          <div class="flex flex--align-center my-3">
            <span>Sunspots: 61</span>
          </div>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card rounded-3 no-border">
        <div class="card__content text--center flex flex--column flex--justify-center h-100">
          <strong class="text--size-xl text-positive">74 <span>&#176;</span> F</strong>
          <p>Cabin Temperature</p>
          <strong class="text--size-xl text-negative">14 PSI</strong>
          <p>Cabin Pressure</p>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card rounded-3 no-border">
        <div class="card__content flex flex--column flex--justify-between h-100">
          <button class="button button--navy py-2 px-7">Button</button>
          <button class="button button--skyblue py-2 px-7">Button</button>
          <button class="button button--peach py-2 px-7">Button</button>
          <button class="button button--brown py-2 px-7">Button</button>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card rounded-3 no-border">
        <div class="card__content text--center form">
          <div class="card__header">
            <div class="card__group">
              <i class="pi-book text--black"></i>
              <h2 class="card__title text--black">NASA Database</h2>
            </div>
          </div>
          <label class="form__field has-icon--right">
            <input type="text" placeholder="Type to search..."></input>
            <i aria-hidden="true" class="pi-search text--black"></i>
          </label>
          <div class="text--left text--black">
            <p class="mt-4">Search History</p>
            <ul class="list">
              <li class="list__item flex "><i aria-hidden="true" class="pi-search mr-2"></i>Where is Mars?</li>
              <li class="list__item flex "><i aria-hidden="true" class="pi-search mr-2"></i>How to fly a spaceship?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="block desktop-up-6">
      <div class="card rounded-3 no-border">
        <div class="card__content text--center">
          <div class="card__header">
            <div class="card__group">
              <i class="pi-rocket text--black"></i>
              <h2 class="card__title text--black">Status Messages</h2>
            </div>
          </div>
          <div class="message message--error text--left">
            <p>Critical system malfunction!</p>
          </div>
          <div class="message message--success text--left">
            <p>The Eagle has landed.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>

  new Chartist.Line('.ct-chart', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [1, 2, 3, 1, -2, 0, 1, 0],
      [-2, -1, -2, -1, -2.5, -1, -2, -1],
      [0, 0, 0, 1, 2, 2.5, 2, 1],
      [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
    ]
  }, {
    high: 3,
    low: -3,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    axisX: {
      showLabel: false,
      showGrid: false
    }
  });
</script>