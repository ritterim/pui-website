---
title: Blockquote
date: 2018-07-20T12:59:15-04:00
---

Our blockquotes are similar to the browser default. We added a left border, which is a light gray by default. To attribute someone in the blockquote, you can do so by adding a `<footer>` followed by their name. If you're referencing a specific creative work, be sure to include that inside a `<cite>`. See the examples below.

### Example
<blockquote>
    <p>Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.</p>
    <footer>—Mark Twain</footer>
</blockquote>
<blockquote cite="https://www.goodreads.com/quotes/tag/american-literature">
    <p>Perhaps as you went along you did learn something. I did not care what it was all about. All I wanted to know was how to live in it. Maybe if you found out how to live in it you learned from that what it was all about.</p>
    <footer>—Ernest Hemingway, <cite>The Sun Also Rises</cite></footer>
</blockquote>

{{< highlight html >}}
<blockquote>
    <p>Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.</p>
    <footer>—Mark Twain</footer>
</blockquote>
<blockquote cite="https://www.goodreads.com/quotes/tag/american-literature">
    <p>Perhaps as you went along you did learn something. I did not care what it was all about. All I wanted to know was how to live in it. Maybe if you found out how to live in it you learned from that what it was all about.</p>
    <footer>—Ernest Hemingway, <cite>The Sun Also Rises</cite></footer>
</blockquote>
{{< /highlight >}}

## Colors
As previously mentioned, the default color of the left border is light gray, but you can change it if you like. You can change the color of the border by using a border utility. For example, adding the class `border--color-navy`, to the blockquote, will change the border to navy. Learn more about border utilities. You can view our list of colors available greyscale, brand colors, and secondary colors maps.

<blockquote class="border--color-navy">
    <p>Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.</p>
    <footer>—Mark Twain</footer>
</blockquote>
<blockquote class="border--color-dark">
    <p>Beauty lies in the eyes of the beholder.</p>
    <footer>—Plato</footer>
</blockquote>
<blockquote class="border--color-orange">
    <p>Tell me and I forget. Teach me and I remember. Involve me and I learn.</p>
    <footer>—Benjamin Franklin</footer>
</blockquote>

{{< highlight html >}}
<blockquote class="border--color-navy">
    <p>Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.</p>
    <footer>—Mark Twain</footer>
</blockquote>
<blockquote class="border--color-dark">
    <p>Beauty lies in the eyes of the beholder.</p>
    <footer>—Plato</footer>
</blockquote>
<blockquote class="border--color-orange">
    <p>Tell me and I forget. Teach me and I remember. Involve me and I learn.</p>
    <footer>—Benjamin Franklin</footer>
</blockquote>
{{< /highlight >}}