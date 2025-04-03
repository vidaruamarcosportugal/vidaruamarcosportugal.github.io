---
layout: default
tag: book
permalink: "/category/book/notes/Hunt-Gather-Parent"
date: 2021-06-23
---

<!-- **vocabulario**{: style="background-color:#FFEF9E"} <br>
**sentenças**{: style="background-color:#FEC1D0"} <br>
**vocabulario**{: style="background-color:#ADECF4"} <br>
**vocabulario**{: style="background-color:#B7F7D1"} <br>
**traduction**{: style="background-color:#c9c9c9"} <br>  -->


<div>
{%- for book in site.data.books -%}
    {% assign status = book.exclusive_shelf %}
    {% assign title = book.title %}
    {% assign author = book.author %}
    {% assign date_read = book.date_read %}
    {%- if status == 'read' -%}
        {%- if title == 'Hunt Gather Parent' -%}
            {% break %}
            {% assign title = title %}
            {% assign author = author %}
            {% assign date_read = date_read %}
            {% assign rating = rating %}
        {%- endif -%}
    {%- endif -%}
{%- endfor -%}
</div>

<!-- count the number of words -->
{% for highlight in site.data.book_highlights.hunt_gather_parent %}
    {% assign highlight_number = highlight_number | plus: 1%}
{% endfor %}

# **{{ highlight_number }}**{: style="background-color:#FFEF9E"} _Highlights from_ **{{title}}**{: style="background-color:#FFEF9E"} _by_ **{{author}}**{: style="background-color:#FFEF9E"}<br> 


<div>
<span class='post-meta'>Date read: {{date_read}}</span>
{% for book in site.data.books %}
    {% assign status = book.exclusive_shelf %}
    {% assign title = book.title %}
    {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
    {% assign rating = book.rating %}
    {%- if status == 'read' -%}
        {%- if title == 'Hunt Gather Parent' -%}
                {% assign rating = book.rating %} 
                {% case rating %}   
                    {% when '1' %} 
                    <div>
                        <picture>
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                        </picture></div>
                    {% when '2' %} 
                        <div><picture>
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                        </picture></div>
                    {% when '3' %}
                        <div><picture>
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                        </picture></div>
                    {% when '4' %}
                        <div><picture>
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
                        </picture></div>
                    {% when '5' %}
                    <div>
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
                        </div>
                    {% endcase %} 
    {%- endif -%}
    {%- endif -%}
{% endfor %}
</div>



<a style='color:#e6e6e6;'>___</a>

<br>
<div>
    {% for highlight in site.data.book_highlights.hunt_gather_parent %}
        {% assign page = highlight.highlights %}
        {% assign comment = highlight.comments %}
        <div id='word'>
            <span class='post-meta' style='background-color:#B7F7D1;'>{{ page }}</span><br>
            <span class='vocab' id='main_word' style='font-weight:200;'>{{ comment }}</span>
        <br>
        <a style='color:#e6e6e6;'>_________</a>
        <br>
        <br>  
        </div>
    {% endfor %}
</div>