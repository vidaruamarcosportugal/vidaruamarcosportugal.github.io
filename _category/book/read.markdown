---
layout: default
tag: book
permalink: "/category/book/read"
jsarr:
     - "/js/d3.js"
     - "/js/graph.js"
---

<div>
    {%- if page.title -%}
        <h1>{{ page.title }}</h1>
    {%- endif -%}
</div>

<iframe width="100%" height="544" frameborder="0"
  src="https://observablehq.com/embed/@evryjazz/book-rating-graph?cells=final_plot"></iframe>

<h3><a href="/category/book/to-read">→ To Read List (Tsundoku)</a></h3>

<ul>
{% for book in site.data.books %}
    {% assign status = book.exclusive_shelf %}
    {%- if status == 'read' -%}
    <li>
        {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
        <div class="{{book.rating}}">
            <span class="post-meta">{{ book.date_read | where_exp: "book",  "book.exclusive_shelf == 'read'" | date: date_format }} - </span>    
            <a href="{{book.open_library_url_info_ISBN13}}">{{ book.title | where_exp: "book",  "book.exclusive_shelf == 'read'" }}</a> 
            <a class="post-meta">-</a> 
            <a style='font-style: italic; font-weight: 200; font-size: 12px;' href="{{book.open_library_url_info_ISBN13}}">{{ book.author }}</a> 
            {% assign rating = book.rating %} 
            {% case rating %} 
                {% when '1' %} 
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
            {% assign notes = book.notes %} 
            {% if book.notes contains "/category/book/notes/" %}
                <a class="post-meta" href="{{notes}}"> - notes</a> 
            {%- endif -%}
        </div>
    </li>
    {%- endif -%}
{% endfor %}
</ul>

<br>

---

<br>

<h3>→ Didn't get to the end...</h3>

<ul>
{% for book in site.data.books %}
    {% assign not_finished = book.bookshelves %}
    {%- if not_finished == 'not-finished' -%}
    <li>
        {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
        <div>
            <span class="post-meta">{{ book.date_added | where_exp: "book",  "book.bookshelves == 'not-finished'" | date: date_format }} - </span>    
            <a href="{{book.open_library_url_info_ISBN13}}">{{ book.title | where_exp: "book",  "book.bookshelves == 'not-finished'" }}</a> - <a style='font-style: italic; font-weight: 200; font-size: 12px;' href="{{book.open_library_url_info_ISBN13}}">{{ book.author }}</a> 
        </div>
    </li>
    {%- endif -%}
{% endfor %}
</ul>
