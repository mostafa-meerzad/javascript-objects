function Animal() {}
Animal.prototype = {
  eat: function () {
    return "nom nom nom";
  },
};

function Bird() {}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
// in addition to the properties inherited from Animal you can add properties/methods that are unique to Bird constructor

Bird.prototype.fly = function () {
  return "I'm flying!";
};

Bird.prototype.eat = function () {
  return "Bird is eating: peck peck peck"
}

const aflac = new Bird();

console.log(aflac.fly());
console.log(aflac.eat());
console.log(Bird.prototype.isPrototypeOf(aflac));
