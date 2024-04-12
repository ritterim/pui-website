---
title: Blog Post
layout: ../../../layouts/example.astro
summary: Full page layout example using navigation, hero, cards, buttons, accordions, modals, and drawers.
skellyCSS: true
---
<style>
    body {
        --purple: hsla(256, 46%, 25%, 1);
    }
    .background--purple {
        background-color: var(--purple);
    }
    .background-hover--purple:hover {
        background-color: var(--purple)!important;
        transition: .2s;
    }
    .border--color-purple {
        border-color: var(--purple)!important;
    }
    .text--purple {
        color: var(--purple)!important;
    }
    .text-hover--purple:hover {
        color: var(--purple)!important;
    }
</style>
<link rel="stylesheet" href="https://unpkg.com/@ritterim/skellycss/dist/style.css">

<header class="site-menu-wrapper p-2 background--black">
    <div class="block-container flex--justify-center w-100">
        <div class="block block-10 lg-tablet-up-8 flex flex--justify-between">
            <a href="/launch-pad/blog-example" class="site-logo text--size-lg text--white">
                My blog
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
        class="block linear-gradient background-image pos-rel p-3 mb-6"
        data-background-image="https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098__340.jpg"
        data-background-position="center center"
        data-background-size="cover"
        data-background-repeat="no-repeat"
        data-gradient-direction="to right"
        data-gradient-start="var(--black)"
        data-gradient-stop="transparent"
        data-gradient-fallback="var(--black)">
        <div class="block-container w-100 flex--justify-center">
            <div class="block-10 lg-tablet-up-8">
                <div class="py-6 block-container">
                    <div class="block lg-tablet-up-6">
                        <h1 class="text--white text--size-xl">My First Blog</h1>
                        <p class="skeleton mb-0" data-lines="2" data-opacity="0.2"></p>
                    </div>            
                </div>
            </div>
        </div>
    </section>
    <section class="block block-10 lg-tablet-up-8 mb-6">
        <h2 class="mb-3">Introduction</h2>
        <p class="skeleton" data-lines="3" role="presentation"></p>
        <p class="skeleton" data-lines="2" role="presentation"></p>
        <blockquote class="border--color-purple my-4">
            <p class="skeleton" data-color="var(--purple)" data-opacity=".3" data-lines="2" role="presentation"></p>
        </blockquote>
        <p class="skeleton" data-lines="2" role="presentation"></p>
        <p class="skeleton" data-lines="3" role="presentation"></p>
        <p class="skeleton" data-lines="2" role="presentation"></p>
    </section>
    <section class="block block-10 lg-tablet-up-8">
        <h2 class="mb-3">Read More</h2>
        <div class="mb-3">
            <button class="button background--white background-hover--purple text--purple text-hover--white border--color-purple"><i class="pi-tag"></i> Space</button>
            <button class="button background--white background-hover--purple text--purple text-hover--white border--color-purple"><i class="pi-tag"></i> Time</button>
            <button class="button background--white background-hover--purple text--purple text-hover--white border--color-purple"><i class="pi-tag"></i> Relativity</button>
        </div>
        <div class="block-container cards blocks tablet-up-3 p-3 mb-3 w-100">
            <div class="block">
                <div class="card rounded-2 p-0 flex flex--column hover-scale">
                    <img class="card__image" src="https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818__340.jpg" alt="">
                    <div class="card__content p-3 flex flex--column flex--justify-between flex--grow">
                        <div>
                            <h3 class="skeleton mb-3" role="presentation"></h3>
                            <p class="skeleton" data-lines="2" role="presentation"></p> 
                        </div>
                        <div>
                            <a class="button hover-scale background--purple background-hover--white text--white text-hover--purple border--color-purple" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="card rounded-2 p-0 flex flex--column hover-scale">
                    <img class="card__image" src="https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239__340.jpg" alt="">
                    <div class="card__content p-3 flex flex--column flex--justify-between flex--grow">
                        <div>
                            <h3 class="skeleton mb-3" role="presentation"></h3>
                            <p class="skeleton" data-lines="4" role="presentation"></p> 
                        </div>
                        <div>
                            <a class="button hover-scale background--purple background-hover--white text--white text-hover--purple border--color-purple" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="card rounded-2 p-0 flex flex--column hover-scale">
                    <img class="card__image" src="https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727__340.jpg" alt="">
                    <div class="card__content p-3 flex flex--column flex--justify-between flex--grow">
                        <div>
                            <h3 class="skeleton mb-3" role="presentation"></h3>
                            <p class="skeleton" data-lines="3" role="presentation"></p> 
                        </div>
                        <div>
                            <a class="button hover-scale background--purple background-hover--white text--white text-hover--purple border--color-purple" href="#">Read More</a>
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
