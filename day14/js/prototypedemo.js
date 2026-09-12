/*
  prototype : is an object that another object can use as a fallback source

  If js can not find a property or method on an object itself , it looks up the object protoype chain


*/

let normalCalc = {
  n1: 10,
  n2: 20,
  add: function () {
    return `${this.n1 + this.n2}`;
  },
};

let sciCalc = {
  value: 45,
  sinvalue: function () {
    return `${Math.sin(this.value)}`;
  },
};

sciCalc.__proto__ = normalCalc;

console.log(sciCalc.sinvalue());
sciCalc.n1 = 100;
sciCalc.n2 = 200;
console.log(sciCalc.add());
