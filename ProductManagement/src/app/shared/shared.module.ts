import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomcurrencyPipe } from '../common/customcurrency.pipe';
//import {FilterarrayPipe} from '../common/filterarray.pipe';
import { HttpClientModule} from '@angular/common/http';
import {MdButtonModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdButtonModule
  ],
  //cannot have CustomcurrencyPipe in app module  since product module will use it & it is lazy loaded .All the c
  //components uses shared module
  declarations: [CustomcurrencyPipe],
  exports:[FormsModule, ReactiveFormsModule,CustomcurrencyPipe,HttpClientModule,MdButtonModule]
})
export class SharedModule { }
