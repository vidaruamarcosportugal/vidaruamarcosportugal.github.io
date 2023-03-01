---
layout: post
title:  "Português"
date:   2019-11-01
categories: peripherical-brain
---

**'Fixe' recursos**{: style="background-color:#B7F7D1"}
- <a href="/assets/portugues/1000_Palavras_mais_comuns.pdf">1000 Palavras mais comuns</a>
- [Portuguese with Leo](https://www.youtube.com/@PortugueseWithLeo/videos)
- [Portuguese with Maria](https://www.youtube.com/@portuguesewithmaria/videos)
- [Portuguese Lab](https://www.youtube.com/channel/UCb0zJhS1C8QK3fzcZdU0Xkw)
- [The sound of Portuguese](https://www.youtube.com/@Portuguesewithadelina/videos)
- [Practice Portuguese](https://www.youtube.com/@PracticePortuguese/videos)
- [The Language Unschool](https://www.youtube.com/@thelanguageunschool/videos)

<br>

<!-- 
**vocabulario**{: style="background-color:#FFEF9E"} <br>
**sentenças**{: style="background-color:#FEC1D0"} <br>
**vocabulario**{: style="background-color:#ADECF4"} <br>
**vocabulario**{: style="background-color:#B7F7D1"} <br>
**traduction**{: style="background-color:#c9c9c9"} <br> -->

`Start: 2019.11`<br>
`Last Update: 2023.02`
<br>
<br>

<a class="post-meta">This page loops over a csv file thanks to [jekyll data files](https://jekyllrb.com/docs/datafiles/) to style the content below!</a>


<br>


<br>
<a style='color:#e6e6e6;'>___</a>
<br>
<!-- count the number of words -->
{% for vocab in site.data.apprender %}
    {% assign word_count = word_count | plus: 1%}
{% endfor %}

**words count**: **{{ word_count }}**{: style="background-color:#ADECF4"} <br>

<a style='color:#e6e6e6;'>___</a>

<br>
<br>
<div>
    {% for vocab in site.data.apprender %}
        {% assign word = vocab.words %}
        <a class='vocab'  style='background-color:#B7F7D1; font-weight:600;'>{{ word }}</a><a class='post-meta'>  - {{ vocab.type }}</a><br>
        {%- if vocab.synonym != nil -%}
            <a class='post-meta'>{{ vocab.synonym }} <br></a>
        {%- endif -%}
        {%- if word == vocab.words -%}
            {% for trad in vocab.trad %}
                <li>
                    {{ trad }} <br>
                </li>
            {% endfor %}
                {%- if vocab.french_phrase != nil -%}
                    <code>{{ vocab.french_phrase }}</code> <br>
                {%- endif -%} 
                {%- if vocab.portuguese_phrase != nil -%}
                    <code>{{ vocab.portuguese_phrase }}</code> <br>
                {%- endif -%} 
                <br>
                <a style='color:#e6e6e6;'>_________</a>
                <br>
                <br>
        {%- endif -%}    
    {% endfor %}
</div>
