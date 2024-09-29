const person1 = { name: "Adam", age: 25, gender: "male" };
console.log(person1.name, person1.age, person1.gender); 


const person2 = { name: "Adam", age: 25 };
person2.gender = "male";
console.log(person2); 


const person3 = { name: "Adam", age: 25 };
person3["gender"] = "male";
console.log(person3); 


const person4 = { name: "Adam", age: 25 };
console.log(person4.name); 


const person5 = { name: "Adam", age: 25 };
console.log(person5["name"]); 


const person6 = { name: "Adam", age: 25, gender: "male" };
for (const key in person6) {
    console.log(`${key}: ${person6[key]}`);
}


const person7 = { name: "Adam", age: 25, gender: "male" };
const keys = Object.keys(person7);
console.log(keys); 


const person8 = { name: "Adam", age: 25, gender: "male" };
const values = Object.values(person8);
console.log(values); 


const person9 = { name: "Adam", age: 25, gender: "male" };
const entries = Object.entries(person9);
console.log(entries); 


const person10 = { name: "Adam", age: 25 };
const person11 = { gender: "male" };
const merged = Object.assign({}, person10, person11);
console.log(merged); 


const frozenPerson = Object.freeze({ name: "Adam", age: 25 });
console.log(frozenPerson); 


const sealedPerson = Object.seal({ name: "Adam", age: 25 });
console.log(sealedPerson); 
