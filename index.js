const duck = {
  name: "aflac",
  numLegs: 2,
};

const dog = {
  name: "Minion",
  numLegs: 4,
  sayName: function () {
    return "this dog's name is Minion";
  },
  printThis: function () {
    return this;
  },
};

// console.log(dog["name"])
// console.log(dog.sayName())
// console.log(dog.printThis())

function getThis() {
  return this;
}

// console.log(getThis())
// getThis()
// console.log(globalThis)

// console.log(this); // Points to the global object (e.g., window in a browser)

function getThisStrict() {
  "use strict";
  return this;
}

// console.log(getThisStrict()) // "this" is undefined in strict-mode

const obj = {
  myMethod: function () {
    const arrowFunc = () => {
      console.log(this); // "this" refers to the parent object even if the arrow function is nested.
    };

    arrowFunc();
  },
};
// obj.myMethod()

// function Bird(){
//         this.name = "Albert"
//         this.color = "blue"
//         this.numLegs = 2
//     }

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

// const Albert = new Bird();
// console.log(Albert.name)
// console.log(Albert.color)

const Albert = new Bird("Albert", "red");
console.log(Albert.name)
console.log(Albert.color)