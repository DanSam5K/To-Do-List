import _ from 'lodash';
import './style.css';
import filterTodo from './todo.js';
import Todo from './todoclass.js';
import UI from './uiclass.js';

const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
const todoForm = document.querySelector("#todo-form");

// Event Listeners
document.addEventListener('DOMContentLoaded', UI.displayTodo);

//Add Book Event
todoForm.addEventListener('submit', (event) => {
   //prevent default submit
   event.preventDefault();
  const completed = '<i class="fas fa-check"></i>';
  const description = document.querySelector("#description").value;
  const edit = '<i class="fas fa-edit"></i>';
  const index = '<i class="fas fa-trash"></i>';
  //validate input
  if(description === ''){
    UI.showAlert('Please fill in To-Do-List', 'danger');
  } else{
   //instantiate a todo
   const todo = new Todo(completed, description, edit, index)
   //Add book to list from the UI
   UI.addTodoToList(todo);
   //Show success message
   UI.showAlert('To-Do-List Added', 'success');
   //Clear input fields
   UI.clearFields();
  }
});

todoList.addEventListener('click', UI.delete);
todoList.addEventListener('click', UI.check)
filterOption.addEventListener('click', filterTodo);
