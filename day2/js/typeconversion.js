/*
   typeconversion : 

       implicit  - js automatically converts the data type
        explicit  - developer converts the type

*/
// String to a number
let quantity = "10";
let gst = "5.976";
console.log("type of quantity", typeof quantity);
let no_of_quantity = Number(quantity);
console.log("type of no of quantity", typeof no_of_quantity);

console.log(
  "gst  after converting using parseInt , type of gst ",
  parseInt(gst),
  typeof parseInt(gst),
);

console.log(
  "gst  after converting using parseFloat , type of gst ",
  parseFloat(gst),
  typeof parseFloat(gst),
);

console.log(
  "gst  after converting using number , type of gst ",
  Number(gst),
  typeof Number(gst),
);

console.log("converting value using parseInt  ", parseInt("101dpi"));

console.log("converting value using Number  ", Number("101dpi"));

console.log(
  "---------------------------------------------------------------------",
);
// Convert String into Boolean non empty string --> true , empty striong - false
console.log("Converting string into boolean", Boolean("hello"));
console.log("Converting string into boolean", Boolean(""));
console.log("Converting string into boolean", Boolean("Null"));
console.log("Converting string into boolean", Boolean("false"));

console.log(
  "---------------------------------------------------------------------",
);
// Number to boolean -- any value expect 0 will be true
console.log("converting no into boolean ", Boolean(-10));
console.log("converting no into boolean ", Boolean(10));
console.log("converting no into boolean ", Boolean(0));
console.log("converting no into boolean ", Boolean(3.144));

console.log(
  "---------------------------------------------------------------------",
);
// Null and undefined boolean - it will be false
console.log("converting null into boolean ", Boolean(null));
console.log("converting undefined into boolean ", Boolean(undefined));

console.log(
  "----------------------------falsy values-----------------------------------------",
);
// falsy values -  false , 0 , '' ,"" , -0, null , undefined

console.log("converting array into boolean ", Boolean([]));
console.log("converting object into boolean ", Boolean({}));

// let age = Number(prompt("enter age"));
// console.log("type of age", typeof age);

// if (age > 18) {
//   alert("you can give vote");
// } else {
//   alert("can not give vote . Under age.");
// }

// Number to string  use String() or toString()
console.log(
  "----------------------------No to string convert -----------------------------------------",
);
console.log("converting no to string  ", typeof String(100));
console.log("converting no to string  ", typeof (100).toString());
