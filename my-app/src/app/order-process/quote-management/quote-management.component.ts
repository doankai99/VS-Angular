import { Component } from '@angular/core';
import { OrderService } from '../shared/service/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quote-management',
  templateUrl: './quote-management.component.html',
  styleUrls: ['./quote-management.component.less']
})
export class QuoteManagementComponent {
  public order: any;

  public isLoading: boolean = false;
  public currentPage: number = 1;
  public pageSize: number = 8;

  constructor(
    private orderService: OrderService, private toast: ToastrService) {
  }

  ngOnInit() {
    this.handleLoadDataInactiveOrder();
  }

  public previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public nextPage() {
    if (this.currentPage * this.pageSize < this.order?.length) {
      this.currentPage++;
    }
  }

  public handleLoadDataInactiveOrder(): void {
    this.isLoading = true
    this.orderService.activeOrder().subscribe((data) => {
      if (data.orderDelivery) {
        this.order = data.orderDelivery
      } else {
        this.toast.error('faile 404')
      }
      this.isLoading = false
    })
  }
}
