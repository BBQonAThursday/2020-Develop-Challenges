---
title: March
description: Business landing page that focuses on unique stylings and responsive layout shifts.
descIntro: INTO Architecture.
date: 2020-03-01
layout: layouts/march
---

<h1 class="h1">{{title}}</h1>

[Link to project](https://www.behance.net/gallery/33985094/INTO-architecture-office)
[Photo by Lance Anderson on Unsplash](https://unsplash.com/photos/QdAAasrZhdk)
[Photo by Joel Filipe on Unsplash](https://unsplash.com/photos/RFDP7_80v5A)
[Photo by Joel Filipe on Unsplash](https://unsplash.com/photos/g8OgQYKT9e4)

## MARCH!!! CORONA SEASON!!!

March 2020 has been a crazy month. When I started this project, everything was good around the world. Now that I'm finishing this project up, I've been working from home since March 18th and will most likely still be working from home when I finish the april project.

This month was tough all around, but the reason I'm writing is for this months project, and this one was a difficult. It's clearly the largest page I've built so far and possibly the most challenging design as well. That is one of the reasons I picked this page to build.

Here were some of the initial goals I had for this project:

- don't build another carousel
- Build a responsive layout
- add in some spicy javascript

While I can say I hit all of these targets, I was really hoping to build in some parallax scrolling elements that are featured in the original. I did add a parallax mixin to the mixins.scss module so its ready for next time.

### Don't add a carousel

I could have. But I didn't. done.

### Build a responsive layout

I barely finished this part. But I did it. Or at least I did an okay attempt at it. I finished the styling around 9pm on march 31st, right before writing this. I think I really need to focus on developing mobile styles as I build out components the first time. I think that would make the responsive styles seem less of an after thought and I could spend more time designing how they flow better.

I do think there is more to be explored with Grid and flex-box to make my componenets 'flex' better intrinsically. That will probably be a focus for next month. I have been thinking about how to best create utility classes and styles sheets that make implementing resuable styles easier and quicker.  Ideally, I'd love to define styles and utility classes that would do things like create a full-bleed container, or set up a fluid type system. I think longer pages like these would be much easier to develop. side thought: CSS custom properties would be a great implementation here.

An example of using grid over flexbox for responsiveness: After initially setting up the welcome-in section as flexbox, I changed it over to grid once I setup the responsive styles. I found that grid was a was better at flowing that particular section while maintaining the dimensions of the accented border box. Simply setting the grid template columns and modifying based on breakpoint. I mentioned easier intrinsic responsiveness above. This turned out to be an effective implementation of this idea.

Overall, developing the responsive styles wasn't that time consuming, but I think I could have started better and it would have saved me time. This larger page shows how much development time goes into more complex styling and having a better, defined methodology would save me time.

### Spicy Javascript

There's some fancy JS up in here!! I promise.

It may be hard to notice, but the javascript I wrote loops through the articles, checks to see if they aren't featured articles and then sets the normal articles to be the same height via getting the tallest article element on the page.

When creating this section, I had some interesting ideas about dynamically building this section off of data. This could handle more than 3 articles or less, and trigger new ways of displaying.


## Final thoughts

I think this page may have been a bit large to dev out in the way I would have liked. I didn't get much time to work on anything fancy. It felt like what I've been doing at work for the past few months and this felt tedious. Going forward, I want to focus on smaller projects that I can get into the details more with and really examine some of the finer points of CSS and Javascript. 

The design I picked is really interesting and I did enjoy some of the more challenging aspects of the markup and styling. For instance, the partial gradients was a cool effect I got to play with. They combine quite well with making different page components seem grouped. 

I'm quite happy with the javascript aspect I worked in here. I think I can find instances in future projects where setting the height of all elements in a collection based on the tallest will be helpful, but this was a good javascript opportunity to work with arrays. Honestly, I probably could have done this with CSS, but I enjoyed the challenge. 

More to come tomorrow with the April project. I think I'm going to try and do a Day 1 overview and mapping of the month so I have some more structure going forward. 

Note to self: I added a border around the project container so that it is more encapsulated. This was useful for the March project as the origin design ended and seemed to bleed into my write up. I think I may need to re-evaluate this in the future.

