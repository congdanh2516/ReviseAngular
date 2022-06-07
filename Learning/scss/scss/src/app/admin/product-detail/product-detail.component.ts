import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/ecommerce/model/product.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productItem : Product = new Product();

  constructor(private admin_sv : AdminService, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(param => {
      this.admin_sv.getProductDetail(param.id).subscribe((data : any) => {
        data = data[0];
        this.productItem = new Product(data.id, data.productName, data.productDes, data.productPrice);
        console.log('dsf', data);
      })
    })

  
    // this.route.queryParamMap.subscribe(params => {
    //   console.log('params', params.get('id'));
    // })
  }
}
