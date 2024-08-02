let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let form = document.querySelector("form");

// Hàm show error message
function showError(input, message) {
  // console.log(input.parentElement.querySelector("small"));
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}
// showError(username, "Lỗi");

// Hàm show success message
function showSuccess(input) {
  // console.log(input.parentElement.querySelector("small"));
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}
// showSuccess(input);

// Hàm check dữ liệu rỗng
function checkEmptyInvalid(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();

    // Nêu input rỗng
    if (!input.value) {
      isEmptyError = true;
      // Show Error Message
      showError(input, "Data is not a empty ");
    } else {
      // Show Success Message
      showSuccess(input);
    }
  });
  return isEmptyError;
}

// Hàm Check Email
function checkEmail(input) {
  // Lấy regex eamil từ Stackoverflow.com
  let regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  input.value = input.value.trim();
  // Khởi tạo và gán biến Email lỗi
  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not a valid email address");
  }
  return isEmailError;
}

// Hàm Check Password
function checkLengthPassword(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    showError(input, `Password must be at least ${min} characters`);
    return true; // có lỗi
  }
  if (input.value.length > max) {
    showError(input, `Password must be less than ${max} characters`);
    return true;
  }
  // showSuccess(input);
  return false; // ko có lỗi
}

// Check password trùng nhau
function checkPasswordMatch(passwordInput, cfPasswordInput) {
  // Kiểm tra mật khẩu có trùng khớp ko
  if (passwordInput.value !== cfPasswordInput.value) {
    showError(cfPasswordInput, "Passwords do not match");
    // return true nếu có lỗi
    return true;
  }
  // showSuccess(cfPasswordInput);

  // return false  ko có lỗi
  return false;
}

form.addEventListener("submit", function (e) {
  // ko reload trang khi ấn submit
  e.preventDefault();

  // Check email
  let isEmptyError = checkEmptyInvalid([
    username,
    email,
    password,
    confirmPassword,
  ]);
  let isEmailError = checkEmail(email);

  // Check Username
  let isUsernameError = checkLengthPassword(username, 10, 20);

  // Check password
  let isPasswordError = checkLengthPassword(password, 10, 20);

  // Check password trùng nhau
  let isPasswordMathError = checkPasswordMatch(password, confirmPassword);

  if (
    isEmailError ||
    isPasswordMathError ||
    isPasswordError ||
    isEmptyError ||
    isUsernameError
  ) {
    // Nếu một trong số lỗi -> ko thực hiện
  } else {
    // Xử lý logic
  }
});
