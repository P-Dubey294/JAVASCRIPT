const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// Add task function with callback
function addTask(task, callback) {
  tasks.push({ task, completed: false });
  callback();
}

// Display tasks with callback
function displayTasks() {
  taskList.innerHTML = '';
  tasks.forEach((taskObj, index) => {
    const li = document.createElement('li');
    li.textContent = taskObj.task;
    li.className = taskObj.completed ? 'completed' : '';

    // Complete Task Button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => completeTask(index, displayTasks));

    // Delete Task Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(index, displayTasks));

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Mark task as complete with callback
function completeTask(index, callback) {
  tasks[index].completed = !tasks[index].completed;
  callback();
}

// Delete task with callback
function deleteTask(index, callback) {
  tasks.splice(index, 1);
  callback();
}

// Event Listener for adding tasks
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText, displayTasks);
    taskInput.value = '';
  }
});
