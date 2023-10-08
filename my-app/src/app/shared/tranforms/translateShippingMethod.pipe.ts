import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translatePaymentMethod'
})
export class TranslateShippingMethodPipe implements PipeTransform {

  transform(shippingMethod: number): string {
    switch (shippingMethod) {
      case 0:
        return 'Direct Bank Transfer';
      case 1:
        return 'Cash on Delivery';
      case 2:
        return 'Paypal';
      case 3:
        return 'Other';
      default:
        return shippingMethod.toString();
    }
  }
}
