
function Bird(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  const aflac = new Bird("Aflac", "blue")
  aflac.constructor = "BS"
  const aflacConstructor = aflac.constructor //>>> Bird
  
  console.log(aflacConstructor)
  