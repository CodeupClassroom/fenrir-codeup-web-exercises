# Introduction to Boostrap

## General notes for lecture design

- including bootstrap
- navbar
- navbar-brand
- navbar-toggler (shows up when you narrow)
- modify nav-items 
- delete nav items
- buttons and button outlines 
- margins using the "m" code. Eliminating the default auto margin and replacing it with margin 0.
- using col-6 to widen a button
- altering the padding with the "p" codes
- fontawesome - you need a kit - you need to sign up
- inserting a fontawesome symbol and spacing it off a button
- the container
- jumbotron -- old school, a kind of showcase unit for calling extra attention to content
- now we want to do our jumbotrons custom. So this is how you do a B5 custom jumbotron
- -display headings -- designed to stand out - larger, more opinionated (Content -> typography)
- so h1 display-5
- fw qualities in the text utilities
- there's no more jumbotron, so you use display, add an inline style for background image, 
- use bg-opacity and adjust the px in the right place
- navs and tabs in the Navs & Tabs Components section 
- Cards with titles and subtitles, nested cards, background color and text color
- Forms

## Including Bootstrap

Bootstrap is a collection of pre-written classes with associated styles. It allows you to create site designs that are consistent and mainstream, without writing all the classes yourself, and solves a lot of the layout problems for you. It is still compatible with custom classes and you can mix and match everything we've learned so far -- custom css, flexbox, media queries, and now Bootstrap.

