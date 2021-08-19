import _ from 'lodash';
import './style.css';
import { addTodo } from './todo.js';


//const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');

// Event Listeners
todoButton.addEventListener('click', addTodo);