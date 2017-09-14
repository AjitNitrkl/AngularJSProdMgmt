import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {validateMonth} from '../service/customValidator/monthValidator';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm:FormGroup;
  constructor(private fb:FormBuilder) { 
 
  }

  ngOnInit() {
    this.orderForm=this.fb.group({
      firstName:['', Validators.required],
      lastName:['',Validators.required],
      price:['',Validators.required],
      qty:['',Validators.required],
      address: this.fb.group({
        addressLine1:['',Validators.required],
        addressLine2:[''],
        state:['IL',Validators.required],
        city:['',Validators.required],
        zip:['',Validators.required]
      }),

      cards:this.fb.array([
        this.buildForm()
      ])
    });
  }

  buildForm() {
    return this.fb.group({
      cardNumber:['',Validators],
      month:['',Validators.required,validateMonth],
      year:['',Validators.required],
      cvv:['',Validators.required]
    })
  }

  addCard(){
    let cardControl = <FormArray>this.orderForm.controls['cards'];
    cardControl.push(this.buildForm());
  }

  removeCard(i:number){
    let cardControl = <FormArray>this.orderForm.controls['cards'];
    cardControl.removeAt(i);
  }

  submit(){
    console.log(this.orderForm.value);
  }


}
