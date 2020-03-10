---
layout: post
title:  "Darktable Workflow"
date:   2019-11-20 
categories: writing
---

![](/assets/photos/photo_workflow.jpg){:class="img-responsive"}

<br>


I switched from Lightroom to Darktable mid-2019 after changing my laptop (I didn't wanted to crack Lightroom again on it). It's free, open source, handles RAW and incredibly powerful with a great community around. 
(*I especially recommand [Bruce Williams Tutorials](https://www.youtube.com/watch?v=acMMl8duB-E&list=PL1yg3CQSIcvENs2oN0-4Huna0BGB0OIrY&index=2&t=0s)*)
<br>
This document aims to reflect upon my previous Lightroom workflow and how I can adapt it to Darktable. → Living document ahead!

#### **Lightroom Workflow (+tips & tricks)**

1. **Import**
- Copy as DNG (thanks Maxou ;)
- Add keywords (year, month, people, place, event_name...)
<br>

2. **Selection**
- In the import folder:
- Quick review to delete the undesirable --> Hide the panel cmd ( US: shift-tab) + Dim the light (press L two times) + 'Loupe view' (E)
- Flag the rejected photo by pressing X (black flag in the top left corner)
- For similar photo you want to compare side by side press C or 'survey view' N, press P to flag them as pick and come back to it later (white flag in the top left corner)
- Press G to return to 'grid view', L for lights on, cmd+backspace to delete the rejected photo 
<br>

3. **Collections**
- Organization
	- Year
		- Month
			- Event_Name
- For each Event_Name :
	- Create 2 smart folder:
		- WIP: flag + main keyword of the event
			- Editing
			- Rating
		- Final: flag + main keyword of the event 
<br>

4. **Export** *(→ to improve)*
- to flick / 500px
- to folder \year\month\event_name


```
Useful Shortcuts:
- Import = Ctrl-Shift-I
- Add keywords = Ctrl-K (puts cursor in the box so you may begin typing)
- Hide Panels and Filmstrip = Shift-Tab
- Cycle screen between dim, off, and on = L (light)
- Cycle view between thumbnail, fit to screen, and 1:1 = Enter
- Reject = X
- Pick = P
- Remove all flags = U
- Compare View = C
- Survey View = N
- Rate = 1-5
- Delete rejected photos = Ctrl-Backspace
- Rate = 1-5 number keys
- Create new collection = Ctrl-N
- Auto-Tone = Cmd+U
- Reset any adjustment slider = double-click on its label.
- Crop = R
- Rotate Crop Aspect Ratio = X
- Constrain Crop Aspect Ratio = A
- Spot Removal = Q
- Adjustment Brush = K
- Paste Settings from Previous = Ctrl-Alt-V
- Copy settings = Cmd+C
- Paste settings = Cmd+V
- Zoom = space 
```

<br>

## Darktable Workflow 
##### ([→ shortcuts lists](https://www.darktable.org/usermanual/en/shortcuts.html))

1. **Import**
- When importing from Canon 7D, it automatically creates a file under `Pictures > DarkTable > Date of the import`
- Once in Darktable, .xmp files are created
- Name the `film roll` otherwiser it just appears with `date_noname (#)`

2. **Selection**
- Which images do I want to reject ?
	- Control + mousewill to make images bigger 
    - Or → custom zoom: `e` for bigger / `g` for smaller (→ grid)
    - `Tab` to remove menus
    - `f` to get full screen    
	- ‘r’ to reject photos
    - Rate `1` to `5` for easier selection 
    - Tagging: name of the person + place 
    - When selected for print, use tag `to_print`



###### _Last update: 20.11.2019_