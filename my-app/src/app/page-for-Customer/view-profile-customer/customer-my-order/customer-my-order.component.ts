import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/order-process/shared/service/order.service';

@Component({
  selector: 'app-customer-my-order',
  templateUrl: './customer-my-order.component.html',
  styleUrls: ['./customer-my-order.component.less']
})
export class CustomerMyOrderComponent {
  public customerId: any;
  public order: any;
  public selectedImage: any;
  public currentPage: number = 1;
  public pageSize: number = 3;

  constructor(private orderService: OrderService, private toast: ToastrService) { }

  ngOnInit() {
    this.customerId = localStorage.getItem('id')
    this.orderOfCustomer()
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage * this.pageSize < this.order.length) {
      this.currentPage++;
    }
  }

  public orderOfCustomer() {
    const id = this.customerId
    this.orderService.orderCustomer(id).subscribe((data) => {
      if (data.order) {
        this.order = data.order
        // this.defaultImage(this.order);
      } else {
        this.toast.warning('You have not placed any orders yet')
      }
    })
  }
  // public defaultImage(orders: any) {
  //   this.selectedImage = orders?.product[0]?.productId?.image;
  // }
  // selectImage(image: any) {
  //   this.selectedImage = image?.productId?.image;
  // }
}
