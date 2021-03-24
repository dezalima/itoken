import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustumerService {
  private customers$: BehaviorSubject<Customer> = new BehaviorSubject(
    new Customer()
  );

  constructor() { }

  asCustomer(): Observable<Customer>{
    return this.customers$.asObservable();
  }
  setCustomer(customer: Customer): void{
    this.customers$.next(customer);
  }
  
}
