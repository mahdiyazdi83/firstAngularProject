import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'don'
})
export class DonPipe implements PipeTransform {

  transform(value: number): string {
    if (value == 1) {
      return "Domestic"
    } else {
      return "International"
    }
  }
}
