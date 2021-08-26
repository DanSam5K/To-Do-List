import { addTask, deleteTask } from './add-remove.js';

describe('Add object to taskArray', () => {
  test('Add one object to the tasksArray', () => {
    document.body.innerHTML = `
    <input type="text" id="input" class="input" value="input" placeholder="Add to your list...">
    <ul class="taskContainer">
    <label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">value</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div>
    </ul>
    <button type="button" class="button" data-action="deleteCompleted">Clear all completed</button> `;
    const addObject = document.getElementsByClassName('input')[0];
    addObject.addEventListener('submit', () => addTask);
    expect(document.getElementsByClassName('task-description')[0].textContent).toBe('value');
  });
});

describe('deleteTask()', () => {
  test('remove an object from tasksArray', () => {
    document.body.innerHTML = `
    <input type="text" id="input" class="input" value="input" placeholder="Add to your list...">
    <ul class="taskContainer">
    <label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task one</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div>
    <label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task two</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div>
    <label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task three</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div>
    </ul>
    <button type="button" class="button" data-action="deleteCompleted">Clear all completed</button> `;

    const deleteIcons = document.getElementsByClassName('deleteIcons');
    for (let i = 0; i < deleteIcons.length; i += 1) {
      deleteIcons[i].addEventListener('click', () => deleteTask);
    }
  });
});
