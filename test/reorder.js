const reorderTasks = (tasksArray, moveId, placedId) => {
  const moveElementIndex = tasksArray.findIndex((element) => element.id === moveId);
  const moveElement = tasksArray[moveElementIndex];
  let newTaskArray = [];
  tasksArray.forEach((element, index) => {
    if (element.id === placedId) {
      if (index < moveElementIndex) {
        newTaskArray = newTaskArray.concat([moveElement, element]);
        return;
      }
      newTaskArray = newTaskArray.concat([element, moveElement]);
      return;
    }
    if (element.id !== moveId) {
      newTaskArray = newTaskArray.concat([element]);
    }
  });
  return newTaskArray;
};

export default reorderTasks;