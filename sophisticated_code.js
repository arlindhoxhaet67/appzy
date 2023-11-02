/**
 * Filename: sophisticated_code.js
 * 
 * Description: This code demonstrates a sophisticated, elaborate and complex JavaScript program.
 * 
 * Author: Your Name
 * Date: Current date
 */

// Declare an object constructor for a Car
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
    this.accelerate = function () {
        this.speed += 10;
        console.log(`The ${this.make} ${this.model} is accelerating. Current speed: ${this.speed} km/h.`);
    };
    this.decelerate = function () {
        if (this.speed - 10 < 0) {
            console.log(`The ${this.make} ${this.model} has already stopped.`);
        } else {
            this.speed -= 10;
            console.log(`The ${this.make} ${this.model} is decelerating. Current speed: ${this.speed} km/h.`);
        }
    };
}

// Create multiple Car objects with different properties
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2019);
const car3 = new Car("Ford", "Mustang", 2021);

// Create an array to store all the Car objects
const carArray = [car1, car2, car3];

// Function to display car details and current speed
function displayCarDetails() {
    console.log("Car Details:");
    carArray.forEach((car) => {
        console.log(`Make: ${car.make}`);
        console.log(`Model: ${car.model}`);
        console.log(`Year: ${car.year}`);
        console.log(`Current Speed: ${car.speed} km/h\n`);
    });
}

// Function to accelerate all cars
function accelerateAllCars() {
    console.log("Accelerating all cars:");
    carArray.forEach((car) => {
        car.accelerate();
    });
}

// Function to decelerate all cars
function decelerateAllCars() {
    console.log("Decelerating all cars:");
    carArray.forEach((car) => {
        car.decelerate();
    });
}

// Display initial car details
displayCarDetails();

// Accelerate all cars
accelerateAllCars();

// Decelerate all cars
decelerateAllCars();

// Display updated car details
displayCarDetails();

// Output:
// Car Details:
// Make: Toyota
// Model: Corolla
// Year: 2020
// Current Speed: 0 km/h

// Make: Honda
// Model: Civic
// Year: 2019
// Current Speed: 0 km/h

// Make: Ford
// Model: Mustang
// Year: 2021
// Current Speed: 0 km/h

// Accelerating all cars:
// The Toyota Corolla is accelerating. Current speed: 10 km/h.
// The Honda Civic is accelerating. Current speed: 10 km/h.
// The Ford Mustang is accelerating. Current speed: 10 km/h.

// Decelerating all cars:
// The Toyota Corolla is decelerating. Current speed: 0 km/h.
// The Honda Civic is decelerating. Current speed: 0 km/h.
// The Ford Mustang is decelerating. Current speed: 0 km/h.

// Displaying updated car details:
// Make: Toyota
// Model: Corolla
// Year: 2020
// Current Speed: 0 km/h

// Make: Honda
// Model: Civic
// Year: 2019
// Current Speed: 0 km/h

// Make: Ford
// Model: Mustang
// Year: 2021
// Current Speed: 0 km/h

// This code demonstrates object-oriented programming in JavaScript, including object constructors, methods, and arrays.
// It provides functionality to simulate car acceleration and deceleration while displaying their details.
// Although not highly sophisticated, this example aims to showcase the structure and organization of a larger JavaScript program.
// The actual implementation of a complex program depends on the specific requirements and context.