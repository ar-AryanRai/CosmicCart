let discount = 0;
let discountedPrice = 0;
let finalCost = 0;

bagItemsStr = localStorage.getItem("bagItems");
bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
onLoad();

function onLoad() {
  display();
  if (bagItems.length === 0) {
    document.querySelector(".bill").style.display = "none";
    const main = document.querySelector("main");
    main.classList.remove("justify-between");
    main.classList.add("justify-center", "items-center");
    main.innerHTML = `
      <div>
        <img src="../images/cart.jpg" class="w-[350px] h-[350px]"/>
        <p class="text-lg text-center bg-green-300 text-black font-bold rounded-3xl">Hey, it feels so light!</p>
      </div>
    `;
  }
}

let codes1 = [
  "GP4H3Z7J",
  "G-GPAYBJCN",
  "MINGPAUDHM31PAI8N",
  "SMOK7045GE1296CA",
];

function isValid() {
  const btn = document.querySelector(".valid");
  btn.classList.add("justify-around");
  btn.classList.remove("justify-center");
  const text = document.querySelector(".isValid");
  const final = document.querySelector(".cdprice");
  const code = document.querySelector(".in").value;
  const fc = document.querySelector(".fprice");
  if (code === "") {
    text.innerHTML = "Enter Coupon!!";
    text.classList.remove("text-red-400");
    text.classList.remove("text-green-400");
    text.classList.add("text-white");
    discount = 0;
  } else if (codes1.includes(code)) {
    if (code === codes1[1]) {
      if (bagItems.includes(5)) {
        text.innerHTML = "Coupon Applied!!";
        text.classList.add("text-green-400");
        discount = (20 / 100) * data[4].price;
      } else {
        text.innerHTML = "Coupon Not Valid!!";
        text.classList.add("text-red-400");
        discount = 0;
      }
    } else if (code === codes1[3]) {
      if (bagItems.includes(8)) {
        text.innerHTML = "Coupon Applied!!";
        text.classList.add("text-green-400");
        discount = (17 / 100) * data[7].price;
      } else {
        text.innerHTML = "Coupon Not Valid!!";
        text.classList.add("text-red-400");
        discount = 0;
      }
    } else if (code === codes1[0]) {
      if (bagItems.length === 2) {
        text.innerHTML = "Coupon Applied!!";
        text.classList.add("text-green-400");
        discount = (10 / 100) * discountedPrice;
      } else {
        text.innerHTML = "Coupon Not Valid!!";
        text.classList.add("text-red-400");
        discount = 0;
      }
    } else if (code === codes1[2]) {
      if (bagItems.length === 3) {
        text.innerHTML = "Coupon Applied!!";
        text.classList.add("text-green-400");
        discount = (15 / 100) * discountedPrice;
      } else {
        text.innerHTML = "Coupon Not Valid!!";
        text.classList.add("text-red-400");
        discount = 0;
      }
    }
  } else {
    text.innerHTML = "Coupon Not Valid!!";
    text.classList.add("text-red-400");
    discount = 0;
  }
  discount = Math.floor(discount);
  final.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm">${discount}</i>`;
  fc.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm">${
    finalCost - discount
  }</i>`;
}

const button = document.querySelector(".apply");
button.addEventListener("click", isValid);

function display() {
  const tcost = document.querySelector(".tprice");
  const dcost = document.querySelector(".dprice");
  const ddcost = document.querySelector(".ddprice");
  const cdcost = document.querySelector(".cdprice");
  const ccost = document.querySelector(".cprice");
  const fcost = document.querySelector(".fprice");
  let totalPrice = 0;
  let totalDiscount = 0;
  let tax = 9856;

  const product = document.querySelector(".products-in-cart");
  let ans = ``;
  bagItems.forEach((ele) => {
    totalPrice += data[ele - 1].oprice;
    totalDiscount += data[ele - 1].diff;
    ans += `<div class="prod border-2 w-[1000px] h-[180px] flex rounded-lg">
          <div class="image m-4 border-2 rounded-lg w-[150px] h-[150px]"><img class=" w-[150px] h-[144px] rounded-lg"
            src="${data[ele - 1].image}" alt=""></div>
          <div class="m-4">
          <div class="pname text-2xl font-medium flex justify-between text-orange-300">
            <div>${data[ele - 1].name}</div>
            <div class="cut cursor-pointer" onclick="del(${ele})"><i class="fa-solid fa-circle-xmark" style="color: #63E6BE;"></i></div>
          </div>
          <div class="desc text-justify mt-3 h-[100px] w-[800px]"> ${
            data[ele - 1].content
          } </div>
          <div class="price bg-orange-400 text-center rounded-xl w-[150px] text-black mt-2"> <i class="fa-solid fa-dollar-sign fa-sm">${
            data[ele - 1].price
          }</i> </div>
        </div>
      </div>`;
  });
  product.innerHTML = ans;
  discountedPrice = totalPrice - totalDiscount;
  finalCost = discountedPrice + tax;
  tcost.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm">${totalPrice}</i>`;
  dcost.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm">${totalDiscount}</i>`;
  ddcost.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm">${discountedPrice}</i>`;
  // cdcost.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm">${discount}</i>`;
  ccost.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm">${tax}</i>`;
  fcost.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm">${finalCost}</i>`;
  cdcost.innerHTML = `<i class="fa-solid fa-dollar-sign fa-sm">${discount}</i>`;
}

function popUp() {
  const pop = document.querySelector(".pop");
  pop.classList.remove("hidden");
  setTimeout(() => {
    pop.classList.add("hidden");
  }, 2000);
}

function del(ele) {
  bagItems = bagItems.filter((item) => item !== ele);
  if (bagItems.length === 0) {
    document.querySelector(".bill").style.display = "none";
    const main = document.querySelector("main");
    main.classList.remove("justify-between");
    main.classList.add("justify-center", "items-center");
    main.innerHTML = `
      <div>
        <img src="../images/cart.jpg" class="w-[350px] h-[350px]"/>
        <p class="text-lg text-center bg-green-300 text-black font-bold rounded-3xl">Hey, it feels so light!</p>
      </div>
    `;
  }
  popUp();
  isValid();
  display();

  localStorage.setItem("bagItems", JSON.stringify(bagItems));
}
