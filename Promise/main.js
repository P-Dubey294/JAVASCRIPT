// Promise return an object 
// promise callback hell & inversion controll ko solve krna hai
// it represent the evantual completion or failure of an asynchronus operation 
// Asynchronus operation --> Future me completion hota hai (result dete hai)
// its a more Readable As well as managable.

// NOTE Synthetical Suagr --> Syntax alg hota hai but functionalty same hota hai 

// *********************//
// Promise ki 3 state hoti hai 
//1> Pending ----> initial State ---> neither Fullfiled or rejected
//2> Fulfiled ----> Final State ----> the operation was succesfully completed.
//3> Rejected --->  Final State ----> the operation is failed.

// RESULT // VALUES // OUTPUT

// jb promised inital state me rheta hai tb values (result)  retun undefined krta  hai .
// jb promised final state me hota hai (Settled) fullfiled or reject ho jayega. --> Value Return krega 

// settled ka mtlb ye hai ki promise fullfiled ho gya tho use reject nh krskte or naa hi fulfiled kr skte jb reject ho gya hai tho.

// NOTE new Promise -> creation a promise -->synchronus task.


// The Diffeernce between resolve and return 

// RESOLVE 

/*
const promise1 = new Promise (fun1 = (resolve, reject) => {
    resolve("Promise Resolve")
    console.log("Hello Pratham Dubey");
});
console.log(promise1)
*/

// RETURN 
/*
const promise12 = new Promise (fun1 = (resolve, reject) => {
    return "Promised Resolve"
    console.log("Hello Pratham Dubey"); // not a print 
});
console.log(promise12)
*/

//NOTE Promise Return ---. promise object 
 
//Then() --> method --there are two argument .then(onFullfillment, onRejected) 
// OnFullfillment & onRejected both are callback function 

// how to consume ? 


// function isData(item){
//  const promise1 = new Promise (fun1 = (resolve, reject) => {
//      // resolve ("Promised Resolve" )
//     //  reject("Promise Rejected")
    
//     // if(item) {
//     //     resolve("Promise Reslove");
//     // }
//     // else {
//     //     reject(" Data is Empty ");
//     // }

//     setTimeout (Timer1 => {

//         if(item) {
//                  resolve("Promise Reslove");
//              }
//              else{
//                  reject(" Data is Empty ");
//              }

//     },4000)

// }); 
    
//      return promise1;
// }

// let result = isData("Pratham")

//      result.then(Success = (result) => {
//      console.log(result);

//      setTimeout(Hello  => {
//      console.log("SET TIMEOUT")
     
//     },6000);

//      console.log("end");
//  });  
// console.log(result)


// Resolve Method 

const x = Promise.resolve("Pratham") 

console.log(x)
console.log("end");




  
  