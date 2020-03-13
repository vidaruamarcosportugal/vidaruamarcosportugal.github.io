---
layout: default
tag: reading
permalink: "/category/reading"
---

{%- if page.title -%}
    <h1>{{ page.title }}</h1>
{%- endif -%}

<ul>
{% for book in site.data.books %}
    {% assign status = book.exclusive_shelf %}    
    {%- if status == 'read' -%}
        <li>
            {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
            <span class="post-meta">{{ book.date_read | where_exp: "book",  "book.exclusive_shelf == 'read'" | date: date_format }} - </span>    
            <a>{{ book.title | where_exp: "book",  "book.exclusive_shelf == 'read'" }}</a> 
        </li>
    {%- endif -%}
{% endfor %}
</ul>