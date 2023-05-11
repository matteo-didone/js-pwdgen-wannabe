// Creating basic variables
let userName = prompt("What is your name?");
let userLastName = prompt("What is your last name?");
let favoriteColor = prompt("What is your favorite color?");

// Create message
let message = "Your password is: " + userName + userLastName + favoriteColor + "21";

// Display message
alert(message);

// Get elements by id
let nameParagraph = document.getElementById("name");
let lastNameParagraph = document.getElementById("lastName");
let favoriteColorParagraph = document.getElementById("favoriteColor");
let messageParagraph = document.getElementById("message");

// Update the content using innerHTML property
nameParagraph.innerHTML = "Name: " + userName;
lastNameParagraph.innerHTML = "Last Name: " + userLastName;
favoriteColorParagraph.innerHTML = "Favorite Color: " + favoriteColor;
messageParagraph.innerHTML = message;
