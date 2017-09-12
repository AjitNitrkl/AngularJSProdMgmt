import { Component, Inject } from '@angular/core';
import { ProductService} from './service/product/product.service';
import {APP_CONFIG,API_CONFIG} from './service/apiProvider/appConfig';
import { AppConfig } from './service/apiProvider/IAppConfig';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //adding service in providers array & invoking method will not be singleton anymore unless you add in appmodule
  //so want to use service at multiple place then go for appmodule - check more
  providers: [ProductService]
})
export class AppComponent {
  title = 'ProductManagement';
  company = 'CTS';
  isVisisble=false;

  //since we cannot inject interface directly so @Inject is used
  //we can have this feature by defining variable in service but we need to make sure the service is singleton
  //or else the value will be changed but to define an endpoint it has to be a const so use value provider
  constructor(private prodService:ProductService,  @Inject(APP_CONFIG) config: AppConfig ){
    console.log('apiEndPoint -'+config.apiEndpoint);  
  }


toggle(){
  this.isVisisble = !this.isVisisble;
  this.prodService.log();
}
}

