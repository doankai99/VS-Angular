import { Component, Input } from '@angular/core';
import { ProfileCustomerService } from '../shared/profile-customer.service';

@Component({
  selector: 'app-setting-info',
  templateUrl: './setting-info.component.html',
  styleUrls: ['./setting-info.component.less']
})
export class SettingInfoComponent {

  @Input() customerId !: String;
  @Input() customer: any;

  public bodyCustomers: any;

  public constructor(private profileCustomerService: ProfileCustomerService) {

  }

  ngOnInit() {
    this.showBodyOfCustomer(this.customerId);
  }

  public showBodyOfCustomer(id: String) {
    this.profileCustomerService.showBodyOfCustomer(id).subscribe((data) => {
      if (data) {
        this.bodyCustomers = data.bodyCustomer
        console.log(this.bodyCustomers);

      }
    })
  }

}
