import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../../shared/service/login.service';

@Component({
  selector: 'app-login-circle',
  templateUrl: './login-circle.component.html',
  styleUrls: ['./login-circle.component.css'],
})
export class LoginCircleComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private loginService: LoginService, //
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      funcional: ['', [Validators.required]],
      racf: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onConsultar(): void {
    this.loginService.setLogin(this.form.value);
    this.router.navigateByUrl('/frame');
  }
}
