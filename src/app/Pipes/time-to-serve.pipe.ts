import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToServe'
})
export class TimeToServePipe implements PipeTransform {

  transform(value: string): string {
    return value + " min"
  }

}
