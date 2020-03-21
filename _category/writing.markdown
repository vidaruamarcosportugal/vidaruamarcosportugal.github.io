---
layout: default
tag: writing
permalink: "/category/writing"
---

{%- if page.title -%}
<h1>{{ page.title }}</h1>
{%- endif -%}

<ul>
{% for post in site.categories.writing %}
    <li>
        {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
        <span class="post-meta">{{ post.date | date: date_format }} - </span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>