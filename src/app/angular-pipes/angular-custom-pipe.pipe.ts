import { OnChanges, OnInit, Pipe, PipeTransform, SimpleChanges } from '@angular/core';

@Pipe({
  name: 'angularCustomPipe',
  standalone: true,
  pure:true
})
export class AngularCustomPipePipe implements PipeTransform {


  transform(value: any, ...args: any[]): string[] {
    console.log('called');
    return value.filter((item:any) => item.length >= args[0])
  }
}
