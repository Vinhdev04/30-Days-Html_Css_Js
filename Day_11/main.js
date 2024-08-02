let btnSuccess = document.querySelector(".container .btn__success ");
let btnWarning = document.querySelector(".container  .btn__warning ");
let btnError = document.querySelector(".container  .btn__error");

// Show the success message
btnSuccess.addEventListener("click", function () {
  showMessage("success");
});

// Show the warning message
btnWarning.addEventListener("click", function () {
  showMessage("warning");
});

// Show the error message
btnError.addEventListener("click", function () {
  showMessage("error");
});

// Hàm hiển thị thông báo
function showMessage(status) {
  let tempMessage = ` 
              <i class="fa-solid fa-circle-check icon__success"></i>
              <span class="desc">This is a success message</s>`;
  switch (status) {
    case "success":
      tempMessage = ` 
              <i class="fa-solid fa-circle-check icon__success"></i>
              <span class="desc">This is a success message</s>`;
      break;
    case "warning":
      tempMessage = ` 
                <i class="fa-solid fa-circle-exclamation"></i>
                <span class="desc">This is a warning message</s>`;
      break;
    case "error":
      tempMessage = ` 
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span class="desc">This is an error message</s>`;
      break;
  }
  // <div class="message success">
  //     <i class="fa-solid fa-circle-check icon__success"></i>
  //     <span class="desc">This is a success message</s>
  //     <span class="time__line"></span>
  //   </div>
  //   <div class="message warning">
  //     <i class="fa-solid fa-circle-exclamation"></i>
  //     <span class="desc">This is a warning message</s>
  //     <span class="time__line"></span>
  //   </div>
  //   <div class="message error">
  //     <i class="fa-solid fa-triangle-exclamation"></i>
  //     <span class="desc">This is an errored message</s>
  //     <span class="time__line"></span>
  //   </div>

  // Tạo message mới và thêm vào list message
  let mess = document.createElement("div");
  mess.classList.add("message");
  mess.classList.add(status);
  // mess.innerHTML = `
  //               <i class="fa-solid fa-circle-check icon__success"></i>
  //               <span class="desc">This is a success message</s>
  //               <span class="time__line"></span>
  //               `;
  mess.innerHTML = `   
                ${tempMessage}
                <span class="time__line"></span>
                `;
  let listMes = document.getElementById("message");
  listMes.appendChild(mess);

  // Hien thi message sau 4s
  setTimeout(function () {
    mess.style.animation = `moveHide 2s ease forwards`;
  }, 2000);

  // Xóa message sau 6s khoi DOM
  setTimeout(function () {
    mess.remove();
  }, 4000);
}
