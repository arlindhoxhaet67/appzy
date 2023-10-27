// Filename: ComplexCode.js
// Content: Complex and elaborate code showcasing various advanced JavaScript concepts

// Object representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Get the person's name
  getName() {
    return this.name;
  }

  // Set the person's age
  setAge(age) {
    this.age = age;
  }
}

// Function to calculate the factorial of a number recursively
function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Async function to fetch data from an API and perform calculations
async function fetchDataAndCalculate() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }

    console.log(`Sum of data: ${sum}`);
    console.log(`Factorial of sum: ${factorial(sum)}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Array of persons
const persons = [
  new Person('John Doe', 32),
  new Person('Mary Smith', 28),
  new Person('Bob Johnson', 40),
];

// Map each person's name to uppercase
const namesUpperCase = persons.map(person => person.getName().toUpperCase());

console.log('Names in uppercase:', namesUpperCase);

// Create a generator function to generate even numbers up to a given limit
function* evenNumberGenerator(limit) {
  let currentNumber = 0;
  while (currentNumber <= limit) {
    yield currentNumber;
    currentNumber += 2;
  }
}

// Use the evenNumberGenerator to generate even numbers
const evenNumbers = [];
const generator = evenNumberGenerator(10);
let next = generator.next();
while (!next.done) {
  evenNumbers.push(next.value);
  next = generator.next();
}

console.log('Even numbers:', evenNumbers);

// Example of using Promises
const multiplyAsync = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      reject(new Error('Both arguments must be numbers'));
    } else {
      resolve(num1 * num2);
    }
  });
}

multiplyAsync(5, 10)
  .then(result => {
    console.log('Multiplication result:', result);
  })
  .catch(error => {
    console.error('Error multiplying numbers:', error);
  });

// More lines of complex code...
// ...