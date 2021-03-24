import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import{ Login } from '../../../../shared/models/login'
import { LoginService } from '../../../../shared/service/login.service'

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

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { 
    
  }
  
  ngOnInit(): void {
  }

  onConsultar(): void {
    this.loginService.setLogin(this.form.value);
    this.router.navigateByUrl('/frame');
  }
}
