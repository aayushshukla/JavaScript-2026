// console.log(myname);
// var myname = "Aayush";

// var age; // declaration is process first
// console.log("age of user is ", age);
// age = 20;
// only declaration is hoisted not the values  assignment

console.log("user name is ", uname); // reference error cannot access uname before intialization
let uname = "aayush";

// let  and const are  hoisted or not ?  - these hoisted
// TDZ - Temporal dead zone : it is a period  from beginning of a scope until the let and const variable is initaliazed

// var does not have TDZ

{
  // TDZ is started

  console.log("user name is ", myname);
  let myname = "aayush";
  // TDZ ended
}

//  Scope starts  -->  TDZ  -> let myname  can not be accessed  -->  myname = aayush  -->  variable can not be used
