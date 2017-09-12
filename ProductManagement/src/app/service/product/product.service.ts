import { Injectable } from '@angular/core';
import {Product} from './product'

@Injectable()
export class ProductService {

  products:Product[];

  constructor() { }

  //good practice to add return type
  getProducts():Product[]{
   return  this.products= [
      { id: 1, name: 'Product1', price: 100 },
      { id: 2, name: 'Product2', price: 2000 },
      { id: 3, name: 'Product3', price: 3000 }
    ];
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
