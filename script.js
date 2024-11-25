let heartBtns = document.getElementsByClassName("fa-heart");
let trashBtns = document.getElementsByClassName("fa-trash-alt");
let plusBtns = document.querySelectorAll(".fa-plus-circle");
let minusBtns = document.getElementsByClassName("fa-minus-circle");
let quantities = document.getElementsByClassName("quantity");
let cards = document.getElementsByClassName("card");
let prices = document.getElementsByClassName("unit-price");
//console.log(prices)
for (let heartBtn of heartBtns) {
  heartBtn.addEventListener("click", function () {
    heartBtn.classList.toggle("toggleHeart");
  });
}
for (let trashBtn of trashBtns) {
  trashBtn.addEventListener("click", function () {
    trashBtn.parentElement.parentElement.parentElement.remove();
    total();
  });
}

const trashBtnsArr = Array.from(trashBtns);
for (let i = 0; i < trashBtns.length; i++) {
  trashBtns[i].addEventListener("click", function () {
    trashBtns[i].parentNode.parentNode.parentNode.remove();
    total();
  });
}

for (const plusBtn of plusBtns) {
  plusBtn.addEventListener("click", function () {
    plusBtn.nextElementSibling.textContent++;
    total();
  });
}
// let plusBtnTab = Array.from(plusBtns);
// console.log(plusBtnTab);
// for (let i = 0; i < plusBtns.length; i++) {
//   plusBtns[i].addEventListener("click", function () {
//     console.log(i);
//     console.log(plusBtnTab);
//     plusBtns[i].nextElementSibling.textContent++;
//     total();
//   });
// }

for (const minusBtn of minusBtns) {
  minusBtn.addEventListener("click", function () {
    if (minusBtn.previousElementSibling.textContent > 0) {
      minusBtn.previousElementSibling.textContent--;
      total();
    }
  });
}
let minusBtnTab = Array.from(minusBtns);
console.log(minusBtnTab);
for (let i = 0; i < minusBtns.length; i++) {
  minusBtns[i].addEventListener("click", function () {
    // console.loh(i);
    console.log(minusBtnTab);
    minusBtns[i].nextElementSibling.textContent++;
    total();
  });
}

function total() {
  let total = document.getElementById("total");
  let sum = 0;
  for (let i = 0; i < quantities.length; i++) {
    console.log(quantities[i].textContent);
    console.log(prices[i].textContent);
    sum =
      sum + Number(quantities[i].textContent) * Number(prices[i].textContent);
  }
  console.log(sum);
  total.textContent = sum;
}
