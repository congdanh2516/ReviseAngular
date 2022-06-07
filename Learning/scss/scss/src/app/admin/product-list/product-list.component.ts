import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Product } from 'src/app/ecommerce/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product : Product[] = [];

  constructor(private admin_sv :AdminService) { }

  ngOnInit(): void {
    this.admin_sv.getProduct().subscribe(data => {
      let i = 0;
      data.map((item : any) => {
        console.log(item);
        this.product[i] = new Product(item.id, item.productName, item.productDes, item.productPrice);
        i++;
      })
    })
  }

}
