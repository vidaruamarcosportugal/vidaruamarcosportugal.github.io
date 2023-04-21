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
        {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
        <span class="post-meta">{{ post.date | date: date_format }} - </span>    
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>

<br>

![](){:class="img-responsive"}

<a href="/category/tiffigra/gallery">
 <img src="/assets/photos/chiloe_logo.jpg" alt="Easter Egg" width="42" height="42" style="float:left"> 
 </a>
