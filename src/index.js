import _ from 'lodash';
import './style.css';
import filterTodo from './todo.js';
import Todo from './uiclass.js';
import UI from './uiclass.js';

const todoList = document.querySelector('.todo-list');
const todoButton = document.querySelector('.todo-button');
const filterOption = document.querySelector('.filter-todo');
const todoForm = document.querySelector("#todo-form")

// class constructor
// class Todo {
//   constructor(completed, description, index) {
//     this.completed = completed;
//     this.description = description;
//     this.index = index;
//   }
// }

// Event Listeners
document.addEventListener('DOMContentLoaded', UI.displayTodo);

//Add Book Event
todoForm.addEventListener('submit', (event) => {
   //prevent default submit
   event.preventDefault();
  const todoValue = document.querySelector("#description").value;
   //instantiate a todo
   const todo = new Todo(description)
   console.log(todo);

   //Add book to list from the UI
   
})

todoList.addEventListener('click', UI.deleteCheck);
filterOption.addEventListener('click', filterTodo);
