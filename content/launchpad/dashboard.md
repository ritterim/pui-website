---
title: Dashboard
layout: example
summary: Full page example of a dashboard for a web application.
---

<style>
body {
  background-color: var(--navy);
}
</style>

<div class="pos-fix background--med-blue h-100 px-3 flex flex--column flex--align-center hide show:tablet">
  <p style="writing-mode: vertical-rl;" class="text--white mt-4 text--size-xl">Hello Neil</p>
  <button class="button drawer__open transparent" data-drawer="dashboard">
    <i class="pi-cogs pi-lg text--black"></i>
  </button>
</div>
<div id="dashboard" class="drawer drawer-left background--navy">
  <div class="drawer__header background--lightblue p-3">
    <button class="button drawer__close button--navy" data-drawer="dashboard">
        Close <i class="pi-times"></i>
    </button>
    <h3 class="mb-0 mt-0 text--navy text--bold">Hello Neil</h3>
  </div>
  <div class="drawer__content p-3 flex--grow">
    <ul class="list text--white">
      <li class="list__item mb-3">
        <i class="pi-key mr-1" aria-hidden="true"></i> Reset my password
      </li>
      <li class="list__item mb-3">
        <i class="pi-login mr-1" aria-hidden="true"></i> Change my Login email
      </li>
      <li class="list__item">
        <i class="pi-logout mr-1" aria-hidden="true"></i> Sign Out
      </li>
    </ul>
