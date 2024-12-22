document
  .querySelector(".home")
  .addEventListener("click", () => (window.location.href = "./index.html"));
document
  .querySelector(".about")
  .addEventListener("click", () => (window.location.href = "./about.html"));
document
  .querySelector(".offers")
  .addEventListener("click", () => (window.location.href = "./offers.html"));
document
  .querySelector(".cart")
  .addEventListener("click", () => (window.location.href = "./cart.html"));

document.querySelector(".bars").addEventListener("click", () => {
  document.querySelector(".dropside").classList.remove("hidden");
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".dropside").classList.add("hidden");
});

document
  .querySelector(".home1")
  .addEventListener("click", () => (window.location.href = "./index.html"));
document
  .querySelector(".about1")
  .addEventListener("click", () => (window.location.href = "./about.html"));
document
  .querySelector(".offers1")
  .addEventListener("click", () => (window.location.href = "./offers.html"));
document
  .querySelector(".cart1")
  .addEventListener("click", () => (window.location.href = "./cart.html"));
