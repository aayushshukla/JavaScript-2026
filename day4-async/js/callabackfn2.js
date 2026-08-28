function getBurger(callback) {
  // outer function should finish
  setTimeout(() => {
    const burger = "🍔🍔🍔"; // windowkey + .
    console.log("Your order of three burgers is ready ", burger);
    callback(burger);
  }, 5000);
}
// variation 1
// function orderDetails(order) {
//   console.log("Please pay for 3 burgers", order);
// }

// console.log(getBurger(orderDetails));

console.log(
  getBurger((order) => {
    console.log("Please pay for 3 burgers", order);
  }),
);
