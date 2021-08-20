export default class Store {
    static getTodoList = () => {
       let todos;
       if(localStorage.getItem('todos') === 'null'){
           todos = [];
       } else {
           todos = JSON.parse(localStorage.getItem('todos'));
       }

       return todos;
    }

    static addTodo = () => {
        const todos = this.getBooks();
        books.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    static removeTodo = (index) => {
        const todos = this.getBooks();

        books.forEach((todo, num) => {
            if(todo.index === num){
                todos.splice(num, 1);
            }
        });
        localStorage.setItem('todos', JSON.stringify(todos))    
    }
}