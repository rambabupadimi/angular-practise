import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from './todo';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { loadTodos, addTodo, deleteTodo, updateTodo } from '../state/todo.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('Todo component', () => {
  let component: Todo;
  let fixture: ComponentFixture<Todo>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;

  const initialState = {
    todos: {
      list: [],
      loading: false,
      error: null
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [Todo],
      providers: [
        provideMockStore({ initialState }),
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(Todo);
    component = fixture.componentInstance;
    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadTodos on init', () => {
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(loadTodos());
  });

  it('submitForm should dispatch addTodo and clear message', () => {
    component.message = 'New todo';
    component.submitForm();
    expect(dispatchSpy).toHaveBeenCalled();
    const callArgs = dispatchSpy.calls.mostRecent().args[0];
    expect(callArgs.type).toBe(addTodo.type);
    expect(callArgs.todo).toBeDefined();
    expect(callArgs.todo.title).toBe('New todo');
    expect(component.message).toBe('');
  });

  it('todoFun should return id', () => {
    const item = { id: 123 };
    expect(component.todoFun(item, 0)).toBe(123);
  });

  it('deleteTodo should dispatch deleteTodo action', () => {
    component.deleteTodo(5);
    expect(dispatchSpy).toHaveBeenCalledWith(deleteTodo({ id: 5 }));
  });

  it('updateTodo should dispatch updateTodo action', () => {
    const fakeEvent: any = { target: { checked: true } };
    component.updateTodo(fakeEvent, 42);
    expect(dispatchSpy).toHaveBeenCalledWith(updateTodo({ id: 42, completed: true }));
  });

});
