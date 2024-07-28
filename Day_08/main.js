let container = document.querySelector(".container");
let input = document.querySelector(".container input");
let btnRemoveAll = document.querySelector(".btn-remove");
let tags = ["Html", "Css"];
// DOM và thêm dữ liệu vào
function getTags() {
  container.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    container.innerHTML += `<li>
                              ${tag}
                              <i class="fa-solid fa-xmark close" onclick="removeTag(${i})"></i>
                            </li>`;
  }
  // sau khi hàm chạy thì input ko bị mất đi và focus vào input
  container.appendChild(input);
  // input.focus();
}
getTags();

// Do nếu gán sự kiện cho từng khối  -> khi Tag các dữ liệu mới vào nó sẻ ko nhận dạng được sự kiện -> gán sự kiệnonclick = "removeTag()" vào Dom
// Remove data
function removeTag(index) {
  console.log(index);
  // Không sử dụng EventListenerg  vì mỗi lẫn addEventListener chỉ thức hiện tại lần đó . thêm mới vào ko nhận dạng
  tags.splice(index, 1); // xóa dữ liệu tại vị trí index
  getTags(); // cập nhật lại dữ liệu vào DOM
}

// Insert data
input.addEventListener("keydown", function (event) {
  // lắng nghe sự kiến click ENTER -> add data
  if (event.key == "Enter") {
    tags.push(input.value.trim()); // thêm dữ liệu và loại bỏ khoảng cách đầu cuối
    input.value = ""; // sau khi insert thì input -> rỗng
    getTags();
  }
});

// Delete all data
btnRemoveAll.addEventListener("click", function () {
  tags = []; // xóa tất cả dữ liệu
  getTags(); // cập nhật lại dữ liệu vào DOM
});
