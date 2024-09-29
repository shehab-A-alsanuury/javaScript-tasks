  //1
function findSmallest(arr) {
    return Math.min(...arr);
}

console.log(findSmallest([30, 45, 60, 7])); 

//2
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}
     
console.log(alphabeticalOrder('hello')); 
//3
function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(8)); 
     //4

function oddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(oddOrEven(9)); 

     //5

function evenNum(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: [2, 4, 6, 8]

    //6
function numbersOnly(arr) {
    return arr.filter(item => typeof item === 'number');
}

console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); // Output: [3, 7, 13]

    //7
function addUp(n) {
    return (n * (n + 1)) / 2; // Using the formula for the sum of the first n integers
}

console.log(addUp(6)); // Output: 21

     //8
function minMaxLengthAverage(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    const average = arr.reduce((sum, val) => sum + val, 0) / length;
    
    return [min, max, length, average];
}

console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); // Output: [3, 100, 5, 40]
 //9
function romanNumbers(num) {
    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" },
    ];
    
    let result = '';
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    
    return result;
}

console.log(romanNumbers(1989)); // Output: "MCMLXXXIX"

//10
function countWords(str) {
    return str.split(/\s+/).filter(word => word.length > 0).length;
}

console.log(countWords('hello from CodingAcademy!')); // Output: 3

//11
function multiplyByLength(arr) {
    const length = arr.length;
    return arr.map(num => num * length);
}

console.log(multiplyByLength([4, 2, 5])); // Output: [12, 6, 15]
//12
function checkEnding(str1, str2) {
    return str1.endsWith(str2);
}

console.log(checkEnding("CodingSchool", "Ac")); // Output: false
//13
function doubleChar(str) {
    return str.split('').map(char => char.repeat(2)).join('');
}

console.log(doubleChar('Coding')); // Output: "CCooddiinngg"
//14
function findIndex(arr, element) {
    return arr.indexOf(element);
}

console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); // Output: 0
//15
function getAbsSum(arr) {
    return arr.reduce((sum, num) => sum + Math.abs(num), 0);
}

console.log(getAbsSum([-1, -3, -5, -4, -10, 0])); // Output: 23






