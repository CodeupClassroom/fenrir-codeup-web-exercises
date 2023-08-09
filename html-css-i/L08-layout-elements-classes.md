# Layout Elements & Classes

We learned about the flexibility and versatility that comes with flex properties. Website layouts, however, are not always as simple as a single row or column of elements. The responsibility of the overall layout often required the use of **multiple flex containers**. In this lesson, we're going to create a series of **classes and elements we can reuse** to create complex layouts with ease.

## The Page Wrapper

The "page wrapper" is the outermost flex container for the page. It mimics the behavior of the body tag, but is a div so that it can be styled with more flexibility than the body tag. 

```html
...
<body>
    <div class="page-wrapper">
        
    </div>
</body>
...
```
It's responsibilities include:
- Background elements of the site: color, images, gradients, etc.
- Establishing a min-height of 100vh. This ensures site-wide background elements cover the entire screen

## The Container

![Container Example](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/container.png?alt=media&token=5c09fa41-9543-4719-9e36-b4209c5f562f)

The "container", sometimes referred to as a "section", is a container element (semantic when applicable) that vertically separates different areas on the page based on their purpose or topic. It can allow different background colors and properties for each section that help users associate content within it as belonging to the same subject.

```html
...
<body>
    <div class="page-wrapper">
        <div class="container">
            
        </div>
    </div>
</body>
...
```
Responsibilities of the container include:
- Background elements of the section. *For example: a header that has a different background color from the page wrapper, with a border underneath*

- Helps with the responsibilities of the Row by aligning it's children to the center

## The Row

![Row Example](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/row.png?alt=media&token=f9cfef30-1958-4ab7-9fba-f187a3e20b63)

The "row" is a container element that horizontally separates its children, which are usually columns. It also performs a secondary role of keeping the content of the site within a reasonable width, so that wider screens don't disrupt the intended layout.

Multiple rows can be used inside of a container, if the design calls for it.

![Multiple Rows](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/row2.png?alt=media&token=f88dd154-700a-4267-bccc-70f39c0029bb)

```html
...
<body>
    <div class="page-wrapper">
        <div class="container">
            <div class="row">
                
            </div>
        </div>
    </div>
</body>
...
```
Responsibilities of the row include:
- Define the alignment of the columns within it
- Establish and standardize the maximum content width for the entire site

## Columns

![Columns Example](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/columns.png?alt=media&token=6acd13fc-a2cc-4b48-8b71-2413f923c743)

The "column" is a container element that vertically separates its children, which are usually content elements. They allow you to separate content out horizontally. By default, they'll take up space evenly with sibling columns, but can have combo classes added to change their behavior and achieve more complex horizontal layouts.

```html
...
<body>
    <div class="page-wrapper">
        <div class="container">
            <div class="row">
                <div class="column">
                    <!-- Content elements go here -->
                </div>
                <div class="column">
                    <!-- Content elements go here -->
                </div>
            </div>
        </div>
    </div>
</body>
...
```
Responsibilities of the column include:
- Separate content out horizontally
- Define the alignment of the content elements within it


## A Visual Demonstration

![Bringing it all together](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/all-together.png?alt=media&token=f96b360c-ed46-4baf-b426-8d6a4820d18a)

Check out the following resource for a more in-depth demonstration of these elements in action. You can use the spacebar or arrow keys to navigate through the presentation: [Layout Elements Demo](https://codeup-basic-page-structure.webflow.io/)

## Exercises

1. Download the starter files for this exercise [here](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Flanding-page-with-two-column-layout-master.zip?alt=media&token=e0b81f9c-f3f0-4c9f-ae18-17d8a0dea5e5). It includes the `layout.css` we created in this lesson. You can replace the `resets.css` with your own if you'd like.

1. **OPTIONAL**: Download the Figma file for this exercise [here](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Flanding-page-with-two-column-layout-figma.zip?alt=media&token=a1ea913d-5b24-46eb-926d-5bcf7e37b9fc)

1. We will now be performing the role of a frontend developer in a web development project. The designer has provided us with a design of the homepage. It is our job to make it look as close to the design as possible: 
![Homepage Wireframe](https://firebasestorage.googleapis.com/v0/b/codeup-curriculum.appspot.com/o/html-css-i%2Fdesktop-preview.jpg?alt=media&token=da085506-1774-42aa-82ba-54c9feea688d)

1. Using the layout elements we learned about in class, create the layout for the homepage. Use `styles.css` to write any custom CSS that is specific to this project. **Focus on the basic layout of the page first. There are some aspects of the design that are meant to provide an added challenge.**

>**Reminder:** you should not be writing any custom CSS in `layout.css` or `resets.css` that is specific to this exercise, those are meant to be reusable across all projects.

