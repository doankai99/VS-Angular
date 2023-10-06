import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/customer-management/shared/customer.service';
import { ProductService } from 'src/app/product-management/shared/product.service';
import { OrderService } from '../../shared/service/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-confirm-order-inactive',
  templateUrl: './edit-confirm-order-inactive.component.html',
  styleUrls: ['./edit-confirm-order-inactive.component.less']
})
export class EditConfirmOrderInactiveComponent {
  public customer: any;
  public product: any

  public isOpenEdit: boolean = false;
  public isOpenConfirm: boolean = false;

  @Input() public orderId: any

  public form !: FormGroup;

  constructor(
    private customerServer: CustomerService,
    private productService: ProductService,
    private orderService: OrderService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.handleCustomer();
    this.handleProduct();
    this.setForm();
  }

  public isPopUpEdit() {
    this.isOpenEdit = !this.isOpenEdit;
  }
  public isPopUpConfirm() {
    this.isOpenConfirm = !this.isOpenConfirm;
  }

  public setForm() {
    this.form = new FormGroup({
      customer: new FormControl(''),
      product: new FormControl([]),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      shippingAddress: new FormControl(''),
      paymentMethod: new FormControl(''),
    })
  }

  public handleCustomer(): void {
    this.customerServer.getCustomerService().subscribe((data) => {
      if (data) {
        this.customer = data.customer
      }
    })
  }

  public handleProduct() {
    this.productService.getAllPriceOfPriduct().subscribe((data) => {
      if (data) {
        this.product = data.priceOfProducts
      }
    })
  }

  public confirmActiveOrder() {
    const id = this.orderId
    this.orderService.confirmActiveOrder(id).subscribe((data) => {
      if (data) {
        this.toast.success(`confirm order ${id} success`)
        this.router.navigateByUrl('/management-order')
      } else {
        this.toast.error(data.message)
      }
    })
  }

  public editOrder() {

  }
}
