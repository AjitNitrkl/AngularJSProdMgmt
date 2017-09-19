import { Injectable } from '@angular/core';
import {Product} from './product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  products:Product[] =[
    { id: 1, name: 'Product1', price: 100 },
    { id: 2, name: 'Product2', price: 2000 },
    { id: 3, name: 'Product3', price: 3000 }
  ];
  

  constructor() { }

  //good practice to add return type
  //way to convert own service to obseravables
  getProducts():Observable<Product[]>{
    //we will get stream of data not object
   return  Observable.of(this.products);
  }

  addProducts(){
    this.products.push(
      {
        id: 4, name: 'Product4', price: 4000  
      }
    )
  }

  log(){
    console.log('Logged Comment');
  }

}
