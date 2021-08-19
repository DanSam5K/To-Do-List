import _ from 'lodash';
import './style.css';
import filterTodo from './todo.js';
import UI from './uiclass.js';

const todoList = document.querySelector('.todo-list');
const todoButton = document.querySelector('.todo-button');
const filterOption = document.querySelector('.filter-todo');

// class constructor
class Todo {
  constructor(completed, description, index) {
    this.completed = completed;
    this.description = description;
    this.index = index;
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', UI.displayTodo);
todoList.addEventListener('click', UI.deleteCheck);
filterOption.addEventListener('click', filterTodo);
