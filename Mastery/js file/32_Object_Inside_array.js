//------------------- Object inside array --------------------
// Very usefule in real world application

const users = [
    {userid: 101, name : "yash", gender : "male" }, 
    {userid: 102, name : "Rohan", gender : "male" }, 
    {userid: 103, name : "Harshit", gender : "male" }
];
console.log(users);
// for loop
for (let user of users){
    console.log(user.name);
}