import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any[];
  productTitle:string='Product title from Parent';
  product:string;

  constructor() { }

  ngOnInit() {
    
    this.products = [
      { id: 1, name: 'Product1', price: 100 },
      { id: 2, name: 'Product2', price: 2000 },
      { id: 3, name: 'Product3', price: 3000 }
    ];
  }

  getProductFromChild(product:string){
    this.product=product;

  }

}
