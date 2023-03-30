//------------------- Computed Properties --------------------------
const key1 = "Object1";
const key2 = "Object2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj= { [key1] : value1, [key2] : value2};
// 2nd one
const obj2 = {};
obj2[key1] = value1;
obj2[key2] = value2;
console.log(obj);
console.log(obj2);
