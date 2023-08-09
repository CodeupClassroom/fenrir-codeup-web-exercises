# Intro to CSS

In this lesson, we will cover three different ways to apply css styles to our web pages.

![HTML and CSS](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fhtml-and-css-relationship.png?alt=media&token=2629698b-861c-41d2-b6f1-f19968eaefdf)

## Element Style Attribute

One of the simplest ways to add style to an HTML element is by using the `style` attribute. This is also the least recommended method, because all the benefits described in the overview do not apply to styles applied in this way. Nonetheless, it is still useful to understand that styles can be applied in this way. Let's look at an example:

```html
<h1 style="color:blue;text-decoration:underline;">Hello, CSS!</h1>
```

In the example above, the `h1` element text will be blue and underlined. For now, do not worry about the style details, just look at the syntax. As you can see, a `style` attribute was added to the `h1` element. The value of the `style` attribute consists of multiple key:value pairs with a colon between the key and the value. Key:value pairs are then separated by semicolons. As you will see, this syntax is used regardless of how the style is included in the page.

## Inline/Embedded Stylesheet

Another method of adding styles to a webpage is via an embedded stylesheet. This can be accomplished by using a `style` element in the `head` of your HTML page. Let's see an example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS Test Page</title>
    <style>
        .fancy-header {
            color: blue;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1 class="fancy-header">I've got style!</h1>
</body>
</html>
```

In the above example, you can see that a `style` tag with some style definitions was included in the `head` of the HTML page. You can also see that a `class` attribute was added to the `h1` element that linked to one of the defined styles. We will discuss more about how this happens in the next lesson. For now, all you have to know is that you can add styles directly to the `head` of an HTML page in this manner. Using styles in this way provides some of the benefits described in the overview, but not all of them.

## External Stylesheet

Finally, another way to add styles to a web page is to link to an external stylesheet. This is the recommended method, and the one that will provide all of the benefits listed in the overview. Let's check out how this is done:

```css
/*
this file is named "site.css" and is in a directory named "css"
*/

.fancy-header {
    color: blue;
    text-decoration: underline;
}
```

```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS Test Page</title>
    <link rel="stylesheet" href="css/site.css">
</head>
<body>
    <h1 class="fancy-header">I've got style!</h1>
</body>
</html>
```

As you can see in the example above, an external stylesheet is added via the `link` element. The `link` element is a void element and therefore has no content or closing tag. A `rel` attribute should be specified with a value of `stylesheet`. An `href` attribute with a value pointing to the stylesheet we're wanting to include also needs to be specified.

Using this method, the `fancy-header` style can be used multiple times in multiple pages. If you want to change what a `fancy-header` looks like, you only need to change it in one place and the update will take place anywhere it is used.

## Comments

Comments in CSS are started with a slash followed by an asterisk (`/*`), and ended with the same in reverse order, (`*/`).

```css
/*
multi
line
comment
*/

.fancy-header {
    color: blue; /* single line comment */
    text-decoration: underline;
}
```

As you can see, the same syntax is used for both single and multi-line comments.

## Exercises

For this exercise, we will continue working with the `welcome.html` file. We will talk about the syntax of css selectors and properties in the next lesson, but for now, use the examples above to complete the exercise.

1. Use a `style` attribute to set the font color of the `h1` element to red.
1. Add a class of "fancy-header" to your h1 element, and create an embedded stylesheet and based on the example above. What color is the `h1` after creating the embedded stylesheet? Remove the `style` attribute from your `h1` and view the page again.
1. Create a directory named `css` in your project. Within this directory, create a file named `style.css`, and include a link to it in your html document.
1. Inside of `style.css`, copy the above css, but change to font color to purple. What color is the `h1` after making this change? Remove your embedded stylesheet and view the page again.
1. What do the above exercises tell you about the precedence of style attributes and embedded and external stylesheets?
1. Remove any style attributes and embedded stylesheets. From this point forward, we will only be working with external stylesheets.
1. Finally, commit the changes to your git repository, and push to GitHub.
