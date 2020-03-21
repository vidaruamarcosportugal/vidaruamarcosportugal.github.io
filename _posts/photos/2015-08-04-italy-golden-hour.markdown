---
layout: default
date:   2015-08-04
categories: photos
img: "https://live.staticflickr.com/776/23043614385_c51b138f6d_h.jpg"
---

<picture>
    <source srcset="{{page.img}}" media="(min-width: 800px)">
    <img src="{{page.img}}" />
</picture>

<br>
{%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%} 
<span class="post-meta">{{page.date | date: date_format }} - </span><a style="font-weight: 700;">{{ page.title }}</a><br>
<span class="post-meta">Ⓒ Julien Zanni - All Rights Reserved.</span>