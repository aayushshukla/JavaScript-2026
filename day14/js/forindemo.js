/*
   for...in  primarily used to iterate over the property keys of an object

   normally we dont use for..in with arrays 
*/

let arr = ["aayush", "sriyash", "vamika"];

for (let name in arr) {
  console.log(name);
}

let employee = {
  name: "aayush",
  project: "training",
};

for (let key in employee) {
  console.log(key, employee[key]);
}
// what is class - class is a blueprint or it is an template
// what is an object : object is a real world entity that have state - (properties ) (instance variable) and behaviour (working) - method.
// object may have polymorphic behaviour
// object may use property of another object
// object stores the data - instance variable
/*

  Land                        RAM 
  Blueprint                   class 
  Raw Material                variable
  Workers                     methods , constructors ,destructors 
  Building                    object 


*/
class Person {
  city = "Bangalore"; // class variable - variable that is declared inside a class but outside any method
  // class vafriable have same properties all object util it is modified
  // difference in function and method
  // when a functionality of a function depends on an object it is knows as method

  welcomeMsg() {
    console.log(`User lives in ${this.city}`);
  }
}

let p1 = new Person(); // Person p  = new Person()
let p2 = new Person();
// objectref.attribute (method and property)
p1.welcomeMsg();
p2.welcomeMsg();
p1.city = "Delhi";
p2.city = "Pune";

new Person().welcomeMsg();
p1.welcomeMsg();
p2.welcomeMsg();

for (let key in p1) {
  console.log(`for in loopUser city is ${p1[key]}`);
}
