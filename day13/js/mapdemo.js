const n = [10, 20, 30, 40];

function multipleBy7(n) {
  return n * 7;
}

// for (i = 0; i < n.length; i++) {
//   console.log(multipleBy7(n[i]));
// }
// Map function accepts upto 3 arguments
// the map method calls the callback function one time for each element in array/collection of items

console.log(n.map(multipleBy7));

const x = [11, 22, 21, 31, 41, 45, 51, 52];
console.log(x.map((n) => n / 2));

const animeList = [
  { name: "shin", anime: "Kingdon" },
  { name: "naruto", anime: "naruto" },
  { name: "luffy", anime: "one piece" },
];

// convert all names from animelist into uppercase

const modifiedAnimeList = animeList.map((obj) => ({
  characterName: obj.name.toLocaleUpperCase(),
  animeName: obj.anime.toLocaleUpperCase(),
}));

console.log(modifiedAnimeList);
