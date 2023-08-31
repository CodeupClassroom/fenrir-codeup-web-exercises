let handler = () => {
    alert("You clicked the button")
    // container.innerText = "Hello World"
    // container.style.backgroundColor = "cornflowerblue"

}

let container = document.getElementById("container");
let button1 = document.getElementById("btn1");

// button1.addEventListener("click", handler)

button1.addEventListener("click", handler)

button1.addEventListener("dblclick", function () {
    console.log("Please double-click!");
})
// document.addEventListener("click", handler)

let input1 = document.getElementById("textInput");

input1.addEventListener("keypress", (event) => {
    console.log("Key released: " + event.key)
    console.log(event)
})

let checkbox1 = document.querySelector("#checkboxInput");

checkbox1.addEventListener("change", function (event) {
    if (event.target.checked) {
        console.log("Checkbox is checked");
        console.log(event);
    } else {
        console.log("Checkbox is unchecked");
        console.log(event);
    }
})


let form1 = document.querySelector("#myForm");

form1.addEventListener("submit", function (event) {
    event.preventDefault()
    // Prevents the form from submitting
    let username = form1.elements.username.value;
    let password = form1.elements.password.value;

    console.log("Username: " + username);
    console.log("Password: " + password);
})

let button2 = document.getElementById("btn2");

let remover = function (event) {
    //remove the listener from button1
    button1.removeEventListener("click", handler)
    // button1.removeEventListener("dblclick", function () {
    //     console.log("Please double-click!");
    // })
    // input1.removeEventListener("keypress", (event) => {
    //     console.log("Key released: " + event.key)
    //     console.log(event)
    // })
    // checkbox1.removeEventListener("change", function (event) {
    //     if (event.target.checked) {
    //         console.log("Checkbox is checked");
    //         console.log(event);
    //     } else {
    //         console.log("Checkbox is unchecked");
    //         console.log(event);
    //     }
    // })
    // form1.removeEventListener("submit", function (event) {
    //     event.preventDefault()
    //     // Prevents the form from submitting
    //     let username = form1.elements.username.value;
    //     let password = form1.elements.password.value;
    //
    //     console.log("Username: " + username);
    //     console.log("Password: " + password);
    // })
}

button2.addEventListener("click", remover);