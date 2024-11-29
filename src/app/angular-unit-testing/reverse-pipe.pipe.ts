import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe',
  standalone: true
})
export class ReversePipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    if(value == null || value == undefined || value == '') return '';
    return value.split('').reverse().join('');
  }

}
