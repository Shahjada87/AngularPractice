import { Pipe , PipeTransform } from '@angular/core';

@Pipe(
  {name: 'sentencecase'}
)
export class SentenCasePipe implements PipeTransform{
  transform(str:any){
    let firstChar = str.charAt(0);
    let restChar = str.substring(1);
    let result = firstChar.toUpperCase() + restChar.toLowerCase();
    return result;
  }
}
