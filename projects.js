
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_back = document.getElementById("mountains_back");
let mountains_front = document.getElementById("mountains_front");
let btn = document.getElementById("btn-letsgo");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mountains_back.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  btn.style.marginTop = value * 1 + "px";
  header.style.top = value * 0.5 + "px";
});