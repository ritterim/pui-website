---
title: Blog Post
layout: example
summary: Full page layout example using navigation, hero, cards, buttons, accordions, modals, and drawers.
---
<style>
    footer {
        position: sticky;
        top: 100vh;
    }

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
        class="block linear-gradient background-image pos-rel p-3 mb-6"
        data-background-image="https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098__340.jpg"
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
                        <h1 class="text--white">My Firrst Blog</h1>
                        <p class="text--white mb-0">Welcome to my new blog. I hope you like it.</p>
                    </div>            
                </div>
            </div>
        </div>
    </section>
    <section class="block block-10 lg-tablet-up-8 mb-6">
For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.

It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn’t feel like a giant. I felt very, very small.

Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.

We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.

There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.

> As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore . . . and this is exploration at its greatest.

Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman’s earth, if free men make it, will be truly round: a globe in practice, not in theory.

To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature—could one dream of anything more?

There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.

We are all connected; To each other, biologically. To the earth, chemically. To the rest of the universe atomically.
    </section>
    <section class="block block-10 lg-tablet-up-8">
        <h2>Read More</h2>
        <div class="mb-3">
            <button class="button background--purple background-hover--white text--white text-hover--purple border--color-purple mr-2">Space</button>
            <button class="button background--purple background-hover--white text--white text-hover--purple border--color-purple mx-2">Time</button>
            <button class="button background--purple background-hover--white text--white text-hover--purple border--color-purple ml-2">Relativity</button>
        </div>
        <div class="block-container blocks lg-tablet-up-2 p-3 mb-3 cards w-100">
            <div class="block">
                <div class="p-0 block-container flex--align-start">
                    <div class="block tablet-up-4 ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="block tablet-up-8 card__content px-3 flex flex--column flex--justify-between h-100">
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
                <div class="p-0 block-container flex--align-start">
                    <div class="block tablet-up-4 ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="block tablet-up-8 card__content px-3 flex flex--column flex--justify-between h-100">
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
                <div class="p-0 block-container flex--align-start">
                    <div class="block tablet-up-4 ratio-16_9 pos-rel">
                        <div class="background-image pos-abs pin-top pin-right pin-bottom pin-left"
                            data-background-image="https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239__340.jpg"
                            data-background-position="center center"
                            data-background-size="cover"
                            data-background-repeat="no-repeat"></div>
                    </div>
                    <div class="block tablet-up-8 card__content px-3 flex flex--column flex--justify-between h-100">
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
        </div>
    </section>
</main>

<footer class="background--dark p-4">
    <div class="text--center text--white">
        <p class="m-0">Copyright Platform UI 2022</p>
    </div>
</footer>
