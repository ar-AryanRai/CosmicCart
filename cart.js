function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
}

onLoad();
// let bagItems = [2, 4];

function showProducts() {
  let result = "";
  if (bagItems.length === 0) {
    result += `<div class="empty-bag w-[100%] flex justify-center items-center">
      <img class="w-[90%] lg:w-[32%] h-[60%]" src="./images/emptyBag.jpg" alt="It is an image of empty cart" />
    </div>
    <div class="oops py-2 rounded-xl w-[90%] lg:w-[40%] text-center text-lg lg:text-xl text-white font-medium bg-">OOPs! Looks like your cart is Empty</div>`;
    document.querySelector("main").innerHTML = result;
    document.querySelector("main").classList.add("flex-col", "items-center");
    document.querySelector(".calc").classList.add("hidden");
  } else {
    document.querySelector(".calc").classList.remove("hidden");
    bagItems.forEach((ele) => {
      result += `<div class="prod border-2 w-[100%] lg:w-[900px] h-[180px] flex lg:justify-between rounded-lg mb-2">
          <div class="image lg:ml-8 m-4 rounded-lg w-[30%] h-[100%] lg:w-[150px] lg:h-[150px] overflow-hidden">
            <img class=" w-[100%] h-[85%] lg:w-[150px] lg:h-[144px] rounded-lg"src="${data[ele].ppic}" alt="">
          </div>
          <div class="m-4 w-[70%] h-[100%]">
            <div class="pname lg:w-[100%] h-[15%] text-2xl font-medium flex justify-between items-center text-[#002200]">
              <div class="font-medium">${data[ele].pname}</div>
              <div class="cut lg:mr-2 cursor-pointer" onclick="remove(${ele})">
                <i class="fa-solid fa-circle-xmark" style="color: #63E6BE;"></i>
              </div>
            </div>
            <div class="desc text-justify mt-3 h-[70%] lg:h-[100px] lg:w-[800px]"> Most beautifull planet of the solar system. </div> 
            <div class="price bg-orange-400 h[15%] text-center rounded-xl w-[150px] text-black"> 
              <i class="fa-solid fa-dollar-sign fa-sm">${data[ele].price}</i>   
            </div>
          </div>
        </div>`;
      document.querySelector(".products-in-cart").innerHTML = result;
    });
    amount();
  }
}

showProducts();

function amount() {
  let total = 0;
  let discount = 0;
  let discountedPrice = 0;
  let convenience = 9998;

  bagItems.forEach((x) => {
    total += data[x].oprice;
    discount += data[x].diff;
    discountedPrice += data[x].price;
  });

  finalPrice = discountedPrice + convenience;

  document.querySelector(".tprice").textContent = `${total}`;
  document.querySelector(".dprice").textContent = `${discount}`;
  document.querySelector(".ddprice").textContent = `${discountedPrice}`;
  document.querySelector(".cdprice").textContent = `0`;
  document.querySelector(".cprice").textContent = `${convenience}`;
  document.querySelector(".fprice").textContent = `${finalPrice}`;
}

function couponVerify() {
  let val = document.querySelector("#of").value;
  if (coupons.includes(val)) {
    let index = coupons.indexOf(val);
    switch (index) {
      case 0:
        if (bagItems.length >= 2) {
          calculate(index);
        } else {
          notValid();
        }
        break;
      case 1:
        if (bagItems.includes(4)) {
          calculate(index);
        } else {
          notValid();
        }
        break;
      case 2:
        if (bagItems.length >= 3) {
          calculate(index);
        } else {
          notValid();
        }
        break;
      case 3:
        if (bagItems.includes(7)) {
          calculate(index);
        } else {
          notValid();
        }
        break;
    }
  } else {
    notValid();
  }
}

function notValid() {
  document.querySelector(".not-applied").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".not-applied").classList.add("hidden");
    document.querySelector("#of").value = "";
  }, 2000);
  document.querySelector(".cdprice").textContent = `0`;
  document.querySelector(".fprice").textContent = `${finalPrice}`;
}

function calculate(index) {
  document.querySelector(".applied").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".applied").classList.add("hidden");
  }, 2000);
  let couponDiscount = Math.floor(
    codes[index].red * parseInt(document.querySelector(".ddprice").innerText)
  );
  document.querySelector(".cdprice").textContent = `${couponDiscount}`;
  document.querySelector(".fprice").textContent = `${
    finalPrice - couponDiscount
  }`;
}

document.querySelector(".apply").addEventListener("click", couponVerify);

function remove(el) {
  bagItems = bagItems.filter((x) => x !== el);
  if (bagItems.length === 0) {
    bagItems = [];
  }
  update();
  document.querySelector(".pop").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".pop").classList.add("hidden");
  }, 2000);
  showProducts();
}

function update() {
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
}

function buyNow() {
  document.querySelector(".bought").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".bought").classList.add("hidden");
  }, 2000);
  bagItems = [];
  update();
  showProducts();
}
document.querySelector(".buyBtn").addEventListener("click", buyNow);
