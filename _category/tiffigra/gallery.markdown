---
layout: default
tag: tiffigra
permalink: "/category/tiffigra/gallery"
---

<style>
.memories {text-align: right;}
.memories > .post-meta {text-align: right;}
</style>

<div class="memories">
    <a class="post-meta" href="/category/tiffigra/memories">→ All Memories</a>
</div>
<div class="memories">
    <a class="post-meta" href="https://docs.google.com/spreadsheets/d/1WUBuhmUQyvWrI5lD-fk98XV-pejLJyvkM8rWng2YnNE/edit?usp=sharing">→ Pieces Project</a>
</div>
<ul>
{% for post in site.categories.tiffigra reverse limit:10 %}
    <br>
    <a href="{{post.url}}">
        <picture>
            <source srcset="{{post.img}}" media="(min-width: 800px)">
            <img src="{{post.img}}">
        </picture>
    </a>
    <br>
{% endfor %}
</ul>
<div class="memories">
    <a class="post-meta" href="/category/tiffigra/memories">→ All Memories</a>
</div>