// ------------- Primitive Type ---------
let num1 = 6;
let  num2 = num1;
console.log("value of num1 -",num1);
console.log("value of num2 -",num2);
num1++;
console.log("After increment num1");
console.log("value of num1 -",num1);
console.log("value of num2 -",num2);

// ------------- Reference Type ---------

let array1 = ["item1", "item2", "item3" ];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push("item4");
console.log("After increment array item.");
console.log(array1);
console.log(array2);