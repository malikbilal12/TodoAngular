import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todos } from '../../Todo';

@Component({
  selector: 'app-add-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todos.component.html',
  styleUrl: './add-todos.component.css'
})
export class AddTodosComponent {
  @Output() todoAdd: EventEmitter<Todos> =new EventEmitter()
  title: string = '';

  onSubmit() {
    const todo = {
      title: this.title,
      active:true
    };
    this.todoAdd.emit(todo)
  }

}
