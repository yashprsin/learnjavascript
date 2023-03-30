// ------------- Nested if else ----------------

let n = 6;
let user_no = +prompt("Guess a number");

if(n === user_no){
    console.log("Winner");
}else{
    if (user_no < n){
        console.log("Your number is Small");
    }else{
        console.log("Your number is Large");
    }
}