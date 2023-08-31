// TODO: Reference your past code or write fresh code to make a book object. This object should have properties to store the book's title, the book's author, and (optionally) the genre or another property that would make sense for the object to have.

let myBook1 = {
    bookTitle: "Out of Thyme",
    bookAuthor: "Chef Boyardee",
    bookGenre: "Cooking"
}

//TODO: Uncomment the following variable - fill in the string interpolation expressions to access the properties of your book to finish the following card.

let myCard = `<div class="card">
    <div>Book Title: ${myBook1.bookTitle}.</div>
    <div>Book Author: ${myBook1.bookAuthor}.</div>
    <div>Book Genre: ${myBook1.bookGenre}.</div>
</div>`

//TODO: Using JavaScript, add your finished HTML card to the DOM so our users will be able to see it on page load. We want target the innerHTML of #container.

let container = document.querySelector("#container");

container.innerHTML = myCard;

//TODO: From prior work or fresh in this file, let's make an array of book objects (at least three).

let myBook2 = {
    bookTitle: "Mean 'n Green",
    bookAuthor: "Godzilla Jr.",
    bookGenre: "Autobiography"
}

let myBook3 = {
    bookTitle: "Crossroads Across America",
    bookAuthor: "B. Thugs, N. Harmony",
    bookGenre: "Travel"
}

let myBooks = [myBook1, myBook2, myBook3];

//TODO: Refactor your above code - our HTML needs to build three HTML cards with the information from the objects. Hint: We would want to iterate through the array and add each fresh bit of HTML into the variable of allCards set up below.

let allCards = "";

for (let i = 0; i < myBooks.length; i++) {

    allCards +=
    `<div class="card">
        <div>Book Title: ${myBooks[i].bookTitle}</div>
        <div>Book Author: ${myBooks[i].bookAuthor}</div>
        <div>Book Genre: ${myBooks[i].bookGenre}</div>
</div>`
}

container.innerHTML = allCards;