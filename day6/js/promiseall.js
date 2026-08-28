const student1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Student 1 finished the assignment");
  }, 1000);
});

const student2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Student 2 finished the assignment");
  }, 3000);
});

const student3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Student 3 finished the assignment");
  }, 5000);
});

/*
all() Creates a Promise that is resolved with an array of results 
when all of the provided Promises resolve, or 
rejected when any Promise is rejected.


*/
Promise.all([student1, student2, student3]).then((result) => {
  console.log(result);
  console.log("All assignments are submitted");
});
