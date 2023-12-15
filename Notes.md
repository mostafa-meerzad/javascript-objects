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

- Dot Notation

  ```js
  const dog = {
    name: "Sparky",
  };

  dog.name;
  ```

- Bracket Notation

  ```js
  const dog = {
    name: "Sparky",
  };

  dog["name"];
  ```

## Creating methods

Methods are properties that are functions that adds different behaviors to an object.

```js
const dog = {
  name: "Sparky",
  numLegs: 4,
  sayName: function () {
    return "The name of this dog is Sparky";
  },
};

dog.sayName();
```

## this keyword

In JavaScript, the `this` keyword is a special identifier that is automatically defined in the scope of every function. The value of `this` depends on how a function is called, and it provides a way to access the current execution context or the object that the function is invoked on.

The behavior of `this` can be a bit confusing, and it's important to understand the different scenarios in which it can be used. Here are some common cases:

1. **Global Context:**
   When `this` is used outside of any function or object, it refers to the global object. In a browser environment, the global object is usually `window`.

   ```javascript
   console.log(this); // Points to the global object (e.g., window in a browser)
   ```

2. **Function Context:**
   Inside a regular function, `this` refers to the global object (in non-strict mode) or `undefined` (in strict mode). However, if the function is a method of an object, `this` refers to the object that the method was called on.

   ```javascript
   function myFunction() {
     console.log(this);
   }

   myFunction(); // In non-strict mode, this refers to the global object (e.g., window)

   const obj = {
     myMethod: function () {
       console.log(this);
     },
   };

   obj.myMethod(); // this refers to the obj object
   ```

3. **Arrow Functions:**
   Arrow functions do not have their own `this` context. Instead, they inherit the `this` value from the enclosing scope.

   ```javascript
   const obj = {
     myMethod: function () {
       const arrowFunction = () => {
         console.log(this);
       };
       arrowFunction();
     },
   };

   obj.myMethod(); // this refers to the obj object, even inside the arrow function
   ```

4. **Event Handlers:**
   When a function is used as an event handler, `this` refers to the element that triggered the event.

   ```html
   <button id="myButton">Click me</button>

   <script>
     document.getElementById("myButton").addEventListener("click", function () {
       console.log(this); // this refers to the button element
     });
   </script>
   ```

5. **Constructor Functions:**
   When a function is used as a constructor with the `new` keyword, `this` refers to the newly created instance of the object.

   ```javascript
   function MyClass() {
     this.myProperty = 42;
   }

   const myObject = new MyClass();
   console.log(myObject.myProperty); // Outputs 42
   ```

Understanding the context in which a function is called is crucial for correctly interpreting the value of `this`. It's important to note that arrow functions have a different behavior compared to regular functions in terms of `this`, and they can be particularly useful in avoiding some common pitfalls associated with `this` in JavaScript.

## Constructor functions

Constructors are functions that create new **objects** they define properties and behaviors that will belong to the new object.

constructors are like blueprint for creating objects.

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

### Constructor function conventions:

1. constructor name must start with a Capital letter to distinguish them from normal functions.
2. constructors use **this** keyword to set properties of the object they will create. **this** inside a constructor refers to the newly created object.
3. constructors define properties and behaviors instead of returning a value unlike normal functions.

```js
function Dog() {
  this.name = "Sparky";
  this.color = "white";
  this.numLegs = 4;
}
```

### Create new object using a constructor

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

const Albert = new Bird();
```

**Note**: **new** operator is used when calling a constructor that tells javascript to create a new instance of that constructor and the **this** keyword inside constructor will point to the newly created object otherwise it may produce unexpected results.

properties of the new object instance can be accessed and modified just like any other object.

pass argument to constructor functions to create dynamic objects based on those values.

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

### InstanceOf operator

Any time a constructor function create a new object that **object** is said to be an instance of its **constructor**.
**instanceof** operator is a convenient way that Js provides to verify that. **instanceof** allows to compare an object to a constructor it returns **true** or **false** based on wether or not the object was created with the constructor.

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

const albert = new Bird("Albert", "red");
const crow = new Bird("Alexis", "black");

console.log(crow instanceof Bird);
```

### Own property

Object's own properties are those properties that are defined directly on the instance object.

**hasOwnProperty** is a method that is called on an object instance and returns a boolean based on wether the property is directly defined on the instance object or not.

properties defined in the constructor function become **own-properties** of the instance objects.

```js
instanceObject.hasOwnProperty(property) >>> boolean;
```

```js
albert.hasOwnProperty("name");
```

### Prototype properties

Prototype properties are those object properties that are shared among all object instances of a constructor.

prototype properties can be used to eliminate the repetitive properties and methods that are defined in the object-constructor thus includes in all object instances it might not be an issue if there are a few instances but if there are hundreds or thousands of instances that would be a lot of duplicated properties/methods.

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  // this.numLegs = 2 // this property is not going to change in all Bird instances thus makes duplicated property.
}

