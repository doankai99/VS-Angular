import { Component } from '@angular/core';
import { ProfileCustomerService } from 'src/app/page-for-Customer/view-profile-customer/shared/profile-customer.service';

@Component({
  selector: 'app-body-measurement',
  templateUrl: './body-measurement.component.html',
  styleUrls: ['./body-measurement.component.less']
})
export class BodyMeasurementComponent {

  public bodyMen: any;
  public bodyWomen: any;

  constructor(private bodyMeasurement: ProfileCustomerService) {

  }

  ngOnInit() {
    this.getInfoBodyMeasurements();
  }

  public getInfoBodyMeasurements() {
    this.bodyMeasurement.getBodyMeasurements().subscribe((data) => {
      if (data) {
        this.bodyMen = data.bodyMen;
        this.bodyWomen = data.bodyWomen;
        console.log(this.bodyMen);
      }
    })
  }
}
