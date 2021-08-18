import _ from 'lodash';
import './style.css';

// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// class constructor
class Todo {
  constructor(completed, description, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}

class UI {
    static displayTodo = () => {
      const storedTodo = [
        {
          completed: '<i class="fas fa-check"></i>',
          description: 'Hard Coded To Do One',
          index: '<i class="fas fa-ellipsis-v"></i>',
        },
        {
          completed: '<i class="fas fa-check"></i>',
          description: 'Hard Coded To Do Two',
          index: '<i class="fas fa-ellipsis-v"></i>',
        },
        {
            completed: '<i class="fas fa-check"></i>',
            description: 'Hard Coded To Do Two',
            index: '<i class="fas fa-ellipsis-v"></i>',
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
      completedButton.classList.add('complete-btn');
      todoDiv.appendChild(completedButton);

      const newTodo = document.createElement('li');
      newTodo.innerText = `${todo.description}`;
      newTodo.classList.add('todo-item');
      todoDiv.appendChild(newTodo);

      const trashButton = document.createElement('button');
      trashButton.innerHTML = `${todo.index}`;
      trashButton.classList.add('trash-btn');
      todoDiv.appendChild(trashButton);
      // Append to list
      todoList.appendChild(todoDiv);
    }
}
// Functions

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
  newTodo.innerText = 'Hard coded To do Items';
  newTodo.classList.add('todo-item');

  todoDiv.appendChild(newTodo);

  // Trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');

  todoDiv.appendChild(trashButton);

  // Append to list
  todoList.appendChild(todoDiv);
};

// Event Listeners
document.addEventListener('DOMContentLoaded', UI.displayTodo);
todoButton.addEventListener('click', addTodo);