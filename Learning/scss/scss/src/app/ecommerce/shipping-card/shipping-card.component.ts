import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-card',
  templateUrl: './shipping-card.component.html',
  styleUrls: ['./shipping-card.component.scss']
})
export class ShippingCardComponent implements OnInit {

  cart : any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

}
