import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, TemplateRef, Renderer2 } from '@angular/core';
import { TopDes } from 'src/app/model/top-des.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-top-destination',
  templateUrl: './top-destination.component.html',
  styleUrls: ['./top-destination.component.scss']
})
export class TopDestinationComponent implements OnInit, AfterViewInit {

  infoForm : FormGroup; 
  constructor(private renderer: Renderer2, private el: ElementRef, private fb : FormBuilder) { 
    console.log("This is constructor");
    
    // this.infoForm = new FormGroup({
    //   personal : new FormGroup({
    //     firstName : new FormControl(''),
    //     lastName : new FormControl('')
    //   }),
    //     contact : new FormGroup({
    //     phone : new FormControl(''),
    //     email : new FormControl('')
    //   })
    // })

    this.infoForm = this.fb.group({
      personal : this.fb.group({
        firstName : ['', [Validators.required, Validators.minLength(3)]],
        lastName : ''
      }),
        contact : this.fb.group({
        phone : ['', [, Validators.min(25)]],
        email : ['', [Validators.required, Validators.email]]
      })
    })
    
    console.log(this.infoForm.get('personal.firstName'));
  }

  topDes : any = [];
  private imgPath = "../../../assets/images/";

  province : any =[];

  ngOnInit(): void {
    console.log("This is ngOnInit");
    this.topDes = [
      new TopDes(this.imgPath + "newyork.jpg", "New York"),
      new TopDes(this.imgPath + "london.jpg", "Lon Don"),
      new TopDes(this.imgPath + "kulalumpur.jpg", "Kula Lumpur"),
      new TopDes(this.imgPath + "paris.jpg", "Paris")
    ];
    this.province = [
      {name : "An Giang", id : 67},
      {name : "Kien Giang", id : 68},
      {name : "Can Tho", id : 65},
      {name : "Ca Mau", id : 69}
    ];

    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world!');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
  }


  reloadTopDes () {
    this.topDes = [
      new TopDes(this.imgPath + "newyork.jpg", "New York"),
      new TopDes(this.imgPath + "london.jpg", "Lon Don"),
      new TopDes(this.imgPath + "kulalumpur.jpg", "Kula Lumpur"),
      new TopDes(this.imgPath + "paris.jpg", "Paris")
    ]
  }

  trackById (index : any, item : any) {
    return item.id;
  }

 
  @ViewChild("provinceList") proList : ElementRef;
  testAddClass : boolean = true;

 reloadProvince () {
  this.province = [
    {name : "An Giang", id : 67},
    {name : "Kien Giang", id : 68},
    {name : "Can Tho", id : 65},
    {name : "Ca Mau", id : 69},
    {name : "Vinh Long", id : 64}
  ];

  if(this.testAddClass){
    this.renderer.addClass(this.proList.nativeElement, "test1");
    this.renderer.setStyle(this.proList.nativeElement, "font-weight", "bold");
  }
  else {
    this.renderer.removeClass(this.proList.nativeElement, "test1");
  }
  this.testAddClass=!this.testAddClass;
  
 }


 @ViewChild('name') lastName : ElementRef;
 
 ngAfterViewInit () {
  this.lastName.nativeElement.focus();
  console.log(this.lastName); 
 }

 submit() {
   
 }


 account : {username : string, password : string} = {username : "", password : ""};

 signUp () {
  console.log(this.account);
  console.log();
 }

}