import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports:[
    MenuComponent
  ]
})
export class MenuModule { }
