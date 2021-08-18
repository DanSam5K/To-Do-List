import _ from 'lodash';
import './style.css';

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Functions

const addTodo = event => {
    //Prevent form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Checked mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');

    todoDiv.appendChild(completedButton);

    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'Hard coded To do Items';
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');

    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);
}


const displayTodo = () => {
    const storedTodo = [
        {
            check: '<i class="fas fa-check"></i>',
            description: 'Hard Coded To Do',
            delete:'<i class="fas fa-trash"></i>'
        },
        {
            check: '<i class="fas fa-check"></i>',
            description: 'Hard Coded To Do',
            delete:'<i class="fas fa-trash"></i>'
        }
    ];

    const todoList = storedTodo;

    todoList.forEach(() => addTodo())
}


//Event Listeners
document.addEventListener('DOMContentLoaded', displayTodo)
todoButton.addEventListener('click', addTodo)