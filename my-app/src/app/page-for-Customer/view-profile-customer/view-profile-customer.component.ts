import { Component } from '@angular/core';
import { ProfileCustomerService } from './shared/profile-customer.service';

@Component({
  selector: 'app-view-profile-customer',
  templateUrl: './view-profile-customer.component.html',
  styleUrls: ['./view-profile-customer.component.less']
})
export class ViewProfileCustomerComponent {

  public customer: any;
  public customerId: any = "64fc7c3113123572290c1dd7";
  public activeTab: string = 'A'

  constructor(private profileCustomerService: ProfileCustomerService) {

  }

  ngOnInit() {
    this.getInforCustomer();
  }

  public getInforCustomer(): void {
    const id = this.customerId
    this.profileCustomerService.getDetailCustomer(id).subscribe((data) => {
      console.log(data);
      if (data) {
        this.customer = data.message;
        console.log(this.customer);

      } else {
        alert(`lỗi hiển thị thông tin ${id}`)
      }
    })
  }
}
