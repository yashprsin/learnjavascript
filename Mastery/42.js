//------------------- Reduce methord --------------------------
const numbers = [1,2,3,4,5,10];
const sum =  numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
console.log(sum);
/* Accumulator currentValue  return
        1           2           3
        3           3           6
        6           4           10
        10          5           15
        15          10          25
 */

const userCart=[ 
    {id: 1, pro_name: "Mobile", price: 12000},
    {id: 2, pro_name: "Laptop", price: 22000},
    {id: 3, pro_name: "tv", price: 15000}
]

const total = userCart.reduce((totalPrice, currentPro)=>{
    return  totalPrice+currentPro.price;
}, 0)
console.log(total);


