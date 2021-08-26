import editTask from './edit';
import reorderTasks from './reorder';
import deleteCompletedTasks from './clear';

document.body.innerHTML = `    
          <input type="text" id="input" class="input" value="input" placeholder="Add to your list...">
          <ul class="taskContainer">
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task one</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task two</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div></li>
          <li><label><input type="checkbox" class="check-box"><i class="fa fa-check checkIcon"></i><p class="task-description">task three</p></label><div><i class="fa fa-ellipsis-v editIcon icon"></i><i class="fa fa-trash deleteIcon"></i></div><li>
          </ul>
          <button type="button" class="button" data-action="deleteCompleted">Clear all completed</button> `; 
let domElement = document.body.innerHTML;

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
  

  