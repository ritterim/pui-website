---
title: Blog
layout: example
summary: Full page layout example using navigation, hero, cards, buttons, accordions, modals, and drawers.
---
<style>
    footer {
        position: sticky;
        top: 100vh;
    }
</style>

<header class="site-menu-wrapper p-2 background--dark">
    <div class="block-container flex--justify-center w-100">
        <div class="block block-10 lg-tablet-up-8 flex flex--justify-between">
            <a href="/launch-pad/blog-example" class="site-logo text--size-lg text--white">
                PUI Blog!
            </a>
            <button class="site-menu-mobile-action text--white">
                <span class="sr-only">Toggle Navigation</span>
                <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
            </button>
            <nav class="site-menu text--white">
                <a href="/launch-pad/blog-example" class="site-menu__item">About</a>
                <a href="/launch-pad/blog-post" class="site-menu__item">Posts</a>
                <a href="/launch-pad/blog-example" class="site-menu__item">Resume</a>
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
        data-gradient-start="var(--dark)"
        data-gradient-stop="transparent"
        data-gradient-fallback="var(--dark)">
        <div class="block-container w-100 flex--justify-center">
            <div class="block-10 lg-tablet-up-8">
                <div class="py-6 pl-3 block-container">
                    <div class="block lg-tablet-up-6">
                        <h1 class="text--white">This blog is out of this world!</h1>
                        <p class="text--white mb-0">On this site you will read blogs. These blogs will have words. The grammar may be poor.</p>
                    </div>            
                </div>
            </div>
        </div>
    </section>
    <section class="block block-10 lg-tablet-up-8">
        <h2>Latest Posts</h2>
        <div class="block-container blocks tablet-up-2 lg-tablet-up-3 laptop-up-4 p-3 mb-3 cards w-100">
            <div class="block">
                <div class="card rounded-3 p-0 flex flex--column">
                    <div class="ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="card__content p-3 flex flex--column flex--justify-between h-100">
                        <div>
                            <h3 class="mb-3">My First Blog</h3>
                            <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla mauris vitae arcu.</p>
                        </div>
                        <div>
                            <p class="mb-0 text--size-sm">Published: January 3, 2022</p>
                            <a class="text-underline--hover text-hover--navy" href="/launch-pad/blog-post">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="card rounded-3 p-0 flex flex--column">
                    <div class="ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="card__content p-3 flex flex--column flex--justify-between h-100">
                        <div>
                            <h3 class="mb-3">My Second Blog</h3>
                            <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla mauris vitae arcu.</p>
                        </div>
                        <div>
                            <p class="mb-0 text--size-sm">Published: January 12, 2022</p>
                            <a class="text-underline--hover text-hover--navy" href="/launch-pad/blog-post">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="card rounded-3 p-0 flex flex--column">
                    <div class="ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="card__content p-3 flex flex--column flex--justify-between h-100">
                        <div>
                            <h3 class="mb-3">This Blog Thing Is Getting Easy</h3>
                            <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla mauris vitae arcu.</p>
                        </div>
                        <div>
                            <p class="mb-0 text--size-sm">Published: January 18, 2022</p>
                            <a class="text-underline--hover text-hover--navy" href="/launch-pad/blog-post">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="card rounded-3 p-0 flex flex--column">
                    <div class="ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="card__content p-3 flex flex--column flex--justify-between h-100">
                        <div>
                            <h3 class="mb-3">I'm Getting The Hang of This</h3>
                            <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla mauris vitae arcu.</p>
                        </div>
                        <div>
                            <p class="mb-0 text--size-sm">Published: January 23, 2022</p>
                            <a class="text-underline--hover text-hover--navy" href="/launch-pad/blog-post">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="card rounded-3 p-0 flex flex--column">
                    <div class="ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="card__content p-3 flex flex--column flex--justify-between h-100">
                        <div>
                            <h3 class="mb-3">This One's Not The Best</h3>
                            <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla mauris vitae arcu.</p>
                        </div>
                        <div>
                            <p class="mb-0 text--size-sm">Published: February 8, 2022</p>
                            <a class="text-underline--hover text-hover--navy" href="/launch-pad/blog-post">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="card rounded-3 p-0 flex flex--column">
                    <div class="ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="card__content p-3 flex flex--column flex--justify-between h-100">
                        <div>
                            <h3 class="mb-3">My Last Blog</h3>
                            <p>Donec malesuada semper risus vitae placerat. Morbi tristique, odio vel hendrerit sollicitudin, massa orci blandit felis, ac vehicula nulla mauris vitae arcu.</p>
                        </div>
                        <div>
                            <p class="mb-0 text--size-sm">Published: March 10, 2022</p>
                            <a class="text-underline--hover text-hover--navy" href="/launch-pad/blog-post">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<footer class="background--dark p-4">
    <div class="text--center text--white">
        <p class="m-0">Copyright Platform UI 2022</p>
    </div>
</footer>