Bird.prototype.numLegs = 2; // numLegs property is added to Bird constructor's prototype level and is shared among all instances of this constructor

const albert = new Bird("Albert", "blue");
const toby = new Bird("Toby", "red");
const tweety = new Bird("Tweety", "green");
```

Since all instances automatically have the properties on the prototype think of prototype as a **recipe** for creating objects. nearly every objects in Js has a **prototype** property which is part of the constructor function that created it.

### Iterate over object properties

You can use a loop to iterate over properties of an object:

```js
const user = { name: "John", age: 34, job: "SE", email: "john@test.com" };

for (let prop in user) {
  console.log(prop); // this loop variable will represent each property of the user object
  console.log(user[prop]); // the value of each property
}
```

### Constructor property

**constructor** is a special property on object instances that references to the constructor function of which
the object is created.

you can check for the **constructor** of an object simply by accessing this property on the object instance.

**the problem is that you can overwrite this property as any other properties of an object.**

it is better to use `instanceof` operator

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

const aflac = new Bird("Aflac", "blue");
const aflacConstructor = aflac.constructor >>> Bird;
```

## Change Prototype Property To A New Object

In case of having multiple shared properties among object instances, instead of adding those props individually you can assign the constructor prototype property to a new object, this way you can add multiple properties all at once.

**Note**: remember to set the constructor property to the constructor function when assigning prototype to a new object, be cause doing this erases the constructor property.

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
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
```

## Understand where an object's prototype comes from

just like people inherit genes from their parents, an object inherit its prototype directly from the constructor function that created it.

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

const duck = new Bird("Donald");
```

**duck** inherit it's prototype from the **Bird** constructor function.

shown here

```js
Bird.prototype.isPrototypeOf(duck) >>> true;
```

## Prototype Chain

all objects with (a few exceptions) have a prototype. also an objects prototype is an object which means it also has a prototype for its own!.

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

const duck = new Bird("Donald");

console.log(Bird.prototype.isPrototypeOf(duck.prototype)); // true, duck prototype is inherited from Bird prototype

duck.hasOwnProperty("name");
```

the `hasOwnProperty` method is defined in `Object.prototype` which can be accessed by Bird.prototype. which can then be accessed by duck. this is an example of prototype chain. in this example `Bird` is the **superType** for `duck` and `duck` is the **subType**. `Object` is a **superType** for both `Bird` and `duck` and also `Object` is **superType** for all objects in JS, therefore any object can use `hasOwnProperty` method.

## Use Inheritance to avoid Repeating Yourself

```js
function Bird(name) {
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

// describe method is repeated in both Bird and Dog
Bird.prototype = {
  constructor: Bird,
  describe: function () {
    return `my name is ${this.name}`;
  },
};
//
Dog.prototype = {
  constructor: Dog,
  describe: function () {
    return `my name is ${this.name}`;
  },
};
```

create a **super type** and place all those shared properties and methods.

```js
function Bird(name) {
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

// create a super-type called Animal
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  describe: function () {
    return `my name is ${this.name}`;
  },
};
```

## Set the child's prototype to an Instance of Parent

use `Object.create(obj)` to implement inheritance for objects.

set `prototype` of **subtype** (Dog and Bird) to be an instance of (Animal):

```js
function Bird(name) {
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

// create a super-type called Animal
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  describe: function () {
    return `my name is ${this.name}`;
  },
};

// now inherit "describe" method from "Animal" super-type
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

const aflac = new Bird("aflac");
const sparky = new Dog("sparky");

console.log(aflac.describe()); >> "my name is aflac"
console.log(sparky.describe()); >> "my name is sparky"
console.log(aflac.constructor); >> "Animal"
console.log(sparky.constructor); >> "Animal"

Bird
```

`Object.create(obj)` creates a new object and sets `obj` as the new object's `prototype`

### Reset an inherited constructor property

when an object inherits it's prototype from another object it also inherits the supertype's constructor property.

```js
function Bird(name) {
  this.name = name;
}

function Animal() {
  this.describe = function () {
    return `my name is ${this.name}`;
  };
}

Bird.prototype = Object.create(Animal);
Bird.prototype.constructor = Bird;
```

## Add properties after inheritance

A constructor function can inherit it's prototype from a `supertype` constructor function can still have it's own properties in addition to inherited properties.

```js
function Animal() {}
Animal.prototype = {
  eat: function () {
    return "nom nom nom";
  },
};

function Bird() {}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
// in addition to the properties inherited from Animal you can add properties/methods that are unique to Bird constructor

Bird.prototype.fly = function () {
  return "I'm flying!";
};

const aflac = new Bird();

console.log(aflac.fly());
console.log(aflac.eat());
```
