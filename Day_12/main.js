// main.js
const body = document.querySelector("body");
let ranger = document.querySelector(".ranger");
let rangerBar = document.querySelector(".ranger-bar");
let valuePercent = rangerBar.querySelector("span");

// Hàm cập nhật lại tiến trình theo % của ranger bar
function updateRanger(percent) {
  rangerBar.style.width = `${percent}%`;
  valuePercent.innerHTML = `${percent}%`;

  // Thay đổi màu nền của body dựa trên phần trăm
  body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`;
}

// Lắng nghe sự kiện di chuột
ranger.addEventListener("mousemove", function (e) {
  let rangerRect = this.getBoundingClientRect();
  let rangerWidth = e.clientX - rangerRect.left;
  let percent = (rangerWidth / this.offsetWidth) * 100;
  percent = Math.round(percent);

  // Cập nhật thanh ranger-bar và giá trị phần trăm
  updateRanger(percent);
});
