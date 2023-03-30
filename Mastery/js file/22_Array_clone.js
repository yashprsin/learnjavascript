// ------------- Clone array ----------------
let array1 = ["itmm1", "item2"];
// type 1
let array2 = [].concat(array1);
// type 2
let array3 = array1.slice(0);
// Type 3
let array4 = [...array1];

array1.push("item3");
console.log(array1);
console.log(array1);
console.log(array2);
console.log(array2===array1); // false - It means does't store a same heap; 
console.log(array3);
console.log(array3===array1);
console.log(array4);
console.log(array4===array1);

// ------------- Array add items ----------------
let arr1 = [1,2]; 
// type 1 
let arr2 = [].concat(arr1, [3,4]);
// type 2
let arr3 = arr1.slice(0).concat([5,6]);
// type 3 
let arr4 = [...arr1,7,8]; //Spread Operator 
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
let arr5 = [...arr2, ...arr3, ...arr4];
console.log(arr5);
