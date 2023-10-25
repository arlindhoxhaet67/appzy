/* 
 * Filename: advanced_app.js
 * Content: An advanced application showcasing various JavaScript concepts
 */

// Declare and initialize constants
const PI = 3.14159;
const MAX_VALUE = 1000;

// Declare and define a class
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  // Declare an abstract method to be defined by subclasses
  calculateArea() {}
}

// Define a subclass of Shape
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  calculateArea() {
    return PI * Math.pow(this.radius, 2);
  }
}

// Define another subclass of Shape
class Square extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
  }

  calculateArea() {
    return Math.pow(this.sideLength, 2);
  }
}

// Create instances of the classes
const redCircle = new Circle("red", 5);
const blueSquare = new Square("blue", 10);

// Print the areas of the shapes
console.log("Area of the red circle:", redCircle.calculateArea());
console.log("Area of the blue square:", blueSquare.calculateArea());

// Define a higher-order function
function performCalculation(calcFunc) {
  return calcFunc(5, 10);
}

// Define some callback functions
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// Use the higher-order function with different callback functions
console.log("Result of addition:", performCalculation(add));
console.log("Result of multiplication:", performCalculation(multiply));

// Declare a generator function
function* fibonacciGenerator() {
  let previous = 0;
  let current = 1;

  while (true) {
    yield current;
    const temp = previous;
    previous = current;
    current = previous + temp;
  }
}

// Create an instance of the generator function
const fibonacci = fibonacciGenerator();

// Print the first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
  console.log("Fibonacci number:", fibonacci.next().value);
}

// Define an asynchronous function with a promise
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}

// Use the async function with the await keyword
async function fetchAndProcessData() {
  const data = await fetchData();
  console.log(data);
  console.log("Processing the data...");
}

fetchAndProcessData();

// Use array methods like map and filter
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);
console.log("Doubled numbers:", doubledNumbers);

const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// Implement a closure
function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log("Counter:", counter());
console.log("Counter:", counter());
console.log("Counter:", counter());

// Repeat individual characters in a string
function repeatCharacters(string) {
  return string
    .split("")
    .map((char) => char.repeat(3))
    .join("");
}

console.log("Repeated characters:", repeatCharacters("Hello"));

// Define a recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log("Factorial of 5:", factorial(5));

// Invoke a function in strict mode
(function () {
  "use strict";

  // Perform some operations...
})();

// Perform asynchronous operations using Promises
function simulateAsyncOperation(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async operation completed");
    }, time);
  });
}

console.log("Start of asynchronous operations");

const asyncOperations = [
  simulateAsyncOperation(1000),
  simulateAsyncOperation(2000),
  simulateAsyncOperation(3000),
];

Promise.all(asyncOperations)
  .then((results) => {
    console.log("All asynchronous operations completed");
    console.log("Results:", results);
  })
  .catch((error) => {
    console.error("An error occurred during the asynchronous operations");
    console.error("Error message:", error);
  });

console.log("End of program");