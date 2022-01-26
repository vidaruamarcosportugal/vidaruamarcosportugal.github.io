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

<!-- <div class="d3_graph">
   <svg width="745" height="230"><g class="bars"><rect class="bar" x="82.69230769230768" y="164.5" width="47.69230769230769" height="25.5" style="fill: rgb(255, 150, 90);"></rect><rect class="bar" x="178.07692307692307" y="187.16666666666666" width="47.69230769230769" height="2.833333333333343" style="fill: rgb(255, 150, 90);"></rect><rect class="bar" x="273.46153846153845" y="184.33333333333331" width="47.69230769230769" height="5.666666666666686" style="fill: rgb(255, 150, 90);"></rect><rect class="bar" x="368.84615384615387" y="71" width="47.69230769230769" height="119" style="fill: rgb(255, 150, 90);"></rect><rect class="bar" x="464.2307692307692" y="20" width="47.69230769230769" height="170" style="fill: rgb(255, 150, 90);"></rect><rect class="bar" x="559.6153846153845" y="48.33333333333333" width="47.69230769230769" height="141.66666666666669" style="fill: rgb(255, 150, 90);"></rect></g><g class="x-axis" transform="translate(0,190)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" style="font-weight: 400;"><path class="domain" stroke="currentColor" d="M35.5,0.5H655.5"></path><g class="tick" opacity="1" transform="translate(106.53846153846152,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">0</text></g><g class="tick" opacity="1" transform="translate(201.9230769230769,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">1</text></g><g class="tick" opacity="1" transform="translate(297.3076923076923,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">2</text></g><g class="tick" opacity="1" transform="translate(392.69230769230774,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">3</text></g><g class="tick" opacity="1" transform="translate(488.0769230769231,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">4</text></g><g class="tick" opacity="1" transform="translate(583.4615384615383,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">5</text></g></g><g class="text" text-anchor="middle" font-family="sans-serif" font-size="12"><text class="bar" x="102.69230769230768" y="154.5" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">9</text><text class="bar" x="198.07692307692307" y="177.16666666666666" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">1</text><text class="bar" x="293.46153846153845" y="174.33333333333331" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">2</text><text class="bar" x="388.84615384615387" y="61" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">42</text><text class="bar" x="484.2307692307692" y="10" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">60</text><text class="bar" x="579.6153846153845" y="38.33333333333333" dy="0.35em" style="font-family: sans-serif; font-weight: 600;">50</text></g></svg>
</div> -->


<!-- <div>
<picture>
    <source srcset="book_stat.jpg"
            media="(min-width: 800px)">
    <img src="book_stat.jpg"/>
</picture>
</div> -->


