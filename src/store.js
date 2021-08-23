export default class Store {
    static getTodos = () => {
      let todos;
      if (localStorage.getItem('todos') === null) {
        todos = [];
      } else {
        todos = JSON.parse(localStorage.getItem('todos'));
      }

      return todos;
    }

    static addTodo = (todo) => {
      const todos = Store.getTodos();
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    static removeTodo = (todo) => {
      let todos = Store.getTodos();
      if (localStorage.getItem('todos') === null) {
        todos = [];
      } else {
        todos = JSON.parse(localStorage.getItem('todos'));
      }
      const todoIndex = todo.children[0].innerText;
      todos.splice(todos.indexOf(todoIndex), 1);
      localStorage.setItem('todos', JSON.stringify(todos));
    }
}