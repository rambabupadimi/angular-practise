import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTodos } from '../actions/todos.actions';
import { selectAllTodos, selectTodosError, selectTodosLoading } from '../selectors/todos.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList  implements OnInit {

  todosList$ = this.store.select(selectAllTodos);
  todosLoading$ = this.store.select(selectTodosLoading);
  todosError$ = this.store.select(selectTodosError);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

}
