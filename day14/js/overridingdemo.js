class Parent {
  year = 2021;
  show() {
    console.log("show of parent");
  }
}

class Child extends Parent {
  year = 2026; // there is single copy  because of prototype there is hiding
  show() {
    super.show(); // super keyword refers to immediate parent class
    // super we can access parent class attributes methods and variables

    console.log("show of child");
    console.log("child year is ", this.year);
  }
}

let c = new Child();

c.show();
console.log("child year is ", c.year);
