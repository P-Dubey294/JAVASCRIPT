 const TicTac = document.querySelector(".TicTac");
 const boxes = document.querySelectorAll(".box");
 const toe = document.getElementById("toe");
 const rBtn = document.getElementById("restbtn");

 let currentPlayer = "X"
 let count = 0; 

 let winingCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
 ];

 function eventStart(e)  {
    if(e.target.className !== 'TicTac'){
        if (e.target.innerText === ""){
            e.target.textContent = currentPlayer  // yha pr value put ho rhi 
            count++;
            winner();
            currentPlayer = (currentPlayer == 'X') ? "O"  : "X"  // ternary operator 
        }
        if(count === 9 ){
             toe.innerText = 'DRAW MATCH'
        }
    }
 }

 function  gameStart() {
    TicTac.addEventListener('click', eventStart);
 }
    

 
   

 function winner() {
     winingCondition.forEach((item) => {
        // let index0 = item[0]
        // let index1 = item[1]
        // let index2 = item[2]
        // console.log(index0, index1, index2)
        let val0 = boxes[item[0]].innerText
        let val1 = boxes[item[1]].innerText
        let val2 = boxes[item[2]].innerText       
        // console.log(index0, val0, index1, val1, index2, val2)
        if(val0 !== "" && val1 !== "" && val2 !== ""){
            if(val0 == val1 && val0 == val2){

                boxes[item[0]].classList.add("winnerClass")
                boxes[item[1]].classList.add("winnerClass")
                boxes[item[2]].classList.add("winnerClass")// ye ek div hy jisme humne bydefault css se utyi hai  
                count = 0 ;
                toe.innerText = `WINNER IS ${val1}`
                TicTac.removeEventListener('click', eventStart);
                // console.log("Winnier is ",val0)
            }
        }
    });
 }
 rBtn.addEventListener('dblclick' , () => {
    currentPlayer = "X" // restarting the with X 
    toe.innerText = "Tic Tac Toe"
    boxes.forEach(item => {
        item.classList.remove("winnerClass") // Colour Remove also with reset
        item.innerText = ''
    })
    gameStart();
 })

 gameStart();
 
