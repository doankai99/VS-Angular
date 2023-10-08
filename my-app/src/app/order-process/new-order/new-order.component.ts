import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/customer-management/shared/customer.service';
import { ProductService } from 'src/app/product-management/shared/product.service';
import { OrderService } from '../shared/service/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.less']
})
export class NewOrderComponent {

  public customer: any;
  public product: any
  private userId: any;

  public form !: FormGroup;

  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    private orderService: OrderService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCustomer();
    this.getProduct();
    this.setForm();
    this.userId = localStorage.getItem('id');
  }

  public setForm() {
    this.form = new FormGroup({
      customer: new FormControl(''),
      product: new FormControl([]),
      quantity: new FormControl('1'),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      shippingAddress: new FormControl(''),
      paymentMethod: new FormControl(''),
    })
  }

  private getCustomer() {
    this.customerService.getCustomerService().subscribe((data) => {
      if (data) {
        this.customer = data.customer
      }
    })
  }

  private getProduct() {
    this.productService.getAllPriceOfPriduct().subscribe((data) => {
      this.product = data.priceOfProducts
    })
  }

  public createNewOrder(): void {
    const params = {
      customer: this.form.controls['customer']?.value,
      product: this.form.controls['product']?.value,
      quantity: this.form.controls['quantity']?.value,
      startTime: this.form.controls['startTime']?.value,
      endTime: this.form.controls['endTime']?.value,
      shippingAddress: this.form.controls['shippingAddress']?.value,
      paymentMethod: this.form.controls['paymentMethod']?.value,
    }
    this.handleAddNewOrder(params);
  }

  public handleAddNewOrder(param: any): void {
    const id = this.userId;
    this.orderService.addNewOrder(id, param).subscribe((data) => {
      if (data) {
        this.toast.success('Add new order success')
        this.router.navigateByUrl('/order/draft-order')
      } else {
        this.toast.error("add new order false")
      }
    })
  }
}
