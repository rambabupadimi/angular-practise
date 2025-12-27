import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'angularPiPipe'
})
export class AngularPiPipePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    console.log(value,args);
    const postList = value;
    return postList.filter((item:any) => item.title.length<args[0]);
  }

}
