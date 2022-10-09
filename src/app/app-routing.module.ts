import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';

const routes: Routes = [
  {
    path :'',
    component:HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:'**', pathMatch:'full',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
