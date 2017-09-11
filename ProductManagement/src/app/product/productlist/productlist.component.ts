import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @Input() productlist:any[];
  @Output() getProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getProducts(){
    this.getProduct.emit('hello from ProductList');
  }

}
