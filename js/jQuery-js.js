$(function(){
       // alert("Document has loaded!")

       //   So. . okay, what now? I have jQuery loaded up via CDN, and I have used it with an alert

      //Navigating the DOM:

      //Syntax:

      //jQuery('selector') OR $('selector')

      console.log($("p"));

      console.log($("#ice-cream-list"));

      console.log($(".list-item"));

//       Okay - so we can use CSS selector syntax and get back collections of matching. . ids, classes, elements, etc. What now?

      //.html()
      //jQuery - console.log the innerHtml of a p tag
      console.log($("p").html());

      // Retrieves first of available (similar to querySelector)
      console.log($("li").html());

      //.css() go GET a property from selector

      console.log($("p").css("border"));

//    Let's see- can I get the return values and store them in vars?

      let borderProperties = $("p").css("border");

      console.log(`Hey : The border properties are ${borderProperties}`);

//       So we used html() and css() to go GET information - let's try setting some information

      let interestingParagraph = "I went down the street the other day to go get some ice cream, and you wouldn't believe what happened to me on the way. I ran into a cop car - the officer got out of the vehicle and said 'HEY' 'WHAT ARE YOU DOING' and I said 'I am on the way to go get some ice cream'. Then I got a ticket, and I went on to have some ice cream: I had an almond joy type of thing. . kinda chocolatey, IDK, you know what I mean";

      $("p").html(interestingParagraph);

//       Let's change the color of the paragraph to something less aggressive - like a nice cornflowerblue <3<3<3

      $("p").css("color", "cornflowerblue");

//       We now see .html() and .css() can SET information with argument(s)

      // Method chaining : .method().method().method().method().method()
      $("li")
          .css("border", "1px dashed red")
          .css("margin", ".2em")
          .css("padding", "2em");

//       Multiple selectors and all selectors

      console.log($("#ice-cream-list, h1")
          .html());

      $("*").css("color", "rebeccapurple");
});