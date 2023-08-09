# Mastering the Flex Model

## The Flexbox Architecture

The flexbox model is a layout model that allows you to create complex layouts with ease. It's a powerful tool that can be used to create a wide variety of layouts, from simple to complex. It's also a very intuitive model, and is easy to learn.

![Flexbox Diagram](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/flexbox-architecture.png?alt=media&token=a801f197-b67e-4b3e-ac03-5c1cb9619176)
<!-- Show flexbox image in ./images/flexbox-architecture.png -->


## Flexbox Parent Properties

The flexbox model, like most of HTML/CSS, is built on the concept of a parent and child relationship. When the parent element is given the `display: flex` property, it becomes a flexbox container. It then has access to additional flex properties that allow it to control the layout of its children.

```css
.flex-parent {
    display: flex;
    /* Now has access to additional flex parent properties */
}
```

### Flex Direction

By default, flexbox containers organize their children horizontally. This is called the "row" direction. You can change this behavior by setting the `flex-direction` property to `column`. This will cause the children to be stacked vertically. You can also set the `flex-direction` property to `row-reverse` or `column-reverse` to reverse the direction of the children.

```css
.flex-parent {
    display: flex;
    flex-direction: column; /* Stacks children vertically */
}
```

### Justify Content

The `justify-content` property allows you to control the alignment of the children along the main axis. The main axis is the axis that the children are aligned along. For a row, this is the horizontal axis. For a column, this is the vertical axis. The `justify-content` property can be set to `start`, `end`, `center`, `space-between`, or `space-around`. These values will align the children to the start, end, center, or evenly spaced between the start and end of the container.

```css
.flex-parent {
    display: flex;
    justify-content: center; /* Aligns children to the center of the container along the main axis */
}
```

![Flex Direction](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fflex-direction.png?alt=media&token=5184b00c-34ca-4141-85d6-821c4eaaa26c)

### Align Items

The `align-items` property allows you to control the alignment of the children along the cross axis. The cross axis is the axis that the children are aligned perpendicular to. For a row, this is the vertical axis. For a column, this is the horizontal axis. The `align-items` property can be set to `start`, `end`, `center`, `stretch`, or `baseline`. These values will align the children to the start, end, center, or evenly spaced between the start and end of the container.

```css
.flex-parent {
    display: flex;
    align-items: center; /* Aligns children to the center of the container along the cross axis */
}
```

> **Is it `justify-content` or `align-items`?!** Be mindful about the `flex-direction` of the parent element. It's a common mistake to think that `justify-content` will always align children on a horizontal axis and `align-items` will always align children on a vertical axis. This can often cause confusion when dealing with flex parent elements that are `flex-direction: column`, instead of `flex-direction: row`. The `justify-content` property controls the alignment of the children along the **main axis**. The `align-items` property controls the alignment of the children along the **cross axis**. The main axis is the axis that the children are aligned along. For a row, this is the horizontal axis. For a column, this is the vertical axis.

### Gaps

The `gap` property allows you to add space between the children of a flexbox container. This property can be set to a single value, which will add space between the children in both the main and cross axis. It can also be set to two values, which will add space between the children in the main axis and the cross axis respectively.

```css
.flex-parent {
    display: flex;
    gap: 10px; /* Adds 10px of space between the children in both the main and cross axis */
}
```

```css
.flex-parent {
    display: flex;
    gap: 10px 20px; /* Adds 10px of space between the children in the main axis and 20px of space between the children in the cross axis */
}
```

## Flexbox Child Properties

The flexbox model also allows you to control the layout of individual children. These properties are set on the children themselves.

### Flex Grow, Shrink, and Basis

The `flex-grow`, `flex-shrink`, and `flex-basis` properties allow you to control the size of the children. The `flex-grow` property controls how much the child will grow relative to its siblings. 

```css
.flex-child {
    flex-grow: 1; /* This child will grow to fill the available space */
}
```

The `flex-shrink` property controls how much the child will shrink relative to its siblings.

```css
.flex-child {
    flex-shrink: 1; /* This child will shrink. */
}
```

The `flex-basis` property controls the initial size of the child. These properties can be set to any number, but are usually set to 0, 1, or auto. When it comes to children who are set to shrink, the `flex-basis` can prevent the child from shrinking below its initial size by setting it to auto.

```css
.flex-child {
    flex-shrink: 1; /* This child will shrink. */
    flex-basis: auto; /* But will not shrink below its initial size. */
}
```

For children that are set to grow, the `flex-basis` is normally set to 0.

