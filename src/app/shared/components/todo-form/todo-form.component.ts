import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todo';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor( private _todoService:TodoService,
               private _utilityService:UtilityService 
    ) { }

  ngOnInit(): void {
  }
  onTodoItem(todo:HTMLInputElement){
   let val=todo.value
   let obj :Itodo={
      todoItem:val,
      todoId:this._utilityService.generateId()
   }
    this._todoService.addTodoItem(obj)
    todo.value;
    
  }
}
