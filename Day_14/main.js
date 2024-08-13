let imgShow = document.querySelector(".show-img");
let prevBtn = document.querySelector(".btn-prev");
let nextBtn = document.querySelector(".btn-next");
let listImage = document.querySelectorAll(".list-media img");

let currentIndex = 0;
function getImageByIndex(index) {
  // remove active
  document.querySelectorAll(".list-media div").forEach((item) => {
    item.classList.remove("active");
  });

  let currentIndex = index;
  imgShow.src = listImage[index].src;
  // add active to current index
  listImage[index].parentElement.classList.add("active");
}

// click on -> set background with index background
listImage.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    imgShow.style.opacity = "0";

    setTimeout(() => {
      getImageByIndex(index);
      imgShow.style.opacity = "1";
    }, 400);
  });
});

// click prev btn -> set background
prevBtn.addEventListener("click", (e) => {
  if (currentIndex === 0) {
    currentIndex = listImage.length - 1;
  } else {
    currentIndex--;
  }
  imgShow.style.animation = "";
  setTimeout(() => {
    getImageByIndex(currentIndex);
    imgShow.style.animation = "fadeInLeft 1s ease-in-out forwards";
  }, 400);
});

// click next btn -> set background (current index = lenght -1 => current index = 0)
nextBtn.addEventListener("click", (e) => {
  if (currentIndex === listImage.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  imgShow.style.animation = "";
  setTimeout(() => {
    getImageByIndex(currentIndex);
    imgShow.style.animation = "fadeInRight 1s ease-in-out forwards";
  }, 400);
});
