import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders ({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProduct () {
    let api = "http://localhost:3000/product";
    return this.http.get<Product[]>(api, httpOptions);
  }
}
