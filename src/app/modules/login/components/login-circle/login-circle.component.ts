import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login-circle',
  templateUrl: './login-circle.component.html',
  styleUrls: ['./login-circle.component.css']
})
export class LoginCircleComponent implements OnInit {

  form = new FormGroup({
    funcional: new FormControl('', Validators.required),
    racf: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  })

  constructor() { 
    
  }
  
  ngOnInit(): void {
  }
}
