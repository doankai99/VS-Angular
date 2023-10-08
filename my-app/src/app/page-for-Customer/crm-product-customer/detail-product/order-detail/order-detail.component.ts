import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/order-process/shared/service/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.less']
})
export class OrderDetailComponent {

  public order: any
  public orderId: any

  public isWithinDateRange: boolean = false;
  constructor(
    private route: ActivatedRoute, private toast: ToastrService, private orderService: OrderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
    });
    this.handleDataOrderDetail()
  }

  public dateSale(startDate: Date, endDate: Date) {
    const currentDate = new Date();
    startDate = new Date(currentDate)
    endDate = new Date(currentDate)
    console.log(startDate);

    if (currentDate >= startDate && currentDate <= endDate) {
      this.isWithinDateRange = true;
    } else {
      this.isWithinDateRange = false;
    }
    console.log(this.isWithinDateRange);

  }

  public handleDataOrderDetail() {
    const id = this.orderId;
    this.orderService.orderDetail(id).subscribe((data) => {
      if (data.order._id) {
        this.order = data.order
        console.log(data.order);

        this.dateSale(data.order?.product[0]?.startDate, data.order?.product[0]?.endDate)
      } else {
        this.toast.error("order false")
      }
    })
  }

}
