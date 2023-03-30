// ------------- Undefined ----------------
let a;
var b;
console.log(typeof a);
console.log(typeof b);
a = 23;
console.log(typeof a);

// ------------- null ----------------
let myvar = null;
console.log(myvar);
console.log(typeof myvar); // Show Object Remember 


// ------------- BigInt ----------------
// maximum number store in var and let (number)
console.log(Number.MAX_SAFE_INTEGER);

let n1 = BigInt(123);
let n2 = 12n; // 2nd type of define BigInt
console.log(n1+n2);

// Big does't work with int ya other datatype 
