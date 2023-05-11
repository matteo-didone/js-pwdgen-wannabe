// Creating basic variables
let userName = prompt("What is your name?");
let userLastName = prompt("What is your last name?");
let favoriteColor = prompt("What is your favorite color?");
let userNumber = prompt("What is the number you want to use?");

let userNumberPlusTen = parseInt(userNumber) + 10;

// Create message
let message = "Your password is: " + userName + userLastName + favoriteColor + userNumberPlusTen;

// Display message
alert(message);

// Get elements by id
let nameParagraph = document.getElementById("name");
let lastNameParagraph = document.getElementById("lastName");
let favoriteColorParagraph = document.getElementById("favoriteColor");
let userNumberParagraph = document.getElementById("userNumber");
let userNumberPlusTenParagraph = document.getElementById("userNumberPlusTen");
let messageParagraph = document.getElementById("message");


// Update the content using innerHTML property
nameParagraph.innerHTML = "Name: " + userName;
lastNameParagraph.innerHTML = "Last Name: " + userLastName;
favoriteColorParagraph.innerHTML = "Favorite Color: " + favoriteColor;
userNumberParagraph.innerHTML = "User Number: " + userNumber;
userNumberPlusTenParagraph.innerHTML = "User Number + 10 = " + userNumberPlusTen;
messageParagraph.innerHTML = message;
