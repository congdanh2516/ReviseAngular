import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lab1Component } from './reviseAngular/lab1/lab1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Lab2Component } from './reviseAngular/lab2/lab2.component';
import { TopDestinationComponent } from './reviseAngular/top-destination/top-destination.component';
import { PlaceCardComponent } from './reviseAngular/top-destination/place-card/place-card.component';
import { Sibling1Component } from './reviseAngular/comunicationsiblingcomponents/sibling1/sibling1.component';
import { Sibling2Component } from './reviseAngular/comunicationsiblingcomponents/sibling2/sibling2.component';
import { SiblingcomunicationComponent } from './reviseAngular/comunicationsiblingcomponents/siblingcomunication/siblingcomunication.component';
import { ProductListComponent } from './ecommerce/product-list/product-list.component';
import { ShippingCardComponent } from './ecommerce/shipping-card/shipping-card.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    Lab1Component,
    Lab2Component,
    TopDestinationComponent,
    PlaceCardComponent,
    Sibling1Component,
    Sibling2Component,
    SiblingcomunicationComponent,
    ProductListComponent,
    ShippingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
