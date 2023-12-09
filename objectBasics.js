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
  