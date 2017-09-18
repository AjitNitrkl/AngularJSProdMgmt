import { Component, OnInit } from '@angular/core';
import {Login} from '../service/login/login';
import { Router } from '@angular/router';
import { LoginService} from '../service/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login;
  isLoggedIn:boolean;
  constructor(private routerService:Router, private loginService:LoginService) { }

  ngOnInit() {
    this.login = new Login();
  }

  loginUser(){
      // if (this.login.userName === 'test' && this. login.password === 'test') {
      //   this.isLoggedIn = true;
      //   this.routerService.navigate(['/welcome']);
      // }else{
      //   this.login = new Login();
      //   this.routerService.navigate(['/login']);
      // }
      let result = this.loginService.login(this.login);
      if(result){
        this.routerService.navigate(['/welcome']);
      }
    }
  
  

}
