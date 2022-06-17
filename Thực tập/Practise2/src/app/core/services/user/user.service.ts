import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

const httOptions = {
  headers : new HttpHeaders({'Content-type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api : string = "https://62a6baa097b6156bff7e4fd0.mockapi.io/api/practis2/users";

  userList : any[] = [];

  constructor(private http : HttpClient) { }

  getUsers () : Observable<any> {
    return this.http.get<any>(this.api, httOptions);
  }

  getUserById(id : string) : Observable<any> {
    return this.http.get<User>(this.api + `/${id}`, httOptions);
  }

  async addNewUser (user : User) {
    return this.http.post<User>(this.api, user, httOptions);
  }

  updateUser (user : User) {
    return this.http.put<User>(this.api + `/${user.getId()}`, user, httOptions);
  }

  deleteUser (id : string) {
    return this.http.delete(this.api + `/${id}`, httOptions)
  }

  deleteUsers (idArray : Array<string>) {
    idArray.forEach(item => {
      console.log("delecteUsers: ", item);
      this.deleteUser(item).subscribe();
    })
  }

  sortUsers(users : any, sortBy : string, sortValue : number): Observable<any> {

    console.log("userList: ", this.userList);
    if(sortValue == 0) {
      users = [...this.userList];
    }
    else {
      if (sortBy == "name") {
        users.sort((a : any, b : any) => {
          if (a.firstName > b.firstName) return sortValue;
          else if (a.firstName < b.firstName) return -sortValue;
          else return 0;
        })
      }

      if (sortBy == "email") {
        users.sort((a : any, b : any) => {
          if (a.email > b.email) return sortValue;
          else if (a.email < b.email) return -sortValue;
          else return 0;
        })
      }

      if (sortBy == "phone") {
        users.sort((a : any, b : any) => {
          if (a.phone > b.phone) return sortValue;
          else if (a.phone < b.phone) return -sortValue;
          else return 0;
        })
      }

    }
    return users;
  }

  //check valid date
  amountDateInMonth(month : number, year : number) : number{
    var amountDate : number = 0;
    switch(month){
      case 1: 
        amountDate = 31;
        console.log(amountDate);
        break
      case 2:
        if(year % 400 == 0)
          amountDate = 29;
        else amountDate = 28;
        break;
      case 3:
        amountDate = 31;
        break;
      case 4: 
        amountDate = 30;
        break;
      case 5: 
        amountDate = 31;
        break;
      case 6: 
        amountDate = 30;
        break;
      case 7: 
        amountDate = 31;
        break;
      case 8: 
        amountDate = 31;
        break;
      case 9: 
        amountDate = 30;
        break;
      case 10: 
        amountDate = 31;
        break;
      case 11: 
        amountDate = 30;
        break;
      case 12: 
        amountDate = 31;
        break;
    }

    return amountDate;
  }

  checkValiDate(date : number, month : number, year : number) : boolean {
    console.log(this.amountDateInMonth(month, year));
    if(date > 31 || year < 1890 || date > this.amountDateInMonth(month, year))
      return false;
    return true;
  }
  
}
