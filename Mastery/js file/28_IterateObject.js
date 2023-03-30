//------------------- Iterate Object --------------------------
const person = {name: "Yash", age: 22, gander :"male"}
for(let key in person){
    // console.log(key);
    // console.log(person[key]); // Use Bracket notation for access Object value.
    // console.log(`${key} : ${person[key]}`); // Type2
    console.log(key,person[key]); // Type3

}
// check this is object
console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person)));
console.log(val);

//  for of loop
for(let key of Object.keys(person)){
    console.log(person[key]);
}