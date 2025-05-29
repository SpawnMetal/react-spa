import { makeAutoObservable } from "mobx";

class Todo {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(value) {
    this.todos = [...this.todos, value];
  }
}

export const todoStore = new Todo();