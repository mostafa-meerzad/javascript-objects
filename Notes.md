# Objects

Think about Objects as real world things that people can observe and interact with like cars, birds, houses... .

Objects have qualities or properties that define what makes up an object, similar objects share the same properties but may have different values for those properties like all cars have wheels, but not all cars have the same number of wheels.

Objects in javascript are used to model real world objects. giving them properties and behaviors just like their real world counterparts.

```js
const duck = {
  name: "aflac",
  numLegs: 2,
};
```

this object has two properties name of **aflac** and numLegs of **2**

## Accessing properties

There is two ways to access properties of an object:

* Dot Notation
  
  ```js
  const dog = {
    name: "Sparky"
  }

  dog.name
  ```

* Bracket Notation

  ```js
  const dog = {
    name: "Sparky"
  }

  dog["name"]
  ```

## Creating methods

Methods are properties that are functions that adds different behaviors to an object.

```js

  const dog = {
    name: "Sparky",
    numLegs: 4,
    sayName: function(){return "The name of this dog is Sparky"}
  }

  dog.sayName()

```