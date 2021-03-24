import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login$: BehaviorSubject<Login> = new BehaviorSubject(
    new Login()
  );

  constructor() {}
  
  asLogin(): Observable<Login> {
    return this.login$.asObservable();
  }
  setLogin(login: Login): void {
    this.login$.next(login);
  }
}



