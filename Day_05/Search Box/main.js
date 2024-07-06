var searchBtn = document.querySelector(".search__btn");

searchBtn.addEventListener("click", function () {
  console.log(this); // this -> chính là button đang được click , this ko được dùng với arrow function()

  // lấy thẻ cha cảu search__btn -> .search-box
  this.parentElement.classList.toggle("open");

  // check debug chrom -> ko cần thiết code
  console.log(this.previousElementSibling);

  // Khi open tự động focus() input
  this.previousElementSibling.focus();
});
