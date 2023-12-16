let flyMixin = function (obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
};
// both way flyMixin works
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

// let bird = {
//   name: "Donald",
//   numLegs: 2,
// };

let bird = new Bird("Donald");
let plane = {
  model: "777",
  numPassengers: 524,
};

flyMixin(bird);
flyMixin(plane);
bird.fly();
plane.fly();
