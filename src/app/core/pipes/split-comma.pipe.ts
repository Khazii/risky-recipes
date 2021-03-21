import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitComma',
})
export class SplitCommaPipe implements PipeTransform {
  transform(val: string): string[] {
    return val.split(',');
  }
}
