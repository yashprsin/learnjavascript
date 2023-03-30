//------------------- Sort method --------------------------
const n = [5,9,1200,400,3000];
n.sort();
console.log(n);
const alpha = ["d", "b", "a", "e", "c"]; 
console.log(alpha.sort());
// Output : [1200,3000,400,5,9]
/* Sort in java acc. to ASCII
0 - 48
1 - 49 
2 - 50 
3 - 51 
4 - 52 
5 - 53 
6 - 54 
7 - 55 
8 - 56 
9 - 57 

A-Z = 65-90
a-z = 97-122
*/

const num = [5,9,1200,400,3000];
num.sort((a,b)=>{
    return a-b;
});
console.log(num);
d =  num.sort((a,b)=> b-a);
console.log(d);

// example -
const item = [
    {id:1, proName: "p1", price:300},
    {id:2, proName: "p2", price:800},
    {id:3, proName: "p3", price:100},
    {id:4, proName: "p4", price:8000},
    {id:5, proName: "p5", price:500}
]
// low to high
const l2h = item.slice(0).sort((a,b)=>a.price-b.price);
console.log(l2h);
const h2l = item.slice(0).sort((a,b)=>b.price-a.price);
console.log(h2l);