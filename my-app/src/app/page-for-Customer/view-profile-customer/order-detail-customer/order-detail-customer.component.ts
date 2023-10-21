import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/order-process/shared/service/order.service';

@Component({
  selector: 'app-order-detail-customer',
  templateUrl: './order-detail-customer.component.html',
  styleUrls: ['./order-detail-customer.component.less']
})
export class OrderDetailCustomerComponent {
  public order: any
  public orderId: any

  public isWithinDateRange: boolean = false;
  constructor(private route: ActivatedRoute, public orderService: OrderService, private toast: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
    });
    this.handleDataOrderDetail(this.orderId);
  }

  public handleDataOrderDetail(id: any) {
    this.orderService.orderDetail(id).subscribe((data) => {
      if (data.order) {
        this.order = data.order
        const startDates = this.order.product.map((product: any) => product.startDate)
        const endDates = this.order.product.map((product: any) => product.endDate)
        this.dateSale(startDates, endDates)
      } else {
        this.toast.warning(`Order ${id} not found`)
      }
    })
  }

  public dateSale(startDates: any, endDates: any) {
    const currentDate = new Date();
    startDates = new Date(currentDate);
    endDates = new Date(currentDate)
    if (currentDate >= startDates && currentDate <= endDates) {
      this.isWithinDateRange = true;
    } else {
      this.isWithinDateRange = false;
    }
  }
}
