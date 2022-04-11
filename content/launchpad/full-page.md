---
title: Full Page Layout
layout: example
summary: Full page layout example using navigation, hero, cards, buttons, accordions, modals, and drawers.
skellyCSS: true
---

<style>
:root{
  --color-yellow: #ffeea5;
  --color-red: #d05151;
  --color-dark-red: #a54141;
}
</style>

<header class="site-menu-wrapper px-3" style="background:var(--color-dark-red); height:100px">
  <a href="#" class="site-logo">
    <img style="max-height:100%;" class="p-2" src="../../images/examples/pizza-town.svg" alt="Pizza Town Logo">
  </a>
  <button class="site-menu-mobile-action px-4 text--white">
    <span class="sr-only">Toggle Navigation</span>
    <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
  </button>
  <nav class="site-menu text--white">
    <div class="dropdown">
      <a href="#" class="site-menu__item dropdown__trigger h-100">
        Item 1 
        <i class="ml-1 pi-angle-down" aria-hidden="true"></i>
      </a>
      <div class="dropdown__content">
        <a href="#" class="dropdown__content-item">Link 1</a>
        <a href="#" class="dropdown__content-item">Link 2</a>
        <a href="#" class="dropdown__content-item">Link 3</a>
        <a href="#" class="dropdown__content-item">Link 4</a>
      </div>
    </div>
    <a href="#" class="site-menu__item h-100">Item 2</a>
    <a href="#" class="site-menu__item h-100">Item 3</a>
    <a href="#" class="site-menu__item h-100">Item 4</a>
    <a href="#" class="site-menu__item h-100">Item 5</a>
  </nav>
</header>

<div
  class="background-image mb-4"
  data-background-image="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  data-background-position="center center"
  data-background-size="cover"
  data-background-repeat="no-repeat">
    <div class="background--black-a80 text--size-xl text--center p-6">
      <img style="width: 80%; max-width:500px" src="../../images/examples/pizza-town.svg" alt="Pizza Town Logo">
      <h1 class="text--white">Welcome to Pizza Town!</h1>
      <button class="button button--lg text--white my-4 hover-scale" style="background:var(--color-red);">
        <span class="flex flex--align-center">
        <i class='pi-touch mr-2'></i>
        Order Online
        </span>
      </button>
      <p>
        <i class="pi-angle-down text--white"></i>
      </p>
     </div>
</div>

<div class="block-container mx-5">
  <h1 style="color:var(--color-dark-red);">Our Speciality Pizzas</h1>
</div>

<div class="block-container cards mx-5 pb-4">
  <div class="block tablet-up-6 laptop-up-3 p-2">
    <div class="card hover-shadow hover-scale">
      <img class="card__image" src="https://images.unsplash.com/photo-1584782930699-383ed067a486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Pepperoni Pizza" />
      <div class="card__content">
        <h2>Pepperoni</h2>
        <p class="skeleton" data-lines="5"></p>
        <button class="button">Add to Cart</button>
      </div> 
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-3 p-2">
    <div class="card hover-shadow hover-scale">
      <img class="card__image" src="https://images.unsplash.com/photo-1584782930699-383ed067a486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Pepperoni Pizza" />
      <div class="card__content">
        <h2>Ham & Pineapple</h2>
        <p class="skeleton" data-lines="5"></p>
        <button class="button">Add to Cart</button>
      </div> 
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-3 p-2">
    <div class="card hover-shadow hover-scale">
      <img class="card__image" src="https://images.unsplash.com/photo-1584782930699-383ed067a486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Pepperoni Pizza" />
      <div class="card__content">
        <h2>Bacon & Jalapeno</h2>
        <p class="skeleton" data-lines="5"></p>
        <button class="button">Add to Cart</button>
      </div> 
    </div>
  </div>
  <div class="block tablet-up-6 laptop-up-3 p-2">
    <div class="card hover-shadow hover-scale">
      <img class="card__image" src="https://images.unsplash.com/photo-1584782930699-383ed067a486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Pepperoni Pizza" />
      <div class="card__content">
        <h2>Three Cheese</h2>
        <p class="skeleton" data-lines="5"></p>
        <button class="button">Add to Cart</button>
      </div> 
    </div>
  </div>
</div>

<div class="px-3 py-4  text--center" style="background:var(--color-yellow)">
  <div class="block-container flex--justify-center mx-5">
    <div class="block block-8 text-black">
      <h1 style="color:var(--color-dark-red)">Build your own Pizza!</h1>
      <button class="button button--lg modal__open text--white hover-scale" data-modal="default-modal" style="background:var(--color-dark-red)">Build Now</button>
    </div>
  </div>
</div>

<div class="block-container mx-5 pt-5">
  <h1 style="color:var(--color-dark-red);">Full Menu</h1>
