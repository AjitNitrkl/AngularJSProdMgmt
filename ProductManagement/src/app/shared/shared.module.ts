import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomcurrencyPipe } from '../common/customcurrency.pipe';
//import {FilterarrayPipe} from '../common/filterarray.pipe';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  //cannot have CustomcurrencyPipe in app module  since product module will use it & it is lazy loaded .All the c
  //components uses shared module
  declarations: [CustomcurrencyPipe],
  exports:[FormsModule, ReactiveFormsModule,CustomcurrencyPipe,HttpClientModule]
})
export class SharedModule { }
