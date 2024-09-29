            // TASK 1-1
function cashFlowRatio(cash, currentLiabilities) {
    return cash / currentLiabilities; // Output: Cash flow ratio
}
console.log(cashFlowRatio(1000, 500)); 

// Net income
function netIncome(revenues, expenses) {
    return revenues - expenses; 
}
console.log(netIncome(1000, 500)); 

// Total assets
function totalAssets(liabilities, equity) {
    return liabilities + equity; 
}
console.log(totalAssets(1000, 500)); 

// Net income (using profit margin and sales)
function netIncomeWithProfitMargin(profit, sales) {
    return profit * (sales / 100); 
}
console.log(netIncomeWithProfitMargin(1000, 500)); 

// Average
function average(...numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length; 
}
console.log(average(7, 9, 2)); 

// Discount
function applyDiscount(price, discount) {
    return price * (1 - discount / 100); 
}
console.log(applyDiscount(150, 30)); 

// Age limit (older than 18 and less than 30)
function isWithinAgeLimit(age) {
    return age > 18 && age < 30; 
}
console.log(isWithinAgeLimit(20)); 

// Exponential
function exponentiate(base, exponent) {
    return Math.pow(base, exponent); 
}
console.log(exponentiate(2, 3)); 

// Remainder
function remainder(num1, num2) {
    return num1 % num2; 
}
console.log(remainder(10, 4)); 



//         task 1-2


// 1. type of integer
console.log(typeof(numberInt)); // "number"

// 2. type of float
console.log(typeof(numberFloat)); // "number"

// 3. type of NaN
console.log(typeof(valueNaN)); // "number"

// 4. type of string
console.log(typeof("text")); // "string"

// 5. type of boolean false
console.log(typeof(false)); // "boolean"

// 6. type of comparison result
console.log(typeof(9 != 11)); // "boolean"

// 7. concatenating two strings
console.log("Part" + "Remaining"); // "PartRemaining"

// 8. subtracting one string from another
console.log("text" - "s"); // NaN

// 9. concatenating two strings of numbers
console.log("4" + "8"); // "48"

// 10. subtracting one string from another
console.log("4" - "8"); // -4

// 11. using an undefined variable
console.log(variableName + 3); // ReferenceError

// 12. subtracting from an undefined variable
console.log(variableName - 3); // ReferenceError

// 13. multiplying a number by a non-numeric string
console.log(82 * "word"); // NaN

// 14. adding a number to a string
console.log(1 + "hello"); // "1hello"

// 15. adding a string to a number
console.log("hello" + 1); // "hello1"

// 16. adding a number and true
console.log(1 + true); // 2

// 17. concatenating a string with true
console.log("hello" + true); // "hellotrue"

// 18. type of Infinity
console.log(typeof (Infinity)); // "number"

// 19. comparing number with string
console.log(1 == '1'); // true

// 20. comparing number with string without type conversion
console.log(1 === '1'); // false

                 //  task1-3

const originalString = "Welcome to Orange";

// 1. Output: WELCOME TO ORANGE
const upperCaseString = originalString.toUpperCase();
console.log(upperCaseString);

// 2. Output: TO
const wordToExtract = originalString.split(' ')[1]; 
console.log(wordToExtract);

// 3. Output: Hello from Orange
const helloString = originalString.replace("Welcome", "Hello");
console.log(helloString);

// 4. Output: welcome to orange
const lowerCaseString = originalString.toLowerCase();
console.log(lowerCaseString);

// 5. Output: 17
const lengthOfString = originalString.length;
console.log(lengthOfString);

// 6. Output: Welcome to “Orange”
const quotedOrange = originalString.replace("Orange", '"Orange"');
console.log(quotedOrange);

// 7. Output: Welcome to Orange Jordan
const extendedString = originalString + " Jordan";
console.log(extendedString);

function replaceFirstLetterWithAsterisk(inputString) {
    const firstLetter = inputString[0]; 
    const regex = new RegExp(firstLetter, 'g'); 
    return inputString.replace(regex, '*'); 
}

const stringToModify = "shehab"; 
const modifiedString = replaceFirstLetterWithAsterisk(stringToModify);
console.log(modifiedString); 

                 //task 1-4
// Original array
let myArray = ["Coding", "Academy", "By", "Orange"];

myArray.push("Jordan");
console.log(myArray);

// 2. Output: ["Coding", "Academy"]
let slicedArray1 = myArray.slice(0, 2);
console.log(slicedArray1);

// 3. Output: ["Welcome", "To", "Coding", "Academy", "By", "Orange"]
let welcomeArray = ["Welcome", "To", ...myArray];
console.log(welcomeArray);

