import Store from './store.js';

export default class Todo {
  constructor(description, index) {
    this.completed = false;
    this.description = description;
    this.index = index;
  }
}