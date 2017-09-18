import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import {OrderComponent} from '../order/order.component';
import {LoginComponent} from '../login/login.component';
import { AuthGuard} from '../service/guard/auth.guard';
import {PostComponent} from '../post/post.component'

@NgModule({
  imports: [
    //this supports ngif,ngfor, in appmodule there is browser module which has commonmodule to support these features
    CommonModule,
    //ForRoot should be configured only once
    RouterModule.forRoot([
      {path:'login' , component:LoginComponent},
      {path:'product', loadChildren:'../product/product.module#ProductModule'},
      {path:'welcome', component:WelcomeComponent, canActivate:[AuthGuard]},
      {path:'post', component:PostComponent},
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path:'**', component:PagenotfoundComponent}

      
    ])
  ],
  declarations: [],
  //giving functionality back to the app module about routing paths
  exports:[RouterModule]
})
export class RoutingModule { }
