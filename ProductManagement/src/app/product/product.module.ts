import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { ProductComponent } from './product.component'
import { RouterModule } from '@angular/router';
import {ProductdetailsComponent} from './productdetails/productdetails.component';
import {ProductlistComponent} from './productlist/productlist.component';
import { AuthGuard} from '../service/guard/auth.guard';
import {ProductResolveGuard} from '../service/product/product-resolve.guard'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      //the path is defined at root level in routing to do a lazy loading by default the url will map to this
      { path: '', component: ProductComponent, canActivate:[AuthGuard] ,
      resolve:{
        productList:ProductResolveGuard
      },
      children:[
        {path:':id', component:ProductdetailsComponent}
      ]
    }
    ])
  ],
  declarations: [ProductComponent,ProductdetailsComponent,ProductlistComponent],
  providers:[ProductResolveGuard,ProductlistComponent]
})
export class ProductModule { }
