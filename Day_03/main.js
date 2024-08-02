var openBtn = document.querySelector(".open-btn");
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".modal__footer--close");
var headerClose = document.querySelector(".modal__header--close");

function toggleModal(e) {
  // console.log(e.target);
  modal.classList.toggle("hide");
}
openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
headerClose.addEventListener("click", toggleModal);
// modal.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});
