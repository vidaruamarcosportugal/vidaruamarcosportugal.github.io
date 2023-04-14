---
layout: gallery
tag: tiffigra
permalink: "/category/tiffigra/memories"
---

<!-- Photo Grid -->
<div class="row"> 
    <!-- calcul du nombre de photo -->
    {% assign photo_number = 0 %}
    {% for post in site.categories.tiffigra %}
      {% assign photo_number = photo_number | plus: 1 %}  
    {% endfor %}
    <!-- {{photo_number}} -->
    <!-- calcul du nombre de photo a attribué par colonne -->
    {% assign photo_per_column = photo_number | divided_by: 4 %}
    <!-- {{ photo_per_column }} -->
    {% assign column_1 = 0 %}
    {% assign column_2 = 0 %}
    {% assign column_3 = 0 %}
    {% assign column_4 = 0 %}
    {% for post in site.categories.tiffigra reverse | first %}
      {% if column_1 == column_4 %}
        {% assign column_1 = column_1 | plus: 1 %}
        <div class="column">
        <a href="{{post.url}}">
          <picture>
            <source srcset="{{post.img}}" media="(min-width: 800px)" style="width:100%">
            <img src="{{post.img}}" style="width:100%">
            </picture>
        </a>
        </div>
        {% continue %}
      {% elsif  column_2 == column_4 %}  
       {% assign column_2 = column_2 | plus: 1 %}
        <div class="column">
          <a href="{{post.url}}">
          <picture>
            <source srcset="{{post.img}}" media="(min-width: 800px)" style="width:100%">
            <img src="{{post.img}}" style="width:100%">
            </picture>
          </a>  
        </div>
        {% continue %}
      {% elsif  column_3 == column_4 %}  
       {% assign column_3 = column_3 | plus: 1 %}
        <div class="column">
        <a href="{{post.url}}">
          <picture>
            <source srcset="{{post.img}}" media="(min-width: 800px)" style="width:100%">
            <img src="{{post.img}}" style="width:100%">
            </picture>
          </a>  
        </div>
        {% continue %}  
      {% elsif column_4 < column_1 %}  
       {% assign column_4 = column_4 | plus: 1 %}
        <div class="column">
        <a href="{{post.url}}">
          <picture>
            <source srcset="{{post.img}}" media="(min-width: 800px)" style="width:100%">
            <img src="{{post.img}}" style="width:100%">
            </picture>
        </a>    
        </div>
      {%- endif -%}
    {% endfor %}
</div>