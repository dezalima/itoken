import { Component, Input, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CustumerService } from 'src/app/shared/service/customer.service';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() info: string;
  @Input() disabled: boolean;

  constructor(
    private customerService: CustumerService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }
  onConsultar(): void{
    // this.router.navigateByUrl('/devices')
    // this.customerService.setCostumer(form.value)
    
  }
}
