import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUsers'
})
export class SearchUsersPipe implements PipeTransform {

  transform(users : any[], searchValue : string ): any {
    if(searchValue == ''){
      users = users
    }
    else {
      users = users.filter(item => {
        return (item.firstName + " " + item.lastName).toString().indexOf(searchValue) != -1;
      })
      console.log("users: -- ", users);
    }
    return users;
  }

}
