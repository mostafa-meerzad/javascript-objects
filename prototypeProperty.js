function Bird(name, color) {
    this.name = name;
    this.color = color;
    // this.numLegs = 2; // same property automatically includes to all instances of this constructor
  }
  
  Bird.prototype.numLegs = 2 // numLegs property is added to Bird constructor's prototype level and is shared among all instances of this constructor
  const albert = new Bird("Albert", "blue");
  const toby = new Bird("Toby", "red");
  const tweety = new Bird("Tweety", "green");
  
  console.log(albert.numLegs);
  console.log(toby.numLegs);
  console.log(tweety.numLegs);
  