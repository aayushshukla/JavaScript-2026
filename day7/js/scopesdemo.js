/*
   scope : where a variable can be accessed in js program.
    global scope :  a varaible that is declared outside a function or a block  it is global scope.
    function scope : varible declared inside a function and it is accessible only inside a function .  using var , let or const
     block scope  : code inside {} braces. example if , else , for ,switch ,while etc
     let and const have block scope  but var is not block scoped

     nested scope  : js support scopes inside a scope 
     lexical  scope : a function can access variable based on where function is written in the code.
*/
let companyName = "Infosys"; // have global scope
// global variable has global scope

{
  var batchName = "PDA-Batch-4";
  let welcomeMsg = "Hello class we are learning about scopes"; //block scope
  const year = 2026; // block scope they are accessible inside the block only not the outside the block
  console.log(welcomeMsg);
  console.log("year of learning ", year);
  console.log("Batch name inside the block is ", batchName);
}

batchName = "PDA-Batch4-2026";

console.log("Updated Batch name outside  the block is ", batchName);
// console.error(
//   `accessing year and welcome msg outside the block  ${welcomeMsg} ${year}`,
// ); //  ReferenceError: welcomeMsg is not defined because it block scope

function hrDept() {
  let hrHeadName = "Satish";
  console.log("HR Dept of  ", companyName);
  console.log("Manage human source between managment and employee");
  console.log(`Head HR name is ${hrHeadName}`);
}

function devDept() {
  var tlName = "Karthik"; // function scope
  console.log(`Software dept of ${companyName}`);
  console.log("Working on product development");
  console.log(`Team leader name is ${tlName}`);
}

console.log(`Name of company is ${companyName}`);
hrDept();
devDept();

console.log("-------nested scope------");
let state = "Delhi";

function office() {
  let company = "IBM";
  //local function that have scope only inside outer function
  function employee() {
    let empName = "Chintu";
    console.log(`Employee name ${empName}`);
    console.log(`Company name ${company}`);
    console.log(`State name ${state}`);
  }

  employee();
}

office();

console.log("------lexical scope------");

let globalMsg = "Good evening classs";

function outer() {
  let outMsg = "Hello from outer function";

  function innerFunction() {
    let innerMsg = "Hello from innerMsg";
    // inner variable shadow outvariable
    let outMsg =
      "Outmsg modified by inner msg.  Variable shadowing  inner scope can have same name of variable as outer variable";
    console.log(globalMsg);
    console.log(outMsg);
    console.log(innerMsg);
  }

  console.error("outer msg", outMsg);
  console.error("globale msg", globalMsg);
  // console.error("inner msg", innerMsg); ReferenceError: innerMsg is not defined
  innerFunction();
}

outer();
// JS Search for variable --> innerFunction() --> inner scope --> outerscope ---> globalscope this is call scope chaining

// console.error(
//   `Hr name outside function is ${hrHeadName} and devlopment tlname is ${tlName}`,
// ); // hrHeadName is not defined  why because it is function scope it can  not be access outside the function scope.
