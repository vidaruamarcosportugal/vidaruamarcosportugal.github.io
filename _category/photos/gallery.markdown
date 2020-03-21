---
layout: default
tag: photos
permalink: "/category/photos/gallery"
---

<style>
.memories {text-align: right;}
.memories > .post-meta {text-align: right;}
</style>

<div class="memories">
    <a class="post-meta" href="/category/photos/memories">→ All Memories</a>
</div>
<ul>
{% for post in site.categories.photos reverse limit:10 %}
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
    <a class="post-meta" href="/category/photos/memories">→ All Memories</a>
</div>