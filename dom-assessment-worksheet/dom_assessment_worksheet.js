// TODO: Target the div with the id of deep-in-the-heart. When the div is clicked, spawn an alert that says "CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~".

$("#deep-in-the-heart").on("click", (e) => {
   alert("CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~");
})

//TODO: Target the div with the id of what-color - when the div is clicked, the value of the color from that div should be populated as a string into the div#answer-color.

$("#what-color").on("click", (e) => {
   let color = $("#what-color").attr("style");
   color = color.split(" ")[1];

   $("#answer-color").text(`Looks like that's the color: ${color}`)

})

// TODO: When the user clicks the button#tacoButton, the value typed into the input#tacoBoutIt will be populated into the span#favorite-taco. Our goal is for our user to be able to type what kind of tacos they like to get and see that value where "*replaceMe" is.
$("#tacoButton").on("click", (e) => {
   e.preventDefault();
   $("#favorite-taco").text($("#tacoBoutIt").val());
})

// TODO: When a list item from the ul#list-states is hovered over, populate the span#insert-state with the value of the specific state-list-item hovered over to complete the sentence.


    $(".state-list-item").on("mouseenter", (e) => {
      $("#insert-state").text(e.target.innerText);


    })

   $(".state-list-item").on("mouseleave", (e) => {
      $("#insert-state").text("");


   })


//TODO: Five seconds after the page loads, insert a string with the message "Oh, hey, didn't see you there" into the div#five-seconds.

setTimeout(()=>{
   $("#five-seconds").text("Oh, hey, didn't see you there")
}, 5000)