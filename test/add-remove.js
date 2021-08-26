const taskContainer = document.querySelector('.taskContainer');

export const addTask = (event) => {
  event.preventDefault();
  const description = document.querySelector('.input').value;
  const newTask = Task({ description });
  const currentTasksArray = getTasksArray();
  const newTasks = currentTasksArray.concat(newTask);
  setTasksArray(newTasks);
  reRenderTask(newTasks, taskContainer);
};

  