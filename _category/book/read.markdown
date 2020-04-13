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

<div class="d3_graph">
<svg width="745" height="230"><g class="bars"><rect class="bar" x="82.69230769230768" y="163.1578947368421" width="47.69230769230769" height="26.84210526315789" style="fill: rgb(255, 150, 90);"></rect><rect class="bar" x="178.07692307692307" y="187.01754385964912" width="47.69230769230769" height="2.9824561403508767" style="fill: rgb(255, 150, 90);"></rect><rect class="bar" x="273.46153846153845" y="184.03508771929825" width="47.69230769230769" height="5.964912280701753" style="fill: rgb(255, 150, 90);"></rect><rect class="bar" x="368.84615384615387" y="70.70175438596492" width="47.69230769230769" height="119.29824561403508" style="fill: rgb(255, 150, 90);"></rect><rect class="bar" x="464.2307692307692" y="20" width="47.69230769230769" height="170" style="fill: rgb(255, 150, 90);"></rect><rect class="bar" x="559.6153846153845" y="55.78947368421053" width="47.69230769230769" height="134.21052631578948" style="fill: rgb(255, 150, 90);"></rect></g><g class="x-axis" transform="translate(0,190)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" style="font-weight: 400;"><path class="domain" stroke="currentColor" d="M35.5,0.5H655.5"></path><g class="tick" opacity="1" transform="translate(106.53846153846152,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">0</text></g><g class="tick" opacity="1" transform="translate(201.9230769230769,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">1</text></g><g class="tick" opacity="1" transform="translate(297.3076923076923,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">2</text></g><g class="tick" opacity="1" transform="translate(392.69230769230774,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">3</text></g><g class="tick" opacity="1" transform="translate(488.0769230769231,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">4</text></g><g class="tick" opacity="1" transform="translate(583.4615384615383,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">5</text></g></g><g class="text" text-anchor="middle" font-family="sans-serif" font-size="12"><text class="bar" x="102.69230769230768" y="153.1578947368421" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">9</text><text class="bar" x="198.07692307692307" y="177.01754385964912" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">1</text><text class="bar" x="293.46153846153845" y="174.03508771929825" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">2</text><text class="bar" x="388.84615384615387" y="60.70175438596492" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">40</text><text class="bar" x="484.2307692307692" y="10" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">57</text><text class="bar" x="579.6153846153845" y="45.78947368421053" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">45</text></g></svg>
</div>

<h3><a href="/category/book/to-read">→ To Read List</a></h3>

<ul>
{% for book in site.data.books %}
    {% assign status = book.exclusive_shelf %}
    {%- if status == 'read' -%}
    <li>
            {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
            <div class="{{book.rating}}">
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
        </div>
    </li>
    {%- endif -%}
{% endfor %}
</ul>