// 4. Output: ["Academy", "By", "Orange"]
let slicedArray2 = myArray.slice(1);
console.log(slicedArray2);

// 5. Output: "Coding Academy By Orange"
let joinedString = myArray.join(" ");
console.log(joinedString);

// 6. Output: ["Coding", "Academy", "By", "Orange"]
console.log(myArray);

// 7. Output: ["Coding", "Orange"]
let filteredArray = myArray.filter(item => item === "Coding" || item === "Orange");
console.log(filteredArray);

      //1-4.2
// Given arrays
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// a. Remove the last item from the vegetable array.
vegetables.pop();
console.log(vegetables);

// b. Remove the first item from the fruit array.
fruit.shift();
console.log(fruit);

// c. Find the index of "orange."
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex); // -1 since "orange" was removed

// d. Add that number to the end of the fruit array.
fruit.push(orangeIndex);
console.log(fruit);

// e. Find the length of the vegetable array.
var vegetableLength = vegetables.length;
console.log(vegetableLength);

// f. Add that number to the end of the vegetable array.
vegetables.push(vegetableLength);
console.log(vegetables);

// g. Put the two arrays together into one array. Fruit first.
var food = [...fruit, ...vegetables];
console.log(food);

// h. Remove 2 elements from your new array starting at index 4.
food.splice(4, 2);
console.log(food);

// i. Reverse your array.
food.reverse();
console.log(food);

// j. Turn the array into a string.
var foodString = food.join(", ");
console.log(foodString);

            //1-5
            
function splitStringToArray(input) 
{
return input.split(" ");
}
            
console.log(splitStringToArray("Orange Jordan")); // Output: ["Orange", "Jordan"]

function hidePhoneNumber(phoneNumber) {
    return "*******" + phoneNumber.slice(7);
}


console.log(hidePhoneNumber("0776807777")); // Output: *******777

function hideEmail(email) {
    const [user, domain] = email.split("@");
    const hiddenUser = user.slice(0, 6) + "…"; 
    return `${hiddenUser}@${domain}`;
}


console.log(hideEmail("orange_academy@orange.jo")); // Output: orange…@orange.jo


function capitalizeFirstWord(input) {
    const words = input.split(" ");
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    return words.join(" ");
}


console.log(capitalizeFirstWord("coding academy by orange")); // Output: "Coding academy by orange"


function capitalizeEachWord(input) {
    return input.split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
}


console.log(capitalizeEachWord("coding academy by orange")); // Output: "Coding Academy By Orange"

function flipNumber(num) {
    return num.toString().split("").reverse().join("");
}


console.log(flipNumber(92485)); // Output: "58429"


function swapVariables(a, b) {
    console.log(`Before Swap: a=${a}, b=${b}`);

    // Method 1: Using a temporary variable
    let temp = a;
    a = b;
    b = temp;
    console.log(`After Swap (Method 1): a=${a}, b=${b}`);

    // Method 2: Using arithmetic
    a = a + b; // a now holds the sum
    b = a - b; // b gets the original value of a
    a = a - b; // a gets the original value of b
    console.log(`After Swap (Method 2): a=${a}, b=${b}`);

    
    [a, b] = [b, a];
    console.log(`After Swap (Method 3): a=${a}, b=${b}`);
}


swapVariables(3, 4); // Output: a=4, b=3


function removeCharacterAtIndex(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}


console.log(removeCharacterAtIndex("Orange", 3)); // Output: "Orage"

function mergeStringsAfterRemovingFirst(str1, str2) {
    return str1.slice(1) + str2.slice(1);
}


console.log(mergeStringsAfterRemovingFirst("lora", "inge")); // Output: "orainge"


function isCharAtEnds(char, str) {
    return str.startsWith(char) || str.endsWith(char);
}


console.log(isCharAtEnds("o", "orange")); // Output: true
console.log(isCharAtEnds("z", "orange")); // Output: false

function stringToWordArray(str) {
    return str.split(" ");
}


console.log(stringToWordArray("Coding Academy by Orange")); // Output: ["Coding", "Academy", "by", "Orange"]


function reorderCharactersAlphabetically(str) {
    return str.split("").sort().join("");
}


console.log(reorderCharactersAlphabetically("Orange")); // Output: "Oaegnr"


          

       // Conditionals (IF STATMENT)


function checkEligibility(yearOfBirth) {
    const currentYear = new Date().getFullYear(); // Get the current year
    const age = currentYear - yearOfBirth; // Calculate age

    if (age > 60) {
        console.log("You may join the seniors’ program.");
    } else if (age > 30) {
        console.log("You are not eligible. You may join other programs.");
    } else if (age >= 18) {
        console.log("You are eligible. Start your application.");
    } else {
        console.log("You may join the kids' program.");
    }
}
          // PART-2
