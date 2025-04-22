let todoInput = document.getElementById('todoInput');
function removeTodo(id) {
    let div = document.getElementById(id)  // this ellemet to find a perticular id 
    div.remove() // it is a function wich helpp tho remove a  todo with the help of perticular id .
}
function markTodo(id) {
    let div = document.getElementById(id)
    div.children[0].classList.toggle('completed')
    // ye humara perticular task completed ho jayega tho that time pr 
    // uss pr cross line aajyegi with help of togle .
}

let id = 1; // id bydefault is 1 
document.getElementById('addBtn').addEventListener('click', (e) => {
    e.preventDefault()
    let todoVal = todoInput.value;
    let div = document.createElement('div');
    div.setAttribute("class" , 'singleTodo');
    div.setAttribute("id" , id);  // iske through ek perticuler todo ko id de diya gya hai jime id ko passed kiya jaa rha hai 
    div.innerHTML = `
            <h2>${todoVal}</h2>
            <input type="checkbox" name="" id=""onclick = markTodo(${id})>
            <button onclick = removeTodo(${id})>Remove Todo</button>
    `;  
    // iske under ek button usme bhi id ko pass kr diya with the 
    // help of creating a function its name is removeTodo 
    document.getElementById('allTodo').appendChild(div);
    id++; // id will be incresed by 1 
    todoInput.value =""; 
   
})