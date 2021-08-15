import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(input : any[], category:any) {
    if(category == "Select a Category")
    {return input}
      return input.filter(product=>product.category == category);
  }

}
