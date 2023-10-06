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

  public handleChangeStatus(id: any) {

  }
}
