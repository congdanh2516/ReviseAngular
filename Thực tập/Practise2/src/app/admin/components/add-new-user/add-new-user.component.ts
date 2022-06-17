import { Element } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, Input, OnInit, OnChanges, Renderer2, ViewChild, Output, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit, OnChanges {

  @Input() purpose : boolean; //true: create, false: modify
  @Input() id : string;


  userForm : FormGroup;

  socailCurrently : string ="facebook";
  socialArray : Array<string> = ['','',''];

  //regex
  facebook_reg = /http(?:s)?:\/\/(?:www\.)?facebook\.com\//;
  linkedin_reg = /https:\/\/[a-z]{2,3}\\.linkedin\\.com\\/;
  twitter_reg = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/;

  checkReg : boolean = true;

  monthList = [
    {value : 0, view : 'January'},
    {value : 1, view : 'February'},
    {value : 2, view : 'March'},
    {value : 3, view : 'April'},
    {value : 4, view : 'May'},
    {value : 5, view : 'June'},
    {value : 6, view : 'July'},
    {value : 7, view : 'August'},
    {value : 8, view : 'Septemper'},
    {value : 9, view : 'October'},
    {value : 10, view : 'Novenber'},
    {value : 11, view : 'December'}
  ]

  constructor(private fb : FormBuilder, private renderer: Renderer2, private user_sv : UserService) {
    this.userForm = this.fb.group({
      personal : this.fb.group({
        firstName : ['', [Validators.required]],
        lastName : ['', [Validators.required]],
        date : '',
        month : '',
        year : ''
      }),
      contact : this.fb.group({
        phone : ['', [Validators.required]],
        email : ['', [Validators.required]],
      }),
      other : this.fb.group({
        status : [false, [Validators.required]],
        social : ''
      })
    })
   }

  ngOnInit(): void {
    
  }

  ngOnChanges () {
    if(!this.purpose && this.id != undefined) {
      this.user_sv.getUserById(this.id).subscribe(data => {
        console.log("data", data);
        data.dateOfBirth = new Date(data.dateOfBirth);
        this.userForm.get('personal.firstName')?.setValue(data.firstName);
        this.userForm.get('personal.lastName')?.setValue(data.lastName);
        this.userForm.get('personal.date')?.setValue(data.dateOfBirth.getDate());
        this.userForm.get('personal.month')?.setValue(data.dateOfBirth.getMonth());
        console.log("Month: ", typeof data.dateOfBirth.getMonth());
        this.userForm.get('personal.year')?.setValue(data.dateOfBirth.getFullYear());
        this.userForm.get('contact.email')?.setValue(data.email);
        this.userForm.get('contact.phone')?.setValue(data.phone);
        this.userForm.get('other.status')?.setValue(data.status);
        data.socialLink != undefined ? this.userForm.get('other.social')?.setValue(data.socialLink[0]) : this.userForm.get('other.social')?.setValue('');
        localStorage.setItem('social', JSON.stringify(data.socialLink));
      })
    }
    else {
      this.userForm.reset();
    }
  }

  //update user list
  @Output('updateUserList')
  onHandleUpdateUserList = new EventEmitter<boolean>(); //update : true

  async createNewUser () {
    let newUser = this.createUserObject();
    (await this.user_sv.addNewUser(newUser)).subscribe();
    this.onHandleUpdateUserList.emit(true);

    //update user list
    // setTimeout(() => {
    //   // this.onHandleUpdateUserList.emit(true);
    // }, 500)
  }

  createUserObject () : User {
    let userForm : any = this.userForm.value;
    // console.warn(this.userForm.value);
    let dob : Date = new Date(userForm.personal.year, userForm.personal.month, userForm.personal.date);
    console.log("dob", dob);
    let social : Array<string> = JSON.parse(localStorage.getItem('social') || '[]');
    return new User(userForm.personal.firstName, 
                                  userForm.personal.lastName,
                                  userForm.contact.email,
                                  userForm.contact.phone,
                                  dob,
                                  userForm.other.status,
                                  social
                                  );
  }

  resetAddNewForm () {
    this.userForm.reset();
  }

  modifyUser () {
    let updateUser = this.createUserObject();
    updateUser.setId(this.id);
    this.user_sv.updateUser(updateUser).subscribe();
    
    //update user list
    setTimeout(() => {
      this.onHandleUpdateUserList.emit(true);
    }, 500)
  }

  @ViewChild('linkedin') linkedin : ElementRef;
  @ViewChild('facebook') facebook : ElementRef;
  @ViewChild('twitter') twitter : ElementRef;

  chooseTypeSocail (social : string) {
    
    if(this.socailCurrently != social) {
      this.userForm.get('other.social')?.setValue('');
    }

    let socialArray : any[] = JSON.parse(localStorage.getItem('social') || '[]')

    this.socailCurrently = social;

    if(social == "facebook") {

      this.userForm.get('other.social')?.setValue(socialArray[0]);

      this.renderer.addClass(this.facebook.nativeElement, 'add-new__content__social__icon--active');
      this.renderer.removeClass(this.twitter.nativeElement, 'add-new__content__social__icon--active');
      this.renderer.removeClass(this.linkedin.nativeElement, 'add-new__content__social__icon--active');
    }
    if(social == "linkedin") {

      this.userForm.get('other.social')?.setValue(socialArray[1]);

      this.renderer.addClass(this.linkedin.nativeElement, 'add-new__content__social__icon--active');
      this.renderer.removeClass(this.twitter.nativeElement, 'add-new__content__social__icon--active');
      this.renderer.removeClass(this.facebook.nativeElement, 'add-new__content__social__icon--active');
    }
    if(social == "twitter") {

      this.userForm.get('other.social')?.setValue(socialArray[2]);

      this.renderer.addClass(this.twitter.nativeElement, 'add-new__content__social__icon--active');
      this.renderer.removeClass(this.facebook.nativeElement, 'add-new__content__social__icon--active');
      this.renderer.removeClass(this.linkedin.nativeElement, 'add-new__content__social__icon--active');
    }
  }

  addSocial () {

    if(this.socailCurrently == 'facebook'){
      if(this.facebook_reg.test(this.userForm.get('other.social')?.value)) {
        this.socialArray[0] = this.userForm.get('other.social')?.value;
      }
      else {
        this.checkReg = false;
      }
      
    }
    else if(this.socailCurrently == 'linkedin'){
      if(this.linkedin_reg.test(this.userForm.get('other.social')?.value)) {
        this.socialArray[1] = this.userForm.get('other.social')?.value;
      }
      else {
        this.checkReg = false;
      }
    }
    else {
      if(this.twitter_reg.test(this.userForm.get('other.social')?.value)) {
        this.socialArray[2] = this.userForm.get('other.social')?.value;
      }
      else {
        this.checkReg = false;
      }
    }

    localStorage.setItem('social', JSON.stringify(this.socialArray));

    console.log("Social array", this.socialArray);
  }

  offError () {
    this.checkReg = true;
  }

  test() {
    // if(this.userForm.get('other.status')?.value) {
    //   this.userForm.get('other.status')?.setValue(confirm("Hello"));
    // }
  }

}
