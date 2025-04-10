// 1. JavaScript map() Method
// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

// syntx 

// arr.map(function(args){

// })

let arr = [2,4,8,10];
const updatearr = arr.map((val)=> val +=2)
console.log(arr);
console.log(updatearr);

// Get the full name for each person :
 
 const person = [
    {firstname:'pratham',lastname:'dubey'},
    {firstname:'shruti',lastname:'sharma'},
    {firstname:'prem',lastname:'sharma'},
    {firstname:'varsha',lastname:'dubey'},
    {firstname:'shubhu',lastname:'shrama'},
 ];
const getFullName = person.map((item) =>{
    return [item.firstname,item.lastname].join('');
})
console.log(getFullName);


