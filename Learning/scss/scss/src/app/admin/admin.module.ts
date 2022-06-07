import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AuthGuard } from '../Guards/auth.guard';

const productRouter : Routes = [
  {path : "product", component : ProductComponent, canActivate : [AuthGuard],
    children : [
      {path : '', component : ProductListComponent},
      {path : ':id',
        children : [
          {path : '', component : ProductDetailComponent},
          {path : 'edit', component : EditProductComponent}
        ]}
    ]},
  {path : "product/:id", component : ProductDetailComponent},
  {path : 'product2', component : ProductDetailComponent}
];


@NgModule({
  declarations: [
    AddProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRouter)
  ]
})
export class AdminModule { }
