// Functions

// Selectors
const todoInput = document.querySelector('.todo-input');
//const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


const addTodo = event => {
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
  
  const deleteCheck = event => {
     const item = event.target;
    // Delete Todo
    //  if(item.classList[0] === "trash-btn"){
    //     const todo = item.parentElement;
    //     //Animation
    //     todo.classList.add('fall');
    //     todo.addEventListener('transitionend', () => {
    //         todo.remove();
    //     })
        
    //  }
    // Check mark
     if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
     }
  }

  const filterTodo = event => {
      const todo = todoList.childNodes();
      todoList.forEach(todo => {
          switch(event.target.value){
            case "all":
                todo.style.display = "flex"
              break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none";
                }
              break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none";
                }
              break;
          }
      })
  }

  export { addTodo, deleteCheck, filterTodo };