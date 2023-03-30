// ------------- Loop in array ---------------- 
// ------------- For ---------------- 
let fruits = ["Apple", "Banana", "Grapes", "Ape", "Mango"];

for(i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// ------------- for of loop ---------------- 
for(let f of fruits){
    console.log(f);
}

// ------------- for in loop ---------------- 
let arr = [11,23,34,44];
for(let ind in arr){
    console.log(ind);
    console.log(arr[ind]);
}

// ------------- while ---------------- 
let j = 0;
while(j<fruits.length){
    console.log(fruits[j]);
    j++;
}

// ------------- Do while ---------------- 
let k = 0;
do{
    console.log(fruits[k]);
    k++;
}while(k<fruits.length);