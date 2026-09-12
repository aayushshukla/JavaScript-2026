const product = document.getElementById("productLaptop");
const message = document.getElementById("msg");

product.addEventListener("mouseover", () => {
  product.style.background = "#22ff33";
  message.style.color = "white";
  message.innerText = "Product is available for discount ";
});
function mouseOutEvent() {
  product.style.background = "grey";
  message.innerText = "Last few minutes deal to end ";
}
// product.addEventListener("mouseout", () => {
//   product.style.background = "grey";
//   message.innerText = "Last few minutes deal to end ";
// });

product.addEventListener("mouseout", mouseOutEvent);

//product.removeEventListener("mouseout", mouseOutEvent);
