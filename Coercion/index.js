 // COERCION ---> ITS TYPE OF CONVERSION THERE ARE TWO TYPES
 //A> IMPLICIT --> AUTOMATICALLY CONVERT
 //B> EXPLICIT --> MANUALLY CONVERT

 //A> IMPLICIT --> AUTOMATICALLY CONVERT

 let a = 2 ; // number
 let b = "6"; // string 
 let c = a + b ;
 console.log(c);
 console.log(typeof(c));  // implicit conversion

//B> EXPLICIT  --> MANUALLY CONVERT

let A = 2 ; // number
let B = Number("6"); //Number
let C = A + B ;
console.log(C);
console.log(typeof(C)); // explicit conversion (number)

// Expample 

const num1 = 25 ;
const num2 = 25 ;
const num3 = "50";
const total = num1 + num2 + num3;
console.log(total);

// Example 

console.log( 9 + "45" + 3);
console.log( "45" + 9 + 3);
console.log("45" + "45" + 9 + 3);
console.log( 7 +  null );
console.log("7" + null);
console.log(4 + true);
console.log("4" + true)
console.log(5 + false);
console.log("5" + false);
console.log("5" - 56);
console.log(5 - "56");
console.log("56" -5); 
console.log("hello" - 4);
console.log({name : "pratham"} - 5);
console.log([] - 6);
console.log(5 - undefined);
console.log("5" - undefined);



// ABSTRACTION OPERATION --> javascript apne kaaam ke used krti h nut 
                        ///  hum use directly used nh kr skte . 

// 1> ToPremitive
// 2> ToBoolean
// 3> ToString
// 4> ToNumber 

// Practice 
 console.log(undefined - NaN);
 console.log(undefined - null);