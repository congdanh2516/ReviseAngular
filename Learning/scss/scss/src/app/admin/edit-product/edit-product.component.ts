import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("abc", params);
    })
  }

}
