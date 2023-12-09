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
