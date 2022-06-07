import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../ecommerce/model/product.model';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  getProduct () {
    let api = "http://localhost:3000/product";
    console.log(this.http.get<Product[]>(api, httpOptions));
    return this.http.get<Product[]>(api, httpOptions);
  }

  getProductDetail (id : string) {
    let api = "http://localhost:3000/product";
    let param1 = new HttpParams().set('id', id);
    return this.http.get<Product>(api, {params : param1});
  }
}
