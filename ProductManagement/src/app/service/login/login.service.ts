import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable()
export class LoginService {
  isLoggedIn:boolean;

  constructor() { }

  login(login:Login){
    if(login.userName === 'test' && login.password==='test'){
      this.isLoggedIn=true;
      return true
    }
    return false;
  }

}
