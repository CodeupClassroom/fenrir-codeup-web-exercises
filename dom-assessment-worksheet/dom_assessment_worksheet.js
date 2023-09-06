// TODO: Target the div with the id of deep-in-the-heart. When the div is clicked, spawn an alert that says "CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~".

let deepInTheHeart = document.querySelector("#deep-in-the-heart");

deepInTheHeart.addEventListener("click", () => {
    alert("CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~");
})

//TODO: Target the div with the id of what-color - when the div is clicked, the value of the color from that div should be populated as a string into the div#answer-color.

let whatColorAmI = document.querySelector("#what-color");

let whatColorAmIString= whatColorAmI.getAttribute("style");

whatColorAmIString = "Current settings for color are: " + whatColorAmIString;

document.querySelector("#answer-color").innerHTML = whatColorAmIString;

// TODO: When the user clicks the button#tacoButton, the value typed into the input#tacoBoutIt will be populated into the span#favorite-taco. Our goal is for our user to be able to type what kind of tacos they like to get and see that value where "*replaceMe" is.

document.querySelector("#tacoButton").addEventListener("click", (e) => {
    e.preventDefault(); //dunno if neeeded

    let inputValue = document.querySelector("#tacoBoutIt").value;

    document.querySelector("#favorite-taco").innerHTML = inputValue;

})

// TODO: When a list item from the ul#list-states is hovered over, populate the span#insert-state with the value of the specific state-list-item hovered over to complete the sentence.

document.querySelectorAll(".state-list-item").forEach((node) =>{
    node.addEventListener("mouseenter", (e) =>{
        document.querySelector("#insert-state").innerText = e.target.innerText;
    })
})

document.querySelectorAll(".state-list-item").forEach((node) =>{
    node.addEventListener("mouseleave", (e) =>{
        document.querySelector("#insert-state").innerText = "";
    })
})

//TODO: Five seconds after the page loads, insert a string with the message "Oh, hey, didn't see you there" into the div#five-seconds.

setTimeout(() =>{
    document.querySelector("#five-seconds").innerText = "Ohhhhh, hey - didn't see you there!";
}, 5000)