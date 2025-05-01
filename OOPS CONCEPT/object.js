// OOPS 
// a> Object  & b> Class

// what is Object ? 
// object is collection of method and properties OR 
// object is collection of key and values of pair .

// ho do we created a object .?
// let obj = {
//     name : "Pratham",
//     age : 23,
//     email : "dprathamm649@gmail.com",
//     password : "pratham123456"
// }
// console.log(obj);

// what is Method ? 
// Method is a function.
// But its written under the object or function.

// how do we created a method ?

// let obj2 = {
//     name : "Shruti",
//     emmail : "Shruti08@gmail.com",
//     password : "Shruti@08",
//     // Method -->
//     printName(){
//         console.log("Method1");
//     },
//     prinEmail : function(){
//         console.log("Method2");
//     },
//     PrintName2(){
//         console.log("method3");
//     },
// }
// console.log(obj2);
// how to access the method ?
// console.log(obj2.emmail);
// console.log(obj2.name);


// what is this ?
// this -> this represent a current execution of the context.
// type of this -> global object.
// function pratham(){
//     console.log(this);
// }
// pratham()

//Note that --> kisi object ke under tum this print kraonge tho 
// it will be return all the object under the fields.


// let object2 = {
//     username : "varsha",
//     email : "dvarsha01@gmail.com",
//     age : 27,
//     job : "Staff Cloud",

// wedding()  {
//     console.log(object2 === this);
//     console.log(this.username);
// }
// }
// console.log(object2 === this);
// object2.wedding();

// Constructor function --> 
// It is used for repetation for multiple recorded
function Product(name , price, colour){
    // console.log(this);
    this.name = name;
    this.price = price;
    this.colour = colour;
    // console.log(this);
}
let p1 = new Product ("Iphone12" , 25000, "Red")
let p2 = new Product ("Iphne13" , 7000, "Green")
console.log(p1);
console.log(p2);

//new Keyword --> It return the new object 

// There Are 4 step 
//1> new empty object created
//2> object get linked to prototype of their constructor function 
//3> object get bound as this 
//4> return the object 
