import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/order-process/shared/service/order.service';

@Component({
  selector: 'app-order-created-by-staff',
  templateUrl: './order-created-by-staff.component.html',
  styleUrls: ['./order-created-by-staff.component.less']
})
export class OrderCreatedByStaffComponent {
  public isLoading: boolean = false;
  public currentPage: number = 1;
  public pageSize: number = 8;
  public userId: any;
  public selectedImageURL: any;

  public orderCreated: any;
  constructor(
    private orderService: OrderService, private toast: ToastrService) {
  }

  ngOnInit() {
    this.userId = localStorage.getItem('id')
    this.handleDataOrderCreated()
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage * this.pageSize < this.orderCreated?.length) {
      this.currentPage++;
    }
  }

  public handleDataOrderCreated(): void {
    const id = this.userId
    this.orderService.handleOrderCreated(id).subscribe((data) => {
      if (data) {
        this.orderCreated = data.order
        console.log(this.orderCreated);

      }
    })
  }
}
