
// Q1: Function Scope
// function testscope(){ // function scope
//     let x = 10; // blocked scope
//     if(true){
//         let x =20; // blocked scope
//         console.log(x);
//     }
//     console.log(x);
// }
// testscope();



// Q2: Block Scope vs Function Scop
// var a = 100;           
// function demo() {      
//     var a = 50;    
//     if(true){          
//         var a = 25; 
//         console.log(a); // output kya honga ?
//     }
//     console.log(a); // output kya honga ?
// }
// demo();
// console.log(a);  // output kya honga ? 




// Q3: Hoisting and Scope
// console.log(num);
// var num = 5;
// console.log(num);



// Q4: Let vs Var Scope Difference
// for(var i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i),7000); 
// }// loop complete hone ke baad i ka last updated value retain rahta hai.



// for(let i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i),7000);
// }// har iteration me ek naya i



//Q4: Temporal Dead Zone
// console.log(myVar); // Output kya hoga?
// let myVar = 10;
// console.log(myVar); // Output kya hoga?



// Q5: Global vs Local Scope
// let name = "Alice"; 

// function changeName() {
//     let name = "Bob";
//     console.log(name); // Output kya hoga?
// }
// changeName();
// console.log(name); // Output kya hoga?

//Q6: Closure and Scope

function outerFunction() {
    let count = 0;
    return function innerFunction() {
        count++;
        console.log(count);
    };
}

const counter = outerFunction();
counter(); // Output kya hoga?
counter(); // Output kya hoga?
counter(); // Output kya hoga?




