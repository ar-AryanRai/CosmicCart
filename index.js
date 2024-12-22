//  id, interval, and bagItems is declared globally
let id = 0;
// this variable is to set the interval for nextMove method.
let interval;
// this variable will be used to store the index of the planets that are in the cart.
let bagItems;

// Purpose: it displays the current interface of the page according to the value of id
function display() {
  let pnext;
  let pprev;

  // handling the edge cases
  if (id === 0) {
    pprev = data.length - 1;
    pnext = id + 1;
  } else if (id === 7) {
    pprev = id - 1;
    pnext = 0;
  } else {
    pprev = id - 1;
    pnext = id + 1;
  }

  // updating the name of planets and also their images as well as the images of their next and previous planets
  document.querySelector(".name").textContent = `${data[id].pname}`;
  document.querySelector(
    ".pleft"
  ).innerHTML = `<img class="h-[100%]" src="${data[pprev].ppic}" alt="previous planet">`;
  document.querySelector(
    ".pcenter"
  ).innerHTML = `<img class="h-[100%]" src="${data[id].ppic}" alt="center planet">`;
  document.querySelector(
    ".pright"
  ).innerHTML = `<img class="h-[100%]" src="${data[pnext].ppic}" alt="next planet">`;

  // updating the background according to the current planet
  const body = document.querySelector("body");
  body.style.backgroundImage = `url(${data[id].pbg})`;
}

// Purpose: This function is setting the value for bagItems
/* Explanation: If their is bagItems present in the local storage of our browser then we will set its vlaue to that bagItems otherwise we will set it with the empty array to store.*/
function load() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  display();
}

// Purpose: This method is used to move to the next planet or item in the crousel
function rightMove() {
  if (id === data.length - 1) {
    id = 0;
  } else {
    id = id + 1;
  }
  display();
  resetInterval();
}
// Purpose: It adds the eventListener and which method it will apply to the right button
document.querySelector(".right").addEventListener("click", rightMove);

// Purpose: It adds the eventListener and which method it will apply to the left button and the method is provided inside the addEventListener();
document.querySelector(".left").addEventListener("click", () => {
  if (id === 0) {
    id = data.length - 1;
  } else {
    id = id - 1;
  }
  display(id);
  resetInterval();
});

function update() {
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
}

// this method adds the index of the item that should be added to the cart in bagItems array if it is not already in the bagItems and shows the popup accordingly and removes the popup after 2 seconds on its own.
function addToCart() {
  // only adds the index to the bagItems if it is not present in the bagItems and then shows the pop ups accordingly
  if (!bagItems.includes(id)) {
    bagItems.push(id);
    update();
    document.querySelector(".added").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".added").classList.add("hidden");
    }, 2000);
  } else {
    document.querySelector(".already-added").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".already-added").classList.add("hidden");
    }, 2000);
  }
}
// this line binds the addToCart function with the add to cart button
document.querySelector(".add").addEventListener("click", addToCart);

//  this function is used to first execute the addToCart method and once it is executed then after 2 second just as the popup disappears it redirects user to the cart page
function buyNow() {
  addToCart();
  setTimeout(() => {
    window.location.href = "./cart.html";
  }, 2000);
}
// this line binds the buyNow function with the buy now button
document.querySelector(".buy").addEventListener("click", buyNow);

//  Purpose: this function is to remove the interval we created and then again set it
/* Explanation: we made it so that when we do next or previous planet so the time of interval starts again (ig. time interval: 5sec, and we clicked the next button on planet earth after 3sec so time for interval will start again from 0 for mars, but if not for this method it would have resumed from the 4th sec)*/
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(rightMove, 7000);
}
// Purpose: this line sets a time intervall after which rightMove() will pe applied automatically
interval = setInterval(rightMove, 7000);

load();
