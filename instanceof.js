function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  function Dog(name) {
    this.name = name;
    this.numLegs = 4;
  }
  
  const albert = new Bird("Albert", "red");
  const sparky = new Dog("Sparky");
  
  const crow = new Bird("Alexis", "black");
  
  console.log(crow instanceof Bird);
  console.log(sparky instanceof Bird);
  console.log(crow instanceof Dog);
  