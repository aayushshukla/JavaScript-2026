/*
logical and      &&
logical or       ||
logical not      !  

OR 
--------------------
C1   C2     R

T    F      T
F    T      T
T    T      T
F    F      F

c1, c2 , c3 ... cn -- 
c1....cn-1  - false
cn  - true  

Bitwise operators 

&     bitwise and
|     bitwise or
^     bitwise xor   different bits returs  1
~      not           //  ~n = -(n+1)
<<    left shift
>>    right shift

String operator + 
ternary operator  condition ? true task :  false task
type operators : 
   typeof   check variable data type
   instanceof  object belongs to a particular class
   Nullish opertors  -- ??  it retursn right hand side value only if left hand value null or undefined

Spread operator  ...
descructiing rest operator     ...rest

optional chaining    ?.
safely access nested object properties
it is used to safely access properties and methods of an object without getting error when valus is undefined or null


*/
console.log("bitwise and", 7 & 3);
console.log("bitwise or", 7 | 3);
console.log("bitwise xor", 7 ^ 3);
console.log("bitwise not", ~5); //
console.log("bitwise leftshift", 7 << 1);
console.log("bitwise leftshift 2 places", 7 << 2);
console.log("bitwise right shift", 7 >> 1);
console.log("bitwise unsighned right shift", 7 >>> 1);
console.log("bitwise right shift", -7 >> 1); // it will preserve the sign
console.log("bitwise unsighned right shift", -7 >>> 1);
console.log("bitwise right shift", 7 >> 1);
let amount = 20000;
console.log(
  "amount validation",
  amount % 100 === 0 && amount > 100 ? "valid amount" : "invalid amount",
);
let colors = ["red", "green", "blue"];
console.log("type of colors", typeof colors);
console.log("it is of array ", colors instanceof Array);
let age = null;
let age1;
console.log("age is null ", age ?? "age is null");
console.log("check age1 is undefined ", age ?? "age is undefined");

let emp = {
  name: "aayush",
  dept: "FNPR",
  address: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  },
};
//console.log("employee name", emp.name.lastname);
console.log("name of emp", emp.name);
console.log("address of emp", emp.address);
console.log("employee city name", emp.address.city);
console.log("employee pincode ", emp.address?.pincode);
console.log("employee name using optional chaining", emp.name?.lastname);

let dc = ["flash", "batman", "aquaman", "superman"];
let marvel = ["hulk", "thor", "captain ", "black widow"];
let marvelDCUniverse = [...dc, ...marvel];
let dcCopy = [...dc];
console.log("Marveldc universe", marvelDCUniverse);
console.log("dc copy", dcCopy);

let emp1 = {
  ...emp,
};
console.log("employee 1", emp1);
/*
   7  -    0111
   3  -    0011
   ------------  &
          0011  -  3
    -----------   |
         0 111

XOR   7  -  0111
      3 -   0011
      ----------
            0100


Leftshift 
     7 ---   00000111
     7<<1   - 00001110
     7<<2  -- 00011100

Right shift      00000111
     7 >> 1   -- 00000011
     7>> 2    -- 00000001


*/
