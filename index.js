
function Dog(name)
{
  this.name = name;
  this.numLegs = 4
}

const sparky = new Dog("Sparky")
console.log(sparky.name)
console.log(sparky.numLegs)

// overwrite numLegs property
sparky.numLegs = 3
console.log(sparky.numLegs)
console.log()
// restrict the properties scope
function Bird(){
  let hatchedEgg = 10

  this.getHatchedEggCount = function(){
    return hatchedEgg
  }
}

const duck = new Bird()
console.log(duck.getHatchedEggCount())
// if you try to overwrite a property after restricting it's scope you just end up with adding a new property instead of overwriting the object's property.

duck.hatchedEgg = 100
console.log(duck.getHatchedEggCount())
console.log(duck.hatchedEgg)