---
layout: default
date:   2016-05-17
categories: photos
img: "https://live.staticflickr.com/4376/35548845803_85c24dc5b2_k.jpg"
---

<picture>
    <source srcset="{{page.img}}" media="(min-width: 800px)">
    <img src="{{page.img}}" />
</picture>

<br>
{%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%} 
<span class="post-meta">{{page.date | date: date_format }} - </span><a style="font-weight: 700;">{{ page.title }}</a><br>
<span class="post-meta">Ⓒ Julien Zanni - All Rights Reserved.</span>