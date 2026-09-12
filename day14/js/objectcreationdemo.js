const student = {
  firstName: "Aayush",
  lastName: "Shukla",
  roll_no: 1,
  getFullName: function () {
    return `${this.firstName}  ${this.lastName}`;
  },
};

console.log(student.getFullName());

// creating an instance for student object
// Creates an object that has the specified prototype or that has null prototype.
const student1 = Object.create(student);
student1.firstName = "Sriyash";
student1.lastName = "Gupta";
console.log(student1.getFullName());
