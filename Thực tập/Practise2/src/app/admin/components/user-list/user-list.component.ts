import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { SignInService } from 'src/app/core/services/sign-in/sign-in.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { AddNewUserComponent } from '../add-new-user/add-new-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  p : number = 1;
  itemsPerPage : number = 3;

  userList : any = [];

  //filter
  status : string = "all";

  //sort 
  sortBy : string = "";
  sortValue : number = 0; //0: default, 1: increase, 2 descrease

  //search
  searchValue : string = "";

  //modify
  modify_var : boolean = false;

  //create
  create_var : boolean = false;

  //purpose: create: true or modify: false
  purpose : boolean = true;
  id : string;

  //checkbox delete
  checkboxDelete : boolean = false;
  modify_click : boolean = false;


  constructor(private user_sv : UserService, private signIn : SignInService, private addNewCpn : AddNewUserComponent) { }

  ngOnInit(): void {
    console.log("Sign in: ", this.signIn.isAuthorize);
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    }
    else {
      localStorage.removeItem('foo');
    }
    this.getUserList();
  }

  getUserList () {
    this.user_sv.getUsers().subscribe(data => {
      this.userList = data;

      this.user_sv.userList = [...data];

      this.userList.forEach((item : any) => {
        item.dateOfBirth = new Date(item.dateOfBirth);
      })
      console.log("data", data);
    })
  }

  changePage (value : string) {
    this.p = 1;
    if(value != '') {
      this.itemsPerPage < 5 ? this.itemsPerPage = this.itemsPerPage : this.itemsPerPage = 5;
    }
  }

  transferPage (value : any) {
    this.p = value;
    this.id = this.itemsPerPage * (this.p - 1) + 1 + "";
  }


  // @ViewChild('action__edit') action__edit : QueryList<any>;
  // ngAfterViewInit () {
  //   console.log("action__edit", this.action__edit);
  // }

  @ViewChild('usersTable') usersTable : ElementRef;
  @ViewChild('addNew') addNew : ElementRef;
  @ViewChild('checkboxStatus') checkboxStatus : ElementRef;

  modify () {
    this.purpose = false;
    this.modify_var = !this.modify_var;
    !this.create_var ? this.modify_click = false : this.modify_click = true;
    this.create_var = false;
    if(!this.modify_var) {
      this.usersTable.nativeElement.style.width = '100%';
      this.usersTable.nativeElement.style.fontSize = '22px';
      this.addNew.nativeElement.style.display = 'none';
    }
  }
  modifyEdit (id : string) {
    this.modify_click = true;
    this.purpose = false;
    this.id = id;
    console.log(this.purpose + this.id);
    this.usersTable.nativeElement.style.fontSize = '16px';
    this.usersTable.nativeElement.style.width = '60%';
    this.addNew.nativeElement.style.display = 'inline-block';
  }

  modifyStatus (id : string, value : boolean) {
    if((value == false) || (value == true && confirm("Suspended???"))){
      let modifyStatusUser : User = new User();
      this.user_sv.getUserById(id).subscribe(async data => {
        data.status = !value;
        modifyStatusUser = new User(data.firstName, data.lastName, data.email, data.phone, data.dateOfBirth, data.status, data.social);
        console.log("modifyUser: ", modifyStatusUser);
        // modifyStatusUser.setStatus(!value);
        modifyStatusUser.setId(id);
        this.user_sv.updateUser(modifyStatusUser).subscribe();
        setTimeout(() => {
          this.getUserList();
        }, 200)
      })
    } 
    else if (value == true) {
      const ele = document.getElementById(id) as HTMLInputElement;
      ele.checked = true;
    }
  }

  create () {
    this.purpose = true;
    this.create_var = !this.create_var;
    if (this.create_var) {
      this.usersTable.nativeElement.style.fontSize = '16px';
      this.usersTable.nativeElement.style.width = '60%';
      this.addNew.nativeElement.style.display = 'inline-block';
    }
    else {
      this.usersTable.nativeElement.style.width = '100%';
      this.usersTable.nativeElement.style.fontSize = '22px';
      this.addNew.nativeElement.style.display = 'none';
    }

    localStorage.removeItem('social');

  }

  checkCheckbox () {
    this.checkboxDelete = false;
    let deleteUsers : any = document.getElementsByName("deleteUsers");
    deleteUsers.forEach((item : any) => {
      if(item.checked) {
        this.checkboxDelete = true;
      }
    })
  }

  @ViewChild('deleteUsers') deleteUsers_var : QueryList<any>;
  deleteUsers () {
    if(confirm("Delete these users ?")) {
      let deleteUsers : any = document.getElementsByName("deleteUsers");
      let deleteArray : Array<string> = [];
      deleteUsers.forEach((item : any) => {
        if(item.checked) {
          deleteArray.push(item.value)
        }
      })
      console.log("deleteUsers: ", deleteArray)
      this.user_sv.deleteUsers(deleteArray);
      this.checkboxDelete = false;

      //update user list
      setTimeout(() => {
        this.getUserList();
      }, 300)
    }
  }

  sortBy_previous : string = '';

  sort (attr : string) {
    this.sortBy = attr;
    if(this.sortBy_previous != attr){
      this.sortValue = 1;
    }
    else {
      if(this.sortValue == 0){
        this.sortValue = 1;
      }
      else if(this.sortValue == 1){
        this.sortValue = -1;
      }
      else {
        this.sortValue = 0;
      }
    }
    console.log("sortBy: ", this.sortBy, "sortValue: ", this.sortValue);

    // this.userList = this.user_sv.sortUsers(this.userList, this.sortBy, this.sortValue);
    // console.log("dj,dfsjgf", this.userList);

    this.sortBy_previous = this.sortBy;
  }

  searchByName () {

  }

  //update user list
  onUpdateUserList (value : any) {
    this.getUserList();
    if (this.purpose) {
      this.p = Math.floor(this.userList.length / this.itemsPerPage);
      if ( this.userList.length % this.itemsPerPage >= 0){
        this.p += 1;
      }
      else if ( this.userList.length % this.itemsPerPage == 0){
        this.p += 1;
      }
      console.log("p: ", this.p);
    }
  }
 
}
