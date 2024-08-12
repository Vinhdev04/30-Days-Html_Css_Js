let inputImg = document.querySelector("#input__img");

inputImg.addEventListener("change", (e) => {
  // console.log("change", inputImg.files[0]);

  let file = e.target.files[0];

  // yêu cầu đầu vào phải là file.jpg
  if (!file) return;
  if (!file.name.endsWith("jpg") && file.size / (1024 * 1024) > 1) {
    alert("Please select a file jpg");
    alert("Please select a file < 5MB");
    return;
  }

  // yêu cầu giới hạn kích thước file theo mb
  // if (file.size / (1024 * 1024) > 1) {
  //   alert("Please select a file < 5MB");
  //   return;
  // }
  let img = document.createElement("img");
  // tạo ra 1 đường dẫn tham chiếu đến đối tượng đang được lưu trữ ở trong máy
  img.src = URL.createObjectURL(file);

  // Cách 2: Chuyển đổi đường dẫn thành mã nhị phân  blob base64 bằng các ký tự
  let fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onloadend = function (e) {
    console.log("Uploading file", e.target.result);
    img.src = e.target.result;
  };
  document.querySelector(".view").appendChild(img);
});
