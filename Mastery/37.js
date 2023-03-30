/*------------------- Block vs Function Scope --------------------------
let and cosnt are block scope.
var is fucntion scope.
*/ 
{
    let firstName = "Yash";
    console.log(firstName);
}
{
    let firstName = "Harry";
    console.log(firstName);
}
{
    let firstName = "Rohit";
    console.log(firstName);
}
let firstName = "Rohan";
console.log(firstName);

// var 
var lastName = "Sharma";
{
    var lastName = "Pandit";
}
console.log(lastName);