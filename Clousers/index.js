// What is Closures 
// --> Clouser is the combination of function bundled together.
// with refernce srounding to its state.(varible)
// outerside wale variables ko accese kr paate hain ..

function makfun(){
    const name = "mozilaaa";
    function displayName(){
        console.log(name);
        console.log(num2);
    }
    const num2 = 45;
    return displayName;
} 
const myfunc = makfun();
myfunc()

