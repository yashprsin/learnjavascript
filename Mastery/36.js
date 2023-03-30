//------------------- Function inside function --------------------------

function student(){
    const firstName = () =>{
        console.log("Yash");
    } 
    const id = function(){
        console.log("28163");
    } 
    const hobbies = () =>{
        console.log("Programming");
    } 
    firstName();
    id();
    hobbies();
}
// student();

// Lexical scope
const myvar = "value1";
function fun(){
    // const myvar = "value2"
    function fun2(){
        // const myvar = "value3";
        function fun3(){
            // const myvar = "value4";
            console.log("fun2 inside", myvar)
        }
        fun3();
    }
    fun2();
}
fun();