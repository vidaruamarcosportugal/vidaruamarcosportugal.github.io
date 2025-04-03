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
    {% assign year_published = book.year_published %}
    {% assign recommendation_from = book.recommendation_from %}
    {%- if status == 'read' -%}
        {%- if title == 'Sous le règne de Bone' -%}
            {% break %}
            {% assign title = title %}
            {% assign year_published = year_published %}
            {% assign author = author %}
            {% assign date_read = date_read %}
            {% assign rating = rating %}
            {% assign recommendation_from = recommendation_from %}
        {%- endif -%}
    {%- endif -%}
{%- endfor -%}
</div>


# **{{title}}**{: style="background-color:#FFEF9E"} _by_ **{{author}}**{: style="background-color:#FFEF9E"}<br> 

<div>
<span class='post-meta' font-style='italic'>Date published: {{year_published}}</span><br>
<span class='post-meta' font-style='italic' style="background-color:#FFEF9E">Date read: {{date_read}}</span><br>
<span class='post-meta'>Recommendation from: {{recommendation_from}}</span><br>
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

Supers sensations à la fin de la lecture. _(avec même une réminiscence de Garp !)_<br><br>
On sent l'évolution de la pensée de Bone / Chappie entre le début et la fin, ça se ressent aussi beaucoup par rapport à ce qu'il pense de Russ.<br>
Le fait qu'il se rende compte qu'il a grandi grâce / à cause de ce qu'il a pu vivre avec Bruce et les Adirondack Iron Rosie, iMan et me parle beaucoup. J'ai adoré la fin.<br><br>
L'écriture est trash mais regorge de beauté dans tous les recoins (vraiment étonnant et plaisant cette alternance trash / beau).<br>
Et bien que Bone _(mais que j'ai plus de tendresse à appeler Chappie, je ne sais pas pourquoi)_ peut être complètement fou dans ses actes et ses pensées, ce qui semble normal vu sa situation familiale et son beau-père, il est extrêmement attachant.<br><br>
Lecture géniale, merci Paupiette.
