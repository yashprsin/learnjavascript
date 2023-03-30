//document.write("This is an external js");
//document.getElementById('th').innerHTML = "This is a paragarph";
var a1 = 4;
var a2 = "This is me";
var a3 = 5;
//document.write(a1+a3);
console.log("this is console");
//var age = prompt("Your age is ", age);
// alert("Your age is ", age)
//document.write("Your age is ", age + "<br>");
/*
document.write("5+2 = ", 5+2,"<br>");
document.write("5-2 = ", 5-2,"<br>");
document.write("5*2 = ", 5*2,"<br>");
document.write("5/2 = ", 5/2,"<br>");
document.write("5%2 = ", 5%2,"<br>");
*/

// food cost divison
/*
var foodcost = prompt("What is your total amount");
var no_of_people = prompt("Total no of people");
document.write("Total food cost is = ", foodcost,"<br>");
document.write("Each one of pay to = ",(foodcost/no_of_people).toFixed(2),"<br>");
*/

// math functions

// document.write("2^4 = ", Math.pow(2,4), "<br>")
// document.write("abs(-24) = ", Math.abs(-24), "<br>")
// document.write("sqrt(36) = ", Math.sqrt(36), "<br>")

// String fuctions

// var str = "8Deadlyjoker";
// document.write(str,"<br>");
// document.write("Length of string = ", str.length,"<br>");
// document.write("Index of joker = ", str.indexOf("joker"),"<br>");
// document.write("Slice of string = ", str.slice(7,12),"<br>");
// document.write("Replace = ", str.replace("joker","Shivi" ),"<br>");
// document.write("Upper case fuction = ", str.toUpperCase(),"<br>");
// document.write("Lower case fuction = ", str.toLowerCase(),"<br>");

// Relational Operator is :  ==, <, >, !=, >=, 
// Logical Operator is : &&, ||
/*
var age = prompt("Enter your age")
if(age >= 12 && age < 20)
{
    document.write("Your are Young Boy !")
}
else if(age>3 && age <12)
{
    document.write("You are a good Child !")
}
else{
    document.write("Do whatever you want !")
}
*/

// switch case

/*
var age = prompt("Enter your age !")
switch(age)
{
    case "18":
        document.write("Your are 18 years old !");
        break;
    
    case "21":
        document.write("You need to Driving License !");
        break;
    case "18":
        document.write("Your are 18 years old !");
        break;
    default:
        document.write("You are not eligible !")
        break;
}
*/

// while Loop
/*
var i = 1;
while(i<=100)
{
    document.write(i,"<br>");
    i++;
}
*/
// Do while Loop
/*
var  i = 100; 
do
{
    document.write(i, "<br>")
    i--;
}while(i>=1)
*/

// For loop
/*
for(var i=0; i <= 10; i++){
    document.write(i,"<br>")
}
*/
// String indexing : 
/*
var books = ["Harry Potter", "NCERT", "ITC"];

document.write(books[2]);
*/
function joker(){
    document.write("Hello world");
    console.log("Excution is done")

}
joker();