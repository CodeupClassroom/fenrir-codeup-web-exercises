# Introduction to HTML
In this lesson, we will introduce HTML and discuss the basics of creating a web page using HTML. We will cover the structure of an HTML document, basic HTML elements, and how to create a simple web page.
## What is HTML?
<!-- add image -->

![HTML Image](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fhtml-image.jpg?alt=media&token=e5f31e5c-aec7-430d-b0af-4a2c43324d0e)

HTML (Hypertext Markup Language) is a markup language used to create structured documents that can be displayed on the web. HTML uses a series of tags to define the structure and content of a web page. Tags are enclosed in angle brackets, such as `<html>` and `</html>`.

The history of HTML can be traced back to the early 1990s, when the internet was still in its infancy. At the time, researchers at CERN (the European Organization for Nuclear Research) were working on ways to share research information with each other. They developed a hypertext system called Enquire, which allowed users to navigate between different documents and create links between them.

Tim Berners-Lee, a researcher at CERN, saw the potential for this system to be used on a larger scale, and in 1989 he proposed a global hypertext system, which he called the World Wide Web. HTML was developed as the markup language for the web, allowing web authors to create and publish documents that could be linked to other documents and accessed from anywhere in the world.

Over the years, HTML has evolved to include new features and capabilities. The latest version of HTML, HTML5, was released in 2014, and it includes new elements and features for creating dynamic and interactive web pages.
## Basic Structure of an HTML Document
In this section, we will cover the basic structure of an HTML document, including the `<html>`, `<head>`, and `<body>` elements.

### The `<!DOCTYPE>` Declaration
The `<!DOCTYPE>` declaration is used to specify the version of HTML that the document is using. This should be the first line of your HTML document. The most common <!DOCTYPE> declaration used in modern web development is HTML5.

~~~html
<!DOCTYPE html>
~~~
![Doctype image](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fdoctype-image.webp?alt=media&token=72691baa-77ad-4725-a559-d02917e64e05)
### The Makeup of an HTML Element
The syntax for HTML elements:

~~~html
<tagname attribute="value"></tagname>
~~~

OR with self-closing tags:

~~~html
<tagname attribute="value" />
<!-- with HTML5, the forward slash is no longer required on self-closing tags, but it's still a good idea to use it as a beginner to remind yourself that the tag closes itself -->
<tagname attribute="value" >
~~~

### The `<html>` Element
The `<html>` element is the root element of an HTML document, and it contains all other elements. It is typically the first element after the `<!DOCTYPE>` declaration. All other elements in the document are enclosed within the `<html>` element.

~~~html
<!DOCTYPE html>
<html lang="en">
  <!-- All other elements go here -->
</html>
~~~

### The `<head>` and `<body>` Elements
The `<head>` element contains meta information about the document, such as the title of the page, links to stylesheets, and scripts. The `<body>` element contains the content of the page that is visible to the user. The content can include text, images, links, and other media.

~~~html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>My Web Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to my web page</h1>
    <p>This is the content of my web page</p>
<script src="script.js"></script>
</body>
</html>
~~~

![Coding is life](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fcoding-is-life.jpeg?alt=media&token=ec744542-eab2-49c9-a233-894a38ed66e4)

### The `<meta>` Element

The `<meta>` element is used to specify metadata about the document, such as the character set, page description, keywords, author of the document, and viewport settings. The `<meta>` element should always be included within the `<head>` element.

~~~html
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML,CSS,XML,JavaScript">
<meta name="author" content="John Doe">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
~~~

### The `<link>` and `<script>` Elements

The `<link>` element is used to link external stylesheets to the document, while the `<script>` element is used to link external JavaScript files to the document. While both elements can be placed in the `<head>` of the page, JavaScript can prevent the page from rendering quickly. `<script>` tags before the end of the body.

~~~html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
~~~

### The `<title>` Element

The `<title>` element is used to specify the title of the document, which is shown in the browser's title bar or on the page's tab. The `<title>` element should always be included within the `<head>` element.

~~~html
<title>My Web Page</title>
~~~

## From HTML to Browser

### How Browsers Interpret HTML

When a browser receives an HTML document, it parses the document and creates a Document Object Model (DOM) tree. The DOM tree is a hierarchical representation of the document, with each element in the document represented by a node in the tree.

As the browser parses the document, it creates nodes for each element and its contents. The browser then applies any styles and scripts to the document, based on the information provided in the document and any external files. Finally, the browser renders the document, creating a visual representation of the document in the browser window.

### The Document Object Model (DOM)

The Document Object Model (DOM) is a platform- and language-neutral interface that allows scripts to access and manipulate the content of a web page. The DOM provides a hierarchical representation of the document, with each element represented by a node in the tree.

By using the DOM, scripts can access and modify the content of a web page, such as adding or removing elements, changing the content of elements, and responding to user events. The DOM is also used by modern web development frameworks and libraries to create dynamic and interactive web pages.

![Dom Tree Image](https://www.tutorialstonight.com/assets/js/dom-tutorial.webp)

## Exercises

1. Create a file named `welcome.html` file in the root of `codeup-web-exercises` with the proper structure of an html document so that it that displays the text "Hello, World!".
1. Finally, commit the changes to your git repository, and push to GitHub.
