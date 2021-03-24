import { Component, Input, OnInit } from '@angular/core';
import { CustumerService } from 'src/app/shared/service/customer.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public customer$ = this.customerService.asCustomer();


  constructor(
    private customerService: CustumerService
  ) { }

  ngOnInit(): void {
  }

}
