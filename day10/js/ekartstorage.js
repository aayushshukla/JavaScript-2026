const darkModeBtn = document.getElementById("darkModeBtn");
const lightModeBtn = document.getElementById("lightModeBtn");

// enable dark mode
darkModeBtn.addEventListener("click", () => {
  document.body.classList.add("dark"); // adding .dark class css to the body
  localStorage.setItem("theme", "dark");
});

lightModeBtn.addEventListener("click", () => {
  document.body.classList.remove("dark"); // removing .dark class css from the body
  localStorage.setItem("theme", "light");
});
// checking for save theme in local storage when page loads
let savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// shopping cart
function addToCart(product) {
  // onverts a JavaScript Object Notation (JSON) string into an object.
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product); // adding product in to array
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}
// display cart
function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.lenght === 0) {
    document.getElementById("cart").textContent = "Cart is empty";
  } else {
    document.getElementById("cart").textContent = " Cart :" + cart.join(",");
  }
}

// clear cart
function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}

displayCart();

// check out

function nextStep() {
  let step = Number(sessionStorage.getItem("checkOutStep")) || 0;
  step++;
  sessionStorage.setItem("checkOutStep", step);
  dispplayCheckOutStep();
}

function dispplayCheckOutStep() {
  let step = Number(sessionStorage.getItem("checkOutStep")) || 0;
  document.getElementById("checkoutStep").textContent = "Current Step " + step;
}

function resetCheckout() {
  sessionStorage.removeItem("checkOutStep");
  dispplayCheckOutStep();
}

dispplayCheckOutStep();
