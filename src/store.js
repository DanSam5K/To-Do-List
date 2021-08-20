export default class Store {
    static getTodos = () => {
       let todos;
       if(localStorage.getItem('todos') === null) {
           todos = [];
       } else{
           todos = JSON.parse(localStorage.getItem('todos'));
       }

       return todos;
    }

    static addTodo = (todo) => {
        const todos = Store.getTodos();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    static removeTodo = (index) => {
        const todos = Store.getTodos();

        todos.forEach((todo, num) => {
            if(todo.index === index){
                todos.splice(num, 1);
            }
        });
        localStorage.setItem('todos', JSON.stringify(todos))    
    }
}