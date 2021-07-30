import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], filterTerm: string): any {
    if(filterTerm === "low to high")
    return products.sort((x,y)=> x.price - y.price )
    else if(filterTerm === "high to low")
    return products.sort((x,y)=> y.price - x.price )
    else if(filterTerm === "rating")
    return products.sort((x,y)=> y.rating - x.rating )
    else if(filterTerm === "name")
    return products.sort((a, b) => a.title.localeCompare(b.title))
    else
    return products
    
    
  }

}
