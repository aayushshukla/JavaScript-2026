// add item to local storage
// localstorage item are added key value
// key value should be string  and keys should unique

localStorage.setItem("user", "vscode-agent");
localStorage.setItem("product", "laptop sony");

let productDetails = {
  productName: "HP Probook",
  price: "70000",
  company: "HP",
};
// String(productDetails)
//localStorage.setItem("productdetails", productDetails);
// JSON.stringfy  : converts js value to a json string
localStorage.setItem("productdetails", JSON.stringify(productDetails));

// get value from localstorage
console.log("Product name  is", localStorage.getItem("product"));
console.log("Product details", localStorage.getItem("productdetails"));
// return the name of nth key or
//  null if n is greater
//  n should be equal to number of key and value pair.
console.log(localStorage.key(2));

// no of item in localstorage
//he length read-only property of the Storage interface returns the number of data items stored in a given Storage object.
console.log(localStorage.length);

// remove from local storage
localStorage.removeItem("user");
console.log(localStorage.getItem("user"));

// localStorage.clear() method of the Storage interface clears all keys stored in a given Storage object.

// session storage - data will be maintain till browser/tab is not closed
let itemCount = 0;
itemCount += 1;
sessionStorage.setItem("sessionid", itemCount); // storing value in  session  storage
sessionStorage.setItem("session-created", "03-Sep-2026");
console.log(`Session id is ${sessionStorage.getItem("sessionid")}`); // getting value from session storage
console.log(
  `Session creation date ${sessionStorage.getItem("session-created")}`,
);

var count = 0;
function incr() {
  count++;
  sessionStorage.setItem("counting....", count);
  localStorage.setItem("counting..", count);
}
