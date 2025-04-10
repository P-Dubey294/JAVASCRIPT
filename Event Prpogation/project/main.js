const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const items = document.getElementsByClassName("item")

for (let item of items) {           // mutiple item 
    // console.log(item.innerHTML);

    item.addEventListener('dragstart', (e) => {   // e -- event object 
        console.log(e.target) // Drag Start  

         let data = e.target 
         console.log(data)

        box2.addEventListener('dragover' , (e) =>{
          e.preventDefault();
          e.stopPropagation();
    })

    box2.addEventListener("drop",() => {
        box2.append(data)
        data = '';
    })

    // REVERSE 

    box1.addEventListener('dragover' , (e) =>{
        e.preventDefault();
        e.stopPropagation();
      })
 
      box1.addEventListener("drop",() => {
        box1.append(data)
        data = '';
      })
    })
    // item.addEventListener('dragend', () => {
    //     console.log("drag dragend")
    // })
    // item.addEventListener('dragover', () => {
    //     console.log("drag dragover")
    // })
    // item.addEventListener('draleave', () => {
    //     console.log("drag dragleave")
    // })
    // item.addEventListener('dragenter', () => {
    //     console.log("drag dragenter")
    // })
} 