</div>
<div class="block-container mx-5 pb-4">
  <div class="accordion block-12">
    <a href="#" class="accordion__header px-2 py-2 flex--justify-between flex--align-center">
      <h2 class="m-0 p-0" style="color:var(--color-red);">Appetizers</h2>
      <i class="pi-angle-down accordion__icon" style="color:var(--color-red)"></i>
    </a>
    <div class="accordion__content">
      <div class="block-container">
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>Breadsticks</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>Mozzarella Sticks</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>1/2 Dozen Wings</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>Dozen Wings</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion block-12">
    <a href="#" class="accordion__header px-2 py-2 flex--justify-between flex--align-center">
      <h2 class="m-0 p-0" style="color:var(--color-red);">Entrees</h2>
      <i class="pi-angle-down accordion__icon" style="color:var(--color-red)"></i>
    </a>
    <div class="accordion__content">
      <div class="block-container">
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>Spaghetti</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>Spaghetti & Meatballs</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>Ravioli</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>Chicken Parmesan</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion block-12 mb-5">
    <a href="#" class="accordion__header px-2 py-2 flex--justify-between flex--align-center">
      <h2 class="m-0 p-0" style="color:var(--color-red);">Subs</h2>
      <i class="pi-angle-down accordion__icon" style="color:var(--color-red)"></i>
    </a>
    <div class="accordion__content">
      <div class="block-container">
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>Italian</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>Cheeseburger</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>Turkey</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
        <div class="block tablet-up-6 laptop-up-3 p-2">
          <div class="card">
            <div class="card__content">
              <h3>Tuna Salad</h3>
              <p class="skeleton" data-lines="5"></p>
              <button class="button">Add to Cart</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="default-modal" class="modal modal--closed">
  <div class="modal__inner">
    <div class="modal__header" style="background: var(--color-red)">
      <h2 class="text--white">Build your own Pizza</h2>
      <button class="button modal__close" data-modal="default-modal">
        Close 
        <i class="pi-times"></i>
      </button>
    </div>
    <div class="modal__content">
      <form action="" class="form">
        <div class="block-container mb-4">
          <fieldset class="pui-form__field block-4">
            <legend>Choose Size</legend>
            <div class="pui-toggle">
              <input id="Tall-2" type="radio" checked name="height">
              <label for="Tall-2">
                <i class='pi-check pi-heavy'></i> Personal
              </label>
              <input id="Short-2" type="radio" name="height">
              <label for="Short-2">
                <i class='pi-check pi-heavy'></i> Regular
              </label>
            </div>
          </fieldset>
        </div>
        <div class="block-container mb-4">
          <fieldset class="form__field">
            <legend>Choose Crust</legend>
            <div class="form__option-group">
              <input id="choose-small" type="radio" name="choose-one">
              <label for="choose-small">
                <div class="input-icons">
                  <i class='pi-circle pi-lg'></i>
                  <i class='pi-circle-solid'></i>
                </div>
                Pan
              </label>
              <input id="choose-bigger" type="radio" name="choose-one">
              <label for="choose-bigger">
                <div class="input-icons">
                  <i class='pi-circle pi-lg'></i>
                  <i class='pi-circle-solid'></i>
                </div>
                Garlic Pan
              </label>
            </div>
          </fieldset>
        </div>
        <div class="block-container mb-4">
          <fieldset class="form__field">
            <legend>Choose Toppings</legend>
            <div class="form__option-group">
              <input id="choose-this-one" type="checkbox">
              <label for="choose-this-one">
                <div class="input-icons">
                  <i class='pi-circle pi-lg'></i>
                  <i class='pi-check pi-heavy'></i>
                </div>
                Pepperoni
              </label>
              <input id="choose-that-one" type="checkbox">
              <label for="choose-that-one">
                <div class="input-icons">
                  <i class='pi-circle pi-lg'></i>
                  <i class='pi-check pi-heavy'></i>
                </div>
                Sausage
              </label>
              <input id="choose-that-one-2" type="checkbox">
              <label for="choose-that-one-2">
                <div class="input-icons">
                  <i class='pi-circle pi-lg'></i>
                  <i class='pi-check pi-heavy'></i>
                </div>
                Bacon
              </label>
              <input id="choose-that-one-3" type="checkbox">
              <label for="choose-that-one-3">
                <div class="input-icons">
                  <i class='pi-circle pi-lg'></i>
                  <i class='pi-check pi-heavy'></i>
                </div>
                Jalapeno
              </label>
            </div>
          </fieldset>
        </div>
        <div class="block-container">
          <button class="button mb-2">Add to Cart</button>
        </div>
      </form>
    </div>
  </div>
</div>

<div id="right" class="drawer drawer--closed drawer-right">
  <div class="drawer__inner">
    <div class="drawer__content">
      <div class="flex flex--justify-end">
      <button class="button drawer__close" data-drawer="right">
        Close 
        <i class="pi-times"></i>
      </button>
      </div>
      <ul class="list my-4">
        <li class="flex">
          <i class="pi-check text--salmon mr-3"></i> 
          <p class="border-b border--color-lighter pb-2 mb-0 flex--grow">Pepperoni Pizza</p>
          <p>$15.00</p>
        </li>
        <li class="flex">
          <i class="pi-check text--salmon mr-3"></i> 
          <p class="border-b border--color-lighter pb-2 mb-0 flex--grow">Breadsticks</p>
          <p>$5.00</p>
        </li>
        <li class="flex">
          <i class="pi-check text--salmon mr-3"></i> 
          <p class="border-b border--color-lighter pb-2 mb-0 flex--grow">1/2 Dozen Wings</p>
          <p>$7.50</p>
        </li>
      </ul>
      <button class="button button--lg text--white hover-scale" style="background:var(--color-dark-red)">Checkout Now</button>
    </div>
  </div>
</div>

<div class="pos-fix pin-right pin-bottom p-4">
<button class="button button--lg drawer__open text--white hover-scale" style="background:var(--color-dark-red)" data-drawer="right">
  <i class='pi-tag mr-2'></i>
  View Cart
</button>
</div>

<footer class="px-3 py-4 text--white" style="background:var(--color-red)">
  <div class="block-container">
    <div class="block block-12 flex flex--column flex--justify-center flex--align-center">
      <img class="p-2" style="max-width:200px" src="../../images/examples/pizza-town.svg" alt="Pizza Town Logo">
      &copy; Pizza Town
    </div>
  </div>
</footer>