import { Component } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.less']
})
export class CustomerManagementComponent {
  public dataCustomer: any;

  constructor(private customerService: CustomerService, private toast: ToastrService) { }

  ngOnInit() {
    this.getCustomer()
  }

  public getCustomer(): void {
    this.customerService.getCustomerService().subscribe((data) => {
      if (data) {
        this.dataCustomer = data.customer
        console.log(this.dataCustomer);
      } else {
        this.toast.error('Get data Customer error')
      }
    })
  }
}
