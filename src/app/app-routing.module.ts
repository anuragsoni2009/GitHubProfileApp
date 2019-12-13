import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { FollwersComponent } from './follwers/follwers.component';

const routes: Routes = [
  
{ path: 'details/:id', component: DetailsComponent },
{ path:'', component:ProductsComponent},
{ path:'followers/:id',component: FollwersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
