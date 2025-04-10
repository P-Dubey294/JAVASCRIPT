//A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// how to create a function in js .
/*
   function myFunction(p1, p2) {
    return p1 * p2;
  }   */

   /* function myfunction (p1 , p2){
          return p1 * p2;
    }
    let result = myfunction(4,3)
    console.log("the result is",result); */

    // JavaScript Function Syntax 

    // 1 A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

    // 2 Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

    // 3 The code to be executed, by the function, is placed inside curly brackets: {}.

  // function ko call kb kkiya jata hai ?  ya for call kb krte hai ?
  // Ans :- When an event occurs (when a user clicks a button)
  // When it is invoked (called) from JavaScript code
  // Automatically (self invoked).

  // Calculate the product of two numbers, and return the result ?
  /*

   function myfunction ( p1,p2) {
    return (p1 * p2 , p1 + p2 , p1 - p2); 
   }
   let x = myfunction (5,6);
   console.log("The Total value of two productA number is :",x);
   let y = myfunction (5,4);
   console.log("The Total value of two productB number is :",y);   */
   
   // expalain the answer javascript me comma , operator ka kaaam hota hai multiple expresion ko evaluate krna or last expresion ka  
  // result output me show krna . 
  // return statememnt me diya hai 
  // p1 * p2 -- multiply by two product .
  // p1 + p2 -- addition by two product .
  // p1 - p2 -- substraction by two product .

  // lekin comma operator ki wjh se only last wale expresion ka result return honga javascript me .
  /*
   function toCelsius(fahrenheite){
    return(5/9) * (fahrenheite - 32);
   }
   let value = toCelsius(77);
   console.log("The Value of Fahrenheite is:",value)ṇ
   */

  /*
  function AreaOfCircle(pi , r){
   let total = pi * r * r;
   
    return total;
  }
  let total = AreaOfCircle(3.14,5);
  console.log("the total Area of circle is :",total); */

  // nested function
    
    /* 
       const num1 = 20;
       const num2 = 40;
       const name = "pratham";
       function multiply(){
         return num1 * num2;
       }
       console.log(multiply());

       function getscore(){
        const num1 = 5;
        const num2 = 4;
        function add (){
          console.log("The addition of two number is :",num1 + num2);
          console.log("Name :",name);
        }
        return add();
       }
       getscore();   */
 
  // method 

  /*
  let num = 100;
  console.log(num.toExponential(5));
  console.log(num.toFixed(5)) */

  // String 

  /*

  let str = new String("Pratham kumar Dubey")  // object creation syntax using new keyword.
  console.log(str.charAt(3)) //  index no will start at zero so o/p is t.
  console.log(str.charCodeAt(3));
  console.log(str.toLowerCase(1));
  console.log(str.toUpperCase(0));
  console.log(str.length) 
  console.log(str.endsWith('y')) // string statement are end with the y character dubey ---y
  console.log(str.includes('O')); // String statement me O missing h isliye o/p me false aya .
  console.log(str.indexOf('m',7)); // string statememnt ka last m kumar me the end ho rha h jiski possition 10 h . so o/p is 10.
  console.log(str.match('Pratham'));
  console.log(str.repeat( 2));
  console.log(str.replace('Pratham','Shruti'));
  console.log(str.replaceAll('Pratham','Shruti'));

  */ 
  // Math 
/*
 let randomnumber = Math.floor(Math.random() * 10) + 1
console.log(randomnumber) */

// Date  

 /*

   let date = new Date();
   console.log(date.getFullYear());
   console.log(date.getTime());
   console.log(date.getMonth());
   console.log(date.getTimezoneOffset());
   console.log(date.getUTCDate());
   console.log(date.toLocaleDateString());
   console.log(date.toUTCString());
   console.log(date.toLocaleTimeString());

 */

  
 
