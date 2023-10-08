import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateGender'
})
export class TranslateGenderPipe implements PipeTransform {

  transform(gender: number): string {
    switch (gender) {
      case 0:
        return 'Male';
      case 1:
        return 'Female';
      case 2:
        return 'Other';
      default:
        return gender.toString();
    }
  }
}
