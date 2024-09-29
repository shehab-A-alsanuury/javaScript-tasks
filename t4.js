
     
for (let j = 1; j <= 10; j++) {
    console.log(j);
  }
  //2
  let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
//3
const arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
//4
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  //5
  let sum1 = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum1); // Output: 55
//6
const arr2 = [1, 2, 3, 4, 5];
let largest = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > largest) {
    largest = arr2[i];
  }
}
console.log(largest); // Output: 5
//7
const arr3 = [5, 4, 3, 2, 1];
let smallest = arr3[0];
for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] < smallest) {
    smallest = arr3[i];
  }
}
console.log(smallest); // Output: 1
//8
const arr4 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr4[i];
}
const average = sum / arr.length;
console.log(average); // Output: 3
//9
const n1 = 5;
let factorial = 1;
for (let i = 1; i <= n1; i++) {
  factorial *= i;
}
console.log(factorial); // Output: 120
//10

const n2 = 10;
let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 2; i < n2; i++) {
  let temp = b;
  b = a + b;
  a = temp;
  console.log(b);
}
//11
const n = 20;
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
//12
const num = 5;
let factorialn = 1;
for (let i = 1; i <= num; i++) {
    factorialn *= i;
}
console.log(factorial); // Output: 120
//13
const limit = 10;
let c = 0, d = 1;

console.log(c);
console.log(d);

for (let i = 2; i < limit; i++) {
    const next = c + d;
    console.log(next);
    c = d;
    d= next;
}
// Output: 0 1 1 2 3 5 8
//14
const max = 20;
for (let i = 2; i <= max; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        process.stdout.write(i + ' ');
    }
}
// Output: 2 3 5 7 11 13 17 19
//15
const multiplier = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${multiplier} x ${i} = ${multiplier * i}`);
}
// Output: 5 x 1 = 5, 5 x 2 = 10, ..., 5 x 10 = 50
//16
const twoDArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
        process.stdout.write(twoDArray[i][j] + ' ');
    }
}
// Output: 1 2 3 4 5 6 7 8 9
//17
const reverseArray = [1, 2, 3, 4, 5];
for (let i = reverseArray.length - 1; i >= 0; i--) {
    process.stdout.write(reverseArray[i] + ' ');
}
// Output: 5 4 3 2 1
//18
const rangeArray = [1, 2, 3, 4, 5];
const start = 2, end = 4;
for (let i = start; i <= end; i++) {
    process.stdout.write(rangeArray[i] + ' ');
}
// Output: 3 4 5
console.log(frequency); // Output: 3
//19
const stepArray = [1, 2, 3, 4, 5];
const step = 2;
for (let i = 0; i < stepArray.length; i += step) {
    process.stdout.write(stepArray[i] + ' ');
}
// Output: 1 3 5
  
  printFibonacciSequence(10); // Output: 0, 1, 1, 2, 3, 5, 8
  //20
  const checkArray = [1, 2, 3, 4, 5];
  const numToCheck = 4;
  let found = false;
  for (let i = 0; i < checkArray.length; i++) {
      if (checkArray[i] === numToCheck) {
          found = true;
          break;
      }
  }
  console.log(found); // Output: true
  
  printPrimeNumbers(20); // Output: 2, 3, 5, 7, 11, 13, 17, 19
  //21
  const frequencyArray = [1, 2, 1, 3, 2, 1];
  const numToCount = 1;
  let count = 0;
  for (let i = 0; i < frequencyArray.length; i++) {
      if (frequencyArray[i] === numToCount) {
          count++;
      }
  }
  console.log(count); // Output: 3
  
