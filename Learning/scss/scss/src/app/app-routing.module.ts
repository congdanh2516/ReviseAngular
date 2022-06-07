import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './ecommerce/product-list/product-list.component';
import { ShippingCardComponent } from './ecommerce/shipping-card/shipping-card.component';
import { AuthGuard } from './Guards/auth.guard';
import { SiblingcomunicationComponent } from './reviseAngular/comunicationsiblingcomponents/siblingcomunication/siblingcomunication.component';
import { TopDestinationComponent } from './reviseAngular/top-destination/top-destination.component';

const routes: Routes = [
  {path: "home", component: TopDestinationComponent},
  {path: "", redirectTo: "/home",pathMatch: 'full'},
  {path: "siblingcomunication", component: SiblingcomunicationComponent},
  {path: "product-list", children : [
    {path : '',  component : ProductListComponent},
    {path : 'cart', component : ShippingCardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
