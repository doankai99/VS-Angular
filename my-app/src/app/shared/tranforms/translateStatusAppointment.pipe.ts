import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateStatusAppointment'
})
export class TranslateStatusAppointmentPipe implements PipeTransform {

  transform(status: number): string {
    switch (status) {
      case 0:
        return 'Cancel';
      case 1:
        return 'Active';
      case 2:
        return 'Done';
      default:
        return status.toString();
    }
  }
}
