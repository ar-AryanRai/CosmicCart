const lst = document.querySelector(".offer-box ul");
let ans = "";
codes.forEach((ele) => {
  ans += `<li class="border-2 rounded-lg text-center my-3">
          Code : <span class="code bg-orange-400 text-black border-2 border-white px-4 rounded-lg"> ${ele.code} </span> <br>
          Available On :   ${ele["available planet"]} <br>
          Description : <span class="font-medium"> ${ele.desc} </span>
        </li>`;
});
lst.innerHTML += ans;
