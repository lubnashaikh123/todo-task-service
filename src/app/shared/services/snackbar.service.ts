import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor( private _snackbar:MatSnackBar) { }
  opensnackbar(msg:string ,action:string){
   this._snackbar.open(msg ,action,{
    duration:3000,
    horizontalPosition:'left',
    verticalPosition:'top'
   })
  }
}