The first thing to do is to include Bootstrap in your file. To do this, you go to the [Bootstrap website](https://getbootstrap.com/) and copy the include links. Click on Get Started, and scroll down to see the links. 

We need to not forget to include the responsive layout tag at the top, otherwise our mobile layouts will not display properly even with Bootstrap magic. We need the css, which we put in the head, and the corresponding JavaScript, which we put at the end of the body. 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Introduction to Bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
```

## Navbar

Now we can begin to explore what Bootstrap has to offer. We can only go over a very limited part of the vast range of options Bootstrap offers here in this class, so it's essential to get familiar with the online documentation. We're going to start at Components -> [Navs and Tabs}(https://getbootstrap.com/docs/5.1/components/navs-tabs/). Let's go ahead and copy the base code.

```
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
```

Notice we have a ul with a class of nav, containing li tags with a class of nav-item, and a tags with a class of nav-link. None of these classes need to be defined by us, they are part of the Bootstrap framework. We get a navbar right at the top of the page. We can customize the links.

```
  <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Company X</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Software</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Support Services</a>
        </li>
    </ul>
```

And notice as we follow the docs, they give us a lot of examples and options. I can move around the links by adding justify-content-center, because these nav classes are built on top of CSS flexbox and we can do a lot of flexboxy things to it.

```
 <ul class="nav justify-content-center">
```

If we create a page called software.html, and modify the nav so that the center item is marked active

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Veridian Dynamics Software</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <ul class="nav nav-pills nav-fill justify-content-center">
        <li class="nav-item">
            <a class="nav-link" href="intro-to-bootstrap.html">Company X</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Software</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Support Services</a>
        </li>
    </ul>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
```

And then we modify the actual link to go to the new page

```
    <li class="nav-item">
        <a class="nav-link" href="software.html">Software</a>
    </li>    
```

We get the effect of the active link changing depending on the page one is on.

To get an added layer of complexity, we can go from "navs and tabs" to ["navbar"](https://getbootstrap.com/docs/5.1/components/navbar/) under "components" in the Docs.

Here we have some templates for more complex navbars with dropdown menus and search bars.
Replace old navbar with:
```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```
Let's see what we got.

And notice the complexity level of the code that outputs this has increased. We are now within a navbar class with various classes in it, including a background color (bg-light). Let's mod it slightly.

In software.html, replace the old navbar, and mod the following lines:

```
                <li class="nav-item">
                    <a class="nav-link" href="intro-to-bootstrap.html">Company X</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  active" aria-current="page" href="#">Software</a>
                </li>
```

And in intro-to-bootstrap,

```
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="intro-to-bootstrap.html">Company X</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Software</a>
                </li>
```

So, notice that working with Bootstrap is often about getting a large framework pre-written for you and modifying it to suit your needs. So, you can peer into this code, delete anything you don't need, look at the components, copy and paste and modify anything you need more of. I can get rid of the dropdown and the disabled button, and modify the placesaver and the search label.


```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="intro-to-bootstrap.html">Company X</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="software.html">Software</a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Enter Name" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">People Search</button>
            </form>
        </div>
    </div>
```
And notice adding two words to our button has caused the text to wrap and the navbar to get thicker. I can look under [components-buttons](https://getbootstrap.com/docs/5.1/components/buttons/) to find the text-nowrap class, add it to the button, and solve that problem.

```
<button class="btn btn-outline-success text-nowrap" type="submit">People Search</button>
```


## The navbar toggler

Notice there is this code at the top with a class called navbar-toggler, and the nav items themselves are inside a div with classes collapse navbar-collapse. What this does is create the familiar horizontal bar toggle-nav at narrow widths. Narrow the page and the three-bar toggle-nav appears. The "Navbar" link is outside the collapse div, so it does not collapse.

You have to change the order of things to make them appear in different places. See the [navbar-toggler docs](https://getbootstrap.com/docs/5.1/components/navbar/#toggler). Change it to before the navbar-brand and it'll show up on the left.

```
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Navbar</a>
```
(change it back)

## Buttons

You can alter the color, borders, size and many other qualities of buttons using Bootstrap classes. See the [buttons docs](https://getbootstrap.com/docs/5.1/components/buttons/). 

Notice our button is a btn-outline-success. I can change the colors 
```
<button class="btn btn-outline-primary text-nowrap" type="submit">People Search</button>
```
I can make it solid

```
<button class="btn btn-primary text-nowrap" type="submit">People Search</button>
```
You can make them larger or smaller, adjust the width with grid widths that we'll learn about in our next lesson.

```
<button class="btn btn-primary text-nowrap col-6" type="submit">People Search</button>
```

## Padding and margins

You can adjust padding and margins, not just in buttons but everywhere, using the [spacing utilities](https://getbootstrap.com/docs/5.1/utilities/spacing/)

So if I want top and bottom padding on the button, I can do py-2

```
 <button class="btn btn-primary text-nowrap col-6 py-2" type="submit">People Search</button>
```

Notice the main nav section has me-auto set on it. That means auto margin right. Look what happens when I take that away. 

```
<ul class="navbar-nav mb-2 mb-lg-0">
```

Now if I do want a little of that spacing between the nav and the search I can add a slighter margin

```
<ul class="navbar-nav mb-2 me-3 mb-lg-0">
```

So the best way to figure that out is to play with those spacing utilities to see how they work, you'll get plenty of practice during exercise time.

## Out with the jumbotron, in with the display headings

In the old days of Bootstrap 1-4, we had a class called ["jumbotron"](https://getbootstrap.com/docs/4.5/components/jumbotron/). This was a component designed to display oversize marketing messages on the site. A jumbotron would be a kind of div with an ultra-sized header, typically in a lighter weight font, with some added content inside it. 

Bootstrap 5 got rid of the jumbotron class, and now we just use the workhorse of Bootstrap, the container class, along with a display class heading.

So, first things first, we have to have a [container](https://getbootstrap.com/docs/5.1/layout/containers/).

Containers are the fundamental layout building blocks in Bootstrap. They contain, pad, and sometimes center content. A lot of stuff in Bootstrap, such as the grid system that is the subject of the next lesson, actually require a container. 

Let's set up the modern equivalent of a jumbotron.

```
<!-- "Jumbotron" -->
    <div class="container-fluid my-4 bg-light rounded-3 py-5 px-0">
        <h1 class="display-2 text-center">Company X</h1>
    </div>
    <!-- Navbar -->
```

Now I can add a background image

```
  <div class="container-fluid my-4 bg-light rounded-3 py-5 px-0" style="background-image: url('images/pexels-digital-buggu-171198.jpg')">
        <h1 class="display-2 text-center">Company X</h1>
    </div>
```

And add a background on the heading itself 
```
 <h1 class="display-2 text-center bg-light">Company X</h1>
```

Even change the [opacity](https://getbootstrap.com/docs/5.1/utilities/opacity/) on the background.

```
<h1 class="display-2 text-center bg-light bg-opacity-75">Company X</h1>
```

## Cards

One of the major components available in Bootstrap is the [Card](https://getbootstrap.com/docs/5.1/components/card/). This is a kind of container you can customize with various types of content and options. Let's look at a basic card.

```
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

Notice it's a div with class card. It's got a fixed width. It's got an image at the top. Then there's the card-body class div, and inside that a header, a paragraph, and a nav button.

We'll add an image

```
<img src="images/pexels-diana-silaraja-128px.jpg" class="card-img-top" alt="An adult panda playing with a baby panda">
```
We can center it with auto margins
```
 <div class="card mx-auto mt-4" style="width: 18rem;">
```

We can have a card take up the full width

```
 <div class="card mx-auto mt-4 py-4">
        <img src="images/pexels-diana-silaraja-256px.jpg" style="width: 256px;" class="card-img-top rounded mx-auto" alt="An adult panda playing with a baby panda">
```

It'll make the image take up the full size, which may not be what we intend, so we'll keep the original size with an explicit declaration.


## Text utilities

We've got a lot of [text utilities](https://getbootstrap.com/docs/5.1/utilities/text/).

We can center the text, applying it to the card-body div:
```
 <div class="card-body text-center">
```

And we have font-size and font-weight utilities, among others.

```
<h5 class="card-title fs-3 fw-lighter">Card title</h5>
```

We also have, of course, text color and [background color](https://getbootstrap.com/docs/5.1/utilities/background/), as well as [border utilities](https://getbootstrap.com/docs/5.1/utilities/borders/)

```
<div class="card mt-4 mx-5 py-4 bg-light border-2 border-secondary rounded">
```

```
<p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
```

## Form elements

The last thing I want to cover a bit is forms. The reality is, as you can see that we can't even come close to covering everything Bootstrap has to offer. You have to get used to looking through the menu and figuring out what the best Bootstrap class is to accomplish the purpose. In real life you will use a mix of custom CSS and CSS frameworks such as Bootstrap (there are many others).

So, let's check out a Bootstrap form. The information is going to be under [Forms](https://getbootstrap.com/docs/5.1/forms/overview/)

```
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

Adding the basic form code yields a bit of a distressingly spread out set of inputs. Let's make some changes.

If I put it in a container, it straight up gets centered and a little more usable.
```
 <div class="container bg-light  border border-2 border-secondary rounded-3 my-5 p-5">
```

I could also use a card format with the header and footer elements it affords.

```
 <h5 class="card-title text-center bg-primary text-white p-3">Sign Up!</h5>
```
We can make one final adjustment here: remove that top padding on the form.

```
<div class="card my-4 mx-5 px-4 pb-4 bg-light border-2 border-secondary rounded">
```

That's still a little irritating so I'm going to move the padding from the class card to the card-body

```
 <div class="card my-4 mx-5 bg-light border-2 border-secondary rounded">
```

That's more like it ... except the button is all smooshed against the corner. Let's put it in a footer.

```
            <div class="card-footer text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
```

That's the general idea of Bootstrap. 

## Exercise

!!! info Javier Notes

Revised, pared-down order-pizza

The Order Pizza exercise is a little long so in the interests of moving forward with the curriculum, I am going to pare it down a little. 

Revised instructions for the pizza order:
Build the Navbar
Build the "Jumbotron"
Build a form within the card

Do not try to build the tab system. Just build ONE CARD with ONE FORM. Do not worry about form functionality, this is a design exercise.

IF and only IF you are ready for a bonus, then you can try building out the tabs. Please note, the buttons will not be functional nav buttons, only the tabs at the top work, and the form need not be functional -- that is a bonus on top of a bonus.
!!!

To provide an introduction to Bootstrap, we will be building a pizza ordering form with Bootstrap
components. Take a look at the bottom of the page to see what the finished product will look like.

For this exercise, you should focus on reading Bootstrap's documentation and using Bootstrap's
pre-built components, as opposed to writing your own custom CSS.

- Include Bootstrap on a new HTML page named `order-pizza.html`

- This page should have a main [navigation bar][bs-navbar]. You can use [Bootstrap Icons][bs-icons], or [Fontawesome Icons][font-awesome] for the Sign Up.

- The rest of your content should live inside of a [container][bs-container]. We'll talk about
  layout more in the next lesson, for now, know that the container provides us with some default
  styles so that our content isn't too wide.

- Below the `navbar`, we'll be creating a custom component similar to Bootstraps [jumbotron][bs-jumbotron]. 
Create a file `custom.css` and create rules for `.jumbotron`: Save this [background image][pizza-bg-image]
  to set the `background-image`, set the `height: 346px` and the `background-size: cover` for the jumbotron class. Create a `<div>` to and add the jumbotron class.
To create the light title bar, create another `<div>` within your jumbotron and change the [opacity][opacity] of the light [background][bs-background]. This component should be hidden for devices with small
  screens. See the documentation for [the display utility classes][bs-display-utilities] to hide the
  jumbotron properly.


- Below the `jumbotron` add an `h2` and some [nav-tabs][bs-nav-tabs]. The numbers shown in the
  image are [badges][bs-badges].


- Add a [card][bs-card] after the tabs to select size and crust for the pizza, as shown in the image
  below. Within the card there are 2 more cards. The radio buttons are inside a
  [list-group][bs-list-group]. Note that the HTML is slightly different for [checkboxes and
  radios][bs-checkbox-and-radio] (You might also find it helpful to use an [input
  group][bs-input-group]). Also, the button inside the main card's footer is [aligned to the
  right][bs-text-alignment].

- Add one more panel to select the type of cheese and sauce for the pizza. Take a look at the docs
  for [form controls][bs-form-controls] to format them correctly.  The options for cheese are:
  `Light`, `Normal`, `Extra` and `Double`. The options for sauce are: `Tomato`, `Marinara`, `BBQ` and `Alfredo`. The options for the amount of sauce are: `Light`,
  `Normal` and `Extra`. Notice that the buttons in the panel footer are [grouped][bs-button-groups].


- Add one last panel for the toppings, the checkboxes are inside list groups as the radio buttons in
  the first panel.


Here is what the whole page looks like for each tab pane:

![Order a pizza page 1](/img/bootstrap/full-page-1.png)
![Order a pizza page 2](/img/bootstrap/full-page-2.png)
![Order a pizza page 3](/img/bootstrap/full-page-3.png)

**Helpful Hints**

- You might find the [spacing utilities][bs-spacing-utilities] helpful to space the content between
  sections of the page.
- If you want to activate the user interaction for the nav tabs, read the [JavaScript Behavior section][js-behavior-nt].
- You can use the [color utilities][bs-color-utilities] to easily change text and background colors.
- Bootstrap itself does not provide icons, but provides [links to several options for including
  icons][bs-icons-include]. The examples in this exercise were created with [Bootstrap Icons][bs-icons] using the svg format..

[bs-navbar]:             https://getbootstrap.com/docs/5.1/components/navbar/
[bs-background]:         https://getbootstrap.com/docs/5.1/utilities/background/
[bs-container]:          https://getbootstrap.com/docs/5.1/layout/containers/
[bs-jumbotron]:          https://getbootstrap.com/docs/5.1/components/jumbotron/
[bs-display-utilities]:  https://getbootstrap.com/docs/5.1/utilities/display/
[bs-nav-tabs]:           https://getbootstrap.com/docs/5.1/components/navs-tabs/#javascript-behavior
[bs-badges]:             https://getbootstrap.com/docs/5.1/components/badge/
[bs-card]:               https://getbootstrap.com/docs/5.1/components/card/
[bs-list-group]:         https://getbootstrap.com/docs/5.1/components/list-group/
[bs-checkbox-and-radio]: https://getbootstrap.com/docs/5.1/forms/checks-radios/
[bs-input-group]:        https://getbootstrap.com/docs/5.1/forms/input-group/
[bs-text-alignment]:     https://getbootstrap.com/docs/5.1/utilities/text/
[bs-form-controls]:      https://getbootstrap.com/docs/5.1/forms/form-control/
[bs-button-groups]:      https://getbootstrap.com/docs/5.1/components/button-group/
[bs-spacing-utilities]:  https://getbootstrap.com/docs/5.1/utilities/spacing/
[bs-color-utilities]:    https://getbootstrap.com/docs/5.1/utilities/colors/
[bs-icons-include]:              https://getbootstrap.com/docs/5.1/extend/icons/
[opactiy]:               https://getbootstrap.com/docs/5.1/utilities/opacity/
[pizza-bg-image]:        /examples/bootstrap/pizza.png
[font-awesome]:          https://fontawesome.com/
[js-behavior-nt]:        https://getbootstrap.com/docs/5.1/components/navs/#javascript-behavior
[bs-icons]:              https://icons.getbootstrap.com/