import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { ProductService} from './service/product/product.service';
import {APP_CONFIG,API_CONFIG} from './service/apiProvider/appConfig';
import { AppConfig } from './service/apiProvider/IAppConfig';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [AppComponent, ProductComponent, ProductlistComponent, ProductdetailsComponent],
  imports: [BrowserModule,FormsModule],
  //removed productservice from prov arrays then it is no more singleton. same instance across
  providers:[{provide:ProductService, useClass:ProductService},
    {provide:APP_CONFIG, useValue: API_CONFIG}
  ],
  //below is shortcut of above,  if you want to use another service in place of existing service so in
  //that case only change in above will suffic, no need to change where ever the class is injected
  //useclass will  create new instance useExisting will not create new instances
 // providers: [ProductService],
  bootstrap: [AppComponent]
})


export class AppModule { }
