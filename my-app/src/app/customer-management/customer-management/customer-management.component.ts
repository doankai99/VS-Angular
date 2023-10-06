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
  public isLoading: boolean = false;
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(private customerService: CustomerService, private toast: ToastrService) { }

  ngOnInit() {
    this.getCustomer()
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage * this.pageSize < this.dataCustomer.length) {
      this.currentPage++;
    }
  }

  public handleLoadData() {
    this.getCustomer()
  }

  public getCustomer(): void {
    this.customerService.getCustomerService().subscribe((data) => {
      if (data) {
        this.dataCustomer = data.customer
      } else {
        this.toast.error('Get data Customer error')
      }
    })
  }
}
