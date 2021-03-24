import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input2Component } from './input2.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [Input2Component],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    Input2Component
  ]
})
export class Input2Module { }
