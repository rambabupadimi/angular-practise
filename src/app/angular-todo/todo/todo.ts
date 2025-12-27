import { Component } from '@angular/core';
import { addTodo, deleteTodo, loadTodos, updateTodo } from '../state/todo.actions';
import { todoError, todoLoading, todosListCompleted, todosListPending } from '../state/todo.selectors';
import { Store } from '@ngrx/store';
import { TodoItem } from '../state/todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss'
})
export class Todo {

  todosListPending$ = this.store.select(todosListPending);
  todosListCompleted$ = this.store.select(todosListCompleted);
  todosLoading$ = this.store.select(todoLoading);
  todosError$ = this.store.select(todoError);

  constructor(private store: Store) {}

  message: string = '';

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  submitForm() {
    const todoItem: TodoItem = {
      id: Date.now(),
      title: this.message,
      completed: false,
    };
    this.store.dispatch(
      addTodo({
        todo: todoItem,
      })
    );
    this.message = '';
  }

  todoFun(item: any, index: number) {
    return item.id;
  }

  deleteTodo(todoId: any) {
    this.store.dispatch(deleteTodo({ id: todoId }));
  }

  updateTodo(event: any, todoId: any) {
    console.log(event.target.checked);
    this.store.dispatch(
      updateTodo({
        id: todoId,
        completed: event.target.checked,
      })
    );
  }

}
