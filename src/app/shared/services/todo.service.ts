import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   todoItem :Array<Itodo>=[
    {
      todoItem:"Angular",
      todoId:"qwerty",
    }
   ]
  constructor( private _snackbar:SnackbarService) { }
  getAlltodoList(){
    return this.todoItem
  }

  addTodoItem(obj:Itodo){
    this.todoItem.push(obj)
    this._snackbar.opensnackbar(`${obj.todoItem} is Added in TodoList`,"close")
  }

  removeTodoItem(id:string){

    let getIndex=this.todoItem.findIndex(todo =>{
      return todo.todoId === id
    })
        this.todoItem.splice(getIndex ,1);
        this._snackbar.opensnackbar(`Item with Id ${id}is remove from list`,"cancel")
  }
}


