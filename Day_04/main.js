var images = document.querySelectorAll(".album__image img");
var iconPrev = document.querySelector(".prev");
var iconNext = document.querySelector(".next");
var iconClose = document.querySelector(".close");
var galleryInner = document.querySelector(".gallery__inner img");
var gallery = document.querySelector(".gallery");

// count image
var currentIndex = 0;

function showAlbum() {
  // Nếu ko còn ảnh để prev,next -> ẩn biểu tượng prev,next
  if (currentIndex == 0) {
    iconPrev.classList.add("hide");
  } else {
    iconPrev.classList.remove("hide");
  }

  if (currentIndex == images.length - 1) {
    iconNext.classList.add("hide");
  } else {
    iconNext.classList.remove("hide");
  }

  // trả về vị trí ảnh hiện tại đang click
  galleryInner.src = images[currentIndex].src;
  gallery.classList.add("showGallery");
}

images.forEach((item, index) => {
  item.addEventListener("click", function () {
    // gán biến  = vị trí ảnh hiện tại
    currentIndex = index;
    // trả về vị trí ảnh hiện tại đang click
    // galleryInner.src = images[currentIndex].src;
    // gallery.classList.add("showGallery");
    showAlbum();
  });
});

iconClose.addEventListener("click", function () {
  gallery.classList.remove("showGallery");
});

// lắng nghe sự kiện khi người dùng ấn vào phím ESC (27) -> close
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("showGallery");
  }
});

// lắng nghe sự kiến click cho prev và next
iconPrev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    showAlbum();
  }
});

iconNext.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showAlbum();
  }
});
