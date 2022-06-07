import { Component, OnInit } from '@angular/core';
import { SiblingcomunicationService } from 'src/app/service/siblingcomunication.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.scss']
})
export class Sibling1Component implements OnInit {

  name : string;

  constructor(private share : SiblingcomunicationService) { }

  ngOnInit(): void {
    this.share.getMessage().subscribe(message => {
      this.name = message;
      console.log(message);
    })
  }

  inputOnChange () {
    this.share.sendMessage(this.name);
  }

}