</div>
</div>
<div class="background--navy h-100 px-4 py-3 ml-7">
  <h1 class="text--center text--white">
    Vehicle Overview
  </h1>
  <div class="block-container cards blocks px-2 pb-3">
    <div class="block tablet-up-6 laptop-up-3 desktop-up-2">
      <div class="card background--med-blue border--color-black border--width-3 rounded-3">
        <div class="card__content">
          <div class="card__header flex--justify-center border-b border--color-white pb-1">
            <div class="card__group text--white">
              <i class="pi-info-solid text--white"></i>
              <h2 class="card__title text--white">System Health</h2>
            </div>
          </div>
          <div class="flex flex--align-center">
            <i class="pi-plus-circle-solid rotate-45 pi-xl mr-3 text-negative"></i>
            <span class="text--white">All Systems Check</span>
          </div>
          <div class="flex flex--align-center my-3">
            <i class="pi-check-circle-solid pi-xl mr-3 text-positive"></i>
            <span class="text--white">Thermal Shield</span>
          </div>
          <div class="flex flex--align-center my-3">
            <i class="pi-check-circle-solid pi-xl mr-3 text-positive"></i>
            <span class="text--white">Payload Systems</span>
          </div>
          <div class="flex flex--align-center my-3">
            <i class="pi-plus-circle-solid rotate-45 pi-xl mr-3 text-negative"></i>
            <span class="text--white">Stage 2 Pressurization Systems</span>
          </div>
          <div class="flex flex--align-center my-3">
            <i class="pi-warning pi-xl mr-3 text-warning"></i>
            <span class="text--white">Stage 1 Pressurization Systems</span>
          </div>
          <div class="flex flex--align-center">
            <i class="pi-check-circle-solid pi-xl mr-3 text-positive"></i>
            <span class="text--white">Engine Controls</span>
          </div>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-6 desktop-up-8">
      <div class="card background--med-blue border--color-black border--width-3 p-0 rounded-3">
        <div class="card__content">
          <table class="table">
            <thead>
              <tr class="background--med-blue text--white">
                <th class="no-border">Astronaut</th>
                <th class="no-border">Heart Rate</th>
                <th class="no-border">%S<sub>p</sub>O<sub>2</sub></th>
              </tr>
            </thead>
            <tbody class="background--white">
              <tr>
                <td data-label="Astronaut">
                  Neil Armstrong
                </td>
                <td data-label="Heart Rate">
                  103 bpm
                </td>
                <td data-label="%SPO2">
                  97
                </td>
              </tr>
              <tr>
                <td data-label="Astronaut">
                  Yury Gagarin
                </td>
                <td data-label="Heart Rate">
                  97 bpm
                </td>
                <td data-label="%SPO2">
                  96
                </td>
              </tr>
              <tr>
                <td data-label="Astronaut">
                  John Glenn
                </td>
                <td data-label="Heart Rate">
                  105 bpm
                </td>
                <td data-label="%SPO2">
                  90
                </td>
              </tr>
              <tr>
                <td data-label="Astronaut">
                  Sally Ride
                </td>
                <td data-label="Heart Rate">
                  110 bpm
                </td>
                <td data-label="%SPO2">
                  89
                </td>
              </tr>
              <tr>
                <td data-label="Astronaut">
                  Austin Asbury
                </td>
                <td data-label="Heart Rate">
                  79 bpm
                </td>
                <td data-label="%SPO2">
                  97
                </td>
              </tr>
              <tr>
                <td data-label="Astronaut">
                  Mae C. Jemison
                </td>
                <td data-label="Heart Rate">
                  80 bpm
                </td>
                <td data-label="%SPO2">
                  98
                </td>
              </tr>
              <tr>
                <td data-label="Astronaut">
                  Buzz Aldrin
                </td>
                <td data-label="Heart Rate">
                  107 bpm
                </td>
                <td data-label="%SPO2">
                  99
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-3 desktop-up-2">
      <div class="card background--med-blue border--color-black border--width-3 rounded-3">
        <img class="card__image background--lightblue no-border" src="/images/sun-flare.jpg" alt="sun"/>
        <div class="card__content">
          <div class="flex flex--align-center mb-3">
            <span class="text--white">Temperature: 10,340 <span>&#176;</span> F</span>
          </div>
          <div class="flex flex--align-center my-3">
            <span class="text--white">Distance from: 91,406,842 mi</span>
          </div>
          <div class="flex flex--align-center my-3">
            <span class="text--white">Sunspots: 61</span>
          </div>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card background--med-blue border--color-black border--width-3 rounded-3">
        <div class="card__content text--center flex flex--column flex--justify-center h-100">
          <strong class="text--size-xl text-positive">74 <span>&#176;</span> F</strong>
          <p class="text--white">Cabin Temperature</p>
          <strong class="text--size-xl text-negative">14 PSI</strong>
          <p class="text--white">Cabin Pressure</p>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card background--med-blue border--color-black border--width-3 rounded-3">
        <div class="card__content flex flex--column flex--justify-between h-100">
          <button class="button button--navy py-2 px-7">Button</button>
          <button class="button button--skyblue py-2 px-7">Button</button>
          <button class="button button--navy py-2 px-7">Button</button>
          <button class="button button--skyblue py-2 px-7">Button</button>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card background--med-blue border--color-black border--width-3 rounded-3">
        <div class="card__content text--center form">
          <div class="card__header">
            <div class="card__group">
              <i class="pi-book text--white"></i>
              <h2 class="card__title text--white">NASA Database</h2>
            </div>
          </div>
          <label class="form__field has-icon--right">
            <input type="text" value="How to fly a spaceship?" class="text--white"></input>
            <i aria-hidden="true" class="pi-search text--white"></i>
          </label>
          <div class="text--left text--white">
            <p class="mt-4">Search History</p>
            <ul class="list">
              <li class="list__item flex "><i aria-hidden="true" class="pi-search mr-2"></i>Where is Mars?</li>
              <li class="list__item flex "><i aria-hidden="true" class="pi-search mr-2"></i>Top 5 Astronaut Poses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="block desktop-up-6">
      <div class="card background--med-blue border--color-black border--width-3 rounded-3">
        <div class="card__content text--center">
          <div class="card__header">
            <div class="card__group">
              <i class="pi-rocket text--white"></i>
              <h2 class="card__title text--white">Status Messages</h2>
            </div>
          </div>
          <div class="message message--error text--left">
            <p>Critical system malfunction!</p>
          </div>
          <div class="message message--success text--left">
            <p>Starship Enterprise has entered into orbit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>