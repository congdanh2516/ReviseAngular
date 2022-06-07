import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss']
})
export class PlaceCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //input
  @Input()  name : string = '';
  @Input() img : string = '';

}
