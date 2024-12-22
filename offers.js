function copy1(code, count) {
  const text = code;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const show = document.querySelector(`.show-${count}`);
      show.classList.remove("hidden");
      setTimeout(() => {
        show.classList.add("hidden")[count - 1];
      }, 1000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

const lst = document.querySelector(".offer-box ul");
let ans = "";
let count = 0;
codes.forEach((ele) => {
  count += 1;
  ans += `<li class="border-2 rounded-lg pt-1 pl-4 mb-4">
          <div class="relative">Code : <span class="code bg-orange-400 text-black border-2 border-white px-4 rounded-lg"> ${ele.code} </span>
            <span class="show-${count} hidden">
              <span class="absolute bg-blue-200 text-black px-2 top-[13px] right-[76px] rotate-45 w-[5px] h-[10px]"></span>
              <span class="absolute bg-blue-200 text-black px-2 rounded-xl right-[20px]">Copied</span>
            </span> 
            <span class="cop  ml-4 px-2 py-1 bg-green-300 rounded-xl text-[#183051] cursor-pointer" onclick="copy1('${ele.code}',${count})"><i class="fa-solid fa-copy fa-lg"></i></span>
          </div>
          <div>Available On :   ${ele["available planet"]}</div>
          <div>Description : <span class="font-medium"> ${ele.desc} </span></div>
        </li>`;
});
lst.innerHTML += ans;
