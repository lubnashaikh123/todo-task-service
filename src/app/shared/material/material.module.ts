import { NgModule } from "@angular/core";
import{MatSnackBarModule}from "@angular/material/snack-bar";
import {MatButtonModule}from "@angular/material/button";
import {MatIconModule}from "@angular/material/icon";
import {MatDialogModule} from '@angular/material/dialog';

const MaterialModules=[MatSnackBarModule,MatButtonModule,MatIconModule,MatDialogModule]
@NgModule({
    exports:[...MaterialModules],
    imports:[...MaterialModules]
})

export class MaterialModule{
    
}