// Functions

// Selectors
const todoInput = document.querySelector('.todo-input');
//const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

const addTodo = (event) => {
    // Prevent form from submitting
    event.preventDefault();
    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
  
    // Checked mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
  
    todoDiv.appendChild(completedButton);
  
    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
  
    todoDiv.appendChild(newTodo);
  
    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
  
    todoDiv.appendChild(trashButton);
  
    // Append to list
    todoList.appendChild(todoDiv);

    //Clear input value
    todoInput.value = '';
  };

  export { addTodo };