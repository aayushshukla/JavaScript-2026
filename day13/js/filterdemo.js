const n = [11, 12, 31, 21, 41, 23, 22, 42];
/*
A function that accepts up to three arguments. 
The filter method calls the predicate function one time for each element in the array.


Returns the elements of an array that meet the condition specified in a callback function.

*/
const evenArray = n.filter((num) => num % 2 === 0);
console.log("even no ", evenArray);

const animeList = [
  { name: "shin", anime: "Kingdon", rating: 4.5 },
  { name: "naruto", anime: "naruto", rating: 4.8 },
  { name: "luffy", anime: "one piece", rating: 4.2 },
];
// anime list having rating more than 4.5
const filterList = animeList.filter((anime) => anime.rating >= 4.5);
console.log("Anime having rating more or equal 4.5", filterList);

const empList = [
  {
    name: "Pankaj",
    dep: "UI",
  },
  { name: "Aayush", dep: "UI" },
  { name: "Ajay", dep: "UI" },
  { name: "Harsh", dep: "UI" },
];
// name of employees starts with A or a
const filterEmpList = empList.filter((emp) =>
  emp.name.toLocaleLowerCase().startsWith("a"),
);
console.log(filterEmpList);
