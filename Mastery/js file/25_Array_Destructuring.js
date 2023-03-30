// ------------- Array Destructuring ----------------
const arr = ["value1", "value2"];
let new_array1 =arr[0];
let new_array2 =arr[1];
console.log("New Array 1", new_array1);
console.log("New Array 2", new_array2);

// Destracuring way
let [n1, n2] = arr;
console.log(n1);
console.log(n2);
// 2nd example
const arr1 = [1,2,4,5];
let [num1, , ,num4] = arr1;
console.log(num1);
console.log(num4);
// 3rd example
const even = [2,4,6,8,10];
let [even1, even2, ...alleven] = even;
console.log(even1);
console.log(even2);
console.log(alleven);