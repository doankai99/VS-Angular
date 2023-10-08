import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/order-process/shared/service/order.service';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.less']
})
export class CustomerOrderComponent {
  @Input() public product: any;
  @Input() public productId: any;
  public isOpen: boolean = false;

  public customerId: any;
  public form !: FormGroup;

  constructor(private orderService: OrderService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit() {
    console.log(this.productId);
    console.log(this.product);

    this.setForm();
    this.customerId = localStorage.getItem('id')
  }

  public isOpenOrder() {
    this.isOpen = !this.isOpen
  }

  public setForm() {
    this.form = new FormGroup({
      product: new FormControl(this.productId),
      quantity: new FormControl(''),
      shippingAddress: new FormControl(''),
      paymentMethod: new FormControl(''),
    })
  }

  public createNewOrder(): void {
    const params = {
      product: this.form.controls['product']?.value,
      quantity: this.form.controls['quantity']?.value,
      shippingAddress: this.form.controls['shippingAddress']?.value,
      paymentMethod: this.form.controls['paymentMethod']?.value,
    }
    this.handleAddOrder(params);
    console.log(params);

  }

  public handleAddOrder(param: any) {
    const id = this.customerId;
    this.orderService.addNewOrderByCustomer(id, param).subscribe((data) => {
      if (data.order._id) {
        this.router.navigateByUrl(`/order/order-detail/${data.order?._id}`)
        this.toast.success('order product success')
      } else {
        this.toast.error('order false')
      }
      this.isOpenOrder()
    })
  }
}
