import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Product} from './product';
import { ProductService} from './product.service'

@Injectable()
export class ProductResolveGuard implements Resolve<Product[]> {

  constructor(private productService :ProductService ){

  }
// there might be req some data should be loaded while access the url

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     Observable<Product[]> | Promise<Product[]>| Product[] {

      return this.productService.getProducts()

    }

 
}
