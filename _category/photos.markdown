---
layout: default
tag: photos
permalink: "/category/photos"
---

{%- if page.title -%}
<h1>{{ page.title }}</h1>
{%- endif -%}
<h4><a href="/category/photos/gallery">→ Gallery</a></h4>

<ul>
{% for post in site.categories.photos %}
    <li>
        <span class="post-meta">{{ post.date | date_to_string }} - </span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>