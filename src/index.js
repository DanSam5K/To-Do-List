import _ from 'lodash';
import './style.css';
import filterTodo from './todo.js';
import Todo from './todoclass.js';
import UI from './uiclass.js';
import Store from './store.js';

window.onload = function windowReady() {
  const todoList = document.querySelector('.todo-list');
  const filterOption = document.querySelector('.filter-todo');
  const todoForm = document.querySelector('#todo-form');

  let clickTimes = true;
  const edit = (event) => {
    const item = event.target;

    if (item.classList[0] === 'edit-btn') {
      // const editTodo = document.querySelector('edit');
      const taskId = parseInt(item.id.replace('button-edit-', ''), 10);
      document.querySelector(`#todo-edit-${taskId}`).style.display = 'block';
      document.querySelector(`#new-edit-${taskId}`).style.display = 'none';
      const element = Store.getTodos()[taskId];

      if (clickTimes === false) {
        element.description = document.querySelector(`#todo-edit-${taskId}`).value;
        document.querySelector(`#todo-edit-${taskId}`).style.display = 'none';
        document.querySelector(`#new-edit-${taskId}`).style.display = 'block';
      }
      clickTimes = false;
    }
  };

  // Event Listeners
  document.addEventListener('DOMContentLoaded', UI.displayTodo);

  // Add Book Event
  todoForm.addEventListener('submit', (event) => {
    // prevent default submit
    event.preventDefault();
    // const completed = '<i class="fas fa-check"></i>';
    const description = document.querySelector('#description').value;
    const index = Store.getTodos().length;

    // validate input
    if (description === '') {
      UI.showAlert('Please fill in To-Do-List', 'danger');
    } else {
      // instantiate a todo
      const todo = new Todo(description, index);
      // Add book to list from the UI
      UI.addTodoToList(todo);
      // Show success message
      // Add book to store
      Store.addTodo(todo);
      UI.showAlert('To-Do-List Added', 'success');
      // Clear input fields
      UI.clearFields();
    }
  });

  todoList.addEventListener('click', UI.delete);
  todoList.addEventListener('click', UI.check);
  todoList.addEventListener('click', edit);

  filterOption.addEventListener('click', filterTodo);
  UI.displayTodo();
};