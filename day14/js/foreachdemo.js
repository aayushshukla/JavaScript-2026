/*
  foreach() array method used to execute a finction for every element of an array

  array.foreach(function(){})

  we can not use break and continue directly inside callback method of foreach 

*/

let arr = ["aayush", "sriyash", "vamika"];
arr.forEach((name) => {
  console.log(name);
});

arr.forEach((name, index) => {
  console.log(`Student index is ${index} name is ${name}`);
});

arr.forEach((name, index, array) => {
  console.log(`Student index is ${index} name is ${name}`);
  console.log("array is", array);
});
