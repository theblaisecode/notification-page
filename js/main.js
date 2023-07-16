"use strict";
const unread = document.querySelector(".unread");
const box = document.querySelectorAll(".box");
const span = document.querySelectorAll("span");
const markAll = document.querySelector(".markAll");
const counter = document.querySelector(".headingContent .contentTop span")

markAll.onclick = () => {
   box.forEach((item) => item.classList.remove("unread"));
   span.forEach((spanItem) => spanItem.classList.remove("highlight"));
   counter.innerText = '0';
};
