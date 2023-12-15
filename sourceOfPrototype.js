function Bird(name, color) {
    this.name = name;
    this.color = color;
  }
  function sayHello(){
    return "hello world"
  } 
  const aflac = new Bird("Aflac", "blue");
  
  // console.log(Bird.prototype.isPrototypeOf(aflac));
  // console.log(Object.prototype.isPrototypeOf(Bird));// >>> true 
  // console.log(Object.prototype.isPrototypeOf(Bird.prototype));
  // console.log(Object.prototype.isPrototypeOf(sayHello));
  // console.log(typeof aflac)
  // console.log(typeof Bird)
  // console.log(typeof sayHello)
  
  console.log(aflac.hasOwnProperty("name"))// true