import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Todos } from '../../Todo';
import { TodoItemsComponent } from '../todo-items/todo-items.component';
import { AddTodosComponent } from '../add-todos/add-todos.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,TodoItemsComponent,AddTodosComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  
  todos:Todos[]; 
  constructor() {
    this.todos = [
      { title: "good morning", active: true },
      { title: "good evening", active: true },
      { title: "excersize for health", active: true },
      { title: "good evening", active: true }
    ];
  }
  deleteTodo(todo:Todos){
    const index=this.todos.indexOf(todo)
    this.todos.splice(index,1)    
  }
  addTodo(todo:Todos){
    this.todos.push(todo)    
  }
  checkTodo(todo:Todos){
    const index=this.todos.indexOf(todo)
    this.todos[index].active=!this.todos[index].active       
  }

}
