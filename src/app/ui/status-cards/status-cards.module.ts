import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCardsComponent } from './status-cards.component';



@NgModule({
  declarations: [StatusCardsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StatusCardsComponent
  ]
})
export class StatusCardsModule { }
