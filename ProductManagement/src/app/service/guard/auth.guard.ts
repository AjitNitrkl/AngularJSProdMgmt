import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private routerService:Router ){

  }
  //loginservice is singleton on refresh the state is lost so we need to login again

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.loginService.isLoggedIn){
        return true;
      }
      this.routerService.navigate(['/login']);
      return false;
  }
}