<div>
<svg class="plot-1dfbeeeca2ab" fill="currentColor" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle" width="640" height="430" viewBox="0 0 640 430" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <style>
    .plot-1dfbeeeca2ab {
      display: block;
      background: white;
      height: auto;
      height: intrinsic;
      max-width: 100%;
    }

    .plot-1dfbeeeca2ab text,
    .plot-1dfbeeeca2ab tspan {
      white-space: pre;
    }
  </style>
  <g transform="translate(40,0)" fill="none" text-anchor="end" font-variant="tabular-nums">
    <g class="tick" opacity="1" transform="translate(0,400)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">0</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,368.3333333333333)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">1</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,336.6666666666667)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">2</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,305)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">3</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,273.33333333333337)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">4</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,241.66666666666666)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">5</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,210)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">6</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,178.33333333333331)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">7</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,146.66666666666669)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">8</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,115)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">9</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,83.33333333333333)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">10</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,51.666666666666686)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">11</text>
    </g>
    <g class="tick" opacity="1" transform="translate(0,20)">
      <line stroke="currentColor" x2="-6" />
      <text fill="currentColor" x="-9" dy="0.32em">12</text>
    </g>
    <text fill="currentColor" transform="translate(-40,20)" dy="-1em" text-anchor="start">↑ count</text>
  </g>
  <g transform="translate(0,400)" fill="none" text-anchor="middle">
    <g class="tick" opacity="1" transform="translate(59,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2002</text>
    </g>
    <g class="tick" opacity="1" transform="translate(91,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2006</text>
    </g>
    <g class="tick" opacity="1" transform="translate(123,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2007</text>
    </g>
    <g class="tick" opacity="1" transform="translate(155,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2008</text>
    </g>
    <g class="tick" opacity="1" transform="translate(187,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2009</text>
    </g>
    <g class="tick" opacity="1" transform="translate(219,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2010</text>
    </g>
    <g class="tick" opacity="1" transform="translate(251,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2011</text>
    </g>
    <g class="tick" opacity="1" transform="translate(283,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2012</text>
    </g>
    <g class="tick" opacity="1" transform="translate(315,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2013</text>
    </g>
    <g class="tick" opacity="1" transform="translate(347,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2014</text>
    </g>
    <g class="tick" opacity="1" transform="translate(379,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2015</text>
    </g>
    <g class="tick" opacity="1" transform="translate(411,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2016</text>
    </g>
    <g class="tick" opacity="1" transform="translate(443,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2017</text>
    </g>
    <g class="tick" opacity="1" transform="translate(475,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2018</text>
    </g>
    <g class="tick" opacity="1" transform="translate(507,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2019</text>
    </g>
    <g class="tick" opacity="1" transform="translate(539,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2020</text>
    </g>
    <g class="tick" opacity="1" transform="translate(571,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2021</text>
    </g>
    <g class="tick" opacity="1" transform="translate(603,0)">
      <line stroke="currentColor" y2="6" />
      <text fill="currentColor" y="9" dy="0.71em">2022</text>
    </g>
  </g>
  <g>
    <g transform="translate(44,0)">
      <g>
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(76,0)">
      <g>
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(108,0)">
      <g>
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="3" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(110, 64, 170)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(140,0)">
      <g>
        <rect x="3" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(110, 64, 170)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="15" width="4" y="305" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(255, 120, 71)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(172,0)">
      <g>
        <rect x="11" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(254, 75, 131)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="305" height="31.666666666666686" fill="rgb(255, 120, 71)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(204,0)">
      <g>
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="305" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(236,0)">
      <g>
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="305" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="210" height="31.666666666666657" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="178.33333333333331" height="31.666666666666686" fill="rgb(226, 183, 47)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(268,0)">
      <g>
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(300,0)">
      <g>
        <rect x="3" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(110, 64, 170)" />
        <rect x="3" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(110, 64, 170)" />
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="305" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(226, 183, 47)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(332,0)">
      <g>
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="305" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="3" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(110, 64, 170)" />
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="23" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="7" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(191, 60, 175)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="3" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(110, 64, 170)" />
        <rect x="3" width="4" y="305" height="31.666666666666686" fill="rgb(110, 64, 170)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(364,0)">
      <g>
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="3" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(110, 64, 170)" />
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="11" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(254, 75, 131)" />
        <rect x="3" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(110, 64, 170)" />
        <rect x="11" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(254, 75, 131)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="305" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(255, 120, 71)" />
        <rect x="3" width="4" y="305" height="31.666666666666686" fill="rgb(110, 64, 170)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(396,0)">
      <g>
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="305" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="305" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="23" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="210" height="31.666666666666657" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="210" height="31.666666666666657" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="178.33333333333331" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="146.66666666666669" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="178.33333333333331" height="31.666666666666686" fill="rgb(175, 240, 91)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(428,0)">
      <g>
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="305" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="23" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="3" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(110, 64, 170)" />
        <rect x="15" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="11" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(254, 75, 131)" />
        <rect x="15" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="305" height="31.666666666666686" fill="rgb(175, 240, 91)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(460,0)">
      <g>
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="305" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="23" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(175, 240, 91)" />
        <rect x="15" width="4" y="305" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="210" height="31.666666666666657" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="178.33333333333331" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="210" height="31.666666666666657" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="178.33333333333331" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="15" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="146.66666666666669" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="146.66666666666669" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="115" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="83.33333333333333" height="31.66666666666667" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="51.666666666666686" height="31.666666666666643" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="20" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="115" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(255, 120, 71)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(492,0)">
      <g>
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="305" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="305" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="15" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="23" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="210" height="31.666666666666657" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="178.33333333333331" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(524,0)">
      <g>
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="305" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="23" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(175, 240, 91)" />
        <rect x="3" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(110, 64, 170)" />
        <rect x="3" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(110, 64, 170)" />
        <rect x="15" width="4" y="305" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="23" width="4" y="210" height="31.666666666666657" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="178.33333333333331" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="146.66666666666669" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="15" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(255, 120, 71)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(556,0)">
      <g>
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="23" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="305" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="23" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="305" height="31.666666666666686" fill="rgb(175, 240, 91)" />
        <rect x="15" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(226, 183, 47)" />
        <rect x="3" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(110, 64, 170)" />
        <rect x="23" width="4" y="273.33333333333337" height="31.66666666666663" fill="rgb(175, 240, 91)" />
        <rect x="23" width="4" y="241.66666666666666" height="31.666666666666714" fill="rgb(175, 240, 91)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
    <g transform="translate(588,0)">
      <g>
        <rect x="19" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(226, 183, 47)" />
        <rect x="15" width="4" y="368.3333333333333" height="31.666666666666686" fill="rgb(255, 120, 71)" />
        <rect x="19" width="4" y="336.6666666666667" height="31.66666666666663" fill="rgb(226, 183, 47)" />
        <rect x="19" width="4" y="305" height="31.666666666666686" fill="rgb(226, 183, 47)" />
      </g>
      <g stroke="currentColor">
        <line x1="0" x2="29" y1="400" y2="400" />
      </g>
    </g>
  </g>
