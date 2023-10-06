import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateStatus'
})
export class TranslateStatusPipe implements PipeTransform {

  transform(status: number): string {
    switch (status) {
      case 0:
        return 'close';
      case 1:
        return 'Inactive';
      case 2:
        return 'Active';
      case 3:
        return 'Doing';
      case 4:
        return 'Delivering';
      case 5:
        return 'Done';
      default:
        return status.toString();
    }
  }

}
