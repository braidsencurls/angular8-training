import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDecorator'
})
export class MyDecoratorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return '~~~~ ' + value + ' ~~~~' + args;
  }

}
