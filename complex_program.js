/* 
   Filename: complex_program.js
   Description: A complex program that demonstrates various functionalities in JavaScript.
*/

// Define a class for a shape
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Method to get the area of the shape
  getArea() {
    throw new Error('Method not implemented');
  }

  // Method to draw the shape
  draw() {
    console.log(`Drawing a ${this.color} shape`);
  }
}

// Define a class for a rectangle that inherits from Shape
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  // Override the getArea method for a rectangle shape
  getArea() {
    return this.width * this.height;
  }
}

// Define a class for a circle that inherits from Shape
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  // Override the getArea method for a circle shape
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Function to calculate the sum of all areas in an array of shapes
function calculateTotalArea(shapes) {
  let totalArea = 0;

  for (let shape of shapes) {
    if (shape instanceof Shape) {
      totalArea += shape.getArea();
    }
  }

  return totalArea;
}

// Create some instances of shapes
const rectangle1 = new Rectangle('red', 5, 8);
const rectangle2 = new Rectangle('blue', 10, 4);
const circle1 = new Circle('green', 6);
const circle2 = new Circle('yellow', 3);

// Create an array to hold the shapes
const shapes = [rectangle1, rectangle2, circle1, circle2];

// Calculate the total area of all the shapes
const totalArea = calculateTotalArea(shapes);
console.log(`Total area of all shapes: ${totalArea}`);

// Draw each shape
for (let shape of shapes) {
  shape.draw();
}

// Async function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function
fetchData('https://api.example.com/data');