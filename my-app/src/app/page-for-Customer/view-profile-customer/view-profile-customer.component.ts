import { Component } from '@angular/core';
import { ProfileCustomerService } from './shared/profile-customer.service';

@Component({
  selector: 'app-view-profile-customer',
  templateUrl: './view-profile-customer.component.html',
  styleUrls: ['./view-profile-customer.component.less']
})
export class ViewProfileCustomerComponent {

  public customer: any;
  public customerId: any = localStorage.getItem('id');
  public activeTab: string = 'C'

  constructor(private profileCustomerService: ProfileCustomerService) {

  }

  ngOnInit() {
    this.getInforCustomer();
  }

  public getInforCustomer(): void {
    const id = this.customerId;
    this.profileCustomerService.getDetailCustomer(id).subscribe((data) => {
      console.log(data);
      if (data) {
        this.customer = data.message;
      } else {
        alert(`lỗi hiển thị thông tin ${id}`)
      }
    })
  }
}
