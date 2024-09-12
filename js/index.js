let id = 1;
let discNo = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
let interval;
let move = 0;
onLoad();

function onLoad() {
  bagItemStr = localStorage.getItem("bagItems");
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];

  display(id);
}

function popUp() {
  const pop = document.querySelector(".pop");
  pop.classList.remove("hidden");
  setTimeout(() => {
    pop.classList.add("hidden");
  }, 2000);
}

function popUp1() {
  const pop = document.querySelector(".pop1");
  pop.classList.remove("hidden");
  setTimeout(() => {
    pop.classList.add("hidden");
  }, 2000);
}

function buy() {
  if (!bagItems.includes(id)) {
    bagItems.push(id);
    popUp();
  }
  else{
    popUp1();
  }
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
}

function display(id) {
  let curr = discNo[id - 1];
  let prev;
  if (move === 0) {
    if (id === 1) {
      prev = discNo[7];
    } else {
      prev = discNo[id - 2];
    }
  } else {
    if (id === 8) {
      prev = discNo[0];
    } else {
      prev = discNo[id];
    }
  }
  const name = document.querySelector(".pname");
  const desc = document.querySelector(".desc");
  const image = document.querySelector(".image");
  const price = document.querySelector(".price");
  const activeCircle = document.querySelector(`.circles #${curr}`);
  const prevCircle = document.querySelector(`.circles #${prev}`);

  if (activeCircle) {
    activeCircle.style.backgroundColor = "rgb(254, 226, 26)";
  }
  prevCircle.style.backgroundColor = "rgb(163, 165, 165)";

  const obj = data[id - 1];
  if (obj) {
    name.innerHTML = `${obj.name}`;
    desc.innerHTML = `${obj.content}`;
    image.innerHTML = `<img src="${obj.image}" alt="">`;
    price.innerHTML = ` <i class="fa-solid fa-dollar-sign fa-sm">${obj.price}</i>`;
  } else {
    console.error("No data found for this ID");
  }
}

const next = () => {
  id = id + 1;
  move = 0;
  if (id > 8) {
    id = 1;
  }
  display(id);
  resetInterval();
};

const prev = () => {
  id = id - 1;
  move = 1;
  if (id < 1) {
    id = 8;
  }
  display(id);
  resetInterval();
};

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(next, 5000);
}

const buybtn = document.querySelector(".buy1");
buybtn.addEventListener("click", buy);

const left = document.querySelector(".left");
const right = document.querySelector(".right");
right.addEventListener("click", next);
left.addEventListener("click", prev);

interval = setInterval(next, 5000);
