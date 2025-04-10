// An array is a special variable, which can hold more than one value:
                          // OR
// Array is a collection of varible /  order of Element.
// Array is a dynamic types..............
// how to create Array 
/*

 const cars = ['BMW','VOLVO','MERCADIEZ','XUV7OO','GWEGON'];
 console.log("The car collection of array is:",cars);

 //Spaces and line breaks are not important. A declaration can span multiple lines:

 // Array index/ possition are start with zero . 
/*
 const branch = [
    'MCA',
    'Btec',
    'BSC',
    'MSC',
    'Enge',
    'MBA',
    'BBA']
    console.log("The Educational brach is:",branch);
*/
    // Using the JavaScript Keyword new 
/*
    const car = new Array (1,2,3,4,5,6,7,8,9);
    console.log("The number of item is:",car);

    //  how can i check a array so its array or not 
    const car2 = new Array (1,2,3,4,5,6,7,8,9);
    console.log(typeof(car2));  */
    //o/p is object cauuse array is lke a object cause its a part of non premitive.
       
// how to accses the array . 

/*
   
const car3 = new Array ('BMW','VOLVO','MERCADIEZ','XUV7OO','GWEGON');
console.log(car3[3]);

*/
/*
// how to check my varible type in array ..
let random = [1,'hellow',6,'pratham',2,'jayshreeram'];
console.log(typeof random[1]);
*/

// method 
/*
let arr = [1,2,3,4,5,6,7,8,9];
arr.push(10,11,12,13,14 );
console.log(arr); */

// array ke under aaray kyse print krte h .. Nested array.
//let arr2 = [1,2,3,4,5,6,7,8,9];
//arr2.push([10,11,12,13,14]);
//arr2.pop(9); // ye last se remove kregaaaa.
//let newArray = arr + [ ,23,24,25];
//console.log(newArray);
//let ret = arr2.indexOf(4)
//console.log(ret);
//let arr = arr2.join(" ");
//console.log(arr);
//console.log(arr.length);
//console.log(arr2.reverse());
//arr2.shift(); // starting se remove kregaaaa.
//console.log(arr2);

let arr = [45,46,47,48,49,50];
let [first , seceond , third , fourth] = arr
console.log(fourth)




