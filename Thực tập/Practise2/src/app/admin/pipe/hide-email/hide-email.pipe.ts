import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideEmail'
})
export class HideEmailPipe implements PipeTransform {

  transform(email: string, ...args: unknown[]): unknown {
    let a_index : number = email.lastIndexOf('@')
    let dot_index : number = email.lastIndexOf('.');
    let new_email = email.substring(0,1);
    for(let i = 1; i < a_index; i++) {
      new_email += "*";
    }
    new_email += email.substring(a_index, a_index + 2);
    for(let i = a_index+2; i < dot_index; i++) {
      new_email += "*";
    }
    new_email += email.substring(dot_index, email.length)
    console.log("slice: ", new_email);
    console.log('a_index', a_index)
    return new_email;
  }

}
