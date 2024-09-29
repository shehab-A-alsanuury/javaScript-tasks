let age1 = 27;
if (age1 > 18) {
  console.log("You are an adult");
}

//2

let score = 45;
if (score <= 50) {
  console.log("You failed the test");
}

//3

let name = "John";
if (name === "John") {
  console.log("Hello, John");
}

//4
let day = "Monday";
if (day !== "Saturday" && day !== "Sunday") {
  console.log("It's a weekday");
}
//5
let num = 4;
if (num % 2 === 0) {
  console.log("The number is even");
}
//6
let char = "a";
if (/[a-zA-Z]/.test(char)) {
  console.log("It's a letter");
}
//7
let list = [1, 2, 3];
if (Array.isArray(list)) {
  console.log("It's an array");
}
//8
let x = 5;
if (x > 0) {
  console.log("x is a positive number");
}
//9
let y = -5;
if (y < 0) {
  console.log("y is a negative number");
}
//10
let z = 9;
if (z % 3 === 0) {
  console.log("z is a multiple of 3");
}
//11
let gpa = 3.5;
if (gpa >= 3.0) {
  console.log("Congratulations, you have a good GPA!");
}
//12
let password = "mypassword123";
if (password.length >= 8) {
  console.log("Your password is strong");
}
//13
let age = 30;
if (age >= 18 && age <= 65) {
  console.log("You are of working age");
}
//14
let color = "red";
if (color === "red" || color === "green" || color === "blue") {
  console.log("color is a primary color");
}
//15
function isValidNumber(input) {
    if (isNaN(input)) {
      console.log(`${input} is not a number`);
    } else {
      console.log(`${input} is a valid number`);
    }
  }
  
  isValidNumber(11); // "11 is a valid number"
  isValidNumber("19"); // "19 is a valid number"
  isValidNumber("xyz"); // "xyz is not a number"
  isValidNumber("17.5"); // "17.5 is a valid number"
  isValidNumber("21F"); // "21F is not a number"
  //16
