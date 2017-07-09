import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroUsers',
  pure: false
})
export class FiltroUsersPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value.lenght === 0 || args === undefined) {
      return value;
    }

    let filter = args.toLocaleLowerCase();
    let algo = value.filter(
      v => v.name.toLocaleLowerCase().indexOf(filter) != -1 || v.email.toLocaleLowerCase().indexOf(filter) != -1
    );
    
    return algo;
  }

}
