import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: any[], sort?: boolean, reverse?:boolean) {
    if (sort == true) {
      value.sort();
      return value;
    } else if (reverse== true){
      value.sort();
      value.reverse();
      return value;
    }else{
      return value;
    }
  }
}
