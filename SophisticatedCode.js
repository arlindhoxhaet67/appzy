/** 
 * Filename: SophisticatedCode.js
 * Description: This code demonstrates a sophisticated and complex JavaScript program that implements a multi-level menu system.
 */

// Import required modules
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define menu items and their corresponding actions
const menuItems = {
  '1': { label: 'Add Numbers', action: addNumbers },
  '2': { label: 'Subtract Numbers', action: subtractNumbers },
  '3': { label: 'Multiply Numbers', action: multiplyNumbers },
  '4': { label: 'Exit', action: exitProgram }
};

// Entry point
function main() {
  displayMainMenu();
}

// Displays the main menu
function displayMainMenu() {
  console.log('=== Main Menu ===');
  console.log('1. Add Numbers');
  console.log('2. Subtract Numbers');
  console.log('3. Multiply Numbers');
  console.log('4. Exit');

  rl.question('Enter your choice: ', (choice) => {
    if (menuItems[choice]) {
      menuItems[choice].action();
    } else {
      console.log('Invalid choice!');
      displayMainMenu();
    }
  });
}

// Prompts for numbers and performs addition
function addNumbers() {
  console.log('=== Add Numbers ===');

  rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
      const result = parseInt(num1) + parseInt(num2);
      console.log(`Result: ${result}`);

      displayMainMenu();
    });
  });
}

// Prompts for numbers and performs subtraction
function subtractNumbers() {
  console.log('=== Subtract Numbers ===');

  rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
      const result = parseInt(num1) - parseInt(num2);
      console.log(`Result: ${result}`);

      displayMainMenu();
    });
  });
}

// Prompts for numbers and performs multiplication
function multiplyNumbers() {
  console.log('=== Multiply Numbers ===');

  rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
      const result = parseInt(num1) * parseInt(num2);
      console.log(`Result: ${result}`);

      displayMainMenu();
    });
  });
}

// Exits the program
function exitProgram() {
  console.log('Exiting...');
  process.exit(0);
}

// Start the program
main();