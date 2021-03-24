import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormClientRoutingModule } from './form-client-routing.module';
import { FormClientComponent } from './form-client.component';
import { Input2Module } from 'src/app/ui/input2/input2.module';
import { ButtonModule } from 'src/app/ui/button/button.module';


@NgModule({
  declarations: [FormClientComponent],
  imports: [
    CommonModule,
    FormClientRoutingModule,
    Input2Module,
    ButtonModule
    
  ]
})
export class FormClientModule { }
