import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todos } from '../../Todo';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  @Input() todo: any;
  @Output() todoDelete: EventEmitter<Todos> =new EventEmitter()
  @Output() todoCheck: EventEmitter<Todos> =new EventEmitter()

  deletetodo(todo:Todos){
    this.todoDelete.emit(todo)
  }
  checktodo(todo:Todos){
    this.todoCheck.emit(todo)
  }
}
