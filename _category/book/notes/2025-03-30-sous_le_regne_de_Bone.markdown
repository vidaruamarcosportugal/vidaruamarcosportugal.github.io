---
layout: default
tag: book
permalink: "/category/book/notes/Sous-le-regne-de-Bone"
date: 2025-03-30
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
        {%- if title == 'Sous le règne de Bone' -%}
            {% break %}
            {% assign title = title %}
            {% assign author = author %}
            {% assign date_read = date_read %}
            {% assign rating = rating %}
        {%- endif -%}
    {%- endif -%}
{%- endfor -%}
</div>


# **{{title}}**{: style="background-color:#FFEF9E"} _by_ **{{author}}**{: style="background-color:#FFEF9E"}<br> 

<div>
<span class='post-meta'>Date read: {{date_read}}</span><br>
{% for book in site.data.books %}
    {% assign status = book.exclusive_shelf %}
    {% assign title = book.title %}
    {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
    {%- if status == 'read' -%}
        {%- if title == 'Hunt Gather Parent' -%}
                {% assign rating = book.rating %} 
                {% case rating %}   
                    {% when '1.0' %} 
                    <div>
                        <picture>
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                        </picture></div>
                    {% when '2.0' %} 
                        <div><picture>
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                        </picture></div>
                    {% when '3.0' %}
                        <div><picture>
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <source style='height: 3%; width: 3%; object-fit: contain' srcset="/assets/swallow.png" media="(max-width: 20px)">
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                            <img style='height: 3%; width: 3%; object-fit: contain' src="/assets/swallow.png" />
                        </picture></div>
                    {% when '4.0' %}
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
                    {% when '5.0' %}
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
