function Bird(name, color) {
    this.name = name;
    this.color = color;
    // this.numLegs = 2;
    // this.eat = function(){
    // return "nom nom nom"
    // };
  }
  // adding props individually
  // Bird.prototype.eat = function () {
  //   return "nom nom nom";
  // };
  // Bird.prototype.describe = function(){
  // return `my name is ${this.name}`;
  // }
  // Bird.prototype.numLegs = 2
  
  // adding prototype props all at once
  Bird.prototype = {
    constructor: Bird,
    eat: function () {
      return "nom nom nom";
    },
    describe: function () {
      return `my name is ${this.name}`;
    },
    numLegs: 2,
  };
  
  const aflac = new Bird("Aflac", "blue");
  const toby = new Bird("Toby", "green");
  const sphinx = new Bird("Sphinx", "red");
  
  console.log(aflac.numLegs);
  console.log(aflac.describe());
  console.log(aflac.constructor);
  