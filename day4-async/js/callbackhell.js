/*
   Callback hell 

      Nesting of callbacks
      Code looks like pyramid hard to read
      Difficult to debug and maintain 

    Example 1
      Show cart  ->  after show cart  -->  add item in cart  -> order details --> payment  -> order confirmation 

      Example 2 
        Student registration --> afer  -->  course material  
        After course material -->  give exam  --> show result


    How to resolve callback hell 
        - Promise
        - Aysnc/await 





*/
console.log("-----Hell is starting -----");
function registerStudent(callback) {
  setTimeout(() => {
    console.log("Student register successfully ");
    callback();
  }, 3000);
}

function getMaterial(callback) {
  setTimeout(() => {
    console.log("Student get course material ");
    callback();
  }, 3000);
}

function scheduleExam(callback) {
  setTimeout(() => {
    console.log("Student exam is schedule for 7 sep 2026 ");
    callback();
  }, 3000);
}

function publishResult() {
  setTimeout(() => {
    console.log("Student result will be publish on 12 sep 2026 ");
  }, 3000);
}

console.log("----callback hell is starting -----");

registerStudent(() => {
  getMaterial(() => {
    scheduleExam(() => {
      publishResult();
    });
  });
});
