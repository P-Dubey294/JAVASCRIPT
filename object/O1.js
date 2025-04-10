// object are stored the deatils data in the form of key and value .
  const obj ={
       name : "Pratham Kumar Dubey",
       id  : 'B44',
       course : "MCA",
       College_Name : 'GH Raisoni college of engeenering nagpur',
       hosteler : false
    };
  //  console.log(obj["name"]) // how to accese the key and there value.
  //  console.log(obj.id);

  // Array of object 

   const student = [{ name : "Pratham Kumar Dubey",
     id  : 'B44',
     course : "MCA",
     College_Name : 'GH Raisoni college of engeenering nagpur',
     hosteler : false
 },
 {
     name : "Shruti Dipak Sharma",
     id  : 'CA9906',
     course : "CA",
     College_Name : 'ICAI Institute India',
     hosteler : false 
 }
];
   console.log(student);
   console.log(typeof(student));
   console.log(student[0].name);

// loop for in loop & for of loop 
// for in loop object ke liye hota hai .
// for of loop string & array ke liye hota hai .

 let arr = [99 ,98,97,96,95];
 const house = {
    house_name : 'vk Duubey',
    house_id : '2324CIVL',
    huse_holder : 'Vk dubey',
    House_no: 224,
 };
  for(const val of arr){
    console.log(val);
  }
  for (const val in house){
    console.log(val);
  }
// javascript ka phle naam exmsscript tha......

// template literal used at backtick .. key 
// example 
     let str = "hello";
     console.log(`${str} Good Morning`);

 let myxx = `hellow
 Good Morning
 Good Afternoon
 Good Evening
 Good Day
 Good Night`
 console.log(`${myxx}`);

 let myarr1 = [1,3,5,7,9];
 let myarr2 = [2,4,6,8,10];
 // const newArr = myarr1.concat(myarr2); 
 //myarr1.push(myarr2); 
 console.log(myarr1);


 // spred and rest ? -- Both are operators which is denoted by ...
  let  newArr = [...myarr1 , ...myarr2]
  console.log(newArr);