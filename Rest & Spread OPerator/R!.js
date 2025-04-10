// function sum(a,b,c){
//     let total =  a + b + c;
//     console.log("The totoal is :",total);
// }
// sum(5,6,7);

 // Rest operator ka use remaining value ko grouping ke liye hota hai .
   
                                  //OR 

// Spread Opertor ka use values ko jitni bhi values hai usko single part me devide kr leta hai.

    // function sum (a,...num){
    //     let total = a + num[0] + num[1]
    //     console.log(total);
    //  }
    // sum(4,6,7);

     let obj = {
        title : "lecture30",
        tags : "lect30,rest,spread",
        Description : "Hello pratham"
      } 

    //   combine hoke milegi ek array ke form me 

       let arr = [4,5,67,42,5,334,345]
       let arr2 = [7,0,6,2,45,456]
       let newArry = [...arr, ...arr2] // spread operator... Degrouping
       console.log(newArry);

      function obj1({title,tags,Description}){
        console.log(tags);
        let tagsArray = tags.split(",") //split tag converting in the form of array like ["lect30","rest","spread"].
        console.log(tagsArray);
      }
      obj1(obj);

    //   let {title,...remaining} = obj
    //   console.log(remaining);

                    

