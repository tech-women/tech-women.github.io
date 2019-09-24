---
layout: post
title:  "Creating the Tech Women Norway Logo"
description: "Using the logo code as the logo"
author: trud
categories: [ profile ]
image: assets/images/trud-antzee.jpg
tags: featured
name: Trud Antzée
twitter: Antzee_
---
How it started

I was introduced to Patricia on Twitter when she was looking for someone to make the Tech Women Norway logo. At first, I didn’t consider doing it since I'm not a graphic designer, but then I suddenly got this idea for a design: a woman with code in her hair. I thought it could be a nice metaphor for a tech organisation for women. Because hair is so linked to attractiveness in our culture, it’s associated with time loss, expenses, and worry for many women. I liked the idea of removing these things and replacing them with code, which I associate with knowledge and skills and therefore can be much more empowering.

Since many tech women code, I thought it would be appropriate to actually use code to make the logo. I’ve made art with HTML and CSS previously, so I decided to use that. This is the result, shown on a neutral grey: 

<img src="/assets/images/trud-antzee1.png" alt="">

Tech Women Norway has a strong inclusiveness policy, and Patricia wanted this to be reflected in the logo. So we decided on six different syntax colours so everybody can find one they feel represent them: punk, gay, girly, businesswoman, trans, people of colour… 

<img src="/assets/images/trud-antzee2.png" alt="">

The logo is a cutout, so it can also be added on different backgrounds.

How the logo was made

After deciding on the initial layout together with Patricia, the next step was to find some meaningful code to use in the hair. Somewhere during this process, Patricia sent me a link to a piece of code art that "draws itself”. When I saw that, I immediately knew what to put in the hair: a copy of the CSS code that actually makes the logo! Basically, the logo would be decorated with its own CSS.  

Here’s an overview of the elements that make up the logo:

<img src="/assets/images/trud-antzee3.png" alt="">

The hair silhouette is a PNG which I made in Photoshop Elements. It’s displayed with the CSS `background-image` property. The face is made with CSS. These elements cover the text, but the inside of the PNG is transparent so part of the text layer is visible. 

The CSS is just a few lines of code. This is what I wanted to show inside the hair:

<img src="/assets/images/trud-antzee4.png" alt="">

To do this, I copied all the text from the CSS file into a <p> (paragraph) tag in the HTML file. Next step was to style the text inline.

The CSS line `position: absolute;` would be written like this in the HTML:

`<span style="color:#0bff81">position</span><span style="color:#f3ff37">: </span><span style="color:#fc27ff">absolute</span><span style="color:#f3ff37">;</span>`

This is how it looks like in the browser:

<img src="/assets/images/trud-antzee5.png" alt="">

I did the same for each line of CSS, and made one version for each syntax colour scheme.

Proofreading this took some time, and I'm not sure if there are still errors in the code… But as Patricia said: “Bugs will be bugs”, which is also a point - it definitely adds authenticity to the project!