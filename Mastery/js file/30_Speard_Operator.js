//------------------- Speard Operator --------------------------

// array 
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2, 7,8,9];
console.log(arr3);

const arr4 = [..."123456789"];
console.log(arr4);
const arr5 = [..."abcdefgh"];
console.log(arr5);

// Object 
const ob = {
    key1 : "value1",
    key2 : "value2"
}

const ob1 = {
    key3 : "value3",
    key4 : "value4"
}

const newOb = {...ob, ...ob1, key6:"value6"};
console.log(newOb);
const ob3 = {..."abc"};
console.log(ob3);
const ob4 = {...["item1", "item2"]};
console.log(ob4);