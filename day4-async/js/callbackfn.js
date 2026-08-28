/*
   Callback  function 

      any function that is passed as argument in another functions is called callback function.

      a  callaback function  that is to be executed after another function have finished the execution  that y we call them
      callback function 

      callback are way to make sure specific code doesnt execute until other execution is finished.

      Synchronous callbacks  -> executed immediately ex: filter ,map , reduce etc

      Asynchronous callbacks -> executed later after an operation completes.




*/

function show() {
  console.log("hello show function");
}

setTimeout(() => {
  show(); // calling of show
}, 2000);

const calculate = (n1, n2, op) => {
  return op(n1, n2);
};

const multiple = calculate(10, 20, function (x, y) {
  return x * y;
});

console.log(multiple);

const substraction = (a, b) => a - b;
// substraction is a callback function
const res = calculate(10, 5, substraction);

console.log("result after substraction", res);
