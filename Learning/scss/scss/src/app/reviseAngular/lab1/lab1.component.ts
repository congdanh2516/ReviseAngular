import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.scss'],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class Lab1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //icon
  faCircleUser = faCircleUser;
  faInstagram = faInstagram;

}
