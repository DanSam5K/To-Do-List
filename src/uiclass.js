export default class UI {
    static displayTodo = () => {
      const storedTodo = [
        {
          completed: '<i class="fas fa-check"></i>',
          description: 'Hard Coded To Do One',
          edit: '<i class="fas fa-edit"></i>',
          index: '<i class="fas fa-trash"></i>',
        },
        {
          completed: '<i class="fas fa-check"></i>',
          description: 'Hard Coded To Do Two',
          edit: '<i class="fas fa-edit"></i>',
          index: '<i class="fas fa-trash"></i>',
        },
      ];

      const todos = storedTodo;

      todos.forEach((todo) => UI.addTodoToList(todo));
    }

    static addTodoToList(todo) {
      const todoList = document.querySelector('.todo-list');

      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo');

      const completedButton = document.createElement('button');
      completedButton.innerHTML = `${todo.completed}`;
      completedButton.classList.add('uncomplete-btn');
      todoDiv.appendChild(completedButton);

      const newTodo = document.createElement('li');
      newTodo.innerText = `${todo.description}`;
      newTodo.classList.add('todo-item');
      todoDiv.appendChild(newTodo);

      const editButton = document.createElement('button');
      editButton.innerHTML = `${todo.edit}`;
      editButton.classList.add('edit-btn');
      todoDiv.appendChild(editButton);

      const trashButton = document.createElement('button');
      trashButton.innerHTML = `${todo.index}`;
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

    static deleteCheck = (event) => {
      const item = event.target;
      // Delete Todo

      if(item.tagName === 'BUTTON') {
          if(item.classList[0] === 'trash-btn'){
              const todo = item.parentElement;
              todo.classList.add('fall');
              todo.addEventListener('transitionend', () => {
                item.remove();
              })         
          }
     }

      if (item.tagName === 'BUTTON') {
        if (item.classList[0] === 'uncomplete-btn') {
          const todo = item.parentElement;
          todo.classList.toggle('completed');
          item.classList.remove('uncomplete-btn');
          item.classList.add('complete-btn');
        } else {
          const todo = item.parentElement;
          todo.classList.toggle('completed');
          item.classList.remove('complete-btn');
          item.classList.add('uncomplete-btn');
        }
      }
    }
}
