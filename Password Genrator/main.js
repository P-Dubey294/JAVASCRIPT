
 const btn = document.getElementById("genratePass");
 const newPass = document.getElementById("newPass");
 const slider = document.getElementById("range");
 const rangVal = document.getElementById("rangValue")


 const upperCase = document.getElementById("caplet")
 const LowerCase = document.getElementById("smallet")
 const number = document.getElementById("number")
 const symbol = document.getElementById("symbol")
 const copy = document.getElementById("copyBtn")
 

 rangValue.innerText = slider.value   // range value show krne ke liye 

    slider.addEventListener('input' , (e) =>{
          rangValue.innerText = e.target.value  // changing the rang value 
    })

    btn.addEventListener('click' , () => {

        // let consider a 4 string varible 

        let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let smallLetter = 'abcdefghijklmnopqrstuvwxyz'
        let numberStr = '0123456789'
        let symbolStr = '@#_{}`~/-'

        let finalStr = '' ;  // isme vo pure 4 string varible include hai  
        
        // muze apne accordinng password genrated krna hai so 

        if(upperCase.checked){
            finalStr += capitalLetter;
        }
        if(LowerCase.checked){
            finalStr +=smallLetter;
        }
        if(number.checked){
            finalStr +=numberStr;
        }
        if(symbol.checked){
            finalStr +=symbolStr;
        }
        if(finalStr == ''){
            alert("Please Select At Least One Option")
        }
         let letestPass = '' ; // iske under new password ayengaa            
   
         for (let i = 0; i < slider.value; i++) {   // isss loop ka use hum only for random character <number> ko genrate krne ke liye kr rhe hai 

            // Random number genrate
            let randNum = Math.floor( Math.random() * finalStr.length)
            // console.log(randNum)

            // Logic aayegaa iske under 
            //letestPass += finalStr[randNum]  // randNum Ko isme pass kra q ki use as a index used krne ke liye  

             letestPass +=finalStr.charAt(randNum) // iske help se hume pure 4 string ke under ki value , alphabet , symbol milegi .
         }
         newPass.innerText = `${letestPass}`  // showing the new password genrated.
    })

    // copy paste 
   copyBtn.addEventListener ('click' , () => {
    window.navigator.clipboard.writeText(newPass.innerText);
    alert("Your Genrate Password Is Copied")
   })





  