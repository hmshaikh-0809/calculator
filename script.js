let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;

    // Save calculation in database
    saveCalculation(display.value);
  } catch {
    display.value = "Error";
  }
}

function saveCalculation(result) {
  fetch("http://localhost:3000/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ calculation: display.value, result: result })
  })
  .then(res => res.json())
  .then(data => console.log("Saved:", data))
  .catch(err => console.error("Error:", err));
}
