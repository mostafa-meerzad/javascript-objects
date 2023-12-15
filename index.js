function Bird(name) {
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

// describe method is repeated in both Bird and Dog
// Bird.prototype = {
//   constructor: Bird,
//   describe: function () {
//     return `my name is ${this.name}`;
//   },
// };

// Dog.prototype = {
//   constructor: Dog,
//   describe: function () {
//     return `my name is ${this.name}`;
//   },
// };

// create a super-type called Animal
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  describe: function () {
    return `my name is ${this.name}`;
  },
};

// now inherit "describe" method from "Animal" super-type
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Note: when an object inherit it's prototype form a "supertype" it also inherits it's "supertype's" constructor property due to this if you check the "constructor" property of "subtype" it will point to the "supertype"
const aflac = new Bird("aflac");
const sparky = new Dog("sparky");

console.log(aflac.describe());
console.log(sparky.describe());

console.log(sparky.constructor); // >> Animal
console.log(aflac.constructor); // >> Animal

// set the constructor property manually
Bird.prototype.constructor = Bird
Dog.prototype.constructor = Dog

console.log(sparky.constructor); // >> Dog
console.log(aflac.constructor); // >> Bird
