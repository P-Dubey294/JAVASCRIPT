// What is call back ?
// --> jb koi bhi function ko as a argument ki tarh pass krte ho another 
// function mein use call back function kha jata hai .

// function one(fno){   // recived parameter
//     console.log(fno);
//     console.log("hello");
//     fno();

// }
// function two(){
//     console.log("how are you");
 
// }
// one(two); // passed arguments



// function Jethalal (ayar , Dya){ // Parameter recived
//    console.log(Dya);
//    Dya();
// }
// function Babita (){
//     console.log("hello Babitaji ready ho jaao ayyar ji se permison mil gyi hai..");
// }

// Jethalal(69, Babita); // argument passed

function add (a, b){
    console.log( a + b );
}
function sub (a, b){
    console.log( a - b );
}
function cal(num1, num2, fun){
 
     return fun(num1, num2);
}
cal(4 , 5 , add);
cal(4 , 5 , sub);
