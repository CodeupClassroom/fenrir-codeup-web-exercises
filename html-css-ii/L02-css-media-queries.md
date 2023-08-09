# Media Queries

## Responsive Web Design

> Responsive web design (RWD) is an approach to web design aimed at crafting sites to provide an optimal viewing experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices (from desktop computer monitors to mobile phones).
> <footer><cite>[Wikipedia](http://en.wikipedia.org/wiki/Responsive_web_design)

### How did we get here?

Although most elements are *responsive* by default (think block elements spanning the width of their parent automatically), in the past most sites were built to be static. They had a very specific width, usually `960px`, and only grew vertically with content. Later, small improvements were made with the use of an *elastic* or *flexible* layout, where percentages, ems, etc. were being used to take advantage of larger desktop screens.

Over time though, as more mobile devices and capabilities improved (e.g. introduction of "smart phones"), websites needed to become much more flexible. In May of 2010, Ethan Marcotte coined the term *Responsive Web Design* in A List Apart article. From that point on, responsive design gained traction and became a standard amongst the web design industry.

There are [many good examples](http://mediaqueri.es) of how Responsive Design can optimize both layout and structure of a page depending on the user's screen size.

## Setting the Viewport

One of the first things you need to do is set the viewport. The viewport meta tag instructs the page to match the screen's width. This allows the page to match different screen sizes, whether rendered on a small mobile phone or a large desktop monitor. Do not use this tag if you are not planning on making your page responsive.

```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- ... -->
</head>
```

## Media Queries

Media queries are generally perceived as the most important tool in your belt when it comes to building a responsive web site. They allow you to target CSS based on the pixel width of the viewable area and make changes based on those dimensions.

```css
/* screen sizes 500px and up */
@media screen and (min-width:500px) {
    selector {
        property: value;
    }
}
```

```css
/* screen sizes between 960px and 1200px */
@media screen and (min-width:960px) and (max-width:1200px) {
    /* ... */
}
```

### Breakpoints

*Breakpoints* are what we refer to as major resolution changes, which you specify with media queries, usually based on popular device configurations. They are called breakpoints because traditionally major layout elements are broken and repositioned, though not always the case, and the name stuck.

You can determine whatever breakpoint px size you want, but you can find plenty of resources online to find the most frequently used breakpoints.

```css
/* Small devices (phones and pocket devices, 576 and up) */
@media screen and (min-width:576px) { /* ... */ }

/* Medium devices (tablets, 768px and up) */
@media screen and (min-width:768px) { /* ... */ }

/* Large devices (desktops, 992px and up) */
@media screen and (min-width:992px) { /* ... */ }

/* Extra large devices (large desktops, 1200px and up) */
@media screen and (min-width:1200px) { /* ... */ }
```

## Mobile First Approach

A mobile first approach to writing CSS means writing your default styling for a mobile device, then using media queries to change the layout based on larger devices. This approach works well because you will always support mobile and can build up from there. Working larger first usually introduces complications trying to break a design down to fit.

The breakpoints listed above fit this model. You can see there is no 
breakpoint for anything under `576px`. The default CSS applies. Then as 
the resolution grows, the breakpoints kick in.

## Further Reading

- [A pixel is not a pixel](https://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html)
- [Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
- [`@media` rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
- [CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)


## Exercises

!!! info Pair Programming Exercise
This is our first [pair programming](https://java.codeup.com/appendix/pair-programming/) exercise, your instructors will give you a description of what it is and expectations.
!!!

1. Download [this html page](https://java.codeup.com/examples/css/media-queries.html) and save it as media-queries.html. We are using placeholder to generate a random image for each page.
1. Create a css file named media-queries.css, and link it to your html file.
1. Add a meta tag to set the viewport.
1. Add the modern layout container elements and `layout.css` that we have been using in previous lessons.
1. Test your results by resizing your browser window, or using chrome's [mobile device emulation](https://developer.chrome.com/docs/devtools/).
1. Finally, commit the changes to your git repository, and push to GitHub.

### Wireframes
- [Mobile Layout](https://java.codeup.com/examples/css/mobile-layout.png)
- [Desktop Layout](https://java.codeup.com/examples/css/desktop-layout.png)

### Bonus

- Add html and css to the div with the id of social-media-links to create icons that link to various social media platforms.