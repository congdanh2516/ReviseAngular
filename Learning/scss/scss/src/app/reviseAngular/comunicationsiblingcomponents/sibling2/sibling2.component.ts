import { Component, OnInit } from '@angular/core';
import { SiblingcomunicationService } from 'src/app/service/siblingcomunication.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.scss']
})
export class Sibling2Component implements OnInit {

  name : string;

  constructor(private share : SiblingcomunicationService) { }

  ngOnInit(): void {
    this.share.getMessage().subscribe(message => {
      this.name = message;
      console.log(message);
    })
  }

  inputOnChange2 () {
    this.share.sendMessage(this.name);
  }

}
