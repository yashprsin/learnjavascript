//------------------- Map method --------------------------
const numbers = [1,2,3,4,5];
const sq = function(number){
    return number * number;
};
const sq_number = numbers.map(sq);
console.log(sq_number);

// realistic example

const users = [
    {name : "yash", age : 22, skill : "Learning"},
    {name : "mohit", age : 19, skill : "Reading"},
    {name : "Raghav", age : 25, skill : "Looking"},
    {name : "Tinku", age : 26, skill : "Writting"}
]

const a =users.map(function(user,s){
    return `${user.name}, ${s}`;
})
console.log(a);

// filter methord
const num = [1,2,3,4,5,6,7,8]
const isEven = function(nums){
    return nums%2===0;
}
const isOdd = function(nums){
    return nums%2!==0;
}
console.log(num.filter(isOdd));
console.log(num.filter(isEven));
