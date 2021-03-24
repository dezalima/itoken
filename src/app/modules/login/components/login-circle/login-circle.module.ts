import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCircleComponent } from './login-circle.component';
import { ButtonModule } from 'src/app/ui/button/button.module';
import { InputModule } from 'src/app/ui/input/input.module';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [LoginCircleComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputModule,
    ReactiveFormsModule
  ],
  exports:[LoginCircleComponent]
})
export class LoginCircleModule { }
