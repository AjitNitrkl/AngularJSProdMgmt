import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthGuard } from './service/guard/auth.guard'

import { ProductService } from './service/product/product.service';
import { APP_CONFIG, API_CONFIG } from './service/apiProvider/appConfig';
import { AppConfig } from './service/apiProvider/IAppConfig';

import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
//Moved routers to routing module
import { RoutingModule } from './routing/routing.module'
import { OrderModule } from './order/order.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './login/login.component'
import { LoginService } from './service/login/login.service';
import { FilterarrayPipe } from './common/filterarray.pipe';
import { PostComponent } from './post/post.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiInterceptorService} from './service/httpinterceptor/api-interceptor.service';
//import {productServiceFactory} from './service/product/productfactory';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [AppComponent, PagenotfoundComponent, WelcomeComponent, LoginComponent, FilterarrayPipe, PostComponent],
  imports: [BrowserModule, SharedModule, OrderModule, RoutingModule,BrowserAnimationsModule],
  //removed productservice from prov arrays then it is no more singleton. same instance across
  providers: [
   // productServiceFactory,
    { provide: ProductService, useClass: ProductService },
  { provide: APP_CONFIG, useValue: API_CONFIG }, LoginService, AuthGuard,{
    provide:HTTP_INTERCEPTORS, useClass:ApiInterceptorService, multi:true
  }
  ],

  //with out multi:true you will get --Mixing multi and non multi provider is not possible for token InjectionToken_HTTP_INTERCEPTORS
  //below is shortcut of above,  if you want to use another service in place of existing service so in
  //that case only change in above will suffic, no need to change where ever the class is injected
  //useclass will  create new instance useExisting will not create new instances
  // providers: [ProductService],
  bootstrap: [AppComponent],

})


export class AppModule { }
