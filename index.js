import "../main.css";

import { colours } from "./colours.js";
import { quotes } from "./quotes.js";

const cardElement = document.querySelector(".card");
const quoteElement = document.querySelector(".quote");
const imageElement = document.querySelector(".image");
const buttonElement = document.querySelector(".button");

// if you change the number of images, update the value for this variable below
const numOfPics = 10;

buttonElement.addEventListener("click", function (_event) {
  changeQuote();
});

function changeQuote() {
  quoteElement.innerHTML = "";
  const quote = getRandomQuote();
  const textElement = createTextElement(quote);
  const authorElement = createAuthorElement(quote);

  imageElement.style.backgroundImage = randomImagePath();
  cardElement.style.backgroundColor = randomColor();

  quoteElement.append(textElement, authorElement);
}

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function createTextElement(quote) {
  const textElement = document.createElement("p");
  textElement.innerText = `"${quote.text}"`;
  return textElement;
}

function createAuthorElement(quote) {
  const authorElement = document.createElement("p");
  authorElement.textContent = quote.author;
  authorElement.classList.add("quote-author");
  return authorElement;
}

function randomImagePath() {
  const randomNumber = Math.floor(Math.random() * numOfPics) + 1;
  return `url(./assets/images/pic${randomNumber}.png)`;
}

function randomColor() {
  return `#${colours[Math.floor(Math.random() * colours.length)]}`;
}
