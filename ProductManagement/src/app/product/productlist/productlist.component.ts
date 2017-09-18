import { Component, OnInit, Input, Output, EventEmitter, OnChanges,SimpleChanges } from '@angular/core';
import { Product } from '../../service/product/product';
import {} from ''

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit , OnChanges {
  @Input() productlist:Product[];
  @Output() getProduct = new EventEmitter<string>();
  //@Output() getPrice = new EventEmitter<number>();
  price:number=0;

  constructor() { }
 
  
  ngOnChanges(changes:SimpleChanges){
    console.log('OnChanges Called');
    console.log(changes);
  }

  ngDoCheck(){
    console.log('DoCheck event called after initialisation after any event.  in textboxEven if you type something');
  }
  ngOnInit() {
    console.log('Product List Component Loaded');
  }

  getProducts(){
    //this.getProduct.emit('hello from ProductList');
    //Emitters are always costly since you are using websockets
    console.log("Viewing Child Info");
  }

  getFilteredPrice(){
    return this.price;
  }

}
