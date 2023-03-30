// ------------- Arrays ----------------

// Array is collection of elements.
let fruits =["Apple", "Mango", "Orange"];
console.log(fruits);
let num =[1,2,3,5,6,67];
console.log(num);
console.log(typeof num); //Object
// Array is reference tyoe It mean array is Object type.

// Replace 
fruits[1] = "Grapes";
console.log(fruits);

// JavaScript have too many object. How check array
let veg = {}; //Object literal

console.log(Array.isArray(veg)); 
console.log(Array.isArray(fruits)); 

// ------------- Push and pop ----------------
fruits.push("Banana");
console.log(fruits);

let poppedFruits =  fruits.pop();
console.log(fruits);
console.log(poppedFruits);

// ------------- Shift and Unshift ----------------
let alphabates = ["a", "b"];
alphabates.shift();
console.log(alphabates);
alphabates.unshift("d")
console.log(alphabates);
// Note - Unswift is add element and shift is remove element 
// Note - Push and pop faster than to shift and Unswift. 