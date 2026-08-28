let productName = "Laptop";
let customerName = "Aayush";
let category = "Electronics";
let price = 75000;
let quantity = 5;

let inStock = true; // boolean
let discount; // undefined
let couponCode = null;
let colors = ["Black", "White", "Grey"];
let product = {
  productId: 101,
  productName: "HP Laptop Pro Book",
  price: 85000,
  brand: "HP",
};
console.log(productName);
document.getElementById("productName").textContent = productName;
document.getElementById("price").textContent = price;
document.getElementById("quantity").textContent = quantity;
document.getElementById("customerName").textContent = customerName;
document.getElementById("category").textContent = category;

if (inStock) {
  document.getElementById("stockStatus").textContent = "Available";
} else {
  document.getElementById("stockStatus").textContent = "Out Of Stock";
}
// Arithmetic operator : + , - , * , ** exponential , / , % modulus  - remainder , ++ , --
//  ** , Math.pow(x,y) x raise to power of y
let total = price * quantity;

document.getElementById("total").textContent = total;

console.log("Discount", discount);
console.log("Coupon code", couponCode);
console.log("productName", typeof productName);
console.log("product price", typeof price);
console.log("product details ", typeof product);
console.log("product coupon code", typeof couponCode); // null value type of will give object
console.log("product discount ", typeof discount);
console.log("product colors", typeof colors); // it will object type

console.log("Product info", product);
console.log("Product 1 brand name", product.brand);
function placeOrder() {
  // && operator
  if (inStock && quantity > 0) {
    document.getElementById("message").textContent = "Order Is Placed";
  } else {
    document.getElementById("message").textContent =
      "Product is not avilable . Try Again Later.";
  }
}
