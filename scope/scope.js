// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:
// Global Scope
// Block scope
// function scope
// JavaScript variables had only Global Scope and Function Scope.

// Note -> let and Const are blocked scope 
//                  &
//          var - global scope

//  Example  
                 // let SCOPE
//  {
//     let name ="Pratham Dubey";
//     console.log(name);      // blocked scope      
//  }
//     // console.log(name);

//         //    OR 
//     let naam = "Shruti sharam";
//     {
//         console.log(naam);
//     }
        //   OR 

        // let Bank_name = "Punjab National Bank";
        // for(let  i = 0; i<5; i++){
        //     console.log(Bank_name)
        // }
     

    // Const scope


// {
//     // const City = "Gondia";
//     // console.log(City);     // blocked scope
// }
//  console.log(City);



    // VAR SCOPE
//  {
//     var car_name = "G-Wegon-25D";
//  }
//     console.log(car_name); // Global Scope 

// Function SCOPE 
 function hello() {
     const Book_name = "Dr RS Agrwal";
     console.log("inside function");
     console.log(Book_name);

     function hello2 () { 
        const name = "Pratham Dubey";
        console.log(Book_name);
       
     }
     console.log(naam);
     hello2();
  
 }
 hello();
