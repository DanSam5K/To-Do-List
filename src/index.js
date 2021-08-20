import _ from 'lodash';
import './style.css';
import filterTodo from './todo.js';
import Todo from './todoclass.js';
import UI from './uiclass.js';

const todoList = document.querySelector('.todo-list');
const todoButton = document.querySelector('.todo-button');
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

   //instantiate a todo
   const todo = new Todo(completed, description, edit, index)
   console.log(todo);

   //Add book to list from the UI
   UI.addTodoToList(todo);
})

todoList.addEventListener('click', UI.deleteCheck);
filterOption.addEventListener('click', filterTodo);
