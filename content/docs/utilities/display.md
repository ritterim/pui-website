---
title: Display
date: 2018-07-20T12:59:15-04:00
---

Our display utilities allow you to show or hide code at specific resolutions.

If you want to simply add `display: none` to an element you can use the class `hidden`.

We also have print specific display classes. `show-print` and `hide-print`.

The classes are broken down by a display prefix, a breakpoint value, and a
directional suffix. The prefixes of show and hide represent the display value. Where `show-` will equal `display: block`
and `hide-` equals `display: none`.

The breakpoint value represents where the style will be used. Think of the breakpoints being within the starting px
value and the next breakpoint value. So `mobile` will be between `mobile` and `tablet`.

The suffix represents the direction of the media query. `-up` generates a `min-width` media query. `-down` generates a
`max-width` media query. `-only` generates a `min-width` and `max-width` media query.

| Class Name            | Display Value     | Generated Media Query                                |
| --------------------- | ----------------- | ---------------------------------------------------- |
| `hidden`              | `display: none;`  | No specified resolution                              |
| `show-print`          | `display: block;` | `@media print`                                       |
| `hide-print`          | `display: none;`  | `@media print`                                       |
| `show-mobile-up`      | `display: block;` | `@media (min-width: 0px)`                            |
| `show-mobile-only`    | `display: block;` | `@media (min-width: 0px) and (max-width: 767px)`     |
| `show-mobile-down`    | `display: block;` | `@media (max-width: 767px)`                          |
| `hide-mobile-up`      | `display: none;`  | `@media (min-width: 0px)`                            |
| `hide-mobile-only`    | `display: none;`  | `@media (min-width: 0px) and (max-width: 767px)`     |
| `hide-mobile-down`    | `display: none;`  | `@media (max-width: 767px)`                          |
| `show-tablet-up`      | `display: block;` | `@media (min-width: 768px)`                          |
| `show-tablet-only`    | `display: block;` | `@media (min-width: 768px) and (max-width: 990px)`   |
| `show-tablet-down`    | `display: block;` | `@media (max-width: 990px)`                          |
| `hide-tablet-up`      | `display: none;`  | `@media (min-width: 768px)`                          |
| `hide-tablet-only`    | `display: none;`  | `@media (min-width: 768px) and (max-width: 990px)`   |
| `hide-tablet-down`    | `display: none;`  | `@media (max-width: 990px)`                          |
| `show-lg-tablet-up`   | `display: block;` | `@media (min-width: 991px)`                          |
| `show-lg-tablet-only` | `display: block;` | `@media (min-width: 991px) and (max-width: 1239px)`  |
| `show-lg-tablet-down` | `display: block;` | `@media (max-width: 1239px)`                         |
| `hide-lg-tablet-up`   | `display: none;`  | `@media (min-width: 991px)`                          |
| `hide-lg-tablet-only` | `display: none;`  | `@media (min-width: 991px) and (max-width: 1239px)`  |
| `hide-lg-tablet-down` | `display: none;`  | `@media (max-width: 1239px)`                         |
| `show-laptop-up`      | `display: block;` | `@media (min-width: 1240px)`                         |
| `show-laptop-only`    | `display: block;` | `@media (min-width: 1240px) and (max-width: 1799px)` |
| `show-laptop-down`    | `display: block;` | `@media (max-width: 1799px)`                         |
| `hide-laptop-up`      | `display: none;`  | `@media (min-width: 1240px)`                         |
| `hide-laptop-only`    | `display: none;`  | `@media (min-width: 1240px) and (max-width: 1799px)` |
| `hide-laptop-down`    | `display: none;`  | `@media (max-width: 1799px)`                         |
| `show-desktop-up`     | `display: block;` | `@media (min-width: 1800px)`                         |
| `show-desktop-only`   | `display: block;` | `@media (min-width: 1800px) and (max-width: 1799px)` |
| `hide-desktop-up`     | `display: none;`  | `@media (min-width: 1800px)`                         |
| `hide-desktop-only`   | `display: none;`  | `@media (min-width: 1800px) and (max-width: 1799px)` |