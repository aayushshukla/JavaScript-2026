// select button
const addToCartBtn = document.getElementById("addToCartBtn");
const displayMsg = document.getElementById("msg");
const resetBtn = document.getElementById("resetBtn");

// add the event listner
// addEventListener(evenetname , eventhandlerfunction() - handle event )
addToCartBtn.addEventListener("click", () => {
  displayMsg.innerText = "Laptop is added in the cart";
});

resetBtn.addEventListener("click", function () {
  displayMsg.innerText = "";
});

//addToCartBtn.removeEventListener()
