// let arr = [12,13,14,15,16];
// jab hum ek function ko pass krte hai as argument usi ko call back functiin bolte hai .
// arr.forEach(function(val){
//     val += 5;
// console.log(val);
//  }) // ye ek already bna hua function hai ..

// Arrow Function 
// let arr2 = [12,13,14,15,16];0

// const student = (arr2) => {
//     console.log(arr2);
// }
// student(arr2);

// function print(val){
//     console.log(val)
// }
// arr2.forEach((val) => console.log(val));





                 // MAP Method

// map ka use editing ,modifying, krne ke liye krte hain.  
// and ek new array return krtaa

// let myarr = [12,13,14,15,16];
// myarr.forEach((val) => console.log(val *= 2));

// const mynewArr = myarr.map((val ) => val +=5) 
// console.log(mynewArr);




                 // FILTER method 

 let arr = [11,22,33,44,55,66,77,88,99,110]
//  const mynewArr = arr.filter((val) => {
//       if(val >= 77){
//        return val
//       }
//  })
// console.log(mynewArr);
// short in single way ..............
// const mynewArr = arr.filter((val) => val >=77)
// console.log(mynewArr);

// const mynewArr2 = arr.filter((val) => val >=99)
// console.log(mynewArr2);




               //  REDUCED METHOD...............

// Reduced method ki ek khass bat ye hai ki vo 
// cureent value or preveious (accumulator) value ko letaa hai .

// let mTarr = [6,9,12,15,18];
// let sum = 0;
// for (i=0; i<mTarr.length; i++){
//     sum +=mTarr[i];
// }
// console.log(sum);

 
 let arrPUBG = [55,66,77,88,99,,22,33,44,55,66,77,88,99,];
 const mynewarr = arrPUBG.reduce((accu, cur) =>{
 accu = accu + cur;
 return accu;
 },5)
 console.log(mynewarr)

      // OR 

 const  mynewArr = arrPUBG.reduce((accu , cur) => accu + cur,5)
 console.log(mynewArr);

// how to find a array with same branch..........using filer method.  

 let MCarry =  [
    { name: 'pratham', Course: 'MCA', Branch:'cs'},
    { name: 'pars', Course: 'B-tech', Branch:'cse'},
    { name: 'sahil', Course: 'Poly', Branch:'civil'},
    { name: 'Akansha', Course: 'BSc', Branch:'medical'},
    { name: 'Rohit', Course: 'MCA', Branch:'cs'},
 ];

 const  ftarray = MCarry.filter((val) =>  {
     if(val.Branch === 'cs' ){
        return val;
     }
 }).map((val) => val.name + val.Course) // chaninig 
 console.log(ftarray);














