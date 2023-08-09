# HTML Container Elements

In this section, we will cover container elements in HTML, which are used to structure and organize content on a web page. Let's start with a few basic, non-semantically named elements.

## Non-Semantic Container Elements

### Divs

The `<div>` element is the most basic container element in HTML. It is used to create a division or section of a web page. By default, it is a block-level element. To create a division, simply enclose your content in `<div>` tags.

~~~html
<div>This is a division.</div>
~~~

Without any additional styling or attributes, the `<div>` element will not have any effect on the content it contains. However, when combined with CSS, it is an invaluable tool in enforcing the layout techniques we will be learning later.

### Spans

The `<span>` element is a container element that is used to group together inline elements. The `<span>` element has no specific meaning or semantic value, but it is often used to group together small bits of content, such as a word or phrase that needs to be styled separately from the rest of the text.

## Semantic Container Elements

![Semantic Container Elements](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/semantic-html.png?alt=media&token=32ce70cc-36e4-41ee-8817-c7fa62804aa2)

In addition to the non-semantically named elements, there are also a number of semantically named elements that are used to structure and organize content on a web page. These elements are used to describe the meaning of the content they contain. This is not only useful for developers, but also for search engines and assistive technologies.

> **Note:** Overusing the div element can make your HTML less readable and less accessible. It is best to use semantic elements whenever possible. If you find yourself getting "lost in the div sauce", consider using a few semantic elements instead.

![Semantic Elements Meme](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fsemantic-html-meme.jpeg?alt=media&token=a5353f04-f012-43d2-8a5f-f6b0dc26cbdb)

Popular semantic container elements include:

* `<header>`: Used to contain the header of a web page. The `<header>` element may contain a logo, navigation links, and other content.
* `<footer>`: Used to contain the footer of a web page. The `<footer>` element may contain contact information, copyright information, and other content.
* `<nav>`: Used to contain navigation links. The `<nav>` element may contain a list of links to other pages on the site, or links to other sites.
* `<main>`: Used to contain the main content of a web page. The `<main>` element may contain the main content of the page, such as a blog post or article.
* `<article>`: Used to contain an article or blog post. The `<article>` element may contain a blog post, news article, or other content.
* `<section>`: Used to contain a section of a web page. The `<section>` element may contain a section of the page, such as a section of a blog post.
* `<aside>`: Used to contain content that is related to the main content of a web page, but is not essential to its meaning. The `<aside>` element may contain a sidebar, or a list of related links.
* `<figure>`: Used to contain a figure or image. The `<figure>` element may contain an image, a diagram, a code snippet, or other content.
* `<figcaption>`: Used to contain the caption of a figure or image. The `<figcaption>` element may contain the caption of a figure or image.
* `<address>`: Used to contain contact information. The `<address>` element may contain a physical address, an email address, a phone number, or other contact information.
* `<blockquote>`: Used to contain a block quote. The `<blockquote>` element may contain a quote from another source.


## Exercises

1. Open `welcome.html` from the previous exercise.

1. Add/replace container elements with semantic elements where possible.

1. Don't forget to push your changes to GitHub!
