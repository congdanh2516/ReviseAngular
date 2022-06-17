import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatusUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(users: any[], status : string): any {
    if(status == "all") {
      users = users;
    }
    else {
      users = users.filter(item => {
        return item.status.toString().toUpperCase().indexOf(status.toUpperCase()) != -1;
      })
    }
    return users;
  }

}
