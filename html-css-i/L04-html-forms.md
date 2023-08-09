# Intro to HTML Forms

If you have used the internet, you have used forms in web pages many times. Maybe you were logging into your favorite website, or leaving a comment on an informative blog post. Forms provide a way to take inputs from a user and then perform some action based upon them.

## Structure

HTML forms can be defined by using the `<form>` element. Let's start out by looking at an example of a simple login form.

```html
<form method="POST" action="https://request-inspector.glitch.me/">

	<label for="username">Username</label>
	<input id="username" name="username" type="text">
	<br>

	<label for="password">Password</label>
	<input id="password" name="password" type="password">
	<br>

	<input type="submit">
</form>
```

In the example above, a couple attributes were specified on the `<form>` element, and the form is made up of several input elements.

### Method

The `method` attribute of a `form` element refers to the HTTP method that should be used to transmit the form data. If no `method` is specified, by default, the `GET` method will be used. While other HTTP methods exist, the [html specification](https://www.w3.org/TR/html5/forms.html#attr-fs-method) limits us to using GET and POST in forms.

HTTP GETs are used to request information, without making any changes to data on the server. When a form's method is set to `GET`, any of the data that the form sends will be appended to the url in the form of a query string.

HTTP POSTs are used to make a change to existing data on the server. When a form's method is set to `POST`, any of the data that the form sends will not be added to the url, but will instead be embedded in the body of the HTTP request as key-value pairs. If you have ever been asked a question like, "Are you sure you want to re-submit this form?", then you were probably refreshing a page after submitting an HTTP `POST`.

### Action

The `action` attribute of an HTML `form` refers to the location that the form data should be sent. If no `action` is specified, by default, the `action` will be set to send data back to the current url.

### Query Strings

A *query string* is composed of key-value pairs. It begins with a question mark (`?`). Following the question mark, is the first key-value pair. Key-value pairs are structured as `key=value`. Key-value pairs after the first will be separated by ampersands (`&`).

Here is an example:

    ?key1=value1&key2=value2&key3=value3

Whenever you use the `GET` method in an HTML form, the form inputs will be appended to the url in the format shown above. If you are using a `POST` method in an HTML form, the inputs will be sent as a query string (this time without the preceding question mark) in the body of the HTTP request.

The following anchor tag example and form example send a very similar GET request. If you put `78205` in the text input, then the form below sends the same key, which is `zipcode`, and the same value, the value `78205`

```html
    <form action="https://request-inspector.glitch.me" method="GET">
        <label for="zipcode">Zipcode</label>
        <input type="text" name="zipcode" id="zipcode" placeholder="input a zipcode">
        <button type="submit">Search</button>
    </form>
```

```html
    <a href="https://request-inspector.glitch.me?zipcode=78205">Search in ZIP Code 78205</a>
```

### Submitting

In order to submit a form, the form must contain either a button, or input element, with a type attribute whose value is "submit".

```html
<input type="submit">
```

```html
<button type="submit">Submit the form</button>
```

Both of the above examples will create a button that, when clicked, will submit the form. Because inputs are void elements, using a `button` element will give us a little more flexibility with styling the form.

## Inputs

Form inputs are what define the actual data that goes along with the form submission. While there are several types of inputs a form can contain, they all share some common characteristics.

### Common Form Input Elements

#### Text Inputs

```html
<input type="text" name="email" placeholder="Enter your email address">
<input type="password" name="password">
```

- Basic text input element is an `input` element with a `type` of `text`.
- Can optionally specify a `placeholder` attribute.
- Setting the attribute `type` to `password` will hide whatever the user enters.
- Specifying a `value` attribute will pre-fill the input with the specified text.

#### Text Areas

```html
<textarea name="comment"></textarea>
```

- `textarea` elements can be used for longer text input.
- Unlike `inputs`s, a `textarea` is *not* a void element.
- Uses the contents of the element instead of a `value` attribute.

#### Checkboxes and Radio Buttons

```html
<input name="newsletter_signup" value="true" type="checkbox" checked>Sign Up For The Email Newsletter
```

```html
A <input type="radio" name="quiz_question_1" value="a"><br>
B <input type="radio" name="quiz_question_1" value="b"><br>
C <input type="radio" name="quiz_question_1" value="c"><br>
D <input type="radio" name="quiz_question_1" value="d"><br>
```

- `input` elements with a type of either `radio` or `checkbox`.
- Multiple elements relating to the same question should share a `name` attribute.
- Commonly placed inside `label` elements.
- Checkboxes are pre-selected by adding a `checked` attribute.
- Radio buttons are pre-selected by adding a `checked` attribute.

#### Selects

```html
<select name="coffee_preference">
	<option value="light">Light Roast</option>
	<option value="dark">Dark Roast</option>
	<option value="espresso">Espresso Blend</option>
</select>
```

- `select` elements create a drop-down of choices.
- Consists of `option` elements for each choice.
- The contents of an `option` element are what the user sees, and the `value` attribute is the data is submitted as part of the form.
- The parent `select` element has a `name` attribute, and child `option` elements have `value` attributes.

#### Hidden Inputs

```html
<input type="hidden" name="user_id" value="432">
```

- Not shown to the user.
- Used to submit data along with the form that the user does not specify, and does not modify.
- Useful for the backend of our web applications.

### Common Attributes of Form Elements

#### Name and Value

In order for an input to be submitted, it must have a `name` attribute. The value of the `name` attribute will become the name of the key that corresponds to the value of the current input.

```html
<form>
	<input name="the_answer" value="42">
	<input type="submit">
</form>
```

When the above form is submitted, the following query string will be appended to the current url:

```
?the_answer=42
```

There are several things to note in the above example:

- Because there is no `action` attribute on the form, it will default to submitting to the current page.
- Because there is no `method` attribute on the form, it will default to a `GET` request, and will create the query string.
  - If we instead had specified `POST` as the method, we would *not* see a query string, but the form data would still be submitted.
- The value of `42` is prefilled in the input, but if the user replaced that value with something else, it would replace the `42` in the query string.

#### Disabled

```html
<input type="text" name="username" value="codeup" disabled>

<select name="newsletter_signup">
	<option disabled value="n">No</option>
	<option selected value="y">Yes</option>
</select>
```

A `disabled` attribute can be added to any of the above elements to make the element non-interactive. For `select`s, the `disabled` attribute can be added to individual `option` elements.

### Labels

```html
<label for="username">Username</label>
<input id="username" name="username" type="text">
```

The `label` element is used to label form inputs. Label elements should have a `for` attribute that matches up with the `id` attribute of the element that is being labeled. When a form input is properly labeled, clicking on the label will focus that input element. This is particularly useful for checkboxes and radio buttons, and it is a common practice to wrap checkbox and radio `input`s with a `label`.

```html
<h2>What kind of phone do you own?</h2>
<label for="android">
	Android <input id="android" type="checkbox" name="phones" value="android">
</label>
<label for="ios">
	iOS <input id="ios" type="checkbox" name="phones" value="ios">
</label>
<label for="windows">
	Windows <input id="windows" type="checkbox" name="phones" value="windows">
</label>
<label for="other">
	Other <input id="other" type="checkbox" name="phones" value="other">
</label>
```

## Exercises

For this exercise, we will be building a registration page for Veridian Dynamics. We will be utilizing [Request Inspector](https://request-inspector.glitch.me/) to view the resulting data that our form submits. Throughout this exercise, you should be submitting your form and viewing the resulting data on the Request Inspector page.

1. Create a file named `forms.html`.

1. Using what you have learned in the previous lessons, add the necessary HTML document structure to the page with a title of: "Register With Us".

1. Create an empty `form` element. We will be adding to this throughout the exercise.

1. Below is an example of using the Request Inspector.

    ```html
    <form method="POST" action="https://request-inspector.glitch.me/">
    ```

1. Create text fields for email and password with appropriate placeholder values.

1. Create a textarea named "bio". This is for the user to fill out a short description of themselves.

1. Create a "How did you hear about us" section that contains radio buttons. The values should be "billboard", "radio advertisement", "internet advertisement", and "other". Only one of the values should be allowed to be selected at a time.

	- What happens if the inputs are given different `name` attributes?
	- Change these inputs so that multiple answers are allowed to be selected.

1. Create a dropdown that asks the user what web browser they are using.

	As you work through the steps above, you should:

	- Make sure all of your form elements have labels.
	- Make sure there's a way to submit the form, adding a submit button will solve this.
	- Ensure that all of your form values are being submitted to the Request Inspector.
	- Experiment with different attribute values:
		- What do you notice when changing the form's request method from `GET` to `POST`?
		- What happens if you leave off the `name` attribute on an input?
		- What happens if you leave off the `id` attribute on a form input?
1. Finally, commit the changes to your git repository, and push to GitHub.


### Bonus

1. To configure your forms to send you an email, sign up for the free plan on [El Formo](https://www.elformo.com/). El Formo will provide you a URL for your form's `action` attribute. When you use this action, the El Formo service will email you each form submission. This is a great way to get forms working online super quick!

## Instructor Notes