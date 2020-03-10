---
layout: default
tag: photos
permalink: "/category/photos/gallery"
---

{%- if page.title -%}
<h1>{{ page.title }}</h1>
{%- endif -%}

<ul>
{% for post in site.categories.photos reverse %}

    {{ post.content }}

{% endfor %}
</ul>