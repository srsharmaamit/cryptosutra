import { Pipe, PipeTransform } from '@angular/core';
import { checkForValidNumber } from '@shared/utility/number-utility';

@Pipe({
  name: 'formatNumber',
  standalone: true,
  pure: true,
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number | string, ...args: unknown[]): unknown {
    if (checkForValidNumber(value)) {
      if (args.length > 0) {
        const decimalPlace: number = <number>args[0];
        return typeof value === 'string'
          ? parseFloat(value).toFixed(decimalPlace)
          : (<number>value).toFixed(decimalPlace);
      } else {
        return value;
      }
    }
    return 'Not a numeric value';
  }
}
