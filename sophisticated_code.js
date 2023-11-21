/*
* Filename: sophisticated_code.js
* Description: This code generates a sophisticated and complex output using advanced JavaScript techniques.
*/

// Define a class called Employee
class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  // Define a method to calculate the increment in salary
  calculateIncrement() {
    let increment = this.salary * 0.1;
    if (this.age >= 40) {
      increment += 5000;
    }
    return increment;
  }

  // Define a method to display the employee details
  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Salary: ${this.salary}`);
  }
}

// Create an array of employees
const employees = [
  new Employee("John Doe", 35, 50000),
  new Employee("Jane Smith", 45, 75000),
  new Employee("Mike Johnson", 30, 45000)
];

// Iterate over the employees array and display their details
for (let employee of employees) {
  employee.displayDetails();
  console.log(`Increment: ${employee.calculateIncrement()}`);
  console.log("---------------------------------");
}

// Define a function to find the maximum value in an array
function findMaxValue(arr) {
  if (arr.length === 0) {
    return null;
  }
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

// Create an array of numbers
const numbers = [5, 10, 15, 20, 25];

// Find and display the maximum value in the array
console.log(`Maximum value: ${findMaxValue(numbers)}`);

// Define a function to reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Reverse and display a string
console.log(`Reversed string: ${reverseString("Hello, World!")}`);
// ... more code ...
// ... more functionality ...

// End of sophisticated_code.js