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

export const deleteTask = (id, tasksArray) => {
  const newFilteredTask = tasksArray.filter((task) => task.id !== id);
  const deleteTask = tasksArray.filter((task) => task.id === id);
  deleteTask.remove();
  tasksArray = newFilteredTask;
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
};