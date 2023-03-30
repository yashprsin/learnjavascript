//------------------- Array methord --------------------------

const number = [1,2,4,5];

function square(number, index){
    console.log(`index - ${index} and number - ${number*number} `);
}

// for(let i =0; i<number.length; i++){
//     square(number[i], i);
// }

// For each
number.forEach(square);

// example 2
number.forEach(function(number, index){
    console.log(`index is - ${index} number is - ${number*number}`);
});

// example 3
number.forEach(function(number){
    console.log(number**2);
})
// example 4
const users = [
    {name : "yash", age : 22, skill : "Learning"},
    {name : "mohit", age : 19, skill : "Reading"},
    {name : "Raghav", age : 25, skill : "Looking"},
    {name : "Tinku", age : 26, skill : "Writting"}
]
users.forEach(function(user){
    console.log(user.name);
})
users.forEach((user, index) =>{
    console.log(user.name,index);
})
