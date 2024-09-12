const home = document.querySelector(".home");
const offers = document.querySelector(".offers");
const buyNow = document.querySelector(".buy-now");
const about = document.querySelector(".about");

home.addEventListener("click", () => {
  window.location.href = "index.html";
});
offers.addEventListener("click", () => {
  window.location.href = "offers.html";
});
buyNow.addEventListener("click", () => {
  window.location.href = "buy.html";
});
about.addEventListener("click", () => {
  window.location.href = "about.html";
});
