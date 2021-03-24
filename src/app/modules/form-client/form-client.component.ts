import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{ Customer } from '../../shared/models/customer'
import { CustumerService } from '../../shared/service/customer.service'



@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  form = new FormGroup({
    cpf: new FormControl('', Validators.required),
    agencia: new FormControl('', Validators.required),
    conta: new FormControl('', Validators.required),
    digito: new FormControl('', Validators.required)
  })

  constructor(
    private customerService: CustumerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onConsultar(): void {
    this.customerService.setCustomer(this.form.value);
    this.router.navigateByUrl('/buscar-cpf');
  }

}