function switchCase(str) {
    let result = '';

    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}


console.log(switchCase("OrAnGe")); // Output: "oRaNgE"


         //PART-3
function toCamelCase(str) {
    return str.split(" ") // Split the string into words
.map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
.join(""); // Join the words without spaces
}


console.log(toCamelCase("Coding Academy by Orange")); // Output: "CodingAcademybyOrange"


      //part-4

      function removeElementFromArray(array, elementToRemove) {
        return array.filter(item => item !== elementToRemove);
    }
    
    console.log(removeElementFromArray(["Coding", "Academy", "By", "Orange"], "By")); // Output: ["Coding", "Academy", "Orange"]
    
    function checkOddOrEven(number) {
        return number % 2 === 0 ? "Even" : "Odd";
    }
    
    console.log(checkOddOrEven(5)); // Output: Odd
    console.log(checkOddOrEven(4)); // Output: Even
    
    function isValueNumber(value) {
        return typeof value === 'number';
    }
    
    console.log(isValueNumber(10));     
    console.log(isValueNumber("10"));   
    
    function findLargerNumber(num1, num2) {
        return Math.max(num1, num2);
    }
    
    console.log(findLargerNumber(10, 20)); // Output: 20
    
    function determineTriangleType(side1, side2, side3) {
        if (side1 === side2 && side2 === side3) {
            return "Equilateral";
        } else if (side1 === side2 || side2 === side3 || side1 === side3) {
            return "Isosceles";
        } else {
            return "Scalene";
        }
    }
    
    console.log(determineTriangleType(3, 3, 3)); // Output: Equilateral
    console.log(determineTriangleType(3, 4, 3)); // Output: Isosceles
    console.log(determineTriangleType(3, 4, 5)); // Output: Scalene
    
    function checkIfInRange(number, startRange, endRange) {
        return number >= startRange && number <= endRange;
    }
    
    console.log(checkIfInRange(5, 1, 10)); // Output: true
    console.log(checkIfInRange(0, 1, 10)); // Output: false
    
    function checkLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    
    console.log(checkLeapYear(2020)); // Output: true
    console.log(checkLeapYear(2021)); // Output: false


        
             //LOOP

// For loop
for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// While loop
let num = 1;
while (num <= 50) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}


for (let num = 2; num <= 50; num += 2) {
    console.log(num);
}


// even numbers
for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

//  odd numbers
for (let num = 1; num <= 50; num++) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}

for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}
    // 5,6,7,8,9,10

function fizzBuzz(num) {
    if (num > 100) return; 
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
    fizzBuzz(num + 1); // Recursive call
}


fizzBuzz(1);

function convertToBanknotes(amount, banknotes) {
    const result = [];
    for (let note of banknotes) {
        while (amount >= note) {
            amount -= note;
            result.push(note);
        }
    }
    return result;
}


console.log(convertToBanknotes(57, [25, 10, 5, 1])); 

function countCharacter(str, char) {
    const regex = new RegExp(char, 'gi'); 
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}


console.log(countCharacter("Coding Academy by Orange", "o")); 

for (let i = 0; i <= 20; i++) {
    console.log(i);
}

for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
for (let i = 12; i >= -14; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
const array = [7, 500, 'KH404', 'black', 36];
for (let element of array) {
    console.log(element);
}
const str = 'CodingAcademy';
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}
const numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
const evens = [];
const odds = [];

for (let num of numbers) {
    if (num % 2 === 0) {
        evens.push(num);
    } else {
        odds.push(num);
    }
}

console.log("Evens:", evens);
console.log("Odds:", odds);


//task 1-12 last one 





function generateMeals(numberOfMeals) {
    const proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
    const grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
    const vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
    const beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
    const desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

    const meals = new Set(); // Use a Set to ensure uniqueness

    while (meals.size < numberOfMeals) {
        const meal = {
            protein: proteins[Math.floor(Math.random() * proteins.length)],
            grain: grains[Math.floor(Math.random() * grains.length)],
            vegetable: vegetables[Math.floor(Math.random() * vegetables.length)],
            beverage: beverages[Math.floor(Math.random() * beverages.length)],
            dessert: desserts[Math.floor(Math.random() * desserts.length)],
        };

        meals.add(JSON.stringify(meal));
    }


    const uniqueMeals = Array.from(meals).map(meal => JSON.parse(meal));

    return uniqueMeals;
}


const numberOfMeals = 5;
const mealOptions = generateMeals(numberOfMeals);
console.log(mealOptions);


