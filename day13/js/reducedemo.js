let n = [10, 20, 30, 40];

let sum = n.reduce(function (total, num) {
  return total + num;
}, 0);
console.log(sum);

/*
array.reduce((accumulator,currentvalue)=>{
      return updateaccumulator
},intialvalue)

accumulator : stores the accumulated result
current value : current elemetn that is processed
initial value : starting value for accumulator

*/
const nums = [4, 59, 54, 32, 100, 101, 23, 32, 41];
// find the max value
const max = nums.reduce((largest, currentvalue) => {
  return largest > currentvalue ? currentvalue : largest;
}, nums[0]);
console.log("maximum value is ", max);

const names = [
  "aayush",
  "aafrin",
  "dhiyanesh",
  "aayush",
  "lavanya",
  "kabil",
  "kabil",
];
// count occurance of each element
const count = names.reduce((acc, name) => {
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});
console.log("no of occurance of names in list", count);
