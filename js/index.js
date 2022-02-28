"use strict";
const documentReady = () => {
  const phrases = [
    "😘 Welcome ",
    "👽 Have a good time ",
    "😎 You're the best, welcome ",
  ];

  const random = Math.floor(Math.random() * phrases.length);

  let name = prompt("Hi, welcome to the Book Store, enter your name: ");
  try {
    while (!/^[a-zA-Z]+$/.test(name)) {
      name = prompt("Please re-enter your name, letters only.");
    }
    alert(phrases[random]);
  } catch (e) {
    alert(e);
  }

  const button = document.querySelector("button");
  const message = document.querySelector(".message-container");

  button.addEventListener("click", () => {
    message.style.display = "block";
  });

  message.addEventListener("click", (event) => {
    const classNameOfClickedElement = event.target.classList[0];

    const shouldCloseMessage = classNameOfClickedElement === "message-link";
    if (shouldCloseMessage) {
      console.log(classNameOfClickedElement);
      message.style.display = "none";
      setTimeout(function () {
        window.open(
          "https://www.amazon.com/-/es/amazon-books/b?ie=UTF8&node=13270229011",
          "_blank"
        );
      }, 500);
    } else message.style.display = "none";
  });
};
document.addEventListener("DOMContentLoaded", documentReady);
