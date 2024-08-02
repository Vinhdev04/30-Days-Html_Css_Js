var searchBtn = document.querySelector(".search__btn");
searchBtn.addEventListener("click", function () {
  console.log(this);
  this.parentElement.classList.toggle("open");

  console.log(this.previousElementSibling);
  this.previousElementSibling.focus();
});
