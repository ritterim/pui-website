---
title: Blog
layout: ../../../layouts/example.astro
summary: Full page layout example using navigation, hero, cards, buttons, accordions, modals, and drawers.
skellyCSS: true
weight: 1
---
<style>
    .background--purple {
        background-color: hsla(256, 46%, 25%, 1);
    }
    .background-hover--white:hover {
        background-color: hsl(0, 0%, 100%);
        transition: .2s;
    }

    .border--color-purple {
        border-color:hsla(256, 46%, 25%, 1);
    }

    .text-hover--purple:hover {
        color: hsla(256, 46%, 25%, 1)!important;
    }
</style>
<link rel="stylesheet" href="https://unpkg.com/@ritterim/skellycss/dist/style.css">

<header class="site-menu-wrapper p-2 background--black">
    <div class="block-container flex--justify-center w-100">
        <div class="block block-10 lg-tablet-up-8 flex flex--justify-between">
            <a href="#" class="site-logo text--size-lg text--white">
                My Blog
            </a>
            <button class="site-menu-mobile-action text--white">
                <span class="sr-only">Toggle Navigation</span>
                <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
            </button>
            <nav class="site-menu text--white">
                <a href="#" class="site-menu__item">About</a>
                <a href="#" class="site-menu__item">Posts</a>
                <a href="#" class="site-menu__item">Resume</a>
            </nav>
        </div>
    </div>
</header>

<main class="block-container flex--justify-center mb-6">
    <section 
        class="block linear-gradient background-image pos-rel mb-6 p-3"
        data-background-image="https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_1280.jpg"
        data-background-position="center center"
        data-background-size="cover"
        data-background-repeat="no-repeat"
        data-gradient-direction="to right"
        data-gradient-start="var(--black)"
        data-gradient-stop="transparent"
        data-gradient-fallback="var(--black)">
        <div class="block-container w-100 flex--justify-center">
            <div class="block-10 lg-tablet-up-8">
                <div class="py-6 pl-3 block-container">
                    <div class="block lg-tablet-up-6">
                        <h1 class="text--white">This blog is out of this world!</h1>
                        <p class="skeleton" data-lines="3" data-opacity=".3"></p>
                    </div>            
                </div>
            </div>
        </div>
    </section>
    <section class="block block-10 lg-tablet-up-8">
        <h2>Latest</h2>
        <div class="block-container blocks tablet-up-2 lg-tablet-up-3 laptop-up-4 p-3 mb-3 cards w-100">
            <div class="block">
                <div class="card rounded-2 p-0 flex flex--column hover-scale">
                    <img class="card__image" src="https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098__340.jpg">
                    <div class="card__content p-3 flex flex--column flex--justify-between flex--grow">
                        <div>
                            <h3 class="mb-3">My First Blog</h3>
                            <p class="skeleton" data-lines="3" role="presentation"></p>
                        </div>
                        <div>
                            <a class="button background--purple background-hover--white text--white text-hover--purple border--color-purple hover-scale" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="card rounded-2 p-0 flex flex--column hover-scale">
                    <img class="card__image" src="https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818__340.jpg">
                    <div class="card__content p-3 flex flex--column flex--justify-between flex--grow">
                        <div>
                            <h3 class="mb-3">My Second Blog</h3>
                            <p class="skeleton" data-lines="3" role="presentation"></p>
                        </div>
                        <div>
                            <a class="button background--purple background-hover--white text--white text-hover--purple border--color-purple hover-scale" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="card rounded-2 p-0 flex flex--column hover-scale">
                    <img class="card__image" src="https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029__340.jpg">
                    <div class="card__content p-3 flex flex--column flex--justify-between flex--grow">
                        <div>
                            <h3 class="mb-3">This One's Not The Best</h3>
                            <p class="skeleton" data-lines="3" role="presentation"></p>
                        </div>
                        <div>
                            <a class="button background--purple background-hover--white text--white text-hover--purple border--color-purple hover-scale" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="card rounded-2 p-0 flex flex--column hover-scale">
                    <img class="card__image" src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg">
                    <div class="card__content p-3 flex flex--column flex--justify-between flex--grow">
                        <div>
                            <h3 class="mb-3">My Last Blog</h3>
                            <p class="skeleton" data-lines="3" role="presentation"></p>
                        </div>
                        <div>
                            <a class="button background--purple background-hover--white text--white text-hover--purple border--color-purple hover-scale" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<footer class="p-4">
    <div class="text--center">
        <p>Made with <span class="text--negative">&hearts;</span> and <a href="{{ .Site.Params.pui_url }}">Platform UI</a></p>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/@ritterim/skellycss/dist/skelly.js"></script>