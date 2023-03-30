//------------------- Object --------------------------
/*Array are good but not sufficient for real world data.
1. Object store key value pairs. 
2. Object don't have index */

// How to create objects
const person1 = {name : "yash", age : 22};
const person2 = {
    "name" : "Ishaan", 
    "age" : 26,
    "hobbies" : ["Programming", "Sleeping"]};    

// access data from Object 
console.log(person1);
console.log(person1["age"]);
console.log(person2);
console.log(person2.hobbies[1]);

// how to add key value pair to objects
person1.gender ="male";
person2["gender"] = "Female";
console.log(person1);
console.log(person2);