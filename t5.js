     
const number = [1, 2, 3, 4, 5];
number.forEach(num => console.log(num));




const number1 = [1, 2, 3, 4, 5];
const squared = number1.map(num => num * num);
console.log(squared);




const number2 = [1, 2, 3, 4, 5];
const evens = number2.filter(num => num % 2 === 0);
console.log(evens);




const number3 = [1, 2, 3, 4, 5];
const sum = number3.reduce((acc, num) => acc + num, 0);
console.log(sum);




const fruits = ["banana", "cherry", "apple"];
fruits.sort();
console.log(fruits);





const fruits1 = ["apple", "banana", "cherry"];
fruits.reverse();
console.log(fruits1);




const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2);
console.log(combined);




const number4 = [1, 2, 3, 4, 5, 6];
const sliced = number4.slice(0, 3);
console.log(sliced);



const numbers5 = [1, 2, 3, 4, 5];
const removed = numbers5.splice(2, 1, 10); 
console.log(numbers5); 



const numbers6 = [1, 2, 3, 4, 5];
const index = numbers6.indexOf(3);
console.log(index); 


const numbers7 = [1, 2, 3, 4, 5];
const joined = numbers7.join(", ");
console.log(joined); 



const str = "1,2,3,4,5";
const array5 = str.split(",");
console.log(array5); 




const numbers8 = [1, 2, 3, 4, 5];
const length = numbers8.length;
console.log(length); 



const numbers9 = [1, 2, 3, 4, 5];
for (const num of numbers9) {
    console.log(num);
}



const numbers11 = [1, 2, 3, 4, 5];
for (const index in numbers11) {
    console.log(numbers11[index]);
}



const numbers22 = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers22)); 



const obj = {0: "a", 1: "b", 2: "c", length: 3};
const arrayFromObj = Array.from(obj); 
console.log(arrayFromObj); 


const arrayOfNumbers = Array.of(1, 2, 3); 
console.log(arrayOfNumbers); 


const fillArray = [1, 2, 3, 4, 5];
fillArray.fill(0, 0, 3);
console.log(fillArray); 


const copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 3);
console.log(copyArray); 

