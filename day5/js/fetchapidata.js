const url = "https://jsonplaceholder.typicode.com/users";
// fetch()  return a promise object
const result = fetch(url);

// step 1:  consuming promise object - 1 time
// if promise is fullfilled / resolved  this code will be executed
const response = result
  // step 2
  .then((value) => {
    return value.json(); // consuming time because json() return a promise
  })
  // .catch() will be executed if promise failed or rejected
  .catch((error) => {
    console.error("failed to fetch data", error);
  });
console.log(`result is ${result}`);
console.log(response);

// consume promise for 2 time

const userdata = response
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(`error while getting the data ${error}`);
    // let a = 10;
    // let b = 20;
    // console.log(`value of a is ${a} value of b is ${b} and sum is = ${a + b}`);
  });
