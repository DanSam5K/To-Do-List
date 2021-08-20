import Store from './store';
export default class Todo {
  constructor(completed, description, edit) {
    this.completed = completed;
    this.description = description;
    this.edit = edit;
    this.index = Store.getTodos().length;
  }
}