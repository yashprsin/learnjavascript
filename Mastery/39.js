//------------------- Callback functions --------------------------
function fun(){
    console.log("Be happy inside fun! ")
}
function fun2(string){
    console.log("hello there I am func and i can ...")
    string();
}
fun2(fun);

// function returning function

function func(){
    function hello(){
        // console.log("Hello world");
        return "hello world"
    }
    return hello;
}
const ans = func();
// ans();
console.log(ans());
