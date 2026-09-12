class Parent {
  constructor(msg) {
    console.log("Parent constructor", msg);
  }
  show() {
    console.log("show of parent");
  }
}

class Child extends Parent {
  constructor() {
    super("calling from child"); // super constructor is responsibel for invoking of parent class constructor
    console.log("child constructor");
  }
  display() {
    console.log("display of child");
  }
}
// class CHILDCLASSNAME extent PatentName
// constructor never inherited they will be invoker by super()
let child = new Child();
child.show();
child.display();
