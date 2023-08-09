# HTML Content Elements

In this section, we will cover the most basic HTML elements that are used to create content on a web page. To put it simply, a content element is used for all of the text, images, links, and other media that is visible to the user.

![HTML Tags](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fhtml-element-diagram.png?alt=media&token=8d295113-4cc7-467b-8a7d-2d1a03be0cf9)

## Paragraphs

The `<p>` element is used to create paragraphs of text. It is a block-level element, which means it takes up the entire width of its container. To create a paragraph, simply enclose your text in `<p>` tags.

~~~html
<p>This is a paragraph of text.</p>
~~~

## Headings

The `<h1>` through `<h6>` elements are used to create headings of different sizes. The `<h1>` element is the largest heading, and the `<h6>` element is the smallest. Headings are block-level elements, which means they take up the entire width of their container. To create a heading, simply enclose your text in `<h1>` through `<h6>` tags.

~~~html
<h1>This is a heading</h1>
<h2>This is a heading</h2>
<h3>This is a heading</h3>
<h4>This is a heading</h4>
<h5>This is a heading</h5>
<h6>This is a heading</h6>
~~~

## Line Breaks

The `<br>` element is used to create a line break. It is an empty element, which means it does not have a closing tag. To create a line break, simply include the `<br>` element in your HTML.

~~~html
<p>This is a paragraph<br>with a line break.</p>
~~~

## Horizontal Rules

The `<hr>` element is used to create a horizontal rule. It is an empty element, which means it does not have a closing tag. To create a horizontal rule, simply include the `<hr>` element in your HTML.

~~~html
<p>This is a paragraph</p>
<hr>
<p>This is another paragraph</p>
~~~

## Strong and Emphasis

The `<strong>` element is used to create strong or bold text. It is an inline element, which means it only takes up the width of its content. To create strong text, simply enclose your text in `<strong>` tags.

~~~html
<p>This is <strong>strong</strong> text.</p>
~~~

The `<em>` element is used to create emphasized or italic text. It is an inline element, which means it only takes up the width of its content. To create emphasized text, simply enclose your text in `<em>` tags.

~~~html
<p>This is <em>emphasized</em> text.</p>
~~~

They can be used together to create both strong and emphasized text.

~~~html
<p>This is <strong><em>strong and emphasized</em></strong> text.</p>
~~~

## Links

The `<a>` element is an inline element used to create links. To create a link, simply enclose your text in `<a>` tags and include the `href` attribute.

~~~html
<a href="https://www.codecademy.com">Codecademy</a>
~~~

The `href` attribute specifies the URL of the page that the link goes to. The text between the opening and closing `<a>` tags is the text that will be displayed as the link.

If you want to create a link that goes to a different page on your website, you can use a relative URL. For example, if you have a page called `about.html` and you want to create a link to that page, you can use the following code:

~~~html
<a href="about.html">About</a>
~~~

The `<a>` element also has a `target` attribute that can be used to specify where the link will open. The default value is `_self`, which means the link will open in the same tab or window. If you want the link to open in a new tab or window, you can use the value `_blank`.

~~~html
<a href="https://www.codecademy.com" target="_blank">Codecademy</a>
~~~

## Images

The `<img>` element is an empty element used to create images. To create an image, simply include the `<img>` element and include the `src` and `alt` attributes. It may be tempting to skip the `alt` attribute, but it is important to include it. The `alt` attribute provides a description of the image for users who are unable to view it.

~~~html
<img src="images/rubber-ducky.jpg" alt="A rubber duck">
~~~

Although an outdated method of controlling the size of images, the `width` and `height` attributes can be used to specify the width and height of an image by assigning the amount of pixels. The `width` and `height` attributes are deprecated in HTML5, so it is recommended to use CSS to control the size of images.

~~~html
<img src="images/rubber-ducky.jpg" alt="A rubber duck" width="100" height="100">
~~~

## Lists

There are two types of lists in HTML: ordered and unordered. Ordered lists are used to create numbered lists, and unordered lists are used to create bulleted lists.

To create an ordered list, use the `<ol>` element, and enclose each list item in `<li>` tags. 

~~~html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
~~~

To create an unordered list, use the `<ul>` element, and enclose each list item in `<li>` tags.

~~~html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
~~~

## Tables

Tables often have a negative connotation in web development. In the past, they were used to create the layout of a web page. Some developers may still have nightmares from the days of nested tables to replicate modular designs. Thankfully, this is no longer the case! Today, tables are still useful for their intended purpose: displaying tabular data, such as a list of products or a schedule of events.

To create a table, use the `<table>` element. The `<table>` element contains one or more `<tr>` elements, which represent table rows. Each `<tr>` element contains one or more `<td>` elements, which represent table cells. The `<td>` elements contain the actual data that will be displayed in the table.

```html
<table>
  <tr>
    <td>First cell</td>
    <td>Second cell</td>
    <td>Third cell</td>
  </tr>
  <tr>
    <td>First cell</td>
    <td>Second cell</td>
    <td>Third cell</td>
  </tr>
  <tr>
    <td>First cell</td>
    <td>Second cell</td>
    <td>Third cell</td>
  </tr>
</table>
```

This will create a basic table with three rows and three columns. However, it is not very useful without any headings. To create a table with headings, use the `<thead>` element. The `<thead>` element contains one or more `<tr>` elements, which represent table rows. Each `<tr>` element contains one or more `<th>` elements, which represent table headings. The `<th>` elements contain the headings for each column in the table.

```html
<table>
  <thead>
    <tr>
      <th>First heading</th>
      <th>Second heading</th>
      <th>Third heading</th>
    </tr>
  </thead>
  <tr>
    <td>First cell</td>
    <td>Second cell</td>
    <td>Third cell</td>
  </tr>
  <tr>
    <td>First cell</td>
    <td>Second cell</td>
    <td>Third cell</td>
  </tr>
  <tr>
    <td>First cell</td>
    <td>Second cell</td>
    <td>Third cell</td>
  </tr>
</table>
```

This will create a table with headings for each column. Tables can also have some division between the head and body with the `<thead>` and `<tbody>` elements.

```html
<table>
  <thead>
    <tr>
      <th>First heading</th>
      <th>Second heading</th>
      <th>Third heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>First cell</td>
      <td>Second cell</td>
      <td>Third cell</td>
    </tr>
    <tr>
      <td>First cell</td>
      <td>Second cell</td>
      <td>Third cell</td>
    </tr>
    <tr>
      <td>First cell</td>
      <td>Second cell</td>
      <td>Third cell</td>
    </tr>
  </tbody>
</table>
```

There are more elements that can be used to create more complex tables, but this is beyond the scope of this lesson. For more information, check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table).

## Exercises

For this exercise, we will building on the `welcome.html` file from the previous exercise. We will be creating a landing page for the fictional company Veridian Dynamics.

![Veridian Dynamics mockup](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fwelcome-html-content.png?alt=media&token=ddaec48a-d4b3-46fb-badf-567114f67537)

Recreate the [this image](https://java.codeup.com/examples/html/welcome.png) with HTML, focusing only in the HTML elements necessary to have a good structure.

Specifications:

- Make sure the text in the tag line below the heading at the top is properly bolded and italicized.
- The pricing plan at the bottom is a table.
- The link at the bottom of the page should take you to the top of the page when clicked.
- Use semantic elements for the layout.

You can obtain free stock photos to work with from [pexels](https://www.pexels.com).