---
layout: default
tag: book
permalink: "/category/book/notes/Les-etoiles-seteignent-a-laube"
date: 2025-10-14
book_title: "Les étoiles s'éteignent à l'aube"
---

<!-- **yellow**{: style="background-color:#FFEF9E"} <br>
**pink**{: style="background-color:#FEC1D0"} <br>
**blu**{: style="background-color:#ADECF4"} <br>
**green**{: style="background-color:#B7F7D1"} <br>
**grey**{: style="background-color:#c9c9c9"} <br>  -->


<div>
{%- for book in site.data.books -%}
    {% assign status = book.exclusive_shelf %}
    {% assign title = book.title %}
    {% assign author = book.author %}
    {% assign date_read = book.date_read %}
    {% assign year_published = book.year_published %}
    {% assign recommendation_from = book.recommendation_from %}
    {%- if status == 'read' -%}
        {%- if title == "Les étoiles s'éteignent à l'aube" -%}
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
<span class='post-meta' font-style='italic' style="background-color:#B7F7D1; font-style=italic">Date published: {{year_published}}</span><br>
<span class='post-meta' style="background-color:#B7F7D1; font-style=italic">Date read: {{date_read}}</span><br>
<span class='post-meta'>Recommendation from: {{recommendation_from}}</span><br>
{% for book in site.data.books %}
    {% assign status = book.exclusive_shelf %}
    {% assign title = book.title %}
    {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
    {%- if status == 'read' -%}
        {%- if title == 'Les étoiles s'éteignent à l'aube' -%}
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

Franck et son rapport au monde m'a rendu admiratif, même envieux par moment.<br>
Il se demande s'il a tout pour être quelqu'un de bien et la réponse est tellement évidente à la lecture...<br>
Ce personnage m'a vraiment happé et j'aurais pu lire encore beaucoup de page juste sur lui même si j'ai trouvé le reste de l'histoire vraiment très bien aussi.<br>
Ça et la manière dont la nature est décrite sont ce qui m'a le plus marqué dans ce roman. L'histoire est dure, parfois très dure même mais c'est étonnamment pas ce qu'il m'en reste.<br>
Quelle belle lecture !
