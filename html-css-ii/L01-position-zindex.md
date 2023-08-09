# CSS Positioning and Z-Index

We've learned how flex-box can be used in powerful ways to position elements on the page in a very structured manner. However, there are times when flex-box is not the best solution. In this lesson, we will learn about the `position` property and the `z-index` property. These properties can be used to position elements in wildly creative ways -- allowing developers to achieve design requirements that would otherwise seem impossible.

## The Z-Axis in CSS

First, let's make sure we have a solid understanding of how the z-axis is implemented within the context of CSS. You may know that the x-axis is the horizontal axis, and the y-axis is the vertical axis. The z-axis, however, is the third dimension in space. It is perpendicular to the x-axis and the y-axis, and is used to describe the distance from the viewer to the object. There are some differences, however, between the z-axis in CSS and the z-axis in real life to consider.

First, the z-axis in CSS is not a true 3D axis. It is a virtual axis that is used to describe the order in which elements are rendered on the page. So an element that is located higher on the z-axis will be rendered on top of an element that is located lower on the z-axis, but neither element's size will appear to change.

![Z-Axis Illustration](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/graphical-z-index.gif?alt=media&token=8c56269f-3a21-49f8-95dc-67d858039d17)

!!! note Remember!
    An element's size is not affected by its z-axis value. The only thing that changes is the order in which elements are rendered on the page.
!!!

Second, and often the most troublesome for beginners, is the behavior of inheritance that occurs when an element is given a value on the z-axis with the `z-index` property. If an element has a `z-index` value, all of its children will inherit that value. This means that if you have a parent element with a `z-index` value of 1, and a child element with a `z-index` value of 2, the actual z-axis value of the child could be interpreted as `1.2`.

![Z-Index Meme](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fzindex-meme.webp?alt=media&token=4234f0e4-1be8-4a89-9b01-85fd497368c8)

We will cover the `z-index` property in more detail later in this lesson, but for now, let's focus on the `position` property.

## Positioning Elements

The default positioning for elements is referred to as `static`. This just means that the element will be rendered in order with the normal flow of the document. When elements that have a `position` property set to something other than `static`, they are pulled onto the z-axis and can be **relatively positioned** with the `top`, `left`, `bottom`, and `right` properties. Relative to what, you may ask? That will depend on the value of the `position` property.

!!! note "Default Z-Axis Values"
    If an element that is assigned a `position` property other than `static` is pulled onto the z-axis, does it have a default `z-index` value? The answer is no. It will appear over top of any elements that are statically positioned, but without a `z-index` value, it will otherwise defer to the normal flow of the document.
!!!

### Top / Left / Bottom / Right

The `top`, `left`, `bottom`, and `right` properties can be assigned values to describe how far away from the corresponding position the box for the target element will be displayed. These properties will have no impact on an element with the default `position:static`, but we will be using them in the sections below.

### Relative Positioning

By assigning the property value `position:relative` to an element, you enable the `top`, `left`, `bottom`, `right` properties. When used with a relatively positioned element, these properties will shift the element from its normal position by the amount specified. Let's see an example:

```html
<!DOCTYPE html>
<html>
<head>
<title>Relative Positioning</title>
    <style>
        #container {
            margin: 50px auto;
            width: 500px;
            height: 200px;
            border: 1px solid #000;
        }
        .box {
            background-color: #1969B2;
            height: 100px;
            width: 100px;
            position: relative;
            top: 10px;
            right: -10px;
        }
    </style>
</head>
<body>
    <div id="container">
        <div class="box"></div>
    </div>
</body>
</html>
```

In the example above, we have a 500x200px container `div` with a relatively positioned 100x100px `div` (box). The box has properties `top:10px` and `right:-10px`. These will cause the box to shift down by 10px and to the left by -10px as seen in the image below.

![Relative Positioning](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/absolute-example-1.png?alt=media&token=43000abb-065e-4b1e-a2d9-785823f90482)

### Absolute Positioning

Another type of positioning is `absolute`. Once again, by assigning the property value `position:absolute` to an element, you enable the `top`, `left`, `bottom`, `right` properties, however, the properties work differently in this case.

**An absolutely positioned element will look for the FIRST parent element that is NOT statically positioned and will position itself relative to that element.** The `top`, `left`, `bottom`, `right` property values will be relative to that parent. If the absolutely positioned element is not in a relatively positioned container, it will continue crawling up the DOM until it either finds one, or it reaches the `body` tag. If it reaches the `body` tag, it will position itself relative to the browser window.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Absolute Positioning</title>
    <style>
    #container {
        margin: 50px auto;
        width: 500px;
        height: 200px;
        border: 1px solid #000;
        position: relative;
    }
    .box {
        background-color: #1969B2;
        height: 100px;
        width: 100px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
    </style>
</head>
<body>
    <div id="container">
        <div class="box"></div>
    </div>
</body>
</html>
```

Most of the code from the previous example was reused here. Note that the container now has `position:relative` and the box has `position:absolute`. The `top:10px` and `right:10px` now place the box 10px away from the top right corner of the container as seen in the image below.

![Absolute Positioning](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/absolute-example-2.png?alt=media&token=54e77f2a-b085-438b-90b1-ae258379dee2)

### Fixed Positioning

One more type of positioning to discuss is `fixed` positioning. Have you ever seen page elements that do not move even when the page is scrolled? These elements have `position:fixed` applied, which causes them to be positioned relative to the browser window.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Fixed Positioning</title>
    <style>
        #container {
            margin: 50px auto;
            width: 500px;
            height: 2000px;
            border: 1px solid #000;
        }
        .box {
            background-color: #1969B2;
            height: 100px;
            width: 100px;
            position: fixed;
            top: 10px;
            right: 10px;
        }
    </style>
</head>
<body>
<div id="container">
    <div class="box"></div>
</div>
</body>
</html>
```

Again, much of the example code is the same. The `position` property has been removed from the container and the box now has `position:fixed`. The `top:10px` and `right:10px` now place the box 10px away from the top right corner of the browser. The container height has also been increased to allow for scrolling and to show that the box do not move even when the page is scrolled.

## Exercises

You are a front-end developer that has been tasked with the login page for a new website. The design team is a big fan of absolutely positioned svg elements and they play a big part of the background of the website. Your job is to recreate the design as closely as possible.

![Absolute Positioning Mockup](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fabsolute-positioning-mockup.png?alt=media&token=e7f4a175-0c4e-430b-89b7-55b5a7cf39ff)

1. Download the starter files for this exercise [here](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fcodeup-positioning-exercise.zip?alt=media&token=0492ea3d-dc25-4a30-b775-50a0425e4189). It already includes HTML and CSS for the login form, you only have to focus on the absolutely positioned elements.

1. **OPTIONAL**: Download the Figma file [here](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fpositioning-exercise.fig?alt=media&token=ee87dd62-1061-4bb8-b812-5976f2c03672).

1. **Requirements:**
    - The page must be responsive.
    - The design must be recreated as closely as possible to the mockup.
    - The svg's must all be positioned on the page as their own elements.
    - Be mindful of the z-index of the elements. The background svg's should be behind the login form, and the cancel button should be above it.