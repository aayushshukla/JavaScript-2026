/*
  constructor  is use to intialiase an object 
  constructor will be invoked at object creation

  default constructor
  userdefined constructor 

     syntax()
          constructor()  with no param
          constructor(param1,...param2) with parameter

*/

class Animal {
  msg = "welcome in jungle";
  // if use is not going to create any constructor there will be a default constructor
  // there is default constructor
}
const lion = new Animal();

class Jungle {
  msg = "welcome in jungle";
  // there is only 1 constructor
  // if there is a user defined constructor default constructor will not be created.
  constructor() {
    console.log(this.msg);
  }
}
const tiger = new Jungle();

class Anime {
  name;
  year;
  // if class variable and local variable have same name use this to differentiate between class and local variable
  // A class may only have one constructor
  constructor(name, year) {
    this.name = name;
    this.year = year;
    console.log(`anime name in constructor is ${name} and ${year}`);
  }

  getAnimeDetails() {
    console.log(`anime details are  ${this.name} and ${this.year}`);
  }
}

let anime = new Anime();
let naruto = new Anime("Naruto", 2014);
naruto.getAnimeDetails();
anime.getAnimeDetails();