```css
.flex-child {
    flex-grow: 1; /* This child will grow to fill the available space. */
    flex-basis: 0; /* But will start to grow from 0px */
}
```
> **Note:** Why do we set the `flex-basis` to 0 when we want the child to grow? The `flex-basis` property is the initial size of the child. If we set it to 0, the child will start at 0px and grow to fill the available space. If we set it to auto, the child will start at its smallest size and grow to fill the available space. This means that if it held a large amount of text, it's inital size would be very large, and it wouldn't properly share the available space with its siblings.

A better way of setting these three properties is with the `flex` property. The `flex` property is a shorthand for the `flex-grow`, `flex-shrink`, and `flex-basis` properties. The first value given to the `flex` property will be the `flex-grow` value, the second value will be the `flex-shrink` value, and the third value will be the `flex-basis` value.

```css
.flex-child {
    flex: 1 0 0; /* This child will grow to fill the available space. */
}
```
```css
.flex-child {
    flex: 0 1 auto; /* This child will shrink to its smallest size, depending on the content within it. */
}
```

### Align Self

The `align-self` property allows you to control the alignment of a single child along the cross axis. The cross axis is the axis that the children are aligned perpendicular to. For a row, this is the vertical axis. For a column, this is the horizontal axis. The `align-self` property can be set to `start`, `end`, `center`, `stretch`, or `baseline`. These values will align the child to the start, end, center, or evenly spaced between the start and end of the container.

### Justify Self

The `justify-self` property allows you to control the alignment of a single child along the main axis. The main axis is the axis that the children are aligned along. For a row, this is the horizontal axis. For a column, this is the vertical axis. The `justify-self` property can be set to `start`, `end`, `center`, `stretch`, or `baseline`. These values will align the child to the start, end, center, or evenly spaced between the start and end of the container.

It is important to note that the `align-self` and `justify-self` properties will override the `align-items` and `justify-content` properties on the parent.

### Order

The `order` property allows you to control the order of the children. By default, the children are ordered in the order that they appear in the HTML. The `order` property can be set to any number, and will cause the child to be ordered in the order that the number is set to. The children with the lowest `order` value will be ordered first, and the children with the highest `order` value will be ordered last.

## Extra Resources

- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN Guide for Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Flexbox Froggy game](https://flexboxfroggy.com/)
- [Flexbox Zombies game](https://geddski.teachable.com/p/flexbox-zombies)
- [Flexbox Cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
- [Additional Flexbox Cheatsheet](http://flexbox.malven.co/)

## Exercises

1. Using this [Flexbox Trainer](https://jreich5-flexbox-trainer.glitch.me/), complete several basic problems, then complete several challenge problems. Use this as a resource to return to for practicing your flexbox skills!
1. In this exercise we will edit existing CSS to match a wireframe for a card component. Please complete the following steps: 
    1. Create an HTML file called ```flexbox-fundamentals-exercise.html``` and copy and paste the following code in it:

        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Flexbox Fundamentals Exercise</title>
        </head>
        <body>
            <header class="container">
                <h1>Flexbox Fundamentals Exercise</h1>
            </header>
            <main class="container">
                <article class="card">
                    <section>
                        <div class="border green-box"></div>
                        <div class="border green-box"></div>
                        <div class="border green-box"></div>
                        <div class="border green-box"></div>
                    </section>
                    <h2>This is a Card!</h2>
                    <section>
                        <div class="border purple-box"></div>
                        <div class="border purple-box"></div>
                        <div class="border purple-box"></div>
                    </section>
                    <div class="border blue-box"></div>
                    <section>
                        <h3>A Smaller Heading!</h3>
                        <div class="orange-circle"></div>
                        <div class="orange-circle"></div>
                    </section>
                    <section>
                        <div class="border large-brown-box"></div>
                        <div class="border large-brown-box"></div>
                        <div class="border large-brown-box"></div>
                    </section>
                    <section>
                        <div class="border yellow-box"></div>
                        <div class="border yellow-box"></div>
                        <div class="border yellow-box"></div>
                    </section>
                    <section>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                        <div class="border grey-box"></div>
                    </section>
                </article>
            </main>
        </body>
        </html>
        ```

    1. Download [flexbox-fundamentals-exercise.css](/examples/css/flexbox/flexbox-fundamentals-exercise.css) into your ```css``` directory and link it to ```flexbox-fundamentals-exercise.html```.
    1. In ```flexbox-fundamentals-exercise.css```, you will see multiple comments prompting for additional declarations. Add all CSS needed to make the final output match the following image:
    
    ![Card Exercise](/examples/css/flexbox/card-exercise.png)
    
    You will not need to edit any existing HTML except for linking to the stylesheet.
1. Finally, commit the changes to your git repository, and push to GitHub.


### Bonuses

Redo the card exercise above without any preexisting code and build it from scratch!