</svg>

<svg width="320" height="44" viewBox="0,0,320,44" style="overflow: visible; display: block;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g>
    <rect x="1" y="18" width="52" height="10" fill="#6e40aa" />
    <rect x="54" y="18" width="52" height="10" fill="#bf3caf" />
    <rect x="107" y="18" width="52" height="10" fill="#fe4b83" />
    <rect x="160" y="18" width="52" height="10" fill="#ff7847" />
    <rect x="213" y="18" width="52" height="10" fill="#e2b72f" />
    <rect x="266" y="18" width="52" height="10" fill="#aff05b" />
  </g>
  <g transform="translate(0,28)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
    <g class="tick" opacity="1" transform="translate(28,0)">
      <line stroke="currentColor" y2="0" />
      <text fill="currentColor" y="3" dy="0.71em">0</text>
    </g>
    <g class="tick" opacity="1" transform="translate(81,0)">
      <line stroke="currentColor" y2="0" />
      <text fill="currentColor" y="3" dy="0.71em">1</text>
    </g>
    <g class="tick" opacity="1" transform="translate(134,0)">
      <line stroke="currentColor" y2="0" />
      <text fill="currentColor" y="3" dy="0.71em">2</text>
    </g>
    <g class="tick" opacity="1" transform="translate(187,0)">
      <line stroke="currentColor" y2="0" />
      <text fill="currentColor" y="3" dy="0.71em">3</text>
    </g>
    <g class="tick" opacity="1" transform="translate(240,0)">
      <line stroke="currentColor" y2="0" />
      <text fill="currentColor" y="3" dy="0.71em">4</text>
    </g>
    <g class="tick" opacity="1" transform="translate(293,0)">
      <line stroke="currentColor" y2="0" />
      <text fill="currentColor" y="3" dy="0.71em">5</text>
    </g>
    <text x="0" y="-16" fill="currentColor" text-anchor="start" font-weight="bold" class="title">Rating</text>
  </g>
</svg>
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
            <a href="{{book.open_library_url_info_ISBN13}}">{{ book.title | where_exp: "book",  "book.exclusive_shelf == 'read'" }}</a> 
            <a class="post-meta">-</a> 
            <a style='font-style: italic; font-weight: 200; font-size: 12px;' href="{{book.open_library_url_info_ISBN13}}">{{ book.author }}</a> 
            {% assign rating = book.rating %} 
            {% case rating %} 
                {% when '1' %} 
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
            {% assign notes = book.notes %} 
            {% if book.notes contains "/category/book/notes/" %}
                <a class="post-meta" href="{{notes}}"> - notes</a> 
            {%- endif -%}
        </div>
    </li>
    {%- endif -%}
{% endfor %}
</ul>

<br>

---

<br>

<h3>→ Didn't get to the end...</h3>

<ul>
{% for book in site.data.books %}
    {% assign not_finished = book.bookshelves %}
    {%- if not_finished == 'not-finished' -%}
    <li>
        {%- assign date_format = site.minima.date_format | default: "%Y-%m-%d" -%}
        <div>
            <span class="post-meta">{{ book.date_added | where_exp: "book",  "book.bookshelves == 'not-finished'" | date: date_format }} - </span>    
            <a href="{{book.open_library_url_info_ISBN13}}">{{ book.title | where_exp: "book",  "book.bookshelves == 'not-finished'" }}</a> - <a style='font-style: italic; font-weight: 200; font-size: 12px;' href="{{book.open_library_url_info_ISBN13}}">{{ book.author }}</a> 
        </div>
    </li>
    {%- endif -%}
{% endfor %}
</ul>