import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/order-process/shared/service/order.service';

@Component({
  selector: 'app-management-order',
  templateUrl: './management-order.component.html',
  styleUrls: ['./management-order.component.less']
})
export class ManagementOrderComponent {
  public isLoading: boolean = false;

  public activeOrder: any;

  currentPage: number = 1;
  pageSize: number = 3;
  public status = [
    { label: 'close', value: 0 },
    { label: 'Inactive', value: 1 },
    { label: 'Active', value: 2 },
    { label: 'Doing', value: 3 },
    { label: 'Delivering', value: 4 },
    { label: 'Done', value: 5 }
  ];

  constructor(
    private orderService: OrderService, private toast: ToastrService) {
  }

  ngOnInit() {
    this.handleLoadDataOrderActive()
  }

  public statusOrder = {
    CLOSE_STATUS: 0,
    INACTIVE_STATUS: 1,
    ACTIVE_STATUS: 2,
    DOING_STATUS: 3,
    DELIVERY_STATUS: 4,
    DONE_STATUS: 5
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage * this.pageSize < this.activeOrder?.length) {
      this.currentPage++;
    }
  }

  public handleLoadDataOrderActive(): void {
    this.isLoading = true
    this.orderService.activeOrder().subscribe((data) => {
      if (data) {
        this.activeOrder = data.order
      } else {
        this.toast.error(data.message)
      }
      this.isLoading = false
    })
  }

  public handleLoadData() {
    this.handleLoadDataOrderActive
  }

  public handleUpdateStatusOrder(id: any, status: number): void {
    const data = {
      status: status
    }
    this.orderService.handleUpdateStatus(id, data).subscribe(() => {
      this.toast.success('change status order success')
      this.handleLoadDataOrderActive();
    }, () => {
      this.toast.error('change status order false')
    })
  }
}
