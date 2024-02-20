import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
removeTodoItem(id: string) {
  let getConfirm =confirm(`Are you sure you want to ,remove this Todo Item ?`)
  if(getConfirm){
    this._todoService.removeTodoItem(id)
  }
 
}
  todoItem!: Array<Itodo>;
  constructor(private _todoService:TodoService,
 
    ) { }

  ngOnInit(): void {
    this.todoItem=this._todoService.getAlltodoList()
    
  }
  

}
