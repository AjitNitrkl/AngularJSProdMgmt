import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor  {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log("Interceptor---"+req);
    //can pass token in the interceptor as well  need to clone & make changes cannot change original req
    let request = req.clone({ headers: req.headers.set('newtoken', 'testToken') })
    return next.handle(request);
  }

}
