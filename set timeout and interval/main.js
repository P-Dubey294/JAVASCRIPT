
 // Call Back Function -- kisi ek function me function ko as a argument ko passs kr do ..
 
//  const hello =  ((para) => {
//       console.log("HELLO")
//       para();
//  })
//  const cb = (() => {
//     console.log("insidecall back")
//  }) 
// hello(cb);

// hello gondiyavaasi 
// inside call back hello


// CLOSURE --- its a bundled of function which is create a lexical environment sourrunding with its state

// function fun1(text){
//     let a = 4;
//     function fun2(){
//         console.log(a + " " + text);
//     }
//     a =50;
//     text = "nice"
//     let b = 8  // unwanted --Garbage collection
//     return fun2
// }
// let res = fun1("From Fun1")
// res()
 

// SET INTERVALS 
// ek perticular time ke badd hone wala execution process ko setinterval khete hai 
 
// setInterval(() => {console.log("HEllO How are you?")},1000)

// setInterval (() => {
//     console.log("Pratham Dubey")
// }, 500);

// function hello(){
//  console.log("GOOD AFTERNOON")
// }
// setInterval(hello,1000);

// PROJECT Automatic Background color change on yur disply screen  

// const body = document.getElementsByTagName("body")

// function colorchange ()
// {
//     let colorString = '0123456789abcdef' 
//     let color = ""
//     for (let i = 0 ; i<6; i++) {
//     let randNum = Math.floor(Math.random() * colorString.length)
//      color = color + colorString[randNum]

// };
//  body[0].style.backgroundColor = `#${color}`
// }
// setInterval (colorchange , 500);


// SETTIME OUT 

// setTimeout(() => {
//     console.log("Set TimeOUT");
// },1000)

//  console.log("STEP 1");
//  setTimeout(() => {
//      console.log("STEP 2");
//  },1000);
//  console.log("STEP 3");

// NOTE __JAVA SCRIPT ye ek single thread language hai

// Asynchronus -- kuch der ke blocked kr deti hai kuch code ko then print krti hai 
// isliye hum JS Script ko html meain body ke last me likhkte hai 

// console.log("HELLO 1")
// console.log("HELLO 2")
//     for(i=0; i < 1000000000; i++){
        
//     }
// console.log("HELLO 3");

// Solution 

// console.log("HELLO 1")
//   console.log("HELLO 2")
//   setTimeout(()=> {
//     for ( i = 0 ; i < 1000000 ; i++){
//     }
// })
//     console.log("HELLO 3");

    // NOTE Set Timeout ye ek asyncronus fn hai q ki ye 
    // kuch time ke liye blocked kr deta h code ko 








    // Clouser ka Egmaple HAi 

// function fun1() {
//     setTimeout(function hello() {
//         console.log("nice")
//     },4000)
// } 
// fun1()






// Clouser ka concept hai isss egample mein 

// fun1 = ((text) => {
//     console.log("Starting Fun")
//     setTimeout(hello => {
//         console.log(text) // ye wala part Staring Fun1 and Ennding Fun1 ke baad execute honga cause 
//     },4000)                // SetTime out ke karan ye kuch time ke baaad execute honga after a printing line
//     console.log("Ending Fun")

//     text = "PRatham Dubey" // As refernce le rha hai text ko jisko hum changed kr rhe hai 
// })
// fun1("nice");





// SCOPE HAI REASON CAUSE VAR ek global Scope hai 
// i ka scope hai function hai 
// var current vlaue ko print krta hai jo last me execute hokar show hoti hai usko 

// Mother = ((i) => {
//     for(var i=0; i<5; i++){
//         setTimeout(Father => {
//             console.log(i)
//         },i*4000);
//     }
// })
// Mother();

// isliye hum let (blocked scope lgate hai tho o/p kuch
// iss tharah show hota hai )

// Mother = ((i) => {
//     for(var i=0; i<5; i++){
//         let j = i  // blocked Scop bnaa diya i ko tho o/p bhi chnge ho jayega.
//         setTimeout(Father => {
//             console.log(j)
//         },j*400);
//     }
// })
// Mother();

// EVENT LOOP 
 // Event loop basically jb call stack empty rhenga tho 
 // program execution ke time pr Qeue me jo rhenga use call 
 // stack me fill up kr denga bs itnaa hi kaam rheta hai or ye infinity time chlega 
 // acording to your code 

 console.log("STARTING");
 setTimeout(function hello (){
     console.log("SET TIMEOUT 1");
 },5000);
 setTimeout(function hello (){
     console.log("SET TIMEOUT 2");
 },6000);
 setTimeout(function hello (){
     console.log("SET TIMEOUT 3");
 });
 console.log("ENDING");

// Queue there are two type 
  // A. Micro Task ===> priority jydaa hoti hai ==> promise , fetch 
  // B, Macro Task // Call back Queue ===> priority kmmm hoti hai ==> SetTimeout (0) x 



