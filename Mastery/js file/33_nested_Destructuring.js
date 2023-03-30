//------------------- Nested destructuring --------------------------
const users = [
    {userid: 101, firstName : "yash", gender : "male" }, 
    {userid: 102, firstName : "Rohan", gender : "male" }, 
    {userid: 103, firstName : "Harshit", gender : "male" }
];

const [user1, user2, user3] = users;
console.log(user1);
const [{firstName}, ,{userid}] =users;
console.log(firstName, userid)