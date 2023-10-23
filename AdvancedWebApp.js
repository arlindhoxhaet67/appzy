/* 
Filename: AdvancedWebApp.js
Description: A sophisticated and complex web application that utilizes advanced JavaScript concepts and techniques.
*/

// Constants
const MAX_RETRIES = 3;
const TIME_INTERVAL = 5000; // 5 seconds

// Variables
let retries = 0;
let activeRequest = false;
let dataStore = {};

// Objects
const User = function(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

const HttpClient = {
  baseUrl: 'https://api.example.com',
  
  get: function(endpoint, params) {
    let retriesLeft = MAX_RETRIES;
    let url = `${this.baseUrl}/${endpoint}`;
    
    return new Promise((resolve, reject) => {
      const sendRequest = () => {
        if (retriesLeft == 0) {
        	reject(new Error('Failed to retrieve data!'));
          return;
        }
        
        if (activeRequest) {
          setTimeout(sendRequest, TIME_INTERVAL);
          retriesLeft--;
          return;
        }
        
        activeRequest = true;
        
        // Simulate AJAX request
        setTimeout(() => {
          if (Math.random() < 0.8) {
            resolve({ data: { endpoint, params }, success: true });
          } else {
            reject(new Error('Request failed!'));
          }
          activeRequest = false;
        }, Math.random() * 3000);
      }
      
      sendRequest();
    });
  },
  
  post: function(endpoint, data) {
    let url = `${this.baseUrl}/${endpoint}`;
    
    return new Promise((resolve, reject) => {
      // Simulate AJAX request
      setTimeout(() => {
        if (Math.random() < 0.9) {
          resolve({ data: { endpoint, data }, success: true });
        } else {
          reject(new Error('Request failed!'));
        }
      }, Math.random() * 3000);
    });
  }
}

// Functions
function fetchData(endpoint) {
  return HttpClient.get(endpoint)
    .then(response => {
      dataStore[endpoint] = response.data;
      console.log(`Data for ${endpoint} fetched successfully.`);
    })
    .catch(error => {
      console.log(`Failed to fetch data for ${endpoint}: ${error.message}`);
    });
}

async function fetchDataForMultipleEndpoints() {
  const endpoints = ['users', 'products', 'orders'];
  const promises = endpoints.map(endpoint => fetchData(endpoint));
  
  try {
    await Promise.all(promises);
    console.log('All data fetched successfully!');
  } catch (error) {
    console.log(`Failed to fetch data for multiple endpoints: ${error.message}`);
  }
}

// Main Execution
const user1 = new User('John Doe', 28);
const user2 = new User('Jane Smith', 32);

user1.greet();
user2.greet();

fetchDataForMultipleEndpoints();