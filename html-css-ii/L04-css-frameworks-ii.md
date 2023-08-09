# Grid System

Bootstrap comes with a responsive grid system that we can use to easily layout content for various screen sizes.

Bootstrap's grid is based on a 12-column layout and will let us specify the width of different content areas for different screen sizes in terms of columns. Like the grid system that we built ourselves, Bootstrap's columns will collapse to take up full width once past a certain breakpoint. However, unlike our grid system, Bootstrap allows us to specify different widths for different screen sizes. Let's look at an example:

```html
<div class="container">
    <div class="row">
        <div class="col-md-6">
            Content goes here....
        </div>
    </div>
</div>
```

We'll start by putting all of our content in a `container`, then define a `row`, which will contain multiple columns.

The content in the div with the class of `col-md-6` will take up 6 columns (i.e. 50% width) on any medium or larger sized screen. On screens smaller than medium, the content will take up the full width.

When using Bootstrap, the majority of the content of your site will live inside of columns, and, in fact, columns can even contain rows that contain columns, for a nested grid system.

In general, Bootstrap's column classes follow this naming convention:

    col-*-*

Where the first star is one of `sm`, `md`, `lg`, or `xl` to indicate the screen size, and the second star is a number between 1 and 12 to indicate the number of columns. (You can also omit the screen size to always have columns regardless of screen size). Importantly, the xs screen width is indicated by a lack of an explicit breakpoint. ie: col-6 indicates 6 row units for xs screen widths.

The different classes can also be combined to specify different widths on
different screen sizes:

```html
<div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-6">
            <p>Consectetur reprehenderit magnam nostrum quod reprehenderit. Inventore repellat eum facilis illum dolor doloribus, eius quibusdam suscipit delectus vitae. Explicabo beatae vitae quos laborum expedita hic, maiores ipsa eaque? Nobis repudiandae!</p>
        </div>
        <div class="col-lg-3 col-md-6">
            <p>Elit rerum asperiores nostrum ipsum sint debitis et, quos harum. Ut reiciendis id dolorem dolorum ad ex in. Illo odit atque dolore corporis vero? Voluptatum cupiditate quisquam perspiciatis obcaecati neque.</p>
        </div>
        <div class="col-lg-3 col-md-6">
            <p>Sit quibusdam dolorum delectus ducimus consequatur ullam cupiditate quia sit, laboriosam distinctio distinctio est blanditiis vitae laudantium dolore? Tempore doloremque aspernatur repellat consectetur sit vero velit possimus suscipit? Odit doloremque?</p>
        </div>
        <div class="col-lg-3 col-md-6">
            <p>Consectetur doloribus dolor quia iste sint! Totam suscipit possimus deserunt adipisci beatae? Mollitia explicabo voluptates hic delectus voluptates commodi necessitatibus perferendis. Rem ipsam itaque illo perspiciatis illo doloribus. Enim iste.</p>
        </div>
    </div>
</div>
```

In the above example, each paragraph of latin text will take up 3 columns (one quarter) on large screens, 6 columns (one half) on medium sized screens, and 12 columns (full width) on anything smaller than a medium screen.

## Further Reading

- [Bootstrap Grid System (Official Documentation)](https://getbootstrap.com/docs/5.1/layout/grid/)
- [Spacing Utilities](http://getbootstrap.com/docs/5.1/utilities/spacing/)
- [Bootstrap Grid Examples](/examples/css/bootstrap-grids.html) -- View the page source, or save this file locally. Try resizing your browser!
- [A Complete Guide To Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background)

## Exercises

### Bootstrap Grid: T-Block Resume
In this exercise you will build a t-block resume using the bootstrap grid system. The purpose of the T-Block resume is to have a single-page, easy-to-consume resume.

For this exercise, you do not need to include real resume information - placeholder lorem ipsum will be just fine. Additionally, since this code will be pushed to github, please refrain from putting your real phone number and email.
-  This is what the resume should look like on a very small screen to a medium size screen:

   ![Small up to medium 1](/img/bootstrap-grid/resume-small-1.png)
   ![Small up to medium 2](/img/bootstrap-grid/resume-small-2.png)


-  Once you hit the medium/tablet breakpoint, this is what the resume should look like.

   ![Medium and larger](/img/bootstrap-grid/resume-large.png)


Note - You have creative freedom with colors, font, sizes, etc. The goal of this lesson is to gain a better understanding of using the bootstrap grid system with rows and columns. If you need additional examples, check out the resumes on the [alumni portal](https://alumni.codeup.com/).