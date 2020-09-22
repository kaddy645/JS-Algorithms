//In JavaScript, think of objects as a collection of ‘key:value’ pairs.

//1. Creating objects using object literal syntax

const person = {
  firstName: 'FirstName',
  lastName: 'LastName',
};

console.log(person);
//2.Creating objects using the ‘new’ keyword

const human = new Object();
human.firstName = 'testFirstName';
human.lastName = 'testLastName';
console.log(human);

//3. Using ‘new’ with user defined constructor function

function student(fname, lname) {
  this.fN = fname;
  this.lN = lname;
}

const studentOne = new student('One', 'two');
console.log(studentOne);

//4. Using Object.assign() to create new objects.
//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

const comObject = { company: 'Apple' };
const devObject = { carName: 'software developer' };
const employee = Object.assign({}, comObject, devObject);
console.log(employee);

//5.Creating object with Object.create() method:
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const coder = {
  whoami: '',
  printIntroduction: function () {
    console.log(`My name is ${this.name}. whoami?: ${this.whoami}`);
  },
};
const me = Object.create(coder);
me.name = 'Kartik';
me.whoami = 'Javscript Developer';
me.printIntroduction();
