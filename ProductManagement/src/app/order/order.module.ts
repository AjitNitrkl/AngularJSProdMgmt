import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {OrderComponent} from './order.component';
import {SharedModule} from '../shared/shared.module';
import { AuthGuard} from '../service/guard/auth.guard'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      //we can remove order component import from appmodule
      //multiple guards can passed as array
      {path:'order', component:OrderComponent, canActivate:[AuthGuard]},
    ])
  ],
  declarations: [OrderComponent]
  
})
export class OrderModule { }
