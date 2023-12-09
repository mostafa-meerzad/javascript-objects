
function getThis() {
    return this;
  }
  
  // console.log(getThis())
  // getThis()
  // console.log(globalThis)
  
  // console.log(this); // Points to the global object (e.g., window in a browser)
  
  function getThisStrict() {
    "use strict";
    return this;
  }
  
  // console.log(getThisStrict()) // "this" is undefined in strict-mode
  
  const obj = {
    myMethod: function () {
      const arrowFunc = () => {
        console.log(this); // "this" refers to the parent object even if the arrow function is nested.
      };
  
      arrowFunc();
    },
  };