import Store from './store.js'

export default class UI {
    static displayTodo = () => {
      const todos = Store.getTodos();

      todos.forEach((todo) => UI.addTodoToList(todo));
    }

    static addTodoToList(todo) {
      const todoList = document.querySelector('.todo-list');

      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');

      const completedButton = document.createElement('button');
      completedButton.innerHTML = `${todo.completed}`;
    //   completedButton.classList.add('uncomplete-btn');
      completedButton.classList.add('toggle-btn');
      todoDiv.appendChild(completedButton);

      const newTodo = document.createElement('li');
      newTodo.innerText = `${todo.description}`;
      newTodo.id = `new-edit-${todo.index}`;
      newTodo.classList.add('todo-item');
      todoDiv.appendChild(newTodo);

      const editTodo = document.createElement('input');
      editTodo.value = `${todo.description}`;
      editTodo.id = `todo-edit-${todo.index}`;
      editTodo.style.display = 'none';
      editTodo.classList.add('todo-item');
      todoDiv.appendChild(editTodo);

      const editButton = document.createElement('button');
      editButton.innerHTML = `${todo.edit}`;
      editButton.id = `button-edit-${todo.index}`;
      editButton.classList.add('edit-btn');
      todoDiv.appendChild(editButton);

      const trashButton = document.createElement('button');
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      trashButton.classList.add('trash-btn');
      todoDiv.appendChild(trashButton);
      // Append to list
      todoList.appendChild(todoDiv);
    }

    static showAlert = (message, className) => {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const body = document.querySelector('BODY');
      const form = document.querySelector('#todo-form');
      body.insertBefore(div, form);

      setTimeout(() => document.querySelector('.alert').remove(), 1000)
    }

    static clearFields = () => {
        document.querySelector('#description').value = ''
    }

    static delete = (event) => {
      
      const item = event.target;
      // Delete Todo
 
      if(item.classList[0] === 'trash-btn') {
    
              const todo = item.parentElement;
              todo.classList.add('fall');
              todo.addEventListener('transitionend', () => {
                item.remove();
              })         
          }
    }


    static check = (event) => {
      const item = event.target;
      if (item.classList[0] === 'toggle-btn') {
        // if (item.classList[1] === 'uncomplete-btn') {
          const todo = item.parentElement;
          todo.classList.toggle('completed');
        //   item.classList.remove('uncomplete-btn');
          item.classList.toggle('complete-btn');

          if(item.classList === 'complete-btn'){
            const todo = item.parentElement;
            todo.classList.toggle('completed');
          //   item.classList.remove('uncomplete-btn');
            item.classList.toggle('complete-btn');
          }
        // } else {
        //   const todo = item.parentElement;
        //   todo.classList.toggle('completed');
        //   item.classList.remove('complete-btn');
        //   item.classList.add('uncomplete-btn');
        // }
      }
    }

}
