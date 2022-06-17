import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatEmail'
})
export class FormatEmailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
