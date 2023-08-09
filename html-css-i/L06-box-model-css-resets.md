# CSS Box Model and CSS Resets

Every element in an HTML document is represented as a rectangular box. The box model describes a boxes size and how it will interact with other boxes in the document. Several CSS properties come into play when examining the box for a particular element. There are content width and height, padding, border, and margin, and we will be discussing each of these properties in this lesson.

For more information on anything we cover here, look no further than the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model) or [CSS-Tricks](http://css-tricks.com/the-css-box-model/).

![Box Model](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fcontent-box.jpg?alt=media&token=9f9c65cd-a520-4a54-b465-98699ff18e65)

## Content Area Width and Height

The content area is the innermost part of the box for a particular element. It is governed by the `width` and `height` properties of the element.

### width

> The `width` CSS property specifies the width of the content area of an element. [More Info](https://developer.mozilla.org/en-US/docs/Web/CSS/width).

```css
element { width: 200px; }
```

### height

> The `height` CSS property specifies the height of the content area of an element. [More Info](https://developer.mozilla.org/en-US/docs/Web/CSS/height).

```css
element { height: 200px; }
```

## Padding

Padding is the space between the edge of the content area and the border.

> The `padding` CSS property sets the required padding space on all sides of an element. The `padding` property is a shorthand to avoid setting each side separately (`padding-top`, `padding-right`, `padding-bottom`, `padding-left`). [More Info](https://developer.mozilla.org/en-US/docs/Web/CSS/padding).

```css
padding: 10px;              /* on all sides 10px padding */

padding: 10px 20px;         /*  top and bottom 10px padding  */
                            /*  left and right 20px padding  */

padding: 1px 3px 30px 5px;  /*  top    1px  padding  */
                            /*  right  3px  padding  */
                            /*  bottom 30px padding  */
                            /*  left   5px  padding  */
```

## Border

Border is the area between the edge of the padding and the margin.

> The `border` CSS property is a shorthand property for setting the individual border property values in a single place in the style sheet. `border` can be used to set the values for the following keys: `border-width`, `border-style`, and `border-color`. [More Info](https://developer.mozilla.org/en-US/docs/Web/CSS/border)

```css
element { border: 1px solid black } /* solid, black border of 1px thickness */
```

## Margin

Margin is the area outside of the border. The margin is not used to calculate the overall size of an element but instead affects the other content around the box.

> The `margin` CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties: `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`. [More Info](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)

```css
margin: 10px;              /* all sides 10px margin */

margin: 5px 20px;          /* top and bottom 5px, left and right 20px margin */

margin: 10px 3px 30px 5px; /* top 10px, right 3px, bottom 30px, left 5px margin */
```

## Overall Size

The overall size for the box of an element is calculated as follows:

```css
height = height + padding-top + padding-bottom + border-top + border-bottom

width = width + padding-left + padding-right + border-left + border-right
```

## Divs and Spans

When building a web page, sometimes it is helpful to place content in a container without any semantic meaning for the purpose of applying styles. This is where `div` and `span` elements come into play.

### Div

> The HTML `<div>` element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the `class` or `id` attributes) or because they share attribute values, such as `lang`. It should be used only when no other semantic element (such as `<article>` or `<nav>`) is appropriate. [More Info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)

```html
<div>
    <p>Any kind of content here.</p>
</div>
```

### Span

> The HTML `<span>` element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the `class` or `id` attributes) or because they share attribute values, such as `lang`. It should be used only when no other semantic element is appropriate. `<span>` is very much like a `<div>` element, but `<div>` is a block-level element whereas a `<span>` is an inline element. [More Info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)

```html
<p><span>Some text</span></p>
```

## CSS Resets

> A CSS reset (or “normalizer”) is a short, often compressed (minified) set of CSS rules that resets the styling of all HTML elements to a consistent baseline. This ensures that the styling of all elements is as similar as possible across all browsers and users’ default stylings. [More Info](https://css-tricks.com/reboot-resets-reasoning/)

### Why do we need a CSS Reset?

- Browsers have default styles for HTML elements that are not consistent across browsers, versions and devices.
- Developers often find that the default styles from these browsers are not what they want for their project.
- It can be time consuming to override the default styles for each element every time a new project is started.

![CSS Resets](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fcss-resets.png?alt=media&token=3ca59e26-a776-42cd-ae0c-75e8f4149fe6)


## Exercises

CSS Resets are a crucial part of a frontend developer's tool belt. Much like a utils.js file, the declarations a developer chooses to have in their resets can often be more preferential than universal. Today, let's start building our own with some essentials.

1. Create a intro-to-resets.html file in your repo.

2. In a folder named css, add a file named `resets.css`

3. Add the stylesheet link for `resets.css` to your html file. We will be using this css file often in the future.

4. Open `intro-to-resets.html` in the browser and inspect the box model of the body. Notice it comes with margin/padding.

5. Let's go ahead and add a declaration in resets.css that removes margin and padding from ALL elements:

```css
* {
    margin: 0;
    padding: 0;
}
```

6. In a folder named `images`, add [this image](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/cody-parade.jpeg?alt=media&token=f7e9202c-3061-4047-b4d7-68e397d59b10)

7. Add an `<img />` element inside the body of your html file with `images/cody-parade.jpeg` as its source (Don't forget to add an alt attribute)
> **Note:** Notice how the image is enormous? It should cause your browser to require scrollbars to see the entire image. We never want images to take up more space than their parents allow.

8. Add a CSS declaration in `resets.css` that would apply to ALL images. Add properties that change the display of images to block, and prevents them from growing wider than the width of their parent.
> **Hint:** You can use the `max-width` property to prevent an image from growing wider than its parent.

9. Add the following element to your html file inside the body: `<div style="width:100%; padding: 20px;">I'm an element that pushes the width of the viewport unintentionally</div>`
> **Note:** Notice this element is pushing the viewport width and brings back the scrollbar. We don't want padding to be calculated in the overall width of our elements.

10. Add a CSS declaration in `resets.css` that would apply to ALL elements. Add a property that changes the way an element's size is calculated. It should prevent padding from making any element wider than 100% width.
> **Hint:** You can use the `box-sizing` property to change the way an element's size is calculated.

11. Research more CSS resets from other developers online, and be prepared to share them in class. Here is a fantastic resource to get you started: https://www.joshwcomeau.com/css/custom-css-reset/