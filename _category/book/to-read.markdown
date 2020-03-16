---
layout: default
tag: book
permalink: "/category/book/to-read"
---

{%- if page.title -%}
    <h1>{{ page.title }}</h1>
{%- endif -%}

<ul>
{% for book in site.data.books %}
    {% assign status = book.exclusive_shelf %}    
    {%- if status == 'to-read' -%}
        <li>
            {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
            <span class="post-meta">{{ book.date_added | date: date_format }} - </span>    
            <a>{{ book.title }}</a> 
        </li>
    {%- endif -%}
{% endfor %}
</ul>