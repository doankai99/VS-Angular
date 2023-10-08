import { Component } from '@angular/core';
import { OrderService } from '../shared/service/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-draft-order',
  templateUrl: './draft-order.component.html',
  styleUrls: ['./draft-order.component.less']
})
export class DraftOrderComponent {

  public isLoading: boolean = false;

  public inactiveOrder: any;

  currentPage: number = 1;
  pageSize: number = 8;

  constructor(
    private orderService: OrderService, private toast: ToastrService) {
  }

  ngOnInit() {
    this.handleLoadDataInactiveOrder()
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage * this.pageSize < this.inactiveOrder?.length) {
      this.currentPage++;
    }
  }

  public handleLoadDataInactiveOrder(): void {
    this.isLoading = true
    this.orderService.inactiveOrder().subscribe((data) => {
      if (data) {
        this.inactiveOrder = data.inactiveOrder
      } else {
        this.toast.error('faile 404')
      }
      this.isLoading = false
    })
  }
}
