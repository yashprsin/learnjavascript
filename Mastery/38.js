//------------------- default Parameter --------------------------

// Before ES6 
function add(a,b){
    if(typeof b === "undefined"){
        b=0;
    }
    return a+b
}
console.log(add(8));

// Now
function mul(x,y=1){
    return x*y
}

console.log(mul(9));

/* Rest Parameters  */
function myfun(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myfun(1,2,3,4,5,6,7,8);

// Question AddAll(1,2,3,4) Output = 10
function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    } 
    return total;
}
console.log(addAll(1,2,3,4,5,6,7));


// Parameters Destructuring 
// Object 
// in react using 
const person = {
    firstName : "Harshit",
    age : 20
}
function printDetalis(obj){
    console.log(obj.firstName);
    console.log(obj.age);
}
printDetalis(person);

// example 2
const bucket = {
    fruits : "Apple",
    veg : "Patato"
}

function payment({fruits,veg}){
    console.log(fruits);
    console.log(veg);
}
payment(bucket);