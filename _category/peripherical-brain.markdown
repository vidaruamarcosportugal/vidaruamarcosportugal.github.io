---
layout: default
tag: peripherical-brain
permalink: "/category/peripherical-brain"
---

{%- if page.title -%}
<h1>{{ page.title }}</h1>
{%- endif -%}

<ul>
{% for post in site.categories."peripherical-brain" %}
    <li>
        <span class="post-meta">{{ post.date | date_to_string }} - </span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>