let eKey = document.querySelector(".card.key p:last-child");
// console.log(eKey);
let eLocation = document.querySelector(".card.location p:last-child");
let eNumbers = document.querySelector(".card.numbers p:last-child");
let eCode = document.querySelector(".card.code p:last-child");
let notice = document.querySelector(".notice");
let container = document.querySelector(".container");

document.addEventListener("keydown", (e) => {
  eKey.innerText = e.key;
  eLocation.innerText = e.location;
  eNumbers.innerText = e.which;
  eCode.innerText = e.code;
  notice.classList.add("hide");
  container.classList.remove("hide");
});
