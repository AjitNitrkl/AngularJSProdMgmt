import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productId:number;
@Input() productDetailsTitle:string;
  constructor(private route:ActivatedRoute) { 
    //+ is used to convert string to number
    this.route.paramMap.subscribe((data) => this.productId= +data.get('id'))

    //Now we can use thisproductId to ge data from backend
  }

  ngOnInit() {
  }

}
