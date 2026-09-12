let movie = {
  script: function () {
    console.log("script is back bone of a movie");
  },

  acting: function () {
    console.log("actors sells the movies");
  },
};

let bollywood = {
  song: function () {
    console.log("good songs influence the audience.");
  },
};

console.log("welcome bollywood movies");
// Inheritance using setPrototypeOf() it will set the protoype of a specified object O  to object proto or null
// it will return the object O
// @param o — The object to change its prototype.

//@param proto — The value of the new prototype or null
Object.setPrototypeOf(bollywood, movie);
bollywood.song();
bollywood.script();
bollywood.acting();
bollywood.action();
