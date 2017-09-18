import { Component, OnInit , ViewChild, ViewChildren, QueryList} from '@angular/core';
import {ProductlistComponent} from './productlist/productlist.component';
import {ProductService} from '../service/product/product.service';
import{Product} from '../service/product/product';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],

})
export class ProductComponent implements OnInit {

product = new Product();
price:number=200;
products:Product[];
  //products: any[];
  // products: Product[];
  // productTitle:string='Product title from Parent';
  // product:string;
  // title:string;
  // @ViewChild(ProductlistComponent)
  // productListComponent : ProductlistComponent;
  // @ViewChildren(ProductlistComponent)
  // productListComp : QueryList<ProductlistComponent>;

  constructor(private productService:ProductService, private route:ActivatedRoute,
  private prodListcomp:ProductlistComponent) {

   }

  // getProduct(){
  //   this.productService.addProducts();
  //   this.productListComponent.getProducts();
  //   this.productListComp.forEach((data)=>data.getProducts());
  // }



  ngOnInit(){
    //this.product = new Product();
    //this is for lazy loading
   // this.route.data.subscribe((data)=>this.products = data['productList']);

   // this.products=this.productService.getProducts().filter((products)=>products.price> this.prodListcomp.getFilteredPrice() );
   //this.products=this.productService.getProducts();
  //  console.log(price);
  this.route.data.subscribe((data) => this.products = data['productList']);
   
  }

  submit(){
    console.log(this.product)
    this.product= new Product();
  }

  //  ngOnInit() {
    
  //   // Added service class so data is fetched from service class
  //   this.products = [
  //     { id: 1, name: 'Product1', price: 100 },
  //     { id: 2, name: 'Product2', price: 2000 },
  //     { id: 3, name: 'Product3', price: 3000 }
  //   ];

  //   this.products =this.productService.getProducts();
  //   this.title='Product Details'
  // }

  // getProductFromChild(product:string){
  //   this.product=product;

  // }

  // getPriceFromChild(price:number){
  //   this.price=price;
  // }

}
