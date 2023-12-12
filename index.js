function Bird(name, color) {
  this.name = name;
  this.color = color;
}

const aflac = new Bird("Aflac", "blue");

console.log(Bird.prototype.isPrototypeOf(aflac));
