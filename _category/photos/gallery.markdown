---
layout: default
tag: photos
permalink: "/category/photos/gallery"
---

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
<h4><a href="/category/photos/memories">→ All Memories</a></h4>