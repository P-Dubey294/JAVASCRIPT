const btn = document.getElementById("btn");
const body = document.querySelector("body");
//  body.style.backgroundColor = 'yellow';
// console.log(btn)

 //Event Handler

// btn.onclick = () => {
//     console.log("Hello Pratham Dubey");
// }
// btn.onclick = () => {
//     console.log("Hello Shruti Dubey");
// }

// Event Listner 

// btn.addEventListener('click' , function () {
//     console.log("Ashiq Bnaya Apne")
// })
 
// Task --> how to change background color on your clicking the button?
 
//  btn.addEventListener('click', () => {
//  const bgc = document.getElementById('change')
//  bgc.style.backgroundColor = 'green';
//  })

 // Event Object 

//btn.addEventListener('click', (eventObject) => {
//    console.log(eventObject.target.type) //innerText // TagName
//    console.log("Hello how are you")  
//  })
   
 // short way
    //  btn.addEventListener('click', (e) => {
    //  //   alert("hey shruti ka naaam chuchundri hai u know that...!")
    //  // confirm("ye to pkaaa confirm hai ki tu chuchundri hai..") // 
    // const isChange = confirm("color change ?") // user ko return true or false kregaa !
     //console.log(isChange);


//   if(isChange)
    
//     {

//        const  colorName = prompt("Which clolr you hva choose..!")
//        console.log(colorName); //// user se input lengaaa 
//        body.style.backgroundColor = `${colorName}`//Tempalte Literal 

   
//     }
 

//   // console.log(e.target) //innerText // TagName
//     console.log("Good Night") ; 

//  })


const Submit = document.getElementById("submit")
const colorName = document.getElementById("colorName")

submit.addEventListener("click" , (e) => {
  e.preventDefault();
  body.style.backgroundColor = `${colorName.value}`
  // console.log(e);

  console.log(colorName.value);
  

})