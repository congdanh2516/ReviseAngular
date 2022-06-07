import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { Card } from '../model/card.model';
import { CartItem } from '../model/cartitem.model';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product : Product[] = [];
  cartItem : CartItem = new CartItem();

  constructor(private product_sv : ProductService, private admin_sv : AdminService, private router : Router) { }

  ngOnInit(): void {

    this.product_sv.getProduct().subscribe((data) => {
      let i = 0;
      data.map((item : any) => {
        this.product[i] = new Product(item.id, item.productName, item.productDes, item.productPrice);
        console.log(this.product[i]);
        i++;
      })
    })    

  }

  addToCard(id : string) {
    this.admin_sv.getProductDetail(id).subscribe((data : any) => {
      data = data[0];
      if(localStorage.getItem('cart')){ //co san pham trong gio hang
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        let found : boolean = false;
        cart.find((item : any) => {
          if(item.productId == id) { //sp pham vua add da ton tai trong gio hang
            item.quantity += 1;
            found = true;
          }
        });
        
        if (found) { 
          localStorage.setItem('cart', JSON.stringify(cart));
        }
        else { //sp vua add chua co trong cart
          let productItem : Product = new Product(id, data.productName, data.productDes, data.productPrice);
          let cartItem = new CartItem(productItem, 1);
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
          console.log(cart);
        }

      }
      else{ //chua them san pham nao vao gio hang - gio hang rong
        let productItem : Product = new Product(id, data.productName, data.productDes, data.productPrice);
        let cartItem = new CartItem(productItem, 1);
        let cart : any[] = [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    })
   
    setTimeout(() => {
      if (confirm("Go to Card")) {
        this.router.navigate(['/product-list/cart']);
      };
    }, 500)
  }

}
