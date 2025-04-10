// Javascript me  code 2 pase me executed hota hai 
// 1st Memory creation & 2nd Execution .


// what is memeory creation 
// => jb bhi hum koi varible ko declaration ,initialization ,krte hai 
// tb memory create hoti usko stored krne ke liye . iske 
// saath saath scope bhi created hota (scope handler).us perticular
// varible ke liye 

// Execution?
// initially ye undefined hota hai !  jb execution ka time
// hai tho jo bhi varible declare kiye usko print krata hai disply 
// mein  


//  var name = "Pratham Dubey"; // Globle Scope
//  function fun1(){ // Function Scope
//     var name = "Shruti Sharma";
//     console.log(name);
//  }
//  fun1();

 //Exampel 2

//   function fun2(){  // function scope 
//     console.log(name); 
//     var name ="Pratham Dubey";
//   }
//   fun2();
//   console.log(name);

  // isi ko lexical scoping bolte hain... 

// Auto global 
// var naam  = "Code Thread"; //global scope 
// function fun1(){   // function scope
//     console.log(naam);
//     hello = "Pratham"; //global scope
//     console.log(hello);
// }
// console.log(hello)
// fun1();
// console.log(naam); // global scope

function myfunction(){
  console.log("hello my world");
  let name ="Pratham Dubey ";
  console.log(name);
}
function myfunction2(){
   hello = "Pratham Dubey";
   console.log(hello);
   console.log(name);
}
myfunction2();

myfunction();
