// IIFE - immediately invoked function expression
(function () {
  let name = "aayush";
  console.log("user name is", name);
})();

(() => {
  let lastName = "shukla";
  console.log("user last name is", lastName);
})();
// named functions
const add = function sum(x, y) {
  return x + y;
};
console.log(` sum is ${add(10, 20)}`);

setTimeout(() => {
  console.log("anonymous functions commonly used as callbacks");
}, 1000);
/*
  functions arguments
  positional 
  default
  rest argument
  function as an argument
  argument object
  destructuring arguments

*/
function createUserName(firstName, middleName = "Doe", lastName = "Joy") {
  return firstName + " " + middleName + " " + lastName;
}

console.log("user name is ", createUserName("Aayush", "Shukla")); //positional argument
console.log("user name is ", createUserName("John")); //positional argument

//  // rest arguments  always uses ...
function printData(...data) {
  console.log(data);
  for (let dp of data) {
    console.error(dp);
  }
  console.log("-----------------");
}

printData(1);
printData(10, 20);
printData("Aayush", "Shukla");
printData(10, "a", "c", 40, 40, 50, 50, 50);

// argument object - normal function have an arguments object containing the argument passed to them
function displayArguments() {
  console.log(arguments);
  console.log(`number of arguments  ${arguments.length}`);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

displayArguments("goku", "vageta");

// destructuring arguments - destructure  an object diretly in function
function showAddress({ city, pincode, state, country }) {
  console.log(`City name is ${city}`);
  console.log(`Pincode is ${pincode}`);
  console.log(`State name is ${state}`);
  console.log(`Country name is ${country}`);
}

const address = {
  city: "Delhi",
  pincode: 110000,
  state: "New Delhi",
  country: "India",
};

showAddress(address);
