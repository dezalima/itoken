import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}
