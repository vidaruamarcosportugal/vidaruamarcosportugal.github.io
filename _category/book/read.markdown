---
layout: default
tag: book
permalink: "/category/book/read"
---
<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="/assets/js/graph.js"></script>

<div>
    {%- if page.title -%}
        <h1>{{ page.title }}</h1>
    {%- endif -%}
</div>

<h3><a href="/category/book/to-read">→ To Read List</a></h3>

<ul>
{% for book in site.data.books %}
    {% assign status = book.exclusive_shelf %}
    {%- if status == 'read' -%}
    <li>
            {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
                <span class="post-meta">{{ book.date_read | where_exp: "book",  "book.exclusive_shelf == 'read'" | date: date_format }} - </span>    
                <a href="{{book.open_library_url_info_ISBN13}}">{{ book.title | where_exp: "book",  "book.exclusive_shelf == 'read'" }}</a> - <a style='font-style: italic; font-weight: 200; font-size: 12px;' href="{{book.open_library_url_info_ISBN13}}">{{ book.author }}</a> 
                {% assign rating = book.rating %} {% case rating %} {% when '1' %} 
                <picture>
                    <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                    <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                </picture> 
            {% when '2' %} 
            <picture>
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
            </picture>
            {% when '3' %}
            <picture>
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
            </picture>
            {% when '4' %}
            <picture>
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
            </picture>
            <picture>
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
            </picture>
            <picture>
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
            </picture>
            <picture>
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
            </picture>
            {% when '5' %}
            <picture>
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
            </picture>
            <picture>
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
            </picture>
            <picture>
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
            </picture>
            <picture>
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
            </picture>
            <picture>
                <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
            </picture>
            {% endcase %} 
    </li>
    {%- endif -%}
{% endfor %}
</ul>