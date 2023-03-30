//------------------- Functions --------------------------
function HBD(){
    console.log("Happy Birthday to you ....");
};
HBD();

function add(n1,n2){
    return n1 + n2; 
};
console.log(add(2,4));

function isEven(num){
    if(num%2===0){
        return true;
    }else{
        return false;
    }
    // if(num%2===0){console.log("even")}else{console.log("odd")}
}
// let a = prompt("Enter a number");
console.log(isEven(3));

/* Create a funtion 
input = string 
Output = FirstCharacter 
 */

 
function fchar(str){
    console.log(str[0]);
}
fchar("jsdjf");

/* Create a function
input : array, target Number 
output : Search a number of index in array*/
function tr(arr, tr_num){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===tr_num){
            return i;
        }
    }
    return -1;   
}
console.log(tr([1,2,3,4,5], 1));

// Funtion Expression

const HBD1 = function(){ //also be use let and var
    console.log("Happy Birthday to mee...")
}
HBD1();

