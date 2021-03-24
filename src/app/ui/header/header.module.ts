import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuModule } from '../menu/menu.module';
import { UserDataModule } from '../user-data/user-data.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MenuModule,
    UserDataModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
