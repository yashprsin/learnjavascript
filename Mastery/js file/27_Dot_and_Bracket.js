//------------------- Different b/w dot and bracket notation --------------------------
const key = "email";
const person = {
    name : "Yash",
    age : 22,
    "person hobbies" : ["guiter", "jockey"]
}
console.log(person["person hobbies"]);
person[key] = "yash@gmail.com";
console.log(person);