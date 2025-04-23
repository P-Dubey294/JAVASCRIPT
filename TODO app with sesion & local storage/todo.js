let todoInput = document.getElementById('todoInput');

let data = JSON.parse(localStorage.getItem('allTodo')) || []

function displyTodo() {  // diplay todo call hua 
    document.getElementById("allTodo").innerHTML = ""; // check if data are store something or not  but humne data ko empty kr diya.
    data.map((singleTodo, id) => { // data ko map kr diya jha se bhi data mil rha hain . with help of single todo and id  and humne object milegaa.
        toStructure(singleTodo, id) // todo strucutre ko call kr rhe 
    })
}    
function toStructure(singleTodo, id) { // totdo structure call hua 
    let div = document.createElement("div");
    div.setAttribute("class" , "singleTodo");
    div.innerHTML = `
            <h2>${singleTodo.todoVal}</h2>
            <input type="checkbox" name="" id="">
            <button>Remove Todo</button>
    `;  
    let btn = div.getElementsByTagName("button");
    let inp = div.getElementsByTagName("input");
    let h2 = div.getElementsByTagName("h2");

     // muze ye smjh me ajayga ki maine sabhi btn ke saath ek event 
     // listner lga diya hua hain .


    btn[0].addEventListener('click' , (e) => {   // ye perticular todo remove ke liye hain .
        e.target.parentNode.remove();
        removeTodo(id);
    });
    if(singleTodo.completed){
        h2[0].classList.toggle('completed');
        inp[0].setAttribute('checked', true);
    }
    inp[0].addEventListener('click' , (e) => {
        toggleTodo(id);
    });
    document.getElementById("allTodo").appendChild(div);
}

document.getElementById("addBtn").addEventListener("click", (e) => {  // --> event click 
    e.preventDefault();
    let todoVal = todoInput.value; // -- > yha se ek perticular value nikali hai 
    data.push({todoVal, completed : false}); // -> data ko push kiya if other data empty hain tho  
    localStorage.setItem("allTodo",JSON.stringify(data)); // -> local sotarge me humne isko set kr di hain 
    displyTodo(); // --> disply todo ko call kiya 
    todoInput.value = "";   
});
function removeTodo(id){
    data.splice(id,1);  // data.splice ka use only for data modicfiaction in orignal data into modify data  mein .
    localStorage.setItem("allTodo",JSON.stringify(data)); // iske through data ko set kr diya hain. // means uppdate kiya  todo ko in local sotarege mein  
    displyTodo();  // disply todo ko again call kr diya hain. 
}
function toggleTodo(id) {
data[id].completed = !data[id].completed;
localStorage.setItem("allTodo",JSON.stringify(data)); // update 
displyTodo(); // Rerender (again updating the todo)
}
displyTodo(); // --> alreday data are saving in the local strage.