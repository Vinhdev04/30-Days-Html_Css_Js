const displayName = document.getElementById("display");

function appendKey(input) {
  displayName.value += input;
}

function clear() {
  displayName.value = "";
}

function remove() {
  // displayName.value = displayName.value.slice(0, -1);
  displayName.value = "";
}

function calculate() {
  try {
    const result = eval(displayName.value);
    displayName.value = result;
  } catch (error) {
    displayName.value = "Error";
  }
}
