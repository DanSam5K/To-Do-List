import { addTask, deleteTask } from './add-remove.js';
import editTask from './edit.js';
import reorderTasks from './reorder.js';
import deleteCompletedTasks from './clear.js';

document.body.innerHTML = `    
          <input type="text" id="input" class="input" value="input" placeholder="Add to your list...">
          <ul class="taskContainer">
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task one</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task two</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task three</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div><li>
          </ul>
          <button type="button" class="button" data-action="deleteCompleted">Clear all completed</button> `;
const domElement = document.body.innerHTML;

describe('Add object to taskArray', () => {
  test('Add one object to the tasksArray', () => {
    domElement;
    const addObject = document.getElementsByClassName('input')[0];
    addObject.addEventListener('submit', () => addTask);
    expect(document.getElementsByClassName('task-description')[0].textContent).toBe('value');
  });
});

describe('deleteTask()', () => {
  test('remove an object from tasksArray', () => {
    domElement;
    const deleteIcons = document.getElementsByClassName('deleteIcons');
    for (let i = 0; i < deleteIcons.length; i += 1) {
      deleteIcons[i].addEventListener('click', () => deleteTask);
    }
    expect(deleteIcons.length).toBe(0);
  });
});

describe('Test editTask', () => {
  test('edit task description', () => {
    domElement;
    const items = document.getElementsByTagName('li');
    for (let i = 0; i < items.length; i += 1) {
      const editTaskIcon = document.querySelector('.editIcon');
      editTaskIcon.addEventListener('click', editTask);
    }
  });
});

describe('Test the check status function', () => {
  test('update the completeStatus', () => {
    domElement;
    const checkBox = document.querySelector('.check-box');
    let checkedBox = checkBox.checked;
    checkedBox = true;
    expect(checkedBox).toBe(true);
  });
});

describe('Test drag and drop function', () => {
  test('change the order of elements in tasksArray', () => {
    domElement;
    const tasksArray = ['task one', 'task two', 'task three'];
    reorderTasks(tasksArray, 2, 0);

    expect(document.getElementsByClassName('task-description')[0].textContent).toBe('task one');
  });
});

describe('Test delete completedTask', () => {
  test('Delete completedTask', () => {
    domElement;
    const button = document.querySelector('.button');
    for (let i = 0; i < button.length; i += 1) {
      button.addEventListener('click', deleteCompletedTasks);
    }
  });
});