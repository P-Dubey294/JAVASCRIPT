  const mainDiv = document.getElementById("mainDiv")
  const box = document.getElementById("div1")

 // Event Bubling --- lower to root

    box.addEventListener ('click' , () => {
      console.log("Box")
    })  

 // Event Capturing -- root to lower

    mainDiv.addEventListener ('click' , () => {
       console.log("main Div")
    }) 

    document.body.addEventListener('click' , () =>{
       console.log("body")
    },true) 

