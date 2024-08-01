let input = document.querySelector(".input__data");
let button = document.querySelector(".btn__add");
let listTodo = document.querySelector(".list");
let formAction = document.querySelector("form");

formAction.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputValues = input.value.trim();
  if (inputValues) {
    // Set default values: disabled
    // addListTodo({
    //   text: inputValues,
    //   status: "disabled",
    // });
    addListTodo({
      text: inputValues,
    });
    saveDataOnLocalStorage();
  }
  // Clear input after adding
  input.value = "";
});

function addListTodo(notice) {
  // Logical: {
  // text:
  // status: "disabled" // "disabled" or "enabled"
  //
  //}

  // Create a new li
  let li = document.createElement("li");
  li.innerHTML = `
          <span>${notice.text}</span>
          <i class="fa-regular fa-trash-can"></i>`;
  if (notice.status === "disabled") {
    li.classList.add("disabled");
  }

  // Add item on click and remove status on click element
  li.addEventListener("click", function () {
    // console.log(this);
    this.classList.toggle("disabled");
    saveDataOnLocalStorage();
  });

  // Remove item on click and remove status on click icon trash
  li.querySelector("i").addEventListener("click", function () {
    // console.log(this);
    this.parentElement.remove();
    saveDataOnLocalStorage();

    // Cach 2:
    // let index = tags.findIndex((item) => item.text === notice.text);
    // tags.splice(index, 1); // Remove element at index with length 1
    // getTags(); // Update data on DOM
  });
  listTodo.appendChild(li); // Append li to listTodo, not notice
}

// Save data in localStorage when the user reload web
function saveDataOnLocalStorage() {
  let listTodoElements = document.querySelectorAll("li");
  let saveData = [];

  listTodoElements.forEach(function (item) {
    let text = item.querySelector("span").innerText;
    let status = item.querySelector("span").getAttribute("class");

    saveData.push({
      text,
      status,
    });
  });

  localStorage.setItem("listTodo", JSON.stringify(saveData));
  // console.log(JSON.parse(localStorage.getItem("listTodo")));
}

// when user Reload web, data is saved not removed from web storage
function initial() {
  let data = JSON.parse(localStorage.getItem("listTodo"));
  data.forEach(function (item) {
    console.log(item);
    addListTodo(item);
  });
}

initial();
