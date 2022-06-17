import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { UserListComponent } from '../../components/user-list/user-list.component';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  constructor (private user_sv : UserService, private user_list : UserListComponent) {

  }

  transform(users : any, sortBy : string, sortValue : number): any {

    console.log("userList: ", this.user_sv.userList);
    if(sortValue == 0 && this.user_list.searchValue == '') {
      users = [...this.user_sv.userList];
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

      if (sortBy == "status") {
        users.sort((a : any, b : any) => {
          if (a.status > b.status) return sortValue;
          else if (a.status < b.status) return -sortValue;
          else return 0;
        })
      }


    }
    return users;
  }

}
