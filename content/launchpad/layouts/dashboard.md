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


<div class="px-4 py-3">
  <h1 class="text--center text--black my-3">
    Dashboard
  </h1>
  <div class="block-container cards blocks px-2 pb-3">
    <div class="block tablet-up-6 laptop-up-3 desktop-up-2">
      <div class="card rounded-3 no-border">
        <div class="card__content">
          <p class="skeleton" data-lines="17" data-animation="true"></p>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-6 desktop-up-8">
      <div class="card rounded-3 no-border">
        <div class="card__content h-100">
          <div class="card__header flex--justify-center mt-3">
            <div class="card__group">
              <i class="pi-info-solid text--black"></i>
              <h2 class="card__title text--black">Card Title</h2>
            </div>
          </div>
          <div class="ct-chart h-75 mt-4"></div>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-3 desktop-up-2">
      <div class="card rounded-3 no-border">
        <div class="cart__content h-100">
          <div class="horizontal-bar-chart h-100"></div>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card rounded-3 no-border">
        <div class="card__content h-100">
          <div class="pie-chart h-100"></div>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card rounded-3 no-border">
        <div class="card__content">
          <div class="card__header flex--justify-center">
            <div class="card__group">
              <i class="pi-help-solid text--black"></i>
              <h2 class="card__title text--black">Card Title</h2>
            </div>
          </div>
          <p class="skeleton" data-lines="8" data-animation="true"></p>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card rounded-3 no-border">
        <div class="card__content h-100">
          <div class="donut-chart h-100"></div>
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
            <p>Error message here</p>
          </div>
          <div class="message message--success text--left">
            <p>Success message here</p>
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

  new Chartist.Bar('.horizontal-bar-chart', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    series: [
      [5, 4, 3, 7, 5, 10, 3],
      [3, 2, 9, 5, 4, 6, 4]
    ]
  }, {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 70
    }
  });

  var data = {
    series: [5, 3, 4]
  };
  
  var sum = function(a, b) { return a + b };
  
  new Chartist.Pie('.pie-chart', data, {
    labelInterpolationFnc: function(value) {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    }
  });

  new Chartist.Pie('.donut-chart', {
    series: [20, 10, 30, 40]
  }, {
    donut: true,
    donutWidth: 60,
    donutSolid: true,
    startAngle: 270,
    showLabel: true
  });

  
</script>