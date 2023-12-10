function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  const albert = new Bird("Albert", "red");
  
  // console.log(albert.hasOwnProperty("name"));
  // console.log(albert.hasOwnProperty("numLegs"));
  // console.log(albert.hasOwnProperty("color"));
  // console.log(albert.hasOwnProperty("sayHello"));
  
  // extract own properties of albert
  
  const ownProps = [];
  for (let p in albert) {
    if (albert.hasOwnProperty(p)) {
      ownProps.push(p);
    }
  }
  
  console.log("albert's own properties: ", ownProps);
  
  