import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSectionComponent } from './title-section.component';



@NgModule({
  declarations: [TitleSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TitleSectionComponent
  ]
})
export class TitleSectionModule { }
