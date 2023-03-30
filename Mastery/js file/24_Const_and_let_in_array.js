// ------------- Const and let in array ----------------
// Array create with const case
const array = [1,2,3,4];
array.push(5);
console.log(array);
// because there is change heap value not change stack in pointer value.
// But using let there is problem there change stack and heap positon.
let backet = ["kaju", "soap"];
backet = ["Coffee", "Tea"];
backet.push("Juice");
console.log(backet);
// So try to use const in case of array