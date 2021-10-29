---
layout: post
title:  "LearnLearnLearn"
date:   2015-03-15
categories: peripherical-brain
---
`Started: 2015-03-15`<br>

**English vocabulary**{: style="background-color:#B7F7D1"} that I originally started in [Evernote 🐘](https://www.evernote.com/shard/s24/sh/ce3f88f2-b3dc-4d4e-b67f-b06e43f3b08f/a1519b7cb45cdc04eadefee083484ac2).<br> 
As an non-native speaker, I try to improve the diversity of my vocabulary.<br><br>
This page loops over a csv file thanks to [jekyll data files](https://jekyllrb.com/docs/datafiles/) to style the content below!<br>

**Projects:**
- [x] Automate this page
- [ ] Bring back all the vocabulary in the csv file #wip
- [ ] Convert every word to the Portuguese vocabulary
- [ ] Create a "flashcard module" to review it more often

<!-- Style Memo
**vocabulario**{: style="background-color:#FFEF9E"} <br>
**sentenças**{: style="background-color:#FEC1D0"} <br>
**vocabulario**{: style="background-color:#ADECF4"} <br>
**vocabulario**{: style="background-color:#B7F7D1"} <br>
**traduction**{: style="background-color:#c9c9c9"} <br> -->

<br>
<a style='color:#e6e6e6;'>___</a>
<br>
<!-- count the number of words -->
{% for vocab in site.data.learn %}
    {% assign word_count = word_count | plus: 1%}
{% endfor %}

**words count**: **{{ word_count }}**{: style="background-color:#ADECF4"} <br>

<a style='color:#e6e6e6;'>___</a>

<br>
<br>
<div>
    {% for vocab in site.data.learn %}
        {% assign word = vocab.words %}
        <div id='word'>
            <a class='vocab' id='main_word' style='background-color:#B7F7D1; font-weight:600;'>{{ word }}</a><a class='post-meta'>  - {{ vocab.type }}</a><br>
            {%- if vocab.synonym != nil -%}
                <a class='post-meta'>{{ vocab.synonym }} <br></a>
            {%- endif -%}
            {%- if word == vocab.words -%}
                {% for trad in vocab.trad %}
                    <li id='trad'>
                        {{ trad }} <br>
                    </li>
                {% endfor %}
                    {%- if vocab.french_phrase != nil -%}
                        <code>{{ vocab.french_phrase }}</code> <br>
                    {%- endif -%} 
                    {%- if vocab.english_phrase != nil -%}
                        <code>{{ vocab.english_phrase }}</code> <br>
                    {%- endif -%} 
                    <br>
                    <a style='color:#e6e6e6;'>_________</a>
                    <br>
                    <br>
            {%- endif -%}    
        </div>
    {% endfor %}
</div>



<script>
{% assign word = site.data.learn %}

</script>